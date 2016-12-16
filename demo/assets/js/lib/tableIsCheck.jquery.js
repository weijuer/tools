/*
 * --------------------------------------------------
 * tableIsCheck 1.0
 * Date: 2016-12-16 
 * 表格中全选、反选、勾选，以及勾选变色
 * --------------------------------------------------
 */

(function($){ 
	$.tableIsCheck = function(options) {
		// 设定默认值:
        var defaults = {
            items: '.checkItem',
            selectAll: '#CheckAll',
            invertSelect: '#CheckInvert',
            activeClass: 'active'
        };

        var opts = $.extend({}, defaults, options);
        
        var selectAll = $(opts.selectAll) || '';
        var items = $(opts.items) || '';
        var invertSelect =  $(opts.invertSelect) || '';
		var activeClass = opts.activeClass || '';
        var trs = items.parents('tr');
		
        //监听全选或全不选事件
        selectAll.click(function(){
            if(this.checked){
                items.prop('checked',true);
                trs.addClass(activeClass);
            }else {
                items.prop('checked',false);
                trs.removeClass(activeClass);
            }
        });

        //监听反选事件
        invertSelect.click(function(){
            items.map(function(){
                if(this.checked){
                    this.checked = false;
                }else {
                    this.checked = true;
                }
            });
        });

        //监听手动选择事件
        trs.click(function(){
			var _item = $(this).find('input' + opts.items)[0];
            // 添加选中样式
            if(_item.checked) {
            	_item.checked = false;
                $(this).removeClass(activeClass);
            }else {
            	_item.checked = true;
                $(this).addClass(activeClass);
            }

            var isAllChecked = true;
            items.map(function(){
                if(!_item.checked){
                    isAllChecked = false;
                }
            });

            if(isAllChecked){
                selectAll.prop('checked',true);
            }else {
                selectAll.prop('checked',false);
            }
        });
		
	}; 
})(jQuery);