from sklearn.neighbors import KDTree
import numpy as np


def __createNdArray(x):
    # first column of x is distributor_id
    temp = np.array(x)
    coordinates = np.delete(temp, 0, 1)
    distributor = np.delete(temp, [1, 2], 1)
    return coordinates, distributor


def findNearestDistributor(x):
    coordinates, distributor = __createNdArray(x)
    tree = KDTree(coordinates, leaf_size=2, metric='haversine')
    dist, ind = tree.query(coordinates[0:1], k=10)
    nearest_neighbours = list()
    for i in range(1, ind[0].size, 1):
        # Get the distributor ID of the nearest distributors
        nearest_neighbours.append(distributor[ind[i]])
    return nearest_neighbours
    # print(x)
    # print(dist)
    # print(ind[0])


test_cords = [[
                22.658819037229105,
                87.73876307716137
              ],
              [
                22.646293071820285,
                87.74749802091743
              ],
              [
                  22.67458972721672,
                  87.74124738988394
              ],
              [
                  22.677334387547425,
                  87.76006653932278
              ],
              [
                  22.752200594805768,
                  87.67527398554545
              ],
              [
                  22.729517684946977,
                  87.51134176947038
              ],
              [
                  22.73103732354783,
                  87.51194556594031
              ],
              [
                  22.731125798211195,
                  87.51858199936095
              ],
              [
                  22.661003088718658,
                  87.24612274575027
              ],
              [
                  22.891211201629385,
                  87.19583554851691
              ],
              ]
