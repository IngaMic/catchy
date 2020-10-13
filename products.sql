DROP TABLE IF EXISTS products  CASCADE;
CREATE TABLE products (
id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL,
price INT NOT NULL,
imageUrl TEXT,
url TEXT
);

INSERT INTO products (name, price, imageUrl) VALUES (
    'carpet Meran',
  60,
  'https://image.architonic.com/img_pro2-4/128/9254/carpet-basquette-30x60-b.jpg'
);
INSERT INTO products (name, price, imageUrl) VALUES (
    'carpet Virgo',
  60,
  'https://shop.static.ingka.ikea.com/revamp/rugs_10653.jpg'
);
INSERT INTO products (name, price, imageUrl) VALUES (
    'carpet Klea',
  60,
  'https://www.therugseller.co.uk/images-uploaded/images-products-large3/Goteborg-36035A%20Yellow%20Grey2.jpg?w=800'
);
INSERT INTO products  (name, price, imageUrl) VALUES (
    'carpet Yellow Fizzy',
  60,
  'https://www.rugsdirect.co.uk/assets/images/products/full/Cabone-Yellow%20Grey-1.jpg'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'lamp SINNERLIG',
  58,
  'https://www.ikea.com/de/de/images/products/sinnerlig-haengeleuchte-bambus__0607419_PE682969_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/sinnerlig-haengeleuchte-bambus-70311697/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'lamp Lauters',
  58,
  'https://www.ikea.com/de/de/images/products/lauters-standleuchte-esche-weiss__0663863_PE712536_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/lauters-standleuchte-esche-weiss-30405042/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'lamp Arstid',
  19,
  'https://www.ikea.com/de/de/images/products/arstid-tischleuchte-messing-weiss__0609329_PE684454_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/arstid-tischleuchte-messing-weiss-30321373/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'lamp SJÖPENNA',
  30,
  'https://www.ikea.com/de/de/images/products/sjoepenna-standleuchte-weiss__0684003_PE720969_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/sjoepenna-standleuchte-weiss-40323710/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'lamp MISTERHULT',
  59,
  'https://www.ikea.com/de/de/images/products/misterhult-haengeleuchte-bambus__0794605_PE765667_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/misterhult-haengeleuchte-bambus-90441018/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'lamp Brunsta/Hemma',
  40,
  'https://www.ikea.com/de/de/images/products/brunsta-hemma-haengeleuchte-schwarz__0669228_PE714904_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/brunsta-hemma-haengeleuchte-schwarz-s39291767/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'lamp Boja',
  34,
  'https://www.ikea.com/de/de/images/products/boeja-tischleuchte-vernickelt-bambus__0606973_PE682643_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/boeja-tischleuchte-vernickelt-rattan-bambus-60152279/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'lamp PS-2014',
  39,
  'https://www.ikea.com/de/de/images/products/ikea-ps-2014-haengeleuchte-weiss__0613030_PE686121_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/ikea-ps-2014-haengeleuchte-weiss-10383239/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'lamp Solklint',
  20,
  'https://www.ikea.com/de/de/images/products/solklint-haengeleuchte-messing-klarglas-grau__0842306_PE778948_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/solklint-haengeleuchte-messing-klarglas-grau-10430778/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'lamp MACKEBO',
  13,
  'https://www.ikea.com/de/de/images/products/mackebo-tischleuchte-schwarz-transparent-glas__0754932_PE748181_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/mackebo-tischleuchte-schwarz-transparent-glas-50464078/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'lamp Luftmassa/Hemma',
  18,
  'https://www.ikea.com/de/de/images/products/luftmassa-hemma-haengeleuchte-gerundet-schwarz__0805216_PE769451_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/luftmassa-hemma-haengeleuchte-gerundet-schwarz-s19335705/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'lamp Knixhult',
  49,
  'https://www.ikea.com/de/de/images/products/knixhult-standleuchte-bambus__0635426_PE697194_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/knixhult-standleuchte-bambus-30323763/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'lamp Solklint',
  15,
  'https://www.ikea.com/de/de/images/products/solklint-tischleuchte-messing-klarglas-grau__0842257_PE781832_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/solklint-tischleuchte-messing-klarglas-grau-70464275/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'chair FANBYN',
  58,
  'https://www.ikea.com/de/de/images/products/fanbyn-stuhl-weiss__0587379_PE672586_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/fanbyn-stuhl-weiss-s49228474/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'chair SKRUVSTA',
  87,
  'https://www.ikea.com/de/de/images/products/skruvsta-drehstuhl-vissle-grau__0724705_PE734587_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/skruvsta-drehstuhl-vissle-grau-30280004/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'chair EKENÄSET',
  174,
  'https://www.ikea.com/de/de/images/products/ekenaeset-sessel-hillared-anthrazit__0729143_PE736711_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/ekenaeset-sessel-hillared-anthrazit-10429275/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'chair Nordmyra',
  38,
  'https://www.ikea.com/de/de/images/products/nordmyra-stuhl-weiss-birke__0534706_PE649240_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/nordmyra-stuhl-weiss-birke-60351311/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'chair Nilsove/Norna',
  82,
  'https://www.ikea.com/de/de/images/products/nilsove-norna-stuhl-mit-kissen-rattan-weiss-laila-natur__0751763_PE747197_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/nilsove-norna-stuhl-mit-kissen-rattan-weiss-laila-natur-s19304006/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'chair HATTEFJÄLL',
  193,
  'https://www.ikea.com/de/de/images/products/hattefjaell-drehstuhl-gunnared-mittelgrau__0724694_PE734576_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/hattefjaell-drehstuhl-gunnared-mittelgrau-10341334/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'chair Tossberg',
  145,
  'https://www.ikea.com/de/de/images/products/tossberg-stuhl-metall-schwarz-grau__0661921_PE712124_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/tossberg-stuhl-metall-schwarz-grau-90435324/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'chair BEKVÄM',
  29,
  'https://www.ikea.com/de/de/images/products/bekvaem-trittleiter-3-tritte-schwarz__0170966_PE325081_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/bekvaem-trittleiter-3-tritte-schwarz-90219829/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'chair UMI GAMING',
  119,
  'https://m.media-amazon.com/images/I/61meDRZr-JL._AC_UL480_FMwebp_QL65_.jpg',
  'ZW5jcnlwdGVkUXVhbGlmaWVyPUFXSjZIMzhRWUZLRFomZW5jcnlwdGVkSWQ9QTAwNTIxNTk2RDdTVUhWMUo3RDQmZW5jcnlwdGVkQWRJZD1BMDI0Mzk1OUdXWlZBTkJFWVBKQyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'chair FJÄLLBERGET',
  184,
  'https://www.ikea.com/de/de/images/products/fjaellberget-konferenzstuhl-mit-rollen-eichenfurnier-weiss-lasiert-gunnared-beige__0815078_PE772749_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/fjaellberget-konferenzstuhl-mit-rollen-eichenfurnier-weiss-lasiert-gunnared-beige-20485242/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'sofa ASKEBY',
  145,
  'https://www.ikea.com/de/de/images/products/askeby-2er-bettsofa-grau__0528799_PE645938_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/askeby-2er-bettsofa-grau-30377317/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'sofa ANGERSBY',
  145,
  'https://www.ikea.com/de/de/images/products/angersby-2er-sofa-knisa-hellgrau__0770896_PE755642_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/angersby-2er-sofa-knisa-hellgrau-10469186/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'sofa LANDSKRONA',
  486,
  'https://www.ikea.com/de/de/images/products/landskrona-3er-sofa-gunnared-dunkelgrau-holz__0602117_PE680186_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/landskrona-3er-sofa-gunnared-dunkelgrau-holz-s59270311/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'sofa KLUBBFORS',
  486,
  'https://www.ikea.com/de/de/images/products/klubbfors-2er-sofa-gunnared-beige__0721381_PE733205_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/klubbfors-2er-sofa-gunnared-beige-80457745/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'sofa LIDHULT',
  730,
  'https://www.ikea.com/de/de/images/products/lidhult-2er-bettsofa-gassebol-blau-grau__0619131_PE688941_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/lidhult-2er-bettsofa-gassebol-blau-grau-s39257056/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'sofa SÖDERHAMN',
  458,
  'https://www.ikea.com/de/de/images/products/soederhamn-2er-sofa-mit-recamiere-samsta-dunkelgrau__0666208_PE713454_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/soederhamn-2er-sofa-mit-recamiere-samsta-dunkelgrau-s19282962/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'sofa Stockholm',
  1461,
  'https://www.ikea.com/de/de/images/products/stockholm-2017-3er-sofa-sandbacka-dunkelblau__0447583_PE597395_S5.JPG?f=s',
  'hhttps://www.ikea.com/de/de/p/stockholm-2017-3er-sofa-sandbacka-dunkelblau-40344500/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'sofa BONDHOLMEN',
  320,
  'https://www.ikea.com/de/de/images/products/bondholmen-2er-sofa-aussen-grau-las-jaerpoen-duvholmen-braunrot__0806166_PE769831_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/bondholmen-2er-sofa-aussen-grau-las-jaerpoen-duvholmen-braunrot-s29320789/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'shelf MOLGER',
  38,
  'https://www.ikea.com/de/de/images/products/molger-regal-birke__0721652_PE733325_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/molger-regal-birke-20154591/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'shelf Hemnes',
  145,
  'https://www.ikea.com/de/de/images/products/hemnes-buecherregal-weiss-gebeizt-hellbraun__0805251_PE769474_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/hemnes-buecherregal-weiss-gebeizt-hellbraun-60413502/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'shelf Bror',
  175,
  'https://www.ikea.com/de/de/images/products/bror-regal-schwarz-holz__0612512_PE688395_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/bror-regal-schwarz-holz-s69272692/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'shelf OXBERG',
  135,
  'https://www.ikea.com/de/de/images/products/billy-oxberg-buecherregal-mit-glastueren-weiss-glas__0944092_PE797149_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/billy-oxberg-buecherregal-mit-glastueren-weiss-glas-s79398832/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'shelf KOLBJÖRN',
  124,
 'https://www.ikea.com/de/de/images/products/kolbjoern-regal-mit-schrank-gruen__0762727_PE752177_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/kolbjoern-regal-mit-schrank-gruen-s89317557/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'shelf MORLIDEN',
  192,
 'https://www.ikea.com/de/de/images/products/billy-morliden-buecherregal-weiss__0644498_PE702734_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/billy-morliden-buecherregal-weiss-s09017831/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'shelf SVALNÄS',
  24,
 'https://www.ikea.com/de/de/images/products/svalnaes-boden-bambus__0640705_PE700005_S5.JPG?f=xxl',
  'https://www.ikea.com/de/de/p/svalnaes-boden-bambus-60322861/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'table LERHAMN',
  68,
 'https://www.ikea.com/de/de/images/products/lerhamn-tisch-antikbeize-hell-weiss-gebeizt__0238243_PE377691_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/lerhamn-tisch-antikbeize-hell-weiss-gebeizt-60444259/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'table GAMLEHULT',
  68,
 'https://www.ikea.com/de/de/images/products/gamlehult-hocker-mit-aufbewahrung-rattan-anthrazit__0672903_PE716940_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/gamlehult-hocker-mit-aufbewahrung-rattan-anthrazit-10434309/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'table OMTÄNKSAM',
  98,
 'https://www.ikea.com/de/de/images/products/omtaenksam-beistelltisch-anthrazit-birke__0658509_PE710233_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/omtaenksam-beistelltisch-anthrazit-birke-70469391/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'table LÖVBACKEN',
  58,
 'https://www.ikea.com/de/de/images/products/loevbacken-beistelltisch-mittelbraun__0731794_PE738454_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/loevbacken-beistelltisch-mittelbraun-80270125/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'table KLINGSBO',
  29,
 'https://www.ikea.com/de/de/images/products/klingsbo-beistelltisch-schwarz-klarglas__79345_PE202932_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/klingsbo-beistelltisch-schwarz-klarglas-20128564/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'table LISTERBY',
  78,
 'https://www.ikea.com/de/de/images/products/listerby-beistelltisch-weiss-las-eiche__0612903_PE686082_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/listerby-beistelltisch-weiss-las-eiche-10409041/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'table TRANARÖ',
  15,
 'https://www.ikea.com/de/de/images/products/tranaroe-hocker-beistelltisch-innen-aussen-rot__0728394_PE736230_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/tranaroe-hocker-beistelltisch-innen-aussen-rot-10411421/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'table SLÄHULT',
  156,
 'https://www.ikea.com/de/de/images/products/slaehult-tisch-weiss-grebbestad-schwarz__0436813_PE590397_S5.JPG?f=xxl',
  'https://www.ikea.com/de/de/p/slaehult-tisch-weiss-grebbestad-schwarz-s39167169/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'table Klimpen',
  130,
 'https://www.ikea.com/de/de/images/products/klimpen-lalle-tisch-hellgrau-schwarz__0736573_PE740627_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/klimpen-lalle-tisch-grau-hellgrau-schwarz-s99213941/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'table LOMMARP',
  136,
 'https://www.ikea.com/de/de/images/products/lommarp-schreibtisch-hellbeige__0770955_PE755649_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/lommarp-schreibtisch-hellbeige-90442824/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'shower curtain SANDBREDAN',
  15,
 'https://www.ikea.com/de/de/images/products/sandbredan-duschvorhang-bunt__0644052_PE702359_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/sandbredan-duschvorhang-bunt-20429623/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'shower curtain BASTSJÖN',
  10,
 'https://www.ikea.com/de/de/images/products/bastsjoen-duschvorhang-weiss-grau-beige__0762285_PE751862_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/bastsjoen-duschvorhang-weiss-grau-beige-80466066/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'shower curtain KLOCKAREN',
  13,
 'https://www.ikea.com/de/de/images/products/klockaren-duschvorhang-elfenbeinweiss__0649091_PE705225_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/klockaren-duschvorhang-elfenbeinweiss-90429634/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'shower curtain VADSJÖN',
  8,
 'https://www.ikea.com/de/de/images/products/vadsjoen-duschvorhang-dunkelgrau__0597591_PE677224_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/vadsjoen-duschvorhang-dunkelgrau-10349066/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'shower curtain GATKAMOMILL',
  8,
 'https://www.ikea.com/de/de/images/products/gatkamomill-duschvorhang-tuerkis-weiss__0762305_PE751866_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/gatkamomill-duschvorhang-tuerkis-weiss-90466202/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'shower curtain KRATTEN',
  8,
 'https://www.ikea.com/de/de/images/products/kratten-duschvorhang-weiss-bunt__0689144_PE722840_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/kratten-duschvorhang-weiss-bunt-50443670/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'shower curtain RÄLLSJÖN',
  16,
 'https://www.ikea.com/de/de/images/products/raellsjoen-duschvorhang-weiss-grau__0802106_PE768368_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/raellsjoen-duschvorhang-weiss-grau-60470130/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'shower curtain KINNEN',
  10,
 'https://www.ikea.com/de/de/images/products/kinnen-duschvorhang-weiss-schwarz__0685297_PE721392_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/kinnen-duschvorhang-weiss-schwarz-90447497/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'shower curtain VADSJÖN',
  8,
 'https://www.ikea.com/de/de/images/products/vadsjoen-duschvorhang-dunkelgruen__0685304_PE721394_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/vadsjoen-duschvorhang-dunkelgruen-10439482/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'shower curtain SAXÄLVEN',
  13,
 'https://www.ikea.com/de/de/images/products/saxaelven-duschvorhang-anthrazit__0597594_PE677227_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/saxaelven-duschvorhang-anthrazit-20349075/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'soap dispenser DRAGAN',
  9,
 'https://www.ikea.com/de/de/images/products/dragan-seifenspender__0711732_PE728417_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/dragan-seifenspender-bambus-90271493/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'soap dispenser EKOLN',
  5,
 'https://www.ikea.com/de/de/images/products/ekoln-seifenspender-dunkelgrau__0749022_PE745400_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/ekoln-seifenspender-dunkelgrau-40441619/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'soap dispenser Toftan',
  6,
 'https://www.ikea.com/de/de/images/products/toftan-seifenspender-grau__0711725_PE728410_S5.JPG?f=g',
  'https://www.ikea.com/de/de/p/toftan-seifenspender-grau-30349503/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'soap dispenser BALUNGEN',
  13,
 'https://www.ikea.com/de/de/images/products/balungen-seifenspender-verchromt__0711733_PE728418_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/balungen-seifenspender-verchromt-90291504/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'soap dispenser ENUDDEN',
  2,
 'https://www.ikea.com/de/de/images/products/enudden-seifenspender-weiss__0713247_PE729357_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/enudden-seifenspender-weiss-10263816/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'soap holder EKOLN',
  3,
 'https://www.ikea.com/de/de/images/products/ekoln-seifenschale-dunkelgrau__0749021_PE745399_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/ekoln-seifenschale-dunkelgrau-60441618/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'door mat SOMMAR 2020',
  6,
 'https://www.ikea.com/de/de/images/products/sommar-2020-fussmatte-innen-gruen-palme-natur__0767093_PE753962_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/sommar-2020-fussmatte-innen-gruen-palme-natur-50464846/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'door mat KÖGE',
  39,
 'https://www.ikea.com/de/de/images/products/koege-fussmatte-grau-schwarz__0721307_PE733156_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/koege-fussmatte-grau-schwarz-40296603/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'door mat SPARKÄR',
  5,
 'https://www.ikea.com/de/de/images/products/sparkaer-fussmatte-innen-gruen-blatt__0806522_PE769972_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/sparkaer-fussmatte-innen-gruen-blatt-70466241/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'door mat Relaxdays',
  15,
 'https://m.media-amazon.com/images/I/91GF5WHuOZL._AC_UL480_FMwebp_QL65_.jpg',
  'https://www.amazon.de/-/en/Relaxdays-Fibre-Semi-Circular-Entrance-Doormat/dp/B00EK836WM/ref=sxin_9_ac_d_rm?ac_md=3-3-dMO8cm1hdHRlIGF1c3NlbmJlcmVpY2g%3D-ac_d_rm&cv_ct_cx=door+mat&dchild=1&keywords=t%C3%BCrmatte&pd_rd_i=B00EK836WM&pd_rd_r=0d17fdbd-821e-44a1-adab-92ded20d6d0d&pd_rd_w=LzAJ2&pd_rd_wg=1b569&pf_rd_p=96706403-718d-49f5-8378-9348e79f401e&pf_rd_r=97JE31VRYQ9W0P32GC3E&psc=1&qid=1602590722&sr=1-4-fe323411-17bb-433b-b2f8-c44f2e1370d4'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'door mat You shall not pass',
  15,
 'https://m.media-amazon.com/images/I/81HxtsI3dCL._AC_UL480_FMwebp_QL65_.jpg',
  'https://www.amazon.de/-/en/Doormat-You-shall-not-pass/dp/B00I7T9RTQ/ref=sr_1_16?dchild=1&keywords=t%C3%BCrmatte&qid=1602590878&sr=8-16'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'door mat TRAMPA',
  4,
 'https://www.ikea.com/de/de/images/products/trampa-fussmatte-natur__0721308_PE733157_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/trampa-fussmatte-natur-40399045/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'door mat SIVESTED',
  3,
 'https://www.ikea.com/de/de/images/products/sivested-fussmatte-dunkelgrau__0721314_PE733146_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/sivested-fussmatte-dunkelgrau-90394267/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'door mat RORSLEV',
  3,
 'https://www.ikea.com/de/de/images/products/rorslev-fussmatte-bunt__0721298_PE733147_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/rorslev-fussmatte-bunt-00394243/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'door mat MEJLS',
  3,
 'https://www.ikea.com/de/de/images/products/mejls-fussmatte-kreise-grau-schwarz__0721312_PE733161_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/mejls-fussmatte-kreise-grau-schwarz-80382769/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'plant DYPSIS LUTESCENS',
  20,
 'https://www.ikea.com/de/de/images/products/dypsis-lutescens-pflanze-goldfruchtpalme__0653973_PE708202_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/dypsis-lutescens-pflanze-goldfruchtpalme-46804005/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'plant STRELITZIA',
  39,
 'https://www.ikea.com/de/de/images/products/strelitzia-pflanze-strelitzie__0836980_PE778631_S5.JPG?f=xxl',
  'https://www.ikea.com/de/de/p/strelitzia-pflanze-strelitzie-20466253/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'plant PACHIRA AQUATICA',
  25,
 'https://www.ikea.com/de/de/images/products/pachira-aquatica-pflanze-glueckskastanie__0653983_PE708212_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/pachira-aquatica-pflanze-glueckskastanie-00118523/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'plant HEDERA HELIX',
  3,
 'https://www.ikea.com/de/de/images/products/hedera-helix-pflanze-efeu__0654037_PE708262_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/hedera-helix-pflanze-efeu-66804047/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'plant SPATHIPHYLLUM',
  20,
 'https://www.ikea.com/de/de/images/products/spathiphyllum-pflanze-einblatt__0654013_PE708240_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/spathiphyllum-pflanze-einblatt-70144849/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'plant ANANAS',
  8,
 'https://www.ikea.com/de/de/images/products/ananas-pflanze-ananas__0828165_PE776520_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/ananas-pflanze-ananas-70477131/'
);
INSERT INTO products  (name, price, imageUrl, url) VALUES (
    'plant ALOCASIA AMAZONICA',
  8,
 'https://www.ikea.com/de/de/images/products/alocasia-amazonica-pflanze-elefantenohr__0653981_PE708210_S5.JPG?f=s',
  'https://www.ikea.com/de/de/p/alocasia-amazonica-pflanze-elefantenohr-90349487/'
);