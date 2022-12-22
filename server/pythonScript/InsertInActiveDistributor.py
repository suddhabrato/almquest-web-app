from pymongo import MongoClient

connectionString = "mongodb+srv://admin:12345@almquest.toauhu5.mongodb.net/?retryWrites=true&w=majority"


def insert(post1):
    client = MongoClient(connectionString,
                         tls=True,
                         tlsAllowInvalidCertificates=True)
    database = client["almquest"]
    collection = database["activedistributors"]

    collection.insert_one(post1)


def main():
    client = MongoClient(connectionString,
                         tls=True,
                         tlsAllowInvalidCertificates=True)
    database1 = client["almquest"]
    collection = database1["distributors"]
    distObj1 = collection.find_one({"name": "Indravo Ghosh"})
    post1 = {
        "distributor_id": distObj1["_id"],
        "__v": 0
    }
    insert(post1)
    distObj2 = collection.find_one({"name": "Tere Naam"})
    post2 = {
        "distributor_id": distObj2["_id"],
        "__v": 0
    }
    insert(post2)


if __name__ == "__main__":
    main()