const xpperlimit = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `
ββγ *πππππΌ πΏπ ππΌπππ* γ
β£ *Compra nominal* : + ${count}π 
β£ *Gastado* : -${xpperlimit * count} XP
βββββββββββββββ`, m)
  } else conn.reply(m.chat, `β Lo siento, no tienes suficientes *XP* para comprar *${count}* Diamantesπ`, m)
}
handler.help = ['Buy', 'Buyall']
handler.tags = ['xp']
handler.command = ['buy', 'buyall'] 

handler.disabled = false

export default handler
