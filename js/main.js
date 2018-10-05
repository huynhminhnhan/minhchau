'use strict';

eval(function (p, a, c, k, _e, r) {
	_e = function e(c) {
		return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
	};if (!''.replace(/^/, String)) {
		while (c--) {
			r[_e(c)] = k[c] || _e(c);
		}k = [function (e) {
			return r[e];
		}];_e = function _e() {
			return '\\w+';
		};c = 1;
	};while (c--) {
		if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
	}return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');
	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	document.head.appendChild(msViewportStyle);
}

$(function () {
	var nua = navigator.userAgent;
	var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
	}
});
// Main

$("#slider").owlCarousel({
	center: true,
	margin: 20,
	loop: true,
	items: 3,
	autoplay: true,
	responsive: {
		0: {
			items: 1
		},
		480: {
			items: 1
		},
		768: {
			items: 3
		}
	}
});

$("#slider_news").owlCarousel({
	center: true,
	margin: 20,
	loop: true,
	items: 3,
	autoplay: true,
	nav: true,

	responsive: {
		0: {
			items: 1
		},
		480: {
			items: 1
		},
		768: {
			items: 3
		}
	},
	navText: ['<img src="img/che_left.png" >', '<img src="img/che_right.png" >']
});
// Phần Clients


$(document).ready(function () {
	$('#pull').click(function () {
		$(this).toggleClass('open');
	});

	$('#pull').click(function () {
		$('ul').toggleClass('active');
	});
});

$(document).ready(function () {

	var owl = $("#silder_home");

	owl.owlCarousel({
		navigation: true,
		singleItem: true,
		animateOut: 'fadeOut',
		nav: true,
		smartSpeed: 450,
		animateIn: 'fadeIn',
		loop: true,
		items: 1,
		navText: ['<img width="50%" class="img-fluid" src="img/chever-left.png" >', '<img  class="img-fluid" width="50%" src="img/chever_right.png" >']
	});
});



$(function(){
    $('#contact-form').submit(function(){
        $('.loading').html("<img src='loading.gif' width='45'>");
        $.ajax({
            url: 'sendmail.php',
            type: 'POST',
            data: $('#contact-form').serialize(),
            success: function(data){
                $('.mostrar').html(data);
                $('.loading').hide();
                $('#contact-form')[0].reset();
            }
        });
        return false;
    });
});


// scroll
//# sourceMappingURL=main.js.map
