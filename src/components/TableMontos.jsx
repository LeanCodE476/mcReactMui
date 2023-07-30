import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
const TableMontos = ({
  clientList,
  idClientSelected,
  deleteMonto,

  watchNota,
}) => {
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "40rem" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">Fecha</TableCell>
            <TableCell align="center">Monto</TableCell>
            <TableCell align="center">Nota</TableCell>
            <TableCell align="center">Editar</TableCell>
            <TableCell align="center">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientList.map((client) => {
            if (client.id === idClientSelected) {
              return client.montos.map((monto) => (
                <TableRow key={monto.id}>
                  <TableCell align="center">
                    <Typography fontWeight={600}>{monto.fecha}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography fontWeight={600} color={"blue"}>
                      ${formatNumber(monto.monto)}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {monto.nota.length > 0 ? (
                      <IconButton onClick={() => watchNota(monto.nota)}>
                        <ReceiptLongIcon sx={{ color: "#B7950B" }} />
                      </IconButton>
                    ) : null}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <EditIcon sx={{ color: "green" }} />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => deleteMonto(monto.id)}>
                      <DeleteIcon sx={{ color: "red" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ));
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableMontos;
