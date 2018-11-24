const interfaces = [
    {id: '0', name: 'Leap Motion', type: 'finger tracking', cost: '80.00'},
    {id: '1', name: 'Emotiv', type: 'EEG brain waves', cost: '800.00'},
    {id: '2', name: 'Tap', type: 'wearable chord keyboard', cost: '180.00'},
    {id: '3', name: 'Myo', type: 'EMG muscle tracking', cost: '200.00 DISCONTINUED'}]

const getAll = (limit) => limit ? interfaces.slice(0, limit) : interfaces

const getOne = (id) => {
    const interface = interfaces.findIndex(ele => ele.id === id)

    if(interface === -1)
        return null

    return interfaces[interface]
}

const create = (newInterface) => {
    if(!newInterface.id)
        return null

    const foundId = interfaces.findIndex(ele => ele.id === newInterface.id)

    if(foundId !== -1)
        return foundId
    
    interfaces.push(
        {id: newInterface.id, 
        name: newInterface.name || 'Undefined',
        type: newInterface.type || 'Not specified.',
        cost: newInterface.cost || 'Unknown'})
    
    return interfaces[interfaces.length-1]
}

const update = (updateInterface, body) => {
    if(!updateInterface)
        return null
    
    const interface = interfaces.findIndex(ele => ele.id === updateInterface)

    if(interface === -1)
        return -1

    interfaces[interface] = {
        id: updateInterface,
        name: body.name || interfaces[interface].name,
        type: body.type || interfaces[interface].type,
        cost: body.cost || interfaces[interface].cost}

    return interfaces[interface]
}

const remove = (removeInterface) => {
    if(!removeInterface)
        return null
    
    const interface = interfaces.findIndex(ele => ele.id === removeInterface)
    if(interface === -1)
        return -1

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