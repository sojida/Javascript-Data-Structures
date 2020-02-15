const fs = require('fs');
const Queue = require('../Queue');

class Person{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
}

const loadDancers = function(file){
    return fs.readFileSync(`${__dirname}/${file}`)
    .toString()
    .trim()
    .split('\n')
    .map(dancer => {
        const details = dancer.split(' ');
        return new Person(`${details[1]} ${details[2]}`, details[0])
    })
}

const queueDancers = function(dancers){
    const maleDancers = new Queue();
    const femaleDancers = new Queue();

    dancers.forEach(dancer => {
        if (dancer.sex === 'M'){
            maleDancers.enqueue(dancer);
        } else {
            femaleDancers.enqueue(dancer);
        }
    })

    return { maleDancers, femaleDancers }
}

const pairDancers = function(maleDancers, femaleDancers) {
    console.log('Dancers pair are:');
    while(!maleDancers.isEmpty() && !femaleDancers.isEmpty()){
        console.log(`${maleDancers.dequeue().name} is paired with ${femaleDancers.dequeue().name}`);
    }

    return { maleDancers, femaleDancers };
}


const DanceProgam = function(file){
    const { maleDancers, femaleDancers } = queueDancers(loadDancers(file));

    pairDancers(maleDancers, femaleDancers)

    if (maleDancers.count){
        /* istanbul ignore next */
        console.log(`There are ${maleDancers.count} male dancers waiting to dance`)
    }

    if (femaleDancers.count){
        /* istanbul ignore next */
        console.log(`There are ${femaleDancers.count} female dancers waiting to dance`)
    }

    return {maleDancers, femaleDancers}

}

module.exports = DanceProgam;
