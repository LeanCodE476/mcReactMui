import { Container, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "../components/Header";
import TableClient from "../components/TableClient";
import ButtonLoad from "../components/ButtonLoad";
import FormLoadClient from "../components/FormLoadClient";
import { useState } from "react";
import { useSnackbar } from "notistack";
import ModalClient from "../components/ModalClient";
import TableMontos from "../components/TableMontos";
import ButtonBack from "../components/ButtonBack";
import FormLoadMonto from "../components/FormLoadMonto";
import ModalNota from "../components/ModalNota";
import ModalMonto from "../components/ModalMonto";

const Home = () => {
  const [clientList, setClientList] = useState([]);
  const [isLoadClient, setIsLoadClient] = useState(false);
  const [inputName, setInputName] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [inputEditName, setInputEditName] = useState("");
  const [idClientSelected, setIdClientSelected] = useState("");
  const [isWatch, setIsWatch] = useState(true);
  const [isLoadMonto, setIsLoadMonto] = useState(false);
  const [nameClient, setNameClient] = useState("");
  const [inputMonto, setInputMonto] = useState("");
  const [inputNota, setInputNota] = useState("");
  const [openNota, setOpenNota] = useState(false);
  const [nota, setNota] = useState("");
  const [openMonto, setOpenMonto] = useState(false);
  const [idMonto, setIdMonto] = useState("");
  const [newMonto, setNewMonto] = useState("");
  const [newNota, setNewNota] = useState("");

  // Función para calcular la suma total de los montos de un cliente
  const calculateTotal = (montos) => {
    return montos.reduce((total, monto) => total + Number(monto.monto), 0);
  };

  // clean form name
  const cleanInput = () => {
    setInputName("");
    setIsLoadClient(false);
    setInputEditName("");
    setIsLoadMonto(false);
    setInputNota("");
    setNota("");
  };

  // FUNCION PARA VALIDAR UN INPUT TEXTO
  const validateName = (name) => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(name);
  };

  const validateMonto = (monto) => {
    const regex = /^[0-9]+$/;
    return regex.test(monto);
  };

  // function to load a client
  const loadClient = () => {
    if (inputName === "") {
      enqueueSnackbar("Coloca un nombre", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    } else if (!validateName(inputName)) {
      enqueueSnackbar("El nombre debe contener solo letras y espacios.", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    } else {
      setClientList([
        ...clientList,
        {
          id: Date.now(),
          name: inputName,
          saldoTotal: 0,
          montos: [],
        },
      ]);
      enqueueSnackbar("El cliente fue cargado correctamente :D", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      cleanInput();
    }
  };

  // function to delete a client
  const deleteClient = (id) => {
    if (confirm("Seguro que quieres eliminar?")) {
      const newArr = clientList.filter((client) => client.id !== id);

      setClientList(newArr);

      enqueueSnackbar("--Cliente eliminado correctamente--", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  };

  // function to edit a client
  const editClient = (id, name) => {
    setOpen(true);
    setIdClientSelected(id);
    setNameClient(name);
  };

  // function to update a client
  const updateClient = () => {
    if (inputEditName === "") {
      enqueueSnackbar("Coloca un nombre o letra", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    } else if (!validateName(inputEditName)) {
      enqueueSnackbar("El nombre debe contener solo letras y espacios.", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    } else {
      const newClient = clientList.map((client) => {
        if (client.id === idClientSelected) {
          return {
            ...client,
            name: inputEditName,
          };
        }
        return client;
      });
      setClientList(newClient);

      enqueueSnackbar("Nombre de cliente actualizado correctamente :D", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      cleanInput();
      setOpen(false);
    }
  };

  // function to watch tablemontos and more
  const watchMontos = (name, id) => {
    setIsWatch(false);
    setNameClient(name);
    setIdClientSelected(id);
  };

  // function to load an amount
  const loadMonto = () => {
    if (inputMonto === "") {
      enqueueSnackbar("Coloca un monto!", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    } else if (!validateMonto(inputMonto)) {
      enqueueSnackbar("Debes colocar un numero sin puntos ni comas", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    } else {
      const setFecha = new Date().toLocaleDateString();

      const newMonto = clientList.map((obj) => {
        if (obj.id === idClientSelected) {
          const newObj = {
            id: Date.now(),
            fecha: setFecha,
            nota: inputNota,
            monto: inputMonto,
          };
          return {
            ...obj,
            montos: [...obj.montos, newObj],
            saldoTotal: calculateTotal([...obj.montos, newObj]),
          };
        }
        return obj;
      });

      setClientList(newMonto);

      enqueueSnackbar("El monto fue cargado correctamente :D", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      cleanInput();
    }
  };

  //function to delete an amount
  const deleteMonto = (id) => {
    if (confirm("Seguro que quieres borrar el monto?")) {
      const updatedClientList = clientList.map((client) => {
        if (client.id === idClientSelected) {
          const updatedMontos = client.montos.filter(
            (monto) => monto.id !== id
          );
          return {
            ...client,
            montos: updatedMontos,
            saldoTotal: calculateTotal(updatedMontos),
          };
        }
        return client;
      });

      setClientList(updatedClientList);
      enqueueSnackbar("--Monto eliminado correctamente--", {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  };

  //function to watch nota
  const watchNota = (value) => {
    setOpenNota(true);
    setNota(value);
  };

  //function to edit an amount
  const editMonto = (id) => {
    setOpenMonto(true);
    setIdMonto(id);
  };

  //function to update an amount
  const updateMonto = () => {
    const updatedClientList = clientList.map((client) => {
      if (client.id === idClientSelected) {
        const updatedMontos = client.montos.map((monto) => {
          if (monto.id === idMonto) {
            if (newMonto.length > 0 || newNota.length > 0) {
              return { ...monto, monto: newMonto, nota: newNota };
            }
          }
          return monto;
        });
        return {
          ...client,
          montos: updatedMontos,
          saldoTotal: calculateTotal(updatedMontos),
        };
      }
      return client;
    });

    setClientList(updatedClientList);

    setOpenMonto(false);

    enqueueSnackbar("Monto editado correctamente", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
  };

  // Check if the screen width is small (e.g., mobile devices)
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Header />
      <Container sx={{ height: "80vh" }}>
        {/* Code for the first section */}
        {isWatch ? (
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {isLoadClient ? (
              <FormLoadClient
                setIsLoadClient={setIsLoadClient}
                loadClient={loadClient}
                setInputName={setInputName}
                cleanInput={cleanInput}
              />
            ) : (
              <ButtonLoad
                text="Cargar cliente nuevo"
                setter={setIsLoadClient}
              />
            )}
          </Container>
        ) : (
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: isSmallScreen ? "column" : "row",
              mb: 2,
            }}
          >
            <ButtonBack
              setIsWatch={setIsWatch}
              setNameClient={setNameClient}
              setInputMonto={setInputMonto}
              setInputNota={setInputNota}
            />

            <Typography
              variant="h6"
              sx={{
                bgcolor: "white",
                p: 0.8,
                borderRadius: 1,
                fontWeight: 500,
                border: "1px solid black",
              }}
            >
              Cliente: {nameClient || "Nombre cliente"}
            </Typography>
            {isLoadMonto ? (
              <FormLoadMonto
                cleanInput={cleanInput}
                loadMonto={loadMonto}
                setInputMonto={setInputMonto}
                setInputNota={setInputNota}
              />
            ) : (
              <ButtonLoad text="Cargar monto nuevo" setter={setIsLoadMonto} />
            )}
          </Container>
        )}
        {/* Code for the table sections */}
        {isWatch ? (
          <TableClient
            clientList={clientList}
            deleteClient={deleteClient}
            editClient={editClient}
            watchMontos={watchMontos}
          />
        ) : (
          <TableMontos
            clientList={clientList}
            idClientSelected={idClientSelected}
            deleteMonto={deleteMonto}
            setOpenNota={setOpenNota}
            watchNota={watchNota}
            editMonto={editMonto}
          />
        )}
        {/* Here watch the total amount */}
        {!isWatch && (
          <Typography
            variant="h6"
            sx={{
              bgcolor: "white",
              p: 0.8,
              m: "2rem auto",
              borderRadius: 1,
              fontWeight: 600,
              border: "1px solid gray",
              textAlign: "center",
              width: "50%",
              minWidth: "15rem",
            }}
          >
            Suma Total: $
            {clientList.find((client) => client.id === idClientSelected)
              ?.saldoTotal || 0}
          </Typography>
        )}
        {/* Code for the modal */}
        <ModalClient
          setOpen={setOpen}
          open={open}
          updateClient={updateClient}
          setInputEditName={setInputEditName}
        />
        <ModalNota
          setOpenNota={setOpenNota}
          openNota={openNota}
          nota={nota}
          setNota={setNota}
          cleanInput={cleanInput}
        />
        <ModalMonto
          openMonto={openMonto}
          setOpenMonto={setOpenMonto}
          setNewMonto={setNewMonto}
          setNewNota={setNewNota}
          updateMonto={updateMonto}
        />
      </Container>
    </>
  );
};

export default Home;
