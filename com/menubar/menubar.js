function MenuBar(){
    
         
    this.menus = [];         // 存放五个下拉菜单的 DOM 对象

    /* 下拉菜单是否展开，没有展开为：-1
   * 展开为：n，n 代表展开的是第几个菜单
   * 0 是文件菜单，1 是编辑菜单，2 是格式菜单
   * 3 是查看菜单，4 是帮助菜单 */
    this.active = -1;
    this.create=function(menuData){
        var $bar = $('<div class="notepad-menubar"></div>');
        var $titles = $('<ul class="menu-title"></ul>');
        //添加一级菜单
        for(var i=0;i<menuData.length;i++){
            var $title=$("<li class='title'>" + menuData[i].title + "</li>");
            $title.click(
                this.showMenu.bind(this, i)
              );
            $title.mouseover(
                this.showMenu.bind(this, i)
              );
            $titles.append($title);
        }
        $bar.append($titles);
        for(var i=0;i<menuData.length;i++){
            var $menus = $('<ul class="menus"></ul>'),
                items = menuData[i].menuItems;
            for(var j=0;j<items.length;j++){
                if(items[j].title=='hr'){
                    var $hr = $('<li class="menu-hr"></li>');
                    $menus.append($hr);
                }else{
                    var $menu= $(`<li class="menu_item">${menuData[i].menuItems[j].title}<span class="shortcut">${menuData[i].menuItems[j].shortcut}</span></li>`);
                    $menu.click(items[j].handler);
                }
                $menus.append($menu);
            }
            $menus.css('width', menuData[i].width);
            $menus.css('left', 54*i);
            $bar.append($menus);
            this.menus.push($menus);
        }
        this.$bar = $bar;
        return $bar;
    };
    this.showMenu=function(index,e){
        e.stopPropagation();
        if(e.type=='click'&&this.active>-1) {
            this.hideMenu();
          }else if(e.type=='click'||this.active>-1) {
            this.active=index;
            for (var i=0;i<this.menus.length;i++) {
              if(i==index) {
                this.menus[i].addClass('active');
              }else{
                this.menus[i].removeClass('active');
              }
            }
          }
    };
    this.hideMenu = function () {
        this.active = -1;
        for (var i = 0; i < this.menus.length; i ++) {
          this.menus[i].removeClass('active');
        }
    };

}



