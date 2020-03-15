const admin = require('firebase-admin')
const faker = require('faker')

const constants = require('./constants')

admin.initializeApp()

const db = admin.firestore()

const fakeData = () => {
    return db.collection(constants.CUSTOMER).add({
        username: faker.internet.userName(),
        avatar: faker.internet.avatar(),
        bio: faker.hacker.phrase(),
        color: faker.commerce.color()
    })
}

Array(20).fill(0).forEach(fakeData)

