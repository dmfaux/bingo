const uuid = require("uuid");
const { Game, Participant } = require("../models");
const Board = require("./Board");
const status = require("http-status-codes");
const { Op } = require("sequelize");

module.exports = {
  create(req, res) {
    const code = (Math.random() + 1).toString(36).substring(2, 7);
    const id = uuid.v1();
    return Game.create({
      id,
      code,
      name: req.body.name,
    })
      .then((game) => {
        res.status(status.CREATED).send(game);
      })
      .catch((error) => {
        res.status(status.BAD_REQUEST).send(error);
      });
  },
  get(req, res) {
    return Game.findByPk(req.params.id).then((game) => {
      const data = transformGame(game.toJSON());
      res.status(status.OK).json(data);
    });
  },
  getByCode(req, res) {
    return Game.findOne({
      where: {
        code: {
          [Op.eq]: req.params.code,
        },
      },
    }).then((game) => {
      if (game) {
        const data = transformGame(game.toJSON());
        delete data.id; // Remove game id from data
        res.status(status.OK).json(data);
      } else {
        res.status(status.NOT_FOUND).json("Game not found");
      }
    });
  },
  joinByCode(req, res) {
    return Game.findOne({
      where: {
        code: {
          [Op.eq]: req.params.code,
        },
      },
    })
      .then((game) => {
        const board = Board.generateBoard();
        const data = {
          id: uuid.v1(),
          name: req.body.name,
          gameId: game.get("id"),
          board: board,
        };

        Participant.create(data)
          .then(() => {
            res.status(status.OK).json(data);
          })
          .catch((err) => {
            console.error(err);
            res.status(status.NOT_ACCEPTABLE).json("An error occured");
          });
      })
      .catch((err) => {
        console.error(err);
        res.status(status.NOT_FOUND).json("Could not find game");
      });
  },
  getBoardById(req, res) {
    return Participant.findByPk(req.params.id)
      .then((board) => {
        res.status(status.OK).json(board.toJSON());
      })
      .catch((err) => {
        console.error(err);
        res.status(status.NOT_FOUND).json("Board does not exist");
      });
  },
  patchBoardById(req, res) {
    return Participant.update(
      { board: req.body.board },
      {
        where: {
          id: {
            [Op.eq]: req.params.id,
          },
        },
      }
    )
      .then(() => {
        res.status(status.ACCEPTED).json(req.body);
      })
      .catch((err) => {
        console.error(err);
        res.status(status.NOT_ACCEPTABLE).json(err.message);
      });
  },
};

transformGame = (game) => {
  return {
    id: game.id,
    name: game.name,
    code: game.code,
  };
};

transformCollection = (games) => {
  return games.map((game) => transformGame(game));
};
