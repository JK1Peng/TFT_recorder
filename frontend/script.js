
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
            let currentPanelId = e.target.dataset.panel;
            document.querySelectorAll('[data-player="player1"]').forEach(btn => {
                addChampionCard(btn.dataset.panel, "player1", currentPanelId);
            });
        }
    });

    document.querySelectorAll('[data-player="player2"]').forEach(button => {
        button.addEventListener('click', function() {
            var panelId = this.dataset.panel; 
            addChampionCard(panelId, "player2",panelId);
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

                    fetch('https://coral-app-lwsnx.ondigitalocean.app/submit', { 
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
    

    $(document).on('select2:select', '.select2-search[data-player="player1"]', function(e) {
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

function addChampionCard(panelId, player,currentPanelId = null) {
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
                                <option value="corki" data-search="飞机 fj kq">库奇-Corki</option>
                                <option value="tahmkench" data-search="蛤蟆 hm tm" >塔姆肯奇-TahmKench</option>
                                <option value="nami" data-search="唤潮鲛姬 nm">娜美-Nami</option>
                                <option value="taric" data-search="宝石 bs tlk" >塔里克-Taric</option>
                                <option value="annie" data-search="黑暗之女 hnzn">安妮-Annie</option>
                                <option value="ksante" data-search="这就是 尼哥 ksante kui kst">奎桑提-K'Sante</option>
                                <option value="evelynn" data-search="寡妇 gf"  >伊芙琳-Evelynn</option>
                                <option value="lillia" data-search="小鹿 xl lly">莉莉娅-Lillia</option>
                                <option value="olaf" data-search="olf">奥拉夫-Olaf</option>
                                <option value="vi" data-search="wei">蔚-Vi</option>
                                <option value="jinx" data-search="爆爆 jks jin">金克丝-Jinx</option>
                                <option value="yasuo" data-search="风男 孤儿">亚索-Yasuo</option>
                                <option value="kennen" data-search="电耗子 kainan">凯南-Kennen</option>
                                <option value="garen" data-search="转转转 gl gai">盖伦-Garen</option>
                                <option value="katarina" data-search="卡特 kate kt">卡特琳娜-Katarina</option>
                                <option value="gragas" data-search="酒桶 jt">古拉加斯-Gragas</option>
                                <option value="jax" data-search="武器 jks wq">贾克斯-Jax</option>
                                <option value="aphelios" data-search="月男 efls">厄斐琉斯-Aphelios</option>
                                <option value="bard" data-search="bade bd">巴德-Bard</option>
                                <option value="kaisa" data-search="ks">凯莎-Kai'Sa</option>
                                <option value="seraphine" data-search="轮椅人 slfn">萨勒芬妮-Seraphine</option>
                                <option value="kayle" data-search="天使 ts">凯尔-Kayle</option>
                                <option value="gnar" data-search="naer nr">纳尔-Gnar</option>
                                <option value="twitch" data-search="老鼠 ls laoshu">图奇-Twitch</option>
                                <option value="pantheon" data-search="ps">潘森-Pantheon</option>
                                <option value="senna" data-search="尼哥 saina sn">赛娜-Senna</option>
                                <option value="neeko" data-search="nk niko">妮蔻-Neeko</option>
                                <option value="mordekaiser" data-search="铁男 tn mdks">莫德凯撒-Mordekaiser</option>
                                <option value="ekko" data-search="时间刺客 aike ak">艾克-Ekko</option>
                                <option value="vex" data-search="熬夜波比 weigusi wgs">薇古丝-Vex</option>
                                <option value="urgot" data-search="星之守护者 螃蟹 ejt">厄加特-Urgot</option>
                                <option value="sett" data-search="腕豪 劲夫 wanhao st wh">瑟提-Sett</option>
                                <option value="samira" data-search="sml">莎弥拉-Samira</option>
                                <option value="riven" data-search="兔女郎 rw ruiwen">锐雯-Riven</option>
                                <option value="missfortune" data-search="女枪 nvq nq">厄运小姐-MF</option>
                                <option value="lux" data-search="光女 光辉 lks gh gn">拉克丝-Lux</option>
                                <option value="lulu" data-search="紫皮波比 ll">璐璐-Lulu</option>
                                <option value="yone" data-search="哥哥 ye">永恩-yone</option>
                                <option value="amumu" data-search="木乃伊">阿木木-Amumu</option>
                                <option value="akali_kda" data-search="恐怖飞镖人 akl">阿卡丽 (K/DA)-Akali (K/DA)</option>
                                <option value="akali_truedamage" data-search="恐怖飞镖人 akl">阿卡丽 (True Damage)-Akali (True Damage)</option>
                                <option value="ahri" data-search="狐狸 al">阿狸-Ahri</option>
                                <option value="viego" data-search="太痛了 fyg">佛耶戈-Viego</option>
                                <option value="karthus" data-search="死歌  sg ">卡尔萨斯-Karthus</option>
                                <option value="caitlyn" data-search="女警 nj">凯特琳-Caitlyn</option>
                                <option value="thresh" data-search="cs chui">锤石-Thresh</option>
                                <option value="twistedfate" data-search="卡牌 kp">崔斯特-Twisted Fate</option>
                                <option value="blitzcrank" data-search="机器人 jqr">布里茨-Blitzcrank</option>
                                <option value="zac" data-search="粑粑人 zk">扎克-Zac</option>
                                <option value="zed" data-search="恐怖飞镖人 jie">劫-Zed</option>
                                <option value="poppy" data-search="锤形态小炮 bb">波比-Poppy</option>
                                <option value="ezreal" data-search="ez">伊泽瑞尔-Ezreal</option>
                                <option value="qiyana" data-search="超模 qyn qi">奇亚娜-Qiyana</option>
                                <option value="ziggs" data-search="爆蛋 jigesi">吉格斯-Ziggs</option>
                                <option value="illaoi" data-search="触手妈  csm ely">俄洛伊-Illaoi</option>
                                <option value="lucian" data-search="尼哥 luxi">卢锡安-Lucian</option>
                                <option value="sona" data-search="琴女 qn">娑娜-Sona</option>
                                <option value="yorick" data-search="掘墓 juemu jm">约里克-Yorick</option>
                            </select>
                        </div>
                         <div class="col-2-5">
                            <div class="headliners-title">天选</div>
                            <select name="${player}-headliner-${counters[counterKey]}" data-player="${player}" data-select-type="trait${counters[counterKey]}" class="select2-search headliners-select-${currentTimeStamp}">
                                <option value="none" selected></option>
                                <option value="origin_8bit" data-search="8bt" >8-bit_8比特</option>
                                <option value="origin_country" data-search="xc">Country_乡村音乐</option>
                                <option value="origin_disco">Disco_迪斯科</option>
                                <option value="origin_edm">EDM</option>
                                <option value="origin_emo">Emo</option>
                                <option value="origin_heartsteel" data-search="gang">Heartsteel_心之刚</option>
                                <option value="origin_hyperpop"  data-search="gao">Hyperpop_高能流行</option>
                                <option value="origin_illbeats" data-search="dc">ILLBEATS_大触打击乐</option>
                                <option value="origin_kda" data-search="kda">K/DA</option>
                                <option value="origin_maestro" data-search="xi" >Maestro_戏命师</option>
                                <option value="origin_mixmaster" data-search="sona">Mixmaster_DJ娑娜</option>
                                <option value="origin_pentakill" data-search="5 wusha" >Pentakill_五杀摇滚</option>
                                <option value="origin_punk" data-search="pk" >Punk_朋克</option>
                                <option value="origin_truedamage" data-search="td">True Damage_真实伤害</option>
                                <option value="origin_wildcard" data-search="ky">Wildcard_影流之镰</option>
                            
                                <!-- Classes -->
                                <option value="class_bigshot" data-search="dawan dw">Big Shot_大腕射手</option>
                                <option value="class_bruiser" data-search="gedoujia gd">Bruiser_格斗家</option>
                                <option value="class_crowddiver" data-search="yinlang yl">Crowd Diver_音浪刺客</option>
                                <option value="class_dazzler" data-search="yg">Dazzler_耀光使</option>
                                <option value="class_edgelord" data-search="df">Edgelord_刀锋领主</option>
                                <option value="class_executioner" data-search="cj">Executioner_裁决使</option>
                                <option value="class_guardian" data-search="hw">Guardian_护卫</option>
                                <option value="class_mosher" data-search="wz">Mosher_舞者</option>
                                <option value="class_rapidfire" data-search="js">Rapidfire_疾射枪手</option>
                                <option value="class_sentinel" data-search="mw ms">Sentinel_秘术护卫</option>
                                <option value="class_spellweaver" data-search="fs fa">Spellweaver_法师</option>
                                <option value="class_superfan" data-search="chaofen cf">Superfan_超级粉丝</option>
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
                                <option value="bf_sword" data-search="暴风大剑 bf bao">B.F. Sword</option>
                                <option value="recurve_bow" data-search="反曲弓 fqg fan">Recurve Bow</option>
                                <option value="chain_vest"data-search="锁子甲 szj suo">Chain Vest</option>
                                <option value="negatron_cloak" data-search="魔抗斗篷 mk">Negatron Cloak</option>
                                <option value="needlessly_large_rod" data-search="无用大棒 da db">Needlessly Large Rod</option>
                                <option value="tear_of_the_goddess" data-search="女神之泪 眼泪 女神泪 nvs yl">Tear of the Goddess</option>
                                <option value="giants_belt" data-search="巨人腰带 yd">Giant's Belt</option>
                                <option value="sparring_gloves"data-search="暴击手套 拳套 qt">Sparring Gloves</option>
                                <option value="spatula" data-search="铲子 金铲铲 cz">Spatula</option>
                                <option value="deathblade" data-search="杀人剑 死亡之刃 sha srj">Deathblade</option>
                                <option value="giant_slayer" data-search="巨杀 巨人杀手 js jusha">Giant Slayer</option>
                                <option value="edge_of_night" data-search="夜刃 夜之锋刃 ye yr">Edge of Night</option>
                                <option value="blood_thirster" data-search="饮血剑 yin yx">Bloodthirster</option>
                                <option value="hextech_gunblade" data-search="海克斯科技枪 kjq">Hextech Gunblade</option>
                                <option value="spear_of_shojin" data-search="青龙刀 qld">Spear of Shojin</option>
                                <option value="steraks_gage" data-search="血手 xs"">Sterak's Gage</option>
                                <option value="infinity_edge" data-search="无尽之刃 wj">Infinity Edge</option>
                                <option value="red_buff" data-search="红buff 红霸符 hong hb">Red Buff</option>
                                <option value="titans_resolve" data-search="泰坦的坚决 tt">Titan's Resolve</option>
                                <option value="runaans_hurricane" data-search="卢安娜的飓风 jf">Runaan's Hurricane</option>
                                <option value="guinsoos_rageblade"data-search="羊刀 鬼刀 yd">Guinsoo's Rageblade</option>
                                <option value="statikk_shiv" data-search="电刀 dd">Statikk Shiv</option>
                                <option value="nashors_tooth" data-search="纳什之牙 ns">Nashor's Tooth</option>
                                <option value="last_whisper" data-search="最后的轻语 qy">Last Whisper</option>
                                <option value="bramble_vest" data-search="反甲 fj">Bramble Vest</option>
                                <option value="gargoyle_stoneplate" data-search="石像鬼板甲 sjg bj">Gargoyle Stoneplate</option>
                                <option value="sunfire_cape" data-search="日炎铠甲 ry  yan">Sunfire Cape</option>
                                <option value="steadfast_heart" data-search="心之刚 gang xzg">Steadfast Heart</option>
                                <option value="dragons_claw" data-search="龙牙 ly">Dragon's Claw</option>
                                <option value="evenshroud" data-search="薄暮法袍 fp">Evenshroud</option>
                                <option value="quicksilver" data-search="水银 sy">Quicksilver</option>
                                <option value="crownguard" data-search="冕卫 mw">Crownguard</option>
                                <option value="ionic_spark"data-search="离子火花  lizi">Ionic Spark</option>
                                <option value="rabadons_deathcap" data-search="大帽 死亡者之帽 da dm">Rabadon's Deathcap</option>
                                <option value="archangels_staff" data-search="大天使 dts dat">Archangel's Staff</option>
                                <option value="morellonomicon"data-search="鬼书 guis gs">Morellonomicon</option>
                                <option value="jeweled_gauntlet" data-search="法爆 珠光护手 fb fa zg">Jeweled Gauntlet</option>
                                <option value="protectors_vow" data-search="圣盾使的誓约 sds“>Protector's Vow</option>
                                <option value="adaptive_helm"data-search="贾修 适应性头盔 jx”>Adaptive Helm</option>
                                <option value="blue_buff" data-search="蓝buff 蓝霸符 lan">Blue Buff</option>
                                <option value="redemption" data-search="救赎 js">Redemption</option>
                                <option value="hand_of_justice"data-search="正义之手 zhengyi zy">Hand Of Justice</option>
                                <option value="warmogs_armor"data-search="狂徒铠甲 kt">Warmog's Armor</option>
                                <option value="guardbreaker" data-search="挺进破坏者 破盾 pd ting tj">Guardbreaker</option>
                                <option value="thiefs_gloves"data-search="偷偷 窃贼手套 tt">Thief's Gloves</option>
                                <option value="tacticians_crown"data-search="冠冕 自然之力 gm">Tactician's Crown</option>
                                <option value="aegis_of_the_legion" data-search="辅助装 军团圣盾 jt">Aegis of the Legion</option>
                                <option value="banshees_veil" data-search="辅助装 女妖 ny">Banshee's Veil</option>
                                <option value="chalice_of_power" data-search="辅助装 圣杯 sb">Chalice of Power</option>
                                <option value="locket_of_the_iron_solari" data-search="辅助装 鸟盾 nd">Locket of the Iron Solari</option>
                                <option value="needlessly_big_gem" data-search="辅助装 无用大宝石 wyd">Needlessly Big Gem</option>
                                <option value="obsidian_cleaver" data-search="辅助装 黑切 hei hq">Obsidian Cleaver</option>
                                <option value="randuins_omen" data-search="辅助装 兰顿 lan ld">Randuin's Omen</option>
                                <option value="shroud_of_stillness" data-search="辅助装 静止法衣 jz jing">Shroud of Stillness</option>
                                <option value="virtue_of_the_martyr" data-search="辅助装 辉耀美德  meid hymd">Virtue of the Martyr</option>
                                <option value="zekes_herald" data-search="辅助装 基克的聚合 jk ji">Zeke's Herald</option>
                                <option value="zephyr" data-search="辅助装 灵风 lf">Zephyr</option>
                                <option value="zzrot_portal" data-search="辅助装 传送门 csm">Zz'Rot Portal</option>
                                <option value="anima_visage" data-search="奥恩神器 绿甲 振奋铠甲 zf zhen lj">Anima Visage</option>
                                <option value="blacksmiths_gloves" data-search="奥恩神器 偷偷 窃贼手套 tt">Blacksmith's Gloves</option>
                                <option value="deaths_defiance" data-search="奥恩神器 死舞 死亡之舞 dd sw">Death's Defiance</option>
                                <option value="deathfire_grasp" data-search="奥恩神器 冥火之拥 mh min">Deathfire Grasp</option>
                                <option value="diamond_hands" data-search="奥恩神器 钻石之手 zs zuanshi">Diamond Hands</option>
                                <option value="eternal_winter" data-search="奥恩神器 冰霜 永恒之霜 ys">Eternal Winter</option>
                                <option value="gamblers_blade"  data-search="奥恩神器 投机者之刃 tjz">Gambler's Blade</option>
                                <option value="gold_collecter" data-search="奥恩神器 金币收集者 sjz">Gold Collector</option>
                                <option value="goldmancers_staff" data-search="奥恩神器 御金师之杖 yujs">Goldmancer's Staff</option>
                                <option value="hullcrusher" data-search="奥恩神器 破舰者 pj">Hullcrusher</option>
                                <option value="infinity_force" data-search="奥恩神器 无尽 wj">Infinity Force</option>
                                <option value="manazane" data-search="奥恩神器 魔切 mq mo">Manazane</option>
                                <option value="moguls_mail" data-search="奥恩神器 大亨之铠 dhzk">Mogul's Mail</option>
                                <option value="snipers_focus" data-search="奥恩神器 狙击手的专注 juji jj">Sniper's Focus</option>
                                <option value="tricksters_glass" data-search="奥恩神器 诡术师之镜 镜子 jz jingz">Tricksters Glass</option>
                                <option value="zhonyas_paradox" data-search="奥恩神器 中亚 中娅沙漏 jinshen js zy">Zhonya's Paradox</option>
                                <option value="absolution" data-search="光明 救赎 js jiushu">Absolution</option>
                                <option value="blessed_bloodthirster"data-search="光明 饮血剑 yx">Blessed Bloodthirster</option>
                                <option value="blue_blessing" data-search="光明 蓝buff 霸符 lanbuff lbf">Blue Blessing</option>
                                <option value="brink_of_dawn" data-search="光明 夜刃 夜之锋刃 ye yr">Brink of Dawn</option>
                                <option value="bulwarks_oath" data-search="光明 圣盾者的誓约 shengdu sd">Bulwark's Oath</option>
                                <option value="covalent_spark" data-search="光明 离子火花 lizi lz">Covalent Spark</option>
                                <option value="crest_of_cinders" data-search="光明 红buff 红霸符 hong buff">Crest of Cinders</option>
                                <option value="demon_slayer" data-search="光明 巨人杀手 巨杀 jusha js">Demon Slayer</option>
                                <option value="dragons_will" data-search="光明 龙牙 ly long">Dragon's Will</option>
                                <option value="dvarapala_stoneplate" data-search="光明 石像鬼板甲 shi sxhbj">Dvarapala Stoneplate</option>
                                <option value="equinox" data-search="光明 薄暮法袍 fapao fp">Equinox</option>
                                <option value="eternal_whisper" data-search="光明 轻语 最后的轻语 qy qingyu">Eternal Whisper</option>
                                <option value="fist_of_fairness"data-search="光明 正义之手 zy zhengyi">Fist of Fairness</option>
                                <option value="glamorous_gauntlet" data-search="光明 珠光护手 法爆 fb fabao">Glamorous Gauntlet</option>
                                <option value="guinsoos_reckoning" data-search="光明 羊刀 yd yangdao">Guinsoo's Reckoning</option>
                                <option value="hextech_lifeblade" data-search="光明 海克斯科技枪 kejiq hkskjq">Hextech Lifeblade</option>
                                <option value="jaksho_the_protean" data-search="光明 贾修 适应性头盔 js">Jak'sho the Protean</option>
                                <option value="legacy_of_the_colossus" data-search="光明 心之刚 xzg xin">Legacy of the Colossus</option>
                                <option value="luminous_deathblade" data-search="光明 死亡之刃 杀人剑 sharenj sw">Luminous Deathblade</option>
                                <option value="more_more-ellonomicon" data-search="光明 鬼书 guishu gs">More More-ellonomicon</option>
                                <option value="nashors_tooth_radiant" data-search="光明 纳什之牙 ns">Nashors' Tooth Radiant</option>
                                <option value="quickestsilver" data-search="光明 水银 qss shuiyin sy">Quickestsilver</option>
                                <option value="rabadons_ascended_deathcap" data-search="光明 大帽 死亡者之帽 dm da">Rabadon's Ascended Deathcap</option>
                                <option value="rascals_gloves"  data-search="光明 偷偷 窃贼手套 tt tou">Rascal's Gloves</option>
                                <option value="rosethorn_vest" data-search="光明 反甲 fj fan">Rosethorn Vest</option>
                                <option value="royal_crownshield" data-search="光明 冕卫 mw mian">Royal Crownshield</option>
                                <option value="runaans_tempest" data-search="光明 卢安娜的飓风 jf ju">Runaan's Tempest</option>
                                <option value="spear_of_hirana" data-search="光明 青龙刀 qld qing">Spear of Hirana</option>
                                <option value="statikk_favor" data-search="光明 电刀 diandao dd">Statikk Favor</option>
                                <option value="steraks_megashield" data-search="光明 血手 xueshou xs">Sterak's Megashield</option>
                                <option value="stride_breaker" data-search="光明 挺进破坏者 破盾 tingjin pd">Stride breaker</option>
                                <option value="sunlight_cape" data-search="光明 日炎铠甲 riyan ry">Sunlight Cape</option>
                                <option value="titans_vow" data-search="光明 泰坦的坚决 tt">Titan's Vow</option>
                                <option value="urf-angels_staff" data-search="光明 大天使之杖 dts">Urf-Angel's Staff</option>
                                <option value="warmogs_pride" data-search="光明 狂徒铠甲 kuangtu kt">Warmog's Pride</option>
                                <option value="zenith_edge" data-search="光明 无尽 wj">Zenith Edge</option>
                                <option value="8-bit_emblem" data-search="8比特转 八比特转 bite">8-Bit Emblem</option>
                                <option value="big_shot_emblem" data-search="大腕转 大腕枪手转 dwqs">Big Shot Emblem</option>
                                <option value="bruiser_emblem" data-search="格斗转  gd">Bruiser Emblem</option>
                                <option value="country_emblem" data-search="乡村转 xc">Country Emblem</option>
                                <option value="crowd_diver_emblem" data-search="音浪刺客转 yl">Crowd Diver Emblem</option>
                                <option value="dazzler_emblem" data-search="耀光转 yg">Dazzler Emblem</option>
                                <option value="disco_emblem" data-search="迪斯科转 disco">Disco Emblem</option>
                                <option value="edgelord_emblem"data-search="刀锋转 df">Edgelord Emblem</option>
                                <option value="emo_emblem" data-search="emo转">Emo Emblem</option>
                                <option value="executioner_emblem" data-search="裁决转 cj">Executioner Emblem</option>
                                <option value="guardian_emblem" data-search="护卫转 huwei hw">Guardian Emblem</option>
                                <option value="heartsteel_emblem" data-search="心之刚转 xzgz">Heartsteel Emblem</option>
                                <option value="hyperpop_emblem" data-search="高能流行转 gn gaoneng">Hyperpop Emblem</option>
                                <option value="kda_emblem" data-search="kda转">K/DA Emblem</option>
                                <option value="mosher_emblem" data-search="舞者转 wz wu">Mosher Emblem</option>
                                <option value="pentakill_emblem" data-search="五杀乐队转 wusha 5sha">Pentakill Emblem</option>
                                <option value="punk_emblem"  data-search="朋克转 pk peng">Punk Emblem</option>
                                <option value="rapidfire_emblem" data-search="疾射枪手转 jishe jsqs">Rapidfire Emblem</option>
                                <option value="sentinel_emblem" data-search="秘术护卫转 秘卫 mw miwei mshu">Sentinel Emblem</option>
                                <option value="spellweaver_emblem" data-search="法师转 法转 fz fashi">Spellweaver Emblem</option>
                                <option value="superfan_emblem" data-search="超级粉丝转 cf">Superfan Emblem</option>
                                <option value="true_damage_emblem" data-search="真实伤害转 zs td">True Damage Emblem</option>                                
                        </select>
                            </select>
                            <select name="${player}-item2-${counters[counterKey]}" data-player="${player}" data-select-type="item2${counters[counterKey]}" class="select2-search items-select-${currentTimeStamp}">
                                <option value="none" selected></option>
                                <option value="bf_sword" data-search="暴风大剑 bf bao">B.F. Sword</option>
                                <option value="recurve_bow" data-search="反曲弓 fqg fan">Recurve Bow</option>
                                <option value="chain_vest"data-search="锁子甲 szj suo">Chain Vest</option>
                                <option value="negatron_cloak" data-search="魔抗斗篷 mk">Negatron Cloak</option>
                                <option value="needlessly_large_rod" data-search="无用大棒 da db">Needlessly Large Rod</option>
                                <option value="tear_of_the_goddess" data-search="女神之泪 眼泪 女神泪 nvs yl">Tear of the Goddess</option>
                                <option value="giants_belt" data-search="巨人腰带 yd">Giant's Belt</option>
                                <option value="sparring_gloves"data-search="暴击手套 拳套 qt">Sparring Gloves</option>
                                <option value="spatula" data-search="铲子 金铲铲 cz">Spatula</option>
                                <option value="deathblade" data-search="杀人剑 死亡之刃 sha srj">Deathblade</option>
                                <option value="giant_slayer" data-search="巨杀 巨人杀手 js jusha">Giant Slayer</option>
                                <option value="edge_of_night" data-search="夜刃 夜之锋刃 ye yr">Edge of Night</option>
                                <option value="blood_thirster" data-search="饮血剑 yin yx">Bloodthirster</option>
                                <option value="hextech_gunblade" data-search="海克斯科技枪 kjq">Hextech Gunblade</option>
                                <option value="spear_of_shojin" data-search="青龙刀 qld">Spear of Shojin</option>
                                <option value="steraks_gage" data-search="血手 xs"">Sterak's Gage</option>
                                <option value="infinity_edge" data-search="无尽之刃 wj">Infinity Edge</option>
                                <option value="red_buff" data-search="红buff 红霸符 hong hb">Red Buff</option>
                                <option value="titans_resolve" data-search="泰坦的坚决 tt">Titan's Resolve</option>
                                <option value="runaans_hurricane" data-search="卢安娜的飓风 jf">Runaan's Hurricane</option>
                                <option value="guinsoos_rageblade"data-search="羊刀 鬼刀 yd">Guinsoo's Rageblade</option>
                                <option value="statikk_shiv" data-search="电刀 dd">Statikk Shiv</option>
                                <option value="nashors_tooth" data-search="纳什之牙 ns">Nashor's Tooth</option>
                                <option value="last_whisper" data-search="最后的轻语 qy">Last Whisper</option>
                                <option value="bramble_vest" data-search="反甲 fj">Bramble Vest</option>
                                <option value="gargoyle_stoneplate" data-search="石像鬼板甲 sjg bj">Gargoyle Stoneplate</option>
                                <option value="sunfire_cape" data-search="日炎铠甲 ry  yan">Sunfire Cape</option>
                                <option value="steadfast_heart" data-search="心之刚 gang xzg">Steadfast Heart</option>
                                <option value="dragons_claw" data-search="龙牙 ly">Dragon's Claw</option>
                                <option value="evenshroud" data-search="薄暮法袍 fp">Evenshroud</option>
                                <option value="quicksilver" data-search="水银 sy">Quicksilver</option>
                                <option value="crownguard" data-search="冕卫 mw">Crownguard</option>
                                <option value="ionic_spark"data-search="离子火花  lizi">Ionic Spark</option>
                                <option value="rabadons_deathcap" data-search="大帽 死亡者之帽 da dm">Rabadon's Deathcap</option>
                                <option value="archangels_staff" data-search="大天使 dts dat">Archangel's Staff</option>
                                <option value="morellonomicon"data-search="鬼书 guis gs">Morellonomicon</option>
                                <option value="jeweled_gauntlet" data-search="法爆 珠光护手 fb fa zg">Jeweled Gauntlet</option>
                                <option value="protectors_vow" data-search="圣盾使的誓约 sds“>Protector's Vow</option>
                                <option value="adaptive_helm"data-search="贾修 适应性头盔 jx”>Adaptive Helm</option>
                                <option value="blue_buff" data-search="蓝buff 蓝霸符 lan">Blue Buff</option>
                                <option value="redemption" data-search="救赎 js">Redemption</option>
                                <option value="hand_of_justice"data-search="正义之手 zhengyi zy">Hand Of Justice</option>
                                <option value="warmogs_armor"data-search="狂徒铠甲 kt">Warmog's Armor</option>
                                <option value="guardbreaker" data-search="挺进破坏者 破盾 pd ting tj">Guardbreaker</option>
                                <option value="thiefs_gloves"data-search="偷偷 窃贼手套 tt">Thief's Gloves</option>
                                <option value="tacticians_crown"data-search="冠冕 自然之力 gm">Tactician's Crown</option>
                                <option value="aegis_of_the_legion" data-search="辅助装 军团圣盾 jt">Aegis of the Legion</option>
                                <option value="banshees_veil" data-search="辅助装 女妖 ny">Banshee's Veil</option>
                                <option value="chalice_of_power" data-search="辅助装 圣杯 sb">Chalice of Power</option>
                                <option value="locket_of_the_iron_solari" data-search="辅助装 鸟盾 nd">Locket of the Iron Solari</option>
                                <option value="needlessly_big_gem" data-search="辅助装 无用大宝石 wyd">Needlessly Big Gem</option>
                                <option value="obsidian_cleaver" data-search="辅助装 黑切 hei hq">Obsidian Cleaver</option>
                                <option value="randuins_omen" data-search="辅助装 兰顿 lan ld">Randuin's Omen</option>
                                <option value="shroud_of_stillness" data-search="辅助装 静止法衣 jz jing">Shroud of Stillness</option>
                                <option value="virtue_of_the_martyr" data-search="辅助装 辉耀美德  meid hymd">Virtue of the Martyr</option>
                                <option value="zekes_herald" data-search="辅助装 基克的聚合 jk ji">Zeke's Herald</option>
                                <option value="zephyr" data-search="辅助装 灵风 lf">Zephyr</option>
                                <option value="zzrot_portal" data-search="辅助装 传送门 csm">Zz'Rot Portal</option>
                                <option value="anima_visage" data-search="奥恩神器 绿甲 振奋铠甲 zf zhen lj">Anima Visage</option>
                                <option value="blacksmiths_gloves" data-search="奥恩神器 偷偷 窃贼手套 tt">Blacksmith's Gloves</option>
                                <option value="deaths_defiance" data-search="奥恩神器 死舞 死亡之舞 dd sw">Death's Defiance</option>
                                <option value="deathfire_grasp" data-search="奥恩神器 冥火之拥 mh min">Deathfire Grasp</option>
                                <option value="diamond_hands" data-search="奥恩神器 钻石之手 zs zuanshi">Diamond Hands</option>
                                <option value="eternal_winter" data-search="奥恩神器 冰霜 永恒之霜 ys">Eternal Winter</option>
                                <option value="gamblers_blade"  data-search="奥恩神器 投机者之刃 tjz">Gambler's Blade</option>
                                <option value="gold_collecter" data-search="奥恩神器 金币收集者 sjz">Gold Collector</option>
                                <option value="goldmancers_staff" data-search="奥恩神器 御金师之杖 yujs">Goldmancer's Staff</option>
                                <option value="hullcrusher" data-search="奥恩神器 破舰者 pj">Hullcrusher</option>
                                <option value="infinity_force" data-search="奥恩神器 无尽 wj">Infinity Force</option>
                                <option value="manazane" data-search="奥恩神器 魔切 mq mo">Manazane</option>
                                <option value="moguls_mail" data-search="奥恩神器 大亨之铠 dhzk">Mogul's Mail</option>
                                <option value="snipers_focus" data-search="奥恩神器 狙击手的专注 juji jj">Sniper's Focus</option>
                                <option value="tricksters_glass" data-search="奥恩神器 诡术师之镜 镜子 jz jingz">Tricksters Glass</option>
                                <option value="zhonyas_paradox" data-search="奥恩神器 中亚 中娅沙漏 jinshen js zy">Zhonya's Paradox</option>
                                <option value="absolution" data-search="光明 救赎 js jiushu">Absolution</option>
                                <option value="blessed_bloodthirster"data-search="光明 饮血剑 yx">Blessed Bloodthirster</option>
                                <option value="blue_blessing" data-search="光明 蓝buff 霸符 lanbuff lbf">Blue Blessing</option>
                                <option value="brink_of_dawn" data-search="光明 夜刃 夜之锋刃 ye yr">Brink of Dawn</option>
                                <option value="bulwarks_oath" data-search="光明 圣盾者的誓约 shengdu sd">Bulwark's Oath</option>
                                <option value="covalent_spark" data-search="光明 离子火花 lizi lz">Covalent Spark</option>
                                <option value="crest_of_cinders" data-search="光明 红buff 红霸符 hong buff">Crest of Cinders</option>
                                <option value="demon_slayer" data-search="光明 巨人杀手 巨杀 jusha js">Demon Slayer</option>
                                <option value="dragons_will" data-search="光明 龙牙 ly long">Dragon's Will</option>
                                <option value="dvarapala_stoneplate" data-search="光明 石像鬼板甲 shi sxhbj">Dvarapala Stoneplate</option>
                                <option value="equinox" data-search="光明 薄暮法袍 fapao fp">Equinox</option>
                                <option value="eternal_whisper" data-search="光明 轻语 最后的轻语 qy qingyu">Eternal Whisper</option>
                                <option value="fist_of_fairness"data-search="光明 正义之手 zy zhengyi">Fist of Fairness</option>
                                <option value="glamorous_gauntlet" data-search="光明 珠光护手 法爆 fb fabao">Glamorous Gauntlet</option>
                                <option value="guinsoos_reckoning" data-search="光明 羊刀 yd yangdao">Guinsoo's Reckoning</option>
                                <option value="hextech_lifeblade" data-search="光明 海克斯科技枪 kejiq hkskjq">Hextech Lifeblade</option>
                                <option value="jaksho_the_protean" data-search="光明 贾修 适应性头盔 js">Jak'sho the Protean</option>
                                <option value="legacy_of_the_colossus" data-search="光明 心之刚 xzg xin">Legacy of the Colossus</option>
                                <option value="luminous_deathblade" data-search="光明 死亡之刃 杀人剑 sharenj sw">Luminous Deathblade</option>
                                <option value="more_more-ellonomicon" data-search="光明 鬼书 guishu gs">More More-ellonomicon</option>
                                <option value="nashors_tooth_radiant" data-search="光明 纳什之牙 ns">Nashors' Tooth Radiant</option>
                                <option value="quickestsilver" data-search="光明 水银 qss shuiyin sy">Quickestsilver</option>
                                <option value="rabadons_ascended_deathcap" data-search="光明 大帽 死亡者之帽 dm da">Rabadon's Ascended Deathcap</option>
                                <option value="rascals_gloves"  data-search="光明 偷偷 窃贼手套 tt tou">Rascal's Gloves</option>
                                <option value="rosethorn_vest" data-search="光明 反甲 fj fan">Rosethorn Vest</option>
                                <option value="royal_crownshield" data-search="光明 冕卫 mw mian">Royal Crownshield</option>
                                <option value="runaans_tempest" data-search="光明 卢安娜的飓风 jf ju">Runaan's Tempest</option>
                                <option value="spear_of_hirana" data-search="光明 青龙刀 qld qing">Spear of Hirana</option>
                                <option value="statikk_favor" data-search="光明 电刀 diandao dd">Statikk Favor</option>
                                <option value="steraks_megashield" data-search="光明 血手 xueshou xs">Sterak's Megashield</option>
                                <option value="stride_breaker" data-search="光明 挺进破坏者 破盾 tingjin pd">Stride breaker</option>
                                <option value="sunlight_cape" data-search="光明 日炎铠甲 riyan ry">Sunlight Cape</option>
                                <option value="titans_vow" data-search="光明 泰坦的坚决 tt">Titan's Vow</option>
                                <option value="urf-angels_staff" data-search="光明 大天使之杖 dts">Urf-Angel's Staff</option>
                                <option value="warmogs_pride" data-search="光明 狂徒铠甲 kuangtu kt">Warmog's Pride</option>
                                <option value="zenith_edge" data-search="光明 无尽 wj">Zenith Edge</option>
                                <option value="8-bit_emblem" data-search="8比特转 八比特转 bite">8-Bit Emblem</option>
                                <option value="big_shot_emblem" data-search="大腕转 大腕枪手转 dwqs">Big Shot Emblem</option>
                                <option value="bruiser_emblem" data-search="格斗转  gd">Bruiser Emblem</option>
                                <option value="country_emblem" data-search="乡村转 xc">Country Emblem</option>
                                <option value="crowd_diver_emblem" data-search="音浪刺客转 yl">Crowd Diver Emblem</option>
                                <option value="dazzler_emblem" data-search="耀光转 yg">Dazzler Emblem</option>
                                <option value="disco_emblem" data-search="迪斯科转 disco">Disco Emblem</option>
                                <option value="edgelord_emblem"data-search="刀锋转 df">Edgelord Emblem</option>
                                <option value="emo_emblem" data-search="emo转">Emo Emblem</option>
                                <option value="executioner_emblem" data-search="裁决转 cj">Executioner Emblem</option>
                                <option value="guardian_emblem" data-search="护卫转 huwei hw">Guardian Emblem</option>
                                <option value="heartsteel_emblem" data-search="心之刚转 xzgz">Heartsteel Emblem</option>
                                <option value="hyperpop_emblem" data-search="高能流行转 gn gaoneng">Hyperpop Emblem</option>
                                <option value="kda_emblem" data-search="kda转">K/DA Emblem</option>
                                <option value="mosher_emblem" data-search="舞者转 wz wu">Mosher Emblem</option>
                                <option value="pentakill_emblem" data-search="五杀乐队转 wusha 5sha">Pentakill Emblem</option>
                                <option value="punk_emblem"  data-search="朋克转 pk peng">Punk Emblem</option>
                                <option value="rapidfire_emblem" data-search="疾射枪手转 jishe jsqs">Rapidfire Emblem</option>
                                <option value="sentinel_emblem" data-search="秘术护卫转 秘卫 mw miwei mshu">Sentinel Emblem</option>
                                <option value="spellweaver_emblem" data-search="法师转 法转 fz fashi">Spellweaver Emblem</option>
                                <option value="superfan_emblem" data-search="超级粉丝转 cf">Superfan Emblem</option>
                                <option value="true_damage_emblem" data-search="真实伤害转 zs td">True Damage Emblem</option>           
                            </select>
                            <select name="${player}-item3-${counters[counterKey]}" data-player="${player}" data-select-type="item3${counters[counterKey]}" class="select2-search items-select-${currentTimeStamp}">
                                <option value="none" selected></option>
                                <option value="bf_sword" data-search="暴风大剑 bf bao">B.F. Sword</option>
                                <option value="recurve_bow" data-search="反曲弓 fqg fan">Recurve Bow</option>
                                <option value="chain_vest"data-search="锁子甲 szj suo">Chain Vest</option>
                                <option value="negatron_cloak" data-search="魔抗斗篷 mk">Negatron Cloak</option>
                                <option value="needlessly_large_rod" data-search="无用大棒 da db">Needlessly Large Rod</option>
                                <option value="tear_of_the_goddess" data-search="女神之泪 眼泪 女神泪 nvs yl">Tear of the Goddess</option>
                                <option value="giants_belt" data-search="巨人腰带 yd">Giant's Belt</option>
                                <option value="sparring_gloves"data-search="暴击手套 拳套 qt">Sparring Gloves</option>
                                <option value="spatula" data-search="铲子 金铲铲 cz">Spatula</option>
                                <option value="deathblade" data-search="杀人剑 死亡之刃 sha srj">Deathblade</option>
                                <option value="giant_slayer" data-search="巨杀 巨人杀手 js jusha">Giant Slayer</option>
                                <option value="edge_of_night" data-search="夜刃 夜之锋刃 ye yr">Edge of Night</option>
                                <option value="blood_thirster" data-search="饮血剑 yin yx">Bloodthirster</option>
                                <option value="hextech_gunblade" data-search="海克斯科技枪 kjq">Hextech Gunblade</option>
                                <option value="spear_of_shojin" data-search="青龙刀 qld">Spear of Shojin</option>
                                <option value="steraks_gage" data-search="血手 xs"">Sterak's Gage</option>
                                <option value="infinity_edge" data-search="无尽之刃 wj">Infinity Edge</option>
                                <option value="red_buff" data-search="红buff 红霸符 hong hb">Red Buff</option>
                                <option value="titans_resolve" data-search="泰坦的坚决 tt">Titan's Resolve</option>
                                <option value="runaans_hurricane" data-search="卢安娜的飓风 jf">Runaan's Hurricane</option>
                                <option value="guinsoos_rageblade"data-search="羊刀 鬼刀 yd">Guinsoo's Rageblade</option>
                                <option value="statikk_shiv" data-search="电刀 dd">Statikk Shiv</option>
                                <option value="nashors_tooth" data-search="纳什之牙 ns">Nashor's Tooth</option>
                                <option value="last_whisper" data-search="最后的轻语 qy">Last Whisper</option>
                                <option value="bramble_vest" data-search="反甲 fj">Bramble Vest</option>
                                <option value="gargoyle_stoneplate" data-search="石像鬼板甲 sjg bj">Gargoyle Stoneplate</option>
                                <option value="sunfire_cape" data-search="日炎铠甲 ry  yan">Sunfire Cape</option>
                                <option value="steadfast_heart" data-search="心之刚 gang xzg">Steadfast Heart</option>
                                <option value="dragons_claw" data-search="龙牙 ly">Dragon's Claw</option>
                                <option value="evenshroud" data-search="薄暮法袍 fp">Evenshroud</option>
                                <option value="quicksilver" data-search="水银 sy">Quicksilver</option>
                                <option value="crownguard" data-search="冕卫 mw">Crownguard</option>
                                <option value="ionic_spark"data-search="离子火花  lizi">Ionic Spark</option>
                                <option value="rabadons_deathcap" data-search="大帽 死亡者之帽 da dm">Rabadon's Deathcap</option>
                                <option value="archangels_staff" data-search="大天使 dts dat">Archangel's Staff</option>
                                <option value="morellonomicon"data-search="鬼书 guis gs">Morellonomicon</option>
                                <option value="jeweled_gauntlet" data-search="法爆 珠光护手 fb fa zg">Jeweled Gauntlet</option>
                                <option value="protectors_vow" data-search="圣盾使的誓约 sds“>Protector's Vow</option>
                                <option value="adaptive_helm"data-search="贾修 适应性头盔 jx”>Adaptive Helm</option>
                                <option value="blue_buff" data-search="蓝buff 蓝霸符 lan">Blue Buff</option>
                                <option value="redemption" data-search="救赎 js">Redemption</option>
                                <option value="hand_of_justice"data-search="正义之手 zhengyi zy">Hand Of Justice</option>
                                <option value="warmogs_armor"data-search="狂徒铠甲 kt">Warmog's Armor</option>
                                <option value="guardbreaker" data-search="挺进破坏者 破盾 pd ting tj">Guardbreaker</option>
                                <option value="thiefs_gloves"data-search="偷偷 窃贼手套 tt">Thief's Gloves</option>
                                <option value="tacticians_crown"data-search="冠冕 自然之力 gm">Tactician's Crown</option>
                                <option value="aegis_of_the_legion" data-search="辅助装 军团圣盾 jt">Aegis of the Legion</option>
                                <option value="banshees_veil" data-search="辅助装 女妖 ny">Banshee's Veil</option>
                                <option value="chalice_of_power" data-search="辅助装 圣杯 sb">Chalice of Power</option>
                                <option value="locket_of_the_iron_solari" data-search="辅助装 鸟盾 nd">Locket of the Iron Solari</option>
                                <option value="needlessly_big_gem" data-search="辅助装 无用大宝石 wyd">Needlessly Big Gem</option>
                                <option value="obsidian_cleaver" data-search="辅助装 黑切 hei hq">Obsidian Cleaver</option>
                                <option value="randuins_omen" data-search="辅助装 兰顿 lan ld">Randuin's Omen</option>
                                <option value="shroud_of_stillness" data-search="辅助装 静止法衣 jz jing">Shroud of Stillness</option>
                                <option value="virtue_of_the_martyr" data-search="辅助装 辉耀美德  meid hymd">Virtue of the Martyr</option>
                                <option value="zekes_herald" data-search="辅助装 基克的聚合 jk ji">Zeke's Herald</option>
                                <option value="zephyr" data-search="辅助装 灵风 lf">Zephyr</option>
                                <option value="zzrot_portal" data-search="辅助装 传送门 csm">Zz'Rot Portal</option>
                                <option value="anima_visage" data-search="奥恩神器 绿甲 振奋铠甲 zf zhen lj">Anima Visage</option>
                                <option value="blacksmiths_gloves" data-search="奥恩神器 偷偷 窃贼手套 tt">Blacksmith's Gloves</option>
                                <option value="deaths_defiance" data-search="奥恩神器 死舞 死亡之舞 dd sw">Death's Defiance</option>
                                <option value="deathfire_grasp" data-search="奥恩神器 冥火之拥 mh min">Deathfire Grasp</option>
                                <option value="diamond_hands" data-search="奥恩神器 钻石之手 zs zuanshi">Diamond Hands</option>
                                <option value="eternal_winter" data-search="奥恩神器 冰霜 永恒之霜 ys">Eternal Winter</option>
                                <option value="gamblers_blade"  data-search="奥恩神器 投机者之刃 tjz">Gambler's Blade</option>
                                <option value="gold_collecter" data-search="奥恩神器 金币收集者 sjz">Gold Collector</option>
                                <option value="goldmancers_staff" data-search="奥恩神器 御金师之杖 yujs">Goldmancer's Staff</option>
                                <option value="hullcrusher" data-search="奥恩神器 破舰者 pj">Hullcrusher</option>
                                <option value="infinity_force" data-search="奥恩神器 无尽 wj">Infinity Force</option>
                                <option value="manazane" data-search="奥恩神器 魔切 mq mo">Manazane</option>
                                <option value="moguls_mail" data-search="奥恩神器 大亨之铠 dhzk">Mogul's Mail</option>
                                <option value="snipers_focus" data-search="奥恩神器 狙击手的专注 juji jj">Sniper's Focus</option>
                                <option value="tricksters_glass" data-search="奥恩神器 诡术师之镜 镜子 jz jingz">Tricksters Glass</option>
                                <option value="zhonyas_paradox" data-search="奥恩神器 中亚 中娅沙漏 jinshen js zy">Zhonya's Paradox</option>
                                <option value="absolution" data-search="光明 救赎 js jiushu">Absolution</option>
                                <option value="blessed_bloodthirster"data-search="光明 饮血剑 yx">Blessed Bloodthirster</option>
                                <option value="blue_blessing" data-search="光明 蓝buff 霸符 lanbuff lbf">Blue Blessing</option>
                                <option value="brink_of_dawn" data-search="光明 夜刃 夜之锋刃 ye yr">Brink of Dawn</option>
                                <option value="bulwarks_oath" data-search="光明 圣盾者的誓约 shengdu sd">Bulwark's Oath</option>
                                <option value="covalent_spark" data-search="光明 离子火花 lizi lz">Covalent Spark</option>
                                <option value="crest_of_cinders" data-search="光明 红buff 红霸符 hong buff">Crest of Cinders</option>
                                <option value="demon_slayer" data-search="光明 巨人杀手 巨杀 jusha js">Demon Slayer</option>
                                <option value="dragons_will" data-search="光明 龙牙 ly long">Dragon's Will</option>
                                <option value="dvarapala_stoneplate" data-search="光明 石像鬼板甲 shi sxhbj">Dvarapala Stoneplate</option>
                                <option value="equinox" data-search="光明 薄暮法袍 fapao fp">Equinox</option>
                                <option value="eternal_whisper" data-search="光明 轻语 最后的轻语 qy qingyu">Eternal Whisper</option>
                                <option value="fist_of_fairness"data-search="光明 正义之手 zy zhengyi">Fist of Fairness</option>
                                <option value="glamorous_gauntlet" data-search="光明 珠光护手 法爆 fb fabao">Glamorous Gauntlet</option>
                                <option value="guinsoos_reckoning" data-search="光明 羊刀 yd yangdao">Guinsoo's Reckoning</option>
                                <option value="hextech_lifeblade" data-search="光明 海克斯科技枪 kejiq hkskjq">Hextech Lifeblade</option>
                                <option value="jaksho_the_protean" data-search="光明 贾修 适应性头盔 js">Jak'sho the Protean</option>
                                <option value="legacy_of_the_colossus" data-search="光明 心之刚 xzg xin">Legacy of the Colossus</option>
                                <option value="luminous_deathblade" data-search="光明 死亡之刃 杀人剑 sharenj sw">Luminous Deathblade</option>
                                <option value="more_more-ellonomicon" data-search="光明 鬼书 guishu gs">More More-ellonomicon</option>
                                <option value="nashors_tooth_radiant" data-search="光明 纳什之牙 ns">Nashors' Tooth Radiant</option>
                                <option value="quickestsilver" data-search="光明 水银 qss shuiyin sy">Quickestsilver</option>
                                <option value="rabadons_ascended_deathcap" data-search="光明 大帽 死亡者之帽 dm da">Rabadon's Ascended Deathcap</option>
                                <option value="rascals_gloves"  data-search="光明 偷偷 窃贼手套 tt tou">Rascal's Gloves</option>
                                <option value="rosethorn_vest" data-search="光明 反甲 fj fan">Rosethorn Vest</option>
                                <option value="royal_crownshield" data-search="光明 冕卫 mw mian">Royal Crownshield</option>
                                <option value="runaans_tempest" data-search="光明 卢安娜的飓风 jf ju">Runaan's Tempest</option>
                                <option value="spear_of_hirana" data-search="光明 青龙刀 qld qing">Spear of Hirana</option>
                                <option value="statikk_favor" data-search="光明 电刀 diandao dd">Statikk Favor</option>
                                <option value="steraks_megashield" data-search="光明 血手 xueshou xs">Sterak's Megashield</option>
                                <option value="stride_breaker" data-search="光明 挺进破坏者 破盾 tingjin pd">Stride breaker</option>
                                <option value="sunlight_cape" data-search="光明 日炎铠甲 riyan ry">Sunlight Cape</option>
                                <option value="titans_vow" data-search="光明 泰坦的坚决 tt">Titan's Vow</option>
                                <option value="urf-angels_staff" data-search="光明 大天使之杖 dts">Urf-Angel's Staff</option>
                                <option value="warmogs_pride" data-search="光明 狂徒铠甲 kuangtu kt">Warmog's Pride</option>
                                <option value="zenith_edge" data-search="光明 无尽 wj">Zenith Edge</option>
                                <option value="8-bit_emblem" data-search="8比特转 八比特转 bite">8-Bit Emblem</option>
                                <option value="big_shot_emblem" data-search="大腕转 大腕枪手转 dwqs">Big Shot Emblem</option>
                                <option value="bruiser_emblem" data-search="格斗转  gd">Bruiser Emblem</option>
                                <option value="country_emblem" data-search="乡村转 xc">Country Emblem</option>
                                <option value="crowd_diver_emblem" data-search="音浪刺客转 yl">Crowd Diver Emblem</option>
                                <option value="dazzler_emblem" data-search="耀光转 yg">Dazzler Emblem</option>
                                <option value="disco_emblem" data-search="迪斯科转 disco">Disco Emblem</option>
                                <option value="edgelord_emblem"data-search="刀锋转 df">Edgelord Emblem</option>
                                <option value="emo_emblem" data-search="emo转">Emo Emblem</option>
                                <option value="executioner_emblem" data-search="裁决转 cj">Executioner Emblem</option>
                                <option value="guardian_emblem" data-search="护卫转 huwei hw">Guardian Emblem</option>
                                <option value="heartsteel_emblem" data-search="心之刚转 xzgz">Heartsteel Emblem</option>
                                <option value="hyperpop_emblem" data-search="高能流行转 gn gaoneng">Hyperpop Emblem</option>
                                <option value="kda_emblem" data-search="kda转">K/DA Emblem</option>
                                <option value="mosher_emblem" data-search="舞者转 wz wu">Mosher Emblem</option>
                                <option value="pentakill_emblem" data-search="五杀乐队转 wusha 5sha">Pentakill Emblem</option>
                                <option value="punk_emblem"  data-search="朋克转 pk peng">Punk Emblem</option>
                                <option value="rapidfire_emblem" data-search="疾射枪手转 jishe jsqs">Rapidfire Emblem</option>
                                <option value="sentinel_emblem" data-search="秘术护卫转 秘卫 mw miwei mshu">Sentinel Emblem</option>
                                <option value="spellweaver_emblem" data-search="法师转 法转 fz fashi">Spellweaver Emblem</option>
                                <option value="superfan_emblem" data-search="超级粉丝转 cf">Superfan Emblem</option>
                                <option value="true_damage_emblem" data-search="真实伤害转 zs td">True Damage Emblem</option>       
                            </select>
                        </div>
                    </div>
                </div>
            </div>`;

    $(`#${panelId}-${player}-container-top`).append(newChampionCardHTML);
    initializeSelect2ForNewCard(currentTimeStamp);
    setupSelect2Listeners(currentTimeStamp,counters[counterKey]);
    bindDeleteEvent(); 

    if (panelId === currentPanelId) {
        setTimeout(function() {
            $(`#${panelId}-${player}-container-top .champions-select-${currentTimeStamp}`).select2('open');
        }, 0); 
    }
}

function setupSelect2Listeners(timeStamp,counter) {

    $(`.champions-select-${timeStamp}`).on('select2:select', function (e) {
        $(`.stars-select-${timeStamp}`).select2('open');
    });

    $(`.stars-select-${timeStamp}`).on('select2:select', function (e) {
        $(`.items-select-${timeStamp}[data-select-type='item1${counter}']`).select2('open');
    });

    $(`.items-select-${timeStamp}[data-select-type='item1${counter}']`).on('select2:select', function (e) {
        $(`.items-select-${timeStamp}[data-select-type='item2${counter}']`).select2('open');
    });

    $(`.items-select-${timeStamp}[data-select-type='item2${counter}']`).on('select2:select', function (e) {
        $(`.items-select-${timeStamp}[data-select-type='item3${counter}']`).select2('open');
    });
    
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

    
    function setStyles() {
        var screenWidth = window.innerWidth;
        if (screenWidth <= 1000) { 
            $(`.headliners-select-${timeStamp}`).next('.select2-container').css({
                'width': '130%'
            });

            $(`.champions-select-${timeStamp}`).next('.select2-container').css({
                'width': '130%',
            });

            $(`.stars-select-${timeStamp}`).next('.select2-container').css({
                'width': '400%',
            });

            $(`.items-select-${timeStamp}`).each(function() {
                $(this).next('.select2-container').css({
                    'width': '80%',
                });
            });
        } else { 
            $(`.headliners-select-${timeStamp}`).next('.select2-container').css({
                'width': '80%'
            });

            $(`.champions-select-${timeStamp}`).next('.select2-container').css({
                'width': '80%',
            });

            $(`.stars-select-${timeStamp}`).next('.select2-container').css({
                'width': '120%',
            });

            $(`.items-select-${timeStamp}`).each(function() {
                $(this).next('.select2-container').css({
                    'width': '30%',
                });
            });
        }
    }

    setStyles();

    $(window).on('resize', function() {
        setStyles();
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
