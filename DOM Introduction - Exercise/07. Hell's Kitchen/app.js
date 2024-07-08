function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   class Restaurant {
      constructor(name) {
         this.name = name;
         this.employees = {};
      }

      averageSalary() {   
         let salaries = Object.values(this.employees);   
         return (salaries.reduce((total, currentValue) => total + currentValue, 0) / salaries.length).toFixed(2);         
      }

      salaries() {
         return Object.entries(this.employees).sort((a, b) => a[1] + b[1]);
      }

      bestSalary() {
         return Object.values(this.employees).sort((a, b) => a + b)[0].toFixed(2);
      }
   }

   function onClick () {
      let input = document.getElementsByTagName('textarea')[0];
      let inputList = input.value.substring(1,(input.value.length-1)).split('",');
      
      for (i in inputList) {
         inputList[i] = inputList[i].trim().replace(/[\"\]\[]/g, '');
      }
      
      let rData = [];
      let restaurants = [];
      let currentEmployeesList = {};
      let bestRestaurant = {name:'', averageSalary: 0, salaries: {}, bestSalary: 0};
      let bestEmployees = {};
      

      for (line of inputList) {
         rData.push(line.split(' - '));
      }

      for (rest of rData) {
         currentEmployeesList = {};
         for (e of rest[1].split(', ')) {
            let [name, salary] = e.split(' ');
            currentEmployeesList[name] = Number(salary);
         }

         restaurants.push(new Restaurant(rest[0]))
         restaurants[restaurants.length - 1].employees = currentEmployeesList;
      }

      for (r of restaurants) {
         console.log(r);
         if (r.averageSalary() > bestRestaurant.averageSalary) {
            bestRestaurant.averageSalary = r.averageSalary();
            bestRestaurant.salaries = r.salaries();
            bestRestaurant.bestSalary = r.bestSalary();
            bestRestaurant.name = r.name;
            bestEmployees = r.employees;
         }
      }
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary} Best Salary: ${bestRestaurant.bestSalary}`
      
      for (e of Object.entries(bestEmployees)) {      
         document.querySelector('#workers p').textContent += `Name: ${e[0]} With Salary: ${e[1]} `;
      }
   }
}