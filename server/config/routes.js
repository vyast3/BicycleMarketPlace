var userController = require('../controllers/userController');
var bicycleController = require('../controllers/bicycleController');

var path = require('path');

module.exports = function(app) {

    app.post('/user', userController.create);
    // app.get('/email', userController.findEmail);
    app.post('/userlogin', userController.userlogin)

    app.post('/bicycle', bicycleController.create);
    app.get('/bicycle/:id', bicycleController.showmine);
    app.get('/bicycles', bicycleController.showall);
    app.put('/bicycle/:id', bicycleController.update);
    app.delete('/bicycle/:id', bicycleController.delete)
    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./marketAngular/dist/index.html"))
    });
}