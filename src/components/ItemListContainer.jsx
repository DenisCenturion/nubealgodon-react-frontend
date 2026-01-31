import { useState, useEffect } from "react";
import { ItemListWithLoading } from "./ItemListWithLoading";
import { useParams, useLocation } from "react-router";
import { getProducts, getProductsByCategory } from "../firebase/db";
import FilterPanel from "./FilterPanel";
import SortBar from "./SortBar";
import MobileFilterDrawer from "./MobileFilterDrawer";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const location = useLocation();


  const [sortBy, setSortBy] = useState("price-asc");
  const [priceMax, setPriceMax] = useState(2000);

  const isCategory = Boolean(categoryId);
  const isSearch = location.pathname === "/search";
  const showFilters = isCategory || isSearch;

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  const [priceFilterActive, setPriceFilterActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
    
      if (categoryId) {
        const products = await getProductsByCategory(categoryId);
        setItems(products);
      } else {
        const products = await getProducts();
        setItems(products);
      }
    
      setLoading(false);
    };
  
    fetchData();
  }, [categoryId]);

  useEffect(() => {
    setPriceMax(200000);
    setSortBy("price-asc");
  }, [categoryId, location.pathname]);


  let filteredItems = [...items];

  if (showFilters && priceFilterActive) {
    filteredItems = filteredItems.filter(
      (prod) => prod.price <= priceMax
    );
  }

  if (showFilters) {
    if (sortBy === "price-asc") {
      filteredItems.sort((a, b) => a.price - b.price);
    }
  
    if (sortBy === "price-desc") {
      filteredItems.sort((a, b) => b.price - a.price);
    }
  
    if (sortBy === "rating") {
      filteredItems.sort((a, b) => b.rating - a.rating);
    }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-6">
    {showFilters && (
      <div className="hidden lg:block mt-15">
        <FilterPanel
          priceMax={priceMax}
          onPriceChange={(value) => {
            setPriceMax(value);
            setPriceFilterActive(true);
          }}
        />
      </div>
    )}


    <div className="flex-1">
      {showFilters && (
          <div className="flex gap-3 mb-4 lg:hidden mt-10">
              <button
                className="border px-4 py-2 rounded-lg flex-1"
                onClick={() => setMobileFiltersOpen(true)}
              >
                Filtrar
              </button>
              <div className="flex-1">
                <SortBar
                  value={sortBy}
                  onChange={setSortBy}
                />
              </div>
          </div>
      )}

      {showFilters && (
        <div className="hidden lg:block mt-6">
          <SortBar
            value={sortBy}
            onChange={setSortBy}
          />
        </div>
      )}

      <ItemListWithLoading
        isLoading={loading}
        items={filteredItems}
      />
    </div>

    <MobileFilterDrawer
      open={mobileFiltersOpen}
      onClose={() => setMobileFiltersOpen(false)}
    >

    <FilterPanel
      priceMax={priceMax}
      onPriceChange={(value) => {
        setPriceMax(value);
        setPriceFilterActive(true);
      }}
    />

    </MobileFilterDrawer>
    </div>
  );
}

export default ItemListContainer;