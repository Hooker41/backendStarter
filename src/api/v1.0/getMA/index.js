const Router = require('koa-router');

const getMA = new Router();
const getMACtrl = require('./getMA.ctrl');

getMA.get('/:exchangeName/:symbol', getMACtrl.getma);

module.exports = getMA;