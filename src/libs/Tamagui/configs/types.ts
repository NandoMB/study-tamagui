import { Variable } from '@tamagui/core';

export type ITokens = {
  [key: string]: string | number
};

export type ITamaguiVariables = {
  [key: string]: Variable<string | number>
};