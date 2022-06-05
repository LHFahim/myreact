import Section from "./components/contextAPI/Section";
import ClickCounter from "./components/HOC/ClickCounter";
import Counter from "./components/renderProps14/Counter";
import React from "react";
import ThemeContext from "./components/contextAPI/contexts/themeContext";

export default class App extends React.Component {
  state = {
    theme: "dark",
  };

  switchTheme = () => {
    this.setState(({ theme }) => {
      if (theme === "dark") {
        return {
          theme: "light",
        };
      }
      return {
        theme: "dark",
      };
    });
  };

  render() {
    const { theme } = this.state;
    return (
      <div className="app">
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <ThemeContext.Provider
          value={{ theme: theme, switchTheme: this.switchTheme }}
        >
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}
