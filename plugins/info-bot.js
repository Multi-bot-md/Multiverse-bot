import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let vn = './media/bot.mp3'
let chat = global.db.data.chats[m.chat]
//const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: {orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'ππ’ππ‘ππ£πππ π - π΅ππ‘', orderTitle: 'Bang', thumbnail: fs.readFileSync('./68747470733a2f2f692e6962622e636f2f474d67626a43742f494d472d32303232303632322d5741303030312e6a7067.jpeg'), sellerJid: '0@s.whatsapp.net'}}}
//const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: {"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"}}}  
if (/^bot$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendButton(m.chat, '*π·πΎπ»π°, ΒΏπ²πΎπΌπΎ ππ΄ πΏππ΄π³πΎ π°πππ³π°π?*', wm, [['πΌπ΄π½π π³π΄ π²πΎπΌπ°π½π³πΎπ', `#menu`]], 'conversation', { sendEphemeral: true, quoted: m })
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', seconds: '4556', ptt: true, sendEphemeral: true, quoted: m })}
return !0
}
export default handler
