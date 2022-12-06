// eslint-disable-next-line @typescript-eslint/no-var-requires
const https = require('https');
const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});
module.exports= httpsAgent