document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const newForm = document.querySelector("form");
newForm.addEventListener("submit", function(e){
      e.preventDefault();

      const toDo = e.target.querySelector("#new-task-description").value;
      addToDo(toDo);
      newForm.reset()
 })
})
function addToDo(toDo){
 const theLi = document.createElement('li');
 const btn = document.createElement('button')
 btn.textContent = 'x'  
 theLi.textContent = toDo
 theLi.appendChild(btn);  
 document.querySelector('#tasks').appendChild(theLi)
 btn.addEventListener('click', handleDelete)
}
function handleDelete(e){
 e.target.parentNode.remove()
}