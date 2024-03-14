import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host: "localhost",
    user: "root",
    password: "MySQLite_2712",
    database: "cne_bd"
});

