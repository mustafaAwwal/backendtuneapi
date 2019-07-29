const userController = require('../controllers/user.controller');
const tokenController= require('../controllers/token.controller');
const jwt = require('../middleware/jwt-middleware');

module.exports = (app) => {

    app.post('/login', userController.login);

    app.post('/signup', userController.signup);
    // app.use(jwt.jwtHandler);
    // app.use(jwt.jwtHeaders);
    app.post('/createtoken', tokenController.createToken);

    app.post('/listtoken', tokenController.listToken);

    app.get('/getalltokens', tokenController.getAllTokens);

    app.get('/getlisttokens', tokenController.getListTokens);

    app.get('/gettokendata', tokenController.getTokenData);
    
    app.post('/inserttokendata', tokenController.insertToken);

    app.post('/removeToken', tokenController.removeLiveToken);

    app.get('/getdeploytokens', tokenController.getDeployTokens);
}