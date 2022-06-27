import {
  Backgrounds,
  Colors,
  ColorsByMode,
  ModeSelect,
  TextColors,
  ThemeBuilderProps,
  Theming,
} from '../types';

export class ThemeBuilder implements Theming {
  private colors!: Colors;
  private backgroundDark!: string;
  private backgroundLight!: string;
  private backgroundPale!: string;
  private textColorLight!: string;
  private textColorDark!: string;
  private textColorPale!: string;
  private tintColorLight!: string;
  private tintColorDark!: string;
  private tintColorPale!: string;
  private complimentaryColorLight!: string;
  private complementaryColorDark!: string;
  private complementaryColorPale!: string;
  private highlight!: string;
  private tint!: string;
  private mode!: ModeSelect;
  currentBackground!: string;
  constructor(props: ThemeBuilderProps) {
    Object.entries(props).forEach(
      ([key, value]) => ((this as any)[key] = value),
    );
    this.currentBackground = props.backgroundLight;
  }
  setMode(mode: ModeSelect): void {
    this.mode = mode;
  }
  getMode(): string {
    return this.mode;
  }
  setCurrentBackground(background: string): void {
    this.currentBackground = background;
  }
  getCurrentBackground(): string {
    return this.currentBackground;
  }
  getBackgrounds(): Backgrounds {
    return {
      backgroundLight: this.backgroundLight,
      backgroundDark: this.backgroundDark,
      backgroundPale: this.backgroundPale,
    };
  }
  getTexts(): TextColors {
    return {
      textColorLight: this.textColorLight,
      textColorDark: this.textColorDark,
      textColorPale: this.textColorPale,
    };
  }
  getHighlight(): string {
    return this.tint;
  }
  getColors(): Colors {
    return this.colors;
  }
  getBackgroundColor(): string {
    switch (this.mode) {
      case ModeSelect.DARK:
        return this.backgroundDark;
      case ModeSelect.PALE:
        return this.backgroundPale;
      default:
        return this.backgroundLight;
    }
  }
  getTextColor(): string {
    switch (this.mode) {
      case ModeSelect.DARK:
        return this.textColorDark;
      case ModeSelect.PALE:
        return this.textColorPale;
      default:
        return this.textColorLight;
    }
  }
  getTint(): string {
    switch (this.mode) {
      case ModeSelect.DARK:
        return this.tintColorDark;
      case ModeSelect.PALE:
        return this.tintColorPale;
      default:
        return this.tintColorLight;
    }
  }
  getComplementaryColors(): string {
    switch (this.mode) {
      case ModeSelect.DARK:
        return this.complementaryColorDark;
      case ModeSelect.PALE:
        return this.complementaryColorPale;
      default:
        return this.complimentaryColorLight;
    }
  }
  getColorsByMode(): ColorsByMode {
    switch (this.mode) {
      case ModeSelect.DARK:
        return {
          background: this.backgroundDark,
          text: this.textColorDark,
          tint: this.tintColorDark,
          complementary: this.complementaryColorDark,
        };
      case ModeSelect.PALE:
        return {
          background: this.backgroundPale,
          text: this.textColorPale,
          tint: this.tintColorPale,
          complementary: this.complementaryColorPale,
        };
      default:
        return {
          background: this.backgroundLight,
          text: this.textColorLight,
          tint: this.tintColorLight,
          complementary: this.complimentaryColorLight,
        };
    }
  }
}
