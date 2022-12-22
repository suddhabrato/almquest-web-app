import certifi
from pymongo import MongoClient
from haversine import haversine, Unit


def dist(coord1, coord2):
    distance = haversine(coord1, coord2)
    return distance


def getDataFromDistributors():
    # ca = certifi.where()
    client = MongoClient("mongodb+srv://admin:12345@almquest.toauhu5.mongodb.net/?retryWrites=true&w=majority",
                         tls=True,
                         tlsAllowInvalidCertificates=True)
    database = client["almquest"]
    collection = database["distributors"]

    result = collection.find()

    for res in result:
        print(res)
        print(type(res["_id"]))
        print("----------------------------------")
        print('name: ', res['name'], '\nlat: ', res['location']['coordinates'][0], "\nlon: ", res['location']
        ['coordinates'][1])


def getDataFromDonors():

    client = MongoClient("mongodb+srv://admin:12345@almquest.toauhu5.mongodb.net/?retryWrites=true&w=majority",
                         tls=True,
                         tlsAllowInvalidCertificates=True)
    database1 = client["almquest"]
    collection1 = database1["donors"]
    collection2 = database1["distributors"]

    donors = collection1.find()

    for res in donors:
        print("----------------------------------")
        print('name: ', res['name'], '\nlat: ', res['location']['coordinates'][0], "\nlon: ", res['location']
        ['coordinates'][1])
        lat1 = res['location']['coordinates'][0]
        lon1 = res['location']['coordinates'][1]
        print("Distance from each Distributor: \n")
        distributors = collection2.find()
        for res2 in distributors:
            lat2 = res2['location']['coordinates'][0]
            lon2 = res2['location']['coordinates'][1]
            distance = haversine((lat1, lon1), (lat2, lon2))
            print("     ", "Name: ", res2['name'])
            print("     ", "Distance: ", distance, " kms")
            print("---------")


def main():
    print("\nDistributors: \n")
    getDataFromDistributors()
    # print("\n\nDonors: \n")
    # getDataFromDonors()


if __name__ == "__main__":
    main()
