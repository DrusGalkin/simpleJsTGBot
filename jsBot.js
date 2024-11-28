const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
const axios = require('axios')

const bot = new Telegraf("TOKEN")
bot.start((ctx) => ctx.reply('Хай'))
bot.on('message', async (ctx) => {
    console.log(ctx.message)
    if(ctx.message.text) {
        await ctx.reply(
            "ID бота - " + `${ctx.botInfo.id}` + '\n' +
            "Пльзователь " + `${ctx.message.from.first_name}` + "\n" +
            "Написал --> " + "\"" +`${ctx.message.text}` + "\""
        )
    }
})
bot.launch()


process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))