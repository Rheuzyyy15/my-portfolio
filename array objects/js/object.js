function showEmployees() {
    let table = document.getElementById('employee').getElementsByTagName('tbody')[0];
    table.innerHTML = "";

    employees.forEach(element => {
        let newRow = table.insertRow();
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.innerHTML = element.emp_id;
        cell2.innerHTML = element.name;
        cell3.innerHTML = element.position;
    });
}

function addEmployee() {
    let empId = document.getElementById('emp_id').value;
    let empName = document.getElementById('emp_name').value;
    let empPosition = document.getElementById('emp_position').value;

    if (empId && empName && empPosition) {
        employees.push({
            "emp_id": empId,
            "name": empName,
            "position": empPosition
        });

        showEmployees();
        document.getElementById('emp_id').value = "";
        document.getElementById('emp_name').value = "";
        document.getElementById('emp_position').value = "";
    }
}
