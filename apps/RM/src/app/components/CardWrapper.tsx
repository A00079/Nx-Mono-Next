import { axiosInstance } from "@credence/api";
import { Card } from "@credence/ui";
import { QueryClient } from "@tanstack/react-query";

const CardWrapper = async () => {
  const queryClient = new QueryClient();

    const fetchPosts = async () => {
        const response = await axiosInstance.get('users', {});
        return response.data;
    };

    const postsData = await queryClient.fetchQuery({
        queryKey: ['users'],
        queryFn: fetchPosts,
    });
  return (
    <div>
        <Card cardData={postsData} />
    </div>
  )
}

export default CardWrapper;
