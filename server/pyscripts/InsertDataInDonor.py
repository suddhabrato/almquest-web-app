from pymongo import MongoClient

connectionString = "mongodb+srv://admin:12345@almquest.toauhu5.mongodb.net/?retryWrites=true&w=majority"


def insert(post):
    client = MongoClient(connectionString,
                         tls=True,
                         tlsAllowInvalidCertificates=True)
    database = client["almquest"]
    collection = database["donors"]

    for i in post:
        collection.insert_one(i)


def main():
    post1 = [
        {
            "name": "Billi",
            "email": "billi@gmail.com",
            "phone": 9874625263,
            "donorType": "Individual",
            "location": {
                "coordinates": [
                    24.33,
                    88.25
                ],
                "address": "94/2 C Road, Anandapuri, Barrackpore",
                "type": "Point"
            },
            "distanceRange": 3,
            "lifetimeDonation": 10
        },
        {
            "name": "Dipu",
            "email": "dipu@gmail.com",
            "phone": 9874625263,
            "donorType": "Individual",
            "location": {
                "coordinates": [
                    24.329,
                    88.236
                ],
                "address": "94/2 C Road, Anandapuri, Barrackpore",
                "type": "Point"
            },
            "distanceRange": 5,
            "lifetimeDonation": 10
        },
        {
            "name": "Mampu",
            "email": "mampu@gmail.com",
            "phone": 9874625263,
            "donorType": "Individual",
            "location": {
                "coordinates": [
                    24.328,
                    88.23
                ],
                "address": "94/2 C Road, Anandapuri, Barrackpore",
                "type": "Point"
            },
            "distanceRange": 0,
            "lifetimeDonation": 10
        }
    ]
    insert(post1)


if __name__ == "__main__":
    main()
