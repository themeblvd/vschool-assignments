// @link https://coursework.vschool.io/employee-records/

function Employee( name, job, salary, status ) {
    this.name = name;
    this.job = job;
    this.salary = salary;
    this.status = status ? status : 'Full Time';
}

Employee.prototype.printEmployeeForm = function() {
    console.log( `Name: ${this.name}, Job Title: ${this.job}, Salary: ${this.salary}, Status: ${this.status}` );
}

var employees = [];

employees.push( new Employee( 'Jack', 'CEO', '$200K' ) );

employees.push( new Employee( 'Alfred', 'Janitor', '$22K', 'Part Time' ) );

employees.push( new Employee( 'Mark', 'Developer', '$70K' ) );

for ( let i = 0; i < employees.length; i++ ) {
    employees[i].printEmployeeForm();
}
