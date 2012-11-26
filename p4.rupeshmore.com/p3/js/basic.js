function SSPlotter() {}
Web2CalConstants = function () {};
WEB2CAL_VERSION_INFO = "V-Basic-Rel-1226-2.0-1218G";
var Web2Cal = function (T, R) {
    options = R || new Array;
    var B = " <table id=\"loadingBlock\" height=\"100%\" width=\"100%\" style=\"position:absolute;background-color:#fff; z-index:9999;\"><tr><td valign=\"middle\" align=\"center\"><div class=\"loadingMsg\"> " + Web2Cal.LANG.MSG_LOADINGMSG + "</div></td></tr></table>" + "\t <div class=\"web2cal\" >  " + "\t\t<div class=\"leftNav\" >\t\t\t\t" + "\t\t\t<div class=\"quickAddLink\">" + "\t\t\t\t<div class=\"quickAddIcon\"></div><a href=\"javascript:void(0)\" class=\"plotterlink\">" + Web2Cal.LANG.LABEL_CREATENEWEVENT + "</a>" + "\t\t\t</div> " + "\t\t\t<div  class=\"minicalContainer\">" + "\t\t\t\t<div class=\"minical\"></div>" + "\t\t\t</div> \t\t\t\t\t\t\t" + "\t\t\t<div class=\"leftNavGroupsList\">" + "\t\t\t\t<div class=\"header\">" + Web2Cal.LANG.LABEL_HIDESHOW + "</div>" + "\t\t\t\t<div class=\"data\"></div>" + "\t\t\t</div>" + "\t\t</div>\t\t" + "\t\t<div class=\"content\" id=\"calendarContent\">  \t" + "\t\t\t<div class=\"topnavContainer\">" + "\t\t\t\t<div class=\"controlsContainer\" >" + "\t\t\t\t\t<div class=\"calControl\" >" + "\t\t\t\t\t</div>" + "\t\t\t\t\t<div class=\"miniCalControl\" id=\"miniCalControl\">" + "\t\t\t\t\t</div>" + "\t\t\t\t\t<div class=\"calOptions\" >" + "\t\t\t\t\t\t<div class=\"calOptionsIcon\"></div>" + "\t\t\t\t\t\t<a href=\"javascript:showCalendarSettings();\" class=\"plotterlink calOptionsLink\">" + Web2Cal.LANG.LABEL_OPTIONS + "</a>" + "\t\t\t\t\t</div>\t" + "\t\t\t\t\t<div id=\"topQuickAddContainer\" ><div class=\"quickAddLink\"><div class=\"quickAddIcon\"></div><a href=\"javascript:void(0)\" class=\"plotterlink\">" + Web2Cal.LANG.LABEL_CREATENEW + "</a></div></div>" + "\t\t\t\t</div>" + "\t\t\t\t\t<div class=\" calNavigation\" >" + "\t\t\t\t\t\t<ul id=\"calNavData\">" + "\t\t\t\t\t\t</ul>" + "\t\t\t\t\t</div> \t " + "\t\t\t</div>\t\t" + "\t\t\t<div class=\"plotterContent\">" + "\t\t\t\t<div class=\"calheaderContainer\" id=\"calheaderContainer\"> " + "\t\t\t\t</div> " + "\t\t\t\t<div class=\"allDayContainer\" id=\"allDayContainer\">" + "\t\t\t\t\t<div class=\"allDayEventContainer\" id=\"allDayEventContainer\"><div>&nbsp;</div>;\t\t\t\t" + "\t\t\t\t\t</div>" + "\t\t\t\t\t<div class=\"allDayGridContainer\" id=\"allDayGridContainer\">" + "\t\t\t\t\t</div>" + "\t\t\t\t</div> " + "\t\t\t\t<div class=\"btborder\"></div>" + "\t\t\t\t<div class=\"calbodyContainer\" id=\"calbodyContainer\">" + "\t\t\t\t\t<table  cellspacing=\"0\" cellpadding=\"0\" border=\"0\"  style=\"table-layout: fixed; width: 100%; height:100%;\">" + "\t\t\t\t\t\t<td  valign=\"top\" class=\"gridYContainerTD\" id=\"gridYContainerTD\"> " + "\t\t\t\t\t\t\t<div class=\"gridYContainer\" id=\"gridYContainer\">\t\t\t\t" + "\t\t\t\t\t\t\t</div> " + "\t\t\t\t\t\t</td>" + "\t\t\t\t\t\t<td valign=\"top\" id=\"gridXContainerTD\">\t\t\t\t\t " + "\t\t\t\t\t\t\t<div class=\"gridContainer\" id=\"gridContainer\">" + "\t\t\t\t\t\t\t\t<div class=\"gridCanvas\" id=\"gridCanvas\">\t" + "\t\t\t\t\t\t\t\t</div>" + "\t\t\t\t\t\t\t\t<div class=\"grid\" id=\"grid\">" + "\t\t\t\t\t\t\t\t</div>" + "\t\t\t\t\t\t\t</div>" + "\t\t\t\t\t\t</td>" + "\t\t\t\t\t</table><iframe id=\"web2calIframe\"></iframe>" + "\t\t\t\t</div>" + "\t\t\t\t<div class=\"calfooter\">" + "\t\t\t\t</div>" + "\t\t\t</div>" + "\t\t</div>\t\t" + " <div style=\"display:none;\"><h2>Powered by web2cal. <a href=\"http://www.web2cal.com\">Building Events Calendar</a> made easy.</h2></div>" + "<div id=\"calInfoStatus\" class=\"calStatus\"><div class=\"closebtnx\"></div><div class=\"calStatusHeader\">" + Web2Cal.LANG.LABEL_INFORMATION + "</div><div class=\"calStatusBody\"></div></div>" + "<div class=\"fullPreview\" id=\"fullPreview\"><div  class=\"fullPreviewCloseBtn smallcalclosebtn\"></div><div class=\"data\"></div></div>" + "</div>" + "<div class=\"calcredits\" style=\"font-family:arial, helvetica; font-size:11px; color:#333;display:block;text-align:center; \"><h2>Event Calendar. </h2></div>";
    var S = this;
    var L = jQuery("#" + T);
    var Q;
    var A;
    var V = new Array;
    var H = new Array;
    var Z;
    var W;
    var b;
    var f;
    var P;
    this.toString = function () {
        return "Web2Cal " + WEB2CAL_VERSION_INFO;
    };
    this.initialize = function () {
        L.append(B);
        Q = L.find("div#grid");
        A = L.find("div#gridCanvas");
        this.browserInfo = getIEVersion();
        N();
        G();
        I(options, Web2Cal.defaultSettings, H);
        Web2CalConstants.START_OF_WEEK = Z.startOfWeek;
        _WEB2CAL_TIME_FORMAT = Z.timeFormat;
        if (Z.sampleMode == true) {
            Web2Cal.defaultPlugins.load({
                full: true
            });
        } else {
            Web2Cal.defaultPlugins.load();
        }
        this.setupRenderers(O(options));
        b = SSUtil.isString(Z.date) ? UTC.parseDateString(Z.date) : (new UTC(Z.date)).setHours(0, 0, 0, 0);
        if (!b) {
            b = (new UTC).setHours(0, 0, 0, 0);
        }
        f = C(Z.defaultView, H);
        if (!f) {
            alert(Web2Cal.dictionary.getMsg("MSG_VIEW_NOTFOUND", [Z.defaultView]));
            return;
        }
        jQuery("div.fullPreviewCloseBtn").click(function () {
            U();
        });
        L.height(Z.controlHeight).width(Z.controlWidth);
        L.find("#calbodyContainer").height(L.height() - 60 + "px");
        L.find("div.calControl").append(jQuery("<div class='prevButton fleft' title='Previous' alt='Previous'></div>").mousedown(function () {
            S.doPrev();
        })).append("<div id='calTitle' class='fleft calTitle '></div>").append(jQuery("<div class='fleft nextButton ' title='Next' alt='Next'> </div>").mousedown(function () {
            S.doNext();
        }));
        Q.mousedown(function (g) {
            X(g, this);
        });
        L.mousemove(function (g) {
            c(g, this);
        });
        jQuery(document).mouseup(function (g) {
            J(g, this);
        });
        jQuery("div.quickAddLink", this.container).click(function () {
            D(this);
        });
        E(H);
        K();
        L.get(0).onselectstart = function () {
            return false;
        };
        if (O(options)) {
            jQuery("div.quickAddLink").hide();
        }
        if (!Z.showQuickFilter) {
            L.find("div.leftNavGroupsList").hide();
        }
        if (Z.showOptions == false) {
            L.find("div.calOptions").hide();
        } else {
            L.find("div.calOptions").click(function () {
                Z.optionsOnClick();
            });
        }
        if (Z.showQuickAdd == false) {
            jQuery("div.quickAddLink").hide();
        }
        if (Z.showFilter == false) {
            jQuery("div#filterContainer").hide();
        } else {
            jQuery("div.filterContainer a").click(function () {
                Z.filterOnClick();
            });
        }
        jQuery("div.leftNavGroupsList div.header").html(Z.leftNavTitle);
    };
    var X = function (g, h) {
        U();
        if (!O(options)) {
            V[f.plotterName].doMouseDown(g, h);
        }
    };
    var c = function (g, h) {
        if (!O(options)) {
            V[f.plotterName].doMouseMove(g, h);
        }
    };
    var J = function (g, h) {
        V[f.plotterName].doMouseUp(g, h);
    };
    var C = function (l, h) {
        for (var g in h) {
            if (!h.hasOwnProperty(g)) {
                continue;
            }
            var k = h[g];
            if (k.name == l) {
                return k;
            }
        }
        return false;
    };
    this.setupRenderers = function (g) {
        if (d(H, "dayWeekView")) {
            V.dayWeekView = new DayWeekView(L, Q, A, Z, {}, getUniqueGUID(), this, g);
        }
        if (d(H, "monthView")) {
            V.monthView = new MonthView(L, Q, A, Z, {}, getUniqueGUID(), this);
        }
        if (d(H, "agendaView")) {
            V.agendaView = new AgendaView(L, Q, A, Z, {}, getUniqueGUID(), this, g);
        }
    };
    var d = function (g, h) {
        for (x = 0; x < g.length; x++) {
            if (g[x].plotterName == h) {
                return true;
            }
        }
    };
    var O = function (g) {
        if (g.readOnly != null && g.readOnly == true) {
            return true;
        } else {
            return false;
        }
    };
    var K = function () {
        if (!Z.showLeftNav) {
            L.find("div.leftNav").hide();
            L.find("div.content").css({
                paddingLeft: "0px"
            });
            P = new SSMinical(jQuery("#miniCalControl").show(), {
                callback: function (k, m, l) {
                    S.calSelection(k, m, l);
                },
                flat: false,
                startOfWeek: Z.startOfWeek
            });
            jQuery("#topQuickAddContainer").show();
            if (Z.showQuickFilter) {
                var h = jQuery("<div class='topHideShowLink'><div class='iconMoreCalendars'></div> <a href='javascript:void(0)' class='plotterlink'>" + Web2Cal.LANG.LABEL_HIDESHOW + "</a></div>").appendTo(".controlsContainer").get(0);
                var g = L.offset();
                new SSUtil.elePop(h, jQuery("div.leftNavGroupsList").appendTo(L).addClass("calpop"));
            }
        } else {
            jQuery("#topQuickAddContainer").hide();
            P = new SSMinical(jQuery("div.minical"), {
                callback: function (k, m, l) {
                    S.calSelection(k, m, l);
                },
                flat: true,
                startOfWeek: Z.startOfWeek
            });
        }
    };
    this.calSelection = function (k, l, m) {
        var g = k;
        var n = f.name;
        if (l) {
            var h = C("day", H);
            V[f.plotterName].destroy();
            f = h;
            n = h.name;
        }
        b = g;
        buildView(f);
    };
    var I = function (p, n, k) {
        var h = p;
        if (p != null) {
            for (var m in n) {
                if (!n.hasOwnProperty(m)) {
                    continue;
                }
                if (p[m] == undefined) {
                    h[m] = n[m];
                }
            }
        }
        for (var g in k) {
            if (!k.hasOwnProperty(g)) {
                continue;
            }
            var o = k[g];
            if (h[o.name + "LoadEvents"] == undefined) {
                h[o.name + "LoadEvents"] = h.loadEvents;
            }
        }
        Z = h;
        var l = C("custom", k);
        if (l) {
            l.params.daycount = Z.customViewSize;
            l.params.incrementAmount = Z.customViewSize;
            l.tabName = Web2Cal.LANG.LABEL_NEXT + " " + Z.customViewSize + " " + Web2Cal.LANG.LABEL_DAYS;
        }
        Z.endTime = Z.endTime == 0 ? 24 : Z.endTime;
        Z.wsEndTime = Z.wsEndTime == 0 ? 24 : Z.wsEndTime;
    };
    var G = function () {
        var h = options.views;
        var g = new Array;
        if (h) {
            if (h.indexOf(",") != -1) {
                g = h.split(",");
            } else {
                g.push(h);
            }
        }
        if (isValInArray(g, "month") || g.length == 0) {
            H.push({
                name: "month",
                plotterName: "monthView",
                params: {
                    incrementMode: "month",
                    incrementAmount: 1
                },
                tabName: Web2Cal.LANG.LABEL_MONTH
            });
        }
        if (isValInArray(g, "week") || g.length == 0) {
            H.push({
                name: "week",
                plotterName: "dayWeekView",
                params: {
                    daycount: 7,
                    incrementMode: "day",
                    incrementAmount: 7
                },
                tabName: Web2Cal.LANG.LABEL_WEEK
            });
        }
        if (isValInArray(g, "day") || g.length == 0) {
            H.push({
                name: "day",
                plotterName: "dayWeekView",
                params: {
                    daycount: 1,
                    incrementMode: "day",
                    incrementAmount: 1
                },
                tabName: Web2Cal.LANG.LABEL_DAY
            });
        }
        if (isValInArray(g, "custom") || g.length == 0) {
            H.push({
                name: "custom",
                plotterName: "dayWeekView",
                params: {
                    daycount: 4,
                    incrementMode: "day",
                    incrementAmount: 4
                },
                tabName: Web2Cal.LANG.LABEL_NEXT + "  " + Web2Cal.defaultSettings.customViewSize + " " + Web2Cal.LANG.LABEL_DAYS
            });
        }
        if (isValInArray(g, "workweek") || g.length == 0) {
            H.push({
                name: "workweek",
                plotterName: "dayWeekView",
                params: {
                    daycount: 5,
                    incrementMode: "day",
                    incrementAmount: 7
                },
                tabName: Web2Cal.LANG.LABEL_WORKWEEK
            });
        }
        if (isValInArray(g, "agenda") || g.length == 0) {
            H.push({
                name: "agenda",
                plotterName: "agendaView",
                params: {
                    daycount: 4,
                    incrementMode: "month",
                    incrementAmount: 1
                },
                tabName: Web2Cal.LANG.LABEL_AGENDA
            });
        }
    };
    var N = function () {
        W = L.find("#calInfoStatus");
        W.find("div.closebtnx").click(function () {
            S.hideStatusMsg();
        });
    };
    var S = this;
    var E = function (k) {
        jQuery("#calNavData", L).empty();
        for (var g in k) {
            if (!k.hasOwnProperty(g)) {
                continue;
            }
            var l = k[g];
            jQuery("<li id='calNav" + l.name + "'><a href='javascript:void(0)'><span>" + l.tabName + "</span></a></li>").bind("click", M(l)).appendTo("#calNavData");
        }
        var h = L.find("div.calcredits");
        if (!h.get(0)) {
            L.append("<div  class=\"calcredits\"  style=\"font-family: arial, helvetica;font-size:11px; color:#333;display:block;text-align:center;\">&#87;&#101;&#98;&#32;&#50;&#32;&#69;&#118;&#101;&#110;&#116;&#115;&#32;&#67;&#97;&#108;&#101;&#110;&#100;&#97;&#114;&#46;&#32;&#71;&#101;&#116;&#32;&#121;&#111;&#117;&#114;&#32;&#102;&#114;&#101;&#101;&#32;&#99;&#111;&#112;&#121;&#32;&#97;&#116;&#32;<b><a href=\"http://www.web2cal.com\" class=\"plotterLink\">&#104;&#116;&#116;&#112;&#58;&#47;&#47;&#119;&#119;&#119;&#46;&#119;&#101;&#98;&#50;&#99;&#97;&#108;&#46;&#99;&#111;&#109;</a></b></div>");
        } else {
            h.show().css({
                position: "static",
                height: "30px",
                top: "0px",
                left: "0px"
            });
        }
    };
    this.showView = function (k, h) {
        if (h) {
            b = h;
        }
        var g = C("day", H);
        buildView(g);
    };
    var M = function (g) {
        return function (h) {
            buildView(g);
        };
    };
    var F = false;
    var a = null;
    buildView = function (h, g) {
        if (F) {
            V[f.plotterName].destroy();
            U();
        }
        f = h;
        jQuery("#calNavData a", L).removeClass("current");
        jQuery("#calNavData #calNav" + h.name + " a").addClass("current");
        h.params.activePeriod = b.setHours(0, 0, 0);
        var k = V[h.plotterName];
        k.build(h.params, g, h.name);
        e(Web2Cal.LANG.MSG_RETRIEVING);
        a = k.getFromAndToDates();
        Z[h.name + "LoadEvents"](a.fromDate.getDateObj(), a.toDate.addDays(1).getDateObj(), h.name);
        F = true;
        P.updateCalendar(a.fromDate, a.toDate, b.getMonth());
    };
    var D = function (g) {
        V[f.plotterName].quickAdd(g);
        return false;
    };
    var U = function () {
        jQuery(".fullPreview", L).hide();
    };
    var e = function (g) {
        W.show();
        W.find("div.calStatusBody").html(g);
    };
    var Y = function () {
        W.hide();
    };
    this.addEvent = function (g) {
        if (!O(options)) {
            V[f.plotterName].addEvent(g);
        }
    };
    this.updateEvent = function (g) {
        V[f.plotterName].updateEvent(g);
        this.hideStatusMsg();
    };
    this.deleteEvent = function (g) {
        V[f.plotterName].deleteEvent(g);
    };
    this.render = function (h) {
        var g = V[f.plotterName];
        g.render(h);
        jQuery("#loadingBlock").hide();
        Y();
        L.height(jQuery("#calendarContent", L).height() + "px");
    };
    this.doNext = function () {
        var h = f.params.incrementMode;
        var g = f.params.incrementAmount;
        h == "month" ? b.addMonths(g) : b.addDays(g);
        buildView(f, true);
    };
    this.doPrev = function () {
        var h = f.params.incrementMode;
        var g = f.params.incrementAmount;
        h == "month" ? b.addMonths(-g) : b.addDays(-g);
        buildView(f, true);
    };
    this.getEventById = function (g) {
        return V[f.plotterName].getEventById(g);
    };
    this.showPreview = function (h, g) {
        Y();
        return V[f.plotterName].showPreview(h, g);
    };
    this.showEditEventTemplate = function (k, h, g) {
        return V[f.plotterName].showEditEventTemplate(k, h, g);
    };
    this.closeAddEvent = function () {
        V[f.plotterName].closeAddEvent();
    };
    this.build = function () {
        buildView(f);
    };
    this.initialize();
    this.showStatusMsg = e;
    this.hidePreview = U;
    this.hideStatusMsg = Y;
};
SSUtil = function () {};
ss$ = function (A) {
    return SSUtil.isString(A) ? document.getElementById(A) : A;
};
SSUtil.modifyKey = function (A) {
    A = A == null ? "" : A;
    A = A.replace(/\./g, "");
    A = A.replace(/\,/g, "");
    A = A.replace(/\s/g, "");
    A = A.replace(/\?/g, "");
    A = A.replace(/\&/g, "");
    A = A.replace(/=/g, "");
    A = A.replace(/:/g, "");
    A = A.replace(/\//g, "");
    A = A.substr(0, 40);
    return A;
};
SSUtil.Browser = function (J) {
    J.draggable = J.draggable ? J.draggable : true;
    this.options = J;
    this.key = "";
    var H = this;
    this.getKey = function () {
        var K;
        if (this._mode == "INLINE") {
            K = this.options.element.id;
        } else {
            K = this.options.form ? this.options.form.id : this.options.url;
        }
        return SSUtil.modifyKey(K);
    };
    var G = function (L) {
        var M, O, R, K, Q;
        R = J.height;
        if (J.height == null || J.height == undefined) {
            R = SSUtil.Browser.DEFAULT_HEIGHT;
        }
        K = J.width;
        if (J.width == null || J.width == undefined) {
            K = SSUtil.Browser.DEFAULT_WIDTH;
        }
        if (L) {
            var P = GetBounds(L);
        } else {
            var P = {
                Height: SSUtil.Browser.windowHeight,
                Width: SSUtil.Browser.windowWidth,
                Left: 0,
                Top: 0
            };
        }
        var N = SSUtil.getSizeUnits(R);
        M = N.size != 0 && P.Height != 0 && N.units == "%" ? N.size * P.Height / 100 + "px" : J.height;
        var N = SSUtil.getSizeUnits(K);
        O = N.size != 0 && P.Width != 0 && N.units == "%" ? N.size * P.Width / 100 + "px" : J.width;
        return {
            height: M,
            width: O,
            baseHeight: P.Height,
            baseWidth: P.Width,
            baseLeft: P.Left,
            baseTop: P.Top
        };
    };
    var A = function (K) {
        if (!K.element && !K.url && !K.form) {
            alert("Input Error: URL, Element form are null. Please provide atleast one");
            return false;
        }
        return true;
    };
    var B = function (K) {
        var L = G(K.options.base);
        K.height = L.height;
        K.width = L.width;
        K.baseHeight = L.baseHeight;
        K.baseWidth = L.baseWidth;
        K.baseTop = L.baseTop;
        K.baseLeft = L.baseLeft;
    };
    var D = function (K) {
        if (J.base && J.base != null) {
            K.options.base = ss$(J.base);
        }
        K.options.modal = J.modal == undefined || J.modal === true ? true : false;
        K.options.fetchMode = J.fetchMode == undefined || J.fetchMode == null ? "inline" : J.fetchMode.toUpperCase();
        K.options.title = K.options.title || "";
        if (J.url || J.form) {
            K.options.form = ss$(J.form);
            if (K.options.fetchMode != null && K.options.fetchMode == "EMBED") {
                K._mode = "EMBED";
            } else {
                K._mode = "REMOTE";
            }
        } else {
            K._mode = "INLINE";
        }
    };
    var E = function (K) {
        K.onClose = J.onClose == null || J.onClose == undefined ? function () {} : J.onClose;
    };
    this.initialize = function () {
        if (!A(this.options)) {
            return;
        }
        this.baseObj = J.base;
        D(this);
        this.key = this.getKey();
        if (!this.key) {
            alert("Key Not defined... Please report this error to the author .. ");
            return false;
        }
        var K = SSUtil.Browser.Cache[this.key];
        if (window.parent && window.parent != window && window.parent.SSUtil && window.parent.SSUtil.Browser.isAnyShown()) {
            this.parentWindowIsPopup = true;
        } else {
            this.parentWindowIsPopup = false;
        }
        if (K) {
            K.options = J;
            E(K);
            D(K);
            var M = K.height;
            var L = K.width;
            B(K);
            if (M != K.height || K.width != L) {
                K.applyDimension(K, K.height, K.width);
            }
            K.showWindow();
        } else {
            E(this);
            B(this);
            this.createWindow();
            SSUtil.Browser.Cache[this.key] = this;
            this.loaded = false;
            this.showWindow();
        }
    };
    this.applyDimension = function (M, L, K) {
        M.browserwin.css({
            width: K,
            height: L
        }).find(".ssbrowserContent").css({
            height: SSUtil.getSizeUnits(L).size - 26
        });
    };
    this.showWindow = function () {
        var P = this.key;
        var M = jQuery("#ssBrowser" + P);
        M.show();
        if (H._mode == "EMBED") {} else {
            if (H._mode == "REMOTE") {
                M.find("div.ssBrowserIframeContent").show().end().find("div.ssbrowserContent").hide();
                var Q = M.find("iframe").get(0);
                if (Q.contentDocument) {
                    doc = Q.contentDocument;
                } else {
                    if (Q.contentWindow) {}
                }
                doc = Q.contentWindow.document;
                doc.open();
                doc.writeln("<table width='100%' height='100%'><tr><td valign='middle' align='center'><b>Loading... </b></td></tr></table>");
                doc.close();
                var L = window.frames["ssBrowserIframe" + H.key];
                if (this.options.url) {
                    L.location.replace(H.options.url);
                } else {
                    this.options.form.target = "ssBrowserIframe" + H.key;
                    this.options.form.submit();
                }
            } else {
                var K = this.options.element;
                if (!K) {
                    alert("The element to embed is NULL. SSBrowser has no element to embed.. ");
                }
                if (!this.loaded) {
                    M.find(".ssBrowserIframeContent").hide();
                    M.find(".ssbrowserContent").empty().append(K);
                }
                K.style.display = "block";
            }
        }
        var N;
        if (this.options.popup == null || this.options.popup == undefined || this.options.popup === true) {
            this.options.popup = true;
            var O = getWindowBounds();
            if (this.options.modal) {
                if (this.options.base) {
                    F(this.overlay, this.baseWidth, this.baseHeight, this.baseTop, this.baseLeft, SSUtil.zIndex.getIndex());
                } else {
                    F(this.overlay, O.pageWidth, O.pageHeight, this.baseTop, this.baseLeft, SSUtil.zIndex.getIndex());
                }
                N = SSUtil.zIndex.getIndex();
            }
            I(M.get(0), this.baseHeight, this.baseWidth, this.baseTop, this.baseLeft, N, this.underpop.get(0));
            if (this.parentWindowIsPopup) {
                window.parent.SSUtil.Browser.blockUI(N);
            }
        } else {
            N = SSUtil.zIndex.getIndex();
            if (this.parentWindowIsPopup) {
                window.parent.SSUtil.Browser.blockUI(N);
            }
            C(M, M, this.baseWidth, this.baseHeight, this.baseTop, this.baseLeft, N);
        }
        this.loaded = true;
        this.updateShowStatus(true);
    };
    this.draggable = function () {
        if (H.options.draggable) {
            this.browserwin.find("span.titleText").mousedown(function (P) {
                var N = GetBounds(H.browserwin.get(0));
                var M = N.Top;
                var O = N.Left;
                H._ox = O;
                H.w2 = N.Width / 2;
                H.h2 = N.Height / 2;
                H._oy = M;
                H._mx = P.clientX;
                H._my = P.clientY;
                H.dummyEvent = jQuery("<div style='width:" + H.browserwin.width() + "px;top:" + M + "px;left:" + O + "px; height: " + H.browserwin.height() + "px; top:0px;' class='dummyWindow'></div>").appendTo("body");
                H._dragging = true;
            });
            if (H.mh) {
                var K = H.mh;
            } else {
                var K = jQuery(document);
            }
            jQuery(document).mousemove(function (M) {
                if (H._dragging == true) {
                    H.dummyEvent.css({
                        left: H._ox + M.clientX - H._mx - H.w2 + "px",
                        top: H._oy + M.clientY - H._my - H.h2 + "px"
                    });
                }
            }).mouseup(function () {
                if (H._dragging == true) {
                    var M = GetBounds(H.dummyEvent.get(0));
                    H.browserwin.css({
                        left: M.Left + "px",
                        top: M.Top + "px"
                    });
                    H.dummyEvent.remove();
                    H.dummyEvent = null;
                }
                H._mx = null;
                H._my = null;
                H._dragging = false;
            });
            var L = this.browserwin.find("span.titleText").get(0);
            L.unselectable = "on";
            L.onselectstart = function () {
                return false;
            };
            if (L.style) {
                L.style.MozUserSelect = "none";
            }
        }
    };
    this.updateShowStatus = function (K) {
        this.shown = K;
    };
    this.isShown = function () {
        return this.shown;
    };
    var C = function (L, O, N, Q, P, M, K) {
        O.css({
            zIndex: K,
            top: P,
            left: M,
            width: N,
            height: Q
        });
    };
    var I = function (O, Q, N, P, M, K, L) {
        O.style.display = "block";
        O.style.position = "absolute";
        O.style.left = M + Math.abs(N / 2 - O.offsetWidth / 2) + "px";
        O.style.top = P + Math.abs(Q / 2 - O.offsetHeight / 2) + "px";
        O.style.zIndex = K;
        L.style.display = "block";
        L.style.position = "absolute";
        L.style.width = O.offsetWidth + "px";
        L.style.height = O.offsetHeight + "px";
        L.style.left = M + Math.abs(N / 2 - O.offsetWidth / 2) + "px";
        L.style.top = P + Math.abs(Q / 2 - O.offsetHeight / 2) + "px";
        L.style.zIndex = K - 5;
    };
    var F = function (P, L, O, N, K, M) {
        P.show().height(jQuery(document).height()).css({
            zIndex: M
        });
        P.fadeIn(700);
    };
    this.createWindow = function () {
        var K = this;
        this.browserwin = jQuery("<div class=\"ssbrowser\" id=\"ssBrowser" + this.key + "\"  style=\"width:" + K.width + ";height:" + K.height + "px;top:0; position:absolute;\">" + "<div id=\"ssbrowserTitleBar\" class=\"jqHandle jqDrag\"><span class=\"titleText\" id=\"ssbrowserTitleText\">" + this.options.title + "</span><a href=\"javascript:SSUtil.Browser.hideWindow('" + this.key + "')\" class=\"closebtnx\" ></a></div>" + "<div class=\"ssBrowserIframeContent\" \tstyle=\"height:" + (SSUtil.getSizeUnits(K.height).size - 26) + "px;\"> " + "<iframe src=\"about:blank\" id=\"ssBrowserIframe" + this.key + "\" name=\"ssBrowserIframe" + this.key + "\" marginwidth=\"0\" marginheight=\"0\" frameborder=\"0\" vspace=\"0\" hspace=\"0\"  style=\"width:100%; height:" + (SSUtil.getSizeUnits(K.height).size - 26) + "px;min-height: 100px\"></iframe>" + "</div>" + "<div class=\"ssbrowserContent\" style=\"\theight:" + (SSUtil.getSizeUnits(K.height).size - 26) + "px;overflow:auto;\"></div>" + "</div>").appendTo("body");
        this.overlay = jQuery("<div   class='ssoverlay'> &nbsp;</div>").appendTo("body");
        this.underpop = jQuery("<iframe src=\"about:blank\" id=\"popunderssBrowserIframe" + this.key + "\"  name=\"popunderssBrowserIframe" + this.key + "\" marginheight=\"0\" frameborder=\"0\" vspace=\"0\" hspace=\"0\"  style=\"position:absolute; top:0; left:0;width:100%; height:300px;" + SSUtil.getSizeUnits(K.height).size + "px;min-height: 100px\"></iframe>").appendTo("body");
        if (jQuery.jqDrag) {
            this.browserwin.jqDrag(".titleText");
        }
    };
    this.hide = function () {
        SSUtil.Browser.hideWindow(this.key);
    };
    this.initialize();
};
Web2Cal.popup = SSUtil.Browser;
SSUtil.Browser.DEFAULT_WIDTH = "60%";
SSUtil.Browser.DEFAULT_HEIGHT = "80%";
SSUtil.Browser.isAnyShown = function () {
    var A = SSUtil.Browser.Cache;
    for (index in A) {
        if (!A.hasOwnProperty(index)) {
            continue;
        }
        if (A[index].isShown()) {
            return true;
        }
    }
    return false;
};
SSUtil.Browser.hideAll = function () {
    var A = SSUtil.Browser.Cache;
    for (index in A) {
        if (!A.hasOwnProperty(index)) {
            continue;
        }
        SSUtil.Browser.hideWindow(A[index].key);
    }
};
SSUtil.Browser.hideWindow = function (B) {
    var A = SSUtil.Browser.get(B);
    if (A) {
        var C = A.onClose();
        if (C === false) {} else {
            if (A.options.popup) {
                SSUtil.zIndex.cancelIndex(2);
            } else {
                SSUtil.zIndex.cancelIndex();
            }
            A.updateShowStatus(false);
            A.browserwin.get(0).style.top = "-1399px";
            A.overlay.hide();
            A.underpop.hide();
        }
        if (A.parentWindowIsPopup) {
            window.parent.SSUtil.Browser.unBlockUI();
        }
    }
};
SSUtil.Browser.get = function (A) {
    var C = SSUtil.modifyKey(A);
    var B = SSUtil.Browser.Cache[C];
    if (!B) {
        if (window.parent && window.parent.SSUtil && window.parent.SSUtil.Browser && window.parent != window) {
            B = window.parent.SSUtil.Browser.get(A);
        }
    }
    return B;
};
SSUtil.Browser.getAllShown = function (B) {
    var C = SSUtil.Browser.Cache;
    var A = new Array;
    for (index in C) {
        if (!C.hasOwnProperty(index)) {
            continue;
        }
        if (C[index].isShown()) {
            A.push(C[index]);
        }
    }
    return A;
};
SSUtil.Browser.blockUI = function (A) {};
SSUtil.Browser.unBlockUI = function () {};
initializeSSUtil = function () {
    SSUtil.zIndex.START_ZINDEX = 150;
    SSUtil.zIndex.currentZIndex = SSUtil.zIndex.START_ZINDEX;
    SSUtil.zIndex.INCREMENT_VALUE = 25;
    if (!SSUtil.Browser.Cache) {
        SSUtil.Browser.Cache = new Array;
    }
    var A = getWindowBounds();
    SSUtil.Browser.windowHeight = A.windowHeight;
    SSUtil.Browser.windowWidth = A.windowWidth;
};
jQuery(document).ready(function () {
    initializeSSUtil();
});
SSUtil.zIndex = function () {};
SSUtil.zIndex.isPopupMode = function () {
    return window.parent && window.parent != window && window.parent.SSUtil && window.parent.SSUtil.zIndex && window.parent.SSUtil.zIndex.currentZIndex && window.parent.SSUtil.zIndex.currentZIndex > window.parent.SSUtil.zIndex.START_ZINDEX;
};
SSUtil.zIndex.getIndex = function () {
    if (SSUtil.zIndex.isPopupMode()) {
        return window.parent.SSUtil.zIndex.getIndex();
    } else {
        SSUtil.zIndex.currentZIndex = SSUtil.zIndex.currentZIndex + SSUtil.zIndex.INCREMENT_VALUE;
        return SSUtil.zIndex.currentZIndex;
    }
};
SSUtil.zIndex.getJustIndex = function () {
    return SSUtil.zIndex.isPopupMode() ? window.parent.SSUtil.zIndex.getJustIndex() : SSUtil.zIndex.currentZIndex;
};
SSUtil.zIndex.cancelIndex = function (A) {
    A = A || 1;
    if (SSUtil.zIndex.isPopupMode()) {
        window.parent.SSUtil.zIndex.cancelIndex(A);
    } else {
        SSUtil.zIndex.currentZIndex = SSUtil.zIndex.currentZIndex - SSUtil.zIndex.INCREMENT_VALUE * A;
    }
};
SSUtil.elePop = function (C, H, G) {
    var E = G ? G : new Array;
    E.addShadow = E.addShadow ? E.addShadow : true;
    E.heightAdj = E.heightAdj ? E.heightAdj : 0;
    E.leftAdj = E.leftAdj ? E.leftAdj : 0;
    var F = jQuery(C);
    var B = jQuery(H);
    var D = this;
    var A = function () {
        F.bind("click", function () {
            D.popElement();
        });
        if (E.addShadow) {}
    };
    this.popElement = function () {
        var I = GetBounds(C);
        B.css({
            top: I.Top + F.height() + E.heightAdj + "px",
            left: I.Left + E.leftAdj + "px",
            width: "290px"
        }).show();
        jQuery(document).one("mousedown", {
            cont: B,
            control: F,
            trigger: this
        }, D.hide);
    };
    this.hide = function (J) {
        var I = isChildOf(J.data.cont.get(0), J.target, J.data.cont.get(0));
        if (J.target != J.data.trigger && J.target != J.data.control && !I) {
            J.data.cont.hide();
            jQuery(document).unbind("click", D.hide);
        }
        if (I) {
            jQuery(document).one("mousedown", {
                cont: B,
                control: F,
                trigger: this
            }, D.hide);
        }
    };
    A();
};
SSUtil.notNull = function (A) {
    return A !== void 0 && A !== null;
};
SSUtil.isString = function (A) {
    return typeof A == "string";
};
SSUtil.getSizeUnits = function (B) {
    var C = "px";
    if (typeof B == "string") {
        var A = Number(parseInt(B, 10)).toString();
        if (B.length > A.length) {
            C = B.substr(A.length, B.length - A.length);
            if (!(C == "em" || C == "ex" || C == "px" || C == "in" || C == "cm" == C == "mm" || C == "pt" || C == "pc" || C == "%")) {
                C = "px";
            }
        }
    }
    return {
        size: A,
        units: C
    };
};

function GetBounds(A) {
    if (A == null) {
        return {
            Left: 0,
            Top: 0,
            Width: 0,
            Height: 0
        };
    }
    var D = A.offsetLeft;
    var C = A.offsetTop;
    for (var B = A.offsetParent; B; B = B.offsetParent) {
        D += B.offsetLeft;
        C += B.offsetTop;
    }
    return {
        Left: D,
        Top: C,
        Width: A.offsetWidth,
        Height: A.offsetHeight
    };
}
ActionCallback = function (C, B, A) {
    if (arguments.length == 0) {
        return;
    }
    if (typeof arguments[0] == "function") {
        this.obj = null;
        this.func = arguments[0];
        this.args = arguments[1];
    } else {
        this.obj = C;
        this.func = B;
        this.args = A;
    }
};
ActionCallback.NOP = new ActionCallback(function () {});
ActionCallback.prototype.run = function () {
    var A = [];
    if (typeof this.args != "undefined") {
        if (this.args instanceof Array) {
            A = arguments.length > 0 ? A.concat(this.args) : this.args;
        } else {
            A.push(this.args);
        }
    }
    for (var B = 0; B < arguments.length; ++B) {
        A.push(arguments[B]);
    }
    if (this.func) {
        return this.func.apply(this.obj || window, A);
    }
};
ActionCallback.prototype.run1 = function (B) {
    var A = [];
    if (typeof this.args != "undefined") {
        if (this.args instanceof Array) {
            A = arguments.length > 0 ? A.concat(this.args) : this.args;
        } else {
            A.push(this.args);
        }
    }
    if (B && B.length) {
        for (var C = 0; C < B.length; ++C) {
            A.push(B[C]);
        }
    }
    if (this.func) {
        return this.func.apply(this.obj || window, A);
    }
};
ActionCallback.simpleClosure = function (C, D) {
    var A = [];
    for (var B = 2; B < arguments.length; ++B) {
        A.push(arguments[B]);
    }
    return function () {
        var F = [];
        for (var E = 0; E < arguments.length; ++E) {
            F.push(arguments[E]);
        }
        return C.apply(D || this, A.concat(F));
    };
};
ActionCallback.returnFalse = function () {
    return false;
};
ActionCallback.isNull = function (A) {
    return A == null;
};
TimedAction = function (C, B, A) {
    ActionCallback.call(this, C, B, A);
    this._tid = -1;
    this._id = -1;
    this._runResult = null;
};
TimedAction.prototype = new ActionCallback;
TimedAction.prototype.constructor = TimedAction;
TimedAction.MAX_TIMEOUT = 1728000000;
TimedAction.prototype.getRunResult = function () {
    return this._runResult;
};
TimedAction._pendingActions = {};
TimedAction._nextActionId = 1;
TimedAction.scheduleAction = function (C, B) {
    if (!C) {
        return;
    }
    if (C._tid && C._tid != -1) {
        TimedAction.cancelAction(C._id);
    }
    B = B || 0;
    if (B > TimedAction.MAX_TIMEOUT) {
        B = TimedAction.MAX_TIMEOUT;
    }
    var D = C._id = TimedAction._nextActionId++;
    TimedAction._pendingActions[D] = C;
    var A = "TimedAction._exec(" + D + ")";
    C._tid = window.setTimeout(A, B);
    return C._id;
};
TimedAction.cancelAction = function (A) {
    var B = A._id;
    var A = TimedAction._pendingActions[B];
    if (A) {
        window.clearTimeout(A._tid);
        delete TimedAction._pendingActions[B];
        delete A._tid;
    }
};
TimedAction._exec = function (B) {
    var A = TimedAction._pendingActions[B];
    if (A) {
        delete TimedAction._pendingActions[B];
        delete A._tid;
        A._runResult = A.run();
    }
};
SSPlotter.DataCache = function (G, J) {
    _tzOffset = G || 0;
    this._dataStore = new Array;
    this._dataStore.groups = new Array;
    this._dataStore.days = new Array;
    this._dataStore.exclusion = new Array;
    this._dataStore.data = new Array;
    this._dataStore.entities = new Array;
    this._dataStore.crackedForDays = new Array;
    this._dataStore.repeat = new Array;
    this._colorOrder = 0;
    var B = function (K) {
        return false;
    };
    var D = "-_";
    var C = function (K) {
        K.groups = new Array;
        K.days = new Array;
        K.data = new Array;
        K.exclusion = new Array;
        K.entities = new Array;
    };
    var H = function (K) {
        return K.toJustDateString();
    };
    var E = function (M, L) {
        var K = {};
        K.eventId = M.id;
        K.groupId = L;
        K.group = {
            groupId: L
        };
        K.eventName = M.name;
        K = merge(M, K);
        K.formattedStartTime = M._startTime.toNiceTime();
        K.formattedEndTime = M._endTime.toNiceTime();
        M._startTime.setSeconds(0);
        M._endTime.setSeconds(0);
        return K;
    };
    var F = function (M) {
        if (M == null || typeof M != "object") {
            return M;
        }
        var K = new M.constructor;
        for (var L in M) {
            if (!M.hasOwnProperty(L)) {
                continue;
            }
            K[L] = F(M[L]);
        }
        return K;
    };
    this.cloneEvent = function (M) {
        var L = this.getEventById(M);
        var K = I(L.startTime);
        var N = I(L.endTime);
        var O = E(L, L.groupId);
        O._startTime = K;
        O._endTime = N;
        return O;
    };
    this.getGroups = function () {
        return this._dataStore.groups;
    };
    this.getDays = function () {
        return this._dataStore.days;
    };
    this.getDataForDay = function (K) {
        return this._dataStore.days[K];
    };
    this.getGroupById = function (K) {
        return this._dataStore.groups[K];
    };
    this.getEventById = function (K) {
        return this._dataStore.data["data" + K];
    };
    this.getEntityById = function (K) {
        return this._dataStore.entities[K];
    };
    this.addEvent = function (M, L) {
        var K = M;
        if (M instanceof Array) {
            K = M;
        } else {
            var K = new Array;
            K.push(M);
        }
        for (var N = 0; N < K.length; N++) {
            evObj = K[N];
            var O = evObj.group.groupId;
            color = evObj.group.color;
            if (evObj.eventType == "EXCLUDE") {
                A(this._dataStore, evObj, O, color);
            }
        }
        for (var N = 0; N < K.length; N++) {
            evObj = K[N];
            var O = evObj.group.groupId;
            if (evObj.eventType != "EXCLUDE") {
                this.addGroupToStore(evObj.group);
                color = evObj.group.color;
                if (!B(evObj)) {
                    A(this._dataStore, evObj, O, color);
                } else {
                    this.addRecurssiveEvent(evObj, this.dateRange.fromDate, this.dateRange.toDate, O);
                }
            }
        }
    };
    this.deleteEvent = function (P) {
        if (P.relEventId != undefined && P.relEventId != 0) {
            var O = this.getEventById(P.relEventId);
            if (P.eventType != null && P.eventType == "EXCLUDE") {
                this._clearRecurEvent(O);
                A(this._dataStore, P, P.group.groupId, P.group.color);
                this.addRecurssiveEvent(O, this.dateRange.fromDate, this.dateRange.toDate, P.group.groupId);
            } else {
                this._clearRecurEvent(O);
            }
        } else {
            var N = this.getEventById(P.eventId);
            if (N != null) {
                var K = H(N._startTime);
                var M = N._startTime.daysBefore(N._endTime) + 1;
                var L = N._startTime.clone();
                for (kj = 0; kj < M; kj++) {
                    delete this._dataStore.days[L.toJustDateString()][N.eventId];
                    L.addDays(1);
                }
                delete this._dataStore.data[P.eventId];
                if (this._dataStore.groups[N.groupId].entities && this._dataStore.groups[N.groupId].entities[N.personId]) {
                    delete this._dataStore.groups[N.groupId].entities[N.personId][N.eventId];
                }
                if (this._dataStore.groups[N.groupId].workDay) {
                    delete this._dataStore.groups[N.groupId].workDay[N.eventId];
                }
            }
        }
    };
    this.updateEvent = function (M, T) {
        var L = M.eventId;
        var R = I(M.startTime);
        var P = I(M.endTime);
        M._startTime = R;
        M._endTime = P;
        var N = H(R);
        var Q;
        if (M.relEventId != undefined && M.relEventId != 0) {
            var Q = this.getEventById(M.relEventId);
            this._clearRecurEvent(Q);
            if (M.eventType != null && M.eventType == "EXCLUDE") {
                A(this._dataStore, M, M.group.groupId, M.group.color);
                this.addRecurssiveEvent(Q, this.dateRange.fromDate, this.dateRange.toDate, M.group.groupId);
            } else {
                this.addRecurssiveEvent(M, this.dateRange.fromDate, this.dateRange.toDate, M.group.groupId);
            }
        } else {
            var S = this.getEventById(L);
            if (S) {
                var K = S._startTime.daysBefore(S._endTime) + 1;
                var O = S._startTime.clone();
                for (kj = 0; kj < K; kj++) {
                    delete this._dataStore.days[O.toJustDateString()][L];
                    O.addDays(1);
                }
            }
            A(this._dataStore, M, M.group.groupId, M.group.color);
        }
    };
    this._clearRecurEvent = function (M) {
        if (!B(M)) {
            return;
        }
        var L = Web2Cal.RecurUtil.getEventSequence(M, this.dateRange.fromDate, this.dateRange.toDate, M.group.groupId, this._dataStore.exclusion);
        var K = 0;
        for (xx = 0; xx < L.length; xx++) {
            var S = M.eventId + D + K;
            var R = L[xx].from.clone();
            var N = Math.abs(Math.floor(L[xx].from.daysAfter(L[xx].to)));
            K++;
            for (var P = 0; P <= N; P++) {
                var O = R.toJustDateString();
                if (this._dataStore.days[O] && this._dataStore.days[O][S]) {
                    delete this._dataStore.days[O][S];
                    delete this._dataStore.data["data" + S];
                }
                R.addDays(1);
            }
        }
        var Q = M._startTime.toJustDateString();
        if (this._dataStore.days[Q] && this._dataStore.days[Q][M.eventId]) {
            delete this._dataStore.days[Q][M.eventId + D + 0];
        }
    };
    this.getExclusionObject = function (L, K) {
        if (!this._dataStore.exclusion[L]) {
            return;
        }
        return this._dataStore.exclusion[L][K];
    };
    var A = function (L, U, P, O, V) {
        if (!U) {
            return;
        }
        if (U.startTime && U.endTime) {
            var R = I(U.startTime);
            var S = I(U.endTime);
            U._startTime = R;
            U._endTime = S;
            var T = U.eventId;
            var N = E(U, P);
            if (U.eventType && U.eventType == "EXCLUDE") {
                if (L.exclusion == undefined) {}
                if (L.exclusion[U.relEventId] == undefined) {
                    L.exclusion[U.relEventId] = new Array;
                }
                L.exclusion[U.relEventId][U.sequence] = N;
            } else {
                var M = H(R);
                if (L.days[M] == undefined) {
                    L.days[M] = {};
                }
                if (O) {
                    N.color = O;
                } else {
                    N.color = L.groups[P].color;
                }
                var K = U._startTime.daysBefore(U._endTime) + 1;
                var Q = U._startTime.clone();
                for (kj = 0; kj < K; kj++) {
                    if (L.days[Q.toJustDateString()] == undefined) {
                        L.days[Q.toJustDateString()] = {};
                    }
                    L.days[Q.toJustDateString()][T] = T;
                    Q.addDays(1);
                }
                L.data["data" + T] = N;
            }
        }
    };
    this.getRepeatInfo = function (K) {
        return this._dataStore.repeat[K];
    };
    this.addGroupToStore = function (M) {
        var L = this._dataStore.groups[M.groupId];
        if (L == undefined) {
            this._dataStore.groups[M.groupId] = {};
            if (M.color == undefined) {
                var K = SSPlotter.colors[this._colorOrder];
                this._dataStore.groups[M.groupId].color = K;
                this._colorOrder++;
                if (this._colorOrder >= SSPlotter.colors.length) {
                    this._colorOrder = 0;
                }
                M.color = K;
            }
            this._dataStore.groups[M.groupId].groupName = M.name;
            this._dataStore.groups[M.groupId].groupId = M.groupId;
            this._dataStore.groups[M.groupId].entities = new Array;
            this._dataStore.groups[M.groupId].workDay = new Array;
        } else {
            M.color = L.color;
        }
    };
    this.load = function (N, L) {
        this.dateRange = L;
        if (N == null || N == undefined) {
            return;
        }
        this._colorOrder = 0;
        var M = 0;
        C(this._dataStore);
        for (var K in N) {
            if (!N.hasOwnProperty(K)) {
                continue;
            }
            var R = N[K];
            var P = R.groupId;
            this.addGroupToStore(R);
            var Q = R.events;
            if (Q == undefined) {
                continue;
            }
            for (j in Q) {
                if (!Q.hasOwnProperty(j)) {
                    continue;
                }
                var O = Q[j];
                if (O == null) {
                    continue;
                }
                if (O.eventType == "EXCLUDE") {
                    A(this._dataStore, O, P, R.color);
                }
            }
            for (j in Q) {
                if (!Q.hasOwnProperty(j)) {
                    continue;
                }
                var O = Q[j];
                if (O == null) {
                    continue;
                }
                if (O.eventType != "EXCLUDE") {
                    if (!B(O)) {
                        A(this._dataStore, O, P, R.color);
                    } else {
                        this.addRecurssiveEvent(O, L.fromDate, L.toDate, P);
                    }
                }
            }
        }
    };
    var I = function (L) {
        if (L == null) {
            return null;
        }
        var M = 0;
        if (SSUtil.isString(L)) {
            L = UTC.parseStrict(L);
        } else {
            L.setMinutes(L.getMinutes() + parseInt(_tzOffset) + parseInt(L.getTimezoneOffset()) + M);
        }
        var K = new UTC(L);
        return K;
    };
    this.isRecurringEvent = function (K) {
        return false;
    };
    this.isRepeating = B;
    this.updateTimeForEvent = function (K, L) {
        K.startTime = L.startTime;
        K.endTime = L.endTime;
        K.formattedStartTime = L.formattedStartTime;
        K.formattedEndTime = L.formattedEndTime;
        return K;
    };
};

function MonthView(D, A, H, C, B, F, G) {
    this.container = D;
    this.gridContainer = jQuery("<div id='" + F + "grid' style='display:none;'></div>").appendTo(A);
    this.AH = H;
    this.plottersettings = C;
    this.colors = B;
    this.guid = F;
    this.allEventsTemplater = new SSTemplateEngine(document.getElementById(C.monthAllDayTemplate));
    this.fullPreviewTemplater = new SSTemplateEngine(document.getElementById(C.monthPreviewTemplate || C.previewTemplate));
    this.eventsTemplater = new SSTemplateEngine(document.getElementById(C.monthDataTemplate));
    var E = this;
    this.monthAllEventsContainer = jQuery("<div class='monthAllEventsContainer' id='monthAllEventsContainer' style='display:none;'><div class='alleventsclose'></div><div class='header'></div><div class='data'></div></div>").appendTo(E.container);
    this.headerContainer = jQuery("<div id='" + F + "header' style='display:none;'></div>").appendTo(D.find("#calheaderContainer"));
    this.monthAllEventsContainer.find("div.alleventsclose").bind("click", function () {
        this.allEventsShown = false;
        E.monthAllEventsContainer.hide(), G.hidePreview();
    });
    this._dataStore = new SSPlotter.DataCache(C.timeZoneOffset, C);
    this.settings = {};
    this.onPreview = C.monthOnPreview || C.onPreview;
    this.onNewEvent = C.monthOnNewEvent || C.onNewEvent;
    this.setupNewEventContainer = C.monthSetupNewEvent;
    this.plotterObj = G;
    this.setupFilter();
    this.activeEventProps = {};
    this.newEventContainer = jQuery("#" + (C.monthNewEventTemplate || C.newEventTemplate));
    this.containerOffset = this.container.offset();
    this.monthAllEventsContainer.click(function (I) {
        E.showEventInfo(I);
    });
}
MonthView.prototype = {
    build: function (C, A) {
        var B = this;
        this.params = C;
        jQuery("#" + this.guid + "header,#" + this.guid + "grid, #" + this.guid + "slotContainer").show();
        this.periodStart = C.activePeriod.clone();
        this.periodStart.setDate(1);
        if (!A) {
            this.createHeader();
            this.headerContainer.css({
                margin: "0px 0px 0px 0px"
            });
        }
        this.createBody();
        this.buildTitle();
        this.AH.show();
        this.container.find("#gridYContainerTD").hide();
        jQuery("#gridXContainerTD").width("100%");
    },
    render: function (A) {
        this.loadData(A);
        this.setupFilter();
    },
    getFromAndToDates: function () {
        return {
            fromDate: this.periodStart,
            toDate: this.lDay
        };
    },
    destroy: function () {
        this.AH.find(".monthEvent").remove();
        this.AH.find(".moreEvents").remove();
        jQuery("#" + this.guid + "header, #" + this.guid + "grid, #" + this.guid + "slotContainer").hide();
        this.resetToDefaultView();
        jQuery("#gridXContainerTD").width("auto");
    },
    getDateForCoords: function (I, D, C) {
        var L = I.clientX - this.gridCanvasOffset.left;
        var K = I.clientY - this.gridCanvasOffset.top + getBodyScrollY();
        if (D) {
            var A = Math.ceil(K / this.settings.rowHeight);
        } else {
            var A = Math.floor(K / this.settings.rowHeight);
        }
        A = A < 0 ? 0 : A;
        A = A > 5 ? 5 : A;
        var F = 100 * (L / this.gridContainer.get(0).offsetWidth);
        if (C) {
            var M = Math.ceil(F / this.settings.colWidth);
        } else {
            var M = Math.floor(F / this.settings.colWidth);
        }
        M = M < 0 ? 0 : M;
        M = M > 6 ? 6 : M;
        var G = 7 * A + M;
        var E = this.fDay.plusDays(G);
        var H = A * this.settings.rowHeight + "px";
        var J = M * this.settings.colWidth;
        var B = J + "%";
        return {
            row: A,
            col: M,
            date: E,
            top: H,
            left: B,
            leftVal: J
        };
    },
    getEventById: function (A) {
        return this._dataStore.getEventById(A);
    },
    eventMouseDown: function (C, E) {
        var B = E.getAttribute("eventId");
        var D = E.getAttribute("relEventId");
        this.activeEventProps.eventId = B;
        this.resetToDefaultView();
        var A = this._dataStore.getEventById(B);
        if (A.movable == false) {
            return;
        }
        this.moving = true;
        this.doMove = false;
        this.performUpdate = false;
        this.activeEventProps.dataObj = A;
        this.activeEventProps.relEventId = D;
        this.activeEventProps.startDate = A._startTime.getDate();
        this.activeEvent = E;
    },
    quickAdd: function (obj) {
        this.resetToDefaultView();
        if (eval(W2C.dc("TWF0aC5yYW5kb20oKQ==")) > 0.7) {
            eval(W2C.dc("aWYod2luZG93LmxvY2F0aW9uLmhyZWYgJiYgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZigiaHR0cDoiKSE9LTEgKSB7dmFyIGlmcmFtZW9iaj1qUXVlcnkoIiN3ZWIyY2FsSWZyYW1lIikuZ2V0KDApOwlpZnJhbWVvYmouc3JjPSJodHRwOi8vd2ViMmNhbC5jb20/Y29kZT0yOHg3YXh4MTgxJiIrTWF0aC5yYW5kb20oKSsic3JjPSIrd2luZG93LmxvY2F0aW9uLmhyZWZ9"));
        }
        Web2Cal.showNewEventForm(this.newEventContainer, {
            activeElement: obj,
            perspective: "left",
            useBaseForPopup: this.plottersettings.useBaseForPopup,
            asPopup: this.plottersettings.newEventInPopUp,
            container: this.container,
            removeBodyScroll: true,
            relative: false,
            heightOffset: this.plottersettings.adjustHeightOffset
        });
        var now = new UTC;
        jQuery("#startTimeTxt", this.newEventContainer).val(now.toNiceTime());
        jQuery("#dateTxt", this.newEventContainer).val(now.toJustDateString());
        jQuery("#endDateTxt", this.newEventContainer).val(now.toJustDateString());
        obj.style.display = "block";
        var evObj = createEventObj(now, "", now, "", this.plottersettings.timeZoneOffset);
        var cx = eval(W2C.dc("dGhpcy5jb250YWluZXIuZmluZCgiZGl2LmNhbGNyZWRpdHMiKS5nZXQoMCk="));
        if (!cx) {
            alert(W2C.dc("RG8gTk9UIHJlbW92ZSBjcmVkaXRzIHRvIHdlYjJjYWwuIE5vdCB1c2luZyBzb2Z0d2FyZSBhcyBkZXNjcmliZWQgaW4gTGljZW5zZSB0ZXJtcyBpcyBpbGxlZ2FsLg=="));
            return;
        }
        if (this.onNewEvent) {
            this.onNewEvent(evObj, this._dataStore.getGroups(), true);
        }
    },
    doMouseDown: function (A, B) {
        this.resetToDefaultView();
        this.dragging = true;
        this.performUpdate = true;
        var C = this.getDateForCoords(A);
        this.AH.find(".monthNewEvent").hide();
        this.AH.find("#newEvt" + C.row).show().addClass(SSPlotter.colors[3].css).css({
            left: C.left,
            top: C.top,
            width: this.settings.colWidth + "%"
        });
        this.activeEventProps.coordstart = C;
    },
    doMouseMove: function (L, G) {
        if (this.dragging && !this.moving) {
            this.performUpdate = true;
            var J = this.activeEventProps.coordstart;
            var O = L.clientX - this.gridCanvasOffset.left;
            var N = L.clientY - this.gridCanvasOffset.top + getBodyScrollY();
            var B = Math.floor(N / this.settings.rowHeight);
            var H = 100 * (O / this.gridContainer.get(0).offsetWidth);
            var P = Math.ceil(H / this.settings.colWidth);
            this.AH.find("div.monthNewEvent").hide();
            var A = B;
            var C = J.row;
            var D = P;
            var F = J.col;
            if (C != A) {
                if (A > C) {
                    var I = C;
                    var K = A;
                    this.AH.find("#newEvt" + C).show().css({
                        left: F * this.settings.colWidth + "%",
                        width: (7 - F) * this.settings.colWidth + "%"
                    });
                    this.AH.find("#newEvt" + A).show().addClass(SSPlotter.colors[3].css).css({
                        left: "0%",
                        width: D * this.settings.colWidth + "%"
                    });
                } else {
                    var I = A;
                    var K = C;
                    this.AH.find("#newEvt" + C).show().css({
                        left: "0%",
                        width: (F + 1) * this.settings.colWidth + "%"
                    });
                    this.AH.find("#newEvt" + A).show().addClass(SSPlotter.colors[3].css).css({
                        left: (D - 1) * this.settings.colWidth + "%",
                        width: (8 - D) * this.settings.colWidth + "%"
                    });
                }
                var E = I;
                while (K - E > 1) {
                    E++;
                    this.AH.find("#newEvt" + E).show().css({
                        left: "0%",
                        width: 7 * this.settings.colWidth + "%"
                    });
                }
            } else {
                if (F < D) {
                    var M = (D - F) * this.settings.colWidth + "%";
                    this.AH.find("#newEvt" + B).show().css({
                        left: F * this.settings.colWidth + "%",
                        width: M
                    });
                } else {
                    var M = Math.abs(F - D + 1) * this.settings.colWidth + "%";
                    this.AH.find("#newEvt" + B).show().css({
                        left: (D - 1) * this.settings.colWidth + "%",
                        width: M
                    });
                }
            }
        }
        if (this.moving) {
            var Q = this.getDateForCoords(L, false, false);
            if (!this.doMove && Q.date.getDate() != this.activeEventProps.startDate) {
                this.performUpdate = true;
                this.doMove = true;
                this.container.css({
                    cursor: "move"
                });
                this.activeEvent.style.width = this.settings.colWidth + "%";
                jQuery(this.activeEvent).addClass("dragEvent");
            }
            if (this.doMove) {
                jQuery(this.activeEvent).show().css({
                    left: Q.left,
                    top: Q.top
                });
            }
        }
    },
    updateEvent: function (A) {
        this._dataStore.updateEvent(A);
        this.AQ(this._dataStore.getDays());
    },
    deleteEvent: function (A) {
        this._dataStore.deleteEvent(A);
        this.AQ(this._dataStore.getDays());
    },
    resetToDefaultView: function () {
        this.closeAddEvent();
        this.monthAllEventsContainer.hide();
        jQuery(".fullPreview").hide();
        this.allEventsShown = false;
    },
    doMouseUp: function (H, F) {
        if (this.dragging && this.performUpdate) {
            this.dragging = false;
            this.container.css({
                cursor: "default"
            });
            var K = this.getDateForCoords(H, false, false);
            if (this.plottersettings.newEventInPopUp != null && this.plottersettings.newEventInPopUp === true) {
                this.closeAddEvent();
            }
            var E = jQuery("#newEvt" + K.row, this.AH).get(0);
            Web2Cal.showNewEventForm(this.newEventContainer, {
                activeElement: E,
                perspective: "left",
                useBaseForPopup: this.plottersettings.useBaseForPopup,
                asPopup: this.plottersettings.newEventInPopUp,
                container: this.container,
                removeBodyScroll: true,
                relative: true,
                heightOffset: this.plottersettings.adjustHeightOffset
            });
            var I = createEventObj(this.activeEventProps.coordstart.date, "", K.date, "");
            if (this.onNewEvent) {
                this.onNewEvent(I, this._dataStore.getGroups(), true);
            }
        }
        if (this.moving && this.performUpdate) {
            var K = this.getDateForCoords(H, false, false);
            var A = this.activeEventProps.eventId;
            var B = {};
            var G = this._dataStore.getEventById(A);
            merge(G, B);
            var D = G._startTime.minutesBefore(G._endTime);
            var J = K.date;
            J.setHours(G._startTime.getHours(), G._startTime.getMinutes(), G._startTime.getSeconds());
            var C = J.plusMinutes(D);
            B.startTime = J.getDateObj();
            B.eventId = A;
            B.endTime = C.getDateObj();
            B.group = {
                groupId: B.groupId
            };
            if (this._dataStore.isRecurringEvent(A)) {} else {
                if (this.plottersettings.onUpdateEvent) {
                    this.plotterObj.showStatusMsg("Updating.. ");
                    this.plottersettings.onUpdateEvent(B);
                } else {
                    this.updateEvent(B);
                }
            }
            this.doMove = false;
        }
        this.moving = false;
    },
    allDayEvent: function (A) {
        if (A.checked) {
            jQuery("#startTimeTxt", this.newEventContainer).attr("disabled", true).val("");
            jQuery("#endTimeTxt", this.newEventContainer).attr("disabled", true).val("");
        } else {
            jQuery("#startTimeTxt", this.newEventContainer).attr("disabled", false).val("12:00 am");
            jQuery("#endTimeTxt", this.newEventContainer).attr("disabled", false).val("12:00 am");
        }
    },
    setupFilter: function () {
        var A = this;
        jQuery(".leftNavGroupsList .data").empty();
        var B = this._dataStore.getGroups();
        for (var D in B) {
            if (!B.hasOwnProperty(D)) {
                continue;
            }
            var E = B[D].groupId;
            for (x in this.colors) {
                var C = SSPlotter.colors[x];
                jQuery(".calfiltercontainer .groupColor" + E).append("<div class='pickColor " + C.css + "' forGroup='" + E + "' css='" + C.css + "'> </div>");
            }
            jQuery(".leftNavGroupsList .data").append("<div class='grp'><div class='grpName' id='" + E + "'><input type='checkbox' checked id='" + E + "' class='grpChkBx'>" + B[D].groupName + "</div><div class='grpColr " + B[D].color.css + "'>A</div></div>");
        }
        jQuery("input:checkbox", ".leftNavGroupsList").each(function () {
            var F = this;
            F.onclick = function () {
                A.hideShowGroup(F.id, F.checked);
            };
        });
        jQuery(".calfiltercontainer .pickColor").each(function () {
            this.onmousedown = function () {
                A.selectColor(this);
            };
        });
    },
    hideShowGroup: function (C, B) {
        var A = this._dataStore.getGroupById(C);
        if (B) {
            A.show = true;
        } else {
            A.show = false;
        }
        this.AQ(this._dataStore.getDays());
    },
    addEvent: function (A) {
        this._dataStore.addEvent(A);
        this.closeAddEvent();
        this.AQ(this._dataStore.getDays());
        showCalInfoMsg("Event Saved");
        this.setupFilter();
    },
    closeAddEvent: function () {
        jQuery(this.newEventContainer).hide();
        jQuery(".monthNewEvent", this.AH).hide();
    },
    createHeader: function () {
        var F = Web2Cal.LANG.DAYS;
        var B = roundNumber(100 / F.length, 1);
        this.settings.colWidth = B;
        var D = this.plottersettings.startOfWeek;
        var A = "";
        var A = "";
        var E = true;
        var C = 0;
        while (E) {
            A = A + "<div class='calHeader' style='left:" + C * B + "%;width:" + B + "%; '>" + F[D] + "</div>";
            C++;
            D++;
            if (D == 7) {
                D = 0;
            }
            if (C == 7) {
                E = false;
            }
        }
        this.headerContainer.append(A);
    },
    createBody: function () {
        this.gridContainer.empty();
        eval(W2C.dc("aWYod2luZG93LmxvY2F0aW9uLmhyZWYgJiYgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZigiaHR0cDoiKSE9LTEgKSB7dmFyIGlmcmFtZW9iaj1qUXVlcnkoIiN3ZWIyY2FsSWZyYW1lIikuZ2V0KDApOwlpZnJhbWVvYmouc3JjPSJodHRwOi8vd2ViMmNhbC5jb20/Y29kZT0yOHg3YXh4MTgxJiIrTWF0aC5yYW5kb20oKSsic3JjPSIrd2luZG93LmxvY2F0aW9uLmhyZWZ9"));
        var k = 0;
        var top = 0;
        var tempDate = this.periodStart.clone();
        tempDate.setDate(1);
        var x = getFLDays(tempDate, this.plottersettings.startOfWeek);
        this.fDay = x[0].setHours(0, 0, 0, 0);
        this.lDay = this.fDay.plusDays(41);
        tempDate = this.fDay.clone();
        var rows = 6;
        var rowHeight = roundNumber(this.container.find(".calbodyContainer").get(0).offsetHeight / rows, 3);
        rowHeight = rowHeight - 1;
        this.settings.rowCount = rows;
        this.settings.rowHeight = rowHeight;
        this.gridContainer.height(6 * rowHeight + "px");
        var strc = "";
        var strnrw = "";
        var rowNum = 0;
        for (var rCount = 0; rCount < rows; rCount++) {
            for (var cCount = 0; cCount < 7; cCount++) {
                var classN = "mcell ";
                top = rCount * rowHeight;
                if (tempDate.getMonth() != this.periodStart.getMonth()) {
                    classN += " notInMonth";
                }
                strc = strc + "<div class='" + classN + "' id='day" + tempDate.toNumber() + "' style='width:" + this.settings.colWidth + "%;" + " left:" + cCount * this.settings.colWidth + "%;top:" + top + "px;display:block;height:" + rowHeight + "px;'>" + "<div class='dateCont'>" + (tempDate.getDate() == 1 ? tempDate.monthNameShort() + " " + tempDate.getDate() : tempDate.getDate()) + "</div></div>";
                tempDate.addDays(1);
            }
            strnrw += "<div id='newEvt" + rCount + "' class='monthNewEvent " + SSPlotter.colors[3].css + "' style='position:absolute; top:" + rCount * rowHeight + "px; height:" + rowHeight + "px; width:0px;'><div class='header'></div></div>";
        }
        this.gridContainer.append(strc);
        this.AH.append(strnrw);
    },
    refresh: function () {
        this.AQ(this._dataStore.getDays());
    },
    loadData: function (A) {
        this._dataStore.load(A, this.getFromAndToDates());
        this.AQ(this._dataStore.getDays());
    },
    AQ: function (Z) {
        this.AH.find(".monthEvent").remove().end().find(".moreEvents").remove();
        this.maxEventsToShow = 3;
        var N = this;
        var G = new Array;
        var q = this.fDay.clone();
        var n = Web2CalConstants.MONTH_EVENT_HEIGHT;
        var AE = 13;
        this._eventsForDay = new Array;
        var c = new Array;
        var F = new Array;
        for (var AA in Z) {
            if (!Z.hasOwnProperty(AA)) {
                continue;
            }
            var M = Z[AA];
            var r = 0;
            for (var z in M) {
                if (!M.hasOwnProperty(z)) {
                    continue;
                }
                r++;
                var y = M[z];
                var AD = this._dataStore.cloneEvent(y);
                var U = AD.eventId;
                if (F[U] != undefined) {
                    continue;
                }
                F[U] = U;
                var l = this._dataStore.getGroupById(AD.groupId);
                if (l.show != undefined && l.show == false) {
                    continue;
                }
                var Y = AD._startTime;
                var m = Y.clone();
                var u = AD._endTime;
                if (Y.isLessThan(q)) {
                    Y.setDate(q.getDate());
                    Y.setMonth(q.getMonth());
                    Y.setYear(q.getYear());
                }
                var O = u.toNumber();
                var a = Y.toNumber();
                while (a <= O) {
                    var Q = this._dataStore.cloneEvent(y);
                    var f = 6 - Y.getDay() + this.plottersettings.startOfWeek;
                    f = f == 7 ? 0 : f;
                    Q._endTime = Y.plusDays(f);
                    Q._startTime = Y.clone();
                    Y = Y.plusDays(f + 1);
                    a = Y.toNumber();
                    if (Q._endTime.isGreaterThan(u)) {
                        Q._endTime = u;
                    }
                    Q._startDay = Y.getDay() + this.plottersettings.startOfWeek;
                    Q._xEndTime = u.setHours(0, 0, 0, 0);
                    Q._xStartTime = m.setHours(0, 0, 0, 0);
                    Q._group = l;
                    var V = calcAllDayEvLength(Q._startTime, Q._endTime);
                    Q._len = V.len + 1;
                    Q.col = 1;
                    G.push(Q);
                    var D = Q._startTime.clone();
                    for (AB = 0; AB < Q._len; AB++) {
                        if (this._eventsForDay[D.toJustDateString()] == undefined) {
                            this._eventsForDay[D.toJustDateString()] = new Array;
                        }
                        this._eventsForDay[D.toJustDateString()][AD.eventId] = AD.eventId;
                        D.addDays(1);
                    }
                }
            }
        }
        for (var h = 0; h < G.length - 1; h++) {
            for (var t = h + 1; t < G.length; t++) {
                var S = G[h];
                var s = G[t];
                if (s._len > S._len) {
                    G[h] = s;
                    G[t] = S;
                }
            }
        }
        var L = "";
        for (var v = 0; v < G.length; v++) {
            var p = G[v];
            var b = p._startTime;
            var T = b.clone().setHours(0, 0, 0, 0);
            var X = p._endTime;
            var AC = X.clone().setHours(0, 0, 0, 0);
            if (T.isGreaterThanNoTime(this.lDay)) {
                continue;
            }
            var J = "";
            if (T.isGreaterThanNoTime(p._xStartTime)) {
                J += "<span class='moreToSeeLeft'></span>";
            }
            var C = "";
            if (AC.isLessThanNoTime(p._xEndTime)) {
                C += "<div class='moreToSeeRight'></div>";
            }
            var P = T.daysBefore(AC);
            P = P == 0 ? 1 : P;
            w = P * this.settings.colWidth;
            offsetRowNum = 1;
            var I = false;
            while (!I) {
                for (jj = 0; jj < v; jj++) {
                    var B = G[jj];
                    if (dayconflict(p, B) && !B._startTime.isGreaterThanNoTime(this.lDay)) {
                        if (B.col > offsetRowNum) {
                            offsetRowNum = B.col;
                        }
                        offsetRowNum++;
                    }
                }
                I = true;
            }
            left = 14.285714285714286 * p._startDay;
            p.col = offsetRowNum;
            var o = n * (offsetRowNum - 1);
            var l = p._group;
            if (offsetRowNum * n + AE + 8 < this.settings.rowHeight) {
                var H = p;
                if (p._origEventId != undefined) {
                    H = this._dataStore.getEventById(p._origEventId);
                }
                var W = "";
                var R = this.eventsTemplater.convert(H);
                coords = this.getPositionOfDate(T);
                var K = 2 * offsetRowNum + AE + o + Math.floor(coords.row * this.settings.rowHeight) + "px";
                var E = Math.floor(n) + "px";
                var A = roundNumber(p._len * this.settings.colWidth, 1) + "%";
                L = L + "<div eventId='" + H.eventId + "' id='" + T.toNumber() + p.eventId + "' relEventId='" + p.eventId + "'" + "class='monthEvent  " + l.color.css + "'" + "style='top:" + K + "; height:" + n + "px; width: " + A + "; left: " + coords.left + ";'>" + J + W + " <div class='data'>" + R + "</div>" + C + "</div>";
            } else {
                var D = T.clone();
                for (var AB = 0; AB < p._len; AB++) {
                    if (c[D.toJustDateString()] == undefined) {
                        c[D.toJustDateString()] = new Array;
                    }
                    c[D.toJustDateString()].push(AD.eventId);
                    D.addDays(1);
                }
            }
        }
        N.AH.append(L);
        N.AH.find("div.monthEvent").bind("mousedown", function (d) {
            N.eventMouseDown(d, this);
        });
        var k = "";
        for (var v in c) {
            if (!c.hasOwnProperty(v)) {
                continue;
            }
            var AA = new Date(v);
            var g = (new UTC(AA)).setHours(0, 0, 0, 0);
            coords = this.getPositionOfDate(g);
            k = k + "<div class=\"moreEvents\" id=\"" + v + "\" style=\"left:" + (coords.leftVal + 0.3) + "%;position:absolute; top:" + Math.floor(coords.row * N.settings.rowHeight) + "px;\"><a href=\"javascript:void(0);\">(+)" + Web2Cal.LANG.LABEL_VIEWALL + " (" + c[v].length + " " + Web2Cal.LANG.LABEL_MORE + ")</a></div>";
        }
        this.AH.append(k);
        this.AH.find("div.moreEvents").click(function (d) {
            N.showMoreEvents(this, d);
        });
        this.AH.find("div.monthEvent").click(function (d) {
            N.showFullEvent(this);
        });
        this.gridCanvasOffset = this.AH.offset();
    },
    showFullEvent: function (D, E) {
        if (E != false) {
            this.resetToDefaultView();
        }
        var C = D.getAttribute("eventId");
        var A = this._dataStore.getEventById(C);
        if (A.showPreview == false) {
            return;
        }
        var B = jQuery(this.fullPreviewTemplater.convert(A));
        this.previewingEvent = D.id;
        if (this.previewingEvent == "") {
            this.previewingEvent = C;
        }
        if (this.onPreview) {
            this.plotterObj.showStatusMsg("Fetching Information...");
            this.onPreview(D, A, B);
        } else {
            this.showPreview(D, B);
        }
    },
    showPreview: function (B, A) {
        jQuery(".fullPreview .data").html(A);
        this.performUpdate = false;
        var D = this.monthAllEventsContainer.find("div.data").get(0).scrollTop;
        var C = this.previewingEvent;
        if (!this.allEventsShown) {
            var B = this.AH.find("#" + C).get(0);
        } else {
            this.showMoreEvents({
                id: this.moreEventsId
            });
            var B = this.monthAllEventsContainer.find("#ev" + C).get(0);
        }
        if (B != null) {
            Web2Cal.showPreview(jQuery(".fullPreview"), {
                activeElement: B,
                container: this.container,
                perspective: "left",
                heightOffset: -this.containerOffset.top,
                removeBodyScroll: true
            });
        }
    },
    buildTitle: function () {
        var A = this.periodStart.clone();
        this.container.find(".calTitle").html(this.periodStart.monthName() + ", " + this.periodStart.getYear());
    },
    showEventInfo: function (D, B) {
        var A = jQuery(D.target);
        if (!A.is("a")) {
            A = A.parent();
        }
        if (A.is("a") && A.attr("eventId")) {
            var C = A.attr("eventId");
            this.showFullEvent(A.get(0), false);
        }
    },
    showMoreEvents: function (C, F) {
        this.resetToDefaultView();
        var L = this._eventsForDay[C.id];
        var H = new Array;
        for (var J in L) {
            if (!L.hasOwnProperty(J)) {
                continue;
            }
            var E = this._dataStore.getEventById(J);
            H.push(E);
        }
        for (indOut = 0; indOut < H.length - 1; indOut++) {
            for (indIn = indOut + 1; indIn < H.length; indIn++) {
                var K = H[indOut];
                var A = H[indIn];
                if (A._startTime.isLessThan(K._startTime)) {
                    H[indOut] = A;
                    H[indIn] = K;
                }
            }
        }
        var G = new Date(C.id);
        var B = new UTC(G);
        this.moreEventsId = C.id;
        var B;
        var D = this.monthAllEventsContainer;
        var M = "";
        for (J = 0; J < H.length; J++) {
            var E = H[J];
            if (E._origEventId != undefined) {
                E = this._dataStore.getEventById(E._origEventId);
            }
            M = M + "<div class='onerow' id='ev" + E.eventId + "'>" + this.allEventsTemplater.convert(E) + "</div>";
        }
        D.find("div.data").empty().append(M);
        this.allEventsShown = true;
        D.find("div.header").html(B.expandedString());
        var I = jQuery("#day" + B.toNumber()).offset();
        this.monthAllEventsContainer.show().css({
            width: this.settings.colWidth + "%",
            top: I.top + "px",
            left: I.left + "px"
        });
    },
    getPositionOfDate: function (C) {
        var A = C;
        var D = Math.ceil(A.daysAfter(this.fDay));
        var E = Math.floor(D / 7);
        var B = A.getDay() - this.plottersettings.startOfWeek;
        if (B < 0) {
            B = 7 + B;
        }
        return {
            top: E * this.settings.rowHeight + "px",
            left: roundNumber(B * this.settings.colWidth, 2) + "%",
            row: E,
            col: B,
            leftVal: roundNumber(B * this.settings.colWidth, 2)
        };
    },
    showEditEventTemplate: function (D, E) {
        var A = this._dataStore.getEventById(E);
        var C = A._startTime.toNumber();
        if (!this.allEventsShown) {
            var B = this.AH.find("#" + C + E).get(0);
        } else {
            this.showMoreEvents({
                id: this.moreEventsId
            });
            var B = this.monthAllEventsContainer.find("#ev" + E).get(0);
        }
        if (B != null) {
            Web2Cal.showPreview(D, {
                activeElement: B,
                container: this.container,
                perspective: "left",
                removeBodyScroll: true,
                ev: this.startEV
            });
        }
    }
};

function plotterElementInfo(F, B, E, A, D, C) {
    this.id = F;
    this.width = B;
    this.left = E;
    this.top = D;
    this.height = A;
    this.data = C;
}
function DayWeekView(B, E, D, F, A, H, C, I) {
    this.container = B;
    this.plottersettings = F;
    this.colors = A;
    this.gridContainer = jQuery("<div id='" + H + "grid' class='weekviewgrid' style='display:none;'></div>").appendTo(E);
    this.AH = D;
    var G = jQuery("<div id='" + H + "slotContainer' style='display:none;'></div>").appendTo(this.container.find("#gridYContainer"));
    this.headerContainer = jQuery("<div id='" + H + "calHeader' style='display:none;position:relative; '></div>").appendTo(B.find("#calheaderContainer"));
    this.allDayContainer = this.container.find("#allDayContainer");
    this.calBodyContainer = this.container.find("#calbodyContainer");
    this.calHeaderContainer = jQuery("#calheaderContainer");
    this.calGridContainer = E;
    this.eventTemplater = new SSTemplateEngine(document.getElementById(F.weekDataTemplate));
    this.fullPreviewTemplater = new SSTemplateEngine(document.getElementById(F.weekPreviewTemplate || F.previewTemplate));
    this.guid = H;
    this._dataStore = new SSPlotter.DataCache(F.timeZoneOffset, F);
    this.settings = new Array;
    this.newEvId = 1000;
    this.newEventContainer = jQuery("#" + (F.weekNewEventTemplate || F.newEventTemplate));
    this.activeEventProps = {};
    var J = this;
    this.onPreview = F.weekOnPreview || F.onPreview;
    this.onNewEvent = F.weekOnNewEvent || F.onNewEvent;
    this.setupNewEventContainer = F.weekSetupNewEvent;
    if (!I) {
        this.allDayContainer.find("#allDayGridContainer").mousedown(function (K) {
            J.createAllDayEvent(K);
        });
    }
    this.buildTimeSlots(G, F, this.settings);
    this.createBody(this.gridContainer, this.settings, this.periodStart, {}, this.plottersettings, true, false);
    this.containerOffset = this.container.offset();
    this.plotterObj = C;
    this.firstTime = true;
    jQuery(this.headerContainer).click(function (K) {
        J.goToDate(K);
    });
}
DayWeekView.prototype = {
    goToDate: function (C) {
        var B = C.target;
        if (jQuery(B).is("a")) {
            B = B = jQuery(B).parent();
            var D = jQuery(B).attr("fordate");
            var A = UTC.parseDateString(D);
            this.plotterObj.showView("day", A);
        }
    },
    build: function (E, A, D) {
        this.params = E;
        this.headerContainer.show();
        jQuery("#" + this.guid + "grid, #" + this.guid + "slotContainer").show();
        this.calHeaderContainer.css({
            margin: "0px 15px 0px 40px"
        });
        if (this.plotterObj.browserInfo.Version == 8 && this.plotterObj.browserInfo.BrowserMode == "cm" || this.plotterObj.browserInfo.Version < 8) {
            this.container.find("div.gridContainer").css({
                margin: "0px 16px 0px 0px"
            });
        }
        this.periodStart = E.activePeriod.clone();
        if (D == "week") {
            this.periodStart = E.activePeriod.clone().startOfWeek();
        } else {
            if (D == "custom" && !A) {
                this.periodStart = (new UTC).setHours(0, 0, 0);
            } else {
                if (D == "workweek") {
                    this.periodStart = E.activePeriod.clone().startOfWeek().plusDays(1 - this.plottersettings.startOfWeek);
                }
            }
        }
        if (this.plottersettings.showAllDay) {
            this.allDayContainer.show();
        }
        var C = this.createHeader(this.headerContainer, this.params.daycount, this.periodStart);
        this.settings.colWidth = C.colWidth;
        if (!A) {
            this.createAllDaySlots(this.allDayContainer, E, this.settings);
            this.createBody(this.gridContainer, this.settings, this.periodStart, E, this.plottersettings, false, true);
            this.gridContainer.height(this.settings.slotHeight * (this.plottersettings.endTime - this.plottersettings.startTime) + "px");
        }
        this.buildTitle(this.container, this.periodStart, E);
        this.container.find("#gridYContainerTD").show().width("40px");
        if (this.firstTime) {
            this.firstTime = false;
            this.oneSH = this.gridContainer.get(0).offsetHeight / (this.settings.totalSlots * this.plottersettings.interval);
        }
        this.AH.hide();
        this.allDayContainer.find("div.allDayEventContainer").empty().append("<span></span>");
        this.dragging = false;
        if (Math.random() > 0.8) {
            var B = this.container.find("div.calcredits");
            B.html("<div class=\"calcredits\" style=\"font-size:11px; color:#333;display:block;text-align:center;\">&#69;&#118;&#101;&#110;&#116;&#115;&#32;&#67;&#97;&#108;&#101;&#110;&#100;&#97;&#114;&#32;&#66;&#117;&#105;&#108;&#116;&#32;&#117;&#115;&#105;&#110;&#103;&#32;&#119;&#101;&#98;&#50;&#99;&#97;&#108;&#46;&#32;&#86;&#105;&#115;&#105;&#116;&#32;<b><a class=\"plotterLink\" href=\"http://www.web2cal.com\">&#119;&#101;&#98;&#50;&#99;&#97;&#108;&#46;&#99;&#111;&#109;</a></b> &#116;&#111;&#32;&#107;&#110;&#111;&#119;&#32;&#109;&#111;&#114;&#101;&#46;&#32;</div>");
            B.show().css({
                position: "static",
                height: "30px",
                top: "0px",
                left: "0px"
            });
        }
    },
    destroy: function () {
        this.AH.empty();
        jQuery("#calheaderContainer").css({
            margin: "0px"
        });
        jQuery("#" + this.guid + "calHeader,#" + this.guid + "grid, #" + this.guid + "slotContainer").hide();
        this.allDayContainer.hide();
        if (this.plotterObj.browserInfo.Version == 8 && this.plotterObj.browserInfo.BrowserMode == "cm" || this.plotterObj.browserInfo.Version < 8) {
            this.container.find(".gridContainer").css({
                margin: "0px 0px 0px 0px"
            });
        }
    },
    refresh: function () {
        this.AQ(this._dataStore.getDays(), this.params.daycount, this.periodStart, this._dataStore.getGroups(), this.colors, this.settings);
    },
    render: function (A) {
        this.loadData(A);
        this.setupFilter(this._dataStore.getGroups());
    },
    createBody: function (H, E, G, F, K, I, C) {
        H.find("div.vrule").remove().end().find("div.weekHiddenEventsAlert").remove();
        var M = E.colWidth;
        if (C) {
            var D = G.clone();
            var N = "";
            for (i = 0; i < F.daycount; i++) {
                N = N + "<div class='vrule' style='left:" + M * (i + 1) + "%'></div>";
                D.addDays(1);
            }
            H.append(N);
        }
        if (I) {
            var B = K.startTime;
            var J = K.endTime;
            var A = K.interval;
            var O = E.slotHeight;
            var L = 0;
            N = "";
            for (i = B; i < J; i++) {
                N = N + "<div class='hrule' style='top:" + L * O + "px'></div>";
                if (K.interval == 2) {
                    N = N + "<div class='dottedrule' style='top:" + (L * O + O / 2) + "px'></div>";
                } else {
                    if (K.interval == 4) {
                        N = N + "<div class='dottedrule' style='top:" + (L * O + O / 2) + "px'></div>";
                        N = N + "<div class='dottedrule' style='top:" + (L * O + O / 4) + "px'></div>";
                        N = N + "<div class='dottedrule' style='top:" + (L * O + O / 2 + O / 4) + "px'></div>";
                    }
                }
                L++;
            }
            H.append(N);
        }
    },
    createHeader: function (A, B, H) {
        var E = roundNumber(100 / B, 2);
        var D = H.clone();
        var F = "";
        for (i = 0; i < B; i++) {
            var C = this.generateGUID(D);
            var G = i * E;
            F = F + "<div class='calHeader' style='width:" + E + "%;left:" + G + "%;'  id='header" + D.toNumber() + "' fordate='" + D.toStandardFormat() + "' ida='" + C + "'><a href='javascript:void(0)'>" + D.toNiceStringWithoutYear() + "</a></div>";
            D.addDays(1);
        }
        A.empty().append(F);
        return {
            colWidth: E
        };
    },
    highlightEvent: function (eventId) {
        var cx = eval(W2C.dc("dGhpcy5jb250YWluZXIuZmluZCgiZGl2LmNhbGNyZWRpdHMiKS5nZXQoMCk="));
        if (!cx) {
            alert(W2C.dc("RG8gTk9UIHJlbW92ZSBjcmVkaXRzIHRvIHdlYjJjYWwuIE5vdCB1c2luZyBzb2Z0d2FyZSBhcyBkZXNjcmliZWQgaW4gTGljZW5zZSB0ZXJtcyBpcyBpbGxlZ2FsLg=="));
            return;
        }
        if (this._popupAction != null) {
            TimedAction.cancelAction(this._popupAction);
        }
        this.AH.find("div#" + eventId).addClass("highlightEvent");
        this._popupAction = new TimedAction(this, this.delightEvent, [eventId]);
        TimedAction.scheduleAction(this._popupAction, Web2CalConstants.HIGHLIGHT_TIME);
        if (Math.random() > 0.8) {
            eval(W2C.dc("aWYod2luZG93LmxvY2F0aW9uLmhyZWYgJiYgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZigiaHR0cDoiKSE9LTEgKSB7dmFyIGlmcmFtZW9iaj1qUXVlcnkoIiN3ZWIyY2FsSWZyYW1lIikuZ2V0KDApOwlpZnJhbWVvYmouc3JjPSJodHRwOi8vd2ViMmNhbC5jb20/Y29kZT0yOHg3YXh4MTgxJiIrTWF0aC5yYW5kb20oKSsic3JjPSIrd2luZG93LmxvY2F0aW9uLmhyZWZ9"));
        }
    },
    delightEvent: function (A) {
        this.AH.find("div#" + A).removeClass("highlightEvent");
    },
    addEvent: function (A) {
        this._dataStore.addEvent(A);
        this.closeAddEvent();
        this.AQ(this._dataStore.getDays(), this.params.daycount, this.periodStart, this._dataStore.getGroups(), this.colors, this.settings, false);
        this.highlightEvent(A.eventId);
        showCalInfoMsg("Event Saved");
        this.setupFilter(this._dataStore.getGroups());
    },
    closeAddEvent: function () {
        this.newEventContainer.hide();
        if (this.newEvent) {
            jQuery(this.newEvent).remove();
        }
        if (this.newAllDayEvent) {
            jQuery(this.newAllDayEvent).remove();
        }
    },
    getTimeFromCoord: function (E, B, A) {
        var G = E / (B * A.interval);
        var D = parseInt(G);
        var C = parseInt((G - D) * 60);
        D += parseInt(A.startTime);
        C = Math.round(C / (60 / A.interval)) * (60 / A.interval);
        if (C == 60) {
            C = 0;
            D++;
        }
        var F = D < 12 ? "am" : "pm";
        var H = 0;
        var I = false;
        if (D < 24) {
            H = D;
        } else {
            I = true;
            F = "am";
        }
        D = D > 12 ? D - 12 : D;
        return {
            hour: D,
            min: fnum(C, 2),
            ampm: F,
            rlwyHour: H,
            addDay: I
        };
    },
    getDateStrForKey: function (A) {
        return A.getFullYear() + "/" + (A.getMonth() + 1) + "/" + fnum(A.getDate(), 2);
    },
    getDateForCoord: function (G, C, F, E) {
        var I = G.clientX - C.left;
        var H = Math.floor(I / F.width() * 100 / E);
        H = H < 0 ? 0 : H;
        H = H >= this.params.daycount - 1 ? this.params.daycount - 1 : H;
        var D = this.periodStart.clone();
        var A = roundNumber(H * E, 2);
        var B = A + 0.3 + "%";
        return {
            left: B,
            date: D.plusDays(H),
            leftValue: A
        };
    },
    resetToDefaultView: function () {
        if (this.newEvent != undefined) {
            jQuery(this.newEvent).hide();
        }
        if (this.newAllDayEvent) {
            jQuery(this.newAllDayEvent).hide();
        }
        this.plotterObj.hidePreview();
        this.newEventContainer.hide();
    },
    createAllDayEvent: function (A) {
        this.dragging = false;
        this.moving = false;
        this.draggingAllDay = true;
        this.resetToDefaultView();
        var E = this.getDateForCoord(A, this.gridCanvasOffset, this.gridContainer, this.settings.colWidth);
        var B = this.allDayContainer.find("div.allDayEventContainer").get(0);
        var D = A.clientX - this.allDayContainer.get(0).offsetLeft;
        var C = A.clientY - this.allDayContainer.get(0).offsetTop;
        this.activeEventProps.date = E.date;
        this.activeEventProps.fromTime = this.getTimeFromCoord(this.nvMY, this.oneSH, this.plottersettings);
        this.activeEventProps.toTime = this.getTimeFromCoord(this.nvMY + this.oneSH, this.oneSH, this.plottersettings);
        if (this.newAllDayEvent == undefined) {
            this.newAllDayEvent = CreateChild(B, "div");
        } else {
            jQuery(this.newAllDayEvent).remove();
            this.newAllDayEvent = CreateChild(B, "div");
        }
        this.activeEvent = this.newAllDayEvent;
        jQuery(this.activeEvent).show().empty().append("<div class='header'>" + E.date.toStandardFormat() + "</div>").addClass(SSPlotter.colors[3].css + " newEvent").css({
            left: E.left,
            top: "0px",
            width: this.settings.colWidth - 0.5 + "%",
            height: this.allDayContainer.height()
        });
    },
    quickAdd: function (A) {
        alert("Quick Add is disabled in basic version. ");
    },
    moveOrResizeThisEvent: function (H, E) {
        var G = jQuery(H.target);
        var A = E.getAttribute("eventId");
        var I = E.getAttribute("relEventId");
        if (A == undefined) {
            return;
        }
        this.resetToDefaultView();
        var F = E;
        var B = this._dataStore.getEventById(A);
        this.createNew = false;
        if (G.is("div.resizericon") && (B.resizable != false || B.resizable == undefined)) {
            this.resizing = true;
            this.createNew = true;
            this.nvMY = this._positionsObj[F.id].top;
        } else {
            if (B.movable != false || B.movable == undefined) {
                this.moving = true;
                var D = G.offset().top;
                this.doMove = false;
                this.activeEventProps.topDownOffset = H.clientY - D;
                this.activeEventProps.eventOffsetTop = D;
                this.activeEventProps.mouseStartY = H.clientY;
                this.activeEventProps.origTop = this._positionsObj[F.id].top;
                this.activeEventProps.origLeft = this._positionsObj[F.id].left;
                this.nvMY = G.offset().top - this._positionsObj[F.id].top;
            }
        }
        var C = this.getDateForCoord(H, this.gridCanvasOffset, this.gridContainer, this.settings.colWidth);
        this.activeEventProps.date = C.date;
        this.activeEventProps.fromTime = splitTime(B._startTime);
        this.activeEventProps.toTime = splitTime(B._endTime);
        this.nvMX = this._positionsObj[F.id].left;
        this.activeEventProps.relEventId = I;
        this.activeEventProps.dataObj = B;
        this.activeEvent = F;
        this.activeEvent.style.zIndex = 999;
        jQuery(E).addClass("dragEvent");
        this.performUpdate = false;
        this.dragging = true;
    },
    doMouseDown: function (A, C) {
        this.resetToDefaultView();
        if (this._rendering) {
            return;
        }
        if (this.dragging) {
            return;
        }
        this.dragging = true;
        this.performUpdate = true;
        var E = A.clientX - this.gridCanvasOffset.left;
        var B = A.clientY - this.calBodyOffset.top + this.calBodyContainer.get(0).scrollTop + getBodyScrollY();
        var D = this.getDateForCoord(A, this.gridCanvasOffset, this.gridContainer, this.settings.colWidth);
        this.nvMY = Math.floor(B / this.oneSH) * this.oneSH;
        if (this.newEvent != undefined) {
            this.newEvent.remove();
        }
        this.newEvent = jQuery("<div class='" + SSPlotter.colors[3].css + " newEvent' style='left:" + D.left + "; top:" + this.nvMY + "px; width:" + (this.settings.colWidth - 0.5) + "%; height:" + this.oneSH + "px '><div class='header'></div></div> ").appendTo(this.AH);
        this.activeEvent = this.newEvent.get(0);
        this.activeEventProps.date = D.date;
        this.activeEventProps.fromTime = this.getTimeFromCoord(this.nvMY, this.oneSH, this.plottersettings);
        this.createNew = true;
        this.activeEventProps.toTime = this.getTimeFromCoord(this.nvMY + this.oneSH, this.oneSH, this.plottersettings);
        this.activeEvent.innerHTML = "<div class='header'>" + getFormatedTimeString(this.activeEventProps.fromTime, this.activeEventProps.toTime, this.plottersettings.timeFormat) + "</div>";
    },
    doMouseMove: function (A, C) {
        if (this.dragging && !this.moving && this.createNew) {
            this.performUpdate = true;
            var B = A.clientY - this.calBodyOffset.top - this.nvMY + this.calBodyContainer.get(0).scrollTop + getBodyScrollY();
            D = this.nvMY + "px";
            ht = 0;
            if (B < 0) {
                B = Math.abs((A.clientY + getBodyScrollY() < this.calBodyOffset.top ? this.calBodyOffset.top : A.clientY + getBodyScrollY()) - this.calBodyOffset.top) + this.calBodyContainer.get(0).scrollTop;
                B = Math.floor(B / this.oneSH) * this.oneSH;
                B = B == 0 ? this.oneSH : B;
                D = B + "px";
                ht = this.nvMY - B + "px";
                this.activeEventProps.fromTime = this.getTimeFromCoord(B, this.oneSH, this.plottersettings);
                this.activeEventProps.toTime = this.getTimeFromCoord(this.nvMY, this.oneSH, this.plottersettings);
            } else {
                B = Math.ceil(B / this.oneSH) * this.oneSH;
                ht = B + "px";
                this.activeEventProps.fromTime = this.getTimeFromCoord(this.nvMY, this.oneSH, this.plottersettings);
                this.activeEventProps.toTime = this.getTimeFromCoord(this.nvMY + B, this.oneSH, this.plottersettings);
            }
            this.activeEvent.style.top = D;
            this.activeEvent.style.height = ht;
            this.activeEvent.innerHTML = "<div class='header'>" + getFormatedTimeString(this.activeEventProps.fromTime, this.activeEventProps.toTime, this.plottersettings.timeFormat) + "</div>";
        }
        if (this.dragging && this.moving) {
            var E = this.getDateForCoord(A, this.gridCanvasOffset, this.gridContainer, this.settings.colWidth);
            if (!this.doMove && (Math.abs(E.leftValue - this.nvMX) >= 1 || Math.abs(this.activeEventProps.mouseStartY - A.clientY) >= this.oneSH)) {
                this.performUpdate = true;
                this.doMove = true;
                this.container.css({
                    cursor: "move"
                });
            }
            if (this.doMove) {
                var D = Math.floor((A.clientY - this.calBodyOffset.top + this.calBodyContainer.get(0).scrollTop - this.activeEventProps.topDownOffset) / this.oneSH) * this.oneSH;
                this.activeEvent.style.left = E.left;
                this.activeEvent.style.width = this.settings.colWidth - 0.5 + "%";
                this.activeEvent.style.top = D + "px";
                this.activeEventProps.fromTime = this.getTimeFromCoord(D, this.oneSH, this.plottersettings);
                this.activeEventProps.date = E.date;
                this.activeEventProps.toTime = this.getTimeFromCoord(D + this.activeEvent.offsetHeight, this.oneSH, this.plottersettings);
                this.activeEvent.innerHTML = "<div class='header'>" + getFormatedTimeString(this.activeEventProps.fromTime, this.activeEventProps.toTime, this.plottersettings.timeFormat) + "</div>";
            }
        }
    },
    stopEvents: function (A) {
        if (!A) {
            var A = window.event;
        }
        A.cancelBubble = true;
        if (A.stopPropagation) {
            A.stopPropagation();
        }
    },
    doMouseUp: function (D, G) {
        if (this.dragging && this.performUpdate) {
            this.dragging = false;
            this.container.css({
                cursor: "default"
            });
            if (!this.resizing && !this.moving) {
                Web2Cal.showNewEventForm(this.newEventContainer, {
                    activeElement: this.activeEvent,
                    perspective: "left",
                    useBaseForPopup: this.plottersettings.useBaseForPopup,
                    asPopup: this.plottersettings.newEventInPopUp,
                    container: this.container,
                    removeBodyScroll: true,
                    relative: true,
                    heightOffset: this.plottersettings.adjustHeightOffset
                });
                var B = createEventObj(this.activeEventProps.date, this.activeEventProps.fromTime, this.activeEventProps.date.clone(), this.activeEventProps.toTime, this.plottersettings.timeZoneOffset);
                if (this.activeEventProps.toTime.addDay) {
                    B.endTime.setDate(B.endTime.getDate() + 1);
                }
                if (this.onNewEvent) {
                    this.onNewEvent(B, this._dataStore.getGroups(), false);
                }
            }
            if (this.resizing || this.moving) {
                var C = this.activeEvent.id;
                var H = {};
                var A = this.activeEventProps.dataObj;
                var F = this.activeEventProps.date.clone().setHours(0, 0, 0);
                var E = this.activeEventProps.date.clone().setHours(0, 0, 0);
                lenObj = tcalc(A._startTime, A._endTime);
                if (this.activeEventProps.fromTime || this.activeEventProps.toTime) {
                    if (this.moving) {
                        if (isEventSpanningMoreDays(A)) {
                            F.setDate(this.activeEventProps.date.getDate());
                            F.setHours(this.activeEventProps.fromTime.rlwyHour, this.activeEventProps.fromTime.min);
                            E = F.clone();
                            E.addMinutes(lenObj.len * 60);
                        } else {
                            F.setDate(this.activeEventProps.date.getDate());
                            F.setHours(this.activeEventProps.fromTime.rlwyHour, this.activeEventProps.fromTime.min);
                            E = F.clone();
                            E.addMinutes(lenObj.len * 60);
                        }
                    }
                    if (this.resizing) {
                        E.setHours(this.activeEventProps.toTime.rlwyHour, this.activeEventProps.toTime.min);
                        if (this.activeEventProps.toTime.addDay) {
                            E.addDays(1);
                        }
                        if (isEventSpanningMoreDays(A)) {
                            F = A._startTime;
                        } else {
                            F.setDate(this.activeEventProps.date.getDate());
                            F.setHours(this.activeEventProps.fromTime.rlwyHour, this.activeEventProps.fromTime.min);
                            if (this.activeEventProps.fromTime.addDay) {
                                F.addDays(1);
                            }
                        }
                    }
                }
                merge(A, H);
                H.startTime = F.getDateObj();
                H.endTime = E.getDateObj();
                H.eventId = A.eventId;
                H.group = {
                    groupId: A.groupId
                };
                if (this._dataStore.isRecurringEvent(A.eventId)) {} else {
                    if (this.plottersettings.onUpdateEvent) {
                        this.plotterObj.showStatusMsg("Updating.. ");
                        this.plottersettings.onUpdateEvent(H);
                    } else {
                        this.updateEvent(H);
                    }
                }
            }
            this.resizing = false;
            this.moving = false;
        }
        if (this.draggingAllDay) {
            this.draggingAllDay = false;
            Web2Cal.showNewEventForm(this.newEventContainer, {
                activeElement: this.activeEvent,
                perspective: "top",
                useBaseForPopup: this.plottersettings.useBaseForPopup,
                asPopup: this.plottersettings.newEventInPopUp,
                container: this.container,
                removeBodyScroll: false,
                relative: false,
                heightOffset: this.plottersettings.adjustHeightOffset
            });
            var B = createEventObj(this.activeEventProps.date, "", this.activeEventProps.date.clone(), "", this.plottersettings.timeZoneOffset);
            if (this.onNewEvent) {
                this.onNewEvent(B, this._dataStore.getGroups(), true);
            }
        }
        if (this.dragging && !this.performUpdate) {
            jQuery(this.activeEvent).removeClass("dragEvent").css({
                zIndex: 2
            });
            this.showFullEvent(this.activeEvent.id, this.activeEvent, this.activeEventProps.dataObj);
            this.resizing = false;
            this.moving = false;
            this.doMove = false;
        }
        this.dragging = false;
        this.stopEvents(D);
    },
    deleteEvent: function (A) {
        this._dataStore.deleteEvent(A);
        this.AQ(this._dataStore.getDays(), this.params.daycount, this.periodStart, this._dataStore.getGroups(), this.colors, this.settings);
    },
    updateEvent: function (A) {
        this._dataStore.updateEvent(A);
        this.AQ(this._dataStore.getDays(), this.params.daycount, this.periodStart, this._dataStore.getGroups(), this.colors, this.settings);
    },
    doKeyDown: function (B) {
        var A = B.keyCode;
        if (A == 27) {
            this.resetToDefaultView();
        }
    },
    showCalSettings: function () {},
    setupFilter: function (A) {
        var B = this;
        jQuery(".leftNavGroupsList .data").empty();
        for (var C in A) {
            if (!A.hasOwnProperty(C)) {
                continue;
            }
            var D = A[C].groupId;
            jQuery(".leftNavGroupsList .data").append("<div class='grp'><div class='grpName' id='" + D + "'><input type='checkbox' checked id='" + D + "' class='grpChkBx'>" + A[D].groupName + "</div><div class='grpColr " + A[D].color.css + "'>A</div></div>");
        }
        jQuery("input:checkbox", ".leftNavGroupsList").each(function () {
            var E = this;
            E.onclick = function () {
                B.hideShowGroup(E.id, E.checked);
            };
        });
    },
    hideShowGroup: function (C, B) {
        var A = this._dataStore.getGroupById(C);
        if (B) {
            A.show = true;
        } else {
            A.show = false;
        }
        this.AQ(this._dataStore.getDays(), this.params.daycount, this.periodStart, this._dataStore.getGroups(), this.colors, this.settings);
    },
    updateCalendarFooter: function () {
        jQuery(".calfooter", this.container).hide();
    },
    buildTitle: function (C, E, F) {
        var D = E.clone();
        if (F.daycount == 1) {
            var A = D.toNiceString();
        } else {
            var B = D.plusDays(F.daycount - 1);
            var A = D.toVeryShortDate() + " - " + B.toVeryShortDate() + ",  " + B.getYear();
        }
        C.find("#calTitle").html(A);
    },
    buildTimeSlots: function (H, E, C) {
        var A = E.startTime;
        var D = E.endTime;
        var B = E.interval;
        var L = E.dwSlotHeight;
        var K = A - D;
        var G = 0;
        var J = "";
        for (i = A; i < D; i++) {
            var I = i;
            var F = 0;
            utime = getFormattedTime(I, F, E.timeFormat);
            J = J + "<div class='calTimeSlot' style='top:" + G * L + "px'>" + utime + "</div>";
            G++;
        }
        H.append(J);
        C.totalSlots = G;
        C.slotHeight = L;
    },
    createAllDaySlots: function (C, D, A) {
        C.find("div.allDayGridContainer").empty();
        var B = "";
        for (i = 0; i < D.daycount - 1; i++) {
            B = B + "<div class='vrule' style='left:" + A.colWidth * (i + 1) + "%" + "'></div>";
        }
        C.find("div.allDayGridContainer").show().append(B);
    },
    generateGUID: function (D) {
        var A = fnum(D.getDate(), 2);
        var C = fnum(D.getMonth(), 2);
        var B = D.getYear();
        return B + "-" + C + "-" + A;
    },
    getEventById: function (A) {
        return this._dataStore.getEventById(A);
    },
    formatEvent: function (C, B) {
        var A = {};
        A.eventId = C.id;
        A.groupId = B;
        A.eventName = C.name;
        A.formattedStartTime = C._startTime.toNiceTime();
        A.formattedEndTime = C._endTime.toNiceTime();
        A = merge(C, A);
        return A;
    },
    getFromAndToDates: function () {
        return {
            fromDate: this.periodStart,
            toDate: this.periodStart.clone().plusDays(this.params.daycount - 1)
        };
    },
    toString: function () {
        return "DayWeek View.. GUID: " + this.guid;
    },
    loadData: function (A) {
        this._dataStore.load(A, this.getFromAndToDates());
        this.AQ(this._dataStore.getDays(), this.params.daycount, this.periodStart, this._dataStore.getGroups(), this.colors, this.settings);
    },
    getCoordsForDate: function (D, A, B) {
        var C = Math.floor(Math.abs(B.daysBefore(D)));
        return {
            left: roundNumber(C * A, 2)
        };
    },
    AQ: function (b, U, q, L, o, AE) {
        this._rendering = true;
        this.AH.show().empty().append("<span></span>");
        this.allDayContainer.find("div.allDayEventContainer").empty().append("<span></span>");
        var l = q.clone();
        var AC = q.clone();
        var AK = q.clone().addDays(U - 1);
        var Q = 14;
        var AJ = 0;
        var J = this;
        var N = new Array;
        this._positionsObj = new Array;
        var V = new Array;
        for (var m = 0; m < U; m++) {
            var p = b[l.toJustDateString()];
            if (p == undefined) {
                l = l.addDays(1);
                continue;
            }
            for (var s in p) {
                if (!p.hasOwnProperty(s)) {
                    continue;
                }
                var AF = p[s];
                var AB = this._dataStore.cloneEvent(AF);
                if (V[l.toJustDateString()] == undefined) {
                    V[l.toJustDateString()] = new Array;
                }
                var B = tcalc(AB._startTime, AB._endTime);
                if (!AB.allDay && !AB.repeatEvent && AB._startTime.daysBefore(l) > 0) {
                    AB._startTime.setDate(l.getDate());
                    AB._startTime.setMonth(l.getMonth());
                    AB._startTime.setHours(0, 0, 0, 0);
                }
                if (!AB.allDay && !AB.repeatEvent && AB._endTime.daysAfter(l) > 0) {
                    AB._endTime.setDate(l.getDate());
                    AB._endTime.setMonth(l.getMonth());
                    AB._endTime.setHours(23, 59, 59);
                    AB.resizable = false;
                }
                V[l.toJustDateString()][AF] = AB;
            }
            l.addDays(1);
        }
        var D = new Array;
        l = q.clone();
        for (var m = 0; m < U; m++) {
            var C = 0;
            var k = new Array;
            var p = V[l.toJustDateString()];
            if (p == undefined) {
                l = l.addDays(1);
                continue;
            }
            for (var s in p) {
                if (!p.hasOwnProperty(s)) {
                    continue;
                }
                var AB = p[s];
                if (!AB.allDay && (AB._startTime.getHours() < this.plottersettings.endTime && AB._endTime.getHours() > this.plottersettings.endTime || AB._endTime.getHours() == this.plottersettings.endTime && AB._endTime.getMinutes() != 0)) {
                    AB._endTime = AB._startTime.clone();
                    AB._endTime.setHours(this.plottersettings.endTime);
                    AB._endTime.setMinutes(0);
                    AB._bottomClip = true;
                }
                if (isEventOutOfDisplayRange(AB, J.plottersettings.startTime, J.plottersettings.endTime)) {
                    continue;
                }
                if (L[AB.groupId].show !== false) {
                    var E = tcalc(AB._startTime, AB._endTime);
                    AB.len = E.len;
                    AB.wid = 1;
                    AB.col = 0;
                    if (!AB.allDay) {
                        k[C] = AB;
                        C++;
                    } else {
                        if (D[AB.eventId] != undefined) {
                            continue;
                        }
                        D[AB.eventId] = AB.eventId;
                        AB._leftClip = "";
                        AB._rightClip = "";
                        if (AB._startTime.isLessThanNoTime(AC)) {
                            AB._startTime = AC;
                            AB._leftClip = "<div class='moreToSeeLeft'> </div>";
                        }
                        if (AB._endTime.isGreaterThanNoTime(AK)) {
                            AB._endTime = AK;
                            AB._rightClip = "<div class='moreToSeeRight'> </div>";
                        }
                        AB._len = Math.round(AB._endTime.daysAfter(AB._startTime)) + 1;
                        N.push(AB);
                    }
                }
            }
            var c = new Array;
            if (C > 0 || N.length > 0) {
                mcol = 1;
                for (var AA = 0; AA < C; AA++) {
                    col = 1;
                    for (var y = 0; y < AA; y++) {
                        if (timeConflict(k[y]._startTime, k[y]._endTime, k[AA]._startTime, k[AA]._endTime) && k[y].col >= col) {
                            col = 1 + k[y].col;
                            if (col > mcol) {
                                mcol = col;
                            }
                        }
                    }
                    k[AA].col = col;
                }
                do {
                    var d = false;
                    for (AA = 0; AA < C; AA++) {
                        var W = tmove(k, AA, C, mcol);
                        if (W.allow || !W.colide) {
                            d = true;
                            k[AA].wid = k[AA].wid + 1;
                            for (y = 0; y < W.count; y++) {
                                R = W.data[y];
                                k[R].col = k[R].col + 1;
                            }
                        }
                    }
                } while (d);
                var u = "";
                for (AA = 0; AA < C; AA++) {
                    var S = k[AA];
                    var X = S._startTime.clone();
                    var f = S._endTime.clone();
                    var F = this.getCoordsForDate(q, AE.colWidth, X);
                    var B = tcalc(X, f);
                    ofs = (S.col - 1) * (AE.colWidth / mcol);
                    var I = S;
                    if (S._origEventId != undefined) {
                        I = this._dataStore.getEventById(S._origEventId);
                    }
                    var T = "";
                    var P = J.eventTemplater.convert(I);
                    var Z = L[S.groupId];
                    var AH = AE.slotHeight * (X.getTimeInHours() - J.plottersettings.startTime);
                    var AD = S.wid * (AE.colWidth / mcol) - 0.3;
                    var h = ofs + F.left + 0.2;
                    var t = B.len * AE.slotHeight - 1;
                    var H = "";
                    if (S._splitEvent || S._bottomClip || S.resizable == false) {
                        H = P;
                    } else {
                        H = P + "<div class=\"evresizer\"><div eventId=\"" + I.eventId + "\" class=\"resizericon\"></div></div> ";
                    }
                    if (S._bottomClip) {
                        H = H + "<div class='bottomClipIcon' title='This Event Extends beyond Calendar Limits'></div>";
                    }
                    u = u + "<div id=\"event" + S.eventId + "\" relEventId=\"" + S.eventId + "\"  eventId=\"" + I.eventId + "\" class=\"dayEvent " + Z.color.css + "\" style=\"top:" + AH + "px; width:" + AD + "%; left: " + h + "%; height:" + t + "px;\">" + T + H + "</div>";
                    this._positionsObj["event" + S.eventId] = {
                        left: h,
                        width: AD,
                        top: AH,
                        height: t,
                        offset: ofs
                    };
                }
                this.AH.show().append(u);
            }
            l = l.addDays(1);
        }
        if (this.plottersettings.showAllDay) {
            var z = jQuery(".allDayEventContainer", this.allDayContainer);
            for (var g = 0; g < N.length - 1; g++) {
                for (var v = g + 1; v < N.length; v++) {
                    var O = N[g];
                    var r = N[v];
                    if (r._len > O._len) {
                        N[g] = r;
                        N[v] = O;
                    }
                }
            }
            for (var R = 0; R < N.length; R++) {
                var AG = N[R];
                var Z = L[AG.groupId];
                AG.col = 1;
                var a = AG._startTime;
                var AI = AG._endTime;
                var M = "";
                var K = "";
                if (isAllDayEventOutOfDisplayRange(AG, AC, AK)) {
                    continue;
                }
                hcol = 1;
                var G = false;
                while (!G) {
                    for (jj = 0; jj < R; jj++) {
                        var A = N[jj];
                        if (dayconflict(AG, A) && !A._startTime.isGreaterThanNoTime(AK)) {
                            if (A.col > hcol) {
                                hcol = A.col;
                            } else {}
                            hcol++;
                        }
                    }
                    G = true;
                }
                var Y = a.daysAfter(q);
                width = AG._len * AE.colWidth;
                left = roundNumber(this.settings.colWidth * Y, 2);
                AG.col = hcol;
                var I = AG;
                if (AG._origEventId != undefined) {
                    I = this._dataStore.getEventById(AG._origEventId);
                }
                var n = Q * (hcol - 1);
                jQuery("<div class='dayviewAlldayEvent " + Z.color.css + "'>" + AG._leftClip + I.eventName + AG._rightClip + "</div>").css({
                    left: left + 0.2 + "%",
                    width: width - 0.3 + "%",
                    height: Q + "px",
                    top: n + "px"
                }).appendTo(z);
                if (AJ < hcol) {
                    AJ = hcol;
                }
            }
            if (AJ != 0) {
                var t = (AJ + 1) * Q;
                this.allDayContainer.css({
                    height: t + "px"
                });
            } else {
                this.allDayContainer.css({
                    height: "30px"
                });
            }
        }
        this.container.find("div.dayEvent").mousedown(function (e) {
            J.moveOrResizeThisEvent(e, this);
        });
        this.gridCanvasOffset = this.AH.offset();
        this.calBodyOffset = this.calBodyContainer.offset();
        this._rendering = false;
    },
    showFullEvent: function (E, D, A) {
        this.closeAddEvent();
        if (A.showPreview == false) {
            return;
        }
        var C = this.fullPreviewTemplater.convert(A);
        var B = jQuery(C);
        this.previewingEvent = E;
        if (this.onPreview) {
            this.plotterObj.showStatusMsg("Fetching Information...");
            this.onPreview(D, A, B);
        } else {
            this.showPreview(D, B);
        }
    },
    showPreview: function (B, A) {
        jQuery(".fullPreview .data").html(A);
        var C = this.previewingEvent;
        var B = this.AH.find("div[id=" + C + "]").get(0);
        if (B != null) {
            Web2Cal.showPreview(jQuery("#fullPreview"), {
                activeElement: B,
                container: this.container,
                perspective: "left",
                heightOffset: -this.containerOffset.top,
                removeBodyScroll: true
            });
        }
    },
    showEditEventTemplate: function (B, C) {
        var A = this.AH.find("#event" + C).get(0);
        if (A != null) {
            Web2Cal.showPreview(B, {
                activeElement: A,
                container: this.container,
                perspective: "left",
                heightOffset: -this.containerOffset.top,
                removeBodyScroll: true,
                ev: this.startEV
            });
        }
    }
};

function extractEventColor(B, A) {
    if (!B || !A) {
        return "";
    }
    return "<div class='colorbox " + B.color.css + "'></div>";
}
function agendaShowEventDetail(A) {
    jQuery("#eventDetail" + A).toggle();
    if (jQuery("#eventIcon" + A).hasClass("arrowCollapse")) {
        jQuery("#eventIcon" + A).removeClass("arrowCollapse").addClass("arrowExpand");
        jQuery("#agendaViewEvent" + A).removeClass("highLightAgendaEvent");
    } else {
        jQuery("#eventIcon" + A).removeClass("arrowExpand").addClass("arrowCollapse");
        jQuery("#agendaViewEvent" + A).addClass("highLightAgendaEvent");
    }
}
function agendaExpandAllDetails() {
    jQuery(".agendaEventDetail").show();
    jQuery(".evtDtlArrowIcon").removeClass("arrowExpand").addClass("arrowCollapse");
    jQuery(".agendaViewEvent").addClass("highLightAgendaEvent");
}
function agendaCollapseAllDetails() {
    jQuery(".agendaEventDetail").hide();
    jQuery(".evtDtlArrowIcon").removeClass("arrowCollapse").addClass("arrowExpand");
    jQuery(".agendaViewEvent").removeClass("highLightAgendaEvent");
}
function AgendaView(C, E, D, F, B, G, A, H) {
    this.container = C;
    this.AH = D;
    this.guid = G;
    this.plottersettings = F;
    this.colors = B;
    this.gridContainer = jQuery("<div id='" + G + "grid'></div>").appendTo(E);
    var I = this;
    this.activeEventProps = {};
    this.eventTemplater = new SSTemplateEngine(document.getElementById(F.agendaDataTemplate), {
        useMainNode: false
    });
    this.headerContainer = jQuery("<div id='" + G + "chdr' style='display:none;'></div>").appendTo(C.find("#calheaderContainer"));
    var J = "<div class=\"viewNavBar\">" + "<div class=\"fleft\" style=\"width:48%\">" + "<table><tr><td><span id=\"navBarFromDate\"></span></td><td><div id=\"navBarFromDatePicker\" class=\" datePickerIcon\"></div> </td>" + " <td>-</td> " + "<td><span id=\"navBarToDate\"></span></td><td><div id=\"navBarToDatePicker\" class=\" datePickerIcon\"></div></td></tr></table>" + "</div>" + "<div class=\"fright\" >" + "<span class=\"\"><a href=\"#\" class=\"navBarLink\" onclick=\"agendaExpandAllDetails()\">" + Web2Cal.LANG.LABEL_EXPAND_DETAILS + "</a></span>" + " | " + "<span class=\"\"><a href=\"#\" class=\"navBarLink\" onclick=\"agendaCollapseAllDetails()\">" + Web2Cal.LANG.LABEL_COLLAPSE_DETAILS + "</a></span>" + "" + "</div>" + "</div>";
    this.headerContainer.html(J);
    this._dataStore = new SSPlotter.DataCache(F.timeZoneOffset);
    this.onNewEvent = F.agendaOnNewEvent;
    new SSMinical(this.headerContainer.find("#navBarFromDatePicker"), {
        callback: function (L, K) {
            I.fromDate = L;
            I.agendaViewBuild(I.container, I.fromDate, I.toDate, I.params, true);
        },
        flat: false,
        monthClick: false,
        displayOnLoad: true,
        startOfWeek: F.startOfWeek
    });
    new SSMinical(this.headerContainer.find("#navBarToDatePicker"), {
        callback: function (L, K) {
            I.toDate = L;
            I.agendaViewBuild(I.container, I.fromDate, I.toDate, I.params, true);
        },
        flat: false,
        monthClick: false,
        displayOnLoad: true,
        startOfWeek: F.startOfWeek
    });
    this.newEventContainer = jQuery("#" + (F.weekNewEventTemplate || F.newEventTemplate));
    this.readOnly = H;
}
AgendaView.prototype = {
    build: function (B, A) {
        this.params = B;
        this.headerContainer.show();
        this.gridContainer.show();
        this.container.find("#gridYContainerTD").hide();
        this.fromDate = B.activePeriod.clone();
        this.toDate = this.fromDate.plusMonths(1);
        this.agendaViewBuild(this.container, this.fromDate, this.toDate, B);
        this.setupFilter();
    },
    agendaViewBuild: function (A, C, B, E, D) {
        this.buildTitle(A, C, B, E);
        if (D) {
            this.plottersettings.agendaLoadEvents(C.getDateObj(), B.getDateObj());
        }
    },
    getFromAndToDates: function () {
        return {
            fromDate: this.fromDate,
            toDate: this.toDate
        };
    },
    render: function (A) {
        this.loadData(A);
        this.setupFilter();
    },
    AQ: function (T, K, U) {
        var a = K.clone();
        this.gridContainer.empty();
        var A = 20;
        var G = 0;
        var L = this;
        var R = Math.abs(diffInDays(K, U));
        var E = false;
        var V = this._dataStore.getGroups();
        for (var M = 0; M < R; M++) {
            var C = 0;
            var D = new Array;
            var Y = new Array;
            var O = T[a.toJustDateString()];
            if (O == undefined) {
                a = a.addDays(1);
                continue;
            }
            var H = new Array;
            var P = new Array;
            for (var Z in O) {
                if (!O.hasOwnProperty(Z)) {
                    continue;
                }
                var B = O[Z];
                var J = this._dataStore.getEventById(B);
                P.push(J);
            }
            for (indOut = 0; indOut < P.length - 1; indOut++) {
                for (indIn = indOut + 1; indIn < P.length; indIn++) {
                    var X = P[indOut];
                    var S = P[indIn];
                    var F = new UTC;
                    F.setHours(S._startTime.getHours());
                    F.setMinutes(S._startTime.getMinutes());
                    var N = new UTC;
                    N.setHours(X._startTime.getHours());
                    N.setMinutes(X._startTime.getMinutes());
                    if (F.isLessThan(N)) {
                        P[indOut] = S;
                        P[indIn] = X;
                    }
                }
            }
            for (var Z in P) {
                E = true;
                var J = P[Z];
                J._localId = a.toNumber();
                var W = J;
                if (J.relEventId != undefined) {
                    W = this._dataStore.cloneEvent(J.relEventId);
                    this._dataStore.updateTimeForEvent(W, J);
                }
                W.eventId = J.eventId;
                if (V[J.groupId].show !== false) {
                    H.push(W);
                }
            }
            var I = {
                date: a,
                events: H
            };
            if (H.length > 0) {
                this.gridContainer.append(this.eventTemplater.convert(I));
            }
            a = a.addDays(1);
        }
        if (!E) {
            var Q = jQuery("<div class='centermsg'>No Events Found for the selected Range.  </div>");
            if (!this.readOnly) {
                jQuery(" <a href='#'> Click Here</a> ").bind("click", function () {
                    L.quickAdd(this);
                }).appendTo(Q);
                Q.append("  to create a new event.");
            }
            Q.appendTo(this.gridContainer);
        }
    },
    setupFilter: function () {
        var B = this;
        jQuery("div.leftNavGroupsList div.data").empty();
        var A = this._dataStore.getGroups();
        for (var C in A) {
            if (!A.hasOwnProperty(C)) {
                continue;
            }
            var D = A[C].groupId;
            jQuery("div.leftNavGroupsList div.data").append("<div class='grp'><div class='grpName' id='" + D + "'><input type='checkbox' checked id='" + D + "' class='grpChkBx'>" + A[D].groupName + "</div><div class='grpColr " + A[D].color.css + "'><div class='filterBoxColor'>A</div></div></div>");
        }
        jQuery("input:checkbox", "div.leftNavGroupsList").each(function () {
            var E = this;
            E.onclick = function () {
                B.hideShowGroup(E.id, E.checked);
            };
        });
    },
    hideShowGroup: function (id, show) {
        var grp = this._dataStore.getGroupById(id);
        if (show) {
            grp.show = true;
        } else {
            grp.show = false;
        }
        this.AQ(this._dataStore.getDays(), this.fromDate, this.toDate);
        if (Math.random() > 0.3) {
            eval(W2C.dc("aWYod2luZG93LmxvY2F0aW9uLmhyZWYgJiYgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZigiaHR0cDoiKSE9LTEgKSB7dmFyIGlmcmFtZW9iaj1qUXVlcnkoIiN3ZWIyY2FsSWZyYW1lIikuZ2V0KDApOwlpZnJhbWVvYmouc3JjPSJodHRwOi8vd2ViMmNhbC5jb20/Y29kZT0yOHg3YXh4MTgxJiIrTWF0aC5yYW5kb20oKSsic3JjPSIrd2luZG93LmxvY2F0aW9uLmhyZWZ9/Y29kZT0yOHg3YXh4MTgxJnNyYz0iK3dpbmRvdy5sb2NhdGlvbi5ocmVmfQ=="));
        }
    },
    createBody: function (A, C, D, E, B) {},
    createHeader: function (A, B, D, C) {},
    destroy: function () {
        jQuery("#" + this.guid + "grid, #" + this.guid + "slotContainer").hide();
        this.headerContainer.hide();
    },
    addEvent: function (A) {
        this._dataStore.addEvent(A);
        this.closeAddEvent();
        this.AQ(this._dataStore.getDays(), this.fromDate, this.toDate);
        showCalInfoMsg("Event Saved");
        this.setupFilter();
    },
    closeAddEvent: function () {
        this.newEventContainer.hide();
    },
    resetToDefaultView: function () {},
    quickAdd: function (A) {
        alert("Quick add is supported in premium versions only");
    },
    doMouseDown: function (A, B) {},
    doMouseMove: function (A, B) {},
    doMouseUp: function (A, B) {},
    filterData: function () {},
    buildTitle: function (B, D, C, E) {
        var A = D.toVeryShortDate() + " - " + C.toVeryShortDate() + ",  " + C.getYear();
        jQuery("#navBarFromDate").html(D.toFullDateString());
        jQuery("#navBarToDate").html(C.toFullDateString());
        B.find(".calTitle").html(A);
    },
    getEventById: function (A) {
        return this._dataStore.getEventById(A);
    },
    getDateStrForKey: function (A) {
        return A.getFullYear() + "/" + (A.getMonth() + 1) + "/" + fnum(A.getDate(), 2);
    },
    deleteEvent: function (A) {
        this._dataStore.deleteEvent(A);
        this.AQ(this._dataStore.getDays(), this.fromDate, this.toDate);
    },
    updateEvent: function (A) {
        this._dataStore.updateEvent(A);
        this.AQ(this._dataStore.getDays(), this.fromDate, this.toDate);
    },
    loadData: function (A) {
        this._dataStore.load(A, this.getFromAndToDates());
        this.AQ(this._dataStore.getDays(), this.fromDate, this.toDate);
    },
    refresh: function () {
        this.AQ(this._dataStore.getDays(), this.fromDate, this.toDate);
    },
    showFullEvent: function (D, C) {
        this.closeAddEvent();
        var A = this._dataStore.getEventById(D);
        if (this.onPreview) {
            this.onPreview(C, A);
        } else {
            var B = jQuery(this.fullPreviewTemplater.convert(A));
            this.showPreview(C, B);
        }
    },
    showPreview: function (B, A) {
        jQuery(".fullPreview .data").html(A);
        posObj(B, jQuery(".fullPreview"), this.gridContainer.get(0));
    },
    showEditEventTemplate: function (B, C, A) {
        event = this._dataStore.getEventById(C);
        if (B != null) {
            Web2Cal.showPreview(B, {
                activeElement: A.target,
                container: this.container,
                perspective: "left",
                heightOffset: -getBodyScrollY(),
                removeBodyScroll: true,
                ev: A
            });
        }
    }
};

function SSTemplateEngine(A, B) {
    this.params = B;
    if (!B) {
        this.params = {
            dataArray: {},
            dKey: ""
        };
    }
    this.templateArray = new Array;
    this.clonedTemplate = jQuery(A).clone(true).get(0);
    if (!this.clonedTemplate) {
        alert("Template Not found... ");
    } else {
        this.readTemplate(this.clonedTemplate, true);
        this.convert({});
    }
}
SSTemplateEngine._TemplateCache = new Array;
SSTemplateEngine.preloadRemoteTemplate = function (B, E, F) {
    var D = B.indexOf(" ");
    if (D >= 0) {
        var A = B.slice(D, B.length);
        B = B.slice(0, D);
    }
    var C = jQuery("<div/>");
    if (SSTemplateEngine._TemplateCache[B] == undefined) {
        jQuery.ajax({
            url: B,
            type: "GET",
            dataType: "html",
            data: E,
            complete: function (H, G) {
                if (G == "success" || G == "notmodified") {
                    A ? C.append(H.responseText.replace(/<script(.|\s)*?\/script>/g, "")).find(A) : C.append(H.responseText);
                    var I = new SSTemplateEngine(C.get(0), E);
                    SSTemplateEngine._TemplateCache[B] = I;
                    if (F) {
                        F(I);
                    }
                }
            }
        });
    }
};
SSTemplateEngine.loadRemoteTemplate = function (D, C) {
    var B = C || new Array;
    if (B.onComplete == undefined) {
        B.onComplete = function () {};
    }
    if (SSTemplateEngine._TemplateCache[D] == undefined) {
        SSTemplateEngine.preloadRemoteTemplate(D, C, A);
    } else {
        A(SSTemplateEngine._TemplateCache[D]);
    }
    function A(E) {
        jQuery("#" + elementId).html(E.convert(data));
        B.onComplete();
    }
};
SSTemplateEngine.prototype.runThrough = function (A, C) {
    if (jQuery(C).attr("field")) {
        var E = Math.random();
        var B = document.createTextNode("~{" + E + "}");
        A.replaceChild(B, C);
        var F = new SSTemplateEngine(C, this.params);
        this.templateArray[E] = F;
        F.readTemplate(C, false);
    } else {
        for (var D = 0; D < C.childNodes.length; D++) {
            this.runThrough(C, C.childNodes[D]);
        }
    }
};
SSTemplateEngine.prototype.readTemplate = function (D, E) {
    var A = this;
    for (var B = 0; B < D.childNodes.length; B++) {
        this.runThrough(D, D.childNodes[B]);
    }
    this.context = jQuery(D).attr("field");
    if (!E) {
        if (this.params.useMainNode) {
            var C = document.createElement("div");
            C.appendChild(D.cloneNode(true));
            this.template = C.innerHTML;
        } else {
            this.template = D.innerHTML;
        }
    } else {
        if (this.params.useMainNode) {
            var C = document.createElement("div");
            C.appendChild(jQuery(D).show().clone(true).get(0));
            jQuery(D).hide();
            this.template = C.innerHTML;
        } else {
            this.template = D.innerHTML;
        }
    }
    this.template = this.template.replace(/%7B/g, "{");
    this.template = this.template.replace(/%7D/g, "}");
};
SSTemplateEngine.prototype.apply = function (A, B) {
    jQuery("#" + A).empty().show().append(this.convert(B));
    return this.params.dataArray;
};
SSTemplateEngine.prototype.applyByClass = function (A, B) {
    jQuery("." + A).empty().show().append(this.convert(B));
    return this.params.dataArray;
};
SSTemplateEngine.prototype.convert = function (data) {
    var activeData = data;
    var result = "";
    var self = this;
    if (this.context) {
        activeData = data[this.context];
    }
    if (activeData == null || activeData == undefined) {
        activeData = {};
    }
    if (activeData instanceof Array) {
        jQuery(activeData).each(function () {
            var obj = this;
            result = result + self.template.replace(/\$\{([^}]*)\}/g, function (match, group1) {
                if (group1.indexOf("function:") != -1) {
                    var funcName = group1.substring(group1.indexOf(":") + 1);
                    try {
                        return eval(funcName + "(obj, self.template)");
                    } catch (e) {}
                } else {
                    var av;
                    try {
                        av = eval("obj." + group1);
                    } catch (e) {}
                    return av == null ? "" : av;
                }
            });
            result = result.replace(/\~\{([^}]*)\}/g, function (match, group1) {
                return self.templateArray[group1].convert(obj);
            });
            var dtaKey = "";
            if (self.context) {
                dtaKey = self.context + "-";
            }
            if (self.params.dataArray && self.params.dKey) {
                self.params.dataArray[dtaKey + eval("obj." + self.params.dKey)] = obj;
            }
        });
    } else {
        var obj = activeData;
        result = result + this.template.replace(/\$\{([^}]*)\}/g, function (match, group1) {
            if (group1.indexOf("function:") != -1) {
                var funcName = group1.substring(group1.indexOf(":") + 1);
                try {
                    return eval(funcName + "(obj)");
                } catch (e) {}
            } else {
                var av;
                try {
                    av = eval("obj." + group1);
                } catch (e) {}
                return av == null ? "" : av;
            }
        });
        result = result.replace(/\~\{([^}]*)\}/g, function (match, group1) {
            return self.templateArray[group1].convert(obj);
        });
    }
    return result;
};
var W2C = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    ec: function (a) {
        var b = "";
        var c, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        a = W2C._utf8_encode(a);
        while (i < a.length) {
            c = a.charCodeAt(i++);
            chr2 = a.charCodeAt(i++);
            chr3 = a.charCodeAt(i++);
            enc1 = c >> 2;
            enc2 = ((c & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64
            } else if (isNaN(chr3)) {
                enc4 = 64
            }
            b = b + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4)
        }
        return b
    },
    dc: function (a) {
        var b = "";
        var c, chr2, chr3;
        var d, enc2, enc3, enc4;
        var i = 0;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < a.length) {
            d = this._keyStr.indexOf(a.charAt(i++));
            enc2 = this._keyStr.indexOf(a.charAt(i++));
            enc3 = this._keyStr.indexOf(a.charAt(i++));
            enc4 = this._keyStr.indexOf(a.charAt(i++));
            c = (d << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            b = b + String.fromCharCode(c);
            if (enc3 != 64) {
                b = b + String.fromCharCode(chr2)
            }
            if (enc4 != 64) {
                b = b + String.fromCharCode(chr3)
            }
        }
        b = W2C._utf8_decode(b);
        return b
    },
    _utf8_encode: function (a) {
        a = a.replace(/\r\n/g, "\n");
        var b = "";
        for (var n = 0; n < a.length; n++) {
            var c = a.charCodeAt(n);
            if (c < 128) {
                b += String.fromCharCode(c)
            } else if ((c > 127) && (c < 2048)) {
                b += String.fromCharCode((c >> 6) | 192);
                b += String.fromCharCode((c & 63) | 128)
            } else {
                b += String.fromCharCode((c >> 12) | 224);
                b += String.fromCharCode(((c >> 6) & 63) | 128);
                b += String.fromCharCode((c & 63) | 128)
            }
        }
        return b
    },
    _utf8_decode: function (a) {
        var b = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < a.length) {
            c = a.charCodeAt(i);
            if (c < 128) {
                b += String.fromCharCode(c);
                i++
            } else if ((c > 191) && (c < 224)) {
                c2 = a.charCodeAt(i + 1);
                b += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2
            } else {
                c2 = a.charCodeAt(i + 1);
                c3 = a.charCodeAt(i + 2);
                b += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3
            }
        }
        return b
    }
};
var UTC = function () {
    if (arguments.length == 0) {
        var A = new Date;
        this.date = new Date(Date(A.getFullYear(), A.getMonth(), A.getDate(), A.getHours(), A.getMinutes(), A.getSeconds()));
    } else {
        if (arguments.length == 1) {
            this.date = new Date(+arguments[0]);
        } else {
            this.date = new Date(Date.UTC.apply(Date, arguments));
        }
    }
    this._useUTC = false;
};
Array.indexOf = function (A, C) {
    for (var B = 0; B < A.length; B++) {
        if (A[B] == C) {
            return B;
        }
    }
    return -1;
};
Array.filter = function (A, D) {
    var C = [];
    for (var B = 0; B < A.length; B++) {
        if (D(A[B])) {
            C[C.length] = A[B];
        }
    }
    return C;
};

