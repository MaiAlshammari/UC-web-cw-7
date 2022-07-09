// عرف المصفوفة هنا

const courses =[];

function addCourse() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let phone = document.getElementById("phone").value;
    let course = document.getElementById("course").value;
    let newCourse=[];
    newCourse.push({name,id,phone,course});
    newCourse=courses;
    load();
    save();
  }
  
  function load() {
    let container = document.getElementById("container");
courses.forEach((courses) =>
{
    container.innerHTML +=`<div>
<h1>${courses.name} - ${courses.id}</h1>
    <h3>${item.course}</h3>
    </div>`
});
 }
// بونص
 courses.pop();

 function save()
 {

    localStorage.setItem("courses",JSON.stringify(courses));

 }
  
 function read()
 {
    courses= JSON.parse(localStorage.getItem("courses")|| []);
    load();
 }

 read();

//  بونص
 localStorage.removeItem("courses");
