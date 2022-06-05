class Context {
  constructor(value = null) {
    this.value = value;
  }

  Provider = ({ children, value }) => {
    this.value = value;
    return value;
  };

  Consumer = ({ children }) => children(this.value);
}

function createContext(value = null) {
  const context = new Context(value);

  return {
    provider: context.provider,
    Consumer: context.Consumer,
  };
}

export default createContext;
