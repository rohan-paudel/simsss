const frame = document.getElementById("frame");
const btnStudents = document.getElementById("button_students");
const btnApplications = document.getElementById("button_applications");

btnStudents.onclick = function() {
    frame.src = "students.html";
}

btnApplications.onclick = function() {
    frame.src = "./applications.html";
}