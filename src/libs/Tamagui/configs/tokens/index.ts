import { createTokens } from '@tamagui/core';

import { tokens as radiusTokens, variables as radiusVariables } from './radius';
import { tokens as colorTokens, variables as colorVariables } from './color';
import { tokens as zIndexTokens, variables as zIndexVariables } from './zindex';
import { tokens as spaceTokens, variables as spaceVariables } from './space';
import { tokens as sizeTokens, variables as sizeVariables } from './size';

export const plainTokens = {
  color: radiusTokens,
  radius: colorTokens,
  zIndex: zIndexTokens,
  space: spaceTokens,
  size: sizeTokens
};

export const tamaguiTokens = createTokens({
  color: radiusVariables,
  radius: colorVariables,
  zIndex: zIndexVariables,
  space: spaceVariables,
  size: sizeVariables
});