const{Telegraf} =require('telegraf');
const axios = require('axios');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);
const binarysearchstring =`
const binarysearch =function search(arr,x){
    let lo = 0,hi =arr.length-1;
    while(lo<=hi)
    {
        let mid=lo+Math.floor((hi-lo)/2);
        if(arr[mid] == x) return mid;
            elseif(arr[mid] < x)
            {
                lo = mid+1;
            }
        else
            {
                hi = mid-1;
            }
    }
    
    return undefined;
}
`;
try{
bot.start((ctx) => ctx.reply('Welcome to taliyan\'s anjali bot'));// /start
bot.command('binarysearch',(ctx)=>ctx.reply(binarysearchstring));// /binarysearch
bot.on('sticker', (ctx) => ctx.reply('👍'));// /sticker
bot.command('linuxtopcommands',(ctx)=>ctx.reply("ls cd pwd rm"));
bot.on('text',(ctx) => {
    console.log(ctx.update.message);
    if(ctx.update.message.text =='i am anjali'){
        ctx.reply('and i am anju');
    }
    else{
    ctx.reply('i don\'t understand humans')
    }
});
bot.command('binarytreejs',async (ctx) =>{
    const response =  await axios.get('https://images.app.goo.gl/GMEWiVAsqhrM8TkM9')
    ctx.reply(response.data);
})
 bot.launch();
}
catch{
    console.log("unexpected");
}
