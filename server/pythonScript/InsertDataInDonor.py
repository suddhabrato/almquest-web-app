from pymongo import MongoClient
import json

connectionString = "mongodb+srv://admin:12345@almquest.toauhu5.mongodb.net/?retryWrites=true&w=majority"


def insert(post):
    client = MongoClient(connectionString,
                         tls=True,
                         tlsAllowInvalidCertificates=True)
    database = client["almquest"]
    collection = database["donors"]

    for i in post:
        collection.insert_one(i)


def donor1ins():
    file1 = open('donors1.json')
    data1 = json.load(file1)
    file1.close()
    insert(data1["donordata1"])


def donor2ins():
    file2 = open('donors2.json')
    data2 = json.load(file2)
    file2.close()
    insert(data2["donors2"])


def donoredgeins():
    file3 = open('donors_edge.json')
    data3 = json.load(file3)
    file3.close()
    insert(data3["donors_edge"])


def main():
    # post1 = [
    #     {
    #         "name": "Billi",
    #         "email": "billi@gmail.com",
    #         "phone": 9874625263,
    #         "donorType": "Individual",
    #         "location": {
    #             "coordinates": [
    #                 24.33,
    #                 88.25
    #             ],
    #             "address": "94/2 C Road, Anandapuri, Barrackpore",
    #             "type": "Point"
    #         },
    #         "distanceRange": 3,
    #         "lifetimeDonation": 10
    #     },
    #     {
    #         "name": "Dipu",
    #         "email": "dipu@gmail.com",
    #         "phone": 9874625263,
    #         "donorType": "Individual",
    #         "location": {
    #             "coordinates": [
    #                 24.329,
    #                 88.236
    #             ],
    #             "address": "94/2 C Road, Anandapuri, Barrackpore",
    #             "type": "Point"
    #         },
    #         "distanceRange": 5,
    #         "lifetimeDonation": 10
    #     },
    #     {
    #         "name": "Mampu",
    #         "email": "mampu@gmail.com",
    #         "phone": 9874625263,
    #         "donorType": "Individual",
    #         "location": {
    #             "coordinates": [
    #                 24.328,
    #                 88.23
    #             ],
    #             "address": "94/2 C Road, Anandapuri, Barrackpore",
    #             "type": "Point"
    #         },
    #         "distanceRange": 0,
    #         "lifetimeDonation": 10
    #     }
    # ]

    # Already Pushed

    # donor1ins()
    # donor2ins()
    # donoredgeins()
    print("All Insertions Successfully Completed")


if __name__ == "__main__":
    main()
