import { Post, postAPI } from "@/api/post";
import styles from "./PostCard.module.css";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";

type PostCardProps = {
  post: Post;
};

export const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id, title, views } = post;

  const handleClickPost = () => {
    navigate(`/posts/${id}`);
  };

  const prefetchPostDetail = () => {
    queryClient.prefetchQuery({
      queryKey: ["post", { id }],
      queryFn: () => {
        return postAPI.getPostDetail({ id });
      },
    });
  };

  return (
    <div
      className={styles.postCard}
      key={post.id}
      onClick={handleClickPost}
      onMouseEnter={prefetchPostDetail}
    >
      <h2 className={styles.postTitle}>{title}</h2>
      <div className={styles.postViews}>
        <span className={styles.viewsIcon}>👀</span>
        <span>{views}</span>
      </div>
    </div>
  );
};
