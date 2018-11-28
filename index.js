window.onload = () => {
  let nameInput = document.getElementById('name');
  const btn = document.getElementsByTagName('button')[0];
  const container = document.getElementById('root');
  
  btn.addEventListener('click', () => {
    let nameValue = nameInput.value;
    //console.log(nameValue)
    container.innerHTML = transformUpperCase(nameValue)
  })
}