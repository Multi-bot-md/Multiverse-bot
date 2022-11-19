import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
	let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
┌───⊷ *🍀𝙉𝙞𝙫𝙚𝙡🍀*
▢ *𝑁𝑜𝑚𝑏𝑟𝑒* : *${name}*
▢ *𝑁𝑖𝑣𝑒𝑙* : *${user.level}*
▢ *𝑋𝑃* : *${user.exp - min}/${xp}*
└──────────────

Te falta *${max - user.exp}* de *XP* para subir de nivel
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `🎊 Bien hecho ${conn.getName(m.sender)}    Nivel:`
        let str = `
┌─⊷ *☘️𝙇𝙀𝙑𝙀𝙇 𝙐𝙋☘️*
▢ *𝑁𝑖𝑣𝑒𝑙 𝑎𝑛𝑡𝑒𝑟𝑖𝑜𝑟* : *${before}*
▢ *𝑁𝑖𝑣𝑒𝑙 𝑎𝑐𝑡𝑢𝑎𝑙* : *${user.level}*
└──────────────

*_Cuanto más interactúes con los bots, mayor será tu nivel_*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['nivel', 'lvl', 'levelup', 'level'] 

export default handler
