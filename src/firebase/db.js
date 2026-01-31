import { app } from './config';
import { addDoc, serverTimestamp, getFirestore, collection, getDocs, query, where, getDoc, doc } from 'firebase/firestore';

const db = getFirestore(app);

export const getProducts  = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productos = [];

    querySnapshot.forEach((doc) => {
    productos.push({ id: doc.id, ...doc.data() });
    
    });

    return productos;
}

export const getCategories  = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const categorias = [];

    querySnapshot.forEach((doc) => {
        categorias.push({ id: doc.id, ...doc.data() });
    });

    return categorias;
}


export const getProductsByCategory = async (categoryId) => {
    const q = query(
      collection(db, "products"),
      where("category", "==", categoryId)
    );

    const querySnapshot = await getDocs(q);

    const productos = [];
    querySnapshot.forEach((doc) => {
      productos.push({ id: doc.id, ...doc.data() });
    });

    return productos;
};

export const getProductById = async (productId) => {
    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error("Producto no encontrado");
    }   

    return { id: docSnap.id, ...docSnap.data() };
};

export const createOrder = async (order) => {
  const orderWithTimestamp = {
    ...order,
    createdAt: serverTimestamp()
  };

  const docRef = await addDoc(
    collection(db, "orders"),
    orderWithTimestamp
  );

  return docRef.id;
};