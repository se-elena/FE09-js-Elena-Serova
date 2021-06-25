function checkPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1] - i) {
      return true;
    } else {
      return false;
    }
  }
}

  function testWord(word, isTrue) {
    if (checkPalindrome(word) === isTrue) {
      console.log('палиндром');
    } else {
      console.log('не палиндром');
    }
  }


function testPalindrome() {
  testWord('шалаш', true);
  testWord('level', true);
  testWord('eoe', true);
  testWord('пляж', false);
  }

testPalindrome();
  
/*   checkPalindrome('шалаш');
  checkPalindrome('шалашик');
  checkPalindrome('оео'); */