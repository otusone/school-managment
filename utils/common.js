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

const generatePassword = () => {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    const allChars = lowerCase + upperCase + numbers + specialChars;
    
    let password = '';
    
    // Ensure at least one of each type
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    
    // Generate the rest randomly
    for (let i = 4; i < Math.floor(Math.random() * 3) + 8; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    return password;
};

generatePassword();

// module.exports = {
//      generateRandomID: generateRandomID,
//      generatePassword
//     };


    