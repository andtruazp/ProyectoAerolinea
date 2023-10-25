import { pool } from '../model.js'

export const getServicios = async (req, res) =>{
    const[rows, fields]=await pool.query('SELECT nombre FROM servicio')
    res.json(rows)
}