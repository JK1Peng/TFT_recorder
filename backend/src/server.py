from flask import Flask, jsonify, request, send_from_directory, session
from numpy import convolve
from pymongo.mongo_client import MongoClient
from dotenv import load_dotenv
from flask_cors import CORS
from backend.src.function import Function
# from function import Function
from pymongo.errors import PyMongoError
from joblib import load
import logging
import os

load_dotenv()
function = Function()
uri = os.getenv("mongodb_link")
secret_key = os.getenv("SECRET_KEY")

app = Flask(__name__, static_folder='../../frontend', static_url_path='')
app.secret_key = secret_key
CORS(app)

# print(secret_key)
# print(uri)
mongo_client = MongoClient(uri)
model = load('random_forest_classifier.joblib')

try:
    mongo_client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

DATABASE_NAME = 'Data_Collection'
COLLECTION_NAME = 'online_dataset'
db = mongo_client[DATABASE_NAME]


@app.route('/')
def login():
    return send_from_directory(app.static_folder, 'login.html')

@app.route('/index')
def index():
    if 'logged_in' not in session or not session['logged_in']:
        return send_from_directory(app.static_folder, 'login.html')
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/submit', methods=['POST']) 
def submit_data():
    data = request.json  
    # print(data)
    try:
        transformed_data = function.transform_data(data)
        result = db['online_dataset'].insert_one(transformed_data)
        return jsonify(message="Data submitted successfully!", id=str(result.inserted_id),), 201
    except PyMongoError as e:
        print(f"Error submitting data: {e}")
        return jsonify(message="Data submission failed", error=str(e)), 500

@app.route('/login', methods=['POST'])
def login_submit():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    user = db.account.find_one({'username': username, 'password': password})

    if user:
        session['logged_in'] = True  
        return jsonify({'success': True, 'message': 'Login successful', 'user': {'username': user['username']}}), 200
    else:
        return jsonify({'success': False, 'message': 'Invalid username or password'}), 401

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        if not data:
            raise ValueError("No data provided")
        
        features = transform_data_to_features(data)
        prediction = model.predict([features])
        return jsonify({'prediction': int(prediction[0])})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


def transform_data_to_features(data):
    transformed_data = function.transform_data(data)
    features = extract_features(transformed_data)  
    return features

champions_data = {
    "jhin": "origin_maestro, class_bigshot",
    "ziggs": "origin_hyperpop, class_dazzler",
    "lucian": "origin_jazz, class_rapidfire",
    "yorick": "origin_pentakill, class_guardian, class_mosher",
    "illaoi": "origin_illbeats, class_bruiser",
    "qiyana": "origin_truedamage, class_crowddiver",
    "sona": "origin_mixmaster, class_spellweaver",
    "ahri": "origin_kda, class_spellweaver",
    "thresh": "origin_country, class_guardian",
    "twitch": "origin_punk, class_executioner",
    "vi": "origin_punk, class_mosher",
    "pantheon": "origin_punk, class_guardian",
    "jinx": "origin_punk, class_rapidfire",
    "akali_kda": "origin_kda, origin_truedamage, class_executioner",
    "amumu": "origin_emo, class_guardian",
    "vex": "origin_emo, class_executioner",
    "kayn": "origin_heartsteel, origin_wildcard, class_edgelord",
    "neeko": "origin_kda, class_superfan, class_guardian",
    "karthus": "origin_pentakill, class_executioner",
    "seraphine": "origin_kda, class_spellweaver",
    "akali_truedamage": "origin_truedamage, class_executioner",
    "viego": "origin_pentakill, class_edgelord",
    "lulu": "origin_hyperpop, class_spellweaver",
    "caitlyn": "origin_8bit, class_rapidfire",
    "lillia": "origin_kda, class_superfan, class_sentinel",
    "kennen": "origin_truedamage, class_superfan, class_guardian",
    "poppy": "origin_emo, class_mosher",
    "annie": "origin_emo, class_spellweaver",
    "zed": "origin_edm, class_crowddiver",
    "kaisa": "origin_kda, class_bigshot",
    "ekko": "origin_truedamage, class_spellweaver, class_sentinel",
    "urgot": "origin_country, class_mosher",
    "twistedfate": "origin_disco, class_dazzler",
    "zac": "origin_edm, class_bruiser",
    "bard": "origin_jazz, class_dazzler",
    "missfortune": "origin_jazz, class_bigshot",
    "samira": "origin_country, class_executioner",
    "kayle": "origin_pentakill, class_edgelord",
    "blitzcrank": "origin_disco, class_sentinel",
    "gnar": "origin_pentakill, class_superfan, class_mosher",
    "katarina": "origin_country, class_crowddiver",
    "senna": "origin_truedamage, class_rapidfire",
    "mordekaiser": "origin_pentakill, class_sentinel",
    "evelynn": "origin_kda, class_crowddiver",
    "gragas": "origin_disco, class_bruiser",
    "tahmkench": "origin_country, class_bruiser",
    "jax": "origin_edm, class_mosher",
    "taric": "origin_disco, class_guardian",
    "olaf": "origin_pentakill, class_bruiser",
    "nami": "origin_disco, class_dazzler",
    "lux": "origin_edm, class_dazzler",
    "garen": "origin_8bit, class_sentinel",
    "sett": "origin_heartsteel, class_bruiser, class_mosher",
    "corki": "origin_8bit, class_bigshot",
    "ezreal": "origin_heartsteel, class_bigshot",
    "riven": "origin_8bit, class_edgelord",
    "yasuo": "origin_truedamage, class_edgelord",
    "yone": "origin_heartsteel, class_edgelord, class_crowddiver",
    "aphelios": "origin_heartsteel, class_rapidfire",
    "ksante": "origin_heartsteel, class_sentinel",
}

