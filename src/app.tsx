import React, { Suspense, lazy } from "lib/react";

import type AccuralProps from "application-a/types/AccuralInterface";

const Accural = lazy(
  () => import("billingApp/accural")
) as unknown as typeof AccuralProps;

const App = () => {
  return (
    <ul>
      bbbbbbbbbbbb
      <Suspense fallback="Loading Button">
        <Accural a={"aaaaaaaaaaaaaaaaa"} b={"bbbbbbbbbbbbbb"} />
      </Suspense>
    </ul>
  );
};

export default App;
