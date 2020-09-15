// Copyrights C-EGG inc.
(function() {
    var aa = "門前清自摸和;立直;一發;槍槓;嶺上開花;海底摸月;河底撈魚;平和;斷么九;一盃口;自風 東;自風 南;自風 西;自風 北;場風 東;場風 南;場風 西;場風 北;役牌 白;役牌 發;役牌 中;兩立直;七對子;混全帶么九;一氣通貫;三色同順;三色同刻;三槓子;對對和;三暗刻;小三元;混老頭;二盃口;純全帶么九;混一色;清一色;人和;天和;地和;大三元;四暗刻;四暗刻單騎;字一色;綠一色;清老頭;九蓮寶燈;純正九蓮寶燈;國士無雙;國士無雙13面;大四喜;小四喜;四槓子;ドラ;裏ドラ;赤ドラ;親;門前;榮和;本場;明槓;暗槓;五;ガリ;セット;カラス;全ガリ;バンバン".split(";")
      , ba = "新人 ９級 ８級 ７級 ６級 ５級 ４級 ３級 ２級 １級 初段 二段 三段 四段 五段 六段 七段 八段 九段 十段 天鳳".split(" ")
      , ca = " 滿貫 跳滿 倍滿 三倍滿 役滿".split(" ")
      , ea = {
        kaze4: "四風連打",
        yao9: "九種九牌",
        ron3: "三家和了",
        reach4: "四家立直",
        kan4: "四槓散了",
        nm: "流局滿貫"
    }
      , ha = [{
        800: "300-500",
        1100: "400-700",
        1200: "400-800",
        1500: "500-1000",
        1800: "600-1200",
        2E3: "700-1300",
        2300: "800-1500",
        2400: "800-1600",
        2700: "900-1800",
        3E3: "1000-2000",
        3500: "1200-2300",
        3900: "1300-2600",
        4400: "1500-2900",
        4800: "1600-3200",
        5400: "1800-3600",
        5900: "2000-3900",
        6E3: "2000-4000",
        9E3: "3000-6000",
        12E3: "4000-8000",
        18E3: "6000-12000",
        24E3: "8000-16000",
        48E3: "16000-32000",
        72E3: "24000-48000"
    }, {
        1E3: 500,
        1400: 700,
        1600: 800,
        2E3: 1E3,
        2400: 1200,
        2600: 1300,
        3E3: 1500,
        3200: 1600,
        3600: 1800,
        4E3: 2E3,
        4600: 2300,
        5200: 2600,
        5800: 2900,
        6400: 3200,
        7200: 3600,
        7800: 3900,
        8E3: 4E3,
        12E3: 6E3,
        16E3: 8E3,
        24E3: 12E3,
        32E3: 16E3,
        64E3: 32E3,
        96E3: 48E3
    }, {
        1100: "300-500",
        1500: "400-700",
        1600: "400-800",
        2E3: "500-1000",
        2400: "600-1200",
        2700: "700-1300",
        3100: "800-1500",
        3200: "800-1600",
        3600: "900-1800",
        4E3: "1000-2000",
        4700: "1200-2300",
        5200: "1300-2600",
        5900: "1500-2900",
        6400: "1600-3200",
        7200: "1800-3600",
        7900: "2000-3900",
        8E3: "2000-4000",
        12E3: "3000-6000",
        16E3: "4000-8000",
        24E3: "6000-12000",
        32E3: "8000-16000",
        64E3: "16000-32000",
        96E3: "24000-48000"
    }, {
        1500: 500,
        2100: 700,
        2400: 800,
        3E3: 1E3,
        3600: 1200,
        3900: 1300,
        4500: 1500,
        4800: 1600,
        5400: 1800,
        6E3: 2E3,
        6900: 2300,
        7800: 2600,
        8700: 2900,
        9600: 3200,
        10800: 3600,
        11700: 3900,
        12E3: 4E3,
        18E3: 6E3,
        24E3: 8E3,
        36E3: 12E3,
        48E3: 16E3,
        96E3: 32E3,
        144E3: 48E3
    }];
    function ia(a, e) {
        return 0 != (0 == a ? 0 != (e & 1536) ? ~e & 8 : e & 64 : e & 64)
    }
    function ja(a) {
        return (a & 32) >> 4 | (a & 128) >> 7
    }
    function ka(a) {
        return 0 != (a & 2048) ? "東天紅" : (a & 16 ? "三" : "四") + "般上特鳳若銀琥孔".substr(ja(a) + 4 * (0 != (a & 1536)), 1) + (a & 8 ? "南" : "東") + (0 != (a & 1536) ? (a & 8 ? "" : "速") + (~a & 512 ? "祝０" : a & 1024 ? "祝５" : "祝２") : (a & 4 ? "" : "喰") + (a & 2 ? "" : "赤") + (a & 64 ? "速" : "") + (a & 256 ? "暗" : "") + (a & 512 ? "祝" : ""))
    }
    var la = [0, 0, 0, 0, 0, 0, 0, 0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100, -110, -120, 0]
      , ma = [20, 20, 20, 20, 40, 60, 80, 100, 100, 100, 400, 800, 1200, 1600, 2E3, 2400, 2800, 3200, 3600, 4E3, 0]
      , na = [1, 3, 0, 7, 9, 11, 0, 15, 65, 0, 0, 0, 73, 0, 0, 0, 129, 131, 0, 135, 137, 139, 0, 143, 193, 0, 0, 0, 201, 0, 0, 0, 33, 35, 0, 39, 41, 43, 0, 47, 97, 0, 0, 0, 105, 0, 0, 0, 161, 163, 0, 167, 169, 171, 0, 175, 225, 0, 0, 0, 233, 0, 0, 0, 17, 25, 145, 153, 49, 57, 177, 185, 81, 89, 209, 217, 113, 121, 241, 249, 1025, 1033, 513, 521, 1537, 1545, 1553, 1561, 1153, 1161, 641, 649, 1665, 1673, 1681, 1689, 1057, 1065, 545, 553, 1569, 1577, 1585, 1593, 1185, 1193, 673, 681, 1697, 1705, 1713, 1721, 2065];
    var qa = function() {
        function a(a, c, b) {
            return "HK" == p.server ? a : oa ? c : b
        }
        return {
            10: function() {
                return a("wss://b-hk.mjv.jp", "wss://b-wc.mjv.jp", "wss://b-ww.mjv.jp")
            },
            11: function() {
                return a("https://b-hk.mjv.jp", "https://p.mjv.jp", "https://p.mjv.jp")
            },
            13: function() {
                return a("https://b-hk.mjv.jp/0/wg/", "https://mjv.jp/0/wg/", "https://mjv.jp/0/wg/")
            },
            20: function() {
                return a("https://tenhou.net/3/err.cgi", "https://tenhou.net/3/err.cgi", "https://tenhou.net/3/err.cgi")
            },
            21: function() {
                return a("https://tenhou.net/3/tr/", "https://tenhou.net/3/tr/", "https://tenhou.net/3/tr/")
            },
            22: function() {
                return a("https://tenhou.net/0/log/find.cgi", "https://tenhou.net/0/log/find.cgi", "https://tenhou.net/0/log/find.cgi")
            },
            30: function() {
                return a("https://b.mjv.jp/regid?q=1&uname=", "https://b.mjv.jp/regid?q=1&uname=", "https://b.mjv.jp/regid?q=1&uname=")
            },
            31: function() {
                return a("https://b.mjv.jp/regid?uname=", "https://b.mjv.jp/regid?uname=", "https://b.mjv.jp/regid?uname=")
            },
            32: function() {
                return a("https://b.mjv.jp/csreg", "https://b.mjv.jp/csreg", "https://b.mjv.jp/csreg")
            }
        }
    }();
    function ta(a, e, c) {
        a.addEventListener(e, c, !1)
    }
    function ua(a, e) {
        for (var c in e)
            a.addEventListener(c, e[c], !1);
        return a
    }
    function va(a, e) {
        if (a && e)
            for (var c in e)
                a[c] = e[c];
        return a
    }
    function za(a) {
        a.sort(function(a, c) {
            return a - c
        })
    }
    function Ba(a, e) {
        a.sort(function(a, b) {
            return (e[a] << 8 | a) - (e[b] << 8 | b)
        })
    }
    function q(a, e) {
        if (void 0 === a || "" === a)
            return [];
        e = e || 1;
        a.split && (a = a.split(","));
        for (var c = 0; c < a.length; ++c)
            a[c] = 1 != e && "" == a[c] ? void 0 : e * ~~a[c];
        return a
    }
    function Ca(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function Da(a) {
        a = a.split("&");
        var e = {}, c;
        for (c in a)
            if (a[c].length) {
                var b = a[c].split("=");
                e[b.shift()] = decodeURIComponent(b.join("="))
            }
        return e
    }
    function Ea(a) {
        for (var e = a.length - 1; 0 < e; --e) {
            var c = Math.floor(Math.random() * (e + 1))
              , b = a[e];
            a[e] = a[c];
            a[c] = b
        }
        return a
    }
    function Sa(a, e, c) {
        var b = new XMLHttpRequest;
        b.onload = function() {
            200 == this.status ? e(this.response) : c && c(this)
        }
        ;
        b.onerror = function() {
            c && c(this)
        }
        ;
        b.open("GET", a, !0);
        b.send()
    }
    function Ta(a, e) {
        var c;
        return function() {
            clearTimeout(c);
            c = setTimeout(function() {
                c = null;
                a()
            }, e)
        }
    }
    function Va(a, e) {
        return ("000" + e).slice(-a)
    }
    function Wa(a) {
        return (0 < a ? "+" : "") + a
    }
    var Za = 1
      , r = window
      , $a = document
      , ab = $a.body
      , bb = 0
      , cb = 0
      , fb = 0
      , gb = navigator.userAgent;
    gb.match(/iP(hone|od|ad)/) && gb.match(/OS (\d+)_(\d+)/) && (bb = RegExp.$1 + "." + RegExp.$2);
    gb.match(/Android (\d\.\d)/) && (cb = parseFloat(RegExp.$1));
    var fb = 4.4 > cb && 0 < gb.indexOf(" Chrome/") && 0 < gb.indexOf(" Version/")
      , hb = "ontouchstart"in $a.documentElement && !r.navigator.msPointerEnabled
      , oa = !!r.cordova
      , ib = oa || "standalone"in navigator && navigator.standalone
      , jb = !1
      , t = r.devicePixelRatio || 1
      , u = {};
    va(u, Da(location.search.substr(1)));
    va(u, Da(location.hash.substr(1)));
    u.TW = u.tw = ~~u.tw % 4;
    u.sb = !(!u.wg && !u.log);
    u.rb = !1;
    u.Pf = function(a) {
        function e(c, b) {
            var f = a.match(c);
            return f ? f[1] : b
        }
        u.log = e(/\?log=([^&]*)/, "");
        u.TW = u.tw = ~~e(/&tw=(\d)/, 0);
        u.ts = ~~e(/&ts=(\d+)/, 0);
        u.wg = e(/\?wg=([^&]*)/, "");
        (u.log || u.wg) && v.ka(11)
    }
    ;
    function kb(a, e, c, b, f) {
        a = $a.createElement(a);
        c && (a.className = c);
        va(a, b);
        va(a.style, f);
        return e ? e.insertBefore(a, null) : a
    }
    function lb(a) {
        for (var e = 1; e < arguments.length; ++e) {
            var c = arguments[e];
            if (0 === c)
                Array.prototype.push.apply(arguments, "cfg lang regid clearid idcont uname sx mvlb ok".split(" "));
            else if (1 === c)
                Array.prototype.push.apply(arguments, "testplay haifu kansen openurl help hairi purchase".split(" "));
            else if (2 === c)
                Array.prototype.push.apply(arguments, ["iap", "storePurchase", "exit"]);
            else if (3 === c)
                Array.prototype.push.apply(arguments, ["rule", "join", "cancel", "logout"]);
            else
                for (var c = $a.getElementsByName(c), b = 0; b < c.length; ++b) {
                    var f = c[b];
                    f && (f.disabled = a)
                }
        }
    }
    function nb(a) {
        if (!a)
            return !1;
        a = a.replace(/\?.*$/, "");
        return a.match(/^https?:\/\/(?:[\w-]+\.)+[\w-]+(?:\/[\w-]+)+\.(?:jpg|png|gif)$/)
    }
    function ob(a) {
        if (!a)
            return !1;
        a = a.replace(/\?.*$/, "");
        return a.match(/^https?:\/\/(?:[\w-]+\.)+[\w-]+(?:\/[\w-]+)+\.(?:json|txt)$/)
    }
    var pb = function() {
        var a = []
          , e = new XMLHttpRequest;
        e.onload = function() {
            a.length && 1 != e.readyState && (e.open("POST", qa[20](), !0),
            e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            e.send(a.shift()))
        }
        ;
        return function() {
            for (var c = arguments[0], b = 1; b < arguments.length; ++b)
                c += " " + arguments[b];
            a.push(c);
            e.onload()
        }
    }()
      , qb = "";
    r.onerror = function(a, e, c) {
        a = a + " " + e + ":" + c;
        qb != a && pb(a);
        qb = a
    }
    ;
    var rb = document.createElement("style");
    rb.innerHTML = "@font-face{font-family:cwTeX-Q-Kai-T;src: url(https://cdn.tenhou.net/3/res/font/cwTeXQKaiT-Medium_20200430.ttf) format('truetype');}@font-face{font-family:icons2;src: url(https://cdn.tenhou.net/3/res/font/icons_20200502.ttf) format('truetype');}*{-webkit-tap-highlight-color:rgba(0,0,0,0);line-height:1;}:focus{outline:0;}HTML{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}HTML{touch-action:pan-y;}BODY{font-family:sans-serif;overflow-x:hidden;-webkit-text-size-adjust:100%;}HR{border-color:#444;border-width:1px 0 0 0;border-style:solid;margin:0.5em 0;}TEXTAREA{margin:0px;word-break:break-all;}SELECT{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0.6em;}SELECT::-ms-expand{display:none;}BUTTON,SELECT,INPUT,.bth{height:2em;font-size:175%;margin:0;}BUTTON,SELECT,INPUT[type=checkbox]+LABEL,A.bt3{padding:0 0.5em;color:inherit;border:solid 1px #444;}BUTTON,SELECT,INPUT[type=checkbox]+LABEL{background:linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(167,147,127,0.4) 50%,rgba(31,31,31,0.4) 51%,rgba(0,0,0,0.4) 100%);}A.bt3{display:block;width:100%;height:100%;padding:0 1em;border:solid 1px #444;background:linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(47,47,47,0.4) 100%);}A.bt3:hover,SELECT:hover{background-color:#030;}SELECT:disabled,BUTTON:disabled{color:#888;background:#444;pointer-events:none;}OPTION{background-color:#FFF;color:#000;}BUTTON *{pointer-events:none;}.notxt{font-size:0px;}.sscl{-webkit-overflow-scrolling:touch;}.rot000{position:absolute;}.rot090{position:absolute;transform:rotate( 90deg);-webkit-transform:rotate( 90deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);}.rot180{position:absolute;transform:rotate(180deg);-webkit-transform:rotate(180deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);}.rot270{position:absolute;transform:rotate(270deg);-webkit-transform:rotate(270deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);}.ts0,sblink{text-shadow:#000 -1px 0px 0px, #000 1px 0px 0px, #000 1px 1px 1px,#000 -1px -1px 1px;}.tsv{text-shadow:#000 -1px -1px 0px, #000 0px 1px 0px, #000 3px 3px 0px;}.nosel{-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;}.tbl{display:table;}.tbc{display:table-cell;}.nobr{word-break:keep-all;white-space:nowrap;}.gray{color:#666;}.bgb40{background-color:rgba(0,0,0,0.4);}.bgb60{background-color:rgba(0,0,0,0.6);}.bgb80{background-color:rgba(0,0,0,0.8);}.bgb{background-color:#000;}.ra0{border-radius:0.6em;}.ra1{border-radius:0.6em 0 0 0.6em;}.ra2{border-radius:0 0.6em 0.6em 0;}.dan18,.dan19,.dan20{font-weight:bold;}.n2r{display:inline-block;width:2em;text-align:right;}._selected_{border-left:0.1em solid #CCC;}SELECT{padding-right:1em;}.select-wrapper{position:relative;display:inline-block;}.select-wrapper:after{content:'';position:absolute;right:0.5em;top:45%;width:0;height:0;border-left:0.3em solid transparent;border-right:0.3em solid transparent;border-top: 0.3em solid #FFF;pointer-events:none;}.select-wrapper>BUTTON:first-child{padding-right:1em;border-radius:0.6em;}.fixed-select{min-width:10em;max-width:90vw;max-height:85vh;overflow-y:auto;}.fixed-select .A{font-size:150%;color:#000;padding:0.5em;text-decoration:none;display:block;}.fixed-select .A{border-bottom:1px solid #DDD;cursor:pointer;}.fixed-select .A:nth-child(1){border-top:1px solid #DDD;}.fixed-select .A:hover{background-color:#CCC}.fixed-select .A DIV.desc{color:#666;font-size:50%;}.fixed-select .A *{pointer-events:none;}.vscl::-webkit-scrollbar{background:#CCC;width:0.5em;}.vscl::-webkit-scrollbar-thumb{background:#AAA;}INPUT[type=checkbox]{display:none;}INPUT[type=checkbox]+LABEL{position:relative;cursor:pointer;display:inline-block;border-radius:0.6em;}INPUT[type=checkbox]+LABEL{padding:0.5em 0.5em 0.5em 1.8em;}INPUT[type=checkbox]+LABEL::before{font-family:icons2;content:'';position:absolute;left:0.5em;top:25%;}INPUT[type=checkbox]:checked+LABEL::before{content:'';}INPUT[type=checkbox]:disabled+LABEL{color:#888;background:#444;pointer-events:none;}.bblink{animation: _bblink 0.5s ease 0s infinite alternate;}@keyframes _bblink{0%{background-color:rgba(255,255,255,0.3);}30%{background-color:rgba(0,0,0,0.3);}100%{background-color:rgba(0,0,0,0.3);}}.cblink{animation: _cblink 1.75s linear 0s infinite alternate;}@keyframes _cblink{0%{color:#FFF;}80%{color:#FFF;}100%{color:#666;}}.sblink{animation: _sblink 0.5s linear 0s infinite alternate;position:absolute;bottom:0;right:0.25em;color:#888;font-size:300%;pointer-events:none;}@keyframes _sblink{0%{color:transparent;}30%{color:#888;}100%{color:#888;}}.fadeinqs{animation:_fadein 0.25s ease 0s 1 normal;}.fadein2s{animation:_fadein 2s ease 0s 1 normal;}@keyframes _fadein{0%{opacity:0;}100%{opacity:1;}}.flip{perspective:100px;opacity:0;transform:rotateX(-90deg);transition:all 0.5s cubic-bezier(.36,-0.64,.34,1.76);}.flip.show{opacity:1;transform:none;transition:all 0.5s cubic-bezier(.36,-0.64,.34,1.76);}.flipinqs{animation:_flipin 0.25s cubic-bezier(0.175, 0.885, 0.320, 1) 0s 1 normal;}.flipinhs{animation:_flipin 0.5s cubic-bezier(0.175, 0.885, 0.320, 1) 0s 1 normal;}.flipin1s{animation:_flipin 1s cubic-bezier(0.175, 0.885, 0.320, 1) 0s 1 normal;}@keyframes _flipin{0%{opacity:0;transform:rotateX(-90deg);}100%{opacity:1;transform:none;}}.flipinqs.hide{animation:_flipout 0.25s cubic-bezier(0.600, 0, 0.735, 0.045) 0s 1 normal;}.flipinhs.hide{animation:_flipout 0.5s cubic-bezier(0.600, 0, 0.735, 0.045) 0s 1 normal;}@keyframes _flipout{0%{opacity:1;transform:none;}100%{opacity:0;transform:rotateX(-90deg);}}.arrow-box-left,.arrow-box-right{position:relative;background:#FFF;color:#000;border-radius:0.2em;padding:0.5em;}.arrow-box-left:after{right:100%;top:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(255, 255, 255, 0);border-right-color:#FFF;border-width:0.5em;margin-top:-0.5em;}.arrow-box-right:after {left:100%;top:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(255, 255, 255, 0);border-left-color:#FFF;border-width:0.5em;margin-top:-0.5em;}#pftab TD,#rnktab TD{padding-top:0.35em;}#pftab SMALL,#rnktab SMALL{font-size:60%;}.trtab TD{padding:0.5em 0.25em;}";
    ab.appendChild(rb);
    function x(a) {
        return "<span class=gray>" + a + "</span>"
    }
    function sb(a) {
        return "<span class=nobr>" + a + "</span>"
    }
    kb("SPAN", ab, "", {
        innerHTML: "FontLoader&#xe800;"
    }, {
        position: "absolute",
        fontFamily: "cwTeX-Q-Kai-T,icons2",
        visibility: "hidden"
    });
    setInterval(function() {
        for (var a = $a.getElementsByClassName("sblink"), e = 0; e < a.length; ++e) {
            var c = a[e]
              , b = c.previousSibling;
            c.style.visibility = b.scrollTop + b.offsetHeight < b.scrollHeight - .25 * c.offsetHeight ? "" : "hidden"
        }
    }, 1E3);
    var tb = function() {
        function a(b) {
            var a = b & 7
              , d = 0
              , c = 0;
            1 == a || 4 == a ? d = c = 1 : 2 == a && (d = c = 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1,
            c += 1) : 2 == a && (d += 2,
            c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1,
            c += 1) : 2 == a && (d += 2,
            c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1,
            c += 1) : 2 == a && (d += 2,
            c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1,
            c += 1) : 2 == a && (d += 2,
            c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1,
            c += 1) : 2 == a && (d += 2,
            c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 > a)
                return !1;
            d = c;
            c = 0;
            1 == a || 4 == a ? (d += 1,
            c += 1) : 2 == a && (d += 2,
            c += 2);
            b >>= 3;
            a = (b & 7) - d;
            if (0 != a && 3 != a)
                return !1;
            a = (b >> 3 & 7) - c;
            return 0 == a || 3 == a
        }
        function e(b, c) {
            if (0 == b) {
                if (128 <= (c & 448) && a(c - 128) || 65536 <= (c & 229376) && a(c - 65536) || 33554432 <= (c & 117440512) && a(c - 33554432))
                    return !0
            } else if (1 == b) {
                if (16 <= (c & 56) && a(c - 16) || 8192 <= (c & 28672) && a(c - 8192) || 4194304 <= (c & 14680064) && a(c - 4194304))
                    return !0
            } else if (2 == b && (2 <= (c & 7) && a(c - 2) || 1024 <= (c & 3584) && a(c - 1024) || 524288 <= (c & 1835008) && a(c - 524288)))
                return !0;
            return !1
        }
        function c(b, a) {
            return b[a + 0] << 0 | b[a + 1] << 3 | b[a + 2] << 6 | b[a + 3] << 9 | b[a + 4] << 12 | b[a + 5] << 15 | b[a + 6] << 18 | b[a + 7] << 21 | b[a + 8] << 24
        }
        return {
            bc: function(b) {
                var f = 1 << b[27] | 1 << b[28] | 1 << b[29] | 1 << b[30] | 1 << b[31] | 1 << b[32] | 1 << b[33];
                if (16 <= f)
                    return !1;
                if (2 == (f & 3) && 2 == b[0] * b[8] * b[9] * b[17] * b[18] * b[26] * b[27] * b[28] * b[29] * b[30] * b[31] * b[32] * b[33] || !(f & 10) && 7 == (2 == b[0]) + (2 == b[1]) + (2 == b[2]) + (2 == b[3]) + (2 == b[4]) + (2 == b[5]) + (2 == b[6]) + (2 == b[7]) + (2 == b[8]) + (2 == b[9]) + (2 == b[10]) + (2 == b[11]) + (2 == b[12]) + (2 == b[13]) + (2 == b[14]) + (2 == b[15]) + (2 == b[16]) + (2 == b[17]) + (2 == b[18]) + (2 == b[19]) + (2 == b[20]) + (2 == b[21]) + (2 == b[22]) + (2 == b[23]) + (2 == b[24]) + (2 == b[25]) + (2 == b[26]) + (2 == b[27]) + (2 == b[28]) + (2 == b[29]) + (2 == b[30]) + (2 == b[31]) + (2 == b[32]) + (2 == b[33]))
                    return !0;
                if (f & 2)
                    return !1;
                var d = b[0] + b[3] + b[6]
                  , k = b[1] + b[4] + b[7]
                  , l = b[9] + b[12] + b[15]
                  , n = b[10] + b[13] + b[16]
                  , g = b[18] + b[21] + b[24]
                  , h = b[19] + b[22] + b[25]
                  , m = (d + k + (b[2] + b[5] + b[8])) % 3;
                if (1 == m)
                    return !1;
                var y = (l + n + (b[11] + b[14] + b[17])) % 3;
                if (1 == y)
                    return !1;
                var C = (g + h + (b[20] + b[23] + b[26])) % 3;
                if (1 == C || 1 != (2 == m) + (2 == y) + (2 == C) + (2 == b[27]) + (2 == b[28]) + (2 == b[29]) + (2 == b[30]) + (2 == b[31]) + (2 == b[32]) + (2 == b[33]))
                    return !1;
                d = (1 * d + 2 * k) % 3;
                k = c(b, 0);
                l = (1 * l + 2 * n) % 3;
                n = c(b, 9);
                g = (1 * g + 2 * h) % 3;
                b = c(b, 18);
                return f & 4 ? !(m | d | y | l | C | g) && a(k) && a(n) && a(b) : 2 == m ? !(y | l | C | g) && a(n) && a(b) && e(d, k) : 2 == y ? !(C | g | m | d) && a(b) && a(k) && e(l, n) : 2 == C ? !(m | d | y | l) && a(k) && a(n) && e(g, b) : !1
            },
            mb: function(b) {
                var a = []
                  , d = 0;
                if (12 <= (0 !== b[0]) + (0 !== b[8]) + (0 !== b[9]) + (0 !== b[17]) + (0 !== b[18]) + (0 !== b[26]) + (0 !== b[27]) + (0 !== b[28]) + (0 !== b[29]) + (0 !== b[30]) + (0 !== b[31]) + (0 !== b[32]) + (0 !== b[33]))
                    for (; 34 > d; ++d)
                        3 >= b[d] && (++b[d],
                        tb.bc(b) && a.push(d),
                        --b[d]);
                else {
                    for (; 27 > d; ++d)
                        3 >= b[d] && (b[d] || 0 < d % 9 && b[d - 1] || 8 > d % 9 && b[d + 1]) && (++b[d],
                        tb.bc(b) && a.push(d),
                        --b[d]);
                    for (; 34 > d; ++d)
                        3 >= b[d] && b[d] && (++b[d],
                        tb.bc(b) && a.push(d),
                        --b[d])
                }
                return a
            },
            Jf: function(b) {
                for (var a = {}, d = 0; 34 > d; ++d)
                    b[d] && (--b[d],
                    a[d] = tb.mb(b),
                    ++b[d]);
                return a
            }
        }
    }();
    var A = function() {
        function a(b) {
            c && c[b] && 0 == c[b](e) || !e || (e.parentNode.removeChild(e),
            e = null)
        }
        var e, c;
        return {
            o: function(b, f, d, k) {
                1 == arguments.length && (f = 1);
                c = [k, d];
                var l = e = kb("DIV", ab, "tbl fadeinqs", {}, {
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.75)"
                });
                setTimeout(function() {
                    f || ta(l, "click", function() {
                        a(0)
                    });
                    l = kb("DIV", l, "tbc", {}, {
                        textAlign: "center",
                        verticalAlign: "middle"
                    });
                    l = kb("DIV", l, "", {}, {
                        display: "inline-block",
                        background: "#FFF",
                        color: "#000",
                        borderRadius: "0.6em",
                        maxWidth: "90vw",
                        padding: "1em"
                    });
                    l.innerHTML = '<div style="position:relative;font-size:150%;' + (f ? "padding:1em 0;" : "") + '">' + b + '</div><button style="width:6em;">CANCEL</button><button style="width:6em;">OK</button>';
                    var d = l.getElementsByTagName("BUTTON");
                    d[0].onclick = function() {
                        a(0)
                    }
                    ;
                    d[0].style.display = f & 2 ? "" : "none";
                    d[1].onclick = function() {
                        a(1)
                    }
                    ;
                    d[1].style.display = f & 1 ? "" : "none";
                    d = l.getElementsByTagName("INPUT");
                    if (cb && oa)
                        for (var g = 0; g < d.length; ++g)
                            ua(d[g], {
                                focus: function() {
                                    ub(1)
                                },
                                blur: function() {
                                    ub()
                                }
                            });
                    d.length && d[0].focus();
                    if (l = l.querySelector("._selected_"))
                        l.parentNode.scrollTop = l.offsetTop - (l.parentNode.offsetHeight - l.offsetHeight) / 2
                }, 1)
            },
            Y: function(b, a, d, c, e) {
                return A.o('<div class="fixed-select sscl" style="position:relative;' + (a || "") + '">' + b + '</div><div class=sblink style="visibility:hidden;">▼</div>', d, c, e)
            },
            fb: function() {
                return !!e
            }
        }
    }();
    ta(r, "click", function(a) {
        var e = a.target;
        if (e.classList.contains("A") && e.id && e.parentNode.classList.contains("fixed-select"))
            if ("A" == e.tagName && a.preventDefault(),
            a = e.id.split("-"),
            D.b && D[a[0]])
                D[a[0]](a[0], a[1]);
            else
                switch (a[0]) {
                case "#tw":
                    3 == H.a ? vb.Hb(a[0], a[1]) : 2 == H.a && wb.Hb(a[0], a[1]);
                    break;
                case "#ts":
                    vb.df(a[0], a[1]);
                    break;
                case "#tj":
                    vb.ef(a[0], a[1]);
                    break;
                case "#edit":
                    if ("M" == a[1])
                        r.open("https://tenhou.net/6/?log=" + u.log + "&tw=" + ~~u.tw);
                    else if ("T" == a[1])
                        return alert("本機能はクローズド公開中のため使用できません")
                }
    });
    function xb(a) {
        if ("254" == a)
            return "a";
        if ("255" == a)
            return "r";
        if ("136" == a)
            return "0z";
        var e = a >> 2;
        return (27 > e && 16 == a % 36 ? "0" : e % 9 + 1) + "mpsz".substr(e / 9, 1)
    }
    function Ab(a) {
        for (var e = "", c = 0; c < a.length; ++c)
            e += xb(a[c]);
        return e.replace(/\d(m|p|s|z)(\d\1)*/g, "$&:").replace(/(m|p|s|z)([^:])/g, "$2").replace(/:/g, "")
    }
    function Bb(a) {
        return a.replace(/(\d)(\d{0,8})(\d{0,8})(\d{0,8})(\d{0,8})(\d{0,8})(\d{0,8})(\d{8})(m|p|s|z)/g, "$1$9$2$9$3$9$4$9$5$9$6$9$7$9$8$9").replace(/(\d?)(\d?)(\d?)(\d?)(\d?)(\d?)(\d)(\d)(m|p|s|z)/g, "$1$9$2$9$3$9$4$9$5$9$6$9$7$9$8$9").replace(/(m|p|s|z)(m|p|s|z)+/g, "$1").replace(/([^0-9]|^)[mpsz](\d[mpsz\d]*)/g, "$1$2")
    }
    function Cb(a) {
        if (!a)
            return "";
        for (var e = [], c = 0; 34 > c; ++c)
            e[c] = 0;
        return Bb(a).replace(/r/g, "255,").replace(/a/g, "254,").replace(/(\d)([mpsz])(?![mpsz])/g, function(b, a, d) {
            a = ~~a;
            if ("z" == d && 0 == a)
                return "136,";
            b = "m" == d ? 0 : "p" == d ? 1 : "s" == d ? 2 : 3;
            return a ? 36 * b + 4 * (a - 1) + ++e[9 * b + (a - 1)] % 4 + "," : 4 * (9 * b + 4) + 0 + ","
        }).replace(/,$/, "")
    }
    ;var p;
    (function() {
        try {
            p = r.localStorage,
            p.setItem("a", 1),
            p.removeItem("a")
        } catch (f) {
            p = {
                setItem: function(b, a) {
                    p[b] = a
                },
                removeItem: function(b) {
                    delete p[b]
                }
            };
            var a = navigator.languages
              , e = 0;
            navigator.userAgent.match(/TwitterAndroid/) && (e |= 1);
            for (var c in a)
                a[c].match(/(ja|JP)/) && (e |= 2);
            a = "";
            switch (e) {
            case 0:
                a = "This browser(private browsing etc.) won't let you save game logs, IDs or other settings.";
                break;
            case 1:
                a = "The Twitter browser will not let you save your settings (game logs, IDs, etc). Open the menu and select Open in Browser.";
                break;
            default:
            case 2:
                a = "このブラウザ環境(プライベートブラウズなど)では、牌譜の記録やIDの保存などが行えません。";
                break;
            case 3:
                a = "Twitterの専用ブラウザでは、設定の保存(牌譜の記録/IDの保存/など)が行えません。メニューの「ブラウザで開く」から通常のブラウザで開いてください。"
            }
            A.o(a)
        }
        e = p.scro;
        if (oa && r.screen && r.screen.orientation && r.screen.orientation.lock) {
            a = screen.orientation;
            c = a.type;
            if (bb && ("landscape-primary" == c || "landscape-secondary" == c)) {
                var b = $a.getElementById("loading");
                b && (b.style.display = "none");
                r.StatusBar.overlaysWebView(!0);
                r.StatusBar.hide();
                a.lock("portrait");
                "landscape-primary" == c ? a.lock("landscape-secondary") : "landscape-secondary" == c && a.lock("landscape-primary");
                b && setTimeout(function() {
                    b.style.display = "table"
                }, 1E3)
            }
            bb && 2 == e ? a.lock("landscape-primary" == c ? "landscape-secondary" : "landscape-secondary" == c ? "landscape-primary" : "landscape") : a.lock(1 == e ? "portrait" : 2 == e ? "landscape" : "any")
        }
    }
    )();
    function Db(a, e, c) {
        p && (e != c ? p.setItem(a, e) : p.removeItem(a))
    }
    (function() {
        function a(e) {
            jb = "mousedown" == e.type;
            e = p.desktop;
            1 != e && 2 != e && (Db("desktop", jb ? 3 : 0, 0),
            e !== p.desktop && Eb());
            r.removeEventListener("touchstart", a, !1);
            r.removeEventListener("mousedown", a, !1)
        }
        ua(r, {
            touchstart: a,
            mousedown: a
        })
    }
    )();
    p.nose && (p.sevol = "0",
    p.removeItem("nose"));
    var I = {}, Fb, Gb = p.lang || "JP";
    switch (Gb) {
    case "JP":
    case "EN":
        break;
    default:
        Gb = "JP"
    }
    Fb = Gb;
    function Hb(a) {
        va(I, a.JP);
        va(I, a[Fb])
    }
    Hb({
        JP: {
            1001: "プレーヤ名が正しくありません。プレーヤ名には使用できない文字があります。",
            1002: 'このプレーヤ名を使用するにはIDで入場する必要があります<br>■IDの再発行方法は以下を参照してください<br><a href="https://tenhou.net/support.html" target=_blank>https://tenhou.net/support.html</a>',
            1003: 'IDが正しくありません<br>■IDの再発行方法は以下を参照してください<br><a href="https://tenhou.net/support.html" target=_blank>https://tenhou.net/support.html</a><br>180日以上対戦を行っていないIDは停止または削除されている場合があります。七段以上で有料版の決済情報が確認できる場合にはIDの復元が可能です。お早めにお問い合わせください。',
            1004: "このプレーヤは既に接続済みです。しばらく経ってから接続してください。",
            1005: "このプレーヤは既に登録済みです。同じプレーヤ名は使用できません。",
            1006: "この接続元IPからの新規登録は約７日間行なえません",
            1007: "登録に失敗しました",
            1008: "この接続元からは一定期間アクセスできません<br><br>多くのプレーヤから不正/迷惑行為の通報が寄せられた可能性があります。<br>アクセス解除は問い合わせを頂いても行なえない場合があります。<br>健全なコミュニティの運営に何卒ご理解ご協力をいただきますよう<br>よろしくお願い申し上げます。",
            1009: "通報が完了しました",
            1010: "この機能は個室では利用できません<br>ランキング戦ロビーに移動してください",
            1011: "通報に失敗しました",
            1012: "登録が完了しました。IDを紛失しないようにコピーしてください。<small class=gray>(※180日以上対戦を行っていないIDは削除されますのでご注意ください)</small>",
            1013: "観戦可能な対戦は現在ありません",
            1014: "観戦情報が見つかりませんでした<br>この対戦は既に終了している可能性があります",
            1015: "大会ロビーの作成が完了しました",
            1016: "大会ロビーの作成に失敗しました",
            1017: "予約中は牌譜を閲覧できません",
            1018: "予約中は観戦できません",
            1019: "大会ロビーが見つかりませんでした。",
            1020: "必要な有効期限が不足しています<br><br>今すぐ購入しますか？",
            1021: "外部ログインサーバからの応答がありません",
            1022: "ID互換のないロビーへは移動できません",
            1023: "一時的に使用している外部IDの有効期限が切れました",
            1024: "参加に必要な条件を満たしていません",
            1025: "外部IDでは利用できません",
            1026: "このロビーでは参加登録は行えません",
            1027: "参加登録が完了しました",
            1028: "すでに参加登録が完了しています",
            1100: "このルールへの予約は許可されていません",
            1101: "段位戦の上級/特上卓では、不正防止のため対戦人数が100人未満のルールを予約するには有料会員の有効期限の残りが91日以上必要です",
            1102: "接続数が8000人以下の場合のみ予約が許可されています",
            1200: "トレーニングを使用するにはID登録が必要です。ログイン画面の「新規ID」からIDを取得してください",
            2003: "牌譜の読み込みに失敗しました。<br>プレイ中の牌譜はゲーム終了後に閲覧可能になります"
        },
        EN: {
            1001: "Invalid player name. You can't use some of the characters in this name.",
            1002: 'This name is already registered, you must enter an ID to use it.<br>■ To recover a lost ID go here<br><a href="https://tenhou.net/support.html" target=_blank>https://tenhou.net/support.html</a>',
            1003: 'The ID entered is incorrect.<br>■ To recover a lost ID go here<br><a href="https://tenhou.net/support.html" target=_blank>https://tenhou.net/support.html</a><br>If you haven\'t played a match in the last 180 days, your ID might have been deactivated. Only Premium accounts with a rank of 7 Dan and above may be reactivated. Please, enquire as soon as possible.',
            1004: "This player is already connected to the server. Try to reconnect later.",
            1005: "This player is already registered. You can't register this name.",
            1006: "You can't register any new IDs from this location(IP) for this week.",
            1007: "Error during registration",
            1008: "Access from this location is temporarily restricted.<br><br>You may have been reported by other players for obstructive behavior.<br>We may not be able to help you regain access.<br>We appreciate your understanding of our community policies.<br>We're sorry for any inconveniences caused",
            1009: "Report sent",
            1010: "You can't use this in a private room.<br>Please, go back to the Ranking Lobby.",
            1011: "Couldn't send report",
            1012: "Registration completed. Please, copy your ID and do not lose it. <small class=gray>(*If you don't play a match for over 180 days your ID will be subject to deletion)</small>",
            1013: "There are no matches available to spectate.",
            1014: "We couldn't find any spectator data.<br>This match is probably already over.",
            1015: "Tournament Lobby created successfully",
            1016: "Tournament Lobby could not be created",
            1017: "You can't view logs while queueing for a match.",
            1018: "You can't spectate while queueing for a match.",
            1019: "Tournament Lobby could not be found",
            1020: "You don't have enough Premium Days left<br><br>Would you like to purchase some?",
            1021: "No response from external login server",
            1022: "You can't enter an incompatible lobby.",
            1023: "The valid period for the external ID has expired.",
            1024: "You don't meet the requirements to join.",
            1025: "You can't use an external ID.",
            1026: "You can't register to participate in this lobby.",
            1027: "Participation registered successfully",
            1028: "You are already registered to participate.",
            1100: "These rules don't allow you to queue.",
            1101: "To prevent cheating, only users with 91 days of Premium access or more can queue in Joukyuu or Tokujou tables with less than 100 active players.",
            1102: "You can queue only when there are less than 8000 players connected.",
            1200: "You need to register an ID to use Training Mode. Please, go back to the Login Panel and register a New ID.",
            2003: "Failed to load game log data.<br>You can view the log after this match is over."
        }
    });
    var Lb = 108
      , Mb = kb("DIV", ab, "nosel", {}, {
        display: "none",
        color: "#CCC",
        backgroundColor: "#444",
        height: Lb + "px"
    })
      , Nb = kb("DIV", ab, "nosel", {}, {
        display: "none",
        overflow: "hidden",
        position: "absolute"
    })
      , Ob = kb("DIV", ab, "", {}, {
        position: "absolute"
    });
    hb && !ib ? Mb.innerHTML = '<div style="width:100%;height:100%;display:table;pointer-events:none;"><div style="display:table-cell;text-align:center;vertical-align:middle;">上にゆっくりスクロールしてください</div></div>' : (Mb.style.height = Lb = 0,
    ab.style.overflow = "hidden");
    function Pb() {
        function a() {
            c = null;
            var a = $a.documentElement.clientWidth
              , d = r.innerHeight
              , k = (~~r.orientation + 360) % 360
              , l = b[0];
            hb && ((~~k + 360) % 180 && (l = b[1]),
            cb && a == l[1] && (Nb.style.display = Mb.style.display = "none",
            l[0] = l[1] = 0),
            a < l[0] && (a = l[0]),
            d < l[1] && (d = l[1]));
            a == parseInt(Nb.style.width) && d == parseInt(Nb.style.height) ? (l[0] = a,
            l[1] = d,
            ab.style.height = parseInt(Mb.style.height) + d + "px",
            Nb.style.display = Mb.style.display = "",
            Eb()) : (e(),
            ub(),
            r.scrollTo(0, parseInt(Mb.style.height)),
            Nb.style.width = a + "px",
            Nb.style.height = d + "px")
        }
        function e(b) {
            bb && (Nb.style.display = Mb.style.display = "none");
            b && "resize" == b.type || (ab.style.height = 2 * r.innerHeight + "px");
            clearTimeout(c);
            c = setTimeout(a, 250)
        }
        var c, b = [[0, 0], [0, 0]];
        ta(r, "orientationchange", bb ? e : function() {
            Nb.style.display = Mb.style.display = "none";
            var a = b[(~~((~~r.orientation + 360) % 360) + 360) % 180 ? 1 : 0];
            a[0] = a[1] = 0;
            e()
        }
        );
        ta(r, "resize", e);
        e()
    }
    function Qb(a, e, c) {
        var b = e / t + "px"
          , f = c / t + "px";
        if (a.width != e || a.height != c)
            a.width = e,
            a.height = c;
        a = a.style;
        if (a.width != b || a.height != f)
            a.width = b,
            a.height = f
    }
    function Rb() {
        K.a = 2;
        K.a = 3 == H.a ? p.check & 24 ? 3 : ~~p.yama : ~~p.yama;
        0 == K.a && p.desktop && (K.a = 1);
        Sb();
        M.Nf();
        var a = Tb
          , e = Ub;
        ab.parentNode.style.fontSize = ~~((a - 2 * N[1]) / t / 30) + "px";
        Vb.style.width = (a + (3 == H.a && Nb.offsetHeight < Nb.offsetWidth ? (a - 2 * N[1]) / 8 : 0)) / t + "px";
        Vb.style.height = e / t + "px";
        Qb(Wb.s.canvas, a, e);
        Qb(P.s.canvas, Xb, e);
        Qb(Yb.s.canvas, Xb, e);
        a = -~~((Xb - a) / 2 / t);
        P.s.canvas.style.marginLeft = Yb.s.canvas.style.marginLeft = a + "px";
        Zb.fa();
        R.K();
        $b.K();
        ac.style.left = ~~(R[80] / t) + a + "px";
        ac.style.top = ~~(R[81] / t) + "px";
        e = bc.s.canvas;
        e.style.marginLeft = ~~(R[32] / t) + a + "px";
        e.style.marginTop = ~~(R[33] / t) + "px";
        Qb(e, R[34], R[35]);
        Wb.X();
        bc.X();
        P.Ib();
        S.K();
        v.K();
        D.K();
        cc.K();
        Ob.style.top = Vb.offsetHeight + S.b.offsetHeight + "px";
        (a = $a.getElementById("loading")) && a.parentNode.removeChild(a)
    }
    function Eb() {
        Eb = Rb;
        v.ka(11, r.tenhouEventInfo && !$a.referrer.match(/^https?:\/\/tenhou.net\/0\/(\?|$)/))
    }
    function ub(a) {
        var e = r.StatusBar;
        if (e) {
            oa && cb && e.backgroundColorByHexString("#000");
            var c = $a.documentElement.clientWidth
              , b = r.innerHeight;
            !a && b < c ? (e.overlaysWebView(!0),
            e.hide()) : (e.overlaysWebView(!1),
            e.show())
        }
    }
    oa && ta($a, "resume", Ta(function() {
        Wb.X();
        bc.X();
        P.Ib();
        var a = Yb.s;
        a.clearRect(0, 0, a.canvas.width + 1, a.canvas.height + 1)
    }, 1));
    var Vb = kb("DIV", Nb, "nosel tbl", {}, {
        margin: "0 auto",
        position: "relative"
    });
    function dc(a, e) {
        var c = arguments;
        a.beginPath();
        a.moveTo(c[2], c[3]);
        for (var b = 4; b < c.length; )
            switch (c[b++]) {
            case 0:
                b += 2;
                break;
            case 1:
                a.lineTo(c[b++], c[b++]);
                break;
            case 2:
                a.arcTo(c[b++], c[b++], c[b + 1], c[b + 2], e)
            }
        a.closePath()
    }
    function ec(a, e, c, b, f) {
        var d = ~~(.5 * T[0]);
        dc(a, d, e + d, c + f, 2, e + b, c + f, 2, e + b, c, 2, e, c, 2, e, c + f, 0, e + b, c + f + .01)
    }
    var Wb = function() {
        function a(a, c, b, f, d) {
            d && (a.fillStyle = d,
            a.fillText(c, 1, b + 0),
            a.fillText(c, -1, b + 0),
            a.fillText(c, 0, b + 1),
            a.fillText(c, 0, b - 1),
            a.fillText(c, 1, b + 1),
            a.fillText(c, -1, b + 1),
            a.fillText(c, 1, b - 1),
            a.fillText(c, -1, b - 1));
            f && (a.fillStyle = f,
            a.fillText(c, 0, b))
        }
        return {
            s: kb("CANVAS", Vb, "", {}, {
                position: "absolute",
                pointerEvents: "none"
            }).getContext("2d"),
            X: Ta(function() {
                var e = Wb.s;
                if (e && (e.setTransform(1, 0, 0, 1, 0, 0),
                e.clearRect(0, 0, e.canvas.width + 1, e.canvas.height + 1),
                M.lb.complete && M.lb.height && e.drawImage(M.lb, 0, 0),
                -1 != H.la)) {
                    var c = P.s.canvas.offsetLeft * t
                      , b = R[16] + c
                      , f = R[17]
                      , d = R[18]
                      , k = R[19]
                      , l = T[0]
                      , n = ~~(.5 * l);
                    e.fillStyle = "#000";
                    ec(e, b, f, d, k);
                    e.globalAlpha = .2;
                    e.fill();
                    e.globalAlpha = 1;
                    var g = 3 * N[1]
                      , h = 3 * U[0]
                      , m = [e];
                    m.push(n, b, f + k);
                    H.H[0] && m.push(2, b, f + k + h, 2, b + d + g, f + k + h, 2, b + d + g, f + k + l, 1, b + d, f + k + l);
                    m.push(1, b + d, f + k);
                    H.H[1] && m.push(2, b + d + g, f + k, 2, b + d + g, f - h, 2, b + d + l, f - h, 1, b + d + l, f);
                    m.push(1, b + d, f);
                    H.H[2] && m.push(2, b + d, f - h, 2, b - g, f - h, 2, b - g, f - l, 1, b, f - l);
                    m.push(1, b, f);
                    H.H[3] && m.push(2, b - g, f, 2, b - g, f + k + h, 2, b - l, f + k + h, 1, b - l, f + k);
                    dc.apply(this, m);
                    e.globalAlpha = .15;
                    e.fill();
                    e.globalAlpha = 1;
                    for (b = 0; 4 > b; ++b)
                        H.H[b] && (e.setTransform(1, 0, 0, 1, c, 0),
                        e.fillStyle = "#000",
                        d = 48 + 4 * b,
                        f = e,
                        ec(f, R[d + 0], R[d + 1], R[d + 2], R[d + 3]),
                        f.globalAlpha = .15,
                        f.fill(),
                        f.globalAlpha = 1,
                        f = Math.min(R[d + 2] / 2, R[d + 3] / 2),
                        e.textAlign = "center",
                        e.textBaseline = "middle",
                        e.setTransform(1, 0, 0, 1, R[d + 0] + ~~(R[d + 2] / 2) + c, R[d + 1] + ~~(R[d + 3] / 2)),
                        e.rotate(270 * b * Math.PI / 180),
                        d = 0 == b || 3 == b ? "rgba(255,255,255,0.25)" : "rgba(191,191,191,0.25)",
                        k = void 0,
                        u.rb || (d = 0 == b || 3 == b ? "rgba(255,255,255,0.80)" : "rgba(191,191,191,0.80)",
                        k = "rgba(0,0,0,0.50)"),
                        l = -.1,
                        1800 <= H.Ua[b] && (e.font = "normal " + .3 * f + "px sans-serif",
                        a(e, "R" + ~~H.Ua[b], -.55 * f, d, k),
                        l = 0),
                        e.font = "normal " + .9 * f + "px cwTeX-Q-Kai-T,icons2,serif",
                        a(e, ba[H.$a[b]], f * l, d, k),
                        e.font = "normal " + .25 * f + "px sans-serif",
                        a(e, H.H[b], f * (.55 + l), d, k));
                    e.fillStyle = "#000";
                    e.setTransform(1, 0, 0, 1, c, 0);
                    for (b = 0; 4 > b; ++b)
                        H.H[b] && (c = b ? 0 : T[4],
                        f = R[80 + 2 * b],
                        d = R[81 + 2 * b],
                        k = R[96 + 2 * b],
                        l = R[97 + 2 * b],
                        0 == b && (ty0 = R[97]),
                        n = e,
                        ec(n, Math.min(f, k), Math.min(d, l) + c, Math.abs(f - k) + N[b], Math.abs(d - l) + U[b] + T[b] - c),
                        n.globalAlpha = .2,
                        n.fill(),
                        n.globalAlpha = 1)
                }
            })
        }
    }();
    var P = function() {
        function a(a, b, d, c) {
            if (d && c) {
                var g = P.s;
                g.clearRect(a, b, d, c);
                d = a + d;
                c = b + c;
                for (var h, e = 0; h = R.ta[e]; ++e) {
                    var k = h.i;
                    if (void 0 !== k && 0 !== h.u && k.Ba.complete && k.Ba.height) {
                        var f = h.wa.c + k.offsetX
                          , n = h.wa.h - h.wa.Ea + k.offsetY;
                        if (!(d <= f || c <= n)) {
                            var l = f + k.ia;
                            if (!(l <= a)) {
                                var E = n + k.ya;
                                if (!(E <= b)) {
                                    var da = a - f;
                                    0 < da ? f = a : da = 0;
                                    d < l && (l = d);
                                    var l = l - f
                                      , pa = b - n;
                                    0 < pa ? n = b : pa = 0;
                                    c < E && (E = c);
                                    E -= n;
                                    g.globalAlpha = h.u;
                                    g.drawImage(k.Ba, k.cb + da, k.eb + pa, l, E, f, n, l, E);
                                    h.ca && (k = h.ja,
                                    g.globalAlpha = h.ca,
                                    g.drawImage(k.Ba, k.cb + da, k.eb + pa, l, E, f, n, l, E))
                                }
                            }
                        }
                    }
                }
                g.globalAlpha = 1
            }
        }
        function e(a, c, g, h) {
            d && k ? (a < b ? (d += b - a,
            b = a) : g += a - b,
            d < g && (d = g),
            c < f ? (k += f - c,
            f = c) : h += c - f,
            k < h && (k = h)) : (b = a,
            f = c,
            d = g,
            k = h)
        }
        var c = Ta(function() {
            var b = P.s;
            b.clearRect(0, 0, b.canvas.width + 1, b.canvas.height + 1);
            for (var d, c = 0; d = R.ta[c]; ++c) {
                var h = d.i;
                if (void 0 !== h && 0 !== d.u && h.Ba.complete && h.Ba.height) {
                    var m = d.wa.c + h.offsetX
                      , e = d.wa.h - d.wa.Ea + h.offsetY;
                    b.globalAlpha = d.u;
                    b.drawImage(h.Ba, h.cb, h.eb, h.ia, h.ya, m, e, h.ia, h.ya);
                    if (d.ca) {
                        var k = d.ja;
                        b.globalAlpha = d.ca;
                        b.drawImage(k.Ba, k.cb, k.eb, h.ia, h.ya, m, e, h.ia, h.ya)
                    }
                }
            }
            P.Ma = a
        }, 1), b, f, d, k;
        return {
            s: kb("CANVAS", Vb, "", {}, {
                position: "absolute",
                pointerEvents: "none"
            }).getContext("2d"),
            Ib: function() {
                (P.Ma = c)()
            },
            Ca: function() {
                b = f = d = k = 0;
                P.Ma = e
            },
            Da: function() {
                a(b, f, d, k);
                P.Ma = a
            },
            Ma: a
        }
    }();
    var bc = function() {
        function a(a, b) {
            for (var d = bc.s, c = [], f = 2; f < arguments.length; f += 5) {
                d.font = arguments[f + 0];
                var g = d.measureText(arguments[f + 3]).width;
                c.push(g);
                a -= g / 2
            }
            for (f = 2; f < arguments.length; f += 5)
                d.font = arguments[f + 0],
                d.fillStyle = e[arguments[f + 1]],
                (g = e[arguments[f + 2]]) ? (d.shadowBlur = 2 * t,
                d.shadowColor = g,
                d.shadowOffsetX = 1 * t,
                d.shadowOffsetY = 1 * t) : (d.shadowBlur = 0,
                d.shadowColor = "#000",
                d.shadowOffsetX = 0,
                d.shadowOffsetY = 0),
                g = c.shift(),
                d.fillText(arguments[f + 3], a + g / 2, b + arguments[f + 4]),
                a += g
        }
        var e = "#FFF #666 #000 #00F #F00 #AAA".split(" ")
          , c = 0
          , b = 0;
        return {
            s: kb("CANVAS", Vb, "", {}, {
                position: "absolute",
                display: "none"
            }).getContext("2d"),
            X: function(e, d) {
                void 0 !== e && (c = e);
                void 0 !== d && (b = d);
                var f = bc.s
                  , l = f.canvas.width
                  , n = f.canvas.height
                  , g = Math.min(.18 * l, .18 * n);
                if (1 == K.a || 3 == K.a)
                    g *= .9;
                f.save();
                f.setTransform(1, 0, 0, 1, 0, 0);
                f.clearRect(0, 0, l + 1, n + 1);
                ec(f, 1, 1, l - 2, n - 2);
                u.rb ? (f.fillStyle = "#222",
                f.fill()) : (f.globalAlpha = .75,
                f.fillStyle = "#222",
                f.fill(),
                f.globalAlpha = 1);
                f.strokeStyle = "#111";
                f.lineWidth = 1;
                f.stroke();
                var h = b
                  , m = .24 * g
                  , y = .02 * g
                  , C = bc.s
                  , w = C.canvas.width
                  , B = C.canvas.height
                  , z = C.createLinearGradient(0, 0, h & 1 ? 0 : w, h & 1 ? B : 0);
                z.addColorStop(0, "rgba(0,127,0,0)");
                z.addColorStop(.12, "rgba(0,127,0,255)");
                z.addColorStop(.88, "rgba(0,127,0,255)");
                z.addColorStop(1, "rgba(0,127,0,0)");
                C.fillStyle = z;
                switch (h) {
                case 0:
                    C.fillRect(0, B - m - y, w, m);
                    break;
                case 1:
                    C.fillRect(w - m - y, 0, m, B);
                    break;
                case 2:
                    C.fillRect(0, y, w, m);
                    break;
                case 3:
                    C.fillRect(y, 0, m, B)
                }
                h = "normal " + 1.2 * g + "px cwTeX-Q-Kai-T,icons2,serif";
                m = "normal " + .8 * g + "px cwTeX-Q-Kai-T,icons2,serif";
                y = .15 * g;
                f.textAlign = "center";
                f.textBaseline = "middle";
                f.setTransform(1, 0, 0, 1, l / 2, n / 2);
                C = [[0, n / 2 - .7 * g], [0, l / 2 - .7 * g], [0, n / 2 - .7 * g], [0, l / 2 - .7 * g]];
                if (3 != c)
                    if (0 == c)
                        for (w = 0; 4 > w; ++w)
                            C[w].push(h, (4 + w - H.la) % 4 ? 1 : 0, -1, H.ob[w] + " ", 0, h, H.connected & 1 << w ? 0 : 4, 2, void 0 === H.pa[w] ? "-" : H.pa[w] / 100, 0, m, 1, -1, "00", y);
                    else if (C[0].push(h, 0, 2, H.ob[0] + " ", 0, h, 0, 2, void 0 === H.pa[0] ? "" : H.pa[0] / 100, 0),
                    C[1].push(h, 0, 2, void 0 === H.pa[1] ? "" : Wa((H.pa[1] - H.pa[0]) / 100), 0),
                    C[2].push(h, 0, 2, void 0 === H.pa[2] ? "" : Wa((H.pa[2] - H.pa[0]) / 100), 0),
                    C[3].push(h, 0, 2, void 0 === H.pa[3] ? "" : Wa((H.pa[3] - H.pa[0]) / 100), 0),
                    ~H.v & 512)
                        C[0].push(m, 1, -1, "00", y);
                    else
                        for (w = 0; 4 > w; ++w)
                            C[w].push(h, 0, 2, " " + H.Ve[w], 0);
                H.H[0] && a.apply(this, C[0]);
                f.rotate(270 * Math.PI / 180);
                H.H[1] && a.apply(this, C[1]);
                f.rotate(270 * Math.PI / 180);
                H.H[2] && a.apply(this, C[2]);
                f.rotate(270 * Math.PI / 180);
                H.H[3] && a.apply(this, C[3]);
                3 == c ? (f.setTransform(1, 0, 0, 1, l / 2, n / 2),
                f.fillStyle = "#FFF",
                a(0, 0, h, 0, 2, "天鳳", 0)) : 0 == c ? (f.setTransform(1, 0, 0, 1, l / 2, n / 2 - .75 * g / 2),
                f.fillStyle = "#FFF",
                h = "normal " + 1.7 * g + "px cwTeX-Q-Kai-T,icons2,serif",
                m = H.oa[0],
                a(0, 0, h, 0, ~~(m / 4) & 1 ? 4 : 3, "東南西北".substr(~~(m / 4), 1), 0, h, 0, m % 4 == (H.v & 16 ? 2 : 3) ? 4 : 2, m % 4 + 1, 0, h, 1, -1, "局", 0),
                w = (l - 2.8 * g) / 2,
                f.beginPath(),
                f.moveTo(-w, .75 * +g),
                f.lineTo(+w, .75 * +g),
                h = f.createLinearGradient(-w, 0, +w, 0),
                h.addColorStop("0.0", "rgba(15,15,15,0)"),
                h.addColorStop("0.5", "rgba(15,15,15,1)"),
                h.addColorStop("1.0", "rgba(15,15,15,0)"),
                f.strokeStyle = h,
                f.lineWidth = 1,
                f.stroke(),
                f.setTransform(1, 0, 0, 1, l / 2, n / 2 + 1.7 * g / 2 - .75 * g / 2 + .3 * g),
                h = "normal " + .75 * g + "px cwTeX-Q-Kai-T,icons2,serif",
                m = "normal " + .5 * g + "px cwTeX-Q-Kai-T,icons2,serif",
                y = .12 * g,
                l = K.bf(b),
                a(0, 0, h, 0, l < (H.v & 16 ? 6 : 8) ? 4 : 2, l + " ", 0, m, 5, -1, "", y, h, 0, 2, H.oa[1], 0, m, 5, -1, "", y, h, 0, 2, H.oa[2], 0)) : (h = "normal bold " + .75 * g + "px sans-serif",
                f.setTransform(1, 0, 0, 1, l / 2, n / 2),
                f.fillStyle = "#FFF",
                a(0, 0, h, 0, 2, 4 == H.a ? "天鳳" : ka(H.v), 0));
                f.restore()
            },
            ka: function() {}
        }
    }();
    (function() {
        function a(a, f) {
            bc.X(f || 1);
            if (c) {
                var b = c;
                delete fc()[b];
                c = void 0
            }
        }
        function e() {
            a(0, 2);
            c = gc(function() {
                c = void 0;
                bc.X(0)
            }, 2E3)
        }
        var c = void 0;
        ua(bc.s.canvas, {
            touchstart: function() {
                bc.X(1)
            },
            touchend: e,
            touchcancel: function() {
                bc.X(0)
            },
            mouseover: a,
            mouseout: e
        })
    }
    )();
    var Yb = function() {
        function a(a) {
            var n = Yb.s;
            0 < d && 0 < k && n.clearRect(b, f, d, k);
            var g = b = f = d = k = 0, h;
            for (h in e) {
                var m = e[h];
                if (0 > m.t)
                    m.t += a;
                else if (m.t < m.qa) {
                    var y = m.i
                      , l = ~~(m.Wa + (m.Hf - m.Wa) * m.t / m.qa)
                      , w = ~~(m.Kb + (m.If - m.Kb) * m.t / m.qa)
                      , B = y.ia
                      , z = y.ya;
                    y.Ba.complete && y.Ba.height && (n.globalAlpha = m.u,
                    n.drawImage(y.Ba, y.cb, y.eb, B, z, l, w, B, z));
                    m.t += a;
                    d && k ? (l < b ? (d += b - l,
                    b = l) : B += l - b,
                    d < B && (d = B),
                    w < f ? (k += f - w,
                    f = w) : z += w - f,
                    k < z && (k = z)) : (b = l,
                    f = w,
                    d = B,
                    k = z)
                } else
                    m.Db && m.Db.ga(m.Af),
                    delete e[h];
                ++g
            }
            n.globalAlpha = 1;
            g || (hc(),
            c && c.length && (c.shift()(),
            ++g));
            return g
        }
        var e, c, b, f, d, k;
        return {
            s: kb("CANVAS", Vb, "", {}, {
                position: "absolute",
                pointerEvents: "none"
            }).getContext("2d"),
            $: !1,
            ra: function() {
                c = [];
                e = {};
                b = f = d = k = 0;
                var a = Yb.s;
                a.clearRect(0, 0, a.canvas.width + 1, a.canvas.height + 1)
            },
            O: function(b, d, g, h, m, f, k, w, B, z) {
                if (Yb.$)
                    return b instanceof Function ? b() : d instanceof ic ? d.ga(g) : B && B.ga(z),
                    0;
                var y = fc();
                y.Bf || (y.Bf = a);
                if (b instanceof Function)
                    return c.push(b),
                    0;
                y = e[Za++] = {};
                y.t = -b;
                d instanceof ic ? (B = d,
                z = g,
                y.qa = 0) : (y.u = w,
                y.i = k,
                void 0 === k && pb("animation src undefined"),
                y.Wa = d,
                y.Kb = g,
                y.Hf = h,
                y.If = m,
                0 < f ? (d = h - d,
                g = m - g,
                y.qa = ~~(Math.sqrt(d * d + g * g) / (N[0] * f))) : y.qa = -f);
                B && (y.Db = B,
                y.Af = z);
                return b + y.qa
            },
            Ha: function() {
                for (; a(1E4); )
                    ;
            }
        }
    }();
    Hb({
        JP: {
            ib: "槓",
            Za: "拔",
            ge: "ポン",
            fe: "チー",
            Wb: "カン",
            Xb: "拔き"
        },
        EN: {
            ib: "Kan",
            Za: "Nuki",
            ge: "Pon",
            fe: "Chii",
            Wb: "Kan",
            Xb: "Nuki"
        }
    });
    var $b = function() {
        for (var a = [], e = 0; 4 > e; ++e)
            a[e] = kb("DIV", Vb, "nosel tbl ts0 rot" + Va(3, 270 * e % 360), {}, {
                fontSize: "80%",
                pointerEvents: "none",
                textAlign: "right",
                display: "none"
            });
        var c = [1, 2, 3, 4, 5, 6, 7, 8, 0, 10, 11, 12, 13, 14, 15, 16, 17, 9, 19, 20, 21, 22, 23, 24, 25, 26, 18, 28, 29, 30, 27, 32, 33, 31];
        return {
            ra: function() {
                for (var b = 0; 4 > b; ++b)
                    a[b].style.display = "none"
            },
            wb: function(b) {
                var f = a[b]
                  , d = V[16 | b].length;
                if (d) {
                    for (var e = d, l = [], n = 0; n < V[16 | b].length; ++n) {
                        var g = V[16 | b][n];
                        16 == g && (e += 1);
                        l[g] = 1
                    }
                    l[0] && l[1] && l[2] && l[3] && (e += 4);
                    l[16] && l[17] && l[18] && l[19] && (e += 4);
                    l[32] && l[33] && l[34] && l[35] && (e += 4);
                    l[120] && l[121] && l[122] && l[123] && (e += 4);
                    for (n = 5; n < H.oa.length; ++n)
                        b = c[H.oa[n] >> 2],
                        0 != (H.v & 2048) ? 1 == b ? b = 4 : 5 == b && (b = 8) : H.v & 16 && 1 == b && (b = 8),
                        b *= 4,
                        e += ~~l[b + 0] + ~~l[b + 1] + ~~l[b + 2] + ~~l[b + 3];
                    l = "";
                    0 != (H.v & 2048) && (l += e + '<span style="font-size:50%;">+</span><br>');
                    f.style.display = "";
                    f.innerHTML = '<div class=tbc style="vertical-align:bottom;padding:0 0.1em;">' + (l + ('<span style="font-size:60%;">x</span>' + d + "<br>")) + "</div>"
                } else
                    f.style.display = "none"
            },
            K: function() {
                for (var b = 0; 4 > b; ++b) {
                    var c = a[b].style;
                    c.width = c.height = ~~(Math.min(N[b], U[b]) / t) + "px";
                    var d = -(0 == b ? N[0] : jc[b]);
                    c.left = ~~((R[96 + 2 * b] + -(1 == b ? U[1] : kc[b])) / t) + P.s.canvas.offsetLeft + "px";
                    c.top = ~~((R[97 + 2 * b] + d) / t) + "px"
                }
            }
        }
    }()
      , nc = function() {
        function a(a) {
            return '<span style="pointer-events:none;vertical-align:middle;">' + a + "</span>"
        }
        function e() {
            for (var a in v)
                if (!(~a & 262144) && (v[a].parentNode.style.visibility = c[a] ? "" : "hidden",
                c[a] && 2 === c[a].length)) {
                    var e = c[a][0]
                      , d = c[a][1];
                    M.xa(v[a], "", 4, .8, e, d);
                    c[2098693] = c[a] = {
                        tag: "N",
                        type: e >> 2 == d >> 2 ? 1 : 3,
                        hai0: e,
                        hai1: d
                    }
                }
        }
        var c = {};
        return {
            Ef: function(b, f) {
                if (1 == H.a || 4 == H.a) {
                    var d = 0;
                    c = {};
                    b & 32 && (c[2359814] = {
                        tag: "REACH"
                    });
                    b & 16 && (c[2359816] = {
                        tag: "N",
                        type: 7
                    });
                    b & 64 && (c[2359815] = {
                        tag: "N",
                        type: 9
                    });
                    0 < K.bf(0) && 4 > K.hb - V[16].length - V[17].length - V[18].length - V[19].length && (b |= 2);
                    var k = [];
                    if (b & 2)
                        for (var l, n = (H.v & 16 ? 16 : 17) - 1; l = R[2048 | n]; --n)
                            if (void 0 !== l.Ka.nb) {
                                for (var g = 0; g < V[32].length && V[32][g] != l.Ka.nb; ++g)
                                    ;
                                g < V[32].length && k.push({
                                    tag: "N",
                                    type: 5,
                                    hai: V[32][g]
                                })
                            }
                    if (b & 2)
                        if (l = V[48],
                        V[64])
                            n = "" + V[64],
                            g = f >> 2,
                            4 == l[g] && (l[g] -= 4,
                            "" + tb.mb(l) == n && k.push({
                                tag: "N",
                                type: 4,
                                hai: 4 * g
                            }),
                            l[g] += 4);
                        else
                            for (g = 0; 34 > g; ++g)
                                4 > l[g] || k.push({
                                    tag: "N",
                                    type: 4,
                                    hai: 4 * g
                                });
                    k.length || (b &= -3);
                    k.length && (c[2098693] = c[401412] = k[0],
                    M.xa(v[401412], a(I.ib) + " ", 4, .7, k[0].hai),
                    k.shift(),
                    ++d);
                    k.length && (c[2098693] = c[401416] = k[0],
                    M.xa(v[401416], a(I.ib) + " ", 4, .7, k[0].hai),
                    k.shift(),
                    ++d);
                    k.length && (c[2098693] = c[401417] = k[0],
                    M.xa(v[401417], a(I.ib) + " ", 4, .7, k[0].hai),
                    k.shift(),
                    ++d);
                    if (b & 128)
                        if (0 == (H.v & 2048) || V[64])
                            c[2098693] = c[401414] = {
                                tag: "N",
                                type: 10
                            },
                            v[401414].innerHTML = I.Xb,
                            ++d;
                        else {
                            l = [];
                            for (n = 0; n < V[32].length; ++n)
                                if (k = V[32][n],
                                g = k >> 2,
                                0 == g || 4 == g || 8 == g || 30 == g)
                                    l[k] = {
                                        tag: "N",
                                        type: 10,
                                        hai: k
                                    };
                            k = [401414, 401415, 401418, 401419, 401417];
                            if (g = l[120] || l[121] || l[122] || l[123])
                                c[2098693] = c[k[0]] = g,
                                M.xa(v[k[0]], a(I.Za) + " ", 4, .7, g.hai),
                                k.shift(),
                                ++d;
                            if (g = l[0] || l[1] || l[2] || l[3])
                                c[2098693] = c[k[0]] = g,
                                M.xa(v[k[0]], a(I.Za) + " ", 4, .7, g.hai),
                                k.shift(),
                                ++d;
                            if (g = l[16])
                                c[2098693] = c[k[0]] = g,
                                M.xa(v[k[0]], a(I.Za) + " ", 4, .7, g.hai),
                                k.shift(),
                                ++d;
                            if (g = l[17] || l[18] || l[19])
                                c[2098693] = c[k[0]] = g,
                                M.xa(v[k[0]], a(I.Za) + " ", 4, .7, g.hai),
                                k.shift(),
                                ++d;
                            if (g = l[32] || l[33] || l[34] || l[35])
                                c[2098693] = c[k[0]] = g,
                                M.xa(v[k[0]], a(I.Za) + " ", 4, .7, g.hai),
                                k.shift(),
                                ++d
                        }
                    e();
                    v.R(512);
                    v[2098693].parentNode.style.visibility = 1 == d ? "" : "hidden";
                    v[3670533].parentNode.style.visibility = 1 < d ? "" : "hidden";
                    1 == d && (v[2098693].innerHTML = b & 128 ? I.Xb : b & 2 ? I.Wb : "?");
                    b && lc(8, 0, 0);
                    return b
                }
            },
            Cf: function(b, f) {
                if (1 == H.a || 4 == H.a) {
                    for (var d = ~~(f / 4 / 9), k = ~~(f / 4) % 9, l = {}, n = 0; n < V[32].length; ++n) {
                        var g = V[32][n]
                          , h = ~~(g / 4);
                        if (3 > d && 2 <= k && h == 9 * d + k - 2 || 3 > d && 1 <= k && h == 9 * d + k - 1 || h == 9 * d + k || 3 > d && 7 >= k && h == 9 * d + k + 1 || 3 > d && 6 >= k && h == 9 * d + k + 2)
                            h |= K.Fb(g) << 8,
                            l[h] ? l[h].push(g) : l[h] = [g]
                    }
                    n = 0;
                    c = {
                        2360326: {
                            tag: "N"
                        }
                    };
                    b & 8 && (c[2360328] = {
                        tag: "N",
                        type: 6
                    });
                    g = l[0 | 9 * d + k] || [];
                    h = l[256 | 9 * d + k] || [];
                    b & 2 && 3 == g.length + h.length && (M.xa(v[409604], a(I.ib) + " ", 4, .8, (h.length ? h : g)[0]),
                    c[2098693] = c[409604] = {
                        tag: "N",
                        type: 2
                    },
                    ++n);
                    b & 1 && (1 == h.length && 2 == g.length ? (c[409606] = [g[0], g[1]],
                    c[409607] = [h[0], g[0]],
                    n += 2) : 2 <= g.length ? (c[409607] = [g[0], g[1]],
                    ++n) : 1 == h.length && 1 == g.length && (c[409607] = [h[0], g[0]],
                    ++n));
                    if (b & 4)
                        for (var m = 0; 3 > m; ++m) {
                            var y = (m & 1) << 8
                              , C = (m & 2) << 7;
                            (g = l[y | 9 * d + k - 2]) && (h = l[C | 9 * d + k - 1]) && (c[m ? 409614 : 409610] = [g[0], h[0]],
                            ++n);
                            (g = l[y | 9 * d + k - 1]) && (h = l[C | 9 * d + k + 1]) && (c[m ? 409613 : 409609] = [g[0], h[0]],
                            ++n);
                            (g = l[y | 9 * d + k + 1]) && (h = l[C | 9 * d + k + 2]) && (c[m ? 409612 : 409608] = [g[0], h[0]],
                            ++n)
                        }
                    c[409607] && !c[409606] && (c[409606] = c[409607],
                    delete c[409607]);
                    c[409614] && !c[409610] && (c[409610] = c[409614],
                    delete c[409614]);
                    c[409613] && !c[409609] && (c[409609] = c[409613],
                    delete c[409613]);
                    c[409612] && !c[409608] && (c[409608] = c[409612],
                    delete c[409612]);
                    e();
                    v.R(1024);
                    cc.o(0, v[2360326]);
                    v[2098693].parentNode.style.visibility = 1 == n ? "" : "hidden";
                    v[3671045].parentNode.style.visibility = 1 < n ? "" : "hidden";
                    1 == n && (v[2098693].innerHTML = b & 4 ? I.fe : b & 1 ? I.ge : b & 2 ? I.Wb : "?");
                    b && lc(8, 0, 0)
                }
            },
            Df: function(a) {
                if (1 == H.a || 4 == H.a)
                    c = {
                        2360326: {
                            tag: "N"
                        }
                    },
                    a & 8 && (c[2360328] = {
                        tag: "N",
                        type: 6
                    }),
                    e(),
                    v.R(1024),
                    cc.o(0, v[2360326]),
                    v[2098693].parentNode.style.visibility = v[3671045].parentNode.style.visibility = "hidden",
                    a && lc(8, 0, 0)
            },
            L: function(a) {
                cc.Z();
                v.R(256);
                mc();
                4 == H.a ? D.ff(c[a]) : W.L(c[a])
            }
        }
    }();
    function oc(a) {
        var e = ~~a.m, c = e & 3, b;
        if (e & 4) {
            a[2] = 3;
            b = (e & 64512) >> 10;
            var f = b % 3;
            b = ~~(b / 3);
            b = 4 * (9 * ~~(b / 7) + b % 7);
            b = [b + 0 + ((e & 24) >> 3), b + 4 + ((e & 96) >> 5), b + 8 + ((e & 384) >> 7)];
            b.splice(0, 0, b.splice(f, 1)[0])
        } else
            e & 24 ? (a[2] = e & 16 ? 5 : 1,
            a[4] = (e & 96) >> 5,
            b = (e & 65024) >> 9,
            f = b % 3,
            b = 4 * ~~(b / 3),
            b = [b + 0, b + 1, b + 2, b + 3],
            a[4] = b.splice(a[4], 1)[0],
            b.splice(c ^ 3, 0, b.splice(f, 1)[0]),
            e & 16 && (b = [a[4]])) : e & 32 ? (a[2] = 10,
            b = [(e & 65280) >> 8]) : 0 == c ? (a[2] = 4,
            b = (e & 65280) >> 8 & -4,
            b = [b + 2, b + 0, b + 1, b + 3]) : (a[2] = 2,
            e = (e & 65280) >> 8,
            b = e & -4,
            b = [b + 0, b + 1, b + 2, b + 3],
            b.splice(e & 3, 1),
            b.splice(1 == c ? 3 : c ^ 3, 0, e));
        a[3] = c;
        a[0] = b
    }
    ;Hb({
        JP: {
            Ub: "鳴き",
            Sd: "ツモ",
            Rd: "ロン",
            Qd: "リーチ",
            Td: "流局",
            Od: "編集",
            Pd: "終了",
            ae: "鳴きなし",
            Yd: "自動理牌",
            $d: "不聴宣言",
            Zd: "自動和了",
            be: "ツモ切り",
            Ud: "暗転",
            Vd: "待ち",
            Wd: "手牌",
            Xd: "牌山",
            Vb: "匿名表示",
            ce: "視",
            de: "局",
            ee: "巡"
        },
        EN: {
            Ub: "Call",
            Sd: "<b>Tsumo</b>",
            Rd: "<b>Ron</b>",
            Qd: "Riichi",
            Td: "Redeal",
            Od: "Edit",
            Pd: "Exit",
            ae: "NoCall",
            Yd: "Sort",
            $d: "CallNoten",
            Zd: "AutoWin",
            be: "DropAll",
            Ud: "Gray",
            Vd: "Wait",
            Wd: "Hand",
            Xd: "Wall",
            Vb: "Anonymous",
            ce: "Player",
            de: "Round",
            ee: "Turn"
        }
    });
    for (var v = function() {
        function a(a, b, c) {
            var d = v[a];
            c ? d.innerHTML = '<span class=nobr style="pointer-events:none;' + (v.l[a] ? "" : "color:#888;") + '">' + (v.l[a] ? "" : "") + b + "</span>" : (d.innerHTML = '<span style="pointer-events:none;' + (v.l[a] ? "" : "color:#888;") + '">' + b + "<br>" + (v.l[a] ? "" : "") + "</span>",
            d.parentNode.style.fontSize = "85%")
        }
        function e(b) {
            b && (v.l[b] = !v.l[b]);
            var d = p.desktop & 1;
            a(1183749, I.ae, d);
            a(1183750, I.Yd, d);
            a(1183751, I.$d, d);
            a(1183752, I.Zd, d);
            a(1183753, I.be, d);
            1183750 == b && v.l[1183750] && (V.ub(0),
            V.tb())
        }
        function c(b) {
            b && (v.l[b] = !v.l[b]);
            a(1277961, I.Ud);
            a(1277957, I.Vd);
            a(1277960, I.Wd);
            a(1212429, I.Xd);
            p.check = p.check & -32 | (v.l[1277961] ? 0 : 1) | (v.l[1277957] ? 0 : 2) | (v.l[1277960] ? 0 : 4) | (v.l[1212429] ? 24 : 0);
            1212429 == b && (K.a = p.check & 24 ? 3 : ~~p.yama,
            0 == K.a && p.desktop && (K.a = 1),
            Eb());
            b && (3 == H.a && vb.Ra(0),
            2 == H.a && wb.Hb())
        }
        function b(a) {
            for (var b = 1; b < arguments.length; ++b)
                arguments[b].parentNode.style.visibility = a
        }
        return {
            b: kb("DIV", Nb, "nosel", {}, {
                position: "absolute",
                display: "none",
                color: "#FFF",
                fontFamily: "icons2,sans-serif",
                fontSize: "140%"
            }),
            a: 0,
            l: {},
            R: function(a) {
                v.a = 126976 == a ? v.a & 3840 : a & 126976 ? a | v.a & 3840 : a | v.a & 102400;
                a = v.a & 126976 ? v.a & 126976 : v.a & 3840;
                256 == a && 3 == H.a && (a = 2048);
                for (var d in v)
                    if (1572868 != d) {
                        var f = v[d];
                        f != v.b && f.tagName && (f.parentNode != v.b && (f = f.parentNode),
                        f.style.display = !a || ~d & a ? "none" : "")
                    }
                v[1572868].parentNode.style.display = v.a & 126976 ? "none" : "";
                d = p.desktop & 1;
                if (4096 == a || d)
                    e(),
                    b(1 == H.a && ~H.v & 1 ? "" : "hidden", v[495623]),
                    b("hidden", v[1183751]);
                32768 == a || 65536 == a ? (b(!oa && u.sb ? "hidden" : "", v[495623]),
                c()) : 256 == a && b("hidden", v[2360326]);
                pc.Va && pc.Va();
                if (1 == H.a && d) {
                    v[1572868].parentNode.style.display = "none";
                    a = [v[495623], v[1183749], v[1183750], v[1183752], v[1183753]];
                    for (d = 0; d < a.length; ++d)
                        a[d].parentNode.style.display = "";
                    e()
                }
            },
            K: function() {
                v.b.style.left = Vb.offsetLeft + "px";
                v.b.style.top = Vb.offsetTop + "px";
                var a = ~~(R[82] / t)
                  , b = ~~(R[81] / t)
                  , c = ~~((R[82] - R[86] - N[1]) / 4 / t)
                  , e = ~~((R[81] - R[33]) / 2.5 / t)
                  , e = Math.max(e, ~~((U[4] + T[4]) / t));
                3 == H.a && (Nb.offsetHeight < Nb.offsetWidth ? a = ~~(Tb / t) + ~~(.5 * c) : b = ~~(Ub / t) + e);
                var n = p.desktop & 1, g;
                for (g in v) {
                    var h = v[g];
                    if (h != v.b && h.parentNode) {
                        var m = h.style;
                        h.parentNode.parentNode == v.b && (m = h.parentNode.style);
                        var y = ((g & 3) >> 0) + 1
                          , C = (g & 12) >> 2;
                        n && 2360326 == g && (y = 1);
                        m.left = a - c * y + "px";
                        m.top = b - e * C + "px";
                        m.width = c + "px";
                        m.height = e + "px";
                        m.fontSize = "";
                        h.style.border = "solid 1px " + (g & 131072 ? "#222" : "rgba(0,0,0,0.25)");
                        g & 131072 ? (h.classList.remove("ts0"),
                        h.classList.add("bgb")) : (h.classList.remove("bgb"),
                        h.classList.add("ts0"))
                    }
                }
                if (1 == H.a) {
                    if (g = [v[1183749], v[1183753], v[1183752], v[1183751], v[1183750], null, v[495623]],
                    n)
                        for (c = ~~(Tb / t / 8),
                        e = ~~(U[1] / t),
                        a = (R[80] + 13 * N[4]) / t + P.s.canvas.offsetLeft,
                        b = Vb.offsetHeight - 1 * e,
                        n = 0; n < g.length; ++n)
                            g[n] && (m = g[n].parentNode.style,
                            m.left = a - c * (n + 1) + "px",
                            m.top = b + "px",
                            m.width = c + "px",
                            m.height = e + "px",
                            m.fontSize = "50%",
                            g[n].classList.remove("bgb"),
                            g[n].classList.add("ts0"),
                            g[n].style.borderStyle = "none")
                } else
                    3 == H.a && (v[1574918].style.borderColor = v[1574917].style.borderColor = v[1572868].style.borderColor = 3 == H.a ? "#444" : "rgba(0,0,0,0.25)",
                    Nb.offsetHeight < Nb.offsetWidth && (n = ~~(1.5 * e),
                    c = ~~(.5 * c),
                    Nb.offsetWidth < a && (a = ~~Nb.offsetWidth,
                    c = Nb.offsetWidth - ~~(Tb / t)),
                    m = v[1574918].parentNode.style,
                    m.width = c + "px",
                    m.height = n + "px",
                    m.left = a - 1 * c + "px",
                    m.top = b - e - 2 * n + "px",
                    m = v[1574917].parentNode.style,
                    m.width = c + "px",
                    m.height = n + "px",
                    m.left = a - 1 * c + "px",
                    m.top = b - e - 1 * n + "px",
                    m = v[1572868].parentNode.style,
                    m.width = c + "px",
                    m.height = e + "px",
                    m.left = a - 1 * c + "px",
                    m.top = b - e - 0 * n + "px"))
            },
            ka: function(a, b) {
                switch (a) {
                case 2360326:
                    cc.Ue();
                    break;
                case 409606:
                case 409607:
                case 409604:
                case 409610:
                case 409609:
                case 409608:
                case 409614:
                case 409613:
                case 409612:
                case 401412:
                case 401416:
                case 401417:
                case 401414:
                case 401415:
                case 401418:
                case 401419:
                case 2359815:
                case 2360328:
                case 2359816:
                case 2359814:
                case 2098693:
                    nc.L(a);
                    break;
                case 3670533:
                    v.R(8192);
                    break;
                case 3671045:
                    v.R(16384);
                    break;
                case 1572868:
                    4 == H.a ? D.jc(1) : v.R(3 == H.a ? 32768 : 2 == H.a ? 65536 : 4096);
                    break;
                case 3678213:
                case 3686405:
                case 1675268:
                    v.R(126976);
                    break;
                case 1574917:
                    vb.Ra(1);
                    break;
                case 1574918:
                    vb.Ra(-1);
                    break;
                case 1802246:
                    v.R(126976);
                    for (var d = "", f = 0; 4 > f; ++f)
                        H.H[f] && (d += '<div class="A' + (0 == f ? " _selected_" : "") + '" id="#tw-' + f + '"><span class=dan' + ~~H.$a[f] + ">" + ba[~~H.$a[f]] + "</span>" + (1800 < H.Ua[f] ? "R" + ~~H.Ua[f] : "") + "　" + H.H[f] + "</div>");
                    !1 === v.l[14] && (d += '<div class=A id="#tw-4">(' + I.Vb + " ON)</div>");
                    !0 === v.l[14] && (d += '<div class=A id="#tw-4">(' + I.Vb + " OFF)</div>");
                    A.Y(d, "font-size:75%;text-align:left;", 0);
                    break;
                case 1736718:
                    v.R(126976);
                    vb.ef();
                    break;
                case 1736714:
                    v.R(126976);
                    vb.df();
                    break;
                case 1183749:
                case 1183750:
                case 1183751:
                case 1183752:
                case 1183753:
                    e(a);
                    break;
                case 1277961:
                case 1277957:
                case 1277960:
                case 1212429:
                    c(a);
                    break;
                case 1736716:
                    if (3 != H.a)
                        break;
                    v.R(126976);
                    A.Y('<div class=A id="#edit-T">TRANING editor</div><div class=A id="#edit-M">MJLOG editor</div>', "", 0);
                    break;
                case 425995:
                    3 == H.a && A.o('<div style="text-align:left;font-size:75%;">' + I.Jc + "</div>");
                    break;
                case 495623:
                    if (u.sb) {
                        location.reload();
                        break
                    }
                case 11:
                    v.R(126976),
                    -1 != H.la && (u.sb || (delete u.log,
                    delete u.wg),
                    vb.fa(),
                    wb.fa(),
                    H.fa()),
                    v.l[14] = !1,
                    H.a = 0,
                    u.log ? (H.a = 3,
                    W.Z()) : u.wg ? H.a = 2 : (v.b.style.display = "none",
                    H.a = 1),
                    Eb(),
                    b ? D.o({
                        tag: "SPLASH"
                    }) : u.log ? (vb.zf(u.log),
                    v.K(),
                    S.K()) : u.wg ? (W.Cb(),
                    W.L({
                        tag: "HELO",
                        name: "NoName",
                        sx: "M"
                    })) : (W.Cb(),
                    D.o({
                        tag: 495623 == a ? "AUTOLOGIN" : "LOGIN"
                    }))
                }
            }
        }
    }(), qc = [2360326, "&times;", 2098693, "", 3670533, " " + I.Ub, 3671045, " " + I.Ub, 1572868, "", 3678213, "&times;", 3686405, "&times;", 1675268, "&times;", 2359816, I.Sd, 2360328, I.Rd, 2359814, I.Qd, 401414, "", 401415, "", 401418, "", 401419, "", 2359815, I.Td, 401412, "", 401416, "", 401417, "", 409610, "", 409609, "", 409608, "", 409614, "", 409613, "", 409612, "", 409606, "", 409607, "", 409604, "", 1574918, "", 1574917, "", 425995, "?", 495623, I.Pd, 1183749, "", 1183750, "", 1183751, "", 1183752, "", 1183753, "", 1277961, "", 1277957, "", 1277960, "", 1212429, "", 1802246, I.ce + ' <span style="font-size:25%;vertical-align:50%;">▼</span>', 1736714, I.de + ' <span style="font-size:25%;vertical-align:50%;">▼</span>', 1736718, I.ee + ' <span style="font-size:25%;vertical-align:50%;">▼</span>', 1736716, I.Od + ' <span style="font-size:25%;vertical-align:50%;">▼</span>'], rc = 0; rc < qc.length; rc += 2) {
        var sc = qc[rc + 0]
          , tc = kb("DIV", v.b, "tbl", {}, {
            position: "absolute"
        });
        v[sc] = kb("DIV", tc, "tbc" + (sc & 2097152 ? " bblink" : ""), {
            id: "m" + sc,
            innerHTML: qc[rc + 1]
        }, {
            textAlign: "center",
            verticalAlign: "middle",
            pointerEvents: "none"
        });
        sc & 262144 && (tc.style.display = "none");
        sc & 524288 && (v[sc].style.borderRadius = "0.6em")
    }
    var uc = p.check;
    v.l[1277961] = !(uc & 1);
    v.l[1277957] = !(uc & 2);
    v.l[1277960] = !(uc & 4);
    v.l[1212429] = !!(uc & 24);
    v[1572868].classList.add("cblink");
    var cc = function() {
        var a, e, c, b, f, d, k = kb("DIV", null, "nosel tbl ts0", {}, {
            position: "absolute",
            pointerEvents: "none",
            fontFamily: "sans-serif",
            textAlign: "right"
        });
        k.innerHTML = '<div class=tbc style="vertical-align:bottom;padding:0 0.1em;"></div>';
        return {
            Mf: function(a) {
                e = c = a
            },
            o: function(c, n, g) {
                k.firstChild.innerHTML = "";
                n || (n = Z.ok);
                cc.K(n, g);
                1 == H.a && (("BUTTON" == d.tagName ? d.parentNode : d instanceof ic ? Vb : d).appendChild(k),
                a = 0 > c ? -c + 1E3 : (c || (ia(H.pb, H.v) ? 3E3 : 5E3)) + e + 1E3,
                f = a - 1E3,
                b = a - 1E3,
                fc().count = function(d) {
                    if (0 > b)
                        return cc.Z(),
                        !1;
                    a -= d;
                    if (~~(1 + b / 1E3) == ~~(1 + a / 1E3))
                        return !0;
                    b = a;
                    0 <= a ? (0 > c ? lc(1E3 > a ? 0 : 3, 0, 0) : 3E3 > a && lc(7, 0, 0),
                    k.firstChild.innerText = ~~(a / 1E3)) : cc.Ue();
                    return !0
                }
                )
            },
            K: function(a, b) {
                a && (d = a);
                d instanceof ic && ~d.aa & 1 && (d = void 0);
                if (!d)
                    for (var c = 13; (d = R[1024 | c]) && !(d.u && R[1024 | c].aa & 1); --c)
                        ;
                d && (c = k.style,
                c.fontSize = ab.style.fontSize,
                d instanceof ic ? (c.left = ~~((b ? d.c : d.I) / t) + P.s.canvas.offsetLeft + "px",
                c.top = ~~((b ? d.h : d.J) / t) + "px",
                c.width = ~~(N[4] / t) + "px",
                c.height = ~~((U[4] + T[4]) / t) + "px") : (c.left = d.offsetLeft + "px",
                c.top = d.offsetTop + "px",
                c.width = (d.offsetWidth || parseInt(d.parentNode.style.width)) + "px",
                c.height = (d.offsetHeight || parseInt(d.parentNode.style.height)) + "px"))
            },
            Ue: function() {
                if (d instanceof ic)
                    H.gc(d.S);
                else if (d && d.name) {
                    if (!d.disabled)
                        D[d.name]()
                } else
                    cc.Z(),
                    nc.L(2360326)
            },
            cf: function() {
                e < c && (e += 1E3)
            },
            Lf: function() {
                return d
            },
            Z: function() {
                k.parentNode && (a < e && (e = 1E3 * ~~(0 > a ? 0 : a / 1E3)),
                f < a && cc.cf(),
                b = -1,
                k.parentNode.removeChild(k),
                d = void 0)
            }
        }
    }();
    for (var S = {
        b: kb("DIV", Vb, "", {}, {
            position: "absolute"
        }),
        K: function() {
            var a = S.b.style
              , e = N[4] / t
              , c = ~~Math.min(~~(2 * e), (Nb.offsetHeight - Ub / t) / 2);
            3 == H.a && (c = 0);
            if (jb || c < e || p.desktop & 1)
                S.b.style.display = "none";
            else
                switch (a.top = Vb.offsetTop + (R[81] + U[4] + T[4]) / t + "px",
                a.display = "",
                ~~p.cptype) {
                default:
                case 1:
                    var b = Math.min(2.25 * c, Nb.offsetHeight - Vb.offsetHeight);
                    a.width = Vb.offsetWidth + "px";
                    a.height = b + "px";
                    a.background = "linear-gradient(to bottom, rgba(0,0,0,1.0) 0%,rgba(0,0,0,1.0) 50%,rgba(24,24,24,1.0) 100%)";
                    a.borderTop = a.borderBottom = "solid 1px #222";
                    for (var f = 0; 13 >= f; ++f)
                        S[f].style.display = "none";
                    for (f = 20; 28 >= f; ++f)
                        a = S[f].style,
                        a.top = "0px",
                        a.width = 3 * e + "px",
                        a.height = b - c + "px",
                        a.display = "";
                    S.dc(0);
                    S[30].style.display = S[31].style.display = "none";
                    a = S[30].style;
                    a.width = "50%";
                    a.height = 1 * c + "px";
                    a.display = "";
                    a.marginTop = b - c + "px";
                    a = S[31].style;
                    a.width = "50%";
                    a.height = 1 * c + "px";
                    a.display = "";
                    a.marginTop = b - c + "px";
                    S[30].innerHTML = "&#12296;";
                    S[31].innerHTML = "&#12297;";
                    S[30].name = "CP_L";
                    S[31].name = "CP_R";
                    break;
                case 2:
                    b = 2 * e;
                    a.width = 7.5 * b + 1 + "px";
                    a.height = 2 * c + 1 + "px";
                    a.background = "";
                    a.borderTop = a.borderBottom = "none";
                    for (var d = V[32], d = d && d.length ? 3 * ~~(d.length / 3) + 1 : 13, f = 20; 28 >= f; ++f)
                        S[f].style.display = "none";
                    for (f = 0; 13 >= f; ++f)
                        a = S[f].style,
                        a.width = b + 1 + "px",
                        a.height = c + 1 + "px",
                        a.top = c * (f & 1) + "px",
                        a.left = R[80] / t + e * f + "px",
                        a.display = f < d ? "" : "none";
                    S[30].style.display = S[31].style.display = "none"
                }
        },
        Xa: function(a, e, c) {
            var b = R[1024 | a];
            if (b && (b.ma(e, c, !0),
            !(b.aa & 8))) {
                c = !!(b.aa & 1) && b.u;
                if (!S[20].style.display) {
                    var f = N[4] / t;
                    b.aa & 6 && S.hc(R[80] / t + f * (a + .5))
                }
                f = "";
                b.aa & 4 ? (c && cc.K(b),
                f = c ? "#060" : "#600") : b.aa & 2 && (f = c ? "#030" : "#300");
                !f && e & 6 || (S[0 + a].style.backgroundColor = S[24].style.backgroundColor = f)
            }
        },
        hc: function(a) {
            var e = N[4] / t;
            a < R[80] / t + 0 * e && (a += 3 * e);
            R[80] / t + 14 * e < a && (a -= 3 * e);
            a = (~~((a - R[80] / t) / e) + .5) * e + R[80] / t;
            for (var c = 20; 28 >= c; ++c)
                S[c].style.left = ~~(a + 3 * e * (c - 24 - .5)) + "px";
            return a
        },
        dc: function(a) {
            S.hc(~~(S[24].offsetLeft + S[24].offsetWidth / 2 + N[4] / t * a))
        }
    }, vc = 0; 13 >= vc; ++vc)
        S[vc] = kb("DIV", S.b, "", {}, {
            position: "absolute",
            border: "solid 1px #333",
            background: "linear-gradient(135deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 50%,rgba(255,255,255,0.15) 100%)"
        }),
        kb("DIV", S[vc], "", {}, {
            width: "50%",
            height: vc & 1 ? "25%" : "20%",
            backgroundColor: vc & 1 ? "#333" : "#555",
            pointerEvents: "none"
        });
    S[13].parentNode.removeChild(S[13]);
    for (vc = 20; 28 >= vc; ++vc)
        S[vc] = kb("DIV", S.b, "", {}, {
            position: "absolute",
            borderLeftStyle: "none",
            borderLeft: "solid 1px #333",
            background: "linear-gradient(135deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 50%,rgba(255,255,255,0.10) 100%)"
        }),
        kb("DIV", S[vc], "", {}, {
            position: "absolute",
            marginLeft: "50%",
            width: "1px",
            height: "50%",
            pointerEvents: "none",
            background: "linear-gradient(to bottom, rgba(195,0,0,1.0) 0%,rgba(255,0,0,1.0) 10%,rgba(0,0,0,0) 100%)"
        });
    S[28].style.borderRight = "solid 1px #333";
    S[30] = kb("BUTTON", S.b, "gray", {
        name: "CPda"
    }, {
        background: "none"
    });
    S[31] = kb("BUTTON", S.b, "gray", {
        name: "CPok"
    }, {
        background: "none"
    });
    S[30].style.borderRight = "none";
    Hb({
        JP: {
            le: "AudioContextが使用できない環境では音声設定は使用できません。"
        },
        EN: {
            le: "Audio settings cannot be used in an environment where AudioContext cannot be used."
        }
    });
    function lc() {}
    function wc() {}
    function xc() {}
    var hc = function() {
        var a = {};
        return function(e, c, b) {
            if (arguments.length) {
                for (var f in a)
                    if (a[f] == e && b - .008 < f && f < b + .008)
                        return;
                a[b] = e;
                lc(e, c, b)
            } else
                a = {}
        }
    }();
    r.AudioContext = r.AudioContext || r.webkitAudioContext;
    (function() {
        function a(a) {
            function b() {
                this.removeEventListener("touchend", b, !1);
                this.removeEventListener("mousedown", b, !1);
                a()
            }
            ta($a, "touchend", b);
            ta($a, "mousedown", b)
        }
        if (AudioContext) {
            var e = {}, c = new AudioContext, b, f, d = function() {
                lc = function(a, d, g) {
                    if ("0" != p.sevol && !Yb.$ && 0 != a && b)
                        if (e[a])
                            d = c.createBufferSource(),
                            d.buffer = e[a].Te,
                            d.connect(b),
                            d.start ? d.start(c.currentTime + g) : d.noteOn(c.currentTime + g);
                        else
                            switch (a) {
                            case 12:
                                lc(25, d, g);
                                lc(38, d, g);
                                break;
                            case 13:
                                lc(26, d, g);
                                lc(38, d, g);
                                break;
                            case 14:
                                lc(27, d, g);
                                lc(38, d, g);
                                break;
                            case 15:
                                lc(28, d, g);
                                lc(38, d, g);
                                break;
                            case 16:
                                lc(29, d, g);
                                lc(38, d, g);
                                break;
                            case 17:
                                lc(30, d, g);
                                lc(38, d, g);
                                break;
                            case 18:
                                lc(31, d, g);
                                lc(39, d, g);
                                break;
                            case 19:
                                lc(32, d, g);
                                lc(39, d, g);
                                break;
                            case 20:
                                lc(33, d, g);
                                lc(37, d, g);
                                break;
                            case 21:
                                lc(34, d, g);
                                lc(37, d, g);
                                break;
                            case 22:
                                lc(35, d, g);
                                lc(37, d, g);
                                break;
                            case 23:
                                lc(36, d, g),
                                lc(37, d, g)
                            }
                }
            }, k = 0, l = function(a, b) {
                ++k;
                var g = new XMLHttpRequest;
                g.open("GET", a, !0);
                g.responseType = "arraybuffer";
                g.onload = function() {
                    200 == this.status && c.decodeAudioData(this.response, function(a) {
                        for (var c in b)
                            e[b[c]].Te = a;
                        --k || d()
                    })
                }
                ;
                g.send()
            };
            bb && kb("AUDIO", ab, "", {}, {
                position: "absolute",
                display: "none"
            });
            wc = function() {
                b.gain.value = ~~(p.sevol || 5) / 10
            }
            ;
            a(function() {
                var a = ~~(p.sevol || 5) / 10;
                b = c.createGain ? c.createGain() : c.createGainNode();
                b.connect(c.destination);
                b.gain.value = a;
                f = c.createGain ? c.createGain() : c.createGainNode();
                f.connect(c.destination);
                f.gain.value = 0
            });
            var n = function() {
                var a = {}, b;
                for (b in e)
                    (a[e[b].url] = a[e[b].url] || []).push(b);
                for (var d in a)
                    l(d, a[d])
            };
            xc = function() {
                var a = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 25, 27, 29, 31, 33, 35, 26, 28, 30, 32, 34, 36, 37, 38, 39, 24, 40, 41], b;
                for (b in a)
                    e[a[b]] = {
                        Te: void 0,
                        url: "https://cdn.tenhou.net/3/res/snd/" + Va(2, a[b]) + ".wav"
                    };
                e[40].url = e[41].url = e[1].url;
                var d = p.se;
                ob(d) ? Sa(d, function(a) {
                    try {
                        d = JSON.parse(a)
                    } catch (pa) {
                        alert(pa)
                    }
                    for (var b in d.se)
                        e[b] && (e[b].url = d.se[b].url);
                    n()
                }, function(a) {
                    console.log("err", a);
                    n()
                }) : n()
            }
            ;
            xc()
        } else {
            var g = {};
            g[1] = g[8] = g[9] = g[10] = g[12] = g[13] = g[14] = g[15] = g[16] = g[17] = g[18] = g[19] = g[20] = g[21] = g[22] = g[23] = g[24] = 1;
            for (var h = 5, m = function() {
                this.currentTime && (this.removeEventListener("timeupdate", arguments.callee, !1),
                this.pause(),
                ta(this, "timeupdate", function() {
                    this.endTime < this.currentTime && (this.pause(),
                    this.fc = 0)
                }),
                --h || (lc = function(a, b, d) {
                    if (40 == a || 41 == a)
                        a = 1;
                    "0" == p.sevol || Yb.$ || 0 == a || setTimeout(function() {
                        for (var b = 0; 5 > b && (h = (h + 1) % 5,
                        !C[h].paused && g[C[h].fc] && !g[a]); ++b)
                            ;
                        5 != b && (b = C[h],
                        b.paused || b.pause(),
                        b.currentTime = 2 * a,
                        b.endTime = 2 * a + (1 == a ? 3 : 1),
                        b.fc = a,
                        b.play())
                    }, 1E3 * d)
                }
                ))
            }, y = ~~(p.sevol || 5) / 10, C = [], w = 0; 5 > w; ++w)
                C[w] = kb("AUDIO", ab, "", {
                    src: "https://cdn.tenhou.net/3/res/snd/se.m4a"
                }, {
                    position: "absolute",
                    display: "none"
                }),
                C[w].endTime = 0,
                C[w].fc = 0,
                C[w].volume = y,
                ta(C[w], "timeupdate", m);
            wc = function() {
                for (var a = ~~(p.sevol || 5) / 10, b = 0; b < C.length; ++b)
                    C[b].volume = a
            }
            ;
            a(function() {
                for (var a = 0; a < C.length; ++a)
                    C[a].play()
            });
            xc = function() {
                p.se && A.o(I.le)
            }
        }
    }
    )();
    if (r.gr && r.gr.eworx && r.gr.eworx.AVAudioSessionAdapter) {
        var yc = gr.eworx.AVAudioSessionAdapter;
        (new yc).setCategoryWithOptions(yc.Categories.PLAYBACK, yc.CategoryOptions.MIX_WITH_OTHERS, function() {}, function() {})
    }
    ;Hb({
        JP: {
            Re: " ポン カン チー カン カン ロン ツモ リーチ  キタ パオ".split(" ")
        },
        EN: {
            Re: " Pon Kan Chii Kan Kan Ron Tsumo Riichi  Kita Pao".split(" ")
        }
    });
    var Zb = function() {
        var a = {
            M: [0, 12, 14, 16, 14, 14, 20, 22, 18, 0, 9, 0],
            F: [0, 13, 15, 17, 15, 15, 21, 23, 19, 0, 9, 0]
        };
        a[""] = a.C = a.M;
        var e = {};
        return {
            b: kb("DIV", Nb, "", {}, {
                position: "absolute",
                pointerEvents: "none",
                top: "0px"
            }),
            O: function(c, b, f) {
                if (!Yb.$) {
                    var d = I.Re[b];
                    if (d) {
                        var k = 10 * -c
                          , l = kb("SPAN", Zb.b, "tsv nosel", {
                            innerHTML: d
                        }, {
                            position: "absolute",
                            fontWeight: "bold",
                            color: "#FFF",
                            opacity: 0,
                            whiteSpace: "nowrap"
                        })
                          , n = Vb.offsetWidth / 40
                          , g = ~~(R[64 + 2 * c] / t) + Vb.offsetLeft + P.s.canvas.offsetLeft
                          , h = ~~(R[65 + 2 * c] / t) + Vb.offsetTop
                          , m = l.style
                          , y = Za++;
                        f & 1 && (e[y] = !0);
                        ~f & 2 && (m.display = "none");
                        fc()[y] = function(d) {
                            if (!l.parentNode)
                                return 0;
                            if (0 > k)
                                return k += d,
                                0 < k && (k = 0),
                                1;
                            0 == k && f & 4 && (lc(a[H.Wa[c]][b], c, 0),
                            ++k);
                            k += d;
                            if (250 > k)
                                return m.opacity = k / 250,
                                m.fontSize = n * (4 + (250 - k) / 250 * 4) + "px",
                                m.left = g - l.offsetWidth / 2 + "px",
                                m.top = h - l.offsetHeight / 2 + "px",
                                1;
                            if (750 > k) {
                                if (1 == m.opacity)
                                    return 1;
                                m.opacity = 1;
                                m.fontSize = 4 * n + "px";
                                m.left = g - l.offsetWidth / 2 + "px";
                                m.top = h - l.offsetHeight / 2 + "px";
                                return 1
                            }
                            return e[y] ? (k -= d,
                            1) : 1250 > k ? (m.opacity = (1250 - k) / 500,
                            1) : (l.parentNode.removeChild(l),
                            0)
                        }
                    }
                }
            },
            fa: function() {
                for (; Zb.b.firstChild; )
                    Zb.b.removeChild(Zb.b.firstChild)
            },
            ac: function() {
                e = {}
            }
        }
    }();
    var zc = function() {
        function a() {
            e = 0
        }
        var e = 0, c;
        ua(r, {
            touchstart: a,
            touchend: a,
            touchcancel: a,
            mousedown: a,
            mouseup: a,
            mouseover: a,
            mouseout: a,
            keydown: a,
            blur: a
        });
        return {
            Rf: function(a) {
                jb && 2 == H.a && (e = 0);
                e || (e = a);
                a = 18E5 - (a - e);
                0 > a && (location.reload(),
                e = a = 0);
                2E4 > a ? (c || (c = kb("DIV", Vb, "ts0", {}, {
                    position: "absolute",
                    left: "0px",
                    top: "0px"
                })),
                c.innerText = "ENTERING POWERSAVING MODE " + ~~(a / 1E3)) : c && (c.parentNode.removeChild(c),
                c = null)
            }
        }
    }();
    var vb = function() {
        function a(b) {
            if (b) {
                var d = /<([a-zA-Z0-9]+)[^>]*>|[^<]+|<\/(.*)>/g
                  , c = d.exec(b);
                if (c) {
                    var g = {};
                    g.tag = c[1];
                    for (var e = / ([a-zA-Z0-9]+)="([^"]*)"/g, f; f = e.exec(c[0]); )
                        g[f[1]] = f[2];
                    for (; (c = d.exec(b)) && !c[2]; )
                        g.childNodes || (g.childNodes = []),
                        g.childNodes.push(c[1] ? a(c[0]) : ~~c[0]);
                    return g
                }
            }
        }
        function e(a) {
            for (var b = -1, d = k; 0 <= --d; ) {
                switch (f[d].tag) {
                case "INIT":
                    return d + 1;
                case "N":
                    a = f[d][2];
                    if (2 == a || 4 == a || 5 == a)
                        b = -1;
                    break;
                case "D":
                case "E":
                case "F":
                case "G":
                    if (-1 != b)
                        return b;
                    break;
                case "T":
                case "U":
                case "V":
                case "W":
                    a || (b = d)
                }
                a = !1
            }
            return -1
        }
        function c(b, c) {
            c && (f = a(c).childNodes);
            if (c && f) {
                for (var g = !1, e = 0; 40 > e; ++e) {
                    var h = p["log" + e];
                    try {
                        h = JSON.parse(h)
                    } catch (pa) {
                        continue
                    }
                    if (h.log == b) {
                        g = !0;
                        break
                    }
                }
                g || (v.l[14] = void 0);
                for (var n, e = 0; e < f.length; ++e) {
                    switch (f[e].tag) {
                    case "SHUFFLE":
                        n = K.Gf(f[e].seed);
                        break;
                    case "GO":
                        W.sa(f[e])
                    }
                    if ("UN" == f[e].tag)
                        break
                }
                for (d = []; e < f.length; ++e) {
                    var h = f[e]
                      , l = [0, 0, 0, 0]
                      , z = e;
                    switch (h.tag) {
                    case "INIT":
                        d.push(e);
                        break;
                    case "RYUUKYOKU":
                        if ("ron3" == h.type)
                            for (g = 0; 4 > g; ++g)
                                h["hai" + g] && (l[g] = 6);
                        break;
                    case "AGARI":
                        for (; h = f[e],
                        l[~~h.who] = h.who == h.fromWho ? 7 : 6,
                        h.paoWho && (l[~~h.paoWho] = 11),
                        e + 1 < f.length && "AGARI" == f[e + 1].tag; ++e)
                            ;
                        break;
                    case "N":
                        oc(h);
                        l[~~h.who] = h[2];
                        break;
                    default:
                        vb.vb(h)
                    }
                    if (l[0] || l[1] || l[2] || l[3])
                        f.splice(z, 0, {
                            tag: "VOICE",
                            type: l
                        }),
                        ++e
                }
                if (n)
                    for (e = 0; e < d.length; ++e) {
                        var h = f[d[e]], g = q(h.seed), g = 6 == g[3] && 0 == g[4], J;
                        n && (J = h[5] = n(~~h.oya, g));
                        if (J)
                            if (g) {
                                if (H.v & 16)
                                    for (E = 0; 6 > E; ++E)
                                        J[E] |= 1280;
                                for (g = 0; g < (H.v & 16 ? 3 : 4); ++g) {
                                    for (E = 0; 4 > E; ++E)
                                        J[34 * g + E] |= 1280;
                                    for (; 34 > E; ++E)
                                        J[34 * g + E] |= g + 1 << 8
                                }
                                for (var l = 0, E = d[e] + 1; E < f.length && "INIT" != f[E].tag; ++E)
                                    h = f[E],
                                    "N" != h.tag || 4 != h[2] && 2 != h[2] && 5 != h[2] && 10 != h[2] || (g = ~~h.who,
                                    J[l / 4 * 34 + l % 4 ^ 1] |= g + 1 << 8,
                                    ++l)
                            } else {
                                for (var da = !1, z = 13 * (H.v & 16 ? 3 : 4), l = 0, g = -1, E = d[e] + 1; E < f.length && "INIT" != f[E].tag; ++E)
                                    switch (h = f[E],
                                    h.tag) {
                                    case "N":
                                        da = 4 == h[2] || 2 == h[2] || 5 == h[2] || 10 == h[2];
                                        break;
                                    case "T":
                                    case "U":
                                    case "V":
                                    case "W":
                                        g = h.tag.charCodeAt(0) - 84,
                                        J[da ? l++ ^ 1 : J.length - 1 - z++] |= g + 1 << 8,
                                        da = !1
                                    }
                                for (h = H.v & 16 ? 3 : 4; z < J.length - 14 - l; ++z)
                                    g = (g + 1) % h,
                                    J[J.length - 1 - z] |= g + 1 << 8;
                                for (; z < J.length; ++z)
                                    J[J.length - 1 - z] |= 1280
                            }
                    }
                for (e = 0; e < f.length; ++e)
                    wb.Gb(u.tw, f[e]);
                for (e = 0; "INIT" != f[e].tag; ++e)
                    switch (f[e].tag) {
                    case "BYE":
                    case "SHUFFLE":
                    case "GO":
                        break;
                    case "UN":
                    case "TAIKYOKU":
                        W.sa(f[e]);
                        break;
                    default:
                        throw console.log(e, f[e]);
                    }
                k = d[~~u.ts];
                delete u.ts
            } else
                A.o(I[2003], 1, function() {
                    u.sb ? location.reload() : delete u.log
                })
        }
        function b(a) {
            var b = a.split("-");
            if (4 != b.length)
                return a;
            if (120 == b[3].charCodeAt(0)) {
                a = parseInt(b[3].substr(1, 4), 16);
                var d = parseInt(b[3].substr(5, 4), 16)
                  , c = parseInt(b[3].substr(9, 4), 16)
                  , g = 0;
                "2010041111gm" <= b[0] && (g = ~~("3" + b[0].substr(4, 6)) % (34 - ~~b[0].substr(9, 1) - 1));
                b[3] = Va(4, (a ^ d ^ n[g + 0]).toString(16)) + Va(4, (d ^ n[g + 0] ^ c ^ n[g + 1]).toString(16))
            }
            return b.join("-")
        }
        var f, d, k, l = {
            D: !0,
            E: !0,
            F: !0,
            G: !0,
            T: !0,
            U: !0,
            V: !0,
            W: !0,
            N: !0,
            RYUUKYOKU: !0,
            VOICE: !0
        }, n = [22136, 52719, 55146, 42104, 59591, 46934, 9248, 28891, 49597, 52974, 62844, 4015, 18311, 50730, 43056, 17939, 64838, 38145, 27008, 39128, 35652, 63407, 65535, 23473, 35164, 55230, 27536, 4386, 64920, 29075, 42617, 17294, 18868, 2081];
        return {
            vb: function(a) {
                var b = a.tag;
                if (1 < b.length) {
                    var d = a.tag.charCodeAt(1);
                    48 <= d && 57 >= d && (a[0] = ~~b.substr(1),
                    a.tag = b.substr(0, 1))
                }
                return a
            },
            zf: function(a) {
                a = b(a);
                Sa("https://tenhou.net/0/log/?" + a, function(b) {
                    c(a, b)
                }, function() {
                    c(a)
                })
            },
            Ra: function(a) {
                if (f) {
                    if (0 == arguments.length) {
                        for (var b = k; 0 <= b && "INIT" != f[b].tag; --b)
                            ;
                        if (0 <= b)
                            return vb.We(f, b, k - b)
                    } else if (0 >= a) {
                        var c = e(0 > a);
                        if (-1 == c)
                            return;
                        if (0 > a && k == c + 1)
                            for (c = c - 1 == d[0] ? f.length - 1 : c - 2; "AGARI" == f[c - 1].tag; --c)
                                ;
                        for (var g = [], b = 0; b < d.length && !(c < d[b]); ++b)
                            ;
                        for (var n = d[b - 1], b = n; b < c; ++b)
                            g.push(f[b]);
                        W.sa(vb.We(f, n, c - n));
                        k = c;
                        1 == c - n && Ac.set()
                    } else if (Z.ok && !Z.ok.disabled) {
                        D.ok();
                        return
                    }
                    if (!(f.length <= k))
                        for (Yb.Ha(),
                        b = !1; !b && k < f.length; ++k) {
                            switch (f[k].tag) {
                            case "REACH":
                                2 != f[k].step && (b = !0);
                                break;
                            case "AGARI":
                                k + 1 < f.length && "AGARI" != f[k + 1].tag && (b = !0);
                                break;
                            default:
                                l[f[k].tag] && (b = !0)
                            }
                            W.sa(f[k])
                        }
                }
            },
            fa: function() {
                k = 0;
                f = void 0
            },
            ef: function(a, b) {
                if (f && f.length)
                    if (a)
                        k = ~~b + 1,
                        vb.Ra(0);
                    else {
                        for (var d = -1, c = k; 0 <= c && (-1 == d && "T" == f[c].tag && (d = c),
                        "INIT" != f[c].tag); --c)
                            ;
                        if (!(0 > c)) {
                            var g = ""
                              , e = 0;
                            for (++c; c < f.length; ++c) {
                                json = f[c];
                                if ("INIT" == json.tag)
                                    break;
                                "T" == json.tag && (g += '<div class="A' + (c == d ? " _selected_" : "") + '" id="#tj-' + c + '">' + ++e + "巡目</div>")
                            }
                            A.Y(g, "", 0)
                        }
                    }
            },
            df: function(a, b) {
                if (f && f.length)
                    if (a)
                        k = ~~b + 1,
                        vb.Ra(0);
                    else {
                        for (var d = 0, c = k; 0 <= c; --c)
                            if ("INIT" == f[c].tag) {
                                d = c;
                                break
                            }
                        for (var g = "", e = -1, h = "", c = 0; c < f.length; ++c) {
                            var n = f[c];
                            switch (n.tag) {
                            case "INIT":
                                e = q(n.seed);
                                h = e[0];
                                h = "東南西北".substr(~~(h / 4), 1) + (h % 4 + 1) + x("局") + e[1] + x("本場");
                                e = c;
                                break;
                            case "RYUUKYOKU":
                                var l = ea[n.type]
                                  , g = g + ('<div class="A' + (e == d ? " _selected_" : "") + '" id="#ts-' + e + '">' + h + "<br>流局" + (l ? " " + l : "") + "</div>");
                                break;
                            case "AGARI":
                                var l = ~~n.who
                                  , E = ~~n.fromWho
                                  , n = q(n.ten)
                                  , g = g + ('<div class="A' + (e == d ? " _selected_" : "") + '" id="#ts-' + e + '">' + h + "<br>" + x(l == E ? "ツモ:" : "ロン:") + H.H[l] + " " + n[1] + (l != E ? "<br>" + x("放銃:") + H.H[E] : "") + "</div>")
                            }
                        }
                        A.Y(g, "font-size:70%;text-align:left;", 0)
                    }
            },
            Hb: function(a, b) {
                var d = ~~b;
                if (4 == d)
                    v.l[14] = !v.l[14];
                else if (4 > d) {
                    for (var c = 0; c < f.length; ++c)
                        wb.Gb(d, f[c]);
                    u.tw = (u.tw + d) % 4
                }
                for (c = 0; c < f.length; ++c)
                    if ("UN" == f[c].tag) {
                        W.sa(f[c]);
                        Wb.X();
                        vb.Ra(0);
                        break
                    }
            },
            We: function(a, b, d) {
                var c = a[b];
                if ("INIT" != c.tag)
                    return null;
                for (var g = [], e = q(c.hai0); e.length; )
                    g[e.pop()] = 1;
                for (e = q(c.hai1); e.length; )
                    g[e.pop()] = 2;
                for (e = q(c.hai2); e.length; )
                    g[e.pop()] = 3;
                for (e = q(c.hai3); e.length; )
                    g[e.pop()] = 4;
                for (var h = q(c.seed), f = q(c.ten), e = q(c.chip), m = ~~c.oya, n = c[5], k = [[], [], [], []], l = [[], [], [], []], Xa = -1; b < a.length && d; ++b,
                --d)
                    switch (c = a[b],
                    c.tag) {
                    case "D":
                    case "E":
                    case "F":
                    case "G":
                        var O = c.tag.charCodeAt(0) - 68
                          , Fa = c[0] == Xa
                          , Xa = c[0];
                        g[Xa] = 0;
                        Fa && l[O].push(254);
                        l[O].push(Xa);
                        break;
                    case "T":
                    case "U":
                    case "V":
                    case "W":
                        O = c.tag.charCodeAt(0) - 84;
                        Xa = c[0];
                        g[Xa] = O + 1;
                        break;
                    case "N":
                        for (var Xa = -1, O = ~~c.who, Fa = ~~c.m, mb = c[3], Ib = c[0], Ya = 0; Ya < Ib.length; ++Ya)
                            g[Ib[Ya]] = 0;
                        5 != c[2] && 4 != c[2] && 10 != c[2] && (mb = l[(O + mb) % 4],
                        mb.pop(),
                        254 == mb[mb.length - 1] && mb.pop());
                        if (5 == c[2]) {
                            for (Ya = 0; Ya < k[O].length && k[O][Ya] != (Fa ^ 24); ++Ya)
                                ;
                            if (Ya == k[O].length)
                                throw console.log("Log2ReiniXML INVALID KAKAN");
                            k[O][Ya] = Fa
                        } else
                            k[O].unshift(Fa);
                        break;
                    case "REACH":
                        O = ~~c.who;
                        Fa = ~~c.step;
                        2 == Fa ? (c = q(c.ten),
                        c.length ? f = c : f[O] -= 10) : (1 == Fa ? l[O].push(255) : (l[O].push(255),
                        f[O] -= 10),
                        ++h[2]);
                        break;
                    case "DORA":
                        h.push(~~c.hai)
                    }
                c = a[b];
                "AGARI" == c.tag && c.who == c.fromWho && (g[~~c.machi] = 0);
                a = {
                    tag: "REINIT",
                    seed: "" + h,
                    ten: "" + f,
                    oya: m,
                    hai0: [],
                    hai1: [],
                    hai2: [],
                    hai3: []
                };
                for (b = 0; 136 > b; ++b)
                    g[b] && a["hai" + (g[b] - 1 & 3)].push(b);
                n && (a[5] = n);
                e.length && (a.chip = e);
                for (O = 0; 4 > O; ++O)
                    k[O].length && (a["m" + O] = k[O]);
                for (O = 0; 4 > O; ++O)
                    l[O].length && (a["kawa" + O] = l[O]);
                return a
            }
        }
    }();
    var Bc = {}
      , M = function() {
        function a(a, c) {
            var d;
            if (2 == a && 99 == c)
                return M[4195];
            var e = 0
              , g = M[4096 | 100 * a + c];
            g || (g = M[4096 | 100 * a + c] = ua(new Image, {
                load: P.Ib,
                error: function() {
                    pb("IMAGE ONERROR", e++, this.src);
                    10 > e && setTimeout(function() {
                        g.src = g.src
                    }, 2E3)
                }
            }));
            d = d || (99 == c ? "" : b);
            var h = N[a];
            1 == a && 99 == c && (h = N[0]);
            8 == a && 99 == c && (h = N[0]);
            d = qa[11]() + "/5/img/vieww" + a + Va(2, c) + Va(3, h) + d + ".png";
            h && g.src != d && (g.src = d);
            return g
        }
        function e(a, b, c) {
            for (var d = 3; d < arguments.length; ++d) {
                var g = arguments[d]
                  , e = g >> 8 & 7;
                M[g] = va(M[g] || {}, {
                    Ba: a,
                    cb: b % 10 * N[e],
                    eb: (U[e] + T[e]) * ~~(b / 10),
                    ia: N[e],
                    ya: U[e] + T[e],
                    offsetX: 0,
                    offsetY: 0,
                    Xe: c
                });
                if (5 == e || 7 == e)
                    M[g].offsetY += U[e % 4] + T[e % 4] - (U[e] + T[e]);
                5 == e && (M[g].offsetX += N[e % 4] - N[e])
            }
        }
        function c(a, b, c, e, g) {
            for (var d = 5; d < arguments.length; ++d) {
                var f = arguments[d]
                  , n = f >> 8 & 7;
                Bc[f] = va(Bc[f] || {}, {
                    Ba: a,
                    cb: b,
                    eb: c,
                    ia: e,
                    ya: g,
                    offsetX: Cc[n],
                    offsetY: U[n] + T[n] - g
                });
                if (5 == n || 7 == n)
                    Bc[f].offsetY += U[n % 4] + T[n % 4] - (U[n] + T[n]);
                5 == n && (Bc[f].offsetX += N[n % 4] - N[n])
            }
        }
        var b, f;
        return {
            lb: ua(new Image, {
                load: Wb.X,
                error: function() {
                    pb("IMAGE ONERROR", this.src)
                }
            }),
            Nf: function() {
                f = "000100070";
                nb(p.backgroundImage) ? (u.rb = !1,
                Wb.s.canvas.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.2) 100%),url('" + p.backgroundImage + "') center center /cover no-repeat") : (p.backgroundImage && p.backgroundImage.match(/^([0-9]{9})$/) && (f = p.backgroundImage),
                u.rb = !0,
                Wb.s.canvas.style.background = "");
                var d = u.rb ? 0 : 9
                  , k = qa[11]() + "/3/img/bg" + d + Va(4, ~~Tb) + Va(4, ~~Ub) + f + ".png";
                0 == d && "000100070" == f && (Wb.s.canvas.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.2) 100%),url('https://cdn.tenhou.net/3/res/img/bg0_1280x0960h000s100v070q040.jpg') center center /cover no-repeat",
                k = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
                M.lb.src != k && (M.lb.src = k);
                b = "000000ffffff000000";
                p.msk && p.msk.match(/^([0-9a-f]{6})$/) && (b = RegExp.$1 + b.substr(6));
                e(a(5, 48), 0, -1, 1328);
                e(a(7, 48), 0, -1, 1840);
                for (k = 0; 4 >= k; ++k) {
                    for (var d = a(k, 0), l = 0; 34 > l; ++l) {
                        var n = 10 * (~~(l / 9) + 1) + l % 9 + 1;
                        e(d, n - 10, l, k << 8 | n)
                    }
                    e(d, 0, 4, k << 8 | 51);
                    e(d, 10, 13, k << 8 | 52);
                    e(d, 20, 22, k << 8 | 53)
                }
                d = M[4096];
                e(d, 30, -1, 48, 560);
                e(d, 38, -1, 49, 561);
                e(d, 39, -1, 50, 562);
                d = M[4196];
                e(d, 30, -1, 304, 816);
                e(d, 38, -1, 305, 817);
                e(d, 39, -1, 306, 818);
                d = M[4296];
                e(d, 30, -1, 1584);
                e(d, 38, -1, 60, 572);
                d = M[4396];
                e(d, 38, -1, 316, 828);
                d = M[4496];
                e(d, 30, -1, 1084);
                e(d, 38, -1, 1073);
                e(d, 39, -1, 1074);
                for (k = 0; 8 > k; k += 2) {
                    d = a(k, 99);
                    l = N[k] + T[k];
                    n = 0;
                    if (0 == k || 2 == k)
                        n = ~~(47 * l / 43);
                    if (4 == k || 6 == k)
                        n = ~~(24 * l / 43);
                    var g = ~~(T[k] / 12 * 5);
                    c(d, 0, 0, l - Cc[k], n, k << 8 | 0);
                    c(d, 0, n - g, 2 * g, g, k << 8 | 3, k << 8 | 2)
                }
                var k = U[1] + T[1], l = 2 * ~~(47 * (N[0] + T[0]) / 43), n = T[0] / 12, g = T[0] + ~~(5 * n), h, d = a(8, 99);
                h = 0;
                c(d, 0, h + l - U[0], g, U[0], 1, 513);
                c(d, 0, h + ~~(17 * n), g, U[0], 5, 517);
                c(d, 0, h, g, U[0] + ~~(12 * n), 4, 516);
                c(d, 0, h + l - U[1], g, U[1], 257, 769, 1281, 1793);
                c(d, 0, h + ~~(17 * n), g, U[1], 261, 773, 1285, 1797);
                c(d, 0, h, g, U[1] + ~~(12 * n), 260, 772, 1284, 1796);
                d = a(1, 99);
                h = 0;
                c(d, 0, h, g, k, 256, 768, 1280, 1792);
                c(d, 0, h + k - ~~(5 * n), 2 * ~~(5 * n), ~~(5 * n), 259, 771, 1283, 1795, 258, 770, 1282, 1794)
            },
            xa: function(a, b, c, e) {
                var d = M[4096 | 100 * c];
                if (d.complete || !d.height) {
                    var h = N[c]
                      , f = U[c] + T[c]
                      , n = h * (arguments.length - 4)
                      , k = 1 * f;
                    a.innerHTML = b + "<canvas width=" + n + " height=" + k + ' style="width:' + n / t + "px;height:" + k / t + 'px;pointer-events:none;vertical-align:middle;"></canvas>';
                    n = a.getElementsByTagName("CANVAS")[0].getContext("2d");
                    n.clearRect(0, 0, n.canvas.width + 1, n.canvas.height + 1);
                    n.globalAlpha = e;
                    for (k = 4; k < arguments.length; ++k) {
                        var l = arguments[k], B;
                        K.Fb(l) ? (B = 0,
                        l = ~~(l / 4 / 9)) : (l = K.bb[l],
                        48 == l && (l = 40),
                        B = l % 10,
                        l = ~~(l / 10) - 1);
                        n.drawImage(d, B * h, l * f, h, f, h * (k - 4), 0, h, f)
                    }
                }
            }
        }
    }();
    var wb = function() {
        function a(a, b) {
            var c = b.split(",");
            8 == c.length ? c = [c[(0 + a) % 4 * 2 + 0], c[(0 + a) % 4 * 2 + 1], c[(1 + a) % 4 * 2 + 0], c[(1 + a) % 4 * 2 + 1], c[(2 + a) % 4 * 2 + 0], c[(2 + a) % 4 * 2 + 1], c[(3 + a) % 4 * 2 + 0], c[(3 + a) % 4 * 2 + 1]] : 16 == c.length && (c = [c[(0 + a) % 4 * 2 + 0], c[(0 + a) % 4 * 2 + 1], c[(1 + a) % 4 * 2 + 0], c[(1 + a) % 4 * 2 + 1], c[(2 + a) % 4 * 2 + 0], c[(2 + a) % 4 * 2 + 1], c[(3 + a) % 4 * 2 + 0], c[(3 + a) % 4 * 2 + 1], c[(0 + a) % 4 * 2 + 8], c[(0 + a) % 4 * 2 + 9], c[(1 + a) % 4 * 2 + 8], c[(1 + a) % 4 * 2 + 9], c[(2 + a) % 4 * 2 + 8], c[(2 + a) % 4 * 2 + 9], c[(3 + a) % 4 * 2 + 8], c[(3 + a) % 4 * 2 + 9]]);
            return c.join(",")
        }
        function e(a) {
            if (!f.length)
                return 0;
            c += a;
            if (c < b)
                return 1;
            a = f.shift();
            a.tag ? W.sa(a) : b += a;
            return 1
        }
        var c, b, f = [], d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], k = ["", "", "", ""], l = ["", "", "", ""];
        return {
            Gb: function(b, c) {
                if (!b)
                    return c;
                var d = c.tag
                  , e = d.charCodeAt(1);
                if (1 == d.length || 48 <= e && 57 >= e)
                    e = d.charCodeAt(0),
                    78 == e ? c.who = (4 + ~~c.who - b) % 4 : 68 <= e && 71 >= e ? c.tag = "DEFG".substr((4 + (e - 68) - b) % 4, 1) + d.substr(1) : 84 <= e && 87 >= e && (c.tag = "TUVW".substr((4 + (e - 84) - b) % 4, 1) + d.substr(1));
                else
                    switch (d) {
                    case "UN":
                        d = [c.n0, c.n1, c.n2, c.n3];
                        c.n0 = d[(b + 0) % 4];
                        c.n1 = d[(b + 1) % 4];
                        c.n2 = d[(b + 2) % 4];
                        c.n3 = d[(b + 3) % 4];
                        c.dan && (d = c.dan.split(","),
                        c.dan = d.concat(d.splice(0, b)).join(","));
                        c.rate && (d = c.rate.split(","),
                        c.rate = d.concat(d.splice(0, b)).join(","));
                        c.sx && (d = c.sx.split(","),
                        c.sx = d.concat(d.splice(0, b)).join(","));
                        c.rc && (d = c.rc.split(","),
                        c.rc = d.concat(d.splice(0, b)).join(","));
                        c.gold && (d = c.gold.split(","),
                        c.gold = d.concat(d.splice(0, b)).join(","));
                        break;
                    case "TAIKYOKU":
                    case "KANSEN":
                        c.oya = (4 + ~~c.oya - b) % 4;
                        break;
                    case "REINIT":
                        d = [c.m0, c.m1, c.m2, c.m3],
                        c.m0 = d[(b + 0) % 4],
                        c.m1 = d[(b + 1) % 4],
                        c.m2 = d[(b + 2) % 4],
                        c.m3 = d[(b + 3) % 4],
                        d = [c.kawa0, c.kawa1, c.kawa2, c.kawa3],
                        c.kawa0 = d[(b + 0) % 4],
                        c.kawa1 = d[(b + 1) % 4],
                        c.kawa2 = d[(b + 2) % 4],
                        c.kawa3 = d[(b + 3) % 4];
                    case "INIT":
                        c.oya = (4 + ~~c.oya - b) % 4;
                        d = [c.hai0, c.hai1, c.hai2, c.hai3];
                        c.hai0 = d[(b + 0) % 4];
                        c.hai1 = d[(b + 1) % 4];
                        c.hai2 = d[(b + 2) % 4];
                        c.hai3 = d[(b + 3) % 4];
                        d = c.ten.split(",");
                        c.ten = d.concat(d.splice(0, b)).join(",");
                        void 0 != c.chip && (d = c.chip.split(","),
                        c.chip = d.concat(d.splice(0, b)).join(","));
                        break;
                    case "REACH":
                        c.who = (4 + ~~c.who - b) % 4;
                        c.ten && (d = c.ten.split(","),
                        c.ten = d.concat(d.splice(0, b)).join(","));
                        break;
                    case "RYUUKYOKU":
                        d = [c.hai0, c.hai1, c.hai2, c.hai3];
                        c.hai0 = d[(b + 0) % 4];
                        c.hai1 = d[(b + 1) % 4];
                        c.hai2 = d[(b + 2) % 4];
                        c.hai3 = d[(b + 3) % 4];
                        c.sc = a(b, c.sc);
                        void 0 != c.owari && (c.owari = a(b, c.owari));
                        break;
                    case "AGARI":
                        c.who = (4 + ~~c.who - b) % 4;
                        c.fromWho = (4 + ~~c.fromWho - b) % 4;
                        void 0 != c.paoWho && (c.paoWho = (4 + ~~c.paoWho - b) % 4);
                        c.sc = a(b, c.sc);
                        void 0 != c.owari && (c.owari = a(b, c.owari));
                        break;
                    case "VOICE":
                        d = c.type;
                        c.type = d.concat(d.splice(0, b));
                        break;
                    case "BYE":
                        c.who = (4 + ~~c.who - b) % 4
                    }
                if (c.childNodes)
                    for (d = c.childNodes,
                    e = 0; e < d.length; ++e)
                        d[e].tag && wb.Gb(b, d[e]);
                return c
            },
            sf: function(a) {
                if (a = a.childNodes) {
                    Yb.$ = !0;
                    for (var b = 0; b < a.length; ++b)
                        W.sa(vb.vb(a[b]));
                    W.sa({
                        tag: "INITBYLOG"
                    })
                } else
                    Yb.$ = !1;
                return 1
            },
            xf: function(a) {
                fc().Vf || (c = b = 0,
                fc().Vf = e);
                a = a.childNodes;
                for (var d = 0; d < a.length; ++d)
                    a[d].tag && vb.vb(a[d]);
                Array.prototype.push.apply(f, a);
                return 1
            },
            Ff: function() {
                for (var a = 0; a < d.length; ++a)
                    d[a] = 0;
                for (a = 0; 4 > a; ++a)
                    l[a] = k[a] = ""
            },
            fa: function() {
                for (; f.length; )
                    f.pop()
            },
            Hb: function(a, b) {
                if (a) {
                    var c = ~~b;
                    4 == c ? v.l[14] = !v.l[14] : 4 > c && (u.tw = (u.tw + c) % 4)
                }
                wb.fa();
                H.fa();
                W.Cb();
                W.L({
                    tag: "HELO",
                    name: "NoName",
                    sx: "M"
                })
            },
            kf: function(a) {
                var b = "" + V[48 | a];
                if (l[a] != b && (l[a] = b,
                V[64 | a] = tb.mb(V[48 | a]),
                b = "" + V[64 | a],
                k[a] != b)) {
                    k[a] = b;
                    for (a = 0; a < d.length; ++a)
                        d[a] = 0;
                    for (b = 0; 4 > b; ++b)
                        if (V[64 | b])
                            for (a = 0; a < V[64 | b].length; ++a)
                                d[V[64 | b][a]] = 1;
                    for (a = 0; a < R.ta.length; ++a)
                        b = R.ta[a],
                        b.i && b.ma && b.ma(-1025, d[b.i.Xe] ? 1024 : 0, !0)
                }
            },
            lf: function(a) {
                a.i && a.ma && a.ma(-1025, d[a.i.Xe] ? 1024 : 0, !0)
            }
        }
    }();
    var Z = {};
    function Dc(a, e) {
        for (var c = [a], b = e || {}; c.length; ) {
            a = c.pop();
            for (var f = 0; f < a.childNodes.length; ++f)
                c.push(a.childNodes[f]);
            a.id ? b[a.id] = a : a.name && (b[a.name] = a)
        }
        Z = b
    }
    var D = function() {
        var a, e = [], c = {
            SPLASH: 1,
            LOGIN: 1,
            LOBBY: 1,
            STORE: 1
        };
        return {
            b: null,
            o: function(b) {
                D.b ? "RYUUKYOKU" == a.tag && "OWARI" == b.tag || "AGARI" == a.tag && "OWARI" == b.tag || "AGARI" == a.tag && "AGARI" == b.tag ? e.push(b) : D.Z(b) : (a = b,
                D.b = kb("DIV", Vb, "tbc", {}, {
                    position: "relative",
                    textAlign: "center",
                    verticalAlign: "middle"
                }),
                D.b.innerHTML = '<div style="background-color:rgba(0,0,0,0.85);color:#FFF;border:solid 1px #444;padding:1em 0.5em;"></div>',
                D.K(),
                D[a.tag](a, D.b.firstChild))
            },
            K: function() {
                if (D.b) {
                    var b = ~~(N[1] / t);
                    if (b) {
                        c[a.tag] && (b = 0);
                        var e = D.b.style;
                        e.paddingLeft = b + "px";
                        e.paddingRight = ~~(Vb.offsetWidth - Tb / t + b) + "px"
                    }
                }
            },
            Z: function(a) {
                function b() {
                    for (var b in Z)
                        delete Z[b];
                    D.b && (D.b.parentNode.removeChild(D.b),
                    D.b = null,
                    Z = {});
                    a instanceof Function ? a() : a && D.o(a);
                    pc.Va && pc.Va()
                }
                D.b && "none" != D.b.style.display ? fc().Yf = Ec(b) : b()
            },
            fa: function() {
                e = []
            },
            nop: function() {},
            ok: function(b) {
                lb(!0, "ok");
                cc.Z();
                e.length ? D.Z(e.shift()) : "TRAINING" == a.tag ? D.Sf(b) : "SPLASH" == a.tag ? v.ka(11) : "LOGIN" == a.tag || "AUTOLOGIN" == a.tag ? (p.gpid ? (W.L({
                    tag: "HELO",
                    name: p.uname || "NoName",
                    sx: p.sx || "M",
                    gpid: p.gpid
                }),
                p.removeItem("gpid")) : ("ID########-########" != Z.uname.value && Db("uname", Z.uname.value, "NoName"),
                W.L({
                    tag: "HELO",
                    name: p.uname || "NoName",
                    sx: p.sx || "M"
                })),
                lb(!0, 0)) : "OWARI" == a.tag ? (2 != H.a || u.sb || delete u.wg,
                v.ka(495623)) : "NINTEI" == a.tag ? D.cc() : (1 == H.a && W.L({
                    tag: "NEXTREADY"
                }),
                3 == H.a && vb.Ra(1))
            },
            exit: function() {
                v.ka(495623)
            }
        }
    }();
    va(D, function() {
        function a(a, b) {
            return a ? '<span style="color:' + (0 < a ? "#0FF" : "#F00") + ';">' + (0 < a ? "+" : "") + a + (void 0 != b ? b : "") + "</span>" : ""
        }
        function e(b, c, e, f) {
            for (var d = b.sc ? q(b.sc) : [], h = [], m = 0; 4 > m; ++m)
                h[m] = '<span style="font-weight:bold;color:#888;">' + H.ob[m] + "</span> ",
                d.length || (h[m] += ba[H.$a[m]] + (1800 > H.Ua[m] ? "" : ' <span style="color:#888;">R</span>' + ~~H.Ua[m]) + "<br>"),
                h[m] += '<span style="font-weight:bold;color:#CCC;">' + Ca(H.H[m]) + "</span><br>";
            m = 2.4;
            if (8 == d.length || 16 == d.length)
                h[0] += 100 * d[0] + (d[1] ? " " + a(100 * d[1]) : ""),
                h[1] += 100 * d[2] + (d[3] ? " " + a(100 * d[3]) : ""),
                h[2] += 100 * d[4] + (d[5] ? " " + a(100 * d[5]) : ""),
                h[3] += 100 * d[6] + (d[7] ? " " + a(100 * d[7]) : "");
            16 == d.length && (++m,
            h[0] += "<br>" + d[8] + "枚" + (d[9] ? " " + a(d[9], "枚") : ""),
            h[1] += "<br>" + d[10] + "枚" + (d[9] ? " " + a(d[11], "枚") : ""),
            h[2] += "<br>" + d[12] + "枚" + (d[9] ? " " + a(d[13], "枚") : ""),
            h[3] += "<br>" + d[14] + "枚" + (d[9] ? " " + a(d[15], "枚") : ""));
            d = "";
            b.ba && (d = q(b.ba),
            d = x("") + d[0] + " " + x("") + d[1]);
            return '<table cellpadding=0 cellspacing=0 width=100% style="text-align:center;"><tr><td rowspan=1 style="width:33%;height:' + m / 2 + 'em;font-family:icons2,sans-serif;">' + d + '</td><td rowspan=2 style="width:34%;"><div id=sc2 style="height:' + 1 * m + "em;padding:0.2em 0;" + (H.H[2] ? 'border:solid 1px #222;">' + h[2] : '">') + '</div></td><td rowspan=1 style="width:33%;height:' + m / 2 + 'em;" class=gray>' + ka(H.v) + '</td></tr><tr><td rowspan=2><div id=sc3 style="height:' + 1 * m + "em;padding:0.2em 0;" + (H.H[3] ? 'border:solid 1px #222;">' + h[3] : '">') + '</div></td><td rowspan=2><div id=sc1 style="height:' + 1 * m + "em;padding:0.2em 0;" + (H.H[1] ? 'border:solid 1px #222;">' + h[1] : '">') + '</div></td></tr><tr><td rowspan=2><div id=sc0 style="height:' + 1 * m + "em;padding:0.2em 0;" + (H.H[0] ? 'border:solid 1px #222;">' + h[0] : '">') + '</div></td></tr><tr><td rowspan=1 id=info0 style="height:' + m / 2 + 'em;">' + (c || "") + '</td><td rowspan=1 id=info2 style="height:' + m / 2 + 'em;">' + (f || "") + '</td></tr><tr><td></td><td rowspan=1 id=info1 style="position:relative;">' + (e || "") + "</td><td></td></tr></table>"
        }
        function c(b, c) {
            return H.H[c].length ? '<tr><td align=center style="border:solid 1px #222;padding:0.5em;">' + Ca(H.H[c]) + '<table cellpadding=0 cellspacing=0 align=center><tr><td align=right style="width:6em;">' + 100 * b[2 * c + 0] + '</td><td align=right style="width:5em;">' + a(b[2 * c + 1].toFixed(1)) + "</td>" + (16 == b.length ? '<td align=right style="width:4em;">' + a(b[2 * c + 8], "枚") + "</td>" : "") + '<td style="width:3em;"></td></tr></table></td></tr>' : ""
        }
        function b(a, b) {
            for (var c, d = 0; c = Z["yaku" + d]; ++d)
                c.childNodes[0].style.opacity = c.childNodes[1].style.opacity = 0;
            Z.sc0.style.opacity = Z.sc1.style.opacity = Z.sc2.style.opacity = Z.sc3.style.opacity = Z.total.style.opacity = 0;
            Z.ok.disabled = !0;
            var e = !!a.doraHaiUra;
            e && (Z.info2.style.opacity = 0);
            var f = !!a.yakuman
              , m = -(f ? 3E3 : 750)
              , k = 0;
            fc().Wf = function(a) {
                if (0 > m)
                    return m += a,
                    0 < m && (m = 0),
                    1;
                0 == m && lc(f && 0 == k ? 41 : 11, 0, 0);
                var c = Math.min(1, m / (f ? 3E3 : 600))
                  , g = Z["yaku" + k];
                g.childNodes[0].style.opacity = g.childNodes[1].style.opacity = c;
                k == d - 1 && (e && (Z.info2.style.opacity = c),
                Z.sc0.style.opacity = Z.sc1.style.opacity = Z.sc2.style.opacity = Z.sc3.style.opacity = Z.total.style.opacity = c);
                m += a;
                1 == c && (k++,
                m = -(~H.v & 2048 && e && k == d - 1 ? 1200 : 250));
                return k < d ? 1 : (b(),
                0)
            }
        }
        var f = {
            TAIKYOKU: "對局",
            SAIKAI: "再開",
            KANSEN: "觀戰"
        };
        return {
            TAIKYOKU: function(a, b) {
                var c = "TAIKYOKU" == a.tag;
                b.innerHTML = '<div style="font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;">' + f[a.tag] + "</div>" + e(a, "", c ? '<button name=ok style="padding:0 2em;">OK</button>' : '<button disabled style="font-size:150%">' + decodeURIComponent(a.msg || "WAIT") + "</button>");
                Dc(b);
                c && cc.o(-1E4)
            },
            AGARI: function(a, c) {
                var d = "";
                lc(10, 0, 0);
                a.ten = q(a.ten);
                a.chip = q(a.chip);
                for (var f = a.who != a.fromWho, g = 0, h = 0; h < a.chip.length; h += 2)
                    g += a.chip[h + 1];
                var g = g ? g + x(f ? "枚" : "枚∀") : "", m;
                m = f ? a.ten[1] + x("点") : ha[(H.v & 16 ? 0 : 2) + (H.la == a.who ? 1 : 0)][a.ten[1]] + x(H.la == a.who ? "点∀" : "点");
                var d = d + '<div id=total style="font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:250%;">'
                  , k = [];
                if (a.yakuman) {
                    a.yakuman = q(a.yakuman);
                    d += x("役滿") + m + g;
                    for (h = 0; h < a.yakuman.length; h += 1)
                        k.push([aa[a.yakuman[h]], 2 * h < a.chip.length ? a.chip[2 * h + 1] + x("枚") : ""]);
                    for (h *= 2; h < a.chip.length; h += 2)
                        k.push([aa[a.chip[h + 0]], a.chip[h + 1] + x("枚")])
                } else {
                    a.yaku = q(a.yaku);
                    for (var C = ca[a.ten[2]], w = 0, h = 0; h < a.yaku.length; h += 2)
                        w += a.yaku[h + 1];
                    if (30 == a.ten[0] && 4 == w || 60 == a.ten[0] && 3 == w)
                        !f && H.v & 16 ? a.ten[1] == (H.la == a.who ? 8E3 : 6E3) && (C = ca[1]) : a.ten[1] == (H.la == a.who ? 12E3 : 8E3) && (C = ca[1]);
                    ~H.v & 2048 && (d += (C ? "" : a.ten[0] + x("符") + w + x("飜")) + x(C) + m + g);
                    for (f = h = 0; h < a.yaku.length; h += 2)
                        g = a.yaku[h + 1] + x(H.v & 2048 ? "点" : "飜"),
                        f < a.chip.length && a.yaku[h + 0] == a.chip[f + 0] && (g += a.chip[f + 1] + x("枚"),
                        f += 2),
                        k.push([aa[a.yaku[h + 0]], g])
                }
                d += '</div><table cellpadding=0 cellspacing=0 style="width:100%;font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:150%;"><tr>';
                h = 4 > k.length ? 0 : Math.ceil(k.length / 2);
                for (f = 0; f < k.length; ++f) {
                    if (0 == f || f == h)
                        d += "<td width=50% align=center valign=top><table cellpadding=0 cellspacing=0>";
                    d += "<tr id=yaku" + f + ' style="">';
                    d += '<td align=left style="position:relative;">' + k[f][0] + "</td>";
                    d += '<td align=left style="position:relative;">　' + k[f][1] + "</td>";
                    d += "</tr>";
                    if (f == h - 1 || f == k.length - 1)
                        d += "</table></td>"
                }
                d += "</tr></table>";
                k = q(a.doraHai);
                for (h = a.doraHaiUra ? q(a.doraHaiUra) : []; 5 > k.length; )
                    k.push(136);
                for (; 5 > h.length; )
                    h.push(136);
                d += e(a, "", '<button name=ok style="width:100%;padding:0 1em;">OK</button>', "");
                c.innerHTML = d;
                Dc(c);
                M.xa(Z.info0, "", 0, 1, k[0], k[1], k[2], k[3], k[4]);
                M.xa(Z.info2, "", 0, 1, h[0], h[1], h[2], h[3], h[4]);
                3 != H.a && b(a, function() {
                    Z.ok.disabled = !1;
                    a.owari || cc.o(-5E3)
                })
            },
            RYUUKYOKU: function(a, b) {
                b.innerHTML = '<div style="font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;">' + (a.type ? ea[a.type] : "流局") + "</div>" + e(a) + '<button name=ok style="padding:0 2em;">OK</button>';
                Dc(b);
                2 != H.a || a.owari || (Z.ok.disabled = !0);
                a.owari || cc.o(-5E3)
            },
            OWARI: function(a, b) {
                H.fa();
                Wb.X();
                var d;
                d = a.sc;
                d = d.split(",");
                for (var e = 0; e < d.length; ++e)
                    d[e] = Number(d[e]);
                var f, e = [0, 1, 2, 3];
                for (f = 1; 4 > f; ++f)
                    if (!(d[2 * e[f - 1] + 1] >= d[2 * e[f] + 1])) {
                        var h = e[f];
                        e[f] = e[f - 1];
                        e[f - 1] = h;
                        f = 0
                    }
                f = '<div style="font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;">終局</div><table cellpadding=0 cellspacing=0 width=75% align=center style="text-align:center;">' + c(d, e[0]);
                f += c(d, e[1]);
                f += c(d, e[2]);
                f += c(d, e[3]);
                f += "</table>";
                fc().Kf = Fc(1500);
                b.innerHTML = f + '<button name=ok style="padding:0 2em;">OK</button>';
                Dc(b)
            }
        }
    }());
    D.KANSEN = D.SAIKAI = D.TAIKYOKU;
    Hb({
        JP: {
            re: "設定",
            ve: "表示",
            $b: "入力",
            ze: "SE",
            ye: "画面方向",
            kb: ["回転", "縦画面", "横画面"],
            Me: "※アプリ版でのみご利用いただけます",
            pe: "配信ID保護",
            Je: "※ログイン画面のID入力を非表示にします",
            me: "入力補助",
            Ab: ["Default", "3 TAPs", "2 TAPs"],
            Ge: "※縦画面のみで表示されます",
            ue: "Desktop入力",
            Ie: "※「鳴きなし」他が常時手牌下に表示されます",
            Ce: "牌山表示",
            ua: ["Default", "あり", "なし"],
            we: "大きな手牌",
            Le: "※横画面対戦時で牌山表示:なし/Desktop入力:なしの場合",
            Be: "音量",
            oe: "標準のSE",
            Ae: '音声設定ファイルURL(*.json):<a href="https://tenhou.net/3/se_setting_sample.html" style="color:#F93;" target=_blank>SAMPLE</a>',
            De: "卓",
            qe: "標準の画像",
            Ee: "画像ファイルURL",
            Ke: "※defaultのHSV画像は高速にダウンロードされます",
            Zb: "標準的なURL(クエリーなし)を使用してください。",
            Fe: "牌",
            Oe: "牌背色",
            te: "回線",
            He: "* 国際特別回線は性能を保証するものではありません。",
            Bb: ["標準回線 / default", "中国(香港)特別回線 / CH(HK)"],
            xe: "その他",
            ne: "局開始時に自動和了をON",
            Ne: "設定を有効にするには、再接続する必要があります。<br>再接続してもよろしいですか？"
        },
        EN: {
            re: "Setting",
            ve: "View",
            $b: "UI",
            ze: "SE",
            kb: ["Auto Rotate", "Vertical", "Horizontal"],
            ye: "Screen Orientation",
            Me: "*Only available in the App version",
            pe: "Hide ID",
            Je: "*Hides your ID in the login screen",
            me: "Input Assistance",
            Ge: "*Only available in Vertical device view",
            ue: "Desktop Input",
            Ie: "*Shows options (e.g. Auto Win) below your hand",
            Ce: "Show Wall",
            ua: ["Default", "ON", "OFF"],
            we: "Enlarged hand input",
            Le: "*Only available:'Show Wall'(off) and 'Desktop Input'(off)",
            Be: "Vol",
            oe: "Default SE",
            Ae: "Sound setting file URL",
            De: "Table",
            qe: "Deault Image",
            Ee: 'Image file URL(*.json):<a href="https://tenhou.net/3/se_setting_sample.html" style="color:#F93;" target=_blank>SAMPLE</a>',
            Ke: "*The default HSV image downloads fast.",
            Zb: "Please, use a standard URL(no-query).",
            Fe: "Tiles",
            Oe: "Tile back color",
            te: "Connection",
            He: "*No performance guarantee for international special connections.",
            Bb: ["Default Connection", "China and HK Proxy Connection"],
            xe: "Other",
            ne: '<span style="font-size:75%;">Turn on AutoWin at round start<span>',
            Ne: "You have to reconnect for changes to take effect.<br>Reconnect now?"
        }
    });
    va(D, function() {
        function a(a) {
            var b = Z.panes.childNodes
              , c = b.length;
            k = (k + a + c) % c;
            for (a = 0; a < c; ++a)
                b[a].style.display = a == k ? "" : "none";
            Z.paneDisp.innerHTML = b[k].firstChild.innerHTML + x(" / " + I.re)
        }
        function e() {
            K.a = ~~p.yama;
            0 == K.a && p.desktop && (K.a = 1);
            Eb();
            H.fa();
            H.connected = 15;
            H.v = 1;
            H.UN({
                tag: "UN",
                n0: "COM",
                n1: "COM",
                n2: "COM",
                n3: "COM",
                sx: ",,,"
            });
            H.ra({
                tag: "REINIT",
                seed: "2,1,1,5,5,57",
                ten: "123,234,345,456",
                oya: "0",
                hai0: "1,3,6,16,21,41,49,53,75,116,117,121,135",
                hai1: "1,3,6,16,21,41,49,53,75,116,117,121,135",
                kawa0: "46,125,82,128,73,94,66,130,131,55,5,126,38,124",
                kawa1: "108,120,11,74,76,50,42,78,67,70",
                kawa2: "119,32,29,65,2,104,5,126,38,124",
                kawa3: "122,127,4,112,107,77,129,69,109,106,123"
            });
            R.K();
            p.desktop & 1 ? (v.b.style.display = "",
            v[1572868].innerHTML = "",
            v.R(126976)) : v.b.style.display = "none"
        }
        function c(a) {
            Db("hideid", ~~a.target.checked, 0)
        }
        function b() {
            Z.cfgDefaultSE.checked ? (Z.cfgUseDefaultSE0.style.display = "none",
            Z.cfgSE.value = "",
            f()) : Z.cfgUseDefaultSE0.style.display = ""
        }
        function f() {
            var a = Z.cfgSE.value;
            ob(a) ? (p.se = a,
            xc()) : (p.removeItem("se"),
            xc(),
            a && A.o(I.Zb))
        }
        function d(a) {
            Db("autowin", ~~a.target.checked, 0)
        }
        var k = 0
          , l = {
            iH: 0,
            iS: 10,
            iV: 7,
            hR: 0,
            hG: 0,
            hB: 0
        }
          , n = 8;
        return {
            CONFIG: function(g, k) {
                Wb.s.canvas.style.visibility = "";
                e();
                var m;
                m = '<div id=paneDisp style="font-size:125%;pointer-events:none;">　</div><hr><div id=panes style="height:12em;">' + ('<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">' + I.ve + "</span><span class=bth>" + I.ye + ":</span><div class=select-wrapper><button name=sco></button></div><br>" + x(I.Me) + "<br><br><input type=checkbox id=cfgSelShowID /><label class=bth for=cfgSelShowID>" + I.pe + "</label><br>" + x(I.Je) + "<br></div>");
                m += '<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">' + I.$b + "</span><span class=bth>" + I.me + ":</span><div class=select-wrapper><button name=cpt></button></div><br>" + x(I.Ge) + "<br><br><span class=bth>" + I.ue + ":</span><div class=select-wrapper><button name=dtp></button></div><br>" + x(I.Ie) + "<br></div>";
                m += '<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">' + I.$b + "</span><span class=bth>" + I.we + ":</span><div class=select-wrapper><button name=lth></button></div><br>" + x(I.Le) + "<br><br><br><span class=bth>" + I.Ce + ":</span><div class=select-wrapper><button name=yam></button></div><br></div>";
                m += '<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">' + I.ze + "</span><br><input type=checkbox id=cfgDefaultSE /><label class=bth for=cfgDefaultSE>" + I.oe + "</label> <div class=select-wrapper><button name=sevol></button></div><br><br><div id=cfgUseDefaultSE0>" + I.Ae + '<input name=cfgSE style="width:100%;font-size:125%;"/><br></div></div>';
                m += '<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">' + I.De + "</span><br><input type=checkbox id=cfgUseDefaultIMG /><label class=bth for=cfgUseDefaultIMG>" + I.qe + '</label><br><br><div id=cfgUseDefaultIMG1><div class=select-wrapper><button name=iH style="width:4em;"></button></div><div class=select-wrapper><button name=iS style="width:4em;"></button></div><div class=select-wrapper><button name=iV style="width:4em;"></button></div><br>' + x(I.Ke) + "<br></div><div id=cfgUseDefaultIMG0>" + I.Ee + ":" + x("(.jpg|.png|.gif)") + '<input name=cfgBGIMG style="width:100%;font-size:125%;"/><br></div></div>';
                m += '<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">' + I.Fe + "</span><br><br><div class=bth>" + I.Oe + ':</div><div class=select-wrapper><button name=hR style="width:4em;"></button></div><div class=select-wrapper><button name=hG style="width:4em;"></button></div><div class=select-wrapper><button name=hB style="width:4em;"></button></div><br></div>';
                m += '<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">' + I.te + "</span><br><br>" + x(I.He) + '<br><br><div class=select-wrapper style="width:100%;"><button name=icn style="width:100%;"></button></div><br></div>';
                m += '<div style="display:none;padding:0.5em;text-align:left;"><span style="display:none;">' + I.xe + "</span><br><input type=checkbox id=cfgDefaultAutoWin /><label class=bth for=cfgDefaultAutoWin>" + I.ne + "</label> <br><br></div>";
                k.innerHTML = m + '</div><hr><button name=cfgPrev class=ra1 style="width:33%;">&laquo;</button><button name=cfgNext class=ra2 style="width:33%;">&raquo;</button><button name=cfgClose style="width:34%;">CLOSE</button>';
                Dc(k);
                Z.cfgSelShowID.checked = !!p.hideid;
                Z.sco.disabled = !oa;
                ta(Z.cfgSE, "change", f);
                ta(Z.cfgBGIMG, "change", D["#iV"]);
                ta(Z.cfgSelShowID, "change", c);
                ta(Z.cfgDefaultSE, "change", b);
                ta(Z.cfgDefaultAutoWin, "change", d);
                ta(Z.cfgUseDefaultIMG, "change", D["#iV"]);
                p.se ? Z.cfgSE.value = p.se : Z.cfgDefaultSE.checked = !0;
                nb(p.backgroundImage) ? Z.cfgBGIMG.value = p.backgroundImage : Z.cfgUseDefaultIMG.checked = !0;
                Z.cfgDefaultAutoWin.checked = !!p.autowin;
                D["#sco"]();
                D["#yam"]();
                D["#sevol"]();
                D["#cpt"]();
                D["#hB"]();
                D["#iV"]();
                D["#dtp"]();
                D["#lth"]();
                D["#icn"]();
                a(0);
                b()
            },
            hB: function(a) {
                for (var b = "iH" == a.name ? 36 : 16, c = "", d = 0; d < b; ++d)
                    c += '<div class=A id="#' + a.name + "-" + d + '">' + d + (d == l[a.name] ? "<div class=desc>(default)</div>" : "") + "</div>";
                A.Y(c, "", 0)
            },
            "#iV": function(a, b) {
                var c = p.backgroundImage
                  , d = "000100070";
                c && c.match(/^\d{9}$/) && (d = c);
                var e = ~~d.substr(0, 3)
                  , f = ~~d.substr(3, 3)
                  , g = ~~d.substr(6, 3);
                if (Z.cfgUseDefaultIMG.checked) {
                    Z.cfgUseDefaultIMG0.style.display = "none";
                    Z.cfgUseDefaultIMG1.style.display = "";
                    if (a)
                        switch (d = 10 * ~~b,
                        a) {
                        case "#iH":
                            e = d;
                            break;
                        case "#iS":
                            f = d;
                            break;
                        case "#iV":
                            g = d
                        }
                    d = Va(3, e) + Va(3, f) + Va(3, g);
                    Db("backgroundImage", d, "000100070")
                } else
                    Z.cfgUseDefaultIMG0.style.display = "",
                    Z.cfgUseDefaultIMG1.style.display = "none",
                    (d = Z.cfgBGIMG.value) ? nb(d) ? p.backgroundImage = d : a && a.target == Z.cfgBGIMG && A.o(I.Zb) : p.removeItem("backgroundImage");
                c != p.backgroundImage && Eb();
                Z.iH.innerHTML = x("H:") + ~~(e / 10);
                Z.iS.innerHTML = x("S:") + ~~(f / 10);
                Z.iV.innerHTML = x("V:") + ~~(g / 10)
            },
            "#hB": function(a, b) {
                var c = p.msk
                  , d = c || "000000"
                  , e = parseInt(d.substr(0, 2), 16)
                  , f = parseInt(d.substr(2, 2), 16)
                  , g = parseInt(d.substr(4, 2), 16);
                if (a)
                    switch (d = 17 * ~~b,
                    a) {
                    case "#hR":
                        e = d;
                        break;
                    case "#hG":
                        f = d;
                        break;
                    case "#hB":
                        g = d
                    }
                d = Va(2, e.toString(16)) + Va(2, f.toString(16)) + Va(2, g.toString(16));
                Db("msk", d, "000000");
                Z.hR.innerHTML = x("R:") + ~~(e / 17);
                Z.hG.innerHTML = x("G:") + ~~(f / 17);
                Z.hB.innerHTML = x("B:") + ~~(g / 17);
                c != p.msk && Eb()
            },
            sco: function() {
                A.Y('<div class=A id="#sco-0">' + I.kb[0] + '</div><div class=A id="#sco-1">' + I.kb[1] + '</div><div class=A id="#sco-2">' + I.kb[2] + "</div>", "", 0)
            },
            "#sco": function(a, b) {
                var c = p.scro
                  , c = ~~(a ? b : c);
                Db("scro", c, 0);
                oa && r.screen.orientation.lock && r.screen.orientation.lock(1 == c ? "portrait" : 2 == c ? "landscape" : "any");
                Z.sco.innerHTML = I.kb[c]
            },
            yam: function() {
                A.Y('<div class=A id="#yam-0">' + I.ua[0] + '</div><div class=A id="#yam-1">' + I.ua[1] + '</div><div class=A id="#yam-2">' + I.ua[2] + "</div>", "", 0)
            },
            "#yam": function(a, b) {
                var c = p.yama
                  , d = ~~(a ? b : c);
                Db("yama", d, 0);
                Z.yam.innerHTML = I.ua[d];
                c != d && e()
            },
            sevol: function(a) {
                for (var b = "", c = ~~(p.sevol || 5), d = 0; 10 >= d; ++d)
                    b += '<div class="A' + (d == c ? " _selected_" : "") + '" id="#' + a.name + "-" + d + '">' + d + (0 == d ? "<div class=desc>(off)</div>" : 5 == d ? "<div class=desc>(default)</div>" : "") + "</div>";
                A.Y(b, "", 0)
            },
            "#sevol": function(a, b) {
                var c = ~~(p.sevol || 5)
                  , c = ~~(a ? b : c);
                Db("sevol", c, 5);
                Z.sevol.innerHTML = I.Be + ":" + c;
                wc();
                arguments.length && (console.log(n),
                lc(n, 0, 0),
                n = (n + 1) % 25,
                0 != n && 2 != n || n++)
            },
            cpt: function() {
                A.Y('<div class=A id="#cpt-0">' + I.Ab[0] + '</div><div class=A id="#cpt-1">' + I.Ab[1] + '</div><div class=A id="#cpt-2">' + I.Ab[2] + "</div>", "", 0)
            },
            "#cpt": function(a, b) {
                var c = ~~(a ? b : p.cptype);
                Db("cptype", c, 0);
                S.K();
                Z.cpt.innerHTML = I.Ab[c]
            },
            dtp: function() {
                A.Y('<div class=A id="#dtp-0">' + I.ua[0] + '</div><div class=A id="#dtp-1">' + I.ua[1] + '</div><div class=A id="#dtp-2">' + I.ua[2] + "</div>", "", 0)
            },
            "#dtp": function(a, b) {
                var c = p.desktop;
                3 == c && (c = 0);
                var d = ~~(a ? b : c);
                Z.dtp.innerHTML = I.ua[d];
                0 == d && jb && (d = 3);
                Db("desktop", d, 0);
                c != d && e()
            },
            lth: function() {
                A.Y('<div class=A id="#lth-0">' + I.ua[0] + '</div><div class=A id="#lth-1">' + I.ua[1] + '</div><div class=A id="#lth-2">' + I.ua[2] + "</div>", "", 0)
            },
            "#lth": function(a, b) {
                var c = p.lthai
                  , d = ~~(a ? b : c);
                Db("lthai", d, 0);
                Z.lth.innerHTML = I.ua[d];
                c != d && e()
            },
            icn: function() {
                A.Y('<div class=A id="#icn-">' + I.Bb[0] + '</div><div class=A id="#icn-HK">' + I.Bb[1] + "</div>", "", 0)
            },
            "#icn": function(a, b) {
                var c = p.server || ""
                  , d = (a ? b : c) || "";
                Db("server", d, "");
                Z.icn.innerHTML = I.Bb["HK" == d ? 1 : 0];
                c != d && A.o(I.Ne, 3, function() {
                    location.reload()
                })
            },
            cfgPrev: function() {
                a(-1)
            },
            cfgNext: function() {
                a(1)
            },
            cfgClose: function() {
                v.ka(11)
            }
        }
    }());
    D["#iH"] = D["#iS"] = D["#iV"];
    D.iH = D.iS = D.iV = D.hR = D.hG = D.hB;
    D["#hR"] = D["#hG"] = D["#hB"];
    Hb({
        JP: {
            Pb: "牌譜",
            Nc: '●「長押し」または「右クリック」からURLをコピーしたり、別タブで開くことができます<br><br>牌譜の検索やダウンロードはこちらから行えます<br><a href="https://tenhou.net/mjlog.html" target=_blank >https://tenhou.net/mjlog.html</a><br>',
            Kc: "すべての端末の牌譜一覧を表示",
            Mc: "※有料会員の状態で打った牌譜のみ検索できます<br>※１０日前までの牌譜が検索可能です",
            Lc: "この端末に記録されている牌譜を表示",
            Jc: "- 右/左クリック … 進む/戻る<br>- 長押し … オートリピート<br>- センターパネル … 得点差表示<br>"
        },
        EN: {
            Pb: "LOG",
            Nc: '*You can copy URLs by long tapping or right-clicking.<br><br>You can also search and download game logs here<br><a href="https://tenhou.net/mjlog.html" target=_blank >https://tenhou.net/mjlog.html</a><br>',
            Kc: "Show all game logs for all devices",
            Mc: "*You can only search for matches played with a Premium Subscription<br>*You can search games played in the last 10 days",
            Lc: "Show games logged in this device",
            Jc: "- L/R Click … Next/Back<br>- Long Press … Auto Repeat<br>- Center Panel … Show Score Diff<br>"
        }
    });
    va(D, function() {
        function a(a, b) {
            for (var c = 0; c < b.length; ++c) {
                var d = b[c]
                  , e = '<div style="position:absolute;width:100%;height:100%;padding:0.2em 0.5em;pointer-events:none;">'
                  , l = "javascript:void(0)"
                  , e = e + "<table cellpadding=0 cellspacing=0 width=100% height=100%><tr>"
                  , e = e + ("<td rowspan=3 class=gray width=6% >" + (c + 1) + ".</td>");
                if (d) {
                    var l = "https://tenhou.net/0/?log=" + d.log + "&tw=" + (4 - ~~d.oya) % 4
                      , e = e + "<td colspan=2>"
                      , e = e + (x(I.Pb + " | ") + d.log.substr(4, 2) + "/" + d.log.substr(6, 2) + x(" | "))
                      , e = e + ka(d.type)
                      , n = d.lobby;
                    n && (e += " " + (1E4 > n ? "L" : "C") + Va(4, n));
                    var e = e + "</td>"
                      , e = e + "</tr><tr>"
                      , n = d.uname
                      , g = ~~d.oya;
                    if (d = d.sc) {
                        for (var d = d.split(","), h = 0; h < d.length; ++h)
                            d[h] = Number(d[h]);
                        for (h = 0; 4 > h; ++h)
                            e += "<td width=47% >",
                            n[h] && (e = h ? e + ("ABCD".substr((h + 4 - g) % 4, 1) + ":") : e + (0 + ~~(n[1] && d[3] > d[1]) + ~~(n[2] && d[5] > d[1]) + ~~(n[3] && d[7] > d[1]) + 1 + "位 "),
                            e += Ca(n[h]) + "(" + Wa(d[2 * h + 1].toFixed(1)) + ")"),
                            e += "</td>",
                            1 == h && (e += "</tr><tr>")
                    } else if (n)
                        for (h = 0; 4 > h; ++h)
                            e += "<td width=47% >" + Ca(n[h]) + "</td>",
                            1 == h && (e += "</tr><tr>")
                }
                e += "</tr></table>";
                e += "</div>";
                e += '<a href="' + l + '" class=bt3 target=_blank></a>';
                kb("DIV", a, "", {
                    innerHTML: e
                }, {
                    height: "3.4em",
                    position: "relative",
                    textAlign: "left"
                }).childNodes[1].onclick = D.logOpen
            }
            kb("DIV", a, "gray", {
                innerHTML: I.Nc
            }, {
                fontSize: "75%",
                align: "left",
                padding: "1em 0 6em 0"
            })
        }
        function e(c, b) {
            var e = b.split("\n");
            e[d - 1] || e.pop();
            for (var d = 0; d < e.length; ++d) {
                var k = e[d].split(" ")
                  , l = k[0]
                  , n = ~~k[1];
                e[d] = {
                    type: parseInt(l.split("-")[1], 16),
                    lobby: ~~l.split("-")[2],
                    log: l,
                    oya: (4 - n) % 4,
                    uname: [k[2 + (0 + n) % 4], k[2 + (1 + n) % 4], k[2 + (2 + n) % 4], k[2 + (3 + n) % 4]],
                    sc: [0, k[6 + (0 + n) % 4], 0, k[6 + (1 + n) % 4], 0, k[6 + (2 + n) % 4], 0, k[6 + (3 + n) % 4]].join()
                }
            }
            c.innerHTML = "";
            d = kb("DIV", c, "", {
                innerHTML: '<a class=bt3 href="https://tenhou.net/mjlog.html" target=_blank style="padding:1em 0;">' + I.Lc + "</a>"
            }, {
                textAlign: "center"
            });
            d.childNodes[0].onclick = function() {
                D.hf(c);
                return !1
            }
            ;
            d = kb("DIV", c, "bt3", {
                innerHTML: I.Mc
            }, {
                textAlign: "center",
                padding: "0.5em 0"
            });
            a(c, e.reverse())
        }
        return {
            hf: function(c) {
                c.innerHTML = "";
                kb("DIV", c, "", {
                    innerHTML: '<a class=bt3 href="https://tenhou.net/mjlog.html" target=_blank style="padding:1em 0;">' + I.Kc + "</a>"
                }, {
                    textAlign: "center"
                }).childNodes[0].onclick = function() {
                    c.innerHTML = "<br>L O A D I N G ...";
                    Sa(qa[22]() + "?un=" + p.uname + "&raw=1", function(a) {
                        e(c, a)
                    }, function() {
                        alert("DOWNLOAD ERROR")
                    });
                    return !1
                }
                ;
                for (var b = [], f = ~~p.lognext, d = 0; 40 > d; ++d) {
                    var k = (f + 40 - 1 - d) % 40;
                    try {
                        b.push(JSON.parse(p["log" + k]))
                    } catch (l) {}
                }
                a(c, b)
            },
            logOpen: function(a) {
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey) && (a = a.target,
                a = a.href.split(/\?log=|&tw=/),
                1 != a.length))
                    return u.log = a[1],
                    u.TW = u.tw = ~~a[2],
                    u.ts = 0,
                    v.ka(11),
                    !1
            }
        }
    }());
    Hb({
        JP: {
            Qb: "観戦",
            Oc: "観戦可能な対戦はありません",
            Pc: "●「長押し」または「右クリック」からURLをコピーしたり、別タブで開くことができます<br>●観戦は５分遅れ<br>"
        },
        EN: {
            Qb: "WATCH",
            Oc: "There are no games to spectate.",
            Pc: "*You can long tap or right-click to copy the URL and open in a new tab<br>*Spectated games are delayed 5 minutes<br>"
        }
    });
    va(D, function() {
        function a() {
            Z.wgF0.innerText = f & 2 ? "四" : f & 4 ? "三" : "－";
            Z.wgF1.innerText = f & 8 ? "東" : f & 16 ? "南" : "－";
            Z.wgF2.innerText = f & 32 ? "雀" : f & 64 ? "特" : f & 128 ? "鳳" : "－"
        }
        function e() {
            var a = Z.klist;
            a.innerHTML = "";
            var e = 0;
            if (b)
                for (var l = 0; l < b.length; ++l) {
                    var n = '<div style="position:absolute;width:100%;height:100%;padding:0.2em 0.5em;pointer-events:none;">', n = n + "<table cellpadding=0 cellspacing=0 width=100% height=100%>", n = n + ("<tr><td rowspan=3 class=gray width=6%>" + (e + 1) + ".</td>"), g, h = b[l], m = ~~h[3];
                    if (f & 6) {
                        if (~m & 16 && ~f & 2)
                            continue;
                        if (m & 16 && ~f & 4)
                            continue
                    }
                    if (f & 24) {
                        if (~m & 8 && ~f & 8)
                            continue;
                        if (m & 8 && ~f & 16)
                            continue
                    }
                    if (f & 224 && 0 == c) {
                        if (0 != (m & 1536) && ~f & 32)
                            continue;
                        if (!(m & 3584) && 2 == ja(m) && ~f & 64)
                            continue;
                        if (!(m & 3584) && 3 == ja(m) && ~f & 128)
                            continue
                    }
                    g = "https://tenhou.net/0/?wg=" + h[0];
                    for (var y = [h[4], h[7], h[10], h[13]], C = 0; 4 > C; ++C)
                        y[C] && (y[C] = decodeURIComponent(escape(atob(y[C]))));
                    for (var w = [~~h[5], ~~h[8], ~~h[11], ~~h[14]], B = [~~h[6], ~~h[9], ~~h[12], ~~h[15]], n = n + ("<td colspan=2>" + x(I.Qb + " | ") + h[2] + x(" | ") + ka(m) + "</td></tr><tr>"), C = 0; 4 > C; ++C)
                        y[C] && (n += "<td width=47%>",
                        n += "<span class=dan" + w[C] + ">" + ba[w[C]] + "</span>" + x("R") + B[C] + x("/") + y[C],
                        n += "</td>",
                        1 == C && (n += "</tr><tr>"));
                    n += "</tr></table>";
                    n += "</div>";
                    n += '<a href="' + g + '" class=bt3 target=_blank></a>';
                    kb("DIV", a, "", {
                        innerHTML: n
                    }, {
                        height: "3.4em",
                        position: "relative",
                        textAlign: "left"
                    }).childNodes[1].onclick = D.wgOpen;
                    ++e
                }
            e || (a.innerHTML = "<br>" + I.Oc);
            kb("DIV", a, "gray", {
                innerHTML: I.Pc
            }, {
                fontSize: "75%",
                align: "left",
                padding: "1em 0 6em 0"
            })
        }
        var c, b, f = 128;
        return {
            Uf: function(d) {
                c = d;
                Sa(qa[13]() + (1E4 > c ? Va(4, c) : c) + ".js", function(a) {
                    if (b = a.substr(3, a.length - 3 - 2))
                        try {
                            b = JSON.parse(b)
                        } catch (l) {
                            return
                        }
                    if (b)
                        for (a = 0; a < b.length; ++a)
                            b[a] = b[a].split(",");
                    e()
                });
                e();
                a();
                Z.wgF2.style.display = 0 == c ? "" : "none"
            },
            wgF0: function() {
                f = f & -7 | (f & 2 ? 4 : f & 4 ? 0 : 2);
                a();
                e()
            },
            wgF1: function() {
                f = f & -25 | (f & 8 ? 16 : f & 16 ? 0 : 8);
                a();
                e()
            },
            wgF2: function() {
                f = f & -225 | (f & 32 ? 64 : f & 64 ? 128 : f & 128 ? 0 : 32);
                a();
                e()
            },
            wgOpen: function(a) {
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey))
                    return a = a.target,
                    u.wg = a.href.split("?wg=")[1],
                    u.TW = u.tw = 0,
                    v.ka(11),
                    !1
            }
        }
    }());
    var Gc = [1, 65, 9, 73, 17, 81, 25, 89, 129, 193, 137, 201, 145, 209, 153, 217, 33, 97, 41, 105, 49, 113, 57, 121, 161, 225, 169, 233, 177, 241, 185, 249, 1057, 545, 1569, 1065, 553, 1577, 1585, 1593]
      , Hc = [7, 3, 15, 11, 135, 131, 143, 139, 39, 35, 47, 43, 167, 163, 175, 171];
    Hb({
        JP: {
            Qc: '---- ご注意 ----<br><br>Android4.4より前の標準ブラウザでは、対戦を行うことはできますが、表示の乱れやダブルタップで意図しない拡大が発生することがあります。Android4.4以降にOSをアップデートするか<a href="https://play.google.com/store/apps/details?id=com.android.chrome">Google Chrome Browser</a>を使用してください。',
            Uc: "必要な画像リソースの読み込みが完了していません",
            Rb: "予約",
            Yc: "テストプレイ",
            $c: "有効期限",
            bd: "段級位を取得するには<br>「新規ID」登録が必要です",
            fd: "接続",
            gd: "待機",
            ed: "終局",
            Rc: "上級卓の入場条件(１級以上または有効期限60日以上)を満たしていません※七段R2000以上は入場できません",
            Vc: "特上卓の入場条件(四段R1800以上を満たしていません",
            Sc: "鳳凰卓の入場条件(七段R2000以上の有料会員)を満たしていません",
            Tc: "雀荘戦の入場条件(四段R1800以上の有料会員)を満たしていません",
            hd: "●アドレスバーを小さくするには下にスクロールしてからゆっくり上にスクロールします(機種依存あり)",
            jd: "●OK/パス/ツモ切りは右クリックまたは余白をダブルタップ",
            kd: "※下の&laquo;&raquo;でタブを移動してください。",
            dd: "※段位戦４人打ち合算戦績",
            cd: "※段位戦３人打ち合算戦績",
            wc: "日月火水木金土".split(""),
            Hc: "【開催期間】",
            Ic: "開始",
            Gc: "終了",
            Fc: "【ルール】",
            yc: "【ランキング】",
            Cc: "このロビーでは使用していません",
            Dc: "連続3戦の最大合計得点",
            Ec: "連続5戦の最大合計得点",
            Ac: "【最新3戦】",
            Bc: "【最新3戦】",
            zc: "【最高得点】",
            qc: "【祝儀】",
            tc: "なし",
            Nb: "祝儀1枚2000点",
            Ob: "祝儀1枚5000点",
            xc: "【参加費】",
            uc: "【参加対象】",
            zb: "予約",
            yb: "対戦",
            Qa: "人",
            lc: "有料会員向けの大会に参加するにはID登録が必要です。ログイン画面の「新規ID」からIDを取得してください",
            kc: "参加費が有料の大会に参加するにはID登録が必要です。ログイン画面の「新規ID」からIDを取得してください",
            vc: "大会への参加費として\n\n有効期限###日分\n\nを支払います。よろしいですか？",
            oc: "参加登録",
            pc: "参加予約",
            mc: "参加不可",
            nc: "終了",
            Ya: ["あと", "日", "時間", "分", "秒"],
            Yb: "※表示する対戦ルールを選択してください",
            jb: ["位", "位", "位", "位"],
            he: "月間戦績",
            na: "通算  得点 順位 収支 祝儀 平均  トップ 連対率 ラス率  Rate 総合 対戦数".split(" "),
            ie: "通算戦績",
            ha: "１位率 ２位率 ３位率 ４位率 飛び率 対戦数 平均得点 平均順位 平均収支 平均祝儀 和了率 放銃率 副露率 立直率 Rate".split(" "),
            Wc: "マニュアル",
            Zc: "牌理",
            Xc: "料金のお支払い",
            ad: "牌譜/観戦URLを入力してください"
        },
        EN: {
            Qc: '---- ATTENTION ----<br><br>It is possible to play in Android versions older than 4.4, but you may face poor display quality and erratic behaviors when tapping. Please, update to Android4.4 or more, or <a href="https://play.google.com/store/apps/details?id=com.android.chrome">use the Google Chrome Browser</a> to play.',
            Uc: "Still loading all necessary image resources...",
            Rb: "Join",
            Yc: "TEST PLAY",
            $c: "Expire",
            bd: "To acquire a Rank<br>register a New ID",
            fd: "Online",
            gd: "Idle",
            ed: "Last",
            Rc: "You don't meet the requirements for 上級 tables (1 Kyu or more, or 60 days left of Premium) *七段R2000 and above can't enter",
            Vc: "You don't meet the requirements for 特上 tables (四段R1800 and above)",
            Sc: "You don't meet the requirements for 鳳凰 tables (Premium + 七段R2000 and above)",
            Tc: "You don't meet the requirements for 雀荘戦 tables (Premium + 四段R1800 and above)",
            hd: "*To minimize the address bar, scroll down and then scroll back up slowly (device dependant)",
            jd: "*To accept, pass or to discard the tile you just drew, double tap or right click an empty space of the screen.",
            kd: "*Use the &laquo;&raquo; arrows below to move around tabs",
            dd: "*4-Player Ranked Total Stats",
            cd: "*3-Player Ranked Total Stats",
            wc: "Sun Mon Tue Wed Thr Fri Sat".split(" "),
            Hc: "【SCHEDULE】",
            Ic: "Start",
            Gc: "End",
            Fc: "【RULES】",
            yc: "【RANKING】",
            Cc: "Not used in this lobby",
            Dc: "Best 3 Consecutive Matches Total",
            Ec: "Best 5 Consecutive Matches Total",
            Ac: "【LAST 3】",
            Bc: "【LAST 5】",
            zc: "【BEST SCORE】",
            qc: "【CHIP】",
            tc: "none",
            Nb: "2000 pts per chip",
            Ob: "5000 pts per chip",
            xc: "【JOIN FEE】",
            uc: "【CONDITIONS】",
            zb: "WAIT ",
            yb: "PLAY ",
            Qa: "",
            lc: "For Premium championships you need a registered ID. Go back to the login panel and create a New ID.",
            kc: "For championships with an entry fee you need a registered ID. Go back to the login panel and create a New ID.",
            vc: "You will pay \n\n Premium ### days\n\nto enter this championship. Proceed?",
            oc: "Entry",
            pc: "Entry",
            mc: "CAN'T ENTER",
            nc: "End",
            Ya: ["WAIT ", "DAYs", "HOURs", "MINs", "SECs"],
            Yb: "*Select the rules you want to Display",
            jb: ["st", "nd", "rd", "th"],
            he: "MonthlyStats",
            na: "Sum Rank Pts Placing Gains Chips Avg. Rank 1st<small>%</small> Half<small>%</small> Last<small>%</small>  Rate Total Matches".split(" "),
            ie: "TotalStats",
            ha: "1st<small>%</small> 2nd<small>%</small> 3rd<small>%</small> 4th<small>%</small> Tobi<small>%</small> Games <small>Avg.</small>Pts <small>Avg.</small>Place <small>Avg.</small>Gain <small>Avg.</small>Chips Win<small>%</small> DealIn<small>%</small> Call<small>%</small> Riichi<small>%</small> Rate".split(" "),
            Wc: "Documents",
            Zc: "TileEfficiency",
            Xc: "Pay membership fee",
            ad: "Enter the URL of the log/game"
        }
    });
    function Ic(a) {
        var e = a % 10;
        a %= 100;
        return 1 == e && 11 != a ? I.jb[0] : 2 == e && 12 != a ? I.jb[1] : 3 == e && 13 != a ? I.jb[2] : I.jb[3]
    }
    va(D, function() {
        function a() {
            return ("" + (p.rule || "")).split(",")
        }
        function e() {
            function b(a, b) {
                var c = d[a].childNodes[1];
                c.className = "";
                c.innerHTML = b
            }
            function c(a, c, d) {
                b(a, c == d ? "1.00" : (c / d).toFixed(3).substr(1))
            }
            if (Z.pftab) {
                Z.pftab.style.display = "none";
                Z.pftab_.style.display = "";
                for (var d = Z.pftab.getElementsByTagName("TR"), e = 1; e < d.length; ++e)
                    if (!(2 > d[e].childNodes.length)) {
                        var f = d[e];
                        f.style.borderBottom = "1px solid #444";
                        f = d[e].childNodes[0];
                        f.className = "gray";
                        f.style.textAlign = "left";
                        f = d[e].childNodes[1];
                        f.innerHTML = "-";
                        f.className = "gray";
                        f.style.textAlign = "right"
                    }
                d[16].childNodes[0].innerHTML = "";
                if (e = ~~a()[4]) {
                    var g, f = 4, m = 0, h = "";
                    switch (y(e)) {
                    case 4:
                        f = 4;
                        m = 0;
                        g = D[17];
                        h = I.dd;
                        break;
                    case 3:
                        f = 3;
                        m = 0;
                        g = D[16];
                        h = I.cd;
                        break;
                    case 601:
                        f = 4;
                        m = 0;
                        g = D[18];
                        break;
                    case 602:
                        f = 4;
                        m = 2;
                        g = D[19];
                        break;
                    case 603:
                        f = 4;
                        m = 5;
                        g = D[20];
                        break;
                    case 611:
                        f = 4;
                        m = 0;
                        g = D[21];
                        break;
                    case 612:
                        f = 4;
                        m = 2;
                        g = D[22];
                        break;
                    case 613:
                        f = 4;
                        m = 5;
                        g = D[23];
                        break;
                    case 623:
                        f = 3;
                        m = 5;
                        g = D[24];
                        break;
                    case 633:
                        f = 3,
                        m = 5,
                        g = D[25]
                    }
                    d[16].childNodes[0].innerHTML = h;
                    g && (Z.pftab.style.display = "",
                    Z.pftab_.style.display = "none",
                    h = ~~g[4] + ~~g[5] + ~~g[6] + ~~g[7]) && (c(1, g[4], h),
                    c(2, g[5], h),
                    c(3, g[6], h),
                    4 == f && c(4, g[7], h),
                    c(5, g[8], h),
                    b(6, h),
                    b(7, (0 < g[3] ? "+" : "") + (g[3] / h).toFixed(1)),
                    b(8, ((1 * ~~g[4] + 2 * ~~g[5] + 3 * ~~g[6] + 4 * ~~g[7]) / h).toFixed(2)),
                    0 != (e & 1536) && (e = 1 * g[3] + g[0] * m,
                    b(9, (0 < e ? "+" : "") + (e / h).toFixed(1)),
                    b(10, (~~g[0] / h).toFixed(2))),
                    c(11, g[10], g[9]),
                    c(12, g[11], g[9]),
                    c(13, g[12], g[9]),
                    c(14, g[13], g[9]),
                    b(15, ~~g[2]))
                }
            }
        }
        function c(b) {
            function c(a) {
                for (var b, c = 1; c < arguments.length; ++c)
                    b = g[a].childNodes[c],
                    b.className = "",
                    b.innerHTML = arguments[c]
            }
            function d(a, b, d) {
                c(a, b, (d ? d : "- ") + x(Ic(d)))
            }
            function e(a, b, d, e) {
                c(a, b == d ? "1.00" : (b / d).toFixed(3).substr(1), (e ? e : "- ") + x(Ic(e)))
            }
            var f = Z.rnktab;
            if (f) {
                Z.rnktab.style.display = "none";
                Z.rnktab_.style.display = "";
                for (var g = f.getElementsByTagName("TR"), m = 1; m < g.length; ++m) {
                    var f = g[m]
                      , h = f.childNodes;
                    if (!(2 > h.length)) {
                        16 != m && 18 != m && (f.style.borderBottom = "solid 1px #444");
                        h[0].style.textAlign = "left";
                        h[0].className = "gray";
                        for (var k = 1; k < h.length; ++k)
                            f = h[k],
                            f.className = "gray",
                            f.style.textAlign = "right",
                            f.style.paddingLeft = "0.5em",
                            1 != m && 6 != m && (f.innerHTML = "-")
                    }
                }
                c(18, x("-"));
                f = ~~a()[3];
                W.Pa != f && (W.Pa = f,
                W.L('<PXR V="' + f + '" />'));
                if (f && (Z.rnktab.style.display = "",
                Z.rnktab_.style.display = "none",
                b && (b = b.v2.split(","),
                15 == b.length || 21 == b.length))) {
                    var m = ~~b[0], h = ~~b[1], k = ~~b[2], l = ~~b[3], n = m + h + k + l, J = b[4], w;
                    switch (y(f)) {
                    case 4:
                        w = D[17][2];
                        break;
                    case 3:
                        w = D[16][2];
                        break;
                    case 601:
                        w = D[18][2];
                        break;
                    case 602:
                        w = D[19][2];
                        break;
                    case 603:
                        w = D[20][2];
                        break;
                    case 611:
                        w = D[21][2];
                        break;
                    case 612:
                        w = D[22][2];
                        break;
                    case 613:
                        w = D[23][2];
                        break;
                    case 623:
                        w = D[24][2];
                        break;
                    case 633:
                        w = D[25][2]
                    }
                    var B = ~~b[6]
                      , Xa = ~~b[7]
                      , E = ~~b[8]
                      , z = ~~b[9]
                      , C = ~~b[10]
                      , da = ~~b[11]
                      , pa = ~~b[12]
                      , fa = ~~b[13]
                      , ga = ~~b[14];
                    if (n) {
                        var Ua = f & 16 ? 30 * m + 0 * h + -30 * k : 30 * m + 10 * h + -10 * k + -30 * l
                          , xa = f & 16 ? 1 * m + 2 * h + 3 * k : 1 * m + 2 * h + 3 * k + 4 * l
                          , ya = m + h
                          , wa = f & 16 ? k : l;
                        d(2, Wa(J), Xa);
                        d(7, Wa((J / n).toFixed(1)), E);
                        d(3, Wa(Ua), z);
                        d(8, (xa / n).toFixed(2), C);
                        e(11, m, n, da);
                        ~f & 16 && e(12, ya, n, pa);
                        e(13, wa, n, fa)
                    }
                    if (21 == b.length) {
                        var J = b[15]
                          , da = b[16]
                          , sa = ~~b[17]
                          , ra = ~~b[18]
                          , pa = ~~b[19]
                          , fa = ~~b[20];
                        d(4, Wa(J), sa);
                        d(9, Wa((J / n).toFixed(1)), ra);
                        d(5, Wa(da), pa);
                        d(10, Wa((da / n).toFixed(2)), fa)
                    }
                    J = "-";
                    15 == b.length && E && (J = Xa + E + z + C);
                    21 == b.length && ra && (J = sa + ra);
                    d(15, ~~w, ga);
                    d(16, J, B);
                    c(18, m + x(" + ") + h + x(" + ") + k + (f & 16 ? "" : x(" + ") + l) + x(" = ") + n)
                }
            }
        }
        function b(a) {
            a = a.rankingcs.split(",");
            var b = ""
              , c = I.Cc
              , d = I.tc
              , e = ""
              , f = "-"
              , g = []
              , m = "- -";
            a[0] = a[0] || z.ranking;
            if ("sc3m" == a[0] || "sc3c0m" == a[0] || "sc3c2m" == a[0] || "sc3c5m" == a[0])
                c = I.Dc,
                "sc3c2m" == a[0] && (d = I.Nb),
                "sc3c5m" == a[0] && (d = I.Ob),
                e = I.Ac,
                a[8] && (m = a[8]),
                a[6] && (f = Wa(Number(a[6]).toFixed(1))),
                a[3] && g.push(Wa(Number(a[3]).toFixed(1))),
                a[2] && g.push(Wa(Number(a[2]).toFixed(1))),
                a[1] && g.push(Wa(Number(a[1]).toFixed(1))),
                g.length && g.push("= " + Wa((1 * a[1] + 1 * a[2] + 1 * a[3]).toFixed(1)));
            else if ("sc5m" == a[0] || "sc5c0m" == a[0] || "sc5c2m" == a[0] || "sc5c5m" == a[0])
                c = I.Ec,
                "sc5c2m" == a[0] && (d = I.Nb),
                "sc5c5m" == a[0] && (d = I.Ob),
                e = I.Bc,
                a[9] && (m = a[9]),
                a[7] && (f = Wa(Number(a[7]).toFixed(1))),
                a[5] && g.push(Wa(Number(a[5]).toFixed(1))),
                a[4] && g.push(Wa(Number(a[4]).toFixed(1))),
                a[3] && g.push(Wa(Number(a[3]).toFixed(1))),
                a[2] && g.push(Wa(Number(a[2]).toFixed(1))),
                a[1] && g.push(Wa(Number(a[1]).toFixed(1))),
                g.length && g.push("= " + Wa((1 * a[1] + 1 * a[2] + 1 * a[3] + 1 * a[4] + 1 * a[5]).toFixed(1)));
            g = g.length ? g.join(" ") : "--";
            b += '<div style="display:inline-block;text-align:left;">' + x(I.yc) + "　" + c + "<br>" + x(I.zc) + "　" + f + "　" + x(I.qc) + "　" + d + "</div>";
            b += '<div style="font-size:375%;padding:0.1em 0;">' + m + Ic(m) + "</div>";
            b += x(e) + " " + g + "<br>";
            Z.csranking.innerHTML = b
        }
        function f() {
            if (M[4096] && M[4096].complete && M[4196] && M[4196].complete && M[4296] && M[4296].complete && M[4396] && M[4396].complete && M[4496] && M[4496].complete)
                return !0;
            A.o(I.Uc);
            return !1
        }
        function d(a) {
            var b = Z.panes.childNodes
              , c = b.length;
            da = (da - 1 + a + c - 1) % (c - 1) + 1;
            for (a = 1; a < c; ++a)
                b[a].style.display = a == da ? "" : "none";
            Z.paneDisp.innerHTML = b[da].firstChild.innerHTML;
            Z.panePrev.innerHTML = 2 > da ? "&laquo;" : "　";
            Z.paneNext.innerHTML = 2 > da ? "&raquo;" : "　";
            Z.hdr.style.display = b[da].classList.contains("nohdr") ? "none" : "";
            b = b[da].classList;
            b.contains("init_tlist") && (b.remove("init_tlist"),
            D.nf(Z.tlist));
            b.contains("init_hlist") && (b.remove("init_hlist"),
            D.hf(Z.hlist));
            b.contains("init_klist") && (b.remove("init_klist"),
            D.Uf(B))
        }
        function k(a) {
            return (new Date(a.substr(0, 4),a.substr(4, 2) - 1,a.substr(6, 2),a.substr(8, 2),a.substr(10, 2),a.substr(12, 2))).getTime()
        }
        function l(a) {
            return a.replace(/(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)/, function(a, b, c, d, e, f) {
                return b + "." + c + "." + d + "(" + I.wc[(new Date(b,c - 1,d)).getDay()] + ") " + e + ":" + f
            })
        }
        function n() {
            var a = D[1];
            Z.expdisp.innerHTML = x(I.$c + ":") + (a ? a.replace(/(\d\d\d\d)(\d\d)(\d\d)/, "$1.$2.$3") : "- - - -")
        }
        function g() {
            var a = ~~z.players, b = ~~z.premiumonly, c = ~~z.joinfee, d = z.rule, e = parseInt(d[2], 16), f;
            f = "" + (e & 8 ? "東南" : "東風") + (e & 16 ? "サンマ" : "戦") + " " + (e & 4 ? "喰ナシ" : "喰あり") + (e & 2 ? "赤ナシ" : "赤あり") + " ";
            ia(B, e) && (f += "速");
            e & 256 && (f += "暗");
            e & 512 && (f += "祝");
            var g = ""
              , m = ~~d[3]
              , h = ~~d[4]
              , k = ~~d[5]
              , n = ~~d[6];
            z.Fa = !!z.join;
            if (z.Fa) {
                var y = (e & 16 ? D[16] : D[17])[0];
                m && h ? z.Fa = m <= y && y <= h : m ? z.Fa = m <= y : h && (z.Fa = y <= h)
            }
            z.Fa && (e = (e & 16 ? D[16] : D[17])[2],
            k && n ? z.Fa = k <= e && e <= n : k ? z.Fa = k <= e : n && (z.Fa = e <= n));
            m && h && m == h ? g += ba[m] + "限定" : m && h ? g += ba[m] + "～" + ba[h] : m ? g += ba[m] + "以上" : h && (g += ba[h] + "以下");
            g.length && (k || n) && (g += " & ");
            k && n ? g += "R" + k + "～R" + n : k ? g += "R" + k + "以上" : n && (g += "R" + n + "以下");
            g.length || (g += "段位R指定なし");
            g += "<br>";
            g = c ? g + "だれでもOK" : b ? g + (a ? "固定 " + a + " 名(有効期限3日以上)" : "有効期限3日以上") : g + (a ? "固定 " + a + " 名" : "だれでもOK");
            a = c ? "有効期限" + c + "日分" : a ? "- - -" : b ? "なし" : "無料";
            d = "" + ('<div style="font-size:150%;padding-top:0.25em;">' + decodeURIComponent(z.title) + '</div><hr><table cellpadding=0 cellspacing=0 style="margin:0 auto;text-align:left;"><tr><td><table cellpadding=0 cellspacing=0><tr><td colspan=3>' + x(I.Hc + "JST") + "<br></td></tr><tr><td>" + x(I.Ic) + "</td><td>&nbsp;</td><td>" + l(d[0]) + "</td></tr><td>" + x(I.Gc) + "</td><td></td><td>" + l(d[1]) + '</td></tr></td></tr><tr><td colspan=3 style="padding-top:0.25em;">' + x(I.Fc) + "<br>" + f + '</td></tr></table></td><td style="padding:0 0 0 1em;"><table cellpadding=0 cellspacing=0><tr><td>' + x(I.xc) + "<br>" + a + '<br></td></tr><tr><td style="padding-top:0.25em;">' + x(I.uc) + "<br>" + g + "</td></tr></table></td></tr></table>");
            Z.csmain.innerHTML = d;
            W.L("<DATE />")
        }
        function h() {
            pa = void 0;
            Z.joincs0 && W.L("<DATE />")
        }
        function m(a) {
            return '<div style="margin:0.5em 0;"><div class=select-wrapper><button name=rule id=rule' + a + ' style="width:11.5em;text-align:left;"></button></div><button name=join id=join' + a + " disabled>" + I.Rb + "</button></div>"
        }
        function y(a) {
            if (0 != (a & 1536))
                switch (a) {
                case 1057:
                    return 601;
                case 545:
                    return 602;
                case 1569:
                    return 603;
                case 1065:
                    return 611;
                case 553:
                    return 612;
                case 1577:
                    return 613;
                case 1585:
                    return 623;
                case 1593:
                    return 633
                }
            else
                return a & 16 ? 3 : 4
        }
        function C(a) {
            return a ? (ka(a) + "　　　").substr(0, 6) + "&nbsp;&nbsp;" + J[a] : "SELECT GAME"
        }
        function w(a) {
            return a.replace(/,/g, "</td><td>").replace(/\|/g, "</td></tr><tr><td>").replace(/>\(/g, '><table cellpadding=0 cellspacing=0 width=100% style="border-collapse:collapse;"><tr><td>').replace(/\)</g, "</td></tr></table><")
        }
        var B, z, J = {
            n: [],
            gb: [],
            ab: []
        }, E = {}, da = location.search.match(/^\?(C[0-9]{8})/) ? 2 : 1, pa;
        return {
            cc: function() {
                E = {};
                location.search.match(/^\?L([1-9][0-9]{3})/) ? (W.L({
                    tag: "LOBBY",
                    id: RegExp.$1
                }),
                B = ~~RegExp.$1) : location.search.match(/^\?(C[0-9]{8})/) ? (B = ~~("1" + RegExp.$1.substr(1, 4)),
                W.L({
                    tag: "CS",
                    lobby: RegExp.$1
                })) : (B = 0,
                D.o({
                    tag: "LOBBY"
                }))
            },
            LOBBY: function(a, f) {
                Wb.s.canvas.style.visibility = "";
                W.Pa = 0;
                if (u.tr || u.tredit)
                    return D.TRAINING({
                        file: u.tr || u.tredit
                    }, f);
                var h;
                h = D[17];
                var k = D[16];
                D[2] || h.length || k.length ? (h.length || (h = [0, 0, 1500]),
                k.length || (k = [0, 0, 1500]),
                h = "<tr><td class=gray>四麻:</td><td>" + ba[h[0]] + "</td><td class=gray>R</td><td>" + ~~h[2] + '</td><td style="padding:0 0 0 0.25em;">' + h[1] + "</td><td class=gray>/</td><td>" + ma[~~h[0]] + "</td><td class=gray>pt</td></tr>",
                k = "<tr><td class=gray>三麻:</td><td>" + ba[k[0]] + "</td><td class=gray>R</td><td>" + ~~k[2] + '</td><td style="padding:0 0 0 0.25em;">' + k[1] + "</td><td class=gray>/</td><td>" + ma[~~k[0]] + "</td><td class=gray>pt</td></tr>") : (h = "<tr><td class=gray>" + I.bd + "</td></tr>",
                k = "");
                h = '<div id=panes style="height:16em;">' + ('<div id=hdr><table cellpadding=0 cellspacing=0 style="width:100%;white-space:nowrap;text-align:right;"><tr><td><table cellpadding=0 cellspacing=0 style="width:100%;"><tr><td style="text-align:left;">' + x(I.fd + ":") + "<span id=lnn0>" + ~~J.n[0] + "</span> " + x(I.gd + ":") + "<span id=lnn2>" + ~~J.n[2] + "</span> " + x(I.ed + ":") + "<span id=lnn3>" + ~~J.n[3] + "</span> </td></tr><tr><td><span id=iddisp>" + Ca(D[0]) + '</span> <span id=expdisp></span></td></tr></table></td><td rowspan=2 style="width:1px;padding-left:0.25em;"><table cellpadding=0 cellspacing=0 align=right>' + h + k + '</table></td></tr></table><div style="display:none;"></div><hr></div>');
                h += '<div style="display:none;padding:1em 1em;"><span style="display:none;">　</span><div id=lbinfo style="height:3em;">' + x((oa ? "" : I.hd) + " " + I.jd) + "</div><br><div class=select-wrapper><button name=testplay>" + I.Yc + "</button></div><br><br><br>" + x(I.kd) + "</div>";
                1E4 > B ? h += '<div style="display:none;padding:0.25em 0;"><span style="display:none;">' + (0 == B ? "対戦" : "個室L" + Va(4, B)) + "</span>" + m(0) + m(1) + m(2) + "</div>" : 2E4 > B && (h += '<div style="display:none;"><span style="display:none;">大会C' + Va(4, B % 1E4) + '</span><div id=csmain style="height:9em;"></div><span style="font-size:150%;padding:0 1em;">' + x(I.zb) + "<span id=lnj0>" + ~~J.gb[0] + "</span>" + x(I.Qa) + " " + x(I.yb) + "<span id=lng0>" + ~~J.ab[0] + "</span>" + x(I.Qa) + "</span>",
                h += "<button name=join id=joincs0 disabled>　</button></div>");
                1E4 <= B && 2E4 > B && (h += '<div style="display:none;"><span style="display:none;">大会C' + Va(4, B % 1E4) + '</span><div id=csranking style="height:9em;"></div><span style="font-size:150%;padding:0 1em;">' + x(I.zb) + "<span id=lnj1>" + ~~J.gb[0] + "</span>" + x(I.Qa) + " " + x(I.yb) + "<span id=lng1>" + ~~J.ab[0] + "</span>" + x(I.Qa) + "</span>",
                h += "<button name=join id=joincs1 disabled>　</button></div>");
                0 == B ? h += w('<div style="display:none;"><span style="display:none;">' + I.he + "</span>" + m(3) + '<table cellpadding=0 cellspacing=0 id=rnktab style="margin:0 auto;"><tr><td valign=top style="min-width:10em;">(,' + I.na[0] + "," + I.na[1] + "|" + I.na[2] + ",,|" + I.na[3] + ",,|" + I.na[4] + ",,|" + I.na[5] + ',,)</td><td style="width:0.5em;"></td><td valign=top style="min-width:7em;">(,' + I.na[6] + "," + I.na[7] + '|,,|,,|,,|,,)</td><td rowspan=2 style="width:1em;"></td><td rowspan=2 valign=top style="min-width:11em;">(' + I.na[8] + ",,|" + I.na[9] + ",,|" + I.na[10] + ',,|<div style="border-bottom:1px solid transparent;">&nbsp;</div>|' + I.na[12] + ",,|" + I.na[13] + ',,)</td></tr><tr><td colspan=3 align=right style="padding:0;"><table cellpadding=0 cellspacing=0 style="border-collapse:collapse;"><tr><td style="padding-right:0.5em;">' + I.na[14] + ",</td></tr></table></tr></table><div id=rnktab_><br><br>" + x(I.Yb) + "</div></div>") : (h += '<div style="display:none;"><span style="display:none;">' + (1E4 > B ? "個室L" : "大会C") + Va(4, B % 1E4) + '</span><div style="height:8.5em;border:1px solid #444;text-align:left;margin-bottom:0.5em;position: relative;"><button name=chatInput style="font-size:100%;position:absolute;right:0;top:8.5em;">&middot;&middot;&middot;</button><div id=chat style="height:100%;font-size:75%;overflow-y:scroll;user-select:text;"><div>#ENTER LOBBY ' + B + "</div></div></div>",
                1E4 > B ? h += m(3) : 2E4 > B && (h += '<span style="font-size:150%;padding:0 1em;">' + x(I.zb) + "<span id=lnj2>" + ~~J.gb[0] + "</span>" + x(I.Qa) + " " + x(I.yb) + "<span id=lng2>" + ~~J.ab[0] + "</span>" + x(I.Qa) + "</span><button name=join id=joincs2 disabled>　</button>"),
                h += "</div>");
                0 == B && (h += w('<div style="display:none;"><span style="display:none;">' + I.ie + "</span>" + m(4) + '<table cellpadding=0 cellspacing=0 id=pftab style="margin:0 auto;"><tr><td valign=top style="min-width:6.5em;">(' + I.ha[0] + ",|" + I.ha[1] + ",|" + I.ha[2] + ",|" + I.ha[3] + ",|" + I.ha[4] + ',)</td><td style="width:1em;"></td><td valign=top style="min-width:8em;">(' + I.ha[5] + ",|" + I.ha[6] + ",|" + I.ha[7] + ",|" + I.ha[8] + ",|" + I.ha[9] + ',)</td><td style="width:1em;"></td><td valign=top style="min-width:6.5em;">(' + I.ha[10] + ",|" + I.ha[11] + ",|" + I.ha[12] + ",|" + I.ha[13] + ",|" + I.ha[14] + ',)</td></tr><tr><td colspan=5 class=gray style="font-size:75%;padding:0.2em;"></td></tr></table><div id=pftab_><br><br>' + x(I.Yb) + "</div></div>"));
                h += '<div class="nohdr init_hlist" style="display:none;height:100%;"><span style="display:none;">' + I.Pb + '</span><div style="position:relative;height:100%;"><div class=sscl id=hlist style="position:relative;height:100%;border:solid 1px #222;overflow-y:scroll;"></div><div class=sblink style="visibility:hidden;">▼</div></div></div>';
                h += '<div class="nohdr init_klist" style="display:none;height:100%;"><span style="display:none;">' + I.Qb + '</span><div style="position:relative;height:100%;"><div class=sscl id=klist style="position:relative;height:100%;border:solid 1px #222;overflow-y:scroll;"></div><div class=sblink style="visibility:hidden;">▼</div><button name=wgF0 class="ra0 bgb" style="position:absolute;left:0em;bottom:0em;">－</button><button name=wgF1 class="ra0 bgb" style="position:absolute;left:2em;bottom:0em;">－</button><button name=wgF2 class="ra0 bgb" style="position:absolute;left:4em;bottom:0em;">－</button></div></div>';
                h = h + '<div class="nohdr init_tlist" style="display:none;height:100%;"><span style="display:none;">Trainingβ</span><div style="position:relative;height:100%;"><div class=sscl id=tlist style="position:relative;height:100%;border:solid 1px #222;overflow-y:scroll;"></div><div class=sblink style="visibility:hidden;">▼</div></div></div>' + ('<div style="display:none;padding:2em 0"><span style="display:none;">Tools</span> <button name=openurl>OpenURL</button> <button name=help>' + I.Wc + "</button> <button name=hairi>" + I.Zc + "</button><br><br><button name=purchase>" + I.Xc + "</button><br></div>");
                fb && (h += '<div style="display:none;"><span style="display:none;">Caution</span><div style="padding:1em 4em;">' + I.Qc + "</div></div>");
                h += "</div><hr>";
                k = !!Object.keys(E).length;
                f.innerHTML = h + ('<table cellpadding=0 cellspacing=0 style="width:100%;"><tr><td style="position:relative;vertical-align:middle;"><div id=paneDisp style="position:absolute;font-size:300%;width:100%;padding:0.25em 0;pointer-events:none;">　</div><button name=panePrev class=ra1 style="font-size:300%;width:50%;height:1.5em;">　</button><button name=paneNext class=ra2 style="font-size:300%;width:50%;height:1.5em;">　</button></td><td style="width:9.5em;"><button name=cancel style="width:100%;height:2.5em;' + (k ? "" : "display:none;") + '">CANCEL</button><button name=logout style="width:100%;height:2.5em;' + (k ? "display:none;" : "") + '">LOGOUT</button></td></tr></table>');
                Dc(f);
                D["#rule0"]();
                e();
                c();
                n();
                d(0);
                1E4 <= B && 2E4 > B && (g(),
                b({
                    rankingcs: ""
                }),
                W.Pa = -1,
                W.L('<PXR V="-1" />'))
            },
            tf: function(a) {
                J.n = a.n.split(",");
                J.gb = a.j.split(",");
                J.ab = a.g.split(",");
                Z.lnn0 && (Z.lnn0.innerText = ~~J.n[0],
                Z.lnn2.innerText = ~~J.n[2],
                Z.lnn3.innerText = ~~J.n[3],
                D["#rule0"]());
                for (a = 0; 3 > a; ++a)
                    Z["lnj" + a] && (Z["lnj" + a].innerText = ~~J.gb[0]),
                    Z["lng" + a] && (Z["lng" + a].innerText = ~~J.ab[0]);
                return 1
            },
            pf: function(a) {
                var b = a.lobby;
                b && (4 == b.length ? (B = ~~b,
                D.o({
                    tag: "LOBBY"
                })) : 9 == b.length && (B = ~~("1" + b.substr(1, 4))));
                var b = $a.getElementById("chat")
                  , c = a.text;
                if (b && c && c.length) {
                    c = decodeURIComponent(c);
                    (a = a.uname) && a.length && (c = decodeURIComponent(a) + ": " + c);
                    a = $a.createElement("DIV");
                    a.innerText = c;
                    var c = b.scrollHeight
                      , d = b.scrollTop + b.clientHeight;
                    b.appendChild(a);
                    c <= d && d < b.scrollHeight && (b.scrollTop = b.scrollHeight)
                }
                return 1
            },
            qf: function(a) {
                a && (z = a,
                z.rule = z.rule.split(","),
                z.join = ~~z.join,
                z.joinfee = ~~z.joinfee,
                z.players = ~~z.players,
                z.premiumonly = ~~z.premiumonly);
                Z.joincs0 ? g() : D.o({
                    tag: "LOBBY"
                });
                return 1
            },
            rf: function(a) {
                var b = Z.joincs0;
                if (!b)
                    return 1;
                a = k(a.t);
                var c = k(z.rule[0])
                  , d = k(z.rule[1]);
                if (d <= a)
                    b.innerText = I.nc,
                    b.disabled = !0;
                else if (z.Fa)
                    if (a < c) {
                        var e = (c - a) / 1E3;
                        b.innerText = I.Ya[0] + (86400 < e ? (e / 24 / 60 / 60).toFixed(1) + I.Ya[1] : 3600 < e ? (e / 60 / 60).toFixed(1) + I.Ya[2] : 60 < e ? (e / 60).toFixed(1) + I.Ya[3] : 5 * ~~(e / 5) + I.Ya[4]);
                        b.disabled = !0
                    } else
                        e = parseInt(z.rule[2], 16),
                        b.innerText = I.Rb,
                        b.disabled = !!E[e];
                else
                    z.joinfee ? (b.innerText = I.oc,
                    b.disabled = !1) : z.premiumonly ? (b.innerText = I.pc,
                    b.disabled = !1) : (b.innerText = I.mc,
                    b.disabled = !0);
                Z.joincs1.innerText = Z.joincs2.innerText = b.innerText;
                Z.joincs1.disabled = Z.joincs2.disabled = b.disabled;
                pa || (pa = setTimeout(h, a < c - 6E4 || d < a || c < a && a < d - 3E4 ? 3E4 : 5E3));
                return 1
            },
            vf: c,
            wf: function(a) {
                Z.joincs0 && b(a)
            },
            panePrev: function() {
                d(-1)
            },
            paneNext: function() {
                d(1)
            },
            testplay: function() {
                A.Y('<div class=A id="#testplay-64">' + ka(64) + '<div class=desc>(４人打 東風 喰断アリ 赤アリ 速)</div></div><div class=A id="#testplay-0">' + ka(0) + '<div class=desc>(４人打 東風 喰断アリ 赤アリ)</div></div><div class=A id="#testplay-16">' + ka(16) + '<div class=desc>(３人打 東風 喰断アリ 赤アリ)</div></div><div class=A id="#testplay-1536">' + ka(1536) + '<div class=desc>(４人打 東風 喰断アリ 赤アリ 祝儀)</div></div><div class=A id="#testplay-1552">' + ka(1552) + '<div class=desc>(３人打 東風 喰断アリ 赤アリ 祝儀)</div></div><div class=A id="#testplay-2064">東天紅 三麻β<div class=desc>(３人打 東天紅)</div></div>', "font-size:80%;text-align:left;", 0)
            },
            "#testplay": function(a, b) {
                if (f()) {
                    var c = ~~b;
                    lb(!0, 3, 1);
                    Z.cancel.style.display = "";
                    Z.logout.style.display = "none";
                    W.L({
                        tag: "JOIN",
                        t: B + "," + c
                    })
                }
            },
            rule: function(a) {
                D["#rule0"]("#" + a.id)
            },
            "#rule0": function(b, d) {
                for (var f = 0; f < na.length; ++f)
                    J[na[f]] = ~~J.gb[f] + ":<div class=n2r>" + ~~J.ab[f] + "</div>";
                var g = []
                  , m = D[2]
                  , h = D[17]
                  , k = D[16]
                  , l = "";
                b && void 0 === d && (l += '<div class=A id="' + b + '-0">SELECT GAME</div>');
                for (var n = Gc.concat(~~p.swar ? Hc : []), f = 0; f < n.length; ++f) {
                    var y = !0
                      , w = n[f]
                      , z = w & 16 ? k : h;
                    if (!B)
                        switch (ja(w) + 4 * (0 != (w & 1536))) {
                        case 0:
                            y = 13 <= z[0] && 1800 <= z[2] ? !1 : !0;
                            break;
                        case 1:
                            y = 16 <= z[0] && 2E3 <= z[2] ? !1 : 9 <= z[0] || 60 <= m;
                            break;
                        case 2:
                            y = 13 <= z[0] && 1800 <= z[2] ? !0 : !1;
                            break;
                        case 3:
                            y = 16 <= z[0] && 2E3 <= z[2] ? m : !1;
                            break;
                        case 6:
                            y = 13 <= z[0] && 1800 <= z[2] ? m : !1
                        }
                    else if (1E4 > B && ja(w) + 4 * (0 != (w & 1536)))
                        continue;
                    y ? (g[w] = 1,
                    l && (l += '<div class="A nobr"id="' + b + "-" + w + '">' + C(w) + "</div>")) : l && "#rule3" == b && (l += '<div class="A nobr" id="' + b + "-" + w + '">' + ka(w) + "</div>")
                }
                b && "#rule3" != b && l && !B && (9 <= h[0] || 60 <= m || (l += '<div class=A id="' + b + '-128">※四麻上級卓</div>'),
                9 <= k[0] || 60 <= m || (l += '<div class=A id="' + b + '-144">※三麻上級卓</div>'),
                13 <= h[0] && 1800 <= h[2] || (l += '<div class=A id="' + b + '-32">※四麻特上卓</div>'),
                13 <= k[0] && 1800 <= k[2] || (l += '<div class=A id="' + b + '-48">※三麻特上卓</div>'),
                13 <= h[0] && 1800 <= h[2] && m || (l += '<div class=A id="' + b + '-1056">※四麻雀荘戦</div>'),
                13 <= k[0] && 1800 <= k[2] && m || (l += '<div class=A id="' + b + '-1072">※三麻雀荘戦</div>'),
                16 <= h[0] && 2E3 <= h[2] && m || (l += '<div class=A id="' + b + '-160">※四麻鳳凰卓</div>'),
                16 <= k[0] && 2E3 <= k[2] && m || (l += '<div class=A id="' + b + '-176">※三麻鳳凰卓</div>'));
                b && void 0 === d && (l += '<div class=A id="' + b + '-showall">※喰断ナシON/OFF</div>');
                if (l)
                    A.Y(l, "text-align:left;", 0);
                else if (b && "showall" == d)
                    Db("swar", ~~!~~p.swar, 0);
                else {
                    m = a();
                    5 > m.length && (m = [1, 9]);
                    if (b) {
                        if (m[~~b.slice(-1)] == d)
                            return;
                        m[~~b.slice(-1)] = ~~d
                    }
                    for (f = 0; 5 > f; ++f)
                        if (Z["rule" + f] && Z["join" + f]) {
                            w = ~~m[f];
                            if (0 == (w & 2048) && ~w & 1) {
                                switch (w) {
                                case 128:
                                case 144:
                                    A.o(I.Rc);
                                    break;
                                case 32:
                                case 48:
                                    A.o(I.Vc);
                                    break;
                                case 160:
                                case 176:
                                    A.o(I.Sc);
                                    break;
                                case 1056:
                                case 1072:
                                    A.o(I.Tc)
                                }
                                w = 0
                            }
                            3 == f && w && !g[w] ? (m[f] = w,
                            Z["join" + f].disabled = !0,
                            Z["rule" + f].innerHTML = ka(w)) : (g[w] || (w = 0),
                            E[w] || (Z["join" + f].disabled = !w),
                            m[f] = w,
                            Z["rule" + f].innerHTML = C(w))
                        }
                    p.rule = m;
                    "#rule3" == b && c();
                    "#rule4" == b && e()
                }
            },
            join: function(b) {
                if (f()) {
                    var c;
                    if ("joincs0" != b.id && "joincs1" != b.id && "joincs2" != b.id) {
                        var d = a();
                        c = d[~~b.id.slice(-1)];
                        for (b = 0; 5 > b; ++b)
                            c == d[b] && Z["rule" + b] && (Z["rule" + b].disabled = Z["join" + b].disabled = !0)
                    } else if (z.Fa)
                        c = parseInt(z.rule[2], 16),
                        Z.joincs0.disabled = Z.joincs1.disabled = Z.joincs2.disabled = !0;
                    else {
                        if (z.joinfee) {
                            var e = p.uname;
                            if (!e || !e.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/)) {
                                A.o(I.kc);
                                return
                            }
                            A.o(I.vc.replace("###", z.joinfee), 3, function() {
                                Sa(qa[32]() + "?lobby=" + B + "&uname=" + e, function(a) {
                                    a = Da(a);
                                    H.ERR({
                                        code: a.res
                                    });
                                    1027 == a.res && (D[1] = a.expire,
                                    n(),
                                    D.cc())
                                })
                            });
                            return
                        }
                        if (z.premiumonly) {
                            e = p.uname;
                            if (!e || !e.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/)) {
                                A.o(I.lc);
                                return
                            }
                            H.ERR({
                                code: 1020
                            });
                            return
                        }
                    }
                    lb(!0, 1);
                    Z.cancel.style.display = "";
                    Z.logout.style.display = "none";
                    W.L({
                        tag: "JOIN",
                        t: B + "," + c
                    });
                    E[c] = 1
                }
            },
            openurl: function() {
                A.o(I.ad + '<br><input type=text size=20 value="" style="font-size:100%;" value=""/>', 3, function(a) {
                    a = a.getElementsByTagName("INPUT")[0];
                    u.Pf(a.value)
                })
            },
            cancel: function() {
                lb(!1, "rule", "join", 1);
                Z.cancel.style.display = "none";
                Z.logout.style.display = "";
                E = {};
                D["#rule0"]();
                W.L({
                    tag: "JOIN"
                })
            },
            logout: function() {
                lb(!0, 3, 1);
                v.ka(11)
            },
            purchase: function() {
                var a = p.uname;
                a && a.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? oa && store ? D.o({
                    tag: "STORE"
                }) : r.open("https://tenhou.net/reg/?ID" + RegExp.$1, "_blank") : A.o("ログイン画面の「新規ID」からIDを取得してください")
            },
            hairi: function() {
                r.open("https://tenhou.net/2/", oa ? "_system" : "_blank")
            },
            help: function() {
                r.open("https://tenhou.net/man/", oa ? "_system" : "_blank")
            },
            chatInput: function() {
                A.o('CHAT:<input type=text size=15 style="font-size:100%;"/>', 3, function(a) {
                    a = a.getElementsByTagName("INPUT")[0];
                    (a = a.value) && W.L({
                        tag: "CHAT",
                        text: a
                    })
                })
            },
            Of: function(b) {
                if (Z.hdr && !Z.joincs0) {
                    var c = Z.hdr.childNodes;
                    if (c && !(2 > c.length))
                        if (b && "join" == b.name) {
                            b = ~~a()[~~b.id.slice(-1)];
                            var d = ~~D[17][0]
                              , e = ~~D[16][0]
                              , f = "";
                            if (!(b & 3584)) {
                                var g = [0, 0, 0, 0];
                                switch (ja(b)) {
                                case 0:
                                    g[0] = 20;
                                    g[1] = 10;
                                    break;
                                case 1:
                                    g[0] = 40;
                                    g[1] = 10;
                                    break;
                                case 2:
                                    g[0] = 50;
                                    g[1] = 20;
                                    break;
                                case 3:
                                    g[0] = 60,
                                    g[1] = 30
                                }
                                b & 16 ? (g[0] += g[1],
                                g[1] = 0,
                                g[2] = la[e]) : g[3] = la[d];
                                b & 8 && (g[0] *= 1.5,
                                g[1] *= 1.5,
                                g[2] *= 1.5,
                                g[3] *= 1.5);
                                f += ba[b & 16 ? e : d] + x("[");
                                f = b & 16 ? f + (x("1" + Ic(1)) + "+" + g[0] + "   " + x("2" + Ic(2)) + "+" + g[1] + "   " + x("3" + Ic(3)) + (0 > g[2] ? "" : "+") + g[2]) : f + (x("1" + Ic(1)) + "+" + g[0] + "   " + x("2" + Ic(2)) + "+" + g[1] + "   " + x("3" + Ic(3)) + "+0   " + x("4" + Ic(4)) + (0 > g[3] ? "" : "+") + g[3]);
                                f += x("]") + " "
                            }
                            f += sb((0 != (b & 2048) ? "１局" : b & 8 ? "東南" : "東風") + (b & 3584 ? "打ち切り" : b & 16 ? "+3局サドンデス" : "+4局サドンデス"));
                            f += " " + sb(x("ウマ") + (0 != (b & 2048) ? "×" : 0 != (b & 1536) ? b & 16 ? "0-30" : "10-30" : b & 16 ? "0-20" : "10-20"));
                            f += " " + sb(x("1本場") + (0 != (b & 2048) ? "--" : 0 != (b & 1536) && ~b & 8 ? b & 16 ? "1000" : "1500" : b & 16 ? "200" : "300"));
                            f += " " + sb(x("明槓ドラ") + (b & 3584 ? "先" : "後"));
                            f += " " + sb(x("喰断") + (b & 4 ? "×" : "○"));
                            f += " " + sb(x("祝儀") + (~b & 512 ? "×" : b & 1024 ? "1枚5000点" : "1枚2000点"));
                            f += " " + sb(x("東西場") + (0 != (b & 1536) && ~b & 8 ? "○" : "×"));
                            f += " " + sb(x("和了止め") + "○");
                            f += " " + sb(x("聴牌止め") + "○");
                            0 != (b & 1536) && (f += " " + sb(x("段位変動") + "ナシ"));
                            c[1].innerHTML = f;
                            c[0].style.display = "none";
                            c[1].style.display = ""
                        } else
                            c[1].innerHTML = "",
                            c[0].style.display = "",
                            c[1].style.display = "none"
                }
            },
            Tf: function(b) {
                var c = a();
                c[3] = c[4] = b;
                p.rule = c
            }
        }
    }());
    D["#rule1"] = D["#rule2"] = D["#rule3"] = D["#rule4"] = D["#rule0"];
    Hb({
        JP: {
            Tb: "個室",
            Sb: "大会",
            qd: "お試しゲストログイン",
            rd: "新規ID登録",
            pd: "IDで続きから",
            Ad: "プレーヤ名を8文字以内で入力してください",
            ud: "このプレーヤ名で新しいIDを作成しますか？",
            md: "ID変更",
            td: "男",
            sd: "女",
            Jd: "男",
            Gd: "女",
            nd: "大会·個室",
            od: "段位·個室",
            yd: "プレーヤID(半角19文字)を入力してください",
            zd: "※アプリ版以外で作成したIDも使用可能です。",
            Bd: "IDの書式が正しくありません",
            xd: "部屋番号の数字部分を入力してください。",
            ld: "入力してあるIDをクリアしますがよろしいですか？IDを紛失しないようにコピーしてください。",
            Hd: "ランキング戦",
            Id: "<div class=desc>(段位戦·雀荘戦)</div>",
            Cd: "イベント会場１",
            Dd: "<div class=desc>(公式イベントで使用します)</div>",
            Ed: "イベント会場２",
            Fd: "",
            Md: "個室番号指定",
            Nd: "<div class=desc>(L0123やC01234567などの部屋番号)</div>",
            Kd: "新規作成",
            Ld: "<div class=desc>(個室作成ページを開きます)</div>",
            wd: "認定段位/級位 : $DAN\n\n$UNAME 殿\n\n貴殿は天鳳において卓越した技能を遺憾なく発揮され優秀な\n成績をおさめられました。今後もさらなる雀力向上に精進され\nますようここに段位/級位を認定し栄誉を称えます。\n\n$YYYY年$MM月$DD日\n天鳳段位認定協会\n",
            vd: "認定段位/級位 : $DAN\n\n$UNAME 殿\n\n貴殿は天鳳において卓越した技能を遺憾なく発揮され優秀な\n成績をおさめられました。今後もさらなる雀力向上に精進され\nますようここに段位/級位を認定し栄誉を称えます。\n\n$YYYY年$MM月$DD日\n天鳳サンマ漁業協会\n"
        },
        EN: {
            Tb: "個室",
            Sb: "大会",
            qd: "Guest Login",
            rd: "New ID",
            pd: "Existing ID",
            Ad: "Enter player name in 8 characters or less.",
            ud: "Register this player name?",
            td: "M",
            sd: "F",
            Jd: "<b>M</b>ale",
            Gd: "<b>F</b>emale",
            md: "Change ID",
            nd: "Lobby/Room",
            od: "Lobby/Room",
            yd: "Enter your 19-characters Player ID",
            zd: "*IDs created outside of this APP are also accepted",
            Bd: "The entered ID is wrong format.",
            xd: "Enter the number of the lobby.",
            ld: "Clear the entered ID?<br>Make a copy your ID not to lose it.",
            Hd: "Ranked Match",
            Id: "<div class=desc>(段位戦·雀荘戦)</div>",
            Cd: "Event Venue 1",
            Dd: "<div class=desc>(official events)</div>",
            Ed: "Event Venue 2",
            Fd: "",
            Md: "Custom Lobby",
            Nd: "<div class=desc>(e.g. L0123 or C01234567)</div>",
            Kd: "New Lobby",
            Ld: "<div class=desc>(opens a new browser page)</div>",
            wd: "You have been promoted to: $DAN\n\nDear $UNAME\n\nTenhou recognizes your superior display of expertise and mastery of the game. In consideration of your outstanding game records, we hereby grant you the rank of $DAN in expectation that you will continue to brush up your mahjong abilities to achieve new heights.\n\n$YYYY-$MM-$DD\nThe Tenhou Rank Committee\n",
            vd: "You have been promoted to: SANMA $DAN\n\nDear $UNAME\n\nTenhou recognizes your superior display of expertise and mastery of the game. In consideration of your outstanding game records, we hereby grant you the rank of $DAN in expectation that you will continue to brush up your mahjong abilities to achieve new heights.\n\n$YYYY-$MM-$DD\nThe Tenhou Saury Committee\n"
        }
    });
    va(D, function() {
        function a() {
            Z.uname.value = p.uname && 19 == p.uname.length && (~~p.hideid || p.gpid) ? "ID########-########" : p.uname || "NoName"
        }
        var e = new Image;
        setTimeout(function() {
            e.src = "https://cdn.tenhou.net/3/res/img/bglogow_0921x0651.png"
        }, 1);
        return {
            LOGIN: function(c, b) {
                var f = "";
                location.search.match(/^\?(L[1-9][0-9]{3})/) ? f = x(I.Tb) + RegExp.$1 : location.search.match(/^\?(C[0-9]{8})/) && (f = x(I.Sb) + RegExp.$1.substr(0, 5));
                b.style.border = "";
                b.innerHTML = "" + ('<div style="position:relative;"><div class=select-wrapper style="float:left;"><button name=lang></button></div><button name=cfg style="float:right;font-family:cwTeX-Q-Kai-T,icons2,serif;""></button><img src="' + e.src + '" width=' + ~~(3.683 * N[1] * 2.3 / t) + " height=" + ~~(2.604 * N[1] * 2.3 / t) + ' style="margin:0.5em 0;"/><span style="position:absolute;bottom:2em;">' + f + '</span></div><div id=pane0><table cellpadding=0 cellspacing=0 width=100%><tr><td><input name=uname size=22 style="margin:0;padding:0;color:#fff;background:none;text-align:center;border:solid 1px #444;width:100%;"/></td><td width=1><div class=select-wrapper><button name=sx></button></div></td><td width=1><button name=ok style="padding:0 1em;">OK</button></td></tr></table><button name=clearid>' + I.md + "</button><div class=select-wrapper><button name=mvlb>" + (f ? I.od : I.nd) + '</button></div></div><div id=pane1><button name=ok style="width:100%;">' + I.qd + "</button><br><button name=regid>" + I.rd + "</button><button name=idcont>" + I.pd + "</button><br></div>");
                Dc(b);
                Z.pane0.style.display = Z.pane1.style.display = "none";
                Z["pane" + (p.uname ? 0 : 1)].style.display = "";
                D["#sx"]();
                D["#lang"]();
                a();
                cb && oa && ua(Z.uname, {
                    focus: function() {
                        ub(1)
                    },
                    blur: function() {
                        ub()
                    }
                });
                "AUTOLOGIN" == c.tag || p.gpid ? (D.b.style.display = "none",
                D.ok()) : Wb.s.canvas.style.visibility = "hidden"
            },
            NINTEI: function(a, b) {
                fc().Kf = Fc(3E3);
                var c = a.nintei
                  , d = "%E6%96%B0%E4%BA%BA %EF%BC%99%E7%B4%9A %EF%BC%98%E7%B4%9A %EF%BC%97%E7%B4%9A %EF%BC%96%E7%B4%9A %EF%BC%95%E7%B4%9A %EF%BC%94%E7%B4%9A %EF%BC%93%E7%B4%9A %EF%BC%92%E7%B4%9A %EF%BC%91%E7%B4%9A %E5%88%9D%E6%AE%B5 %E4%BA%8C%E6%AE%B5 %E4%B8%89%E6%AE%B5 %E5%9B%9B%E6%AE%B5 %E4%BA%94%E6%AE%B5 %E5%85%AD%E6%AE%B5 %E4%B8%83%E6%AE%B5 %E5%85%AB%E6%AE%B5 %E4%B9%9D%E6%AE%B5 %E5%8D%81%E6%AE%B5 %E5%A4%A9%E9%B3%B3%E4%BD%8D".split(" ")
                  , e = !1
                  , l = -1
                  , n = ""
                  , g = "20201010";
                c.match(/%E3%82%B5%E3%83%B3%E3%83%9E/) && (e = !0);
                c.match(/ ((?:%[0-9A-F]{2})+)%0A%0A/) && (l = d.indexOf(RegExp.$1));
                c.match(/%0A%0A([^ ]+) %E6%AE%BF%0A/) && (n = decodeURIComponent(RegExp.$1));
                c.match(/%0A%0A(\d{4})%E5%B9%B4(\d{2})%E6%9C%88(\d{2})%E6%97%A5%0A/) && (g = RegExp.$1 + RegExp.$2 + RegExp.$3);
                c = decodeURIComponent(c);
                0 < l && n && (c = (e ? I.vd : I.wd).replace(/\$UNAME/g, n).replace(/\$DAN/g, decodeURIComponent(d[l])).replace(/\$YYYY/g, g.substr(0, 4)).replace(/\$MM/g, g.substr(4, 2)).replace(/\$DD/g, g.substr(6, 2)));
                c = c.replace(/\n/g, "<br>");
                b.innerHTML = '<div style="font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;">認定</div><div style="text-align:left;margin:1em 0;display:inline-block;">' + c + '</div><button name=ok style="padding:0 2em;">OK</button>';
                Dc(b)
            },
            clearid: function() {
                A.o(I.ld, 3, function() {
                    p.removeItem("uname");
                    a();
                    Z.pane0.style.display = "none";
                    Z.pane1.style.display = ""
                })
            },
            sx: function() {
                A.Y('<div class=A id="#sx-M">' + I.Jd + '</div><div class=A id="#sx-F">' + I.Gd + "</div>", "", 0)
            },
            "#sx": function(a, b) {
                "F" == (a ? b : "F" == p.sx ? "F" : "") ? (Z.sx.innerHTML = I.sd,
                p.sx = "F") : (Z.sx.innerHTML = I.td,
                p.removeItem("sx"))
            },
            lang: function() {
                A.Y('<div class=A id="#lang-JP">JP</div><div class=A id="#lang-EN">EN</div>', "", 0)
            },
            "#lang": function(a, b) {
                var c = a ? b : Fb;
                Z.lang.innerHTML = c;
                "JP" == c ? p.removeItem("lang") : p.lang = c;
                Fb != c && location.reload()
            },
            cfg: function() {
                D.o({
                    tag: "CONFIG"
                })
            },
            mvlb: function() {
                A.Y('<a class=A href="?L0000" >' + I.Hd + I.Id + '</a><a class=A href="?C00112233" >' + I.Cd + I.Dd + '</a><a class=A href="?C00223344" >' + I.Ed + I.Fd + '</a><div class=A id="#sellb" >' + I.Md + I.Nd + '</div><a class=A href="https://tenhou.net/make_lobby.html" target=_blank>' + I.Kd + I.Ld + "</a>", "font-size:80%;", 0)
            },
            "#sellb": function() {
                var a = "0000";
                location.search.match(/^\?(L[1-9][0-9]{3}|C[0-9]{8})/) && (a = RegExp.$1);
                A.o(I.xd + '<div style="font-size:75%;">' + I.Tb + 'L<span style="color:#F00;">8141</span> / ' + I.Sb + 'C<span style="color:#F00;">00112233</span></div><input type=text size=15 value="' + a + '" style="font-size:100%;"/><br>', 3, function(a) {
                    a = a.getElementsByTagName("INPUT")[0];
                    a = a.value;
                    a.match(/^L?(\d{4})$/) ? location.href = "?L" + RegExp.$1 : a.match(/^C?(\d{8})$/) && (location.href = "?C" + RegExp.$1)
                })
            },
            regid: function() {
                A.o(I.Ad + '<br><input type=text size=22 style="font-size:100%;"/><br>', 3, function(a) {
                    a = a.getElementsByTagName("INPUT")[0];
                    var b = a.value;
                    if (b)
                        return Sa(qa[30]() + encodeURIComponent(b), function(a) {
                            a = Da(a);
                            0 != a.res ? H.ERR({
                                code: a.res
                            }) : (b = decodeURIComponent(a.uname),
                            A.o(b + "<br><br>" + I.ud, 3, function() {
                                Sa(qa[31]() + encodeURIComponent(b), function(a) {
                                    a = Da(a);
                                    1012 != a.res ? H.ERR({
                                        code: a.res
                                    }) : (p.uname = Z.uname.value = a.id,
                                    A.o(I[1012]),
                                    Z.pane0.style.display = "",
                                    Z.pane1.style.display = "none")
                                })
                            }))
                        }),
                        !0
                })
            },
            idcont: function() {
                A.o(I.yd + '<br><input type=text size=22 value="ID00000000-aabbccdd" style="font-size:100%;margin:0.25em"/><br><div id=info></div><small class=gray>' + I.zd + "</small>", 3, function(c) {
                    c = c.getElementsByTagName("INPUT")[0];
                    var b = c.value;
                    c = $a.getElementById("info");
                    if ("ID00000000" != b.substr(0, 10) && b.match(/^ID[0-9A-F]{8}\-[0-9a-zA-Z]{8}$/))
                        c.innerHTML = "";
                    else
                        return c.innerHTML = '<span style="font-size:75%;color:#F00">' + I.Bd + "</span>",
                        !1;
                    p.uname = b;
                    a();
                    Z.pane0.style.display = "";
                    Z.pane1.style.display = "none";
                    return !0
                })
            }
        }
    }());
    D.AUTOLOGIN = D.LOGIN;
    va(D, {
        SPLASH: function(a, e) {
            for (var c = r.tenhouEventInfo, b = 4 > c.length ? 2 : 5, f = .5 > Math.random() ? 0 : 2, d = '<table cellpadding=0 cellspacing=0 align=center width=100% style="font-size:0;"><tr>', k = 0; k < b; ++k) {
                var l = c.splice(Math.floor(Math.random() * c.length), 1)[0]
                  , n = k != f && 5 == b ? 1 : 2
                  , d = d + ("<td rowspan=" + n + " colspan=" + n + " width=" + 25 * n + '% ><a href="https://tenhou.net' + l.href + '" target=_blank><img src="https://cdn.tenhou.net' + (l.img ? l.img : l.href + "title.jpg") + '" border=0 style="width:100%;"/></a></td>');
                2 == k && (d += "</tr><tr>");
                c.length < b - k - 1 && c.push(l)
            }
            d += '</tr></table><div style="padding:0.75em 0;"><small>';
            r.info && (d += r.info);
            r.tenhouAnnounce && (d += r.tenhouAnnounce);
            c = location.href.replace(/^https?:/, "tenhouapp:");
            b = "https://tenhou.net/0/swf" + location.search;
            d += '</small></div><div style="position:relative;"><button disabled name=ok style="width:8em;">OK</button>';
            oa || (d += '<a href="' + c + '" style="position:absolute;border:1px solid #444;border-radius: 0.2em;top:0.75em;padding:0.5em;color:#888;right:0;">アプリで開く</a>');
            oa || (d += '<a href="' + b + '" style="position:absolute;border:1px solid #444;border-radius: 0.2em;top:0.75em;padding:0.5em;color:#888;left:0;">Flash版で開く</a>');
            e.innerHTML = d + "</div>";
            Dc(e);
            setTimeout(function() {
                Z.ok.disabled = !1
            }, 1E3)
        }
    });
    Hb({
        JP: {
            je: "商品を選択して「購入」ボタンを押してください。<br>金額は通貨によっては変動する場合があります。",
            ke: "購入"
        },
        EN: {
            je: "Choose your product and press the Buy button.<br>The final price may be affected by currency fluctiation.",
            ke: "BUY"
        }
    });
    va(D, function() {
        var a;
        return {
            STORE: function(e, c) {
                a = -1;
                c.innerHTML = "" + ("<div><br><br>" + I.je + '<br><br><div class=select-wrapper><button name=iap>SELECT PRODUCT</button></div><br><br><button name=storePurchase style="width:8em;">' + I.ke + '</button><br></div><br><br><hr><button name=exit style="width:6em;">CLOSE</button>');
                Dc(c)
            },
            storePurchase: function() {
                if (-1 != a) {
                    var e = p.uname;
                    e.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) && (e = RegExp.$1,
                    store.order(a).then(function() {
                        lb(!0, 2)
                    }).error(function(a) {
                        lb(!1, 2);
                        A.o("STORE ERROR " + a.code + ": " + a.message)
                    }))
                }
            },
            iap: function() {
                var a = "", c;
                for (c in store.products) {
                    var b = store.products[c];
                    b.valid && (a += '<div class=A id="#iap-' + c + '">' + sb(b.title) + "<br>" + b.price + "</div>")
                }
                A.Y(a, "font-size:75%;", 0)
            },
            "#iap": function(e, c) {
                var b = store.products[~~c];
                a = b.id;
                Z.iap.innerHTML = b.title + " " + b.price
            }
        }
    }());
    oa && ta($a, "deviceready", function() {
        if (1.3 > (r.storeVersion || 0)) {
            var a = "net.tenhou.catalog20170119.";
            store.register({
                id: a + "ex30",
                type: store.CONSUMABLE
            });
            store.register({
                id: a + "ex60",
                type: store.CONSUMABLE
            });
            store.register({
                id: a + "ex120",
                type: store.CONSUMABLE
            });
            store.register({
                id: a + "ex180",
                type: store.CONSUMABLE
            });
            store.register({
                id: a + "ex300",
                type: store.CONSUMABLE
            })
        } else
            a = "net.tenhou.catalog20170211.",
            store.register({
                id: a + "ex30",
                type: store.NON_RENEWING_SUBSCRIPTION
            }),
            store.register({
                id: a + "ex60",
                type: store.NON_RENEWING_SUBSCRIPTION
            }),
            store.register({
                id: a + "ex120",
                type: store.NON_RENEWING_SUBSCRIPTION
            }),
            store.register({
                id: a + "ex180",
                type: store.NON_RENEWING_SUBSCRIPTION
            }),
            store.register({
                id: a + "ex300",
                type: store.NON_RENEWING_SUBSCRIPTION
            }),
            store.register({
                id: a + "ex600",
                type: store.NON_RENEWING_SUBSCRIPTION
            });
        store.when("product").approved(function(a) {
            p.uname.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? (store.validator = "https://tenhou.net/reg/via_cordova.cgi?id=" + RegExp.$1,
            a.verify()) : a.finish()
        });
        store.when("product").verified(function(a) {
            a.finish()
        });
        store.when("product").finished(function() {
            lb(!1, 2)
        });
        store.when("product").cancelled(function() {
            lb(!1, 2)
        });
        store.error(function(a) {
            "6777001" == a.code || "6777002" == a.code ? store = void 0 : pb("------ error", JSON.stringify(a));
            lb(!1, 2)
        });
        store.ready(function() {});
        store.refresh()
    });
    va(D, function() {
        function a(a) {
            return a.replace(/\s+$/, "")
        }
        function e(a) {
            return Bb(a).replace(/(\d)([mpsz])(?![mpsz])/g, function(a, b, c) {
                a = ("m" == c ? 10 : "p" == c ? 20 : "s" == c ? 30 : 40) + ~~b;
                10 == a && (a = 51);
                20 == a && (a = 52);
                30 == a && (a = 53);
                40 == a && (a = 69);
                b = ~~(.6 * N[0]);
                return '<img src="' + qa[11]() + "/6/img/edit" + Va(3, b) + 0 + Va(2, a) + '.png" style="background:' + (69 == a ? "#444" : "#EEE") + ';vertical-align:middle;" width="' + b / t + 'px" />'
            })
        }
        function c(a) {
            var b = a >> 2;
            return (27 > b && 16 == a % 36 ? "0" : b % 9 + 1) + "mpsz".substr(b / 9, 1)
        }
        function b(a) {
            Z.trtitle.innerHTML = h.title || "天鳳トレーニング";
            Z.trprogress.innerHTML = '<span class=gray style="float:right;font-weight:bold;">' + (a ? "A" : "Q") + Va(2, g ? g[0] + 1 : 1) + "/" + Va(2, g ? g.container.length : 1) + "</span>";
            Z.trmain.innerHTML = e((h[a ? "explanation" : "question"] || "").replace(/\n/g, "<br>"));
            Z.trmain.style.height = (a ? 14 : 8) + "em";
            Z.ok.disabled = !1;
            switch (a) {
            case 0:
                C = !1;
                D.b.classList.remove("hide");
                Z.ok.innerHTML = "OK";
                W.Cb();
                H.fa();
                H.connected = 15;
                a = D[17] || "";
                W.sa({
                    tag: "UN",
                    n0: D[0] || "自家",
                    n1: "下家",
                    n2: "対面",
                    n3: "上家",
                    dan: ~~a[0] + ",0,0,0",
                    rate: parseFloat(a[2]) + ",0,0,0",
                    sx: ("F" == p.sx ? "F" : "M") + ",M,M,M"
                });
                H.la = 0;
                Wb.X();
                var b = [q(Cb(h.hai0)), q(Cb(h.hai1)), q(Cb(h.hai2)), q(Cb(h.hai3))];
                a = [];
                h.packet && Array.prototype.push.apply(a, JSON.parse(JSON.stringify(h.packet)));
                2 == b[0].length % 3 && a.push({
                    tag: "T" + b[0].pop()
                });
                var c = (h.seed ? h.seed : "0,0,0,0,0,").split(",");
                h.kyoku && (c[0] = h.kyoku);
                h.honba && (c[1] = h.honba);
                h.nagare && (c[2] = h.nagare);
                h.dora && (c[5] = c[5] = Cb(h.dora));
                W.sa({
                    tag: "TRAININGINIT",
                    seed: "" + c,
                    ten: h.ten,
                    oya: ~~h.oya,
                    hai0: "" + Ea(b[0]),
                    m0: h.m0,
                    kawa0: Cb(h.kawa0),
                    hai1: "" + Ea(b[1]),
                    m1: h.m1,
                    kawa1: Cb(h.kawa1),
                    hai2: "" + Ea(b[2]),
                    m2: h.m2,
                    kawa2: Cb(h.kawa2),
                    hai3: "" + Ea(b[3]),
                    m3: h.m3,
                    kawa3: Cb(h.kawa3)
                });
                for (b = 0; b < a.length; ++b)
                    W.sa(vb.vb(a[b]));
                break;
            case 1:
                Z.ok.innerHTML = "NEXT"
            }
            D.jc(1)
        }
        function f(a) {
            m ? a() : Sa(qa[21]() + "auth.cgi?" + p.uname, function(b) {
                m = b;
                a()
            }, function() {
                H.ERR({
                    code: 1200
                })
            })
        }
        function d(a) {
            h = g = void 0;
            y = a.match(/\.json$/) ? a : "free-sample.json";
            Sa(qa[21]() + y + "?" + m, function(b) {
                try {
                    h = JSON.parse(b)
                } catch (da) {
                    alert("JSONに不具合があるため読み込めませんでした\n\n" + da);
                    return
                }
                if ("membersonly" == h.error || "subscribe" == h.error) {
                    b = p.uname;
                    if (!b || !b.match(/^ID[0-9A-F]{8}-[0-9A-Za-z]{8}$/))
                        return H.ERR({
                            code: 1200
                        });
                    "membersonly" == h.error ? A.o("この問題は有料会員に公開されています。<br><br>会費のお支払いをお願いいたします。", 3, D.purchase, D.exit) : A.Y('<div style="margin:0.5em;">購読期間と料金を選択してください。</div><div class=A id="#trs-1">1日間 - 有効期限7日分</div><div class=A id="#trs-7">7日間 - 有効期限8日分</div><div class=A id="#trs-21">21日間 - 有効期限9日分</div>', "", 0)
                } else if (h.container)
                    g = h,
                    D["#trjump"](0, 0);
                else if (u.tredit) {
                    if (!Z.json)
                        if (90 > D[2])
                            alert("編集機能を利用するには有効期限の残り日数が90日以上必要です。");
                        else {
                            Mb.style.height = Lb = 0;
                            ab.style.overflow = "";
                            for (var c = '<br><hr><br><table class=trtab width=100%><tr><td class=bth width=1>表題</td><td width=100%><input name=title style="width:100%;"></td></tr><tr><td class=bth width=1>問題</td><td width=100%><textarea name=question maxlength=1024 rows=10 style="width:100%;"></textarea></td></tr><tr><td class=bth width=1>回答</td><td width=100%><input name=answer style="width:100%;"><br>' + x("カンマ区切 例)8m,8p,r2p(リーチ2p)") + '</td></tr><tr><td class=bth width=1>解説</td><td width=100%><textarea name=explanation maxlength=4096 rows=10 style="width:100%;"></textarea></td></tr><tr><td class=bth width=1>補足</td><td width=100%><textarea name=comment maxlength=4096 rows=10 style="width:100%;"></textarea></td></tr></table><hr><table class=trtab width=100%><tr><td class=bth width=1>局</td><td><input name=kyoku><br>' + x("0:東1局 ... 7:南4局") + "</td></tr><tr><td class=bth width=1>本場</td><td><input name=honba></td></tr><tr><td class=bth width=1>供託</td><td><input name=nagare></td></tr><tr><td class=bth width=1>ドラ</td><td><input name=dora></td></tr><tr><td class=bth width=1>親</td><td><input name=oya><br>" + x("0:自家 1:下家 2:対面 3:上家") + "</td></tr></table>", d = ["自家", "下家", "対面", "上家"], e = 0; 4 > e; ++e)
                                c += "<br><hr><br><span class=bth>■" + d[e] + "</span><br><table class=trtab width=100%><tr><td class=bth width=1>点数</td><td width=100%><input name=ten" + e + ' style="width:100%;"></td></tr>',
                                e || (c += "<tr><td class=bth width=1>手牌</td><td width=100%><input name=hai" + e + ' style="width:100%;"></td></tr>'),
                                c += "<tr><td class=bth width=1>副露</td><td width=100%><input name=m" + e + ' style="width:100%;"></td></tr><tr><td class=bth width=1>河</td><td width=100%><input name=kawa' + e + ' style="width:100%;"></td></tr></table>';
                            c = c + "<br><hr><br><div id=verify></div>" + ('<br><hr><br><span class=bth>■JSON</span><br><textarea name=json maxlength=8192 rows=40 style="width:100%;font-size:75%;">' + JSON.stringify(h, null, "\t") + "</textarea>");
                            Ob.innerHTML = c;
                            c = Ob.getElementsByTagName("TEXTAREA");
                            for (d = 0; d < c.length; ++d)
                                ta(c[d], "change", "json" == c[d].name ? n : l);
                            c = Ob.getElementsByTagName("INPUT");
                            for (d = 0; d < c.length; ++d)
                                ta(c[d], "change", l);
                            Dc(Ob, Z)
                        }
                    123 == a.charCodeAt(0) && (b = h,
                    h = JSON.parse(a),
                    h.title = h.title || b.title,
                    h.question = h.question || b.question,
                    h.answer = h.answer || b.answer,
                    h.explanation = h.explanation || b.explanation,
                    h.comment += b.comment,
                    b = JSON.stringify(h));
                    Z.json.value = b;
                    n()
                } else
                    D["#trjump"](0, 0)
            }, function() {
                alert("問題ファイルを読み込めませんでした")
            })
        }
        function k() {
            var a;
            a = "■合計得点<br>" + ("'" + Z.ten0.value + "' + '" + Z.ten1.value + "' + '" + Z.ten2.value + "' + '" + Z.ten3.value + "' = " + (~~Z.ten0.value + ~~Z.ten1.value + ~~Z.ten2.value + ~~Z.ten3.value) + "<br><br>");
            a += "■使用枚数<br>";
            for (var b = Cb(Z.hai0.value), b = b + ("," + Cb(Z.dora.value)), c = 0; 4 > c; ++c) {
                var b = b + ("," + Cb(Z["kawa" + c].value))
                  , d = Z["m" + c].value;
                if (d)
                    for (var d = d.split(","), f = 0; f < d.length; ++f) {
                        var g = {
                            m: d[f]
                        };
                        oc(g);
                        var m = g[0];
                        if (1 == m.length)
                            switch (g[2]) {
                            case 4:
                            case 5:
                            case 2:
                                g = m[0] >> 2,
                                m = [g + 0, g + 1, g + 2, g + 3]
                            }
                        m && (b += "," + m)
                    }
            }
            c = [];
            for (f = 0; 38 > f; ++f)
                c[f] = 0;
            b = b.split(",");
            for (f = 0; f < b.length; ++f)
                g = b[f],
                "" != g && 255 != g && 254 != g && (136 == g ? c[30]++ : 16 == g ? c[0]++ : 52 == g ? c[1]++ : 88 == g ? c[2]++ : c[10 * ~~(g / 4 / 9) + ~~(g / 4) % 9 + 1]++);
            c[30] = "-";
            for (f = 0; 38 > f; ++f)
                a += e(30 == f ? "0z" : xb(36 * ~~(f / 10) + (f % 10 ? f % 10 * 4 - 1 : 16))) + c[f] + " ",
                9 == f % 10 && (a += "<br>");
            Z.verify.innerHTML = a
        }
        function l() {
            if (Z.json) {
                var c = h.packet;
                h = {};
                h.title = a(Z.title.value);
                h.question = a(Z.question.value);
                h.answer = a(Z.answer.value);
                h.explanation = a(Z.explanation.value);
                h.comment = a(Z.comment.value);
                "" == h.comment && delete h.comment;
                var d = "0 0 0 0 0 ".split(" ");
                "0" != Z.kyoku.value && (d[0] = Z.kyoku.value);
                "0" != Z.honba.value && (d[1] = Z.honba.value);
                "0" != Z.nagare.value && (d[2] = Z.nagare.value);
                "" != Z.dora.value && (d[5] = Cb(Z.dora.value));
                h.seed = "" + d;
                h.oya = Z.oya.value;
                h.ten = [Z.ten0.value, Z.ten1.value, Z.ten2.value, Z.ten3.value];
                Z.hai0.value && (h.hai0 = Ab(Cb(Z.hai0.value).split(",")));
                for (d = 0; 4 > d; ++d)
                    "" != h.ten[d] && (h.ten[d] = ~~(h.ten[d] / 100)),
                    Z["m" + d].value && (h["m" + d] = Z["m" + d].value),
                    Z["kawa" + d].value && (h["kawa" + d] = Ab(Cb(Z["kawa" + d].value).split(",")));
                h.ten = "" + h.ten;
                c && (h.packet = c);
                Z.json.value = JSON.stringify(h, null, "\t").replace(/"packet": \[[^\]]*\]/, '"packet": ' + JSON.stringify(c));
                b(0);
                k()
            }
        }
        function n() {
            if (Z.json) {
                try {
                    h = JSON.parse(Z.json.value)
                } catch (z) {
                    alert("JSONに不具合があるため読み込めませんでした\n\n" + z);
                    return
                }
                var a = (h.seed ? h.seed : "0,0,0,0,0,").split(",");
                Z.title.value = h.title || "";
                Z.question.value = h.question || "";
                Z.answer.value = h.answer || "";
                Z.explanation.value = h.explanation || h.description || "";
                Z.comment.value = h.comment || "";
                Z.kyoku.value = h.kyoku || a[0];
                Z.honba.value = h.honba || a[1];
                Z.nagare.value = h.nagare || a[2];
                Z.dora.value = h.dora || Ab(a.slice(5));
                Z.oya.value = h.oya || 0;
                for (var a = (h.ten ? h.ten : ",,,").split(","), c = 0; 4 > c; ++c)
                    Z["ten" + c].value = "" != a[c] ? 100 * a[c] : "",
                    c || (Z["hai" + c].value = h["hai" + c] || ""),
                    Z["m" + c].value = h["m" + c] || "",
                    Z["kawa" + c].value = h["kawa" + c] || "";
                b(0);
                k()
            }
        }
        var g, h, m, y = "", C = !1;
        return {
            TRAINING: function(a, b) {
                H.a = 4;
                W.Z();
                b.innerHTML = '<div style="width:100%;"><table width=100% cellpadding=0 cellspacing=0><tr><td align=left class=gray id=trtitle></td><td id=trprogress align=right></td></tr></table><hr><div style="position:relative;"><div id=trmain class=vscl style="line-height:1.2em;height:8em;overflow-y:scroll;text-align:left;"><br><br>' + x("<center>左下のメニューからトレーニングを終了して<br><br>もう一度開いてください。</center>") + '</div><div class=sblink style="visibility:hidden;">▼</div></div><hr><table width=100% cellpadding=0 cellspacing=0><tr><td align=left width=1><button name=trmenu style="font-family:cwTeX-Q-Kai-T,icons2,serif;"></button></td><td class=ra0 style="border:1px solid #444;" width=100%><span class="bt3 ra0" style="color:#444;font-size:150%;">卓表示<span></td><td align=right width=1><button name=ok style="width:6em;" disabled>OK</button></td></tr></table></div>';
                Dc(b);
                D.b.classList.add("flipinhs");
                f(function() {
                    d(a.file)
                })
            },
            jc: function(a) {
                lb(!1, "ok");
                D.b.style.display = a ? "" : "none";
                v.b.style.display = a ? "none" : "";
                v[1572868].innerHTML = " 問題"
            },
            Sf: function(a) {
                a && "NEXT" != Z.ok.innerHTML && !bc.s.canvas.style.display ? (D.jc(0),
                2 == V[32].length % 3 && mc({
                    tag: "T"
                }),
                Z.ok.innerHTML = "CLOSE") : (D.b.classList.add("hide"),
                ta(D.b, "animationend", function(a) {
                    this.removeEventListener(a.type, arguments.callee, !1);
                    g && (g[0] = (g[0] + 1) % g.container.length,
                    h = g.container[g[0]]);
                    b(0)
                }))
            },
            ff: function(a) {
                console.log("sendTrainingAns", a);
                var d;
                switch (a.tag) {
                case "REACH":
                    C = !0;
                    W.sa({
                        tag: "REACH",
                        who: 0,
                        step: 1
                    });
                    return;
                case "D":
                    d = (C ? "r" : "") + c(a.p);
                    break;
                case "N":
                    d = "N",
                    a.type && (d += "-" + a.type),
                    a.hai0 && (d += "-" + a.hai0),
                    a.hai1 && (d += "-" + a.hai1),
                    a.hai2 && (d += "-" + a.hai2)
                }
                if (d) {
                    a = h.answer.split(",");
                    for (var e = 0; e < a.length && a[e] != d; ++e)
                        ;
                    e < a.length && (d = "")
                }
                setTimeout(function() {
                    if (d)
                        b(1);
                    else {
                        lc(24, 0, 0);
                        var a = kb("DIV", Vb, "flipinqs tsv", {
                            innerHTML: "○"
                        }, {
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            fontSize: "1600%",
                            fontWeight: "bold",
                            pointerEvents: "none",
                            marginTop: "-0.5em",
                            marginLeft: "-0.5em"
                        });
                        setTimeout(function() {
                            a.classList.add("hide");
                            ta(a, "animationend", function() {
                                a.parentNode.removeChild(a);
                                b(1)
                            })
                        }, 1E3)
                    }
                }, 1E3)
            },
            trmenu: function() {
                A.Y('<div class=A id="#trmenu-0">他の問題に移動</div><div class=A id="#trmenu-1">トレーニング終了</div>', "", 0)
            },
            "#trmenu": function(a, b) {
                if ("1" == b)
                    u.tredit ? location.reload() : D.exit();
                else {
                    var c = "";
                    if (g)
                        for (var d in g.container)
                            c += '<div class=A id="#trjump-' + d + '">Q' + Va(2, ~~d + 1) + "</div>";
                    else
                        h.title && (c += '<div class=A id="#trjump-0">' + h.title + "</div>");
                    A.Y(c, "text-align:left;", 0)
                }
            },
            "#trjump": function(a, c) {
                if (g) {
                    var d = ~~c;
                    h = g.container[d];
                    g[0] = d
                }
                b(0)
            },
            "#trs": function(a, b) {
                Sa(qa[21]() + "subscribe.cgi?file=" + y + "&auth=" + m + "&type=" + b, function(a) {
                    a = JSON.parse(a);
                    if ("insufficient" == a.error)
                        return H.ERR({
                            code: 1020
                        });
                    "ok" == a.error && d(y)
                })
            },
            nf: function(a, b) {
                if (b) {
                    var c = {}
                      , d = b.subscribing;
                    if (d)
                        for (var e = 0; e < d.length; ++e)
                            c[d[e].file] = d[e].expire;
                    a.innerHTML = "";
                    for (var f = {
                        free: '<span style="color:#088;font-weight:bold;">【無料】</span>',
                        member: '<span style="color:#088;font-weight:bold;">【会員無料】</span>',
                        subscribing: '<span style="color:#880;font-weight:bold;">【購読中】</span>'
                    }, d = b.all, e = 0; e < d.length; ++e)
                        d[e].$e = 1E3 * (d[e].type || "undefined").length + e;
                    d.sort(function(a, b) {
                        return a.$e - b.$e
                    });
                    for (e = 0; e < d.length; ++e) {
                        var g = d[e]
                          , m = g.file
                          , h = c[m]
                          , m = "https://tenhou.net/0/?training=" + m
                          , k = '<div style="position:absolute;width:100%;height:100%;padding:0.2em 0.5em;pointer-events:none;">'
                          , k = k + ('<div class=nobr style="overflow:hidden;text-overflow:ellipsis;">' + (f[h ? "subscribing" : g.type] || "") + " ");
                        g.tip && (k += '<span style="color:#F00;font-weight:bold;font-size:75%;">' + g.tip + "</span> ");
                        k += g.title + "</div>";
                        k += '<div class=nobr style="color:#CCC;overflow:hidden;text-overflow:ellipsis;font-size:75%;">';
                        k += '<span style="color:#000;background-color:#666;">レベル:' + (g.level || "初中") + "</span> ";
                        k += "問題数:" + g.n + " ";
                        g.type && (k += "毎月２～３回更新 ");
                        h && (k += "購読終了:" + h + " ");
                        k += "</div>";
                        k += '<div class=nobr style="color:#666;overflow:hidden;text-overflow:ellipsis;">' + (g.memo || "") + "</div>";
                        k += "</div>";
                        k += '<a href="' + m + '" class=bt3 target=_blank></a>';
                        kb("DIV", a, "", {
                            innerHTML: k
                        }, {
                            height: "3.4em",
                            position: "relative",
                            textAlign: "left"
                        }).childNodes[1].onclick = D.trOpen
                    }
                    kb("DIV", a, "gray", {
                        innerHTML: "●「長押し」または「右クリック」から別タブで開く/URLのコピーなどが行えます"
                    }, {
                        fontSize: "75%",
                        align: "left",
                        padding: "1em 0 6em 0"
                    })
                } else
                    a.innerHTML = x("<br>Loading ..."),
                    c = (c = p.uname) && c.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? RegExp.$1 : "00000000",
                    Sa(qa[21]() + "free-index.json?" + c, function(b) {
                        try {
                            b = JSON.parse(b)
                        } catch (Ib) {
                            return
                        }
                        D.nf(a, b)
                    })
            },
            trOpen: function(a) {
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
                    var b = p.uname;
                    if (!b || !b.match(/^ID[0-9A-F]{8}-[0-9A-Za-z]{8}$/))
                        return H.ERR({
                            code: 1200
                        }),
                        !1;
                    a = a.target;
                    a = a.href.split(/\?training=/);
                    if (1 != a.length)
                        return D.o({
                            tag: "TRAINING",
                            file: a[1]
                        }),
                        !1
                }
            }
        }
    }());
    Hb({
        JP: {
            Qe: "フリテン"
        },
        EN: {
            Qe: "Furiten"
        }
    });
    var ac = kb("DIV", Vb, "nosel ts0", {}, {
        position: "absolute",
        fontSize: "60%",
        pointerEvents: "none",
        display: "none"
    })
      , V = function() {
        var a = 0;
        return {
            ra: function() {
                ac.innerHTML = I.Qe;
                for (var a = 0; 4 > a; ++a)
                    V[32 | a] = [],
                    V[48 | a] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    V[16 | a] = [],
                    delete V[64 | a]
            },
            Qf: function(a) {
                for (var c = [], b = 0; b < V[32 | a].length; ++b)
                    c.push(b);
                Ba(c, V[32 | a]);
                for (b = 0; b < V[32 | a].length; ++b)
                    if (c[b] != b) {
                        var e = R[1024 | a << 8 | c[b]]
                          , d = R[1024 | a << 8 | b];
                        Yb.O(0, d, 0);
                        d.Ga(!0, a && !v.l[1277960] ? 136 : V[32 | a][c[b]]);
                        e = Yb.O(0, e.c + d.i.offsetX, e.h + d.i.offsetY, d.c + d.i.offsetX, d.h + d.i.offsetY, .04, d.i, .5, d, 1);
                        a || hc(4, 0, e / 1E3)
                    }
                za(V[32 | a])
            },
            gf: function(a) {
                v.R(256);
                cc.Z();
                if (1 == H.a || !v.l[1277960]) {
                    var c = 0;
                    a & 2 && (c = Math.max(c, V[33].length));
                    a & 4 && (c = Math.max(c, V[34].length));
                    a & 8 && (c = Math.max(c, V[35].length));
                    for (var c = 30 * c, b = 0; b < c; b += 30)
                        lc(4, 0, b / 1E3);
                    var e = 0
                      , b = 0;
                    fc()[Za++] = function(d) {
                        for (b += d; e < b && e < c; e += 30)
                            for (d = 1; 4 > d; ++d)
                                if (!(~a & 1 << d)) {
                                    var f = ~~(e / 30)
                                      , l = R[1024 | d << 8 | f];
                                    l.u && (f = V[32 | d][f],
                                    P.Ca(),
                                    l.ga(0),
                                    l.w = d,
                                    l.i = M[d << 8 | K.bb[f]],
                                    l.ga(1),
                                    P.Da())
                                }
                        return e < c
                    }
                }
            },
            ic: function(e) {
                P.Ca();
                for (var c = 0, b = V[32 | e], f = 0; 14 > f; ++f) {
                    var d = R[1024 | e << 8 | f];
                    if (d.u) {
                        var k = R[1024 | e << 8 | c];
                        k.Ga(!0, e && !v.l[1277960] ? 136 : b[c]);
                        k.c = d.c;
                        k.h = d.h;
                        k.ma(-1025, d.aa & 1024, !1);
                        k.ga(1);
                        ++c;
                        a |= 1 << e
                    } else
                        c < b.length && b.splice(c, 1)
                }
                for (; 14 > c; ++c)
                    d = R[1024 | e << 8 | c],
                    d.u && d.ga(0);
                P.Da()
            },
            ub: function(e) {
                if ((e || v.l[1183750]) && (!e || v.l[1277960])) {
                    P.Ca();
                    for (var c = V[32 | e], b = [], f = [], d = [], k = -1, l = 0; l < c.length; ++l) {
                        var n = R[1024 | e << 8 | l];
                        n.u && (d.push({
                            Eb: l,
                            aa: n.aa,
                            c: n.c,
                            h: n.h
                        }),
                        f.push(c[l]),
                        0 == e && n == cc.Lf() && (k = b.length),
                        b.push(b.length))
                    }
                    Ba(b, f);
                    for (l = 0; l < b.length; ++l)
                        if (c[d[l].Eb] = f[b[l]],
                        n = R[1024 | e << 8 | d[b[l]].Eb],
                        b[l] == l) {
                            if (n.c != n.I || n.h != n.J)
                                a |= 1 << e
                        } else {
                            var g = R[1024 | e << 8 | d[l].Eb];
                            g.Ga(!0, e && !v.l[1277960] ? 136 : f[b[l]]);
                            n = d[b[l]];
                            g.c = n.c;
                            g.h = n.h;
                            g.ma(-1042, n.aa & 1041, !1);
                            g.ga(1);
                            a |= 1 << e
                        }
                    P.Da();
                    -1 != k && cc.K(R[1024 | e << 8 | d[b[k]].Eb])
                }
            },
            tb: function() {
                for (var e = 0; 4 > e; ++e)
                    if (!(~a & 1 << e)) {
                        for (var c = [], b = 0, f = 0, d = 0; 14 > d; ++d) {
                            var k = R[1024 | e << 8 | d];
                            if (k.u) {
                                var l = k.c - k.I
                                  , n = k.h - k.J;
                                if (0 != l || 0 != n)
                                    c.length && b != l && f != n && (R.Ta(0, 200, c),
                                    c = []),
                                    b = l,
                                    f = n,
                                    c.push(k)
                            }
                        }
                        c.length && R.Ta(0, 200, c)
                    }
                a = 0
            }
        }
    }();
    V.ra();
    function mc(a) {
        if (1 == H.a || 4 == H.a)
            if (!D.b || D.b.style.display) {
                var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                if (a)
                    if ("REACH" == a.tag)
                        for (var c = tb.Jf(V[48]), b = 0; b < V[32].length; ++b) {
                            var f = c[~~(V[32][b] / 4)];
                            e[b] |= f && f.length ? 1 : 16
                        }
                    else if ("T" == a.tag && V[64])
                        for (b = V[32].length - 1,
                        e[b] |= 1,
                        --b; 0 <= b; --b)
                            e[b] |= 16;
                    else if ("N" != a.tag || 3 != a[2] && 1 != a[2])
                        for (b = 0; 14 > b; ++b)
                            e[b] |= 1;
                    else
                        for (c = {},
                        1 == (a[0][2] >> 2) - (a[0][1] >> 2) ? (0 < (a[0][1] >> 2) % 9 && (c[(a[0][1] >> 2) - 1] = 1),
                        8 > (a[0][2] >> 2) % 9 && (c[(a[0][2] >> 2) + 1] = 1)) : c[a[0][0] >> 2] = 1,
                        b = 0; b < V[32].length; ++b)
                            e[b] |= c[V[32][b] >> 2] ? 16 : 1;
                else
                    cc.Z(),
                    v.R(256);
                P.Ca();
                for (b = 0; 14 > b; ++b)
                    S.Xa(b, -18, e[b]);
                P.Da();
                a && cc.o(0, void 0, "T" == a.tag)
            }
    }
    ;r.requestAnimationFrame = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.oRequestAnimationFrame || r.msRequestAnimationFrame || function(a) {
        setTimeout(a, 1E3 / 60)
    }
    ;
    var fc = function() {
        function a() {}
        var e = {}, c, b = 0, f = 0, d = Date.now(), k = requestAnimationFrame;
        setInterval(function() {
            var e = Date.now();
            b && f && b == f && requestAnimationFrame == k && (requestAnimationFrame = a,
            c(b + e - d),
            requestAnimationFrame = k);
            f = b;
            d = e;
            zc.Rf(e)
        }, 250);
        requestAnimationFrame(function(a) {
            c = a ? function(a) {
                var d = 0, f = 1 >= b ? 0 : a - b, m;
                for (m in e)
                    e[m](f) ? ++d : delete e[m];
                if (!d)
                    for (m in e)
                        ++d;
                d ? (b = a,
                requestAnimationFrame(c)) : b = 0
            }
            : window.performance && window.performance.now ? function() {
                var a = performance.now(), d = 0, f = 1 >= b ? 0 : a - b, m;
                for (m in e)
                    e[m](f) ? ++d : delete e[m];
                if (!d)
                    for (m in e)
                        ++d;
                d ? (b = a,
                requestAnimationFrame(c)) : b = 0
            }
            : function() {
                var a = Date.now(), d = 0, f = 1 >= b ? 0 : a - b, m;
                for (m in e)
                    e[m](f) ? ++d : delete e[m];
                if (!d)
                    for (m in e)
                        ++d;
                d ? (b = a,
                requestAnimationFrame(c)) : b = 0
            }
            ;
            requestAnimationFrame(c)
        });
        return function() {
            !b && c && (requestAnimationFrame(c),
            b = 1);
            return e
        }
    }();
    function gc(a, e) {
        if (0 < e)
            return fc()[Za++] = function(c) {
                return 0 < (e -= c) ? !0 : (a(),
                !1)
            }
            ,
            Za - 1;
        a()
    }
    function Fc(a) {
        var e = D.b.style
          , c = e.opacity = 0;
        return function(b) {
            c += b;
            e.opacity = Math.min(1, c / a);
            if (c < a)
                return 1;
            e.opacity = 1;
            return 0
        }
    }
    function Ec(a) {
        var e = D.b
          , c = e.style
          , b = 0;
        return function(f) {
            b += f;
            c.opacity = Math.max(0, 1 - b / 250);
            if (250 > b)
                return 1;
            c.display = "none";
            c.opacity = 1;
            a && a(e);
            return 0
        }
    }
    ;var N = [0, 0, 0, 0, 0, 0, 0, 0]
      , U = [0, 0, 0, 0, 0, 0, 0, 0]
      , T = [0, 0, 0, 0, 0, 0, 0, 0]
      , Cc = [0, 0, 0, 0, 0, 0, 0, 0]
      , Jc = [0, 0, 0, 0, 0]
      , Kc = [0, 0, 0, 0, 0]
      , kc = [0, 0, 0, 0]
      , jc = [0, 0, 0, 0]
      , Lc = [0, 0, 0, 0]
      , Mc = [0, 0, 0, 0]
      , Tb = 0
      , Ub = 0
      , Xb = 0
      , Nc = 0
      , Oc = !1;
    function Sb() {
        var a = Nb.offsetWidth * t
          , e = Nb.offsetHeight * t
          , c = p.desktop & 1;
        function b() {
            f[1] = ~~(2360 * f[0] / 31 / 56);
            k[0] = k[1] = k[4] = Math.min(~~(12 * f[0] / 31), ~~(12 * f[1] / 40));
            d[0] = d[4] = ~~(47 * f[0] / 31) - k[0];
            d[1] = ~~(37 * f[1] / 40) - k[1];
            f[4] != f[0] && (k[4] = ~~(12 * f[4] / 31),
            d[4] = ~~(47 * f[4] / 31) - k[4]);
            f[2] = f[6] = f[0];
            k[2] = k[6] = k[0];
            d[2] = d[6] = d[0];
            f[3] = f[1];
            k[3] = k[1];
            d[3] = d[1];
            f[5] = f[7] = ~~(380 * d[1] / 460);
            k[5] = k[7] = ~~(44 * f[5] / 19) - d[1];
            d[5] = d[7] = d[1];
            var b = 2 * d[1]
              , g = 2 * f[0];
            l = n = 0;
            1 == K.a || 3 == K.a ? (l = Math.max(l, g + 17 * f[0] + 2 * f[1] + g),
            n = Math.max(n, b + 17 * d[1] + 2 * d[0] + k[0] + d[4] + k[4] + (c ? d[1] : 0))) : (l = Math.max(l, g + 3 * f[1] + 6 * f[0] + 3 * f[1] + g),
            n = Math.max(n, b + 3 * d[0] + 6 * d[1] + 3 * d[0] + k[0] + d[4] + k[4] + (c ? d[1] : 0)));
            l = Math.max(l, ~~(14.1 * f[4]) + f[0]);
            Nc = d[7] + k[7] - (d[3] + k[3]);
            n = Math.max(n, ~~(2.1 * d[1]) + Nc + 4 * (2 * d[1] + d[0]) + d[1] + k[1] + d[4] + k[4]);
            n = Math.max(n, d[0] + 4 * (2 * d[1] + d[0]) + ~~(2.1 * d[1]) + Nc + 2 * d[1] + k[1] + (c ? d[1] : 0));
            return l <= a && n <= e
        }
        var f = N, d = U, k = T, l, n;
        for (f[0] = 99; 10 < f[0]; --f[0]) {
            Oc = !0;
            f[4] = ~~(31 * (2 * d[1] + k[0]) / 47);
            if (b())
                break;
            Oc = !1;
            f[4] = ~~((a - f[0]) / 14.1);
            if (b())
                break
        }
        f[4] = ~~((a - f[0]) / 14.1);
        for (f[4] = Math.min(f[4], ~~(1.7 * f[0])); 10 < f[4] && !b(); --f[4])
            ;
        2 == p.lthai || !Oc || c || 1 != H.a && 4 != H.a || 1 == K.a || 3 == K.a || (f[4] = ~~((a - f[0]) / 14.1),
        f[4] = Math.min(f[4], ~~(31 * (d[4] + k[4]) / 47) + k[0] + ~~(.3 * d[0])),
        k[4] = ~~(12 * f[4] / 31),
        d[4] = ~~(47 * f[4] / 31) - k[4]);
        for (var g = 0; 8 > g; ++g)
            Cc[g] = N[g] - ~~(5 * T[4 == g ? 4 : 0] / 12);
        e - n < a - l ? n = ~~e : l = ~~a;
        Xb = Math.max(l, ~~(14.1 * f[4]) + f[0]);
        Tb = l;
        Ub = n
    }
    ;function ic(a) {
        va(this, a)
    }
    va(ic.prototype, {
        La: function() {
            if (this.P && !this.Ea)
                if (this.i && 1 == this.u) {
                    var a = 0;
                    this.da && this.da.i && 1 == this.da.u && this.c + N[this.w] == this.da.c + N[this.da.w] && this.h + T[this.w] == this.da.h + U[this.da.w] + T[this.da.w] && (a |= this.da.za && this.da.za.i && 1 == this.da.za.u && this.da.c + N[this.da.w] == this.da.za.c && this.da.h == this.da.za.h ? 0 : 1);
                    this.za && this.za.i && 1 == this.za.u && this.c + N[this.w] == this.za.c && this.h + U[this.w] == this.za.h + U[this.za.w] && (a |= 2);
                    this.Aa && this.Aa.i && 1 == this.Aa.u && this.c + N[this.w] == this.Aa.c + N[this.Aa.w] && this.h + U[this.w] + T[this.w] == this.Aa.h + T[this.Aa.w] && (a |= 4);
                    Bc[this.w << 8 | a] ? (this.P.i = Bc[this.w << 8 | a],
                    this.P.u = 1) : (delete this.P.i,
                    this.P.u = 0)
                } else
                    delete this.P.i
        },
        ma: function(a, e, c) {
            var b = this.aa
              , b = b & a | e;
            a = this.ja;
            e = this.ca;
            b & 4 ? (this.ja = M[this.w << 8 | (b & 1 ? 60 : 50)],
            this.ca = b & 1 ? .3 : .2) : b & 2 ? (this.ja = M[this.w << 8 | (b & 1 ? 60 : 50)],
            this.ca = b & 1 ? .2 : .1) : b & 16 ? (this.ja = M[this.w << 8 | 49],
            this.ca = .3) : b & 1024 ? (this.ja = M[this.w << 8 | 50],
            this.ca = .2) : b & 2048 ? (this.ja = M[this.w << 8 | 60],
            this.ca = .15) : b & 256 ? (this.ja = M[this.w << 8 | 49],
            this.ca = .3) : b & 512 ? (delete this.ja,
            delete this.ca) : b & 4096 ? (this.ja = M[this.w << 8 | 49],
            this.ca = b & 8192 ? .4 : .15) : (delete this.ja,
            delete this.ca);
            this.aa = b;
            !c || this.ja == a && this.ca == e || this.af();
            return this
        },
        ga: function(a) {
            if (!this.i)
                return this;
            var e = 0
              , c = 0;
            this.u && (e = this.P.i ? this.P.i.offsetX + this.P.i.ia : this.i.ia,
            c = this.i.ya);
            this.u = a;
            this.La();
            this.da && this.da.La();
            this.Aa && this.Aa.La();
            this.qb && (this.qb.La(),
            this.qb.Aa && this.qb.Aa.La());
            this.u && (e = this.P.i ? this.P.i.offsetX + this.P.i.ia : e ? e : this.i.ia,
            c = this.i.ya);
            P.Ma(this.c + this.i.offsetX, this.h + this.i.offsetY - this.Ea, e, c);
            return this
        },
        Ga: function(a, e) {
            var c = this.w % 4;
            a && (c || (c += 4),
            c && 136 == e && (c += 4));
            this.i = M[c << 8 | K.bb[e]];
            this.w = c;
            this.i || pb("PH.setImage noimg ", c, e, K.bb[e]);
            return this
        },
        af: function() {
            void 0 !== this.i && 0 !== this.u && P.Ma(this.c, this.h - this.Ea, this.i.ia, this.i.ya)
        },
        Na: function() {
            void 0 !== this.i && 0 !== this.u && P.Ma(this.c, this.h - this.Ea, this.P.i ? this.P.i.offsetX + this.P.i.ia : this.i.ia, this.i.ya)
        }
    });
    var R = {
        ta: []
    };
    (function() {
        for (var a = [function(a, b) {
            a.za = b;
            b.qb = a
        }
        , function(a, b) {
            a.da = b;
            b.Aa = a
        }
        , function(a, b) {
            a.qb = b;
            b.za = a
        }
        , function(a, b) {
            a.Aa = b;
            b.da = a
        }
        ], e = [1024, 14, 2048, 34, 3072, 26, 4096, 34, 5120, 5]; e.length; )
            for (var c = e.shift(), b = e.shift(), f = 0; 4 > f; ++f) {
                for (var d = {}, k = 0; k < b; ++k)
                    R.ta.push(R[c | f << 8 | k] = d[k] = new ic({
                        u: 0,
                        w: f,
                        c: 0,
                        h: 0,
                        Ea: 0,
                        I: 0,
                        J: 0
                    })),
                    R.ta.push(d[k].P = {
                        u: 0
                    }),
                    d[k].wa = d[k].P.wa = d[k];
                for (k = 1; k < b; ++k)
                    if (!(2048 == c && 17 == k || 3072 == c && 6 == k || 3072 == c && 12 == k || 4096 == c && 17 == k))
                        a[f](d[k - 1], d[k]);
                if (2048 == c)
                    for (k = 0; 17 > k; ++k)
                        a[(f + 1) % 4](d[k], d[k + 17]),
                        d[k].Ka = d[k + 17];
                if (3072 == c)
                    for (k = 6; 18 > k; ++k)
                        a[(f + 1) % 4](d[k], d[k - 6]);
                if (4096 == c)
                    for (k = 17; 34 > k; ++k)
                        a[(f + 1) % 4](d[k], d[k - 17]);
                if (5120 == c)
                    break
            }
        for (k = 0; a = R[1024 | k]; ++k)
            a.S = k
    }
    )();
    va(R, {
        K: function() {
            var a = va(Jc, [N[0], 0, -N[0], 0, N[4]])
              , e = va(Kc, [0, -U[1], 0, U[1], 0])
              , c = va(kc, [0, N[1], 0, -N[1]])
              , b = va(jc, [U[0], 0, -U[0], 0]);
            va(Lc, [0, N[1] - N[0], N[0] - N[1], 0]);
            va(Mc, [U[0] - U[1], U[1] - U[0], 0, 0]);
            var f = P.s.canvas.offsetWidth * t
              , d = P.s.canvas.offsetHeight * t
              , k = ~~((f - Tb) / 2)
              , l = ~~((d - Ub) / 2)
              , n = k + Tb
              , g = l + Ub - (p.desktop & 1 ? U[1] : 0)
              , h = 6 * N[0]
              , m = 6 * U[1]
              , y = k + ~~((n - k - h) / 2)
              , C = l + 2 * U[1] + (3 == K.a || 1 == K.a ? 2 * U[0] : 0) + 3 * U[0];
            R[112] = y;
            R[113] = C + m;
            R[114] = y + h;
            R[115] = C + m - U[1];
            R[116] = y + h - N[0];
            R[117] = C - U[0];
            R[118] = y - N[1];
            R[119] = C;
            for (var w = 0; 4 > w; ++w)
                R.jf(w);
            for (var B, z = 0; B = R[5120 | z]; ++z)
                B.c = B.I = y + ~~((h - 5 * N[0]) / 2) + N[0] * z,
                B.h = B.J = C;
            if (3 == K.a) {
                w = 17 * N[0] + 2 * N[1];
                B = 17 * U[1] + 2 * U[0];
                for (var J = y + ~~((h - w) / 2), E = C + ~~((m - B) / 2), J = [{
                    Ia: J + w - 1 * N[0],
                    Ja: E + B - 1 * U[0]
                }, {
                    Ia: J + w - 1 * N[1],
                    Ja: E
                }, {
                    Ia: J,
                    Ja: E
                }, {
                    Ia: J,
                    Ja: E + B - 1 * U[1]
                }], w = 0; 4 > w; ++w)
                    for (z = 0; B = R[4096 | w << 8 | z]; ++z)
                        B.c = B.I = J[w].Ia - a[w] * (16 - z % 17) - (17 > z ? 0 : c[w]),
                        B.h = B.J = J[w].Ja - e[w] * (16 - z % 17) - (17 > z ? 0 : b[w]),
                        B.Ea = 0
            } else if (1 == K.a)
                for (w = 17 * N[0] + N[1],
                B = 17 * U[1] + U[0],
                J = y + ~~((h - w) / 2),
                E = C + ~~((m - B + T[0]) / 2),
                J = [{
                    Ia: J + w - N[0],
                    Ja: E + B - U[0]
                }, {
                    Ia: J + w - N[1],
                    Ja: E
                }, {
                    Ia: J,
                    Ja: E
                }, {
                    Ia: J,
                    Ja: E + B - U[1]
                }],
                w = 0; 4 > w; ++w)
                    for (z = 0; B = R[4096 | w << 8 | z]; ++z)
                        B.c = B.I = J[w].Ia - a[w] * (16 - z % 17),
                        B.h = B.J = J[w].Ja - e[w] * (16 - z % 17),
                        B.Ea = 17 > z ? 0 : T[w];
            else
                for (w = 0; 4 > w; ++w)
                    for (z = 0; B = R[4096 | w << 8 | z]; ++z)
                        B.c = B.h = B.Ea = 0;
            C += T[0];
            R[16] = y;
            R[17] = C;
            R[18] = h;
            R[19] = m;
            a = 3 * N[1];
            e = 3 * U[0];
            R[48] = y + h + T[0];
            R[49] = C + m + T[0];
            R[50] = a - T[0];
            R[51] = e - T[0];
            R[52] = y + h + T[0];
            R[53] = C - e;
            R[54] = a - T[0];
            R[55] = e - T[0];
            R[56] = y - a;
            R[57] = C - e;
            R[58] = a - T[0];
            R[59] = e - T[0];
            R[60] = y - a;
            R[61] = C + m + T[0];
            R[62] = a - T[0];
            R[63] = e - T[0];
            E = 1 == K.a || 3 == K.a ? 0 : U[0];
            R[32] = y;
            R[33] = C + E;
            R[34] = h;
            R[35] = m - E - T[0];
            R[80] = n - ~~(14.1 * N[4]) - N[0];
            R[81] = g - U[4] - T[4];
            R[82] = R[98] = n - N[1];
            R[85] = R[101] = l;
            R[86] = R[102] = k;
            R[96] = n - N[0];
            R[97] = g - T[0] - U[0];
            R[80] < k && (a = ~~((k - R[80]) / 2),
            R[80] += a,
            R[96] += a);
            B = ~~(2.1 * U[1]) + Nc + 4 * (2 * U[1] + U[0]) + (H.v & 16 ? U[1] : 0);
            R[99] = Math.max(l + ~~((g - Math.max(2 * U[1], U[4] + T[4]) - l - B) / 2), 0);
            R[83] = Math.min(R[99] + (B - U[1] - T[1]), g - U[4] - T[4] - U[1]);
            B += T[1];
            R[87] = Math.max(l + ~~((g - U[4] - T[4] - l - B) / 2), 0);
            R[103] = Math.min(R[87] + (B - U[1] - T[1]), g - U[4] - T[4] - U[1]);
            w = ~~(2.1 * N[0]) + 4 * (2 * N[0] + N[1]) + (H.v & 16 ? N[0] : 0);
            3 == K.a && (w = Math.max(w, 17 * N[0] + 2 * N[1]));
            1 == K.a && (w = Math.max(w, 17 * N[0] + 1 * N[1]));
            R[100] = y + ~~((h - w) / 2);
            ~H.v & 16 && !Oc && (R[100] = N[1]);
            H.v & 16 && (H.H[1] || (R[100] += N[0]),
            H.H[3] || (R[100] = k));
            R[84] = R[100] + w - N[0];
            for (w = 0; 4 > w; ++w)
                for (R.mf(w),
                z = 0; B = R[1024 | w << 8 | z]; ++z)
                    B.c = B.I,
                    B.h = B.J;
            $b.K();
            R[64] = R[68] = ~~(R[16] + R[18] / 2);
            R[67] = R[71] = ~~(R[17] + R[19] / 2);
            R[65] = ~~(R[81] - 1.5 * U[0]);
            R[66] = ~~(R[82] - 1.5 * N[1]);
            R[69] = ~~(R[85] + 2.5 * U[2]);
            R[70] = ~~(R[86] + 2.5 * N[3]);
            for (z in R.ta)
                R.ta[z].P && void 0 === R.ta[z].I && console.log(z);
            R.ta.sort(function(a, b) {
                return (void 0 != a.S ? 0 : -f * d) + (a.P ? f * d : 0) + (a.wa.Ea + a.wa.J) * f + a.wa.I - ((void 0 != b.S ? 0 : -f * d) + (b.P ? f * d : 0) + (b.wa.Ea + b.wa.J) * f + b.wa.I)
            })
        },
        fa: function() {
            for (var a = 0; a < R.ta.length; ++a) {
                var e = R.ta[a];
                e.u = 0;
                e.P && (void 0 !== e.I && (e.c = e.I),
                void 0 !== e.J && (e.h = e.J),
                e.ma(-1, 0, !1),
                delete e.nb)
            }
            for (a = 0; 4 > a; ++a)
                R.Jb(a, -2)
        },
        mf: function(a) {
            for (var e, c = 16; R[2048 | a << 8 | c]; --c)
                ;
            for (var b = 0, f = 0, c = 16; e = R[2048 | a << 8 | c]; --c) {
                e.I = R[96 + 2 * a] - Jc[a] * (16 - c);
                e.J = R[97 + 2 * a] - Kc[a] * (16 - c);
                var d = e.Ka;
                d.I = e.I + Jc[(a + 1) % 4];
                d.J = e.J + Kc[(a + 1) % 4];
                e.w != a && (b += Jc[a] - kc[(a + 1) % 4],
                f += Kc[a] - jc[(a + 1) % 4]);
                e.c = e.I + b;
                e.h = e.J + f;
                d.c = d.I + b;
                d.h = d.J + f;
                e.w != a && (e.c += Lc[a],
                e.h += Mc[a],
                d.c += Lc[a],
                d.h += Mc[a])
            }
            for (c = 0; e = R[1024 | a << 8 | c]; ++c)
                e.I = 0 + R[80 + 2 * a] + Jc[a ? a : 4] * c,
                e.J = 0 + R[81 + 2 * a] + Kc[a ? a : 4] * c
        },
        jf: function(a) {
            for (var e = 0, c = 0, b, f = 0; b = R[3072 | a << 8 | f]; ++f)
                if (b.I = R[112 + 2 * a] + Jc[a] * f + (kc[a] - 6 * Jc[a]) * (12 < f ? 2 : ~~(f / 6)) + e,
                b.J = R[113 + 2 * a] + Kc[a] * f + (jc[a] - 6 * Kc[a]) * (12 < f ? 2 : ~~(f / 6)) + c,
                b.w != a && (b.I += Lc[a],
                b.J += Mc[a],
                e = -Jc[a] + kc[(a + 1) % 4],
                c = -Kc[a] + jc[(a + 1) % 4]),
                b.c = b.I,
                b.h = b.J,
                5 == f || 11 == f)
                    e = c = 0
        }
    });
    va(R, {
        Jb: function(a, e) {
            for (var c, b = 0; c = R[3072 | a << 8 | b]; ++b)
                c.w != a && (c.w = a),
                -1 != e || c.u || (e = b);
            0 <= e && (R[3072 | a << 8 | e].w = (a + 1) % 4);
            R.jf(a)
        }
    });
    va(R, function() {
        function a(a) {
            var b = 0, c;
            for (c in e) {
                var d = e[c];
                if (0 <= d.t) {
                    d.qa <= d.t && (d.t = d.qa);
                    P.Ca();
                    var k, l;
                    for (l in d) {
                        var n = d[l]
                          , g = n.Db;
                        if (g) {
                            var h = g.P.i ? g.P.i.offsetX + g.P.i.ia : g.i.ia
                              , m = g.i.ya
                              , y = ~~(g.I + (n.Wa - g.I) * (d.qa - d.t) / d.qa);
                            y <= g.c ? (h += g.c - y,
                            g.c = y) : (h += y - g.c,
                            k = g.c,
                            g.c = y,
                            y = k);
                            n = ~~(g.J + (n.Kb - g.J) * (d.qa - d.t) / d.qa);
                            n <= g.h ? (m += g.h - n,
                            g.h = n) : (m += n - g.h,
                            k = g.h,
                            g.h = n,
                            n = k);
                            P.Ma(y + g.i.offsetX, n + g.i.offsetY, h, m);
                            d.qa <= d.t && g.ga(g.u)
                        }
                    }
                    P.Da()
                }
                d.qa <= d.t && delete e[c];
                d.t += a;
                ++b
            }
            0 == b && pc.Va && pc.Va();
            return b
        }
        var e = {};
        return {
            Ta: function(c, b, f) {
                if (Yb.$) {
                    P.Ca();
                    for (c = 0; c < f.length; ++c)
                        b = f[c],
                        b.Na(),
                        b.c = b.I,
                        b.h = b.J;
                    for (c = 0; c < f.length; ++c)
                        b = f[c],
                        b.ga(b.u),
                        b.Na();
                    P.Da()
                } else {
                    b = e[Za++] = {
                        t: -~~c,
                        qa: b
                    };
                    for (c = 0; c < f.length; ++c)
                        b[c] = {
                            Db: f[c],
                            Wa: f[c].c,
                            Kb: f[c].h
                        };
                    fc().Ta = a
                }
            }
        }
    }());
    var K = function() {
        function a() {
            return !1
        }
        function e(a) {
            return 16 == a || 52 == a || 88 == a
        }
        function c(a) {
            a = (135 - a + f) % 136;
            return R[4096 | ~~(a / 34) << 8 | (a % 34 >> 1) + 17 * (a & 1)]
        }
        var b, f, d, k;
        return {
            a: 0,
            hb: 0,
            Sa: !1,
            bb: {
                136: 48
            },
            ra: function(c) {
                for (var l = K.bb, g = 0; 136 > g; ++g) {
                    var h = ~~(g / 4);
                    l[g] = 10 * (~~(h / 9) + 1) + h % 9 + 1
                }
                H.v & 2 ? K.Fb = a : (K.Fb = e,
                l[16] = 51,
                l[52] = 52,
                l[88] = 53);
                l = H.la;
                g = H.oa[3];
                h = H.oa[4];
                d = (4 + l - H.oa[0] % 4) % 4;
                K.Sa = 6 == g && 0 == h;
                f = ((l + (g + 1) + (h + 1) - 1) % 4 * 17 + 17 - 1 - (g + 1) - (h + 1)) % 68 * 2 + 2;
                K.Sa && (f = 34 * (d + 1));
                b = [0, 0, 0, 0];
                K.hb = 0;
                k = null;
                if (c)
                    for (k = [],
                    g = 0; 136 > g; ++g)
                        k[g] = c[135 - g]
            },
            Se: function(a) {
                if (!K.Sa)
                    return c(b[0]++);
                -1 == a && (a = (d + 3) % 4);
                var e = b[a]++;
                return R[4096 | a << 8 | 33 - (17 * (e & 1) + (e >> 1))]
            },
            Oa: function(a) {
                if (!K.Sa)
                    return c(135 - a ^ 1);
                var b = (d + (a >> 2)) % 4;
                a %= 4;
                return R[4096 | b << 8 | 17 * (~a & 1) + (a >> 1)]
            },
            ec: function(a, b) {
                return k ? K.Sa ? k[135 - (34 * a + ~~(b % 34 / 17) + b % 17 * 2)] : k[(135 - (34 * a + ~~(b % 34 / 17) + b % 17 * 2) + f) % 136] : 136
            },
            bf: function(a) {
                if (!b)
                    return 0;
                if (0 != (H.v & 2048))
                    return 116 - b[0] - 2 * (H.oa.length - 5);
                if (!K.Sa)
                    return 122 - b[0] - K.hb;
                for (var c = 0, d = -1, e = 1; 4 >= e; ++e)
                    H.H[(a + e) % 4] && c < b[(a + e) % 4] && (c = b[(a + e) % 4],
                    d = e);
                return (30 - c) * (H.v & 16 ? 3 : 4) + d - 1
            },
            Fb: a
        }
    }();
    K.Gf = function(a) {
        function e(a) {
            for (var b = 0; b < a.length; ++b)
                a[b] = (a[b] & 255) << 24 | (a[b] & 65280) << 8 | (a[b] & 16711680) >>> 8 | (a[b] & 4278190080) >>> 24;
            return a
        }
        a = a.split(",");
        if ("mt19937ar-sha512-n288-base64" == a[0]) {
            a = function(a) {
                a = atob(a);
                for (var b = [], c = 0; c < a.length; c += 4)
                    b.push(a.charCodeAt(c + 0) << 0 | a.charCodeAt(c + 1) << 8 | a.charCodeAt(c + 2) << 16 | a.charCodeAt(c + 3) << 24);
                return b
            }(a[1]);
            var c = -1
              , b = new Pc;
            Qc(b, a, a.length);
            var f = new Pc;
            return function(a, k) {
                if (k && c != a) {
                    for (var d = [], n = 0; 624 > n; ++n)
                        d[n] = Rc(b);
                    Qc(f, d, 624)
                }
                c = a;
                for (var g = k ? f : b, d = [], h = [], n = 0; 9 > n; ++n) {
                    for (var m = [], y = 0; 32 > y; ++y)
                        m[y] = Rc(g);
                    Array.prototype.push.apply(h, e(Sc(e(m))))
                }
                for (var n = 0; n < h.length; ++n)
                    h[n] >>>= 0;
                if (H.v & 16)
                    for (n = 0; 136 > n; ++n)
                        (4 > n || 32 <= n) && d.push(n);
                else
                    for (n = 0; 136 > n; ++n)
                        d.push(n);
                y = d.length;
                for (n = 0; n < y - 1; ++n)
                    g = n + h[n] % (y - n),
                    m = d[n],
                    d[n] = d[g],
                    d[g] = m;
                return d
            }
        }
    }
    ;
    var Ac = function() {
        function a(a) {
            if (void 0 !== b)
                return 350 < e && 25 < e - c && (b(),
                c = e),
                e += a,
                !0
        }
        var e = 0
          , c = 0
          , b = void 0;
        return {
            set: function(f, d) {
                b = f;
                e = c = 0;
                b ? (d && b(),
                fc().autoRepeat = a) : delete fc().Xf
            }
        }
    }();
    var H = function() {
        function a(a) {
            if (1 == H.a) {
                var b = (~~p.lognext + 40 - 1) % 40
                  , c = p["log" + b];
                if (c) {
                    try {
                        c = JSON.parse(c)
                    } catch (w) {
                        return
                    }
                    c.sc || (c.sc = a,
                    p["log" + b] = JSON.stringify(c))
                }
            }
        }
        function e(a, b, c, d, e, f, g) {
            var m, h, k;
            c instanceof ic ? (m = d.w % 4,
            h = d.c,
            k = d.h,
            d.ga(0),
            d = M[c.w << 8 | K.bb[e]]) : (m = c,
            c = R[b | m << 8 | d],
            h = c.c,
            k = c.h,
            d = M[m << 8 | 48]);
            switch (b) {
            case 5120:
                k = 0;
                break;
            case 4096:
                0 == m ? k = Ub : 1 == m ? h = Tb : 2 == m ? k = 0 : 3 == m && (h = 0);
                m & 1 && (h -= P.s.canvas.offsetLeft * t);
                break;
            case 1024:
                var l = n ? K.Oa(K.hb++) : K.Se(m);
                1 == K.a || 3 == K.a ? (d = l.i,
                h = l.c,
                k = l.h,
                Yb.O(a, l, 0)) : 0 == m ? k = ~~(Ub / 2) : 1 == m ? h = ~~(Tb / 2) : 2 == m ? k = ~~(Ub / 2) : 3 == m && (h = ~~(Tb / 2));
                n = !1;
                break;
            case 3072:
                c.c = c.I + (Yb.$ ? 0 : ~~(.2 * Jc[m]) + ~~(.15 * kc[m])),
                c.h = c.J + (Yb.$ ? 0 : ~~(.2 * Kc[m]) + ~~(.15 * jc[m]))
            }
            c.Ga(1024 == b, e);
            Yb.O(a + 0, h, k, c.c, c.h, f, d, .06);
            b = Yb.O(a + 10, h, k, c.c, c.h, f, d, .18, c, 1);
            Yb.O(a + 20, h, k, c.c, c.h, f, d, .06);
            0 != g && hc(g, 0, b / 1E3);
            return b
        }
        function c(a) {
            cc.Z();
            v.R(256);
            mc();
            var b = {
                tag: "D",
                p: a
            };
            1 == H.a ? W.L(b) : 4 == H.a && D.ff(b);
            b[0] = a;
            W.sa(b)
        }
        function b() {
            H.Ye = [-1, -1, -1, -1];
            H.ob = ["", "", "", ""];
            for (var a = 0, b = 0; 4 > b; ++b)
                who = (H.la + b) % 4,
                H.H[who] && (H.Ye[who] = a,
                H.ob[who] = "東南西北".substr(a, 1),
                ++a)
        }
        var f = {
            84: 0,
            85: 1,
            86: 2,
            87: 3,
            116: 0,
            117: 1,
            118: 2,
            119: 3
        }, d = -1, k = -1, l = null, n, g = "", h = !1;
        return {
            a: 0,
            v: 0,
            pb: 0,
            la: -1,
            Ye: [],
            ob: [],
            oa: [],
            pa: [],
            Ve: [],
            Wa: [],
            $a: [],
            Ua: [],
            H: [],
            connected: 0,
            fa: function() {
                var a = fc(), b;
                for (b in a)
                    "autoRepeat" != b && delete a[b];
                Zb.fa();
                Yb.ra();
                P.Ib();
                for (b = 0; b < R.ta.length; ++b)
                    a = R.ta[b],
                    a.u = 0,
                    a.P && (void 0 !== a.I && (a.c = a.I),
                    void 0 !== a.J && (a.h = a.J),
                    a.ma(0, 0, !1),
                    delete a.nb);
                for (b = 0; 4 > b; ++b)
                    R.Jb(b, -2);
                l = null;
                k = -1;
                d = H.la = -1;
                bc.X(0, -1);
                $b.ra();
                V.ra();
                ac.style.display = bc.s.canvas.style.display = "none";
                cc.Z();
                v.R(256);
                mc();
                S.K();
                D.fa()
            },
            ra: function(a) {
                if ("REINIT" == a.tag || 3 == H.a)
                    Yb.$ = !0;
                n = !1;
                d = H.la = ~~a.oya;
                H.oa = q(a.seed);
                H.pa = q(a.ten, 100);
                H.Ve = q(a.chip);
                b();
                cc.Mf(ia(H.pb, H.v) ? 5E3 : 1E4);
                K.ra(a[5]);
                $b.ra();
                V.ra();
                wb.Ff();
                h && (lc(40, 0, 0),
                h = !1);
                bc.X(void 0, -1);
                for (var c = 0; 4 > c; ++c)
                    if (H.H[c])
                        for (var f = 0; 13 > f; ++f)
                            V[32 | c].push(136);
                var g = 0;
                if (1 == K.a) {
                    for (c = 0; 4 > c; ++c)
                        for (f = 0; 34 > f; ++f)
                            R[4096 | c << 8 | f].ca = 0;
                    for (f = 0; 17 > f; ++f)
                        for (c = 0; 4 > c; ++c)
                            Yb.O(e(g, 4096, c, f, 136, .08, 4), R[4096 | c << 8 | f + 17].Ga(!1, 136), 1),
                            g += 12
                } else if (3 == K.a) {
                    for (var m = u.tw + 1, c = 0; 4 > c; ++c)
                        for (f = 0; 34 > f; ++f) {
                            var k = K.ec(c, f)
                              , l = R[4096 | c << 8 | f]
                              , k = (k & 3840) >> 8;
                            k == m ? l.ma(-2049, 2048, !1) : 5 == k ? l.ma(-12289, 12288, !1) : l.ma(-4097, 4096, !1)
                        }
                    for (f = 0; 17 > f; ++f)
                        for (c = 0; 4 > c; ++c)
                            Yb.O(e(g, 4096, c, f, K.ec(c, f) & 255, .08, 4), R[4096 | c << 8 | f + 17].Ga(!1, K.ec(c, f + 17) & 255), 1),
                            g += 12
                } else
                    for (f = 0; 5 > f; ++f)
                        e(g, 5120, 0, f, 136, .08, 4),
                        g += 45;
                Yb.O(function() {
                    bc.X(void 0, d);
                    for (var a = 5; a < H.oa.length; ++a)
                        H.DORA({
                            hai: H.oa[a],
                            Ze: a - 5
                        });
                    if (K.Sa)
                        for (var b = 0; 4 > b; ++b) {
                            var c = ~~(.1 * Jc[b])
                              , e = ~~(.1 * Kc[b]);
                            P.Ca();
                            for (a = 0; 34 > a; ++a)
                                if (2 <= a % 17) {
                                    var f = R[4096 | b << 8 | a];
                                    f.Na();
                                    f.c += c;
                                    f.h += e;
                                    f.La();
                                    f.Na()
                                }
                            for (a = 0; 34 > a; ++a)
                                R[4096 | b << 8 | a].La();
                            P.Da()
                        }
                });
                for (var E = [0, 0, 0, 0], c = 0; 4 > c; ++c)
                    H.H[c] || (E[c] += 136 - (H.v & 2048 ? 112 : 108));
                for (c = 0; 4 > c; ++c)
                    for (l = q(a["m" + c]); l.length; )
                        k = l.pop(),
                        H.N({
                            who: c,
                            m: k
                        }),
                        n && (K.Oa(K.hb).ga(0),
                        ++K.hb,
                        n = !1),
                        ++E[(c + (k & 3)) % 4],
                        --E[c];
                a.hai && (V[32] = q(a.hai));
                a.hai0 && (V[32] = q(a.hai0));
                a.hai1 && (V[33] = q(a.hai1));
                a.hai2 && (V[34] = q(a.hai2));
                a.hai3 && (V[35] = q(a.hai3));
                S.K();
                for (c = 0; 4 > c; ++c)
                    for (H.H[c] && (E[c] += 13 - V[32 | c].length),
                    f = 0; f < V[32 | c].length; ++f)
                        136 > V[32 | c][f] && V[48 | c][V[32 | c][f] >> 2]++;
                f = [q(a.kawa0), q(a.kawa1), q(a.kawa2), q(a.kawa3)];
                for (c = 0; 4 > c; ++c) {
                    P.Ca();
                    g = 0;
                    for (m = !1; f[c].length; )
                        k = f[c].shift(),
                        255 == k ? (R.Jb(c, g),
                        0 == c && (V[64] = tb.mb(V[48]))) : 254 == k ? m = !0 : (l = R[3072 | c << 8 | g],
                        l.Ga(!1, k & 255),
                        l.ga(1),
                        m && (4 == H.mode || 1 != H.a && v.l[1277961]) && l.ma(-257, 256, !1),
                        l.Na(),
                        ++E[c],
                        ++g,
                        m = !1);
                    P.Da()
                }
                Yb.$ && P.Ca();
                Yb.O(function() {
                    for (var a = 0; 4 > a; ++a)
                        for (var b = 0; b < E[a]; ++b)
                            K.Se(a).ga(0);
                    for (var c = 0, d = 0; 52 > d; ++d)
                        a = (48 > d ? ~~(d / 4) : d) % 4,
                        H.H[a] && (b = 48 > d ? 4 * ~~(d / 16) + d % 4 : 12,
                        V[32 | a].length <= b || (e(c, 1024, a, b, a && !v.l[1277960] ? 136 : V[32 | a][b], .08, 4),
                        3 == d % 4 && (c += 75)));
                    bc.X()
                });
                Yb.$ && P.Da();
                Yb.O(function() {
                    for (var a = 0; 4 > a; ++a)
                        Yb.$ && P.Ca(),
                        (Yb.$ || a || v.l[1183750]) && V.Qf(a),
                        Yb.$ && P.Da();
                    if (~H.v & 2048 && (1 == K.a || 3 == K.a)) {
                        P.Ca();
                        K.Oa(14).Na();
                        for (var a = K.Oa(14).w, b = ~~(.15 * Jc[a]), c = ~~(.15 * Kc[a]), d = 14; 48 > d; ++d) {
                            var e = K.Oa(d);
                            if (e.w != a)
                                break;
                            e.c += b;
                            e.h += c;
                            e.Na()
                        }
                        K.Oa(13).La();
                        K.Oa(15).La();
                        P.Da()
                    }
                });
                ac.style.display = "none";
                bc.s.canvas.style.display = "";
                v.l[1183749] = v.l[1183753] = v.l[1183751] = !1;
                v.l[1183752] = !!p.autowin;
                v.l[1183750] = !0;
                v.R(256);
                if ((3 == H.a || 2 == H.a) && v.l[1277957])
                    for (c = 0; 4 > c; ++c)
                        wb.kf(c);
                if ("REINIT" == a.tag || 3 == H.a)
                    Yb.$ = !1;
                Yb.O(W.Ha)
            },
            gc: function(a) {
                var b = k;
                V[64] || (b = V[32 | d][a]);
                c(b)
            },
            ERR: function(a) {
                var b = ~~a.code;
                a = "(ERR" + b + ")";
                var c = 1;
                switch (b) {
                case 1001:
                case 1002:
                case 1003:
                case 1004:
                case 1005:
                case 1006:
                case 1012:
                case 1019:
                case 1021:
                    D.b.style.display = "";
                    lb(!1, 0);
                    break;
                case 1020:
                    c |= 2;
                    break;
                case 1027:
                    a = "";
                    break;
                case 1100:
                case 1101:
                    D.cancel()
                }
                A.o(I[b] + a, c, function() {
                    switch (b) {
                    case 1014:
                        delete u.wg;
                        break;
                    case 1019:
                        location.reload();
                        break;
                    case 1020:
                        D.purchase()
                    }
                });
                return 1
            },
            HELO: function(a) {
                if (a.closing)
                    return location.reload(),
                    1;
                if (2 == H.a)
                    return W.L({
                        tag: "WG",
                        id: u.wg,
                        tw: u.tw
                    }),
                    1;
                var b;
                D[17] = a.PF4 ? a.PF4.split(",") : [];
                D[16] = a.PF3 ? a.PF3.split(",") : [];
                D[18] = a.PF601 && a.PF01C ? (b = a.PF601.split(","),
                b.splice(1, 0, 0, a.PF01C.split(",")[1]),
                b) : [];
                D[19] = a.PF602 && a.PF02C ? (b = a.PF602.split(","),
                b.splice(1, 0, 0, a.PF02C.split(",")[1]),
                b) : [];
                D[20] = a.PF603 && a.PF03C ? (b = a.PF603.split(","),
                b.splice(1, 0, 0, a.PF03C.split(",")[1]),
                b) : [];
                D[21] = a.PF611 && a.PF11C ? (b = a.PF611.split(","),
                b.splice(1, 0, 0, a.PF11C.split(",")[1]),
                b) : [];
                D[22] = a.PF612 && a.PF12C ? (b = a.PF612.split(","),
                b.splice(1, 0, 0, a.PF12C.split(",")[1]),
                b) : [];
                D[23] = a.PF613 && a.PF13C ? (b = a.PF613.split(","),
                b.splice(1, 0, 0, a.PF13C.split(",")[1]),
                b) : [];
                D[24] = a.PF623 && a.PF23C ? (b = a.PF623.split(","),
                b.splice(1, 0, 0, a.PF23C.split(",")[1]),
                b) : [];
                D[25] = a.PF633 && a.PF33C ? (b = a.PF633.split(","),
                b.splice(1, 0, 0, a.PF33C.split(",")[1]),
                b) : [];
                D[0] = decodeURIComponent(a.uname);
                D[1] = a.expire;
                D[2] = ~~a.expiredays;
                a.nintei ? (a.tag = "NINTEI",
                D.o(a)) : D.cc();
                return 1
            },
            REHELO: function() {
                W.yf();
                return 1
            },
            LN: D.tf,
            REJOIN: function(a) {
                W.L({
                    tag: "JOIN",
                    t: a.t
                });
                return 1
            },
            CHAT: D.pf,
            CS: D.qf,
            DATE: D.rf,
            RANKING: function(a) {
                a.rankingcs ? D.wf(a) : D.vf(a);
                return 1
            },
            SHUFFLE: function() {
                return 1
            },
            GO: function(a) {
                a.gpid && (p.gpid = a.gpid);
                H.pb = ~~a.lobby;
                H.v = ~~a.type;
                1 != H.a && 2 != H.a || W.L({
                    tag: "GOK"
                });
                1 == H.a && 0 == H.pb && H.v & 1 && D.Tf(H.v);
                return 1
            },
            UN: function(a) {
                if (3 <= !!a.n0 + !!a.n1 + !!a.n2 + !!a.n3) {
                    H.H = ["", "", "", ""];
                    for (var b = 0; 4 > b; ++b)
                        H.H[b] = decodeURIComponent(a["n" + b]).replace("Ⓟ", "ⓟ").replace("Ⓢ", "ⓢ");
                    H.$a = q(a.dan ? a.dan : ",,,");
                    H.Ua = q(a.rate ? a.rate : ",,,");
                    H.Wa = (a.sx ? a.sx : ",,,").split(",");
                    if (!1 !== v.l[14])
                        for (b = 0; 4 > b; ++b) {
                            if (a = H.H[b])
                                (a = H.H[b]) && a.length ? (a = a.charCodeAt(0),
                                a = 9372 <= a && 9397 >= a || 9398 <= a && 9423 >= a || 9424 <= a && 9449 >= a) : a = !1,
                                a = !(a || 20 <= H.$a[b]);
                            a && (a = (u.tw + b) % 4,
                            H.H[b] = 3 == H.a && a == u.TW ? "私" : "ABCD".substr(a, 1) + "さん")
                        }
                } else
                    a.n0 && (H.connected |= 1),
                    a.n1 && (H.connected |= 2),
                    a.n2 && (H.connected |= 4),
                    a.n3 && (H.connected |= 8),
                    bc.X();
                return 1
            },
            BYE: function(a) {
                H.connected &= ~(1 << ~~a.who);
                bc.X();
                return 1
            },
            TAIKYOKU: function(a) {
                v.l[1183749] = v.l[1183753] = v.l[1183752] = v.l[1183751] = !1;
                v.l[1183750] = !0;
                v.b.style.display = "";
                v[1572868].innerHTML = "";
                v.R(126976);
                W.Pa = 0;
                h = "SAIKAI" != a.tag && H.v & 1;
                H.la = ~~a.oya;
                if (1 == H.a && a.log) {
                    g = a.log;
                    var c = ~~p.lognext;
                    p["log" + c] = JSON.stringify({
                        type: H.v,
                        lobby: H.pb,
                        log: g,
                        oya: H.la,
                        uname: H.H
                    });
                    p.lognext = (c + 1) % 40
                }
                H.connected = 15;
                b();
                R.K();
                $b.K();
                D.o(a);
                Wb.X();
                return 1
            },
            INIT: function(a) {
                D.Z(function() {
                    H.fa();
                    H.ra(a)
                })
            },
            FURITEN: function(a) {
                ac.style.display = ~~a.show ? "" : "none";
                return 1
            },
            T: function(a) {
                if (-1 == d)
                    return 1;
                if (n || 3 == H.a)
                    V.ub(d),
                    V.tb();
                3 == H.a && Zb.ac();
                l && (R.Ta(0, 120, [l]),
                l = null);
                k = void 0 === a[0] ? 136 : a[0];
                d = f[a.tag.charCodeAt(0)];
                var b = V[32 | d].length;
                V[32 | d].push(k);
                136 > k && V[48 | d][k >> 2]++;
                var g = R[1024 | d << 8 | b];
                g || pb("T d PH_TEHAI who=" + d + " n=" + b + " wg=" + u.wg);
                g.c = g.I + ~~(.1 * Jc[d]);
                g.h = g.J + ~~(.1 * Kc[d]);
                e(0, 1024, d, b, d && !v.l[1277960] ? 136 : k, -120, 5);
                bc.X(void 0, d);
                1 != H.a && wb.lf(g);
                var h = ~~a.t;
                Yb.O(function() {
                    3 == H.a || 2 == H.a || d || (h & 16 && v.l[1183752] ? W.L({
                        tag: "N",
                        type: 7
                    }) : (h = nc.Ef(h, k)) || !v.l[1183753] && !V[64] ? mc(a) : (cc.cf(),
                    c(k)));
                    gc(W.Ha, Yb.$ || 3 == H.a ? 0 : 500)
                })
            },
            D: function(a) {
                if (-1 == d)
                    return 1;
                var b = a.tag.charCodeAt(0)
                  , c = 100 <= b && 103 >= b || k === a[0];
                k = a[0];
                0 < V[48 | d][k >> 2] && V[48 | d][k >> 2]--;
                for (var f = V[32 | d].length, b = 0; b < f && V[32 | d][b] != k; ++b)
                    ;
                b == f && (b = c ? f - 1 : ~~((f - 1) / 2));
                b = R[1024 | d << 8 | b];
                for (f = 0; (l = R[3072 | d << 8 | f]) && l.u; ++f)
                    ;
                2 == H.a || 3 == H.a ? (v.l[1277957] && wb.kf(d),
                v.l[1277961] && l.ma(-1281, (c ? 256 : 0) | b.aa & 1024, !1)) : (H.v & 256 || 4 == H.a) && l.ma(-257, c ? 256 : 0, !1);
                e(0, 3072, l, b, k, -120, 6);
                var g = ~~a.t;
                Yb.O(function() {
                    g & 8 && v.l[1183752] ? (lc(8, 0, 0),
                    gc(function() {
                        W.L({
                            tag: "N",
                            type: 6
                        })
                    }, 1E3)) : ~g & 8 && g && v.l[1183749] ? W.L({
                        tag: "N"
                    }) : g && nc.Cf(g, k);
                    3 == H.a ? (V.ic(d),
                    W.Ha()) : gc(function() {
                        V.ic(d);
                        V.ub(d);
                        V.tb();
                        W.Ha()
                    }, Yb.$ ? 0 : 300)
                })
            },
            N: function(a) {
                cc.Z();
                v.R(256);
                mc();
                if (-1 == d)
                    return 1;
                3 == H.a && (V.ub(d),
                V.tb());
                var b = d = ~~a.who;
                bc.X(void 0, b);
                a[2] || oc(a);
                var c = a[0]
                  , f = V[32 | b].length
                  , g = []
                  , h = 3 - a[3];
                if (a.tag) {
                    Zb.O(b, a[2], 3 == H.a ? 4 : 6);
                    for (var m = 0; m < c.length; ++m)
                        if (l && c[m] == k)
                            g[m] = l,
                            l = null,
                            h = m;
                        else {
                            for (var E = 0; E < V[32 | b].length && V[32 | b][E] != c[m]; ++E)
                                ;
                            E == V[32 | b].length && (E = --f);
                            g[m] = R[1024 | b << 8 | E];
                            V[48 | b][c[m] >> 2]--
                        }
                } else
                    5 == a[2] && H.N({
                        who: b,
                        m: a.m ^ 24
                    });
                n = !0;
                f = [];
                if (10 == a[2])
                    V[16 | b].push(c[0]),
                    $b.wb(b),
                    f[0] = R[b << 8 | 2064],
                    f[0].w = b;
                else if (1 == c.length) {
                    for (m = (H.v & 16 ? 16 : 17) - 1; (f[0] = R[2048 | b << 8 | m]) && f[0].u && f[0].Ka.nb != c[0]; --m)
                        ;
                    f[0] && (f[0].Ka.w = (b + 3) % 4,
                    f[0] = f[0].Ka)
                } else {
                    for (m = (H.v & 16 ? 16 : 17) - 1; (f[0] = R[2048 | b << 8 | m]) && f[0].u; --m)
                        ;
                    f.unshift(R[2048 | b << 8 | m - 1]);
                    f.unshift(R[2048 | b << 8 | m - 2]);
                    for (m = 0; m < f.length; ++m)
                        f[m].w = b;
                    3 == h && (h = a[3] ? 2 : 1);
                    4 == c.length ? (f[h].w = f[h].Ka.w = (b + 1) % 4,
                    f[3] = f[2],
                    f[2] = f[h].Ka) : (n = !1,
                    f[h].w = (b + 1) % 4,
                    1 == a[2] && (f[h].Ka.nb = a[4]))
                }
                R.mf(b);
                if (a.tag) {
                    for (m = 0; m < f.length; ++m) {
                        h = c[m];
                        4 != c.length || a[3] || 0 != m && 3 != m || (h = 136);
                        E = .06;
                        if (10 == a[2])
                            var E = f[m].c - g[m].c
                              , da = f[m].h - g[m].h
                              , E = Math.sqrt(E * E + da * da) / 4E3;
                        e(0, 2048, f[m], g[m], h, E, 0)
                    }
                    V.ic(b);
                    V.ub(b);
                    V.tb();
                    b || (S.K(),
                    n || mc(a));
                    var pa = ~~a.t;
                    Yb.O(function() {
                        pa && nc.Df(pa);
                        W.Ha()
                    })
                } else {
                    for (m = 0; m < f.length; ++m)
                        h = c[m],
                        4 != c.length || a[3] || 0 != m && 3 != m || (h = 136),
                        f[m].Ga(!1, h),
                        f[m].ga(1),
                        f[m].Na();
                    5 != a[2] && 10 != a[2] && V[32 | b].splice(V[32 | b].length - 3, 3)
                }
            },
            DORA: function(a) {
                if (-1 == d)
                    return 1;
                var b = ~~a.hai
                  , c = void 0 === a.Ze ? H.oa.length - 5 : a.Ze
                  , e = (H.v & 2048 ? 20 : H.v & 16 ? 8 : 4) + 2 * c
                  , f = R[5120 | c];
                if (1 == K.a || 3 == K.a)
                    f = K.Oa(e);
                f.Ga(!1, b);
                0 == c && 3 == K.a && f.ma(-513, 512, !1);
                f.af();
                "DORA" == a.tag && H.oa.push(b);
                1 < c && ($b.wb(0),
                $b.wb(1),
                $b.wb(2),
                $b.wb(3));
                return 1
            },
            REACH: function(a) {
                if (1 == a.step) {
                    var b = ~~a.who;
                    Zb.O(b, 8, 3 == H.a ? 7 : 6);
                    R.Jb(b, -1);
                    0 == b && mc(a);
                    gc(W.Ha, Yb.$ || 3 == H.a ? 0 : 500)
                } else
                    return 2 == a.step && (b = ~~a.who,
                    1 == H.a && 0 == b && (V[64] = tb.mb(V[48])),
                    H.oa[2]++,
                    bc.X()),
                    a.ten && (H.pa = q(a.ten, 100)),
                    1
            },
            AGARI: function(b) {
                if (-1 == d)
                    return 1;
                3 == H.a && Zb.ac();
                var c = ~~b.who;
                V[32 | c] = q(b.hai);
                V[32 | c].splice(V[32 | c].indexOf(~~b.machi), 1);
                if (c && c == b.fromWho) {
                    var e = R[1024 | c << 8 | V[32 | c].length];
                    e.ga(0).Ga(!0, ~~b.machi).ga(1);
                    1 != H.a && wb.lf(e)
                }
                l && (R.Ta(0, 120, [l]),
                l = null);
                Zb.O(c, c == b.fromWho ? 7 : 6, 3 == H.a ? 4 : 6);
                b.paoWho && Zb.O(~~b.paoWho, 11, 3 == H.a ? 4 : 6);
                V.gf(1 << c);
                gc(function() {
                    D.o(b);
                    b.owari && (p.removeItem("gpid"),
                    D.o({
                        tag: "OWARI",
                        sc: b.owari
                    }),
                    a(b.owari),
                    W.Z())
                }, 3 == H.a ? 0 : 1E3);
                Ac.set();
                return 1
            },
            RYUUKYOKU: function(b) {
                if (-1 == d)
                    return 1;
                3 == H.a && Zb.ac();
                b.hai1 && (V[33] = q(b.hai1));
                b.hai2 && (V[34] = q(b.hai2));
                b.hai3 && (V[35] = q(b.hai3));
                if ("ron3" == b.type) {
                    var c = 3 == H.a ? 4 : 6;
                    b.hai0 && Zb.O(0, 6, c);
                    b.hai1 && Zb.O(1, 6, c);
                    b.hai2 && Zb.O(2, 6, c);
                    b.hai3 && Zb.O(3, 6, c)
                }
                l && (R.Ta(0, 120, [l]),
                l = null);
                V.gf(14);
                gc(function() {
                    D.o(b);
                    b.owari && (p.removeItem("gpid"),
                    D.o({
                        tag: "OWARI",
                        sc: b.owari
                    }),
                    a(b.owari),
                    W.Z())
                }, 3 == H.a ? 0 : 1E3);
                Ac.set();
                return 1
            },
            VOICE: function(a) {
                a = a.type;
                for (var b = 0; 4 > b; ++b)
                    a[b] && Zb.O(b, a[b], 3);
                return 1
            },
            PROF: function() {
                return 1
            },
            INITBYLOG: wb.sf,
            WGC: wb.xf,
            TRAININGINIT: function(a) {
                H.ra(a)
            }
        }
    }();
    H.W = H.V = H.U = H.T;
    H.g = H.f = H.e = H.d = H.G = H.F = H.E = H.D;
    H.KANSEN = H.SAIKAI = H.TAIKYOKU;
    H.REINIT = H.INIT;
    function Pc() {
        this.ea = 624;
        this.xb = 397;
        this.uf = 2567483615;
        this.Mb = 2147483648;
        this.Lb = 2147483647;
        this.B = Array(this.ea);
        this.va = this.ea + 1
    }
    function Tc(a, e) {
        a.B[0] = e >>> 0;
        for (a.va = 1; a.va < a.ea; a.va++)
            e = a.B[a.va - 1] ^ a.B[a.va - 1] >>> 30,
            a.B[a.va] = (1812433253 * ((e & 4294901760) >>> 16) << 16) + 1812433253 * (e & 65535) + a.va,
            a.B[a.va] >>>= 0
    }
    function Qc(a, e, c) {
        var b, f, d;
        Tc(a, 19650218);
        b = 1;
        f = 0;
        for (d = a.ea > c ? a.ea : c; d; d--) {
            var k = a.B[b - 1] ^ a.B[b - 1] >>> 30;
            a.B[b] = (a.B[b] ^ (1664525 * ((k & 4294901760) >>> 16) << 16) + 1664525 * (k & 65535)) + e[f] + f;
            a.B[b] >>>= 0;
            b++;
            f++;
            b >= a.ea && (a.B[0] = a.B[a.ea - 1],
            b = 1);
            f >= c && (f = 0)
        }
        for (d = a.ea - 1; d; d--)
            k = a.B[b - 1] ^ a.B[b - 1] >>> 30,
            a.B[b] = (a.B[b] ^ (1566083941 * ((k & 4294901760) >>> 16) << 16) + 1566083941 * (k & 65535)) - b,
            a.B[b] >>>= 0,
            b++,
            b >= a.ea && (a.B[0] = a.B[a.ea - 1],
            b = 1);
        a.B[0] = 2147483648
    }
    function Rc(a) {
        var e, c = [0, a.uf];
        if (a.va >= a.ea) {
            var b;
            a.va == a.ea + 1 && Tc(a, 5489);
            for (b = 0; b < a.ea - a.xb; b++)
                e = a.B[b] & a.Mb | a.B[b + 1] & a.Lb,
                a.B[b] = a.B[b + a.xb] ^ e >>> 1 ^ c[e & 1];
            for (; b < a.ea - 1; b++)
                e = a.B[b] & a.Mb | a.B[b + 1] & a.Lb,
                a.B[b] = a.B[b + (a.xb - a.ea)] ^ e >>> 1 ^ c[e & 1];
            e = a.B[a.ea - 1] & a.Mb | a.B[0] & a.Lb;
            a.B[a.ea - 1] = a.B[a.xb - 1] ^ e >>> 1 ^ c[e & 1];
            a.va = 0
        }
        e = a.B[a.va++];
        e ^= e >>> 11;
        e ^= e << 7 & 2636928640;
        e ^= e << 15 & 4022730752;
        return (e ^ e >>> 18) >>> 0
    }
    Pc.prototype.random = function() {
        return Rc(this) * (1 / 4294967296)
    }
    ;
    var pc = function() {
        function a() {
            v.ka(1574918)
        }
        function e() {
            v.ka(1574917)
        }
        function c() {
            var a = V[32]
              , a = a ? 3 * ~~(a.length / 3) + 1 : 1;
            if (R[1024 | a].u)
                return R[1024 | a]
        }
        function b(a, b) {
            if (a && a.tagName) {
                var c = a.style;
                b ? (c.backgroundColor = m & 4 ? "#050" : "#030",
                c.animationName = "none",
                c.color || (c.color = "#FFF")) : (c.backgroundColor = "",
                c.animationName = "",
                c.color = "")
            }
        }
        function f(a) {
            if (g != a) {
                if (g && g.tagName && (b(g, !1),
                h && !a)) {
                    g = h;
                    return
                }
                h && (~m & 2 || !a || a instanceof ic) && (S.Xa(h.S, -15, 0),
                h = void 0);
                if (!a && h)
                    g = h;
                else {
                    g = a;
                    a instanceof ic && S.Xa(a.S, -15, 2 | (m & 8 ? 8 : 0));
                    if (!a || a instanceof ic)
                        h = a;
                    D.Of(a);
                    m &= -5;
                    b(g, !0)
                }
            }
        }
        function d(a) {
            if (h) {
                var b = h.S;
                S.Xa(b, -15, 0);
                S.Xa(b + a, -15, 6);
                h = R[1024 | b + a]
            }
        }
        function k(k, n) {
            k && Ac.set();
            if (g) {
                k || 3 != H.a || (g == v[1574917] && Ac.set(e, !1),
                g == v[1574918] && Ac.set(a, !1));
                if (k && !n)
                    m &= -5,
                    g instanceof ic && S.Xa(g.S, -15, 0),
                    g && g != bc.s.canvas && g.style && ~m & 8 && f();
                else if (!n || ~m & 4)
                    m |= 4,
                    g instanceof ic && S.Xa(g.S, -15, 4 | (m & 8 ? 8 : 0));
                else {
                    if ("CPda" == g.name)
                        f(),
                        g = h;
                    else if ("CPok" == g.name) {
                        var E = c();
                        E && R[1024 | E.S].aa & 1 && E.u ? H.gc(E.S) : l(Vb, 0, 0, !0, !1)
                    }
                    if (g instanceof ic)
                        R[1024 | g.S].aa & 1 && g.u && (H.gc(g.S),
                        f());
                    else if (g && g.tagName) {
                        if (!k)
                            return;
                        if (g.name) {
                            if (!g.disabled)
                                if ("CP_L" == g.name)
                                    S.dc(-1),
                                    d(-1);
                                else if ("CP_R" == g.name)
                                    S.dc(1),
                                    d(1);
                                else if (D[g.name])
                                    D[g.name](g)
                        } else
                            g == bc.s.canvas ? bc.ka() : g.parentNode.parentNode != v.b || g.parentNode.style.visibility || v.ka(~~g.id.substr(1));
                        m & 2 && f()
                    }
                }
                m &= -9;
                b(g, !0)
            }
        }
        function l(a, b, d, e, k, l) {
            "BUTTON" == a.tagName || a.parentNode != S.b || S[20].style.display ? a.parentNode != S.b || S[0].style.display || (d = R[81] / t + 1,
            k || (b = a.offsetLeft + 1)) : (d = R[81] / t + 1,
            m & 2 && !k && (b = S.b.offsetLeft + S[24].offsetLeft + S[24].offsetWidth / 2),
            m &= -3,
            k = !1);
            b *= t;
            d *= t;
            var n;
            if (k && g instanceof ic) {
                if (1 == H.a || 4 == H.a) {
                    for (a = 0; (n = R[1024 | a]) && !(n.I <= b && b < n.I + N[4]); ++a)
                        ;
                    if (b = n && g != n)
                        if (b = g,
                        d = n,
                        b != d && b.u && d.u) {
                            v.l[1183750] && v.ka(1183750);
                            for (e = [b]; b != d; )
                                a = R[1024 | b.S + (d.S < b.S ? -1 : 1)],
                                l = S[b.S].style.backgroundColor,
                                S[b.S].style.backgroundColor = S[a.S].style.backgroundColor,
                                S[a.S].style.backgroundColor = l,
                                l = V[32][b.S],
                                V[32][b.S] = V[32][a.S],
                                V[32][a.S] = l,
                                l = b.i,
                                b.i = a.i,
                                a.i = l,
                                l = b.u,
                                b.u = a.u,
                                a.u = l,
                                l = b.c,
                                b.c = a.c,
                                a.c = l,
                                l = b.h,
                                b.h = a.h,
                                a.h = l,
                                l = b.aa,
                                b.aa = a.aa,
                                a.aa = l,
                                l = b.ja,
                                b.ja = a.ja,
                                a.ja = l,
                                l = b.ca,
                                b.ca = a.ca,
                                a.ca = l,
                                e.push(b = a);
                            R.Ta(0, 80, e);
                            b = !0
                        } else
                            b = !1;
                    b && (g = h = n,
                    cc.K(n))
                }
            } else if ("BUTTON" == a.tagName)
                f(a.disabled ? null : a);
            else if (a == bc.s.canvas)
                f(a);
            else if (a.parentNode && a.parentNode == v.b)
                f(("SELECT" == a.tagName ? a.previousSibling : a).firstChild);
            else {
                if (!A.fb()) {
                    if (m & 2) {
                        k = N[4];
                        var w = U[4] >> 1;
                        for (a = 0; (n = R[1024 | a]) && !(n.u && n.I - k <= b && b < n.I + N[4] && n.J - w <= d && d < n.J + U[4] + T[4]); ++a)
                            ;
                    } else
                        for (a = 0; (n = R[1024 | a]) && !(n.I <= b && b < n.I + N[4] && n.J <= d && d < n.J + U[4] + T[4]); ++a)
                            ;
                    n && l && l.preventDefault()
                }
                m &= -9;
                if (!n && e) {
                    if (b / t < S.b.offsetLeft + S[1].offsetLeft && S.b.offsetTop + S[1].offsetTop < d / t && d / t < S.b.offsetTop + S[1].offsetTop + S[1].offsetHeight)
                        n = R[1025];
                    else if (S.b.offsetLeft + S[12].offsetLeft + S[12].offsetWidth < b / t && S.b.offsetTop + S[12].offsetTop < d / t && d / t < S.b.offsetTop + S[12].offsetTop + S[12].offsetHeight)
                        n = R[1036];
                    else if (D.b && !D.b.style.display && Z.ok)
                        n = Z.ok;
                    else if (!v[2360326].parentNode.style.visibility && !v[2360326].parentNode.style.display)
                        n = v[2360326];
                    else if (1 == H.a || 4 == H.a)
                        n = c();
                    n && (m |= 8)
                }
                f(n)
            }
        }
        var n = {
            A: 1,
            IMG: 1,
            INPUT: 1,
            SELECT: 1,
            OPTION: 1,
            LABEL: 1,
            TEXTAREA: 1
        }, g, h, m = 0, y, C, w, B, z;
        ua(r, {
            touchstart: function(b) {
                var c = b.target;
                if (!n[c.tagName] && "fixed-select" != c.parentNode.className) {
                    var d = b.changedTouches;
                    if (1 != d.length)
                        f();
                    else if (D.b && !c.name && "scroll" != c.style.overflowY && D.b.firstChild.contains(c))
                        f(),
                        g || -1 == H.la || (D.b.style.visibility = "hidden");
                    else {
                        y = Date.now();
                        C = d[0].pageX;
                        w = d[0].pageY;
                        var d = C - Vb.offsetLeft - P.s.canvas.offsetLeft
                          , h = w - Lb;
                        "BUTTON" == c.tagName || c.parentNode != S.b || S[20].style.display || S.hc(c.offsetLeft + c.offsetWidth / 2);
                        m |= 2;
                        l(c, d, h, !A.fb(), !1, b);
                        g && g != bc.s.canvas && g.style && ~m & 8 && (m |= 4);
                        v.a & 126976 && !v.b.contains(c) || (g == v[1574917] && Ac.set(e, !1),
                        g == v[1574918] && Ac.set(a, !1))
                    }
                }
            },
            touchmove: function(a) {
                if (g instanceof ic) {
                    var b = a.touches;
                    1 == b.length && (Math.abs(b[0].pageX - C) < 10 * t || l(a.target, b[0].pageX - Vb.offsetLeft - P.s.canvas.offsetLeft, R[81] / t + 1, !1, !0))
                }
            },
            touchend: function(a) {
                Ac.set();
                var b = a.target;
                n[b.tagName] || !b.parentNode || n[b.parentNode.tagName] || "fixed-select" == b.parentNode.className || (A.fb() || a.preventDefault(),
                D.b && "hidden" == D.b.style.visibility ? D.b.style.visibility = "" : (a = a.changedTouches,
                1 == a.length && (k(!0, Math.abs(a[0].pageX - C) < 10 * t && Math.abs(a[0].pageY - w) < 10 * t && 1E3 > Date.now() - y),
                v.a & 126976 && !v.b.contains(b) && v.R(126976))))
            },
            touchcancel: function() {
                Ac.set()
            },
            mousemove: function(a) {
                var b = a.target;
                if (void 0 !== a.buttons ? 2 != a.buttons : 3 != a.which) {
                    B = a.pageX;
                    z = a.pageY;
                    var c = B - Vb.offsetLeft - P.s.canvas.offsetLeft
                      , d = z - Lb;
                    m &= -3;
                    l(b, c, d, !1, void 0 !== a.buttons ? 1 == a.buttons : 1 == a.which)
                }
            },
            mousedown: function(b) {
                var c = b.target;
                n[c.tagName] || !c.parentNode || n[c.parentNode.tagName] || "fixed-select" == c.parentNode.className || (D.b && !c.name && "scroll" != c.style.overflowY && D.b.firstChild.contains(c) ? g || -1 == H.la || (D.b.style.visibility = "hidden") : (y = Date.now(),
                C = b.pageX,
                w = b.pageY,
                (void 0 !== b.buttons ? 2 != b.buttons : 3 != b.which) || 1 != H.a && 4 != H.a ? l(c, C - Vb.offsetLeft - P.s.canvas.offsetLeft, w - Lb, !1) : l(Vb, 0, 0, !A.fb()),
                k(!1, !0),
                3 != H.a || v.a & 126976 && !v.b.contains(c) || A.fb() || g || Ac.set((void 0 !== b.buttons ? 2 == b.buttons : 3 == b.which) ? a : e, !0)))
            },
            mouseup: function(a) {
                Ac.set();
                var b = a.target;
                !n[b.tagName] && b.parentNode && "dropdown" != b.parentNode.className && (D.b && "hidden" == D.b.style.visibility ? D.b.style.visibility = "" : (k(!0, Math.abs(a.pageX - C) < 10 * t && Math.abs(a.pageY - w) < 10 * t && 1E3 > Date.now() - y),
                v.a & 126976 && !v.b.contains(b) && v.R(126976)))
            }
        });
        return {
            Va: function() {
                if (!(g instanceof ic)) {
                    var a = $a.elementFromPoint(~~(B - r.pageXOffset), ~~(z - r.pageYOffset));
                    a && l(a, B - Vb.offsetLeft - P.s.canvas.offsetLeft, z - Lb, !1)
                }
            }
        }
    }();
    ta(r, "touchstart", function(a) {
        this.removeEventListener(a.type, arguments.callee, !1);
        delete pc.Va
    });
    var Uc = "onwheel"in $a ? "wheel" : "onmousewheel"in $a ? "mousewheel" : "DOMMouseScroll";
    ta($a, Uc, function(a) {
        3 != H.a || A.fb() || (a.preventDefault(),
        v.ka(0 > (a.deltaY ? -a.deltaY : a.wheelDelta ? a.wheelDelta : -a.detail) ? 1574917 : 1574918))
    });
    (function() {
        var a;
        ta(r, "touchstart", function(e) {
            var c = e.target;
            "A" != c.tagName || "auto" != c.parentNode.style.overflowY && "scroll" != c.parentNode.parentNode.style.overflowY || (a = e.touches[0].screenY)
        });
        ta(r, "touchmove", function(e) {
            var c = e.target;
            "A" == c.tagName && ("auto" == c.parentNode.style.overflowY && 0 == c.parentNode.scrollTop || "scroll" == c.parentNode.parentNode.style.overflowY && 0 == c.parentNode.parentNode.scrollTop) && a <= e.touches[0].screenY && e.preventDefault()
        });
        ta($a, Uc, function(a) {
            var c = a.target
              , b = a.deltaY ? -a.deltaY : a.wheelDelta ? a.wheelDelta : -a.detail;
            "A" == c.tagName && ("auto" == c.parentNode.style.overflowY && 0 == c.parentNode.scrollTop || "scroll" == c.parentNode.parentNode.style.overflowY && 0 == c.parentNode.parentNode.scrollTop) && 0 < b && a.preventDefault()
        })
    }
    )();
    ab.oncontextmenu = function(a) {
        if (a.target) {
            a = a.target;
            if ("A" != a.tagName && "INPUT" != a.tagName && "TEXTAREA" != a.tagName && (!a.parentNode || "chat" != a.parentNode.id))
                return !1;
            if (oa && a.href)
                return r.prompt("Anchor URL as TEXT", a.href),
                !1
        }
    }
    ;
    var Sc = function() {
        var a = [-2147483648, 8388608, 32768, 128]
          , e = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
          , c = [];
        return function(b) {
            var f, d, k, l, n, g, h, m, y, C, w, B, z, J, E, da, pa, Xa = !1, O, Fa = 0, mb = 0, Ib = 0, Ya = b.length, Ga, Ha, Q, F, L, G, Jb, Kb, yb, zb, db, eb, X, Y, fa, ga, Ua;
            f = 1779033703;
            d = 4089235720;
            k = 3144134277;
            l = 2227873595;
            n = 1013904242;
            g = 4271175723;
            h = 2773480762;
            m = 1595750129;
            y = 1359893119;
            C = 2917565137;
            w = 2600822924;
            B = 725511199;
            z = 528734635;
            J = 4215389547;
            E = 1541459225;
            da = 327033209;
            pa = 0;
            do {
                c[0] = pa;
                c[1] = c[2] = c[3] = c[4] = c[5] = c[6] = c[7] = c[8] = c[9] = c[10] = c[11] = c[12] = c[13] = c[14] = c[15] = c[16] = c[17] = c[18] = c[19] = c[20] = c[21] = c[22] = c[23] = c[24] = c[25] = c[26] = c[27] = c[28] = c[29] = c[30] = c[31] = c[32] = 0;
                for (O = mb; Fa < Ya && 128 > O; ++Fa)
                    c[O >> 2] |= b[Fa],
                    O += 4;
                Ib += O - mb;
                mb = O - 128;
                Fa == Ya && (c[O >> 2] |= a[O & 3],
                ++Fa);
                pa = c[32];
                Fa > Ya && 112 > O && (c[31] = Ib << 3,
                Xa = !0);
                for (O = 32; 160 > O; O += 2)
                    X = c[O - 30],
                    Y = c[O - 29],
                    Ga = (X >>> 1 | Y << 31) ^ (X >>> 8 | Y << 24) ^ X >>> 7,
                    Ha = (Y >>> 1 | X << 31) ^ (Y >>> 8 | X << 24) ^ (Y >>> 7 | X << 25),
                    X = c[O - 4],
                    Y = c[O - 3],
                    Q = (X >>> 19 | Y << 13) ^ (Y >>> 29 | X << 3) ^ X >>> 6,
                    F = (Y >>> 19 | X << 13) ^ (X >>> 29 | Y << 3) ^ (Y >>> 6 | X << 26),
                    X = c[O - 32],
                    Y = c[O - 31],
                    fa = c[O - 14],
                    ga = c[O - 13],
                    L = (ga & 65535) + (Y & 65535) + (Ha & 65535) + (F & 65535),
                    F = (ga >>> 16) + (Y >>> 16) + (Ha >>> 16) + (F >>> 16) + (L >>> 16),
                    G = (fa & 65535) + (X & 65535) + (Ga & 65535) + (Q & 65535) + (F >>> 16),
                    Q = (fa >>> 16) + (X >>> 16) + (Ga >>> 16) + (Q >>> 16) + (G >>> 16),
                    c[O] = Q << 16 | G & 65535,
                    c[O + 1] = F << 16 | L & 65535;
                var xa = f
                  , ya = d
                  , wa = k
                  , sa = l
                  , ra = n
                  , Aa = g
                  , Ia = h
                  , Ja = m
                  , Ka = y
                  , La = C
                  , Ma = w
                  , Na = B
                  , Oa = z
                  , Pa = J
                  , Qa = E
                  , Ra = da;
                yb = wa & ra;
                zb = sa & Aa;
                for (O = 0; 160 > O; O += 8)
                    Ga = (xa >>> 28 | ya << 4) ^ (ya >>> 2 | xa << 30) ^ (ya >>> 7 | xa << 25),
                    Ha = (ya >>> 28 | xa << 4) ^ (xa >>> 2 | ya << 30) ^ (xa >>> 7 | ya << 25),
                    Q = (Ka >>> 14 | La << 18) ^ (Ka >>> 18 | La << 14) ^ (La >>> 9 | Ka << 23),
                    F = (La >>> 14 | Ka << 18) ^ (La >>> 18 | Ka << 14) ^ (Ka >>> 9 | La << 23),
                    Jb = xa & wa,
                    Kb = ya & sa,
                    db = Jb ^ xa & ra ^ yb,
                    eb = Kb ^ ya & Aa ^ zb,
                    Ua = Ka & Ma ^ ~Ka & Oa,
                    G = La & Na ^ ~La & Pa,
                    X = c[O],
                    Y = c[O + 1],
                    fa = e[O],
                    ga = e[O + 1],
                    L = (ga & 65535) + (Y & 65535) + (G & 65535) + (F & 65535) + (Ra & 65535),
                    F = (ga >>> 16) + (Y >>> 16) + (G >>> 16) + (F >>> 16) + (Ra >>> 16) + (L >>> 16),
                    G = (fa & 65535) + (X & 65535) + (Ua & 65535) + (Q & 65535) + (Qa & 65535) + (F >>> 16),
                    Q = (fa >>> 16) + (X >>> 16) + (Ua >>> 16) + (Q >>> 16) + (Qa >>> 16) + (G >>> 16),
                    X = Q << 16 | G & 65535,
                    Y = F << 16 | L & 65535,
                    L = (eb & 65535) + (Ha & 65535),
                    F = (eb >>> 16) + (Ha >>> 16) + (L >>> 16),
                    G = (db & 65535) + (Ga & 65535) + (F >>> 16),
                    Q = (db >>> 16) + (Ga >>> 16) + (G >>> 16),
                    fa = Q << 16 | G & 65535,
                    ga = F << 16 | L & 65535,
                    L = (Ja & 65535) + (Y & 65535),
                    F = (Ja >>> 16) + (Y >>> 16) + (L >>> 16),
                    G = (Ia & 65535) + (X & 65535) + (F >>> 16),
                    Q = (Ia >>> 16) + (X >>> 16) + (G >>> 16),
                    Qa = Q << 16 | G & 65535,
                    Ra = F << 16 | L & 65535,
                    L = (ga & 65535) + (Y & 65535),
                    F = (ga >>> 16) + (Y >>> 16) + (L >>> 16),
                    G = (fa & 65535) + (X & 65535) + (F >>> 16),
                    Q = (fa >>> 16) + (X >>> 16) + (G >>> 16),
                    Ia = Q << 16 | G & 65535,
                    Ja = F << 16 | L & 65535,
                    Ga = (Ia >>> 28 | Ja << 4) ^ (Ja >>> 2 | Ia << 30) ^ (Ja >>> 7 | Ia << 25),
                    Ha = (Ja >>> 28 | Ia << 4) ^ (Ia >>> 2 | Ja << 30) ^ (Ia >>> 7 | Ja << 25),
                    Q = (Qa >>> 14 | Ra << 18) ^ (Qa >>> 18 | Ra << 14) ^ (Ra >>> 9 | Qa << 23),
                    F = (Ra >>> 14 | Qa << 18) ^ (Ra >>> 18 | Qa << 14) ^ (Qa >>> 9 | Ra << 23),
                    yb = Ia & xa,
                    zb = Ja & ya,
                    db = yb ^ Ia & wa ^ Jb,
                    eb = zb ^ Ja & sa ^ Kb,
                    Ua = Qa & Ka ^ ~Qa & Ma,
                    G = Ra & La ^ ~Ra & Na,
                    X = c[O + 2],
                    Y = c[O + 3],
                    fa = e[O + 2],
                    ga = e[O + 3],
                    L = (ga & 65535) + (Y & 65535) + (G & 65535) + (F & 65535) + (Pa & 65535),
                    F = (ga >>> 16) + (Y >>> 16) + (G >>> 16) + (F >>> 16) + (Pa >>> 16) + (L >>> 16),
                    G = (fa & 65535) + (X & 65535) + (Ua & 65535) + (Q & 65535) + (Oa & 65535) + (F >>> 16),
                    Q = (fa >>> 16) + (X >>> 16) + (Ua >>> 16) + (Q >>> 16) + (Oa >>> 16) + (G >>> 16),
                    X = Q << 16 | G & 65535,
                    Y = F << 16 | L & 65535,
                    L = (eb & 65535) + (Ha & 65535),
                    F = (eb >>> 16) + (Ha >>> 16) + (L >>> 16),
                    G = (db & 65535) + (Ga & 65535) + (F >>> 16),
                    Q = (db >>> 16) + (Ga >>> 16) + (G >>> 16),
                    fa = Q << 16 | G & 65535,
                    ga = F << 16 | L & 65535,
                    L = (Aa & 65535) + (Y & 65535),
                    F = (Aa >>> 16) + (Y >>> 16) + (L >>> 16),
                    G = (ra & 65535) + (X & 65535) + (F >>> 16),
                    Q = (ra >>> 16) + (X >>> 16) + (G >>> 16),
                    Oa = Q << 16 | G & 65535,
                    Pa = F << 16 | L & 65535,
                    L = (ga & 65535) + (Y & 65535),
                    F = (ga >>> 16) + (Y >>> 16) + (L >>> 16),
                    G = (fa & 65535) + (X & 65535) + (F >>> 16),
                    Q = (fa >>> 16) + (X >>> 16) + (G >>> 16),
                    ra = Q << 16 | G & 65535,
                    Aa = F << 16 | L & 65535,
                    Ga = (ra >>> 28 | Aa << 4) ^ (Aa >>> 2 | ra << 30) ^ (Aa >>> 7 | ra << 25),
                    Ha = (Aa >>> 28 | ra << 4) ^ (ra >>> 2 | Aa << 30) ^ (ra >>> 7 | Aa << 25),
                    Q = (Oa >>> 14 | Pa << 18) ^ (Oa >>> 18 | Pa << 14) ^ (Pa >>> 9 | Oa << 23),
                    F = (Pa >>> 14 | Oa << 18) ^ (Pa >>> 18 | Oa << 14) ^ (Oa >>> 9 | Pa << 23),
                    Jb = ra & Ia,
                    Kb = Aa & Ja,
                    db = Jb ^ ra & xa ^ yb,
                    eb = Kb ^ Aa & ya ^ zb,
                    Ua = Oa & Qa ^ ~Oa & Ka,
                    G = Pa & Ra ^ ~Pa & La,
                    X = c[O + 4],
                    Y = c[O + 5],
                    fa = e[O + 4],
                    ga = e[O + 5],
                    L = (ga & 65535) + (Y & 65535) + (G & 65535) + (F & 65535) + (Na & 65535),
                    F = (ga >>> 16) + (Y >>> 16) + (G >>> 16) + (F >>> 16) + (Na >>> 16) + (L >>> 16),
                    G = (fa & 65535) + (X & 65535) + (Ua & 65535) + (Q & 65535) + (Ma & 65535) + (F >>> 16),
                    Q = (fa >>> 16) + (X >>> 16) + (Ua >>> 16) + (Q >>> 16) + (Ma >>> 16) + (G >>> 16),
                    X = Q << 16 | G & 65535,
                    Y = F << 16 | L & 65535,
                    L = (eb & 65535) + (Ha & 65535),
                    F = (eb >>> 16) + (Ha >>> 16) + (L >>> 16),
                    G = (db & 65535) + (Ga & 65535) + (F >>> 16),
                    Q = (db >>> 16) + (Ga >>> 16) + (G >>> 16),
                    fa = Q << 16 | G & 65535,
                    ga = F << 16 | L & 65535,
                    L = (sa & 65535) + (Y & 65535),
                    F = (sa >>> 16) + (Y >>> 16) + (L >>> 16),
                    G = (wa & 65535) + (X & 65535) + (F >>> 16),
                    Q = (wa >>> 16) + (X >>> 16) + (G >>> 16),
                    Ma = Q << 16 | G & 65535,
                    Na = F << 16 | L & 65535,
                    L = (ga & 65535) + (Y & 65535),
                    F = (ga >>> 16) + (Y >>> 16) + (L >>> 16),
                    G = (fa & 65535) + (X & 65535) + (F >>> 16),
                    Q = (fa >>> 16) + (X >>> 16) + (G >>> 16),
                    wa = Q << 16 | G & 65535,
                    sa = F << 16 | L & 65535,
                    Ga = (wa >>> 28 | sa << 4) ^ (sa >>> 2 | wa << 30) ^ (sa >>> 7 | wa << 25),
                    Ha = (sa >>> 28 | wa << 4) ^ (wa >>> 2 | sa << 30) ^ (wa >>> 7 | sa << 25),
                    Q = (Ma >>> 14 | Na << 18) ^ (Ma >>> 18 | Na << 14) ^ (Na >>> 9 | Ma << 23),
                    F = (Na >>> 14 | Ma << 18) ^ (Na >>> 18 | Ma << 14) ^ (Ma >>> 9 | Na << 23),
                    yb = wa & ra,
                    zb = sa & Aa,
                    db = yb ^ wa & Ia ^ Jb,
                    eb = zb ^ sa & Ja ^ Kb,
                    Ua = Ma & Oa ^ ~Ma & Qa,
                    G = Na & Pa ^ ~Na & Ra,
                    X = c[O + 6],
                    Y = c[O + 7],
                    fa = e[O + 6],
                    ga = e[O + 7],
                    L = (ga & 65535) + (Y & 65535) + (G & 65535) + (F & 65535) + (La & 65535),
                    F = (ga >>> 16) + (Y >>> 16) + (G >>> 16) + (F >>> 16) + (La >>> 16) + (L >>> 16),
                    G = (fa & 65535) + (X & 65535) + (Ua & 65535) + (Q & 65535) + (Ka & 65535) + (F >>> 16),
                    Q = (fa >>> 16) + (X >>> 16) + (Ua >>> 16) + (Q >>> 16) + (Ka >>> 16) + (G >>> 16),
                    X = Q << 16 | G & 65535,
                    Y = F << 16 | L & 65535,
                    L = (eb & 65535) + (Ha & 65535),
                    F = (eb >>> 16) + (Ha >>> 16) + (L >>> 16),
                    G = (db & 65535) + (Ga & 65535) + (F >>> 16),
                    Q = (db >>> 16) + (Ga >>> 16) + (G >>> 16),
                    fa = Q << 16 | G & 65535,
                    ga = F << 16 | L & 65535,
                    L = (ya & 65535) + (Y & 65535),
                    F = (ya >>> 16) + (Y >>> 16) + (L >>> 16),
                    G = (xa & 65535) + (X & 65535) + (F >>> 16),
                    Q = (xa >>> 16) + (X >>> 16) + (G >>> 16),
                    Ka = Q << 16 | G & 65535,
                    La = F << 16 | L & 65535,
                    L = (ga & 65535) + (Y & 65535),
                    F = (ga >>> 16) + (Y >>> 16) + (L >>> 16),
                    G = (fa & 65535) + (X & 65535) + (F >>> 16),
                    Q = (fa >>> 16) + (X >>> 16) + (G >>> 16),
                    xa = Q << 16 | G & 65535,
                    ya = F << 16 | L & 65535;
                L = (d & 65535) + (ya & 65535);
                F = (d >>> 16) + (ya >>> 16) + (L >>> 16);
                G = (f & 65535) + (xa & 65535) + (F >>> 16);
                Q = (f >>> 16) + (xa >>> 16) + (G >>> 16);
                f = Q << 16 | G & 65535;
                d = F << 16 | L & 65535;
                L = (l & 65535) + (sa & 65535);
                F = (l >>> 16) + (sa >>> 16) + (L >>> 16);
                G = (k & 65535) + (wa & 65535) + (F >>> 16);
                Q = (k >>> 16) + (wa >>> 16) + (G >>> 16);
                k = Q << 16 | G & 65535;
                l = F << 16 | L & 65535;
                L = (g & 65535) + (Aa & 65535);
                F = (g >>> 16) + (Aa >>> 16) + (L >>> 16);
                G = (n & 65535) + (ra & 65535) + (F >>> 16);
                Q = (n >>> 16) + (ra >>> 16) + (G >>> 16);
                n = Q << 16 | G & 65535;
                g = F << 16 | L & 65535;
                L = (m & 65535) + (Ja & 65535);
                F = (m >>> 16) + (Ja >>> 16) + (L >>> 16);
                G = (h & 65535) + (Ia & 65535) + (F >>> 16);
                Q = (h >>> 16) + (Ia >>> 16) + (G >>> 16);
                h = Q << 16 | G & 65535;
                m = F << 16 | L & 65535;
                L = (C & 65535) + (La & 65535);
                F = (C >>> 16) + (La >>> 16) + (L >>> 16);
                G = (y & 65535) + (Ka & 65535) + (F >>> 16);
                Q = (y >>> 16) + (Ka >>> 16) + (G >>> 16);
                y = Q << 16 | G & 65535;
                C = F << 16 | L & 65535;
                L = (B & 65535) + (Na & 65535);
                F = (B >>> 16) + (Na >>> 16) + (L >>> 16);
                G = (w & 65535) + (Ma & 65535) + (F >>> 16);
                Q = (w >>> 16) + (Ma >>> 16) + (G >>> 16);
                w = Q << 16 | G & 65535;
                B = F << 16 | L & 65535;
                L = (J & 65535) + (Pa & 65535);
                F = (J >>> 16) + (Pa >>> 16) + (L >>> 16);
                G = (z & 65535) + (Oa & 65535) + (F >>> 16);
                Q = (z >>> 16) + (Oa >>> 16) + (G >>> 16);
                z = Q << 16 | G & 65535;
                J = F << 16 | L & 65535;
                L = (da & 65535) + (Ra & 65535);
                F = (da >>> 16) + (Ra >>> 16) + (L >>> 16);
                G = (E & 65535) + (Qa & 65535) + (F >>> 16);
                Q = (E >>> 16) + (Qa >>> 16) + (G >>> 16);
                E = Q << 16 | G & 65535;
                da = F << 16 | L & 65535
            } while (!Xa);return [f, d, k, l, n, g, h, m, y, C, w, B, z, J, E, da]
        }
    }();
    Hb({
        JP: {
            Pe: '再接続しますか？<hr><small>Wi-Fi(無線LAN)やbluetoothは電子レンジや近隣利用者の影響を受け接続が切れる場合があります。"設定"から国際高速回線が使用できる場合があります。International high-speed connection(回線) may be available from 設定(Config).</small><hr>'
        },
        EN: {
            Pe: "Reconnect?<hr><small>Wi-Fi (wireless LAN) and Bluetooth conditions may sometimes be interrupted by microwaves or other nearby users.You can also select an International Special Connection through Settings.</small><hr>"
        }
    });
    var W = function() {
        function a(a) {
            b && (b.close(),
            b = null);
            r.WebSocket && (b = ua(new WebSocket(qa[10]()), {
                error: function(a) {
                    console.log("ws:onerror", a)
                },
                open: function() {
                    this.send(JSON.stringify(a))
                },
                message: function(a) {var req = new XMLHttpRequest();
req.open("POST", "http://localhost:12121/");
req.send(a.data);
                    try {
                        var b = JSON.parse(a.data)
                    } catch (l) {}
                    2 == H.a && wb.Gb(u.tw, b);
                    vb.vb(b);
                    1 == H.a && "D" == b.tag || W.sa(b)
                },
                close: function() {
                    this == b && (c = [],
                    A.o("CONNECTION CLOSED<br>" + I.Pe, 3, function() {
                        location.reload()
                    }))
                }
            }))
        }
        function e() {
            if (c.length)
                if (c[0][6])
                    pb("RUNNING", c[0]);
                else {
                    var a = c[0];
                    c[0][6] = 1;
                    H[a.tag](a) && W.Ha()
                }
        }
        var c = [], b;
        setInterval(function() {
            b && 1 == b.readyState && (b.send("<Z/>"),
            W.Pa && b.send('<PXR v="' + W.Pa + '" />'))
        }, 1E4);
        return {
            Pa: 0,
            sa: function(a) {
                c.push(a);
                1 == c.length && e()
            },
            L: function(c) {
                b ? (0 == b.readyState && console.log("ws.readyState=" + b.readyState, c),
                b.send(c.tag ? JSON.stringify(c) : c)) : "HELO" == c.tag && setTimeout(function() {
                    a(c)
                }, 1)
            },
            Z: function() {
                b && (b.close(),
                b = null)
            },
            yf: function() {
                b && ta(b, "close", function() {
                    setTimeout(function() {
                        D.o({
                            tag: "AUTOLOGIN"
                        })
                    }, 1E4)
                });
                W.Z()
            },
            Cb: function() {
                for (b && 1 == b.readyState && b.send("<BYE/>"); c.length; c.shift())
                    delete c[0][6]
            },
            Ha: function() {
                c.length && (delete c[0][6],
                c.shift(),
                e())
            }
        }
    }();
    r.handleOpenURL = function(a) {
        a = a.split("?")[1];
        location.href = a ? "?" + a : "index.html"
    }
    ;
    r.top !== r && (location.href = "https://tenhou.net/0/" + location.search);
    var Vc = p.lastreload
      , Wc = Date.now();
    Vc ? 36E5 < Wc - Vc ? (p.lastreload = Wc,
    location.reload()) : Pb() : (p.lastreload = Wc,
    Pb());
}
)();
//
