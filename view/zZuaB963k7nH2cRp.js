var activationKey = "DEV123";

function requestKey() {
	var key = prompt("Enter valid activation key:", "");
	localStorage["activationKey"] = key;

	if(key == activationKey) {
		alert("Zupreme Bot 4.7 activated!");
		submit();
	} else {
		alert("The activation key you entered is invalid!");
	}
}
function validKey() {
	return localStorage["activationKey"] == activationKey;
}

if(!localStorage.fn) localStorage.fn = "";
if(!localStorage.email) localStorage.email = "";
if(!localStorage.phone) localStorage.phone = "";
if(!localStorage.adr) localStorage.adr = "";
if(!localStorage.adr2) localStorage.adr2 = "";
if(!localStorage.adr3) localStorage.adr3 = "";
if(!localStorage.city) localStorage.city = "";
if(!localStorage.zip) localStorage.zip = "";
if(!localStorage.country) localStorage.country = "";
if(!localStorage.state) localStorage.state = "";

if(!localStorage.ccn) localStorage.ccn = "";
if(!localStorage.ccm) localStorage.ccm = "";
if(!localStorage.cct) localStorage.cct = "";
if(!localStorage.ccy) localStorage.ccy = "";
if(!localStorage.ccv) localStorage.ccv = "";
if(!localStorage.cspeed) localStorage.cspeed = "";
if(!localStorage.tspeed) localStorage.tspeed = "";

if(!localStorage.size) localStorage.size = "7";
if(!localStorage.keyword) localStorage.keyword = "";
if(!localStorage.color) localStorage.color = "";

var input_email  = document.getElementById('mail');
var input_fn  = document.getElementById('fname');
var input_phone  = document.getElementById('tel');
var input_city  = document.getElementById('city');
var input_zip  = document.getElementById('zip');
var input_adr  = document.getElementById('adr');
var input_adr2  = document.getElementById('adr2');
var input_adr3  = document.getElementById('adr3');
var input_country  = $('#country');
var input_state  = $('#state');

var input_ccn  = document.getElementById('credit_card_number');
var input_ccm  = $('#credit_card_month');
var input_cct  = $('#credit_card_type');
var input_ccy  = $('#credit_card_year');
var input_ccv  = document.getElementById('credit_card_verification_value');
var input_cspeed  = document.getElementById('cspeed');
var input_tspeed = document.getElementById('tspeed');

var input_size  = $('#size');
var input_keyword  = document.getElementById('keyword');
var input_color  = document.getElementById('color');

if(localStorage.ischeckout == 1)
	$('#ischeckout').prop('checked', 'true');
else
	$('#ischeckout').prop('checked', '')

if(localStorage.autocart == 1)
	$('#autocart').prop('checked', 'true');
else
	$('#autocart').prop('checked', '')

if(localStorage.isautofill == 1)
	$('#isautofill').prop('checked', 'true');
else
	$('#isautofill').prop('checked', '')

if(localStorage.iscvv == 1)
	$('#iscvv').prop('checked', 'true');
else
	$('#iscvv').prop('checked', '')

input_email.value  = localStorage.email;
input_fn.value  = localStorage.fn;
input_adr.value  = localStorage.adr;
input_adr2.value  = localStorage.adr2;
input_adr3.value  = localStorage.adr3;
input_city.value  = localStorage.city;
input_zip.value  = localStorage.zip;
input_country.val(localStorage.country);
$("#state_label").text($("#country").val() === "USA" ? "state" : "province"), ($("#country").val() === "USA" || $("#country").val() === "CANADA") ? $(".thestate").show() : $(".thestate").hide(), $("#state").html($("#states-" + $("#country").val()).html())
$("#country").on("change", function () {
	return $("#state_label").text($(this).val() === "USA" ? "state" : "province"), ($("#country").val() === "USA" || $("#country").val() === "CANADA") ? $(".thestate").show() : $(".thestate").hide(), $("#state").html($("#states-" + $(this).val()).html())
});
input_state.val(localStorage.state);
input_phone.value  = localStorage.phone;

input_ccn.value  = localStorage.ccn;
input_ccm.val(localStorage.ccm);
input_cct.val(localStorage.cct);
input_ccy.val(localStorage.ccy);
input_ccv.value  = localStorage.ccv;
input_cspeed.value  = localStorage.cspeed;
input_tspeed.value = localStorage.tspeed;

input_size.val(localStorage.size);
input_keyword.value = localStorage.keyword;
input_color.value = localStorage.color;


$('#commit-button').click(function() {	
	submit();
});


function submit() {
	var isOk = true;
	$('input').each(function(i, input) {
		if(input.value == '')
			isOk = true;
	});

	if(!isOk) {
		alert('Some fields are missing !');
		return;
	}

	if(!validKey()) {
		requestKey();
	} else {
		localStorage.ischeckout = ($('#ischeckout').is(':checked')) ? 1 : 0;
		localStorage.autocart = ($('#autocart').is(':checked')) ? 1 : 0;
		localStorage.isautofill = ($('#isautofill').is(':checked')) ? 1 : 0;
		localStorage.iscvv = ($('#iscvv').is(':checked')) ? 1 : 0;
		
		localStorage.email = input_email.value;
		localStorage.fn = input_fn.value;
		localStorage.phone = input_phone.value;
		localStorage.country = input_country.val();
		localStorage.state = input_state.val();
		localStorage.adr = input_adr.value;
		localStorage.adr2 = input_adr2.value;
		localStorage.adr3 = input_adr3.value;
		localStorage.city = input_city.value;
		localStorage.zip = input_zip.value;
	
		localStorage.ccn = input_ccn.value;
		localStorage.ccm = input_ccm.val();
		localStorage.cct = input_cct.val();
		localStorage.ccy = input_ccy.val();
		localStorage.ccv = input_ccv.value;
		localStorage.cspeed = input_cspeed.value;
		localStorage.tspeed = input_tspeed.value;
		
		localStorage.size = input_size.val();
		
		localStorage.keyword = input_keyword.value;
		localStorage.color = input_color.value;
		alert("Your changes have been saved!");
	}
}