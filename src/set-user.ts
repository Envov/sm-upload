// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('node-fetch');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const httpsAgent=require("./httpsAgent")

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs-extra');
export const BASE_URL ='https://smms.app/api/v2'
export type UserInfo={
    username: string| undefined,
    password: string | undefined,
    token: string | undefined,
}
export type LoginFetchResponse={
    success:boolean,
    code:'error'|'success',
    message:string,
    RequestId:string,
    data:{
        token:string
    },
}
const setUser = (username: string | undefined) => async (password: string | undefined): Promise<UserInfo|void>=>{
    if (!username || !password){
        console.log(`Login Failed! Invalid username or password.`)
        return 
    }
    console.log('Landing...')
    //auth user
    try {
        const token: { json: () => Promise<LoginFetchResponse> } = await fetch(`${BASE_URL}/token?username=${username}&password=${password}`, {
            method: "post",
            agent: httpsAgent,
        })
        const { success, message, data } = await token.json();
        if (!success) {
            console.log(`Login Failed! ${message}`)
            return
        }
        console.log(data)
        console.log(`Login Success! Token is ${data.token}`)

        const dataInfoPtah: string = path.resolve(__dirname, './data.json')
        const dataInfo: UserInfo = fs.readJsonSync(dataInfoPtah)
        fs.writeJSONSync(dataInfoPtah, {
            ...dataInfo,
            token: data.token,
            username,
            password,
        }, { spaces: '\t' })
        return {
            ...dataInfo,
            username,
            token: data.token,
            password
        }
    } catch (error) {
        console.log(console.log(`Login Failed! ${error}`))
    }
    
}
export default setUser