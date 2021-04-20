const { hasUncaughtExceptionCaptureCallback } = require('node:process');
const { isMainThread } = require('node:worker_threads')
const Employee = require('./employee')

describe('Employee', () => {
it("check to see that it creates objects", () => {
    const employee1 = new Employee();
    expect(typeof(employee1)).toBe("object")
});

it("check to see that it can store a name", () => {
    const name = "guy1";
    const employee1 = new Employee(name);
    expect(employee1.name).toBe(name);
});

it("check to see if it can store an email ", () => {
    const name = "guy1";
    const employee1 = new Employee(name);
    expect(employee1.name).toBe(name);
});

it("check to see that it can store an ID", () => {
    const name = "guy1";
    const employee1 = new Employee(name, email, id);
    expect(employee1.id).toBe(name);
});

})