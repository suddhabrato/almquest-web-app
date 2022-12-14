from pymongo import MongoClient
from haversine import haversine, Unit

connectionString = "mongodb+srv://admin:12345@almquest.toauhu5.mongodb.net/?retryWrites=true&w=majority"


def insertInActiveDistributors(post):
    client = MongoClient(connectionString, tls=True,
                         tlsAllowInvalidCertificates=True)
    database = client["almquest"]
    collection = database["ActiveDistributor"]
    for obj in post:
        collection.insert_one(obj)


def main():
    post1 = [
        {
            "name": "Moby",
            "email": "moby@gmail.com",
            "phone": "+91 79329842983",
            "location": {
                "coordinates": [
                    24.39,
                    88.239
                ],
                "address": "94/2 C Road, Anandapuri, Barrackpore",
                "type": "Point"
            },
            "distanceRange": 3,
            "maxCapacity": 30,
            "availableCapacity": 30,
            "totalPackagesDistributed": 0,
            "__v": 0
        },
        {
            "name": "Mike",
            "email": "mike@gmail.com",
            "phone": "+91 79329842983",
            "location": {
                "coordinates": [
                    24.4,
                    88.3
                ],
                "address": "94/2 C Road, Anandapuri, Barrackpore",
                "type": "Point"
            },
            "distanceRange": 3,
            "maxCapacity": 30,
            "availableCapacity": 30,
            "totalPackagesDistributed": 0,
            "__v": 0
        }
    ]
    insertInActiveDistributors(post1)


if __name__ == "__main__":
    main()
