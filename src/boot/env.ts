import * as dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import dotenvConversion from 'dotenv-conversion';

/**
 * 获取当前环境
 * @returns current environment identification (prod、dev、test、local)
 */
export const env = () =>
  ({ prod: 'prod', production: 'prod', dev: 'dev', test: 'test' }[
    process.env.NODE_ENV
  ] ?? 'local');

export const __PROD__ = env() === 'prod'; // 是否为生产环境
export const __DEV__ = env() === 'dev'; // 是否为预发环境
export const __TEST__ = env() === 'test'; // 是否为测试环境
export const __LOCAL__ = env() === 'local'; // 是否为本地环境

const envStore = loadEnvFiles(['.env.' + env(), '.env']); // 前面的优先级大于后面的

/**
 * 读取环境变量
 * @param name env name
 * @param defaultValue
 * @returns 读取的环境变量
 */
export function readEnvVar<T>(name: string, defaultValue: T): T {
  return transformValue(
    envStore[name] ?? process.env[name] ?? defaultValue,
    typeof defaultValue,
  );
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

function transformValue(value, type: string) {
  const transformFunction = {
    string: (val) => String(val),
    number: (val) => Number(val),
    boolean: (val) => val === 'true',
  };
  if (!transformFunction[type]) {
    return value;
  }
  return transformFunction[type](value);
}
