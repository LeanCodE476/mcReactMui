import { Box, Button, FormControl, Modal, TextField } from "@mui/material";

const ModalClient = ({ setOpen, open, updateClient, setInputEditName}) => {
  const textFieldStyle = {
    background: "white",
  };
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
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
            label="Coloca el nombre corregido"
            variant="filled"
            color="success"
            InputProps={{ style: textFieldStyle }}
            onChange={(e) => setInputEditName(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#27AE60", mt: 2 }}
            onClick={() => updateClient()}
          >
            Editar cliente
          </Button>
        </FormControl>
      </Box>
    </Modal>
  );
};

export default ModalClient;
