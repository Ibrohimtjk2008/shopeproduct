"use client";

import { useState, useEffect } from "react";
import ProductCard from "../component/ProductCard";
import image1 from "@/app/assets/image/image1.png";
import image2 from "@/app/assets/image/image2.png";
import image3 from "@/app/assets/image/image3.png";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useFavoritesStore } from "../store/favorites";

const mockProducts = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Продукт ${i + 1}`,
  price: Math.floor(Math.random() * 100) + 1,
  inStock: Math.random() > 0.3,
}));

export default function ProductCatalog({ type = "main" }) {
  const { favorites } = useFavoritesStore();

  const [priceRange, setPriceRange] = useState([1, 100]);
  const [inStock, setInStock] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const productsPerPage = 6;

  useEffect(() => {
    applyFilters();
  }, [priceRange, inStock]);

  const applyFilters = () => {
    const result = mockProducts.filter(
      (product) =>
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (!inStock || product.inStock)
    );
    setFilteredProducts(result);
    setCurrentPage(1);
  };

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <>
      <div className="flex gap-6">
        <aside className="w-64 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Фильтр</h2>
            <button
              onClick={() => {
                setPriceRange([1, 100]);
                setInStock(true);
              }}
              className="text-sm text-orange-500 hover:underline"
            >
              Очистить
            </button>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Цена
            </label>
            <Slider
              range
              min={1}
              max={100}
              value={priceRange}
              onChange={setPriceRange}
              trackStyle={[{ backgroundColor: "#f97316" }]}
              handleStyle={[
                { borderColor: "#f97316" },
                { borderColor: "#f97316" },
              ]}
            />
            <div className="flex justify-between text-sm mt-1 text-gray-600">
              <span>{priceRange[0]}₽</span>
              <span>{priceRange[1]}₽</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Категория
            </label>
            <div className="space-y-2 text-sm text-gray-700">
              <p>Молоко</p>
              <p>Сливки</p>
              <p>Яйцо</p>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              В наличии
            </label>
            <div
              className={`w-11 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-all duration-300 ${
                inStock ? "bg-orange-500" : "bg-gray-300"
              }`}
              onClick={() => setInStock(!inStock)}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                  inStock ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </div>
          </div>

          <button
            onClick={applyFilters}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
          >
            Применить
          </button>
        </aside>

        <section className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Цена от {priceRange[0]} до {priceRange[1]}
            </span>
            {inStock && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Только в наличии
              </span>
            )}
            <button
              onClick={() => {
                setPriceRange([1, 100]);
                setInStock(true);
              }}
              className="text-sm text-gray-600 underline"
            >
              Очистить фильтры
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {type === "like" ? (
              favorites.length === 0 ? (
                <p className="text-center text-gray-500 col-span-full">
                  Вы ещё ничего не добавили в избранное
                </p>
              ) : (
                favorites.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))
              )
            ) : (
              <>
                {[
                  {
                    id: 1,
                    imageUrl: image3,
                    title: "Г/Ц Блинчики с мясом вес, Россия",
                    price: 44.5,
                    oldPrice: 89,
                    discountPercent: 50,
                    rating: 2,
                    href: "/milk",
                  },
                  {
                    id: 2,
                    imageUrl: image3,
                    title: "Г/Ц Блинчики с мясом вес, Россия",
                    price: 44.5,
                    oldPrice: 89,
                    discountPercent: 50,
                    rating: 2,
                  },
                  {
                    id: 3,
                    imageUrl: image3,
                    title: "Г/Ц Блинчики с мясом вес, Россия",
                    price: 44.5,
                    oldPrice: 89,
                    discountPercent: 50,
                    rating: 2,
                  },
                  {
                    id: 4,
                    imageUrl: image3,
                    title: "Г/Ц Блинчики с мясом вес, Россия",
                    price: 44.5,
                    oldPrice: 89,
                    discountPercent: 50,
                    rating: 2,
                  },
                  {
                    id: 5,
                    imageUrl: image1,
                    title:
                      "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное",
                    price: 44.5,
                    oldPrice: 50.5,
                    discountPercent: 50,
                    rating: 3,
                  },
                  {
                    id: 6,
                    imageUrl: image2,
                    title:
                      "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тосканская",
                    price: 44.5,
                    oldPrice: 50.5,
                    discountPercent: 50,
                    rating: 4,
                  },
                ].map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </>
            )}
          </div>

          {currentPage * productsPerPage < filteredProducts.length && (
            <div className="flex justify-center mt-6">
              <button
                className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Показать ещё
              </button>
            </div>
          )}

          <div className="flex justify-center mt-4 gap-2 items-center">
            {[
              ...Array(
                Math.ceil(filteredProducts.length / productsPerPage)
              ).keys(),
            ].map((i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
