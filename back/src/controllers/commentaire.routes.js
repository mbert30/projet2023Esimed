const express = require('express');
const router = express.Router();
const commentaireRepository = require('../models/commentaire-repository')
const { DateTime } = require('luxon');
const { body } = require('express-validator');
const { validateBody } = require('./validation/route.validator');


router.post('/recupererCommentaire', async (req, res) => { 
    let retour = await commentaireRepository.recupererCommentaire(req.body)
    console.log(retour);

    res.send(retour)
})

router.post('/creationCommentaire', async (req, res) => { 
    const myDateTime = DateTime.fromMillis(Date.parse(Date.now));
    const formattedDateTime = myDateTime.toFormat('dd/MM/yyyy HH:mm:ss.SSS');
    res.send(await commentaireRepository.creationCommentaire(req.body, formattedDateTime))
})
exports.initializeRoutes = () => router;
