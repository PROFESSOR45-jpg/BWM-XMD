const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KiSBT8l3rVHgER0IiOWMQLguIFAXVjHgoooASBLgoQOvz3DfoS0w87s71vFQWVJ09mnvMK0gwXSEcNmLyCnOAKUtQdaZMjMAHTMggQAX3gQwrBBNTarqYsHaF0Z95ltRnVtDA5m5yjnahzXuVK5RxPKWty8TN49EFeugn2/gBojvEGjZjV9UVbhK2wUtY+vEnmnHPsWaHst/W9cTUhVPy59wweHSLEBKfhPI/QDRGY6KjZQUy+R79ZqS9br2bTUDWK4dB3ZWdw5ecLVhCok6WbGLX6anpjtzHzPfqtxvPLi1auRJ3PwuHSWEsj61AU5VmZ7fL9bb+Nq4OsMAM7fqdf4DBF/spHKcW0+bbuPc0pi3HLl+Lc91PX1LVg3/rGXahE+GIZUz2kbi+63C8n6XvEj3ZIIB0pQj0cnQsoZO1Cx0fOVXZR2c5qUrVwxzSGWcnyV+I78pmV+P/o7iwHhKPebM1z7lE9joUEc6KTnbVlnaah5ci0kEYRUltn8z36kocTvjHKw4ybRQGUVawIY11zZHeq+bZ0rPiA+tp6Iw+tX/QhLcmfWJ6U9TjOLWW+EsdoV3nE15imZoZKfj+i+oxELmh1YW+ztM0Wur06LqXMZ/mEbYV0cw7kOLC42eis98qFkc7LmZ0M22v4/NZRjJqVDybsow8ICnFBCaQ4S7s7jh/1AfQrE3kE0Td5wdm619xubO9DSxzScG8lRDHLea0osdCzEytTqr2fRSeqzZ9BH+Qk81BRIF/FBc1Is0FFAUNUgMnfP/sgRXf6blxXbsj2QYBJQa20zJMM+p+ufn6EnpeVKTWb1FO6AyJgwvy6RpTiNCw6HcsUEi/CFVIiSAswCWBSoEcf+KjCHurwwAXhqHHM2YFt2momMc11fcnkjnKUpe+/BONAkhAzfBr7XvDEI4SexhDyT0N/xHKiwIuS74E+wB8z0735rYUbBpU97AzcVgnUJhN7kjbYD5jd1pLfbHjXHhHkgwklJeoDF3pxmR+zGKV/wD2sDxsf+dlpaSFSDi6HqId1Zrg4VcwX3HdPweT1155SMr/DW66N2d5edI3f3iKIu865Ec+ynDCSxqwwGUp/FT/qTkiY5z9SRDvcD9G7Fz6iECcFmADFKE9Y49W50ZhXUVouZS+UlbAD/zTpM+3vafK0nb4lVTC20NJsNvF8NXU4zZKEZD1rdnzK6YMXAffivcM//wsImIAhJgvD4E+us/XPI52WK/fqcvQ4aEei7seOIV/UgqiJpWL5JJPqNO2ptrOSmJF0KRr1OHBKNSK2XQTGXeHEBZbXeFY/d9Xew/K12MvtwFQuiitWuUSs3m6UOt2XNFZX++Bo3zx3imaRqputO0WnF8280bHMaglzXSDR3e8Gnmy0lVvjcDlXWIgi435Xov37HL7tgeRj/+K3CXn9iFaA0ds6S2Fn0X+Z8zXlzKP/BeNjQf4mSdOTcmyuL+JwYKtRXFy1qSLbFNu7bW7W0rWnjXEllFmVzxcleDx+9kGeQBpk5AYmAKY+ybAP+iCBBZV/DeoR31BB4S0HE1bkubHE8hL3+AeoLD6a3gcAAA==',
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

