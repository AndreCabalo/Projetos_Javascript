import { getTodosOsPosts, criarNovoPost } from '../models/postsModel.js';
import fs from 'fs';

export async function listarPosts(req, res) {
    // Chama a função para buscar todos os posts e armazena o resultado
    const posts = await getTodosOsPosts();
    // Envia os posts como resposta para o cliente, com status 200 (sucesso)
    res.status(200).json(posts);
}

export async function criadorDePosts(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarNovoPost(novoPost);
        res.status(200).json(postCriado);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ "Erro": "Erro ao criar novo post" });
    }
}

    export async function uploadImagem(req, res) {
        const novoPost = {
            descricao: "",
            imgUrl: req.file.originalname,
            alt: ""
        };

        try {
            const postCriado = await criarNovoPost(novoPost);
            const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
            fs.renameSync(req.file.path, imagemAtualizada)
            res.status(200).json(postCriado);
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ "Erro": "Erro ao criar novo post" });
        }
    }
