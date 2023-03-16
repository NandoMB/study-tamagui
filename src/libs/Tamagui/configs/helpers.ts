import { createVariable } from '@tamagui/core';
import { ITamaguiVariables } from './types';

export function convertTokensToTamaguiVariables(prefix: string, tokens: any) {
  const variables: ITamaguiVariables = {};
  for (const key of Object.keys(tokens)) {
    variables[key] = convert(prefix, key, tokens[key]);
  }
  return variables;
}
function isDefaultValue(key: string) {
  return key === 'true' || key === '-true';
}

function convert(prefix: string, key: string, val: number) {
  return buildVariable(key, val, prefix, isDefaultValue(key));
}

function buildVariable(key: string, val: number | string, prefix: string, isDefault: boolean) {
  const name = isDefault ? key : `${prefix}-${key}`;
  return createVariable({ key: isDefault ? 'true' : key, name, val });
}