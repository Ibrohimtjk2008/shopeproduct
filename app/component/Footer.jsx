import Image from "next/image";
import { Phone } from "lucide-react";
import logo from "@/app/assets/image/logo.png";
import logoss from "@/app/assets/icons/logo-zasovskiy-small-black.svg";
import faysbuk from "@/app/assets/image/faysbuk.png";
import instagram from "@/app/assets/image/instagram.png";
import vaiber from "@/app/assets/icons/vk.svg";
import ok from "@/app/assets/icons/Vector.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-orange-100">
        <footer className="bg-[url('/assets/image/bg.png')] border-t z-20">
          <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 relative">
            <div className="flex items-center gap-4">
              <Image src={logo} alt="Северяночка" />
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-700 font-medium">
              <a href="/About">О компании</a>
              <a href="/Contact">Контакты</a>
              <a href="/vacancy">Вакансии</a>
              <a href="#">Статьи</a>
              <a href="#">Политика обработки персональных данных</a>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-2">
                <a href="#">
                  <Image
                    src={instagram}
                    alt="Instagram"
                    width={22}
                    height={22}
                  />
                </a>
                <a href="#">
                  <Image src={vaiber} alt="VK" width={20} height={20} />
                </a>
                <a href="#">
                  <Image src={faysbuk} alt="Facebook" width={20} height={20} />
                </a>
                <a href="#">
                  <Image src={ok} alt="OK" width={15} height={15} />
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                <Phone className="w-4 h-4" />
                <span>8 800 777 33 33</span>
              </div>
            </div>
          </div>

          <div className="text-right text-xs text-gray-500 px-6 pb-4 flex justify-end gap-3">
            Дизайн <Image src={logoss} alt="error"></Image>
          </div>
        </footer>
      </div>
    </>
  );
}
