import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app-routes";
import locale_en from "./lang/en_US.json";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.scss";

const queryClient = new QueryClient();

const locale = navigator.language;

const languages: any = {
  en_US: locale_en,
};

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <IntlProvider
          locale={locale}
          messages={languages[locale] ? languages[locale] : languages["en_US"]}
        >
          <AppRoutes />
        </IntlProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
