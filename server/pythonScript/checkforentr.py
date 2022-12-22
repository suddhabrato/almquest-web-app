from pymongo import MongoClient

connectionString = "mongodb+srv://admin:12345@almquest.toauhu5.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(connectionString, tls=True, tlsAllowInvalidCertificates=True)

database = client["almquest"]
collection1 = database["activedistributors"]
collection2 = database["distributors"]

actdist = collection2.find()
dist = collection1.find()

for dists in actdist:
    x = dists["_id"]
    for dists2 in dist:
        if dists2["distributor_id"] == x:
            print(x)


