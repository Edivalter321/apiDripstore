// app.js
import express from 'express';
import produtoRoutes from "./src/routes/produto.routes.js";
import usuarioRoutes from "./src/routes/usuario.routes.js";

const app = express();
const PORT = 666;

app.use(express.json());
app.use('/produtos', produtoRoutes);
app.use('/usuarios', usuarioRoutes)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});




  