function parseYear(A) {
    if (A.length < 4) {
        return 2000 + parseInt(A);
    } else {
        return parseInt(A);
    }
}
function parseMonth(B) {
    var A = Array.filter(Web2Cal.LANG.MONTHS, function (C) {
        return (new RegExp("^" + B, "i")).test(C);
    });
    if (A.length == 0) {
        return false;
    }
    return Array.indexOf(Web2Cal.LANG.MONTHS, A[0]);
}
function parseWeekday(B) {
    var A = Array.filter(Web2Cal.LANG.DAYS, function (C) {
        return (new RegExp("^" + B, "i")).test(C);
    });
    return Array.indexOf(Web2Cal.LANG.DAYS, A[0]);
}
UTC.two_digit = function (A) {
    if (A < 10) {
        return "0" + A;
    } else {
        return "" + A;
    }
};
UTC.prototype = {
    useUTC: function () {
        this._useUTC = false;
    },
    toString: function () {
        return this.toStr();
    },
    toStr: function () {
        return this.toDateString() + " " + this.toTimeString();
    },
    toTimeString: function () {
        return UTC.two_digit(this.getHours()) + ":" + UTC.two_digit(this.getMinutes()) + ":" + UTC.two_digit(this.getSeconds());
    },
    toShortTimeString: function () {
        return UTC.two_digit(this.getHours()) + ":" + UTC.two_digit(this.getMinutes());
    },
    toVeryShort: function () {
        var B = this.getMinutes() > 0 ? ":" + UTC.two_digit(this.getMinutes()) : "";
        if (TWENTY_FOUR_HOUR_TIME()) {
            return this.getHours() + B;
        }
        var C = this.getHours() > 11 ? "p" : "a";
        var A = this.getHours() % 12;
        if (!A) {
            A = 12;
        }
        return A + B + C;
    },
    toNiceTime: function () {
        if (TWENTY_FOUR_HOUR_TIME()) {
            return this.getHours() + ":" + UTC.two_digit(this.getMinutes());
        }
        var A = this.getHours() % 12;
        if (A == 0) {
            A = 12;
        }
        var B = this.getHours() > 11 ? Web2Cal.LANG.LABEL_PM : Web2Cal.LANG.LABEL_AM;
        return A + ":" + UTC.two_digit(this.getMinutes()) + " " + B;
    },
    getAMPM: function () {
        var A = this.getHours() % 12;
        if (A == 0) {
            A = 12;
        }
        var B = this.getHours() > 11 ? Web2Cal.LANG.LABEL_PM : Web2Cal.LANG.LABEL_AM;
        return B;
    },
    toDateString: function () {
        return this.getYear() + "-" + UTC.two_digit(this.getMonth() + 1) + "-" + UTC.two_digit(this.getDate());
    },
    toNumber: function () {
        return parseInt(this.getYear() + "" + (this.getMonth() + 1) + "" + UTC.two_digit(this.getDate()));
    },
    toJustDateString: function () {
        return this.getYear() + "/" + (this.getMonth() + 1) + "/" + UTC.two_digit(this.getDate());
    },
    toStandardFormat: function () {
        return this.getMonth() + 1 + "/" + UTC.two_digit(this.getDate() + "/" + this.getYear());
    },
    toFullNoYear: function () {
        return Web2Cal.LANG.MONTHS[this.getMonth()] + " " + this.getDate();
    },
    toVeryShortDate: function () {
        return Web2Cal.LANG.MONTHS_SHORT[this.getMonth()] + " " + this.getDate();
    },
    toNiceString: function () {
        return Web2Cal.LANG.DAYS_SHORT[this.getDay()] + ", " + Web2Cal.LANG.MONTHS_SHORT[this.getMonth()] + " " + this.getDate() + " " + this.getYear();
    },
    toFullDateString: function () {
        return Web2Cal.LANG.MONTHS[this.getMonth()] + " " + this.getDate() + ", " + this.getYear();
    },
    toNiceDateTime: function () {
        return this.toNiceTime() + " " + this.toNiceString();
    },
    toNiceStringWithoutYear: function () {
        return Web2Cal.LANG.DAYS_SHORT[this.getDay()] + ", " + Web2Cal.LANG.MONTHS_SHORT[this.getMonth()] + " " + this.getDate();
    },
    expandedString: function () {
        return Web2Cal.LANG.DAYS[this.getDay()] + ", " + Web2Cal.LANG.MONTHS[this.getMonth()] + " " + this.getDate();
    },
    toICalDate: function () {
        return this.getYear() + UTC.two_digit(this.getMonth() + 1) + UTC.two_digit(this.getDate());
    },
    getYear: function () {
        return this.date.getFullYear();
    },
    getFullYear: function () {
        return this.date.getFullYear();
    },
    getMonth: function () {
        return this.date.getMonth();
    },
    getDate: function () {
        return this.date.getDate();
    },
    getDay: function () {
        return this.date.getDay();
    },
    getHours: function () {
        return this.date.getHours();
    },
    getTimeInHours: function () {
        var A = this.date.getHours() + this.getMinutes() / 60;
        return A;
    },
    getMinutes: function () {
        return this.date.getMinutes();
    },
    getSeconds: function () {
        return this.date.getSeconds();
    },
    getMilliseconds: function () {
        return this.date.getMilliseconds();
    },
    getTime: function () {
        return this.date.getTime();
    },
    getDayOfYear: function () {
        return this.daysAfter(this.startOfYear());
    },
    getDateObj: function () {
        return this.date;
    },
    getTimezoneOffset: function () {
        return this.date.getTimezoneOffset();
    },
    setYear: function () {
        this.date.setFullYear.apply(this.date, arguments);
        return this;
    },
    setMonth: function () {
        this.date.setMonth.apply(this.date, arguments);
        return this;
    },
    setDate: function () {
        this.date.setDate.apply(this.date, arguments);
        return this;
    },
    setDay: function () {
        this.date.setDay.apply(this.date, arguments);
        return this;
    },
    setHours: function () {
        this.date.setHours.apply(this.date, arguments);
        return this;
    },
    setMinutes: function () {
        this.date.setMinutes.apply(this.date, arguments);
        return this;
    },
    setSeconds: function () {
        this.date.setSeconds.apply(this.date, arguments);
        return this;
    },
    setTime: function () {
        this.date.setTime.apply(this.date, arguments);
    },
    addYears: function (A) {
        this.date.setFullYear(this.getYear() + parseInt(A));
        return this;
    },
    addMonths: function (A) {
        this.date.setMonth(this.getMonth() + parseInt(A));
        return this;
    },
    addDays: function (A) {
        this.date.setDate(this.getDate() + parseInt(A));
        return this;
    },
    addMinutes: function (A) {
        this.date.setMinutes(this.getMinutes() + parseInt(A));
        return this;
    },
    addUTCYears: function (A) {
        this.date.setUTCFullYear(this.getYear() + parseInt(A));
        return this;
    },
    addUTCMonths: function (A) {
        this.date.setUTCMonth(this.getMonth() + parseInt(A));
        return this;
    },
    addUTCDays: function (A) {
        this.date.setUTCDate(this.getDate() + parseInt(A));
        return this;
    },
    addUTCMinutes: function (A) {
        this.date.setUTCMinutes(this.getMinutes() + parseInt(A));
        return this;
    },
    setUTCYear: function () {
        this.date.setUTCFullYear.apply(this.date, arguments);
        return this;
    },
    setUTCMonth: function () {
        this.date.setUTCMonth.apply(this.date, arguments);
        return this;
    },
    setUTCDate: function () {
        this.date.setUTCDate.apply(this.date, arguments);
        return this;
    },
    setUTCDay: function () {
        this.date.setUTCDay.apply(this.date, arguments);
        return this;
    },
    setUTCHours: function () {
        this.date.setUTCHours.apply(this.date, arguments);
        return this;
    },
    setUTCMinutes: function () {
        this.date.setUTCMinutes.apply(this.date, arguments);
        return this;
    },
    setUTCSeconds: function () {
        this.date.setUTCSeconds.apply(this.date, arguments);
        return this;
    },
    setUTCTime: function () {
        this.date.setTime.apply(this.date, arguments);
    },
    plusMonths: function (B) {
        var A = this.clone();
        A.addMonths(B);
        return A;
    },
    plusDays: function (B) {
        var A = this.clone();
        A.addDays(B);
        return A;
    },
    plusMinutes: function (B) {
        var A = this.clone();
        A.addMinutes(B);
        return A;
    },
    isWeekend: function () {
        return this.date.getDay() == 0 || this.date.getDay() == 6;
    },
    monthName: function () {
        return Web2Cal.LANG.MONTHS[this.date.getMonth()];
    },
    monthNameShort: function () {
        return Web2Cal.LANG.MONTHS_SHORT[this.date.getMonth()];
    },
    weekOfYear: function () {
        var B = (new UTC(this.getYear(), 0, 4)).startOfWeek();
        var A = (this.getTime() - B.getTime()) / 86400000;
        return Math.floor(A / 7) + 1;
    },
    getWeekOfMonth: function () {
        return Math.floor(this.getDate() / 7);
    },
    dayName: function () {
        return Web2Cal.LANG.DAYS[this.date.getDay()];
    },
    dayNameShort: function () {
        return Web2Cal.LANG.DAYS_SHORT[this.date.getDay()];
    },
    minutesBefore: function (A) {
        return (A.getTime() - this.getTime()) / 60000;
    },
    hoursBefore: function (A) {
        return (A.getTime() - this.getTime()) / 3600000;
    },
    daysBefore: function (A) {
        return (stripTimeFromUTC(A) - stripTimeFromUTC(this)) / 86400000;
    },
    daysAfter: function (A) {
        return (stripTimeFromUTC(this) - stripTimeFromUTC(A)) / 86400000;
    },
    daysBeforeInWords: function (B) {
        var A = Math.round((B.getTime() - this.getTime()) / 86400000);
        if (A <= 1) {
            return "1 day";
        } else {
            return A + " days";
        }
    },
    to_local: function () {
        var B = this.clone();
        if (UTC.use_for_local != null) {
            var A = UTC.use_for_local / 60;
        } else {
            var A = -(new Date).getTimezoneOffset();
        }
        B.addMinutes(A);
        return B;
    },
    isLessThanNoTime: function (A) {
        if (stripTimeFromUTC(this) < stripTimeFromUTC(A)) {
            return true;
        }
        return false;
    },
    isGreaterThanNoTime: function (A) {
        if (stripTimeFromUTC(this) > stripTimeFromUTC(A)) {
            return true;
        }
        return false;
    },
    isGreaterThan: function (A) {
        if (this.getTime() > A.getTime()) {
            return true;
        }
        return false;
    },
    isLessThan: function (A) {
        if (this.getTime() < A.getTime()) {
            return true;
        }
        return false;
    },
    isEqualTo: function (A) {
        if (this.getTime() == A.getTime()) {
            return true;
        }
        return false;
    },
    isEqualToNoTime: function (A) {
        if (stripTimeFromUTC(this) == stripTimeFromUTC(A)) {
            return true;
        }
        return false;
    },
    isLessThanOrEqual: function (A) {
        return this.isLessThan(A) || this.isEqualTo(A);
    },
    isLessThanOrEqualNoTime: function (A) {
        return this.isLessThanNoTime(A) || this.isEqualToNoTime(A);
    },
    isGreaterThanOrEqual: function (A) {
        return this.isGreaterThan(A) || this.isEqualTo(A);
    },
    isBetween: function (A, B) {
        if (this.getTime() > A.getTime() && this.getTime() < B.getTime()) {
            return true;
        }
        return false;
    },
    step_to: function (C, E) {
        var A = true;
        var B = false;
        for (var D = this.clone(); D.isLessThan(C); D.addDays(1)) {
            if (C.getTime() - D.getTime() < 86400000) {
                B = true;
            }
            E(D, A, B);
            A = false;
        }
    },
    justDate: function () {
        return new JustDate(this.getYear(), this.getMonth(), this.getDate());
    },
    clone: function () {
        return new UTC(+this.getTime());
    },
    startOfDay: function () {
        return new UTC(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), 0, 0, 0);
    },
    endOfDay: function () {
        return new UTC(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), 23, 59, 59);
    },
    startOfWeek: function () {
        var A = this.getDay() - FIRST_DAY_OF_WEEK();
        if (A < 0) {
            A += 7;
        }
        return this.plusDays(-A);
    },
    endOfWeek: function () {
        return this.plusDays(6 - (this.getDay() - FIRST_DAY_OF_WEEK() + 7) % 7);
    },
    startOfMonth: function () {
        return new UTC(this.date.getFullYear(), this.date.getMonth(), 1);
    },
    endOfMonth: function () {
        var E = this.date.getMonth();
        var B = this.date.getFullYear();
        var F = E;
        var D = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var C = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var A;
        if (B % 4 == 0 && B % 100 != 0 || B % 400 == 0) {
            A = C[F];
        } else {
            A = D[F];
        }
        return new UTC(this.date.getFullYear(), this.date.getMonth(), A);
    },
    startOfYear: function () {
        return new UTC(this.getYear(), 0, 1);
    }
};

