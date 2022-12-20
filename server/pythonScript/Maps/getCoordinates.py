sampleAddress = " Paresh    Nagar, Ghatal, West Bengal 721212"

sam = "https://www.google.com/maps/place/Paresh+Nagar,+Ghatal,+West+Bengal+721212"


def getCords(address):
    __prefix = "https://www.google.com/maps/search/"

    __deconstruct = address.rsplit(",")
    __components = list()

    for i in __deconstruct:
        x = i.rsplit(" ")
        __components.append(x)

    # __addressComponent = ""
    # for i in __deconstruct:
    #     i = i.strip()
    #     __addressComponent = __addressComponent + "+" + i
    #
    # outputURL = __prefix+__addressComponent
    return __components


print(getCords("MP6W+M2R, Paresh Nagar, Ghatal, West Bengal 721212"))
