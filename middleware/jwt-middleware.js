const jwt = require('jsonwebtoken');
module.exports = {
    jwtHandler: function(req, res, next) {
        let token = req.get('token');
        jwt.verify(token, process.env.SECRET_KEY, function(err,decoded) {
            if(err) {
                console.log('error')
                res.json({
                    token: null
                });
            }
            else {
                next();
            }
        })
    }
    // jwtHeaders: function(req, res, next) {
    //     res.set('token',req.get('token'))
    //     next();
    // }
}
