import React from 'react';
import { createRoot } from 'react-dom/client';
import './normalize.css';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import App from './App.js';


// Before
// After

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);

/* ReactDOM.render(
      ,  document.getElementById('root')
); */
