const adminService = require("../Services/admin.service");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = adminService.getUserByEmail(email);

    if (!admin) {
      return res.status(404).send({ message: "Something Wrong " });
    }

    if (password === (await admin).password) {
      return res.status(200).send({ message: "Login Successfully" });
    } else {
      return res.status(401).send({ message: "Invalid Password" });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const register = async (req, res) => {
  try {
    const admin = await adminService.createAdmin(req.body);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { login, register };
