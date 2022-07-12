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
    primaryDark: {
      origin: '#004369',
      tint: '#99b4c3',
      shade: '#00283f',
    },
    primaryLight: {
      origin: '#0280c7',
      tint: '#609dbf',
      shade: '#265b78',
    },
    primaryPale: {
      origin: '#76b7db',
      tint: '#aedaf2',
      shade: '#89a4b3',
    },
    secondaryLight: {
      origin: '#01949A',
      tint: '#99d4d7',
      shade: '#01686c',
    },
    secondaryDark: {
      origin: '#026c70',
      tint: '#67888a',
      shade: '#23484a',
    },
    secondaryPale: {
      origin: '#8cd8db',
      tint: '#b9eef0',
      shade: '#87a7a8',
    },
    tertiaryPale: {
      origin: '#E5DDC8',
      tint: '#f2eee4',
      shade: '#898578',
    },
    tertiaryDark: {
      origin: '#7d672f',
      tint: '#8a7b57',
      shade: '#524832',
    },
    tertiaryLight: {
      origin: '#f7c452',
      tint: '#fad98e',
      shade: '#ba9b54',
    },
  },
};

export const theme = new ThemeBuilder(THEMESETTINGS);
