import img6630 from "@/assets/property/IMG_6630.asset.json";
import img6631 from "@/assets/property/IMG_6631.asset.json";
import img6634 from "@/assets/property/IMG_6634.asset.json";
import img6637 from "@/assets/property/IMG_6637.asset.json";
import img6639 from "@/assets/property/IMG_6639.asset.json";
import img6643 from "@/assets/property/IMG_6643.asset.json";
import img6646 from "@/assets/property/IMG_6646.asset.json";
import img6653 from "@/assets/property/IMG_6653.asset.json";
import img6654 from "@/assets/property/IMG_6654.asset.json";
import img6656 from "@/assets/property/IMG_6656.asset.json";
import pool2 from "@/assets/property/pool2.jpg.asset.json";
import img6635 from "@/assets/property/IMG_6635.png.asset.json";
import img6634b from "@/assets/property/IMG_6634b.png.asset.json";
import img6639b from "@/assets/property/IMG_6639b.png.asset.json";
import img6649 from "@/assets/property/IMG_6649.png.asset.json";
import img6652 from "@/assets/property/IMG_6652.png.asset.json";
import img6644 from "@/assets/property/IMG_6644.png.asset.json";
import img6657 from "@/assets/property/IMG_6657.png.asset.json";
import img6651 from "@/assets/property/IMG_6651.png.asset.json";

export const IMG = {
  exterior: img6630.url,
  poolExterior: img6631.url,
  poolWide: pool2.url,
  bedroomDetail: img6634.url,
  bedroomLinen: img6634b.url,
  bedroomMain: img6637.url,
  bedroomSecondary: img6639.url,
  bedroomChairs: img6639b.url,
  bedroomSingle: img6635.url,
  bedroomLamp: img6652.url,
  bathroomDetail: img6643.url,
  livingRoom: img6646.url,
  bathroomMain: img6653.url,
  loungeMain: img6654.url,
  decorDetail: img6656.url,
  kitchen: img6649.url,
  kitchenAppliances: img6657.url,
  dining: img6651.url,
  diningKitchen: img6644.url,
};

export const GALLERY: { src: string; category: string; alt: string }[] = [
  { src: IMG.loungeMain, category: "Living Room", alt: "Elegant living room with curved sofas and chandelier" },
  { src: IMG.livingRoom, category: "Living Room", alt: "Warm living room with wooden coffee table" },
  { src: IMG.bedroomMain, category: "Bedrooms", alt: "Master bedroom with symmetrical lamps" },
  { src: IMG.bedroomLinen, category: "Bedrooms", alt: "Crisp striped linens with textured bolster pillow" },
  { src: IMG.bedroomChairs, category: "Bedrooms", alt: "Bedroom with lounge chairs and balcony doors" },
  { src: IMG.bedroomSingle, category: "Bedrooms", alt: "Cozy single bedroom with wall-mounted TV" },
  { src: IMG.bedroomLamp, category: "Bedrooms", alt: "Bedside detail with brass lamp and textured pillows" },
  { src: IMG.kitchen, category: "Kitchen & Dining", alt: "Modern kitchen with wooden cabinetry and pendant lights" },
  { src: IMG.diningKitchen, category: "Kitchen & Dining", alt: "Dining table beside the open kitchen" },
  { src: IMG.dining, category: "Kitchen & Dining", alt: "Intimate dining nook with framed artwork" },
  { src: IMG.kitchenAppliances, category: "Kitchen & Dining", alt: "Full appliance suite with oven, fridge and laundry" },
  { src: IMG.bathroomMain, category: "Bathrooms", alt: "Full bathroom with soaking tub" },
  { src: IMG.bathroomDetail, category: "Bathrooms", alt: "Vessel sink and chrome fixtures" },
  { src: IMG.poolWide, category: "Swimming Pool", alt: "Wide view of the pool with integrated whirlpool" },
  { src: IMG.poolExterior, category: "Swimming Pool", alt: "Pool and cabana lounge area" },
  { src: IMG.exterior, category: "Exterior", alt: "Modern exterior facade with landscaped walkway" },
];
