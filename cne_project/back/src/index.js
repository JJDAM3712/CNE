import app from "./app.js";

// inciar el servidor
app.listen(app.get('port'), ()=> {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});