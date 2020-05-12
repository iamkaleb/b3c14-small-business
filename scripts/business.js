import employeeCards from "./employeeCards.js"

const body = document.querySelector("body")

function renderEmployeeCards (employee) {
    body.innerHTML += employeeCards.employeeCard(employee)
}

function getEmployees() {
    return fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
                .then(res => res.json())
}

getEmployees()
.then(employees => employees.forEach(employee =>
    renderEmployeeCards(employee)
))