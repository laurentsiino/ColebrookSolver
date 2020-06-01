window.addEventListener("load", () => {

	document.getElementById("Diameter").disabled = true;
	document.getElementById('solved').onclick = function () {
		document.getElementById("Diameter").disabled = true;
		document.getElementById("Roughness").disabled = false;
		document.getElementById("Reynolds").disabled = false;
		document.getElementById("Darcy").disabled = false;
	};
	document.getElementById('solvee').onclick = function () {
		document.getElementById("Diameter").disabled = false;
		document.getElementById("Roughness").disabled = true;
		document.getElementById("Reynolds").disabled = false;
		document.getElementById("Darcy").disabled = false;
	};
	document.getElementById('solver').onclick = function () {
		document.getElementById("Diameter").disabled = false;
		document.getElementById("Roughness").disabled = false;
		document.getElementById("Reynolds").disabled = true;
		document.getElementById("Darcy").disabled = false;
	};
	document.getElementById('solvef').onclick = function () {
		document.getElementById("Diameter").disabled = false;
		document.getElementById("Roughness").disabled = false;
		document.getElementById("Reynolds").disabled = false;
		document.getElementById("Darcy").disabled = true;
	};

	document.getElementById('calculate').onclick = function () {
		//Assination des variables
		var d = parseFloat(document.getElementById("Diameter").value);
		var e = parseFloat(document.getElementById("Roughness").value);
		var re = parseFloat(document.getElementById("Reynolds").value);
		var f = parseFloat(document.getElementById("Darcy").value);
		//écrire la nouvelle valeur
		
		//document.getElementById("Diameter").disabled = false;
		
		//Math.log10
		//Math.sqrt(value)
		
		if (document.getElementById("solved").checked) {
			var diff = 100;
			d = (e / 0.06);
			while (diff > 0.01) {
				diff = (1 / (Math.sqrt(f)) + 2*(Math.log10(( e/(d*3.7))+2.51/(re*Math.sqrt(f)))));
				d = d + 0.001;
			}
			d = d - 0.001;
			document.getElementById("Diameter").value = Math.round(d*10000.0) / 10000;
		}

		if (document.getElementById("solvee").checked) {
			var diff = 100;
			//e = 0.000001*d
			e=0.0001
			while (Math.abs(diff) > 0.00001) {
				diff = (1 / (Math.sqrt(f)) + 2 * (Math.log10(e / (d * 3.7)) + 2.51 / (re * Math.sqrt(f))));
				e = e + 0.00000001;
			}
			e = e - 0.00000001;
			//document.getElementById("Roughness").value = Math.round(d * 100000.0) / 100000;
			document.getElementById("Roughness").value = Math.round(e * 10000.0) / 10000; 
		}

		if (document.getElementById("solver").checked) {
			var diff = 100;
			re = 600000000;
			
			while (Math.abs(diff) > 0.00001) {
				diff = (1 / (Math.sqrt(f)) + 2 * (Math.log10((e / (d * 3.7)) + 2.51 / (re * Math.sqrt(f)))));
				re = re - 100;
			}
			
			//document.getElementById("Roughness").value = Math.round(d * 100000.0) / 100000;
			document.getElementById("Reynolds").value = re;
		}

		if (document.getElementById("solvef").checked) {
			
			var diff = 100;
			f = 0.001;
			
			while (Math.abs(diff) > 0.0001) {
				diff = (1 / (Math.sqrt(f)) + 2 * (Math.log10((e / (d * 3.7)) + 2.51 / (re * Math.sqrt(f)))));
				f = f + 0.00001;
			}
			f = f - 0.00001;
			document.getElementById("Darcy").value = Math.round(f * 10000.0) / 10000;
			document.getElementById("Diameter").value = (1 / (Math.sqrt(0.0718)) + 2 * (Math.log10((e / (d * 3.7)) + 2.51 / (re * Math.sqrt(0.0718)))));
			document.getElementById("Roughness").value = (1 / (Math.sqrt(0.0716)) + 2 * (Math.log10((e / (d * 3.7)) + 2.51 / (re * Math.sqrt(0.0718)))));
			
			/* second iterative method
			f = 0.025
			for i = 1:10
			Math.pow()
			f = (2.0 * Math.log10((e/(d*3.7)) + (2.51/(re*f^0.5))))^-2;
			*/
		
		}
	};

});