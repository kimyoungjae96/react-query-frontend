import { Post, usePostList } from "@/api/post";
import { PostCard } from "../PostCard";

import { Virtuoso } from "react-virtuoso";

export const PostCardList = () => {
  const { data, hasNextPage, fetchNextPage, isFetching } = usePostList({
    page: 1,
    size: 10,
  });

  const renderItemContent = (index: number, item: Post) => {
    return <PostCard post={item} />;
  };

  const handleEndReached = () => {
    if (!isFetching && hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <>
      {isFetching && (
        <div style={{ position: "absolute", top: 0, left: 0, color: "pink" }}>
          로딩중...
        </div>
      )}
      <Virtuoso
        style={{ height: "400px" }}
        data={data}
        itemContent={renderItemContent}
        endReached={handleEndReached}
      />
    </>
  );
};
