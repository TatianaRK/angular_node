var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var path = require('path');
var log  = require('../libs/log')(module);

var UserModel = require('../models/user');
var ProductModel = require('../models/product');
var OrderModel = require('../models/order');
var ReplyModel = require('../models/reply');

module.exports = function(app) {
    app.get('/', function(req, res, next) {
        res.sendFile(path.join(__dirname + '/../index.html'));
    });

    /*-------------------Users api------------------*/

    app.get('/api/users', function(req, res) {
        return UserModel.find(function (err, users) {
            if (!err) {
                return res.send({ listUsers: users });
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s', res.statusCode, err.message);
                return res.send({ error: 'Server error', message: err.message, status: 500 });
            }
        });
    });

    app.get('/api/user/:id', function(req, res) {
        return UserModel.findById(req.params.id, function (err, user) {
            if (!err) {
                return res.send({ user: user });
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s', res.statusCode, err.message);
                return res.send({ error: 'Server error', message: err.message, status: 500 });
            }
        });
    });

    app.post('/api/signup', function(req, res) {
        var user = new UserModel({
            login: req.body.loginuser,
            password: req.body.password,
            role: 'user',
            client: {
                name: req.body.client.nameuser,
                surname: req.body.client.surname,
                lastname: req.body.client.lastname,
                mail: req.body.client.mail,
                phone: req.body.client.phone
            }
        });

        user.save(function (err) {
            if (!err) {
                return res.send({ message: 'User register', status: 200 });
            } else {
                console.log(err);
                if(err.name == 'ValidationError') {
                    res.statusCode = 400;
                    res.send({ error: 'Validation error', message: err.message, status: 400 });
                } else {
                    res.statusCode = 500;
                    res.send({ error: 'Server error', message: err.message, status: 500 });
                }
                log.error('Internal error(%d): %s', res.statusCode, err.message);
            }
        });
    });

    app.post('/api/login', function(req, res, next) {
        passport.authenticate('local', function(err, user, info) {

            if (err) {
                return res.send({ message: 'fail'});
            }
            if (!user) {
                return res.send({ message: 'fail'});
            }
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
                return res.send({ message: 'success', user: user});
            });
        })(req, res, next);
    });

    app.get('/api/isauthenticate', function(req, res) {
        if(req.isAuthenticated())
            return res.send({ message: 'authenticated', user: req.user });
        else
            return res.send({ message: 'do not authenticated'  });
    });

    app.get('/api/logout', function(req, res) {
        req.logOut();
        return res.send({ message: 'ok' });
    });

    app.put('/api/user/:id', function (req, res) {
        return UserModel.findById(req.params.id, function (err, user) {
            if(!user) {
                res.statusCode = 404;
                return res.send({ status: 404 });
            }

            user.client.name = req.body.name;
            user.client.surname = req.body.surname;
            user.client.lastname = req.body.lastname;
            user.client.mail = req.body.mail;
            user.client.phone = req.body.phone;

            return user.save(function (err) {
                if (!err) {
                    return res.send({ status: 200, user: user });
                } else {
                    if(err.name == 'ValidationError') {
                        res.statusCode = 400;
                        res.send({ error: 'Validation error' });
                    } else {
                        res.statusCode = 500;
                        res.send({ error: 'Server error' });
                    }
                    log.error('Internal error(%d): %s', res.statusCode, err.message);
                }
            });
        });
    });

    app.get('/api/loginUser/:login', function(req, res) {
        return UserModel.find({login: req.params.login}, function (err, user) {
            if (!err) {
                if(user == '')
                    return res.send({ user: true });
                else
                    return res.send({ user: false });
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s', res.statusCode, err.message);
                return res.send({ error: 'Server error', message: err.message, status: 500 });
            }
        });
    });

    /*---------------------Products api----------------------*/

    app.post('/api/product', function(req, res) {
        var product = new ProductModel({
            articul: req.body.articul,
            name: req.body.name,
            category: req.body.category,
            about: req.body.about,
            material: req.body.material,
            colors: req.body.colors,
            w_h: req.body.w_h,
            quantity: req.body.quantity,
            cost: req.body.cost,
            status: req.body.status,
            image: req.body.image,
            salesText: req.body.salesText,
            salesCost: req.body.salesCost
        });

        product.save(function (err) {
            if (!err) {
                return res.send({ message: 'Product added', status: 200 });
            } else {
                console.log(err);
                if(err.name == 'ValidationError') {
                    res.statusCode = 400;
                    res.send({ error: 'Validation error', message: err.message, status: 400 });
                } else {
                    res.statusCode = 500;
                    res.send({ error: 'Server error', message: err.message, status: 500 });
                }
                log.error('Internal error(%d): %s', res.statusCode, err.message);
            }
        });
    });

    app.get('/api/products', function(req, res) {
        return ProductModel.find(function (err, products) {
            if (!err) {
                return res.send({ listProducts: products });
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s', res.statusCode, err.message);
                return res.send({ error: 'Server error', message: err.message, status: 500 });
            }
        });
    });

    app.get('/api/product/:articul', function(req, res) {
        return ProductModel.find({articul: req.params.articul}, function (err, product) {
            if(!product) {
                res.statusCode = 404;
                return res.send({ message: 'Not found' });
            }
            if (!err) {
                return res.send({ message: 'OK', product: product });
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ message: 'Server error' });
            }
        });
    });

    app.get('/api/products/:category', function(req, res) {
        return ProductModel.find({category: req.params.category}, function (err, products) {
            if (!err) {
                return res.send({ listProducts: products });
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s', res.statusCode, err.message);
                return res.send({ error: 'Server error', message: err.message, status: 500 });
            }
        });
    });

    app.put('/api/product/:id', function (req, res) {
        return ProductModel.findById(req.params.id, function (err, product) {
            if(!product) {
                res.statusCode = 404;
                return res.send({ status: 404 });
            }

            product.name = req.body.name;
            product.about = req.body.about;
            product.material = req.body.material;
            product.colors = req.body.colors;
            product.w_h = req.body.w_h;
            product.quantity = req.body.quantity;
            product.cost = req.body.cost;
            product.status = req.body.status;
            product.image = req.body.image;
            product.salesText = req.body.salesText;
            product.salesCost = req.body.salesCost;

            return product.save(function (err) {
                if (!err) {
                    return res.send({ status: 200, product: product });
                } else {
                    if(err.name == 'ValidationError') {
                        res.statusCode = 400;
                        res.send({ error: 'Validation error' });
                    } else {
                        res.statusCode = 500;
                        res.send({ error: 'Server error' });
                    }
                    log.error('Internal error(%d): %s', res.statusCode, err.message);
                }
            });
        });
    });

    app.delete('/api/product/:id', function (req, res){
        return ProductModel.findById(req.params.id, function (err, product) {
            if(!order) {
                res.statusCode = 404;
                return res.send({ status: 404 });
            }
            return product.remove(function (err) {
                if (!err) {
                    return res.send({ status: 200 });
                } else {
                    res.statusCode = 500;
                    log.error('Internal error(%d): %s', res.statusCode, err.message);
                    return res.send({ error: 'Server error' });
                }
            });
        });
    });

    /*-----------------------Orders api----------------------*/

    app.get('/api/orders', function(req, res) {
        return OrderModel.find(function (err, orders) {
            if (!err) {
                return res.send({ listOrders: orders });
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s', res.statusCode, err.message);
                return res.send({ error: 'Server error', message: err.message, status: 500 });
            }
        });
    });

    app.post('/api/order', function(req, res) {
        var order = new OrderModel({
            loginUser: req.body.loginUser,
            articul: req.body.articul,
            date: req.body.date,
            number: req.body.number,
            summ: req.body.summ,
            status: req.body.status,
            delivery: req.body.delivery
        });

        order.save(function (err) {
            if (!err) {
                return res.send({ message: 'Order added', status: 200 });
            } else {
                console.log(err);
                if(err.name == 'ValidationError') {
                    res.statusCode = 400;
                    res.send({ error: 'Validation error', message: err.message, status: 400 });
                } else {
                    res.statusCode = 500;
                    res.send({ error: 'Server error', message: err.message, status: 500 });
                }
                log.error('Internal error(%d): %s', res.statusCode, err.message);
            }
        });
    });

    app.get('/api/orders/:loginUser', function(req, res) {
        return OrderModel.find({loginUser: req.params.loginUser}, function (err, orders) {
            if (!err) {
                return res.send({ listOrders: orders });
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s', res.statusCode, err.message);
                return res.send({ error: 'Server error', message: err.message, status: 500 });
            }
        });
    });

    app.put('/api/order/:id', function (req, res){
        return OrderModel.findById(req.params.id, function (err, order) {
            if(!order) {
                res.statusCode = 404;
                return res.send({ status: 404 });
            }

            order.number = req.body.number;
            order.summ = req.body.summ;
            order.status = req.body.status;
            order.delivery = req.body.delivery;

            return order.save(function (err) {
                if (!err) {
                    return res.send({ status: 200, order: order });
                } else {
                    if(err.name == 'ValidationError') {
                        res.statusCode = 400;
                        res.send({ error: 'Validation error' });
                    } else {
                        res.statusCode = 500;
                        res.send({ error: 'Server error' });
                    }
                    log.error('Internal error(%d): %s', res.statusCode, err.message);
                }
            });
        });
    });

    app.delete('/api/order/:id', function (req, res){
        return OrderModel.findById(req.params.id, function (err, order) {
            if(!order) {
                res.statusCode = 404;
                return res.send({ status: 404 });
            }
            return order.remove(function (err) {
                if (!err) {
                    return res.send({ status: 200 });
                } else {
                    res.statusCode = 500;
                    log.error('Internal error(%d): %s', res.statusCode, err.message);
                    return res.send({ error: 'Server error' });
                }
            });
        });
    });


    /*---------------Replies api--------------*/

    app.get('/api/replies', function(req, res) {
        return ReplyModel.find().sort('-update_at').exec(function(err, replies) {
            if (!err) {
                return res.send({ listReplies: replies });
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s', res.statusCode, err.message);
                return res.send({ error: 'Server error', message: err.message, status: 500 });
            }
        });
    });

    app.post('/api/reply', function(req, res) {
        var reply = new ReplyModel({
            loginUser: req.body.loginUser,
            message: req.body.message,
            update_at: req.body.update_at
        });

        reply.save(function (err) {
            if (!err) {
                log.info("Reply added");
                return res.send({ message: 'Reply added', status: 200 });
            } else {
                console.log(err);
                if(err.name == 'ValidationError') {
                    res.statusCode = 400;
                    res.send({ error: 'Validation error', message: err.message, status: 400 });
                } else {
                    res.statusCode = 500;
                    res.send({ error: 'Server error', message: err.message, status: 500 });
                }
                log.error('Internal error(%d): %s', res.statusCode, err.message);
            }
        });
    });

    app.delete('/api/reply/:id', function (req, res){
        return ReplyModel.findById(req.params.id, function (err, reply) {
            if(!reply) {
                res.statusCode = 404;
                return res.send({ status: 404 });
            }
            return reply.remove(function (err) {
                if (!err) {
                    return res.send({ status: 200, message: "succeess" });
                } else {
                    res.statusCode = 500;
                    log.error('Internal error(%d): %s', res.statusCode, err.message);
                    return res.send({ error: 'Server error' });
                }
            });
        });
    });

};
