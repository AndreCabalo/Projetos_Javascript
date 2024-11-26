import conectarAoBanco from '../config/dbConfig.js'; 

// **Conecta ao banco de dados**
// Esta linha importa a função para conectar ao banco de dados, que está localizada em dbConfig.js.
// A variável de ambiente STRING_CONNECTION contém a string de conexão para o banco.
const conexao = await conectarAoBanco(process.env.STRING_CONNECTION);


// **Função assíncrona para buscar todos os posts do banco de dados**
export async function getTodosOsPosts() {
    // Seleciona o banco de dados 'imersaoAlura'
    const db = conexao.db("imersaoAlura"); 
    // Seleciona a coleção 'Posts' dentro do banco de dados
    const colecao = db.collection("Posts"); 
    // Executa a consulta para buscar todos os documentos da coleção e retorna um array com os resultados
    return colecao.find().toArray();
}

export async function criarNovoPost(novoPost) {
      
       const db = conexao.db("imersaoAlura"); 
      
       const colecao = db.collection("Posts"); 
    
       return colecao.insertOne(novoPost);

}