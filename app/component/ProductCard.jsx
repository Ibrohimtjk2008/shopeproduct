"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Share2 } from "lucide-react";
import { useFavoritesStore } from "../store/favorites";
import { useState } from "react";

const ProductCard = ({
  id,
  imageUrl,
  title = "Название товара",
  price = 0,
  oldPrice = 0,
  discountPercent = 0,
  rating = 0,
  reviewsCount = 0,
  href = "#",
}) => {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const liked = favorites.some((item) => item.id === id);
  const [addedToCart, setAddedToCart] = useState(false);

  const toggleLike = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const item = {
      id,
      imageUrl,
      title,
      price,
      oldPrice,
      discountPercent,
      rating,
    };
    liked ? removeFavorite(id) : addFavorite(item);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.share?.({ title, url: window.location.href });
  };

  const toggleCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setAddedToCart(!addedToCart);
  };

  return (
    <Link href={href} className="block">
      <div className="bg-white shadow-md rounded-xl p-4 w-72 h-96  relative border border-gray-100 hover:shadow-lg transition">
        {/* Иконки */}
        <div className="absolute top-2 right-2 flex items-center gap-2 z-10">
          <Share2
            className="w-4 h-4 text-gray-400 hover:text-blue-500 cursor-pointer"
            onClick={handleShare}
          />
          <Heart
            onClick={toggleLike}
            className={`w-5 h-5 cursor-pointer transition-colors ${
              liked ? "text-red-500" : "text-gray-400"
            }`}
            fill={liked ? "red" : "none"}
          />
        </div>

        {/* Фото */}
        <div className="w-full h-40 relative mb-2 rounded-lg overflow-hidden bg-gray-100">
          <Image src={imageUrl} alt={title} fill className="object-contain" />
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
            -{discountPercent}%
          </div>
        </div>

        {/* Название */}
        <div className="mt-2 text-sm font-semibold text-gray-800 leading-snug">
          {title}
        </div>

        {/* Цена */}
        <div className="mt-1 flex items-center space-x-2">
          <div className="text-lg font-bold text-green-600">
            {price.toFixed(2)} ₽
          </div>
          <div className="text-gray-400 text-sm line-through">
            {oldPrice.toFixed(2)} ₽
          </div>
        </div>

        {/* Рейтинг */}
        <div className="flex items-center mt-1 text-sm">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`${
                i < rating ? "text-orange-500" : "text-gray-300"
              } text-base`}
            >
              ★
            </span>
          ))}
          <span className="ml-2 text-gray-500">{reviewsCount} отзыва</span>
        </div>

        {/* Кнопка "В корзину" */}
        <button
          onClick={toggleCart}
          className="mt-3 w-full py-2 text-sm font-semibold rounded bg-orange-500 hover:bg-orange-600 text-white transition"
        >
          {addedToCart ? "В корзине" : "В корзину"}
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
