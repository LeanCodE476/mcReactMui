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
      sx={{ bgcolor: "green", p: .5, margin: "1rem 0 1rem 0",textAlign:'center'}}
      onClick={() => {
        setIsWatch(true);
        setNameClient("");
        setInputNota("");
        setInputMonto("");
      }}
    >
      <ArrowBackIcon />
    </Button>
  );
};

export default ButtonBack