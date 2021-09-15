
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs-extra');
import {UserInfo} from "./set-user"
const getUser = ():UserInfo=>{
    const dataInfoPtah: string = path.resolve(__dirname, './data.json')
    const dataInfo: UserInfo = fs.readJsonSync(dataInfoPtah)
    return dataInfo
}
export default getUser