const express = require('express')
const router = express.Router()
const interfacesController = require('../controllers/interfaces')

router.get('/', interfacesController.getAll)

router.get('/:id', interfacesController.getOne)

router.post('/', interfacesController.create)

router.put('/:id', interfacesController.update)

router.put('/:name', interfacesController.update)

router.delete('/:id', interfacesController.remove)

router.delete('/:name', interfacesController.remove)

module.exports = router;