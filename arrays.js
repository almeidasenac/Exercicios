  
const faker = require('faker');

faker.locale = 'pt_BR';

const clients = [];

for (let index = 0; index < 1000; index++) {
    const name = faker.name.findName();
    const birth = faker.date.past(109, 2019);
    const genre = faker.random.boolean() == true ? 'M' : 'F';
    const lastPurchase = faker.date.past(20,2019);
    const countPurchase = faker.random.number(50);


    client = {
        name,
        birth,
        genre,
        lastPurchase,
        countPurchase,
    }

    clients.push(client);
}
