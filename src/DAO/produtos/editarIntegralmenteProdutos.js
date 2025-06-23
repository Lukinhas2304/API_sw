const {conexao} = require('../conexao.js')

async function editarIntegralmenteProdutos(infos, codigo){

    const sql = `UPDATE tbl_categoria SET codigo = ?,  nome = ?     id_categoria = ?,   preco = ? WHERE codigo = ${codigo} ;`
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

module.exports = {editarIntegralmenteProdutos}