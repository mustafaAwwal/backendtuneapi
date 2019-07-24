
const db = require('../config/db.config');
const jwt = require('jsonwebtoken');

module.exports.login = (req, res) => {
    
    const userData = {
        username: req.body.userName,
        userpassword: req.body.userPassword,
        id: req.body.userId
    }
    token = jwt.sign(
        {
            role: 'admin'
        },
        process.env.SECRET_KEY,
        {
            algorithm: 'HS256',
            expiresIn: 10000
        }
    )
    db.execute(`SELECT * FROM testdb.users WHERE userPassword = "${userData.userpassword}" AND userId = "${userData.id}"` ).then((data) => {
        if(data[0].length > 0){
            res.send({
                "message":'HURRAH', 
                status:true, 
                data: data[0] ,
                token: token
            });
        } else{
            res.send({
                "message":'invalid credentials', 
                status:false 
            });
        }
        
    }).catch((err) => {
        console.log(err);
    });
}


module.exports.signup = (req, res) => {

    const userData = {
        username: req.body.userName,
        useremail: req.body.userEmail,
        userpassword: req.body.userPassword,
        id: req.body.userId
    }

    db.execute(`INSERT INTO testdb.users (userName,userPassword,userEmail,userId) VALUES ("${userData.username}","${userData.userpassword}","${userData.useremail}","${userData.id}");` ).then((data) => {
        console.log(data);
        
        if(data){
            res.send({
                "message":'Successfully!', 
                status:true, 
            });
        } else{
            res.send({
                "message":'invalid credentials', 
                status:false 
            });
        }
        
    }).catch((err) => {
        console.log(err);
    });
}


module.exports.createToken = (req, res) => {

    const userData = {
        name: req.body.tokenName,
        symbol: req.body.tokenSymbol,
        category: req.body.category,
        decimal: req.body.decimals,
        ethAddress: req.body.ethAddress,
        soundCloud: req.body.soundCloud,
        description: req.body.tokenDescription,
        youtube: req.body.youtube,
        supply: req.body.totalSupply,
        website: req.body.website,
        author: req.body.tokenAuthor,
    }

    db.execute(`INSERT INTO testdb.createtoken (tokenName, tokenSymbol, tokenAuthor, category, decimals, totalSupply, website, youtube, ethAddress, tokenDescription, soundCloud) VALUES ("${userData.name}","${userData.symbol}","${userData.author}","${userData.category}","${userData.decimal}","${userData.supply}","${userData.website}","${userData.youtube}","${userData.ethAddress}","${userData.description}","${userData.soundCloud}");` ).then((data) => {
        console.log(data);
        
        if(data){
            res.send({
                "message":'Successfully!', 
                status:true, 
            });
        } else{
            res.send({
                "message":'invalid Entries', 
                status:false 
            });
        }
        
    }).catch((err) => {
        console.log(err);
    });
}


module.exports.listToken = (req, res) => {

    const userData = {
        name: req.body.name,
        symbol: req.body.symbol,
        category: req.body.genre,
        decimal: req.body.decimals,
        ethAddress: req.body.ethAddress,
        soundCloud: req.body.soundCloud,
        description: req.body.description,
        youtube: req.body.youtube,
        supply: req.body.totalSupply,
        website: req.body.website,
        author: req.body.tokenAuthor
    }

    db.execute(`INSERT INTO testdb.listtoken (name, symbol, decimals, ethAddress, description, genre, soundCloud, totalSupply, website, youtube) VALUES ("${userData.name}","${userData.symbol}","${userData.decimal}","${userData.ethAddress}","${userData.description}","${userData.category}","${userData.soundCloud}","${userData.supply}","${userData.website}","${userData.youtube}");` ).then((data) => {
        console.log(data);
        
        if(data){
            res.send({
                "message":'Successfully!', 
                status:true, 
            });
        } else{
            res.send({
                "message":'invalid Entries', 
                status:false 
            });
        }
        
    }).catch((err) => {
        console.log(err);
    });
}

module.exports.insertToken = (req, res) => {

    const tokenData = {
        fullName: req.body.tokenName,
        name: req.body.tokenSymbol,
        addr: req.body.tokenAddress,
        decimals: req.body.tokenDecimals
    }

    db.execute(`INSERT INTO testdb.tokens (addr, name, fullName, decimals) VALUES ("${tokenData.addr}","${tokenData.name}","${tokenData.fullName}","${tokenData.decimals}");` ).then((data) => {
        console.log(data);
        
        if(data){
            res.send({
                "message":'Successfully!', 
                status:true, 
            });
        } else{
            res.send({
                "message":'invalid Entries', 
                status:false 
            });
        }
        
    }).catch((err) => {
        console.log(err);
    });
}

module.exports.getAllTokens = (req, res) => {

    db.execute(`SELECT * FROM testdb.createtoken` ).then((data) => {
        if(data[0].length > 0){
            res.send({
                "message":'HURRAH', 
                status:true, 
                data: data[0] 
            });
        } else{
            res.send({
                "message":'invalid credentials', 
                status:false 
            });
        }
        
    }).catch((err) => {
        console.log(err);
    });
}



module.exports.getListTokens = (req, res) => {

    db.execute(`SELECT * FROM testdb.listtoken` ).then((data) => {
        if(data[0].length > 0){
            res.send({
                "message":'HURRAH', 
                status:true, 
                data: data[0] 
            });
        } else{
            res.send({
                "message":'invalid credentials', 
                status:false 
            });
        }
        
    }).catch((err) => {
        console.log(err);
    });
}


module.exports.getTokenData = (req, res) => {

    db.execute(`SELECT * FROM testdb.tokens` ).then((data) => {
        if(data[0].length > 0){
            res.send({
                "message":'HURRAH', 
                status:true, 
                data: data[0] 
            });
        } else{
            res.send({
                "message":'invalid Request', 
                status:false 
            });
        }
        
    }).catch((err) => {
        console.log(err);
    });
}

