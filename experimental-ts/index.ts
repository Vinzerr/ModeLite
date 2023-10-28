import { Client, LogLevel, PartialTypes } from 'modulite'

const client = new Client({
    logger: {
        level: LogLevel.Debug
    },
    partials: [PartialTypes.Channel]
})

client.once('ready', () => {
    console.log('ready!')
})

client.on('message', async (message: any) => {
    await message.reply('text', message.text)
    await message.discussion.members?.fetch(String(message.from.id))

    console.log(message.member)

    console.log(await message.member.ban())
    console.log(await message.member.unban())

})

client.initialize('6346967812:AAGshIIKYXx0QNQ1xQve_U6gGxPSFecNMzY')

