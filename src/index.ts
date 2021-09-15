#!/usr/bin/env node
import setUser from "./set-user"
import getUser from "./get-user"
import upload from "./upload"
export type Command = 'set-user' | 'get-user' | string | undefined
const command = process.argv.slice(2)[0] as unknown as Command;
switch (command){
    case 'set-user':
        const username:string|undefined = process.argv.slice(2)[1];
        const password:string|undefined = process.argv.slice(2)[2];
        setUser(username)(password)
        break
    case 'get-user':
        console.log(`Current Account Is:`)
        console.log(getUser())
        break
    case 'set-token':
        break
    default:
        const filePaths: string[]  = process.argv.slice(2);
        upload(filePaths).then(console.log)
        break
}