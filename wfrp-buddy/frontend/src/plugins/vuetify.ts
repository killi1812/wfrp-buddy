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
  //variables{
  //}

}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#f9fbfe',
    surface: '#e0e0e0',
    primary: '#1976d2',
    secondary: '#f5f5f5',
    accent: '#e3effa',
    error: '#fd5f51',
    info: '',
    success: '#38c76a',
    warning: '#fdbe04',
    subtext: "#606060"
  },
  //variables{
  //}

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

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "wfrpDark",
    themes: {
      wfrpDark,
      defaultTheme,
      darkTheme,
    }
  },
});
