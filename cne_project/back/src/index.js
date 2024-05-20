import {app, httpServer} from "./app.js";

// inciar el servidores
httpServer.listen(app.get('port'), () => {
  console.log(`Servidor en el puerto ${app.get('port')}`)
});