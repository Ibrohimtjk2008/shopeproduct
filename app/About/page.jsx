import Image from "next/image";
import Header from "../component/Header";
import bg from "@/app/assets/image/aboutbg.png";
import Shape from "@/app/assets/icons/Shape.svg";
import Footer from "../component/Footer";

export default function About() {
  return (
    <>
      <Header></Header>
      <div className="bg-orange-50">
        <div className="container mx-auto">
          <div className="flex gap-5 py-8">
            <p className="font-bold">Главная</p>
            <Image src={Shape} alt="error"></Image>
            <p>О компании</p>
          </div>
          <div className="py-16">
            <Image
              src={bg}
              alt="error"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
