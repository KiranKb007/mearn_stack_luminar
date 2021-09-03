var employee={
    eid:1001,
    e_name:"ram",
    desig:"developer",
    salary:5000
}

// console.log(employee["e_name"]);

// console.log("exp" in employee);

// employee.exp=1;
// console.log(employee);

// console.log("exp" in employee?employee.exp+1:employee.exp=1);
// console.log(employee);

for (let key in employee){
    console.log(key);
    console.log(employee[key]);
}
