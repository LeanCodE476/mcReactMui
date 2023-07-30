import { Button } from '@mui/material'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const ButtonBack = ({
  setIsWatch,
  setNameClient,
  setInputNota,
  setInputMonto,
}) => {
  return (
    <Button
      variant="contained"
      sx={{ bgcolor: "green", p: 1, margin: "1rem 0 1rem 0" }}
      onClick={() => {
        setIsWatch(true);
        setNameClient("");
        setInputNota("");
        setInputMonto("");
      }}
    >
      <ArrowBackIcon />
      Volver
    </Button>
  );
};

export default ButtonBack