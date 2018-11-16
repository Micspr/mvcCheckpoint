const model = require('../models/interfaces')

const getAll = (req, res, next) => {
    const limit = req.query.limit
    const data = model.getAll(limit)
    res.status(200).json({data})
}

const getOne = (req, res, next) => {
    const data = model.getOne(req.body.interfacesId)

    res.status(200).json({data})
}

const create = (req, res, next) => {
    const data = model.create(req.body)

    res.status(201).json({data})
}

const update = (req, res, next) => {
    const data = model.update(req.body)
    
    res.status(200).json({data})
}

const remove = (req, res, next) => {
    const data = model.remove(req.body)

    res.status(200).json({data})
}

module.exports = 
    getAll,
    getOne,
    create,
    update,
    remove;