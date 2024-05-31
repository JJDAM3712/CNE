import { path } from 'path'

module.exports = {
  entry: './src/index.js', // Punto de entrada de tu aplicación
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
  },
};