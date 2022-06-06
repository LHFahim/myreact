import React, { useState, useCallback, useMemo } from "react";
import ShowCount from "./components/reactHooks/useCallbackandMemo/ShowCount";
import Title from "./components/reactHooks/useCallbackandMemo/Title";
import Button from "./components/reactHooks/useCallbackandMemo/Button";
import Form from "./components/reactHooks/useRefforwardRef/Form";
import Time from "./components/reactHooks/useRefforwardRef/Time";

export default function App() {
  return (
    <div className="app">
      <Time />
    </div>
  );
}