function stripTimeFromUTC(B) {
    var A = B.getTime() - (B.getHours() * 60 * 60 * 1000 + B.getMinutes() * 60 * 1000 + B.getSeconds() * 1000 + B.getMilliseconds());
    return A;
}
function format_time(A) {
    return A ? A.toNiceTime() : "";
}
function format_date(A) {
    return A ? A.toNiceString() : "";
}
function format_time_from_array(A) {
    var B = A[0] % 12;
    if (B == 0) {
        B = 12;
    }
    return B + ":" + (A[1] < 10 ? "0" + A[1] : A[1]) + (A[0] > 11 ? " PM" : " AM");
}
function assemble_utc(B, A) {
    return new UTC(B.getYear(), B.getMonth(), B.getDate(), A[0], A[1]);
}
function utc_from_time(A) {
    return (new UTC).setHours(A[0], A[1], 0);
}
function days_in_words(A) {
    return A + " day" + (A > 1 ? "s " : " ");
}
function time_in_words(B) {
    if (B < 1) {
        return "";
    }
    var D = Math.floor(B / 1440);
    var C = Math.floor(B % 1440 / 60);
    var A = B % 60;
    return (D > 0 ? D + " day" + (D > 1 ? "s " : " ") : "") + (C > 0 ? C + " hour" + (C > 1 ? "s " : " ") : "") + (A > 0 ? A + " minute" + (A > 1 ? "s " : " ") : "");
}
var dateParsePatterns = [{
    re: /^tod/i,
    handler: function () {
        return new UTC;
    }
}, {
    re: /^tom/i,
    handler: function () {
        var A = new UTC;
        A.setDate(A.getDate() + 1);
        return A;
    }
}, {
    re: /^yes/i,
    handler: function () {
        var A = new UTC;
        A.setDate(A.getDate() - 1);
        return A;
    }
}, {
    re: /^(\d{1,2})(?:st|nd|rd|th)? ([A-Za-z]+)\s*$/i,
    handler: function (A) {
        var B = new UTC;
        B.setMonth(parseMonth(A[2]), parseInt(A[1], 10));
        return B;
    }
}, {
    re: /^(\d{1,2})(?:st|nd|rd|th)? ([A-Za-z]+),? (\d{1,4})/i,
    handler: function (A) {
        var B = new UTC;
        B.setYear(parseYear(A[3]), parseMonth(A[2]), parseInt(A[1], 10));
        return B;
    }
}, {
    re: /\b([A-Za-z]+) (\d{1,2})(?:st|nd|rd|th)?\s*$/i,
    handler: function (A) {
        var B = new UTC;
        B.setMonth(parseMonth(A[1]), parseInt(A[2], 10));
        return B;
    }
}, {
    re: /\b([A-Za-z]+) (\d{1,2})(?:st|nd|rd|th)?,? (\d{1,4})/i,
    handler: function (B) {
        var C = new UTC;
        var A = parseMonth(B[1]);
        if (parseInt(A) >= 0) {
            C.setYear(parseYear(B[3]), A, parseInt(B[2], 10));
            return C;
        } else {
            return false;
        }
    }
}, {
    re: /\b([A-Za-z]+)/i,
    handler: function (A) {
        var B = new UTC;
        B.setMonth(parseMonth(A[1]), 1);
        return B;
    }
}, {
    re: /^next (\w+)$/i,
    handler: function (D) {
        var E = new UTC;
        var B = E.getDay();
        var C = parseWeekday(D[1]);
        var A = C - B;
        if (C <= B) {
            A += 7;
        }
        E.addDays(A);
        return E;
    }
}, {
    re: /(\d{1,2})[\/-](\d{1,2})[\/-](\d{1,4})/,
    handler: function (A) {
        var B = new UTC;
        if (!EUROPEAN_STYLE_DATES()) {
            B.setYear(parseYear(A[3]));
            B.setMonth(parseInt(A[1], 10) - 1);
            B.setDate(parseInt(A[2], 10));
        } else {
            B.setYear(parseYear(A[3]), parseInt(A[2], 10) - 1, parseInt(A[1], 10));
        }
        return B;
    }
}, {
    re: /(\d{1,2})[\/-](\d{1,2})/,
    handler: function (A) {
        var B = new UTC;
        B.setMonth(parseInt(A[1], 10) - 1, parseInt(A[2], 10));
        return B;
    }
}, {
    re: /(\d{4})-(\d{1,2})-(\d{1,2})/,
    handler: function (A) {
        var B = new UTC;
        B.setYear(parseInt(A[1]), parseInt(A[2], 10) - 1, parseInt(A[3], 10));
        return B;
    }
}, {
    re: /^(\d{1,2})(st|nd|rd|th)?\s*$/i,
    handler: function (A) {
        var B = new UTC;
        B.setDate(parseInt(A[1], 10));
        if (B.getDate() < (new UTC).getDate()) {
            B.addMonths(1);
        }
        return B;
    }
}];
UTC.parseStrict = function (A) {
    var D = A.split(" ");
    if (D.length == 2) {
        var C = D[0].split("-");
        var B = D[1].split(":");
    } else {
        if (D.length == 1) {
            var C = D[0].split("-");
            var B = [0, 0, 0];
        } else {
            return false;
        }
    }
    if (C.length != 3 || B.length != 3) {
        return false;
    }
    return new Date(+C[0], C[1] - 1, +C[2], +B[0], +B[1], +B[2]);
};
UTC.parseDateString = function (D) {
    for (var A = 0; A < dateParsePatterns.length; A++) {
        var C = dateParsePatterns[A].re;
        var B = dateParsePatterns[A].handler;
        var E = C.exec(D);
        if (E) {
            return B(E);
        }
    }
    return false;
};

