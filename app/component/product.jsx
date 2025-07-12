import ProductCard from "./ProductCard";
import image from "@/app/assets/image/image.png";
import image1 from "@/app/assets/image/image1.png";
import image2 from "@/app/assets/image/image2.png";
import image3 from "@/app/assets/image/image3.png";
import Heading from "./Heading";

export default function Product() {
  return (
    <>
      <div className="bg-orange-50">
        <div className="container mx-auto">
          <Heading>Акции</Heading>
          <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 ">
            <ProductCard
              id={1}
              imageUrl={image}
              title="Г/Ц Блинчики с мясом вес, Россия"
              price={44.5}
              oldPrice={89}
              discountPercent={50}
              rating={2}
            />
            <ProductCard
              id={2}
              imageUrl={image1}
              title="Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное"
              price={44.5}
              oldPrice={50.5}
              discountPercent={50}
              rating={3}
            />
            <ProductCard
              id={3}
              imageUrl={image2}
              title="Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тосканская"
              price={44.5}
              oldPrice={50.5}
              discountPercent={50}
              rating={4}
            />
            <ProductCard
              id={4}
              imageUrl={image3}
              title="Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тосканская"
              price={44.5}
              oldPrice={50.5}
              discountPercent={50}
              rating={4}
            />
          </div>
        </div>
      </div>
      <div className="bg-orange-50">
        <div className="container mx-auto">
          <Heading>Новинки</Heading>
          <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 ">
            <ProductCard
              id={5}
              imageUrl={image}
              title="Г/Ц Блинчики с мясом вес, Россия"
              price={44.5}
              oldPrice={89}
              discountPercent={50}
              rating={2}
            />
            <ProductCard
              id={6}
              imageUrl={image1}
              title="Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное"
              price={44.5}
              oldPrice={50.5}
              discountPercent={50}
              rating={3}
            />
            <ProductCard
              id={7}
              imageUrl={image2}
              title="Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тосканская"
              price={44.5}
              oldPrice={50.5}
              discountPercent={50}
              rating={4}
            />
            <ProductCard
              id={8}
              imageUrl={image3}
              title="Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тосканская"
              price={44.5}
              oldPrice={50.5}
              discountPercent={50}
              rating={4}
            />
          </div>
        </div>
      </div>
      <div className="bg-orange-50">
        <div className="container mx-auto">
          <Heading>Покупали раньше</Heading>
          <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 ">
            <ProductCard
              imageUrl={image}
              title="Г/Ц Блинчики с мясом вес, Россия"
              price={44.5}
              oldPrice={89}
              discountPercent={50}
              rating={2}
            />
            <ProductCard
              imageUrl={image1}
              title="Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное"
              price={44.5}
              oldPrice={50.5}
              discountPercent={50}
              rating={3}
            />
            <ProductCard
              imageUrl={image2}
              title="Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тосканская"
              price={44.5}
              oldPrice={50.5}
              discountPercent={50}
              rating={4}
            />
            <ProductCard
              imageUrl={image3}
              title="Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тосканская"
              price={44.5}
              oldPrice={50.5}
              discountPercent={50}
              rating={4}
            />
          </div>
        </div>
      </div>
    </>
  );
}
