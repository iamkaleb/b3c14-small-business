
const employeeCards = {
    employeeCard (employee) {
    return `
        <article class="employee">
            <header class="employee__name">
                <h1>${employee.employee_name}</h1>
            </header>
            <section class="employee__department">
                Works in the ${employee.department.department_name} department
            </section>
            <section class="employee__computer">
                Currently using a ${employee.computer.computer_type}
            </section>
        </article>
    `
}
}

export default employeeCards