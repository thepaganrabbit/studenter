import {
  Colors,
  ColorsByMode,
  ColorsMode,
  ModeSelect,
  StatusColors,
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
  private warningColorLight!: string;
  private warningColorDark!: string;
  private warningColorPale!: string;
  private dangerColorLight!: string;
  private dangerColorDark!: string;
  private dangerColorPale!: string;
  private successColorLight!: string;
  private successColorDark!: string;
  private successColorPale!: string;
  private complimentaryColorLight!: string;
  private complementaryColorDark!: string;
  private complementaryColorPale!: string;
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
  getColors(): ColorsMode {
    switch (this.mode) {
      case ModeSelect.DARK:
        return {
          primary: this.colors.primaryDark,
          secondary: this.colors.secondaryDark,
          tertiary: this.colors.tertiaryDark,
        };
      case ModeSelect.PALE:
        return {
          primary: this.colors.primaryPale,
          secondary: this.colors.secondaryPale,
          tertiary: this.colors.tertiaryPale,
        };
      default:
        return {
          primary: this.colors.primaryLight,
          secondary: this.colors.secondaryLight,
          tertiary: this.colors.tertiaryLight,
        };
    }
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
          colors: {
            primary: this.colors.primaryDark,
            secondary: this.colors.secondaryDark,
            tertiary: this.colors.tertiaryDark,
          },
        };
      case ModeSelect.PALE:
        return {
          background: this.backgroundPale,
          text: this.textColorPale,
          tint: this.tintColorPale,
          complementary: this.complementaryColorPale,
          colors: {
            primary: this.colors.primaryPale,
            secondary: this.colors.secondaryPale,
            tertiary: this.colors.tertiaryPale,
          },
        };
      default:
        return {
          background: this.backgroundLight,
          text: this.textColorLight,
          tint: this.tintColorLight,
          complementary: this.complimentaryColorLight,
          colors: {
            primary: this.colors.primaryLight,
            secondary: this.colors.secondaryLight,
            tertiary: this.colors.tertiaryLight,
          },
        };
    }
  }
  getStatusColors(): StatusColors {
    switch (this.mode) {
      case ModeSelect.DARK:
        return {
          warning: this.warningColorDark,
          success: this.successColorDark,
          danger: this.dangerColorDark,
        };
      case ModeSelect.PALE:
        return {
          warning: this.warningColorPale,
          success: this.successColorPale,
          danger: this.dangerColorPale,
        };
      default:
        return {
          warning: this.warningColorLight,
          success: this.successColorLight,
          danger: this.dangerColorLight,
        };
    }
  }
}
