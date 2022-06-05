import Emoji from "./Emoji";

export default class Text extends Emoji {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const decoratedText = this.addEmoji("I am JS dev", "😎");

    return super.render(decoratedText);
  }
}
