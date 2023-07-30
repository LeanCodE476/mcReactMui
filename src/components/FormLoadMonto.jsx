import { Button, FormControl, TextField } from "@mui/material";

const FormLoadMonto = ({
  cleanInput,
  setInputMonto,
  setInputNota,
  loadMonto
}) => {
  return (
    <FormControl
      sx={{
        m: "1rem 0 0 -1.4rem",
        mb: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems:'center',
        flexWrap: "wrap",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Coloca un monto"
        variant="outlined"
        color="success"
        size="small"
        onChange={(e) => setInputMonto(e.target.value)}
        sx={{ mr: 1,mt:1}} 
      />
      <TextField
        id="outlined-basic"
        label="Coloca una nota "
        variant="outlined"
        color="success"
        size="small"
        onChange={(e) => setInputNota(e.target.value)}
        sx={{ mr: 1, width: "100%",mt:1 }} 
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: "#27AE60", width: '10rem', mt: 1 }}
        onClick={()=>loadMonto()}
      >
        Cargar Monto
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#E74C3C", width:'10rem',mt:1  }} 
        onClick={() => cleanInput()}
      >
        Cancelar X
      </Button>
    </FormControl>
  );
};

export default FormLoadMonto;
