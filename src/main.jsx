import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "react-toastify/dist/ReactToastify.css";
import { FormDataProvider } from "./context/formData-context.jsx";
import { MultiFormProvider } from "./context/steps-context.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FormDataProvider>
    <MultiFormProvider>
      <App />
    </MultiFormProvider>
  </FormDataProvider>
);
