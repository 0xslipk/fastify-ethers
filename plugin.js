'use strict'

const fp = require('fastify-plugin')

function fastifyEthers (fastify, options, next) {
  next()
}

module.exports = fp(fastifyEthers, {
  fastify: '>=4.0.0',
  name: 'fastify-ethers'
})
