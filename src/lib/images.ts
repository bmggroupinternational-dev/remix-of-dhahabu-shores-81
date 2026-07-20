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

export const IMG = {
  exterior: img6630.url,
  poolExterior: img6631.url,
  bedroomDetail: img6634.url,
  bedroomMain: img6637.url,
  bedroomSecondary: img6639.url,
  bathroomDetail: img6643.url,
  livingRoom: img6646.url,
  bathroomMain: img6653.url,
  loungeMain: img6654.url,
  decorDetail: img6656.url,
};

export const GALLERY: { src: string; category: string; alt: string }[] = [
  { src: IMG.loungeMain, category: "Living Room", alt: "Elegant living room with curved sofas and chandelier" },
  { src: IMG.livingRoom, category: "Living Room", alt: "Warm living room with wooden coffee table" },
  { src: IMG.bedroomMain, category: "Bedrooms", alt: "Master bedroom with symmetrical lamps" },
  { src: IMG.bedroomDetail, category: "Bedrooms", alt: "Crisp bedding detail with textured accents" },
  { src: IMG.bedroomSecondary, category: "Bedrooms", alt: "Second bedroom with lounge chairs" },
  { src: IMG.bathroomMain, category: "Bathrooms", alt: "Full bathroom with soaking tub" },
  { src: IMG.bathroomDetail, category: "Bathrooms", alt: "Vessel sink and chrome fixtures" },
  { src: IMG.poolExterior, category: "Swimming Pool", alt: "Pool and cabana lounge area" },
  { src: IMG.exterior, category: "Exterior", alt: "Modern exterior facade with landscaped walkway" },
  { src: IMG.decorDetail, category: "Property Grounds", alt: "Interior decor details" },
];