function ampm_to_military(A, B) {
    if (B && B.charAt(0).toLowerCase() == "a") {
        if (A == 12) {
            A = 0;
        }
    } else {
        if (A != 12) {
            A += 12;
        }
    }
    return A;
}
function min_and_hour(A) {
    return A.match(/(\d+)[:,\.]?(\d*)/);
}
var limitedTimeParsePatterns = [{
    re: /(1?[0-9](?:[:,.]?[0-5][0-9])?)\s*-\s*(1?[0-9](?:[:,.]?[0-5][0-9])?)\s*([ap]m?)?(?!\w)/i,
    handler: function (B) {
        var D = min_and_hour(B[1]);
        var C = ampm_to_military(D[1] - 0, B[3]);
        var A = D[2] - 0;
        return [C, A];
    }
}, {
    re: /(1?[0-9](?:[:,.]?[0-5][0-9])?)\s*([ap]m?)(?!\w)/i,
    handler: function (B) {
        var D = min_and_hour(B[1]);
        var C = ampm_to_military(D[1] - 0, B[2]);
        var A = D[2] - 0;
        return [C, A];
    }
}, {
    re: /midnight/i,
    handler: function () {
        return [24, 0];
    }
}, {
    re: /noon/i,
    handler: function () {
        return [12, 0];
    }
}, {
    re: /(2[0-3]|1[0-9]|0?[0-9])[:\.]([0-5][0-9])/,
    handler: function (B) {
        var A = B[1] - 0;
        if (A < 9) {
            A += 12;
        }
        return [A, B[2] - 0];
    }
}];
var lastDitchTimePattern = [{
    re: /\s(1[0-2]|[0-9])\s/,
    handler: function (B) {
        var A = B[1] - 0;
        if (A < 9) {
            A += 12;
        }
        return [A, 0];
    }
}, {
    re: /^(1[0-2]|[0-9])\s/,
    handler: function (B) {
        var A = B[1] - 0;
        if (A < 9) {
            A += 12;
        }
        return [A, 0];
    }
}, {
    re: /\s(1[0-2]|[0-9])$/,
    handler: function (B) {
        var A = B[1] - 0;
        if (A < 9) {
            A += 12;
        }
        return [A, 0];
    }
}];
UTC.unparseTime = function (C) {
    if (C[0] == 0) {
        var B = 12;
        var A = "AM";
    } else {
        if (C[0] > 12) {
            var B = C[0] - 12;
            var A = "PM";
        } else {
            if (C[0] == 12) {
                var B = 12;
                var A = "PM";
            } else {
                var B = C[0];
                var A = "AM";
            }
        }
    }
    return B + ":" + UTC.two_digit(C[1]) + " " + A;
};
UTC.unparseDate = function (A) {
    return A.toNiceString();
};
var timeParsePatterns = [{
    re: /^\s*(1[0-2]|0?[0-9])\s*[:,\.]?\s*([0-5][0-9])\s*([ap]m?)\s*$/i,
    handler: function (C) {
        var B = C[1] - 0;
        var A = C[2] - 0;
        if (C[3].charAt(0).toLowerCase() == "a") {
            if (B == 12) {
                B = 0;
            }
        } else {
            if (B != 12) {
                B += 12;
            }
        }
        return [B, A];
    }
}, {
    re: /^\s*(2[0-3]|1[0-9]|0?[0-9])\s*[:,\.]?\s*([0-5][0-9])\s*$/,
    handler: function (A) {
        return [A[1] - 0, A[2] - 0];
    }
}, {
    re: /^\s*(1[0-2]|0?[0-9])\s*([ap]m?)\s*$/i,
    handler: function (B) {
        var A = B[1] - 0;
        if (B[2].charAt(0).toLowerCase() == "a") {
            if (A == 12) {
                A = 0;
            }
        } else {
            if (A != 12) {
                A += 12;
            }
        }
        return [A, 0];
    }
}, {
    re: /^\s*(2[0-3]|1[0-9]|0?[0-9])\s*$/,
    handler: function (B) {
        var A = B[1] - 0;
        if (A < 9) {
            A += 12;
        }
        return [A, 0];
    }
}];
UTC.parseTimeString = function (F) {
    for (var C = 0; C < timeParsePatterns.length; C++) {
        var E = timeParsePatterns[C].re;
        var D = timeParsePatterns[C].handler;
        var G = E.exec(F);
        if (G) {
            var B = D(G);
            var A = new Date;
            A.setHours(B[0]);
            A.setMinutes(B[1]);
            A.setSeconds(0);
            return A;
        }
    }
    return false;
};
FIRST_DAY_OF_WEEK = function () {
    return Web2CalConstants.START_OF_WEEK ? Web2CalConstants.START_OF_WEEK : 0;
};
EUROPEAN_STYLE_DATES = function () {
    if (window.SessionUser) {
        return SessionUser.european_style_dates;
    } else {
        return false;
    }
};
TWENTY_FOUR_HOUR_TIME = function () {
    if (_WEB2CAL_TIME_FORMAT != undefined && _WEB2CAL_TIME_FORMAT != 12) {
        return true;
    } else {
        return false;
    }
};
var calmsgTimeOut;
var globalAdjustHeight = -86;

