// Problem 1
const employees = [
    {
      firstName: "Sam",
      department: "Tech",
      designation: "Manager",
      salary: 40000,
      raiseEligable: true,
    },
    {
      firstName: "Mary",
      department: "Finance",
      designation: "Trainee",
      salary: 18500,
      raiseEligable: true,
    },
    {
      firstName: "Bill",
      department: "HR",
      designation: "Executive",
      salary: 21200,
      raiseEligable: false,
    }
    ]

    console.log('Problem 1', employees);

// Problem 2
const company = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: employees,
};

console.log('Problem 2',company);

// Problem 3
function addEmployee(firstName, department, designation, salary, raiseEligable) {
  const person = { firstName, department, designation, salary, raiseEligable };
  employees.push(person);
}
  addEmployee("Anna", "Tech", "Executive", 25600, false);
  console.log('Problem 3', employees);

// Problem 4
let totalSalary = 0;
for (const id in employees) {
  totalSalary += employees[id].salary;
}
console.log('Problem 4', totalSalary);

// Problem 5
for (const id in employees) {
  if (employees[id].raiseEligable) {
    employees[id].salary *= 1.1;
    employees[id].raiseEligable = false;
  }
}
console.log('Problem 5', employees);

// Problem 6
const peoplewfh = ['Anna', 'Sam'];
  for (const id in employees) {
    employees[id].wfh = peoplewfh.includes(employees[id].firstName);
  }
console.log('Problem 6', employees);
