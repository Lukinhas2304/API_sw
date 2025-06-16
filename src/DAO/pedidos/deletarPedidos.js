const {conexao} = require('../conexao')

async function deletarPedidos(codigo){
    
    const sql = `DELETE FROM tbl_pedido WHERE codigo = ?`
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

module.exports = {deletarPedidos}