export const __PROD__ = process.env.NODE_ENV === 'prod'; // 是否为生产环境
export const __DEV__ = process.env.NODE_ENV === 'dev'; // 是否为预发环境
export const __TEST__ = process.env.NODE_ENV === 'test'; // 是否为测试环境
export const __LOCAL__ = !__TEST__ && !__PROD__ && !__DEV__; // 是否为本地环境

/**
 * 获取当前环境
 * @returns current environment identification (prod、dev、test、local)
 */
export const env = () =>
  ({ prod: 'prod', dev: 'dev', test: 'test' }[process.env.NODE_ENV] ?? 'local');

/**
 * 读取环境变量
 * @param name env name
 * @param defaultValue
 * @returns 读取的环境变量
 */
export function readEnvVar<T>(name: string, defaultValue: T): T {
  const Types = {
    string: String,
    number: Number,
    boolean: Boolean,
  };
  const type = Types[typeof defaultValue];
  const value = process.env[name] ?? defaultValue;

  return type(value);
}

global.env = env;
global.readEnvVar = readEnvVar;
global.__PROP__ = __PROD__;
global.__DEV__ = __DEV__;
global.__TEST__ = __TEST__;
global.__LOCAL__ = __LOCAL__;
