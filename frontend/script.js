document.addEventListener('DOMContentLoaded', function() {
    var addPlayer1ContentBtn = document.getElementById('add-player1-content-btn');

    addPlayer1ContentBtn.addEventListener('click', function() {
        var currentTimeStamp = new Date().getTime(); // 用时间戳确保ID的唯一性
        var itemCounter = 0;

        // 创建新的英雄卡片HTML字符串，为每个select添加一个基于时间戳的唯一类名
        var newChampionCardHTML = `
            <div class="card custom-card-champion border-dark mb-3">
                <div class="card-body">
                    <div class="row">
                        <!-- Delete button -->
                        <div class="col-auto align-self-start">
                            <button type="button" class="btn btn-danger btn-sm delete-champion">
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </div>
                        <!-- Traits select -->
                        <div class="col-2-5">
                            <div class="traits-title">羁绊</div>
                            <select name="trait" class="select2-search traits-select-${currentTimeStamp}">
                                <option>heartsteelsssssssss</option>
                                <option>punk</option>
                            </select>
                        </div>
                        <!-- Champions select -->
                        <div class="col-2-5">
                            <div class="champion-title">英雄</div>
                            <select name="champion" class="select2-search champions-select-${currentTimeStamp}">
                                <!-- 英雄选项 -->
                            </select>
                        </div>
                        <!-- Star select -->
                        <div class="col-2">
                            <div name="star" class="star-title">星级</div>
                            <select class="select2-search stars-select-${currentTimeStamp}">
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                            </select>
                        </div>
                        <!-- Items select -->
                        <div class="col-4-5">
                            <div class="item-title">装备</div>
                            <select name="item1" class="select2-search items-select-${currentTimeStamp}">
                            </select>
                            <select name="item2" class="select2-search items-select-${currentTimeStamp}">
                            </select>
                            <select name="item3" class="select2-search items-select-${currentTimeStamp}">
                                <!-- 装备选项 -->
                            </select>
                        </div>
                    </div>
                </div>
            </div>`;

        $('#player1-container-top').append(newChampionCardHTML);

        initializeSelect2ForNewCard(currentTimeStamp);

        bindDeleteEvent();
    });

    function initializeSelect2ForNewCard(timeStamp) {
        $(`.traits-select-${timeStamp}, .champions-select-${timeStamp}, .stars-select-${timeStamp}, .items-select-${timeStamp}`).select2({
            placeholder: "搜索",
            allowClear: true
        });
        
        $(`.traits-select-${timeStamp}`).next('.select2-container').css({
            'width': '90%'
        });
    
        $(`.champions-select-${timeStamp}`).next('.select2-container').css({
            'width': '100%',
        });
    
        $(`.stars-select-${timeStamp}`).next('.select2-container').css({
            'width': '80%',
         
        });
    
        $(`.items-select-${timeStamp}`).each(function() {
            $(this).next('.select2-container').css({
                'width': '30%',
            });
        });

    
    
        
        $(`.traits-select-${timeStamp}, .champions-select-${timeStamp}, .stars-select-${timeStamp}, .items-select-${timeStamp}`).on('select2:open', function() {
            setTimeout(function() {
                $('.select2-dropdown').css({
                    'width': '200px', 
                    'font-size': '14px', 
                });
            }, 0);
        });
        
    }

    function bindDeleteEvent() {
        $('.delete-champion').off('click').on('click', function() {
            $(this).closest('.custom-card-champion').remove();
        });
    }
});

  
$(document).ready(function() {


    $(`.portal-select,.hex-select`).select2({
        placeholder: "搜索",
        allowClear: true
    });
    
    $(`.portal-select`).next('.select2-container').css({
        'width': '70%',
        'margin-left': '18px',
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
