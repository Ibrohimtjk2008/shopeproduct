import Image from "next/image";
import Header from "../component/Header";
import Heading from "../component/Heading";
import ProductCatalog from "../component/ProductCatalog";
import Footer from "../component/Footer";
import Shape from "@/app/assets/icons/Shape.svg";

export default function meat() {
  return (
    <>
      <Header></Header>
      <div className="bg-orange-50">
        <div className="container mx-auto py-10">
          <div className="flex gap-5">
            <p className="font-bold">Главная</p>
            <Image src={Shape} alt="error"></Image>
            <p className="font-bold">Каталог</p>{" "}
            <Image src={Shape} alt="error"></Image>
            <p>Молоко, сыр, яйцо</p>
          </div>
          <Heading>Молоко, сыр, яйцо</Heading>
          <ProductCatalog></ProductCatalog>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
