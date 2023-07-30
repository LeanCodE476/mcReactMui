import { Box, Modal, Typography } from "@mui/material";

const ModalNota = ({ setOpenNota, openNota, nota, cleanInput }) => {
  return (
    <Modal
      open={openNota}
      onClose={() => {
        setOpenNota(false);
        cleanInput();
      }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 300,
          bgcolor: "#EAEDED ",
          height: 200,
          borderRadius: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontSize: "1.2rem", p: 1 }}>
          {nota}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalNota;
