import { usePostList } from "@/api/post";
import { PostCard } from "../PostCard/PostCard";

export const PostCardList = () => {
  const { data, isPending, error } = usePostList();

  if (isPending) {
    return "Loading...";
  }

  if (error) {
    return "Error.";
  }

  return data.map((post) => {
    return <PostCard post={post} />;
  });
};
