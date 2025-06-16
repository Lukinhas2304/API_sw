const {conexao} = require('../conexao')

async function deletarItemPedido(codigo){
    
    const sql = `DELETE FROM tbl_itempedido WHERE codigo = ?`
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

module.exports = {deletarItemPedido}