/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $b93df77f8477abe3$var$t = globalThis, $b93df77f8477abe3$export$b4d10f6001c083c2 = $b93df77f8477abe3$var$t.ShadowRoot && (void 0 === $b93df77f8477abe3$var$t.ShadyCSS || $b93df77f8477abe3$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $b93df77f8477abe3$var$s = Symbol(), $b93df77f8477abe3$var$o = new WeakMap;
class $b93df77f8477abe3$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $b93df77f8477abe3$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($b93df77f8477abe3$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $b93df77f8477abe3$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $b93df77f8477abe3$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $b93df77f8477abe3$export$8d80f9cac07cdb3 = (t)=>new $b93df77f8477abe3$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $b93df77f8477abe3$var$s), $b93df77f8477abe3$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $b93df77f8477abe3$export$505d1e8739bad805(o, t, $b93df77f8477abe3$var$s);
}, $b93df77f8477abe3$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($b93df77f8477abe3$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $b93df77f8477abe3$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $b93df77f8477abe3$export$ee69dfd951e24778 = $b93df77f8477abe3$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $b93df77f8477abe3$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $1c41b9c0e9f0cf26$var$i, defineProperty: $1c41b9c0e9f0cf26$var$e, getOwnPropertyDescriptor: $1c41b9c0e9f0cf26$var$h, getOwnPropertyNames: $1c41b9c0e9f0cf26$var$r, getOwnPropertySymbols: $1c41b9c0e9f0cf26$var$o, getPrototypeOf: $1c41b9c0e9f0cf26$var$n } = Object, $1c41b9c0e9f0cf26$var$a = globalThis, $1c41b9c0e9f0cf26$var$c = $1c41b9c0e9f0cf26$var$a.trustedTypes, $1c41b9c0e9f0cf26$var$l = $1c41b9c0e9f0cf26$var$c ? $1c41b9c0e9f0cf26$var$c.emptyScript : "", $1c41b9c0e9f0cf26$var$p = $1c41b9c0e9f0cf26$var$a.reactiveElementPolyfillSupport, $1c41b9c0e9f0cf26$var$d = (t, s)=>t, $1c41b9c0e9f0cf26$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $1c41b9c0e9f0cf26$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $1c41b9c0e9f0cf26$export$53a6892c50694894 = (t, s)=>!$1c41b9c0e9f0cf26$var$i(t, s), $1c41b9c0e9f0cf26$var$b = {
    attribute: !0,
    type: String,
    converter: $1c41b9c0e9f0cf26$export$7312b35fbf521afb,
    reflect: !1,
    useDefault: !1,
    hasChanged: $1c41b9c0e9f0cf26$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $1c41b9c0e9f0cf26$var$a.litPropertyMetadata ??= new WeakMap;
class $1c41b9c0e9f0cf26$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $1c41b9c0e9f0cf26$var$b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && $1c41b9c0e9f0cf26$var$e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: r } = $1c41b9c0e9f0cf26$var$h(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get: e,
            set (s) {
                const h = e?.call(this);
                r?.call(this, s), this.requestUpdate(t, h, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $1c41b9c0e9f0cf26$var$b;
    }
    static _$Ei() {
        if (this.hasOwnProperty($1c41b9c0e9f0cf26$var$d("elementProperties"))) return;
        const t = $1c41b9c0e9f0cf26$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($1c41b9c0e9f0cf26$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($1c41b9c0e9f0cf26$var$d("properties"))) {
            const t = this.properties, s = [
                ...$1c41b9c0e9f0cf26$var$r(t),
                ...$1c41b9c0e9f0cf26$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $b93df77f8477abe3$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $b93df77f8477abe3$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $b93df77f8477abe3$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const h = (void 0 !== i.converter?.toAttribute ? i.converter : $1c41b9c0e9f0cf26$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $1c41b9c0e9f0cf26$export$7312b35fbf521afb;
            this._$Em = e;
            const r = h.fromAttribute(s, t.type);
            this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            const e = this.constructor, h = this[t];
            if (i ??= e.getPropertyOptions(t), !((i.hasChanged ?? $1c41b9c0e9f0cf26$export$53a6892c50694894)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(e._$Eu(t, i)))) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
        i && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= new Set).add(t));
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t){
                const { wrapped: t } = i, e = this[s];
                !0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
            }
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EM();
        } catch (s) {
            throw t = !1, this._$EM(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EM() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Eq &&= this._$Eq.forEach((t)=>this._$ET(t, this[t])), this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$1c41b9c0e9f0cf26$export$c7c07a37856565d.elementStyles = [], $1c41b9c0e9f0cf26$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $1c41b9c0e9f0cf26$export$c7c07a37856565d[$1c41b9c0e9f0cf26$var$d("elementProperties")] = new Map, $1c41b9c0e9f0cf26$export$c7c07a37856565d[$1c41b9c0e9f0cf26$var$d("finalized")] = new Map, $1c41b9c0e9f0cf26$var$p?.({
    ReactiveElement: $1c41b9c0e9f0cf26$export$c7c07a37856565d
}), ($1c41b9c0e9f0cf26$var$a.reactiveElementVersions ??= []).push("2.1.1");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $7288fff0ed94f364$var$t = globalThis, $7288fff0ed94f364$var$i = $7288fff0ed94f364$var$t.trustedTypes, $7288fff0ed94f364$var$s = $7288fff0ed94f364$var$i ? $7288fff0ed94f364$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $7288fff0ed94f364$var$e = "$lit$", $7288fff0ed94f364$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $7288fff0ed94f364$var$o = "?" + $7288fff0ed94f364$var$h, $7288fff0ed94f364$var$n = `<${$7288fff0ed94f364$var$o}>`, $7288fff0ed94f364$var$r = document, $7288fff0ed94f364$var$l = ()=>$7288fff0ed94f364$var$r.createComment(""), $7288fff0ed94f364$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $7288fff0ed94f364$var$a = Array.isArray, $7288fff0ed94f364$var$u = (t)=>$7288fff0ed94f364$var$a(t) || "function" == typeof t?.[Symbol.iterator], $7288fff0ed94f364$var$d = "[ \t\n\f\r]", $7288fff0ed94f364$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $7288fff0ed94f364$var$v = /-->/g, $7288fff0ed94f364$var$_ = />/g, $7288fff0ed94f364$var$m = RegExp(`>|${$7288fff0ed94f364$var$d}(?:([^\\s"'>=/]+)(${$7288fff0ed94f364$var$d}*=${$7288fff0ed94f364$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $7288fff0ed94f364$var$p = /'/g, $7288fff0ed94f364$var$g = /"/g, $7288fff0ed94f364$var$$ = /^(?:script|style|textarea|title)$/i, $7288fff0ed94f364$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $7288fff0ed94f364$export$c0bb0b647f701bb5 = $7288fff0ed94f364$var$y(1), $7288fff0ed94f364$export$7ed1367e7fa1ad68 = $7288fff0ed94f364$var$y(2), $7288fff0ed94f364$export$47d5b44d225be5b4 = $7288fff0ed94f364$var$y(3), $7288fff0ed94f364$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $7288fff0ed94f364$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $7288fff0ed94f364$var$A = new WeakMap, $7288fff0ed94f364$var$C = $7288fff0ed94f364$var$r.createTreeWalker($7288fff0ed94f364$var$r, 129);
function $7288fff0ed94f364$var$P(t, i) {
    if (!$7288fff0ed94f364$var$a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $7288fff0ed94f364$var$s ? $7288fff0ed94f364$var$s.createHTML(i) : i;
}
const $7288fff0ed94f364$var$V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $7288fff0ed94f364$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $7288fff0ed94f364$var$f ? "!--" === u[1] ? c = $7288fff0ed94f364$var$v : void 0 !== u[1] ? c = $7288fff0ed94f364$var$_ : void 0 !== u[2] ? ($7288fff0ed94f364$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $7288fff0ed94f364$var$m) : void 0 !== u[3] && (c = $7288fff0ed94f364$var$m) : c === $7288fff0ed94f364$var$m ? ">" === u[0] ? (c = r ?? $7288fff0ed94f364$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $7288fff0ed94f364$var$m : '"' === u[3] ? $7288fff0ed94f364$var$g : $7288fff0ed94f364$var$p) : c === $7288fff0ed94f364$var$g || c === $7288fff0ed94f364$var$p ? c = $7288fff0ed94f364$var$m : c === $7288fff0ed94f364$var$v || c === $7288fff0ed94f364$var$_ ? c = $7288fff0ed94f364$var$f : (c = $7288fff0ed94f364$var$m, r = void 0);
        const x = c === $7288fff0ed94f364$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $7288fff0ed94f364$var$f ? s + $7288fff0ed94f364$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $7288fff0ed94f364$var$e + s.slice(d) + $7288fff0ed94f364$var$h + x) : s + $7288fff0ed94f364$var$h + (-2 === d ? i : x);
    }
    return [
        $7288fff0ed94f364$var$P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class $7288fff0ed94f364$var$N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $7288fff0ed94f364$var$V(t, s);
        if (this.el = $7288fff0ed94f364$var$N.createElement(f, n), $7288fff0ed94f364$var$C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $7288fff0ed94f364$var$C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($7288fff0ed94f364$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($7288fff0ed94f364$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $7288fff0ed94f364$var$H : "?" === e[1] ? $7288fff0ed94f364$var$I : "@" === e[1] ? $7288fff0ed94f364$var$L : $7288fff0ed94f364$var$k
                    }), r.removeAttribute(t);
                } else t.startsWith($7288fff0ed94f364$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($7288fff0ed94f364$var$$.test(r.tagName)) {
                    const t = r.textContent.split($7288fff0ed94f364$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $7288fff0ed94f364$var$i ? $7288fff0ed94f364$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $7288fff0ed94f364$var$l()), $7288fff0ed94f364$var$C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $7288fff0ed94f364$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $7288fff0ed94f364$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($7288fff0ed94f364$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $7288fff0ed94f364$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $7288fff0ed94f364$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $7288fff0ed94f364$var$S(t, i, s = t, e) {
    if (i === $7288fff0ed94f364$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $7288fff0ed94f364$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $7288fff0ed94f364$var$S(t, h._$AS(t, i.values), h, e)), i;
}
class $7288fff0ed94f364$var$M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $7288fff0ed94f364$var$r).importNode(i, !0);
        $7288fff0ed94f364$var$C.currentNode = e;
        let h = $7288fff0ed94f364$var$C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $7288fff0ed94f364$var$R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $7288fff0ed94f364$var$z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $7288fff0ed94f364$var$C.nextNode(), o++);
        }
        return $7288fff0ed94f364$var$C.currentNode = $7288fff0ed94f364$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $7288fff0ed94f364$var$R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $7288fff0ed94f364$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $7288fff0ed94f364$var$S(this, t, i), $7288fff0ed94f364$var$c(t) ? t === $7288fff0ed94f364$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $7288fff0ed94f364$export$45b790e32b2810ee && this._$AR(), this._$AH = $7288fff0ed94f364$export$45b790e32b2810ee) : t !== this._$AH && t !== $7288fff0ed94f364$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $7288fff0ed94f364$var$u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $7288fff0ed94f364$export$45b790e32b2810ee && $7288fff0ed94f364$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($7288fff0ed94f364$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $7288fff0ed94f364$var$N.createElement($7288fff0ed94f364$var$P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $7288fff0ed94f364$var$M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $7288fff0ed94f364$var$A.get(t.strings);
        return void 0 === i && $7288fff0ed94f364$var$A.set(t.strings, i = new $7288fff0ed94f364$var$N(t)), i;
    }
    k(t) {
        $7288fff0ed94f364$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $7288fff0ed94f364$var$R(this.O($7288fff0ed94f364$var$l()), this.O($7288fff0ed94f364$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $7288fff0ed94f364$var$k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $7288fff0ed94f364$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $7288fff0ed94f364$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $7288fff0ed94f364$var$S(this, t, i, 0), o = !$7288fff0ed94f364$var$c(t) || t !== this._$AH && t !== $7288fff0ed94f364$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $7288fff0ed94f364$var$S(this, e[s + n], i, n), r === $7288fff0ed94f364$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$7288fff0ed94f364$var$c(r) || r !== this._$AH[n], r === $7288fff0ed94f364$export$45b790e32b2810ee ? t = $7288fff0ed94f364$export$45b790e32b2810ee : t !== $7288fff0ed94f364$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $7288fff0ed94f364$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $7288fff0ed94f364$var$H extends $7288fff0ed94f364$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $7288fff0ed94f364$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $7288fff0ed94f364$var$I extends $7288fff0ed94f364$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $7288fff0ed94f364$export$45b790e32b2810ee);
    }
}
class $7288fff0ed94f364$var$L extends $7288fff0ed94f364$var$k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $7288fff0ed94f364$var$S(this, t, i, 0) ?? $7288fff0ed94f364$export$45b790e32b2810ee) === $7288fff0ed94f364$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $7288fff0ed94f364$export$45b790e32b2810ee && s !== $7288fff0ed94f364$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $7288fff0ed94f364$export$45b790e32b2810ee && (s === $7288fff0ed94f364$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $7288fff0ed94f364$var$z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $7288fff0ed94f364$var$S(this, t);
    }
}
const $7288fff0ed94f364$export$8613d1ca9052b22e = {
    M: $7288fff0ed94f364$var$e,
    P: $7288fff0ed94f364$var$h,
    A: $7288fff0ed94f364$var$o,
    C: 1,
    L: $7288fff0ed94f364$var$V,
    R: $7288fff0ed94f364$var$M,
    D: $7288fff0ed94f364$var$u,
    V: $7288fff0ed94f364$var$S,
    I: $7288fff0ed94f364$var$R,
    H: $7288fff0ed94f364$var$k,
    N: $7288fff0ed94f364$var$I,
    U: $7288fff0ed94f364$var$L,
    B: $7288fff0ed94f364$var$H,
    F: $7288fff0ed94f364$var$z
}, $7288fff0ed94f364$var$j = $7288fff0ed94f364$var$t.litHtmlPolyfillSupport;
$7288fff0ed94f364$var$j?.($7288fff0ed94f364$var$N, $7288fff0ed94f364$var$R), ($7288fff0ed94f364$var$t.litHtmlVersions ??= []).push("3.3.1");
const $7288fff0ed94f364$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $7288fff0ed94f364$var$R(i.insertBefore($7288fff0ed94f364$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $0faebde791c4315e$var$s = globalThis;
class $0faebde791c4315e$export$3f2f9f5909897157 extends (0, $1c41b9c0e9f0cf26$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $7288fff0ed94f364$export$b3890eb0ae9dca99)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $7288fff0ed94f364$export$9c068ae9cc5db4e8;
    }
}
$0faebde791c4315e$export$3f2f9f5909897157._$litElement$ = !0, $0faebde791c4315e$export$3f2f9f5909897157["finalized"] = !0, $0faebde791c4315e$var$s.litElementHydrateSupport?.({
    LitElement: $0faebde791c4315e$export$3f2f9f5909897157
});
const $0faebde791c4315e$var$o = $0faebde791c4315e$var$s.litElementPolyfillSupport;
$0faebde791c4315e$var$o?.({
    LitElement: $0faebde791c4315e$export$3f2f9f5909897157
});
const $0faebde791c4315e$export$f5c524615a7708d6 = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
($0faebde791c4315e$var$s.litElementVersions ??= []).push("4.2.1");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a4ad91ce2b1dd1c6$export$6acf61af03e62db = !1;





const $040001cdf6cad6dd$export$9dd6ff9ea0189349 = (0, $b93df77f8477abe3$export$dbf350e5966cf602)`
  .buscard-header {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .dest-icon path {
    fill: var(--state-icon-color);
  }

  .buscard-time {
    display: flex;
    align-items: center;
    height: 40px;
  }

  .route {
    display: flex;
    gap: 5px;
  }

  .route-time {
    font-weight: bolder;
    text-align: right;
  }

  .route-time-delay {
    text-decoration: line-through;
    color: red;
  }

  .route-extra-time-canceled {
    color: red;
  }

  .route-station {
    flex-grow: 1;
  }

  .bus-title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex-grow: 1;
  }

  .live-icon {
    margin-left: -3px;
  }

  .bus-timer {
    color: #2fbd95;
    white-space: nowrap;
  }

  .bus-timer-canceled {
    text-decoration: line-through;
    white-space: nowrap;
    color: red;
  }

  .live-icon g {
    fill: #2fbd95;
  }

  .bus-number {
    background-color: var(--state-icon-color);
    padding: 1px 6px;
    font-size: smaller;
    font-weight: bolder;
  }

  .buscard {
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
const $040001cdf6cad6dd$export$96d96d8182c1ee7f = (0, $7288fff0ed94f364$export$c0bb0b647f701bb5)`
  <svg
    class="live-icon"
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    fill="#000000"
  >
    <g class="SVGRepo_bgCarrier" stroke-width="0" />
    <g
      class="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <g class="SVGRepo_iconCarrier">
      <title>ic_fluent_live_24_regular</title>
      <desc>Created with Sketch.</desc>
      <g
        class="🔍-Product-Icons"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g class="ic_fluent_live_24_regular" fill="#212121" fill-rule="nonzero">
          <path
            d="M5.98959236,4.92893219 C6.28248558,5.22182541 6.28248558,5.69669914 5.98959236,5.98959236 C2.67013588,9.30904884 2.67013588,14.6909512 5.98959236,18.0104076 C6.28248558,18.3033009 6.28248558,18.7781746 5.98959236,19.0710678 C5.69669914,19.363961 5.22182541,19.363961 4.92893219,19.0710678 C1.02368927,15.1658249 1.02368927,8.83417511 4.92893219,4.92893219 C5.22182541,4.63603897 5.69669914,4.63603897 5.98959236,4.92893219 Z M19.0710678,4.92893219 C22.9763107,8.83417511 22.9763107,15.1658249 19.0710678,19.0710678 C18.7781746,19.363961 18.3033009,19.363961 18.0104076,19.0710678 C17.7175144,18.7781746 17.7175144,18.3033009 18.0104076,18.0104076 C21.3298641,14.6909512 21.3298641,9.30904884 18.0104076,5.98959236 C17.7175144,5.69669914 17.7175144,5.22182541 18.0104076,4.92893219 C18.3033009,4.63603897 18.7781746,4.63603897 19.0710678,4.92893219 Z M8.81801948,7.75735931 C9.1109127,8.05025253 9.1109127,8.52512627 8.81801948,8.81801948 C7.06066017,10.5753788 7.06066017,13.4246212 8.81801948,15.1819805 C9.1109127,15.4748737 9.1109127,15.9497475 8.81801948,16.2426407 C8.52512627,16.5355339 8.05025253,16.5355339 7.75735931,16.2426407 C5.41421356,13.8994949 5.41421356,10.1005051 7.75735931,7.75735931 C8.05025253,7.46446609 8.52512627,7.46446609 8.81801948,7.75735931 Z M16.2426407,7.75735931 C18.5857864,10.1005051 18.5857864,13.8994949 16.2426407,16.2426407 C15.9497475,16.5355339 15.4748737,16.5355339 15.1819805,16.2426407 C14.8890873,15.9497475 14.8890873,15.4748737 15.1819805,15.1819805 C16.9393398,13.4246212 16.9393398,10.5753788 15.1819805,8.81801948 C14.8890873,8.52512627 14.8890873,8.05025253 15.1819805,7.75735931 C15.4748737,7.46446609 15.9497475,7.46446609 16.2426407,7.75735931 Z M12,10.5 C12.8284271,10.5 13.5,11.1715729 13.5,12 C13.5,12.8284271 12.8284271,13.5 12,13.5 C11.1715729,13.5 10.5,12.8284271 10.5,12 C10.5,11.1715729 11.1715729,10.5 12,10.5 Z"
            class="🎨-Color"
          ></path>
        </g>
      </g>
    </g>
  </svg>
`;


class $bf513b85805031e6$export$f7ff0c9b63908086 extends (0, $0faebde791c4315e$export$3f2f9f5909897157) {
    // private property
    _hass;
    // internal reactive states
    static get properties() {
        return {
            _entity: {
                state: true
            },
            _state: {
                state: true
            }
        };
    }
    // lifecycle interface
    setConfig(config) {
        this._entity = config.entity;
        // call set hass() to immediately adjust to a changed entity
        // while editing the entity in the card editor
        if (this._hass) this.hass = this._hass;
    }
    getStops() {
        return this._state?.attributes?.stops || [];
    }
    set hass(hass) {
        this._hass = hass;
        this._state = hass.states[this._entity];
    }
    static styles = (0, $040001cdf6cad6dd$export$9dd6ff9ea0189349);
    convertArrivalTime(arrivalTime) {
        return arrivalTime.split(":").splice(0, 2).join(":");
    }
    // Show arrival time. If delayed or canceled, show original time with strikethrough.
    getArrivalTime(bus) {
        let text = "";
        let className = "";
        if (bus.delayInSeconds > 0) text = this.convertArrivalTime(bus.arrivalTime);
        else if (bus.canceled) {
            text = this.convertArrivalTime(bus.arrivalTime);
            className += " route-time-delay";
        } else text = this.convertArrivalTime(bus.calculatedArrivalTime);
        return (0, $7288fff0ed94f364$export$c0bb0b647f701bb5)`<span class="${className}">${text}</span>`;
    }
    // If delay, show new time. If canceled, show "GEANNULEERD".
    getExtraTimeInfo(bus) {
        let text = "";
        let className = "";
        if (bus.canceled) {
            text = "GEANNULEERD";
            className += " route-extra-time-canceled";
        } else if (bus.delayInSeconds > 0) text = this.convertArrivalTime(bus.calculatedArrivalTime);
        return (0, $7288fff0ed94f364$export$c0bb0b647f701bb5)`<span class="${className}">${text}</span>`;
    }
    getMinutesUntil(bus) {
        let className = "";
        if (bus.canceled) className = "bus-timer-canceled";
        else className = "bus-timer";
        return (0, $7288fff0ed94f364$export$c0bb0b647f701bb5)`<span class="${className}">${bus.minutesUntil} min</span>`;
    }
    getBusCards() {
        const cards = [];
        const stops = this.getStops();
        stops.forEach((bus)=>{
            cards.push((0, $7288fff0ed94f364$export$c0bb0b647f701bb5)`
        <div class="buscard">
          <div class="buscard-header">
            <span class="bus-number">${bus.routeShortName}</span>
            <span class="bus-title">${bus.stopHeadsign}</span>
            ${this.getMinutesUntil(bus)} ${this.liveIcon}
          </div>
          <div class="buscard-time">
            <div class="buscard-time-details">
              <div class="route">
                <div class="route-time">
                  ${this.getArrivalTime(bus)} ${this.getExtraTimeInfo(bus)}
                </div>
                <div class="route-station">${bus.routeLongName}</div>
              </div>
            </div>
          </div>
        </div>
      `);
        });
        return cards;
    }
    render() {
        return (0, $7288fff0ed94f364$export$c0bb0b647f701bb5)`
      <ha-card>
        <div class="card-content">${this.getBusCards()}</div>
      </ha-card>
    `;
    }
}


customElements.define("bustijden-card", (0, $bf513b85805031e6$export$f7ff0c9b63908086));


//# sourceMappingURL=index.js.map
