from pymongo import MongoClient
from haversine import haversine
import GetPath as gp
import bson
import KDTreeModel as model
import getBestMatch as gBM
import datetime
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
    collection4 = database1["notifications"]
    collection5 = database1["distributors"]
    collection6 = database1["donor"]
    activeDistributors = collection2.find()

    x = bson.objectid.ObjectId(y1)

    donatedpackage_object = collection1.find_one({"_id": x})
    donor_object = collection6.find_one({'_id': donatedpackage_object['donor_id']})

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
    meet_lat, meet_lon, distributor_id = gBM.meetLocation([lat_package, lat_package], distributor_list_fiter2, donor_travel_capacity)

    #Pair Not Found

    if meet_lat == 0 and meet_lon == 0:
        post_notif_donor = {
            "user_id": donatedpackage_object['donor_id'],
            'user_type': 'Donor',
            'message': 'We could not find a pair for you',
            'packageId': x,
            'name': '',
            'photo': '',
            'desc': 'We could not find a pair for you',
            'timestamp': datetime.datetime.now(),
            'meet_location': {
                'coordinates': [0, 0],
                'address': '',
            },
            'path': ''
        }
        collection4.insert_one(post_notif_donor)

    else:
        distributor_obj = collection5.find_one({"_id": distributor_id})

        post_notif_donor = {
            "user_id": donatedpackage_object['donor_id'],
            'user_type': 'Donor',
            'message': 'You have been Paired',
            'packageId': x,
            'name': distributor_obj['name'],
            'photo': distributor_obj['photo'],
            'desc': 'You have been paired',
            'timestamp': datetime.datetime.now(),
            'meet_location': {
                'coordinates': [meet_lat, meet_lon],
                'address': '',
            },
            'path': gp.getPath([lat_package, lon_package], [meet_lat, meet_lon])
        }

        post_notif_dist = {
            "user_id": distributor_id,
            'user_type': 'Distributor',
            'message': 'You have been Paired',
            'packageId': x,
            'name': donor_object['name'],
            'photo': donor_object['photo'],
            'desc': 'You have been paired',
            'timestamp': datetime.datetime.now(),
            'meet_location': {
                'coordinates': [meet_lat, meet_lon],
                'address': '',
            },
            'path': gp.getPath([distributor_obj["location"]["coordinates"][0], distributor_obj["location"]["coordinates"][1]], [meet_lat, meet_lon])
        }

        post_donated_packages_update_1 = {
            '$set': {'current_state': "Paired"
            }
        }
        post_donated_packages_update_2 = {
            '$set': {'pair': {
                'distributor_id': distributor_id,
                'meet_location': {
                    'coordinates': [meet_lat, meet_lon],
                    'address': '',
                },
                'donor_path': gp.getPath([lat_package, lon_package], [meet_lat, meet_lon]),
                'distributor_path': gp.getPath([distributor_obj["location"]["coordinates"][0], distributor_obj["location"]["coordinates"][1]], [meet_lat, meet_lon]),
                }
            }
        }
        collection4.insert_one(post_notif_dist)
        collection4.insert_one(post_notif_donor)
        collection5.update_one({'_id': x}, post_donated_packages_update_1)
        collection5.update_one({'_id': x}, post_donated_packages_update_2)







