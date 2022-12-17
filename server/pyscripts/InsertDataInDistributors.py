from pymongo import MongoClient
import json
connectionString = "mongodb+srv://admin:12345@almquest.toauhu5.mongodb.net/?retryWrites=true&w=majority"


def insert(post):
    client = MongoClient(connectionString,
                         tls=True,
                         tlsAllowInvalidCertificates=True)
    database = client["almquest"]
    collection = database["distributors"]

    for i in post:
        collection.insert_one(i)


def main():
    file4 = open('distributors.json')
    data4 = json.load(file4)
    file4.close()
    insert(data4["distributors"])


if __name__ == "__main__":
    main()
