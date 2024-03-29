import { usePostDetail } from "@/api/post";
import { useTypedParams } from "@/hooks/useTypedParams";

export const PostDetail = () => {
  const { id: postId } = useTypedParams(["id"]);
  const { data } = usePostDetail({ id: postId });

  return (
    <>
      <h4>제목: {data.title}</h4>
      <h4>조회수: {data.views}</h4>
    </>
  );
};
