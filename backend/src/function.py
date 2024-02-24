
class Function:


    def __init__(self):
        pass

    def transform_data(self, data):
        new_data = {
            "players": {},
            "portal": data.get("portal1"),
            "result": data.get("btnradio"),
            "stage": data.get("stage")
        }

        # 初始化玩家数据结构
        for player_id in ['player1', 'player2']:
            new_data["players"][player_id] = {"champions": [], "hexes": []}

        for key, value in data.items():
            # 处理选手的英雄信息
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
            # 处理hex值，确保它们正确地分配给相应的玩家
            elif 'hex' in key:
                hex_number, hex_id = key.split('-')[1:]
                player_id = 'player1' if hex_number == '1' else 'player2'
                new_data["players"][player_id]["hexes"].append(value)

        return new_data
    
        # transformed_data = transform_data(data)
        # print(transformed_data)
