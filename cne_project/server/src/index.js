import {httpServer} from "./app.js";

// inciar el servidores
httpServer.listen(4000, () => {
  console.log(`Servidor en el puerto 4000`)
});