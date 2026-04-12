//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.


//p: str, only letters
//return: boolean. true if str has no repeating characters (ignoring case)

function isIsogram(str){
//make a new Set
//does the length of the new set equal the length of the string? if so, return true

  let obj = new Set (str.toLowerCase())
  return obj.size === str.length ? true: false
}

isIsogram('dallas') //false
isIsogram('idk')//true