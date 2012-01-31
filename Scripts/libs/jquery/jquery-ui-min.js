﻿/*!
* jQuery UI 1.8.16
*
* Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* http://docs.jquery.com/UI
*/
(function (a, d) {
    function c(h, g) { var i = h.nodeName.toLowerCase(); if ("area" === i) { g = h.parentNode; i = g.name; if (!h.href || !i || g.nodeName.toLowerCase() !== "map") return false; h = a("img[usemap=#" + i + "]")[0]; return !!h && e(h) } return (/input|select|textarea|button|object/.test(i) ? !h.disabled : "a" == i ? h.href || g : g) && e(h) } function e(h) { return !a(h).parents().andSelf().filter(function () { return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this) }).length } a.ui = a.ui || {}; if (!a.ui.version) {
        a.extend(a.ui, { version: "1.8.16",
            keyCode: { ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91}
        }); a.fn.extend({ propAttr: a.fn.prop || a.fn.attr, _focus: a.fn.focus, focus: function (h, g) {
            return typeof h === "number" ? this.each(function () {
                var i =
this; setTimeout(function () { a(i).focus(); g && g.call(i) }, h)
            }) : this._focus.apply(this, arguments)
        }, scrollParent: function () {
            var h; h = a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () { return /(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1)) }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(a.curCSS(this,
"overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
            }).eq(0); return /fixed/.test(this.css("position")) || !h.length ? a(document) : h
        }, zIndex: function (h) { if (h !== d) return this.css("zIndex", h); if (this.length) { h = a(this[0]); for (var g; h.length && h[0] !== document; ) { g = h.css("position"); if (g === "absolute" || g === "relative" || g === "fixed") { g = parseInt(h.css("zIndex"), 10); if (!isNaN(g) && g !== 0) return g } h = h.parent() } } return 0 }, disableSelection: function () {
            return this.bind((a.support.selectstart ? "selectstart" :
"mousedown") + ".ui-disableSelection", function (h) { h.preventDefault() })
        }, enableSelection: function () { return this.unbind(".ui-disableSelection") } 
        }); a.each(["Width", "Height"], function (h, g) {
            function i(l, o, n, k) { a.each(b, function () { o -= parseFloat(a.curCSS(l, "padding" + this, true)) || 0; if (n) o -= parseFloat(a.curCSS(l, "border" + this + "Width", true)) || 0; if (k) o -= parseFloat(a.curCSS(l, "margin" + this, true)) || 0 }); return o } var b = g === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], f = g.toLowerCase(), j = { innerWidth: a.fn.innerWidth, innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth, outerHeight: a.fn.outerHeight
            }; a.fn["inner" + g] = function (l) { if (l === d) return j["inner" + g].call(this); return this.each(function () { a(this).css(f, i(this, l) + "px") }) }; a.fn["outer" + g] = function (l, o) { if (typeof l !== "number") return j["outer" + g].call(this, l); return this.each(function () { a(this).css(f, i(this, l, true, o) + "px") }) } 
        }); a.extend(a.expr[":"], { data: function (h, g, i) { return !!a.data(h, i[3]) }, focusable: function (h) { return c(h, !isNaN(a.attr(h, "tabindex"))) }, tabbable: function (h) {
            var g = a.attr(h,
"tabindex"), i = isNaN(g); return (i || g >= 0) && c(h, !i)
        } 
        }); a(function () { var h = document.body, g = h.appendChild(g = document.createElement("div")); a.extend(g.style, { minHeight: "100px", height: "auto", padding: 0, borderWidth: 0 }); a.support.minHeight = g.offsetHeight === 100; a.support.selectstart = "onselectstart" in g; h.removeChild(g).style.display = "none" }); a.extend(a.ui, { plugin: { add: function (h, g, i) { h = a.ui[h].prototype; for (var b in i) { h.plugins[b] = h.plugins[b] || []; h.plugins[b].push([g, i[b]]) } }, call: function (h, g, i) {
            if ((g = h.plugins[g]) &&
h.element[0].parentNode) for (var b = 0; b < g.length; b++) h.options[g[b][0]] && g[b][1].apply(h.element, i)
        } 
        }, contains: function (h, g) { return document.compareDocumentPosition ? h.compareDocumentPosition(g) & 16 : h !== g && h.contains(g) }, hasScroll: function (h, g) { if (a(h).css("overflow") === "hidden") return false; g = g && g === "left" ? "scrollLeft" : "scrollTop"; var i = false; if (h[g] > 0) return true; h[g] = 1; i = h[g] > 0; h[g] = 0; return i }, isOverAxis: function (h, g, i) { return h > g && h < g + i }, isOver: function (h, g, i, b, f, j) {
            return a.ui.isOverAxis(h, i, f) &&
a.ui.isOverAxis(g, b, j)
        } 
        })
    } 
})(jQuery);
(function (a, d) {
    if (a.cleanData) { var c = a.cleanData; a.cleanData = function (h) { for (var g = 0, i; (i = h[g]) != null; g++) try { a(i).triggerHandler("remove") } catch (b) { } c(h) } } else { var e = a.fn.remove; a.fn.remove = function (h, g) { return this.each(function () { if (!g) if (!h || a.filter(h, [this]).length) a("*", this).add([this]).each(function () { try { a(this).triggerHandler("remove") } catch (i) { } }); return e.call(a(this), h, g) }) } } a.widget = function (h, g, i) {
        var b = h.split(".")[0], f; h = h.split(".")[1]; f = b + "-" + h; if (!i) { i = g; g = a.Widget } a.expr[":"][f] =
function (j) { return !!a.data(j, h) }; a[b] = a[b] || {}; a[b][h] = function (j, l) { arguments.length && this._createWidget(j, l) }; g = new g; g.options = a.extend(true, {}, g.options); a[b][h].prototype = a.extend(true, g, { namespace: b, widgetName: h, widgetEventPrefix: a[b][h].prototype.widgetEventPrefix || h, widgetBaseClass: f }, i); a.widget.bridge(h, a[b][h])
    }; a.widget.bridge = function (h, g) {
        a.fn[h] = function (i) {
            var b = typeof i === "string", f = Array.prototype.slice.call(arguments, 1), j = this; i = !b && f.length ? a.extend.apply(null, [true, i].concat(f)) :
i; if (b && i.charAt(0) === "_") return j; b ? this.each(function () { var l = a.data(this, h), o = l && a.isFunction(l[i]) ? l[i].apply(l, f) : l; if (o !== l && o !== d) { j = o; return false } }) : this.each(function () { var l = a.data(this, h); l ? l.option(i || {})._init() : a.data(this, h, new g(i, this)) }); return j
        } 
    }; a.Widget = function (h, g) { arguments.length && this._createWidget(h, g) }; a.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", options: { disabled: false }, _createWidget: function (h, g) {
        a.data(g, this.widgetName, this); this.element = a(g); this.options =
a.extend(true, {}, this.options, this._getCreateOptions(), h); var i = this; this.element.bind("remove." + this.widgetName, function () { i.destroy() }); this._create(); this._trigger("create"); this._init()
    }, _getCreateOptions: function () { return a.metadata && a.metadata.get(this.element[0])[this.widgetName] }, _create: function () { }, _init: function () { }, destroy: function () {
        this.element.unbind("." + this.widgetName).removeData(this.widgetName); this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass +
"-disabled ui-state-disabled")
    }, widget: function () { return this.element }, option: function (h, g) { var i = h; if (arguments.length === 0) return a.extend({}, this.options); if (typeof h === "string") { if (g === d) return this.options[h]; i = {}; i[h] = g } this._setOptions(i); return this }, _setOptions: function (h) { var g = this; a.each(h, function (i, b) { g._setOption(i, b) }); return this }, _setOption: function (h, g) {
        this.options[h] = g; if (h === "disabled") this.widget()[g ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled",
g); return this
    }, enable: function () { return this._setOption("disabled", false) }, disable: function () { return this._setOption("disabled", true) }, _trigger: function (h, g, i) { var b = this.options[h]; g = a.Event(g); g.type = (h === this.widgetEventPrefix ? h : this.widgetEventPrefix + h).toLowerCase(); i = i || {}; if (g.originalEvent) { h = a.event.props.length; for (var f; h; ) { f = a.event.props[--h]; g[f] = g.originalEvent[f] } } this.element.trigger(g, i); return !(a.isFunction(b) && b.call(this.element[0], g, i) === false || g.isDefaultPrevented()) } 
    }
})(jQuery);
(function (a) {
    var d = false; a(document).mouseup(function () { d = false }); a.widget("ui.mouse", { options: { cancel: ":input,option", distance: 1, delay: 0 }, _mouseInit: function () { var c = this; this.element.bind("mousedown." + this.widgetName, function (e) { return c._mouseDown(e) }).bind("click." + this.widgetName, function (e) { if (true === a.data(e.target, c.widgetName + ".preventClickEvent")) { a.removeData(e.target, c.widgetName + ".preventClickEvent"); e.stopImmediatePropagation(); return false } }); this.started = false }, _mouseDestroy: function () {
        this.element.unbind("." +
this.widgetName)
    }, _mouseDown: function (c) {
        if (!d) {
            this._mouseStarted && this._mouseUp(c); this._mouseDownEvent = c; var e = this, h = c.which == 1, g = typeof this.options.cancel == "string" && c.target.nodeName ? a(c.target).closest(this.options.cancel).length : false; if (!h || g || !this._mouseCapture(c)) return true; this.mouseDelayMet = !this.options.delay; if (!this.mouseDelayMet) this._mouseDelayTimer = setTimeout(function () { e.mouseDelayMet = true }, this.options.delay); if (this._mouseDistanceMet(c) && this._mouseDelayMet(c)) {
                this._mouseStarted =
this._mouseStart(c) !== false; if (!this._mouseStarted) { c.preventDefault(); return true } 
            } true === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"); this._mouseMoveDelegate = function (i) { return e._mouseMove(i) }; this._mouseUpDelegate = function (i) { return e._mouseUp(i) }; a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate); c.preventDefault(); return d = true
        } 
    }, _mouseMove: function (c) {
        if (a.browser.msie &&
!(document.documentMode >= 9) && !c.button) return this._mouseUp(c); if (this._mouseStarted) { this._mouseDrag(c); return c.preventDefault() } if (this._mouseDistanceMet(c) && this._mouseDelayMet(c)) (this._mouseStarted = this._mouseStart(this._mouseDownEvent, c) !== false) ? this._mouseDrag(c) : this._mouseUp(c); return !this._mouseStarted
    }, _mouseUp: function (c) {
        a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate); if (this._mouseStarted) {
            this._mouseStarted =
false; c.target == this._mouseDownEvent.target && a.data(c.target, this.widgetName + ".preventClickEvent", true); this._mouseStop(c)
        } return false
    }, _mouseDistanceMet: function (c) { return Math.max(Math.abs(this._mouseDownEvent.pageX - c.pageX), Math.abs(this._mouseDownEvent.pageY - c.pageY)) >= this.options.distance }, _mouseDelayMet: function () { return this.mouseDelayMet }, _mouseStart: function () { }, _mouseDrag: function () { }, _mouseStop: function () { }, _mouseCapture: function () { return true } 
    })
})(jQuery);
(function (a) {
    a.widget("ui.draggable", a.ui.mouse, { widgetEventPrefix: "drag", options: { addClasses: true, appendTo: "parent", axis: false, connectToSortable: false, containment: false, cursor: "auto", cursorAt: false, grid: false, handle: false, helper: "original", iframeFix: false, opacity: false, refreshPositions: false, revert: false, revertDuration: 500, scope: "default", scroll: true, scrollSensitivity: 20, scrollSpeed: 20, snap: false, snapMode: "both", snapTolerance: 20, stack: false, zIndex: false }, _create: function () {
        if (this.options.helper ==
"original" && !/^(?:r|a|f)/.test(this.element.css("position"))) this.element[0].style.position = "relative"; this.options.addClasses && this.element.addClass("ui-draggable"); this.options.disabled && this.element.addClass("ui-draggable-disabled"); this._mouseInit()
    }, destroy: function () { if (this.element.data("draggable")) { this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"); this._mouseDestroy(); return this } }, _mouseCapture: function (d) {
        var c =
this.options; if (this.helper || c.disabled || a(d.target).is(".ui-resizable-handle")) return false; this.handle = this._getHandle(d); if (!this.handle) return false; if (c.iframeFix) a(c.iframeFix === true ? "iframe" : c.iframeFix).each(function () { a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({ width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1E3 }).css(a(this).offset()).appendTo("body") }); return true
    }, _mouseStart: function (d) {
        var c = this.options;
        this.helper = this._createHelper(d); this._cacheHelperProportions(); if (a.ui.ddmanager) a.ui.ddmanager.current = this; this._cacheMargins(); this.cssPosition = this.helper.css("position"); this.scrollParent = this.helper.scrollParent(); this.offset = this.positionAbs = this.element.offset(); this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }; a.extend(this.offset, { click: { left: d.pageX - this.offset.left, top: d.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() });
        this.originalPosition = this.position = this._generatePosition(d); this.originalPageX = d.pageX; this.originalPageY = d.pageY; c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt); c.containment && this._setContainment(); if (this._trigger("start", d) === false) { this._clear(); return false } this._cacheHelperProportions(); a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, d); this.helper.addClass("ui-draggable-dragging"); this._mouseDrag(d, true); a.ui.ddmanager && a.ui.ddmanager.dragStart(this, d); return true
    },
        _mouseDrag: function (d, c) { this.position = this._generatePosition(d); this.positionAbs = this._convertPositionTo("absolute"); if (!c) { c = this._uiHash(); if (this._trigger("drag", d, c) === false) { this._mouseUp({}); return false } this.position = c.position } if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px"; if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px"; a.ui.ddmanager && a.ui.ddmanager.drag(this, d); return false }, _mouseStop: function (d) {
            var c =
false; if (a.ui.ddmanager && !this.options.dropBehaviour) c = a.ui.ddmanager.drop(this, d); if (this.dropped) { c = this.dropped; this.dropped = false } if ((!this.element[0] || !this.element[0].parentNode) && this.options.helper == "original") return false; if (this.options.revert == "invalid" && !c || this.options.revert == "valid" && c || this.options.revert === true || a.isFunction(this.options.revert) && this.options.revert.call(this.element, c)) {
                var e = this; a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration,
10), function () { e._trigger("stop", d) !== false && e._clear() })
            } else this._trigger("stop", d) !== false && this._clear(); return false
        }, _mouseUp: function (d) { this.options.iframeFix === true && a("div.ui-draggable-iframeFix").each(function () { this.parentNode.removeChild(this) }); a.ui.ddmanager && a.ui.ddmanager.dragStop(this, d); return a.ui.mouse.prototype._mouseUp.call(this, d) }, cancel: function () { this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(); return this }, _getHandle: function (d) {
            var c = !this.options.handle ||
!a(this.options.handle, this.element).length ? true : false; a(this.options.handle, this.element).find("*").andSelf().each(function () { if (this == d.target) c = true }); return c
        }, _createHelper: function (d) {
            var c = this.options; d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [d])) : c.helper == "clone" ? this.element.clone().removeAttr("id") : this.element; d.parents("body").length || d.appendTo(c.appendTo == "parent" ? this.element[0].parentNode : c.appendTo); d[0] != this.element[0] && !/(fixed|absolute)/.test(d.css("position")) &&
