document.addEventListener('DOMContentLoaded', function(e) {

    // unenrol a student
    const list = document.querySelector("#student-list ul");
    list.addEventListener("click", function(e) {
        if (e.target.className == "delete") {
            if (confirm('Are you sure you want to unenrol this student?')) {
                const li = e.target.parentElement;
                list.removeChild(li);
            }
        }
    });

    //forms
    const addStudent = document.querySelector('#add-student');

    //enrol a student 
    const addForm = document.forms["add-student"];
    addForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        //console.log(value);

        //creating elements
        const li = document.createElement("li");
        const studentName = document.createElement("span");
        const deleteBtn = document.createElement("span");

        //add class
        studentName.classList.add('name');
        deleteBtn.classList.add('delete');

        // add content
        deleteBtn.textContent = 'Unenroll';
        studentName.textContent = value;

        //append to DOM
        li.appendChild(studentName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });


    //filter students
    const searchBar = document.forms['search-student'].querySelector('input');
    searchBar.addEventListener('keyup', function(e) {
        const term = e.target.value.toLowerCase();
        const students = list.getElementsByTagName('li');
        Array.from(students).forEach(function(student) {
            const title = student.firstElementChild.textContent;
            if (title.toLowerCase().indexOf(term) != -1) {
                student.style.display = 'block';
            } else {
                student.style.display = 'none';
            }
        });
    });


});