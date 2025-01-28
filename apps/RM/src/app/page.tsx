import { getQueryClient } from "@credence/api";
import { Hero } from "@credence/ui";
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import CardWrapper from "./components/CardWrapper";

const Home = async () => {
  const queryClient = getQueryClient();

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Hero />
        <CardWrapper />
      </HydrationBoundary>
    </div>
  );
}

export default Home;