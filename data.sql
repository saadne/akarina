INSERT INTO house(floor_number, furniture)
VALUES (2, TRUE);
INSERT INTO house(floor_number, furniture)
VALUES (1, FALSE);
INSERT INTO aparetment(has_equipe)
VALUES (TRUE);
INSERT INTO aparetment(has_equipe)
VALUES (FALSE);
INSERT INTO land(length, width, papper, is_title)
VALUES (12, 18, "blaaaaaaaaa", TRUE);
INSERT INTO land(length, width, papper, is_title)
VALUES (18, 18, "blaaaaaaaaa", FALSE);
INSERT INTO store(length, width)
VALUES (10, 10);
INSERT INTO store(length, width)
VALUES (10, 5);
INSERT INTO property(
        rent_type,
        add_type,
        property_type,
        street_size,
        description,
        image,
        price,
        house_id,
        aparetment_id,
        feature_id
    )
VALUES (
        'DAILY',
        'RENT',
        'HOUSE',
        200,
        'description1',
        'image1',
        150000,
        1,
        NULL,
        NULL,
        NULL
    );
INSERT INTO property(
        rent_type,
        add_type,
        property_type,
        street_size,
        description,
        image,
        price,
        house_id,
        aparetment_id,
        land_id,
        store_id
    )
VALUES (
        'YEARLY',
        'SELL',
        'HOUSE',
        300,
        'description2',
        'image1',
        1500000,
        2,
        NULL,
        NULL,
        NULL
    );
INSERT INTO property(
        rent_type,
        add_type,
        property_type,
        street_size,
        description,
        image,
        price,
        house_id,
        aparetment_id,
        land_id,
        store_id
    )
VALUES (
        'MONTHLY',
        'RENT',
        'APARETMENT',
        300,
        'description3',
        'image1',
        100000,
        NULL,
        1,
        NULL,
        NULL
    );
INSERT INTO property(
        rent_type,
        add_type,
        property_type,
        street_size,
        description,
        image,
        price,
        house_id,
        aparetment_id,
        land_id,
        store_id
    )
VALUES (
        'MONTHLY',
        'RENT',
        'APARETMENT',
        300,
        'description4',
        'image1',
        80000,
        NULL,
        2,
        NULL,
        NULL
    );
INSERT INTO property(
        rent_type,
        add_type,
        property_type,
        street_size,
        description,
        image,
        price,
        house_id,
        aparetment_id,
        land_id,
        store_id
    )
VALUES (
        'YEARLY',
        'RENT',
        'LAND',
        300,
        'description5',
        'image1',
        100000,
        NULL,
        NULL,
        1,
        NULL
    );
INSERT INTO property(
        rent_type,
        add_type,
        property_type,
        street_size,
        description,
        image,
        price,
        house_id,
        aparetment_id,
        land_id,
        store_id
    )
VALUES (
        'MONTHLY',
        'RENT',
        'LAND',
        300,
        'description6',
        'image1',
        80000,
        NULL,
        NULL,
        1,
        NULL
    );
INSERT INTO property(
        rent_type,
        add_type,
        property_type,
        street_size,
        description,
        image,
        price,
        house_id,
        aparetment_id,
        land_id,
        store_id
    )
VALUES (
        'YEARLY',
        'RENT',
        'STORE',
        100,
        'description8',
        'image1',
        100000,
        NULL,
        NULL,
        NULL,
        1
    );
INSERT INTO property(
        rent_type,
        add_type,
        property_type,
        street_size,
        description,
        image,
        price,
        house_id,
        aparetment_id,
        land_id,
        store_id
    )
VALUES (
        'MONTHLY',
        'RENT',
        'LAND',
        300,
        'description9',
        'image1',
        80000,
        NULL,
        NULL,
        NULL,
        2
    );
INSERT INTO location_property (
        region,
        city,
        house_id,
        aparetment_id,
        land_id,
        store_id
    )
VALUES('NKTTWEST', 'TVZ', 1, NULL, NULL, NULL);
INSERT INTO location_property (
        region,
        city,
        house_id,
        aparetment_id,
        land_id,
        store_id
    )
VALUES('NKTTWEST', 'KSAR', 2, NULL, NULL, NULL);
INSERT INTO location_property (
        region,
        city,
        house_id,
        aparetment_id,
        land_id,
        store_id
    )
VALUES('NKTTWEST', 'KSAR', NULL, 1, NULL, NULL);
INSERT INTO location_property (
        region,
        city,
        house_id,
        aparetment_id,
        land_id,
        store_id
    )
VALUES('NKTTWEST', 'TVZ', NULL, 2, NULL, NULL);
INSERT INTO location_property (
        region,
        city,
        house_id,
        aparetment_id,
        land_id,
        store_id
    )
VALUES('NKTTNORTH', 'ARAVAT', NULL, NULL, 1, NULL);
INSERT INTO location_property (
        region,
        city,
        house_id,
        aparetment_id,
        land_id,
        store_id
    )
VALUES('NKTTNORTH', 'ARAVAT', NULL, NULL, 2, NULL);
INSERT INTO location_property (
        region,
        city,
        house_id,
        aparetment_id,
        land_id,
        store_id
    )
VALUES('NKTTNORTH', 'ARAVAT', NULL, NULL, NULL, 1);
INSERT INTO location_property (
        region,
        city,
        house_id,
        aparetment_id,
        land_id,
        store_id
    )
VALUES('NKTTNORTH', 'ARAVAT', NULL, NULL, NULL, 2);
INSERT INTO feature (
        number_of_room,
        number_of_bathroom,
        has_car_park,
        number_of_kitchen,
        house_id,
        aparetment_id
    )
VALUES(7, 2, TRUE, 1, 1, NULL);
INSERT INTO feature (
        number_of_room,
        number_of_bathroom,
        has_car_park,
        number_of_kitchen,
        house_id,
        aparetment_id
    )
VALUES(7, 2, TRUE, 1, 2, NULL);
INSERT INTO feature (
        number_of_room,
        number_of_bathroom,
        has_car_park,
        number_of_kitchen,
        house_id,
        aparetment_id
    )
VALUES(7, 2, TRUE, 1, NULL, 1);
INSERT INTO feature (
        number_of_room,
        number_of_bathroom,
        has_car_park,
        number_of_kitchen,
        house_id,
        aparetment_id
    )
VALUES(7, 2, TRUE, 1, NULL, 2);