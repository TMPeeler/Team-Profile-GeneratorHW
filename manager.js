const Employee = require('./employee');

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole(){
        return 'Manager';
    }
    card() {
        return `<div class="column is-one-third card">
        <div class="card-header has-text-centered is-justify-content-center">
            <h1>Manager</h1>
        </div>

        <div class="card-content">
            <h2>
                ${this.name}
            </h2>
            <h2>
                ${this.id}
            </h2>
            <h2>
                ${this.email}
            </h2>
            <h2>
                ${this.officeNumber}
            </h2>
            <h2>
                ${this.getRole}
            </h2>
        </div>
    </div>`
    }

}








module.exports = Manager;