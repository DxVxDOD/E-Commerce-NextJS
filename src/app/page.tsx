import AdSlider from "@/app/_components/ad_slider/AdSlider";
import ItemSlider from "@/app/_components/itme_slider/ItemSlider";

export default function Home() {
  return (
    <main className=" flex flex-col items-center w-full h-full">
      <AdSlider />
      <ItemSlider title={'Categories'} >
        <img src="https://via.placeholder.com/210/00FF00?text=1" />
        <img src="https://via.placeholder.com/220/00FF00?text=2" />
        <img src="https://via.placeholder.com/230/00FF00?text=3" />
        <img src="https://via.placeholder.com/240/00FF00?text=4" />
        <img src="https://via.placeholder.com/250/00FF00?text=5" />
        <img src="https://via.placeholder.com/260/00FF00?text=6" />
        <img src="https://via.placeholder.com/270/00FF00?text=7" />
        <img src="https://via.placeholder.com/280/00FF00?text=8" />
        <img src="https://via.placeholder.com/250/00FF00?text=9" />
        <img src="https://via.placeholder.com/260/00FF00?text=10" />
        <img src="https://via.placeholder.com/270/00FF00?text=11" />
        <img src="https://via.placeholder.com/280/00FF00?text=12" />
      </ItemSlider>
    </main>
  );
}
