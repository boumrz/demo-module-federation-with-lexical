import { importShared } from './__federation_fn_import.js';
import Header, { j as jsxRuntimeExports } from './__federation_expose_Header-0228cbf6.js';
import { r as reactDomExports } from './__federation_shared_react-dom.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

const App$1 = '';

function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "asdassaas",
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {})
  ] });
}

const index = '';

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
