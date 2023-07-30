import { FormControl, IconButton, TextField } from '@mui/material';
import ClearIcon from "@mui/icons-material/Clear";

const FilterClient = ({nameFilter,setNameFilter}) => {
  return (
    <FormControl
      sx={{
        width: "28rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Busca un cliente para encontrarlo mas rapido"
        variant="outlined"
        size="small"
        fullWidth
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <IconButton onClick={() => setNameFilter("")}>
        <ClearIcon sx={{ color: "red" }} />
      </IconButton>
    </FormControl>
  );
}

export default FilterClient