import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18next, { init } from "i18next";

import { App } from "./components/app/ui";
import { GlobalStyles } from "./globalStyles";
import store from "./store/store";
import commonEn from "./shared/translations/en/common.json";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      common: commonEn,
    },
  },
});

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
