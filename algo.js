function removeValueFromArray(array, valuesToRemove) {
    for (let i = 0; i < valuesToRemove.length; i++) {
        toRemove = valuesToRemove[i]
        let index = array.indexOf(toRemove);
        if (index !== -1) {
            array.splice(index, 1);
    }
    }
    return array
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let myRestrictions = {};
myRestrictions['Jordan'] = ['Jordan', 'Annie', 'Bev', 'Joseph', 'Mike']
myRestrictions['Annie'] = ['Annie', 'Bev', 'Joseph']
myRestrictions['Bev'] = ['Bev', 'Annie', 'Jordan']
myRestrictions['Joseph'] = ['Joseph', 'Mike', 'Jordan']
myRestrictions['Mike'] = ['Mike', 'Buckley', 'Jordan', 'Bev']
myRestrictions['Buckley'] = ['Buckley', 'Annie', 'Joseph', 'Jordan', 'Bev']

removeValueFromArray(myRestrictions['Joseph'], ['Mike', 'Bev', 'Joseph', 'Buckley'])

let runs = 0
function generatePollyanna(restrictions, runs){
    console.log(runs)
    if (runs > 9){
        console.log(`ERROR: No solution found in ${runs} attempts. Please adjust restrictions.`)
        return NaN
    }
    let keys = Object.keys(restrictions)
    let lengths = keys.map(key => [key, restrictions[key].length]);
    lengths.sort((a, b) => b[1] - a[1]);

    pairings = {}

    for (let i = 0; i < lengths.length; i++) {
        let person = lengths[i][0];
        let available = keys.filter(x => !restrictions[person].includes(x))
        available = available.filter(x => !Object.values(pairings).includes(x))
        // console.log(`Available for ${person}: ${available}`)
        if (available.length == 0){
            return generatePollyanna(restrictions, runs + 1)
        }
        let ind = randomInt(0, available.length - 1)
        let match = available[ind]
        pairings[person] = match
        if (!Object.values(pairings).includes(match)){
            restrictions[match].push(person)
        }
        
    }

    return pairings
}

results = generatePollyanna(myRestrictions, 0)
console.log(pairings)

window.myList = Object.values(results);
