import HoverCounter from "../HOC/HoverCounter";
import Counter from "../renderProps14/Counter";
import ThemeContext from "../contextAPI/contexts/themeContext";
import React from "react";
import { useContext } from "react";

export default function Content() {
  const context = useContext(ThemeContext);
  const { theme, switchTheme } = context;

  console.log("Content rendered.");

  return (
    <div>
      <h1>This is a content.</h1>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      </Counter>
    </div>
  );
}
