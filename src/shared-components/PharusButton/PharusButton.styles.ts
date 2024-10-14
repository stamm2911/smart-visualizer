import PharusPrimaryLogo from "../../assets/img/PharusPrimaryLogo.png";

export const PharusButtonStyles = {
  padding: 0,
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  backgroundImage: `url(${PharusPrimaryLogo})`,
  backgroundPosition: "center",
  transition: "transform 0.2s ease",
  "&:hover": {
    transform: "scale(1.1) rotate(15deg)",
  },
};
