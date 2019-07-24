const userController = require('../controllers/user.controller');
const jwt = require('../middleware/jwt-middleware');

module.exports = (app) => {

    app.post('/login', userController.login);

    app.post('/signup', userController.signup);

    // app.use(jwt.jwtHandler);
    // app.use(jwt.jwtHeaders);
    app.post('/createtoken', userController.createToken);

    app.post('/listtoken', userController.listToken);

    app.get('/getalltokens', userController.getAllTokens);

    app.get('/getlisttokens', userController.getListTokens);

    app.get('/gettokendata', userController.getTokenData);

}