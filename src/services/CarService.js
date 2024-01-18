// Importa o módulo responsável pela interação com o banco de dados
const db = require('../db');

// Exporta um objeto que contém métodos relacionados à busca de carros
module.exports = {
    // Método para buscar todos os carros
    buscarTodos: () => {
        // Retorna uma nova Promise que encapsula operações assíncronas
        return new Promise((aceito, rejeitado) => {
            // Utiliza o módulo db para realizar uma query no banco de dados
            db.query("SELECT * FROM cars", (error, result) => {
                // Se houver um erro na query, rejeita a Promise com o erro
                if (error) {
                    rejeitado(error);
                    return;
                }
                // Se a query for bem-sucedida, aceita a Promise com o resultado
                aceito(result);
            });
        });
    }, 

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM cars WHERE codigo = ?', [codigo], (error, result) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                if(result.length > 0) {
                    aceito(result[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserir: (modelo, placa) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO cars (modelo,placa) VALUES (?,?)', 
                [modelo, placa], 
                (error, result) => {
                if (error) {rejeitado(error);return;}
                aceito(result.insertCodigo);
                }
            
            );
        });
    },

    alterar:(codigo, modelo, placa)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE carros SET modelo = ?, placa = ? WHERE codigo = ?',
                [modelo, placa, codigo],
                (error, results) => {
                    if(error){ rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },

    excluir: (codigo)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM carros WHERE codigo = ?',[codigo], (error, results ) =>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};
