const Chance = require('chance');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


let chance = new Chance();

const DOMAINS = [
    'reh.com',
    'er.net',
    'dew.org',
    'ah.com',
    'unuwiko.net',
    'ret.org',
    'wighotid.com',
    'isut.net',
    'me.org',
    'riperov.com',
    'ujokaf.net',
    'go.org'
]

const PETS = [
    'Alpaca',
    'Bearded Dragon',
    'Bird',
    'Cat',
    'Chameleon',
    'Chicken',
    'Chinchilla',
    'Cow',
    'Dog',
    'Donkey',
    'Duck',
    'Ferret',
    'Fish',
    'Gecko',
    'Goose',
    'Gerbil',
    'Goat',
    'Guinea Pig',
    'Hamster',
    'Hedgehog',
    'Horse',
    'Iguana',
    'Llama',
    'Lizard',
    'Other',
    'Mice',
    'Mule',
    'Pig',
    'Pigeon',
    'Pony',
    'Rabbit',
    'Rat',
    'Sheep',
    'Skink',
    'Snake',
    'Insect',
    'Tarantula',
    'Turkey',
    'Turtle'
]


function generateRandomDocument() {
    let firstName = chance.first();
    let lastName = chance.last();

    let domain = chance.domain();
    let email = (firstName[0] + lastName).toLowerCase() + '@' + chance.pickone(DOMAINS);

    let favoriteAnimal = chance.pickone(PETS);
    let profession = chance.profession();

    return {
        firstName,
        lastName,
        email,
        favoriteAnimal,
        profession
    };
}

function generateDocuments(count = 100) {
    let documents = [];

    for (let i = 0; i < count; i++) {
        documents.push(generateRandomDocument());
    }

    return documents;
}


function main() {
    let args = process.argv.slice(2);

    let numberOfDocuments = args[0] || 100;

    console.log(`Generating ${numberOfDocuments} documents...`);

    const csvWriter = createCsvWriter({
        path: 'users.csv',
        header: [
            {id: 'firstName', title: 'firstName'},
            {id: 'lastName', title: 'lastName'},
            {id: 'email', title: 'email'},
            {id: 'favoriteAnimal', title: 'favoriteAnimal'},
            {id: 'profession', title: 'profession'}
        ]
    });

    const records = generateDocuments(numberOfDocuments);

    csvWriter.writeRecords(records)
        .then(() => {
            console.log('Output written to file.');
        });
}

main();
