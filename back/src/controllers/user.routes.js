const express = require('express')
const router = express.Router()
const userRepository = require('../models/user-repository')
const { validateBody } = require('./validation/route.validator')
const { body } = require('express-validator')
const guard = require('express-jwt-permissions')({requestProperty: 'auth',})

router.get('/', async (req, res) => {
    res.send(await userRepository.getUsers())
});

router.post('/', async (req, res) => {
    await userRepository.createUser(req.body)
    res.status(201).end()
})

exports.initializeRoutes = () => router