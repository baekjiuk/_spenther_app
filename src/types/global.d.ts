import '@emotion/react';
import {ColorFoundation, FontFoundation, SpacingFoundation} from '../theme';

declare module '@emotion/react' {
  export interface Theme {
    color: ColorFoundation;
    font: FontFoundation;
    spacing: SpacingFoundation;
  }
}
