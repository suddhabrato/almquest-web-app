import certifi
from pymongo import MongoClient
from math import sin, cos, sqrt, atan2
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
        print("----------------------------------")
        print('name: ', res['name'], '\nlat: ', res['location']['coordinates'][0], "\nlon: ", res['location']
        ['coordinates'][1])


def getDataFromDonors():

    client = MongoClient("mongodb+srv://admin:12345@almquest.toauhu5.mongodb.net/?retryWrites=true&w=majority",
                         tls=True,
                         tlsAllowInvalidCertificates=True)
    database = client["almquest"]
    collection = database["donors"]

    result = collection.find()

    for res in result:
        print('name: ', res['name'], 'lat: ', res['location']['coordinates'][0], "\nlon: ", res['location']
        ['coordinates'][1])


def main():
    getDataFromDistributors()
    # getDataFromDonors()


if __name__ == "__main__":
    main()
