export declare const BASE_URL = "https://sm.ms/api/v2";
export declare type UserInfo = {
    username: string | undefined;
    password: string | undefined;
    token: string | undefined;
};
export declare type LoginFetchResponse = {
    success: boolean;
    code: 'error' | 'success';
    message: string;
    RequestId: string;
    data: {
        token: string;
    };
};
declare const setUser: (username: string | undefined) => (password: string | undefined) => Promise<UserInfo | void>;
export default setUser;
