/*
Assignment
Person prototype with first name, last and dob
Employee prototype employee number, starte date, salary
create employee array with 10 employees
Write a function that given the employee array and a target salary will return an array of employees with salary greater than the target salary.
*/

let Person = function(){};

Person.prototype.initialize =  function(fname,lname,dob) {
    this.fname = fname;
    this.lname = lname;
    this.dob   = dob;
}

const Employee = function (){}
Employee.prototype = new Person ();
Employee.prototype.empint = function (employeeno, startDate, salary){
    this.employeeno = employeeno;
    this.startDate = startDate;
    this.salary = salary;

}


const array = [];
const emp  = new Employee ();
emp.initialize ("Ardy", "Raagas", new Date("2000, 1, 10"));
emp.empint (111, new Date("1990, 1, 12"), 2500);
const emp1  = new Employee ();
emp1.initialize ("James", "Fernandez", new Date("2001, 2, 21"));
emp1.empint (112, new Date("1990, 1, 12"), 3000);

const emp2  = new Employee ();
emp2.initialize ("Aaron", "Fernandez", new Date("2001, 3, 2"));
emp2.empint (113, new Date("1990, 1, 12"), 2500);

const emp3  = new Employee ();
emp3.initialize ("Renee", "Arpon", new Date("2003, 4, 14"));
emp3.empint (111, new Date("1991, 2, 22"), 3000);
const emp4 = new Employee ();
emp4.initialize ("Neo", "Bentura", new Date("2004, 2, 5"));
emp4.empint (111, new Date("1994, 5, 23"), 6500);
const emp5 = new Employee ();
emp5.initialize ("Stacy", "Fernando", new Date("2005, 12, 6"));
emp5.empint (111, new Date("1995, 6, 4"), 7500);
const emp6 = new Employee ();
emp6.initialize ("Finn", "Bernardo", new Date("2006, 10, 7"));
emp6.empint (111, new Date("1996, 7, 2"), 8000);
const emp7 = new Employee ();
emp7.initialize ("Alfred", "Uy", new Date("2007, 11, 8"));
emp7.empint (111, new Date("1997, 8, 5"), 9000);
const emp8 = new Employee ();
emp8.initialize ("Ryan", "Chan", new Date("2008, 8, 9"));
emp8.empint (111, new Date("1998, 9, 7"), 15000);
const emp9 = new Employee ();
emp9.initialize ("Mark", "Sy", new Date("2009, 3, 10"));
emp9.empint (111, new Date("1999, 10, 10"), 11000);

array.push(emp)
array.push(emp1)
array.push(emp2)
array.push(emp3)
array.push(emp4)
array.push(emp5)
array.push(emp6)
array.push(emp7)
array.push(emp8)
array.push(emp9)



const numEmployee = (list, tsalary) => { 
    let result =[];
    
    for (let i=0; i<list.length; i++){  
       if( list[i].salary > tsalary) {
        result.push(list[i])
       }
    }
    return result;
} 


console.table(array)
console.table(numEmployee(array,5000));



