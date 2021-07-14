CREATE DATABASE akarina;
USE akarina;
CREATE TABLE house (
    house_id INT AUTO_INCREMENT,
    number_of_floor INT,
    has_car_park BOOLEAN,
    PRIMARY KEY(house_id)
);
CREATE TABLE aparetment(
    aparetment_id INT AUTO_INCREMENT,
    floor_number INT,
    PRIMARY KEY(aparetment_id)
);
CREATE TABLE land (
    land_id INT AUTO_INCREMENT,
    length FLOAT,
    width FLOAT,
    papper TEXT,
    is_title BOOLEAN,
    PRIMARY KEY(land_id)
);
CREATE TABLE store(
    store_id INT AUTO_INCREMENT,
    length FLOAT,
    width FLOAT,
    PRIMARY KEY(store_id)
);
CREATE TABLE property(
    property_id INT AUTO_INCREMENT,
    property_type ENUM ('APPARTEMENT', 'MAISON', 'MAGAZIN', 'TERRAIN') DEFAULT 'APPARTEMENT',
    add_type ENUM ('LOUER', 'VENDRE') DEFAULT 'LOUER',
    rent_type ENUM ('PAR JOUR', 'PAR MOIS', 'PAR ANNEE') DEFAULT 'PAR MOIS',
    region ENUM (
        'NOUAKCHOTT OUEST',
        'NOUAKCHOTT NORD',
        'NOUAKCHOTT SID'
    ) DEFAULT 'NOUAKCHOTT OUEST',
    city ENUM (
        'TEVRAGHE ZEINA',
        'KSAR',
        'TEYARITE',
        'ARAVAT',
        'ELMINA'
    ) DEFAULT 'TEVRAGHE ZEINA',
    street_size INT,
    price FLOAT,
    image VARCHAR(100),
    description TEXT,
    house_id INT,
    FOREIGN KEY(house_id) REFERENCES house(house_id) ON DELETE CASCADE,
    aparetment_id INT,
    FOREIGN KEY(aparetment_id) REFERENCES aparetment(aparetment_id) ON DELETE CASCADE,
    land_id INT,
    FOREIGN KEY(land_id) REFERENCES land(land_id) ON DELETE CASCADE,
    store_id INT,
    FOREIGN KEY(store_id) REFERENCES store(store_id) ON DELETE CASCADE,
    PRIMARY KEY(property_id)
);
-- CREATE TABLE location_property(
--     location_property_id INT AUTO_INCREMENT,
--     region ENUM ('NKTTWEST', 'NKTTSOUTH', 'NKTTNORTH') DEFAULT 'NKTTWEST',
--     city ENUM ('TVZ', 'KSAR', 'TEYARITE', 'ARAVAT') DEFAULT 'TVZ',
--     PRIMARY KEY(location_property_id),
--     house_id INT,
--     FOREIGN KEY(house_id) REFERENCES house(house_id) ON DELETE CASCADE,
--     aparetment_id INT,
--     FOREIGN KEY(aparetment_id) REFERENCES aparetment(aparetment_id) ON DELETE CASCADE,
--     land_id INT,
--     FOREIGN KEY(land_id) REFERENCES land(land_id) ON DELETE CASCADE,
--     store_id INT,
--     FOREIGN KEY(store_id) REFERENCES store(store_id) ON DELETE CASCADE
-- );
CREATE TABLE feature(
    feature_id INT AUTO_INCREMENT,
    number_of_room INT,
    number_of_bathroom INT,
    number_of_kitchen INT,
    has_equipe BOOLEAN,
    PRIMARY KEY(feature_id),
    house_id INT,
    FOREIGN KEY(house_id) REFERENCES house(house_id) ON DELETE CASCADE,
    aparetment_id INT,
    FOREIGN KEY(aparetment_id) REFERENCES aparetment(aparetment_id) ON DELETE CASCADE
);
INSERT INTO property (
        property_type,
        add_type,
        rent_type,
        region,
        city,
        street_size,
        price,
        image,
        description,
        house_id,
        aparetment_id,
        land_id,
        store_id
    )
VALUES(
        "APPARTEMENT",
        "LOUER",
        "PAR MOIS",
        "NUOAKCHOTT OUEST",
        "TEVRAGHE ZEINA",
        400,
        20000,
        "iamge1",
        "bkaaaaaaaaaaaaaaaa",
        NULL,
        1,
        NULL,
        NULL
    );
INSERT INTO property (
        property_type,
        add_type,
        rent_type,
        region,
        city,
        street_size,
        price,
        image,
        description,
        house_id,
        aparetment_id,
        land_id,
        store_id
    )
VALUES(
        'APPARTEMENT',
        'LOUER',
        'PAR MOIS',
        'NUOAKCHOTT OUEST',
        'TEVRAGHE ZEINA ',
        ' 400 ',
        ' 20000 ',
        ' iamge1 ',
        ' bkaaaaaaaaaaaaaaaa ',
        ' NULL ',
        ' 1 ',
        ' NULL ',
        ' NULL '
    )