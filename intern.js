const Employee = require('./employee');

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
    }
    getName() {
        return this.name
    }
    getID() {
        return this.name
    }
    getRole(){
        return 'Intern';
    }
}


module.exports = Intern;