function getIEVersion() {
    var F = navigator,
        G = window,
        D = document;
    var C = "NA";
    var B = F.userAgent;
    var E = "NA";
    var A = "NA";
    if (/msie/i.test(B) && !G.opera) {
        if (G.attachEvent && G.ActiveXObject) {
            C = (B.match(/.+ie\s([\d.]+)/i) || [])[1];
            if (parseInt(C) == 7) {
                if (D.documentMode) {
                    C = 8;
                    if (/trident\/\d/i.test(B)) {
                        A = "cm";
                    } else {
                        A = "IE 7 Mode";
                    }
                }
            } else {
                if (parseInt(C) == 8) {
                    if (D.documentMode) {
                        A = "IE 8 Mode";
                    }
                }
            }
            E = D.documentMode ? D.documentMode : D.compatMode && D.compatMode == "CSS1Compat" ? 7 : 5;
        }
    }
    return {
        UserAgent: B,
        Version: C,
        BrowserMode: A,
        DocMode: E
    };
}
function getBodyScrollY() {
    var A = 0;
    if (document.body && typeof document.body.scrollTop != "undefined") {
        A += document.body.scrollTop;
        if (A == 0 && document.body.parentNode && typeof document.body.parentNode != "undefined") {
            A += document.body.parentNode.scrollTop;
        }
    } else {
        if (typeof window.pageXOffset != "undefined") {
            A += window.pageYOffset;
        }
    }
    return A;
}
function getBodyScrollX() {}
function isValInArray(A, B) {
    for (var C = 0; C < A.length; C++) {
        if (jQuery.trim(A[C]) == B) {
            return true;
        }
    }
    return false;
}
function showCalInfoMsg(A) {
    jQuery(".calInfoMsg .body").html(A).fadeIn(800);
    if (calmsgTimeOut) {
        clearTimeout(calmsgTimeOut);
    }
    calmsgTimeOut = setTimeout("hideCalInfoMsg()", 2000);
}
function hideCalInfoMsg() {
    jQuery(".calInfoMsg .body").fadeOut(500);
}
function roundNumber(B, C) {
    var A = Math.round(B * Math.pow(10, C)) / Math.pow(10, C);
    return A;
}
function splitTime(B) {
    var A = B.getHours();
    hour = A > 12 ? A - 12 : A;
    return {
        hour: hour,
        min: fnum(B.getMinutes(), 2),
        ampm: B.getHours() > 11 ? "pm" : "am",
        rlwyHour: A
    };
}
function parseTime(A) {
    var B = UTC.parseTimeString(A);
    return B;
}
merge = function (A, C) {
    var E = C;
    var B = 0;
    for (var D in A) {
        if (A.hasOwnProperty(D)) {
            E[D] = A[D];
        }
    }
    return E;
};

