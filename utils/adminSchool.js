const AdminSchoolCounter = require('../models/userCounter');

async function generateSchoolAdminId() {
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

module.exports = { generateSchoolAdminId };
