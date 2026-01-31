export default function ItemDetailSkeleton() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-rose-100 rounded-xl shadow-md mt-6 animate-pulse">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                    <div className="w-full h-72 bg-rose-200 rounded-xl mb-4"></div>

                    <div className="flex gap-3">
                        {[1,2,3,4].map(n => (
                            <div 
                                key={n}
                                className="w-16 h-16 bg-rose-200 rounded-xl"
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <div className="h-7 w-3/4 bg-rose-200 rounded mb-4"></div>
                    <div className="h-5 w-full bg-rose-200 rounded mb-3"></div>
                    <div className="h-8 w-1/2 bg-rose-300 rounded mb-6"></div>

                    <div className="h-5 w-2/5 bg-rose-200 rounded mb-2"></div>
                    <div className="h-5 w-1/3 bg-rose-200 rounded mb-2"></div>

                    <div className="h-10 w-40 bg-rose-300 rounded-xl mt-6"></div>
                </div>

            </div>
        </div>
    );
}
