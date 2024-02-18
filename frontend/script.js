
// var heroesData = {  
//     "jhin": {
//         "origins": ["Maestro"],
//         "classes": ["Big shot"],
//         "possibleChosen": ["class_bigshot"]
//     },
//     "ziggs": {
//         "origins": ["Hyperpop"],
//         "classes": ["Dazzler"],
//         "possibleChosen": ["origin_hyperpop", "class_dazzler"]
//     },
//     "lucian": {
//         "origins": ["Jazz"],
//         "classes": ["Rapidfire"],
//         "possibleChosen": ["origin_jazz", "class_rapidfire"]
//     },
//     "yorick": {
//         "origins": ["Pentakill"],
//         "classes": ["Guardian", "Mosher"],
//         "possibleChosen": ["origin_pentakill", "class_Mosher", "class_guardian"]
//     },
//     "illaoi": {
//         "origins": ["ILLBEATS"],
//         "classes": ["Bruiser"],
//         "possibleChosen": ["class_bruiser"]
//     },
//     "qiyana": {
//         "origins": ["True Damage"],
//         "classes": ["Crowd Diver"],
//         "possibleChosen": ["origin_truedamage", "class_crowddiver"]
//     },
//     "sona": {
//         "origins": ["Mixmaster"],
//         "classes": ["Spellweaver"],
//         "possibleChosen": [ "class_spellweaver"]
//     },
//     "ahri": {
//         "origins": ["K/DA"],
//         "classes": ["Spellweaver"],
//         "possibleChosen": ["origin_kda", "class_spellweaver"]
//     },
//     "thresh": {
//         "origins": ["Country"],
//         "classes": ["Guardian"],
//         "possibleChosen": ["origin_country", "class_guardian"]
//     },
//     "twitch": {
//         "origins": ["Punk"],
//         "classes": ["Executioner"],
//         "possibleChosen": ["origin_punk", "class_executioner"]
//     },
//     "vi": {
//         "origins": ["Punk"],
//         "classes": ["Mosher"],
//         "possibleChosen": ["origin_punk", "class_mosher"]
//     },
//     "pantheon": {
//         "origins": ["Punk"],
//         "classes": ["Guardian"],
//         "possibleChosen": ["origin_punk", "class_guardian"]
//     },
//     "jinx": {
//         "origins": ["Punk"],
//         "classes": ["Rapidfire"],
//         "possibleChosen": ["origin_punk", "class_rapidfire"]
//     },
//     "akali_kda": {
//         "origins": ["K/DA"],
//         "classes": ["Executioner", "True Damage"],
//         "possibleChosen": ["origin_kda", "origin_truedamage", "class_executioner"]
//     },
//     "amumu": {
//         "origins": ["Emo"],
//         "classes": ["Guardian"],
//         "possibleChosen": ["origin_emo", "class_guardian"]
//     },
//     "vex": {
//         "origins": ["Emo"],
//         "classes": ["Executioner"],
//         "possibleChosen": ["origin_emo", "class_executioner"]
//     },
//     "kayn": {
//         "origins": ["Heartsteel"],
//         "classes": ["Wildcard", "Edgelord"],
//         "possibleChosen": ["origin_heartsteel", "class_Edgelord"]
//     },
//     "neeko": {
//         "origins": ["K/DA"],
//         "classes": ["Superfan", "Guardian"],
//         "possibleChosen": ["origin_kda", "class_superfan", "class_guardian"]
//     },
//     "karthus": {
//         "origins": ["Pentakill"],
//         "classes": ["Executioner"],
//         "possibleChosen": ["origin_pentakill", "class_executioner"]
//     },
//     "seraphine": {
//         "origins": ["K/DA"],
//         "classes": ["Spellweaver"],
//         "possibleChosen": ["origin_kda", "class_spellweaver"]
//     },
//     "akali_truedamage": {
//         "origins": ["True Damage"],
//         "classes": ["Executioner", "Breakout"],
//         "possibleChosen": ["origin_truedamage", "class_executioner"]
//     },
//     "viego": {
//         "origins": ["Pentakill"],
//         "classes": ["Edgelord"],
//         "possibleChosen": ["origin_pentakill", "class_edgelord"]
//     },
//     "lulu": {
//         "origins": ["Hyperpop"],
//         "classes": ["Spellweaver"],
//         "possibleChosen": ["origin_hyperpop", "class_spellweaver"]
//     },
//     "caitlyn": {
//         "origins": ["8-bit"],
//         "classes": ["Rapidfire"],
//         "possibleChosen": ["origin_8bit", "class_rapidfire"]
//     },
//     "lillia": {
//         "origins": ["K/DA"],
//         "classes": ["Superfan", "Sentinel"],
//         "possibleChosen": ["origin_kda", "class_superfan", "class_sentinel"]
//     },
//     "kennen": {
//         "origins": ["True Damage" ],
//         "classes": ["Superfan", "Guardian"],
//         "possibleChosen": ["origin_truedamage", "class_superfan", "class_guardian"]
//     },
//     "poppy": {
//         "origins": ["Emo"],
//         "classes": [ "Mosher"],
//         "possibleChosen": ["origin_emo", "class_mosher"]
//     },
//     "annie": {
//         "origins": ["Emo"],
//         "classes": ["Spellweaver"],
//         "possibleChosen": ["origin_emo", "class_spellweaver"]
//     },
//     "zed": {
//         "origins": ["EDM"],
//         "classes": ["Crowd Diver"],
//         "possibleChosen": ["origin_edm", "class_crowddiver"]
//     },
//     "kai'sa": {
//         "origins": ["K/DA"],
//         "classes": ["Big Shot"],
//         "possibleChosen": ["origin_kda", "class_bigshot"]
//     },
//     "ekko": {
//         "origins": ["True Damage"],
//         "classes": ["Spellweaver", "Sentinel"],
//         "possibleChosen": ["origin_truedamage", "class_spellweaver", "class_sentinel"]
//     },
//     "urgot": {
//         "origins": ["Country"],
//         "classes": [ "Mosher"],
//         "possibleChosen": ["origin_country", "class_mosher"]
//     },
//     "twistedfate": {
//         "origins": ["Disco"],
//         "classes": ["Dazzler"],
//         "possibleChosen": ["origin_disco", "class_dazzler"]
//     },
//     "zac": {
//         "origins": ["EDM"],
//         "classes": ["Bruiser"],
//         "possibleChosen": ["origin_edm", "class_bruiser"]
//     },
//     "bard": {
//         "origins": ["Jazz"],
//         "classes": ["Dazzler"],
//         "possibleChosen": ["origin_jazz", "class_dazzler"]
//     },
//     "miss_fortune": {
//         "origins": ["Jazz"],
//         "classes": ["Big Shot"],
//         "possibleChosen": ["origin_jazz", "class_bigshot"]
//     },
//     "samira": {
//         "origins": ["Country"],
//         "classes": ["Executioner"],
//         "possibleChosen": ["origin_country", "class_executioner"]
//     },
//     "kayle": {
//         "origins": ["Pentakill"],
//         "classes": ["Edgelord"],
//         "possibleChosen": ["origin_pentakill", "class_edgelord"]
//     },
//     "blitzcrank": {
//         "origins": ["Disco"],
//         "classes": ["Sentinel"],
//         "possibleChosen": ["origin_disco", "class_sentinel"]
//     },
//     "gnar": {
//         "origins": ["Pentakill"],
//         "classes": ["Superfan", "Mosher"],
//         "possibleChosen": ["origin_pentakill", "class_superfan", "class_mosher"]
//     },
//     "katarina": {
//         "origins": ["Country"],
//         "classes": ["Crowd Diver"],
//         "possibleChosen": ["origin_country", "class_crowddiver"]
//     },
//     "senna": {
//         "origins": ["True Damage"],
//         "classes": ["Rapidfire"],
//         "possibleChosen": ["origin_truedamage", "class_rapidfire"]
//     },
//     "mordekaiser": {
//         "origins": ["Pentakill"],
//         "classes": ["Sentinel"],
//         "possibleChosen": ["origin_pentakill", "class_sentinel"]
//     },
//     "evelynn": {
//         "origins": ["K/DA"],
//         "classes": ["Crowd Diver"],
//         "possibleChosen": ["origin_kda", "class_crowddiver"]
//     },
//     "gragas": {
//         "origins": ["Disco"],
//         "classes": ["Bruiser"],
//         "possibleChosen": ["origin_disco", "class_bruiser"]
//     },
//     "tahm_kench": {
//         "origins": ["Country"],
//         "classes": ["Bruiser"],
//         "possibleChosen": ["origin_country", "class_bruiser"]
//     },
//     "jax": {
//         "origins": ["EDM"],
//         "classes": ["Mosher"],
//         "possibleChosen": ["origin_edm", "class_mosher"]
//     },
//     "taric": {
//         "origins": ["Disco"],
//         "classes": ["Guardian"],
//         "possibleChosen": ["origin_disco", "class_guardian"]
//     },
//     "olaf": {
//         "origins": ["Pentakill"],
//         "classes": ["Bruiser"],
//         "possibleChosen": ["origin_pentakill", "class_bruiser"]
//     },
//     "nami": {
//         "origins": ["Disco"],
//         "classes": ["Dazzler"],
//         "possibleChosen": ["origin_disco", "class_dazzler"]
//     },
//     "lux": {
//         "origins": ["EDM"],
//         "classes": [ "Dazzler"],
//         "possibleChosen": ["origin_edm", "class_dazzler"]
//     },
//     "garen": {
//         "origins": ["8-bit"],
//         "classes": ["Sentinel"],
//         "possibleChosen": ["origin_8bit", "class_sentinel"]
//     },
//     "sett": {
//         "origins": ["Heartsteel"],
//         "classes": ["Bruiser", "Mosher"],
//         "possibleChosen": ["origin_heartsteel", "class_bruiser", "class_mosher"]
//     },
//     "corki": {
//         "origins": ["8-bit"],
//         "classes": ["Big Shot"],
//         "possibleChosen": ["origin_8bit", "class_bigshot"]
//     },
//     "ezreal": {
//         "origins": ["Heartsteel"],
//         "classes": ["Big Shot"],
//         "possibleChosen": ["origin_heartsteel", "class_bigshot"]
//     },
//     "riven": {
//         "origins": ["8-bit"],
//         "classes": ["Edgelord"],
//         "possibleChosen": ["origin_8bit", "class_edgelord"]
//     },
//     "yasuo": {
//         "origins": ["True Damage"],
//         "classes": ["Edgelord"],
//         "possibleChosen": ["origin_truedamage", "class_edgelord"]
//     },
//     "yone": {
//         "origins": ["Heartsteel"],
//         "classes": [ "Edgelord", "Crowd Diver"],
//         "possibleChosen": ["origin_heartsteel", "class_edgelord", "class_croddiver"]
//     },
//     "aphelios": {
//         "origins": ["Heartsteel"],
//         "classes": ["Rapidfire"],
//         "possibleChosen": ["origin_heartsteel", "class_rapidfire"]
//     },
//     "ksante": {
//         "origins": ["Heartsteel"],
//         "classes": ["Sentinel"],
//         "possibleChosen": ["origin_heartsteel", "class_sentinel"]
//     }
    
