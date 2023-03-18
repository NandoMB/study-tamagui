import { Variable } from '@tamagui/core';
import { createVariable } from 'tamagui';
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

type PalleteToken = {
  [key: string]: string
}

type Pallete = {
  [key: string]: PalleteToken
}

export function buildAlphaPallet(pallete: Pallete, key: string) {
  const colors = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  const alphas = [...Array(100).keys()];
  const result: PalleteToken = {};
  for (const color of colors) {
    for (const alpha of alphas) {
      const colorToken = pallete[key.toLowerCase()][`${key}_${color}`];
      const alphaTokenKey = `${key}_${color}_alpha_${alpha}`;
      result[alphaTokenKey] = addAlphaToHexColor(colorToken, alpha);
    }
  }
  return result;
}

export function addAlphaToHexColor(hexColor: Variable | string, percentage: number) {
  const alpha = `0${Math.round((255 / 100) * percentage).toString(16)}`.slice(-2).toUpperCase();
  return `${typeof hexColor !== 'string' ? hexColor.val : hexColor}${alpha}`;
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}