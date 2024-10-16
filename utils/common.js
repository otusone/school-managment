let generateRandomID = async (generatenewUserID) => {
    const length = 2;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    
    let postfix = generatenewUserID+1
    let TSJ="TSJ"
    // Generate random characters
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters.charAt(randomIndex);
    }
    return TSJ+id+String(postfix).padStart(4, '0')
    ;
}


module.exports = {
     generateRandomID: generateRandomID,
    };


    