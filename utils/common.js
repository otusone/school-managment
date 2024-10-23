let generateRandomID = async (generatenewUserID) => {
    const length = 2;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    
    let postfix = generatenewUserID+1
    let TSJ="PLE"
    // Generate random characters
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters.charAt(randomIndex);
    }
    return TSJ+id+String(postfix).padStart(4, '0')
    ;
}

const generatePassword = (firstName) => {
    const specialChars = '@#$%';
    const numbers = '0123456789';

    let processedName = firstName.slice(0, 6);
    processedName = processedName.charAt(0).toUpperCase() + processedName.slice(1).toLowerCase();

    const specialChar = specialChars[Math.floor(Math.random() * specialChars.length)];

    // Calculate how many random digits are needed
    const minPasswordLength = 8;
    const remainingLength = Math.max(minPasswordLength - (processedName.length + specialChar.length), 3);

    let randomDigits = '';
    for (let i = 0; i < remainingLength; i++) {
        randomDigits += numbers[Math.floor(Math.random() * numbers.length)];
    }

    const password = `${processedName}${specialChar}${randomDigits}`;
    return password;
};




module.exports = {
     generateRandomID: generateRandomID,
     generatePassword
    };


    