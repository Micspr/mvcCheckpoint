const interfaces = [
    {id: '0', name: 'Leap Motion', type: 'finger tracking', cost: '80.00'},
    {id: '1', name: 'Emotiv', type: 'EEG brain waves', cost: '800.00'},
    {id: '2', name: 'Tap', type: 'wearable chord keyboard', cost: '180.00'},
    {id: '3', name: 'Myo', type: 'EMG muscle tracking', cost: '200.00 DISCONTINUED'}]

const getAll = (limit) => limit ? interfaces.slice(0, limit) : interfaces

const getOne = (id) => {
    const interface = interfaces.findIndex(ele => ele.id === id)

    if(interface === -1)
        return res.status(404).json('Interface not found.')

    res.status(200).json(interfaces[interface])
}

const create = (newInterface) => {
    if(!newInterface.interfacesId || !newInterface.name)
        return res.status(400).json('Please include a name and ID with your request.')

    const foundId = interfaces.findIndex(ele => ele.id === newInterface.interfacesId)

    if(foundId !== -1)
        return res.status(400).json(`Item with that ID already exists. Next available ID is ${interfaces.length}.`)
    
    interfaces.push(
        {id: newInterface.interfacesId, 
        name: newInterface.name,
        type: newInterface.type || 'Not specified.',
        cost: newInterface.cost || 'Unknown'})
    
    res.status(201).json(interfaces[interfaces.length-1])
}

const update = (updateInterface) => {
    if(!updateInterface.interfacesId && !updateInterface.name)
        return res.status(400).json('Please include a name or ID to update.')
    
    const interface = interfaces.findIndex(ele => ele.id === updateInterface.interfacesId) || interfaces.findIndex(ele => ele.name === updateInterface.name)
    if(interface === -1)
        return res.status(404).json('Could not find a matching Interface.')
    interfaces[interface] = {
        id: updateInterface.interfacesId || interfaces[interface].id,
        name: updateInterface.name || interfaces[interface].name,
        type: updateInterface.type || interfaces[interface].type,
        cost: updateInterface.cost || interfaces[interface].cost}
    res.status(200).json(interfaces[interface])
}

const remove = (updateInterface) => {
    if(!updateInterface.interfacesId && !updateInterface.name)
        return res.status(400).json('Please include a name or ID to update.')
    
    const interface = interfaces.findIndex(ele => ele.id === updateInterface.interfacesId) || interfaces.findIndex(ele => ele.name === updateInterface.name)
    if(interface === -1)
        return res.status(404).json('Could not find a matching Interface.')

    const result = interfaces.splice(interface, 1)

    res.status(200).json(result)
}

module.exports = 
    getAll,
    getOne,
    create,
    update,
    remove;