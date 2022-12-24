import githubIcon from "./gitHub-black.svg";
import "./style.css";

const BtnGutHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={githubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGutHub;
