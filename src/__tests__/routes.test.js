/**
 * Importing modules
 */
const request = require('supertest')
const server = require('../app')
const databaseConnect = require('../config/database')

/**
 * Pre-run and after-run config
 */
beforeAll(async () => {
    console.log('Starting tests...')
    await databaseConnect()
})
afterAll(() => {
    server.close()
    console.log('Tests finished.')
})

/**
 * Creating tests
 */
describe('tests init', () => {
    /**
     * Tests description
     */
    test('testing the registration route...', async () => {
        // acessing the route
        const response = await request(server).get('/registration')

        // checking the status
        expect(response.status).toEqual(200)
    })
})