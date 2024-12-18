const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUa4+qOBj+L/2qc+SumEyyoIgKXkDwttlsChTsAAWhIDjxv290nJz5sOfs7Lem0KdPn8v7DkiGS2SgFgzfQV7gGlJ0X9I2R2AI1CoMUQG6IIAUgiHoKDPVLfSI1ZZRYRDvEPqSGbDeZR03yrxzsRcJ5E2KnHTxCm5dkFdegv3fAPb41sjWzaZR2TfDO7nJtDNXIq0hGmZWbLSgrtwzOgISldkruN0RIS4wibT8hFJUwMRA7Rri4nv0pdlS5I90nrBtnZ/SgJw2EllHaKPHmjKLdc+0D+KFa6w0/h59xd2l0SbemnreXnviaSGx7InsJaHOtnA2sLBnNDosJe70pF/iiKBgFiBCMW2/rTs2x252cFeK7ZdzJXaNg+xKG2m8FM9jh4qSLUubt8HiPJpa3yMeOHu+vr6t2HNZmIzFvFW4r2WU1zsJdvv1VlPVzjbCb3BnfSW+Lj6zEv8f3QeTtWVtzw4J2qtQ9o7NenfVBs3MNlVne61Phtq0ljje7oj7Pfp8b+HsbOZ6LK9bscrEuLf286behJlcGyt+rppj050UR2Uf/aQPaVX8juVcZtvJUt2lCy0yrxUyrrE9tk35HAjuxc4GMj5yS9hhVa8TLI3VwemJffJm7JpGCq0kSGTMpHAwSVjD3/h96UqmFR4rr48XxaidBWDI3rqgQBEuaQEpzshjT5C6AAb1BvkFog95Qa9wtf00rTcrLr4i7brbHNT1oW5HLEdXU2XnZL6fCSpD2sMr6IK8yHxUliiY4pJmRbtAZQkjVILhn391AUEN/TDufh3PdkGIi5K6pMqTDAafrn5+hL6fVYRuWuKP7gtUgCHzcxtRiklU3nWsCCz8E67R6ARpCYYhTEp064IA1dhHdzxwCP823cxvHNo6l9ayp5dmgpQ75VNGPn5BDC+yMs+8hCKCL4KA4Av0/PCFYQMUBMJAYnkJdAF+duZ+5tcFnx5XW6iHNn/GmjGShTHs9Tg29oToYcOH9qhAARjSokJd4EE/rnInixH5DS7X9maBfa6OfHRaCrA+uUY6MZ1dP7e+4H54CobvP+fUKAvueLww3y02Dgu6IH1EEN9fzokCy3KSOJBZacj/Uf643HWEef6DIHqHfWp+PxAgCnFSgiEYLcawLym6tvYW2Cx1faJEyii6i/rp0WfYn2FSnePAYyfe1pwe8ypn/VxeGMjxGMuQR/xlYwaDCB88G7uv/wIChmCFmBpOy3mR6xKdeIy0hZfOfjrJOf9aFZe+ya1VadVYQlpVk6haidGZP+5xk/VVY3qU9HmyHsm78WpLQq1ss6OVHhr13ozPrHy9rOwpJEOhOJAH2hujowtLdiQ+T3f84MoSpHBK6NFg1ahvC8XijrYaTuvsAqWAprGh0+PeZtR+XtnOeT2Gk7MyWl6XyrOGjzGQPMcvfhTk/ZmsEKPHNCPw7tB/ePM148yt+wXiOR5/kSM1vLhcqMv2jt00HPTOwd4InRGJOVkb1RYdaJgPZ7NUZw4JuN3+6oI8gTTMihQMASRBkeEAdEECS6r8rKmDU1RSmOZgyPZ5QRiIEi/d/gHlJc1e3AcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "PROFESSOR",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254112658916",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'yes',
    BOT : process.env.BOT_NAME || 'PROFESSOR TECK',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || 'recording',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
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

