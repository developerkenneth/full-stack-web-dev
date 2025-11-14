const postContainer = document.querySelector("#posts-container");


function deletePost (className){
  const deleteButtons = document.querySelectorAll(`.${className}`);
  deleteButtons.forEach((button)=>{
      button.addEventListener("click", (e)=>{
          e.preventDefault()
          const feedback = confirm("are you sure you want to delete this post?");

      })
  })
}
// fetch post
async function fetchPost() {
  // get all post url
  const url = "http://localhost:3000/posts";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const posts = await response.json();
    if (posts.length < 1) {
      postContainer.textContent = "No blog post found";
    } else {

      let postCard = ``;

      posts.forEach((post) => {
        postCard += `<div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static"> <strong
              class="d-inline-block mb-2 text-primary-emphasis">${post.author}</strong>
            <h3 class="mb-0">${post.title}</h3>
            <div class="mb-1 text-body-secondary">${post.date}</div>
            <p class="card-text mb-auto">${post.body.slice(0, 50)}...</p> <a href="edit.html?id=${post.id}" class="icon-link gap-1 icon-link-hover stretched-link">
              Edit post
              <svg class="bi" aria-hidden="true">
                <use xlink:href="#chevron-right"></use>
              </svg> </a>

              
              <button id="${post.id}" class=" btn btn-danger icon-link gap-1 icon-link-hover stretched-link">
              Delete post </button>
          </div>
          <div class="col-auto d-none d-lg-block"> <svg aria-label="Placeholder: Thumbnail" class="bd-placeholder-img "
              height="250" preserveAspectRatio="xMidYMid slice" role="img" width="200"
              xmlns="http://www.w3.org/2000/svg">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                dy=".3em">Thumbnail</text>
            </svg> </div>
        </div>
      </div>`;
      });

      postContainer.innerHTML = postCard ;
      deletePost("btn");


    }
  } catch (error) {}
}

fetchPost();
