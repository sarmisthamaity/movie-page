const bcrypt = require('bcrypt');
const fs = require('fs')
// I Have creaed this function for writing a file
const writeFile = (filename, data) => {
    //this promise is used for write a file
    //in  promise resolve and reject are callback function
    return new Promise((resolve, reject) => {
        // JSON.stringify is used to convert a data from jsObject to json string
        // null,2 it will maintain proper indetation
        let datastring = JSON.stringify(data, null, 2)
        fs.writeFileSync(filename, datastring, 'utf8')
        resolve(data)
    })
}

// readfilesync is a function for reading a json file
const readFile = (Filename) => {
    //used here a promise to return the data of a file if data is there,
    //other wise it will throw error

    return new Promise((resolve, reject) => {
        var content = fs.readFileSync(Filename, 'utf8');
        // JSON.parse it will convert the data to json string to js object
        userContent = JSON.parse(content)
        resolve(userContent)
    })

}

const isStrongPassword = (password) => {

    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (strongPasswordPattern.test(password)) {
        return true;
    } else {
        return false;
    }

}

const isValidEmail = (email) => {
    // Regular expression for validating an email address
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);

}

const hashPassword = async (password) => {
    try {
        const saltRounds = parseInt(process.env.SALTROUNDS);
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
    }
};

const checkPassword = async (plainPassword, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
        return isMatch;
    } catch (error) {
        console.error('Error comparing password:', error);
    }
};


module.exports = {
    writeFile,
    readFile,
    isStrongPassword,
    isValidEmail,
    hashPassword,
    checkPassword
}
