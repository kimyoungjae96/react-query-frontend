import { usePostList } from "@/api/post";
import { PostCard } from "../PostCard";

export const PostCardList = () => {
  const { data } = usePostList({
    page: 1,
    size: 10,
  });

  return data.map((post) => {
    return <PostCard post={post} />;
  });
};
