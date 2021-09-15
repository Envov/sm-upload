export declare type Args<T> = {
    _: ('build' | 'serve' | 'watch' | undefined)[];
    $0: string;
} & T;
export declare type BuildConfig = Partial<{
    input: true | string;
    output: true | string;
    config: true | string;
    template: true | string;
}>;
export declare type ServeConfig = Partial<{
    input: true | string;
    config: true | string;
    template: true | string;
}>;
export declare type WatchConfig = Partial<{
    input: true | string;
    output: true | string;
}>;
export interface IConfig<T> {
    mode: Args<T>['_'][0];
    config: Omit<Args<T>, '_'>;
}
declare const config: IConfig<BuildConfig | ServeConfig | WatchConfig>;
export default config;
