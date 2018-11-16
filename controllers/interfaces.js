const model = require('../models/interfaces')

const getAll = (req, res, next) => {
    const limit = req.query.limit
    const data = model.getAll(limit)
    res.status(200).json({data})
}

const getOne = (req, res, next) => {
    const data = model.getOne(req.params.id)

    if(data === null)
        return res.status(404).json({error: {message: 'Interface not found.'}})
    res.status(200).json({data})
}

const create = (req, res, next) => {
    const data = model.create(req.body, req.params)

    if(data === null)
        return res.status(400).json('Please include a name and ID with your request.')
    
    if(typeof data === 'number')
        return res.status(400).json(`Item with that ID already exists. Next available ID is ${interfaces.length}.`)

    res.status(201).json({data})
}

const update = (req, res, next) => {
    const data = model.update(req.body)

    if(data === null)
        return res.status(400).json('Please include a name or ID to update.')

    if(data === -1)
        return res.status(404).json('Could not find a matching Interface.')
    
    res.status(200).json({data})
}

const remove = (req, res, next) => {
    const data = model.remove(req.body)

    res.status(200).json({data})
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove}