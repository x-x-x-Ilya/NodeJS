import User from '../database/models/user';

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

passport.use(
    new LocalStrategy(async function (username, password, done) {
        try {
            const user = await User.findOne({
                where: { email: username },
            });

            if (!user) return done(null, false);

            if (user.password === password) return done(null, user);
        } catch (error) {
            return error;
        }
    }),
);

passport.serializeUser(async (user, done) => {
    done(null, user);
});

passport.deserializeUser(async (user, done) => {
    const finduser = await User.findOne({ where: { id: user.id } });
    done(null, finduser);
});

export default passport;
