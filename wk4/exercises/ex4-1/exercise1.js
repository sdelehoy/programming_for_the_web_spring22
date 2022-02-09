const myEmptyDiv = document.querySelector('#myEmptyDiv');
const h1 = document.createElement('h1');
h1.innerHTML = 'Llamas Make Great Trail Companions';
h1.style.cursor = 'pointer';
h1.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(h1);
function handleHeadingClick () {
  document.body.style.backgroundColor = 'chartreuse';
}
