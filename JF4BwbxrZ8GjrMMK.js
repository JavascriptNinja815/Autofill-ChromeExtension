var activationKey = "DEV123";

function requestKey() {
	var key = prompt("Enter valid activation key:", "");
	localStorage["activationKey"] = key;

	if(key == activationKey) {
		alert("Zupreme Bot 4.7 activated!");
		chrome.tabs.create({ url: chrome.extension.getURL("view/JTXZjddqGhCB97FT.html") });
	} else {
		alert("The activation key you entered is invalid!");
	}
}

function validKey() {
	return localStorage["activationKey"] == activationKey;
}


chrome.runtime.onInstalled.addListener(function(details) {
	if(details.reason === 'install' || details.reason === 'update') {
		if(!validKey())
			requestKey();
		else
			window.open(chrome.extension.getURL("view/JTXZjddqGhCB97FT.html"));
	}
});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
	if(request.method == 'get') {
		sendResponse({
			email: localStorage.email,
			fn: localStorage.fn,
			ln: localStorage.ln,
			comp: localStorage.comp,
			adr: localStorage.adr,
			adr2: localStorage.adr2,
			adr3: localStorage.adr3,
			city: localStorage.city,
			zip: localStorage.zip,
			phone: localStorage.phone,
			country: localStorage.country,
			state: localStorage.state,
			
			ccname: localStorage.ccname,
			ccn: localStorage.ccn,
			ccm: localStorage.ccm,
			cct: localStorage.cct,
			ccy: localStorage.ccy,
			ccv: localStorage.ccv,
			
			size: localStorage.size,
			
			keyword: localStorage.keyword,
			color: localStorage.color,
			
			ischeckout: localStorage.ischeckout,
			isautofill: localStorage.isautofill,
			autocart: localStorage.autocart,
			cspeed: localStorage.cspeed,
			tspeed: localStorage.tspeed,
			iscvv: localStorage.iscvv,
		});
	}
	return true;
});