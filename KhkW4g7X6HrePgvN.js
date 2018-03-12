$(function() {
	chrome.extension.sendMessage({
		method: 'get'
	}, function(res) {
		if(window.location.href.indexOf("checkout") > -1) {
			var delayed_time = res.tspeed-200;
			console.log(res);
			if (res.isautofill == 1) {
				var auto_fill = setInterval(function() {
					if (res.fn != '') {
						if ($('#order_billing_name').val() != undefined) {
							$('#order_billing_name').val('');
							$('#order_billing_name').sendkeys(res.fn, delayed_time);
						} else {
							$('[name="order[billing_name]"').val('');
							$('[name="order[billing_name]"').sendkeys(res.fn, delayed_time);
						}
					}
					
					if (res.phone != '') {
						if ($('#order_tel').val() != undefined) {
							$('#order_tel').val('');
							$('#order_tel').sendkeys(res.phone, delayed_time);
						} else if ($('#order_tl').val() != undefined) {
							$('#order_tl').val('');
							$('#order_tl').sendkeys(res.phone, delayed_time);
						} else if ($('[name="order[tel]"').val() != undefined) {
							$('[name="order[tel]"').val('');
							$('[name="order[tel]"').sendkeys(res.phone, delayed_time);
						} else {
							$('[name="tl"').val('');
							$('[name="tl"').sendkeys(res.phone, delayed_time);
						}
					}

					if (res.adr != '') {
						if ($('#bolll').val() != undefined) {
							$('#bo').val('');
							$('#bo').sendkeys(res.adr, delayed_time);		
						} else {
							$('[name="order[billing_address]"').val('');
							$('[name="order[billing_address]"').sendkeys(res.adr, delayed_time);		
						}
					}
					
					if (res.adr2 != '') {
						if ($('#oba3').val() != undefined) {
							$('#oba3').val('');
							$('#oba3').sendkeys(res.adr2, delayed_time);		
						} else {
							$('[name="order[billing_address_2]"').val('');
							$('[name="order[billing_address_2]"').sendkeys(res.adr2, delayed_time);
						}
					}
					
					if (res.adr3 != '') {
						if ($('#order_billing_address_3').val() != undefined) {
							$('#order_billing_address_3').val('');
							$('#order_billing_address_3').sendkeys(res.adr3, delayed_time);		
						} else {
							$('[name="order[billing_address_3]"').val('');
							$('[name="order[billing_address_3]"').sendkeys(res.adr3, delayed_time);
						}
					}

					if (res.city != '') {
						if ($('#order_billing_city').val() != undefined) {
							$('#order_billing_city').val('');
							$('#order_billing_city').sendkeys(res.city, delayed_time);		
						} else {
							$('[name="order[billing_city]"').val('');
							$('[name="order[billing_city]"').sendkeys(res.city, delayed_time);
						}
					}

					if (res.zip != '') {
						if ($('#order_billing_zip').val() != undefined) {
							$('#order_billing_zip').val('');
							$('#order_billing_zip').sendkeys(res.zip, delayed_time);		
						} else {
							$('[name="order[billing_zip]"').val('');
							$('[name="order[billing_zip]"').sendkeys(res.zip, delayed_time);
						}
					}
					
					if (res.ccn != '') {
						if ($('#cnb').val() != undefined) {
							$('#cnb').val('');
							$('#cnb').sendkeys(res.ccn, 0);	
						} else if ($('#nnaerb').val() != undefined) {
							$('#nnaerb').val('');
							$('#nnaerb').sendkeys(res.ccn, delayed_time);		
						} else if ($('[name="credit_card[cnb]"').val() != undefined) {
							$('[name="credit_card[cnb]"').val('');
							$('[name="credit_card[cnb]"').sendkeys(res.ccn, delayed_time);
						} else if ($('[name="credit_card[nlb]"').val() != undefined) {
							$('[name="credit_card[nlb]"').val('');
							$('[name="credit_card[nlb]"').sendkeys(res.ccn, delayed_time);
						} else {
							$('[placeholder="number"]').val('');
							$('[placeholder="number"]').sendkeys(res.ccn, delayed_time);
						}
					}

					$('#order_billing_country').val(res.country);
					$('[name="order[billing_country]"').val(res.country);

					$('#order_billing_state').val(res.state);
					$('[name="order[billing_state]"').val(res.state);

					$('#credit_card_type').val(res.cct);
					$('[name="credit_card[type]"').val(res.cct);

					$('#order_email').val(res.email);
					$('[name="order[email]"').val(res.email);

					$('#credit_card_month').val(res.ccm);
					$('[name="credit_card[month]"').val(res.ccm);

					$('#credit_card_year').val(res.ccy);
					$('[name="credit_card[year]"').val(res.ccy);

					$('#order_terms').prop('checked', true);
					$('[name="order[terms]"').prop('checked', true);
					clearInterval(auto_fill);
				}, 100);
			}
			if (res.iscvv == 1 && res.ccv != '') {
				var auto_cvv = setInterval(function() {
					if ($('#orcer').val() != undefined) {
						$('#orcer').val('');
						$('#orcer').sendkeys(res.ccv, delayed_time);	
					} else if ($('#vval').val() != undefined) {
						$('#vval').val('');
						$('#vval').sendkeys(res.ccv, delayed_time);	
					} else if ($('#cvv').val() != undefined) {
						$('#cvv').val('');
						$('#cvv').sendkeys(res.ccv, delayed_time);
					} else if ($('[name="credit_card[vval]"').val() != undefined) {
						$('[name="credit_card[vval]"').val();
						$('[name="credit_card[vval]"').sendkeys(res.ccv, delayed_time);
					} else if ($('[name="credit_card[rvv]"').val() != undefined) {
						$('[name="credit_card[rvv]"').val('');
						$('[name="credit_card[rvv]"').sendkeys(res.ccv, delayed_time);
					} else {
						$('[placeholder="CVV"]').val('');
						$('[placeholder="CVV"]').sendkeys(res.ccv, delayed_time);
					}
					clearInterval(auto_cvv)
				}, 100);
			}
			if (res.ischeckout == 1 && res.cspeed != '') {
				var auto_checkout = setInterval(function() {
					console.log('called');
					$('.button').click();
					$('[name="commit"').click();
				}, res.cspeed);	
			}
		}
	});
});