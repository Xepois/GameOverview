import * as React from "react";
import { createRoot } from 'react-dom/client';

//import main-site
import App from './app';

//get react components
const bodyRoot = createRoot(document.getElementById("root"));

//render react components
bodyRoot.render(<App />)