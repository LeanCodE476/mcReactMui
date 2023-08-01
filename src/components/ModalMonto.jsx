import { Box, Button, FormControl, Modal, TextField } from "@mui/material";

const ModalMonto = ({ setOpenMonto, openMonto, setNewNota, setNewMonto,updateMonto }) => {
  const textFieldStyle = {
    background: "white",
  };
  return (
    <Modal
      open={openMonto}
      onClose={() => setOpenMonto(false)}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: 300 }}>
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="Coloca el monto corregido"
            variant="filled"
            color="success"
            InputProps={{ style: textFieldStyle }}
            onChange={(e) => setNewMonto(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Coloca la nota corregida"
            variant="filled"
            color="success"
            InputProps={{ style: textFieldStyle }}
            sx={{ mt: 1 }}
            onChange={(e) => setNewNota(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#27AE60", mt: 2 }}
            onClick={() => updateMonto()}
          >
            Actualizar
          </Button>
        </FormControl>
      </Box>
    </Modal>
  );
};

export default ModalMonto;
