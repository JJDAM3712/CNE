import styled from "styled-components";
import {
  Button,
  Modal,
  Checkbox,
  Label,
  TextInput,
  Select,
} from "flowbite-react";
import { useState } from "react";
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
        <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Terms of Service</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Container>
  );
}
const Container = styled.div``;
