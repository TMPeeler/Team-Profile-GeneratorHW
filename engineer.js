const Employee = require('./employee');


class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email)
        this.github = github;
    }
    getName() {
        return this.name
    }
    getID() {
        return this.name
    }
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;