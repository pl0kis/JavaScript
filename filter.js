let objects = [
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Петр', surname: 'Петров' },
    { name: 'Василий', surname: 'Васильев' },
]


function filter(objects, key, value) {
    resultarray = []
    for (obj of objects) {
        if (obj[key] == value) {
        
            resultarray.push(obj)
        }
    }
    return resultarray
}

console.log(filter(objects, 'name', 'Петр'))

