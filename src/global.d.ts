declare type Env = 'local' | 'dev' | 'prod' | 'test';
declare function e<T>(name: string, defaultValue: T): T;
declare const env: () => Env;
declare const __PROD__: boolean;
declare const __DEV__: boolean;
declare const __TEST__: boolean;
declare const __LOCAL__: boolean;
