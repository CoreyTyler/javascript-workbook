"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
  }
  return word + "yay";
}

function translateNow() {
  var inputBox = document.getElementById("inputElement");

  var englishWord = inputBox.value;

  var pigWord = pigLatin(englishWord);

  var nowYouSeeIt = document.getElementById("outputElement");

  nowYouSeeIt.innerText = pigWord;
}

function getPrompt() {
  rl.question("word ", answer => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === "function") {
  describe("#pigLatin()", () => {
    it("should translate a simple word", () => {
      assert.equal(pigLatin("car"), "arcay");
      assert.equal(pigLatin("dog"), "ogday");
    });
    it("should translate a complex word", () => {
      assert.equal(pigLatin("create"), "eatecray");
      assert.equal(pigLatin("valley"), "alleyvay");
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin("egg"), "eggyay");
      assert.equal(pigLatin("emission"), "emissionyay");
    });
    it("should lowercase and trim word before translation", () => {
      assert.equal(pigLatin("HeLlO "), "ellohay");
      assert.equal(pigLatin(" RoCkEt"), "ocketray");
    });
  });
} else {
  getPrompt();
}
