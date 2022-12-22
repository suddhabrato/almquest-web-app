import getDirectionData as gDD
list_1 = [{'bounds': {'northeast': {'lat': 22.6602308, 'lng': 87.7405665}, 'southwest': {'lat': 22.6500715, 'lng': 87.73560700000002}}, 'copyrights': 'Map data ©2022', 'legs': [{'distance': {'text': '1.9 km', 'value': 1927}, 'duration': {'text': '6 mins', 'value': 354}, 'end_address': 'JPXR+V6M, Kuspata, Ghatal, West Bengal 721212, India', 'end_location': {'lat': 22.6500715, 'lng': 87.740483}, 'start_address': 'MP5Q+GGX, Ranichak Road, Konnagar, Kuspata, Kala Gechhya, West Bengal 721212, India', 'start_location': {'lat': 22.6588672, 'lng': 87.7388137}, 'steps': [{'distance': {'text': '0.2 km', 'value': 247}, 'duration': {'text': '1 min', 'value': 62}, 'end_location': {'lat': 22.6602249, 'lng': 87.73697299999999}, 'html_instructions': 'Head <b>northwest</b><div style="font-size:0.9em">Pass by Sibom mobile (on the right)</div>', 'polyline': {'points': '}phiCqnovO_@b@k@f@sAxAGFSPY^MTi@jBA@?B?@?@?@@@'}, 'start_location': {'lat': 22.6588672, 'lng': 87.7388137}, 'travel_mode': 'DRIVING'}, {'distance': {'text': '11 m', 'value': 11}, 'duration': {'text': '1 min', 'value': 2}, 'end_location': {'lat': 22.66014, 'lng': 87.7369264}, 'html_instructions': 'Turn <b>left</b> at Baneswarer Tea Stall toward <b>NH 116A</b>', 'maneuver': 'turn-left', 'polyline': {'points': 'kyhiCacovO@@LD'}, 'start_location': {'lat': 22.6602249, 'lng': 87.73697299999999}, 'travel_mode': 'DRIVING'}, {'distance': {'text': '1.0 km', 'value': 1050}, 'duration': {'text': '3 mins', 'value': 189}, 'end_location': {'lat': 22.650936, 'lng': 87.73560700000002}, 'html_instructions': 'Turn <b>left</b> at Ghatal College More onto <b>NH 116A</b><div style="font-size:0.9em">Pass by Ghatal Ranichak Auto Stand (on the left)</div>', 'maneuver': 'turn-left', 'polyline': {'points': '{xhiCybovOHMDIFEFEHINGHCJATAN?L?R@fANj@DxDd@`@DnEf@xBTbBN|@LlEd@H@`D^fGr@h@F~@JnBT'}, 'start_location': {'lat': 22.66014, 'lng': 87.7369264}, 'travel_mode': 'DRIVING'}, {'distance': {'text': '0.2 km', 'value': 169}, 'duration': {'text': '1 min', 'value': 30}, 'end_location': {'lat': 22.6507728, 'lng': 87.73723090000001}, 'html_instructions': 'Turn <b>left</b> at Aditya Ghosh -JioMart Digital Partner<div style="font-size:0.9em">Pass by Ram dar tea stall (on the right)</div>', 'maneuver': 'turn-left', 'polyline': {'points': 'k_giCqznvOD_ADeAD{@BU?KAC?A@GBI@O@K?GBc@'}, 'start_location': {'lat': 22.650936, 'lng': 87.73560700000002}, 'travel_mode': 'DRIVING'}, {'distance': {'text': '0.4 km', 'value': 450}, 'duration': {'text': '1 min', 'value': 71}, 'end_location': {'lat': 22.6500715, 'lng': 87.740483}, 'html_instructions': 'Turn <b>left</b><div style="font-size:0.9em">Destination will be on the left</div>', 'maneuver': 'turn-left', 'polyline': {'points': 'i~fiCudovOaAKRiHBo@NaDR}AD]BO@C@A@AD?jAF@?l@H'}, 'start_location': {'lat': 22.6507728, 'lng': 87.73723090000001}, 'travel_mode': 'DRIVING'}], 'traffic_speed_entry': [], 'via_waypoint': []}], 'overview_polyline': {'points': '}phiCqnovOkAjAsAxA[Xg@t@k@rB@D@@LDHMLOPOXK`@C\\?`I|@nMrAx[rDTwEAO@IFm@Bc@aAKVyINaDR}AHm@BEFAzBP'}, 'summary': 'NH 116A', 'warnings': [], 'waypoint_order': []}]

coord1 = (22.560806, 88.369824)
coord2 = (22.558746, 88.364595)

coord1_2 = (22.559387, 88.352710)
coord2_2 = (22.561173, 88.367342)

list_2 = gDD.getDirectionList(coord1_2, coord2_2)

for i in list_2:
    z = i

print("------------------------------------------------------------------------------------------------------")

for i in z.keys():
    print(i, " : ", z[i])

print("------------------------------------------------------------------------------------------------------")
path_legs = z['legs'][0]

for i in path_legs.keys():
    print(i, " : ", path_legs[i])

print("------------------------------------------------------------------------------------------------------")

path_steps = path_legs["steps"]
for i in range(len(path_steps)):
    for j in path_steps[i].keys():
        print(j, " : ", path_steps[i][j])
    print("---------------------------------")


print("------------------------------------------------------------------------------------------------------")

path_dist = path_legs["distance"]["text"]
print("Path Distance: ", path_dist)