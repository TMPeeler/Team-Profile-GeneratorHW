const Employee = require('./employee');

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
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
    getRole(){
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
    card() {
        return `
        <div class="columns is-centered">
            <div class="column is-9 has-text-centered">
                <div class="column is-one-third card">
                    <div class="card-header has-text-centered is-justify-content-center">
                <h1>Intern</h1>
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
                    ${this.school}
                </h2>
               
                    </div>
                </div>
            </div>
        </div>`
    }
}


module.exports = Intern;