import { pool } from '../model.js'

export const getEmpresa = async (req, res) =>{
  try {
    const[rows, fields]=await pool.query('SELECT * FROM empresa WHERE id_empresa = ?',[req.params.id])
    res.json(rows)
  } catch (error) {
    console.error('Error al obtener datos de vuelos:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los datos de vuelos' });
  }
    
}

export const newEmpresa = async (req, res) =>{
  try {
    const newEmpresa = req.body
    const[result]= await pool.query('INSERT INTO empresa SET ?', [newEmpresa])
    res.json('insertado')
  } catch (error) {
    console.error('Error al obtener datos de vuelos:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los datos de vuelos' });
  }
}

export const updateEmpresa = async (req,res) =>{
  try {
    const { id } = req.params; 
    const {correo, direccion, telefono, poli_condi } = req.body
    const [result] = await pool.execute(
      'UPDATE empresa SET correo = ?, direccion = ?, telefono = ?, poli_condi= ? WHERE id_empresa = ?',
      [correo, direccion, telefono, poli_condi, id]
    )
    const [rows]= await pool.query('SELECT * FROM empresa WHERE id_empresa = ?',[id])
    res.json(rows)
  } catch (error) {
    console.error('Error al obtener datos de vuelos:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los datos de vuelos' });
  }
    
}

export const bajaEmpresa = async (req,res) => {
  try{
    const { id } = req.params;
    //const {estatus} = req.body
    const [result] = await pool.execute(
    'UPDATE empresa SET estatus = False WHERE id_empresa = ?',[id]
    )
    res.json('Actualizado')
  }catch(error) {
    console.error('Error al obtener datos de vuelos:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los datos de vuelos' });
  }
}

export const altaEmpresa = async (req,res) => {
  try{
    const { id } = req.params;
    const [result] = await pool.execute(
    'UPDATE empresa SET estatus = True WHERE id_empresa = ?',[id]
    )
    res.json('Actualizado')
  }catch(error) {
    console.error('Error al obtener datos de vuelos:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los datos de vuelos' });
  }
}

export const deleteEmpresa = async (req,res) => {
  try {
    const [result] = await pool.execute(
      'DELETE FROM empresa WHERE id_empresa = ?',[req.params.id]
    )
    res.json('Empresa Eliminada')
  } catch (error) {
    console.error('Error al obtener datos de vuelos:', error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los datos de vuelos' });
  }
  
}