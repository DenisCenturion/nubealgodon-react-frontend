export default function ItemListSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">

            {[...Array(10)].map((_, i) => (
                <div 
                    key={i}
                    className="bg-[#FFF7F4] rounded-3xl p-4 shadow animate-pulse"
                >
                    <div className="h-40 bg-rose-200 rounded-xl mb-4"></div>
                    <div className="h-4 bg-rose-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-rose-200 rounded w-1/2 mb-4"></div>
                    <div className="h-10 bg-rose-300 rounded-xl"></div>
                </div>
            ))}

        </div>
    );
}