d.css("position", "absolute"); return d
        }, _adjustOffsetFromHelper: function (d) { if (typeof d == "string") d = d.split(" "); if (a.isArray(d)) d = { left: +d[0], top: +d[1] || 0 }; if ("left" in d) this.offset.click.left = d.left + this.margins.left; if ("right" in d) this.offset.click.left = this.helperProportions.width - d.right + this.margins.left; if ("top" in d) this.offset.click.top = d.top + this.margins.top; if ("bottom" in d) this.offset.click.top = this.helperProportions.height - d.bottom + this.margins.top }, _getParentOffset: function () {
            this.offsetParent =
this.helper.offsetParent(); var d = this.offsetParent.offset(); if (this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) { d.left += this.scrollParent.scrollLeft(); d.top += this.scrollParent.scrollTop() } if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) d = { top: 0, left: 0 }; return { top: d.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: d.left + (parseInt(this.offsetParent.css("borderLeftWidth"),
10) || 0)
}
        }, _getRelativeOffset: function () { if (this.cssPosition == "relative") { var d = this.element.position(); return { top: d.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: d.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()} } else return { top: 0, left: 0} }, _cacheMargins: function () {
            this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"),
10) || 0
            }
        }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight()} }, _setContainment: function () {
            var d = this.options; if (d.containment == "parent") d.containment = this.helper[0].parentNode; if (d.containment == "document" || d.containment == "window") this.containment = [d.containment == "document" ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, d.containment == "document" ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
(d.containment == "document" ? 0 : a(window).scrollLeft()) + a(d.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (d.containment == "document" ? 0 : a(window).scrollTop()) + (a(d.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]; if (!/^(document|window|parent)$/.test(d.containment) && d.containment.constructor != Array) {
                d = a(d.containment); var c = d[0]; if (c) {
                    d.offset(); var e = a(c).css("overflow") !=
"hidden"; this.containment = [(parseInt(a(c).css("borderLeftWidth"), 10) || 0) + (parseInt(a(c).css("paddingLeft"), 10) || 0), (parseInt(a(c).css("borderTopWidth"), 10) || 0) + (parseInt(a(c).css("paddingTop"), 10) || 0), (e ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(a(c).css("borderLeftWidth"), 10) || 0) - (parseInt(a(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(a(c).css("borderTopWidth"),
10) || 0) - (parseInt(a(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom]; this.relative_container = d
                } 
            } else if (d.containment.constructor == Array) this.containment = d.containment
        }, _convertPositionTo: function (d, c) {
            if (!c) c = this.position; d = d == "absolute" ? 1 : -1; var e = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, h = /(html|body)/i.test(e[0].tagName); return { top: c.top +
this.offset.relative.top * d + this.offset.parent.top * d - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : h ? 0 : e.scrollTop()) * d), left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : h ? 0 : e.scrollLeft()) * d)
            }
        }, _generatePosition: function (d) {
            var c = this.options, e = this.cssPosition == "absolute" &&
!(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, h = /(html|body)/i.test(e[0].tagName), g = d.pageX, i = d.pageY; if (this.originalPosition) {
                var b; if (this.containment) {
                    if (this.relative_container) { b = this.relative_container.offset(); b = [this.containment[0] + b.left, this.containment[1] + b.top, this.containment[2] + b.left, this.containment[3] + b.top] } else b = this.containment; if (d.pageX - this.offset.click.left < b[0]) g = b[0] + this.offset.click.left;
                    if (d.pageY - this.offset.click.top < b[1]) i = b[1] + this.offset.click.top; if (d.pageX - this.offset.click.left > b[2]) g = b[2] + this.offset.click.left; if (d.pageY - this.offset.click.top > b[3]) i = b[3] + this.offset.click.top
                } if (c.grid) {
                    i = c.grid[1] ? this.originalPageY + Math.round((i - this.originalPageY) / c.grid[1]) * c.grid[1] : this.originalPageY; i = b ? !(i - this.offset.click.top < b[1] || i - this.offset.click.top > b[3]) ? i : !(i - this.offset.click.top < b[1]) ? i - c.grid[1] : i + c.grid[1] : i; g = c.grid[0] ? this.originalPageX + Math.round((g - this.originalPageX) /
c.grid[0]) * c.grid[0] : this.originalPageX; g = b ? !(g - this.offset.click.left < b[0] || g - this.offset.click.left > b[2]) ? g : !(g - this.offset.click.left < b[0]) ? g - c.grid[0] : g + c.grid[0] : g
                } 
            } return { top: i - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : h ? 0 : e.scrollTop()), left: g - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && a.browser.version <
526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : h ? 0 : e.scrollLeft())
            }
        }, _clear: function () { this.helper.removeClass("ui-draggable-dragging"); this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(); this.helper = null; this.cancelHelperRemoval = false }, _trigger: function (d, c, e) {
            e = e || this._uiHash(); a.ui.plugin.call(this, d, [c, e]); if (d == "drag") this.positionAbs = this._convertPositionTo("absolute"); return a.Widget.prototype._trigger.call(this, d, c,
e)
        }, plugins: {}, _uiHash: function () { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs} } 
    }); a.extend(a.ui.draggable, { version: "1.8.16" }); a.ui.plugin.add("draggable", "connectToSortable", { start: function (d, c) {
        var e = a(this).data("draggable"), h = e.options, g = a.extend({}, c, { item: e.element }); e.sortables = []; a(h.connectToSortable).each(function () {
            var i = a.data(this, "sortable"); if (i && !i.options.disabled) {
                e.sortables.push({ instance: i, shouldRevert: i.options.revert });
                i.refreshPositions(); i._trigger("activate", d, g)
            } 
        })
    }, stop: function (d, c) {
        var e = a(this).data("draggable"), h = a.extend({}, c, { item: e.element }); a.each(e.sortables, function () {
            if (this.instance.isOver) { this.instance.isOver = 0; e.cancelHelperRemoval = true; this.instance.cancelHelperRemoval = false; if (this.shouldRevert) this.instance.options.revert = true; this.instance._mouseStop(d); this.instance.options.helper = this.instance.options._helper; e.options.helper == "original" && this.instance.currentItem.css({ top: "auto", left: "auto" }) } else {
                this.instance.cancelHelperRemoval =
false; this.instance._trigger("deactivate", d, h)
            } 
        })
    }, drag: function (d, c) {
        var e = a(this).data("draggable"), h = this; a.each(e.sortables, function () {
            this.instance.positionAbs = e.positionAbs; this.instance.helperProportions = e.helperProportions; this.instance.offset.click = e.offset.click; if (this.instance._intersectsWith(this.instance.containerCache)) {
                if (!this.instance.isOver) {
                    this.instance.isOver = 1; this.instance.currentItem = a(h).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", true);
                    this.instance.options._helper = this.instance.options.helper; this.instance.options.helper = function () { return c.helper[0] }; d.target = this.instance.currentItem[0]; this.instance._mouseCapture(d, true); this.instance._mouseStart(d, true, true); this.instance.offset.click.top = e.offset.click.top; this.instance.offset.click.left = e.offset.click.left; this.instance.offset.parent.left -= e.offset.parent.left - this.instance.offset.parent.left; this.instance.offset.parent.top -= e.offset.parent.top - this.instance.offset.parent.top;
                    e._trigger("toSortable", d); e.dropped = this.instance.element; e.currentItem = e.element; this.instance.fromOutside = e
                } this.instance.currentItem && this.instance._mouseDrag(d)
            } else if (this.instance.isOver) {
                this.instance.isOver = 0; this.instance.cancelHelperRemoval = true; this.instance.options.revert = false; this.instance._trigger("out", d, this.instance._uiHash(this.instance)); this.instance._mouseStop(d, true); this.instance.options.helper = this.instance.options._helper; this.instance.currentItem.remove(); this.instance.placeholder &&
this.instance.placeholder.remove(); e._trigger("fromSortable", d); e.dropped = false
            } 
        })
    } 
    }); a.ui.plugin.add("draggable", "cursor", { start: function () { var d = a("body"), c = a(this).data("draggable").options; if (d.css("cursor")) c._cursor = d.css("cursor"); d.css("cursor", c.cursor) }, stop: function () { var d = a(this).data("draggable").options; d._cursor && a("body").css("cursor", d._cursor) } }); a.ui.plugin.add("draggable", "opacity", { start: function (d, c) {
        d = a(c.helper); c = a(this).data("draggable").options; if (d.css("opacity")) c._opacity =
d.css("opacity"); d.css("opacity", c.opacity)
    }, stop: function (d, c) { d = a(this).data("draggable").options; d._opacity && a(c.helper).css("opacity", d._opacity) } 
    }); a.ui.plugin.add("draggable", "scroll", { start: function () { var d = a(this).data("draggable"); if (d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML") d.overflowOffset = d.scrollParent.offset() }, drag: function (d) {
        var c = a(this).data("draggable"), e = c.options, h = false; if (c.scrollParent[0] != document && c.scrollParent[0].tagName != "HTML") {
            if (!e.axis || e.axis !=
"x") if (c.overflowOffset.top + c.scrollParent[0].offsetHeight - d.pageY < e.scrollSensitivity) c.scrollParent[0].scrollTop = h = c.scrollParent[0].scrollTop + e.scrollSpeed; else if (d.pageY - c.overflowOffset.top < e.scrollSensitivity) c.scrollParent[0].scrollTop = h = c.scrollParent[0].scrollTop - e.scrollSpeed; if (!e.axis || e.axis != "y") if (c.overflowOffset.left + c.scrollParent[0].offsetWidth - d.pageX < e.scrollSensitivity) c.scrollParent[0].scrollLeft = h = c.scrollParent[0].scrollLeft + e.scrollSpeed; else if (d.pageX - c.overflowOffset.left <
e.scrollSensitivity) c.scrollParent[0].scrollLeft = h = c.scrollParent[0].scrollLeft - e.scrollSpeed
        } else {
            if (!e.axis || e.axis != "x") if (d.pageY - a(document).scrollTop() < e.scrollSensitivity) h = a(document).scrollTop(a(document).scrollTop() - e.scrollSpeed); else if (a(window).height() - (d.pageY - a(document).scrollTop()) < e.scrollSensitivity) h = a(document).scrollTop(a(document).scrollTop() + e.scrollSpeed); if (!e.axis || e.axis != "y") if (d.pageX - a(document).scrollLeft() < e.scrollSensitivity) h = a(document).scrollLeft(a(document).scrollLeft() -
e.scrollSpeed); else if (a(window).width() - (d.pageX - a(document).scrollLeft()) < e.scrollSensitivity) h = a(document).scrollLeft(a(document).scrollLeft() + e.scrollSpeed)
        } h !== false && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(c, d)
    } 
    }); a.ui.plugin.add("draggable", "snap", { start: function () {
        var d = a(this).data("draggable"), c = d.options; d.snapElements = []; a(c.snap.constructor != String ? c.snap.items || ":data(draggable)" : c.snap).each(function () {
            var e = a(this), h = e.offset(); this != d.element[0] && d.snapElements.push({ item: this,
                width: e.outerWidth(), height: e.outerHeight(), top: h.top, left: h.left
            })
        })
    }, drag: function (d, c) {
        for (var e = a(this).data("draggable"), h = e.options, g = h.snapTolerance, i = c.offset.left, b = i + e.helperProportions.width, f = c.offset.top, j = f + e.helperProportions.height, l = e.snapElements.length - 1; l >= 0; l--) {
            var o = e.snapElements[l].left, n = o + e.snapElements[l].width, k = e.snapElements[l].top, m = k + e.snapElements[l].height; if (o - g < i && i < n + g && k - g < f && f < m + g || o - g < i && i < n + g && k - g < j && j < m + g || o - g < b && b < n + g && k - g < f && f < m + g || o - g < b && b < n + g && k - g < j &&
j < m + g) {
                if (h.snapMode != "inner") { var p = Math.abs(k - j) <= g, q = Math.abs(m - f) <= g, s = Math.abs(o - b) <= g, r = Math.abs(n - i) <= g; if (p) c.position.top = e._convertPositionTo("relative", { top: k - e.helperProportions.height, left: 0 }).top - e.margins.top; if (q) c.position.top = e._convertPositionTo("relative", { top: m, left: 0 }).top - e.margins.top; if (s) c.position.left = e._convertPositionTo("relative", { top: 0, left: o - e.helperProportions.width }).left - e.margins.left; if (r) c.position.left = e._convertPositionTo("relative", { top: 0, left: n }).left - e.margins.left } var u =
p || q || s || r; if (h.snapMode != "outer") { p = Math.abs(k - f) <= g; q = Math.abs(m - j) <= g; s = Math.abs(o - i) <= g; r = Math.abs(n - b) <= g; if (p) c.position.top = e._convertPositionTo("relative", { top: k, left: 0 }).top - e.margins.top; if (q) c.position.top = e._convertPositionTo("relative", { top: m - e.helperProportions.height, left: 0 }).top - e.margins.top; if (s) c.position.left = e._convertPositionTo("relative", { top: 0, left: o }).left - e.margins.left; if (r) c.position.left = e._convertPositionTo("relative", { top: 0, left: n - e.helperProportions.width }).left - e.margins.left } if (!e.snapElements[l].snapping &&
(p || q || s || r || u)) e.options.snap.snap && e.options.snap.snap.call(e.element, d, a.extend(e._uiHash(), { snapItem: e.snapElements[l].item })); e.snapElements[l].snapping = p || q || s || r || u
            } else { e.snapElements[l].snapping && e.options.snap.release && e.options.snap.release.call(e.element, d, a.extend(e._uiHash(), { snapItem: e.snapElements[l].item })); e.snapElements[l].snapping = false } 
        } 
    } 
    }); a.ui.plugin.add("draggable", "stack", { start: function () {
        var d = a(this).data("draggable").options; d = a.makeArray(a(d.stack)).sort(function (e, h) {
            return (parseInt(a(e).css("zIndex"),
10) || 0) - (parseInt(a(h).css("zIndex"), 10) || 0)
        }); if (d.length) { var c = parseInt(d[0].style.zIndex) || 0; a(d).each(function (e) { this.style.zIndex = c + e }); this[0].style.zIndex = c + d.length } 
    } 
    }); a.ui.plugin.add("draggable", "zIndex", { start: function (d, c) { d = a(c.helper); c = a(this).data("draggable").options; if (d.css("zIndex")) c._zIndex = d.css("zIndex"); d.css("zIndex", c.zIndex) }, stop: function (d, c) { d = a(this).data("draggable").options; d._zIndex && a(c.helper).css("zIndex", d._zIndex) } })
})(jQuery);
(function (a) {
    a.widget("ui.droppable", { widgetEventPrefix: "drop", options: { accept: "*", activeClass: false, addClasses: true, greedy: false, hoverClass: false, scope: "default", tolerance: "intersect" }, _create: function () {
        var d = this.options, c = d.accept; this.isover = 0; this.isout = 1; this.accept = a.isFunction(c) ? c : function (e) { return e.is(c) }; this.proportions = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight }; a.ui.ddmanager.droppables[d.scope] = a.ui.ddmanager.droppables[d.scope] || []; a.ui.ddmanager.droppables[d.scope].push(this);
        d.addClasses && this.element.addClass("ui-droppable")
    }, destroy: function () { for (var d = a.ui.ddmanager.droppables[this.options.scope], c = 0; c < d.length; c++) d[c] == this && d.splice(c, 1); this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"); return this }, _setOption: function (d, c) { if (d == "accept") this.accept = a.isFunction(c) ? c : function (e) { return e.is(c) }; a.Widget.prototype._setOption.apply(this, arguments) }, _activate: function (d) {
        var c = a.ui.ddmanager.current; this.options.activeClass &&
this.element.addClass(this.options.activeClass); c && this._trigger("activate", d, this.ui(c))
    }, _deactivate: function (d) { var c = a.ui.ddmanager.current; this.options.activeClass && this.element.removeClass(this.options.activeClass); c && this._trigger("deactivate", d, this.ui(c)) }, _over: function (d) {
        var c = a.ui.ddmanager.current; if (!(!c || (c.currentItem || c.element)[0] == this.element[0])) if (this.accept.call(this.element[0], c.currentItem || c.element)) {
            this.options.hoverClass && this.element.addClass(this.options.hoverClass);
            this._trigger("over", d, this.ui(c))
        } 
    }, _out: function (d) { var c = a.ui.ddmanager.current; if (!(!c || (c.currentItem || c.element)[0] == this.element[0])) if (this.accept.call(this.element[0], c.currentItem || c.element)) { this.options.hoverClass && this.element.removeClass(this.options.hoverClass); this._trigger("out", d, this.ui(c)) } }, _drop: function (d, c) {
        var e = c || a.ui.ddmanager.current; if (!e || (e.currentItem || e.element)[0] == this.element[0]) return false; var h = false; this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
            var g =
a.data(this, "droppable"); if (g.options.greedy && !g.options.disabled && g.options.scope == e.options.scope && g.accept.call(g.element[0], e.currentItem || e.element) && a.ui.intersect(e, a.extend(g, { offset: g.element.offset() }), g.options.tolerance)) { h = true; return false } 
        }); if (h) return false; if (this.accept.call(this.element[0], e.currentItem || e.element)) {
            this.options.activeClass && this.element.removeClass(this.options.activeClass); this.options.hoverClass && this.element.removeClass(this.options.hoverClass); this._trigger("drop",
d, this.ui(e)); return this.element
        } return false
    }, ui: function (d) { return { draggable: d.currentItem || d.element, helper: d.helper, position: d.position, offset: d.positionAbs} } 
    }); a.extend(a.ui.droppable, { version: "1.8.16" }); a.ui.intersect = function (d, c, e) {
        if (!c.offset) return false; var h = (d.positionAbs || d.position.absolute).left, g = h + d.helperProportions.width, i = (d.positionAbs || d.position.absolute).top, b = i + d.helperProportions.height, f = c.offset.left, j = f + c.proportions.width, l = c.offset.top, o = l + c.proportions.height;
        switch (e) {
            case "fit": return f <= h && g <= j && l <= i && b <= o; case "intersect": return f < h + d.helperProportions.width / 2 && g - d.helperProportions.width / 2 < j && l < i + d.helperProportions.height / 2 && b - d.helperProportions.height / 2 < o; case "pointer": return a.ui.isOver((d.positionAbs || d.position.absolute).top + (d.clickOffset || d.offset.click).top, (d.positionAbs || d.position.absolute).left + (d.clickOffset || d.offset.click).left, l, f, c.proportions.height, c.proportions.width); case "touch": return (i >= l && i <= o || b >= l && b <= o || i < l && b > o) && (h >=
f && h <= j || g >= f && g <= j || h < f && g > j); default: return false
        } 
    }; a.ui.ddmanager = { current: null, droppables: { "default": [] }, prepareOffsets: function (d, c) {
        var e = a.ui.ddmanager.droppables[d.options.scope] || [], h = c ? c.type : null, g = (d.currentItem || d.element).find(":data(droppable)").andSelf(), i = 0; a: for (; i < e.length; i++) if (!(e[i].options.disabled || d && !e[i].accept.call(e[i].element[0], d.currentItem || d.element))) {
            for (var b = 0; b < g.length; b++) if (g[b] == e[i].element[0]) { e[i].proportions.height = 0; continue a } e[i].visible = e[i].element.css("display") !=
"none"; if (e[i].visible) { h == "mousedown" && e[i]._activate.call(e[i], c); e[i].offset = e[i].element.offset(); e[i].proportions = { width: e[i].element[0].offsetWidth, height: e[i].element[0].offsetHeight} } 
        } 
    }, drop: function (d, c) {
        var e = false; a.each(a.ui.ddmanager.droppables[d.options.scope] || [], function () {
            if (this.options) {
                if (!this.options.disabled && this.visible && a.ui.intersect(d, this, this.options.tolerance)) e = e || this._drop.call(this, c); if (!this.options.disabled && this.visible && this.accept.call(this.element[0], d.currentItem ||
d.element)) { this.isout = 1; this.isover = 0; this._deactivate.call(this, c) } 
            } 
        }); return e
    }, dragStart: function (d, c) { d.element.parents(":not(body,html)").bind("scroll.droppable", function () { d.options.refreshPositions || a.ui.ddmanager.prepareOffsets(d, c) }) }, drag: function (d, c) {
        d.options.refreshPositions && a.ui.ddmanager.prepareOffsets(d, c); a.each(a.ui.ddmanager.droppables[d.options.scope] || [], function () {
            if (!(this.options.disabled || this.greedyChild || !this.visible)) {
                var e = a.ui.intersect(d, this, this.options.tolerance);
                if (e = !e && this.isover == 1 ? "isout" : e && this.isover == 0 ? "isover" : null) { var h; if (this.options.greedy) { var g = this.element.parents(":data(droppable):eq(0)"); if (g.length) { h = a.data(g[0], "droppable"); h.greedyChild = e == "isover" ? 1 : 0 } } if (h && e == "isover") { h.isover = 0; h.isout = 1; h._out.call(h, c) } this[e] = 1; this[e == "isout" ? "isover" : "isout"] = 0; this[e == "isover" ? "_over" : "_out"].call(this, c); if (h && e == "isout") { h.isout = 0; h.isover = 1; h._over.call(h, c) } } 
            } 
        })
    }, dragStop: function (d, c) {
        d.element.parents(":not(body,html)").unbind("scroll.droppable");
        d.options.refreshPositions || a.ui.ddmanager.prepareOffsets(d, c)
    } 
    }
})(jQuery);
(function (a) {
    a.widget("ui.resizable", a.ui.mouse, { widgetEventPrefix: "resize", options: { alsoResize: false, animate: false, animateDuration: "slow", animateEasing: "swing", aspectRatio: false, autoHide: false, containment: false, ghost: false, grid: false, handles: "e,s,se", helper: false, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 1E3 }, _create: function () {
        var e = this, h = this.options; this.element.addClass("ui-resizable"); a.extend(this, { _aspectRatio: !!h.aspectRatio, aspectRatio: h.aspectRatio, originalElement: this.element,
            _proportionallyResizeElements: [], _helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null
        }); if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
            /relative/.test(this.element.css("position")) && a.browser.opera && this.element.css({ position: "relative", top: "auto", left: "auto" }); this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(),
                top: this.element.css("top"), left: this.element.css("left")
            })); this.element = this.element.parent().data("resizable", this.element.data("resizable")); this.elementIsWrapper = true; this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") }); this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }); this.originalResizeStyle =
this.originalElement.css("resize"); this.originalElement.css("resize", "none"); this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })); this.originalElement.css({ margin: this.originalElement.css("margin") }); this._proportionallyResize()
        } this.handles = h.handles || (!a(".ui-resizable-handle", this.element).length ? "e,s,se" : { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne",
            nw: ".ui-resizable-nw"
        }); if (this.handles.constructor == String) { if (this.handles == "all") this.handles = "n,e,s,w,se,sw,ne,nw"; var g = this.handles.split(","); this.handles = {}; for (var i = 0; i < g.length; i++) { var b = a.trim(g[i]), f = a('<div class="ui-resizable-handle ' + ("ui-resizable-" + b) + '"></div>'); /sw|se|ne|nw/.test(b) && f.css({ zIndex: ++h.zIndex }); "se" == b && f.addClass("ui-icon ui-icon-gripsmall-diagonal-se"); this.handles[b] = ".ui-resizable-" + b; this.element.append(f) } } this._renderAxis = function (j) {
            j = j || this.element; for (var l in this.handles) {
                if (this.handles[l].constructor ==
String) this.handles[l] = a(this.handles[l], this.element).show(); if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) { var o = a(this.handles[l], this.element), n = 0; n = /sw|ne|nw|se|n|s/.test(l) ? o.outerHeight() : o.outerWidth(); o = ["padding", /ne|nw|n/.test(l) ? "Top" : /se|sw|s/.test(l) ? "Bottom" : /^e$/.test(l) ? "Right" : "Left"].join(""); j.css(o, n); this._proportionallyResize() } a(this.handles[l])
            } 
        }; this._renderAxis(this.element); this._handles = a(".ui-resizable-handle", this.element).disableSelection();
        this._handles.mouseover(function () { if (!e.resizing) { if (this.className) var j = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i); e.axis = j && j[1] ? j[1] : "se" } }); if (h.autoHide) { this._handles.hide(); a(this.element).addClass("ui-resizable-autohide").hover(function () { if (!h.disabled) { a(this).removeClass("ui-resizable-autohide"); e._handles.show() } }, function () { if (!h.disabled) if (!e.resizing) { a(this).addClass("ui-resizable-autohide"); e._handles.hide() } }) } this._mouseInit()
    }, destroy: function () {
        this._mouseDestroy();
        var e = function (g) { a(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove() }; if (this.elementIsWrapper) { e(this.element); var h = this.element; h.after(this.originalElement.css({ position: h.css("position"), width: h.outerWidth(), height: h.outerHeight(), top: h.css("top"), left: h.css("left") })).remove() } this.originalElement.css("resize", this.originalResizeStyle); e(this.originalElement); return this
    }, _mouseCapture: function (e) {
        var h =
false; for (var g in this.handles) if (a(this.handles[g])[0] == e.target) h = true; return !this.options.disabled && h
    }, _mouseStart: function (e) {
        var h = this.options, g = this.element.position(), i = this.element; this.resizing = true; this.documentScroll = { top: a(document).scrollTop(), left: a(document).scrollLeft() }; if (i.is(".ui-draggable") || /absolute/.test(i.css("position"))) i.css({ position: "absolute", top: g.top, left: g.left }); a.browser.opera && /relative/.test(i.css("position")) && i.css({ position: "relative", top: "auto", left: "auto" });
        this._renderProxy(); g = d(this.helper.css("left")); var b = d(this.helper.css("top")); if (h.containment) { g += a(h.containment).scrollLeft() || 0; b += a(h.containment).scrollTop() || 0 } this.offset = this.helper.offset(); this.position = { left: g, top: b }; this.size = this._helper ? { width: i.outerWidth(), height: i.outerHeight()} : { width: i.width(), height: i.height() }; this.originalSize = this._helper ? { width: i.outerWidth(), height: i.outerHeight()} : { width: i.width(), height: i.height() }; this.originalPosition = { left: g, top: b }; this.sizeDiff =
{ width: i.outerWidth() - i.width(), height: i.outerHeight() - i.height() }; this.originalMousePosition = { left: e.pageX, top: e.pageY }; this.aspectRatio = typeof h.aspectRatio == "number" ? h.aspectRatio : this.originalSize.width / this.originalSize.height || 1; h = a(".ui-resizable-" + this.axis).css("cursor"); a("body").css("cursor", h == "auto" ? this.axis + "-resize" : h); i.addClass("ui-resizable-resizing"); this._propagate("start", e); return true
    }, _mouseDrag: function (e) {
        var h = this.helper, g = this.originalMousePosition, i = this._change[this.axis];
        if (!i) return false; g = i.apply(this, [e, e.pageX - g.left || 0, e.pageY - g.top || 0]); this._updateVirtualBoundaries(e.shiftKey); if (this._aspectRatio || e.shiftKey) g = this._updateRatio(g, e); g = this._respectSize(g, e); this._propagate("resize", e); h.css({ top: this.position.top + "px", left: this.position.left + "px", width: this.size.width + "px", height: this.size.height + "px" }); !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(); this._updateCache(g); this._trigger("resize", e, this.ui()); return false
    },
        _mouseStop: function (e) {
            this.resizing = false; var h = this.options, g = this; if (this._helper) {
                var i = this._proportionallyResizeElements, b = i.length && /textarea/i.test(i[0].nodeName); i = b && a.ui.hasScroll(i[0], "left") ? 0 : g.sizeDiff.height; b = b ? 0 : g.sizeDiff.width; b = { width: g.helper.width() - b, height: g.helper.height() - i }; i = parseInt(g.element.css("left"), 10) + (g.position.left - g.originalPosition.left) || null; var f = parseInt(g.element.css("top"), 10) + (g.position.top - g.originalPosition.top) || null; h.animate || this.element.css(a.extend(b,
{ top: f, left: i })); g.helper.height(g.size.height); g.helper.width(g.size.width); this._helper && !h.animate && this._proportionallyResize()
            } a("body").css("cursor", "auto"); this.element.removeClass("ui-resizable-resizing"); this._propagate("stop", e); this._helper && this.helper.remove(); return false
        }, _updateVirtualBoundaries: function (e) {
            var h = this.options, g, i, b; h = { minWidth: c(h.minWidth) ? h.minWidth : 0, maxWidth: c(h.maxWidth) ? h.maxWidth : Infinity, minHeight: c(h.minHeight) ? h.minHeight : 0, maxHeight: c(h.maxHeight) ? h.maxHeight :
Infinity
            }; if (this._aspectRatio || e) { e = h.minHeight * this.aspectRatio; i = h.minWidth / this.aspectRatio; g = h.maxHeight * this.aspectRatio; b = h.maxWidth / this.aspectRatio; if (e > h.minWidth) h.minWidth = e; if (i > h.minHeight) h.minHeight = i; if (g < h.maxWidth) h.maxWidth = g; if (b < h.maxHeight) h.maxHeight = b } this._vBoundaries = h
        }, _updateCache: function (e) {
            this.offset = this.helper.offset(); if (c(e.left)) this.position.left = e.left; if (c(e.top)) this.position.top = e.top; if (c(e.height)) this.size.height = e.height; if (c(e.width)) this.size.width =
e.width
        }, _updateRatio: function (e) { var h = this.position, g = this.size, i = this.axis; if (c(e.height)) e.width = e.height * this.aspectRatio; else if (c(e.width)) e.height = e.width / this.aspectRatio; if (i == "sw") { e.left = h.left + (g.width - e.width); e.top = null } if (i == "nw") { e.top = h.top + (g.height - e.height); e.left = h.left + (g.width - e.width) } return e }, _respectSize: function (e) {
            var h = this._vBoundaries, g = this.axis, i = c(e.width) && h.maxWidth && h.maxWidth < e.width, b = c(e.height) && h.maxHeight && h.maxHeight < e.height, f = c(e.width) && h.minWidth &&
h.minWidth > e.width, j = c(e.height) && h.minHeight && h.minHeight > e.height; if (f) e.width = h.minWidth; if (j) e.height = h.minHeight; if (i) e.width = h.maxWidth; if (b) e.height = h.maxHeight; var l = this.originalPosition.left + this.originalSize.width, o = this.position.top + this.size.height, n = /sw|nw|w/.test(g); g = /nw|ne|n/.test(g); if (f && n) e.left = l - h.minWidth; if (i && n) e.left = l - h.maxWidth; if (j && g) e.top = o - h.minHeight; if (b && g) e.top = o - h.maxHeight; if ((h = !e.width && !e.height) && !e.left && e.top) e.top = null; else if (h && !e.top && e.left) e.left =
null; return e
        }, _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length) for (var e = this.helper || this.element, h = 0; h < this._proportionallyResizeElements.length; h++) {
                var g = this._proportionallyResizeElements[h]; if (!this.borderDif) {
                    var i = [g.css("borderTopWidth"), g.css("borderRightWidth"), g.css("borderBottomWidth"), g.css("borderLeftWidth")], b = [g.css("paddingTop"), g.css("paddingRight"), g.css("paddingBottom"), g.css("paddingLeft")]; this.borderDif = a.map(i, function (f, j) {
                        f = parseInt(f, 10) ||
0; j = parseInt(b[j], 10) || 0; return f + j
                    })
                } a.browser.msie && (a(e).is(":hidden") || a(e).parents(":hidden").length) || g.css({ height: e.height() - this.borderDif[0] - this.borderDif[2] || 0, width: e.width() - this.borderDif[1] - this.borderDif[3] || 0 })
            } 
        }, _renderProxy: function () {
            var e = this.options; this.elementOffset = this.element.offset(); if (this._helper) {
                this.helper = this.helper || a('<div style="overflow:hidden;"></div>'); var h = a.browser.msie && a.browser.version < 7, g = h ? 1 : 0; h = h ? 2 : -1; this.helper.addClass(this._helper).css({ width: this.element.outerWidth() +
h, height: this.element.outerHeight() + h, position: "absolute", left: this.elementOffset.left - g + "px", top: this.elementOffset.top - g + "px", zIndex: ++e.zIndex
                }); this.helper.appendTo("body").disableSelection()
            } else this.helper = this.element
        }, _change: { e: function (e, h) { return { width: this.originalSize.width + h} }, w: function (e, h) { return { left: this.originalPosition.left + h, width: this.originalSize.width - h} }, n: function (e, h, g) { return { top: this.originalPosition.top + g, height: this.originalSize.height - g} }, s: function (e, h, g) {
            return { height: this.originalSize.height +
g
            }
        }, se: function (e, h, g) { return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, h, g])) }, sw: function (e, h, g) { return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, h, g])) }, ne: function (e, h, g) { return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, h, g])) }, nw: function (e, h, g) { return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, h, g])) } 
        }, _propagate: function (e, h) {
            a.ui.plugin.call(this, e, [h, this.ui()]);
            e != "resize" && this._trigger(e, h, this.ui())
        }, plugins: {}, ui: function () { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition} } 
    }); a.extend(a.ui.resizable, { version: "1.8.16" }); a.ui.plugin.add("resizable", "alsoResize", { start: function () {
        var e = a(this).data("resizable").options, h = function (g) {
            a(g).each(function () {
                var i = a(this); i.data("resizable-alsoresize", { width: parseInt(i.width(),
10), height: parseInt(i.height(), 10), left: parseInt(i.css("left"), 10), top: parseInt(i.css("top"), 10), position: i.css("position")
                })
            })
        }; if (typeof e.alsoResize == "object" && !e.alsoResize.parentNode) if (e.alsoResize.length) { e.alsoResize = e.alsoResize[0]; h(e.alsoResize) } else a.each(e.alsoResize, function (g) { h(g) }); else h(e.alsoResize)
    }, resize: function (e, h) {
        var g = a(this).data("resizable"); e = g.options; var i = g.originalSize, b = g.originalPosition, f = { height: g.size.height - i.height || 0, width: g.size.width - i.width || 0, top: g.position.top -
b.top || 0, left: g.position.left - b.left || 0
        }, j = function (l, o) { a(l).each(function () { var n = a(this), k = a(this).data("resizable-alsoresize"), m = {}, p = o && o.length ? o : n.parents(h.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"]; a.each(p, function (q, s) { if ((q = (k[s] || 0) + (f[s] || 0)) && q >= 0) m[s] = q || null }); if (a.browser.opera && /relative/.test(n.css("position"))) { g._revertToRelativePosition = true; n.css({ position: "absolute", top: "auto", left: "auto" }) } n.css(m) }) }; typeof e.alsoResize == "object" && !e.alsoResize.nodeType ?
a.each(e.alsoResize, function (l, o) { j(l, o) }) : j(e.alsoResize)
    }, stop: function () { var e = a(this).data("resizable"), h = e.options, g = function (i) { a(i).each(function () { var b = a(this); b.css({ position: b.data("resizable-alsoresize").position }) }) }; if (e._revertToRelativePosition) { e._revertToRelativePosition = false; typeof h.alsoResize == "object" && !h.alsoResize.nodeType ? a.each(h.alsoResize, function (i) { g(i) }) : g(h.alsoResize) } a(this).removeData("resizable-alsoresize") } 
    }); a.ui.plugin.add("resizable", "animate", { stop: function (e) {
        var h =
a(this).data("resizable"), g = h.options, i = h._proportionallyResizeElements, b = i.length && /textarea/i.test(i[0].nodeName), f = b && a.ui.hasScroll(i[0], "left") ? 0 : h.sizeDiff.height; b = { width: h.size.width - (b ? 0 : h.sizeDiff.width), height: h.size.height - f }; f = parseInt(h.element.css("left"), 10) + (h.position.left - h.originalPosition.left) || null; var j = parseInt(h.element.css("top"), 10) + (h.position.top - h.originalPosition.top) || null; h.element.animate(a.extend(b, j && f ? { top: j, left: f} : {}), { duration: g.animateDuration, easing: g.animateEasing,
    step: function () { var l = { width: parseInt(h.element.css("width"), 10), height: parseInt(h.element.css("height"), 10), top: parseInt(h.element.css("top"), 10), left: parseInt(h.element.css("left"), 10) }; i && i.length && a(i[0]).css({ width: l.width, height: l.height }); h._updateCache(l); h._propagate("resize", e) } 
})
    } 
    }); a.ui.plugin.add("resizable", "containment", { start: function () {
        var e = a(this).data("resizable"), h = e.element, g = e.options.containment; if (h = g instanceof a ? g.get(0) : /parent/.test(g) ? h.parent().get(0) : g) {
            e.containerElement =
a(h); if (/document/.test(g) || g == document) { e.containerOffset = { left: 0, top: 0 }; e.containerPosition = { left: 0, top: 0 }; e.parentData = { element: a(document), left: 0, top: 0, width: a(document).width(), height: a(document).height() || document.body.parentNode.scrollHeight} } else {
                var i = a(h), b = []; a(["Top", "Right", "Left", "Bottom"]).each(function (l, o) { b[l] = d(i.css("padding" + o)) }); e.containerOffset = i.offset(); e.containerPosition = i.position(); e.containerSize = { height: i.innerHeight() - b[3], width: i.innerWidth() - b[1] }; g = e.containerOffset;
                var f = e.containerSize.height, j = e.containerSize.width; j = a.ui.hasScroll(h, "left") ? h.scrollWidth : j; f = a.ui.hasScroll(h) ? h.scrollHeight : f; e.parentData = { element: h, left: g.left, top: g.top, width: j, height: f}
            } 
        } 
    }, resize: function (e) {
        var h = a(this).data("resizable"), g = h.options, i = h.containerOffset, b = h.position; e = h._aspectRatio || e.shiftKey; var f = { top: 0, left: 0 }, j = h.containerElement; if (j[0] != document && /static/.test(j.css("position"))) f = i; if (b.left < (h._helper ? i.left : 0)) {
            h.size.width += h._helper ? h.position.left - i.left :
h.position.left - f.left; if (e) h.size.height = h.size.width / g.aspectRatio; h.position.left = g.helper ? i.left : 0
        } if (b.top < (h._helper ? i.top : 0)) { h.size.height += h._helper ? h.position.top - i.top : h.position.top; if (e) h.size.width = h.size.height * g.aspectRatio; h.position.top = h._helper ? i.top : 0 } h.offset.left = h.parentData.left + h.position.left; h.offset.top = h.parentData.top + h.position.top; g = Math.abs((h._helper ? h.offset.left - f.left : h.offset.left - f.left) + h.sizeDiff.width); i = Math.abs((h._helper ? h.offset.top - f.top : h.offset.top -
i.top) + h.sizeDiff.height); b = h.containerElement.get(0) == h.element.parent().get(0); f = /relative|absolute/.test(h.containerElement.css("position")); if (b && f) g -= h.parentData.left; if (g + h.size.width >= h.parentData.width) { h.size.width = h.parentData.width - g; if (e) h.size.height = h.size.width / h.aspectRatio } if (i + h.size.height >= h.parentData.height) { h.size.height = h.parentData.height - i; if (e) h.size.width = h.size.height * h.aspectRatio } 
    }, stop: function () {
        var e = a(this).data("resizable"), h = e.options, g = e.containerOffset, i = e.containerPosition,
b = e.containerElement, f = a(e.helper), j = f.offset(), l = f.outerWidth() - e.sizeDiff.width; f = f.outerHeight() - e.sizeDiff.height; e._helper && !h.animate && /relative/.test(b.css("position")) && a(this).css({ left: j.left - i.left - g.left, width: l, height: f }); e._helper && !h.animate && /static/.test(b.css("position")) && a(this).css({ left: j.left - i.left - g.left, width: l, height: f })
    } 
    }); a.ui.plugin.add("resizable", "ghost", { start: function () {
        var e = a(this).data("resizable"), h = e.options, g = e.size; e.ghost = e.originalElement.clone(); e.ghost.css({ opacity: 0.25,
            display: "block", position: "relative", height: g.height, width: g.width, margin: 0, left: 0, top: 0
        }).addClass("ui-resizable-ghost").addClass(typeof h.ghost == "string" ? h.ghost : ""); e.ghost.appendTo(e.helper)
    }, resize: function () { var e = a(this).data("resizable"); e.ghost && e.ghost.css({ position: "relative", height: e.size.height, width: e.size.width }) }, stop: function () { var e = a(this).data("resizable"); e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0)) } 
    }); a.ui.plugin.add("resizable", "grid", { resize: function () {
        var e =
a(this).data("resizable"), h = e.options, g = e.size, i = e.originalSize, b = e.originalPosition, f = e.axis; h.grid = typeof h.grid == "number" ? [h.grid, h.grid] : h.grid; var j = Math.round((g.width - i.width) / (h.grid[0] || 1)) * (h.grid[0] || 1); h = Math.round((g.height - i.height) / (h.grid[1] || 1)) * (h.grid[1] || 1); if (/^(se|s|e)$/.test(f)) { e.size.width = i.width + j; e.size.height = i.height + h } else if (/^(ne)$/.test(f)) { e.size.width = i.width + j; e.size.height = i.height + h; e.position.top = b.top - h } else {
            if (/^(sw)$/.test(f)) {
                e.size.width = i.width + j; e.size.height =
i.height + h
            } else { e.size.width = i.width + j; e.size.height = i.height + h; e.position.top = b.top - h } e.position.left = b.left - j
        } 
    } 
    }); var d = function (e) { return parseInt(e, 10) || 0 }, c = function (e) { return !isNaN(parseInt(e, 10)) } 
})(jQuery);
(function (a) {
    a.widget("ui.selectable", a.ui.mouse, { options: { appendTo: "body", autoRefresh: true, distance: 0, filter: "*", tolerance: "touch" }, _create: function () {
        var d = this; this.element.addClass("ui-selectable"); this.dragged = false; var c; this.refresh = function () {
            c = a(d.options.filter, d.element[0]); c.each(function () {
                var e = a(this), h = e.offset(); a.data(this, "selectable-item", { element: this, $element: e, left: h.left, top: h.top, right: h.left + e.outerWidth(), bottom: h.top + e.outerHeight(), startselected: false, selected: e.hasClass("ui-selected"),
                    selecting: e.hasClass("ui-selecting"), unselecting: e.hasClass("ui-unselecting")
                })
            })
        }; this.refresh(); this.selectees = c.addClass("ui-selectee"); this._mouseInit(); this.helper = a("<div class='ui-selectable-helper'></div>")
    }, destroy: function () { this.selectees.removeClass("ui-selectee").removeData("selectable-item"); this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"); this._mouseDestroy(); return this }, _mouseStart: function (d) {
        var c = this; this.opos = [d.pageX,
d.pageY]; if (!this.options.disabled) {
            var e = this.options; this.selectees = a(e.filter, this.element[0]); this._trigger("start", d); a(e.appendTo).append(this.helper); this.helper.css({ left: d.clientX, top: d.clientY, width: 0, height: 0 }); e.autoRefresh && this.refresh(); this.selectees.filter(".ui-selected").each(function () {
                var h = a.data(this, "selectable-item"); h.startselected = true; if (!d.metaKey) {
                    h.$element.removeClass("ui-selected"); h.selected = false; h.$element.addClass("ui-unselecting"); h.unselecting = true; c._trigger("unselecting",
d, { unselecting: h.element })
                } 
            }); a(d.target).parents().andSelf().each(function () { var h = a.data(this, "selectable-item"); if (h) { var g = !d.metaKey || !h.$element.hasClass("ui-selected"); h.$element.removeClass(g ? "ui-unselecting" : "ui-selected").addClass(g ? "ui-selecting" : "ui-unselecting"); h.unselecting = !g; h.selecting = g; (h.selected = g) ? c._trigger("selecting", d, { selecting: h.element }) : c._trigger("unselecting", d, { unselecting: h.element }); return false } })
        } 
    }, _mouseDrag: function (d) {
        var c = this; this.dragged = true; if (!this.options.disabled) {
            var e =
this.options, h = this.opos[0], g = this.opos[1], i = d.pageX, b = d.pageY; if (h > i) { var f = i; i = h; h = f } if (g > b) { f = b; b = g; g = f } this.helper.css({ left: h, top: g, width: i - h, height: b - g }); this.selectees.each(function () {
    var j = a.data(this, "selectable-item"); if (!(!j || j.element == c.element[0])) {
        var l = false; if (e.tolerance == "touch") l = !(j.left > i || j.right < h || j.top > b || j.bottom < g); else if (e.tolerance == "fit") l = j.left > h && j.right < i && j.top > g && j.bottom < b; if (l) {
            if (j.selected) { j.$element.removeClass("ui-selected"); j.selected = false } if (j.unselecting) {
                j.$element.removeClass("ui-unselecting");
                j.unselecting = false
            } if (!j.selecting) { j.$element.addClass("ui-selecting"); j.selecting = true; c._trigger("selecting", d, { selecting: j.element }) } 
        } else {
            if (j.selecting) if (d.metaKey && j.startselected) { j.$element.removeClass("ui-selecting"); j.selecting = false; j.$element.addClass("ui-selected"); j.selected = true } else { j.$element.removeClass("ui-selecting"); j.selecting = false; if (j.startselected) { j.$element.addClass("ui-unselecting"); j.unselecting = true } c._trigger("unselecting", d, { unselecting: j.element }) } if (j.selected) if (!d.metaKey &&
!j.startselected) { j.$element.removeClass("ui-selected"); j.selected = false; j.$element.addClass("ui-unselecting"); j.unselecting = true; c._trigger("unselecting", d, { unselecting: j.element }) } 
        } 
    } 
}); return false
        } 
    }, _mouseStop: function (d) {
        var c = this; this.dragged = false; a(".ui-unselecting", this.element[0]).each(function () { var e = a.data(this, "selectable-item"); e.$element.removeClass("ui-unselecting"); e.unselecting = false; e.startselected = false; c._trigger("unselected", d, { unselected: e.element }) }); a(".ui-selecting", this.element[0]).each(function () {
            var e =
a.data(this, "selectable-item"); e.$element.removeClass("ui-selecting").addClass("ui-selected"); e.selecting = false; e.selected = true; e.startselected = true; c._trigger("selected", d, { selected: e.element })
        }); this._trigger("stop", d); this.helper.remove(); return false
    } 
    }); a.extend(a.ui.selectable, { version: "1.8.16" })
})(jQuery);
(function (a) {
    a.widget("ui.sortable", a.ui.mouse, { widgetEventPrefix: "sort", options: { appendTo: "parent", axis: false, connectWith: false, containment: false, cursor: "auto", cursorAt: false, dropOnEmpty: true, forcePlaceholderSize: false, forceHelperSize: false, grid: false, handle: false, helper: "original", items: "> *", opacity: false, placeholder: false, revert: false, scroll: true, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1E3 }, _create: function () {
        var d = this.options; this.containerCache = {}; this.element.addClass("ui-sortable");
        this.refresh(); this.floating = this.items.length ? d.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : false; this.offset = this.element.offset(); this._mouseInit()
    }, destroy: function () { this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable"); this._mouseDestroy(); for (var d = this.items.length - 1; d >= 0; d--) this.items[d].item.removeData("sortable-item"); return this }, _setOption: function (d, c) {
        if (d ===
"disabled") { this.options[d] = c; this.widget()[c ? "addClass" : "removeClass"]("ui-sortable-disabled") } else a.Widget.prototype._setOption.apply(this, arguments)
    }, _mouseCapture: function (d, c) {
        if (this.reverting) return false; if (this.options.disabled || this.options.type == "static") return false; this._refreshItems(d); var e = null, h = this; a(d.target).parents().each(function () { if (a.data(this, "sortable-item") == h) { e = a(this); return false } }); if (a.data(d.target, "sortable-item") == h) e = a(d.target); if (!e) return false; if (this.options.handle &&
!c) { var g = false; a(this.options.handle, e).find("*").andSelf().each(function () { if (this == d.target) g = true }); if (!g) return false } this.currentItem = e; this._removeCurrentsFromItems(); return true
    }, _mouseStart: function (d, c, e) {
        c = this.options; var h = this; this.currentContainer = this; this.refreshPositions(); this.helper = this._createHelper(d); this._cacheHelperProportions(); this._cacheMargins(); this.scrollParent = this.helper.scrollParent(); this.offset = this.currentItem.offset(); this.offset = { top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left
        }; this.helper.css("position", "absolute"); this.cssPosition = this.helper.css("position"); a.extend(this.offset, { click: { left: d.pageX - this.offset.left, top: d.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }); this.originalPosition = this._generatePosition(d); this.originalPageX = d.pageX; this.originalPageY = d.pageY; c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt); this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] };
        this.helper[0] != this.currentItem[0] && this.currentItem.hide(); this._createPlaceholder(); c.containment && this._setContainment(); if (c.cursor) { if (a("body").css("cursor")) this._storedCursor = a("body").css("cursor"); a("body").css("cursor", c.cursor) } if (c.opacity) { if (this.helper.css("opacity")) this._storedOpacity = this.helper.css("opacity"); this.helper.css("opacity", c.opacity) } if (c.zIndex) { if (this.helper.css("zIndex")) this._storedZIndex = this.helper.css("zIndex"); this.helper.css("zIndex", c.zIndex) } if (this.scrollParent[0] !=
document && this.scrollParent[0].tagName != "HTML") this.overflowOffset = this.scrollParent.offset(); this._trigger("start", d, this._uiHash()); this._preserveHelperProportions || this._cacheHelperProportions(); if (!e) for (e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("activate", d, h._uiHash(this)); if (a.ui.ddmanager) a.ui.ddmanager.current = this; a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, d); this.dragging = true; this.helper.addClass("ui-sortable-helper"); this._mouseDrag(d);
        return true
    }, _mouseDrag: function (d) {
        this.position = this._generatePosition(d); this.positionAbs = this._convertPositionTo("absolute"); if (!this.lastPositionAbs) this.lastPositionAbs = this.positionAbs; if (this.options.scroll) {
            var c = this.options, e = false; if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
                if (this.overflowOffset.top + this.scrollParent[0].offsetHeight - d.pageY < c.scrollSensitivity) this.scrollParent[0].scrollTop = e = this.scrollParent[0].scrollTop + c.scrollSpeed; else if (d.pageY - this.overflowOffset.top <
c.scrollSensitivity) this.scrollParent[0].scrollTop = e = this.scrollParent[0].scrollTop - c.scrollSpeed; if (this.overflowOffset.left + this.scrollParent[0].offsetWidth - d.pageX < c.scrollSensitivity) this.scrollParent[0].scrollLeft = e = this.scrollParent[0].scrollLeft + c.scrollSpeed; else if (d.pageX - this.overflowOffset.left < c.scrollSensitivity) this.scrollParent[0].scrollLeft = e = this.scrollParent[0].scrollLeft - c.scrollSpeed
            } else {
                if (d.pageY - a(document).scrollTop() < c.scrollSensitivity) e = a(document).scrollTop(a(document).scrollTop() -
c.scrollSpeed); else if (a(window).height() - (d.pageY - a(document).scrollTop()) < c.scrollSensitivity) e = a(document).scrollTop(a(document).scrollTop() + c.scrollSpeed); if (d.pageX - a(document).scrollLeft() < c.scrollSensitivity) e = a(document).scrollLeft(a(document).scrollLeft() - c.scrollSpeed); else if (a(window).width() - (d.pageX - a(document).scrollLeft()) < c.scrollSensitivity) e = a(document).scrollLeft(a(document).scrollLeft() + c.scrollSpeed)
            } e !== false && a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this,
d)
        } this.positionAbs = this._convertPositionTo("absolute"); if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px"; if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px"; for (c = this.items.length - 1; c >= 0; c--) {
            e = this.items[c]; var h = e.item[0], g = this._intersectsWithPointer(e); if (g) if (h != this.currentItem[0] && this.placeholder[g == 1 ? "next" : "prev"]()[0] != h && !a.ui.contains(this.placeholder[0], h) && (this.options.type == "semi-dynamic" ? !a.ui.contains(this.element[0],
h) : true)) { this.direction = g == 1 ? "down" : "up"; if (this.options.tolerance == "pointer" || this._intersectsWithSides(e)) this._rearrange(d, e); else break; this._trigger("change", d, this._uiHash()); break } 
        } this._contactContainers(d); a.ui.ddmanager && a.ui.ddmanager.drag(this, d); this._trigger("sort", d, this._uiHash()); this.lastPositionAbs = this.positionAbs; return false
    }, _mouseStop: function (d, c) {
        if (d) {
            a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, d); if (this.options.revert) {
                var e = this; c = e.placeholder.offset();
                e.reverting = true; a(this.helper).animate({ left: c.left - this.offset.parent.left - e.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft), top: c.top - this.offset.parent.top - e.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop) }, parseInt(this.options.revert, 10) || 500, function () { e._clear(d) })
            } else this._clear(d, c); return false
        } 
    }, cancel: function () {
        var d = this; if (this.dragging) {
            this._mouseUp({ target: null }); this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") :
this.currentItem.show(); for (var c = this.containers.length - 1; c >= 0; c--) { this.containers[c]._trigger("deactivate", null, d._uiHash(this)); if (this.containers[c].containerCache.over) { this.containers[c]._trigger("out", null, d._uiHash(this)); this.containers[c].containerCache.over = 0 } } 
        } if (this.placeholder) {
            this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]); this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(); a.extend(this, { helper: null,
                dragging: false, reverting: false, _noFinalSort: null
            }); this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)
        } return this
    }, serialize: function (d) { var c = this._getItemsAsjQuery(d && d.connected), e = []; d = d || {}; a(c).each(function () { var h = (a(d.item || this).attr(d.attribute || "id") || "").match(d.expression || /(.+)[-=_](.+)/); if (h) e.push((d.key || h[1] + "[]") + "=" + (d.key && d.expression ? h[1] : h[2])) }); !e.length && d.key && e.push(d.key + "="); return e.join("&") },
        toArray: function (d) { var c = this._getItemsAsjQuery(d && d.connected), e = []; d = d || {}; c.each(function () { e.push(a(d.item || this).attr(d.attribute || "id") || "") }); return e }, _intersectsWith: function (d) {
            var c = this.positionAbs.left, e = c + this.helperProportions.width, h = this.positionAbs.top, g = h + this.helperProportions.height, i = d.left, b = i + d.width, f = d.top, j = f + d.height, l = this.offset.click.top, o = this.offset.click.left; l = h + l > f && h + l < j && c + o > i && c + o < b; return this.options.tolerance == "pointer" || this.options.forcePointerForContainers ||
this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > d[this.floating ? "width" : "height"] ? l : i < c + this.helperProportions.width / 2 && e - this.helperProportions.width / 2 < b && f < h + this.helperProportions.height / 2 && g - this.helperProportions.height / 2 < j
        }, _intersectsWithPointer: function (d) {
            var c = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, d.top, d.height); d = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, d.left, d.width); c = c && d; d = this._getDragVerticalDirection();
            var e = this._getDragHorizontalDirection(); if (!c) return false; return this.floating ? e && e == "right" || d == "down" ? 2 : 1 : d && (d == "down" ? 2 : 1)
        }, _intersectsWithSides: function (d) { var c = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, d.top + d.height / 2, d.height); d = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, d.left + d.width / 2, d.width); var e = this._getDragVerticalDirection(), h = this._getDragHorizontalDirection(); return this.floating && h ? h == "right" && d || h == "left" && !d : e && (e == "down" && c || e == "up" && !c) },
        _getDragVerticalDirection: function () { var d = this.positionAbs.top - this.lastPositionAbs.top; return d != 0 && (d > 0 ? "down" : "up") }, _getDragHorizontalDirection: function () { var d = this.positionAbs.left - this.lastPositionAbs.left; return d != 0 && (d > 0 ? "right" : "left") }, refresh: function (d) { this._refreshItems(d); this.refreshPositions(); return this }, _connectWith: function () { var d = this.options; return d.connectWith.constructor == String ? [d.connectWith] : d.connectWith }, _getItemsAsjQuery: function (d) {
            var c = [], e = [], h = this._connectWith();
            if (h && d) for (d = h.length - 1; d >= 0; d--) for (var g = a(h[d]), i = g.length - 1; i >= 0; i--) { var b = a.data(g[i], "sortable"); if (b && b != this && !b.options.disabled) e.push([a.isFunction(b.options.items) ? b.options.items.call(b.element) : a(b.options.items, b.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), b]) } e.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
this]); for (d = e.length - 1; d >= 0; d--) e[d][0].each(function () { c.push(this) }); return a(c)
        }, _removeCurrentsFromItems: function () { for (var d = this.currentItem.find(":data(sortable-item)"), c = 0; c < this.items.length; c++) for (var e = 0; e < d.length; e++) d[e] == this.items[c].item[0] && this.items.splice(c, 1) }, _refreshItems: function (d) {
            this.items = []; this.containers = [this]; var c = this.items, e = [[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], d, { item: this.currentItem }) : a(this.options.items, this.element),
this]], h = this._connectWith(); if (h) for (var g = h.length - 1; g >= 0; g--) for (var i = a(h[g]), b = i.length - 1; b >= 0; b--) { var f = a.data(i[b], "sortable"); if (f && f != this && !f.options.disabled) { e.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], d, { item: this.currentItem }) : a(f.options.items, f.element), f]); this.containers.push(f) } } for (g = e.length - 1; g >= 0; g--) { d = e[g][1]; h = e[g][0]; b = 0; for (i = h.length; b < i; b++) { f = a(h[b]); f.data("sortable-item", d); c.push({ item: f, instance: d, width: 0, height: 0, left: 0, top: 0 }) } } 
        }, refreshPositions: function (d) {
            if (this.offsetParent &&
this.helper) this.offset.parent = this._getParentOffset(); for (var c = this.items.length - 1; c >= 0; c--) { var e = this.items[c]; if (!(e.instance != this.currentContainer && this.currentContainer && e.item[0] != this.currentItem[0])) { var h = this.options.toleranceElement ? a(this.options.toleranceElement, e.item) : e.item; if (!d) { e.width = h.outerWidth(); e.height = h.outerHeight() } h = h.offset(); e.left = h.left; e.top = h.top } } if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (c =
this.containers.length - 1; c >= 0; c--) { h = this.containers[c].element.offset(); this.containers[c].containerCache.left = h.left; this.containers[c].containerCache.top = h.top; this.containers[c].containerCache.width = this.containers[c].element.outerWidth(); this.containers[c].containerCache.height = this.containers[c].element.outerHeight() } return this
        }, _createPlaceholder: function (d) {
            var c = d || this, e = c.options; if (!e.placeholder || e.placeholder.constructor == String) {
                var h = e.placeholder; e.placeholder = { element: function () {
                    var g =
a(document.createElement(c.currentItem[0].nodeName)).addClass(h || c.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0]; if (!h) g.style.visibility = "hidden"; return g
                }, update: function (g, i) {
                    if (!(h && !e.forcePlaceholderSize)) {
                        i.height() || i.height(c.currentItem.innerHeight() - parseInt(c.currentItem.css("paddingTop") || 0, 10) - parseInt(c.currentItem.css("paddingBottom") || 0, 10)); i.width() || i.width(c.currentItem.innerWidth() - parseInt(c.currentItem.css("paddingLeft") || 0, 10) - parseInt(c.currentItem.css("paddingRight") ||
0, 10))
                    } 
                } 
                }
            } c.placeholder = a(e.placeholder.element.call(c.element, c.currentItem)); c.currentItem.after(c.placeholder); e.placeholder.update(c, c.placeholder)
        }, _contactContainers: function (d) {
            for (var c = null, e = null, h = this.containers.length - 1; h >= 0; h--) if (!a.ui.contains(this.currentItem[0], this.containers[h].element[0])) if (this._intersectsWith(this.containers[h].containerCache)) { if (!(c && a.ui.contains(this.containers[h].element[0], c.element[0]))) { c = this.containers[h]; e = h } } else if (this.containers[h].containerCache.over) {
                this.containers[h]._trigger("out",
d, this._uiHash(this)); this.containers[h].containerCache.over = 0
            } if (c) if (this.containers.length === 1) { this.containers[e]._trigger("over", d, this._uiHash(this)); this.containers[e].containerCache.over = 1 } else if (this.currentContainer != this.containers[e]) {
                c = 1E4; h = null; for (var g = this.positionAbs[this.containers[e].floating ? "left" : "top"], i = this.items.length - 1; i >= 0; i--) if (a.ui.contains(this.containers[e].element[0], this.items[i].item[0])) {
                    var b = this.items[i][this.containers[e].floating ? "left" : "top"]; if (Math.abs(b -
g) < c) { c = Math.abs(b - g); h = this.items[i] } 
                } if (h || this.options.dropOnEmpty) { this.currentContainer = this.containers[e]; h ? this._rearrange(d, h, null, true) : this._rearrange(d, null, this.containers[e].element, true); this._trigger("change", d, this._uiHash()); this.containers[e]._trigger("change", d, this._uiHash(this)); this.options.placeholder.update(this.currentContainer, this.placeholder); this.containers[e]._trigger("over", d, this._uiHash(this)); this.containers[e].containerCache.over = 1 } 
            } 
        }, _createHelper: function (d) {
            var c =
this.options; d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [d, this.currentItem])) : c.helper == "clone" ? this.currentItem.clone() : this.currentItem; d.parents("body").length || a(c.appendTo != "parent" ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]); if (d[0] == this.currentItem[0]) this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }; if (d[0].style.width ==
"" || c.forceHelperSize) d.width(this.currentItem.width()); if (d[0].style.height == "" || c.forceHelperSize) d.height(this.currentItem.height()); return d
        }, _adjustOffsetFromHelper: function (d) {
            if (typeof d == "string") d = d.split(" "); if (a.isArray(d)) d = { left: +d[0], top: +d[1] || 0 }; if ("left" in d) this.offset.click.left = d.left + this.margins.left; if ("right" in d) this.offset.click.left = this.helperProportions.width - d.right + this.margins.left; if ("top" in d) this.offset.click.top = d.top + this.margins.top; if ("bottom" in d) this.offset.click.top =
this.helperProportions.height - d.bottom + this.margins.top
        }, _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent(); var d = this.offsetParent.offset(); if (this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) { d.left += this.scrollParent.scrollLeft(); d.top += this.scrollParent.scrollTop() } if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) d =
{ top: 0, left: 0 }; return { top: d.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: d.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
        }, _getRelativeOffset: function () { if (this.cssPosition == "relative") { var d = this.currentItem.position(); return { top: d.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: d.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()} } else return { top: 0, left: 0} }, _cacheMargins: function () {
            this.margins = { left: parseInt(this.currentItem.css("marginLeft"),
10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight()} }, _setContainment: function () {
            var d = this.options; if (d.containment == "parent") d.containment = this.helper[0].parentNode; if (d.containment == "document" || d.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a(d.containment == "document" ?
document : window).width() - this.helperProportions.width - this.margins.left, (a(d.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]; if (!/^(document|window|parent)$/.test(d.containment)) {
                var c = a(d.containment)[0]; d = a(d.containment).offset(); var e = a(c).css("overflow") != "hidden"; this.containment = [d.left + (parseInt(a(c).css("borderLeftWidth"), 10) || 0) + (parseInt(a(c).css("paddingLeft"), 10) || 0) - this.margins.left, d.top + (parseInt(a(c).css("borderTopWidth"),
10) || 0) + (parseInt(a(c).css("paddingTop"), 10) || 0) - this.margins.top, d.left + (e ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(a(c).css("borderLeftWidth"), 10) || 0) - (parseInt(a(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, d.top + (e ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(a(c).css("borderTopWidth"), 10) || 0) - (parseInt(a(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            } 
        }, _convertPositionTo: function (d, c) {
            if (!c) c =
this.position; d = d == "absolute" ? 1 : -1; var e = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, h = /(html|body)/i.test(e[0].tagName); return { top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : h ? 0 : e.scrollTop()) * d), left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - (a.browser.safari &&
this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : h ? 0 : e.scrollLeft()) * d)
}
        }, _generatePosition: function (d) {
            var c = this.options, e = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, h = /(html|body)/i.test(e[0].tagName); if (this.cssPosition == "relative" && !(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0])) this.offset.relative = this._getRelativeOffset();
            var g = d.pageX, i = d.pageY; if (this.originalPosition) {
                if (this.containment) { if (d.pageX - this.offset.click.left < this.containment[0]) g = this.containment[0] + this.offset.click.left; if (d.pageY - this.offset.click.top < this.containment[1]) i = this.containment[1] + this.offset.click.top; if (d.pageX - this.offset.click.left > this.containment[2]) g = this.containment[2] + this.offset.click.left; if (d.pageY - this.offset.click.top > this.containment[3]) i = this.containment[3] + this.offset.click.top } if (c.grid) {
                    i = this.originalPageY + Math.round((i -
this.originalPageY) / c.grid[1]) * c.grid[1]; i = this.containment ? !(i - this.offset.click.top < this.containment[1] || i - this.offset.click.top > this.containment[3]) ? i : !(i - this.offset.click.top < this.containment[1]) ? i - c.grid[1] : i + c.grid[1] : i; g = this.originalPageX + Math.round((g - this.originalPageX) / c.grid[0]) * c.grid[0]; g = this.containment ? !(g - this.offset.click.left < this.containment[0] || g - this.offset.click.left > this.containment[2]) ? g : !(g - this.offset.click.left < this.containment[0]) ? g - c.grid[0] : g + c.grid[0] : g
                } 
            } return { top: i -
this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : h ? 0 : e.scrollTop()), left: g - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : h ? 0 : e.scrollLeft())
            }
        }, _rearrange: function (d, c, e, h) {
            e ? e[0].appendChild(this.placeholder[0]) : c.item[0].parentNode.insertBefore(this.placeholder[0],
this.direction == "down" ? c.item[0] : c.item[0].nextSibling); this.counter = this.counter ? ++this.counter : 1; var g = this, i = this.counter; window.setTimeout(function () { i == g.counter && g.refreshPositions(!h) }, 0)
        }, _clear: function (d, c) {
            this.reverting = false; var e = []; !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem); this._noFinalSort = null; if (this.helper[0] == this.currentItem[0]) {
                for (var h in this._storedCSS) if (this._storedCSS[h] == "auto" || this._storedCSS[h] == "static") this._storedCSS[h] =
""; this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show(); this.fromOutside && !c && e.push(function (g) { this._trigger("receive", g, this._uiHash(this.fromOutside)) }); if ((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !c) e.push(function (g) { this._trigger("update", g, this._uiHash()) }); if (!a.ui.contains(this.element[0], this.currentItem[0])) {
                c || e.push(function (g) {
                    this._trigger("remove",
g, this._uiHash())
                }); for (h = this.containers.length - 1; h >= 0; h--) if (a.ui.contains(this.containers[h].element[0], this.currentItem[0]) && !c) { e.push(function (g) { return function (i) { g._trigger("receive", i, this._uiHash(this)) } } .call(this, this.containers[h])); e.push(function (g) { return function (i) { g._trigger("update", i, this._uiHash(this)) } } .call(this, this.containers[h])) } 
            } for (h = this.containers.length - 1; h >= 0; h--) {
                c || e.push(function (g) { return function (i) { g._trigger("deactivate", i, this._uiHash(this)) } } .call(this,
this.containers[h])); if (this.containers[h].containerCache.over) { e.push(function (g) { return function (i) { g._trigger("out", i, this._uiHash(this)) } } .call(this, this.containers[h])); this.containers[h].containerCache.over = 0 } 
            } this._storedCursor && a("body").css("cursor", this._storedCursor); this._storedOpacity && this.helper.css("opacity", this._storedOpacity); if (this._storedZIndex) this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex); this.dragging = false; if (this.cancelHelperRemoval) {
                if (!c) {
                    this._trigger("beforeStop",
d, this._uiHash()); for (h = 0; h < e.length; h++) e[h].call(this, d); this._trigger("stop", d, this._uiHash())
                } return false
            } c || this._trigger("beforeStop", d, this._uiHash()); this.placeholder[0].parentNode.removeChild(this.placeholder[0]); this.helper[0] != this.currentItem[0] && this.helper.remove(); this.helper = null; if (!c) { for (h = 0; h < e.length; h++) e[h].call(this, d); this._trigger("stop", d, this._uiHash()) } this.fromOutside = false; return true
        }, _trigger: function () { a.Widget.prototype._trigger.apply(this, arguments) === false && this.cancel() },
        _uiHash: function (d) { var c = d || this; return { helper: c.helper, placeholder: c.placeholder || a([]), position: c.position, originalPosition: c.originalPosition, offset: c.positionAbs, item: c.currentItem, sender: d ? d.element : null} } 
    }); a.extend(a.ui.sortable, { version: "1.8.16" })
})(jQuery);
jQuery.effects || function (a, d) {
    function c(n) {
        var k; if (n && n.constructor == Array && n.length == 3) return n; if (k = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n)) return [parseInt(k[1], 10), parseInt(k[2], 10), parseInt(k[3], 10)]; if (k = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(n)) return [parseFloat(k[1]) * 2.55, parseFloat(k[2]) * 2.55, parseFloat(k[3]) * 2.55]; if (k = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n)) return [parseInt(k[1],
16), parseInt(k[2], 16), parseInt(k[3], 16)]; if (k = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n)) return [parseInt(k[1] + k[1], 16), parseInt(k[2] + k[2], 16), parseInt(k[3] + k[3], 16)]; if (/rgba\(0, 0, 0, 0\)/.exec(n)) return j.transparent; return j[a.trim(n).toLowerCase()]
    } function e(n, k) { var m; do { m = a.curCSS(n, k); if (m != "" && m != "transparent" || a.nodeName(n, "body")) break; k = "backgroundColor" } while (n = n.parentNode); return c(m) } function h() {
        var n = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
k = {}, m, p; if (n && n.length && n[0] && n[n[0]]) for (var q = n.length; q--; ) { m = n[q]; if (typeof n[m] == "string") { p = m.replace(/\-(\w)/g, function (s, r) { return r.toUpperCase() }); k[p] = n[m] } } else for (m in n) if (typeof n[m] === "string") k[m] = n[m]; return k
    } function g(n) { var k, m; for (k in n) { m = n[k]; if (m == null || a.isFunction(m) || k in o || /scrollbar/.test(k) || !/color/i.test(k) && isNaN(parseFloat(m))) delete n[k] } return n } function i(n, k) { var m = { _: 0 }, p; for (p in k) if (n[p] != k[p]) m[p] = k[p]; return m } function b(n, k, m, p) {
        if (typeof n == "object") {
            p =
k; m = null; k = n; n = k.effect
        } if (a.isFunction(k)) { p = k; m = null; k = {} } if (typeof k == "number" || a.fx.speeds[k]) { p = m; m = k; k = {} } if (a.isFunction(m)) { p = m; m = null } k = k || {}; m = m || k.duration; m = a.fx.off ? 0 : typeof m == "number" ? m : m in a.fx.speeds ? a.fx.speeds[m] : a.fx.speeds._default; p = p || k.complete; return [n, k, m, p]
    } function f(n) { if (!n || typeof n === "number" || a.fx.speeds[n]) return true; if (typeof n === "string" && !a.effects[n]) return true; return false } a.effects = {}; a.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor",
