SELECT house.house_id,
    house.floor_number,
    house.furniture,
    property.rent_type,
    property.add_type,
    property.property_type,
    property.description,
    property.image,
    property.price,
    location_property.region,
    location_property.city,
    feature.number_of_room,
    feature.number_of_bathroom,
    feature.has_car_park,
    feature.number_of_kitchen
FROM (
        (
            (
                house
                INNER JOIN property ON house.house_id = property.house_id
            )
            INNER JOIN location_property ON house.house_id = location_property.house_id
        )
        INNER JOIN feature ON house.house_id = feature.house_id
    );
SELECT aparetment.aparetment_id,
    aparetment.has_equipe,
    property.rent_type,
    property.add_type,
    property.property_type,
    property.description,
    property.image,
    property.price,
    location_property.region,
    location_property.city,
    feature.number_of_room,
    feature.number_of_bathroom,
    feature.has_car_park,
    feature.number_of_kitchen
FROM (
        (
            (
                aparetment
                INNER JOIN property ON aparetment.aparetment_id = property.aparetment_id
            )
            INNER JOIN location_property ON aparetment.aparetment_id = location_property.aparetment_id
        )
        INNER JOIN feature ON aparetment.aparetment_id = feature.aparetment_id
    );
SELECT land.land_id,
    land.width,
    land.length,
    land.papper,
    land.is_title,
    property.rent_type,
    property.add_type,
    property.property_type,
    property.description,
    property.image,
    property.price,
    location_property.region,
    location_property.city
FROM (
        (
            land
            INNER JOIN property ON land.land_id = property.land_id
        )
        INNER JOIN location_property ON land.land_id = location_property.land_id
    );
SELECT store.store_id,
    store.width,
    store.length,
    property.rent_type,
    property.add_type,
    property.property_type,
    property.description,
    property.image,
    property.price,
    location_property.region,
    location_property.city
FROM (
        (
            store
            INNER JOIN property ON store.store_id = property.store_id
        )
        INNER JOIN location_property ON store.store_id = location_property.store_id
    );