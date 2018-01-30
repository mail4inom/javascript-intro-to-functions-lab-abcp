
function shout(string){
  return string.toUpperCase();
}
function whisper(string){
  return whisper.toLowerCase();
}
function logShout(string){
  console.log(string.toUpperCase());
}
function logWhisper(string){
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string){
  if (string.toLowerCase() === string) {
     return "I can't hear you!"
  }else if(string === string.toUpperCase()){
    return "YES INDEED!";
  }else{
    return "I love you, too."
  }
  return "Are you eating enough?";
}
