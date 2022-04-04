import './style.scss'
import axios from 'axios';

const url = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json';

(async () => {
	
	// fetch
	// const response = await fetch(url);
	// const employees = await response.json();

	// axios
	const response = await axios.get(url);
	const employees = response.data;

	document.querySelector('#app').innerHTML = `
  <h1>Employees</h1>
  <ul>
      ${employees.map(employee => {
		  return `<li>${employee.firstName} ${employee.lastName}</li>`;
	  }).join('')} 
  </ul>
`;
})();

