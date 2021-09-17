import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import dotenvConversion from 'dotenv-conversion';

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

const envStore = loadEnvFiles(['.env.' + env(), '.env']);

/**
 * 读取环境变量
 * @param name env name
 * @param defaultValue
 * @returns 读取的环境变量
 */
export function readEnvVar<T>(name: string, defaultValue: T): T {
  const value = envStore[name] ?? defaultValue;
  return value;
}

defineGlobalProp('env', env);
defineGlobalProp('e', readEnvVar);
defineGlobalProp('__PROP__', __PROD__);
defineGlobalProp('__DEV__', __DEV__);
defineGlobalProp('__TEST__', __TEST__);
defineGlobalProp('__LOCAL__', __LOCAL__);

function defineGlobalProp(key, value) {
  if (global) {
    global[key] = value;
  }
  if (globalThis) {
    globalThis[key] = value;
  }
}

function loadEnvFiles(paths = []) {
  const ret = {};
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    const commonEnv = dotenv.config({ path });

    const { parsed } = dotenvConversion.make(dotenvExpand(commonEnv));

    Object.assign(ret, parsed);
  }

  return ret;
}
