import styled from "styled-components";
import logo from "../assets/img/CNE_logo.svg";
import {
  Button,
  Modal,
  Checkbox,
  Radio,
  Label,
  TextInput,
  Select,
} from "flowbite-react";
import { FaEraser, FaEdit } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useState, useRef } from "react";

export function ModalRegis() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <>
        <Button onClick={() => setOpenModal(true)}>Registrar Persona</Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
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
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
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
export function EliminarPersona() {
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
