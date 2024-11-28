const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
const axios = require('axios')

const bot = new Telegraf("7312132304:AAG9Q3cy0Iw5u_Kd-fEwzBt8_1rlKDS3k4M")
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
        // if(ctx.message.location){
    //     console.log(ctx.message.location)
    //     const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${ctx.message.location.latitude}&lon=${ctx.message.location.longitude}&appid=b9b1acc97eebabd1828371526b27e5d7`
       
    //     try{
    //         const response = await axios.get(url)
    //         ctx.reply(response)
    //     }catch(error){
    //         console.error("Ошибка")
    //     }
    // }

    //     if(ctx.message.text == "Дима Колмыков" || ctx.message.text == "Дима" ||
    //         ctx.message.text == "Колмыков" || ctx.message.text == "Сулименко") ctx.reply("Лучший!")

    //     if(ctx.message.text == "У моего друга нож!" || ctx.message.text == "у моего друга нож" ||
    //        ctx.message.text == "у моего другалька нож") ctx.reply("А, ой, забыл")   

    //     if(ctx.message.text == "да" || ctx.message.text == "Да") ctx.reply("Да пошел ты нахуй")
    //         if(ctx.message.text == "Нет" || ctx.message.text == "нет") ctx.reply("Пидора ответ")
    //     else ctx.reply("Айдар живодер O_o")
})
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))