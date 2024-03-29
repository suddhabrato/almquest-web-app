from pymongo import MongoClient
connectionString = "mongodb+srv://admin:12345@almquest.toauhu5.mongodb.net/?retryWrites=true&w=majority"


def insert(post):
    client = MongoClient(connectionString,
                         tls=True,
                         tlsAllowInvalidCertificates=True)
    database = client["almquest"]
    collection = database["donatedpackages"]
    collection.insert_one(post)


def main():
    client = MongoClient(connectionString,
                         tls=True,
                         tlsAllowInvalidCertificates=True)
    database = client["almquest"]
    collection = database["donors"]
    # donorObj = collection.find_one({"name": "Mithila Lodge"})
    # post1 = {
    #     "donor_id": donorObj["_id"],
    #     "quantity": 6,
    #     "travelCapacity": 4
    # }
    # insert(post1)
    donorObj2 = collection.find_one({"name": "Ishita's Collection"})
    post2 = {
        "donor_id": donorObj2["_id"],
        "quantity": 2,
        "travelCapacity": 100,
        "location": {
            'coordinates': [22.560348, 88.372786],
            'address': 'Convent Road',
        },
        'current_state': "Not Paired",
        'pair': {
            'distributor_id': '',
            'meet_location': {
                'coordinates': [],
                'address': '',
            },
            'donor_path': '',
            'distributor_path': '',
        }
    }
    insert(post2)


if __name__ == "__main__":
    main()
