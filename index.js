const inputBox = document.getElementById('inputbox');
const submitButton = document.getElementById('submit');
const listSection = document.getElementById('listsection');

function handleSubmit(event) {
  event.preventDefault(event);
  const inputText = inputBox.value;
  const newListItem = document.createElement('p');
  newListItem.classList.add('listItem'); // <p class='listItem'>*innerHTML*</p>
  newListItem.innerHTML = inputText;
  listSection.appendChild(newListItem);
  inputBox.value = '';
  // master branch
}

submitButton.addEventListener('click', handleSubmit);