export function getRandomEmoji() {
  const randomCode =
    Math.floor(Math.random() * (0x1f64f - 0x1f600 + 1)) + 0x1f600;
  return String.fromCodePoint(randomCode);
}
