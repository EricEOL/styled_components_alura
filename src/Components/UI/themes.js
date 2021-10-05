import { 
  backgroundLight, 
  contentLight, 
  backgroundLightText,
  backgroundDark,
  backgroundDarkText,
  contentDark,
  primaryColor 
} from './variables';

export const lightTheme = {
  body: backgroundLight,
  inside: contentLight,
  text: backgroundLightText,
  filter: ''
}

export const darkTheme = {
  body: backgroundDark,
  inside: contentDark,
  text: backgroundDarkText,
  filter: "invert(100%)"
}