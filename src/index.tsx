import * as React from "react";
import { createRoot } from 'react-dom/client';
import App from './app';

//render react component
const root = createRoot(document.getElementById("root"));
root.render(<App />)
