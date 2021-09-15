"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_URL = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('node-fetch');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs-extra');
exports.BASE_URL = 'https://sm.ms/api/v2';
const setUser = (username) => async (password) => {
    if (!username || !password) {
        console.log(`Login Failed! Invalid username or password.`);
        return;
    }
    console.log('Landing...');
    //auth user
    const token = await fetch(`${exports.BASE_URL}/token?username=${username}&password=${password}`, {
        method: "post"
    });
    const { success, message, data } = await token.json();
    if (!success) {
        console.log(`Login Failed! ${message}`);
        return;
    }
    console.log(data);
    console.log(`Login Success! Token is ${data.token}`);
    const dataInfoPtah = path.resolve(__dirname, './data.json');
    const dataInfo = fs.readJsonSync(dataInfoPtah);
    fs.writeJSONSync(dataInfoPtah, {
        ...dataInfo,
        token: data.token,
        username,
        password,
    }, { spaces: '\t' });
    return {
        ...dataInfo,
        username,
        token: data.token,
        password
    };
};
exports.default = setUser;
