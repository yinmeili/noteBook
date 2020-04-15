var $notepad= $('#notepad-app');
//菜单栏
var menubar = new MenuBar();
//编辑区
var editor = new Editor();
var $editor = editor.create();
$notepad.append($editor);
//字体
var dlgFont = new DlgFont(editor);
var $dlgFont = dlgFont.show();
$notepad.append($dlgFont);
$notepad.click(menubar.hideMenu.bind(menubar));

