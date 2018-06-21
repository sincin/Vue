'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  EVN_CONFIG:'"test"',
  API_ROOT:'"http://47.52.9.15:8088/api"'
})
