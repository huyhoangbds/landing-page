import { cars } from "./cars";

// Keep existing price-page anchors stable. All starting prices come from cars.ts.
const priceAnchors: Record<string, string> = {
  "vf-2": "gia_xe_vf2",
  "vf-3": "gia_xe_vf3",
  "vf-5": "gia_xe_vf5",
  "vf-6": "gia_xe_vf6",
  "vf-7": "gia_xe_vf7",
  "mpv-7": "gia_xe_mpv7",
  "vf-8": "gia_xe_vf8",
  "vf-8-all-new": "gia_xe_vf8_all_new",
  "vf-9": "gia_xe_vf9",
  "vf-wild": "gia_xe_vf_wild",
  "minio-green": "gia_xe_minio",
  "herio-green": "gia_xe_herio",
  "nerio-green": "gia_xe_nerio",
  "limo-green": "gia_xe_limo",
  "ec-van": "gia_xe_van"
};

const prices = cars.map(car => ({
  id: priceAnchors[car.slug],
  title: car.name.toUpperCase(),
  image: car.image,
  variants: [{ name: car.name, price: car.price * 1_000_000 }],
}));
export default prices;
