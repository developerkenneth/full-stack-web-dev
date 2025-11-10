const btn = document.querySelector(".btn") ;
const age = document.querySelector("#age");
const student = document.querySelector("#name");
const about = document.querySelector("#about");
const school = document.querySelector("#school");



async function handleClick (){

    const url = "json/student.json";
    try{
        const res = await fetch(url);

        if(!res.ok){
          throw new Error(res.status);
        }

        const data = await res.json();
        age.textContent = `Age: ${data.age}`;
        school.textContent = `School: ${data.school}`;
        student.textContent = `Name: ${data.name}`;
        about.textContent = `About: ${data.aboutStudent}`;
    }catch(e){
      console.log(e);
    }finally{
      alert("loaded");
    }
 

}

btn.addEventListener("click", handleClick);