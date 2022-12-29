import color from './color.json';
import spacing from './spacing.json';
import font from './font.json';

export type ColorFoundation = typeof color;
export type FontFoundation = typeof font;
export type SpacingFoundation = typeof spacing;

export default {
  color,
  font,
  spacing,
};
