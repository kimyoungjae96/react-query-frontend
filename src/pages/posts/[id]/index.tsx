import { usePostDetail } from "@/api/post";
import { Header } from "@/components";
import { useTypedParams } from "@/hooks/useTypedParams";

export const PostDetailPage = () => {
  const { id: postId } = useTypedParams(["id"]);
  const { data, isPending, error } = usePostDetail({ id: postId });

  if (isPending) {
    return "Loading...";
  }

  if (error) {
    return "Error.";
  }

  return (
    <div>
      <Header />
      <h4>제목: {data.title}</h4>
      <h4>조회수: {data.views}</h4>
    </div>
  );
};
