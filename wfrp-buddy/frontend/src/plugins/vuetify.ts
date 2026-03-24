/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify, ThemeDefinition } from "vuetify";
import * as labsComponents from 'vuetify/labs/components'

const defaultTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#CAC4B6',
    surface: '#E0D2B8',
    primary: '#825127',
    secondary: '#f5f5f5',
    accent: '#e3effa',
    error: '#B8574C',
    info: '#D1B37B',
    success: '#38c76a',
    warning: '#C7A654',
    subtext: "#606060"
  },
}

const wfrpDark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#121212',
    surface: '#1e1e1e',
    primary: '#ffca28', // amber-lighten-2
    secondary: '#825127',
    error: '#B8574C',
    info: '#D1B37B',
    success: '#38c76a',
    warning: '#C7A654',
  },
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#121212',
    surface: '#1e1e1e',
    primary: '#1976d2',
    secondary: '#f5f5f5',
    accent: '#e3effa',
    error: '#fd5f51',
    info: '',
    success: '#38c76a',
    warning: '#fdbe04',
    subtext: "#606060"
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    ...labsComponents,
  },
  theme: {
    defaultTheme: "defaultTheme",
    themes: {
      defaultTheme,
      wfrpDark,
      darkTheme,
    }
  },
});
