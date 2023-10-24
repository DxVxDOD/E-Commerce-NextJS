import AdSlider from "@/app/_components/ad_slider/AdSlider";
import ItemSlider from "@/app/_components/itme_slider/ItemSlider";

export default function Home() {
  return (
    <main className=" flex flex-col items-center w-full h-full">
      <AdSlider />
      <ItemSlider/>
    </main>
  );
}
