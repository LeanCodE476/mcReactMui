import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SnackbarProvider } from "notistack";
import { MaterialDesignContent } from "notistack";
import styled from "@emotion/styled";
import { CssBaseline } from "@mui/material";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-error": {
    fontSize: "1rem",
  },
  "&.notistack-MuiContent-warning": {
    fontSize: "1rem",
  },
  "&.notistack-MuiContent-success": {
    fontSize: "1rem",
  },
}));

ReactDOM.createRoot(document.getElementById("root")).render(
  <SnackbarProvider
    maxSnack={1}
    autoHideDuration={1500}
    Components={{
      error: StyledMaterialDesignContent,
      warning: StyledMaterialDesignContent,
      success: StyledMaterialDesignContent,
    }}
  >
    <CssBaseline>
      <App />
    </CssBaseline>
  </SnackbarProvider>
);
