import ImageUrlBuilder from "@sanity/image-url";
import {createClient} from "next-sanity";

export const client = createClient({
  projectId: "r14b9c3a",
  dataset: "production",
  apiVersion: "2022-07-25",
  useCdn: false,
  token: `skU3w10wWbxM1vKwvnhKY41wj7mZXdUYjV1QRjTehhYs7iPEtTRACUNCTvijrAl4hcCImlRYU33pgcpzCOoAjSp8o0udF1mi5XPVEPX6ChS8FZElkyEBqEBz6I1ez1pTmtvsfbTmz7tpqgmFld2NIdPXymOn3UjAM781J2DQbdp9tHTikAvg`,
  // ignoreBrowserTokenWarning: true
});

const builder = ImageUrlBuilder(client);
export const urlFor = (src) => builder.image(src);
