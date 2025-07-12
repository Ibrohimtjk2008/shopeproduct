"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/icons/logo.svg";
import search from "@/app/assets/icons/search.svg";
import like from "@/app/assets/icons/like.svg";
import box from "@/app/assets/icons/box.svg";
import ShapeStroke from "@/app/assets/icons/ShapeStroke.svg";
import shoppingcart from "@/app/assets/icons/shopping-cart.svg";
import avatar from "@/app/assets/image/avatar.png";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="shadow-md bg-white overflow-x-hidden">
        <div className="container mx-auto">
          <header className="w-full flex items-center justify-between px-8 py-4">
            <div className="flex items-center space-x-2">
              <Image src={logo} alt="Северяночка" />
              <span className="text-xl font-extrabold tracking-wide hidden sm:inline">
                СЕВЕРЯНОЧКА
              </span>
            </div>

            <div className="flex items-center flex-1 mx-6 max-w-2xl relative z-50">
              <div className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white rounded-l-md px-4 py-2 whitespace-nowrap">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="focus:outline-none flex  items-center gap-1"
                >
                  <div className=" flex flex-col gap-1">
                    <span className="h-px bg-white w-6"></span>
                    <span className="h-px bg-white w-6"></span>
                    <span className="h-px bg-white w-6"></span>
                  </div>
                  <span>Каталог</span>
                </button>
              </div>

              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Найти товар"
                  className="w-full border-y border-r border-gray-300 rounded-r-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <Image src={search} alt="Поиск" width={18} height={18} />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-10 text-gray-700">
              <Link
                href="/like"
                className="flex flex-col items-center text-sm hover:text-green-600"
              >
                <Image src={like} alt="Избранное" width={24} height={24} />
                <span className="mt-1">Избранное</span>
              </Link>
              <Link
                href="/orders"
                className="flex flex-col items-center text-sm hover:text-green-600"
              >
                <Image src={box} alt="Заказы" width={24} height={24} />
                <span className="mt-1">Заказы</span>
              </Link>
              <Link
                href="/cart"
                className="flex flex-col items-center text-sm hover:text-green-600 relative"
              >
                <Image
                  src={shoppingcart}
                  alt="Корзина"
                  width={24}
                  height={24}
                />
                <span className="mt-1">Корзина</span>
              </Link>
              <div className="flex items-center space-x-2 cursor-pointer hover:text-green-600">
                <Image
                  src={avatar}
                  alt="Алексей"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-sm">Алексей</span>
                <Image
                  src={ShapeStroke}
                  alt="Стрелка вниз"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </header>
        </div>
        {menuOpen && (
          <div className="absolute top-20 bg-white shadow-lg z-40 w-full left-0 min-h-fit">
            <div className="container mx-auto p-6">
              <div className="text-sm font-medium">
                <div className="flex w-full justify-between">
                  <div className="font-bold  rounded p-3">Молоко</div>
                  <div className="font-bold  rounded p-3">Сыр</div>
                  <div className="font-bold  rounded p-3">Яйцо</div>
                  <div className="font-bold  rounded p-3">Хлеб</div>
                  <Link
                    href="/Catalog"
                    className="font-medium focus:outline-none"
                  >
                    <button className="bg-green-500 text-white p-2 rounded-sm ">
                      ПОСМОТРЕТ ВСЁ
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
