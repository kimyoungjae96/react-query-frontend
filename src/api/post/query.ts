import {
  infiniteQueryOptions,
  queryOptions,
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { postAPI } from "./api";

export const postQueries = {
  all: () => ["post"],
  list: (params: { page: number; size: number }) => {
    return infiniteQueryOptions({
      initialPageParam: { ...params },
      queryKey: [...postQueries.all(), "list"],
      queryFn: ({ pageParam }) => {
        const { page, size } = pageParam;
        return postAPI.getPostList({
          start: page === 1 ? 0 : size * (page - 1),
          limit: size,
        });
      },
      getNextPageParam: (lastPage, allPages) => {
        const pageCount = allPages.length;
        return {
          ...params,
          page: pageCount + 1,
        };
      },
      select: (data) => {
        return data.pages.flatMap((page) => page);
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

export const usePostList = (params: { page: number; size: number }) => {
  const { page, size } = params;
  return useSuspenseInfiniteQuery(postQueries.list({ page, size }));
};

export const usePostDetail = ({ id }: { id: string }) => {
  return useSuspenseQuery(postQueries.detail(id));
};
