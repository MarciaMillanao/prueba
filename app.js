let result = '';
const transformUpperCase = (str) => {
  for (let i = 0; i < str.length; i++) {
    let character = str[i].toUpperCase();
    console.log(character);
    result += character;
  } 
  console.log(result)
  return result;
}