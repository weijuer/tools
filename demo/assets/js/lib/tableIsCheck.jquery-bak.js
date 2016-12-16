/*
 * --------------------------------------------------
 * tableIsCheck 1.0
 * Date: 2016-12-16 
 * 表格中全选、反选、勾选，以及勾选变色
 * --------------------------------------------------
 */

(function($){ 
	$.fn.tableIsCheck = function(options){
		// 设定默认值:
        var defaults = {
            items: '.checkItem',
            selectAll: '#CheckAll',
            invertSelect: '#CheckInvert'
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
		
		var defaults = { 
			evenRowClass:"evenRow", 
			oddRowClass:"oddRow", 
			activeRowClass:"activeRow" 
		} 
		var options = $.extend(defaults, options); 
		this.each(function(){ 
			var thisTable=$(this); 
			//添加奇偶行颜色 
			$(thisTable).find("tr:even").addClass(options.evenRowClass); 
			$(thisTable).find("tr:odd").addClass(options.oddRowClass); 
			//添加活动行颜色 
			$(thisTable).find("tr").bind("mouseover",function(){ 
				$(this).addClass(options.activeRowClass); 
			}); 
			$(thisTable).find("tr").bind("mouseout",function(){ 
				$(this).removeClass(options.activeRowClass); 
			}); 
		}); 
	}; 
})(jQuery);