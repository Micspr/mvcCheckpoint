const express = require('express')
const router = express.Router()
const interfacesController = require('../controllers/interfaces')

router.get('/', interfacesController.getAll)

router.get('/:interfacesId', interfacesController.getOne)

router.post('/', interfacesController.create)

router.put('/:interfacesId', interfacesController.update)

router.put('/:name', interfacesController.update)

router.delete('/:interfacesId', interfacesController.remove)

router.delete('/:name', interfacesController.remove)

module.exports = router;