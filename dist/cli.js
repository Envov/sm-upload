"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const R = require("ramda");
const args = yargs
    .command(['build'], `
          将markdown目录生成静态网站,
         --input  要转换的路径markdown文件夹，默认为执行目录
         --output 要输出的静态网站路径，支持相对路径，没有则自动生成，默认为 ../build
         --template 网站模板地址,支持仓库地址,默认 https://github.com/UILKUNP/vdoc-template-vue
     `, {
    input: {
        describe: "要生成静态网站的文档路径",
        demandOption: false,
    },
    output: {
        describe: "要输出的路径，支持相对路径，没有则自动生成",
        demandOption: false,
    },
    template: {
        describe: "网站模板地址,支持文件夹或仓库地址,自定义外观: https://github.com",
        demandOption: false,
    },
}).command(['serve'], `
          在开发环境实时预览,
         --input  要转换的路径markdown文件夹，默认为执行目录
         --template 网站模板地址,支持仓库地址,默认 https://github.com/UILKUNP/vdoc-template-vue
     `, {
    input: {
        describe: "要生成静态网站的文档路径",
        demandOption: false,
    },
    template: {
        describe: "网站模板地址,支持仓库地址,",
    },
})
    .help().
    alias("version", "v").
    alias("help", "h").argv;
const config = {
    mode: args._[0],
    config: R.omit(['_'])(args)
};
exports.default = config;