items = ['8-bit_emblem', 'absolution', 'adaptive_helm', 'aegis_of_the_legion', 'anima_visage', 'archangels_staff', 'banshees_veil', 'bf_sword', 
                      'big_shot_emblem', 'blacksmiths_gloves', 'blessed_bloodthirster', 'blood_thirster', 'blue_blessing', 'blue_buff', 'bramble_vest', 'brink_of_dawn', 
                      'bruiser_emblem', 'bulwarks_oath', 'chain_vest', 'chalice_of_power', 'country_emblem', 'covalent_spark', 'crest_of_cinders', 'crowd_diver_emblem', 
                      'crownguard', 'dazzler_emblem', 'deathblade', 'deathfire_grasp', 'deaths_defiance', 'demon_slayer', 'diamond_hands', 'disco_emblem', 'dragons_claw',
                        'dragons_will', 'dvarapala_stoneplate', 'edgelord_emblem', 'edge_of_night', 'emo_emblem', 'equinox', 'eternal_whisper', 'eternal_winter', 'evenshroud',
                          'executioner_emblem', 'fist_of_fairness', 'gamblers_blade', 'gargoyle_stoneplate', 'giants_belt', 'giant_slayer', 'glamorous_gauntlet', 'goldmancers_staff',
                            'gold_collecter', 'guardbreaker', 'guardian_emblem', 'guinsoos_rageblade', 'guinsoos_reckoning', 'hand_of_justice', 'heartsteel_emblem', 'hextech_gunblade', 
                            'hextech_lifeblade', 'hullcrusher', 'hyperpop_emblem', 'infinity_edge', 'infinity_force', 'ionic_spark', 'jaksho_the_protean', 'jeweled_gauntlet', 'kda_emblem',
                              'last_whisper', 'legacy_of_the_colossus', 'locket_of_the_iron_solari', 'luminous_deathblade', 'manazane', 'moguls_mail', 'morellonomicon', 'more_more-ellonomicon',
                                'mosher_emblem', 'nashors_tooth', 'nashors_tooth_radiant', 'needlessly_big_gem', 'needlessly_large_rod', 'negatron_cloak', 'none', 'obsidian_cleaver', 'pentakill_emblem', 
                                'protectors_vow', 'punk_emblem', 'quickestsilver', 'quicksilver', 'rabadons_ascended_deathcap', 'rabadons_deathcap', 'randuins_omen', 'rapidfire_emblem', 'rascals_gloves', 
                                'recurve_bow', 'redemption', 'red_buff', 'rosethorn_vest', 'royal_crownshield', 'runaans_hurricane', 'runaans_tempest', 'sentinel_emblem', 'shroud_of_stillness', 'snipers_focus',
                                  'sparring_gloves', 'spatula', 'spear_of_hirana', 'spear_of_shojin', 'spellweaver_emblem', 'statikk_favor', 'statikk_shiv', 'steadfast_heart', 'steraks_gage', 'steraks_megashield',
                                    'stride_breaker', 'sunfire_cape', 'sunlight_cape', 'superfan_emblem', 'tacticians_crown', 'tear_of_the_goddess', 'thiefs_gloves', 'titans_resolve', 'titans_vow', 
                                    'tricksters_glass', 'true_damage_emblem', 'urf-angels_staff', 'virtue_of_the_martyr', 'warmogs_armor', 'warmogs_pride', 'zekes_herald', 'zenith_edge', 'zephyr', 
                                    'zhonyas_paradox', 'zzrot_portal']
