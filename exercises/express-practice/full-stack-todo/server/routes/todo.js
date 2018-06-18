import { Router } from 'express';
import Todo from '../models/todo';

const todoRouter = new Router();

todoRouter.get('/', (req, res) => {
    Todo.find((err, todos) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.send(todos);
    });
});

todoRouter.get('/:id', (req, res) => {
    // req.params.id
});

todoRouter.post('/', (req, res) => {
    const todo = new Todo(req.body);
    todo.save((err, newTodo) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(201).send(newTodo);
    });
});

todoRouter.put('/:id', (req, res) => {
    Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedTodo) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(updatedTodo);
        }
    );
});

todoRouter.delete('/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, deletedTodo) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.send({ message: 'Todo was deleted.', deletedTodo });
    });
});

export default todoRouter;
