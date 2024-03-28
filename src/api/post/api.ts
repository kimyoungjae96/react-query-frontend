import { Post } from "./type";
import { IHttpClient, backendHttpClient } from "../common/httpClient";
import { GetPostListResponse } from "./response";

type IPostAPI = {
  getPostList(): Promise<GetPostListResponse>;
};

class PostAPI implements IPostAPI {
  constructor(private httpClient: IHttpClient) {}

  async getPostList() {
    const { data } = await this.httpClient.request<GetPostListResponse>({
      method: "GET",
      url: `/posts`,
    });

    return data as Post[];
  }
}

export const postAPI = new PostAPI(backendHttpClient);
