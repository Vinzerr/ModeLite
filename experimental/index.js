const { Client } = require('telegram.js')

const client = new Client({
    tes: 'test'
})

client.logger.debug('test')
