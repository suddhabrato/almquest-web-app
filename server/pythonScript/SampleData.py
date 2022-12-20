# mycol.update_one({}, {"$set": {"maxCapacity": 100}})


# post1 = {
#   "name": "Dick",
#   "email": "dick@gmail.com",
#   "phone": "+91 79329842983",
#   "location": {
#     "coordinates": [
#       24.3241,
#       88.2314
#     ],
#     "address": "94/2 C Road, Anandapuri, Barrackpore",
#     "type": "Point"
#   },
#   "distanceRange": 3,
#   "maxCapacity": 30,
#   "availableCapacity": 30,
#   "totalPackagesDistributed": 0,
#   "__v": 0
# }
#
# mycol.insert_one(post1)
#
# post2 = {
#   "name": "ban",
#   "email": "ban@gmail.com",
#   "phone": "+91 79329842983",
#   "location": {
#     "coordinates": [
#       24.3241,
#       88.2314
#     ],
#     "address": "94/2 C Road, Anandapuri, Barrackpore",
#     "type": "Point"
#   },
#   "distanceRange": 3,
#   "maxCapacity": 30,
#   "availableCapacity": 30,
#   "totalPackagesDistributed": 0,
#   "__v": 0
# }
#
# post3 = {
#   "name": "sudo",
#   "email": "sudo@gmail.com",
#   "phone": "+91 79329842983",
#   "location": {
#     "coordinates": [
#       24.3241,
#       88.2314
#     ],
#     "address": "94/2 C Road, Anandapuri, Barrackpore",
#     "type": "Point"
#   },
#   "distanceRange": 3,
#   "maxCapacity": 30,
#   "availableCapacity": 30,
#   "totalPackagesDistributed": 0,
#   "__v": 0
# }
#

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
      "name": "Moby",
      "email": "moby@gmail.com",
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
      "name": "Mike",
      "email": "mike@gmail.com",
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
      "name": "Dan",
      "email": "dan@gmail.com",
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
      "name": "sudo",
      "email": "sudo@gmail.com",
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
      "name": "tamo",
      "email": "tamo@gmail.com",
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
    }
]
# mycol.insert_many([post2, post3])