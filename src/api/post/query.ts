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

export const usePostDetail = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ["postDetail", id],
    queryFn: () => {
      return postAPI.getPostDetail({ id });
    },
  });
};