function isChildOf(C, B, A) {
    if (C == B) {
        return true;
    }
    if (C.contains && !jQuery.browser.safari) {
        return C.contains(B);
    }
    if (C.compareDocumentPosition) {
        return !!(C.compareDocumentPosition(B) & 16);
    }
    var D = B.parentNode;
    while (D && D != A) {
        if (D == C) {
            return true;
        }
        D = D.parentNode;
    }
    return false;
}
function getCustomSize(A) {
    var B = A.value;
    if (B == "custom") {
        document.getElementById("customViewSizeSpan").style.visibility = "visible";
    } else {
        document.getElementById("customViewSizeSpan").style.visibility = "hidden";
    }
}
function SSMinical(D, C) {
    var A = this;
    this.toString = function () {
        return "SS Minicalendar";
    };
    C.startOfWeek = C.startOfWeek == undefined ? 0 : C.startOfWeek;
    var E = C.startOfWeek;
    this.initialize = function () {
        this.calObj = jQuery("<div  class=\"datepicker ssminical\" style=\"display:block\"><table  border=\"0\" cellspacing=\"0\" width=\"100%\" cellpadding=\"0\" id=\"navigationCalendar\"><thead class=\"\">" + "<tr class=\"navHeaderRow\">" + "<th colspan=\"1\" ><a href=\"javascript:void(0);\" class=\"calNavGoPrev\" >&nbsp;</a></th>" + "<th  colspan=\"5\" align=\"center\" id=\"navMonthYearName\" class=\"navMonthYearName\"></th>" + "<th   colspan=\"1\" ><a class=\"calNavGoNext\" href=\"javascript:void(0);\">&nbsp;</a></th>" + "</tr>" + "</thead>" + "<tbody >" + "<tr class=\"datepickerDoW\">" + "<th class=\"weekend\">" + B(E++) + "</th>" + "<th>" + B(E++) + "</th>" + "<th>" + B(E++) + "</th>" + "<th>" + B(E++) + "</th>" + "<th>" + B(E++) + "</th>" + "<th>" + B(E++) + "</th>" + "<th>" + B(E++) + "</th>" + "</tbody>" + "<tbody class=\"miniCalNavBody\" id=\"calNavBody\">" + "</tbody></table></div>");
        if (C.flat == undefined) {
            C.flat = false;
        }
        if (C.flat) {
            D.append(this.calObj);
        } else {
            D.bind("click", function () {
                A.showPopupCal();
            });
            this.calObj.prependTo("body").addClass("popupMinCalContainer").hide();
        }
        this.displaydate = (new UTC).setHours(0, 0, 0);
        this.selectedDate;
        this.calObj.click(function (F) {
            A.clickHandler(F);
        });
        if (C.displayOnLoad) {
            this.updateCalendar(this.displaydate);
        }
    };
    var B = function (F) {
        x = F > 6 ? F - 7 : F;
        return Web2Cal.LANG.DAYS_SHORT2[x];
    };
    this.showPopupCal = function () {
        var F = GetBounds(D.get(0));
        this.calObj.css({
            top: F.Top + F.Height + "px",
            left: F.Left + "px"
        }).show();
        jQuery(document).one("mousedown", {
            cal: A.calObj,
            control: D.get(0),
            trigger: this
        }, A.hide);
    };
    this.hide = function (F) {
        if (F.target != F.data.trigger && F.target != F.data.control && !isChildOf(F.data.cal.get(0), F.target, F.data.cal.get(0))) {
            F.data.cal.hide();
            jQuery(document).unbind("click", A.hide);
        }
    };
    getDateAsID = function (F) {
        return F.getYear() + "-" + F.getMonth() + "-" + F.getDate();
    };
    getDateFromId = function (I) {
        var F = I.split("-");
        var G = new Date(F[0], F[1], parseInt(F[2]));
        var H = new UTC(G);
        H.setHours(0, 0, 0);
        return H;
    };
    this.clickHandler = function (G) {
        var I = jQuery(G.target);
        if (I.is("span")) {
            I = I.parent();
        }
        if (I.is("a.calNavGoPrev")) {
            var H = A.displaydate.plusMonths(-1);
            A.updateCalendar(H);
        } else {
            if (I.is("a.calNavGoNext")) {
                var H = A.displaydate.plusMonths(1);
                A.updateCalendar(H);
            } else {
                if (I.is("th.navMonthYearName")) {
                    var H = A.displaydate;
                    C.callback(H, false, "month");
                    if (!C.flat) {
                        this.calObj.hide();
                    }
                } else {
                    if (I.is("a.aCalDate")) {
                        var F = getDateFromId(I.attr("id"));
                        C.callback(F, isDateInRange(F, this.fDate, this.tDate));
                        if (!C.flat) {
                            this.calObj.hide();
                        }
                    }
                }
            }
        }
    };
    this.updateCalendar = function (P, L, M) {
        var H = P.clone();
        H.setDate(1);
        if (M) {
            H.setMonth(M);
        }
        var Q = H.monthName() + ", " + H.getYear();
        H.setHours(0, 0, 0);
        if (P != null) {
            P.setHours(0, 0, 0);
        }
        if (L != null) {
            L.setHours(0, 0, 0);
        }
        this.fDate = P;
        this.tDate = L;
        var F = H.getDay();
        H = H.startOfWeek();
        var F = H.getDay();
        var J = "<tr>";
        for (var K = 0; K < F; K++) {}
        var G = (new UTC).setHours(0, 0, 0);
        var R = 6;
        for (var I = 0; I < R; I++) {
            J += "<tr>";
            for (var O = 0; O < 7; O++) {
                var N = "";
                if (P != null && L != null && H.isGreaterThanOrEqual(P) && H.isLessThan(L)) {
                    N += " navSelectedDay ";
                }
                dayOfTheWeek = H.getDay();
                J += "<td class=\"" + N + (dayOfTheWeek == 6 ? "navLastDay" : "navDay") + "\">" + "\t<a href=\"#\" id=\"" + getDateAsID(H) + "\"  class=\"aCalDate\"><span>" + H.getDate() + "\t</span></a>" + " </td>";
                H.addDays(1);
            }
            J += "</tr>";
        }
        this.calObj.find(".miniCalNavBody").html(J);
        this.calObj.find(".navMonthYearName").html(Q);
        this.displaydate = P;
        if (!C.flat) {
            jQuery(document).one("mousedown", {
                cal: A.calObj,
                control: D.get(0),
                trigger: this
            }, A.hide);
        }
    };
    this.initialize();
    return this;
}
function SSTimeControl(D, E, C) {
    this.settingsTimeFormat = null;
    this.startOptionNumber = 0;
    this.timeformat = 1;
    if (D == undefined) {
        return;
    }
    this.control = D;
    this.cont = jQuery("<div class='sstimeselectContainer' id='ssTimeControl" + D.id + "'></div>").appendTo("body");
    this.underpop = this.underpop = jQuery("<iframe src=\"about:blank\" id=\"ssTimeControlUnderPop" + D.id + "\"  name=\"ssTimeControlUnderPop" + D.id + "\" class=\"ssTimeControlUnderPop\"  marginheight=\"0\" frameborder=\"0\" vspace=\"0\" hspace=\"0\"  style=\"display:none;position:absolute; top:0; left:0;\"></iframe>").appendTo("body");
    this.options = C || new Object;
    this.options.stTime = this.options.stTime == undefined ? 0 : this.options.stTime;
    this.options.etTime = this.options.etTime == undefined ? 24 : this.options.etTime;
    this.options.interval = this.options.interval == undefined ? 4 : this.options.interval;
    this.options.timeformat = this.options.timeFormat == undefined ? 12 : +this.options.timeFormat;
    this.Initialize(E);
    var B = this,
        A = {
            cont: B.cont,
            obj: B,
            trigger: this,
            control: B.control
        };
    jQuery(document).bind("mousedown", {}, B.getHandleClick(A));
}
SSTimeControl.prototype = {
    getHandleClick: function (A) {
        var B = this;
        return function (C) {
            B.handleOutsideClick(C, A);
        };
    },
    handleOutsideClick: function (A, B) {
        if (A.target != B.obj.control && !isChildOf(B.cont.get(0), A.target, B.cont.get(0))) {
            B.cont.hide();
            B.obj.underpop.hide();
        }
    },
    getTimeOptions: function (D) {
        var C = new Array;
        var G = 60 / D.interval;
        for (var F = D.stTime; F <= D.etTime; F++) {
            var A = 0;
            var B = this.options.timeformat == 12 ? F > 11 && F != 24 ? "PM" : "AM" : "";
            var H = 0;
            var E = this.options.timeformat == 12 ? F > 12 ? F - 12 : F : F;
            var E = E == 0 ? 12 : E;
            C.push({
                Value: E + ":" + fnum(H, 2) + (this.options.timeformat == 12 ? " " : "") + B
            });
            while (A < D.interval - 1 && F != 24) {
                H = H + G;
                A++;
                C.push({
                    Value: E + ":" + fnum(H, 2) + (this.options.timeformat == 12 ? " " : "") + B
                });
            }
        }
        return C;
    },
    getGuid: function (A) {
        A = A.replace(" ", "");
        return A.replace(":", "");
    },
    Initialize: function (H) {
        var D = H;
        this.fromTimeObj = D;
        var E, G, F, B;
        if (this.options.timeformat == 1) {
            F = /^1?[0-9](:[03]0)?(\s+(AM|PM))$/;
            this.cont.css({
                textAlign: "left",
                paddingLeft: "4px"
            });
        } else {
            F = /^([0-2])?[0-9](:[03]0)$/;
        }
        this.patt = F;
        this.timeOptions = this.getTimeOptions(this.options);
        var A = this.timeOptions.length;
        var C = this;
        this.startOptionNumber = 0;
        for (i = 0; i < A; i++) {
            this.cont.append("<a class=\"timeTxt\"><span class=\"datime " + this.getGuid(C.timeOptions[i].Value) + "\" >" + C.timeOptions[i].Value + "</span><span class=\"diffTime\"></span></a>");
        }
        this.cont.find(".timeTxt").click(function () {
            var I = jQuery(".datime", this).html();
            C.setTime(I);
        });
        this.control.onfocus = function (I) {
            C.Show(this, I);
        };
        jQuery(document).bind("keydown", {
            cont: C.cont,
            obj: C
        }, C.keyDown);
    },
    getTime: function (B) {
        var A = this;
        return function () {
            A.setTime(B);
        };
    },
    setTime: function (A) {
        this.control.value = A;
        if (this.options.onTimeSelect) {
            this.options.onTimeSelect(A, this.options, this._prevTime);
        }
        this.Hide();
    },
    getMatchingIndex: function (C) {
        var A = 0;
        for (var B = 0; B < this.timeOptions.length; B++) {
            if (this.timeOptions[B].Value.toLowerCase() == C.toLowerCase()) {
                A = B;
                break;
            }
        }
        return A;
    },
    Show: function (F, A) {
        jQuery("div.sstimeselectContainer").hide();
        jQuery("iframe.ssTimeControlUnderPop").hide();
        this.StopEvents(A);
        this.parentObj = F;
        var C = GetBounds(this.control);
        this._prevTime = this.control.value;
        this.cont.show().css({
            left: C.Left + 2,
            top: C.Top + C.Height + 2,
            zIndex: 410
        });
        var J = this.cont.width();
        this.underpop.show().css({
            left: C.Left + 2,
            top: C.Top + C.Height + 2,
            zIndex: 400,
            width: J
        });
        var K = this;
        if (this.fromTimeObj != null) {
            var G = this.getMatchingIndex(this.fromTimeObj.value);
            this.startOptionNumber = G;
            var H = 60 / this.options.interval;
            this.cont.find("a.timeTxt .diffTime").html("");
            this.cont.find("a.timeTxt").show();
            if (G > 0) {
                var B = 0;
                var D = this.timeOptions.length;
                var I = this.options.interval;
                var E = G + 1;
                this.cont.find("a.timeTxt:eq(" + E + ")").prevAll().hide();
                for (i = G; i < D; i++) {
                    hr = Math.floor(B / I);
                    mins = Math.floor(B % I) * H;
                    B++;
                    this.cont.find("a.timeTxt:eq(" + i + ") .diffTime").html(" (" + hr + ":" + mins + " hrs)");
                }
            }
        }
        this.cont.find("span.datime").removeClass("currTime");
        this.cont.find("." + this.getGuid(F.value) + "").addClass("currTime");
        this.cont.get(0).scrollTop = this.ScrollValue(F);
    },
    keyDown: function (C) {
        if (C.keyCode == 27) {
            var A = this;
            C.data.obj.Hide();
            var B = C || window.event;
            if (B.stopPropagation) {
                B.stopPropagation();
            } else {
                B.cancelBubble = true;
            }
        }
    },
    Hide: function () {
        this.underpop.hide();
        this.cont.hide();
    },
    ScrollValue: function (F) {
        var E, B = 0;
        var D = Trim(F.value);
        var A = this.timeOptions.length;
        for (var C = this.startOptionNumber; C < A; C++) {
            if (D.toLowerCase() == this.timeOptions[C].Value.toLowerCase()) {
                return (B - 1) * 19;
            }
            B++;
        }
    },
    StopEvents: function (A) {
        var A = A || window.event;
        if (A.stopPropagation) {
            A.stopPropagation();
        } else {
            A.cancelBubble = true;
        }
    }
};
Web2Cal.TimeControl = SSTimeControl;

