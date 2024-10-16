const UserIdCount = require('../models/previousUserId');

exports.createprUserIdCount = async (req, res) => {
    try {
        let initialValue = 0
        const isInitialised=await UserIdCount.find()
        if(isInitialised.length>0){
            throw new Error("user Id already Initialed")
        }
        const initialData = new UserIdCount({previousUserId: initialValue })
        await initialData.save();
        res.status(200).json({message:"Initial value assign successfully",initialData});
    } catch (error) {
        res.status(422).json({ error: error.message });
    }
};
