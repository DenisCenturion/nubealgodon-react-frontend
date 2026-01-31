import { BiCreditCard, BiGift, BiRocket } from "react-icons/bi";

function PromoInfo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 px-6 bg-rose-50">

            <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
                <BiCreditCard className="text-4xl text-purple-700 mb-2" />
                <h3 className="text-lg font-semibold text-purple-900">
                    3 y 6 cuotas sin interés
                </h3>
                <p className="text-sm text-gray-600">Ver bases y condiciones</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
                <BiRocket className="text-4xl text-purple-700 mb-2" />
                <h3 className="text-lg font-semibold text-purple-900">
                    Envíos Same Day
                </h3>
                <p className="text-sm text-gray-600">
                    CABA, Zona Norte y alrededores
                </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
                <BiGift className="text-4xl text-purple-700 mb-2" />
                <h3 className="text-lg font-semibold text-purple-900">
                    Envíos gratis
                </h3>
                <p className="text-sm text-gray-600">En compras superiores a $150.000</p>
            </div>

        </div>
    );
}

export default PromoInfo;
