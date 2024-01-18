/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    var ransomNoteLetters = ransomNote.split("");
    var magazineLetters = magazine.split("");

    for (var i = ransomNoteLetters.length - 1; i >= 0; i--) {

      for (var j = 0; j < magazineLetters.length; j++) {
        if (magazineLetters[j] === ransomNoteLetters[i]) {
          magazineLetters.splice(j, 1);
          ransomNoteLetters.pop();
          break;
        }
      }
    }

    console.log(ransomNoteLetters)

    return !ransomNoteLetters.length;
  };

  const ransomNote = "fihjjjjei";
  const magazine = "hjibagacbhadfaefdjaeaebgi";

  console.log(canConstruct(ransomNote, magazine));
