const poemList = document.querySelector("#poem-list");
const displayPoem = document.querySelector("#display-poem");

function isEmpty(string) {
  if (!string) {
    return true;
  } else {
    return false;
  }
}
function handleSelect(e) {
  const selected = e.target.value;

  if (isEmpty(selected) == false) {
    //send a fetch request
    const url = `poems/${selected}.txt`;

    // first approach to using the fetch api
    const result = fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status}`);
        }
        return res.text();
      })
      .then((text) => {
        displayPoem.textContent = text ;

      }).catch((e)=>{
        console.log(`this is the error that we found! ${e}`);
      });

  }
}
poemList.addEventListener("change", handleSelect);
