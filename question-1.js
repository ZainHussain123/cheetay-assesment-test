const MAX = 26;
function chooseAndSwap(str, n) {
  let i = 0;
  let j = 0;
  var chk = [];
  for (i = 0; i < MAX; i++) {
    chk[i] = -1;
  }
  for (i = 0; i < n; i++) {
    if (chk[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] == -1) {
      chk[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] = i;
    }
  }
  for (i = 0; i < n; i++) {
    var flag = false;
    for (j = 0; j < str[i].charCodeAt(0) - 'a'.charCodeAt(0); j++) {
      if (chk[j] > chk[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]) {
        flag = true;
        break;
      }
    }
    if (flag) {
      break;
    }
  }
  if (i < n) {
    var ch1 = str[i];
    var ch2 = String.fromCharCode((j + 'a'.charCodeAt(0)));
    for (i = 0; i < n; i++) {
      if (str[i] == ch1) {
        str[i] = ch2;
      }
      else if (str[i] == ch2) {
        str[i] = ch1;
      }
    }
  }
  return str.join("");
}
let str = "ccad";
console.log(chooseAndSwap(str.split(''), str.length));
