
		function relogio()
		{
			var tempo = new Date();

			var s = tempo.getSeconds() * 6;
			var m = tempo.getMinutes() * 6 + s/60;
			var h = tempo.getHours() * 6 + m/60;

			var rotS = "rotate("+s+"deg)";
			var rotM = "rotate("+m+"deg)";
			var rotH = "rotate("+h+"deg)";

			$("#segundo").css({"transform" : rotS});
			$("#minuto").css({"transform" : rotM});
			$("#hora").css({"transform" : rotH});
				
		}

		$(document).ready(function(){
			setInterval(relogio, 1000);
		});
