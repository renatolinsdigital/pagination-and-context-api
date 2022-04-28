import 'styled-components';
import { Colors } from './shared/models';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    transitions?: {
      default: string;
    };
  }
}