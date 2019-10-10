module.exports = function check(str, bracketsConfig) {
  // your solution
  for (i = str.length; i >= 0; i--){
    for (j = 0; j < bracketsConfig.length; j++){
      str = str.replace(bracketsConfig[j].join(''), '');
    }
  }
  return !str;
}
