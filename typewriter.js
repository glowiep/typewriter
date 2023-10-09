const sentence = "hello there from lighthouse labs\n";
const staggered = function() {
  let index = 0;
  const printNextChar = function() {
    if (index < sentence.length) {
      process.stdout.write(sentence[index]);
      index++;
      setTimeout(printNextChar, 50);
    }
  };
  printNextChar();
};

staggered();
