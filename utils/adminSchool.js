const AdminSchoolCounter = require('../models/userCounter');
const SchoolTeacherCounter = require('../models/userCounter');

const generateSchoolAdminId=async()=> {
  try {
    const counter = await AdminSchoolCounter.findOneAndUpdate(
      { counterType: 'adminSchoolId' },
      { $inc: { counter: 1 } },
      { new: true, upsert: true }
    );

    const schoolAdminId = `AS-${String(counter.counter).padStart(4, '0')}`;
    return schoolAdminId;
  } catch (error) {
    console.error('Error generating School Admin ID:', error);
    throw new Error(error.message || 'Failed to generate School Admin ID');
  }
}


const generateSchoolTeacherId = async (schoolCode, session) => {
  try {
      const counter = await SchoolTeacherCounter.findOneAndUpdate(
          { counterType: `${schoolCode}_schoolTeacherId` },
          { $inc: { counter: 1 } },
          { new: true, upsert: true, session } 
      );
      const schoolAdminId = `${schoolCode.slice(0, 4).toUpperCase()}_T${String(counter.counter).padStart(2, '0')}`;
      return schoolAdminId;
  } catch (error) {
      throw new Error(error.message || 'Failed to generate School Teacher ID');
  }
};

const generateSchoolStudentId = async (schoolCode, session) => {
  try {
      const counter = await SchoolTeacherCounter.findOneAndUpdate(
          { counterType: `${schoolCode}_schoolStudentId` },
          { $inc: { counter: 1 } },
          { new: true, upsert: true, session } 
      );
      const schoolAdminId = `${schoolCode.slice(0, 4).toUpperCase()}_S${String(counter.counter).padStart(2, '0')}`;
      return schoolAdminId;
  } catch (error) {
      throw new Error(error.message || 'Failed to generate School Teacher ID');
  }
};

const generateStudentParentId = async (schoolCode, session) => {
  try {
      const counter = await SchoolTeacherCounter.findOneAndUpdate(
          { counterType: `${schoolCode}_StudentParentId` },
          { $inc: { counter: 1 } },
          { new: true, upsert: true, session } 
      );
      const schoolAdminId = `${schoolCode.slice(0, 4).toUpperCase()}_P${String(counter.counter).padStart(2, '0')}`;
      return schoolAdminId;
  } catch (error) {
      throw new Error(error.message || 'Failed to generate School Teacher ID');
  }
};

module.exports = { generateSchoolAdminId,generateSchoolTeacherId,generateSchoolStudentId,generateStudentParentId };
