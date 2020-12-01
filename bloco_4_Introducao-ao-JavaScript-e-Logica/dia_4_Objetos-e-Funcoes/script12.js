function finalWorld (word, ending) {
  if (word.substr(-ending.length) === ending){
    return true;
  } else {
    return false;
  }
}
console.log (finalWorld('trybe','be'))