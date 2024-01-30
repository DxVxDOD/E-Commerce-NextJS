"use client";

import React from "react";
import ItemSlider from "../ItemSlider";
import Card from "../Card";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import computer_accessories from "./svg/computer-accessories.svg";
import computer_accessories_dark from "./svg/computer_accessories_dark.svg";
import computers from "./svg/computers.svg";
import computers_dark from "./svg/computers_dark.svg";
import computer_components from "./svg/computer_components.svg";
import computer_components_dark from "./svg/computer_components_dark.svg";

export default function Categories() {
  const theme = useAppSelector((state) => state.themeSlice.value);

  return (
    <ItemSlider title={"Categories"}>
      <Card categories={true} link={""}>
        {theme === "dark" ? (
          <Image src={computers_dark} alt={"Computers"} />
        ) : (
          <Image src={computers} alt={"Computers"} />
        )}
      </Card>
      <Card categories={true} link={""}>
        {theme === "dark" ? (
          <Image src={computer_components_dark} alt={"Computer Components"} />
        ) : (
          <Image src={computer_components} alt={"Computer Components"} />
        )}
      </Card>
      <Card categories={true} link={""}>
        <Image src={screens} alt={"Screens"} />
      </Card>
      <Card categories={true} link={""}>
        {theme === "dark" ? (
          <Image src={computer_accessories_dark} alt={"Computer Accessories"} />
        ) : (
          <Image src={computer_accessories} alt={"Computer Accessories"} />
        )}
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
  );
}
