import Image from "next/image";
import Header from "./component/Header";
import Sliders from "@/app/assets/image/Sliders.png";
import Product from "./component/product";
import Spets from "./component/spets";
import Statya from "./component/statya";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="w-full h-64 relative top-3">
        <Image src={Sliders} alt="error" fill style={{ objectFit: "cover" }} />
      </div>
      <Product></Product>
      <Spets></Spets>
      <Statya></Statya>
      <Footer></Footer>
    </>
  );
}
