import { ModeSelect, ThemeBuilderProps } from '../../types';
import { ThemeBuilder } from '../ThemeBuilder';
describe('ThemeBuilder Tests', () => {
  const sample_data: ThemeBuilderProps = {
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

  it('should return the primary oigin color in light mode', () => {
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getColors().primary.origin.length).toBeGreaterThan(4);
    expect(theming.getColors().primary.origin).toBe(
      sample_data.colors.primaryLight.origin,
    );
  });
  it('should return the primary oigin color in dark mode', () => {
    const mode = ModeSelect.DARK;
    const theming = new ThemeBuilder(sample_data);
    theming.setMode(mode);
    expect(theming.getColors().primary.origin.length).toBeGreaterThan(4);
    expect(theming.getColors().primary.origin).toBe(
      sample_data.colors.primaryDark.origin,
    );
    sample_data.mode = ModeSelect.LIGHT;
  });
  it('should return the primary oigin color in pale mode', () => {
    const mode = ModeSelect.PALE;
    const theming = new ThemeBuilder(sample_data);
    theming.setMode(mode);
    expect(theming.getColors().primary.origin.length).toBeGreaterThan(4);
    expect(theming.getColors().primary.origin).toBe(
      sample_data.colors.primaryPale.origin,
    );
    sample_data.mode = ModeSelect.LIGHT;
  });
  it('return backgroundColorLight if it is in light mode', () => {
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getColorsByMode().background).toBe(
      sample_data.backgroundLight,
    );
  });
  it('return backgroundColorDark if it is in dark mode', () => {
    const mode = ModeSelect.DARK;
    const theming = new ThemeBuilder(sample_data);
    theming.setMode(mode);
    expect(theming.getColorsByMode().background).toBe(
      sample_data.backgroundDark,
    );
    sample_data.mode = ModeSelect.LIGHT;
  });
  it('return backgroundColorPale if it is in pale mode', () => {
    const mode = ModeSelect.PALE;
    const theming = new ThemeBuilder(sample_data);
    theming.setMode(mode);
    expect(theming.getColorsByMode().background).toBe(
      sample_data.backgroundPale,
    );
    sample_data.mode = ModeSelect.LIGHT;
  });
  it('return textColorLight if it is in light mode', () => {
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getColorsByMode().text).toBe(sample_data.textColorLight);
  });
  it('return complimataryColorLight if it is in light mode', () => {
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getColorsByMode().complementary).toBe(
      sample_data.complimentaryColorLight,
    );
  });
  it('returns the mode', () => {
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getMode()).toBe(sample_data.mode);
  });
  it('sets the mode', () => {
    const mode = ModeSelect.DARK;
    const theming = new ThemeBuilder(sample_data);
    theming.setMode(mode);
    expect(theming.getMode()).toBe(mode);
    sample_data.mode = ModeSelect.LIGHT;
  });
  it('returns the background', () => {
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getBackgroundColor()).toBe(sample_data.backgroundLight);
  });
  it('returns the backgroundLight if mode is in light', () => {
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getBackgroundColor()).toBe(sample_data.backgroundLight);
  });
  it('returns the backgroundDark if mode is in Dark', () => {
    const mode = ModeSelect.DARK;
    sample_data.mode = mode;
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getBackgroundColor()).toBe(sample_data.backgroundDark);
    sample_data.mode = ModeSelect.LIGHT;
  });
  it('returns the backgroundPale if mode is in Pale', () => {
    const mode = ModeSelect.PALE;
    sample_data.mode = mode;
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getBackgroundColor()).toBe(sample_data.backgroundPale);
    sample_data.mode = ModeSelect.LIGHT;
  });
  it('returns the textColorPale if mode is in Pale', () => {
    const mode = ModeSelect.PALE;
    sample_data.mode = mode;
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getTextColor()).toBe(sample_data.textColorPale);
    sample_data.mode = ModeSelect.LIGHT;
  });
  it('returns the textColorDark if mode is in Dark', () => {
    const mode = ModeSelect.DARK;
    sample_data.mode = mode;
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getTextColor()).toBe(sample_data.textColorDark);
    sample_data.mode = ModeSelect.LIGHT;
  });
  it('returns the textColorPale if mode is in Pale', () => {
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getTextColor()).toBe(sample_data.textColorLight);
  });
  it('returns the tintColorPale if mode is in Pale', () => {
    const mode = ModeSelect.PALE;
    sample_data.mode = mode;
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getTint()).toBe(sample_data.tintColorPale);
    sample_data.mode = ModeSelect.LIGHT;
  });
  it('returns the tintColorDark if mode is in Dark', () => {
    const mode = ModeSelect.DARK;
    sample_data.mode = mode;
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getTint()).toBe(sample_data.tintColorDark);
    sample_data.mode = ModeSelect.LIGHT;
  });
  it('returns the tintColorPale if mode is in Pale', () => {
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getTint()).toBe(sample_data.tintColorLight);
  });
  it('returns the complimentaryColorPale if mode is in Pale', () => {
    const mode = ModeSelect.PALE;
    sample_data.mode = mode;
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getComplementaryColors()).toBe(sample_data.complementaryColorPale);
    sample_data.mode = ModeSelect.LIGHT;
  });
  it('returns the complimentaryColorDark if mode is in Dark', () => {
    const mode = ModeSelect.DARK;
    sample_data.mode = mode;
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getComplementaryColors()).toBe(sample_data.complementaryColorDark);
    sample_data.mode = ModeSelect.LIGHT;
  });
  it('returns the complimentaryColorLight if mode is in Pale', () => {
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getComplementaryColors()).toBe(sample_data.complimentaryColorLight);
  });
  it('returns the correct statusColor if mode is in Pale', () => {
    const mode = ModeSelect.PALE;
    sample_data.mode = mode;
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getStatusColors().warning).toBe(sample_data.warningColorPale);
    sample_data.mode = ModeSelect.LIGHT;
  });
  it('returns the complimentaryColorDark if mode is in Dark', () => {
    const mode = ModeSelect.DARK;
    sample_data.mode = mode;
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getStatusColors().warning).toBe(sample_data.warningColorDark);
    sample_data.mode = ModeSelect.LIGHT;
  });
  it('returns the complimentaryColorLight if mode is in Pale', () => {
    const theming = new ThemeBuilder(sample_data);
    expect(theming.getStatusColors().warning).toBe(sample_data.warningColorLight);
  });
});
