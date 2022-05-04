export default function createKey(keyValue) {
  const key = document.createElement('div');
  key.classList.add('key');
  key.textContent = keyValue;
  return key
}