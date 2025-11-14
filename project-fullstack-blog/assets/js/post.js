const form = document.querySelector("form");
const titleField = document.querySelector("#title");
const authorField = document.querySelector("#author");
const bodyField = document.querySelector("#body");


async function fetchAllPost(){
  const url = "http://localhost:3000/posts";
  try{
      const response = await fetch(url);

      if(!response.ok){
        throw new Error(response.status);
      }

      const data = await response.json();
      return data ;

  }catch(error){
      console.error(error);
  }
}

fetchAllPost();
function isEmpty(str) {
  return str.length < 1 ? true : false;
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
async function handleSubmit(e) {
  e.preventDefault();

  const previousPosts = await fetchAllPost();
  const nextId = previousPosts.length + 1;
  const data = validation();

  data.id = `${nextId}` ;

  if (!isEmpty(data)) {
    const url = "http://localhost:3000/posts";
    const response = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(data)
    });
  }

  titleField.valu = "";
  bodyField.value = "";
  authorField.value = "";

  alert("added post successfully");
}

form.addEventListener("submit", handleSubmit);
