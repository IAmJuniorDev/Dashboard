import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import "./index.css";
import APP from "./App";
import { Provider } from "react-redux"; // Import the Provider component
import {store,persistor} from "./utils/Ecom/store";
import { PersistGate } from 'redux-persist/integration/react'

const root = createRoot(document.getElementById("root")); // Create a root instance
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <APP />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
