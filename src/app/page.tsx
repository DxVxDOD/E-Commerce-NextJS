import AdSlider from "@/app/_components/ad_slider/AdSlider";
import ItemSlider from "@/app/_components/itme_slider/ItemSlider";
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
import Image from "next/image";
import Card from "@/app/_components/Card";

export default function Home() {
  return (
    <main className=" flex flex-col items-center gap-4 w-full h-full">
      <AdSlider />
      <ItemSlider title={"Test"}>
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
      <ItemSlider title={"Categories"}>
        <Card categories={true} link={""}>
          <Image src={computers} alt={"Computers"} />
        </Card>
        <Card categories={true} link={""}>
          <Image src={computer_components} alt={"Computer Components"} />
        </Card>
        <Card categories={true} link={""}>
          <Image src={screens} alt={"Screens"} />
        </Card>
        <Card categories={true} link={""}>
          <Image src={computer_accessories} alt={"Computer Accessories"} />
        </Card>
        <Card categories={true} link={""}>
          <Image src={smart_home} alt={"Smart Home"} />
        </Card>
        <Card categories={true} link={""}>
          <Image src={game_console_vr} alt={"Game | Console | VR"} />
        </Card>
        <Card categories={true} link={""}>
          <Image src={external_storage} alt={"External Storage"} />
        </Card>
        <Card categories={true} link={""}>
          <Image src={home_leisure_health} alt={"Home | Leisure | Health"} />
        </Card>
        <Card categories={true} link={""}>
          <Image src={cable_adapters} alt={"Cable | Adapters"} />
        </Card>
        <Card categories={true} link={""}>
          <Image src={sound_image} alt={"Sound | Image"} />
        </Card>
        <Card categories={true} link={""}>
          <Image src={mobile_phones} alt={"Mobile Phones"} />
        </Card>
        <Card categories={true} link={""}>
          <Image src={network} alt={"Network"} />
        </Card>
        <Card categories={true} link={""}>
          <Image src={gift_cards} alt={"Gift Cards"} />
        </Card>
        <Card categories={true} link={""}>
          <Image src={software} alt={"Software"} />
        </Card>
        <Card categories={true} link={""}>
          <Image src={printer_scanner} alt={"Printer | Scanner"} />
        </Card>
        <Card categories={true} link={""}>
          <Image src={tablet} alt={"Tablets"} />
        </Card>
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
