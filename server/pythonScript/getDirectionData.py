import GetPath as path
import googlemaps
from datetime import datetime

x = ""
x = 'AIzaSyBbcFeq42Ad9aqnlZuQdkNahM3YmyC2Z6Y'

gmaps = googlemaps.Client(key=x)

# cord1 and cord2 must be passed as a tuple


def getDirectionList(cord1, cord2):
    directionsCords = gmaps.directions(cord1, cord2)
    return directionsCords









