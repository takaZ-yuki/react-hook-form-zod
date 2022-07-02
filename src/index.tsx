import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import App2 from "./App2";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <h2>React Hook Form</h2>
      <App />
    </div>
    <hr />
    <div>
      <h2>React Hook Form + Zod</h2>
      <App2 />
    </div>
  </StrictMode>
);