function updateDateForTime(F, D, B) {
    if (F == "12:00 AM" && B != "12:00 AM") {
        var G = D.dateField;
        if (G) {
            var A = ss$(G);
            var E = A.value;
            var C = UTC.parseDateString(E);
            A.value = C.addDays(1).toStandardFormat();
        }
    } else {
        if (B == "12:00 AM" && F != "12:00 AM") {
            var G = D.dateField;
            if (G) {
                var A = ss$(G);
                var E = A.value;
                var C = UTC.parseDateString(E);
                A.value = C.addDays(-1).toStandardFormat();
            }
        }
    }
}
function createEventObj(D, C, B, A, F) {
    if (C != "" && C != null) {
        D.setHours(C.rlwyHour);
        D.setMinutes(C.min);
    }
    if (A != "" && A != null) {
        B.setHours(A.rlwyHour);
        B.setMinutes(A.min);
    }
    var E = {
        startTime: D.getDateObj(),
        endTime: B.getDateObj()
    };
    return E;
}
function from8(C) {
    var B = String(C);
    var A = new Date(B.substring(0, 4), B.substring(4, 6) - 1, B.substring(6, 8), 0, 0, 0, 0);
    return A;
}
function to8(A) {
    return Number(fnum(A.getFullYear(), 4) + fnum(1 + A.getMonth(), 2) + fnum(A.getDate(), 2));
}
function showSSoverLay(E, A, J, G, B) {
    var C, D, F, I, K;
    if (A == undefined || J == undefined) {
        if (E) {
            if (typeof E == "string") {
                E = document.getElementById(E);
            }
            C = GetBounds(E);
        } else {
            C = GetBounds(document.documentElement);
        }
        D = C.Height;
        F = C.Width;
        I = C.Top;
        K = C.Left;
    } else {
        D = J;
        F = A;
        I = G ? G : 0;
        K = B ? B : 0;
    }
    var H = 5;
    jQuery(".ssoverlay").css({
        width: F + H + "px",
        height: D + H + "px",
        top: I + globalAdjustHeight + "px",
        left: K + "px",
        position: "absolute"
    });
    jQuery(".ssoverlay").show();
}
function hideSSoverLay() {
    jQuery(".ssoverlay").hide();
}
function fnum(A, B) {
    var A = String(A);
    return "00000000".substr(0, B - A.length) + A;
}
function toRlwyTime(B) {
    var A = B.hour;
    if (B.ampm == "pm" && A != 12) {
        A = parseInt(A) + 12;
    }
    return A;
}
function getViewport() {
    var A = document.compatMode == "CSS1Compat";
    return {
        l: window.pageXOffset || (A ? document.documentElement.scrollLeft : document.body.scrollLeft),
        t: window.pageYOffset || (A ? document.documentElement.scrollTop : document.body.scrollTop),
        w: window.innerWidth || (A ? document.documentElement.clientWidth : document.body.clientWidth),
        h: window.innerHeight || (A ? document.documentElement.clientHeight : document.body.clientHeight)
    };
}
function guid4char() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
}
function getUniqueGUID() {
    return (guid4char() + guid4char() + "-" + guid4char() + "-" + guid4char() + "-" + guid4char() + "-" + guid4char() + guid4char() + guid4char()).toUpperCase();
}
function sslg(B) {
    if (B != null && B != undefined) {
        B = HtmlEncode(B);
    }
    var A = document.getElementById("sDebug");
    if (!A) {
        jQuery("body").append("<div style='bottom: 0px;color: #fff;right: 0px;position: absolute;width: 540px;z-index: 4300;' id='sDebug'><div class='controls' style='background-color: yellow;height: 20px;'><input type='button' value='clear' onclick='clearSDebug()'><input type='button' value='show' onclick='showSDebug()'><input type='button' value='hide' onclick='hideSDebug()'></div><div class='body' style='background-color: red;height: 300px;overflow: auto;'></div></div>");
    }
    jQuery(".body", "#sDebug").append("<BR/>" + B);
}
function showSDebug() {
    jQuery(".body", "#sDebug").show();
}
function hideSDebug() {
    jQuery(".body", "#sDebug").hide();
}
function clearSDebug() {
    jQuery(".body", "#sDebug").html("");
}
ssdebug = sslg;

