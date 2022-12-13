from pymongo import MongoClient

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
    post1 = [
      {
        "name": "Dick",
        "email": "dick@gmail.com",
        "phone": "+91 79329842983",
        "location": {
          "coordinates": [
            24.3241,
            88.2314
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
        "name": "ban",
        "email": "ban@gmail.com",
        "phone": "+91 79329842983",
        "location": {
          "coordinates": [
            24.38,
            88.24
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
      },
      {
        "name": "Dan",
        "email": "dan@gmail.com",
        "phone": "+91 79329842983",
        "location": {
          "coordinates": [
            25.3241,
            88.2
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
        "name": "sudo",
        "email": "sudo@gmail.com",
        "phone": "+91 79329842983",
        "location": {
          "coordinates": [
            24.5241,
            88.29
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
        "name": "tamo",
        "email": "tamo@gmail.com",
        "phone": "+91 79329842983",
        "location": {
          "coordinates": [
            24.329,
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
      }
    ]
    insert(post1)


if __name__ == "__main__":
    main()
