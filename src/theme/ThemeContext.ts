import React from 'react';
import { theme } from './ThemeSettings';
import { ThemeBuilder } from '../utils/ThemeBuilder';

export const ThemeContext = React.createContext<ThemeBuilder>(theme);
