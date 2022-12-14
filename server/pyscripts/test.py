from pymongo import MongoClient


connectionString = "mongodb+srv://admin:12345@almquest.toauhu5.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(connectionString, tls=True, tlsAllowInvalidCertificates=True)
database1 = client["almquest"]
collection2 = database1["activedistributors"]

x = collection2.find()
for res in x:
    print(res)