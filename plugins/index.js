const Auth = require('./auth');
const TemplateEngine = require('./template-engine');

const plugins = [];

plugins.push({register: Auth});
plugins.push({register: TemplateEngine});
plugins.push(require('inert'));

module.exports = plugins;
