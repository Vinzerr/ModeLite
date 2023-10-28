const { Client } = require('modulite')

const client = new Client({
    tes: 'test'
})

client.logger.debug('test')
