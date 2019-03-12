require('../config');

import bodyParser from 'body-parser';
import express from 'express';
import passport from 'passport';
import expressSession from 'express-session';
import { Strategy as LocalStrategy } from 'passport-local';
const MongoDBStore = require('connect-mongodb-session')(expressSession);
import { UserModel } from "./api/users/model";
import errorMiddlware from './middlewares/error';
import api from './api';

const app = express();
const port = process.env.PORT || 3000;

app.use(expressSession({
    secret: process.env.SECRET || '',
    resave: false,
    saveUninitialized: false,
    unset: 'destroy',
    cookie: {
        maxAge: 10000000
    },
    store: new MongoDBStore({
        uri: process.env.MONGODB_URI,
        collection: 'sessions'
    })
}));

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    UserModel.checkUser.bind(UserModel),
));

passport.serializeUser(UserModel.serializeUser.bind(UserModel));
passport.deserializeUser(UserModel.deserializeUser.bind(UserModel));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', api);
app.use(errorMiddlware);

app.listen(
    port,
    () => console.log(`Express web app available at localhost:${port} with env: ${process.env.NODE_ENV}`)
);
