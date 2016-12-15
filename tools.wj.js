var wj = wj || {};

/*
 * --------------------------------------
 * publicMethod by weijuer
 * --------------------------------------
 */

/*
 * 数据常量
 */ 
wj.data = {
    BASE_URL : $('.wj-content').attr('data-basePath'),
    userIds: []
}

//一、工具类
wj.tools = {
    isNull: function(value){
        if(!value || $.trim(value) == '') {
            return true;
        }else {
            return false;
        }
    },
    isNum: function(input){

        input.value = input.value.replace(/\D/g,'');
        if(input.value >= 9){
            input.value = 9;
        }
        if(input.value < 1){
            input.value = '';
        }
    },
  	tableIsCheck: function(options){
        // 设定默认值:
        var defaults = {
            selectAll: $('#wj-CheckAll'),
            items: $('.wj-CheckItem')
        };

        var opts = $.extend({}, defaults, options);
        var selectAll = opts.selectAll;
        var items = opts.items;
        var invertSelect = null;
        var trs = items.parents('tr');

        //监听全选或全不选事件
        selectAll.click(function(){
            if(this.checked){
                items.prop('checked',true);
                // trs.addClass('wj-table-selected');
            }else {
                items.prop('checked',false);
                // trs.removeClass('wj-table-selected');
            }
        });

        //监听反选事件
        /*invertSelect.click(function(){
            items.map(function(){
                if(this.checked){
                    this.checked = false;
                }else {
                    this.checked = true;
                }
            });
        });*/

        //监听手动选择事件
        items.click(function(){

            // 添加选中样式
            /*if(this.checked) {
                $(this).parents('tr').addClass('wj-table-selected');
            }else {
                $(this).parents('tr').removeClass('wj-table-selected');
            }*/

            var isAllChecked = true;
            items.map(function(){
                if(!this.checked){
                    isAllChecked = false;
                }
            });

            if(isAllChecked){
                selectAll.prop('checked',true);
            }else {
                selectAll.prop('checked',false);
            }
        });
    }
}