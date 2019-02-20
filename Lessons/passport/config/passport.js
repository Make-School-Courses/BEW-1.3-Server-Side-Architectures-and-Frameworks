var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

// Let Passport know we want to use a Local Strategy: login with email and password.
// What other kinds of strategies could you try in class today?
passport.use(new LocalStrategy({
    usernameField: "email"
  },
  function (email, password, done) {
    // This runs when a user tries to sign in.
    let user = {
      email,
      password
    };
    if (!user) {
      return done(null, false, {
        message: "Incorrect email."
      });
    } else if (!user.validPassword(password)) {
      return done(null, false, {
        message: "Incorrect password."
      });
    }
    // If none of the above, return the user
    return done(null, user);
  }));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Export our auth configuration.
module.exports = passport;
