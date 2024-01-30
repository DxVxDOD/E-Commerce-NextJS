import AdSlider from "@/app/_components/ad_slider/AdSlider";
import ItemSlider from "@/app/_components/item_sliders/ItemSlider";
import computer_accessories from "@/public/computer-accessories.svg";
import computer_components from "@/public/computer_components.svg";
import computers from "@/public/computers.svg";
import screens from "@/public/screens.svg";
import smart_home from "@/public/smart_home.svg";
import game_console_vr from "@/public/game_console_vr.svg";
import external_storage from "@/public/external_storage.svg";
import home_leisure_health from "@/public/home_leisure_health.svg";
import cable_adapters from "@/public/cable_adapters.svg";
import sound_image from "@/public/sound_image.svg";
import mobile_phones from "@/public/mobile_phone.svg";
import network from "@/public/network.svg";
import gift_cards from "@/public/gift_cards.svg";
import software from "@/public/software.svg";
import printer_scanner from "@/public/printer_scanner.svg";
import tablet from "@/public/tablet.svg";
import Card from "@/app/_components/Card";

export default function Home() {
  return (
    <main className=" flex flex-col items-center gap-4 w-full h-full">
      <AdSlider />
      <ItemSlider title={"Test"}>
        <img alt={""} src="https://via.placeholder.com/210/00FF00?text=1" />
        <img alt={""} src="https://via.placeholder.com/220/00FF00?text=2" />
        <img alt={""} src="https://via.placeholder.com/230/00FF00?text=3" />
        <img alt={""} src="https://via.placeholder.com/240/00FF00?text=4" />
        <img alt={""} src="https://via.placeholder.com/250/00FF00?text=5" />
        <img alt={""} src="https://via.placeholder.com/260/00FF00?text=6" />
        <img alt={""} src="https://via.placeholder.com/280/00FF00?text=8" />
        <img alt={""} src="https://via.placeholder.com/270/00FF00?text=7" />
        <img alt={""} src="https://via.placeholder.com/250/00FF00?text=9" />
        <img alt={""} src="https://via.placeholder.com/260/00FF00?text=10" />
        <img alt={""} src="https://via.placeholder.com/270/00FF00?text=11" />
        <img alt={""} src="https://via.placeholder.com/280/00FF00?text=12" />
      </ItemSlider>

      <ItemSlider title={"Promotions"}>
        <Card link={""} categories={false}>
          <img alt={""} src="https://via.placeholder.com/210/00FF00?text=1" />
        </Card>
        <Card link={""} categories={false}>
          <img alt={""} src="https://via.placeholder.com/210/00FF00?text=1" />
        </Card>
        <Card link={""} categories={false}>
          <img alt={""} src="https://via.placeholder.com/210/00FF00?text=1" />
        </Card>
        <Card link={""} categories={false}>
          <img alt={""} src="https://via.placeholder.com/210/00FF00?text=1" />
        </Card>
        <Card link={""} categories={false}>
          <img alt={""} src="https://via.placeholder.com/210/00FF00?text=1" />
        </Card>
        <Card link={""} categories={false}>
          <img alt={""} src="https://via.placeholder.com/210/00FF00?text=1" />
        </Card>
        <Card link={""} categories={false}>
          <img alt={""} src="https://via.placeholder.com/210/00FF00?text=1" />
        </Card>
        <Card link={""} categories={false}>
          <img alt={""} src="https://via.placeholder.com/210/00FF00?text=1" />
        </Card>
        <Card link={""} categories={false}>
          <img alt={""} src="https://via.placeholder.com/210/00FF00?text=1" />
        </Card>
        <Card link={""} categories={false}>
          <img alt={""} src="https://via.placeholder.com/210/00FF00?text=1" />
        </Card>
      </ItemSlider>
    </main>
  );
}
