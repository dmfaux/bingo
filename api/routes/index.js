const gameController = require("../controllers").game;

module.exports = (app) => {
  app.get("/game/:id", gameController.get);
  app.post("/game", gameController.create);

  app.get("/join/:code", gameController.getByCode);
  app.post("/join/:code", gameController.joinByCode);

  app.get("/board/:id", gameController.getBoardById);
  app.patch("/board/:id", gameController.patchBoardById);
};
