import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/amenities")({
  beforeLoad: () => {
    throw redirect({ to: "/about" });
  },
  component: () => null,
});
