from pymongo import MongoClient
from haversine import haversine, Unit

# Donation detected by accessing donated packages table and traversing the entire table and finding a suitable pair for
# the donor who has donated

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

    collection4 = database1["donors"]
    collection5 = database1["distributors"]

    donatedPackages = collection1.find()
    activeDistributors = collection2.find()

    for package in donatedPackages:
        x = package['donor_id']
        donor_object = collection4.find_one({"_id": x})
        lat_donor = donor_object["location"]["coordinates"][0]
        lon_donor = donor_object["location"]["coordinates"][1]
        distance_list = list()

        for distributors in activeDistributors:
            y = distributors['distributor_id']
            distributor_object = collection5.find_one({"_id": y})
            lat_dist = distributor_object["location"]["coordinates"][0]
            lon_dist = distributor_object["location"]["coordinates"][1]
            distance = haversine((lat_donor, lon_donor), (lat_dist, lon_dist))
            distance_list.append([x, y, distance])

        distance_list.sort(key=selectDist)
        post1 = {
            "donor_id": distance_list[0][0],
            "distributor_id": distance_list[0][1],
            "meet_location": {
                "coordinates": [
                    1,
                    1
                    ],
                "address": "94/2 C Road, Anandapuri, Barrackpore",
                "type": "Point"
            }
        }
        collection3.insert_one(post1)


def main():
    pair()


if __name__ == "__main__":
    main()
