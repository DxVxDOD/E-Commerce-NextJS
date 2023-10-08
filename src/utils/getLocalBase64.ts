import {getPlaiceholder} from "plaiceholder";
export default async function getBase64 (imgUrl: string) {
   try {
      const response = await fetch(imgUrl);
      if(!response.ok)
      {
         throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`)
      }
      const buffer = await response.arrayBuffer();
      const { base64 } = await getPlaiceholder(Buffer.from(buffer));
      return base64
   }
   catch (err) {
      if (err instanceof Error) console.log(err.stack);
   }
}