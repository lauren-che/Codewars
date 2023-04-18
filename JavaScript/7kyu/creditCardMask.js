// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  // The regular expression /(.)(?=.{4,}$)/g matches any character (represented by the dot) that is followed by at least four other characters (represented by the positive lookahead (?=.{4,}$)), and the global flag g makes sure that all matches are replaced. The replacement string is a single "#" symbol.
  return cc.replace(/.(?=.{4,}$)/g, '#');
}