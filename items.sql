DROP TABLE IF EXISTS items  CASCADE;
CREATE TABLE items (
id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL,
price INT NOT NULL,
imageUrl TEXT,
code VARCHAR NOT NULL, 
reviewone VARCHAR NOT NULL, 
reviewtwo VARCHAR NOT NULL
);

INSERT INTO items (name, price, imageUrl,code, reviewone, reviewtwo) VALUES (
    'carpet Klea',
  60,
  'https://shop.static.ingka.ikea.com/revamp/rugs_10653.jpg',
   '60784',
   'pending',
  'pending'
);
INSERT INTO items (name, price, imageUrl,code, reviewone, reviewtwo) VALUES (
    'carpet Sunny',
  60,
  'https://www.therugseller.co.uk/images-uploaded/images-products-large3/Goteborg-36035A%20Yellow%20Grey2.jpg?w=800',
   '60784',
   'pending',
  'pending'
);
INSERT INTO items (name, price, imageUrl,code, reviewone, reviewtwo) VALUES (
    'carpet Yellow',
  60,
  'https://www.rugsdirect.co.uk/assets/images/products/full/Cabone-Yellow%20Grey-1.jpg',
   '60784',
   'pending',
  'pending'
);