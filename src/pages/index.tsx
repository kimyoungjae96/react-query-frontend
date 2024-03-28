import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();

  const handleClickGoToPostList = () => {
    navigate("/posts");
  };

  return (
    <div>
      <h2>메인페이지</h2>
      <button onClick={handleClickGoToPostList}>목록으로 가기</button>
    </div>
  );
};
