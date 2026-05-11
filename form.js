const studentsData = {username:'', password:''};

function handelFormData(){
    const {value, name} = event.target;
    console.log(value, name);
    studentsData[name] = value;
}

function submitFormData(){
    event.preventDefault();
    console.log(studentsData);
}