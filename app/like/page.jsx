"use client";

import Image from "next/image";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Heading from "../component/Heading";
import ProductCatalog from "../component/ProductCatalog";
import { useFavoritesStore } from "../store/favorites";
import Shape from "@/app/assets/icons/Shape.svg";

export default function Liked() {
  const { favorites } = useFavoritesStore();

  return (
    <>
      <Header />
      <div className="bg-orange-50 min-h-screen">
        <div className="container mx-auto py-10">
          <div className="flex gap-5">
            <p className="font-bold">Главная</p>
            <Image src={Shape} alt="error"></Image>
            <p>Избранное</p>
          </div>
          <Heading>Избранное</Heading>
          <ProductCatalog type="like"></ProductCatalog>
        </div>
      </div>
      <Footer />
    </>
  );
}
