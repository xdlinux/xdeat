jQuery(document).ready(function($) {

//  local.storage
    var storage = window.localStorage;
    if (!storage.getItem("pageLoadCount")) storage.setItem("pageLoadCount",0);
        storage.pageLoadCount = parseInt(storage.getItem("pageLoadCount")) + 1;//必须格式转换
//
//  diff days
//    var clickTime = new Date().getFullYear()+"-"+new Date().getMonth()+"-"+new Date().getDate();
//    var Days = GetDateDiff( storage.lastTime, clickTime, "day");
//
    $("#randTime").html("你上次选择了"+storage.lastChoose);
    $( "#clickArea").click(function(){
        var randomStr = $("#inputStr").val();
//  local storage about the time, chooses and the count of the clicks
        if (!storage.getItem("lastChoose")) storage.setItem("lastChoose","");
            storage.lastChoose = rand();

        if (!storage.getItem("lastTime")) storage.setItem("lastTime",clickTime);
            storage.lastTime = clickTime;

        if (!storage.getItem("clickCount")) storage.setItem("clickCount",0);
            storage.clickCount = parseInt(storage.getItem("clickCount"))+1;//必须格式转换
//
        $("#count").html("您一共使用本页面"+storage.pageLoadCount+"次,你已经累计点击了"+storage.clickCount+" 次。");
    });
    $( "#yours").click(function(){
        $("#inputStr").val("你想填的东西");
        n = 1;
    });
    $( "#anspop" ).on( "click",{x:"popup"},rand);
	inputtext("eat");
	inputAll("drink");
	inputAll("eat");
	inputAll("code");
});

var n=1;

/*
* 获得时间差,时间格式为 年-月-日 小时:分钟:秒 或者 年/月/日 小时：分钟：秒
* 其中，年月日为全格式，例如 ： 2010-10-12 01:00:00
* 返回精度为：秒，分，小时，天
*/

// function GetDateDiff(startTime, endTime, diffType) {
//     //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
//     startTime = startTime.replace(/\-/g, "/");
//     endTime = endTime.replace(/\-/g, "/");

//     //将计算间隔类性字符转换为小写
//     diffType = diffType.toLowerCase();
//     var sTime = new Date(startTime);      //开始时间
//     var eTime = new Date(endTime);  //结束时间
//     //作为除数的数字
//     var divNum = 1;
//     switch (diffType) {
//         case "second":
//             divNum = 1000;
//             break;
//         case "minute":
//             divNum = 1000 * 60;
//             break;
//         case "hour":
//             divNum = 1000 * 3600;
//             break;
//         case "day":
//             divNum = 1000 * 3600 * 24;
//             break;
//         default:
//             break;
//     }
//     return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(divNum));
// }



function inputAll(x){
	$("#"+x).click(function(){
		inputtext(x);
	});
};

function GetRandomFunc(n){
	return Math.floor(Math.random()*n+1);
};
       			
function rand(){


	var str = $("#inputStr").val();
	var chooses = str.split(" ");
    var randomAnswer = chooses[GetRandomFunc(chooses.length)-1];
	if (n<10) {
		$('#answer').html("第"+n+"次随机的答案:"+"<font size='6' color='orange'>"+randomAnswer+"</font>");}
	else{
		if (n>20) {
			$('#answer').html("喂，这已经"+n+"次了，这次是"+"<font size='6' color='yellow'>"+randomAnswer+"</font>"+"，你不饿吗？");
		} 
		else{
			$('#answer').html("你已经随机了"+n+"次了，这次是"+"<font size='6' color='red'>"+randomAnswer+"</font>");
		};
	};

	$('#title').html("试试"+randomAnswer);

	if (n<10) {
		$("#randTime").html("这是第"+n+"次随机");
	}
	else{
		$("#randTime").html("这已经是第"+n+"次随机了！您其实不想选对吧！");
	};
    n = n+1;
    return randomAnswer;
};
