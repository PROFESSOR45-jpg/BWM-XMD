const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXZOiSBD8L/2qsQqCgBETcYCIDKKCgsLFPbTSQsunTYPixvz3C3Tmdi92bmOOp6ZoqjKzsuo7yAtcIRO1YPIdlAQ3kKLuSNsSgQlQ6tMJEdAHIaQQTMDReq1dzjgdin1dnLcL5uymweKm35qLZGMJJ6hZWAxrX4fcC3jrg7I+pPj4m4Txar9I5kZW3A223Uu2IeHFfrp2Gi/1F+uV17QiRes1xMr1Bbx1GSEmOI+0MkYZIjA1UbuGmHwNvqnch7uBJDt3ur5fuHA65DOeNRRMd7I5b4LechkMBiLRRuLX4GeS1XArdm3bA3u1xkNp55qCGmfIJJa9Ym4z9QydoVOt3egJv8JRjkIjRDnFtP2y7oWVDU1Rl1YKHeqypV6Ydntcthm3ERuHqkk9S1e8X5/MWfU14OFyuq5W+djzJaGUHO71XK50xYCi5ky1eZylcogiae8R2/gZ+Jp8eCX5P7rbq7Sxt+dINvDe9UbhSJHb+2nlkJTfH9C16I1jTc+cbawlX4PvtwKnX8zBvlkehbW7HXhk3/OpljXjXeTDhl3fAsOfcqYr/4APaU1+hxKVJzUVzKA8tFzR0wO2F/BJsqB8QrfJ4lZ7rgjjo2VrRLynm/1yrdXF6w2rWxszijb3tlphpT419swskeeXq8HPLVV+eTBKUGuEYMK89QFBEa4ogRQX+SPWBzBsNuhIEH2IC65DwRDdUAkd17Aq7BJPme2vmTD2pJsr7/ybHrfR6iSyG+sF9EFJiiOqKhTOcUUL0lqoqmCEKjD589GnjjJBWUHRKw7BBLA8xzDsmBclZvxH9e0aQ1rBsvyWIwr64ESKzEJgQkmN+uDxgzAWJUHmhqzIq7PZaCrKHC9NRWEmKSNFE6SOYPYsusUZqijMSjBhBE6QhizHMm9/9UGObvTpno7ziOmDEyYVdfO6TAsYfljr4yM8Hos6p5s2P6rdAZGnUO9hRCnOo6pjVueQHGPcILXjASYnmFboH5kRQeEHl/fVoRZh1/1lYKwc3dmCDnuX6BdtJmPhV3nSxzWeGY4ETmRZgZNEprvYxfsgh12uf2XpxHmH3VUJEYU4rcAEqOaF6x2GimbhQS1qui67kaxGMvhB88O0T1tY9YYJEv1GerNzzDpKHB9u81UREPYsXA8hytBC9ZjEvtzcl0+SgAnwLsGBuojf3OhSLK1Vyojtsg6cq3ubFXsSt0P82jZ3LlmEtiPH5O5XNR3w52nlTnfaopG3dBfdX9VyNE0PPU95NeNKsV+6aiFq8BH9XIxpfOPGLJJwPJbv3DI6++WwXh42aZIEso9c3uHv57kob0KJ34dbpfbcQZ2/Wlu0kXRzE0VXh98G0RUe5ydabk4JT73p+zg9xjl9X6P43er48XrC6LGVPmnFpw19Au98N3zr/5Tjfc/9x65QtouE7gKlgoPY58LE9v2d6NwvOpSKnqiP9mWOr2kYaGblgbduAMoU0lNBMjABMA9J8fALKerOyEZ+Kn5TTFUMQ46ezFNYUfnHcHwyb4zwvLUmRTmHVdy1wuTiOdc5vZXLckMh/Zg1IHePHjrg7W+ZJ/QPDAgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "PROFESSOR",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254112658916",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'no',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '1',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

