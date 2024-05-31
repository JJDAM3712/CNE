import { pool} from "../db.js";
import { io } from '../app.js';

// eventos io.emit para websockets


// eventos categoria
export const obtenerCategory = async () => {
    try {
      const sql = `SELECT * FROM categoria ORDER BY categoria ASC`;
      const [nuevasAsistencias] = await pool.query(sql);
      io.emit('ActualizatTable', nuevasAsistencias);
    } catch (error) {
      console.error('Error al obtener y enviar asistencias:', error);
      // Maneja el error según tus necesidades
    }
}

// eventos cargos
export const obtenerCargos= async () => {
  try {
    const sql = `SELECT * FROM cargos ORDER BY cargo ASC`;
    const [nuevasAsistencias] = await pool.query(sql);
    // emite el evento con los datos actualizados
    io.emit('ActualizatTable', nuevasAsistencias);
  } catch (error) {
    console.error('Error al obtener y enviar cargos:', error);
    // Maneja el error según tus necesidades
  }
}

// eventos departamento
export const obtenerDepart = async () => {
  try {
    const sql = `SELECT * FROM departamento ORDER BY departamento ASC`;
    const [nuevasAsistencias] = await pool.query(sql);
    // emite el evento con los datos actualizados
    io.emit('ActualizatTable', nuevasAsistencias);
  } catch (error) {
    console.error('Error al obtener y enviar cargos:', error);
    // Maneja el error según tus necesidades
  }
}

// evento asistencias
export const obtenerAsistence = async () => {
  try {
    const sql_3 = `SELECT *
              FROM asistencia JOIN personal ON
              personal.id_personal = asistencia.id_personal`;
    const [nuevasAsistencias] = await pool.query(sql_3);
    // emite el evento con los datos actualizados
    io.emit('ActualizatTable', nuevasAsistencias)
  } catch (error) {
    console.error('Error al obtener y enviar cargos:', error);
    // Maneja el error según tus necesidades
  }
}

// envento inventario
export const obtenerInventary = async (req , res) => {
  try {
    const sql = `SELECT  nombre, marca, codigo, modelo, departamento, estado, cantidad, categoria
    
            FROM inventario 
            join categoria on categoria.id_categoria = inventario.id_categoria 
            join departamento on departamento.id_departamento = inventario.id_departamento`;
    const [nuevasIntentary] = await pool.query(sql);
    // emite el evento con los datos actualizados
    io.emit('ActualizatTable', nuevasIntentary)
  } catch (error) {
    console.error('Error al obtener y enviar cargos:', error);
    // Maneja el error según tus necesidades
  }
}

// evento personal
export const obtenerPersonal = async () => {
  try {
    const sql = `SELECT nombre, apellido, cedula, telefono, cargo, departamento
        FROM personal 
        join cargos on cargos.id_cargo = personal.id_cargo 
        join departamento on departamento.id_departamento = personal.id_departamento`;
    const [nuevasAsistencias] = await pool.query(sql);
    // emite el evento con los datos actualizados
    io.emit('ActualizatTable', nuevasAsistencias) 
  } catch (error) {
    console.error('Error al obtener y enviar cargos:', error);
    // Maneja el error según tus necesidades
  }
}

// evento visitas
export const obtenerVisitas = async () => {
  try {
    const sql = `SELECT * FROM visita 
                JOIN departamento ON
                departamento.id_departamento = visita.id_departamento`;
    const [nuevasAsistencias] = await pool.query(sql);
    // emite el evento con los datos actualizados
    io.emit('ActualizatTable', nuevasAsistencias);
  } catch (error) {
    console.error('Error al obtener y enviar cargos:', error);
    // Maneja el error según tus necesidades
  }
}
