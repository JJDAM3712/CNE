import styled from "styled-components";
import logo from "../assets/img/CNE_logo.svg";
import { Button, Modal, Radio, Label, TextInput, Select } from "flowbite-react";
import { FaEraser, FaEdit } from "react-icons/fa";
import {
  HiOutlineExclamationCircle,
  HiMail,
  HiUser,
  HiKey,
  HiPencil,
} from "react-icons/hi";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";

export function ModalRegis() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <>
        <Button onClick={() => setOpenModal(true)}>Registrar Persona</Button>
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          position="top-center"
        >
          <Modal.Header>Registrar Persona</Modal.Header>
          <Modal.Body>
            <form className="flex flex-col gap-4 max-w-full">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nombres" value="Nombre:" />
                </div>
                <TextInput
                  id="nombres"
                  type="text"
                  placeholder="Nombre"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Apellidos" value="Apellidos:" />
                </div>
                <TextInput
                  id="Apellidos"
                  type="text"
                  placeholder="Apellidos"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="cedula" value="Cedula:" />
                </div>
                <TextInput
                  id="cedula"
                  type="number"
                  placeholder="1234567890"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="telefono" value="Teléfono:" />
                </div>
                <TextInput
                  id="telefono"
                  type="number"
                  placeholder="Teléfono"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="cargo" value="Selecciona un Cargo" />
                </div>
                <Select id="cargo" required>
                  <option>Cantante</option>
                  <option>Conciencia</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="departamento"
                    value="Selecciona un Departamento"
                  />
                </div>
                <Select id="departamento" required>
                  <option>Musica</option>
                  <option>Mental</option>
                </Select>
              </div>
              <Button type="submit">Registrar Nuevo Usuario</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Container>
  );
}
export function EditarPersona() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <>
        <Button onClick={() => setOpenModal(true)} color="purple" size="sm">
          <FaEdit />
        </Button>
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          position="top-center"
        >
          <Modal.Header>Editar Datos</Modal.Header>
          <Modal.Body>
            <form className="flex flex-col gap-4 max-w-full">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nombres" value="Nombre:" />
                </div>
                <TextInput
                  id="nombres"
                  type="text"
                  placeholder="Nombre"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Apellidos" value="Apellidos:" />
                </div>
                <TextInput
                  id="Apellidos"
                  type="text"
                  placeholder="Apellidos"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="cedula" value="Cedula:" />
                </div>
                <TextInput
                  id="cedula"
                  type="number"
                  placeholder="1234567890"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="telefono" value="Teléfono:" />
                </div>
                <TextInput
                  id="telefono"
                  type="number"
                  placeholder="Teléfono"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="cargo" value="Selecciona un Cargo" />
                </div>
                <Select id="cargo" required>
                  <option>Cantante</option>
                  <option>Conciencia</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="departamento"
                    value="Selecciona un Departamento"
                  />
                </div>
                <Select id="departamento" required>
                  <option>Musica</option>
                  <option>Mental</option>
                </Select>
              </div>
              <Button type="submit">Ingresar Datos</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Container>
  );
}
export function EliminarPersona({ id }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} color="failure" size="sm">
        <FaEraser />
      </Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-icon text-red-500" />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Estas seguro de querer eliminar este Registro?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Aceptar"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export function EliminaAsist() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} color="failure" size="sm">
        <FaEraser />
      </Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-icon text-red-500" />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Estas seguro de querer eliminar este Registro?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Aceptar"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export function RegisAsist() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Registrar Asistencia</Button>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="flex justify-center align-middle">
            <div className="flex ">
              <img src={logo} alt="Logo CNE" className="w-20" />
            </div>
          </div>
          <form className="space-y-6 flex max-w-md flex-col gap-4">
            <h3 className="text-xl font-medium text-gray-900 text-center ">
              REGISTRAR ASISTENCIA
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="cedula" value="Cedula:" />
              </div>
              <TextInput
                id="cedula"
                placeholder="Ingrese su Cedula de identidad"
                required
              />
            </div>
            <fieldset className="flex max-w-md gap-4">
              <legend className="mb-4">Selecciona el tipo de Registro</legend>
              <div className="flex items-center gap-2">
                <Radio
                  id="united-state"
                  name="asistencia"
                  value="entrada"
                  defaultChecked
                />
                <Label htmlFor="united-state">ENTRADA</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="salida" name="asistencia" value="salida" />
                <Label htmlFor="salida">SALIDA</Label>
              </div>
            </fieldset>
            <div className="w-full flex justify-between">
              <Button type="submit">REGISTRAR</Button>
              <Button color="failure" onClick={() => setOpenModal(false)}>
                Cancelar
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export function RegisVisita() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Registrar Visita</Button>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="flex justify-center align-middle">
            <div className="flex ">
              <img src={logo} alt="Logo CNE" className="w-20" />
            </div>
          </div>
          <form className="space-y-6 flex max-w-md flex-col gap-4">
            <h3 className="text-xl font-medium text-gray-900 text-center ">
              REGISTRAR VISITA
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nombre" value="Nombre:" />
              </div>
              <TextInput id="nombre" placeholder="Nombre:" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="cedula" value="Cedula:" />
              </div>
              <TextInput
                id="cedula"
                placeholder="Ingrese su Cedula de identidad"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="motivo" value="Motivo:" />
              </div>
              <TextInput
                id="motivo"
                placeholder="Ingrese su Motivo de Visita"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="departamento"
                  value="Selecciona el Departamento al que pertence"
                />
              </div>
              <Select id="departamento" required>
                <option value="" key="Selec" disabled selected>
                  Selecciona:
                </option>
                <option value="ejemplo" key="1">
                  Ejemplo de Departamento
                </option>
              </Select>
            </div>
            <div className="w-full flex justify-between">
              <Button type="submit">REGISTRAR</Button>
              <Button color="failure" onClick={() => setOpenModal(false)}>
                Cancelar
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export function EliminaVisita() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} color="failure" size="sm">
        <FaEraser />
      </Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-icon text-red-500" />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Estas seguro de querer eliminar este Registro?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Eliminar"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

