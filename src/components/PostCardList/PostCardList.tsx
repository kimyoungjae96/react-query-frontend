import { usePostList } from "@/api/post";
import { PostCard } from "../PostCard";

export const PostCardList = () => {
  const { data } = usePostList();

  return data.map((post) => {
    return <PostCard post={post} />;
  });
};
