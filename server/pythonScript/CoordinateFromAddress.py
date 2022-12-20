import geopandas


def pointsFromAddress(add1):
    df = geopandas.tools.geocode([add1])
    return df


def point():
    add = "27A,College Rd, Shalimar, Howrah, West Bengal 711103"
    add2 = "+Botanical Garden Area, Kolkata, West Bengal 711103"
    x = pointsFromAddress(add2)
    print(x['geometry'])


point()


