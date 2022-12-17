from pymongo import MongoClient
from haversine import haversine, Unit
# import getDirectionData as gd
# import getBestMatch as gm

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

    collection4 = database1["donors"]
    collection5 = database1["distributors"]

    donatedPackages = collection1.find()
    activeDistributors = collection2.find()
    within_range = list()
    for package in donatedPackages:
        x = package['donor_id']
        donor_object = collection4.find_one({"_id": x})
        lat_donor = donor_object["location"]["coordinates"][0]
        lon_donor = donor_object["location"]["coordinates"][1]

        don_cord = [lat_donor, lon_donor]

        for distributors in activeDistributors:
            y = distributors['distributor_id']
            distributor_object = collection5.find_one({"_id": y})
            lat_dist = distributor_object["location"]["coordinates"][0]
            lon_dist = distributor_object["location"]["coordinates"][1]

            dist_cord = [lat_dist, lon_dist]
            distance = haversine(don_cord, dist_cord)
            if distance <= max_range:
                within_range.append(y)

        # Create a post to push data in paireddonordist
        # collection3.insert_one()

    print(within_range)


def main():
    pair()


if __name__ == "__main__":
    main()
