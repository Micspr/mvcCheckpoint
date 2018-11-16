const interfaces = [
    {id: '0', name: 'Leap Motion', type: 'finger tracking', cost: '80.00'},
    {id: '1', name: 'Emotiv', type: 'EEG brain waves', cost: '800.00'},
    {id: '2', name: 'Tap', type: 'wearable chord keyboard', cost: '180.00'},
    {id: '3', name: 'Myo', type: 'EMG muscle tracking', cost: '200.00 DISCONTINUED'}]

const getAll = (limit) => limit ? interfaces.slice(0, limit) : interfaces

const getOne = () => {
    const interface = interfaces.findIndex(ele => ele.id === id)

    if(interface === -1)
        return null

    return interfaces[interface]
}

const create = (newInterface) => {
    if(!newInterface.id || !newInterface.name)
        return null

    const foundId = interfaces.findIndex(ele => ele.id === newInterface.id)

    if(foundId !== -1)
        return foundId
    
    interfaces.push(
        {id: newInterface.id, 
        name: newInterface.name,
        type: newInterface.type || 'Not specified.',
        cost: newInterface.cost || 'Unknown'})
    
    return interfaces[interfaces.length-1]
}

const update = (updateInterface) => {
    if(!updateInterface.id && !updateInterface.name)
        return null
    
    const interface = interfaces.findIndex(ele => ele.id === updateInterface.id) || interfaces.findIndex(ele => ele.name === updateInterface.name)

    if(interface === -1)
        return -1

    interfaces[interface] = {
        id: updateInterface.id || interfaces[interface].id,
        name: updateInterface.name || interfaces[interface].name,
        type: updateInterface.type || interfaces[interface].type,
        cost: updateInterface.cost || interfaces[interface].cost}

    return interfaces[interface]
}

const remove = (updateInterface) => {
    if(!updateInterface.id && !updateInterface.name)
        return null
    
    const interface = interfaces.findIndex(ele => ele.id === updateInterface.id) || interfaces.findIndex(ele => ele.name === updateInterface.name)
    if(interface === -1)
        return res.status(404).json('Could not find a matching Interface.')

    const result = interfaces.splice(interface, 1)

    return result
}

module.exports = {
    interfaces,
    getAll,
    getOne,
    create,
    update,
    remove}