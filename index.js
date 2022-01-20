const inputBox = document.getElementById('inputBox');
const submitButton = document.getElementById('submitButton');
const listSection = document.getElementById('listsection');
let key = 1;
let currentItemKey; // a common number shared by all elements uniquely within each list item
document.addEventListener('DOMContentLoaded', () => {
  submitButton.addEventListener('click', handleSubmit);
});

async function handleSubmit(event) {
  event.preventDefault(event);
  const newListItem = document.createElement('p');
  newListItem.classList.add('listItem'); // <p class='listItem'>*innerHTML*<button /></p>
  newListItem.setAttribute('id', `listItem${key}`);
  newListItem.innerHTML = `${inputBox.value}
  <button id='deleteBtn${key}'>delete</button> 
  <button id='editBtn${key}'>edit</button>`;
  listSection.appendChild(newListItem);
  const deleteButton = document.getElementById(`deleteBtn${key}`);
  const editButton = document.getElementById(`editBtn${key}`);
  editButton.addEventListener('click', handleEdit);
  deleteButton.addEventListener('click', handleDelete);
  inputBox.value = '';
  key += 1;
}

function handleDelete(event) {
  if (submitButton.textContent !== 'edit') {
    event.target.parentElement.remove();
  }
}

function handleEdit(event) {
  currentItemKey = event.target.id.slice(-1);
  inputBox.value = event.target.parentElement.textContent.slice(0, -17);
  // edit + delete = 10, plus spaces and formatting
  submitButton.textContent = 'edit'; // acts as a 'state' of the app in 'editing mode'
  submitButton.removeEventListener('click', handleSubmit);
  submitButton.addEventListener('click', updateListItem);
}

function updateListItem(event) {
  event.preventDefault();
  const currentListItem = document.getElementById(`listItem${currentItemKey}`);
  currentListItem.innerHTML = `${inputBox.value} 
  <button id='deleteBtn${currentItemKey}'>delete</button>
  <button id='editBtn${currentItemKey}'>edit</button>`;
  const deleteButton = document.getElementById(`deleteBtn${currentItemKey}`);
  const editButton = document.getElementById(`editBtn${currentItemKey}`);
  editButton.addEventListener('click', handleEdit);
  deleteButton.addEventListener('click', handleDelete);
  submitButton.textContent = 'submit'; // also effectively turns off 'editing mode'
  submitButton.removeEventListener('click', updateListItem);
  submitButton.addEventListener('click', handleSubmit);
  inputBox.value = '';
}

module.exports = {
  submitButton,
  listSection,
  handleSubmit,
  key,
};
