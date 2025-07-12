import Image from "next/image";
import severyanochkaCard from "@/app/assets/image/severyanochka-card.png";
import promoBasket from "@/app/assets/image/promo-basket.png";
import Heading from "./Heading";

export default function Spets() {
  return (
    <div className="bg-orange-50">
      <div className="container mx-auto py-10">
        <Heading>Специальные предложения</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between bg-orange-100 rounded-xl p-6">
            <div>
              <h3 className="text-lg font-bold mb-2">
                Оформите карту «Северяночка»
              </h3>
              <p className="text-sm text-gray-700">
                И получайте бонусы при покупке <br /> в магазинах и на сайте
              </p>
            </div>
            <div className="w-32 h-24 relative">
              <Image
                src={severyanochkaCard}
                alt="Северяночка"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex items-center justify-between bg-green-100 rounded-xl p-6">
            <div>
              <h3 className="text-lg font-bold mb-2">
                Покупайте <br /> акционные товары
              </h3>
              <p className="text-sm text-gray-700">
                И получайте вдвое больше <br /> бонусов
              </p>
            </div>
            <div className="w-32 h-24 relative">
              <Image
                src={promoBasket}
                alt="Промо корзина"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