// };

var counters = {
    player1: 0,
    player2: 0
};


document.addEventListener('DOMContentLoaded', function() {

    $('.select2-search[data-player="player1"]').on('select2:select', function(e) {
        var selectedValue = $(this).val(); 
        var selectType = $(this).data('select-type'); 
    
        $('.select2-search[data-player="player1"][data-select-type="' + selectType + '"]').not(this).each(function() {
            $(this).val(selectedValue).trigger('change');
        });

        if(selectType === 'portal'){
            $('.select2-search[data-player="player2"][data-select-type="' + selectType + '"]').not(this).each(function() {
                $(this).val(selectedValue).trigger('change');
            });
        }
        
    });
    document.querySelectorAll('.nav-link').forEach(function(tab) {
            tab.addEventListener('dblclick', function(e) {
                e.stopPropagation();

                if (this.querySelector('input')) return;


                var currentText = this.textContent;
                this.textContent = '';
                var input = document.createElement('input');
                input.type = 'text';
                input.value = currentText;
                input.className = 'tab-title-input'; 

                this.appendChild(input);
                input.focus();

                input.addEventListener('blur', function() {
                    var newText = this.value;
                    this.parentNode.removeChild(this);
                    tab.textContent = newText;
                });

                input.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') {
                        var newText = this.value;

                        this.parentNode.removeChild(this);
                        tab.textContent = newText;
                    }
                });
        });
    });

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('custom-add-button') && e.target.dataset.player === 'player1') {
            document.querySelectorAll('[data-player="player1"]').forEach(btn => {
                addChampionCard(btn.dataset.panel, "player1");
            });
        }
    });

    document.querySelectorAll('[data-player="player2"]').forEach(button => {
        button.addEventListener('click', function() {
            var panelId = this.dataset.panel; 
            addChampionCard(panelId, "player2");
        });
    });
    

    document.querySelectorAll('.btn.btn-primary.custom-button.btn-sm').forEach(function(button) {
        button.addEventListener('click', function() {
            var panelName = this.getAttribute('data-panel');
            var formId = `${panelName}-form`;
            var form = document.getElementById(formId);
    
            if (form && form.checkValidity()) {
                var isConfirmed = confirm("Are you sure you want to submit this form?");
                if (isConfirmed) {
                    var formData = new FormData(form);
                    var formObj = {};
                    for (var pair of formData.entries()) {
                        formObj[pair[0]] = pair[1];
                    }
                    console.log(formObj); 

                    fetch('https://coral-app-lwsnx.ondigitalocean.app:5000/submit', { 
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formObj), 
                        mode: 'cors'
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                        alert(data.message);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        alert(data.message);
                    });
    
                } else {
                    console.log('User cancelled the form submission.');
                }
            } else {
                console.error('Form not found or validation failed for panel:', panelName);
                form.reportValidity();
            }
        });
    });
    
    
    
});


  
$(document).ready(function() {

    function hexOption(option) {
        if (!option.id) {
            return option.text;
        }
        var baseUrl = "/static/hex_icon";
        var $option = $(`<span><img src="${baseUrl}/${option.element.value.toLowerCase()}.png" class="img-flag" /> ${option.text}</span>`);
        return $option;
    }
    
    function portalOption(option) {
        if (!option.id) {
            return option.text;
        }
        var baseUrl = "/static/portal_icon";
        var $option = $(`<span><img src="${baseUrl}/${option.element.value.toLowerCase()}.png" class="img-flag" /> ${option.text}</span>`);
        return $option;
    }

    $(`.hex-select`).select2({
        placeholder: "请选择",
        allowClear: true,
        templateResult: hexOption, 
        templateSelection: hexOption, 
    });

    $(`.portal-select`).select2({
        placeholder: "请选择",
        allowClear: true,
        templateResult: portalOption,
        templateSelection: portalOption, 
    });
    
    $(`.portal-select`).next('.select2-container').css({
        'width': '70%',
        'margin-left': '30px',
        'margin-top': '5px'  
    });

    $(`.hex-select`).each(function() {
        $(this).next('.select2-container').css({
            'width': '100%',
            'margin-top': '6px'  
        });
    });

    $(`.portal-select, .hex-select`).on('select2:open', function() {
        setTimeout(function() {
            $('.select2-dropdown').css({
                'width': '200px', 
                'font-size': '14px', 
            });
        }, 0);
    });

});

