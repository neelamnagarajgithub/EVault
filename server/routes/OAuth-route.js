import passport from 'passport';
import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/auth-model.js';

const googleRouter=express.Router();
dotenv.config();


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:7500/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, done) {
    const { id, displayName, name: { familyName, givenName }, photos } = profile;

    try {
      const user = await User.findOrCreate(
        { googleId: id },
        {
          googleId: id,
          displayName,
          firstName: givenName,
          lastName: familyName,
          image: photos[0].value
        }
      );

      done(null, user);
    } catch (error) {
      done(error);
    }
  }
));

googleRouter.use(session({
    secret: 'your session secret',
    resave: false,
    saveUninitialized: false
  }));
  
googleRouter.use(passport.initialize());
googleRouter.use(passport.session());
  
passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

googleRouter.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

googleRouter.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });

export default googleRouter;