import { useFonts } from 'expo-font';

type FontsList = [{ font: any, ignore?: string[] }]

function extractFonts(list: FontsList) {
  const fonts: any = {};
  for (let i = 0; i < list.length; i++) {
    for (const key in list[i].font) {
      if (list[i].ignore?.includes(key)) {
        continue;
      }
      fonts[key] = list[i].font[key];
    }
  }
  return fonts;
}

export default function useFontLoader(list: FontsList) {
  const fonts = extractFonts(list);
  return useFonts({ ...fonts });
}