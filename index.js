const express = require('express')
const env = require('dotenv')

const { buscarClientes } = require('./src/DAO/cliente/buscarClientes.js')
const { buscarProdutos } = require('./src/DAO/produtos/buscarProdutos.js')
const { buscarPedidos } = require('./src/DAO/pedidos/buscarPedidos.js')
const { buscarEnderecos } = require('./src/DAO/endereco/buscarEnderecos.js')
const { buscarCategoria } = require('./src/DAO/categoria/buscarCategoria.js')
const { buscarStatus } = require('./src/DAO/status/buscarStatus.js')
const { buscarItemPedido } = require('./src/DAO/itemPedido/buscarItemPedido.js')

const { incluirCliente } = require('./src/DAO/cliente/inserirCliente.js')
const { incluirProdutos } = require('./src/DAO/produtos/inserirProdutos.js')
const { incluirPedido } = require('./src/DAO/pedidos/inserirPedidos.js')
const { incluirEndereco } = require('./src/DAO/endereco/inserirEndereco.js')
const { incluirCategoria } = require('./src/DAO/categoria/inserirCategoria.js')
const { incluirStatus } = require('./src/DAO/status/inserirStatus.js')
const { incluirItemPedido } = require('./src/DAO/itemPedido/inserirItemPedido.js')

const { deletarCategoria } = require('./src/DAO/categoria/deletarCategoria.js')
const { deletarCliente } = require('./src/DAO/cliente/deletarCliente')
const { deletarEnderecos } = require('./src/DAO/endereco/deletarEnderecos.js')
const { deletarItemPedido } = require('./src/DAO/itemPedido/deletarItemPedido.js')
const { deletarPedidos } = require('./src/DAO/pedidos/deletarPedidos.js')
const { deletarStatus } = require('./src/DAO/status/deletarStatus')
const { deletarProdutos } = require('./src/DAO/produtos/deletarProdutos.js')

const { editarIntegralmenteCliente} = require('./src/DAO/cliente/editarIntegralmenteCliente.js')
const { editarIntegralmenteProdutos } = require('./src/DAO/produtos/editarIntegralmenteProdutos.js')
const { editarIntegralmentePedidos} = require('./src/DAO/pedidos/editarIntegralmentePedidos.js')
const { editarIntegralmenteEndereco } = require('./src/DAO/endereco/editarIntegralmenteEnderecos.js')
const { editarIntegralmenteCategoria} = require('./src/DAO/categoria/editarIntegralmenteCategoria.js')
const { editarIntegralmenteStatus } = require('./src/DAO/status/editarIntegralmenteStatus.js')
const { editarIntegralmenteItemPedido } = require('./src/DAO/itemPedido/editarIntegralmenteItemPedido.js')

const { editarParcialmenteCliente } = require('./src/DAO/cliente/editarParcialmenteCliente.js')
const { editarParcialmenteProdutos } = require('./src/DAO/produtos/editarParcialmenteProdutos.js')
const { editarParcialmentePedidos } = require('./src/DAO/pedidos/editarParcialmentePedidos.js')
const { editarParcialmenteEnderecos } = require('./src/DAO/endereco/editarParcialmenteEnderecos.js')
const { editarParcialmenteCategoria} = require('./src/DAO/categoria/editarParcialmenteCategoria.js')
const { editarParcialmenteStatus } = require('./src/DAO/status/editarParcialmenteStatus.js')
const { editarParcialmenteItemPedidos } = require('./src/DAO/itemPedido/editarParcialmenteItemPedido.js')

const app = express()
env.config()

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

const {conexao, closeConexao, testarConexao} = require('./src/DAO/conexao.js')

app.get('/empresa_produtos_limpezas', (req, res) => {
    let respInicial = {
        msg: "Aplicação Funcionando"
    }
    res.json(respInicial)
})

//get

app.get('/empresa_produtos_limpezas/v1/categoria', async (req, res) =>{
    let categoria = await buscarCategoria()
    res.json(categoria)
})

app.get('/empresa_produtos_limpezas/v1/produtos', async (req, res) =>{
    let produtos = await buscarProdutos()
    res.json(produtos)
})

