import { Header, PostCardList } from "@/components";
import { Suspense } from "react";

export const PostListPage = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>로딩중...</div>}>
        <PostCardList />
      </Suspense>
    </div>
  );
};
