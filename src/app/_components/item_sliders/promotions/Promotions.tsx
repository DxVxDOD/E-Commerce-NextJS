import React from "react";
import ItemSlider from "../ItemSlider";
import PromotionsCard from "./PromotionsCard";
import Image from "next/image";

export default function Promotions() {
  return (
    <ItemSlider categories={false} title={"Promotions"}>
      <PromotionsCard link={""}>
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </PromotionsCard>
      <PromotionsCard link={""}>
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </PromotionsCard>
      <PromotionsCard link={""}>
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </PromotionsCard>
      <PromotionsCard link={""}>
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </PromotionsCard>
      <PromotionsCard link={""}>
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </PromotionsCard>
      <PromotionsCard link={""}>
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </PromotionsCard>
      <PromotionsCard link={""}>
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </PromotionsCard>
      <PromotionsCard link={""}>
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </PromotionsCard>
      <PromotionsCard link={""}>
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </PromotionsCard>
      <PromotionsCard link={""}>
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </PromotionsCard>
    </ItemSlider>
  );
}
