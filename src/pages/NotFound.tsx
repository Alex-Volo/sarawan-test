import { useNavigate } from "react-router-dom";
import S from "./Main/Main.module.css";

export const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      Нет такой страницы{" "}
      <button onClick={() => navigate("/")} className={S.filterButton}>
        Back to the main page
      </button>
    </div>
  );
};
