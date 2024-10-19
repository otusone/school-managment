const SuperAdminCounter = require('../models/superAdminCounter');

async function generateSuperAdminId() {
  try {
    const counter = await SuperAdminCounter.findOneAndUpdate(
      { counterType: 'superAdminId' },
      { $inc: { counter: 1 } },
      { new: true, upsert: true }
    );

    const superAdminId = `SA-${String(counter.counter).padStart(4, '0')}`; // Pads the number with leading zeros
    return superAdminId;
  } catch (error) {
    console.error('Error generating Super Admin ID:', error);
    throw new Error(error.message || 'Failed to generate Super Admin ID');
  }
}

module.exports = { generateSuperAdminId };
