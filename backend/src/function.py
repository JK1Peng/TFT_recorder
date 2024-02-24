
class Function:


    def __init__(self):
        pass

    def transform_data(self, data):
        new_data = {"players": {},"portal" :data.get("portal1"), "result": None,"stage":data.get("stage")}

        for key in data.keys():
            if 'hex1' in key:
                player_id = 'player1'
                if player_id not in new_data["players"]:
                    new_data["players"][player_id] = {"champions": [], "hexes": []}
            elif 'hex2' in key:
                player_id = 'player2'
                if player_id not in new_data["players"]:
                    new_data["players"][player_id] = {"champions": [], "hexes": []}

        for key, value in data.items():
            if 'player' in key and 'champion' in key:
                player_id, _, champion_id = key.rsplit('-', 2)
                champion_info = {
                    "name": value,
                    "headliner": data.get(f"{player_id}-headliner-{champion_id}", "none"),
                    "star": int(data.get(f"{player_id}-star-{champion_id}", "0")),
                    "items": [
                        data.get(f"{player_id}-item1-{champion_id}", "none"),
                        data.get(f"{player_id}-item2-{champion_id}", "none"),
                        data.get(f"{player_id}-item3-{champion_id}", "none"),
                    ]
                }
                new_data["players"][player_id]["champions"].append(champion_info)
            elif 'hex' in key:
                player_num = key.split('-')[0][-1]  
                player_id = f'player{player_num}' 
                print(f"Processing key: {key}")  
                new_data["players"][player_id]["hexes"].append(value)
            elif 'btnradio' in key:
                new_data["result"] = value

        return new_data

        # transformed_data = transform_data(data)   
        # print(transformed_data)


# data = {
#     "btnradioGroup6": "win",
#     "hex1-1": "vampirism_1",
#     "hex1-2": "none",
#     "hex1-3": "none",
#     "hex2-1": "pumping_up_1",
#     "hex2-2": "none",
#     "hex2-3": "none",
#     "portal1": "artifact_anvil",
#     "stage": "1-3"
# }

# function = Function()

# result = function.transform_data(data)
# print(result)