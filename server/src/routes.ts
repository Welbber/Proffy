import express from 'express'
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);
routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;

/*app.get('/users', (request, response) => {
    const users = [
        {name: "welbber", age : 18},
        {name: "Joao", age : 15}
    ]
    return response.json(users);
});
app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    const users = [
        {name: "welbber", age : 18},
        {name: "Joao", age : 15}
    ]
    return response.json(users);
});
app.post('/cadastrarUsuario', (request, response) => {
    console.log(request.body);

    const users = [
        {name: "welbber", age : 18},
        {name: "Joao", age : 15}
    ]
    return response.json(users);
});*/