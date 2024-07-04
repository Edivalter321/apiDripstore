
import * as usuarioRepository from "../repository/usuario.repository.js"


export const getAll = async (req, res) => {
    try {
        const usuarios = await usuarioRepository.getAll();
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(500).json(`Erro aqui ${error}`)

    }
};

export const getOne = async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id)
      const usuarios = await usuarioRepository.getOne(id);
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json(`O erro é ${error}`);
    }
  };

  export const create = async (req, res) => {
    try {
      const data = req.body;
      const usuarios = await usuarioRepository.create(data);
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json(`O erro é aqui ${error}`);
    }
  };
