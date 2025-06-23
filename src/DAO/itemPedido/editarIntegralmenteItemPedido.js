const {conexao} = require('../conexao.js')

async function editarIntegralmenteItemPedido(infos, codigo){

    const sql = `UPDATE tbl_categoria SET id  = ?, id_pedido = ?,  id_produto = ?,   qnt = ? WHERE codigo = ${codigo} ;`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[...infos]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {editarIntegralmenteItemPedido}