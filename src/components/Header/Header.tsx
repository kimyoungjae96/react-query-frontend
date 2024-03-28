import { useNavigate } from "react-router-dom";

import styles from "./Header.module.css";

export const Header = () => {
  const navigate = useNavigate();

  const handleClickGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.header} onClick={handleClickGoBack}>
      뒤로가기
    </div>
  );
};