app.get('/empresa_produtos_limpezas/v1/status', async (req, res) =>{
    let status = await buscarStatus()
    res.json(status)
})

app.get('/empresa_produtos_limpezas/v1/enderecos', async (req, res) =>{
    let endereco = await buscarEnderecos()
    res.json(endereco)
})

app.get('/empresa_produtos_limpezas/v1/cliente', async (req, res) =>{
    let clientes = await buscarClientes()
    res.json(clientes)
})

app.get('/empresa_produtos_limpezas/v1/pedidos', async (req, res) =>{
    let pedidos = await buscarPedidos()
    res.json(pedidos)
})

app.get('/empresa_produtos_limpezas/v1/itemPedidos', async (req, res) =>{
    let itemPedidos = await buscarItemPedido()
    res.json(itemPedidos)
})

//post

app.post('/empresa_produtos_limpezas/v1/categoria', async (req, res) =>{
    let {id, nome} = req.body
    const infos = [id, nome]
    let result = await incluirCategoria(infos)
    res.json(result)
})

app.post('/empresa_produtos_limpezas/v1/produtos', async (req, res) =>{
    let {codigo, nome, id_categoria, preco} = req.body
    const infos = [codigo,nome, id_categoria, preco]
    let result = await incluirProdutos(infos)
    res.json(result)
})

app.post('/empresa_produtos_limpezas/v1/status', async (req, res) =>{
    let {id, nome} = req.body
    const infos = [id, nome]
    let result = await incluirStatus(infos)
    res.json(result)
})

app.post('/empresa_produtos_limpezas/v1/enderecos', async (req, res) =>{
    let {id, logradouro, cep, numero, bairro,  cidade} = req.body
    const infos = [id, logradouro, cep, numero, bairro,  cidade]
    let result = await incluirEndereco(infos)
    res.json(result)
})

app.post('/empresa_produtos_limpezas/v1/cliente', async (req, res) =>{
    let {codigo, nome, limite, telefone, id_endereco, id_status} = req.body
    const infos = [codigo, nome, telefone, limite, id_endereco, id_status]
    let result = await incluirCliente(infos)
    res.json(result)
})

app.post('/empresa_produtos_limpezas/v1/pedidos', async (req, res) =>{
    let {numero, data_elaboracao, cliente_id} = req.body
    const infos = [numero, data_elaboracao, cliente_id]
    let result = await incluirPedido(infos)
    res.json(result)
})

app.post('/empresa_produtos_limpezas/v1/itemPedidos', async (req, res) =>{
    let {id, id_pedido, id_produto, qnt} = req.body
    const infos = [id, id_pedido, id_produto, qnt]
    let result = await incluirItemPedido(infos)
    res.json(result)
})

//put

app.put('/empresa_produtos_limpezas/v1/categoria', async (req, res) =>{
    let {codigo, nome, limite, telefone, id_endereco, id_status} = req.body
    const infos = [telefone, nome, limite, id_endereco, id_status]
    let result = await editarIntegralmenteCategoria(infos, codigo)
    res.status(200).json(result)
})

app.put('/empresa_produtos_limpezas/v1/produtos', async (req, res) =>{
    let {codigo, nome, limite, telefone, id_endereco, id_status} = req.body
    const infos = [telefone, nome, limite, id_endereco, id_status]
    let result = await editarIntegralmenteProdutos(infos, codigo)
    res.status(200).json(result)
})

app.put('/empresa_produtos_limpezas/v1/status', async (req, res) =>{
    let {codigo, nome, limite, telefone, id_endereco, id_status} = req.body
    const infos = [telefone, nome, limite, id_endereco, id_status]
    let result = await editarIntegralmenteStatus(infos, codigo)
    res.status(200).json(result)
})

app.put('/empresa_produtos_limpezas/v1/enderecos', async (req, res) =>{
    let {codigo, nome, limite, telefone, id_endereco, id_status} = req.body
    const infos = [telefone, nome, limite, id_endereco, id_status]
    let result = await editarIntegralmenteEnderecos(infos, codigo)
    res.status(200).json(result)
})

