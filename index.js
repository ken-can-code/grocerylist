const inputBox = document.getElementById('inputbox');
const submitButton = document.getElementById('submit');
const listSection = document.getElementById('listsection');
let idAssigner = 0;

function handleSubmit(event) {
  idAssigner += 1;
  event.preventDefault(event);
  const inputText = inputBox.value;
  const newListItem = document.createElement('p');
  newListItem.classList.add('listItem'); // <p class='listItem'>*innerHTML*<button /></p>
  newListItem.setAttribute('id', `listItem${idAssigner}`);
  newListItem.innerHTML = `${inputText} <button id='deleteBtn${idAssigner}'>delete</button>`;
  listSection.appendChild(newListItem);
  const deleteButton = document.getElementById(`deleteBtn${idAssigner}`);
  deleteButton.addEventListener('click', handleDelete);
  inputBox.value = '';
  // features branch
}

function handleDelete(event) {
  const elementToDelete = document.getElementById(`listItem${event.target.id.slice(9)}`);
  elementToDelete.remove();
}

submitButton.addEventListener('click', handleSubmit);
