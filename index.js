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
  newListItem.innerHTML = `${inputText} 
  <button id='deleteBtn${idAssigner}'>delete</button>
  <button id='editBtn${idAssigner}'>edit</button>`;
  listSection.appendChild(newListItem);
  const deleteButton = document.getElementById(`deleteBtn${idAssigner}`);
  const editButton = document.getElementById(`editBtn${idAssigner}`);
  editButton.addEventListener('click', handleEdit);
  deleteButton.addEventListener('click', handleDelete);
  inputBox.value = '';
  console.log('listItem', newListItem);
  // features branch
}

function handleEdit(event) {
  console.log('handleEvent', event.target.id);
  const key = event.target.id.slice(-1);
  const currentListItem = document.getElementById(`listItem${key}`);
  inputBox.value = currentListItem.textContent.slice(0, -17); // Not 100% sure why -15

  // populate input box with text in the list item (KEY)

// when clicked, place inputText back into input box (INPUTBOX.value)
// select the list item, and populate input box with INPUTTEXT
// when submit, 'CORRECT' the listItem rather than add a new item
// update event listener on the submit button
// submit button should now 'update' current list item rather than add new (update innerHTML)
// empty the input box after submit
// reset behavior of submit button
}

function handleDelete(event) {
  const elementToDelete = document.getElementById(`listItem${event.target.id.slice(9)}`);
  elementToDelete.remove();
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