from pymongo import MongoClient
from haversine import haversine
import getDirectionData as gDD
import getBestMatch as gm
import getPathURL as gpu
import sys
max_range = 50

connectionString = "mongodb+srv://admin:12345@almquest.toauhu5.mongodb.net/?retryWrites=true&w=majority"


def selectDist(param):
    return param[2]


def pair():
    client = MongoClient(connectionString, tls=True,
                         tlsAllowInvalidCertificates=True)

    database1 = client["almquest"]

    collection1 = database1["donatedpackages"]
    collection2 = database1["activedistributors"]
    collection3 = database1["paireddonordists"]
    collection5 = database1["distributors"]

    activeDistributors = collection2.find()
    within_range = list()

    x = sys.argv[0]

    donatedpackage_object = collection1.find_one({"_id": x})

    lat_donor = donatedpackage_object["location"]["coordinates"][0]
    lon_donor = donatedpackage_object["location"]["coordinates"][1]
    donation_amt = donatedpackage_object["quantity"]
    donor_travel_capacity = donatedpackage_object["travelCapacity"]

    don_cord = [lat_donor, lon_donor]

    # Traverse the activedistributor collection to check each active dist for compatibility

    for dist in activeDistributors:
        y = dist['distributor_id']
        distributor_object = collection5.find_one({"_id": y})
        lat_dist = distributor_object["location"]["coordinates"][0]
        lon_dist = distributor_object["location"]["coordinates"][1]

        dist_travel_capacity = distributor_object["travelCapacity"]
        dist_available_capacity = distributor_object["travelCapacity"]

        dist_cord = [lat_dist, lon_dist]
        distance = haversine(don_cord, dist_cord)

        if distance <= max_range and donation_amt < dist_available_capacity:
            x = gDD.getDirectionList((lat_donor, lon_donor), (lat_dist, lon_dist))[0]['legs'][0]["distance"]["text"]
            if x <= (dist_travel_capacity+donor_travel_capacity):
                post1 = {
                    {
                        "donor_id": x,
                        "distributor_id": y,

                        "meet_location": {
                            "coordinates": [
                                lat_donor,
                                lon_donor
                            ],
                            "address": "94/2 C Road, Anandapuri, Barrackpore",
                            "type": "Point"
                        },
                        "donor_path": gpu.getPath([lat_donor, lon_donor], [lat_dist, lon_dist]),
                        "distributor_path": gpu.getPath([lat_dist, lon_dist], [lat_donor, lon_donor]),
                        "__v": 0
                    }
                }
                collection3.insert_one(post1)
                return

    # Create a post to push data in paireddonordist


def main():
    pair()


if __name__ == "__main__":
    main()
