import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";
import App from "./App";

const ele = document.getElementById("root");

const root = createRoot(ele);

root.render(<App />);
