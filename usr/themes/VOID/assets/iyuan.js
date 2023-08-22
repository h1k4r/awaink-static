var utils = {
    snackbarShow: function(e, t, n) {
        var r = void 0 !== t && t,
            o = void 0 !== n ? n : 5e3,
            i = "top-center",
            a = "light" === document.documentElement.getAttribute("data-theme") ? "#49b1f5" : "#121212";
        document.styleSheets[0].addRule(":root", "--snackbar-time:" + o + "ms!important"), Snackbar.show({ text: e, backgroundColor: a, showAction: r, duration: o, pos: i })
    }
}

window.onkeydown = function(e) { 123 === e.keyCode && utils.snackbarShow("开发者模式已打开，请遵循GPL协议", !1, 3e3) };

