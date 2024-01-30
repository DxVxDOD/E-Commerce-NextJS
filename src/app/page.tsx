import AdSlider from "@/app/_components/ad_slider/AdSlider";
import Categories from "./_components/item_sliders/categories/Categories";
import Promotions from "./_components/item_sliders/promotions/Promotions";
import Products from "./_components/item_sliders/products/Products";
import Reviews from "./_components/item_sliders/reviews/Reviews";

export default function Home() {
  return (
    <main className=" flex flex-col items-center gap-4 w-full h-full">
      <AdSlider />
      <Categories />
      <Promotions />
      <Products title="New Products" />
      <Products title="Top Products" />
      <Reviews title="Reviews" />
      <Reviews title="Cheered" />
    </main>
  );
}
