import { queryOptions, useQuery } from "@tanstack/react-query";
import { postAPI } from "./api";

export const postQueries = {
  all: () => ["post"],
  list: () => {
    return queryOptions({
      queryKey: [...postQueries.all(), "list"],
      queryFn: () => {
        return postAPI.getPostList();
      },
    });
  },
  details: () => [postQueries.all(), "details"],
  detail: (id: string) => {
    return queryOptions({
      queryKey: [postQueries.details(), id],
      queryFn: () => {
        return postAPI.getPostDetail({ id });
      },
    });
  },
};

export const usePostList = () => {
  return useQuery(postQueries.list());
};

export const usePostDetail = ({ id }: { id: string }) => {
  return useQuery(postQueries.detail(id));
};
