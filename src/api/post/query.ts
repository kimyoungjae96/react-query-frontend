import { useQuery } from "@tanstack/react-query";
import { postAPI } from "./api";

export const usePostList = () => {
  return useQuery({
    queryKey: ["postList"],
    queryFn: () => {
      return postAPI.getPostList();
    },
  });
};
