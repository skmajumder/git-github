const capitalizationName = function (name) {
  const names = name.split(" ");
  const nameUpper = [];
  names.map((word) => {
    nameUpper.push(word.replace(word[0], word[0].toUpperCase()));
  });
  return nameUpper.join(" ");
};

const newWord = capitalizationName("capitalization words");
console.log(newWord);
