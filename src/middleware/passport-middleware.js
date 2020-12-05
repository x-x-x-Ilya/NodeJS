import { findOne } from '../database/models/user';

import passport, { use, serializeUser, deserializeUser } from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

use(
    new LocalStrategy(async function (username, password, done) {
        try {
            const user = await findOne({
                where: { email: username },
            });
            if (!user) return done(null, false);
            if (user.password === password) return done(null, user);
        } catch (error) {
            return error;
        }
    }),
);

serializeUser(function (user, done) {
    done(null, user);
});

deserializeUser(function (user, done) {
    findOne({ where: { id: user.id } }).then(User => {
        done(null, User);
    });
});

export default passport;
