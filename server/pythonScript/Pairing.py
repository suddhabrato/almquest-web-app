from pymongo import MongoClient
from haversine import haversine
import getPathURL as gpu
import bson
import KDTreeModel as model
import getBestMatch as gBM

max_range = 50

connectionString = "mongodb+srv://admin:12345@almquest.toauhu5.mongodb.net/?retryWrites=true&w=majority"


def selectDist(param):
    return param[2]


def pair(y1):
    client = MongoClient(connectionString, tls=True,
                         tlsAllowInvalidCertificates=True)

    database1 = client["almquest"]

    collection1 = database1["donatedpackages"]
    collection2 = database1["activedistributors"]
    collection3 = database1["paireddonordists"]
    collection5 = database1["distributors"]

    activeDistributors = collection2.find()

    x = bson.objectid.ObjectId(y1)

    donatedpackage_object = collection1.find_one({"_id": x})
    lat_package = donatedpackage_object["location"]["coordinates"][0]
    lon_package = donatedpackage_object["location"]["coordinates"][1]
    donation_amt = donatedpackage_object["quantity"]
    donor_travel_capacity = donatedpackage_object["travelCapacity"]

    distributor_list_fiter1 = list()  # 50km range and available capacity filtering

    # Traverse the activedistributor collection to check each active dist for compatibility

    for dist in activeDistributors:
        y = dist['distributor_id']
        distributor_object = collection5.find_one({"_id": y})

        # getting Coordinates of the Distributor
        lat_dist = distributor_object["location"]["coordinates"][0]
        lon_dist = distributor_object["location"]["coordinates"][1]

        # Getting availableCapacity of each distributor
        dist_available_capacity = distributor_object["availableCapacity"]

        # check if donation amount is less thn available capacity
        if donation_amt <= dist_available_capacity:
            hav_dist = haversine((lat_package, lon_package), (lat_dist, lon_dist))
            if hav_dist <= 80:
                distributor_list_fiter1.append([y, lat_dist, lon_dist])

    # 5NN
    distributor_list_fiter2 = model.findNearestDistributor(distributor_list_fiter1)
    meet_lat, meet_lon = gBM.meetLocation([lat_package, lat_package], distributor_list_fiter2, donor_travel_capacity)


# z = float(gDD.getDirectionList((lat_donor, lon_donor), (lat_dist, lon_dist))[0]['legs'][0]["distance"]
#           ["text"].rsplit(" ")[0])
# if z <= (dist_travel_capacity+donor_travel_capacity):
#     post1 = {
#
#             "donor_id": x,
#             "distributor_id": y,
#
#             "meet_location": {
#                 "coordinates": [
#                     # lat_donor,
#                     # lon_donor
#                 ],
#                 "address": "94/2 C Road, Anandapuri, Barrackpore",
#                 "type": "Point"
#             },
#             # "donor_path": gpu.getPath([lat_donor, lon_donor], [lat_dist, lon_dist]),
#             # "distributor_path": gpu.getPath([lat_dist, lon_dist], [lat_donor, lon_donor]),
#             "__v": 0
#
#     }
#     collection3.insert_one(post1)
#     print("1")
#     return post1

