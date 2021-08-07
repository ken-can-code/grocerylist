const inputBox = document.getElementById('inputbox');
const submitButton = document.getElementById('submit');
const listSection = document.getElementById('listsection');
let idAssigner = 0;
let isEditing = false;

function handleSubmit(event) {
  event.preventDefault();
  if (inputBox.value.length > 0) {
    event.preventDefault();
    idAssigner += 1;
    const newListItem = document.createElement('p');
    newListItem.classList.add('listItem'); // <p class='listItem'>*innerHTML*<button /></p>
    newListItem.setAttribute('id', `listItem${idAssigner}`);
    newListItem.innerHTML = `${inputBox.value} 
    <button id='deleteBtn${idAssigner}'>delete</button>
    <button id='editBtn${idAssigner}'>edit</button>`;
    listSection.appendChild(newListItem);
    const deleteButton = document.getElementById(`deleteBtn${idAssigner}`);
    const editButton = document.getElementById(`editBtn${idAssigner}`);
    editButton.addEventListener('click', handleEdit);
    deleteButton.addEventListener('click', handleDelete);
    inputBox.value = '';
  }
  // console.log('listItem', newListItem);
  // features branch
}

function handleEdit(event) { // when edit button is pushed, this function is invoked
  // console.log('handleEvent', event.target.id);
  isEditing = true;
  submitButton.innerHTML = 'Edit Item';
  const key = event.target.id.slice(-1);
  const currentListItem = document.getElementById(`listItem${key}`);
  inputBox.value = currentListItem.textContent.slice(0, -17); // Not 100% sure why -15
  submitButton.removeEventListener('click', handleSubmit);
  submitButton.addEventListener('click', updateListItem);
  function updateListItem(event) {
    event.preventDefault();
    currentListItem.innerHTML = `${inputBox.value}
    <button id='deleteBtn${key}'>delete</button>
    <button id='editBtn${key}'>edit</button>`;
    submitButton.innerHTML = 'Add Item';
    const deleteButton = document.getElementById(`deleteBtn${key}`);
    const editButton = document.getElementById(`editBtn${key}`);
    editButton.addEventListener('click', handleEdit);
    deleteButton.addEventListener('click', handleDelete);
    submitButton.removeEventListener('click', updateListItem);
    submitButton.addEventListener('click', handleSubmit);
    inputBox.value = '';
    isEditing = false;
  }
}

function handleDelete(event) {
  if (!isEditing) {
    const elementToDelete = document.getElementById(`listItem${event.target.id.slice(9)}`);
    elementToDelete.remove();
  }
}

submitButton.addEventListener('click', handleSubmit);

// const newListItem = <p>USERINPUT <button>delete</button> <button>edit</button></p>

// const obj = ['hello',
// 'goooby',
// 'icepoop',
// 'goblin',
// 'phoney',
// 'something',
// 'blarg',
// 'poop',
// 'microphone'];
