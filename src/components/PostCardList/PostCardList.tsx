import { usePostList } from "@/api/post";
import styles from "./PostCardList.module.css";
import { useNavigate } from "react-router-dom";

export const PostCardList = () => {
  const navigate = useNavigate();
  const { data, isPending, error } = usePostList();

  const handleClickPost = (id: string) => {
    navigate(`/posts/${id}`);
  };

  if (isPending) {
    return "Loading...";
  }

  if (error) {
    return "Error.";
  }

  return data.map((post) => {
    return (
      <div
        className={styles.postCard}
        key={post.id}
        onClick={() => {
          handleClickPost(post.id);
        }}
      >
        <h2 className={styles.postTitle}>{post.title}</h2>
        <div className={styles.postViews}>
          <span className={styles.viewsIcon}>👀</span>
          <span>{post.views}</span>
        </div>
      </div>
    );
  });
};
