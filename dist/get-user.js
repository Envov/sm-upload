"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs-extra');
const getUser = () => {
    const dataInfoPtah = path.resolve(__dirname, './data.json');
    const dataInfo = fs.readJsonSync(dataInfoPtah);
    return dataInfo;
};
exports.default = getUser;