traits = {
    "class_bigshot": [2, 4, 6],
    "class_bruiser": [2, 4, 6],
    "class_crowddiver": [2, 4, 6],
    "class_dazzler": [2, 4, 6],
    "class_edgelord": [3, 5, 7],
    "class_executioner": [2, 4, 6],
    "class_guardian": [2, 4, 6],
    "class_mosher": [2, 4, 6],
    "class_rapidfire": [2, 4, 6],
    "class_sentinel": [2, 4, 6, 8],
    "class_spellweaver": [3, 5, 7, 10],
    "class_superfan": [3, 4, 5],
    "none": [],
    "origin_8bit": [2, 4, 6],
    "origin_country": [3, 5, 7],
    "origin_disco": [3, 4, 5, 6],
    "origin_edm": [2, 3, 4, 5],
    "origin_emo": [2, 4, 6],
    "origin_heartsteel": [3, 5, 7, 10],
    "origin_hyperpop": [1, 2, 3, 4],
    "origin_illbeats": [1],
    "origin_jazz": [2, 3, 4],
    "origin_kda": [3, 5, 7, 10],
    "origin_maestro": [1],
    "origin_mixmaster": [1],
    "origin_pentakill": [3, 5, 7, 10],
    "origin_punk": [2, 4, 6],
    "origin_truedamage": [2, 4, 6, 9],
    "origin_wildcard": [1]
}


attack_hexes = {"a_cut_above", "ascension", "best_friends_1", "best_friends_2", "bigger_shot", "binary_airdrop", "blinged_out", 
                "blistering_strikes", "bounty_hunters", "contagion", "crash_test_dummies", "crown_guarded", "cybernetic_bulk_1", 
                "cybernetic_bulk_2", "cybernetic_bulk_3", "cybernetic_uplink_1", "cybernetic_uplink_2", "cybernetic_uplink_3", "do_it_for_fans", 
                "double_the_funk", "emotional_connection", "encore", "expose_weakness", "final_ascension", "fully_adapted", "gargantuan_resolve",
                  "gifts_from_the_fallen", "harmacist_1", "harmacist_2", "harmacist_3", "healing_orbs_1", "healing_orbs_2", "heavy_hitters", "hologram",
                    "idealism", "indomitable_will", "infusion", "insert_coin", "inspiring_epitaph", "jeweled_lotus_2", "jeweled_lotus_3", "Keepers_1", "Keepers_2",
                      "know_your_enemy", "learning_to_spell", "little_buddies", "live_for_danger", "long_distance_pals_2", "magic_wand", "mana_burn", "martyr", "metal_heads",
                        "not_today", "partial_ascension", "parting_gifts", "phreaky_friday_+", "phreaky_friday", "pumping_up_1", "pumping_up_2", "pumping_up_3", "raise_the_tempo", 
                        "ramping_rhythm", "remember_your_roots", "shock_treatment", "silver_veil", "stationary_support_1", "stationary_support_2", "stationary_support_3", "sticks_and_stones",
                          "submit_to_the_pit", "talent_search", "thats_jazz_baby", "the_oi_razzle_dazzle", "threes_a_crowd", "tons_of_stats", "too_big_to_fail", "twin_terror_1", "twin_terror_2", "unified_resistance_1", "unified_resistance_2", "unleashed_arcana", "vampirism_1", "vampirism_2", "you_have_my_bow", "you_have_my_sword"}

def is_attack_hex(hex_name):
    return hex_name in attack_hexes

def extract_features(game):
    player1_champions = game['players']['player1']['champions']
    player1_hexes = game['players']['player1']['hexes']
    game_stage = game['stage']
    result = game['result']
    result_numeric = 1 if result == "win" else 0

    trait_activation_counts = {trait: 0 for trait in traits.keys()}
    champion_star_counts = {f"{star}star_{champion}": 0 for champion in champions_data.keys() for star in range(1, 4)}
    item_counts = {item: 0 for item in items}
    attack_hexes_count = 0


    for champion in player1_champions:
        champion_star_key = f"{champion['star']}star_{champion['name']}"
        champion_star_counts[champion_star_key] += 1

        champion_traits = champions_data[champion['name']].split(", ")
        for trait in champion_traits:
            trait_activation_counts[trait] += 1
            if 'headliner' in champion and champion['headliner'] != "none":
                chosen_trait = champion['headliner']
                if chosen_trait in trait_activation_counts:
                    trait_activation_counts[chosen_trait] += 1

        for item in champion['items']:
            item_counts[item] += 1

    for hex in player1_hexes:
        if is_attack_hex(hex):
            attack_hexes_count += 1

    trait_activation_stage_nums = {}
    for trait, count in trait_activation_counts.items():
        stages = traits[trait]
        stage_num = 0
        for i, stage_requirement in enumerate(stages, start=1):
            if count >= stage_requirement:
                stage_num = i
            else:
                break
        trait_activation_stage_nums[trait] = stage_num

    return {
        **trait_activation_stage_nums,
        **champion_star_counts,
        **item_counts,
        'attack_hexes_count': attack_hexes_count,
        'game_stage': game_stage,
        'result': result_numeric
    }


if __name__ == '__main__':
    app.run()

