var studentNameStrs=[];

function submitStudentNames(){
    for(studentNameIndexNum=1; studentNameIndexNum<=4; studentNameIndexNum++){
        var studentNameStr=document.querySelector('input[data-student-num="'+studentNameIndexNum+'"]').value;

        studentNameStrs.push(studentNameStr);

        var studentNameLi=document.createElement('li');

        studentNameLi.innerText=studentNameStr;

        document.querySelector('ol').appendChild(studentNameLi);
        document.querySelector('p').innerText=document.querySelector('p').innerText+', Name: '+studentNameStr;
        
    }
}

function sortStudentNames(){
    studentNameStrs.sort();
    document.querySelector('ol').innerHTML='';
    document.querySelector('ul').innerHTML='';
    document.querySelector('p').innerText='';

    for(studentNameIndexNum=1; studentNameIndexNum<=4; studentNameIndexNum++){
        var studentNameStr=document.querySelector('input[data-student-num="'+studentNameIndexNum+'"]').value;

        studentNameStrs.push(studentNameStr);

        var studentNameLi=document.createElement('li');

        studentNameLi.innerText=studentNameStr;

        document.querySelector('ol').appendChild(studentNameLi);
        document.querySelector('p').innerText=document.querySelector('p').innerText+', Name: '+studentNameStr;
        
    }
}
