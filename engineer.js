const Employee = require('./employee');


class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email)
        this.github = github;
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
    getGithub(){
        return this.github;
    }
    getRole(){
        return 'Engineer';
    }
    card() {
        return `
        <div class="columns is-centered">
            <div class="column is-9 has-text-centered">
                <div class="column is-one-third card">
                    <div class="card-header has-text-centered is-justify-content-center">
                <h1>Engineer</h1>
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
                    ${this.github}
                </h2>
               
                    </div>
                </div>
            </div>
        </div>`
    }
}

module.exports = Engineer;