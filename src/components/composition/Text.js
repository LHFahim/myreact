export default function Text({ addEmoji }) {
  const text = "I am a JS Dev";

  return <div>{addEmoji ? addEmoji(text, "😎") : text}</div>;
}
