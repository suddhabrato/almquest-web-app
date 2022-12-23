from sklearn.neighbors import KDTree
import numpy as np


def __createNdArray(x):
    # first column of x is distributor_id
    temp = np.array(x)
    coordinates = np.delete(temp, 0, 1)
    distributor = np.delete(temp, [1, 2], 1)
    return coordinates, distributor


def findNearestDistributor(x):
    # print("passed parameter to KDTree:", x)
    coordinates, distributor = __createNdArray(x)
    # print("coord Return from ndCreateArray: ", coordinates)
    # print("dist Return from ndCreateArray: ", coordinates)
    training_points = distributor.shape[0]
    # print(training_points)
    tree = KDTree(coordinates, leaf_size=2, metric='manhattan')
    dist, ind = tree.query(coordinates[0:1], k=training_points)
    nearest_neighbours = list()
    # print(dist)
    # print(x)
    # print(dist)
    # print(ind[0])
    for i in range(1, ind[0].size, 1):
        # Get the distributor ID of the nearest distributors
        nearest_neighbours.append(distributor[ind[0][i]][0])

    # print("Nearest Neighbours: ", nearest_neighbours)
    return nearest_neighbours


test_cords = [[
                1,
                22.658819037229105,
                87.73876307716137

              ],
              [
                  2,
                22.646293071820285,
                87.74749802091743

              ],
              [3,
                  22.67458972721672,
                  87.74124738988394

              ],
              [
                  4,
                  22.677334387547425,
                  87.76006653932278

              ],
              [ 5,
                  22.752200594805768,
                  87.67527398554545
              ],
              [6,
                  22.729517684946977,
                  87.51134176947038
              ],
              [7,
                  22.73103732354783,
                  87.51194556594031
              ],
              [8,
                  22.731125798211195,
                  87.51858199936095
              ],
              [9,
                  22.661003088718658,
                  87.24612274575027
              ],
              [10,
                  22.891211201629385,
                  87.19583554851691
              ],
              ]


# print(findNearestDistributor(test_cords))
