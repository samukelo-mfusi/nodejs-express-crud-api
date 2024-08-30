import { v4 as uuidv4 } from 'uuid';


let users = []


export const createUser = (req, res) => {

    const user = req.body;

    //Spread all the user properties
    users.push({...user, id: uuidv4()});

    res.send(`User with the name ${user.firstName} added to the database`);
}

export const getUsers = (req, res) => {
    res.json(users);
}

export const getUser = (req, res) => {
    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const {id} = req.params;

    //id to delete 1234

    //John 1234

    //Jane 5432, she`s going to kept

    //if true, keep user in the array. if false, delete user from the array
    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database.`);
}

export const updateUser = (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id === id);

    
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the id ${id} has been updated`);
}