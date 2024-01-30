import React from "react";
import ItemSlider from "../ItemSlider";
import ProductCard from "./ProductCard";
import Image from "next/image";

export default function Products({ title }: { title: string }) {
  return (
    <ItemSlider categories={false} title={title}>
      <ProductCard link="">
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </ProductCard>
      <ProductCard link="">
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </ProductCard>
      <ProductCard link="">
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </ProductCard>
      <ProductCard link="">
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </ProductCard>
      <ProductCard link="">
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </ProductCard>
      <ProductCard link="">
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </ProductCard>
      <ProductCard link="">
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </ProductCard>
      <ProductCard link="">
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </ProductCard>
      <ProductCard link="">
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </ProductCard>
      <ProductCard link="">
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </ProductCard>
      <ProductCard link="">
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </ProductCard>
      <ProductCard link="">
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </ProductCard>
      <ProductCard link="">
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </ProductCard>
      <ProductCard link="">
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </ProductCard>
      <ProductCard link="">
        <Image
          width={200}
          height={200}
          alt={""}
          src="https://via.placeholder.com/210/00FF00?text=1"
        />
      </ProductCard>
    </ItemSlider>
  );
}
