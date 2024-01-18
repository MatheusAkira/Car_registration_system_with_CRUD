// Importa o serviço responsável por lidar com operações relacionadas a carros
const CarService = require('../services/CarService');

// Exporta um objeto que contém métodos relacionados à busca de carros
module.exports = {
    // Método para buscar todos os carros
    buscarTodos: async (req, res) => {
        // Cria um objeto JSON com uma estrutura básica para armazenar resultados e erros
        let json = { error: '', result: [] };

        // Chama o método assíncrono "buscarTodos" do serviço de carro e aguarda a conclusão
        let carros = await CarService.buscarTodos();

        // Itera sobre a lista de carros obtida e transforma os dados antes de enviá-los como resposta
        for (let i in carros) {
            json.result.push({
                // Adiciona informações específicas de cada carro ao resultado
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            });
        }

        // Envia a resposta JSON contendo os resultados ou erros ao cliente
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result: {}};
        
        let codigo = req.params.codigo;
        let carro = await CarService.buscarUm(codigo);

        if(carro){
            json.result = carro;
        }
        res.json(json);
    },

    inserir: async (req, res) => {
        let json = {error:'', result: {}};
        
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(modelo && placa){
            let CarroCodigo = await CarService.inserir(modelo, placa);
            json.result = {
                codigo: CarroCodigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não informados';

        }
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if (codigo && modelo && placa){
            await CarroService.alterar(codigo, modelo, placa);
            json.result = {
                codigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await CarroService.excluir(req.params.codigo);
        
        res.json(json);
    },


}
