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
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const TableClient = ({
  clientList,
  deleteClient,
  editClient,
  watchMontos,
}) => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "40rem" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Saldo Actual</TableCell>
            <TableCell align="center">Ver Cliente</TableCell>
            <TableCell align="center">Editar</TableCell>
            <TableCell align="center">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientList.map((client) => (
            <TableRow key={client.id}>
              <TableCell align="center">
                <Typography fontWeight={600}>{client.name}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography fontWeight={600}>$30.000</Typography>
              </TableCell>
              <TableCell align="center">
                <IconButton onClick={()=>watchMontos(client.name,client.id)}>
                  <RemoveRedEyeIcon sx={{ color: "#8E44AD" }} />
                </IconButton>
              </TableCell>
              <TableCell align="center">
                <IconButton onClick={() => editClient(client.id)}>
                  <EditIcon sx={{ color: "green" }} />
                </IconButton>
              </TableCell>
              <TableCell align="center">
                <IconButton onClick={() => deleteClient(client.id)}>
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableClient;
