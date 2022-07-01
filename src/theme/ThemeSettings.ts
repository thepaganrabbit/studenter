import { ThemeBuilderProps, ModeSelect } from '../types';
import { ThemeBuilder } from '../utils/ThemeBuilder';

export const THEMESETTINGS: ThemeBuilderProps = {
  backgroundLight: '#d1d9e3',
  backgroundDark: '#167D7F',
  backgroundPale: '#b984c3',
  highlight: '#29A0B1',
  tint: '#94d0d8',
  textColorLight: '#0F1513',
  textColorDark: '#E8F2F2',
  textColorPale: '#061617',
  tintColorLight: '#F0F9F6',
  tintColorDark: '#167D7F',
  tintColorPale: '#29A0B1',
  warningColorLight: '#FF8700',
  warningColorDark: '#167D7F',
  warningColorPale: '#29A0B1',
  dangerColorLight: '#EF103A',
  dangerColorDark: '#167D7F',
  dangerColorPale: '#29A0B1',
  successColorLight: '#2DD258',
  successColorDark: '#167D7F',
  successColorPale: '#29A0B1',
  complimentaryColorLight: '#b9aeab',
  complementaryColorDark: '#7F1816',
  complementaryColorPale: '#E27E79',
  mode: ModeSelect.LIGHT,
  colors: {
    primary: {
      origin: '#004369',
      tint: '#99b4c3',
      shade: '#00283f',
    },
    secondary: {
      origin: '#01949A',
      tint: '#99d4d7',
      shade: '#01686c',
    },
    tertiary: {
      origin: '#E5DDC8',
      tint: '#f2eee4',
      shade: '#898578',
    },
  },
};

export const theme = new ThemeBuilder(THEMESETTINGS);
