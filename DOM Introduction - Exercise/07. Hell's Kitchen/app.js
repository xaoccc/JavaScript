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
         return Object.entries(this.employees).sort((a, b) => b[1] - a[1]);
      }


   }

   function onClick () {

      let inputList = JSON.parse(document.querySelector('textarea').value);   
      
      let rData = [];
      let restaurants = [];
      let currentEmployeesList = {};
      let bestRestaurant = {name:'', averageSalary: 0, salaries: {}, bestSalary: 0};
      let bestEmployees = {};      

      for (let line of inputList) {
         rData.push(line.split(' - '));
      }

      for (let rest of rData) {
         currentEmployeesList = {};
         for (let e of rest[1].split(', ')) {
            let [name, salary] = e.split(' ');
            currentEmployeesList[name] = Number(salary);
         }

         let restaurant = restaurants.find(restaurant => restaurant.name === rest[0]);

         if (restaurant) {
            Object.assign(restaurant.employees, currentEmployeesList);

         } else {
            restaurants.push(new Restaurant(rest[0]))
            restaurants[restaurants.length - 1].employees = currentEmployeesList;
         }
      }

      for (let r of restaurants) {
         if (Number(r.averageSalary()) > bestRestaurant.averageSalary) {
            bestRestaurant.averageSalary = Number(r.averageSalary()).toFixed(2);
            bestRestaurant.salaries = r.salaries();
            bestRestaurant.bestSalary = bestRestaurant.salaries[0][1].toFixed(2);
            bestRestaurant.name = r.name;
            bestEmployees = r.employees;
         }

      }

      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary} Best Salary: ${bestRestaurant.bestSalary}`
      
      for (e of Object.entries(bestEmployees).sort((a,b) => b[1] - a[1])) {      
         document.querySelector('#workers p').textContent += `Name: ${e[0]} With Salary: ${e[1]} `;
      }
   }
}