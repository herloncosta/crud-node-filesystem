const jsonHelper = require("./json-helper.js");
const { readJSON, createJSON, updateJSON, deleteJSON } = jsonHelper;

const filePath = "./herlon.json";
const encoding = "utf-8";

const developer = {
    name: "Herlon Costa",
    email: "herlon36@gmail.com",
    phone: "(71) 98301-2996",
};

// CREATE
createJSON(filePath, developer, encoding)
    .then(console.log)
    .catch(console.error);

const updateDeveloper = {
    programLanguage: "Javascript / ES6",
};

// UPDATE
updateJSON(filePath, updateDeveloper, encoding)
    .then(console.log)
    .catch(console.error);

// READ
setTimeout(() => {
    readJSON(filePath, encoding).then(console.log).catch(console.error);
}, 2000);

// DELETE
deleteJSON(filePath).then(console.log).catch(console.error);
