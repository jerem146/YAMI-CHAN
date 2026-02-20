export default {
  command: ['todos', 'invocar', 'tagall'],
  category: 'grupo',
  isAdmin: true,
  run: async (client, m, args) => {
    const groupInfo = await client.groupMetadata(m.chat)
    const participants = groupInfo.participants
    const pesan = args.join(' ')

    let teks = `╭━━〔 📣 𝗖𝗢𝗡𝗩𝗢𝗖𝗔𝗧𝗢𝗥𝗜𝗔 〕━━⬣\n`
    teks += `┃ ✦ Mensaje : ${pesan || 'Todos presentes ⚔️'}\n`
    teks += `┃ ✦ Miembros : ${participants.length}\n`
    teks += `┃ ✦ Invoca : @${m.sender.split('@')[0]}\n`
    teks += `╰━━━━━━━━━━━━━━━━⬣\n\n`

    teks += `╭━━〔 👥 𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗠𝗜𝗘𝗠𝗕𝗥𝗢𝗦 〕━━⬣\n`
    for (const mem of participants) {
      teks += `┃ ➤ @${mem.id.split('@')[0]}\n`
    }
    teks += `╰━━━━━━━━━━━━━━━━⬣\n`
    teks += `▸ ${version}`

    return client.reply(
      m.chat,
      teks,
      m,
      { mentions: [m.sender, ...participants.map(p => p.id)] }
    )
  }
}
