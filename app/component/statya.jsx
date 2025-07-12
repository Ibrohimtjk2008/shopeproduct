import Image from "next/image";
import news1 from "@/app/assets/image/news-mask.png";
import news2 from "@/app/assets/image/news-spring.png";
import news3 from "@/app/assets/image/news-healthy.png";
import Heading from "./Heading";

export default function Statya() {
  return (
    <>
      <div className="bg-orange-50">
        <div className="container mx-auto">
          <Heading>Статьи</Heading>
          <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow hover:shadow-md transition duration-300 overflow-hidden">
              <div className="relative w-full h-40">
                <Image src={news1} alt="Маски" fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-400 mb-2">05.03.2021</p>
                <h3 className="font-semibold text-sm mb-1">
                  Режим использования масок и перчаток на территории магазинов
                </h3>
                <p className="text-xs text-gray-600">
                  Подробная информация о режимах использования масок и перчаток
                  на территории магазинов "ЛЕНТА". Информация обновляется каждый
                  будний день.
                </p>
                <button className="mt-4 px-4 py-1 text-sm rounded bg-green-100 text-green-600 hover:bg-green-200 transition">
                  Подробнее
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow hover:shadow-md transition duration-300 overflow-hidden">
              <div className="relative w-full h-40">
                <Image src={news2} alt="Весна" fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-400 mb-2">08.03.2021</p>
                <h3 className="font-semibold text-sm mb-1">
                  Весеннее настроение для каждой
                </h3>
                <p className="text-xs text-gray-600">
                  8 Марта — это не просто Международный женский день, это ещё
                  день тюльпанов, приятных сюрпризов и праздничных тёплых
                  пожеланий.
                </p>
                <button className="mt-4 px-4 py-1 text-sm rounded bg-green-100 text-green-600 hover:bg-green-200 transition">
                  Подробнее
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow hover:shadow-md transition duration-300 overflow-hidden">
              <div className="relative w-full h-40">
                <Image
                  src={news3}
                  alt="ЗОЖ или фастфуд"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-400 mb-2">22.02.2020</p>
                <h3 className="font-semibold text-sm mb-1">
                  ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!
                </h3>
                <p className="text-xs text-gray-600">
                  Голосуйте за любимые категории, выбирайте категорию-победителя
                  в мобильном приложении и получайте кешбэк 10% баллами в
                  апреле!
                </p>
                <button className="mt-4 px-4 py-1 text-sm rounded bg-green-100 text-green-600 hover:bg-green-200 transition">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
