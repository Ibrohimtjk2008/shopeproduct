import Image from "next/image";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Shape from "@/app/assets/icons/Shape.svg";
import Heading from "../component/Heading";
import { Home, Phone, Percent } from "lucide-react";
import Map from "../component/Map";

export default function Contact() {
  const stores = [
    {
      name: "ВОСХОД",
      address: "ул. Дорожная 10",
      phone: "+7 904 271 35 90",
      icons: {
        address: "Home", 
        phone: "Phone", 
      },
      color: "text-blue-600",
    },
    {
      name: "ПАРУС",
      address: "ул. Советская 87",
      phone: "+7 82140 91330",
      icons: {
        address: "Home",
        phone: "Phone",
      },
      color: "text-cyan-600",
    },
    {
      name: "РЯБИНУШКА",
      address: "ул. Заводская 16",
      phone: "+7 82140 91101",
      icons: {
        address: "Home",
        phone: "Phone",
      },
      color: "text-red-700",
    },
    {
      name: "ПЕЛЫСЬ",
      address: "ул. Рабочая 1",
      phone: "+7 82140 91300",
      icons: {
        address: "Home",
        phone: "Phone",
      },
      color: "text-red-600",
    },
  ];

  return (
    <>
      <Header></Header>
      <div className="bg-orange-50">
        <div className="container mx-auto h-full flex flex-col gap-13">
          <div className="flex gap-5 py-3">
            <p className="font-bold">Главная</p>
            <Image src={Shape} alt="error"></Image>
            <p>Контакты</p>
          </div>{" "}
          <Heading>Контакты</Heading>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col items-center">
              <div className="flex gap-2 items-center">
                <Home size={16} />
                <span>Бухгалтерия, склад</span>
              </div>
              <p className="font-bold">+7 82140 92619</p>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <Percent size={16} />
                <span>Вопросы по системе лояльности</span>
              </div>
              <p className="font-bold">+7 82140 92619</p>
            </div>
          </div>
          <Heading>Наши магазины</Heading>
          <div className="flex flex-wrap gap-5">
            <button className="bg-green-700 rounded-sm p-2">п.Щельяюр</button>
            <button className="bg-gray-100 rounded-sm p-2">п.Щельяюр</button>
            <button className="bg-gray-100 rounded-sm p-2">п.Щельяюр</button>
            <button className="bg-gray-100 rounded-sm p-2">п.Щельяюр</button>
          </div>
          <div className="flex flex-wrap gap-6">
            {stores.map((store, index) => (
              <div key={index} className="py-6 w-64">
                <h2 className={`text-lg font-bold ${store.color}`}>
                  {store.name}
                </h2>
                <div className="flex items-center gap-2 mt-2 text-gray-600">
                  <Home size={16} />
                  <span>{store.address}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-gray-600">
                  <Phone size={16} />
                  <span>{store.phone}</span>
                </div>
              </div>
            ))}
          </div>
          <Map></Map>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
