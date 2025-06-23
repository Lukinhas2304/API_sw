const {conexao} = require('../conexao')

async function deletarEnderecos(numero){
    
    const sql = `DELETE FROM tbl_endereco WHERE codigo = ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[numero]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {deletarEnderecos}