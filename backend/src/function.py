
class Function:


    def __init__(self):
        pass

    def transform_data(self, data):
        new_data = {"players": {},"portal" :data.get("portal1"), "result": data.get("btnradio")}

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
                hex_number = key.split('-')[1]
                player_id = 'player1' if hex_number == '1' else 'player2'
                if "hexes" not in new_data["players"][player_id]:
                    new_data["players"][player_id]["hexes"] = []
                new_data["players"][player_id]["hexes"].append(value)

        return new_data


        # transformed_data = transform_data(data)
        # print(transformed_data)
