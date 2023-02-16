'use strict'

const t = require('tap')
const { test } = t
const Fastify = require('fastify')
const fastifyEthers = require('./plugin')

test('unsupported client', t => {
  register(t, {}, function () {
    t.end()
  })
})

function register (t, options, callback) {
  const fastify = Fastify()
  t.teardown(() => fastify.close())

  fastify.register(fastifyEthers, options)
    .ready(err => callback(err, fastify))
}