function addChampionCard(panelId, player) {
    var counterKey = panelId + '-' + player;

    if (!counters[counterKey]) {
        counters[counterKey] = 1;
    } else {
        counters[counterKey] += 1;
    }
    
    var currentTimeStamp = new Date().getTime();
    var newChampionCardHTML = `
            <div class="card custom-card-champion border-dark mb-3" data-card-id="champion${counters[counterKey]}" data-player="${player}">
                <div class="card-body">
                    <div class="row">
                        <!-- Delete button -->
                        <div class="col-auto align-self-start">
                            <button type="button" class="btn btn-danger btn-sm delete-champion">
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </div>                   
                        <!-- Champions select -->
                        <div class="col-2-5">
                            <div class="champion-title">英雄</div>
                            <select name="${player}-champion-${counters[counterKey]}" data-player="${player}" data-select-type="champion${counters[counterKey]}" class="select2-search champions-select-${currentTimeStamp}" required>
                                <option value="" disabled selected>Select your option</option>
                                <option value="corki" data-search="飞机">库奇-Corki</option>
                                <option value="tahmkench" data-search="蛤蟆" >塔姆肯奇-TahmKench</option>
                                <option value="nami" data-search="唤潮鲛姬">娜美-Nami</option>
                                <option value="taric" data-search="宝石">塔里克-Taric</option>
                                <option value="annie" data-search="黑暗之女">安妮-Annie</option>
                                <option value="ksante" data-search="这就是 尼哥">奎桑提-K'Sante</option>
                                <option value="evelynn" data-search="寡妇">伊芙琳-Evelynn</option>
                                <option value="lillia" data-search="小鹿">莉莉娅-Lillia</option>
                                <option value="olaf" data-search="">奥拉夫-Olaf</option>
                                <option value="vi" data-search="">蔚-Vi</option>
                                <option value="jinx" data-search="爆爆">金克丝-Jinx</option>
                                <option value="yasuo" data-search="风男 孤儿">亚索-Yasuo</option>
                                <option value="kennen" data-search="电耗子">凯南-Kennen</option>
                                <option value="garen" data-search="转转转">盖伦-Garen</option>
                                <option value="katarina" data-search="卡特">卡特琳娜-Katarina</option>
                                <option value="gragas" data-search="酒桶">古拉加斯-Gragas</option>
                                <option value="jax" data-search="武器">贾克斯-Jax</option>
                                <option value="aphelios" data-search="月男">厄斐琉斯-Aphelios</option>
                                <option value="bard" data-search="">巴德-Bard</option>
                                <option value="kaisa" data-search="">凯莎-Kai'Sa</option>
                                <option value="seraphine" data-search="轮椅人">萨勒芬妮-Seraphine</option>
                                <option value="kayle" data-search="天使">凯尔-Kayle</option>
                                <option value="gnar" data-search="">纳尔-Gnar</option>
                                <option value="twitch" data-search="老鼠">图奇-Twitch</option>
                                <option value="pantheon" data-search="">潘森-Pantheon</option>
                                <option value="senna" data-search="尼哥">赛娜-Senna</option>
                                <option value="neeko" data-search="">妮蔻-Neeko</option>
                                <option value="mordekaiser" data-search="铁男">莫德凯撒-Mordekaiser</option>
                                <option value="ekko" data-search="时间刺客">艾克-Ekko</option>
                                <option value="akali_kda" data-search="恐怖飞镖人">阿卡丽 (K/DA)-Akali (K/DA)</option>
                                <option value="akali_truedamage" data-search="恐怖飞镖人">阿卡丽 (True Damage)-Akali (True Damage)</option>
                                <option value="ahri" data-search="狐狸">阿狸-Ahri</option>
                                <option value="viego" data-search="太痛了">佛耶戈-Viego</option>
                                <option value="karthus" data-search="死歌">卡尔萨斯-Karthus</option>
                                <option value="caitlyn" data-search="女警">凯特琳-Caitlyn</option>
                                <option value="thresh" data-search="">锤石-Thresh</option>
                                <option value="twistedfate" data-search="卡牌">崔斯特-Twisted Fate</option>
                                <option value="blitzcrank" data-search="机器人">布里茨-Blitzcrank</option>
                                <option value="zac" data-search="粑粑人">扎克-Zac</option>
                                <option value="zed" data-search="恐怖飞镖人">劫-Zed</option>
                                <option value="poppy" data-search="锤形态小炮">波比-Poppy</option>
                                <option value="ezreal" data-search="">伊泽瑞尔-Ezreal</option>
                                <option value="qiyana" data-search="超模">奇亚娜-Qiyana</option>
                                <option value="ziggs" data-search="爆蛋">吉格斯-Ziggs</option>
                                <option value="illaoi" data-search="触手妈">俄洛伊-Illaoi</option>
                                <option value="lucian" data-search="尼哥">卢锡安-Lucian</option>
                                <option value="sona" data-search="琴女">娑娜-Sona</option>
                                <option value="yorick" data-search="掘墓">约里克-Yorick</option>
                            </select>
                        </div>
                         <div class="col-2-5">
                            <div class="headliners-title">天选</div>
                            <select name="${player}-headliner-${counters[counterKey]}" data-player="${player}" data-select-type="trait${counters[counterKey]}" class="select2-search headliners-select-${currentTimeStamp}">
                                <option value="none" selected></option>
                                <option value="origin_8bit" >8-bit_8比特</option>
                                <option value="origin_country">Country_乡村音乐</option>
                                <option value="origin_disco">Disco_迪斯科</option>
                                <option value="origin_edm">EDM</option>
                                <option value="origin_emo">Emo</option>
                                <option value="origin_heartsteel" >Heartsteel_心之刚</option>
                                <option value="origin_hyperpop">Hyperpop_高能流行</option>
                                <option value="origin_illbeats">ILLBEATS_大触打击乐</option>
                                <option value="origin_kda" data-search="kda">K/DA</option>
                                <option value="origin_maestro" >Maestro_戏命师</option>
                                <option value="origin_mixmaster">Mixmaster_DJ娑娜</option>
                                <option value="origin_pentakill" >Pentakill_五杀摇滚</option>
                                <option value="origin_punk" >Punk_朋克</option>
                                <option value="origin_truedamage">True Damage_真实伤害</option>
                                <option value="origin_wildcard">Wildcard_影流之镰</option>
                            
                                <!-- Classes -->
                                <option value="class_bigshot">Big Shot_大腕射手</option>
                                <option value="class_bruiser">Bruiser_格斗家</option>
                                <option value="class_crowddiver">Crowd Diver_音浪刺客</option>
                                <option value="class_dazzler">Dazzler_耀光使</option>
                                <option value="class_edgelord">Edgelord_刀锋领主</option>
                                <option value="class_executioner">Executioner_裁决使</option>
                                <option value="class_guardian">Guardian_护卫</option>
                                <option value="class_mosher">Mosher_舞者</option>
                                <option value="class_rapidfire">Rapidfire_疾射枪手</option>
                                <option value="class_sentinel">Sentinel_秘术护卫</option>
                                <option value="class_spellweaver">Spellweaver_法师</option>
                                <option value="class_superfan">Superfan_超级粉丝</option>
                            </select>
                        </div>                          
                        <!-- Star select -->
                        <div class="col-1-5">
                            <div class="star-title">星级</div>
                            <select name="${player}-star-${counters[counterKey]}" data-player="${player}" data-select-type="star${counters[counterKey]}" class="select2-search stars-select-${currentTimeStamp}" required>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                            </select>
                        </div>
                        <!-- Items select -->
                        <div class="col-4-5">
                            <div class="item-title">装备</div>
                            <select name="${player}-item1-${counters[counterKey]}" data-player="${player}" data-select-type="item1${counters[counterKey]}" class="select2-search items-select-${currentTimeStamp}">
                                <option value="none" selected></option>
                                <option value="bf_sword" data-search="暴风大剑">B.F. Sword</option>
                                <option value="recurve_bow" data-search="反曲弓">Recurve Bow</option>
                                <option value="chain_vest"data-search="锁子甲">Chain Vest</option>
                                <option value="negatron_cloak" data-search="魔抗斗篷">Negatron Cloak</option>
                                <option value="needlessly_large_rod" data-search="无用大棒">Needlessly Large Rod</option>
                                <option value="tear_of_the_goddess" data-search="女神之泪 眼泪 女神泪">Tear of the Goddess</option>
                                <option value="giants_belt" data-search="巨人腰带">Giant's Belt</option>
                                <option value="sparring_gloves"data-search="暴击手套 拳套">Sparring Gloves</option>
                                <option value="spatula" data-search="铲子 金铲铲">Spatula</option>
                                <option value="deathblade" data-search="杀人剑 死亡之刃">Deathblade</option>
                                <option value="giant_slayer" data-search="巨杀 巨人杀手">Giant Slayer</option>
                                <option value="edge_of_night" data-search="夜刃 夜之锋刃">Edge of Night</option>
                                <option value="blood_thirster" data-search="饮血剑">Bloodthirster</option>
                                <option value="hextech_gunblade" data-search="海克斯科技枪">Hextech Gunblade</option>
                                <option value="spear_of_shojin" data-search="青龙刀">Spear of Shojin</option>
                                <option value="steraks_gage" data-search="血手"">Sterak's Gage</option>
                                <option value="infinity_edge" data-search="无尽之刃">Infinity Edge</option>
                                <option value="red_buff" data-search="红buff 红霸符">Red Buff</option>
                                <option value="titans_resolve" data-search="泰坦的坚决">Titan's Resolve</option>
                                <option value="runaans_hurricane" data-search="卢安娜的飓风">Runaan's Hurricane</option>
                                <option value="guinsoos_rageblade"data-search="羊刀 鬼刀">Guinsoo's Rageblade</option>
                                <option value="statikk_shiv" data-search="电刀">Statikk Shiv</option>
                                <option value="nashors_tooth" data-search="纳什之牙">Nashor's Tooth</option>
                                <option value="last_whisper" data-search="最后的轻语">Last Whisper</option>
                                <option value="bramble_vest" data-search="反甲">Bramble Vest</option>
                                <option value="gargoyle_stoneplate" data-search="石像鬼板甲">Gargoyle Stoneplate</option>
                                <option value="sunfire_cape" data-search="日炎铠甲">Sunfire Cape</option>
                                <option value="steadfast_heart" data-search="心之刚">Steadfast Heart</option>
                                <option value="dragons_claw" data-search="龙牙">Dragon's Claw</option>
                                <option value="evenshroud" data-search="薄暮法袍">Evenshroud</option>
                                <option value="quicksilver" data-search="水银">Quicksilver</option>
                                <option value="crownguard" data-search="冕卫">Crownguard</option>
                                <option value="ionic_spark"data-search="离子火花">Ionic Spark</option>
                                <option value="rabadons_deathcap" data-search="大帽 死亡者之帽">Rabadon's Deathcap</option>
                                <option value="archangels_staff" data-search="大天使">Archangel's Staff</option>
                                <option value="morellonomicon"data-search="鬼书">Morellonomicon</option>
                                <option value="jeweled_gauntlet" data-search="法爆 珠光护手">Jeweled Gauntlet</option>
                                <option value="protectors_vow" data-search="圣盾使的誓约“>Protector's Vow</option>
                                <option value="adaptive_helm"data-search="贾修 适应性头盔”>Adaptive Helm</option>
                                <option value="blue_buff" data-search="蓝buff 蓝霸符">Blue Buff</option>
                                <option value="redemption" data-search="救赎">Redemption</option>
                                <option value="hand_of_justice"data-search="正义之手">Hand Of Justice</option>
                                <option value="warmogs_armor"data-search="狂徒铠甲">Warmog's Armor</option>
                                <option value="guardbreaker" data-search="挺进破坏者 破盾">Guardbreaker</option>
                                <option value="thiefs_gloves"data-search="偷偷 窃贼手套">Thief's Gloves</option>
                                <option value="tacticians_crown"data-search="冠冕 自然之力">Tactician's Crown</option>
                                <option value="aegis_of_the_legion" data-search="辅助装 军团圣盾"">Aegis of the Legion</option>
                                <option value="banshees_veil" data-search="辅助装 女妖">Banshee's Veil</option>
                                <option value="chalice_of_power" data-search="辅助装 圣杯">Chalice of Power</option>
                                <option value="locket_of_the_iron_solari" data-search="辅助装 鸟盾">Locket of the Iron Solari</option>
                                <option value="needlessly_big_gem" data-search="辅助装 无用大宝石">Needlessly Big Gem</option>
                                <option value="obsidian_cleaver" data-search="辅助装 黑切">Obsidian Cleaver</option>
                                <option value="randuins_omen" data-search="辅助装 兰顿">Randuin's Omen</option>
                                <option value="shroud_of_stillness" data-search="辅助装 静止法衣">Shroud of Stillness</option>
                                <option value="virtue_of_the_martyr" data-search="辅助装 辉耀美德">Virtue of the Martyr</option>
                                <option value="zekes_herald" data-search="辅助装 基克的聚合">Zeke's Herald</option>
                                <option value="zephyr" data-search="辅助装 灵风">Zephyr</option>
                                <option value="zzrot_portal" data-search="辅助装 传送门">Zz'Rot Portal</option>
                                <option value="anima_visage" data-search="奥恩神器 绿甲 振奋铠甲">Anima Visage</option>
                                <option value="blacksmiths_gloves" data-search="奥恩神器 偷偷 窃贼手套">Blacksmith's Gloves</option>
                                <option value="deaths_defiance" data-search="奥恩神器 死舞 死亡之舞">Death's Defiance</option>
                                <option value="deathfire_grasp" data-search="奥恩神器 冥火之拥">Deathfire Grasp</option>
                                <option value="diamond_hands" data-search="奥恩神器 钻石之手">Diamond Hands</option>
                                <option value="eternal_winter" data-search="奥恩神器 冰霜 永恒之霜">Eternal Winter</option>
                                <option value="gamblers_blade"  data-search="奥恩神器 投机者之刃">Gambler's Blade</option>
                                <option value="gold_collecter" data-search="奥恩神器 金币收集者">Gold Collector</option>
                                <option value="goldmancers_staff" data-search="奥恩神器 御金师之杖">Goldmancer's Staff</option>
                                <option value="hullcrusher" data-search="奥恩神器 破舰者">Hullcrusher</option>
                                <option value="infinity_force" data-search="奥恩神器 无尽">Infinity Force</option>
                                <option value="manazane" data-search="奥恩神器 魔切">Manazane</option>
                                <option value="moguls_mail" data-search="奥恩神器 大亨之铠">Mogul's Mail</option>
                                <option value="snipers_focus" data-search="奥恩神器 狙击手的专注">Sniper's Focus</option>
                                <option value="tricksters_glass" data-search="奥恩神器 诡术师之镜 镜子"">Tricksters Glass</option>
                                <option value="zhonyas_paradox" data-search="奥恩神器 中亚 中娅沙漏">Zhonya's Paradox</option>
                                <option value="absolution" data-search="光明 救赎">Absolution</option>
                                <option value="blessed_bloodthirster"data-search="光明 饮血剑">Blessed Bloodthirster</option>
                                <option value="blue_blessing" data-search="光明 蓝buff 霸符">Blue Blessing</option>
                                <option value="brink_of_dawn" data-search="光明 夜刃 夜之锋刃">Brink of Dawn</option>
                                <option value="bulwarks_oath" data-search="光明 圣盾者的誓约">Bulwark's Oath</option>
                                <option value="covalent_spark" data-search="光明 离子火花">Covalent Spark</option>
                                <option value="crest_of_cinders" data-search="光明 红buff 红霸符">Crest of Cinders</option>
                                <option value="demon_slayer" data-search="光明 巨人杀手 巨杀">Demon Slayer</option>
                                <option value="dragons_will" data-search="光明 龙牙">Dragon's Will</option>
                                <option value="dvarapala_stoneplate" data-search="光明 石像鬼板甲">Dvarapala Stoneplate</option>
                                <option value="equinox" data-search="光明 薄暮法袍">Equinox</option>
                                <option value="eternal_whisper" data-search="光明 轻语 最后的轻语">Eternal Whisper</option>
                                <option value="fist_of_fairness"data-search="光明 正义之手">Fist of Fairness</option>
                                <option value="glamorous_gauntlet" data-search="光明 珠光护手 法爆">Glamorous Gauntlet</option>
                                <option value="guinsoos_reckoning" data-search="光明 羊刀">Guinsoo's Reckoning</option>
                                <option value="hextech_lifeblade" data-search="光明 海克斯科技枪">Hextech Lifeblade</option>
                                <option value="jaksho_the_protean" data-search="光明 贾修 适应性头盔">Jak'sho the Protean</option>
                                <option value="legacy_of_the_colossus" data-search="光明 心之刚">Legacy of the Colossus</option>
                                <option value="luminous_deathblade" data-search="光明 死亡之刃 杀人剑">Luminous Deathblade</option>
                                <option value="more_more-ellonomicon" data-search="光明 鬼书">More More-ellonomicon</option>
                                <option value="nashors_tooth_radiant" data-search="光明 纳什之牙">Nashors' Tooth Radiant</option>
                                <option value="quickestsilver" data-search="光明 水银">Quickestsilver</option>
                                <option value="rabadons_ascended_deathcap" data-search="光明 大帽 死亡者之帽">Rabadon's Ascended Deathcap</option>
                                <option value="rascals_gloves"  data-search="光明 偷偷 窃贼手套">Rascal's Gloves</option>
                                <option value="rosethorn_vest" data-search="光明 反甲">Rosethorn Vest</option>
                                <option value="royal_crownshield" data-search="光明 冕卫">Royal Crownshield</option>
                                <option value="runaans_tempest" data-search="光明 卢安娜的飓风">Runaan's Tempest</option>
                                <option value="spear_of_hirana" data-search="光明 青龙刀">Spear of Hirana</option>
                                <option value="statikk_favor" data-search="光明 电刀">Statikk Favor</option>
                                <option value="steraks_megashield" data-search="光明 血手">Sterak's Megashield</option>
                                <option value="stride_breaker" data-search="光明 挺进破坏者 破盾">Stride breaker</option>
                                <option value="sunlight_cape" data-search="光明 日炎铠甲">Sunlight Cape</option>
                                <option value="titans_vow" data-search="光明 泰坦的坚决">Titan's Vow</option>
                                <option value="urf-angels_staff" data-search="光明 大天使之杖">Urf-Angel's Staff</option>
                                <option value="warmogs_pride" data-search="光明 狂徒铠甲">Warmog's Pride</option>
                                <option value="zenith_edge" data-search="光明 无尽">Zenith Edge</option>
                                <option value="8-bit_emblem" data-search="8比特转 八比特转">8-Bit Emblem</option>
                                <option value="big_shot_emblem" data-search="大腕转 大腕枪手转">Big Shot Emblem</option>
                                <option value="bruiser_emblem" data-search="格斗转">Bruiser Emblem</option>
                                <option value="country_emblem" data-search="乡村转">Country Emblem</option>
                                <option value="crowd_diver_emblem" data-search="音浪刺客转">Crowd Diver Emblem</option>
                                <option value="dazzler_emblem" data-search="耀光转">Dazzler Emblem</option>
                                <option value="disco_emblem" data-search="迪斯科转">Disco Emblem</option>
                                <option value="edgelord_emblem"data-search="刀锋转">Edgelord Emblem</option>
                                <option value="emo_emblem" data-search="emo转">Emo Emblem</option>
                                <option value="executioner_emblem" data-search="裁决转">Executioner Emblem</option>
                                <option value="guardian_emblem" data-search="护卫转">Guardian Emblem</option>
                                <option value="heartsteel_emblem" data-search="心之刚转">Heartsteel Emblem</option>
                                <option value="hyperpop_emblem" data-search="高能流行转">Hyperpop Emblem</option>
                                <option value="kda_emblem" data-search="kda转">K/DA Emblem</option>
                                <option value="mosher_emblem" data-search="舞者转">Mosher Emblem</option>
                                <option value="pentakill_emblem" data-search="五杀乐队转">Pentakill Emblem</option>
                                <option value="punk_emblem"  data-search="朋克转">Punk Emblem</option>
                                <option value="rapidfire_emblem" data-search="疾射枪手转">Rapidfire Emblem</option>
                                <option value="sentinel_emblem" data-search="秘术护卫转 秘卫">Sentinel Emblem</option>
                                <option value="spellweaver_emblem" data-search="法师转 法转">Spellweaver Emblem</option>
                                <option value="superfan_emblem" data-search="超级粉丝转">Superfan Emblem</option>
                                <option value="true_damage_emblem" data-search="真实伤害转">True Damage Emblem</option>                                
                        </select>
                            </select>
                            <select name="${player}-item2-${counters[counterKey]}" data-player="${player}" data-select-type="item2${counters[counterKey]}" class="select2-search items-select-${currentTimeStamp}">
                                <option value="none" selected></option>
                                <option value="bf_sword" data-search="暴风大剑">B.F. Sword</option>
                                <option value="recurve_bow" data-search="反曲弓">Recurve Bow</option>
                                <option value="chain_vest"data-search="锁子甲">Chain Vest</option>
                                <option value="negatron_cloak" data-search="魔抗斗篷">Negatron Cloak</option>
                                <option value="needlessly_large_rod" data-search="无用大棒">Needlessly Large Rod</option>
                                <option value="tear_of_the_goddess" data-search="女神之泪 眼泪 女神泪">Tear of the Goddess</option>
                                <option value="giants_belt" data-search="巨人腰带">Giant's Belt</option>
                                <option value="sparring_gloves"data-search="暴击手套 拳套">Sparring Gloves</option>
                                <option value="spatula" data-search="铲子 金铲铲">Spatula</option>
                                <option value="deathblade" data-search="杀人剑 死亡之刃">Deathblade</option>
                                <option value="giant_slayer" data-search="巨杀 巨人杀手">Giant Slayer</option>
                                <option value="edge_of_night" data-search="夜刃 夜之锋刃">Edge of Night</option>
                                <option value="blood_thirster" data-search="饮血剑">Bloodthirster</option>
                                <option value="hextech_gunblade" data-search="海克斯科技枪">Hextech Gunblade</option>
                                <option value="spear_of_shojin" data-search="青龙刀">Spear of Shojin</option>
                                <option value="steraks_gage" data-search="血手"">Sterak's Gage</option>
                                <option value="infinity_edge" data-search="无尽之刃">Infinity Edge</option>
                                <option value="red_buff" data-search="红buff 红霸符">Red Buff</option>
                                <option value="titans_resolve" data-search="泰坦的坚决">Titan's Resolve</option>
                                <option value="runaans_hurricane" data-search="卢安娜的飓风">Runaan's Hurricane</option>
                                <option value="guinsoos_rageblade"data-search="羊刀 鬼刀">Guinsoo's Rageblade</option>
                                <option value="statikk_shiv" data-search="电刀">Statikk Shiv</option>
                                <option value="nashors_tooth" data-search="纳什之牙">Nashor's Tooth</option>
                                <option value="last_whisper" data-search="最后的轻语">Last Whisper</option>
                                <option value="bramble_vest" data-search="反甲">Bramble Vest</option>
                                <option value="gargoyle_stoneplate" data-search="石像鬼板甲">Gargoyle Stoneplate</option>
                                <option value="sunfire_cape" data-search="日炎铠甲">Sunfire Cape</option>
                                <option value="steadfast_heart" data-search="心之刚">Steadfast Heart</option>
                                <option value="dragons_claw" data-search="龙牙">Dragon's Claw</option>
                                <option value="evenshroud" data-search="薄暮法袍">Evenshroud</option>
                                <option value="quicksilver" data-search="水银">Quicksilver</option>
                                <option value="crownguard" data-search="冕卫">Crownguard</option>
                                <option value="ionic_spark"data-search="离子火花">Ionic Spark</option>
                                <option value="rabadons_deathcap" data-search="大帽 死亡者之帽">Rabadon's Deathcap</option>
                                <option value="archangels_staff" data-search="大天使">Archangel's Staff</option>
                                <option value="morellonomicon"data-search="鬼书">Morellonomicon</option>
                                <option value="jeweled_gauntlet" data-search="法爆 珠光护手">Jeweled Gauntlet</option>
                                <option value="protectors_vow" data-search="圣盾使的誓约“>Protector's Vow</option>
                                <option value="adaptive_helm"data-search="贾修 适应性头盔”>Adaptive Helm</option>
                                <option value="blue_buff" data-search="蓝buff 蓝霸符">Blue Buff</option>
                                <option value="redemption" data-search="救赎">Redemption</option>
                                <option value="hand_of_justice"data-search="正义之手">Hand Of Justice</option>
                                <option value="warmogs_armor"data-search="狂徒铠甲">Warmog's Armor</option>
                                <option value="guardbreaker" data-search="挺进破坏者 破盾">Guardbreaker</option>
                                <option value="thiefs_gloves"data-search="偷偷 窃贼手套">Thief's Gloves</option>
                                <option value="tacticians_crown"data-search="冠冕 自然之力">Tactician's Crown</option>
                                <option value="aegis_of_the_legion" data-search="辅助装 军团圣盾"">Aegis of the Legion</option>
                                <option value="banshees_veil" data-search="辅助装 女妖">Banshee's Veil</option>
                                <option value="chalice_of_power" data-search="辅助装 圣杯">Chalice of Power</option>
                                <option value="locket_of_the_iron_solari" data-search="辅助装 鸟盾">Locket of the Iron Solari</option>
                                <option value="needlessly_big_gem" data-search="辅助装 无用大宝石">Needlessly Big Gem</option>
                                <option value="obsidian_cleaver" data-search="辅助装 黑切">Obsidian Cleaver</option>
                                <option value="randuins_omen" data-search="辅助装 兰顿">Randuin's Omen</option>
                                <option value="shroud_of_stillness" data-search="辅助装 静止法衣">Shroud of Stillness</option>
                                <option value="virtue_of_the_martyr" data-search="辅助装 辉耀美德">Virtue of the Martyr</option>
                                <option value="zekes_herald" data-search="辅助装 基克的聚合">Zeke's Herald</option>
                                <option value="zephyr" data-search="辅助装 灵风">Zephyr</option>
                                <option value="zzrot_portal" data-search="辅助装 传送门">Zz'Rot Portal</option>
                                <option value="anima_visage" data-search="奥恩神器 绿甲 振奋铠甲">Anima Visage</option>
                                <option value="blacksmiths_gloves" data-search="奥恩神器 偷偷 窃贼手套">Blacksmith's Gloves</option>
                                <option value="deaths_defiance" data-search="奥恩神器 死舞 死亡之舞">Death's Defiance</option>
                                <option value="deathfire_grasp" data-search="奥恩神器 冥火之拥">Deathfire Grasp</option>
                                <option value="diamond_hands" data-search="奥恩神器 钻石之手">Diamond Hands</option>
                                <option value="eternal_winter" data-search="奥恩神器 冰霜 永恒之霜">Eternal Winter</option>
                                <option value="gamblers_blade"  data-search="奥恩神器 投机者之刃">Gambler's Blade</option>
                                <option value="gold_collecter" data-search="奥恩神器 金币收集者">Gold Collector</option>
                                <option value="goldmancers_staff" data-search="奥恩神器 御金师之杖">Goldmancer's Staff</option>
                                <option value="hullcrusher" data-search="奥恩神器 破舰者">Hullcrusher</option>
                                <option value="infinity_force" data-search="奥恩神器 无尽">Infinity Force</option>
                                <option value="manazane" data-search="奥恩神器 魔切">Manazane</option>
                                <option value="moguls_mail" data-search="奥恩神器 大亨之铠">Mogul's Mail</option>
                                <option value="snipers_focus" data-search="奥恩神器 狙击手的专注">Sniper's Focus</option>
                                <option value="tricksters_glass" data-search="奥恩神器 诡术师之镜 镜子"">Tricksters Glass</option>
                                <option value="zhonyas_paradox" data-search="奥恩神器 中亚 中娅沙漏">Zhonya's Paradox</option>
                                <option value="absolution" data-search="光明 救赎">Absolution</option>
                                <option value="blessed_bloodthirster"data-search="光明 饮血剑">Blessed Bloodthirster</option>
                                <option value="blue_blessing" data-search="光明 蓝buff 霸符">Blue Blessing</option>
                                <option value="brink_of_dawn" data-search="光明 夜刃 夜之锋刃">Brink of Dawn</option>
                                <option value="bulwarks_oath" data-search="光明 圣盾者的誓约">Bulwark's Oath</option>
                                <option value="covalent_spark" data-search="光明 离子火花">Covalent Spark</option>
                                <option value="crest_of_cinders" data-search="光明 红buff 红霸符">Crest of Cinders</option>
                                <option value="demon_slayer" data-search="光明 巨人杀手 巨杀">Demon Slayer</option>
                                <option value="dragons_will" data-search="光明 龙牙">Dragon's Will</option>
                                <option value="dvarapala_stoneplate" data-search="光明 石像鬼板甲">Dvarapala Stoneplate</option>
                                <option value="equinox" data-search="光明 薄暮法袍">Equinox</option>
                                <option value="eternal_whisper" data-search="光明 轻语 最后的轻语">Eternal Whisper</option>
                                <option value="fist_of_fairness"data-search="光明 正义之手">Fist of Fairness</option>
                                <option value="glamorous_gauntlet" data-search="光明 珠光护手 法爆">Glamorous Gauntlet</option>
                                <option value="guinsoos_reckoning" data-search="光明 羊刀">Guinsoo's Reckoning</option>
                                <option value="hextech_lifeblade" data-search="光明 海克斯科技枪">Hextech Lifeblade</option>
                                <option value="jaksho_the_protean" data-search="光明 贾修 适应性头盔">Jak'sho the Protean</option>
                                <option value="legacy_of_the_colossus" data-search="光明 心之刚">Legacy of the Colossus</option>
                                <option value="luminous_deathblade" data-search="光明 死亡之刃 杀人剑">Luminous Deathblade</option>
                                <option value="more_more-ellonomicon" data-search="光明 鬼书">More More-ellonomicon</option>
                                <option value="nashors_tooth_radiant" data-search="光明 纳什之牙">Nashors' Tooth Radiant</option>
                                <option value="quickestsilver" data-search="光明 水银">Quickestsilver</option>
                                <option value="rabadons_ascended_deathcap" data-search="光明 大帽 死亡者之帽">Rabadon's Ascended Deathcap</option>
                                <option value="rascals_gloves"  data-search="光明 偷偷 窃贼手套">Rascal's Gloves</option>
                                <option value="rosethorn_vest" data-search="光明 反甲">Rosethorn Vest</option>
                                <option value="royal_crownshield" data-search="光明 冕卫">Royal Crownshield</option>
                                <option value="runaans_tempest" data-search="光明 卢安娜的飓风">Runaan's Tempest</option>
                                <option value="spear_of_hirana" data-search="光明 青龙刀">Spear of Hirana</option>
                                <option value="statikk_favor" data-search="光明 电刀">Statikk Favor</option>
                                <option value="steraks_megashield" data-search="光明 血手">Sterak's Megashield</option>
                                <option value="stride_breaker" data-search="光明 挺进破坏者 破盾">Stride breaker</option>
                                <option value="sunlight_cape" data-search="光明 日炎铠甲">Sunlight Cape</option>
                                <option value="titans_vow" data-search="光明 泰坦的坚决">Titan's Vow</option>
                                <option value="urf-angels_staff" data-search="光明 大天使之杖">Urf-Angel's Staff</option>
                                <option value="warmogs_pride" data-search="光明 狂徒铠甲">Warmog's Pride</option>
                                <option value="zenith_edge" data-search="光明 无尽">Zenith Edge</option>
                                <option value="8-bit_emblem" data-search="8比特转 八比特转">8-Bit Emblem</option>
                                <option value="big_shot_emblem" data-search="大腕转 大腕枪手转">Big Shot Emblem</option>
                                <option value="bruiser_emblem" data-search="格斗转">Bruiser Emblem</option>
                                <option value="country_emblem" data-search="乡村转">Country Emblem</option>
                                <option value="crowd_diver_emblem" data-search="音浪刺客转">Crowd Diver Emblem</option>
                                <option value="dazzler_emblem" data-search="耀光转">Dazzler Emblem</option>
                                <option value="disco_emblem" data-search="迪斯科转">Disco Emblem</option>
                                <option value="edgelord_emblem"data-search="刀锋转">Edgelord Emblem</option>
                                <option value="emo_emblem" data-search="emo转">Emo Emblem</option>
                                <option value="executioner_emblem" data-search="裁决转">Executioner Emblem</option>
                                <option value="guardian_emblem" data-search="护卫转">Guardian Emblem</option>
                                <option value="heartsteel_emblem" data-search="心之刚转">Heartsteel Emblem</option>
                                <option value="hyperpop_emblem" data-search="高能流行转">Hyperpop Emblem</option>
                                <option value="kda_emblem" data-search="kda转">K/DA Emblem</option>
                                <option value="mosher_emblem" data-search="舞者转">Mosher Emblem</option>
                                <option value="pentakill_emblem" data-search="五杀乐队转">Pentakill Emblem</option>
                                <option value="punk_emblem"  data-search="朋克转">Punk Emblem</option>
                                <option value="rapidfire_emblem" data-search="疾射枪手转">Rapidfire Emblem</option>
                                <option value="sentinel_emblem" data-search="秘术护卫转 秘卫">Sentinel Emblem</option>
                                <option value="spellweaver_emblem" data-search="法师转 法转">Spellweaver Emblem</option>
                                <option value="superfan_emblem" data-search="超级粉丝转">Superfan Emblem</option>
                                <option value="true_damage_emblem" data-search="真实伤害转">True Damage Emblem</option>        
                            </select>
                            <select name="${player}-item3-${counters[counterKey]}" data-player="${player}" data-select-type="item3${counters[counterKey]}" class="select2-search items-select-${currentTimeStamp}">
                                <option value="none" selected></option>
                                <option value="bf_sword" data-search="暴风大剑">B.F. Sword</option>
                                <option value="recurve_bow" data-search="反曲弓">Recurve Bow</option>
                                <option value="chain_vest"data-search="锁子甲">Chain Vest</option>
                                <option value="negatron_cloak" data-search="魔抗斗篷">Negatron Cloak</option>
                                <option value="needlessly_large_rod" data-search="无用大棒">Needlessly Large Rod</option>
                                <option value="tear_of_the_goddess" data-search="女神之泪 眼泪 女神泪">Tear of the Goddess</option>
                                <option value="giants_belt" data-search="巨人腰带">Giant's Belt</option>
                                <option value="sparring_gloves"data-search="暴击手套 拳套">Sparring Gloves</option>
                                <option value="spatula" data-search="铲子 金铲铲">Spatula</option>
                                <option value="deathblade" data-search="杀人剑 死亡之刃">Deathblade</option>
                                <option value="giant_slayer" data-search="巨杀 巨人杀手">Giant Slayer</option>
                                <option value="edge_of_night" data-search="夜刃 夜之锋刃">Edge of Night</option>
                                <option value="blood_thirster" data-search="饮血剑">Bloodthirster</option>
                                <option value="hextech_gunblade" data-search="海克斯科技枪">Hextech Gunblade</option>
                                <option value="spear_of_shojin" data-search="青龙刀">Spear of Shojin</option>
                                <option value="steraks_gage" data-search="血手"">Sterak's Gage</option>
                                <option value="infinity_edge" data-search="无尽之刃">Infinity Edge</option>
                                <option value="red_buff" data-search="红buff 红霸符">Red Buff</option>
                                <option value="titans_resolve" data-search="泰坦的坚决">Titan's Resolve</option>
                                <option value="runaans_hurricane" data-search="卢安娜的飓风">Runaan's Hurricane</option>
                                <option value="guinsoos_rageblade"data-search="羊刀 鬼刀">Guinsoo's Rageblade</option>
                                <option value="statikk_shiv" data-search="电刀">Statikk Shiv</option>
                                <option value="nashors_tooth" data-search="纳什之牙">Nashor's Tooth</option>
                                <option value="last_whisper" data-search="最后的轻语">Last Whisper</option>
                                <option value="bramble_vest" data-search="反甲">Bramble Vest</option>
                                <option value="gargoyle_stoneplate" data-search="石像鬼板甲">Gargoyle Stoneplate</option>
                                <option value="sunfire_cape" data-search="日炎铠甲">Sunfire Cape</option>
                                <option value="steadfast_heart" data-search="心之刚">Steadfast Heart</option>
                                <option value="dragons_claw" data-search="龙牙">Dragon's Claw</option>
                                <option value="evenshroud" data-search="薄暮法袍">Evenshroud</option>
                                <option value="quicksilver" data-search="水银">Quicksilver</option>
                                <option value="crownguard" data-search="冕卫">Crownguard</option>
                                <option value="ionic_spark"data-search="离子火花">Ionic Spark</option>
                                <option value="rabadons_deathcap" data-search="大帽 死亡者之帽">Rabadon's Deathcap</option>
                                <option value="archangels_staff" data-search="大天使">Archangel's Staff</option>
                                <option value="morellonomicon"data-search="鬼书">Morellonomicon</option>
                                <option value="jeweled_gauntlet" data-search="法爆 珠光护手">Jeweled Gauntlet</option>
                                <option value="protectors_vow" data-search="圣盾使的誓约“>Protector's Vow</option>
                                <option value="adaptive_helm"data-search="贾修 适应性头盔”>Adaptive Helm</option>
                                <option value="blue_buff" data-search="蓝buff 蓝霸符">Blue Buff</option>
                                <option value="redemption" data-search="救赎">Redemption</option>
                                <option value="hand_of_justice"data-search="正义之手">Hand Of Justice</option>
                                <option value="warmogs_armor"data-search="狂徒铠甲">Warmog's Armor</option>
                                <option value="guardbreaker" data-search="挺进破坏者 破盾">Guardbreaker</option>
                                <option value="thiefs_gloves"data-search="偷偷 窃贼手套">Thief's Gloves</option>
                                <option value="tacticians_crown"data-search="冠冕 自然之力">Tactician's Crown</option>
                                <option value="aegis_of_the_legion" data-search="辅助装 军团圣盾"">Aegis of the Legion</option>
                                <option value="banshees_veil" data-search="辅助装 女妖">Banshee's Veil</option>
                                <option value="chalice_of_power" data-search="辅助装 圣杯">Chalice of Power</option>
                                <option value="locket_of_the_iron_solari" data-search="辅助装 鸟盾">Locket of the Iron Solari</option>
                                <option value="needlessly_big_gem" data-search="辅助装 无用大宝石">Needlessly Big Gem</option>
                                <option value="obsidian_cleaver" data-search="辅助装 黑切">Obsidian Cleaver</option>
                                <option value="randuins_omen" data-search="辅助装 兰顿">Randuin's Omen</option>
                                <option value="shroud_of_stillness" data-search="辅助装 静止法衣">Shroud of Stillness</option>
                                <option value="virtue_of_the_martyr" data-search="辅助装 辉耀美德">Virtue of the Martyr</option>
                                <option value="zekes_herald" data-search="辅助装 基克的聚合">Zeke's Herald</option>
                                <option value="zephyr" data-search="辅助装 灵风">Zephyr</option>
                                <option value="zzrot_portal" data-search="辅助装 传送门">Zz'Rot Portal</option>
                                <option value="anima_visage" data-search="奥恩神器 绿甲 振奋铠甲">Anima Visage</option>
                                <option value="blacksmiths_gloves" data-search="奥恩神器 偷偷 窃贼手套">Blacksmith's Gloves</option>
                                <option value="deaths_defiance" data-search="奥恩神器 死舞 死亡之舞">Death's Defiance</option>
                                <option value="deathfire_grasp" data-search="奥恩神器 冥火之拥">Deathfire Grasp</option>
                                <option value="diamond_hands" data-search="奥恩神器 钻石之手">Diamond Hands</option>
                                <option value="eternal_winter" data-search="奥恩神器 冰霜 永恒之霜">Eternal Winter</option>
                                <option value="gamblers_blade"  data-search="奥恩神器 投机者之刃">Gambler's Blade</option>
                                <option value="gold_collecter" data-search="奥恩神器 金币收集者">Gold Collector</option>
                                <option value="goldmancers_staff" data-search="奥恩神器 御金师之杖">Goldmancer's Staff</option>
                                <option value="hullcrusher" data-search="奥恩神器 破舰者">Hullcrusher</option>
                                <option value="infinity_force" data-search="奥恩神器 无尽">Infinity Force</option>
                                <option value="manazane" data-search="奥恩神器 魔切">Manazane</option>
                                <option value="moguls_mail" data-search="奥恩神器 大亨之铠">Mogul's Mail</option>
                                <option value="snipers_focus" data-search="奥恩神器 狙击手的专注">Sniper's Focus</option>
                                <option value="tricksters_glass" data-search="奥恩神器 诡术师之镜 镜子"">Tricksters Glass</option>
                                <option value="zhonyas_paradox" data-search="奥恩神器 中亚 中娅沙漏">Zhonya's Paradox</option>
                                <option value="absolution" data-search="光明 救赎">Absolution</option>
                                <option value="blessed_bloodthirster"data-search="光明 饮血剑">Blessed Bloodthirster</option>
                                <option value="blue_blessing" data-search="光明 蓝buff 霸符">Blue Blessing</option>
                                <option value="brink_of_dawn" data-search="光明 夜刃 夜之锋刃">Brink of Dawn</option>
                                <option value="bulwarks_oath" data-search="光明 圣盾者的誓约">Bulwark's Oath</option>
                                <option value="covalent_spark" data-search="光明 离子火花">Covalent Spark</option>
                                <option value="crest_of_cinders" data-search="光明 红buff 红霸符">Crest of Cinders</option>
                                <option value="demon_slayer" data-search="光明 巨人杀手 巨杀">Demon Slayer</option>
                                <option value="dragons_will" data-search="光明 龙牙">Dragon's Will</option>
                                <option value="dvarapala_stoneplate" data-search="光明 石像鬼板甲">Dvarapala Stoneplate</option>
                                <option value="equinox" data-search="光明 薄暮法袍">Equinox</option>
                                <option value="eternal_whisper" data-search="光明 轻语 最后的轻语">Eternal Whisper</option>
                                <option value="fist_of_fairness"data-search="光明 正义之手">Fist of Fairness</option>
                                <option value="glamorous_gauntlet" data-search="光明 珠光护手 法爆">Glamorous Gauntlet</option>
                                <option value="guinsoos_reckoning" data-search="光明 羊刀">Guinsoo's Reckoning</option>
                                <option value="hextech_lifeblade" data-search="光明 海克斯科技枪">Hextech Lifeblade</option>
                                <option value="jaksho_the_protean" data-search="光明 贾修 适应性头盔">Jak'sho the Protean</option>
                                <option value="legacy_of_the_colossus" data-search="光明 心之刚">Legacy of the Colossus</option>
                                <option value="luminous_deathblade" data-search="光明 死亡之刃 杀人剑">Luminous Deathblade</option>
                                <option value="more_more-ellonomicon" data-search="光明 鬼书">More More-ellonomicon</option>
                                <option value="nashors_tooth_radiant" data-search="光明 纳什之牙">Nashors' Tooth Radiant</option>
                                <option value="quickestsilver" data-search="光明 水银">Quickestsilver</option>
                                <option value="rabadons_ascended_deathcap" data-search="光明 大帽 死亡者之帽">Rabadon's Ascended Deathcap</option>
                                <option value="rascals_gloves"  data-search="光明 偷偷 窃贼手套">Rascal's Gloves</option>
                                <option value="rosethorn_vest" data-search="光明 反甲">Rosethorn Vest</option>
                                <option value="royal_crownshield" data-search="光明 冕卫">Royal Crownshield</option>
                                <option value="runaans_tempest" data-search="光明 卢安娜的飓风">Runaan's Tempest</option>
                                <option value="spear_of_hirana" data-search="光明 青龙刀">Spear of Hirana</option>
                                <option value="statikk_favor" data-search="光明 电刀">Statikk Favor</option>
                                <option value="steraks_megashield" data-search="光明 血手">Sterak's Megashield</option>
                                <option value="stride_breaker" data-search="光明 挺进破坏者 破盾">Stride breaker</option>
                                <option value="sunlight_cape" data-search="光明 日炎铠甲">Sunlight Cape</option>
                                <option value="titans_vow" data-search="光明 泰坦的坚决">Titan's Vow</option>
                                <option value="urf-angels_staff" data-search="光明 大天使之杖">Urf-Angel's Staff</option>
                                <option value="warmogs_pride" data-search="光明 狂徒铠甲">Warmog's Pride</option>
                                <option value="zenith_edge" data-search="光明 无尽">Zenith Edge</option>
                                <option value="8-bit_emblem" data-search="8比特转 八比特转">8-Bit Emblem</option>
                                <option value="big_shot_emblem" data-search="大腕转 大腕枪手转">Big Shot Emblem</option>
                                <option value="bruiser_emblem" data-search="格斗转">Bruiser Emblem</option>
                                <option value="country_emblem" data-search="乡村转">Country Emblem</option>
                                <option value="crowd_diver_emblem" data-search="音浪刺客转">Crowd Diver Emblem</option>
                                <option value="dazzler_emblem" data-search="耀光转">Dazzler Emblem</option>
                                <option value="disco_emblem" data-search="迪斯科转">Disco Emblem</option>
                                <option value="edgelord_emblem"data-search="刀锋转">Edgelord Emblem</option>
                                <option value="emo_emblem" data-search="emo转">Emo Emblem</option>
                                <option value="executioner_emblem" data-search="裁决转">Executioner Emblem</option>
                                <option value="guardian_emblem" data-search="护卫转">Guardian Emblem</option>
                                <option value="heartsteel_emblem" data-search="心之刚转">Heartsteel Emblem</option>
                                <option value="hyperpop_emblem" data-search="高能流行转">Hyperpop Emblem</option>
                                <option value="kda_emblem" data-search="kda转">K/DA Emblem</option>
                                <option value="mosher_emblem" data-search="舞者转">Mosher Emblem</option>
                                <option value="pentakill_emblem" data-search="五杀乐队转">Pentakill Emblem</option>
                                <option value="punk_emblem"  data-search="朋克转">Punk Emblem</option>
                                <option value="rapidfire_emblem" data-search="疾射枪手转">Rapidfire Emblem</option>
                                <option value="sentinel_emblem" data-search="秘术护卫转 秘卫">Sentinel Emblem</option>
                                <option value="spellweaver_emblem" data-search="法师转 法转">Spellweaver Emblem</option>
                                <option value="superfan_emblem" data-search="超级粉丝转">Superfan Emblem</option>
                                <option value="true_damage_emblem" data-search="真实伤害转">True Damage Emblem</option>        
                            </select>
                        </div>
                    </div>
                </div>
            </div>`;

    $(`#${panelId}-${player}-container-top`).append(newChampionCardHTML);
    initializeSelect2ForNewCard(currentTimeStamp);
    bindDeleteEvent(); 
}

