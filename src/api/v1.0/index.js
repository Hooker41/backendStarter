const Router = require('koa-router');

const getMA = require('./getMA');

const api = new Router();

api.use('/getma', getMA.routes());

module.exports = api;