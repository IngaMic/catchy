DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
id SERIAL PRIMARY KEY,
userid INT REFERENCES users(id) NOT NULL,
itemid INT REFERENCES items(id) NOT NULL,
message VARCHAR NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3 test notes
-- INSERT INTO comments (userid, itemid, message) VALUES (
--     1,
--     2,
--   'looks like we could use it next to the pantry :)'
-- );
-- INSERT INTO comments (userid, itemid, message) VALUES (
--     2,
--     3,
--     'brings back so many great memories.'
-- );
-- INSERT INTO comments (userid, itemid, message) VALUES (
--     2,
--     2,
--     '....I hope this is the right size. Fingers crossed!'
-- );