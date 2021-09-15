export declare type UploadRes = {
    success: boolean;
    code: 'success' | 'image_repeated';
    message: string;
    images?: string;
    data?: {
        url: string;
        delete: string;
    };
};
export declare const uploadOne: (inputPath: string) => Promise<string | undefined>;
declare const upload: (inputPaths: string[]) => Promise<string>;
export default upload;
