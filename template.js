const template = team => {
    console.log(team);
    const teamArray = [];
    const manager = team.filter(employee => {
        return employee.getRole() === 'Manager'
    }).map(manager => {
        return `  
         <tr>
            <td>${manager.getName()}</td>
            <td>${manager.getRole()}</td>
            <td>ID: ${manager.getId()}</td>
            <td>Email: ${manager.getEmail()}</td>
            <td>Office Number: ${manager.getOffice()}</td>
        </tr>
                `
    });
    teamArray.push(manager);
    const engineer = team.filter(employee => {
        return employee.getRole() === 'Engineer'
    }).map(engineer => {
        return `
        <tr>
            <td>${engineer.getName()}</td>
            <td>${engineer.getRole()}</td>
            <td>ID: ${engineer.getId()}</td>
            <td>Email: ${engineer.getEmail()}</td>
            <td>Office Number: ${engineer.getGithub()}</td>
        </tr>`
    });
    teamArray.push(engineer)
    const intern = team.filter(employee => {
        return employee.getRole() === 'Intern'
    }).map(intern => {
        return `
        <tr>
            <td>${intern.getName()}</td>
            <td>${intern.getRole()}</td>
            <td>ID: ${intern.getId()}</td>
            <td>${intern.getEmail()}</td>
            <td>Office Number: 4</td>
        </tr>`
    });
    teamArray.push(intern)
    return teamArray.join("")
}
    






module.exports = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="./css/style.css" >
    <link rel="stylesheet" type="text/css" href="./css/respond.css">
</head>
<body>
    <div class="container">
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>User ID</th>
            <th>Email</th>
            <th>Office Number</th>
        </tr>
        </thead>
    
    <tbody>
    ${template(team)}
    </tbody>
    </table>
</div>
</body>
</html>`
}