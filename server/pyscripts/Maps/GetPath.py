urlSample = "https://www.google.com/maps/dir/22.658819037229105,+87.73876307716137/22.65005717277115,+87.74057383305728"


def getPath(cord1, cord2):
    lat1 = cord1[0]
    lon1 = cord1[1]
    lat2 = cord2[0]
    lon2 = cord2[1]
    defaultStr = "https://www.google.com/maps/dir/"
    finalUrl = defaultStr+str(lat1)+",+"+str(lon1)+"/"+str(lat2)+",+"+str(lon2)
    return finalUrl
