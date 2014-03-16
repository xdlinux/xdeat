jQuery(document).ready(function($) {
	$( "#anspop" ).on( "click",{x:"popup"},rand);
	$( "#ans" ).on( "click",{x:"ans"},rand);
	//$( "#answer" ).on( "click",{x:"ans"},rand);
	inputtext("eat");
	inputall("drink");
	inputall("eat");
	inputall("code");
});


var n=1;

function inputall(x){
	$("#"+x).click(function(){
		inputtext(x);
	});
};

       			
function rand(x){	
	var str=$("#inputStr").val();
	var chooses = new Array();
	chooses=str.split(" ");
	var GetRandomn = 1;
	function GetRandomFunc(n)
	{
		GetRandomn=Math.floor(Math.random()*n+1)
	};
	GetRandomFunc(chooses.length);
	if (n<10) {
		$('#answer').html("第"+n+"次随机的答案:"+"<font size='6' color='orange'>"+chooses[GetRandomn-1]+"</font>");}
	else{
		if (n>20) {
			$('#answer').html("喂，这已经"+n+"次了，这次是"+"<font size='6' color='yellow'>"+chooses[GetRandomn-1]+"</font>"+"，你不饿吗？");
		} 
		else{
			$('#answer').html("你已经随机了"+n+"次了，这次是"+"<font size='6' color='red'>"+chooses[GetRandomn-1]+"</font>");
		};
	};
	
	$('#title').html("试试"+chooses[GetRandomn-1]);
	if (n<10) {
		$("#randtime").html("这是第"+n+"次随机");
	}
	else{
		$("#randtime").html("这已经是第"+n+"次随机了！您其实不饿对吧！");
	};
	n=n+1;
}
