const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix }) => {
let pp = imagen4
try {
} catch (e) {
} finally {
let name = await conn.getName(m.sender)
let str = `
*_γπ π·πΎπ»π° ${name} πε½‘_*

${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`)}

γ€γ€ *π³οΈ<πΎπΌππΌ ππππππ/>π*

- π°πππΈ πΏππ΄π³π΄ πΆππ°ππ³π°π πΌπ΄π½ππ°πΉπ΄π πππ΄ πππΈπ΄ππ°π ππ΄π πΌπ°π ππ°ππ³π΄ 

*<πΌπππππΌπ πΌ ππΌ πππππΌ/>*

Β° ΰΆ¬βπ³οΈ _${usedPrefix}agregarmsg *<texto/comando/palabra clave>* (responde a un texto)_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}agregarvn *<texto/comando/palabra clave>* (responde a una nota de voz)_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}agregarvideo *<texto/comando/palabra clave>* (responde a un video)_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}agregaraudio *<texto/comando/palabra clave>* (responde a un audio)_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}agregarimg *<texto/comando/palabra clave>* (responde a una imagen)_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}agregarsticker *<texto/comando/palabra clave>* (responde a un sticker)_

*<πππππΌ πΏπ πΎπππΌππΏππ/>*

Β° ΰΆ¬βπ³οΈ _${usedPrefix}listamsg_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}listavn_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}listavideo_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}listaaudio_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}listaimg_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}listasticker_

*<πππ ππππππ π πΌππΎπππππ/>*

Β° ΰΆ¬βπ³οΈ _${usedPrefix}vermsg *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}vervn *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}vervideo *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}veraudio *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}verimg *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}versticker *<texto/comando/palabra clave>*_

*<πππππππΌπ/>*

Β° ΰΆ¬βπ³οΈ _${usedPrefix}eliminarmsg *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}eliminarvn *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}eliminarvideo *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}eliminaraudio *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}eliminarimg *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}eliminarsticker *<texto/comando/palabra clave>*_`.trim()

conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', 'πΆπΈππ·ππ±', null, null, [
['πππΈπππ', '/menu']
], m)
}}
handler.help = ['cajafuerte']
handler.tags = ['owner']
handler.command = /^(cajafuerte)$/i
handler.rowner = true
handler.fail = null
export default handler
