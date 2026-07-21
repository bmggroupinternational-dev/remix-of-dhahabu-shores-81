import { createFileRoute } from "@tanstack/react-router";
import { ApartmentDetail } from "./apartments.2-bedroom";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/apartments/3-bedroom")({
  head: () => ({
    meta: [
      { title: "3 Bedroom Apartment — Dhahabu Suites" },
      {
        name: "description",
        content:
          "An expansive three bedroom serviced apartment in Mbezi Beach — sleeps up to 6, ideal for families, groups and extended stays.",
      },
      { property: "og:title", content: "3 Bedroom Apartment — Dhahabu Suites" },
      { property: "og:url", content: "/apartments/3-bedroom" },
    ],
    links: [{ rel: "canonical", href: "/apartments/3-bedroom" }],
  }),
  component: () => (
    <ApartmentDetail
      title="Three Bedroom Apartment"
      subtitle="Our most expansive residence — designed for families, groups and long stays that demand true room to live."
      guests={6}
      beds={3}
      baths={3}
      gallery={[IMG.loungeMain, IMG.diningKitchen, IMG.bedroomChairs, IMG.bedroomSingle, IMG.kitchenAppliances, IMG.bedroomLamp]}
      description={[
        "The three bedroom apartments extend everything Dhahabu stands for — more living, more privacy, more space for a family or a group to be at ease. Three ensuite bedrooms sit off a broad living and dining area, anchored by a fully equipped kitchen.",
        "Ideal for extended stays, corporate housing and multi-generational travel, with the quiet service and security you'd expect from a private residence.",
      ]}
    />
  ),
});
