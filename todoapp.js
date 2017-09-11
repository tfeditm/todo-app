document.addEventListener("DOMContentLoaded", function(){
  
  ///// Create and set HTML Elements \\\\\
  
  var pageTitle = document.createElement("h1");
  pageTitle.id = "page-title";
  pageTitle.innerHTML = "My Things To Do";
  
  var toDoWrapper = document.createElement("div");
  toDoWrapper.id = "todo-wrapper";
  
  var toDoForm = document.createElement("form");
  toDoForm.id = "todo-form";
  
  var toDoFormText = document.createElement("input");
  toDoFormText.id = "todo-form-text";
  toDoFormText.setAttribute("type", "text");
  toDoFormText.setAttribute("placeholder", "Things To Do");
  toDoFormText.setAttribute("autofocus", "true");
  
  var toDoFormButton = document.createElement("button");
  toDoFormButton.id = "todo-form-submit";
  toDoFormButton.setAttribute("type", "button");
  toDoFormButton.innerHTML = "To The List";
  
  var toDoList = document.createElement("ul");
  toDoList.id = "todo-list";
  
  var newListButton = document.createElement("button");
  newListButton.id = "new-list-button";
  newListButton.setAttribute("type", "button");
  newListButton.innerHTML = "New List";
  newListButton.style.display = "none";
  
  
  ///// Insert the created HTML Elements \\\\\
  
  document.body.appendChild(pageTitle);
  document.body.appendChild(toDoWrapper);
  toDoWrapper.appendChild(toDoForm);
  toDoForm.appendChild(toDoFormText);
  toDoForm.appendChild(toDoFormButton);
  toDoWrapper.appendChild(toDoList);
  toDoWrapper.appendChild(newListButton);
  
  
  ///// Get the things \\\\\

  function getThings(t) {
    if(t !== "") {
      var toDoListItem = document.createElement("li");
      var text = document.createTextNode(t);
      toDoListItem.appendChild(text);
      toDoList.appendChild(toDoListItem);
      toDoForm.reset();
      toDoFormText.focus();
      newListButton.style.display = "inline-block";
    }
  }
  
  toDoFormButton.addEventListener("click", function() {
    getThings(toDoFormText.value);
  });
  
  toDoFormText.addEventListener("keypress", function(event) {
    if(event.keyCode == 13) {
      event.preventDefault();
      getThings(toDoFormText.value);
    }
  });
  
  
  ///// Add event to the new list button  \\\\\
  
  newListButton.addEventListener("click", function() {
    while (toDoList.firstChild) {
      toDoList.removeChild(toDoList.firstChild);
    }
    toDoFormText.focus();
  });
  
  
  ///// Style list items \\\\\
  
  toDoList.addEventListener("click", function(event) {
    if(event.target && event.target.nodeName === "LI") {
      var item = event.target;
        if (item.style.textDecoration === "none") {
          item.style.textDecoration = "line-through";
        } else {
          item.style.textDecoration = "none";
        }
    }
  });
  
  
});

