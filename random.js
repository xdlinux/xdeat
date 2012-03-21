var n=1;       			
			function rand()
         		{	
				
				str=document.getElementById('inputStr').value;;
				var chooses = new Array()
				chooses=str.split(" ")
				var GetRandomn = 1;
				
				function GetRandomFunc(n)
				{
					GetRandomn=Math.floor(Math.random()*n+1)
				}
				GetRandomFunc(chooses.length);
				var obj = document.getElementById("ans");
             			obj.insertAdjacentHTML("afterEnd","<br>第"+n+"次随机的答案是："+"&nbsp;&nbsp;&nbsp;"+"<font size=4 color='red'>"+chooses[GetRandomn-1]+"</font>"+"&nbsp;&nbsp;&nbsp;"+"一共"+chooses.length+"个选项");
				n=n+1;
				if (n > 10)
				{obj.insertAdjacentHTML("afterEnd","&nbsp;&nbsp;&nbsp;"+"看来您不饿啊!（╯‵□′）╯︵┴─┴");}
				
         			}
