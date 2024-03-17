const admin = require("../Models/Admin/admin.model");

async function getUserByEmail(email) {
  try {
    const userResult = await admin.findOne({ email });

    if (!userResult) {
      throw new Error("Not Found : ", email);
    }

    return userResult;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function createAdmin(userData) {
  let { name, email, password } = userData;

  try {
    const adminCreate = await admin.create({
      name,
      email,
      password,
    });
    return adminCreate;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  getUserByEmail,
  createAdmin,
};
