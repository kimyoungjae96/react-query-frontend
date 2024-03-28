import { usePostList } from "@/api/post";
import styles from "./PostCardList.module.css";

export const PostCardList = () => {
  const { data, isPending, error } = usePostList();

  if (isPending) {
    return "Loading...";
  }

  if (error) {
    return "Error.";
  }

  return data.map((post) => {
    return (
      <div className={styles.postCard} key={post.id}>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <div className={styles.postViews}>
          <span className={styles.viewsIcon}>👀</span>
          <span>{post.views}회 조회</span>
        </div>
      </div>
    );
  });
};