"borderTopColor", "borderColor", "color", "outlineColor"], function (n, k) { a.fx.step[k] = function (m) { if (!m.colorInit) { m.start = e(m.elem, k); m.end = c(m.end); m.colorInit = true } m.elem.style[k] = "rgb(" + Math.max(Math.min(parseInt(m.pos * (m.end[0] - m.start[0]) + m.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(m.pos * (m.end[1] - m.start[1]) + m.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(m.pos * (m.end[2] - m.start[2]) + m.start[2], 10), 255), 0) + ")" } }); var j = { aqua: [0, 255, 255], azure: [240, 255, 255], beige: [245, 245, 220], black: [0,
0, 0], blue: [0, 0, 255], brown: [165, 42, 42], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgrey: [169, 169, 169], darkgreen: [0, 100, 0], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkviolet: [148, 0, 211], fuchsia: [255, 0, 255], gold: [255, 215, 0], green: [0, 128, 0], indigo: [75, 0, 130], khaki: [240, 230, 140], lightblue: [173, 216, 230], lightcyan: [224, 255, 255], lightgreen: [144, 238, 144], lightgrey: [211,
211, 211], lightpink: [255, 182, 193], lightyellow: [255, 255, 224], lime: [0, 255, 0], magenta: [255, 0, 255], maroon: [128, 0, 0], navy: [0, 0, 128], olive: [128, 128, 0], orange: [255, 165, 0], pink: [255, 192, 203], purple: [128, 0, 128], violet: [128, 0, 128], red: [255, 0, 0], silver: [192, 192, 192], white: [255, 255, 255], yellow: [255, 255, 0], transparent: [255, 255, 255]
}, l = ["add", "remove", "toggle"], o = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 }; a.effects.animateClass = function (n, k, m,
p) { if (a.isFunction(m)) { p = m; m = null } return this.queue(function () { var q = a(this), s = q.attr("style") || " ", r = g(h.call(this)), u, v = q.attr("class"); a.each(l, function (w, x) { n[x] && q[x + "Class"](n[x]) }); u = g(h.call(this)); q.attr("class", v); q.animate(i(r, u), { queue: false, duration: k, easing: m, complete: function () { a.each(l, function (w, x) { n[x] && q[x + "Class"](n[x]) }); if (typeof q.attr("style") == "object") { q.attr("style").cssText = ""; q.attr("style").cssText = s } else q.attr("style", s); p && p.apply(this, arguments); a.dequeue(this) } }) }) };
    a.fn.extend({ _addClass: a.fn.addClass, addClass: function (n, k, m, p) { return k ? a.effects.animateClass.apply(this, [{ add: n }, k, m, p]) : this._addClass(n) }, _removeClass: a.fn.removeClass, removeClass: function (n, k, m, p) { return k ? a.effects.animateClass.apply(this, [{ remove: n }, k, m, p]) : this._removeClass(n) }, _toggleClass: a.fn.toggleClass, toggleClass: function (n, k, m, p, q) {
        return typeof k == "boolean" || k === d ? m ? a.effects.animateClass.apply(this, [k ? { add: n} : { remove: n }, m, p, q]) : this._toggleClass(n, k) : a.effects.animateClass.apply(this,
[{ toggle: n }, k, m, p])
    }, switchClass: function (n, k, m, p, q) { return a.effects.animateClass.apply(this, [{ add: k, remove: n }, m, p, q]) } 
    }); a.extend(a.effects, { version: "1.8.16", save: function (n, k) { for (var m = 0; m < k.length; m++) k[m] !== null && n.data("ec.storage." + k[m], n[0].style[k[m]]) }, restore: function (n, k) { for (var m = 0; m < k.length; m++) k[m] !== null && n.css(k[m], n.data("ec.storage." + k[m])) }, setMode: function (n, k) { if (k == "toggle") k = n.is(":hidden") ? "show" : "hide"; return k }, getBaseline: function (n, k) {
        var m; switch (n[0]) {
            case "top": m =
0; break; case "middle": m = 0.5; break; case "bottom": m = 1; break; default: m = n[0] / k.height
        } switch (n[1]) { case "left": n = 0; break; case "center": n = 0.5; break; case "right": n = 1; break; default: n = n[1] / k.width } return { x: n, y: m}
    }, createWrapper: function (n) {
        if (n.parent().is(".ui-effects-wrapper")) return n.parent(); var k = { width: n.outerWidth(true), height: n.outerHeight(true), "float": n.css("float") }, m = a("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
p = document.activeElement; n.wrap(m); if (n[0] === p || a.contains(n[0], p)) a(p).focus(); m = n.parent(); if (n.css("position") == "static") { m.css({ position: "relative" }); n.css({ position: "relative" }) } else { a.extend(k, { position: n.css("position"), zIndex: n.css("z-index") }); a.each(["top", "left", "bottom", "right"], function (q, s) { k[s] = n.css(s); if (isNaN(parseInt(k[s], 10))) k[s] = "auto" }); n.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" }) } return m.css(k).show()
    }, removeWrapper: function (n) {
        var k, m = document.activeElement;
        if (n.parent().is(".ui-effects-wrapper")) { k = n.parent().replaceWith(n); if (n[0] === m || a.contains(n[0], m)) a(m).focus(); return k } return n
    }, setTransition: function (n, k, m, p) { p = p || {}; a.each(k, function (q, s) { unit = n.cssUnit(s); if (unit[0] > 0) p[s] = unit[0] * m + unit[1] }); return p } 
    }); a.fn.extend({ effect: function (n) {
        var k = b.apply(this, arguments), m = { options: k[1], duration: k[2], callback: k[3] }; k = m.options.mode; var p = a.effects[n]; if (a.fx.off || !p) return k ? this[k](m.duration, m.callback) : this.each(function () { m.callback && m.callback.call(this) });
        return p.call(this, m)
    }, _show: a.fn.show, show: function (n) { if (f(n)) return this._show.apply(this, arguments); else { var k = b.apply(this, arguments); k[1].mode = "show"; return this.effect.apply(this, k) } }, _hide: a.fn.hide, hide: function (n) { if (f(n)) return this._hide.apply(this, arguments); else { var k = b.apply(this, arguments); k[1].mode = "hide"; return this.effect.apply(this, k) } }, __toggle: a.fn.toggle, toggle: function (n) {
        if (f(n) || typeof n === "boolean" || a.isFunction(n)) return this.__toggle.apply(this, arguments); else {
            var k = b.apply(this,
arguments); k[1].mode = "toggle"; return this.effect.apply(this, k)
        } 
    }, cssUnit: function (n) { var k = this.css(n), m = []; a.each(["em", "px", "%", "pt"], function (p, q) { if (k.indexOf(q) > 0) m = [parseFloat(k), q] }); return m } 
    }); a.easing.jswing = a.easing.swing; a.extend(a.easing, { def: "easeOutQuad", swing: function (n, k, m, p, q) { return a.easing[a.easing.def](n, k, m, p, q) }, easeInQuad: function (n, k, m, p, q) { return p * (k /= q) * k + m }, easeOutQuad: function (n, k, m, p, q) { return -p * (k /= q) * (k - 2) + m }, easeInOutQuad: function (n, k, m, p, q) {
        if ((k /= q / 2) < 1) return p /
2 * k * k + m; return -p / 2 * (--k * (k - 2) - 1) + m
    }, easeInCubic: function (n, k, m, p, q) { return p * (k /= q) * k * k + m }, easeOutCubic: function (n, k, m, p, q) { return p * ((k = k / q - 1) * k * k + 1) + m }, easeInOutCubic: function (n, k, m, p, q) { if ((k /= q / 2) < 1) return p / 2 * k * k * k + m; return p / 2 * ((k -= 2) * k * k + 2) + m }, easeInQuart: function (n, k, m, p, q) { return p * (k /= q) * k * k * k + m }, easeOutQuart: function (n, k, m, p, q) { return -p * ((k = k / q - 1) * k * k * k - 1) + m }, easeInOutQuart: function (n, k, m, p, q) { if ((k /= q / 2) < 1) return p / 2 * k * k * k * k + m; return -p / 2 * ((k -= 2) * k * k * k - 2) + m }, easeInQuint: function (n, k, m,
p, q) { return p * (k /= q) * k * k * k * k + m }, easeOutQuint: function (n, k, m, p, q) { return p * ((k = k / q - 1) * k * k * k * k + 1) + m }, easeInOutQuint: function (n, k, m, p, q) { if ((k /= q / 2) < 1) return p / 2 * k * k * k * k * k + m; return p / 2 * ((k -= 2) * k * k * k * k + 2) + m }, easeInSine: function (n, k, m, p, q) { return -p * Math.cos(k / q * (Math.PI / 2)) + p + m }, easeOutSine: function (n, k, m, p, q) { return p * Math.sin(k / q * (Math.PI / 2)) + m }, easeInOutSine: function (n, k, m, p, q) { return -p / 2 * (Math.cos(Math.PI * k / q) - 1) + m }, easeInExpo: function (n, k, m, p, q) { return k == 0 ? m : p * Math.pow(2, 10 * (k / q - 1)) + m }, easeOutExpo: function (n,
k, m, p, q) { return k == q ? m + p : p * (-Math.pow(2, -10 * k / q) + 1) + m }, easeInOutExpo: function (n, k, m, p, q) { if (k == 0) return m; if (k == q) return m + p; if ((k /= q / 2) < 1) return p / 2 * Math.pow(2, 10 * (k - 1)) + m; return p / 2 * (-Math.pow(2, -10 * --k) + 2) + m }, easeInCirc: function (n, k, m, p, q) { return -p * (Math.sqrt(1 - (k /= q) * k) - 1) + m }, easeOutCirc: function (n, k, m, p, q) { return p * Math.sqrt(1 - (k = k / q - 1) * k) + m }, easeInOutCirc: function (n, k, m, p, q) { if ((k /= q / 2) < 1) return -p / 2 * (Math.sqrt(1 - k * k) - 1) + m; return p / 2 * (Math.sqrt(1 - (k -= 2) * k) + 1) + m }, easeInElastic: function (n, k, m,
p, q) { n = 1.70158; var s = 0, r = p; if (k == 0) return m; if ((k /= q) == 1) return m + p; s || (s = q * 0.3); if (r < Math.abs(p)) { r = p; n = s / 4 } else n = s / (2 * Math.PI) * Math.asin(p / r); return -(r * Math.pow(2, 10 * (k -= 1)) * Math.sin((k * q - n) * 2 * Math.PI / s)) + m }, easeOutElastic: function (n, k, m, p, q) { n = 1.70158; var s = 0, r = p; if (k == 0) return m; if ((k /= q) == 1) return m + p; s || (s = q * 0.3); if (r < Math.abs(p)) { r = p; n = s / 4 } else n = s / (2 * Math.PI) * Math.asin(p / r); return r * Math.pow(2, -10 * k) * Math.sin((k * q - n) * 2 * Math.PI / s) + p + m }, easeInOutElastic: function (n, k, m, p, q) {
    n = 1.70158; var s =
0, r = p; if (k == 0) return m; if ((k /= q / 2) == 2) return m + p; s || (s = q * 0.3 * 1.5); if (r < Math.abs(p)) { r = p; n = s / 4 } else n = s / (2 * Math.PI) * Math.asin(p / r); if (k < 1) return -0.5 * r * Math.pow(2, 10 * (k -= 1)) * Math.sin((k * q - n) * 2 * Math.PI / s) + m; return r * Math.pow(2, -10 * (k -= 1)) * Math.sin((k * q - n) * 2 * Math.PI / s) * 0.5 + p + m
}, easeInBack: function (n, k, m, p, q, s) { if (s == d) s = 1.70158; return p * (k /= q) * k * ((s + 1) * k - s) + m }, easeOutBack: function (n, k, m, p, q, s) { if (s == d) s = 1.70158; return p * ((k = k / q - 1) * k * ((s + 1) * k + s) + 1) + m }, easeInOutBack: function (n, k, m, p, q, s) {
    if (s == d) s = 1.70158;
    if ((k /= q / 2) < 1) return p / 2 * k * k * (((s *= 1.525) + 1) * k - s) + m; return p / 2 * ((k -= 2) * k * (((s *= 1.525) + 1) * k + s) + 2) + m
}, easeInBounce: function (n, k, m, p, q) { return p - a.easing.easeOutBounce(n, q - k, 0, p, q) + m }, easeOutBounce: function (n, k, m, p, q) { return (k /= q) < 1 / 2.75 ? p * 7.5625 * k * k + m : k < 2 / 2.75 ? p * (7.5625 * (k -= 1.5 / 2.75) * k + 0.75) + m : k < 2.5 / 2.75 ? p * (7.5625 * (k -= 2.25 / 2.75) * k + 0.9375) + m : p * (7.5625 * (k -= 2.625 / 2.75) * k + 0.984375) + m }, easeInOutBounce: function (n, k, m, p, q) {
    if (k < q / 2) return a.easing.easeInBounce(n, k * 2, 0, p, q) * 0.5 + m; return a.easing.easeOutBounce(n,
k * 2 - q, 0, p, q) * 0.5 + p * 0.5 + m
} 
    })
} (jQuery);
(function (a) {
    a.effects.blind = function (d) {
        return this.queue(function () {
            var c = a(this), e = ["position", "top", "bottom", "left", "right"], h = a.effects.setMode(c, d.options.mode || "hide"), g = d.options.direction || "vertical"; a.effects.save(c, e); c.show(); var i = a.effects.createWrapper(c).css({ overflow: "hidden" }), b = g == "vertical" ? "height" : "width"; g = g == "vertical" ? i.height() : i.width(); h == "show" && i.css(b, 0); var f = {}; f[b] = h == "show" ? g : 0; i.animate(f, d.duration, d.options.easing, function () {
                h == "hide" && c.hide(); a.effects.restore(c,
e); a.effects.removeWrapper(c); d.callback && d.callback.apply(c[0], arguments); c.dequeue()
            })
        })
    } 
})(jQuery);
(function (a) {
    a.effects.bounce = function (d) {
        return this.queue(function () {
            var c = a(this), e = ["position", "top", "bottom", "left", "right"], h = a.effects.setMode(c, d.options.mode || "effect"), g = d.options.direction || "up", i = d.options.distance || 20, b = d.options.times || 5, f = d.duration || 250; /show|hide/.test(h) && e.push("opacity"); a.effects.save(c, e); c.show(); a.effects.createWrapper(c); var j = g == "up" || g == "down" ? "top" : "left"; g = g == "up" || g == "left" ? "pos" : "neg"; i = d.options.distance || (j == "top" ? c.outerHeight({ margin: true }) / 3 : c.outerWidth({ margin: true }) /
3); if (h == "show") c.css("opacity", 0).css(j, g == "pos" ? -i : i); if (h == "hide") i /= b * 2; h != "hide" && b--; if (h == "show") { var l = { opacity: 1 }; l[j] = (g == "pos" ? "+=" : "-=") + i; c.animate(l, f / 2, d.options.easing); i /= 2; b-- } for (l = 0; l < b; l++) { var o = {}, n = {}; o[j] = (g == "pos" ? "-=" : "+=") + i; n[j] = (g == "pos" ? "+=" : "-=") + i; c.animate(o, f / 2, d.options.easing).animate(n, f / 2, d.options.easing); i = h == "hide" ? i * 2 : i / 2 } if (h == "hide") {
                l = { opacity: 0 }; l[j] = (g == "pos" ? "-=" : "+=") + i; c.animate(l, f / 2, d.options.easing, function () {
                    c.hide(); a.effects.restore(c, e); a.effects.removeWrapper(c);
                    d.callback && d.callback.apply(this, arguments)
                })
            } else { o = {}; n = {}; o[j] = (g == "pos" ? "-=" : "+=") + i; n[j] = (g == "pos" ? "+=" : "-=") + i; c.animate(o, f / 2, d.options.easing).animate(n, f / 2, d.options.easing, function () { a.effects.restore(c, e); a.effects.removeWrapper(c); d.callback && d.callback.apply(this, arguments) }) } c.queue("fx", function () { c.dequeue() }); c.dequeue()
        })
    } 
})(jQuery);
(function (a) {
    a.effects.clip = function (d) {
        return this.queue(function () {
            var c = a(this), e = ["position", "top", "bottom", "left", "right", "height", "width"], h = a.effects.setMode(c, d.options.mode || "hide"), g = d.options.direction || "vertical"; a.effects.save(c, e); c.show(); var i = a.effects.createWrapper(c).css({ overflow: "hidden" }); i = c[0].tagName == "IMG" ? i : c; var b = { size: g == "vertical" ? "height" : "width", position: g == "vertical" ? "top" : "left" }; g = g == "vertical" ? i.height() : i.width(); if (h == "show") {
                i.css(b.size, 0); i.css(b.position,
g / 2)
            } var f = {}; f[b.size] = h == "show" ? g : 0; f[b.position] = h == "show" ? 0 : g / 2; i.animate(f, { queue: false, duration: d.duration, easing: d.options.easing, complete: function () { h == "hide" && c.hide(); a.effects.restore(c, e); a.effects.removeWrapper(c); d.callback && d.callback.apply(c[0], arguments); c.dequeue() } })
        })
    } 
})(jQuery);
(function (a) {
    a.effects.drop = function (d) {
        return this.queue(function () {
            var c = a(this), e = ["position", "top", "bottom", "left", "right", "opacity"], h = a.effects.setMode(c, d.options.mode || "hide"), g = d.options.direction || "left"; a.effects.save(c, e); c.show(); a.effects.createWrapper(c); var i = g == "up" || g == "down" ? "top" : "left"; g = g == "up" || g == "left" ? "pos" : "neg"; var b = d.options.distance || (i == "top" ? c.outerHeight({ margin: true }) / 2 : c.outerWidth({ margin: true }) / 2); if (h == "show") c.css("opacity", 0).css(i, g == "pos" ? -b : b); var f = { opacity: h ==
"show" ? 1 : 0
            }; f[i] = (h == "show" ? g == "pos" ? "+=" : "-=" : g == "pos" ? "-=" : "+=") + b; c.animate(f, { queue: false, duration: d.duration, easing: d.options.easing, complete: function () { h == "hide" && c.hide(); a.effects.restore(c, e); a.effects.removeWrapper(c); d.callback && d.callback.apply(this, arguments); c.dequeue() } })
        })
    } 
})(jQuery);
(function (a) {
    a.effects.explode = function (d) {
        return this.queue(function () {
            var c = d.options.pieces ? Math.round(Math.sqrt(d.options.pieces)) : 3, e = d.options.pieces ? Math.round(Math.sqrt(d.options.pieces)) : 3; d.options.mode = d.options.mode == "toggle" ? a(this).is(":visible") ? "hide" : "show" : d.options.mode; var h = a(this).show().css("visibility", "hidden"), g = h.offset(); g.top -= parseInt(h.css("marginTop"), 10) || 0; g.left -= parseInt(h.css("marginLeft"), 10) || 0; for (var i = h.outerWidth(true), b = h.outerHeight(true), f = 0; f < c; f++) for (var j =
0; j < e; j++) h.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -j * (i / e), top: -f * (b / c) }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: i / e, height: b / c, left: g.left + j * (i / e) + (d.options.mode == "show" ? (j - Math.floor(e / 2)) * (i / e) : 0), top: g.top + f * (b / c) + (d.options.mode == "show" ? (f - Math.floor(c / 2)) * (b / c) : 0), opacity: d.options.mode == "show" ? 0 : 1 }).animate({ left: g.left + j * (i / e) + (d.options.mode == "show" ? 0 : (j - Math.floor(e / 2)) * (i / e)), top: g.top +
f * (b / c) + (d.options.mode == "show" ? 0 : (f - Math.floor(c / 2)) * (b / c)), opacity: d.options.mode == "show" ? 1 : 0
}, d.duration || 500); setTimeout(function () { d.options.mode == "show" ? h.css({ visibility: "visible" }) : h.css({ visibility: "visible" }).hide(); d.callback && d.callback.apply(h[0]); h.dequeue(); a("div.ui-effects-explode").remove() }, d.duration || 500)
        })
    } 
})(jQuery);
(function (a) { a.effects.fade = function (d) { return this.queue(function () { var c = a(this), e = a.effects.setMode(c, d.options.mode || "hide"); c.animate({ opacity: e }, { queue: false, duration: d.duration, easing: d.options.easing, complete: function () { d.callback && d.callback.apply(this, arguments); c.dequeue() } }) }) } })(jQuery);
(function (a) {
    a.effects.fold = function (d) {
        return this.queue(function () {
            var c = a(this), e = ["position", "top", "bottom", "left", "right"], h = a.effects.setMode(c, d.options.mode || "hide"), g = d.options.size || 15, i = !!d.options.horizFirst, b = d.duration ? d.duration / 2 : a.fx.speeds._default / 2; a.effects.save(c, e); c.show(); var f = a.effects.createWrapper(c).css({ overflow: "hidden" }), j = h == "show" != i, l = j ? ["width", "height"] : ["height", "width"]; j = j ? [f.width(), f.height()] : [f.height(), f.width()]; var o = /([0-9]+)%/.exec(g); if (o) g = parseInt(o[1],
10) / 100 * j[h == "hide" ? 0 : 1]; if (h == "show") f.css(i ? { height: 0, width: g} : { height: g, width: 0 }); i = {}; o = {}; i[l[0]] = h == "show" ? j[0] : g; o[l[1]] = h == "show" ? j[1] : 0; f.animate(i, b, d.options.easing).animate(o, b, d.options.easing, function () { h == "hide" && c.hide(); a.effects.restore(c, e); a.effects.removeWrapper(c); d.callback && d.callback.apply(c[0], arguments); c.dequeue() })
        })
    } 
})(jQuery);
(function (a) {
    a.effects.highlight = function (d) {
        return this.queue(function () {
            var c = a(this), e = ["backgroundImage", "backgroundColor", "opacity"], h = a.effects.setMode(c, d.options.mode || "show"), g = { backgroundColor: c.css("backgroundColor") }; if (h == "hide") g.opacity = 0; a.effects.save(c, e); c.show().css({ backgroundImage: "none", backgroundColor: d.options.color || "#ffff99" }).animate(g, { queue: false, duration: d.duration, easing: d.options.easing, complete: function () {
                h == "hide" && c.hide(); a.effects.restore(c, e); h == "show" && !a.support.opacity &&
this.style.removeAttribute("filter"); d.callback && d.callback.apply(this, arguments); c.dequeue()
            } 
            })
        })
    } 
})(jQuery);
(function (a) {
    a.effects.pulsate = function (d) {
        return this.queue(function () {
            var c = a(this), e = a.effects.setMode(c, d.options.mode || "show"); times = (d.options.times || 5) * 2 - 1; duration = d.duration ? d.duration / 2 : a.fx.speeds._default / 2; isVisible = c.is(":visible"); animateTo = 0; if (!isVisible) { c.css("opacity", 0).show(); animateTo = 1 } if (e == "hide" && isVisible || e == "show" && !isVisible) times--; for (e = 0; e < times; e++) { c.animate({ opacity: animateTo }, duration, d.options.easing); animateTo = (animateTo + 1) % 2 } c.animate({ opacity: animateTo }, duration,
d.options.easing, function () { animateTo == 0 && c.hide(); d.callback && d.callback.apply(this, arguments) }); c.queue("fx", function () { c.dequeue() }).dequeue()
        })
    } 
})(jQuery);
(function (a) {
    a.effects.puff = function (d) { return this.queue(function () { var c = a(this), e = a.effects.setMode(c, d.options.mode || "hide"), h = parseInt(d.options.percent, 10) || 150, g = h / 100, i = { height: c.height(), width: c.width() }; a.extend(d.options, { fade: true, mode: e, percent: e == "hide" ? h : 100, from: e == "hide" ? i : { height: i.height * g, width: i.width * g} }); c.effect("scale", d.options, d.duration, d.callback); c.dequeue() }) }; a.effects.scale = function (d) {
        return this.queue(function () {
            var c = a(this), e = a.extend(true, {}, d.options), h = a.effects.setMode(c,
d.options.mode || "effect"), g = parseInt(d.options.percent, 10) || (parseInt(d.options.percent, 10) == 0 ? 0 : h == "hide" ? 0 : 100), i = d.options.direction || "both", b = d.options.origin; if (h != "effect") { e.origin = b || ["middle", "center"]; e.restore = true } b = { height: c.height(), width: c.width() }; c.from = d.options.from || (h == "show" ? { height: 0, width: 0} : b); g = { y: i != "horizontal" ? g / 100 : 1, x: i != "vertical" ? g / 100 : 1 }; c.to = { height: b.height * g.y, width: b.width * g.x }; if (d.options.fade) {
                if (h == "show") { c.from.opacity = 0; c.to.opacity = 1 } if (h == "hide") {
                    c.from.opacity =
1; c.to.opacity = 0
                } 
            } e.from = c.from; e.to = c.to; e.mode = h; c.effect("size", e, d.duration, d.callback); c.dequeue()
        })
    }; a.effects.size = function (d) {
        return this.queue(function () {
            var c = a(this), e = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], g = ["width", "height", "overflow"], i = ["fontSize"], b = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], f = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
j = a.effects.setMode(c, d.options.mode || "effect"), l = d.options.restore || false, o = d.options.scale || "both", n = d.options.origin, k = { height: c.height(), width: c.width() }; c.from = d.options.from || k; c.to = d.options.to || k; if (n) { n = a.effects.getBaseline(n, k); c.from.top = (k.height - c.from.height) * n.y; c.from.left = (k.width - c.from.width) * n.x; c.to.top = (k.height - c.to.height) * n.y; c.to.left = (k.width - c.to.width) * n.x } var m = { from: { y: c.from.height / k.height, x: c.from.width / k.width }, to: { y: c.to.height / k.height, x: c.to.width / k.width} };
            if (o == "box" || o == "both") { if (m.from.y != m.to.y) { e = e.concat(b); c.from = a.effects.setTransition(c, b, m.from.y, c.from); c.to = a.effects.setTransition(c, b, m.to.y, c.to) } if (m.from.x != m.to.x) { e = e.concat(f); c.from = a.effects.setTransition(c, f, m.from.x, c.from); c.to = a.effects.setTransition(c, f, m.to.x, c.to) } } if (o == "content" || o == "both") if (m.from.y != m.to.y) { e = e.concat(i); c.from = a.effects.setTransition(c, i, m.from.y, c.from); c.to = a.effects.setTransition(c, i, m.to.y, c.to) } a.effects.save(c, l ? e : h); c.show(); a.effects.createWrapper(c);
            c.css("overflow", "hidden").css(c.from); if (o == "content" || o == "both") {
                b = b.concat(["marginTop", "marginBottom"]).concat(i); f = f.concat(["marginLeft", "marginRight"]); g = e.concat(b).concat(f); c.find("*[width]").each(function () {
                    child = a(this); l && a.effects.save(child, g); var p = { height: child.height(), width: child.width() }; child.from = { height: p.height * m.from.y, width: p.width * m.from.x }; child.to = { height: p.height * m.to.y, width: p.width * m.to.x }; if (m.from.y != m.to.y) {
                        child.from = a.effects.setTransition(child, b, m.from.y, child.from);
                        child.to = a.effects.setTransition(child, b, m.to.y, child.to)
                    } if (m.from.x != m.to.x) { child.from = a.effects.setTransition(child, f, m.from.x, child.from); child.to = a.effects.setTransition(child, f, m.to.x, child.to) } child.css(child.from); child.animate(child.to, d.duration, d.options.easing, function () { l && a.effects.restore(child, g) })
                })
            } c.animate(c.to, { queue: false, duration: d.duration, easing: d.options.easing, complete: function () {
                c.to.opacity === 0 && c.css("opacity", c.from.opacity); j == "hide" && c.hide(); a.effects.restore(c,
l ? e : h); a.effects.removeWrapper(c); d.callback && d.callback.apply(this, arguments); c.dequeue()
            } 
            })
        })
    } 
})(jQuery);
(function (a) {
    a.effects.shake = function (d) {
        return this.queue(function () {
            var c = a(this), e = ["position", "top", "bottom", "left", "right"]; a.effects.setMode(c, d.options.mode || "effect"); var h = d.options.direction || "left", g = d.options.distance || 20, i = d.options.times || 3, b = d.duration || d.options.duration || 140; a.effects.save(c, e); c.show(); a.effects.createWrapper(c); var f = h == "up" || h == "down" ? "top" : "left", j = h == "up" || h == "left" ? "pos" : "neg"; h = {}; var l = {}, o = {}; h[f] = (j == "pos" ? "-=" : "+=") + g; l[f] = (j == "pos" ? "+=" : "-=") + g * 2; o[f] =
(j == "pos" ? "-=" : "+=") + g * 2; c.animate(h, b, d.options.easing); for (g = 1; g < i; g++) c.animate(l, b, d.options.easing).animate(o, b, d.options.easing); c.animate(l, b, d.options.easing).animate(h, b / 2, d.options.easing, function () { a.effects.restore(c, e); a.effects.removeWrapper(c); d.callback && d.callback.apply(this, arguments) }); c.queue("fx", function () { c.dequeue() }); c.dequeue()
        })
    } 
})(jQuery);
(function (a) {
    a.effects.slide = function (d) {
        return this.queue(function () {
            var c = a(this), e = ["position", "top", "bottom", "left", "right"], h = a.effects.setMode(c, d.options.mode || "show"), g = d.options.direction || "left"; a.effects.save(c, e); c.show(); a.effects.createWrapper(c).css({ overflow: "hidden" }); var i = g == "up" || g == "down" ? "top" : "left"; g = g == "up" || g == "left" ? "pos" : "neg"; var b = d.options.distance || (i == "top" ? c.outerHeight({ margin: true }) : c.outerWidth({ margin: true })); if (h == "show") c.css(i, g == "pos" ? isNaN(b) ? "-" + b : -b : b);
            var f = {}; f[i] = (h == "show" ? g == "pos" ? "+=" : "-=" : g == "pos" ? "-=" : "+=") + b; c.animate(f, { queue: false, duration: d.duration, easing: d.options.easing, complete: function () { h == "hide" && c.hide(); a.effects.restore(c, e); a.effects.removeWrapper(c); d.callback && d.callback.apply(this, arguments); c.dequeue() } })
        })
    } 
})(jQuery);
(function (a) {
    a.effects.transfer = function (d) {
        return this.queue(function () {
            var c = a(this), e = a(d.options.to), h = e.offset(); e = { top: h.top, left: h.left, height: e.innerHeight(), width: e.innerWidth() }; h = c.offset(); var g = a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(d.options.className).css({ top: h.top, left: h.left, height: c.innerHeight(), width: c.innerWidth(), position: "absolute" }).animate(e, d.duration, d.options.easing, function () {
                g.remove(); d.callback && d.callback.apply(c[0], arguments);
                c.dequeue()
            })
        })
    } 
})(jQuery);
(function (a) {
    a.widget("ui.accordion", { options: { active: 0, animated: "slide", autoHeight: true, clearStyle: false, collapsible: false, event: "click", fillSpace: false, header: "> li > :first-child,> :not(li):even", icons: { header: "ui-icon-triangle-1-e", headerSelected: "ui-icon-triangle-1-s" }, navigation: false, navigationFilter: function () { return this.href.toLowerCase() === location.href.toLowerCase() } }, _create: function () {
        var d = this, c = d.options; d.running = 0; d.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"); d.headers =
d.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function () { c.disabled || a(this).addClass("ui-state-hover") }).bind("mouseleave.accordion", function () { c.disabled || a(this).removeClass("ui-state-hover") }).bind("focus.accordion", function () { c.disabled || a(this).addClass("ui-state-focus") }).bind("blur.accordion", function () { c.disabled || a(this).removeClass("ui-state-focus") }); d.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
        if (c.navigation) { var e = d.element.find("a").filter(c.navigationFilter).eq(0); if (e.length) { var h = e.closest(".ui-accordion-header"); d.active = h.length ? h : e.closest(".ui-accordion-content").prev() } } d.active = d._findActive(d.active || c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"); d.active.next().addClass("ui-accordion-content-active"); d._createIcons(); d.resize(); d.element.attr("role", "tablist"); d.headers.attr("role", "tab").bind("keydown.accordion",
function (g) { return d._keydown(g) }).next().attr("role", "tabpanel"); d.headers.not(d.active || "").attr({ "aria-expanded": "false", "aria-selected": "false", tabIndex: -1 }).next().hide(); d.active.length ? d.active.attr({ "aria-expanded": "true", "aria-selected": "true", tabIndex: 0 }) : d.headers.eq(0).attr("tabIndex", 0); a.browser.safari || d.headers.find("a").attr("tabIndex", -1); c.event && d.headers.bind(c.event.split(" ").join(".accordion ") + ".accordion", function (g) { d._clickHandler.call(d, g, this); g.preventDefault() })
    }, _createIcons: function () {
        var d =
this.options; if (d.icons) { a("<span></span>").addClass("ui-icon " + d.icons.header).prependTo(this.headers); this.active.children(".ui-icon").toggleClass(d.icons.header).toggleClass(d.icons.headerSelected); this.element.addClass("ui-accordion-icons") } 
    }, _destroyIcons: function () { this.headers.children(".ui-icon").remove(); this.element.removeClass("ui-accordion-icons") }, destroy: function () {
        var d = this.options; this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"); this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
        this.headers.find("a").removeAttr("tabIndex"); this._destroyIcons(); var c = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled"); if (d.autoHeight || d.fillHeight) c.css("height", ""); return a.Widget.prototype.destroy.call(this)
    }, _setOption: function (d, c) {
        a.Widget.prototype._setOption.apply(this, arguments); d == "active" && this.activate(c); if (d == "icons") {
            this._destroyIcons();
            c && this._createIcons()
        } if (d == "disabled") this.headers.add(this.headers.next())[c ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
    }, _keydown: function (d) {
        if (!(this.options.disabled || d.altKey || d.ctrlKey)) {
            var c = a.ui.keyCode, e = this.headers.length, h = this.headers.index(d.target), g = false; switch (d.keyCode) {
                case c.RIGHT: case c.DOWN: g = this.headers[(h + 1) % e]; break; case c.LEFT: case c.UP: g = this.headers[(h - 1 + e) % e]; break; case c.SPACE: case c.ENTER: this._clickHandler({ target: d.target }, d.target);
                    d.preventDefault()
            } if (g) { a(d.target).attr("tabIndex", -1); a(g).attr("tabIndex", 0); g.focus(); return false } return true
        } 
    }, resize: function () {
        var d = this.options, c; if (d.fillSpace) {
            if (a.browser.msie) { var e = this.element.parent().css("overflow"); this.element.parent().css("overflow", "hidden") } c = this.element.parent().height(); a.browser.msie && this.element.parent().css("overflow", e); this.headers.each(function () { c -= a(this).outerHeight(true) }); this.headers.next().each(function () {
                a(this).height(Math.max(0, c - a(this).innerHeight() +
a(this).height()))
            }).css("overflow", "auto")
        } else if (d.autoHeight) { c = 0; this.headers.next().each(function () { c = Math.max(c, a(this).height("").height()) }).height(c) } return this
    }, activate: function (d) { this.options.active = d; d = this._findActive(d)[0]; this._clickHandler({ target: d }, d); return this }, _findActive: function (d) { return d ? typeof d === "number" ? this.headers.filter(":eq(" + d + ")") : this.headers.not(this.headers.not(d)) : d === false ? a([]) : this.headers.filter(":eq(0)") }, _clickHandler: function (d, c) {
        var e = this.options;
        if (!e.disabled) if (d.target) {
            d = a(d.currentTarget || c); c = d[0] === this.active[0]; e.active = e.collapsible && c ? false : this.headers.index(d); if (!(this.running || !e.collapsible && c)) {
                var h = this.active; f = d.next(); i = this.active.next(); b = { options: e, newHeader: c && e.collapsible ? a([]) : d, oldHeader: this.active, newContent: c && e.collapsible ? a([]) : f, oldContent: i }; var g = this.headers.index(this.active[0]) > this.headers.index(d[0]); this.active = c ? a([]) : d; this._toggle(f, i, b, c, g); h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(e.icons.headerSelected).addClass(e.icons.header);
                if (!c) { d.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(e.icons.header).addClass(e.icons.headerSelected); d.next().addClass("ui-accordion-content-active") } 
            } 
        } else if (e.collapsible) {
            this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(e.icons.headerSelected).addClass(e.icons.header); this.active.next().addClass("ui-accordion-content-active"); var i = this.active.next(),
b = { options: e, newHeader: a([]), oldHeader: e.active, newContent: a([]), oldContent: i }, f = this.active = a([]); this._toggle(f, i, b)
        } 
    }, _toggle: function (d, c, e, h, g) {
        var i = this, b = i.options; i.toShow = d; i.toHide = c; i.data = e; var f = function () { if (i) return i._completed.apply(i, arguments) }; i._trigger("changestart", null, i.data); i.running = c.size() === 0 ? d.size() : c.size(); if (b.animated) {
            e = {}; e = b.collapsible && h ? { toShow: a([]), toHide: c, complete: f, down: g, autoHeight: b.autoHeight || b.fillSpace} : { toShow: d, toHide: c, complete: f, down: g, autoHeight: b.autoHeight ||
b.fillSpace
            }; if (!b.proxied) b.proxied = b.animated; if (!b.proxiedDuration) b.proxiedDuration = b.duration; b.animated = a.isFunction(b.proxied) ? b.proxied(e) : b.proxied; b.duration = a.isFunction(b.proxiedDuration) ? b.proxiedDuration(e) : b.proxiedDuration; h = a.ui.accordion.animations; var j = b.duration, l = b.animated; if (l && !h[l] && !a.easing[l]) l = "slide"; h[l] || (h[l] = function (o) { this.slide(o, { easing: l, duration: j || 700 }) }); h[l](e)
        } else { if (b.collapsible && h) d.toggle(); else { c.hide(); d.show() } f(true) } c.prev().attr({ "aria-expanded": "false",
            "aria-selected": "false", tabIndex: -1
        }).blur(); d.prev().attr({ "aria-expanded": "true", "aria-selected": "true", tabIndex: 0 }).focus()
    }, _completed: function (d) { this.running = d ? 0 : --this.running; if (!this.running) { this.options.clearStyle && this.toShow.add(this.toHide).css({ height: "", overflow: "" }); this.toHide.removeClass("ui-accordion-content-active"); if (this.toHide.length) this.toHide.parent()[0].className = this.toHide.parent()[0].className; this._trigger("change", null, this.data) } } 
    }); a.extend(a.ui.accordion, { version: "1.8.16",
        animations: { slide: function (d, c) {
            d = a.extend({ easing: "swing", duration: 300 }, d, c); if (d.toHide.size()) if (d.toShow.size()) {
                var e = d.toShow.css("overflow"), h = 0, g = {}, i = {}, b; c = d.toShow; b = c[0].style.width; c.width(parseInt(c.parent().width(), 10) - parseInt(c.css("paddingLeft"), 10) - parseInt(c.css("paddingRight"), 10) - (parseInt(c.css("borderLeftWidth"), 10) || 0) - (parseInt(c.css("borderRightWidth"), 10) || 0)); a.each(["height", "paddingTop", "paddingBottom"], function (f, j) {
                    i[j] = "hide"; f = ("" + a.css(d.toShow[0], j)).match(/^([\d+-.]+)(.*)$/);
                    g[j] = { value: f[1], unit: f[2] || "px"}
                }); d.toShow.css({ height: 0, overflow: "hidden" }).show(); d.toHide.filter(":hidden").each(d.complete).end().filter(":visible").animate(i, { step: function (f, j) { if (j.prop == "height") h = j.end - j.start === 0 ? 0 : (j.now - j.start) / (j.end - j.start); d.toShow[0].style[j.prop] = h * g[j.prop].value + g[j.prop].unit }, duration: d.duration, easing: d.easing, complete: function () { d.autoHeight || d.toShow.css("height", ""); d.toShow.css({ width: b, overflow: e }); d.complete() } })
            } else d.toHide.animate({ height: "hide",
                paddingTop: "hide", paddingBottom: "hide"
            }, d); else d.toShow.animate({ height: "show", paddingTop: "show", paddingBottom: "show" }, d)
        }, bounceslide: function (d) { this.slide(d, { easing: d.down ? "easeOutBounce" : "swing", duration: d.down ? 1E3 : 200 }) } 
        }
    })
})(jQuery);
(function (a) {
    var d = 0; a.widget("ui.autocomplete", { options: { appendTo: "body", autoFocus: false, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null }, pending: 0, _create: function () {
        var c = this, e = this.element[0].ownerDocument, h; this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({ role: "textbox", "aria-autocomplete": "list", "aria-haspopup": "true" }).bind("keydown.autocomplete", function (g) {
            if (!(c.options.disabled || c.element.propAttr("readOnly"))) {
                h =
false; var i = a.ui.keyCode; switch (g.keyCode) {
                    case i.PAGE_UP: c._move("previousPage", g); break; case i.PAGE_DOWN: c._move("nextPage", g); break; case i.UP: c._move("previous", g); g.preventDefault(); break; case i.DOWN: c._move("next", g); g.preventDefault(); break; case i.ENTER: case i.NUMPAD_ENTER: if (c.menu.active) { h = true; g.preventDefault() } case i.TAB: if (!c.menu.active) return; c.menu.select(g); break; case i.ESCAPE: c.element.val(c.term); c.close(g); break; default: clearTimeout(c.searching); c.searching = setTimeout(function () {
                        if (c.term !=
c.element.val()) { c.selectedItem = null; c.search(null, g) } 
                    }, c.options.delay); break
                } 
            } 
        }).bind("keypress.autocomplete", function (g) { if (h) { h = false; g.preventDefault() } }).bind("focus.autocomplete", function () { if (!c.options.disabled) { c.selectedItem = null; c.previous = c.element.val() } }).bind("blur.autocomplete", function (g) { if (!c.options.disabled) { clearTimeout(c.searching); c.closing = setTimeout(function () { c.close(g); c._change(g) }, 150) } }); this._initSource(); this.response = function () { return c._response.apply(c, arguments) };
        this.menu = a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo || "body", e)[0]).mousedown(function (g) { var i = c.menu.element[0]; a(g.target).closest(".ui-menu-item").length || setTimeout(function () { a(document).one("mousedown", function (b) { b.target !== c.element[0] && b.target !== i && !a.ui.contains(i, b.target) && c.close() }) }, 1); setTimeout(function () { clearTimeout(c.closing) }, 13) }).menu({ focus: function (g, i) {
            i = i.item.data("item.autocomplete"); false !== c._trigger("focus", g, { item: i }) && /^key/.test(g.originalEvent.type) &&
c.element.val(i.value)
        }, selected: function (g, i) { var b = i.item.data("item.autocomplete"), f = c.previous; if (c.element[0] !== e.activeElement) { c.element.focus(); c.previous = f; setTimeout(function () { c.previous = f; c.selectedItem = b }, 1) } false !== c._trigger("select", g, { item: b }) && c.element.val(b.value); c.term = c.element.val(); c.close(g); c.selectedItem = b }, blur: function () { c.menu.element.is(":visible") && c.element.val() !== c.term && c.element.val(c.term) } 
        }).zIndex(this.element.zIndex() + 1).css({ top: 0, left: 0 }).hide().data("menu");
        a.fn.bgiframe && this.menu.element.bgiframe()
    }, destroy: function () { this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"); this.menu.element.remove(); a.Widget.prototype.destroy.call(this) }, _setOption: function (c, e) {
        a.Widget.prototype._setOption.apply(this, arguments); c === "source" && this._initSource(); if (c === "appendTo") this.menu.element.appendTo(a(e || "body", this.element[0].ownerDocument)[0]); c === "disabled" &&
e && this.xhr && this.xhr.abort()
    }, _initSource: function () {
        var c = this, e, h; if (a.isArray(this.options.source)) { e = this.options.source; this.source = function (g, i) { i(a.ui.autocomplete.filter(e, g.term)) } } else if (typeof this.options.source === "string") { h = this.options.source; this.source = function (g, i) { c.xhr && c.xhr.abort(); c.xhr = a.ajax({ url: h, data: g, dataType: "json", autocompleteRequest: ++d, success: function (b) { this.autocompleteRequest === d && i(b) }, error: function () { this.autocompleteRequest === d && i([]) } }) } } else this.source =
this.options.source
    }, search: function (c, e) { c = c != null ? c : this.element.val(); this.term = this.element.val(); if (c.length < this.options.minLength) return this.close(e); clearTimeout(this.closing); if (this._trigger("search", e) !== false) return this._search(c) }, _search: function (c) { this.pending++; this.element.addClass("ui-autocomplete-loading"); this.source({ term: c }, this.response) }, _response: function (c) {
        if (!this.options.disabled && c && c.length) { c = this._normalize(c); this._suggest(c); this._trigger("open") } else this.close();
        this.pending--; this.pending || this.element.removeClass("ui-autocomplete-loading")
    }, close: function (c) { clearTimeout(this.closing); if (this.menu.element.is(":visible")) { this.menu.element.hide(); this.menu.deactivate(); this._trigger("close", c) } }, _change: function (c) { this.previous !== this.element.val() && this._trigger("change", c, { item: this.selectedItem }) }, _normalize: function (c) {
        if (c.length && c[0].label && c[0].value) return c; return a.map(c, function (e) {
            if (typeof e === "string") return { label: e, value: e }; return a.extend({ label: e.label ||
e.value, value: e.value || e.label
            }, e)
        })
    }, _suggest: function (c) { var e = this.menu.element.empty().zIndex(this.element.zIndex() + 1); this._renderMenu(e, c); this.menu.deactivate(); this.menu.refresh(); e.show(); this._resizeMenu(); e.position(a.extend({ of: this.element }, this.options.position)); this.options.autoFocus && this.menu.next(new a.Event("mouseover")) }, _resizeMenu: function () { var c = this.menu.element; c.outerWidth(Math.max(c.width("").outerWidth(), this.element.outerWidth())) }, _renderMenu: function (c, e) {
        var h = this;
        a.each(e, function (g, i) { h._renderItem(c, i) })
    }, _renderItem: function (c, e) { return a("<li></li>").data("item.autocomplete", e).append(a("<a></a>").text(e.label)).appendTo(c) }, _move: function (c, e) { if (this.menu.element.is(":visible")) if (this.menu.first() && /^previous/.test(c) || this.menu.last() && /^next/.test(c)) { this.element.val(this.term); this.menu.deactivate() } else this.menu[c](e); else this.search(null, e) }, widget: function () { return this.menu.element } 
    }); a.extend(a.ui.autocomplete, { escapeRegex: function (c) {
        return c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
"\\$&")
    }, filter: function (c, e) { var h = new RegExp(a.ui.autocomplete.escapeRegex(e), "i"); return a.grep(c, function (g) { return h.test(g.label || g.value || g) }) } 
    })
})(jQuery);
(function (a) {
    a.widget("ui.menu", { _create: function () { var d = this; this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({ role: "listbox", "aria-activedescendant": "ui-active-menuitem" }).click(function (c) { if (a(c.target).closest(".ui-menu-item a").length) { c.preventDefault(); d.select(c) } }); this.refresh() }, refresh: function () {
        var d = this; this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function (c) { d.activate(c, a(this).parent()) }).mouseleave(function () { d.deactivate() })
    }, activate: function (d, c) { this.deactivate(); if (this.hasScroll()) { var e = c.offset().top - this.element.offset().top, h = this.element.scrollTop(), g = this.element.height(); if (e < 0) this.element.scrollTop(h + e); else e >= g && this.element.scrollTop(h + e - g + c.height()) } this.active = c.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(); this._trigger("focus", d, { item: c }) }, deactivate: function () {
        if (this.active) {
            this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
            this._trigger("blur"); this.active = null
        } 
    }, next: function (d) { this.move("next", ".ui-menu-item:first", d) }, previous: function (d) { this.move("prev", ".ui-menu-item:last", d) }, first: function () { return this.active && !this.active.prevAll(".ui-menu-item").length }, last: function () { return this.active && !this.active.nextAll(".ui-menu-item").length }, move: function (d, c, e) {
        if (this.active) { d = this.active[d + "All"](".ui-menu-item").eq(0); d.length ? this.activate(e, d) : this.activate(e, this.element.children(c)) } else this.activate(e,
this.element.children(c))
    }, nextPage: function (d) {
        if (this.hasScroll()) if (!this.active || this.last()) this.activate(d, this.element.children(".ui-menu-item:first")); else { var c = this.active.offset().top, e = this.element.height(), h = this.element.children(".ui-menu-item").filter(function () { var g = a(this).offset().top - c - e + a(this).height(); return g < 10 && g > -10 }); h.length || (h = this.element.children(".ui-menu-item:last")); this.activate(d, h) } else this.activate(d, this.element.children(".ui-menu-item").filter(!this.active ||
this.last() ? ":first" : ":last"))
    }, previousPage: function (d) {
        if (this.hasScroll()) if (!this.active || this.first()) this.activate(d, this.element.children(".ui-menu-item:last")); else { var c = this.active.offset().top, e = this.element.height(); result = this.element.children(".ui-menu-item").filter(function () { var h = a(this).offset().top - c + e - a(this).height(); return h < 10 && h > -10 }); result.length || (result = this.element.children(".ui-menu-item:first")); this.activate(d, result) } else this.activate(d, this.element.children(".ui-menu-item").filter(!this.active ||
this.first() ? ":last" : ":first"))
    }, hasScroll: function () { return this.element.height() < this.element[a.fn.prop ? "prop" : "attr"]("scrollHeight") }, select: function (d) { this._trigger("selected", d, { item: this.active }) } 
    })
})(jQuery);
(function (a) {
    var d, c, e, h, g = function () { var b = a(this).find(":ui-button"); setTimeout(function () { b.button("refresh") }, 1) }, i = function (b) { var f = b.name, j = b.form, l = a([]); if (f) l = j ? a(j).find("[name='" + f + "']") : a("[name='" + f + "']", b.ownerDocument).filter(function () { return !this.form }); return l }; a.widget("ui.button", { options: { disabled: null, text: true, label: null, icons: { primary: null, secondary: null} }, _create: function () {
        this.element.closest("form").unbind("reset.button").bind("reset.button", g); if (typeof this.options.disabled !==
"boolean") this.options.disabled = this.element.propAttr("disabled"); this._determineButtonType(); this.hasTitle = !!this.buttonElement.attr("title"); var b = this, f = this.options, j = this.type === "checkbox" || this.type === "radio", l = "ui-state-hover" + (!j ? " ui-state-active" : ""); if (f.label === null) f.label = this.buttonElement.html(); if (this.element.is(":disabled")) f.disabled = true; this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter.button", function () {
    if (!f.disabled) {
        a(this).addClass("ui-state-hover");
        this === d && a(this).addClass("ui-state-active")
    } 
}).bind("mouseleave.button", function () { f.disabled || a(this).removeClass(l) }).bind("click.button", function (o) { if (f.disabled) { o.preventDefault(); o.stopImmediatePropagation() } }); this.element.bind("focus.button", function () { b.buttonElement.addClass("ui-state-focus") }).bind("blur.button", function () { b.buttonElement.removeClass("ui-state-focus") }); if (j) {
            this.element.bind("change.button", function () { h || b.refresh() }); this.buttonElement.bind("mousedown.button", function (o) {
                if (!f.disabled) {
                    h =
false; c = o.pageX; e = o.pageY
                } 
            }).bind("mouseup.button", function (o) { if (!f.disabled) if (c !== o.pageX || e !== o.pageY) h = true })
        } if (this.type === "checkbox") this.buttonElement.bind("click.button", function () { if (f.disabled || h) return false; a(this).toggleClass("ui-state-active"); b.buttonElement.attr("aria-pressed", b.element[0].checked) }); else if (this.type === "radio") this.buttonElement.bind("click.button", function () {
            if (f.disabled || h) return false; a(this).addClass("ui-state-active"); b.buttonElement.attr("aria-pressed", "true");
            var o = b.element[0]; i(o).not(o).map(function () { return a(this).button("widget")[0] }).removeClass("ui-state-active").attr("aria-pressed", "false")
        }); else {
            this.buttonElement.bind("mousedown.button", function () { if (f.disabled) return false; a(this).addClass("ui-state-active"); d = this; a(document).one("mouseup", function () { d = null }) }).bind("mouseup.button", function () { if (f.disabled) return false; a(this).removeClass("ui-state-active") }).bind("keydown.button", function (o) {
                if (f.disabled) return false; if (o.keyCode == a.ui.keyCode.SPACE ||
o.keyCode == a.ui.keyCode.ENTER) a(this).addClass("ui-state-active")
            }).bind("keyup.button", function () { a(this).removeClass("ui-state-active") }); this.buttonElement.is("a") && this.buttonElement.keyup(function (o) { o.keyCode === a.ui.keyCode.SPACE && a(this).click() })
        } this._setOption("disabled", f.disabled); this._resetButton()
    }, _determineButtonType: function () {
        this.type = this.element.is(":checkbox") ? "checkbox" : this.element.is(":radio") ? "radio" : this.element.is("input") ? "input" : "button"; if (this.type === "checkbox" || this.type ===
"radio") { var b = this.element.parents().filter(":last"), f = "label[for='" + this.element.attr("id") + "']"; this.buttonElement = b.find(f); if (!this.buttonElement.length) { b = b.length ? b.siblings() : this.element.siblings(); this.buttonElement = b.filter(f); if (!this.buttonElement.length) this.buttonElement = b.find(f) } this.element.addClass("ui-helper-hidden-accessible"); (b = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active"); this.buttonElement.attr("aria-pressed", b) } else this.buttonElement = this.element
    },
        widget: function () { return this.buttonElement }, destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"); this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()); this.hasTitle || this.buttonElement.removeAttr("title");
            a.Widget.prototype.destroy.call(this)
        }, _setOption: function (b, f) { a.Widget.prototype._setOption.apply(this, arguments); if (b === "disabled") f ? this.element.propAttr("disabled", true) : this.element.propAttr("disabled", false); else this._resetButton() }, refresh: function () {
            var b = this.element.is(":disabled"); b !== this.options.disabled && this._setOption("disabled", b); if (this.type === "radio") i(this.element[0]).each(function () {
                a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
"true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }); else if (this.type === "checkbox") this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")
        }, _resetButton: function () {
            if (this.type === "input") this.options.label && this.element.val(this.options.label); else {
                var b = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
f = a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(), j = this.options.icons, l = j.primary && j.secondary, o = []; if (j.primary || j.secondary) {
                    if (this.options.text) o.push("ui-button-text-icon" + (l ? "s" : j.primary ? "-primary" : "-secondary")); j.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + j.primary + "'></span>"); j.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + j.secondary + "'></span>"); if (!this.options.text) {
                        o.push(l ? "ui-button-icons-only" :
"ui-button-icon-only"); this.hasTitle || b.attr("title", f)
                    } 
                } else o.push("ui-button-text-only"); b.addClass(o.join(" "))
            } 
        } 
    }); a.widget("ui.buttonset", { options: { items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)" }, _create: function () { this.element.addClass("ui-buttonset") }, _init: function () { this.refresh() }, _setOption: function (b, f) { b === "disabled" && this.buttons.button("option", b, f); a.Widget.prototype._setOption.apply(this, arguments) }, refresh: function () {
        var b = this.element.css("direction") ===
"ltr"; this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () { return a(this).button("widget")[0] }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-left" : "ui-corner-right").end().filter(":last").addClass(b ? "ui-corner-right" : "ui-corner-left").end().end()
    }, destroy: function () {
        this.element.removeClass("ui-buttonset"); this.buttons.map(function () { return a(this).button("widget")[0] }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
        a.Widget.prototype.destroy.call(this)
    } 
    })
})(jQuery);
(function (a, d) {
    function c() {
        this.debug = false; this._curInst = null; this._keyEvent = false; this._disabledInputs = []; this._inDialog = this._datepickerShowing = false; this._mainDivId = "ui-datepicker-div"; this._inlineClass = "ui-datepicker-inline"; this._appendClass = "ui-datepicker-append"; this._triggerClass = "ui-datepicker-trigger"; this._dialogClass = "ui-datepicker-dialog"; this._disableClass = "ui-datepicker-disabled"; this._unselectableClass = "ui-datepicker-unselectable"; this._currentClass = "ui-datepicker-current-day"; this._dayOverClass =
"ui-datepicker-days-cell-over"; this.regional = []; this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su",
"Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: false, showMonthAfterYear: false, yearSuffix: ""
}; this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: false, hideIfNoPrevNext: false, navigationAsDateFormat: false, gotoCurrent: false, changeMonth: false, changeYear: false, yearRange: "c-10:c+10", showOtherMonths: false, selectOtherMonths: false, showWeek: false, calculateWeek: this.iso8601Week, shortYearCutoff: "+10",
    minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: true, showButtonPanel: false, autoSize: false, disabled: false
}; a.extend(this._defaults, this.regional[""]); this.dpDiv = e(a('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    } function e(b) {
        return b.bind("mouseout",
function (f) { f = a(f.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"); f.length && f.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover") }).bind("mouseover", function (f) {
    f = a(f.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"); if (!(a.datepicker._isDisabledDatepicker(i.inline ? b.parent()[0] : i.input[0]) || !f.length)) {
        f.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
        f.addClass("ui-state-hover"); f.hasClass("ui-datepicker-prev") && f.addClass("ui-datepicker-prev-hover"); f.hasClass("ui-datepicker-next") && f.addClass("ui-datepicker-next-hover")
    } 
})
    } function h(b, f) { a.extend(b, f); for (var j in f) if (f[j] == null || f[j] == d) b[j] = f[j]; return b } a.extend(a.ui, { datepicker: { version: "1.8.16"} }); var g = (new Date).getTime(), i; a.extend(c.prototype, { markerClassName: "hasDatepicker", maxRows: 4, log: function () { this.debug && console.log.apply("", arguments) }, _widgetDatepicker: function () { return this.dpDiv },
        setDefaults: function (b) { h(this._defaults, b || {}); return this }, _attachDatepicker: function (b, f) { var j = null; for (var l in this._defaults) { var o = b.getAttribute("date:" + l); if (o) { j = j || {}; try { j[l] = eval(o) } catch (n) { j[l] = o } } } l = b.nodeName.toLowerCase(); o = l == "div" || l == "span"; if (!b.id) { this.uuid += 1; b.id = "dp" + this.uuid } var k = this._newInst(a(b), o); k.settings = a.extend({}, f || {}, j || {}); if (l == "input") this._connectDatepicker(b, k); else o && this._inlineDatepicker(b, k) }, _newInst: function (b, f) {
            return { id: b[0].id.replace(/([^A-Za-z0-9_-])/g,
"\\\\$1"), input: b, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: f, dpDiv: !f ? this.dpDiv : e(a('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
            }
        }, _connectDatepicker: function (b, f) {
            var j = a(b); f.append = a([]); f.trigger = a([]); if (!j.hasClass(this.markerClassName)) {
                this._attachments(j, f); j.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",
function (l, o, n) { f.settings[o] = n }).bind("getData.datepicker", function (l, o) { return this._get(f, o) }); this._autoSize(f); a.data(b, "datepicker", f); f.settings.disabled && this._disableDatepicker(b)
            } 
        }, _attachments: function (b, f) {
            var j = this._get(f, "appendText"), l = this._get(f, "isRTL"); f.append && f.append.remove(); if (j) { f.append = a('<span class="' + this._appendClass + '">' + j + "</span>"); b[l ? "before" : "after"](f.append) } b.unbind("focus", this._showDatepicker); f.trigger && f.trigger.remove(); j = this._get(f, "showOn"); if (j ==
"focus" || j == "both") b.focus(this._showDatepicker); if (j == "button" || j == "both") {
                j = this._get(f, "buttonText"); var o = this._get(f, "buttonImage"); f.trigger = a(this._get(f, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({ src: o, alt: j, title: j }) : a('<button type="button"></button>').addClass(this._triggerClass).html(o == "" ? j : a("<img/>").attr({ src: o, alt: j, title: j }))); b[l ? "before" : "after"](f.trigger); f.trigger.click(function () {
                    a.datepicker._datepickerShowing && a.datepicker._lastInput == b[0] ? a.datepicker._hideDatepicker() :
a.datepicker._showDatepicker(b[0]); return false
                })
            } 
        }, _autoSize: function (b) { if (this._get(b, "autoSize") && !b.inline) { var f = new Date(2009, 11, 20), j = this._get(b, "dateFormat"); if (j.match(/[DM]/)) { var l = function (o) { for (var n = 0, k = 0, m = 0; m < o.length; m++) if (o[m].length > n) { n = o[m].length; k = m } return k }; f.setMonth(l(this._get(b, j.match(/MM/) ? "monthNames" : "monthNamesShort"))); f.setDate(l(this._get(b, j.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay()) } b.input.attr("size", this._formatDate(b, f).length) } }, _inlineDatepicker: function (b,
f) { var j = a(b); if (!j.hasClass(this.markerClassName)) { j.addClass(this.markerClassName).append(f.dpDiv).bind("setData.datepicker", function (l, o, n) { f.settings[o] = n }).bind("getData.datepicker", function (l, o) { return this._get(f, o) }); a.data(b, "datepicker", f); this._setDate(f, this._getDefaultDate(f), true); this._updateDatepicker(f); this._updateAlternate(f); f.settings.disabled && this._disableDatepicker(b); f.dpDiv.css("display", "block") } }, _dialogDatepicker: function (b, f, j, l, o) {
    b = this._dialogInst; if (!b) {
        this.uuid +=
1; this._dialogInput = a('<input type="text" id="' + ("dp" + this.uuid) + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'); this._dialogInput.keydown(this._doKeyDown); a("body").append(this._dialogInput); b = this._dialogInst = this._newInst(this._dialogInput, false); b.settings = {}; a.data(this._dialogInput[0], "datepicker", b)
    } h(b.settings, l || {}); f = f && f.constructor == Date ? this._formatDate(b, f) : f; this._dialogInput.val(f); this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null; if (!this._pos) this._pos = [document.documentElement.clientWidth /
2 - 100 + (document.documentElement.scrollLeft || document.body.scrollLeft), document.documentElement.clientHeight / 2 - 150 + (document.documentElement.scrollTop || document.body.scrollTop)]; this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"); b.settings.onSelect = j; this._inDialog = true; this.dpDiv.addClass(this._dialogClass); this._showDatepicker(this._dialogInput[0]); a.blockUI && a.blockUI(this.dpDiv); a.data(this._dialogInput[0], "datepicker", b); return this
}, _destroyDatepicker: function (b) {
    var f =
a(b), j = a.data(b, "datepicker"); if (f.hasClass(this.markerClassName)) { var l = b.nodeName.toLowerCase(); a.removeData(b, "datepicker"); if (l == "input") { j.append.remove(); j.trigger.remove(); f.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp) } else if (l == "div" || l == "span") f.removeClass(this.markerClassName).empty() } 
}, _enableDatepicker: function (b) {
    var f = a(b), j = a.data(b, "datepicker"); if (f.hasClass(this.markerClassName)) {
        var l =
b.nodeName.toLowerCase(); if (l == "input") { b.disabled = false; j.trigger.filter("button").each(function () { this.disabled = false }).end().filter("img").css({ opacity: "1.0", cursor: "" }) } else if (l == "div" || l == "span") { f = f.children("." + this._inlineClass); f.children().removeClass("ui-state-disabled"); f.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled") } this._disabledInputs = a.map(this._disabledInputs, function (o) { return o == b ? null : o })
    } 
}, _disableDatepicker: function (b) {
    var f = a(b), j = a.data(b,
"datepicker"); if (f.hasClass(this.markerClassName)) {
        var l = b.nodeName.toLowerCase(); if (l == "input") { b.disabled = true; j.trigger.filter("button").each(function () { this.disabled = true }).end().filter("img").css({ opacity: "0.5", cursor: "default" }) } else if (l == "div" || l == "span") { f = f.children("." + this._inlineClass); f.children().addClass("ui-state-disabled"); f.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled") } this._disabledInputs = a.map(this._disabledInputs, function (o) {
            return o ==
b ? null : o
        }); this._disabledInputs[this._disabledInputs.length] = b
    } 
}, _isDisabledDatepicker: function (b) { if (!b) return false; for (var f = 0; f < this._disabledInputs.length; f++) if (this._disabledInputs[f] == b) return true; return false }, _getInst: function (b) { try { return a.data(b, "datepicker") } catch (f) { throw "Missing instance data for this datepicker"; } }, _optionDatepicker: function (b, f, j) {
    var l = this._getInst(b); if (arguments.length == 2 && typeof f == "string") return f == "defaults" ? a.extend({}, a.datepicker._defaults) : l ? f == "all" ?
a.extend({}, l.settings) : this._get(l, f) : null; var o = f || {}; if (typeof f == "string") { o = {}; o[f] = j } if (l) {
        this._curInst == l && this._hideDatepicker(); var n = this._getDateDatepicker(b, true), k = this._getMinMaxDate(l, "min"), m = this._getMinMaxDate(l, "max"); h(l.settings, o); if (k !== null && o.dateFormat !== d && o.minDate === d) l.settings.minDate = this._formatDate(l, k); if (m !== null && o.dateFormat !== d && o.maxDate === d) l.settings.maxDate = this._formatDate(l, m); this._attachments(a(b), l); this._autoSize(l); this._setDate(l, n); this._updateAlternate(l);
        this._updateDatepicker(l)
    } 
}, _changeDatepicker: function (b, f, j) { this._optionDatepicker(b, f, j) }, _refreshDatepicker: function (b) { (b = this._getInst(b)) && this._updateDatepicker(b) }, _setDateDatepicker: function (b, f) { if (b = this._getInst(b)) { this._setDate(b, f); this._updateDatepicker(b); this._updateAlternate(b) } }, _getDateDatepicker: function (b, f) { (b = this._getInst(b)) && !b.inline && this._setDateFromField(b, f); return b ? this._getDate(b) : null }, _doKeyDown: function (b) {
    var f = a.datepicker._getInst(b.target), j = true, l = f.dpDiv.is(".ui-datepicker-rtl");
    f._keyEvent = true; if (a.datepicker._datepickerShowing) switch (b.keyCode) {
        case 9: a.datepicker._hideDatepicker(); j = false; break; case 13: j = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv); j[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, j[0]); if (b = a.datepicker._get(f, "onSelect")) { j = a.datepicker._formatDate(f); b.apply(f.input ? f.input[0] : null, [j, f]) } else a.datepicker._hideDatepicker(); return false; case 27: a.datepicker._hideDatepicker(); break; case 33: a.datepicker._adjustDate(b.target,
b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M"); break; case 34: a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M"); break; case 35: if (b.ctrlKey || b.metaKey) a.datepicker._clearDate(b.target); j = b.ctrlKey || b.metaKey; break; case 36: if (b.ctrlKey || b.metaKey) a.datepicker._gotoToday(b.target); j = b.ctrlKey || b.metaKey; break; case 37: if (b.ctrlKey || b.metaKey) a.datepicker._adjustDate(b.target, l ? +1 : -1, "D"); j =
b.ctrlKey || b.metaKey; if (b.originalEvent.altKey) a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M"); break; case 38: if (b.ctrlKey || b.metaKey) a.datepicker._adjustDate(b.target, -7, "D"); j = b.ctrlKey || b.metaKey; break; case 39: if (b.ctrlKey || b.metaKey) a.datepicker._adjustDate(b.target, l ? -1 : +1, "D"); j = b.ctrlKey || b.metaKey; if (b.originalEvent.altKey) a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f,
"stepMonths"), "M"); break; case 40: if (b.ctrlKey || b.metaKey) a.datepicker._adjustDate(b.target, +7, "D"); j = b.ctrlKey || b.metaKey; break; default: j = false
    } else if (b.keyCode == 36 && b.ctrlKey) a.datepicker._showDatepicker(this); else j = false; if (j) { b.preventDefault(); b.stopPropagation() } 
}, _doKeyPress: function (b) {
    var f = a.datepicker._getInst(b.target); if (a.datepicker._get(f, "constrainInput")) {
        f = a.datepicker._possibleChars(a.datepicker._get(f, "dateFormat")); var j = String.fromCharCode(b.charCode == d ? b.keyCode : b.charCode);
        return b.ctrlKey || b.metaKey || j < " " || !f || f.indexOf(j) > -1
    } 
}, _doKeyUp: function (b) { b = a.datepicker._getInst(b.target); if (b.input.val() != b.lastVal) try { if (a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), b.input ? b.input.val() : null, a.datepicker._getFormatConfig(b))) { a.datepicker._setDateFromField(b); a.datepicker._updateAlternate(b); a.datepicker._updateDatepicker(b) } } catch (f) { a.datepicker.log(f) } return true }, _showDatepicker: function (b) {
    b = b.target || b; if (b.nodeName.toLowerCase() != "input") b = a("input",
b.parentNode)[0]; if (!(a.datepicker._isDisabledDatepicker(b) || a.datepicker._lastInput == b)) {
        var f = a.datepicker._getInst(b); if (a.datepicker._curInst && a.datepicker._curInst != f) { a.datepicker._datepickerShowing && a.datepicker._triggerOnClose(a.datepicker._curInst); a.datepicker._curInst.dpDiv.stop(true, true) } var j = a.datepicker._get(f, "beforeShow"); j = j ? j.apply(b, [b, f]) : {}; if (j !== false) {
            h(f.settings, j); f.lastVal = null; a.datepicker._lastInput = b; a.datepicker._setDateFromField(f); if (a.datepicker._inDialog) b.value =
""; if (!a.datepicker._pos) { a.datepicker._pos = a.datepicker._findPos(b); a.datepicker._pos[1] += b.offsetHeight } var l = false; a(b).parents().each(function () { l |= a(this).css("position") == "fixed"; return !l }); if (l && a.browser.opera) { a.datepicker._pos[0] -= document.documentElement.scrollLeft; a.datepicker._pos[1] -= document.documentElement.scrollTop } j = { left: a.datepicker._pos[0], top: a.datepicker._pos[1] }; a.datepicker._pos = null; f.dpDiv.empty(); f.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }); a.datepicker._updateDatepicker(f);
            j = a.datepicker._checkOffset(f, j, l); f.dpDiv.css({ position: a.datepicker._inDialog && a.blockUI ? "static" : l ? "fixed" : "absolute", display: "none", left: j.left + "px", top: j.top + "px" }); if (!f.inline) {
                j = a.datepicker._get(f, "showAnim"); var o = a.datepicker._get(f, "duration"), n = function () { var k = f.dpDiv.find("iframe.ui-datepicker-cover"); if (k.length) { var m = a.datepicker._getBorders(f.dpDiv); k.css({ left: -m[0], top: -m[1], width: f.dpDiv.outerWidth(), height: f.dpDiv.outerHeight() }) } }; f.dpDiv.zIndex(a(b).zIndex() + 1); a.datepicker._datepickerShowing =
true; a.effects && a.effects[j] ? f.dpDiv.show(j, a.datepicker._get(f, "showOptions"), o, n) : f.dpDiv[j || "show"](j ? o : null, n); if (!j || !o) n(); f.input.is(":visible") && !f.input.is(":disabled") && f.input.focus(); a.datepicker._curInst = f
            } 
        } 
    } 
}, _updateDatepicker: function (b) {
    this.maxRows = 4; var f = a.datepicker._getBorders(b.dpDiv); i = b; b.dpDiv.empty().append(this._generateHTML(b)); var j = b.dpDiv.find("iframe.ui-datepicker-cover"); j.length && j.css({ left: -f[0], top: -f[1], width: b.dpDiv.outerWidth(), height: b.dpDiv.outerHeight() });
    b.dpDiv.find("." + this._dayOverClass + " a").mouseover(); f = this._getNumberOfMonths(b); j = f[1]; b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""); j > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + j).css("width", 17 * j + "em"); b.dpDiv[(f[0] != 1 || f[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"); b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"); b == a.datepicker._curInst && a.datepicker._datepickerShowing && b.input && b.input.is(":visible") &&
!b.input.is(":disabled") && b.input[0] != document.activeElement && b.input.focus(); if (b.yearshtml) { var l = b.yearshtml; setTimeout(function () { l === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml); l = b.yearshtml = null }, 0) } 
}, _getBorders: function (b) { var f = function (j) { return { thin: 1, medium: 2, thick: 3}[j] || j }; return [parseFloat(f(b.css("border-left-width"))), parseFloat(f(b.css("border-top-width")))] }, _checkOffset: function (b, f, j) {
    var l = b.dpDiv.outerWidth(), o = b.dpDiv.outerHeight(),
n = b.input ? b.input.outerWidth() : 0, k = b.input ? b.input.outerHeight() : 0, m = document.documentElement.clientWidth + a(document).scrollLeft(), p = document.documentElement.clientHeight + a(document).scrollTop(); f.left -= this._get(b, "isRTL") ? l - n : 0; f.left -= j && f.left == b.input.offset().left ? a(document).scrollLeft() : 0; f.top -= j && f.top == b.input.offset().top + k ? a(document).scrollTop() : 0; f.left -= Math.min(f.left, f.left + l > m && m > l ? Math.abs(f.left + l - m) : 0); f.top -= Math.min(f.top, f.top + o > p && p > o ? Math.abs(o + k) : 0); return f
}, _findPos: function (b) {
    for (var f =
this._get(this._getInst(b), "isRTL"); b && (b.type == "hidden" || b.nodeType != 1 || a.expr.filters.hidden(b)); ) b = b[f ? "previousSibling" : "nextSibling"]; b = a(b).offset(); return [b.left, b.top]
}, _triggerOnClose: function (b) { var f = this._get(b, "onClose"); if (f) f.apply(b.input ? b.input[0] : null, [b.input ? b.input.val() : "", b]) }, _hideDatepicker: function (b) {
    var f = this._curInst; if (!(!f || b && f != a.data(b, "datepicker"))) if (this._datepickerShowing) {
        b = this._get(f, "showAnim"); var j = this._get(f, "duration"), l = function () {
            a.datepicker._tidyDialog(f);
            this._curInst = null
        }; a.effects && a.effects[b] ? f.dpDiv.hide(b, a.datepicker._get(f, "showOptions"), j, l) : f.dpDiv[b == "slideDown" ? "slideUp" : b == "fadeIn" ? "fadeOut" : "hide"](b ? j : null, l); b || l(); a.datepicker._triggerOnClose(f); this._datepickerShowing = false; this._lastInput = null; if (this._inDialog) { this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }); if (a.blockUI) { a.unblockUI(); a("body").append(this.dpDiv) } } this._inDialog = false
    } 
}, _tidyDialog: function (b) { b.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar") },
        _checkExternalClick: function (b) { if (a.datepicker._curInst) { b = a(b.target); b[0].id != a.datepicker._mainDivId && b.parents("#" + a.datepicker._mainDivId).length == 0 && !b.hasClass(a.datepicker.markerClassName) && !b.hasClass(a.datepicker._triggerClass) && a.datepicker._datepickerShowing && !(a.datepicker._inDialog && a.blockUI) && a.datepicker._hideDatepicker() } }, _adjustDate: function (b, f, j) {
            b = a(b); var l = this._getInst(b[0]); if (!this._isDisabledDatepicker(b[0])) {
                this._adjustInstDate(l, f + (j == "M" ? this._get(l, "showCurrentAtPos") :
0), j); this._updateDatepicker(l)
            } 
        }, _gotoToday: function (b) { b = a(b); var f = this._getInst(b[0]); if (this._get(f, "gotoCurrent") && f.currentDay) { f.selectedDay = f.currentDay; f.drawMonth = f.selectedMonth = f.currentMonth; f.drawYear = f.selectedYear = f.currentYear } else { var j = new Date; f.selectedDay = j.getDate(); f.drawMonth = f.selectedMonth = j.getMonth(); f.drawYear = f.selectedYear = j.getFullYear() } this._notifyChange(f); this._adjustDate(b) }, _selectMonthYear: function (b, f, j) {
            b = a(b); var l = this._getInst(b[0]); l["selected" + (j == "M" ?
"Month" : "Year")] = l["draw" + (j == "M" ? "Month" : "Year")] = parseInt(f.options[f.selectedIndex].value, 10); this._notifyChange(l); this._adjustDate(b)
        }, _selectDay: function (b, f, j, l) { var o = a(b); if (!(a(l).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]))) { o = this._getInst(o[0]); o.selectedDay = o.currentDay = a("a", l).html(); o.selectedMonth = o.currentMonth = f; o.selectedYear = o.currentYear = j; this._selectDate(b, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)) } }, _clearDate: function (b) {
            b = a(b);
            this._getInst(b[0]); this._selectDate(b, "")
        }, _selectDate: function (b, f) { b = this._getInst(a(b)[0]); f = f != null ? f : this._formatDate(b); b.input && b.input.val(f); this._updateAlternate(b); var j = this._get(b, "onSelect"); if (j) j.apply(b.input ? b.input[0] : null, [f, b]); else b.input && b.input.trigger("change"); if (b.inline) this._updateDatepicker(b); else { this._hideDatepicker(); this._lastInput = b.input[0]; typeof b.input[0] != "object" && b.input.focus(); this._lastInput = null } }, _updateAlternate: function (b) {
            var f = this._get(b, "altField");
            if (f) { var j = this._get(b, "altFormat") || this._get(b, "dateFormat"), l = this._getDate(b), o = this.formatDate(j, l, this._getFormatConfig(b)); a(f).each(function () { a(this).val(o) }) } 
        }, noWeekends: function (b) { b = b.getDay(); return [b > 0 && b < 6, ""] }, iso8601Week: function (b) { b = new Date(b.getTime()); b.setDate(b.getDate() + 4 - (b.getDay() || 7)); var f = b.getTime(); b.setMonth(0); b.setDate(1); return Math.floor(Math.round((f - b) / 864E5) / 7) + 1 }, parseDate: function (b, f, j) {
            if (b == null || f == null) throw "Invalid arguments"; f = typeof f == "object" ?
f.toString() : f + ""; if (f == "") return null; var l = (j ? j.shortYearCutoff : null) || this._defaults.shortYearCutoff; l = typeof l != "string" ? l : (new Date).getFullYear() % 100 + parseInt(l, 10); for (var o = (j ? j.dayNamesShort : null) || this._defaults.dayNamesShort, n = (j ? j.dayNames : null) || this._defaults.dayNames, k = (j ? j.monthNamesShort : null) || this._defaults.monthNamesShort, m = (j ? j.monthNames : null) || this._defaults.monthNames, p = j = -1, q = -1, s = -1, r = false, u = function (z) { (z = H + 1 < b.length && b.charAt(H + 1) == z) && H++; return z }, v = function (z) {
    var I =
u(z); z = new RegExp("^\\d{1," + (z == "@" ? 14 : z == "!" ? 20 : z == "y" && I ? 4 : z == "o" ? 3 : 2) + "}"); z = f.substring(y).match(z); if (!z) throw "Missing number at position " + y; y += z[0].length; return parseInt(z[0], 10)
}, w = function (z, I, N) { z = a.map(u(z) ? N : I, function (D, E) { return [[E, D]] }).sort(function (D, E) { return -(D[1].length - E[1].length) }); var J = -1; a.each(z, function (D, E) { D = E[1]; if (f.substr(y, D.length).toLowerCase() == D.toLowerCase()) { J = E[0]; y += D.length; return false } }); if (J != -1) return J + 1; else throw "Unknown name at position " + y; }, x =
function () { if (f.charAt(y) != b.charAt(H)) throw "Unexpected literal at position " + y; y++ }, y = 0, H = 0; H < b.length; H++) if (r) if (b.charAt(H) == "'" && !u("'")) r = false; else x(); else switch (b.charAt(H)) {
                case "d": q = v("d"); break; case "D": w("D", o, n); break; case "o": s = v("o"); break; case "m": p = v("m"); break; case "M": p = w("M", k, m); break; case "y": j = v("y"); break; case "@": var C = new Date(v("@")); j = C.getFullYear(); p = C.getMonth() + 1; q = C.getDate(); break; case "!": C = new Date((v("!") - this._ticksTo1970) / 1E4); j = C.getFullYear(); p = C.getMonth() +
1; q = C.getDate(); break; case "'": if (u("'")) x(); else r = true; break; default: x()
            } if (y < f.length) throw "Extra/unparsed characters found in date: " + f.substring(y); if (j == -1) j = (new Date).getFullYear(); else if (j < 100) j += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (j <= l ? 0 : -100); if (s > -1) { p = 1; q = s; do { l = this._getDaysInMonth(j, p - 1); if (q <= l) break; p++; q -= l } while (1) } C = this._daylightSavingAdjust(new Date(j, p - 1, q)); if (C.getFullYear() != j || C.getMonth() + 1 != p || C.getDate() != q) throw "Invalid date"; return C
        }, ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1E7, formatDate: function (b, f, j) {
            if (!f) return ""; var l = (j ? j.dayNamesShort : null) || this._defaults.dayNamesShort, o = (j ? j.dayNames : null) || this._defaults.dayNames, n = (j ? j.monthNamesShort : null) || this._defaults.monthNamesShort; j = (j ? j.monthNames :
null) || this._defaults.monthNames; var k = function (u) { (u = r + 1 < b.length && b.charAt(r + 1) == u) && r++; return u }, m = function (u, v, w) { v = "" + v; if (k(u)) for (; v.length < w; ) v = "0" + v; return v }, p = function (u, v, w, x) { return k(u) ? x[v] : w[v] }, q = "", s = false; if (f) for (var r = 0; r < b.length; r++) if (s) if (b.charAt(r) == "'" && !k("'")) s = false; else q += b.charAt(r); else switch (b.charAt(r)) {
                case "d": q += m("d", f.getDate(), 2); break; case "D": q += p("D", f.getDay(), l, o); break; case "o": q += m("o", Math.round(((new Date(f.getFullYear(), f.getMonth(), f.getDate())).getTime() -
(new Date(f.getFullYear(), 0, 0)).getTime()) / 864E5), 3); break; case "m": q += m("m", f.getMonth() + 1, 2); break; case "M": q += p("M", f.getMonth(), n, j); break; case "y": q += k("y") ? f.getFullYear() : (f.getYear() % 100 < 10 ? "0" : "") + f.getYear() % 100; break; case "@": q += f.getTime(); break; case "!": q += f.getTime() * 1E4 + this._ticksTo1970; break; case "'": if (k("'")) q += "'"; else s = true; break; default: q += b.charAt(r)
            } return q
        }, _possibleChars: function (b) {
            for (var f = "", j = false, l = function (n) { (n = o + 1 < b.length && b.charAt(o + 1) == n) && o++; return n }, o =
0; o < b.length; o++) if (j) if (b.charAt(o) == "'" && !l("'")) j = false; else f += b.charAt(o); else switch (b.charAt(o)) { case "d": case "m": case "y": case "@": f += "0123456789"; break; case "D": case "M": return null; case "'": if (l("'")) f += "'"; else j = true; break; default: f += b.charAt(o) } return f
        }, _get: function (b, f) { return b.settings[f] !== d ? b.settings[f] : this._defaults[f] }, _setDateFromField: function (b, f) {
            if (b.input.val() != b.lastVal) {
                var j = this._get(b, "dateFormat"), l = b.lastVal = b.input ? b.input.val() : null, o, n; o = n = this._getDefaultDate(b);
                var k = this._getFormatConfig(b); try { o = this.parseDate(j, l, k) || n } catch (m) { this.log(m); l = f ? "" : l } b.selectedDay = o.getDate(); b.drawMonth = b.selectedMonth = o.getMonth(); b.drawYear = b.selectedYear = o.getFullYear(); b.currentDay = l ? o.getDate() : 0; b.currentMonth = l ? o.getMonth() : 0; b.currentYear = l ? o.getFullYear() : 0; this._adjustInstDate(b)
            } 
        }, _getDefaultDate: function (b) { return this._restrictMinMax(b, this._determineDate(b, this._get(b, "defaultDate"), new Date)) }, _determineDate: function (b, f, j) {
            var l = function (n) {
                var k = new Date;
                k.setDate(k.getDate() + n); return k
            }, o = function (n) {
                try { return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), n, a.datepicker._getFormatConfig(b)) } catch (k) { } var m = (n.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date, p = m.getFullYear(), q = m.getMonth(); m = m.getDate(); for (var s = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, r = s.exec(n); r; ) {
                    switch (r[2] || "d") {
                        case "d": case "D": m += parseInt(r[1], 10); break; case "w": case "W": m += parseInt(r[1], 10) * 7; break; case "m": case "M": q += parseInt(r[1], 10); m =
Math.min(m, a.datepicker._getDaysInMonth(p, q)); break; case "y": case "Y": p += parseInt(r[1], 10); m = Math.min(m, a.datepicker._getDaysInMonth(p, q)); break
                    } r = s.exec(n)
                } return new Date(p, q, m)
            }; if (f = (f = f == null || f === "" ? j : typeof f == "string" ? o(f) : typeof f == "number" ? isNaN(f) ? j : l(f) : new Date(f.getTime())) && f.toString() == "Invalid Date" ? j : f) { f.setHours(0); f.setMinutes(0); f.setSeconds(0); f.setMilliseconds(0) } return this._daylightSavingAdjust(f)
        }, _daylightSavingAdjust: function (b) {
            if (!b) return null; b.setHours(b.getHours() >
12 ? b.getHours() + 2 : 0); return b
        }, _setDate: function (b, f, j) { var l = !f, o = b.selectedMonth, n = b.selectedYear; f = this._restrictMinMax(b, this._determineDate(b, f, new Date)); b.selectedDay = b.currentDay = f.getDate(); b.drawMonth = b.selectedMonth = b.currentMonth = f.getMonth(); b.drawYear = b.selectedYear = b.currentYear = f.getFullYear(); if ((o != b.selectedMonth || n != b.selectedYear) && !j) this._notifyChange(b); this._adjustInstDate(b); if (b.input) b.input.val(l ? "" : this._formatDate(b)) }, _getDate: function (b) {
            return !b.currentYear || b.input &&
b.input.val() == "" ? null : this._daylightSavingAdjust(new Date(b.currentYear, b.currentMonth, b.currentDay))
        }, _generateHTML: function (b) {
            var f = new Date; f = this._daylightSavingAdjust(new Date(f.getFullYear(), f.getMonth(), f.getDate())); var j = this._get(b, "isRTL"), l = this._get(b, "showButtonPanel"), o = this._get(b, "hideIfNoPrevNext"), n = this._get(b, "navigationAsDateFormat"), k = this._getNumberOfMonths(b), m = this._get(b, "showCurrentAtPos"), p = this._get(b, "stepMonths"), q = k[0] != 1 || k[1] != 1, s = this._daylightSavingAdjust(!b.currentDay ?
new Date(9999, 9, 9) : new Date(b.currentYear, b.currentMonth, b.currentDay)), r = this._getMinMaxDate(b, "min"), u = this._getMinMaxDate(b, "max"); m = b.drawMonth - m; var v = b.drawYear; if (m < 0) { m += 12; v-- } if (u) { var w = this._daylightSavingAdjust(new Date(u.getFullYear(), u.getMonth() - k[0] * k[1] + 1, u.getDate())); for (w = r && w < r ? r : w; this._daylightSavingAdjust(new Date(v, m, 1)) > w; ) { m--; if (m < 0) { m = 11; v-- } } } b.drawMonth = m; b.drawYear = v; w = this._get(b, "prevText"); w = !n ? w : this.formatDate(w, this._daylightSavingAdjust(new Date(v, m - p, 1)), this._getFormatConfig(b));
            w = this._canAdjustMonth(b, -1, v, m) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + g + ".datepicker._adjustDate('#" + b.id + "', -" + p + ", 'M');\" title=\"" + w + '"><span class="ui-icon ui-icon-circle-triangle-' + (j ? "e" : "w") + '">' + w + "</span></a>" : o ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + w + '"><span class="ui-icon ui-icon-circle-triangle-' + (j ? "e" : "w") + '">' + w + "</span></a>"; var x = this._get(b, "nextText"); x = !n ? x : this.formatDate(x, this._daylightSavingAdjust(new Date(v,
m + p, 1)), this._getFormatConfig(b)); o = this._canAdjustMonth(b, +1, v, m) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + g + ".datepicker._adjustDate('#" + b.id + "', +" + p + ", 'M');\" title=\"" + x + '"><span class="ui-icon ui-icon-circle-triangle-' + (j ? "w" : "e") + '">' + x + "</span></a>" : o ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + x + '"><span class="ui-icon ui-icon-circle-triangle-' + (j ? "w" : "e") + '">' + x + "</span></a>"; p = this._get(b, "currentText"); x = this._get(b, "gotoCurrent") &&
b.currentDay ? s : f; p = !n ? p : this.formatDate(p, x, this._getFormatConfig(b)); n = !b.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + g + '.datepicker._hideDatepicker();">' + this._get(b, "closeText") + "</button>" : ""; l = l ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (j ? n : "") + (this._isInRange(b, x) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' +
g + ".datepicker._gotoToday('#" + b.id + "');\">" + p + "</button>" : "") + (j ? "" : n) + "</div>" : ""; n = parseInt(this._get(b, "firstDay"), 10); n = isNaN(n) ? 0 : n; p = this._get(b, "showWeek"); x = this._get(b, "dayNames"); this._get(b, "dayNamesShort"); var y = this._get(b, "dayNamesMin"), H = this._get(b, "monthNames"), C = this._get(b, "monthNamesShort"), z = this._get(b, "beforeShowDay"), I = this._get(b, "showOtherMonths"), N = this._get(b, "selectOtherMonths"); this._get(b, "calculateWeek"); for (var J = this._getDefaultDate(b), D = "", E = 0; E < k[0]; E++) {
                var P =
""; this.maxRows = 4; for (var L = 0; L < k[1]; L++) {
                    var Q = this._daylightSavingAdjust(new Date(v, m, b.selectedDay)), B = " ui-corner-all", F = ""; if (q) { F += '<div class="ui-datepicker-group'; if (k[1] > 1) switch (L) { case 0: F += " ui-datepicker-group-first"; B = " ui-corner-" + (j ? "right" : "left"); break; case k[1] - 1: F += " ui-datepicker-group-last"; B = " ui-corner-" + (j ? "left" : "right"); break; default: F += " ui-datepicker-group-middle"; B = ""; break } F += '">' } F += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + B + '">' + (/all|left/.test(B) &&
E == 0 ? j ? o : w : "") + (/all|right/.test(B) && E == 0 ? j ? w : o : "") + this._generateMonthYearHeader(b, m, v, r, u, E > 0 || L > 0, H, C) + '</div><table class="ui-datepicker-calendar"><thead><tr>'; var G = p ? '<th class="ui-datepicker-week-col">' + this._get(b, "weekHeader") + "</th>" : ""; for (B = 0; B < 7; B++) { var A = (B + n) % 7; G += "<th" + ((B + n + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + x[A] + '">' + y[A] + "</span></th>" } F += G + "</tr></thead><tbody>"; G = this._getDaysInMonth(v, m); if (v == b.selectedYear && m == b.selectedMonth) b.selectedDay = Math.min(b.selectedDay,
G); B = (this._getFirstDayOfMonth(v, m) - n + 7) % 7; G = Math.ceil((B + G) / 7); this.maxRows = G = q ? this.maxRows > G ? this.maxRows : G : G; A = this._daylightSavingAdjust(new Date(v, m, 1 - B)); for (var R = 0; R < G; R++) {
                        F += "<tr>"; var S = !p ? "" : '<td class="ui-datepicker-week-col">' + this._get(b, "calculateWeek")(A) + "</td>"; for (B = 0; B < 7; B++) {
                            var M = z ? z.apply(b.input ? b.input[0] : null, [A]) : [true, ""], K = A.getMonth() != m, O = K && !N || !M[0] || r && A < r || u && A > u; S += '<td class="' + ((B + n + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (K ? " ui-datepicker-other-month" : "") + (A.getTime() ==
Q.getTime() && m == b.selectedMonth && b._keyEvent || J.getTime() == A.getTime() && J.getTime() == Q.getTime() ? " " + this._dayOverClass : "") + (O ? " " + this._unselectableClass + " ui-state-disabled" : "") + (K && !I ? "" : " " + M[1] + (A.getTime() == s.getTime() ? " " + this._currentClass : "") + (A.getTime() == f.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!K || I) && M[2] ? ' title="' + M[2] + '"' : "") + (O ? "" : ' onclick="DP_jQuery_' + g + ".datepicker._selectDay('#" + b.id + "'," + A.getMonth() + "," + A.getFullYear() + ', this);return false;"') + ">" + (K && !I ? "&#xa0;" : O ? '<span class="ui-state-default">' +
A.getDate() + "</span>" : '<a class="ui-state-default' + (A.getTime() == f.getTime() ? " ui-state-highlight" : "") + (A.getTime() == s.getTime() ? " ui-state-active" : "") + (K ? " ui-priority-secondary" : "") + '" href="#">' + A.getDate() + "</a>") + "</td>"; A.setDate(A.getDate() + 1); A = this._daylightSavingAdjust(A)
                        } F += S + "</tr>"
                    } m++; if (m > 11) { m = 0; v++ } F += "</tbody></table>" + (q ? "</div>" + (k[0] > 0 && L == k[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""); P += F
                } D += P
            } D += l + (a.browser.msie && parseInt(a.browser.version, 10) < 7 && !b.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' :
""); b._keyEvent = false; return D
        }, _generateMonthYearHeader: function (b, f, j, l, o, n, k, m) {
            var p = this._get(b, "changeMonth"), q = this._get(b, "changeYear"), s = this._get(b, "showMonthAfterYear"), r = '<div class="ui-datepicker-title">', u = ""; if (n || !p) u += '<span class="ui-datepicker-month">' + k[f] + "</span>"; else {
                k = l && l.getFullYear() == j; var v = o && o.getFullYear() == j; u += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + g + ".datepicker._selectMonthYear('#" + b.id + "', this, 'M');\" >"; for (var w = 0; w < 12; w++) if ((!k || w >= l.getMonth()) &&
(!v || w <= o.getMonth())) u += '<option value="' + w + '"' + (w == f ? ' selected="selected"' : "") + ">" + m[w] + "</option>"; u += "</select>"
            } s || (r += u + (n || !(p && q) ? "&#xa0;" : "")); if (!b.yearshtml) {
                b.yearshtml = ""; if (n || !q) r += '<span class="ui-datepicker-year">' + j + "</span>"; else {
                    m = this._get(b, "yearRange").split(":"); var x = (new Date).getFullYear(); k = function (y) { y = y.match(/c[+-].*/) ? j + parseInt(y.substring(1), 10) : y.match(/[+-].*/) ? x + parseInt(y, 10) : parseInt(y, 10); return isNaN(y) ? x : y }; f = k(m[0]); m = Math.max(f, k(m[1] || "")); f = l ? Math.max(f,
l.getFullYear()) : f; m = o ? Math.min(m, o.getFullYear()) : m; for (b.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + g + ".datepicker._selectMonthYear('#" + b.id + "', this, 'Y');\" >"; f <= m; f++) b.yearshtml += '<option value="' + f + '"' + (f == j ? ' selected="selected"' : "") + ">" + f + "</option>"; b.yearshtml += "</select>"; r += b.yearshtml; b.yearshtml = null
                } 
            } r += this._get(b, "yearSuffix"); if (s) r += (n || !(p && q) ? "&#xa0;" : "") + u; r += "</div>"; return r
        }, _adjustInstDate: function (b, f, j) {
            var l = b.drawYear + (j == "Y" ? f : 0), o = b.drawMonth +
(j == "M" ? f : 0); f = Math.min(b.selectedDay, this._getDaysInMonth(l, o)) + (j == "D" ? f : 0); l = this._restrictMinMax(b, this._daylightSavingAdjust(new Date(l, o, f))); b.selectedDay = l.getDate(); b.drawMonth = b.selectedMonth = l.getMonth(); b.drawYear = b.selectedYear = l.getFullYear(); if (j == "M" || j == "Y") this._notifyChange(b)
        }, _restrictMinMax: function (b, f) { var j = this._getMinMaxDate(b, "min"); b = this._getMinMaxDate(b, "max"); f = j && f < j ? j : f; return f = b && f > b ? b : f }, _notifyChange: function (b) {
            var f = this._get(b, "onChangeMonthYear"); if (f) f.apply(b.input ?
b.input[0] : null, [b.selectedYear, b.selectedMonth + 1, b])
        }, _getNumberOfMonths: function (b) { b = this._get(b, "numberOfMonths"); return b == null ? [1, 1] : typeof b == "number" ? [1, b] : b }, _getMinMaxDate: function (b, f) { return this._determineDate(b, this._get(b, f + "Date"), null) }, _getDaysInMonth: function (b, f) { return 32 - this._daylightSavingAdjust(new Date(b, f, 32)).getDate() }, _getFirstDayOfMonth: function (b, f) { return (new Date(b, f, 1)).getDay() }, _canAdjustMonth: function (b, f, j, l) {
            var o = this._getNumberOfMonths(b); j = this._daylightSavingAdjust(new Date(j,
l + (f < 0 ? f : o[0] * o[1]), 1)); f < 0 && j.setDate(this._getDaysInMonth(j.getFullYear(), j.getMonth())); return this._isInRange(b, j)
        }, _isInRange: function (b, f) { var j = this._getMinMaxDate(b, "min"); b = this._getMinMaxDate(b, "max"); return (!j || f.getTime() >= j.getTime()) && (!b || f.getTime() <= b.getTime()) }, _getFormatConfig: function (b) {
            var f = this._get(b, "shortYearCutoff"); f = typeof f != "string" ? f : (new Date).getFullYear() % 100 + parseInt(f, 10); return { shortYearCutoff: f, dayNamesShort: this._get(b, "dayNamesShort"), dayNames: this._get(b,
"dayNames"), monthNamesShort: this._get(b, "monthNamesShort"), monthNames: this._get(b, "monthNames")
            }
        }, _formatDate: function (b, f, j, l) { if (!f) { b.currentDay = b.selectedDay; b.currentMonth = b.selectedMonth; b.currentYear = b.selectedYear } f = f ? typeof f == "object" ? f : this._daylightSavingAdjust(new Date(l, j, f)) : this._daylightSavingAdjust(new Date(b.currentYear, b.currentMonth, b.currentDay)); return this.formatDate(this._get(b, "dateFormat"), f, this._getFormatConfig(b)) } 
    }); a.fn.datepicker = function (b) {
        if (!this.length) return this;
        if (!a.datepicker.initialized) { a(document).mousedown(a.datepicker._checkExternalClick).find("body").append(a.datepicker.dpDiv); a.datepicker.initialized = true } var f = Array.prototype.slice.call(arguments, 1); if (typeof b == "string" && (b == "isDisabled" || b == "getDate" || b == "widget")) return a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(f)); if (b == "option" && arguments.length == 2 && typeof arguments[1] == "string") return a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(f)); return this.each(function () {
            typeof b ==
"string" ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(f)) : a.datepicker._attachDatepicker(this, b)
        })
    }; a.datepicker = new c; a.datepicker.initialized = false; a.datepicker.uuid = (new Date).getTime(); a.datepicker.version = "1.8.16"; window["DP_jQuery_" + g] = a
})(jQuery);
(function (a, d) {
    var c = { buttons: true, height: true, maxHeight: true, maxWidth: true, minHeight: true, minWidth: true, width: true }, e = { maxHeight: true, maxWidth: true, minHeight: true, minWidth: true }, h = a.attrFn || { val: true, css: true, html: true, text: true, data: true, width: true, height: true, offset: true, click: true }; a.widget("ui.dialog", { options: { autoOpen: true, buttons: {}, closeOnEscape: true, closeText: "close", dialogClass: "", draggable: true, hide: null, height: "auto", maxHeight: false, maxWidth: false, minHeight: 150, minWidth: 150, modal: false,
        position: { my: "center", at: "center", collision: "fit", using: function (g) { var i = a(this).css(g).offset().top; i < 0 && a(this).css("top", g.top - i) } }, resizable: true, show: null, stack: true, title: "", width: 300, zIndex: 1E3
    }, _create: function () {
        this.originalTitle = this.element.attr("title"); if (typeof this.originalTitle !== "string") this.originalTitle = ""; this.options.title = this.options.title || this.originalTitle; var g = this, i = g.options, b = i.title || "&#160;", f = a.ui.dialog.getTitleId(g.element), j = (g.uiDialog = a("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " +
i.dialogClass).css({ zIndex: i.zIndex }).attr("tabIndex", -1).css("outline", 0).keydown(function (n) { if (i.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === a.ui.keyCode.ESCAPE) { g.close(n); n.preventDefault() } }).attr({ role: "dialog", "aria-labelledby": f }).mousedown(function (n) { g.moveToTop(false, n) }); g.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(j); var l = (g.uiDialogTitlebar = a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(j),
o = a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function () { o.addClass("ui-state-hover") }, function () { o.removeClass("ui-state-hover") }).focus(function () { o.addClass("ui-state-focus") }).blur(function () { o.removeClass("ui-state-focus") }).click(function (n) { g.close(n); return false }).appendTo(l); (g.uiDialogTitlebarCloseText = a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(i.closeText).appendTo(o); a("<span></span>").addClass("ui-dialog-title").attr("id",
f).html(b).prependTo(l); if (a.isFunction(i.beforeclose) && !a.isFunction(i.beforeClose)) i.beforeClose = i.beforeclose; l.find("*").add(l).disableSelection(); i.draggable && a.fn.draggable && g._makeDraggable(); i.resizable && a.fn.resizable && g._makeResizable(); g._createButtons(i.buttons); g._isOpen = false; a.fn.bgiframe && j.bgiframe()
    }, _init: function () { this.options.autoOpen && this.open() }, destroy: function () {
        var g = this; g.overlay && g.overlay.destroy(); g.uiDialog.hide(); g.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
        g.uiDialog.remove(); g.originalTitle && g.element.attr("title", g.originalTitle); return g
    }, widget: function () { return this.uiDialog }, close: function (g) {
        var i = this, b, f; if (false !== i._trigger("beforeClose", g)) {
            i.overlay && i.overlay.destroy(); i.uiDialog.unbind("keypress.ui-dialog"); i._isOpen = false; if (i.options.hide) i.uiDialog.hide(i.options.hide, function () { i._trigger("close", g) }); else { i.uiDialog.hide(); i._trigger("close", g) } a.ui.dialog.overlay.resize(); if (i.options.modal) {
                b = 0; a(".ui-dialog").each(function () {
                    if (this !==
i.uiDialog[0]) { f = a(this).css("z-index"); isNaN(f) || (b = Math.max(b, f)) } 
                }); a.ui.dialog.maxZ = b
            } return i
        } 
    }, isOpen: function () { return this._isOpen }, moveToTop: function (g, i) {
        var b = this, f = b.options; if (f.modal && !g || !f.stack && !f.modal) return b._trigger("focus", i); if (f.zIndex > a.ui.dialog.maxZ) a.ui.dialog.maxZ = f.zIndex; if (b.overlay) { a.ui.dialog.maxZ += 1; b.overlay.$el.css("z-index", a.ui.dialog.overlay.maxZ = a.ui.dialog.maxZ) } g = { scrollTop: b.element.scrollTop(), scrollLeft: b.element.scrollLeft() }; a.ui.dialog.maxZ += 1;
        b.uiDialog.css("z-index", a.ui.dialog.maxZ); b.element.attr(g); b._trigger("focus", i); return b
    }, open: function () {
        if (!this._isOpen) {
            var g = this, i = g.options, b = g.uiDialog; g.overlay = i.modal ? new a.ui.dialog.overlay(g) : null; g._size(); g._position(i.position); b.show(i.show); g.moveToTop(true); i.modal && b.bind("keypress.ui-dialog", function (f) {
                if (f.keyCode === a.ui.keyCode.TAB) {
                    var j = a(":tabbable", this), l = j.filter(":first"); j = j.filter(":last"); if (f.target === j[0] && !f.shiftKey) { l.focus(1); return false } else if (f.target ===
l[0] && f.shiftKey) { j.focus(1); return false } 
                } 
            }); a(g.element.find(":tabbable").get().concat(b.find(".ui-dialog-buttonpane :tabbable").get().concat(b.get()))).eq(0).focus(); g._isOpen = true; g._trigger("open"); return g
        } 
    }, _createButtons: function (g) {
        var i = this, b = false, f = a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), j = a("<div></div>").addClass("ui-dialog-buttonset").appendTo(f); i.uiDialog.find(".ui-dialog-buttonpane").remove(); typeof g === "object" && g !== null && a.each(g,
function () { return !(b = true) }); if (b) { a.each(g, function (l, o) { o = a.isFunction(o) ? { click: o, text: l} : o; var n = a('<button type="button"></button>').click(function () { o.click.apply(i.element[0], arguments) }).appendTo(j); a.each(o, function (k, m) { if (k !== "click") k in h ? n[k](m) : n.attr(k, m) }); a.fn.button && n.button() }); f.appendTo(i.uiDialog) } 
    }, _makeDraggable: function () {
        function g(l) { return { position: l.position, offset: l.offset} } var i = this, b = i.options, f = a(document), j; i.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
            handle: ".ui-dialog-titlebar", containment: "document", start: function (l, o) { j = b.height === "auto" ? "auto" : a(this).height(); a(this).height(a(this).height()).addClass("ui-dialog-dragging"); i._trigger("dragStart", l, g(o)) }, drag: function (l, o) { i._trigger("drag", l, g(o)) }, stop: function (l, o) { b.position = [o.position.left - f.scrollLeft(), o.position.top - f.scrollTop()]; a(this).removeClass("ui-dialog-dragging").height(j); i._trigger("dragStop", l, g(o)); a.ui.dialog.overlay.resize() } 
        })
    }, _makeResizable: function (g) {
        function i(l) {
            return { originalPosition: l.originalPosition,
                originalSize: l.originalSize, position: l.position, size: l.size
            }
        } g = g === d ? this.options.resizable : g; var b = this, f = b.options, j = b.uiDialog.css("position"); g = typeof g === "string" ? g : "n,e,s,w,se,sw,ne,nw"; b.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: b.element, maxWidth: f.maxWidth, maxHeight: f.maxHeight, minWidth: f.minWidth, minHeight: b._minHeight(), handles: g, start: function (l, o) { a(this).addClass("ui-dialog-resizing"); b._trigger("resizeStart", l, i(o)) }, resize: function (l, o) {
            b._trigger("resize",
l, i(o))
        }, stop: function (l, o) { a(this).removeClass("ui-dialog-resizing"); f.height = a(this).height(); f.width = a(this).width(); b._trigger("resizeStop", l, i(o)); a.ui.dialog.overlay.resize() } 
        }).css("position", j).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
    }, _minHeight: function () { var g = this.options; return g.height === "auto" ? g.minHeight : Math.min(g.minHeight, g.height) }, _position: function (g) {
        var i = [], b = [0, 0], f; if (g) {
            if (typeof g === "string" || typeof g === "object" && "0" in g) {
                i = g.split ? g.split(" ") :
[g[0], g[1]]; if (i.length === 1) i[1] = i[0]; a.each(["left", "top"], function (j, l) { if (+i[j] === i[j]) { b[j] = i[j]; i[j] = l } }); g = { my: i.join(" "), at: i.join(" "), offset: b.join(" ")}
            } g = a.extend({}, a.ui.dialog.prototype.options.position, g)
        } else g = a.ui.dialog.prototype.options.position; (f = this.uiDialog.is(":visible")) || this.uiDialog.show(); this.uiDialog.css({ top: 0, left: 0 }).position(a.extend({ of: window }, g)); f || this.uiDialog.hide()
    }, _setOptions: function (g) {
        var i = this, b = {}, f = false; a.each(g, function (j, l) {
            i._setOption(j, l);
            if (j in c) f = true; if (j in e) b[j] = l
        }); f && this._size(); this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", b)
    }, _setOption: function (g, i) {
        var b = this, f = b.uiDialog; switch (g) {
            case "beforeclose": g = "beforeClose"; break; case "buttons": b._createButtons(i); break; case "closeText": b.uiDialogTitlebarCloseText.text("" + i); break; case "dialogClass": f.removeClass(b.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + i); break; case "disabled": i ? f.addClass("ui-dialog-disabled") :
f.removeClass("ui-dialog-disabled"); break; case "draggable": var j = f.is(":data(draggable)"); j && !i && f.draggable("destroy"); !j && i && b._makeDraggable(); break; case "position": b._position(i); break; case "resizable": (j = f.is(":data(resizable)")) && !i && f.resizable("destroy"); j && typeof i === "string" && f.resizable("option", "handles", i); !j && i !== false && b._makeResizable(i); break; case "title": a(".ui-dialog-title", b.uiDialogTitlebar).html("" + (i || "&#160;")); break
        } a.Widget.prototype._setOption.apply(b, arguments)
    }, _size: function () {
        var g =
this.options, i, b, f = this.uiDialog.is(":visible"); this.element.show().css({ width: "auto", minHeight: 0, height: 0 }); if (g.minWidth > g.width) g.width = g.minWidth; i = this.uiDialog.css({ height: "auto", width: g.width }).height(); b = Math.max(0, g.minHeight - i); if (g.height === "auto") if (a.support.minHeight) this.element.css({ minHeight: b, height: "auto" }); else { this.uiDialog.show(); g = this.element.css("height", "auto").height(); f || this.uiDialog.hide(); this.element.height(Math.max(g, b)) } else this.element.height(Math.max(g.height -
i, 0)); this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
    } 
    }); a.extend(a.ui.dialog, { version: "1.8.16", uuid: 0, maxZ: 0, getTitleId: function (g) { g = g.attr("id"); if (!g) { this.uuid += 1; g = this.uuid } return "ui-dialog-title-" + g }, overlay: function (g) { this.$el = a.ui.dialog.overlay.create(g) } }); a.extend(a.ui.dialog.overlay, { instances: [], oldInstances: [], maxZ: 0, events: a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (g) { return g + ".dialog-overlay" }).join(" "),
        create: function (g) {
            if (this.instances.length === 0) { setTimeout(function () { a.ui.dialog.overlay.instances.length && a(document).bind(a.ui.dialog.overlay.events, function (b) { if (a(b.target).zIndex() < a.ui.dialog.overlay.maxZ) return false }) }, 1); a(document).bind("keydown.dialog-overlay", function (b) { if (g.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE) { g.close(b); b.preventDefault() } }); a(window).bind("resize.dialog-overlay", a.ui.dialog.overlay.resize) } var i = (this.oldInstances.pop() ||
a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({ width: this.width(), height: this.height() }); a.fn.bgiframe && i.bgiframe(); this.instances.push(i); return i
        }, destroy: function (g) { var i = a.inArray(g, this.instances); i != -1 && this.oldInstances.push(this.instances.splice(i, 1)[0]); this.instances.length === 0 && a([document, window]).unbind(".dialog-overlay"); g.remove(); var b = 0; a.each(this.instances, function () { b = Math.max(b, this.css("z-index")) }); this.maxZ = b }, height: function () {
            var g, i; if (a.browser.msie &&
a.browser.version < 7) { g = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight); return g < i ? a(window).height() + "px" : g + "px" } else return a(document).height() + "px"
        }, width: function () {
            var g, i; if (a.browser.msie) { g = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth); i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth); return g < i ? a(window).width() + "px" : g + "px" } else return a(document).width() +
