import { Button, FormControl, TextField } from "@mui/material"

const FormLoadClient = ({
  setIsLoadClient,
  loadClient,
  setInputName,
  cleanInput,
}) => {
  return (
    <FormControl sx={
      {
        m: "1rem 0 0 -1rem", mb: 2, display: "flex", flexDirection: "row", flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems:'center',
        gap:1,

      }}>
      <TextField
        id="outlined-basic"
        label="Nombre de cliente"
        variant="outlined"
        color="success"
        size="small"
        onChange={(e) => setInputName(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: "#27AE60", ml: 2,fontSize:'.8rem' }}
        onClick={() => loadClient()}
      >
        Cargar Cliente
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#E74C3C", ml: 2,fontSize:'.8rem' }}
        onClick={() => cleanInput()}
      >
        Cancelar X
      </Button>
    </FormControl>
  );
};

export default FormLoadClient