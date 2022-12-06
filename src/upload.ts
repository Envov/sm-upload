// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('node-fetch');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const httpsAgent = require("./httpsAgent")
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs-extra');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const FormData = require('form-data');
import { BASE_URL} from "./set-user"
import getUser from "./get-user";
export type UploadRes={
    success:boolean,
    code: 'success' |'image_repeated',
    message:string,
    images?:string,
    data?:{
        url:string,
        //delete url
        delete:string
    }
}
export const uploadOne = async (inputPath: string): Promise<string|undefined>=>{
    // console.log('Landing... ', inputPath)
    const filePath = path.resolve(process.cwd(), inputPath)
    const user = getUser()
    const formData = new FormData();
    formData.append('smfile', fs.createReadStream(filePath));
    const res: { json: () =>Promise<UploadRes> }=await fetch(`${BASE_URL}/upload`,{
        method: "post",
        agent: httpsAgent,
        headers:{
            Authorization:user.token
        },
        body: formData
    })
    const {images,data,code} = await res.json()
    // console.log(message)
    return code === 'success' ? data?.url : images
}
const upload = async(inputPaths:string[]):Promise<string>=>{
    // console.log('Loading this:')
    // console.log(inputPaths)
    const beUpload = inputPaths.map(uploadOne)
    return (await Promise.all(beUpload)).map(i => i || 'https://loaderror.png').join(' ')
}
export default upload