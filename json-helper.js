const fs = require("fs");

const createJSON = (path, data, enc) => {
    const promiseCallback = (resolve, reject) => {
        const dataString = JSON.stringify(data);
        fs.writeFile(path, dataString, enc, (err) => {
            if (err) {
                return reject(err);
            }
            return resolve(true);
        });
    };

    return new Promise(promiseCallback);
};

const readJSON = (filePath, enconding) => {
    const promiseCallback = (resolve, reject) => {
        fs.readFile(filePath, enconding, (err, data) => {
            if (err) {
                return reject(err);
            }
            return resolve(data);
        });
    };
    return new Promise(promiseCallback);
};

const updateJSON = (filePath, newData, encoding) => {
    const promiseCallback = async (resolve, reject) => {
        try {
            const data = await readJSON(filePath, encoding);
            const dataObj = JSON.parse(data);
            const dataString = { ...dataObj, ...newData };
            createJSON(filePath, dataString, encoding);
            return resolve(true);
        } catch (err) {
            return reject(err);
        }
    };

    return new Promise(promiseCallback);
};

const deleteJSON = (filePath) => {
    const promiseCallback = (resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                return reject(err);
            }

            return resolve(true);
        });
    };

    return new Promise(promiseCallback);
};

module.exports = {
    createJSON,
    readJSON,
    updateJSON,
    deleteJSON,
};
