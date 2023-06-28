import app from "./app";
import AppDataSource from "./data-source";

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Erro durante a inicialização do servidor", err);
  });

  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });
})();