app.put('/empresa_produtos_limpezas/v1/cliente', async (req, res) =>{
    let {codigo, nome, limite, telefone, id_endereco, id_status} = req.body
    const infos = [telefone, nome, limite, id_endereco, id_status]
    let result = await editarIntegralmenteCliente(infos, codigo)
    res.status(200).json(result)
})

app.put('/empresa_produtos_limpezas/v1/pedidos', async (req, res) =>{
    let {codigo, nome, limite, telefone, id_endereco, id_status} = req.body
    const infos = [telefone, nome, limite, id_endereco, id_status]
    let result = await editarIntegralmentePedidos(infos, codigo)
    res.status(200).json(result)
})

app.put('/empresa_produtos_limpezas/v1/itemPedidos', async (req, res) =>{
    let {codigo, nome, limite, telefone, id_endereco, id_status} = req.body
    const infos = [telefone, nome, limite, id_endereco, id_status]
    let result = await editarIntegralmenteItemPedido(infos, codigo)
    res.status(200).json(result)
})

//patch

app.patch('/empresa_produtos_limpezas/v1/categoria', async (req, res) =>{
    let {codigo, campo, valor } = req.body
    let result = await editarParcialmenteCategoria(codigo, campo, valor)
    res.status(200).json(result)
})

app.patch('/empresa_produtos_limpezas/v1/produtos', async (req, res) =>{
    let {codigo, campo, valor } = req.body
    let result = await editarParcialmenteProdutos(codigo, campo, valor)
    res.status(200).json(result)
})

app.patch('/empresa_produtos_limpezas/v1/status', async (req, res) =>{
    let {codigo, campo, valor } = req.body
    let result = await editarParcialmenteStatus(codigo, campo, valor)
    res.status(200).json(result)
})

app.patch('/empresa_produtos_limpezas/v1/enderecos', async (req, res) =>{
    let {codigo, campo, valor } = req.body
    let result = await editarParcialmenteEnderecos(codigo, campo, valor)
    res.status(200).json(result)
})

app.patch('/empresa_produtos_limpezas/v1/cliente', async (req, res) =>{
    let {codigo, campo, valor } = req.body
    let result = await editarParcialmenteCliente(codigo, campo, valor)
    res.status(200).json(result)
})

app.patch('/empresa_produtos_limpezas/v1/pedidos', async (req, res) =>{
    let {codigo, campo, valor } = req.body
    let result = await editarParcialmentePedidos(codigo, campo, valor)
    res.status(200).json(result)
})

app.patch('/empresa_produtos_limpezas/v1/itemPedidos', async (req, res) =>{
    let {codigo, campo, valor } = req.body
    let result = await editarParcialmenteItemPedidos(codigo, campo, valor)
    res.status(200).json(result)
})


//delete

app.delete('/empresa_produtos_limpezas/v1/categoria', async (req, res) =>{
    let { codigo } = req.body
    let result = await deletarCategoria(codigo)
    res.json(result)
})

app.delete('/empresa_produtos_limpezas/v1/produtos', async (req, res) =>{
    let { codigo } = req.body
    let result = await deletarProdutos(codigo)
    res.json(result)
})

app.delete('/empresa_produtos_limpezas/v1/status', async (req, res) =>{
    let { codigo } = req.body
    let result = await deletarStatus(codigo)
    res.json(result)
})

app.delete('/empresa_produtos_limpezas/v1/enderecos', async (req, res) =>{
    let { codigo } = req.body
    let result = await deletarEnderecos(codigo)
    res.json(result)
})

app.delete('/empresa_produtos_limpezas/v1/cliente', async (req, res) =>{
    let { codigo } = req.body
    let result = await deletarCliente(codigo)
    res.json(result)
})

app.delete('/empresa_produtos_limpezas/v1/pedidos', async (req, res) =>{
    let { codigo } = req.body
    let result = await deletarPedidos(codigo)
    res.json(result)
})

app.delete('/empresa_produtos_limpezas/v1/itemPedidos', async (req, res) =>{
    let { codigo } = req.body
    let result = await deletarItemPedidos(codigo)
    res.json(result)
})


const porta = 3000

app.listen(porta, () =>{
    console.log("Operando na porta " + porta)
    testarConexao()
})