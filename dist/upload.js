"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadOne = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('node-fetch');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs-extra');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const FormData = require('form-data');
const set_user_1 = require("./set-user");
const get_user_1 = require("./get-user");
const uploadOne = async (inputPath) => {
    // console.log('Landing... ', inputPath)
    const filePath = path.resolve(process.cwd(), inputPath);
    const user = (0, get_user_1.default)();
    const formData = new FormData();
    formData.append('smfile', fs.createReadStream(filePath));
    const res = await fetch(`${set_user_1.BASE_URL}/upload`, {
        method: "post",
        headers: {
            Authorization: user.token
        },
        body: formData
    });
    const { images, data, code } = await res.json();
    // console.log(message)
    return code === 'success' ? data === null || data === void 0 ? void 0 : data.url : images;
};
exports.uploadOne = uploadOne;
const upload = async (inputPaths) => {
    // console.log('Loading this:')
    // console.log(inputPaths)
    const beUpload = inputPaths.map(exports.uploadOne);
    return (await Promise.all(beUpload)).map(i => i || 'https://loaderror.png').join(' ');
};
exports.default = upload;
