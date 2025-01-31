import express from 'express';
import multer from 'multer';
import { listarPosts, criadorDePosts, uploadImagem } from '../controllers/postsController.js';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    // Permite que o servidor receba dados no formato JSON
    app.use(express.json());

    // **Rota para buscar todos os posts**
    app.get("/posts", listarPosts);
    //**Rota para criar um post **
    app.post("/posts", criadorDePosts);
    //**Rota para upload de imagem **
    app.post("/upload",upload.single("imagem"), uploadImagem);
};

export default routes;
