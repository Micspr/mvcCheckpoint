const model = require('../models/interfaces')

const getAll = (req, res, next) => {
    const limit = req.query.limit
    const data = model.getAll(limit)
    res.status(200).json({data})
}

const getOne = (req, res, next) => {
    const data = model.getOne(req.body.interfacesId)

    if(data.errors)
        return next({status: 404, message: 'Interface not found.', errors: data.errors})

    res.status(200).json({data})
}

const create = (req, res, next) => {
    const data = model.create(req.body)

    if(data.errors)
        return next({status: 400, message: 'Interface not created.', errors: data.errors})

    res.status(201).json({data})
}

const update = (req, res, next) => {
    const data = model.update(req.body)

    if(data.errors)
        return next({status: 404, message: 'Interface not found; Update not processed.', errors: data.errors})
    
    res.status(200).json({data})
}

const remove = (req, res, next) => {
    const data = model.remove(req.body)

    if(data.errors)
        return next({status: 404, message: 'Interface not found; could not delete interface.', errors: data.errors})

    res.status(200).json({data})
}

module.exports = 
    getAll,
    getOne,
    create,
    update,
    remove;