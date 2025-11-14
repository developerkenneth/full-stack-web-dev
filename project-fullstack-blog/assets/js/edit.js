const url = window.location.search ;
const urlParameters = new URLSearchParams(url);
const id = urlParameters.get("id");
const form = document.querySelector("form");
const titleField = document.querySelector("#title");
const authorField = document.querySelector("#author");
const bodyField = document.querySelector("#body");


function isEmpty(data) {
  return data.length < 1 ? true : false;
}

function validation() {
  const errors = [];
  const title = titleField.value.trim();
  const body = bodyField.value.trim();
  const author = authorField.value.trim();

  if (isEmpty(title)) errors.push("title should not be empty");

  if (isEmpty(body)) errors.push("body should not be empty");

  if (isEmpty(author)) errors.push("author should not be empty");

  if (isEmpty(errors)) {
    const date = new Date();
    const postDate = ` ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} `;
    const data = {
      title: title,
      body: body,
      author: author,
      date: postDate,
    };

    return data;
  } else {
    const errorString = errors.join(", ");
    alert(errorString);
  }
}
async function handleSubmit (e){
  e.preventDefault();
  const data = validation();
  
  if (!isEmpty(data)) {
    const url = `http://localhost:3000/posts/${id}`;
    const response = fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(data)
    });
  }

    alert("edit  post was successfully");
    window.location.reload();

}


form.addEventListener("submit", handleSubmit);
async function showPost() {
  const url = `http://localhost:3000/posts/${id}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    titleField.value = data.title;
    authorField.value = data.author
    bodyField.value = data.body




  } catch (error) {

  }
}

showPost();