const studentsData = {username:'', password:''};

function handelFormData(){
    const {value, name} = event.target;
    console.log(value, name);
    studentsData[name] = value;
}

async function submitFormData(){
    event.preventDefault();
    try {
        const resp = await fetch("http://127.0.0.1:8000/api/user/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(studentsData)
        })
        if(!resp.ok){
            const errData = await resp.json();
            console.error("error", errData);
            return;
        }

        const data = await resp.json();
        console.log("success", data);
        // 
        window.location.href = "/dashboard.html";
    }catch (error) {
        console.error("error", error);
    }
}

const formData = new FormData();

formData.append("username", studentsData.username);
formData.append("password", studentsData.password);

body: formData 