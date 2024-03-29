import { Post } from "./type";
import { IHttpClient, backendHttpClient } from "../common/httpClient";
import { GetPostListResponse, GetPostDetailResponse } from "./response";

type IPostAPI = {
  getPostList({
    start,
    limit,
  }: {
    start: number;
    limit: number;
  }): Promise<GetPostListResponse>;
  getPostDetail({ id }: { id: string }): Promise<GetPostDetailResponse>;
};

class PostAPI implements IPostAPI {
  constructor(private httpClient: IHttpClient) {}

  async getPostList({ start, limit }: Parameters<IPostAPI["getPostList"]>[0]) {
    const { data } = await this.httpClient.request<GetPostListResponse>({
      method: "GET",
      url: `/posts`,
      params: { _start: start, _limit: limit },
    });

    return data as Post[];
  }

  async getPostDetail({ id }: Parameters<IPostAPI["getPostDetail"]>[0]) {
    const { data } = await this.httpClient.request<GetPostDetailResponse>({
      method: "GET",
      url: `/posts/${id}`,
    });
    return data;
  }
}

export const postAPI = new PostAPI(backendHttpClient);
