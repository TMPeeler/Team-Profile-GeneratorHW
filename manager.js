const Employee = require('./employee');

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    getName() {
        return this.name
    }
    getID() {
        return this.name
    }
    getRole(){
        return 'Manager';
    }
    
}








module.exports = Manager;