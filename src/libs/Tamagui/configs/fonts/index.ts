import { createFont } from 'tamagui';

const Poppins = createFont({
  family: 'Poppins',
  size: {
		'1': 11,
		'2': 12,
		'3': 13,
		'4': 14,
		'5': 16,
		'6': 18,
		'7': 20,
		'8': 23,
		'9': 30,
		'10': 46,
		'11': 55,
		'12': 62,
		'13': 72,
		'14': 92,
		'15': 114,
		'16': 134,
		'true': 14
  },
  lineHeight: {
    '1': 21,
    '2': 22,
    '3': 23,
    '4': 24,
    '5': 26,
    '6': 28,
    '7': 30,
    '8': 33,
    '9': 40,
    '10': 56,
    '11': 65,
    '12': 72,
    '13': 82,
    '14': 102,
    '15': 124,
    '16': 144,
    'true': 24
  },
  weight: {
		'100': 100,
    '200': 200,
    '300': 300,
    '400': 400,
    '500': 500,
    '600': 600,
    '700': 700,
    '800': 800,
    '900': 900,
    'true': 400
  },
  letterSpacing: {
		'1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0,
    '10': 0,
    '11': 0,
    '12': 0,
    '13': 0,
    '14': 0,
    '15': 0,
    '16': 0,
    'true': 0
  },
  face: {
    '100': { normal: 'Poppins_100Thin', italic: 'Poppins_100Thin_Italic' },
		'200': { normal: 'Poppins_200ExtraLight', italic: 'Poppins_200ExtraLight_Italic' },
		'300': { normal: 'Poppins_300Light', italic: 'Poppins_300Light_Italic' },
		'400': { normal: 'Poppins_400Regular', italic: 'Poppins_400Regular_Italic' },
		'500': { normal: 'Poppins_500Medium', italic: 'Poppins_500Medium_Italic' },
		'600': { normal: 'Poppins_600SemiBold', italic: 'Poppins_600SemiBold_Italic' },
		'700': { normal: 'Poppins_700Bold', italic: 'Poppins_700Bold_Italic' },
		'800': { normal: 'Poppins_800ExtraBold', italic: 'Poppins_800ExtraBold_Italic' },
		'900': { normal: 'Poppins_900Black', italic: 'Poppins_900Black_Italic' }
  },
	fontStyle: {
		'normal': 'normal',
		'italic': 'italic'
	}
});

export default {
  heading: Poppins,
  body: Poppins,
  mono: Poppins,
  poppins: Poppins,
  // body: "system-ui, sans-serif",
  // heading: "Georgia, serif",
  // mono: "Menlo, monospace",
};
