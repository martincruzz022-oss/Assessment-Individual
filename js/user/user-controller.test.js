const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('add user that is not in the list', () => {
    let controller = new UserController();
    let user = new User(5678, "Carlos", "carlos@generation.org");
    expect(controller.getUsers()).not.toContain(user);
    controller.add(user);
    expect(controller.getUsers()).toContain(user);
});

test('remove user that is not in the list', () => {
    let controller = new UserController();
    let user = new User(5678, "Carlos", "carlos@generation.org");
    expect(controller.getUsers()).not.toContain(user);
    controller.remove(user);
    expect(controller.getUsers()).not.toContain(user);
});

test('find user by existing email', () => {
    let controller = new UserController();
    let user = new User(1234, "Santiago", "santiago@generation.org");
    controller.add(user);
    expect(controller.findByEmail("santiago@generation.org")).toBe(user);
});

test('find user by email that does not exist', () => {
    let controller = new UserController();
    let user = new User(1234, "Santiago", "santiago@generation.org");
    controller.add(user);
    expect(controller.findByEmail("carlos@generation.org")).toBeUndefined();
});


test('find user by existing id', () => {
    let controller = new UserController();
    let user = new User(1234, "Santiago", "santiago@generation.org");   
    controller.add(user);
    expect(controller.findById(1234)).toBe(user);
});

test('find user by id that does not exist', () => {
    let controller = new UserController();
    let user = new User(1234, "Santiago", "santiago@generation.org");
    controller.add(user);
    expect(controller.findById(9999)).toBeUndefined();
});