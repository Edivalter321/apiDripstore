
import * as usuarioRepository from "../repository/usuario.repository.js"


export const getAll = async (req, res) => {
    try {
        const usuarios = await usuarioRepository.getAll();
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(500).json({message: error})

    }
};
