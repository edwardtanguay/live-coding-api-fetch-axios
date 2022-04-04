import './style.scss'

const url = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json';

(async () => {
	const response = await fetch(url);
	const employees = await response.json();
	document.querySelector('#app').innerHTML = `
  <h1>Employees</h1>
  <ul>
      ${employees.map(employee => {
		  return `<li>${employee.firstName} ${employee.lastName}</li>`;
	  }).join('')} 
  </ul>
`;
})();

