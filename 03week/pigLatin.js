function handleClick() {
  console.log("Its Clickin");

  var inputElement = document.getElementById("word");
  var wordToTranslate = inputElement.value;

  console.log("Word to Translate:", wordToTranslate);

  let translation = pigLatin(wordToTranslate);
  console.log("Translated word: ", translation);

  let spanElement = document.getElementById("translatedWord");
  spanElement.innerText = translation;

  console.log("End of handleClick");
}

function detectVowel(word) {
  let vowels = "aeiou";

  for (let i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i]) !== -1) {
      return i;
    }
  }
}

function pigLatin(word) {
  word = word.toLowerCase().trim();

  let firstVowel = detectVowel(word);

  if (firstVowel > 0) {
    return word.slice(firstVowel) + word.slice(0, firstVowel) + "ay";
  } else {
    return word + "yay";
  }
}
