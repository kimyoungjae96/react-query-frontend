import { Header, PostDetail } from "@/components";

import { Suspense } from "react";

export const PostDetailPage = () => {
  return (
    <div>
      <Header />
      <Suspense fallback="로딩중...">
        <PostDetail />
      </Suspense>
    </div>
  );
};
