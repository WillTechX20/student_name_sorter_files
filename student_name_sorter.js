function sortStudentNames(){
    var studentNames=[document.querySelector('input[type="text"][data-student-num="1"]').value, document.querySelector('input[type="text"][data-student-num="2"]').value,
    document.querySelector('input[type="text"][data-student-num="3"]').value, document.querySelector('input[type="text"][data-student-num="4"]').value];

    console.log(studentNames);
    studentNames=studentNames.sort();
    document.querySelector('input[type="text"][data-student-num="1"]').value=studentNames[0];
    document.querySelector('input[type="text"][data-student-num="2"]').value=studentNames[1];
    document.querySelector('input[type="text"][data-student-num="3"]').value=studentNames[2];
    document.querySelector('input[type="text"][data-student-num="4"]').value=studentNames[3];
}