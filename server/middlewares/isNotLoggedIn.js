module.exports = (app) => {
  return (req, res, next) => {
    if (!req.isAuthenticated()) {
      return next();
    }

    res.redirect('/index/1');
  };
};
