let employeeList = [];

document.querySelector("#add-user").addEventListener('click', addEmployee);

function addEmployee(data){
    data.preventDefault();

    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const age = document.getElementById("age").value;

    if(name.trim()==='' || profession.trim()==='' || age.trim()===''){
        document.getElementById("error-msg").innerHTML = "Error : Please Make Sure All the fields are filled before in an employee !";
        document.getElementById("success-msg").innerHTML = "";
    }

    const id = employeeList.length +1;
    const employee = { id, name, profession, age};
    employeeList.push(employee);

    document.getElementById("success-msg").innerHTML = "Success : Employee Added!";
    document.getElementById("error-msg").innerHTML = "";

    ShowEmployees();
    document.querySelector("form").reset();
}

function ShowEmployees(){
    const OuterEmployeeContainer = document.getElementById("Employee-list");
    OuterEmployeeContainer.innerHTML = ' ';

    employeeList.forEach(employee => {
        const employeeContainer = document.createElement('div');
        employeeContainer.className = 'employee-box';

        const employeeData = document.createElement('div');
        employeeData.className = 'employee-card';

        const empID = document.createElement('span');
        empID.innerText = `${employee.id}.`;
        employeeData.appendChild(empID);

        const empName = document.createElement('span');
        empName.textContent = `Name : ${employee.name}`;
        employeeData.appendChild(empName);

        const empProf = document.createElement('span');
        empProf.textContent = `Profession : ${employee.profession}`;
        employeeData.appendChild(empProf);

        const empAge = document.createElement('span');
        empAge.textContent = `Age : ${employee.age}`;
        employeeData.appendChild(empAge);

        employeeContainer.appendChild(employeeData);

        const deleteData = document.createElement('button');
        deleteData.className = 'del-employee';
        deleteData.textContent = 'Delete User';
        deleteData.addEventListener('click', () => {
            const id = employeeList.findIndex(emp => emp.id === employee.id);
            employeeList.splice(id, 1);
            ShowEmployees();
        });

        employeeContainer.appendChild(deleteData);
        
        OuterEmployeeContainer.appendChild(employeeContainer)
    });
};