//  ---------------------------------------
// modal departamentos
export function ModalDep() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({
    departamento: "",
  });

  const handleChange = (e) => {
    let names = e.target.name;
    let value = e.target.value;
    setData({ ...data, [names]: value });
  };
  // enviar datos al servidor
  const handleSend = async (e) => {
    e.preventDefault();
    // validar que los campos no esten vacios
    if (data.departamento.trim() === "") {
      swal({
        title: "Campo vacio",
        text: "Debes agregar un departamento",
        icon: "warning",
        timer: "1500",
      });
    } else {
      try {
        await axios.post("http://localhost:4000/task", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setData({ departamento: "" });
        setOpenModal(false);
        swal({
          title: "Departamento",
          text: "Registro exitoso!",
          icon: "success",
          timer: "1500",
        });
      } catch (error) {
        swal({
          title: "Oops...",
          text: "Ha ocurrido un error al registrar!",
          icon: "error",
          timer: "1500",
        });
        return console.log(error);
      }
    }
  };

  return (
    <Container>
      <>
        <Button onClick={() => setOpenModal(true)}>
          Registrar Departameto
        </Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Registrar un Nuevo Departamento</Modal.Header>
          <Modal.Body>
            <form
              className="flex flex-col gap-4 max-w-full"
              onSubmit={handleSend}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="departamento" value="Departamento:" />
                </div>
                <TextInput
                  id="departamento"
                  type="text"
                  placeholder="Nombre del Departamento"
                  onChange={handleChange}
                  name="departamento"
                  value={data.departamento}
                  shadow
                />
              </div>
              <Button type="submit">Registrar</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button color="dark" onClick={() => setOpenModal(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Container>
  );
}
// modal eliminar departamentos
export function EliminarDep({ id }) {
  const [openModal, setOpenModal] = useState(false);

  const deleteDepa = async () => {
    try {
      const res = await axios.delete(`http://localhost:4000/task/${id}`);
      swal({
        title: "Departamento",
        text: "Eliminado exitosamente!",
        icon: "success",
        timer: "1000",
      });
      setOpenModal(false);
    } catch (error) {
      console.error("error", error);
      swal({
        title: "Departamento",
        text: "Error en la eliminación!",
        icon: "error",
        timer: "1000",
      });
      setOpenModal(false);
    }
  };
  return (
    <>
      <Button onClick={() => setOpenModal(true)} color="failure" size="sm">
        <FaEraser />
      </Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-icon text-red-500" />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Estas seguro de querer eliminar este Registro?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={deleteDepa}>
                {"Eliminar"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export function EditarDep() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({
    departamento: "",
  });

  const handleChange = (e) => {
    let names = e.target.name;
    let value = e.target.value;
    setData({ ...data, [names]: value });
  };
  // enviar datos al servidor
  const handleSend = async (e) => {
    e.preventDefault();
    // validar que los campos no esten vacios
    if (data.departamento.trim() === "") {
      swal({
        title: "Campo vacio",
        text: "Debes agregar un departamento",
        icon: "warning",
        timer: "1500",
      });
    } else {
      try {
        await axios.post("http://localhost:4000/task", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setData({ departamento: "" });
        setOpenModal(false);
        swal({
          title: "Departamento",
          text: "Registro exitoso!",
          icon: "success",
          timer: "1500",
        });
      } catch (error) {
        swal({
          title: "Oops...",
          text: "Ha ocurrido un error al registrar!",
          icon: "error",
          timer: "1500",
        });
        return console.log(error);
      }
    }
  };

  return (
    <Container>
      <>
        <Button onClick={() => setOpenModal(true)} color="purple" size="sm">
          <FaEdit />
        </Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Editar Departamento</Modal.Header>
          <Modal.Body>
            <form
              className="flex flex-col gap-4 max-w-full"
              onSubmit={handleSend}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="departamento" value="Departamento:" />
                </div>
                <TextInput
                  id="departamento"
                  type="text"
                  placeholder="Nombre del Departamento"
                  onChange={handleChange}
                  name="departamento"
                  value={data.departamento}
                  shadow
                />
              </div>
              <Button type="submit">Registrar</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button color="dark" onClick={() => setOpenModal(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Container>
  );
}
// ----------------------------------------

// modal cargos
export function ModalCargo({ id }) {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({
    cargo: "",
    cantidad: "",
  });

  const handleChange = (e) => {
    let names = e.target.name;
    let value = e.target.value;
    setData({ ...data, [names]: value });
  };
  // enviar datos al servidor
  const handleSend = async (e) => {
    e.preventDefault();
    // validar que los campos no esten vacios
    if (data.cargo.trim() === "" || data.cantidad.trim() === "") {
      swal({
        title: "Campo vacio",
        text: "Debes llenar todos los campos",
        icon: "warning",
        timer: "1500",
      });
    } else {
      try {
        await axios.post("http://localhost:4000/cargos", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setData({ cargo: "", cantidad: "" });
        setOpenModal(false);
        swal({
          title: "Cargo",
          text: "Registro exitoso!",
          icon: "success",
          timer: "1500",
        });
      } catch (error) {
        swal({
          title: "Oops...",
          text: "Ha ocurrido un error al registrar!",
          icon: "error",
          timer: "1500",
        });
        return console.log(error);
      }
    }
  };
  return (
    <Container>
      <>
        <Button onClick={() => setOpenModal(true)}>Registrar Cargo</Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Registrar un Nuevo Cargo</Modal.Header>
          <Modal.Body>
            <form
              className="flex flex-col gap-4 max-w-full"
              onSubmit={handleSend}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="cargo" value="Cargo:" />
                </div>
                <TextInput
                  id="cargo"
                  name="cargo"
                  type="text"
                  placeholder="Nombre del Cargo"
                  onChange={handleChange}
                  value={data.cargo}
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="cantidad" value="Cantidad de Puestos:" />
                </div>
                <TextInput
                  id="cantidad"
                  type="number"
                  name="cantidad"
                  min="0"
                  max="99"
                  placeholder="Ingrese una cantidad"
                  onChange={handleChange}
                  value={data.cantidad}
                  shadow
                />
              </div>
              <Button type="submit">Registrar</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button color="dark" onClick={() => setOpenModal(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Container>
  );
}
// eliminar cargos
export function EliminarCargo({ id }) {
  const [openModal, setOpenModal] = useState(false);
  const deleteDepa = async () => {
    try {
      const res = await axios.delete(`http://localhost:4000/cargos/${id}`);
      swal({
        title: "Cargo",
        text: "Eliminado exitosamente!",
        icon: "success",
        timer: "1000",
      });
      setOpenModal(false);
    } catch (error) {
      console.error("error", error);
      swal({
        title: "Cargo",
        text: "Error en la eliminación!",
        icon: "error",
        timer: "1000",
      });
      setOpenModal(false);
    }
  };
  return (
    <>
      <Button onClick={() => setOpenModal(true)} color="failure" size="sm">
        <FaEraser />
      </Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-icon text-red-500" />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Estas seguro de querer eliminar este Registro?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={deleteDepa}>
                {"Eliminar"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

//----------------------------------------------
// registrar inventario
export function RegisInv() {
  const [openModal, setOpenModal] = useState(false);

  // mostrar apartamentos en select
  const [datosDep, setDatosDep] = useState([]);
  useEffect(() => {
    ShowDepart();
  }, []);
  const ShowDepart = async () => {
    await axios
      .get("http://localhost:4000/task")
      .then((res) => {
        console.log(res);
        setDatosDep(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  //--------------------------------
  // mostrar categorias en select
  const [datosCat, setDatosCat] = useState([]);
  useEffect(() => {
    ShowCat();
  }, []);
  const ShowCat = async () => {
    await axios
      .get("http://localhost:4000/categoria")
      .then((res) => {
        console.log(res);
        setDatosCat(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  //---------------------------------
  // regsitrar datos
  const [datos, setDatos] = useState({
    nombre: "",
    marca: "",
    codigo: "",
    cantidad: "",
    status: "",
    departamento: "",
    categoria: "",
  });
  const handleChange = (e) => {
    let names = e.target.name;
    let value = e.target.value;
    setDatos({ ...datos, [names]: value });
  };
  // enviar datos al servidor
  const handleSend = async (e) => {
    e.preventDefault();
    // validar que los campos no esten vacios
    if (Object.values(datos).some((field) => field.trim() === "")) {
      swal({
        title: "Campo vacio",
        text: "Debes ingresar todos los datos",
        icon: "warning",
        timer: "1500",
      });
    } else {
      try {
        await axios.post("http://localhost:4000/inventary", datos, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setDatos({
          nombre: "",
          marca: "",
          codigo: "",
          cantidad: "",
          status: "",
          departamento: "",
          categoria: "",
        });
        setOpenModal(false);
        swal({
          title: "Articulo",
          text: "Registrado exitosamente!",
          icon: "success",
          timer: "1500",
        });
      } catch (error) {
        swal({
          title: "Oops...",
          text: "Ha ocurrido un error en el registro!",
          icon: "error",
          timer: "1500",
        });
        return console.log(error);
      }
    }
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Registrar Producto</Button>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <form
            className="flex flex-col gap-4 max-w-full"
            onSubmit={handleSend}
          >
            <h3 className="text-xl font-medium text-gray-900 text-center ">
              REGISTRAR PRODUCTO
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nombre" value="Nombre:" />
              </div>
              <TextInput
                id="nombre"
                type="text"
                placeholder="Nombre Producto"
                shadow
                name="nombre"
                value={datos.nombre}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="marca" value="Marca:" />
              </div>
              <TextInput
                id="marca"
                type="text"
                placeholder="Marca Producto"
                shadow
                name="marca"
                value={datos.marca}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Codigo" value="Codigo:" />
              </div>
              <TextInput
                id="codigo"
                type="text"
                placeholder="Codigo del Producto"
                shadow
                name="codigo"
                value={datos.codigo}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="cantidad" value="Cantidad:" />
              </div>
              <TextInput
                id="cantidad"
                type="number"
                min="0"
                name="cantidad"
                placeholder="Cantidad"
                value={datos.cantidad}
                onChange={handleChange}
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Estado" value="Estado del Producto" />
              </div>
              <Select
                id="status"
                name="status"
                onChange={handleChange}
                value={datos.status}
              >
                <option value="" key="Selec" hidden selected>
                  Selecciona:
                </option>
                <option value="Nuevo">Nuevo</option>
                <option value="Usado">Usado</option>
                <option value="Deteriorado">Deteriorado</option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Departamento" value="Departamento:" />
              </div>
              <Select
                id="departamento"
                name="departamento"
                onChange={handleChange}
                value={datos.departamento}
              >
                {datosDep.map((departamentos) => (
                  <option
                    value={departamentos.id_departamento}
                    key={departamentos.id_departamento}
                  >
                    {departamentos.departamento}
                  </option>
                ))}
                <option value="" key="Selec" hidden selected>
                  Selecciona:
                </option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="categoria" value="Categoria:" />
              </div>
              <Select
                id="categoria"
                name="categoria"
                onChange={handleChange}
                value={datos.cantegoria}
              >
                {datosCat.map((categoria) => (
                  <option
                    value={categoria.id_categoria}
                    key={categoria.id_categoria}
                  >
                    {categoria.categoria}
                  </option>
                ))}
                <option value="" key="Selec" hidden selected>
                  Selecciona:
                </option>
              </Select>
            </div>
            <Button type="submit">Registrar</Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="dark" onClick={() => setOpenModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export function EditInv() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} color="purple" size="sm">
        <FaEdit />
      </Button>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <form className="flex flex-col gap-4 max-w-full">
            <h3 className="text-xl font-medium text-gray-900 text-center ">
              REGISTRAR PRODUCTO
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nombre" value="Nombre:" />
              </div>
              <TextInput
                id="nombre"
                type="text"
                placeholder="Nombre Producto"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Marca" value="Marca:" />
              </div>
              <TextInput
                id="Marca"
                type="text"
                placeholder="Marca Producto"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Codigo" value="Codigo:" />
              </div>
              <TextInput
                id="Codigo"
                type="text"
                placeholder="Codigo del Producto"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Departamento" value="Departamento:" />
              </div>
              <TextInput
                id="Departamento"
                type="text"
                placeholder="Departamento"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Estado" value="Estado del Producto" />
              </div>
              <Select id="Estado" required>
                <option value="" key="Selec" disabled selected>
                  Selecciona:
                </option>
                <option>Nuevo</option>
                <option>Usado</option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Departamento" value="Departamento:" />
              </div>
              <TextInput
                id="Departamento"
                type="text"
                placeholder="Departamento"
                required
                shadow
              />
            </div>
            <Button type="submit">Registrar</Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="dark" onClick={() => setOpenModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export function EliminarInv() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} color="failure" size="sm">
        <FaEraser />
      </Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-icon text-red-500" />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Estas seguro de querer eliminar este Registro?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Eliminar"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export function ModalUsr() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <>
        <Button onClick={() => setOpenModal(true)} className="m-auto">
          Registrar Usuario
        </Button>
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          position="top-center"
        >
          <Modal.Header>Registrar un Nuevo Usuario</Modal.Header>
          <Modal.Body>
            <form className="flex flex-col gap-4 max-w-full">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="usuario" value="Usuario:" />
                </div>
                <TextInput
                  id="usuario"
                  type="text"
                  rightIcon={HiUser}
                  placeholder="Nombre Usuario"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Correo Electrónico:" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  rightIcon={HiMail}
                  placeholder="ejemplo@ejemplo.com"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Contraseña: " />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  required
                  shadow
                  rightIcon={HiKey}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password2" value="Repita su Contraseña: " />
                </div>
                <TextInput
                  id="password2"
                  type="password"
                  required
                  shadow
                  rightIcon={HiKey}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="pregunta" value="Pregunta de Seguridad:" />
                </div>
                <Select id="pregunta" required>
                  <option disabled>Seleccione: </option>
                  <option>Color Favorito</option>
                  <option>Nombre de mi Perro</option>
                  <option>Nombre de mi Madre</option>
                  <option>Lugar de Nacimiento</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="respuesta" value="Respuesta:" />
                </div>
                <TextInput
                  id="respuesta"
                  type="text"
                  rightIcon={HiPencil}
                  placeholder="Ingrese su Respuesta"
                  required
                  shadow
                />
              </div>
              <div></div>
              <Button type="submit">Registrar</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button color="dark" onClick={() => setOpenModal(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Container>
  );
}
export function EliminarUsr() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} color="failure" size="sm">
        <FaEraser />
      </Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-icon text-red-500" />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Estas seguro de querer eliminar este Registro?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Eliminar"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export function EditarUsr() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <>
        <Button onClick={() => setOpenModal(true)} color="purple" size="sm">
          <FaEdit />
        </Button>
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          position="top-center"
        >
          <Modal.Header>Editar datos de Usuario</Modal.Header>
          <Modal.Body>
            <form className="flex flex-col gap-4 max-w-full">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="usuario" value="Usuario:" />
                </div>
                <TextInput
                  id="usuario"
                  type="text"
                  rightIcon={HiUser}
                  placeholder="Nombre Usuario"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Correo Electrónico:" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  rightIcon={HiMail}
                  placeholder="ejemplo@ejemplo.com"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Contraseña: " />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  required
                  shadow
                  rightIcon={HiKey}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password2" value="Repita su Contraseña: " />
                </div>
                <TextInput
                  id="password2"
                  type="password"
                  required
                  shadow
                  rightIcon={HiKey}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="pregunta" value="Pregunta de Seguridad:" />
                </div>
                <Select id="pregunta" required>
                  <option disabled>Seleccione: </option>
                  <option>Color Favorito</option>
                  <option>Nombre de mi Perro</option>
                  <option>Nombre de mi Madre</option>
                  <option>Lugar de Nacimiento</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="respuesta" value="Respuesta:" />
                </div>
                <TextInput
                  id="respuesta"
                  type="text"
                  rightIcon={HiPencil}
                  placeholder="Ingrese su Respuesta"
                  required
                  shadow
                />
              </div>
              <div></div>
              <Button type="submit">Registrar</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button color="dark" onClick={() => setOpenModal(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Container>
  );
}
export function ModalCatg() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <>
        <Button onClick={() => setOpenModal(true)}>Registrar Categoria</Button>
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          position="top-center"
        >
          <Modal.Header>Registrar Categoria</Modal.Header>
          <Modal.Body>
            <form className="flex flex-col gap-4 max-w-full">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="categoria" value="Categoria:" />
                </div>
                <TextInput
                  id="categoria"
                  type="text"
                  rightIcon={HiPencil}
                  placeholder="Nombre categoria"
                  required
                  shadow
                />
              </div>
              <Button type="submit">Registrar</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button color="dark" onClick={() => setOpenModal(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Container>
  );
}
export function EliminarCatg() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} color="failure" size="sm">
        <FaEraser />
      </Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-icon text-red-500" />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Estas seguro de querer eliminar este Registro?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Eliminar"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export function EditarCatg() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <>
        <Button onClick={() => setOpenModal(true)} color="purple" size="sm">
          <FaEdit />
        </Button>
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          position="top-center"
        >
          <Modal.Header>Registrar Categoria</Modal.Header>
          <Modal.Body>
            <form className="flex flex-col gap-4 max-w-full">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="categoria" value="Categoria:" />
                </div>
                <TextInput
                  id="categoria"
                  type="text"
                  rightIcon={HiPencil}
                  placeholder="Nombre categoria"
                  required
                  shadow
                />
              </div>
              <Button type="submit">Registrar</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button color="dark" onClick={() => setOpenModal(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Container>
  );
}
const Container = styled.div`
.Logocontent {
  display: flex;
  justify-content: center;
  align-items: center;
  .imgcontent {
    display: flex;
    img {
     max-width: 100%;
      height: auto;
    }`;
