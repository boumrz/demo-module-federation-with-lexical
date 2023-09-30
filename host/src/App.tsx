import { lazy, Suspense } from "react";
import "./App.css";

/* @vite-ignore */
// const RemoteComponent = lazy(() =>
//   import("remoteApp/Header").then((module: any) => ({ default: module.Header }))
// );

const Header = lazy(() => import("headerApp/Header"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading Remote Component...</div>}>
        <Header />
      </Suspense>
    </>
  );
}

export default App;
