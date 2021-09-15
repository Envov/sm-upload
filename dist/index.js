#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const set_user_1 = require("./set-user");
const get_user_1 = require("./get-user");
const upload_1 = require("./upload");
const command = process.argv.slice(2)[0];
switch (command) {
    case 'set-user':
        const username = process.argv.slice(2)[1];
        const password = process.argv.slice(2)[2];
        (0, set_user_1.default)(username)(password);
        break;
    case 'get-user':
        console.log(`Current Account Is:`);
        console.log((0, get_user_1.default)());
        break;
    case 'set-token':
        break;
    default:
        const filePaths = process.argv.slice(2);
        (0, upload_1.default)(filePaths).then(console.log);
        break;
}
