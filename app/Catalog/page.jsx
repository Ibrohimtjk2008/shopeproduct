import Image from "next/image";
import Header from "../component/Header";
import Frame1 from "@/app/assets/image/Frame1.png";
import Frame2 from "@/app/assets/image/Frame2.png";
import Frame3 from "@/app/assets/image/Frame3.png";
import Frame21 from "@/app/assets/image/Frame21.png";
import Frame22 from "@/app/assets/image/Frame22.png";
import Frame23 from "@/app/assets/image/Frame23.png";
import Frame24 from "@/app/assets/image/Frame24.png";
import Frame25 from "@/app/assets/image/Frame25.png";
import Frame26 from "@/app/assets/image/Frame26.png";
import Frame27 from "@/app/assets/image/Frame27.png";
import Frame28 from "@/app/assets/image/Frame28.png";
import Frame29 from "@/app/assets/image/Frame29.png";
import Frame30 from "@/app/assets/image/Frame30.png";
import Shape from "@/app/assets/icons/Shape.svg";
import Heading from "../component/Heading";
import Footer from "../component/Footer";
import Link from "next/link";

export default function Catalog() {
  return (
    <>
      <Header></Header>
      <div className="bg-orange-50">
        <div className="container mx-auto">
          <div className="flex gap-5 py-8">
            <p className="font-bold">Главная</p>
            <Image src={Shape} alt="error"></Image>
            <p>Каталог</p>
          </div>
          <Heading>Каталог</Heading>
          <div className="px-36 py-8">
            <div className="flex w-full gap-0.5">
              <Link href="/meat">
                {" "}
              <Image src={Frame1} alt="error"></Image>
              </Link>{" "}
              <Image src={Frame2} alt="error"></Image>
              <Image src={Frame3} alt="error"></Image>
            </div>
            <div className="flex w-full gap-5">
              <Image src={Frame21} alt="error"></Image>
              <Image src={Frame25} alt="error"></Image>
              <Image src={Frame26} alt="error"></Image>
              <Image src={Frame29} alt="error"></Image>
            </div>
            <div className="flex w-full gap-4">
              <Image src={Frame27} alt="error"></Image>
              <Image src={Frame30} alt="error"></Image>
              <Image src={Frame22} alt="error"></Image>
            </div>
            <div className="flex  w-full gap-4">
              <Image src={Frame23} alt="error"></Image>
              <Image src={Frame24} alt="error"></Image>
              <Image src={Frame28} alt="error"></Image>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
