# tools
一大波好用的工具哦
## 最近在整理工作和学习中使用的js小工具，或者修复bug的解决方案，会定期整理出来，尽情期待！！！
### tool.wj.js 说明

#### 一、weiijuer.js
##### 1.本小工具基于jQ， 请使用前先引用jQ;

```
var wj = wj || {};

/*
 * --------------------------------------
 * publicMethod by weijuer
 * --------------------------------------
 */
 
/*
 * 一、数据常量
 */ 
wj.data = {
	BASE_URL : $('.wj-content').attr('data-basePath')
}

/*
 * 二、检验小工具
 */  
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
	tableIsCheck: function(options) {
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
```

#### 2. 使用说明 （备注任何情况下都需要使用全路径，防止报错，即wj.tools.XXXX,XXXX为方法名）

##### 2.1 调用方法
```
// 全选配置
var opts = {
	selectAll: $('#checkAll'),
	items: $('.checkItem')
};

wj.tools.tableIsCheck(opts);
```

##### 2.2 页面初始化
```
$(function(){

// 全选配置
var opts = {
	selectAll: $('#checkAll'),
	items: $('.checkItem')
};

// 初始化
wj.tools.tableIsCheck(opts);

});
```

#### 二、其他js
##### 1.js 判断ie8 
1.1（方式一）

如果只是判断IE版本，没必要动用JQUERY来做，直接可以判断了，，下面是各版本的代码

```
<!--[if IE]>    
<h1>您正在使用IE浏览器</h1>    
<!--[if IE 6]>    
 <h2>版本 6</h2>    
<![endif]-->    
<!--[if IE 7]>    
<h2>版本 7</h2>    
<![endif]-->  
<!--[if gte IE 8]> 
<h2>版本 8及以上</h2>    
<![endif]-->  
<![endif]-->  
```

1.2 （方式二 推荐）
```

    var userAgent = window.navigator.userAgent.toLowerCase();
  
    $.browser.msie10 = $.browser.msie && /msie 10\.0/i.test(userAgent);
    $.browser.msie9 = $.browser.msie && /msie 9\.0/i.test(userAgent); 
    $.browser.msie8 = $.browser.msie && /msie 8\.0/i.test(userAgent);
    $.browser.msie7 = $.browser.msie && /msie 7\.0/i.test(userAgent);
    $.browser.msie6 = !$.browser.msie8 && !$.browser.msie7 && $.browser.msie && /msie 6\.0/i.test(userAgent);
```