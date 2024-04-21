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

// ----------------------------------------
// registrar personal
export function ModalRegis() {
  const [openModal, setOpenModal] = useState(false);
  // mostrar apartamentos en select
  const [datosDep, setDatosDep] = useState([]);
  //--------------------------------
  // mostrar categorias en select
  const [datosCat, setDatosCat] = useState([]);

  useEffect(() => {
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
    const ShowCat = async () => {
      await axios
        .get("http://localhost:4000/cargos")
        .then((res) => {
          console.log(res);
          setDatosCat(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    ShowDepart();
    ShowCat();
  }, []);
  //---------------------------------
  // regsitrar datos
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    telefono: "",
    id_cargo: "Selecciona:",
    id_departamento: "Selecciona:",
  });
  const handleChange = (e) => {
    let names = e.target.name;
    let values = e.target.value.toUpperCase();
    console.log(names);
    setDatos({ ...datos, [names]: values });
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
        await axios.post("http://localhost:4000/personal", datos, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setDatos({
          nombre: "",
          apellido: "",
          cedula: "",
          telefono: "",
          id_cargo: "Selecciona:",
          id_departamento: "Selecciona:",
        });
        setOpenModal(false);
        swal({
          title: "Personal",
          text: "Registrado exitosamente!",
          icon: "success",
          timer: "1500",
        });
      } catch (error) {
        if (error.response && error.response.status === 300) {
          swal({
            title: "Cedula invalida...",
            text: `Ya existe un usuario registrado con este número de cedula!`,
            icon: "error",
            timer: "2000",
          });
        } else {
          swal({
            title: "Oops...",
            text: `Ha ocurrido un error! ${error}`,
            icon: "error",
          });
        }
        return console.log(error);
      }
    }
  };
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
            <form
              className="flex flex-col gap-4 max-w-full"
              onSubmit={handleSend}
            >
              {/*----- nombre ------- */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nombres" value="Nombre:" />
                </div>
                <TextInput
                  id="nombres"
                  name="nombre"
                  value={datos.nombre}
                  type="text"
                  placeholder="Nombre"
                  onChange={handleChange}
                  required
                  shadow
                />
              </div>
              {/*----- apellido ------- */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="apellido" value="Apellidos:" />
                </div>
                <TextInput
                  id="apellido"
                  name="apellido"
                  value={datos.apellido}
                  type="text"
                  placeholder="Apellidos"
                  onChange={handleChange}
                  required
                  shadow
                />
              </div>
              {/*----- cedula ------- */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="cedula" value="Cedula:" />
                </div>
                <TextInput
                  id="cedula"
                  name="cedula"
                  type="text"
                  value={datos.cedula}
                  placeholder="1234567890"
                  onChange={handleChange}
                  required
                  shadow
                />
              </div>
              {/*----- telefono ------- */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="telefono" value="Teléfono:" />
                </div>
                <TextInput
                  id="telefono"
                  name="telefono"
                  value={datos.telefono}
                  type="text"
                  placeholder="Teléfono"
                  onChange={handleChange}
                  required
                  shadow
                />
              </div>
              {/*----- cargo ------- */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="id_cargo" value="Selecciona un Cargo" />
                </div>
                <Select
                  id="id_cargo"
                  name="id_cargo"
                  value={datos.id_cargo}
                  onChange={handleChange}
                >
                  <option value="Selecciona:" disabled>
                    Selecciona:
                  </option>
                  {datosCat.map((cargos) => (
                    <option key={cargos.id_cargo} value={cargos.id_cargo}>
                      {cargos.cargo}
                    </option>
                  ))}

                  <option>Conciencia</option>
                </Select>
              </div>
              {/*----- departamento ------- */}
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="departamento"
                    value="Selecciona un Departamento"
                  />
                </div>
                <Select
                  id="id_departamento"
                  name="id_departamento"
                  value={datos.id_departamento}
                  onChange={handleChange}
                >
                  <option value="Selecciona:" disabled>
                    Selecciona
                  </option>
                  {datosDep.map((depart) => (
                    <option
                      value={depart.id_departamento}
                      key={depart.id_departamento}
                    >
                      {depart.departamento}
                    </option>
                  ))}
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
export function EditarPersona({ id }) {
  const [openModal, setOpenModal] = useState(false);
  // mostrar apartamentos en select
  const [datosDep, setDatosDep] = useState([]);
  //--------------------------------
  // mostrar categorias en select
  const [datosCat, setDatosCat] = useState([]);

  useEffect(() => {
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
    const ShowCat = async () => {
      await axios
        .get("http://localhost:4000/cargos")
        .then((res) => {
          console.log(res);
          setDatosCat(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    ShowDepart();
    ShowCat();
  }, []);
  //---------------------------------

  //---------------------------------
  // regsitrar datos
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    telefono: "",
    id_cargo: "Selecciona:",
    id_departamento: "Selecciona:",
  });

  // capturar eventos de inputs
  const handleChange = (e) => {
    let names = e.target.name;
    let values = e.target.value.toUpperCase();
    console.log(names);
    setDatos({ ...datos, [names]: values });
  };
  const handleOpenModal = async () => {
    const res = await axios.get(`http://localhost:4000/personal/${id}`);
    if (res.data[0]) {
      setDatos(res.data[0]);
    } else {
      console.error("No se pudo obtener los datos del producto");
    }
    setOpenModal(true);
  };
  // enviar datos al servidor
  const handleSend = async (e) => {
    e.preventDefault();
    // validar que los campos no esten vacios
    if (
      Object.values(datos).some(
        (field) => typeof field === "string" && field.trim() === ""
      )
    ) {
      swal({
        title: "Campo vacio",
        text: "Debes ingresar todos los datos",
        icon: "warning",
        timer: "1500",
      });
    } else {
      try {
        const datosParaEnviar = {
          nombre: datos.nombre,
          apellido: datos.apellido,
          cedula: datos.cedula,
          telefono: datos.telefono,
          id_cargo: datos.id_cargo,
          id_departamento: datos.id_departamento,
        };
        await axios.put(
          `http://localhost:4000/personal/${id}`,
          datosParaEnviar,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        setOpenModal(false);
        swal({
          title: "Personal",
          text: "Actualizado exitosamente!",
          icon: "success",
          timer: "1500",
        });
      } catch (error) {
        if (error.response && error.response.status === 300) {
          swal({
            title: "Cedula invalida...",
            text: `Ya existe un usuario registrado con este número de cedula!`,
            icon: "error",
            timer: "2000",
          });
        } else {
          swal({
            title: "Oops...",
            text: `Ha ocurrido un error! ${error}`,
            icon: "error",
          });
        }
        return console.log(error);
      }
    }
  };
  return (
    <Container>
      <>
        <Button onClick={handleOpenModal} color="purple" size="sm">
          <FaEdit />
        </Button>
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          position="top-center"
        >
          <Modal.Header>Editar Datos</Modal.Header>
          <Modal.Body>
            <form
              className="flex flex-col gap-4 max-w-full"
              onSubmit={handleSend}
            >
              {/*----- nombre ------- */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nombres" value="Nombre:" />
                </div>
                <TextInput
                  id="nombres"
                  name="nombre"
                  value={datos.nombre}
                  type="text"
                  placeholder="Nombre"
                  onChange={handleChange}
                  required
                  shadow
                />
              </div>
              {/*----- apellido ------- */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="apellido" value="Apellidos:" />
                </div>
                <TextInput
                  id="apellido"
                  name="apellido"
                  value={datos.apellido}
                  type="text"
                  placeholder="Apellidos"
                  onChange={handleChange}
                  required
                  shadow
                />
              </div>
              {/*----- cedula ------- */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="cedula" value="Cedula:" />
                </div>
                <TextInput
                  id="cedula"
                  name="cedula"
                  type="text"
                  value={datos.cedula}
                  placeholder="1234567890"
                  onChange={handleChange}
                  required
                  shadow
                />
              </div>
              {/*----- telefono ------- */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="telefono" value="Teléfono:" />
                </div>
                <TextInput
                  id="telefono"
                  name="telefono"
                  value={datos.telefono}
                  type="text"
                  placeholder="Teléfono"
                  onChange={handleChange}
                  required
                  shadow
                />
              </div>
              {/*----- cargo ------- */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="id_cargo" value="Selecciona un Cargo" />
                </div>
                <Select
                  id="id_cargo"
                  name="id_cargo"
                  value={datos.id_cargo}
                  onChange={handleChange}
                >
                  <option value="Selecciona:" disabled>
                    Selecciona:
                  </option>
                  {datosCat.map((cargos) => (
                    <option key={cargos.id_cargo} value={cargos.id_cargo}>
                      {cargos.cargo}
                    </option>
                  ))}
                  <option>Conciencia</option>
                </Select>
              </div>
              {/*----- departamento ------- */}
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="departamento"
                    value="Selecciona un Departamento"
                  />
                </div>
                <Select
                  id="id_departamento"
                  name="id_departamento"
                  value={datos.id_departamento}
                  onChange={handleChange}
                >
                  <option value="Selecciona:" disabled>
                    Selecciona
                  </option>
                  {datosDep.map((depart) => (
                    <option
                      value={depart.id_departamento}
                      key={depart.id_departamento}
                    >
                      {depart.departamento}
                    </option>
                  ))}
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
export function EliminarPersona({ id }) {
  const [openModal, setOpenModal] = useState(false);
  const deleteDepa = async () => {
    try {
      const res = await axios.delete(`http://localhost:4000/personal/${id}`);
      swal({
        title: "Personal",
        text: "Eliminado exitosamente!",
        icon: "success",
        timer: "1000",
      });
      setOpenModal(false);
    } catch (error) {
      console.error("error", error);
      swal({
        title: "Personal",
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

// -----------------------------------------
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

// ------------------------------------------
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

// ---------------------------------------
// modal departamentos
export function ModalDep() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({
    departamento: "",
  });

  const handleChange = (e) => {
    let names = e.target.name;
    let value = e.target.value.toUpperCase();
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
              className="flex flex-col gap-4 max-w-full uppercase"
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
                  className="uppercase"
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
export function EditarDep({ id }) {
  const [openModal, setOpenModal] = useState(false);
  const [departamento, setDepartamento] = useState("");

  // actualizar
  const actualizar = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/task/${id}`, { departamento });
    setOpenModal(false);
    swal("actualizado");
  };

  const handleOpenModal = async () => {
    const res = await axios.get(`http://localhost:4000/task/${id}`);
    setDepartamento(res.data[0].departamento);
    setOpenModal(true);
  };

  return (
    <Container>
      <>
        <Button onClick={handleOpenModal} color="purple" size="sm">
          <FaEdit />
        </Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Editar Departamento</Modal.Header>
          <Modal.Body>
            <form
              className="flex flex-col gap-4 max-w-full"
              onSubmit={actualizar}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="departamento" value="Departamento:" />
                </div>
                <TextInput
                  id="departamento"
                  type="text"
                  placeholder="Nombre del Departamento"
                  onChange={(e) => setDepartamento(e.target.value)}
                  name="departamento"
                  value={departamento}
                  shadow
                />
              </div>
              <Button type="submit">Modificar</Button>
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
export function ModalCargo() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({
    cargo: "",
    cantidad: "",
  });

  const handleChange = (e) => {
    let names = e.target.name;
    let value = e.target.value.toUpperCase();
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
export function RegisInv({ id }) {
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
    modelo: "",
    estatus: "Selecciona:",
    cantidad: "",
    id_departamento: "Selecciona:",
    id_categoria: "Selecciona:",
  });
  const handleChange = (e) => {
    let names = e.target.name;
    let values = e.target.value.toUpperCase();
    console.log(names);
    setDatos({ ...datos, [names]: values });
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
          modelo: "",
          cantidad: "",
          estatus: "Selecciona:",
          id_departamento: "Selecciona:",
          id_categoria: "Selecciona:",
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
            className="flex flex-col gap-4 max-w-full uppercase"
            onSubmit={handleSend}
          >
            <h3 className="text-xl font-medium text-gray-900 text-center ">
              REGISTRAR PRODUCTO
            </h3>
            {/* ------ nombre --------- */}
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
            {/* ------ marca --------- */}
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
            {/* ------ codigo --------- */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="codigo" value="Codigo:" />
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
            {/* ------ modelo --------- */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="modelo" value="Modelo:" />
              </div>
              <TextInput
                id="modelo"
                type="text"
                placeholder="Modelo del Producto"
                shadow
                name="modelo"
                value={datos.modelo}
                onChange={handleChange}
              />
            </div>
            {/* ------ cantidad --------- */}
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
            {/* ------ estatus --------- */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="estatus" value="Estado del Producto" />
              </div>
              <Select
                id="estatus"
                name="estatus"
                onChange={handleChange}
                value={datos.estatus}
              >
                <option value="Selecciona:" disabled>
                  Selecciona:
                </option>
                <option value="Nuevo">Nuevo</option>
                <option value="Usado">Usado</option>
                <option value="Deteriorado">Deteriorado</option>
              </Select>
            </div>
            {/* ------ departamento --------- */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Departamento" value="Departamento:" />
              </div>
              <Select
                id="id_departamento"
                name="id_departamento"
                onChange={handleChange}
                value={datos.id_departamento}
              >
                <option value="Selecciona:" disabled>
                  Selecciona:
                </option>
                {datosDep.map((depart) => (
                  <option
                    value={depart.id_departamento}
                    key={depart.id_departamento}
                  >
                    {depart.departamento}
                  </option>
                ))}
              </Select>
            </div>
            {/* ------ categoria --------- */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="id_categoria" value="Categoria:" />
              </div>
              <Select
                id="id_categoria"
                name="id_categoria"
                onChange={handleChange}
                value={datos.id_categoria}
              >
                <option value="Selecciona:" disabled>
                  Selecciona:
                </option>
                {datosCat.map((category) => (
                  <option
                    value={category.id_categoria}
                    key={category.id_categoria}
                  >
                    {category.categoria}
                  </option>
                ))}
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
export function EditInv({ id }) {
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
  // actualizar datos
  const [datos, setDatos] = useState({
    nombre: "",
    marca: "",
    codigo: "",
    modelo: "",
    estatus: "Selecciona:",
    cantidad: "",
    id_departamento: "Selecciona:",
    id_categoria: "Selecciona:",
  });
  const handleChange = (e) => {
    let names = e.target.name;
    let values = e.target.value.toUpperCase();
    setDatos({ ...datos, [names]: values });
  };

  const handleOpenModal = async () => {
    const res = await axios.get(`http://localhost:4000/inventary/${id}`);
    if (res.data[0]) {
      setDatos(res.data[0]);
    } else {
      console.error("No se pudo obtener los datos del producto");
    }
    setOpenModal(true);
  };

  // enviar datos al servidor
  const handleSend = async (e) => {
    e.preventDefault();
    // validar que los campos no esten vacios
    if (
      Object.values(datos).some(
        (field) => typeof field === "string" && field.trim() === ""
      )
    ) {
      swal({
        title: "Campo vacio",
        text: "Debes ingresar todos los datos",
        icon: "warning",
        timer: "1500",
      });
    } else {
      // si los campos no estan vacios realiza la funcion
      const datosParaEnviar = {
        nombre: datos.nombre,
        marca: datos.marca,
        codigo: datos.codigo,
        modelo: datos.modelo,
        estatus: datos.estatus,
        cantidad: datos.cantidad,
        id_categoria: datos.id_categoria,
        id_departamento: datos.id_departamento,
      };
      await axios.put(
        `http://localhost:4000/inventary/${id}`,
        datosParaEnviar,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setOpenModal(false);
      swal({
        title: "Articulo",
        text: "Actualizado exitosamente!",
        icon: "success",
        timer: "1500",
      });
    }
  };

  return (
    <>
      <Button onClick={handleOpenModal} color="purple" size="sm">
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
          <form
            className="flex flex-col gap-4 max-w-full"
            onSubmit={handleSend}
          >
            <h3 className="text-xl font-medium text-gray-900 text-center ">
              ACTUALIZAR PRODUCTO
            </h3>
            {/* ------ nombre --------- */}
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
            {/* ------ marca --------- */}
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
            {/* ------ codigo --------- */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="codigo" value="Codigo:" />
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
            {/* ------ modelo --------- */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="modelo" value="Modelo:" />
              </div>
              <TextInput
                id="modelo"
                type="text"
                placeholder="Modelo del Producto"
                shadow
                name="modelo"
                value={datos.modelo}
                onChange={handleChange}
              />
            </div>
            {/* ------ cantidad --------- */}
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
            {/* ------ estatus --------- */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="estatus" value="Estado del Producto" />
              </div>
              <Select
                id="estatus"
                name="estatus"
                onChange={handleChange}
                value={datos.estatus}
              >
                <option value="Selecciona:" disabled>
                  Selecciona:
                </option>
                <option value="Nuevo">Nuevo</option>
                <option value="Usado">Usado</option>
                <option value="Deteriorado">Deteriorado</option>
              </Select>
            </div>
            {/* ------ departamento --------- */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Departamento" value="Departamento:" />
              </div>
              <Select
                id="id_departamento"
                name="id_departamento"
                onChange={handleChange}
                value={datos.id_departamento}
              >
                <option value="Selecciona:" disabled>
                  Selecciona:
                </option>
                {datosDep.map((depart) => (
                  <option
                    value={depart.id_departamento}
                    key={depart.id_departamento}
                  >
                    {depart.departamento}
                  </option>
                ))}
              </Select>
            </div>
            {/* ------ categoria --------- */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="id_categoria" value="Categoria:" />
              </div>
              <Select
                id="id_categoria"
                name="id_categoria"
                onChange={handleChange}
                value={datos.id_categoria}
              >
                <option value="Selecciona:" disabled>
                  Selecciona:
                </option>
                {datosCat.map((category) => (
                  <option
                    value={category.id_categoria}
                    key={category.id_categoria}
                  >
                    {category.categoria}
                  </option>
                ))}
              </Select>
            </div>
            <Button type="submit">Actualizar</Button>
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
export function EliminarInv({ id }) {
  const [openModal, setOpenModal] = useState(false);
  const deleteInven = async () => {
    try {
      await axios.delete(`http://localhost:4000/inventary/${id}`);
      swal({
        title: "Articulo",
        text: "Eliminado exitosamente!",
        icon: "success",
        timer: "1000",
      });
      setOpenModal(false);
    } catch (error) {
      console.error("error", error);
      swal({
        title: "Articulo",
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
              <Button color="failure" onClick={deleteInven}>
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
//---------------------------------------------

// registrar usuarios
export function ModalUsr() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({
    usuario: "",
    pass: "",
    quest: "Selecciona:",
    resp: "",
  });
  const [secondPass, setSecondPass] = useState("");

  const handleChange = (e) => {
    let names = e.target.name;
    let value = e.target.value;
    if (names === "secondPass") {
      setSecondPass(value);
    } else {
      setData({ ...data, [names]: value });
    }
    console.log(e.target.value);
  };
  // enviar datos al servidor
  const handleSend = async (e) => {
    e.preventDefault();
    // validar que los campos no esten vacios
    if (Object.values(data).some((field) => field.trim() === "")) {
      swal({
        title: "Campo vacio",
        text: "Debes ingresar todos los datos",
        icon: "warning",
        timer: "1500",
      });
    } else if (data.pass !== secondPass) {
      return swal({
        title: "Contraseñas no coinciden",
        text: "Las contraseñas ingresadas no son iguales",
        icon: "error",
        timer: "1500",
      });
    } else {
      try {
        await axios.post("http://localhost:4000/signup", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setData({ usuario: "", pass: "", quest: "Selecciona:", resp: "" });
        setSecondPass("");
        setOpenModal(false);
        swal({
          title: "Usuario",
          text: "Registro exitoso!",
          icon: "success",
          timer: "1500",
        });
      } catch (error) {
        if (error.response && error.response.status === 300) {
          swal({
            title: "Usuario invalido...",
            text: `Ya existe un usuario registrado con ese nombre!`,
            icon: "error",
            timer: "2000",
          });
        } else {
          swal({
            title: "Oops...",
            text: `Ha ocurrido un error! ${error}`,
            icon: "error",
          });
        }
        return console.log(error);
      }
    }
  };
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
            <form
              onSubmit={handleSend}
              className="flex flex-col gap-4 max-w-full"
            >
              {/*-------- usuario ---------*/}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="usuario" value="Usuario:" />
                </div>
                <TextInput
                  id="usuario"
                  name="usuario"
                  onChange={handleChange}
                  value={data.usuario}
                  type="text"
                  rightIcon={HiUser}
                  placeholder="Nombre Usuario"
                  required
                  shadow
                />
              </div>
              {/*------- contraseña -------*/}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Contraseña: " />
                </div>
                <TextInput
                  id="pass"
                  name="pass"
                  onChange={handleChange}
                  value={data.pass}
                  type="password"
                  required
                  shadow
                  rightIcon={HiKey}
                />
              </div>
              {/*--- confirmar contraseña ---*/}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password2" value="Repita su Contraseña: " />
                </div>
                <TextInput
                  id="secondPass"
                  name="secondPass"
                  onChange={handleChange}
                  value={secondPass}
                  type="password"
                  required
                  shadow
                  rightIcon={HiKey}
                />
              </div>
              {/*------- pregunta --------- */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="quest" value="Pregunta de Seguridad:" />
                </div>
                <Select
                  id="quest"
                  name="quest"
                  value={data.quest}
                  onChange={handleChange}
                >
                  <option value="Selecciona:" disabled>
                    Seleccione:
                  </option>
                  <option value="1">¿Color Favorito?</option>
                  <option value="2">¿Nombre de mi Perro?</option>
                  <option value="3">¿Nombre de mi Madre?</option>
                  <option value="4">¿Lugar de Nacimiento?</option>
                  <option value="5">¿Primer auto?</option>
                </Select>
              </div>
              {/*------- respuesta ---------*/}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="respuesta" value="Respuesta:" />
                </div>
                <TextInput
                  id="resp"
                  name="resp"
                  onChange={handleChange}
                  value={data.resp}
                  type="text"
                  rightIcon={HiPencil}
                  placeholder="Ingrese su Respuesta"
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
export function EliminarUsr({ id }) {
  const [openModal, setOpenModal] = useState(false);
  const deleteInven = async () => {
    try {
      await axios.delete(`http://localhost:4000/signup/${id}`);
      swal({
        title: "Articulo",
        text: "Eliminado exitosamente!",
        icon: "success",
        timer: "1000",
      });
      setOpenModal(false);
    } catch (error) {
      console.error("error", error);
      swal({
        title: "Articulo",
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
              <Button color="failure" onClick={deleteInven}>
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
export function EditarUsr({ id }) {
  const [openModal, setOpenModal] = useState(false);
  const [secondPass, setSecondPass] = useState("");

  //---------------------------------
  // actualizar datos
  const [datos, setDatos] = useState({
    usuario: "",
    pass: "",
    quest: "",
    resp: "",
  });
  const handleChange = (e) => {
    let names = e.target.name;
    let value = e.target.value;
    if (names === "secondPass") {
      setSecondPass(value);
    } else {
      setDatos({ ...datos, [names]: value });
    }
  };
  // mostrar los datos en los inputs
  const handleOpenModal = async () => {
    const res = await axios.get(`http://localhost:4000/signup/${id}`);
    if (res.data[0]) {
      setDatos(res.data[0]);
    } else {
      console.error("No se pudo obtener los datos del producto");
    }
    setOpenModal(true);
  };

  // enviar los datos nuevos al servidor
  const handleSend = async (e) => {
    e.preventDefault();
    // validar que los campos no esten vacios
    if (
      Object.values(datos).some(
        (field) => typeof field === "string" && field.trim() === ""
      )
    ) {
      swal({
        title: "Campo vacio",
        text: "Debes ingresar todos los datos",
        icon: "warning",
        timer: "1500",
      });
      // valida que ambas contraseñas sean iguales
    } else if (datos.pass !== secondPass) {
      return swal({
        title: "Contraseñas no coinciden",
        text: "Las contraseñas ingresadas no son iguales",
        icon: "error",
        timer: "1500",
      });
    } else {
      // si los campos no estan vacios realiza la funcion
      const datosParaEnviar = {
        usuario: datos.usuario,
        pass: datos.pass,
        quest: datos.quest,
        resp: datos.resp,
      };
      try {
        await axios.put(`http://localhost:4000/signup/${id}`, datosParaEnviar, {
          headers: { "Content-Type": "application/json" },
        });
        setOpenModal(false);
        swal({
          title: "Articulo",
          text: "Actualizado exitosamente!",
          icon: "success",
          timer: "1500",
        });
      } catch (error) {
        if (error.response && error.response.status === 300) {
          swal({
            title: "Usuario invalido...",
            text: `Ya existe un usuario registrado con ese nombre!`,
            icon: "error",
            timer: "2000",
          });
        } else {
          swal({
            title: "Oops...",
            text: `Ha ocurrido un error! ${error}`,
            icon: "error",
          });
        }
        return console.log(error);
      }
    }
  };
  return (
    <Container>
      <>
        <Button onClick={handleOpenModal} color="purple" size="sm">
          <FaEdit />
        </Button>
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          position="top-center"
        >
          <Modal.Header>Editar datos de Usuario</Modal.Header>
          <Modal.Body>
            <form
              onSubmit={handleSend}
              className="flex flex-col gap-4 max-w-full"
            >
              {/*-------- usuario ---------*/}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="usuario" value="Usuario:" />
                </div>
                <TextInput
                  id="usuario"
                  name="usuario"
                  onChange={handleChange}
                  value={datos.usuario}
                  type="text"
                  rightIcon={HiUser}
                  placeholder="Nombre Usuario"
                  required
                  shadow
                />
              </div>
              {/*------- contraseña -------*/}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Contraseña: " />
                </div>
                <TextInput
                  id="pass"
                  name="pass"
                  onChange={handleChange}
                  value={datos.pass}
                  type="password"
                  required
                  shadow
                  rightIcon={HiKey}
                />
              </div>
              {/*--- confirmar contraseña ---*/}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password2" value="Repita su Contraseña: " />
                </div>
                <TextInput
                  id="secondPass"
                  name="secondPass"
                  onChange={handleChange}
                  value={secondPass}
                  type="password"
                  required
                  shadow
                  rightIcon={HiKey}
                />
              </div>
              {/*------- pregunta --------- */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="quest" value="Pregunta de Seguridad:" />
                </div>
                <Select
                  id="quest"
                  name="quest"
                  value={datos.quest}
                  onChange={handleChange}
                >
                  <option value="Selecciona:" disabled>
                    Seleccione:
                  </option>
                  <option value="1">¿Color Favorito?</option>
                  <option value="2">¿Nombre de mi Perro?</option>
                  <option value="3">¿Nombre de mi Madre?</option>
                  <option value="4">¿Lugar de Nacimiento?</option>
                  <option value="5">¿Primer auto?</option>
                </Select>
              </div>
              {/*------- respuesta ---------*/}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="respuesta" value="Respuesta:" />
                </div>
                <TextInput
                  id="resp"
                  name="resp"
                  onChange={handleChange}
                  value={datos.resp}
                  type="text"
                  rightIcon={HiPencil}
                  placeholder="Ingrese su Respuesta"
                  required
                  shadow
                />
              </div>
              <Button type="submit">Actualizar</Button>
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
//----------------------------------------------
// registrar categorias
export function ModalCatg() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({
    categoria: "",
  });

  const handleChange = (e) => {
    let names = e.target.name;
    let value = e.target.value.toUpperCase();
    setData({ ...data, [names]: value });
  };
  // enviar datos al servidor
  const handleSend = async (e) => {
    e.preventDefault();
    // validar que los campos no esten vacios
    if (data.categoria.trim() === "") {
      swal({
        title: "Campo vacio",
        text: "Debes llenar todos los campos",
        icon: "warning",
        timer: "1500",
      });
    } else {
      try {
        await axios.post("http://localhost:4000/categoria", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setData({ categoria: "" });
        setOpenModal(false);
        swal({
          title: "Categoria",
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
        <Button onClick={() => setOpenModal(true)}>Registrar Categoria</Button>
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          position="top-center"
        >
          <Modal.Header>Registrar Categoria</Modal.Header>
          <Modal.Body>
            <form
              className="flex flex-col gap-4 max-w-full"
              onSubmit={handleSend}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="categoria" value="Categoria:" />
                </div>
                <TextInput
                  id="categoria"
                  name="categoria"
                  type="text"
                  rightIcon={HiPencil}
                  placeholder="Nombre categoria"
                  onChange={handleChange}
                  value={data.categoria}
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
export function EliminarCatg({ id }) {
  const [openModal, setOpenModal] = useState(false);
  const deleteInven = async () => {
    try {
      await axios.delete(`http://localhost:4000/categoria/${id}`);
      swal({
        title: "Categoria",
        text: "Eliminado exitosamente!",
        icon: "success",
        timer: "1000",
      });
      setOpenModal(false);
    } catch (error) {
      console.error("error", error);
      swal({
        title: "Categoria",
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
              <Button color="failure" onClick={deleteInven}>
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
export function EditarCatg({ id }) {
  const [openModal, setOpenModal] = useState(false);
  const [categoria, setCategoria] = useState("");
  // actualizar
  const actualizar = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/categoria/${id}`, { categoria });
    setOpenModal(false);
    swal("actualizado");
  };

  const handleOpenModal = async () => {
    const res = await axios.get(`http://localhost:4000/categoria/${id}`);
    setCategoria(res.data[0].categoria);
    setOpenModal(true);
  };
  return (
    <Container>
      <>
        <Button onClick={handleOpenModal} color="purple" size="sm">
          <FaEdit />
        </Button>
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          position="top-center"
        >
          <Modal.Header>Registrar Categoria</Modal.Header>
          <Modal.Body>
            <form
              className="flex flex-col gap-4 max-w-full"
              onSubmit={actualizar}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="categoria" value="Categoria:" />
                </div>
                <TextInput
                  id="categoria"
                  name="categoria"
                  onChange={(e) => setCategoria(e.target.value)}
                  value={categoria}
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
