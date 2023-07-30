import {IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ButtonLoadClient = ({ setter,text }) => {
  return (
    <IconButton
      sx={{
        backgroundColor: "#4525d1",
        color: "white",
        padding: ".6rem 1rem .6rem 1rem",
        margin: "1rem 0 1rem -1.4rem",
        borderRadius: "5px",
      }}
      onClick={() =>setter(true)}
    >
      <Typography>{text}</Typography>
      <AddIcon />
    </IconButton>
  );
};

export default ButtonLoadClient;
