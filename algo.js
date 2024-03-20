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

// User to input all participants first
// Then some sort of prompt to add restrictions to participants

let myRestrictions = {};
myRestrictions['Jordan'] = ['Jordan', 'Annie', 'Bev', 'Joseph', 'Mike']
myRestrictions['Annie'] = ['Annie', 'Bev', 'Joseph']
myRestrictions['Bev'] = ['Bev', 'Annie', 'Jordan']
myRestrictions['Joseph'] = ['Joseph', 'Mike', 'Jordan']
myRestrictions['Mike'] = ['Mike', 'Buckley', 'Jordan', 'Bev']
myRestrictions['Buckley'] = ['Buckley', 'Annie', 'Joseph', 'Bev', 'Mike']

removeValueFromArray(myRestrictions['Joseph'], ['Mike', 'Bev', 'Joseph', 'Buckley'])


function generatePollyanna(restrictions, runs, allowPairs){
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
            return generatePollyanna(restrictions, runs + 1, allowPairs)
        }
        let ind = randomInt(0, available.length - 1)
        let match = available[ind]
        pairings[person] = match
        if (!Object.keys(pairings).includes(match) && !allowPairs){
            restrictions[match].push(person)
        }   
    }
    return pairings
}

let myAllowPairs = true
let myRuns = 0
results = generatePollyanna(myRestrictions, myRuns, myAllowPairs)
console.log(pairings)

window.myList = Object.values(results);
