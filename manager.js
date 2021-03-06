const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = role;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
    card() {
        return `
    <div class="columns is-centered">
        <div class="column is-9 has-text-centered">
            <div class="column is-one-third card">
                <div class="card-header has-text-centered is-justify-content-center">
            <h1>Manager</h1>
        </div>

        <div class="card-content">
            <h2>
                Name:${this.name}
            </h2>
            <h2>
                ID:${this.id}
            </h2>
            <h2>
                Email:${this.email}
            </h2>
            <h2>
                Office Number:${this.officeNumber}
            </h2>
                </div>
            </div>
        </div>
    </div>`
    }

}








module.exports = Manager;