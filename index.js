const inputBox = document.getElementById('inputbox');
const submitButton = document.getElementById('submit');

function handleSubmit(event) {
  event.preventDefault(); // probably not working
  const inputText = inputBox.value;
  const newListItem = document.createElement('p');
  newListItem.classList.add('listItem'); // <p class='listItem'>*innerHTML*</p>
  newListItem.innerHTML = inputText;
  // how to place it in the listsection area
  // prevent default action (refresh the page needs to be prevented)
  // reset the inbox box to blank
  inputBox.value = '';
}

submitButton.addEventListener('click', handleSubmit);