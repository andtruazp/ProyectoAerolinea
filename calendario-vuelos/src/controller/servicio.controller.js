import { pool } from '../model.js'

export const getServicios = async (req, res) =>{
    try {
        const[rows, fields]=await pool.query('SELECT id_servicio, nombre FROM servicio')
    res.json(rows)
    }  catch (error) {
        console.error('Error al obtener servicios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export const getServiciosAll = async (req, res) =>{
    try {
        const[rows, fields]=await pool.query('SELECT * FROM servicio')
    res.json(rows)
    }  catch (error) {
        console.error('Error al obtener servicios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

/*export const agregarServicio = async (req, res) => {
    try {
        const { tipo, nombre, descripcion, costo, extra } = req.body;


        if (!tipo || !nombre || !descripcion) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
        }

        const result = await pool.query('INSERT INTO servicio (tipo, nombre, descripcion, costo, extra) VALUES (?, ?, ?, ?, ?)', [tipo, nombre, descripcion, costo, extra]);

        // Devuelve la respuesta
        res.json({ id: result.insertId, mensaje: 'Servicio agregado exitosamente' });
    } catch (error) {
        console.error('Error al agregar servicio:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}*/
export const agregarServicio = async (req, res) => {
    try {
        const { tipo, nombre, descripcion, costo, extra } = req.body;

        // Verifica que todos los campos necesarios estén presentes en el cuerpo de la solicitud
       /* if (!tipo || !nombre || !descripcion || !costo || !extra) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
        }*/

        let query, values;

        // Dependiendo del tipo de servicio, ajusta la consulta y los valores
        switch (tipo.toLowerCase()) {
            case 'basico':
                query = 'INSERT INTO servicio (tipo, nombre, descripcion) VALUES (?, ?, ?)';
                values = [tipo, nombre, descripcion];
                break;
            case 'plus':
                query = 'INSERT INTO servicio (tipo, nombre, descripcion, costo) VALUES (?, ?, ?, ?)';
                values = [tipo, nombre, descripcion, costo];
                break;
            case 'premium':
                query = 'INSERT INTO servicio (tipo, nombre, descripcion, costo, extra) VALUES (?, ?, ?, ?, ?)';
                values = [tipo, nombre, descripcion, costo, extra];
                break;
            default:
                return res.status(400).json({ error: 'Tipo de servicio no válido' });
        }

        // Realiza la inserción en la base de datos
        const result = await pool.query(query, values);

        // Devuelve la respuesta
        res.json({ id: result.insertId, mensaje: 'Servicio agregado exitosamente' });
    } catch (error) {
        console.error('Error al agregar servicio:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
