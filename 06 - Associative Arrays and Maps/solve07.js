function solve07(input) {
    let companies = new Map();

    for (let inputRow of input){
        let [company, id] = inputRow.split(' -> ');

        if (!companies.has(company)){
            companies.set(company, []);
        }

        let employees = companies.get(company);
        if (!employees.includes(id)){
            employees.push(id);
        }
    }
    let sortedCompanies = [...companies].sort((a,b) => {
        return a[0].localeCompare(b[0]);
    });
    for (let [name, employees] of sortedCompanies){
        console.log(name);
        let outputString = employees.map(e => `-- ${e}`).join('\n');

        console.log(outputString);
    }
}
solve07(['SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345'
    ]);