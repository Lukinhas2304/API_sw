const {conexao} = require('../conexao')

async function deletarCliente(codigo){
    
    const sql = `DELETE FROM tbl_cliente WHERE codigo = ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[codigo]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {deletarCliente}