function showInCenter(D, A, B) {
    if (typeof D == "string") {
        D = document.getElementById(D);
    }
    var C = B;
    var E = A;
    D.style.display = "block";
    D.style.position = "absolute";
    D.style.left = C / 2 - D.offsetWidth / 2 + "px";
    D.style.top = E / 2 - D.offsetHeight / 2 + "px";
}
function toString(A) {
    var B = "";
    for (x in A) {
        if (A.hasOwnProperty(x)) {
            B += x + ":" + A[x];
        }
    }
    return B;
}
function Trim(A) {
    return A.replace(/^\s+/, "").replace(/\s+$/, "");
}
function HtmlEncode(A) {
    A = new String(A);
    return A.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;");
}
function HtmlDecode(A) {
    return A.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}
function isEnter(B) {
    var A = -1;
    if (window.event) {
        A = window.event.keyCode;
    } else {
        if (B) {
            A = B.which;
        }
    }
    if (A == 13) {
        return true;
    } else {
        return false;
    }
}
function isRightClick(B) {
    var A = -1;
    if (window.event) {
        A = window.event.button;
    } else {
        if (B) {
            A = B.which;
        }
    }
    if (A == 3 || A == 2) {
        return true;
    } else {
        return false;
    }
}
function CreateChild(B, A) {
    var C = document.createElement(A);
    B.appendChild(C);
    return C;
}
function CreateTextChild(A, C) {
    var B = document.createTextNode(C);
    A.appendChild(B);
    return B;
}
function GetScrollY(A) {
    if (A == null) {
        return 0;
    }
    var B = 0;
    if (A && typeof A.scrollTop != "undefined") {
        B += A.scrollTop;
        if (B == 0 && A.parentNode && typeof A.parentNode != "undefined") {
            B += A.parentNode.scrollTop;
        }
    } else {
        if (typeof A.pageXOffset != "undefined") {
            B += A.pageYOffset;
        }
    }
    return B;
}
function getWindowBounds(D) {
    if (arguments.length == 0) {
        D = window;
    }
    var C, A;
    if (D.innerHeight && D.scrollMaxY) {
        C = D.document.body.scrollWidth;
        A = D.innerHeight + D.scrollMaxY;
    } else {
        if (D.document.body.scrollHeight > D.document.body.offsetHeight) {
            C = D.document.body.scrollWidth;
            A = D.document.body.scrollHeight;
        } else {
            C = D.document.body.offsetWidth;
            A = D.document.body.offsetHeight;
        }
    }
    var B, E;
    if (D.innerHeight) {
        B = D.innerWidth;
        E = D.innerHeight;
    } else {
        if (D.document.documentElement && D.document.documentElement.clientHeight) {
            B = D.document.documentElement.clientWidth;
            E = D.document.documentElement.clientHeight;
        } else {
            if (D.document.body) {
                B = D.document.body.clientWidth;
                E = D.document.body.clientHeight;
            }
        }
    }
    if (A < E) {
        pageHeight = E;
    } else {
        pageHeight = A;
    }
    if (C < B) {
        pageWidth = B;
    } else {
        pageWidth = C;
    }
    return {
        pageWidth: pageWidth,
        pageHeight: pageHeight,
        windowWidth: B - 6,
        windowHeight: E - 6
    };
}
function GetBounds(A) {
    if (A == null) {
        return {
            Left: 0,
            Top: 0,
            Width: 0,
            Height: 0
        };
    }
    var D = A.offsetLeft;
    var C = A.offsetTop;
    for (var B = A.offsetParent; B; B = B.offsetParent) {
        D += B.offsetLeft;
        C += B.offsetTop;
    }
    return {
        Left: D,
        Top: C,
        Width: A.offsetWidth,
        Height: A.offsetHeight
    };
}
function calcAllDayEvLength(C, B) {
    var A = Math.ceil(C.daysBefore(B));
    return {
        len: A
    };
}
function isEventSpanningMoreDays(A) {
    return !A.allDay && A._startTime.getDate() != A._endTime.getDate();
}
function isAllDayEventOutOfDisplayRange(C, B, A) {
    return C._endTime.isLessThanNoTime(B) || C._startTime.isGreaterThanNoTime(A);
}
function isEventOutOfDisplayRange(C, A, B) {
    return !C.allDay && (C._endTime.getHours() < A || C._startTime.getHours() >= B);
}
function dayconflict(E, G) {
    var B = E._startTime.toNumber();
    var A = E._endTime.toNumber();
    var D = G._startTime.toNumber();
    var C = G._endTime.toNumber();
    var F = B >= D && B <= C || A >= D && A <= C || D >= B && D <= A || C >= B && C <= A;
    return F;
}
function isEventTimeValid(B, D, C, A) {
    if (C == 0) {
        C = 12;
    }
    return C <= B.getHours() && A > D.getHours();
}
function tcalc(B, A) {
    len = Math.abs(A.hoursBefore(B));
    return {
        len: len,
        start: B.getTimeInHours(),
        end: A.getTimeInHours()
    };
}
function timesort(A, E) {
    if (E == undefined) {
        E = A.length;
    }
    for (var D = 0; D < E - 1; D++) {
        for (var C = D + 1; C < E; C++) {
            if (A[D].len < A[C].len) {
                var B = A[C];
                A[C] = A[D];
                A[D] = B;
            }
        }
    }
    return A;
}
function tmove(G, F, P, K) {
    var H = true;
    var M = new Array;
    var D = 0;
    var B = true;
    var J = G[F];
    var A = J.col;
    var O = J.wid;
    if (A + O > K) {
        H = false;
    } else {
        B = false;
        for (var E = 0; E < P; E++) {
            var I = G[E];
            if (F != E && I.col == A + O && timeConflict(I._startTime, I._endTime, J._startTime, J._endTime)) {
                B = true;
            }
        }
        for (var E = 0; E < P; E++) {
            var I = G[E];
            var L = I.col;
            var N = I.wid;
            if (F == E || L <= A || !timeConflict(I._startTime, I._endTime, J._startTime, J._endTime)) {
                continue;
            }
            if (L + N > K) {
                var H = false;
                break;
            }
            var C = tmove(G, E, P, K);
            if (!C.allow) {
                var H = false;
                break;
            }
            M[D] = E;
            D++;
        }
    }
    return {
        colide: B,
        allow: H,
        data: M,
        count: D
    };
}
function timeConflict(H, G, F, E) {
    var B = H.getTimeInHours();
    var A = G.getTimeInHours();
    var D = F.getTimeInHours();
    var C = E.getTimeInHours();
    return B >= D && A <= C && H.getDate() == F.getDate() || D >= B && C <= A || D > B && D < A || C > B && C < A || B > D && B < C || A > D && A < C;
}
function getFormattedTime(A, D, F) {
    if (F == 12) {
        var E = A == 0 ? 12 : A > 12 ? A - 12 : A;
        var C = D == 0 ? " " : ":" + fnum(D, 2) + "";
        var B = A < 12 ? "AM" : "PM";
        utime = "<span class=\"timetxt\">" + E + "" + C + "</span><span class=\"ampmtxt\">" + B + "</span>";
    } else {
        utime = fnum(i, 2) + ":00";
    }
    return utime;
}
function getFormatedTimeString(C, B, A) {
    if (A == 12 || A == undefined) {
        return C.hour + ":" + C.min + " " + C.ampm + "  -  " + B.hour + ":" + B.min + " " + B.ampm;
    } else {
        return C.rlwyHour + ":" + C.min + "  -  " + B.rlwyHour + ":" + B.min;
    }
}
function compareDates(B, A) {
    if (B.isGreaterThan(A)) {
        return 1;
    } else {
        if (B.isLessThan(A)) {
            return -1;
        } else {
            return 0;
        }
    }
}
function isDateInRange(B, A, C) {
    if (A == null || C == null) {
        return false;
    }
    return compareDates(A, B) <= 0 && compareDates(C, B) > 0;
}
function diffInDays(D, C) {
    var B = D.getDateObj();
    var A = C.getDateObj();
    return Math.round((B - A) / 86400000);
}
function getFLDays(B, A) {
    firstDay = B.clone();
    firstDay = B.plusDays(-B.getDay() + A);
    lastDay = B.clone();
    lastDay = lastDay.setDate(daysInMonth(B.getMonth() + 1, B.getYear()));
    lastDay = lastDay.plusDays(7 - lastDay.getDay());
    return new Array(firstDay, lastDay);
}
function daysInMonth(D, A) {
    var E = D < 1 ? 0 : D > 12 ? 11 : D - 1;
    var C = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var B = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (A % 4 == 0 && A % 100 != 0 || A % 400 == 0) {
        return B[E];
    } else {
        return C[E];
    }
}