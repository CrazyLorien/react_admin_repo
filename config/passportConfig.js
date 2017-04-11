var LocalStrategy = require('passport-local').Strategy;
var VKontakteStrategy = require('passport-vkontakte').Strategy;
var User = require('../models/user')

module.exports = function (app, passport, flash) {
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use(
        new LocalStrategy(
            function (username, password, done) {
                User.findOne({ name: username }, function (err, user) {
                    if (err) { return done(err, false); }
                    if (!user) {
                        return done(null, false, { message: 'Incorrect username.' });
                    }
                    if (user.password != password) {
                        return done(null, false, { message: 'Incorrect password.' });
                    }
                    return done(null, user);
                });
            })
    );

    app.get('/login', function (req, res, next) {
        res.json({ message: req.flash('error') });
    });


    app.post('/login', function (req, res, next) {
        passport.authenticate('local', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.send(401, { success: false, message: info.message });
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                return res.json({ detail: user });
            });
        })(req, res, next);
    });

    app.get('/logout', function (req, res) {
        res.clearCookie('connect.sid');
        res.clearCookie('user');
        res.redirect('/');
    });

};