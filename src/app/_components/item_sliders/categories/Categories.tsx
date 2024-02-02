"use client";

import React from "react";
import ItemSlider from "../ItemSlider";
import Card from "./CategoriesCard";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import computer_accessories from "./svg/computer-accessories.svg";
import computer_accessories_dark from "./svg/computer_accessories_dark.svg";
import computers from "./svg/computers.svg";
import computers_dark from "./svg/computers_dark.svg";
import computer_components from "./svg/computer_components.svg";
import computer_components_dark from "./svg/computer_components_dark.svg";
import screens from "./svg/screens.svg";
import screens_dark from "./svg/screens_dark.svg";
import smart_home from "./svg/smart_home.svg";
import smart_home_dark from "./svg/smart_home_dark.svg";
import game_console_vr from "./svg/game_console_vr.svg";
import game_console_vr_dark from "./svg/game_console_vr_dark.svg";
import external_storage from "./svg/external_storage.svg";
import external_storage_dark from "./svg/external_storage_dark.svg";
import home_leisure_health from "./svg/home_leisure_health.svg";
import home_leisure_health_dark from "./svg/home_leisure_health_dark.svg";
import cable_adapters from "./svg/cable_adapters.svg";
import cable_adapters_dark from "./svg/cable_adapters_dark.svg";
import sound_image from "./svg/sound_image.svg";
import sound_image_dark from "./svg/sound_image_dark.svg";
import mobile_phones from "./svg/mobile_phone.svg";
import mobile_phones_dark from "./svg/mobile_phone_dark.svg";
import network from "./svg/network.svg";
import network_dark from "./svg/network_dark.svg";
import gift_cards from "./svg/gift_cards.svg";
import gift_cards_dark from "./svg/gift_cards_dark.svg";
import software from "./svg/software.svg";
import software_dark from "./svg/software_dark.svg";
import printer_scanner from "./svg/printer_scanner.svg";
import printer_scanner_dark from "./svg/printer_scanner_dark.svg";
import tablet from "./svg/tablet.svg";
import tablet_dark from "./svg/tablet_dark.svg";

export default function Categories() {
  const theme = useAppSelector((state) => state.themeSlice.value);

  return (
    <ItemSlider categories={true} title={"Categories"}>
      {theme === "dark" ? (
        <>
          <Card link={""}>
            <Image src={computers_dark} alt={"Computers"} />
            <span className=" text-sm whitespace-nowrap text-center">
              Computers
            </span>
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={computer_components_dark}
              alt={"Computer Components"}
            />
            <span className=" text-sm whitespace-nowrap text-center ">
              Computer Components
            </span>
          </Card>
          <Card link={""}>
            <Image height={36} width={36} src={screens_dark} alt={"Screens"} />
            <span className=" text-sm whitespace-nowrap text-center">
              Screens
            </span>
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={computer_accessories_dark}
              alt={"Computer Accessories"}
            />
            <span className=" text-sm whitespace-nowrap text-center">
              Computer Accessories
            </span>
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={smart_home_dark}
              alt={"Smart Home"}
            />
            <span className=" text-sm whitespace-nowrap text-center">
              Smart Home
            </span>
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={game_console_vr_dark}
              alt={"Game | Console | VR"}
            />
            <span className=" text-sm whitespace-nowrap text-center">
              Games | Console | VR
            </span>
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={external_storage_dark}
              alt={"External Storage"}
            />
            <span className=" text-sm whitespace-nowrap text-center">
              External Storage
            </span>
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={home_leisure_health_dark}
              alt={"Home | Leisure | Health"}
            />
            <span className=" text-sm whitespace-nowrap text-center">
              Home | Leisure
            </span>
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={cable_adapters_dark}
              alt={"Cable | Adapters"}
            />
            <span className=" text-sm whitespace-nowrap text-center">
              Cables | Adapters
            </span>
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={sound_image_dark}
              alt={"Sound | Image"}
            />
            <span className=" text-sm whitespace-nowrap text-center">
              Sound | Image
            </span>
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={mobile_phones_dark}
              alt={"Mobile Phones"}
            />
            <span className=" text-sm whitespace-nowrap text-center">
              Mobile Phones
            </span>
          </Card>
          <Card link={""}>
            <Image height={36} width={36} src={network_dark} alt={"Network"} />
            <span className=" text-sm whitespace-nowrap text-center">
              Network
            </span>
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={gift_cards_dark}
              alt={"Gift Cards"}
            />
            <span className=" text-sm whitespace-nowrap text-center">
              Gift Cards
            </span>
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={software_dark}
              alt={"Software"}
            />
            <span className=" text-sm whitespace-nowrap text-center">
              Software
            </span>
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={printer_scanner_dark}
              alt={"Printer | Scanner"}
            />
            <span className=" text-sm whitespace-nowrap text-center">
              Printer | Scanner
            </span>
          </Card>
          <Card link={""}>
            <Image height={36} width={36} src={tablet_dark} alt={"Tablets"} />
            <span className=" text-sm whitespace-nowrap text-center">
              Tablets
            </span>
          </Card>
        </>
      ) : (
        <>
          <Card link={""}>
            <Image height={36} width={36} src={computers} alt={"Computers"} />
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={computer_components}
              alt={"Computer Components"}
            />
          </Card>
          <Card link={""}>
            <Image height={36} width={36} src={screens} alt={"Screens"} />
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={computer_accessories}
              alt={"Computer Accessories"}
            />
          </Card>
          <Card link={""}>
            <Image height={36} width={36} src={smart_home} alt={"Smart Home"} />
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={game_console_vr}
              alt={"Game | Console | VR"}
            />
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={external_storage}
              alt={"External Storage"}
            />
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={home_leisure_health}
              alt={"Home | Leisure | Health"}
            />
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={cable_adapters}
              alt={"Cable | Adapters"}
            />
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={sound_image}
              alt={"Sound | Image"}
            />
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={mobile_phones}
              alt={"Mobile Phones"}
            />
          </Card>
          <Card link={""}>
            <Image height={36} width={36} src={network} alt={"Network"} />
          </Card>
          <Card link={""}>
            <Image height={36} width={36} src={gift_cards} alt={"Gift Cards"} />
          </Card>
          <Card link={""}>
            <Image height={36} width={36} src={software} alt={"Software"} />
          </Card>
          <Card link={""}>
            <Image
              height={36}
              width={36}
              src={printer_scanner}
              alt={"Printer | Scanner"}
            />
          </Card>
          <Card link={""}>
            <Image height={36} width={36} src={tablet} alt={"Tablets"} />
          </Card>
        </>
      )}
    </ItemSlider>
  );
}
