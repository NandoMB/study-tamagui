import { convertTokensToTamaguiVariables } from '../helpers';
import { ITokens } from '../types';

export const tokens = {
  "0": 0,
  "1": 100,
  "2": 200,
  "3": 300,
  "4": 400,
  "5": 500
} as ITokens;

export const variables = convertTokensToTamaguiVariables('zIndex', tokens);
