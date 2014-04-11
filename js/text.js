var text= new Array();
text[1]='炸酱面 干拌面 馄饨 米线 蒸菜 快餐 盖浇饭 包子 凉皮 炒饭 桶饼 锅巴饭 饺子 啥都不吃';
text[2]='白水 可乐 雪碧 芬达 果味奶饮料 果汁 啤酒 红酒 白酒 红茶 绿茶 咖啡 牛奶 奶茶 啥都不喝';
text[3]="C C++ C# Go Java JavaScript Ruby Lisp Python Scala";
function inputtext(x){
	n=1;
	switch(x)
	{
		case "eat":
		$('#inputStr').val(text[1]);
		break;
		case "drink":
		$('#inputStr').val(text[2]);
		break;
		case "code":
		$('#inputStr').val(text[3]);
		break;
	};
}
