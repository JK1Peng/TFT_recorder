
class Function:


    def __init__(self):
        pass

    def transform_data(self, data):
        new_data = {
            "players": {
                "player1": {"champions": [], "hexes": []},
                "player2": {"champions": [], "hexes": []}
            },
            "portal": data.get("portal1"),
            "result": data.get("btnradio"),
            "stage": data.get("stage")
        }

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
                player_id = key.split('-')[0]
                if player_id in new_data["players"]:
                    new_data["players"][player_id]["hexes"].append(value)

        return new_data



        # transformed_data = transform_data(data)
        # print(transformed_data)
