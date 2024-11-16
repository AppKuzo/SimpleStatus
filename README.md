# Minecraft Server Status Bot

A Discord bot that allows users to check the status of any Minecraft server using a simple slash command. The bot fetches real-time information about server status, player count, and more, then displays it in a clean, interactive embed.

---

## Features
- **Slash Command**: `/serverstatus` lets you query any Minecraft server.
- Displays:
  - Server status (online/offline).
  - Current player count and maximum player capacity.
  - Server IP.
  - Timestamped responses.
- User-friendly and visually appealing embedded messages.

---

## How It Works

### Commands

#### `/serverstatus`
- **Parameter**: `ip` (required) - The IP address of the Minecraft server to query.
- **Example**: `/serverstatus ip: play.example.com`

#### Bot Response
1. **Online Server**:
   - Displays:
     - Status: Online.
     - Player Count: `current/max`.
     - Server IP.
   - Embed includes a thumbnail, footer, and timestamp.

2. **Offline Server**:
   - Displays:
     - Status: Offline.
     - Error Message: "Could not connect to the server."

---

## Getting Started

### Prerequisites
1. **Node.js** (v16 or higher)
2. **npm** (Node Package Manager)

# Installation

## Setup Secrets

BOT_TOKEN=your_discord_bot_token
CLIENT_ID=your_discord_client_id

## Setup dependencies
npm install

## Run the bot
node index.js


Here's the README.md file for your bot:

markdown
Copy code
# Minecraft Server Status Bot

A Discord bot that allows users to check the status of any Minecraft server using a simple slash command. The bot fetches real-time information about server status, player count, and more, then displays it in a clean, interactive embed.

---

## Features
- **Slash Command**: `/serverstatus` lets you query any Minecraft server.
- Displays:
  - Server status (online/offline).
  - Current player count and maximum player capacity.
  - Server IP.
  - Timestamped responses.
- User-friendly and visually appealing embedded messages.

---

## How It Works

### Commands

#### `/serverstatus`
- **Parameter**: `ip` (required) - The IP address of the Minecraft server to query.
- **Example**: `/serverstatus ip: play.example.com`

#### Bot Response
1. **Online Server**:
   - Displays:
     - Status: Online.
     - Player Count: `current/max`.
     - Server IP.
   - Embed includes a thumbnail, footer, and timestamp.

2. **Offline Server**:
   - Displays:
     - Status: Offline.
     - Error Message: "Could not connect to the server."

---

## Getting Started

### Prerequisites
1. **Node.js** (v16 or higher)
2. **npm** (Node Package Manager)

# Installation

## Setup Secrets
BOT_TOKEN=your_discord_bot_token
CLIENT_ID=your_discord_client_id

## Install dependencies
npm install

## Run the bot
node index.js

# BUILT WITH : 
### Discord.js 
### Minecraft-server-Util 
### JavaScript

# Made by @AppKuzo 
