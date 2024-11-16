const { Client, GatewayIntentBits, REST, Routes, EmbedBuilder } = require('discord.js');
const minecraftServerUtil = require('minecraft-server-util');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

const commands = [
    {
        name: 'serverstatus',
        description: 'Check the status of a Minecraft server',
        options: [
            {
                name: 'ip',
                type: 3,
                description: 'IP address of the server',
                required: true,
            },
        ],
    },
];

(async () => {
    try {
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
            body: commands,
        });
    } catch (error) {
        console.error(error);
    }
})();

client.once('ready', () => {});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === 'serverstatus') {
        const serverIP = options.getString('ip');

        try {
            const status = await minecraftServerUtil.status(serverIP);

            if (status && status.players) {
                const onlinePlayers = status.players.online || 0;
                const maxPlayers = status.players.max || 0;

                const embed = new EmbedBuilder()
                    .setColor('#90EE90')
                    .setTitle(`**${serverIP}**`)
                    .addFields(
                        { name: '**Status:**', value: '> **Online:**', inline: true },
                        { name: '**Players:**', value: `> **${onlinePlayers} / ${maxPlayers}**`, inline: true }
                    )
                    .setTimestamp();

                await interaction.reply({ embeds: [embed] });
            } else {
                throw new Error('Invalid server data received');
            }
        } catch (error) {
            const errorEmbed = new EmbedBuilder()
                .setColor('#ff0000')
                .setTitle(`Server Status for **${serverIP}**`)
                .addFields(
                    { name: '> **Status** :', value: '> **Error** :', inline: true },
                    { name: 'Offline', value: 'Could not connect to the server.', inline: true }
                )
                .setTimestamp();

            await interaction.reply({ embeds: [errorEmbed] });
        }
    }
});

client.login(process.env.BOT_TOKEN);
