import getDirectionData as gDD
from pymongo import MongoClient

connectionString = "mongodb+srv://admin:12345@almquest.toauhu5.mongodb.net/?retryWrites=true&w=majority"


def __sortingParam(val):
    return float(val[0]['legs'][0]["distance"]["text"].rsplit(" ")[0])


def __compare(package_cords, dist_list, donor_travel_capacity):
    client = MongoClient(connectionString, tls=True, tlsAllowInvalidCertificates=True)
    database1 = client["almquest"]
    collection = database1["distributors"]

    # find each _id in dist collection and get coordinates and find map path distance and get the minimum
    # and get its path steps then traverse all points in it legs to find the best meet point for the dist and donor

    # z = float(gDD.getDirectionList((lat_donor, lon_donor), (lat_dist, lon_dist))[0]['legs'][0]["distance"]
    #           ["text"].rsplit(" ")[0])
    dist_travel_capacity = 0
    distributor_list = list()
    for i in dist_list:
        distObj = collection.find_one({"_id": i})
        dist_travel_capacity = distObj["distanceRange"]
        distCords = (distObj["location"]["coordinates"][0], distObj["location"]["coordinates"][1])
        packCords = (package_cords[0], package_cords[1])
        # print("Coordinates:", distCords, packCords)
        p = gDD.getDirectionList(distCords, packCords)
        # print(p)
        z = p[0]
        if float(z['legs'][0]["distance"]["text"].rsplit(" ")[0]) <= donor_travel_capacity+dist_travel_capacity:
            distributor_list.append([z, i])

    if len(distributor_list) == 0:
        return 0, 0, None
    # print("Distributor List: \n")
    # print(distributor_list)
    distributor_list.sort(key=__sortingParam)
    # print("After Sort Distributor List: \n")
    # print(distributor_list)
    bestOne = distributor_list[0][0]

    path_legs = bestOne['legs'][0]
    path_steps = path_legs['steps']

    path_length = 0
    point = list()
    for i in range(len(path_steps)):
        z = path_steps[i]["distance"]["text"].rsplit(" ")
        unit = z[1]
        dist = float(z[0])
        if unit == 'm':
            dist = dist/1000
        path_length = path_length + dist
        if dist_travel_capacity >= path_length:
            point = [path_steps[i]['end_location']['lat'], path_steps[i]['end_location']['lng']]

    return point[0], point[1], distributor_list[0][1]


def meetLocation(package_cords, dist_list, donor_travel_capacity):
    meet_lat, meet_lon, distributor_id = __compare(package_cords, dist_list, donor_travel_capacity)
    return meet_lat, meet_lon, distributor_id
