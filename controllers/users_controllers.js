module.exports.users = function (req, res) {
  return res.render("profile", {
    title: "Users Profile",
  });
};
