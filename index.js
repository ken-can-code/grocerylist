const inputBox = document.getElementById('inputbox');
const submitButton = document.getElementById('submit');
const listSection = document.getElementById('listsection');
let isEditing = false;
let key = 0;
let currentItemKey; // a common number shared by all elements uniquely within each list item

function handleSubmit(event) {
  key += 1;
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
  // kensolo branch
}

function handleEdit(event) {
  isEditing = true;
  currentItemKey = event.target.id.slice(-1);
  const currentListItem = document.getElementById(`listItem${currentItemKey}`);
  inputBox.value = currentListItem.textContent.slice(0, -17); // Not sure why -17 but it works
  submitButton.innerHTML = 'edit'
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
  submitButton.innerHTML = 'submit';
  submitButton.removeEventListener('click', updateListItem);
  submitButton.addEventListener('click', handleSubmit);
  inputBox.value = '';
  isEditing = false;
}

function handleDelete(event) {
  if (!isEditing) {
    currentItemKey = event.target.id.slice(-1);
    const currentListItem = document.getElementById(`listItem${currentItemKey}`);
    currentListItem.remove();
  }
}

submitButton.addEventListener('click', handleSubmit);
