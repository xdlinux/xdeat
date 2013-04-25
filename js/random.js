jQuery(document).ready(function($) {
	$( "#anspop" ).on( "click",{itsid:"popup"},rand);
	$( "#ans" ).on( "click",{itsid:"ans"},rand);
	$( "#answer" ).on( "click",{itsid:"ans"},rand);
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

       			
function rand(itsid){	
	var str=$("#inputStr").val();
	var chooses = new Array();
	chooses=str.split(" ");
	var GetRandomn = 1;
	function GetRandomFunc(n)
	{
		GetRandomn=Math.floor(Math.random()*n+1)
	};
	GetRandomFunc(chooses.length);
	$('#answer').html("第"+n+"次随机的答案:"+"<font size='6' color='orange'>"+chooses[GetRandomn-1]+"</font>");
	$('#title').html("试试"+chooses[GetRandomn-1]);
	$("#randtime").html("这是第"+n+"次随机");
	n=n+1;
}