function initializeSelect2ForNewCard(timeStamp) {

    $(`.headliners-select-${timeStamp}`).select2({
        placeholder: "请选择",
        allowClear: true,
        templateResult: traitOption,
        templateSelection: traitOption,
        matcher: matchCustom
    });

    $(`.champions-select-${timeStamp}`).select2({
        placeholder: "请选择",
        allowClear: true,
        templateResult: formatOption,
        templateSelection: formatOption,
        matcher: matchCustom
    });

    $(`.items-select-${timeStamp}`).each(function() {
        $(this).select2({
            placeholder: "请选择",
            allowClear: true,
            templateResult: itemOption,
            templateSelection: itemOption,
            matcher: matchCustom
        });

        $(this).on('select2:unselect', function (e) {
            $(this).val('none').trigger('change');
        });
    });


    $(`.stars-select-${timeStamp}`).select2({
        placeholder: "请选择",
        allowClear: true,
    });

    
    $(`.headliners-select-${timeStamp}`).next('.select2-container').css({
        'width': '100%'
    });

    $(`.champions-select-${timeStamp}`).next('.select2-container').css({
        'width': '100%',
    });

    $(`.stars-select-${timeStamp}`).next('.select2-container').css({
        'width': '120%',
     
    });

    $(`.items-select-${timeStamp}`).each(function() {
        $(this).next('.select2-container').css({
            'width': '30%',
        });
    });


    $(`.headliners-select-${timeStamp}, .champions-select-${timeStamp}, .stars-select-${timeStamp}, .items-select-${timeStamp}`).on('select2:open', function () {
        setTimeout(function() {
            $('.select2-dropdown').css({
                'width': '200px',
                'font-size': '14px',
            });
            $('.select2-search__field').on('input', function() {
                $('.select2-dropdown').css('width', '200px');
            });
        }, 0);
    });
    
    function formatOption(option) {
        if (!option.id) {
            return option.text;
        }
    
        var baseUrl = "/static/champion_icon";

        var $option = $(
            `<span><img src="${baseUrl}/${option.element.value.toLowerCase()}.jpg" class="img-flag" /> ${option.text}</span>`
        );
    
        return $option;
    }
    

    function traitOption(option) {
        if (!option.id) {
            return option.text;
        }
        var baseUrl = "/static/traits_icon";

        var $option = $(
            `<span><img src="${baseUrl}/${option.element.value.toLowerCase()}.png" class="img-flag" /> ${option.text}</span>`
        );
    
        return $option;
    }

    function itemOption(option) {
        if (!option.id) {
            return option.text;
        }
        var baseUrl = "/static/item_icon";

        var $option = $(
            `<span><img src="${baseUrl}/${option.element.value.toLowerCase()}.png" class="img-flag" /> ${option.text}</span>`
        );
    
        return $option;
    }
    
    
}

function bindDeleteEvent() {
    $(document).on('click', '.delete-champion', function() {
        var cardId = $(this).closest('.custom-card-champion').data('card-id');
        var playerType = $(this).closest('.custom-card-champion').data('player');
        
        $(`.custom-card-champion[data-card-id="${cardId}"][data-player="${playerType}"]`).remove();
    });
    
}

function matchCustom(params, data) {
    if ($.trim(params.term) === '' || !data.element) {
        return data;
    }

    var term = params.term;
    var text = data.text;
    var additionalTerm = $(data.element).data('search');

    if (/[\u0000-\u00ff]/.test(term)) {
        term = term.toLowerCase();
        text = text.toLowerCase();
        if (additionalTerm) additionalTerm = additionalTerm.toLowerCase();
    }

    if (text.indexOf(term) > -1 || (additionalTerm && additionalTerm.indexOf(term) > -1)) {
        return data;
    }

    return null;
}