"px"
        }, resize: function () { var g = a([]); a.each(a.ui.dialog.overlay.instances, function () { g = g.add(this) }); g.css({ width: 0, height: 0 }).css({ width: a.ui.dialog.overlay.width(), height: a.ui.dialog.overlay.height() }) } 
    }); a.extend(a.ui.dialog.overlay.prototype, { destroy: function () { a.ui.dialog.overlay.destroy(this.$el) } })
})(jQuery);
(function (a) {
    a.ui = a.ui || {}; var d = /left|center|right/, c = /top|center|bottom/, e = a.fn.position, h = a.fn.offset; a.fn.position = function (g) {
        if (!g || !g.of) return e.apply(this, arguments); g = a.extend({}, g); var i = a(g.of), b = i[0], f = (g.collision || "flip").split(" "), j = g.offset ? g.offset.split(" ") : [0, 0], l, o, n; if (b.nodeType === 9) { l = i.width(); o = i.height(); n = { top: 0, left: 0} } else if (b.setTimeout) { l = i.width(); o = i.height(); n = { top: i.scrollTop(), left: i.scrollLeft()} } else if (b.preventDefault) {
            g.at = "left top"; l = o = 0; n = { top: g.of.pageY,
                left: g.of.pageX
            }
        } else { l = i.outerWidth(); o = i.outerHeight(); n = i.offset() } a.each(["my", "at"], function () { var k = (g[this] || "").split(" "); if (k.length === 1) k = d.test(k[0]) ? k.concat(["center"]) : c.test(k[0]) ? ["center"].concat(k) : ["center", "center"]; k[0] = d.test(k[0]) ? k[0] : "center"; k[1] = c.test(k[1]) ? k[1] : "center"; g[this] = k }); if (f.length === 1) f[1] = f[0]; j[0] = parseInt(j[0], 10) || 0; if (j.length === 1) j[1] = j[0]; j[1] = parseInt(j[1], 10) || 0; if (g.at[0] === "right") n.left += l; else if (g.at[0] === "center") n.left += l / 2; if (g.at[1] === "bottom") n.top +=
o; else if (g.at[1] === "center") n.top += o / 2; n.left += j[0]; n.top += j[1]; return this.each(function () {
    var k = a(this), m = k.outerWidth(), p = k.outerHeight(), q = parseInt(a.curCSS(this, "marginLeft", true)) || 0, s = parseInt(a.curCSS(this, "marginTop", true)) || 0, r = m + q + (parseInt(a.curCSS(this, "marginRight", true)) || 0), u = p + s + (parseInt(a.curCSS(this, "marginBottom", true)) || 0), v = a.extend({}, n), w; if (g.my[0] === "right") v.left -= m; else if (g.my[0] === "center") v.left -= m / 2; if (g.my[1] === "bottom") v.top -= p; else if (g.my[1] === "center") v.top -=
p / 2; v.left = Math.round(v.left); v.top = Math.round(v.top); w = { left: v.left - q, top: v.top - s }; a.each(["left", "top"], function (x, y) { a.ui.position[f[x]] && a.ui.position[f[x]][y](v, { targetWidth: l, targetHeight: o, elemWidth: m, elemHeight: p, collisionPosition: w, collisionWidth: r, collisionHeight: u, offset: j, my: g.my, at: g.at }) }); a.fn.bgiframe && k.bgiframe(); k.offset(a.extend(v, { using: g.using }))
})
    }; a.ui.position = { fit: { left: function (g, i) {
        var b = a(window); b = i.collisionPosition.left + i.collisionWidth - b.width() - b.scrollLeft(); g.left =
b > 0 ? g.left - b : Math.max(g.left - i.collisionPosition.left, g.left)
    }, top: function (g, i) { var b = a(window); b = i.collisionPosition.top + i.collisionHeight - b.height() - b.scrollTop(); g.top = b > 0 ? g.top - b : Math.max(g.top - i.collisionPosition.top, g.top) } 
    }, flip: { left: function (g, i) {
        if (i.at[0] !== "center") {
            var b = a(window); b = i.collisionPosition.left + i.collisionWidth - b.width() - b.scrollLeft(); var f = i.my[0] === "left" ? -i.elemWidth : i.my[0] === "right" ? i.elemWidth : 0, j = i.at[0] === "left" ? i.targetWidth : -i.targetWidth, l = -2 * i.offset[0]; g.left +=
i.collisionPosition.left < 0 ? f + j + l : b > 0 ? f + j + l : 0
        } 
    }, top: function (g, i) { if (i.at[1] !== "center") { var b = a(window); b = i.collisionPosition.top + i.collisionHeight - b.height() - b.scrollTop(); var f = i.my[1] === "top" ? -i.elemHeight : i.my[1] === "bottom" ? i.elemHeight : 0, j = i.at[1] === "top" ? i.targetHeight : -i.targetHeight, l = -2 * i.offset[1]; g.top += i.collisionPosition.top < 0 ? f + j + l : b > 0 ? f + j + l : 0 } } 
    }
    }; if (!a.offset.setOffset) {
        a.offset.setOffset = function (g, i) {
            if (/static/.test(a.curCSS(g, "position"))) g.style.position = "relative"; var b = a(g),
f = b.offset(), j = parseInt(a.curCSS(g, "top", true), 10) || 0, l = parseInt(a.curCSS(g, "left", true), 10) || 0; f = { top: i.top - f.top + j, left: i.left - f.left + l }; "using" in i ? i.using.call(g, f) : b.css(f)
        }; a.fn.offset = function (g) { var i = this[0]; if (!i || !i.ownerDocument) return null; if (g) return this.each(function () { a.offset.setOffset(this, g) }); return h.call(this) } 
    } 
})(jQuery);
(function (a, d) {
    a.widget("ui.progressbar", { options: { value: 0, max: 100 }, min: 0, _create: function () { this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({ role: "progressbar", "aria-valuemin": this.min, "aria-valuemax": this.options.max, "aria-valuenow": this._value() }); this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element); this.oldValue = this._value(); this._refreshValue() }, destroy: function () {
        this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
        this.valueDiv.remove(); a.Widget.prototype.destroy.apply(this, arguments)
    }, value: function (c) { if (c === d) return this._value(); this._setOption("value", c); return this }, _setOption: function (c, e) { if (c === "value") { this.options.value = e; this._refreshValue(); this._value() === this.options.max && this._trigger("complete") } a.Widget.prototype._setOption.apply(this, arguments) }, _value: function () { var c = this.options.value; if (typeof c !== "number") c = 0; return Math.min(this.options.max, Math.max(this.min, c)) }, _percentage: function () {
        return 100 *
this._value() / this.options.max
    }, _refreshValue: function () { var c = this.value(), e = this._percentage(); if (this.oldValue !== c) { this.oldValue = c; this._trigger("change") } this.valueDiv.toggle(c > this.min).toggleClass("ui-corner-right", c === this.options.max).width(e.toFixed(0) + "%"); this.element.attr("aria-valuenow", c) } 
    }); a.extend(a.ui.progressbar, { version: "1.8.16" })
})(jQuery);
(function (a) {
    a.widget("ui.slider", a.ui.mouse, { widgetEventPrefix: "slide", options: { animate: false, distance: 0, max: 100, min: 0, orientation: "horizontal", range: false, step: 1, value: 0, values: null }, _create: function () {
        var d = this, c = this.options, e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), h = c.values && c.values.length || 1, g = []; this._mouseSliding = this._keySliding = false; this._animateOff = true; this._handleIndex = null; this._detectOrientation(); this._mouseInit(); this.element.addClass("ui-slider ui-slider-" +
this.orientation + " ui-widget ui-widget-content ui-corner-all" + (c.disabled ? " ui-slider-disabled ui-disabled" : "")); this.range = a([]); if (c.range) { if (c.range === true) { if (!c.values) c.values = [this._valueMin(), this._valueMin()]; if (c.values.length && c.values.length !== 2) c.values = [c.values[0], c.values[0]] } this.range = a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (c.range === "min" || c.range === "max" ? " ui-slider-range-" + c.range : "")) } for (var i = e.length; i < h; i += 1) g.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
        this.handles = e.add(a(g.join("")).appendTo(d.element)); this.handle = this.handles.eq(0); this.handles.add(this.range).filter("a").click(function (b) { b.preventDefault() }).hover(function () { c.disabled || a(this).addClass("ui-state-hover") }, function () { a(this).removeClass("ui-state-hover") }).focus(function () { if (c.disabled) a(this).blur(); else { a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"); a(this).addClass("ui-state-focus") } }).blur(function () { a(this).removeClass("ui-state-focus") }); this.handles.each(function (b) {
            a(this).data("index.ui-slider-handle",
b)
        }); this.handles.keydown(function (b) {
            var f = true, j = a(this).data("index.ui-slider-handle"), l, o, n; if (!d.options.disabled) {
                switch (b.keyCode) { case a.ui.keyCode.HOME: case a.ui.keyCode.END: case a.ui.keyCode.PAGE_UP: case a.ui.keyCode.PAGE_DOWN: case a.ui.keyCode.UP: case a.ui.keyCode.RIGHT: case a.ui.keyCode.DOWN: case a.ui.keyCode.LEFT: f = false; if (!d._keySliding) { d._keySliding = true; a(this).addClass("ui-state-active"); l = d._start(b, j); if (l === false) return } break } n = d.options.step; l = d.options.values && d.options.values.length ?
(o = d.values(j)) : (o = d.value()); switch (b.keyCode) {
                    case a.ui.keyCode.HOME: o = d._valueMin(); break; case a.ui.keyCode.END: o = d._valueMax(); break; case a.ui.keyCode.PAGE_UP: o = d._trimAlignValue(l + (d._valueMax() - d._valueMin()) / 5); break; case a.ui.keyCode.PAGE_DOWN: o = d._trimAlignValue(l - (d._valueMax() - d._valueMin()) / 5); break; case a.ui.keyCode.UP: case a.ui.keyCode.RIGHT: if (l === d._valueMax()) return; o = d._trimAlignValue(l + n); break; case a.ui.keyCode.DOWN: case a.ui.keyCode.LEFT: if (l === d._valueMin()) return; o = d._trimAlignValue(l -
n); break
                } d._slide(b, j, o); return f
            } 
        }).keyup(function (b) { var f = a(this).data("index.ui-slider-handle"); if (d._keySliding) { d._keySliding = false; d._stop(b, f); d._change(b, f); a(this).removeClass("ui-state-active") } }); this._refreshValue(); this._animateOff = false
    }, destroy: function () {
        this.handles.remove(); this.range.remove(); this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"); this._mouseDestroy();
        return this
    }, _mouseCapture: function (d) {
        var c = this.options, e, h, g, i, b; if (c.disabled) return false; this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }; this.elementOffset = this.element.offset(); e = this._normValueFromMouse({ x: d.pageX, y: d.pageY }); h = this._valueMax() - this._valueMin() + 1; i = this; this.handles.each(function (f) { var j = Math.abs(e - i.values(f)); if (h > j) { h = j; g = a(this); b = f } }); if (c.range === true && this.values(1) === c.min) { b += 1; g = a(this.handles[b]) } if (this._start(d, b) === false) return false;
        this._mouseSliding = true; i._handleIndex = b; g.addClass("ui-state-active").focus(); c = g.offset(); this._clickOffset = !a(d.target).parents().andSelf().is(".ui-slider-handle") ? { left: 0, top: 0} : { left: d.pageX - c.left - g.width() / 2, top: d.pageY - c.top - g.height() / 2 - (parseInt(g.css("borderTopWidth"), 10) || 0) - (parseInt(g.css("borderBottomWidth"), 10) || 0) + (parseInt(g.css("marginTop"), 10) || 0) }; this.handles.hasClass("ui-state-hover") || this._slide(d, b, e); return this._animateOff = true
    }, _mouseStart: function () { return true }, _mouseDrag: function (d) {
        var c =
this._normValueFromMouse({ x: d.pageX, y: d.pageY }); this._slide(d, this._handleIndex, c); return false
    }, _mouseStop: function (d) { this.handles.removeClass("ui-state-active"); this._mouseSliding = false; this._stop(d, this._handleIndex); this._change(d, this._handleIndex); this._clickOffset = this._handleIndex = null; return this._animateOff = false }, _detectOrientation: function () { this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal" }, _normValueFromMouse: function (d) {
        var c; if (this.orientation === "horizontal") {
            c =
this.elementSize.width; d = d.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
        } else { c = this.elementSize.height; d = d.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0) } c = d / c; if (c > 1) c = 1; if (c < 0) c = 0; if (this.orientation === "vertical") c = 1 - c; d = this._valueMax() - this._valueMin(); return this._trimAlignValue(this._valueMin() + c * d)
    }, _start: function (d, c) {
        var e = { handle: this.handles[c], value: this.value() }; if (this.options.values && this.options.values.length) {
            e.value = this.values(c);
            e.values = this.values()
        } return this._trigger("start", d, e)
    }, _slide: function (d, c, e) {
        var h; if (this.options.values && this.options.values.length) { h = this.values(c ? 0 : 1); if (this.options.values.length === 2 && this.options.range === true && (c === 0 && e > h || c === 1 && e < h)) e = h; if (e !== this.values(c)) { h = this.values(); h[c] = e; d = this._trigger("slide", d, { handle: this.handles[c], value: e, values: h }); this.values(c ? 0 : 1); d !== false && this.values(c, e, true) } } else if (e !== this.value()) {
            d = this._trigger("slide", d, { handle: this.handles[c], value: e });
            d !== false && this.value(e)
        } 
    }, _stop: function (d, c) { var e = { handle: this.handles[c], value: this.value() }; if (this.options.values && this.options.values.length) { e.value = this.values(c); e.values = this.values() } this._trigger("stop", d, e) }, _change: function (d, c) { if (!this._keySliding && !this._mouseSliding) { var e = { handle: this.handles[c], value: this.value() }; if (this.options.values && this.options.values.length) { e.value = this.values(c); e.values = this.values() } this._trigger("change", d, e) } }, value: function (d) {
        if (arguments.length) {
            this.options.value =
this._trimAlignValue(d); this._refreshValue(); this._change(null, 0)
        } else return this._value()
    }, values: function (d, c) {
        var e, h, g; if (arguments.length > 1) { this.options.values[d] = this._trimAlignValue(c); this._refreshValue(); this._change(null, d) } else if (arguments.length) if (a.isArray(arguments[0])) { e = this.options.values; h = arguments[0]; for (g = 0; g < e.length; g += 1) { e[g] = this._trimAlignValue(h[g]); this._change(null, g) } this._refreshValue() } else return this.options.values && this.options.values.length ? this._values(d) :
this.value(); else return this._values()
    }, _setOption: function (d, c) {
        var e, h = 0; if (a.isArray(this.options.values)) h = this.options.values.length; a.Widget.prototype._setOption.apply(this, arguments); switch (d) {
            case "disabled": if (c) { this.handles.filter(".ui-state-focus").blur(); this.handles.removeClass("ui-state-hover"); this.handles.propAttr("disabled", true); this.element.addClass("ui-disabled") } else { this.handles.propAttr("disabled", false); this.element.removeClass("ui-disabled") } break; case "orientation": this._detectOrientation();
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation); this._refreshValue(); break; case "value": this._animateOff = true; this._refreshValue(); this._change(null, 0); this._animateOff = false; break; case "values": this._animateOff = true; this._refreshValue(); for (e = 0; e < h; e += 1) this._change(null, e); this._animateOff = false; break
        } 
    }, _value: function () { var d = this.options.value; return d = this._trimAlignValue(d) }, _values: function (d) {
        var c, e; if (arguments.length) {
            c = this.options.values[d];
            return c = this._trimAlignValue(c)
        } else { c = this.options.values.slice(); for (e = 0; e < c.length; e += 1) c[e] = this._trimAlignValue(c[e]); return c } 
    }, _trimAlignValue: function (d) { if (d <= this._valueMin()) return this._valueMin(); if (d >= this._valueMax()) return this._valueMax(); var c = this.options.step > 0 ? this.options.step : 1, e = (d - this._valueMin()) % c; d = d - e; if (Math.abs(e) * 2 >= c) d += e > 0 ? c : -c; return parseFloat(d.toFixed(5)) }, _valueMin: function () { return this.options.min }, _valueMax: function () { return this.options.max }, _refreshValue: function () {
        var d =
this.options.range, c = this.options, e = this, h = !this._animateOff ? c.animate : false, g, i = {}, b, f, j, l; if (this.options.values && this.options.values.length) this.handles.each(function (o) {
    g = (e.values(o) - e._valueMin()) / (e._valueMax() - e._valueMin()) * 100; i[e.orientation === "horizontal" ? "left" : "bottom"] = g + "%"; a(this).stop(1, 1)[h ? "animate" : "css"](i, c.animate); if (e.options.range === true) if (e.orientation === "horizontal") {
        if (o === 0) e.range.stop(1, 1)[h ? "animate" : "css"]({ left: g + "%" }, c.animate); if (o === 1) e.range[h ? "animate" : "css"]({ width: g -
b + "%"
        }, { queue: false, duration: c.animate })
    } else { if (o === 0) e.range.stop(1, 1)[h ? "animate" : "css"]({ bottom: g + "%" }, c.animate); if (o === 1) e.range[h ? "animate" : "css"]({ height: g - b + "%" }, { queue: false, duration: c.animate }) } b = g
}); else {
            f = this.value(); j = this._valueMin(); l = this._valueMax(); g = l !== j ? (f - j) / (l - j) * 100 : 0; i[e.orientation === "horizontal" ? "left" : "bottom"] = g + "%"; this.handle.stop(1, 1)[h ? "animate" : "css"](i, c.animate); if (d === "min" && this.orientation === "horizontal") this.range.stop(1, 1)[h ? "animate" : "css"]({ width: g + "%" },
c.animate); if (d === "max" && this.orientation === "horizontal") this.range[h ? "animate" : "css"]({ width: 100 - g + "%" }, { queue: false, duration: c.animate }); if (d === "min" && this.orientation === "vertical") this.range.stop(1, 1)[h ? "animate" : "css"]({ height: g + "%" }, c.animate); if (d === "max" && this.orientation === "vertical") this.range[h ? "animate" : "css"]({ height: 100 - g + "%" }, { queue: false, duration: c.animate })
        } 
    } 
    }); a.extend(a.ui.slider, { version: "1.8.16" })
})(jQuery);
(function (a, d) {
    function c() { return ++h } function e() { return ++g } var h = 0, g = 0; a.widget("ui.tabs", { options: { add: null, ajaxOptions: null, cache: false, cookie: null, collapsible: false, disable: null, disabled: [], enable: null, event: "click", fx: null, idPrefix: "ui-tabs-", load: null, panelTemplate: "<div></div>", remove: null, select: null, show: null, spinner: "<em>Loading&#8230;</em>", tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>" }, _create: function () { this._tabify(true) }, _setOption: function (i, b) {
        if (i == "selected") this.options.collapsible &&
b == this.options.selected || this.select(b); else { this.options[i] = b; this._tabify() } 
    }, _tabId: function (i) { return i.title && i.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + c() }, _sanitizeSelector: function (i) { return i.replace(/:/g, "\\:") }, _cookie: function () { var i = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + e()); return a.cookie.apply(null, [i].concat(a.makeArray(arguments))) }, _ui: function (i, b) { return { tab: i, panel: b, index: this.anchors.index(i)} }, _cleanup: function () {
        this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function () {
            var i =
a(this); i.html(i.data("label.tabs")).removeData("label.tabs")
        })
    }, _tabify: function (i) {
        function b(r, u) { r.css("display", ""); !a.support.opacity && u.opacity && r[0].style.removeAttribute("filter") } var f = this, j = this.options, l = /^#.+/; this.list = this.element.find("ol,ul").eq(0); this.lis = a(" > li:has(a[href])", this.list); this.anchors = this.lis.map(function () { return a("a", this)[0] }); this.panels = a([]); this.anchors.each(function (r, u) {
            var v = a(u).attr("href"), w = v.split("#")[0], x; if (w && (w === location.toString().split("#")[0] ||
(x = a("base")[0]) && w === x.href)) { v = u.hash; u.href = v } if (l.test(v)) f.panels = f.panels.add(f.element.find(f._sanitizeSelector(v))); else if (v && v !== "#") { a.data(u, "href.tabs", v); a.data(u, "load.tabs", v.replace(/#.*$/, "")); v = f._tabId(u); u.href = "#" + v; u = f.element.find("#" + v); if (!u.length) { u = a(j.panelTemplate).attr("id", v).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(f.panels[r - 1] || f.list); u.data("destroy.tabs", true) } f.panels = f.panels.add(u) } else j.disabled.push(r)
        }); if (i) {
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
            this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"); this.lis.addClass("ui-state-default ui-corner-top"); this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"); if (j.selected === d) {
                location.hash && this.anchors.each(function (r, u) { if (u.hash == location.hash) { j.selected = r; return false } }); if (typeof j.selected !== "number" && j.cookie) j.selected = parseInt(f._cookie(), 10); if (typeof j.selected !== "number" && this.lis.filter(".ui-tabs-selected").length) j.selected =
this.lis.index(this.lis.filter(".ui-tabs-selected")); j.selected = j.selected || (this.lis.length ? 0 : -1)
            } else if (j.selected === null) j.selected = -1; j.selected = j.selected >= 0 && this.anchors[j.selected] || j.selected < 0 ? j.selected : 0; j.disabled = a.unique(j.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"), function (r) { return f.lis.index(r) }))).sort(); a.inArray(j.selected, j.disabled) != -1 && j.disabled.splice(a.inArray(j.selected, j.disabled), 1); this.panels.addClass("ui-tabs-hide"); this.lis.removeClass("ui-tabs-selected ui-state-active");
            if (j.selected >= 0 && this.anchors.length) { f.element.find(f._sanitizeSelector(f.anchors[j.selected].hash)).removeClass("ui-tabs-hide"); this.lis.eq(j.selected).addClass("ui-tabs-selected ui-state-active"); f.element.queue("tabs", function () { f._trigger("show", null, f._ui(f.anchors[j.selected], f.element.find(f._sanitizeSelector(f.anchors[j.selected].hash))[0])) }); this.load(j.selected) } a(window).bind("unload", function () { f.lis.add(f.anchors).unbind(".tabs"); f.lis = f.anchors = f.panels = null })
        } else j.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
        this.element[j.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"); j.cookie && this._cookie(j.selected, j.cookie); i = 0; for (var o; o = this.lis[i]; i++) a(o)[a.inArray(i, j.disabled) != -1 && !a(o).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled"); j.cache === false && this.anchors.removeData("cache.tabs"); this.lis.add(this.anchors).unbind(".tabs"); if (j.event !== "mouseover") {
            var n = function (r, u) { u.is(":not(.ui-state-disabled)") && u.addClass("ui-state-" + r) }, k = function (r, u) {
                u.removeClass("ui-state-" +
r)
            }; this.lis.bind("mouseover.tabs", function () { n("hover", a(this)) }); this.lis.bind("mouseout.tabs", function () { k("hover", a(this)) }); this.anchors.bind("focus.tabs", function () { n("focus", a(this).closest("li")) }); this.anchors.bind("blur.tabs", function () { k("focus", a(this).closest("li")) })
        } var m, p; if (j.fx) if (a.isArray(j.fx)) { m = j.fx[0]; p = j.fx[1] } else m = p = j.fx; var q = p ? function (r, u) {
            a(r).closest("li").addClass("ui-tabs-selected ui-state-active"); u.hide().removeClass("ui-tabs-hide").animate(p, p.duration || "normal",
function () { b(u, p); f._trigger("show", null, f._ui(r, u[0])) })
        } : function (r, u) { a(r).closest("li").addClass("ui-tabs-selected ui-state-active"); u.removeClass("ui-tabs-hide"); f._trigger("show", null, f._ui(r, u[0])) }, s = m ? function (r, u) { u.animate(m, m.duration || "normal", function () { f.lis.removeClass("ui-tabs-selected ui-state-active"); u.addClass("ui-tabs-hide"); b(u, m); f.element.dequeue("tabs") }) } : function (r, u) { f.lis.removeClass("ui-tabs-selected ui-state-active"); u.addClass("ui-tabs-hide"); f.element.dequeue("tabs") };
        this.anchors.bind(j.event + ".tabs", function () {
            var r = this, u = a(r).closest("li"), v = f.panels.filter(":not(.ui-tabs-hide)"), w = f.element.find(f._sanitizeSelector(r.hash)); if (u.hasClass("ui-tabs-selected") && !j.collapsible || u.hasClass("ui-state-disabled") || u.hasClass("ui-state-processing") || f.panels.filter(":animated").length || f._trigger("select", null, f._ui(this, w[0])) === false) { this.blur(); return false } j.selected = f.anchors.index(this); f.abort(); if (j.collapsible) if (u.hasClass("ui-tabs-selected")) {
                j.selected =
-1; j.cookie && f._cookie(j.selected, j.cookie); f.element.queue("tabs", function () { s(r, v) }).dequeue("tabs"); this.blur(); return false
            } else if (!v.length) { j.cookie && f._cookie(j.selected, j.cookie); f.element.queue("tabs", function () { q(r, w) }); f.load(f.anchors.index(this)); this.blur(); return false } j.cookie && f._cookie(j.selected, j.cookie); if (w.length) { v.length && f.element.queue("tabs", function () { s(r, v) }); f.element.queue("tabs", function () { q(r, w) }); f.load(f.anchors.index(this)) } else throw "jQuery UI Tabs: Mismatching fragment identifier.";
            a.browser.msie && this.blur()
        }); this.anchors.bind("click.tabs", function () { return false })
    }, _getIndex: function (i) { if (typeof i == "string") i = this.anchors.index(this.anchors.filter("[href$=" + i + "]")); return i }, destroy: function () {
        var i = this.options; this.abort(); this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"); this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"); this.anchors.each(function () {
            var b =
a.data(this, "href.tabs"); if (b) this.href = b; var f = a(this).unbind(".tabs"); a.each(["href", "load", "cache"], function (j, l) { f.removeData(l + ".tabs") })
        }); this.lis.unbind(".tabs").add(this.panels).each(function () { a.data(this, "destroy.tabs") ? a(this).remove() : a(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide") }); i.cookie && this._cookie(null, i.cookie); return this
    }, add: function (i,
b, f) {
        if (f === d) f = this.anchors.length; var j = this, l = this.options; b = a(l.tabTemplate.replace(/#\{href\}/g, i).replace(/#\{label\}/g, b)); i = !i.indexOf("#") ? i.replace("#", "") : this._tabId(a("a", b)[0]); b.addClass("ui-state-default ui-corner-top").data("destroy.tabs", true); var o = j.element.find("#" + i); o.length || (o = a(l.panelTemplate).attr("id", i).data("destroy.tabs", true)); o.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"); if (f >= this.lis.length) { b.appendTo(this.list); o.appendTo(this.list[0].parentNode) } else {
            b.insertBefore(this.lis[f]);
            o.insertBefore(this.panels[f])
        } l.disabled = a.map(l.disabled, function (n) { return n >= f ? ++n : n }); this._tabify(); if (this.anchors.length == 1) { l.selected = 0; b.addClass("ui-tabs-selected ui-state-active"); o.removeClass("ui-tabs-hide"); this.element.queue("tabs", function () { j._trigger("show", null, j._ui(j.anchors[0], j.panels[0])) }); this.load(0) } this._trigger("add", null, this._ui(this.anchors[f], this.panels[f])); return this
    }, remove: function (i) {
        i = this._getIndex(i); var b = this.options, f = this.lis.eq(i).remove(), j = this.panels.eq(i).remove();
        if (f.hasClass("ui-tabs-selected") && this.anchors.length > 1) this.select(i + (i + 1 < this.anchors.length ? 1 : -1)); b.disabled = a.map(a.grep(b.disabled, function (l) { return l != i }), function (l) { return l >= i ? --l : l }); this._tabify(); this._trigger("remove", null, this._ui(f.find("a")[0], j[0])); return this
    }, enable: function (i) {
        i = this._getIndex(i); var b = this.options; if (a.inArray(i, b.disabled) != -1) {
            this.lis.eq(i).removeClass("ui-state-disabled"); b.disabled = a.grep(b.disabled, function (f) { return f != i }); this._trigger("enable", null,
this._ui(this.anchors[i], this.panels[i])); return this
        } 
    }, disable: function (i) { i = this._getIndex(i); var b = this.options; if (i != b.selected) { this.lis.eq(i).addClass("ui-state-disabled"); b.disabled.push(i); b.disabled.sort(); this._trigger("disable", null, this._ui(this.anchors[i], this.panels[i])) } return this }, select: function (i) { i = this._getIndex(i); if (i == -1) if (this.options.collapsible && this.options.selected != -1) i = this.options.selected; else return this; this.anchors.eq(i).trigger(this.options.event + ".tabs"); return this },
        load: function (i) {
            i = this._getIndex(i); var b = this, f = this.options, j = this.anchors.eq(i)[0], l = a.data(j, "load.tabs"); this.abort(); if (!l || this.element.queue("tabs").length !== 0 && a.data(j, "cache.tabs")) this.element.dequeue("tabs"); else {
                this.lis.eq(i).addClass("ui-state-processing"); if (f.spinner) { var o = a("span", j); o.data("label.tabs", o.html()).html(f.spinner) } this.xhr = a.ajax(a.extend({}, f.ajaxOptions, { url: l, success: function (n, k) {
                    b.element.find(b._sanitizeSelector(j.hash)).html(n); b._cleanup(); f.cache && a.data(j,
"cache.tabs", true); b._trigger("load", null, b._ui(b.anchors[i], b.panels[i])); try { f.ajaxOptions.success(n, k) } catch (m) { } 
                }, error: function (n, k) { b._cleanup(); b._trigger("load", null, b._ui(b.anchors[i], b.panels[i])); try { f.ajaxOptions.error(n, k, i, j) } catch (m) { } } 
                })); b.element.dequeue("tabs"); return this
            } 
        }, abort: function () { this.element.queue([]); this.panels.stop(false, true); this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)); if (this.xhr) { this.xhr.abort(); delete this.xhr } this._cleanup(); return this },
        url: function (i, b) { this.anchors.eq(i).removeData("cache.tabs").data("load.tabs", b); return this }, length: function () { return this.anchors.length } 
    }); a.extend(a.ui.tabs, { version: "1.8.16" }); a.extend(a.ui.tabs.prototype, { rotation: null, rotate: function (i, b) {
        var f = this, j = this.options, l = f._rotate || (f._rotate = function (o) { clearTimeout(f.rotation); f.rotation = setTimeout(function () { var n = j.selected; f.select(++n < f.anchors.length ? n : 0) }, i); o && o.stopPropagation() }); b = f._unrotate || (f._unrotate = !b ? function (o) {
            o.clientX &&
f.rotate(null)
        } : function () { t = j.selected; l() }); if (i) { this.element.bind("tabsshow", l); this.anchors.bind(j.event + ".tabs", b); l() } else { clearTimeout(f.rotation); this.element.unbind("tabsshow", l); this.anchors.unbind(j.event + ".tabs", b); delete this._rotate; delete this._unrotate } return this
    } 
    })
})(jQuery);