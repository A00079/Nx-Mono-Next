import { getQueryClient } from "@credence/api";
import { Hero } from "@credence/ui";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Team from "./components/Team";

export default function Home() {
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Hero />
      <Team />
    </HydrationBoundary>
  );
}
