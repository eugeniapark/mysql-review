const model = require('../database/model.js');

module.exports = {
  get: (req, res) => {
    const { listName } = req.query;
    model.Todo.findAll({
      where: {
        list_name: listName
      }
    })
      .then(todos => res.status(200).send(todos)) //send
      .catch(err => res.status(404).end(err)); //end
    console.log('IN GET');
  },
  post: (req, res) => {
    const { todo, listName } = req.body;
    model.Todo.create({
      //create post
      todo: todo,
      list_name: listName
    })
      .then(() => {
        //after post, send status created
        res.status(201).end();
      })
      .catch(err => {
        res.status(404).send(err); //send error message
      });
  },
  delete: (req, res) => {
    const { index } = req.query;
    model.Todo.destroy({
      //delete
      where: { id: index }
    })
      .then(() => {
        //after post, send status created
        res.status(201).end();
      })
      .catch(err => {
        res.status(404).send(err); //send error message
      });
  }
};
