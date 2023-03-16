import { convertTokensToTamaguiVariables } from '../helpers';
import { ITokens } from '../types';

export const tokens = {
  "0": 0,
  "1": 3,
  "2": 5,
  "3": 7,
  "4": 9,
  "true": 9,
  "5": 10,
  "6": 16,
  "7": 19,
  "8": 22,
  "9": 26,
  "10": 34,
  "11": 42,
  "12": 50,
} as ITokens;

export const variables = convertTokensToTamaguiVariables('radius', tokens);
