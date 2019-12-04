function caesarCipherEncryptor(string, key) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let cipherStr = '';
  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    let newIdx = alphabet.indexOf(currentChar) + key;
    if (newIdx > 25) {
      newIdx = newIdx % 26;
    }
    cipherStr += alphabet[newIdx];
  }
  return cipherStr;
}

console.log('should equal abc -- ', caesarCipherEncryptor('abc', 26));

console.log('should equal abc -- ', caesarCipherEncryptor('abc', 52));

console.log('should equal fgh -- ', caesarCipherEncryptor('abc', 57));
