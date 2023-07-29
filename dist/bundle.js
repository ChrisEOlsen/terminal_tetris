;(() => {
  "use strict"
  var t = {
      426: (t, e, n) => {
        n.d(e, { Z: () => s })
        var r = n(537),
          o = n.n(r),
          a = n(645),
          i = n.n(a)()(o())
        i.push([t.id, "@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap);"]),
          i.push([
            t.id,
            '* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n#projectContainer > * {\n  font-family: "Press Start 2P", cursive;\n}\n\n#projectContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100dvh;\n  background-color: black;\n  position: relative;\n}\n\n#gitLink {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  padding: 10px;\n  border: 2px solid aquamarine;\n  color: aquamarine;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n#subContainer {\n  width: fit-content;\n  height: fit-content;\n  position: relative;\n}\n\n#muteButton {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background-color: black;\n  width: fit-content;\n  height: fit-content;\n  border-radius: 8px;\n  border: 3px solid aquamarine;\n  cursor: pointer;\n  padding: 4px 8px;\n}\n#muteButton svg {\n  width: 24px;\n  height: 24px;\n}\n\n#helpBox {\n  position: absolute;\n  top: 60%;\n  right: 0;\n  transform: translateX(calc(100% + 10px));\n  height: fit-content;\n  width: 300px;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 16px;\n  padding: 10px;\n  border: 2px solid aquamarine;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.helpRow {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n}\n.helpRow span:nth-child(2) {\n  text-align: center;\n}\n\n#nextPiece {\n  position: absolute;\n  background-color: black;\n  transform: translate(10px, 95px);\n  border: 3px solid aquamarine;\n  border-radius: 8px;\n}\n\n#cornerPause:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n#scoreBoard {\n  border: 3px solid aquamarine;\n  border-radius: 8px;\n  position: absolute;\n  left: 0;\n  bottom: 50%;\n  transform: translate(calc(-100% - 10px), 35%);\n}\n\n#gameOverContainer,\n#startGameContainer,\n#pauseGameContainer {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -40%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  color: white;\n  background-color: black;\n  border: 4px solid aquamarine;\n  border-radius: 20px;\n  font-size: 18px;\n  padding: 20px;\n  width: 81%;\n}\n#startGameContainer {\n  background-color: rgba(127, 255, 212, 0.175);\n}\n#gameOverContainer {\n  width: 99%;\n}\n#gameOverContainer span:nth-child(1) {\n  align-self: center;\n}\n\n#playButton,\n#playAgainButton,\n#resumeButton,\n#quitButton {\n  color: white;\n  background-color: black;\n  border: 2px solid aquamarine;\n  padding: 8px 20px;\n  font-size: 16px;\n  border-radius: 3px;\n  font-family: "Press Start 2P", cursive;\n}\n#playAgainButton {\n  align-self: center;\n}\n#playButton:hover,\n#playAgainButton:hover,\n#resumeButton:hover,\n#quitButton:hover {\n  cursor: pointer;\n  background-color: aquamarine;\n  color: black;\n}\n\n@media (max-width: 1015px) {\n  #helpBox {\n    position: absolute;\n    height: 124px;\n    top: 77%;\n    right: 50%;\n    transform: translateX(50%);\n    border: none;\n  }\n}\n',
            "",
            {
              version: 3,
              sources: ["webpack://./src/style.css"],
              names: [],
              mappings:
                "AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,aAAa;EACb,4BAA4B;EAC5B,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,4BAA4B;EAC5B,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,QAAQ;EACR,wCAAwC;EACxC,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,aAAa;EACb,4BAA4B;EAC5B,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,gCAAgC;EAChC,4BAA4B;EAC5B,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,kBAAkB;EAClB,OAAO;EACP,WAAW;EACX,6CAA6C;AAC/C;;AAEA;;;EAGE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,4BAA4B;EAC5B,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,UAAU;AACZ;AACA;EACE,4CAA4C;AAC9C;AACA;EACE,UAAU;AACZ;AACA;EACE,kBAAkB;AACpB;;AAEA;;;;EAIE,YAAY;EACZ,uBAAuB;EACvB,4BAA4B;EAC5B,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,sCAAsC;AACxC;AACA;EACE,kBAAkB;AACpB;AACA;;;;EAIE,eAAe;EACf,4BAA4B;EAC5B,YAAY;AACd;;AAEA;EACE;IACE,kBAAkB;IAClB,aAAa;IACb,QAAQ;IACR,UAAU;IACV,0BAA0B;IAC1B,YAAY;EACd;AACF",
              sourcesContent: [
                '@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n#projectContainer > * {\n  font-family: "Press Start 2P", cursive;\n}\n\n#projectContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100dvh;\n  background-color: black;\n  position: relative;\n}\n\n#gitLink {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  padding: 10px;\n  border: 2px solid aquamarine;\n  color: aquamarine;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n#subContainer {\n  width: fit-content;\n  height: fit-content;\n  position: relative;\n}\n\n#muteButton {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background-color: black;\n  width: fit-content;\n  height: fit-content;\n  border-radius: 8px;\n  border: 3px solid aquamarine;\n  cursor: pointer;\n  padding: 4px 8px;\n}\n#muteButton svg {\n  width: 24px;\n  height: 24px;\n}\n\n#helpBox {\n  position: absolute;\n  top: 60%;\n  right: 0;\n  transform: translateX(calc(100% + 10px));\n  height: fit-content;\n  width: 300px;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 16px;\n  padding: 10px;\n  border: 2px solid aquamarine;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.helpRow {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n}\n.helpRow span:nth-child(2) {\n  text-align: center;\n}\n\n#nextPiece {\n  position: absolute;\n  background-color: black;\n  transform: translate(10px, 95px);\n  border: 3px solid aquamarine;\n  border-radius: 8px;\n}\n\n#cornerPause:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n#scoreBoard {\n  border: 3px solid aquamarine;\n  border-radius: 8px;\n  position: absolute;\n  left: 0;\n  bottom: 50%;\n  transform: translate(calc(-100% - 10px), 35%);\n}\n\n#gameOverContainer,\n#startGameContainer,\n#pauseGameContainer {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -40%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  color: white;\n  background-color: black;\n  border: 4px solid aquamarine;\n  border-radius: 20px;\n  font-size: 18px;\n  padding: 20px;\n  width: 81%;\n}\n#startGameContainer {\n  background-color: rgba(127, 255, 212, 0.175);\n}\n#gameOverContainer {\n  width: 99%;\n}\n#gameOverContainer span:nth-child(1) {\n  align-self: center;\n}\n\n#playButton,\n#playAgainButton,\n#resumeButton,\n#quitButton {\n  color: white;\n  background-color: black;\n  border: 2px solid aquamarine;\n  padding: 8px 20px;\n  font-size: 16px;\n  border-radius: 3px;\n  font-family: "Press Start 2P", cursive;\n}\n#playAgainButton {\n  align-self: center;\n}\n#playButton:hover,\n#playAgainButton:hover,\n#resumeButton:hover,\n#quitButton:hover {\n  cursor: pointer;\n  background-color: aquamarine;\n  color: black;\n}\n\n@media (max-width: 1015px) {\n  #helpBox {\n    position: absolute;\n    height: 124px;\n    top: 77%;\n    right: 50%;\n    transform: translateX(50%);\n    border: none;\n  }\n}\n',
              ],
              sourceRoot: "",
            },
          ])
        const s = i
      },
      645: t => {
        t.exports = function (t) {
          var e = []
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5]
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r && (n += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                )
              }).join("")
            }),
            (e.i = function (t, n, r, o, a) {
              "string" == typeof t && (t = [[null, t, void 0]])
              var i = {}
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var u = this[s][0]
                  null != u && (i[u] = !0)
                }
              for (var c = 0; c < t.length; c++) {
                var l = [].concat(t[c])
                ;(r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")),
                    (l[5] = a)),
                  n && (l[2] ? ((l[1] = "@media ".concat(l[2], " {").concat(l[1], "}")), (l[2] = n)) : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}")), (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l))
              }
            }),
            e
          )
        }
      },
      537: t => {
        t.exports = function (t) {
          var e = t[1],
            n = t[3]
          if (!n) return e
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),
              a = "/*# ".concat(o, " */")
            return [e].concat([a]).join("\n")
          }
          return [e].join("\n")
        }
      },
      379: t => {
        var e = []
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r
              break
            }
          return n
        }
        function r(t, r) {
          for (var a = {}, i = [], s = 0; s < t.length; s++) {
            var u = t[s],
              c = r.base ? u[0] + r.base : u[0],
              l = a[c] || 0,
              p = "".concat(c, " ").concat(l)
            a[c] = l + 1
            var d = n(p),
              f = { css: u[1], media: u[2], sourceMap: u[3], supports: u[4], layer: u[5] }
            if (-1 !== d) e[d].references++, e[d].updater(f)
            else {
              var h = o(f, r)
              ;(r.byIndex = s), e.splice(s, 0, { identifier: p, updater: h, references: 1 })
            }
            i.push(p)
          }
          return i
        }
        function o(t, e) {
          var n = e.domAPI(e)
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return
                n.update((t = e))
              } else n.remove()
            }
          )
        }
        t.exports = function (t, o) {
          var a = r((t = t || []), (o = o || {}))
          return function (t) {
            t = t || []
            for (var i = 0; i < a.length; i++) {
              var s = n(a[i])
              e[s].references--
            }
            for (var u = r(t, o), c = 0; c < a.length; c++) {
              var l = n(a[c])
              0 === e[l].references && (e[l].updater(), e.splice(l, 1))
            }
            a = u
          }
        }
      },
      569: t => {
        var e = {}
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t)
              if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                try {
                  n = n.contentDocument.head
                } catch (t) {
                  n = null
                }
              e[t] = n
            }
            return e[t]
          })(t)
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            )
          r.appendChild(n)
        }
      },
      216: t => {
        t.exports = function (t) {
          var e = document.createElement("style")
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e
        }
      },
      565: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc
          e && t.setAttribute("nonce", e)
        }
      },
      795: t => {
        t.exports = function (t) {
          if ("undefined" == typeof document) return { update: function () {}, remove: function () {} }
          var e = t.insertStyleElement(t)
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = ""
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"))
                var o = void 0 !== n.layer
                o && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}")
                var a = n.sourceMap
                a &&
                  "undefined" != typeof btoa &&
                  (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                    " */"
                  )),
                  e.styleTagTransform(r, t, e.options)
              })(e, t, n)
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1
                t.parentNode.removeChild(t)
              })(e)
            },
          }
        }
      },
      589: t => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild)
            e.appendChild(document.createTextNode(t))
          }
        }
      },
    },
    e = {}
  function n(r) {
    var o = e[r]
    if (void 0 !== o) return o.exports
    var a = (e[r] = { id: r, exports: {} })
    return t[r](a, a.exports, n), a.exports
  }
  ;(n.n = t => {
    var e = t && t.__esModule ? () => t.default : () => t
    return n.d(e, { a: e }), e
  }),
    (n.d = (t, e) => {
      for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] })
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis
      try {
        return this || new Function("return this")()
      } catch (t) {
        if ("object" == typeof window) return window
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t
      n.g.importScripts && (t = n.g.location + "")
      var e = n.g.document
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var r = e.getElementsByTagName("script")
        if (r.length) for (var o = r.length - 1; o > -1 && !t; ) t = r[o--].src
      }
      if (!t) throw new Error("Automatic publicPath is not supported in this browser")
      ;(t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = t)
    })(),
    (n.nc = void 0)
  var r = {}
  ;(() => {
    n.d(r, { F: () => Ie })
    var t = n(379),
      e = n.n(t),
      o = n(795),
      a = n.n(o),
      i = n(569),
      s = n.n(i),
      u = n(565),
      c = n.n(u),
      l = n(216),
      p = n.n(l),
      d = n(589),
      f = n.n(d),
      h = n(426),
      m = {}
    ;(m.styleTagTransform = f()),
      (m.setAttributes = c()),
      (m.insert = s().bind(null, "head")),
      (m.domAPI = a()),
      (m.insertStyleElement = p()),
      e()(h.Z, m),
      h.Z && h.Z.locals && h.Z.locals
    const A = (() => {
        function t() {
          const t = document.createElement("div"),
            e = document.createElement("span"),
            n = document.createElement("button")
          ;(n.id = "playButton"),
            (t.id = "startGameContainer"),
            (e.textContent = "TETRIS"),
            (n.textContent = "PLAY"),
            t.appendChild(e),
            t.appendChild(n),
            subContainer.appendChild(t)
        }
        function e() {
          const t = document.createElement("div")
          t.id = "helpBox"
          let e = ["Move:", "Rotate:", "Quick Drop:", "Pause/Play:"],
            n = ["Arrows", "'z'", "'Space'", "'Esc'"]
          for (let r = 0; r < e.length; r++) {
            const o = document.createElement("div"),
              a = document.createElement("span"),
              i = document.createElement("span")
            o.classList.add("helpRow"),
              (a.textContent = e[r]),
              (i.textContent = n[r]),
              o.appendChild(a),
              o.appendChild(i),
              t.appendChild(o)
          }
          document.getElementById("subContainer").appendChild(t)
        }
        return {
          displayGameOverPage: function (t) {
            const e = document.createElement("div"),
              n = document.createElement("span"),
              r = document.createElement("span"),
              o = document.createElement("span"),
              a = document.createElement("button"),
              i = document.createElement("button")
            ;(e.id = "gameOverContainer"),
              (a.id = "playAgainButton"),
              (i.id = "quitButton"),
              (n.textContent = "Game Over!"),
              (r.textContent = `Score: ${t.getScore().toString()}`),
              null !== localStorage.getItem("highScore")
                ? (o.textContent = `High Score: ${localStorage.getItem("highScore")}`)
                : (o.textContent = `High Score: ${t.getScore().toString()}`),
              (a.textContent = "PLAY AGAIN"),
              (i.textContent = "QUIT"),
              e.appendChild(n),
              e.appendChild(r),
              e.appendChild(o),
              e.appendChild(a),
              e.appendChild(i),
              subContainer.appendChild(e)
          },
          displayPausePage: function () {
            const t = document.createElement("div"),
              e = document.createElement("span"),
              n = document.createElement("resumeButton")
            ;(t.id = "pauseGameContainer"),
              (n.id = "resumeButton"),
              (e.textContent = "PAUSED"),
              (n.textContent = "resume"),
              t.appendChild(e),
              t.appendChild(n),
              subContainer.appendChild(t)
          },
          displayStartPage: t,
          displayHelpBox: e,
          toggleMuteButton: function () {
            const t = document.getElementById("startMusic"),
              e = document.getElementById("muteButton")
            e.classList.toggle("on"),
              e.classList.contains("on")
                ? ((e.innerHTML =
                    '<svg class="muteClickable" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path class="muteClickable" fill="aquamarine" d="M7.563 2.069A.75.75 0 0 1 8 2.75v10.5a.751.751 0 0 1-1.238.57L3.472 11H1.75A1.75 1.75 0 0 1 0 9.25v-2.5C0 5.784.784 5 1.75 5h1.723l3.289-2.82a.75.75 0 0 1 .801-.111ZM6.5 4.38L4.238 6.319a.748.748 0 0 1-.488.181h-2a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2c.179 0 .352.064.488.18L6.5 11.62Zm6.096-2.038a.75.75 0 0 1 1.06 0a8 8 0 0 1 0 11.314a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042a6.5 6.5 0 0 0 0-9.193a.75.75 0 0 1 0-1.06Zm-1.06 2.121l-.001.001a5 5 0 0 1 0 7.07a.749.749 0 0 1-1.275-.326a.749.749 0 0 1 .215-.734a3.5 3.5 0 0 0 0-4.95a.75.75 0 1 1 1.061-1.061Z"/></svg>'),
                  (t.muted = !1))
                : ((e.innerHTML =
                    '<svg class="muteClickable" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="muteClickable" fill="aquamarine" d="M12.43 4.1a1 1 0 0 0-1 .12L6.65 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78A1 1 0 0 0 12 20a.91.91 0 0 0 .43-.1A1 1 0 0 0 13 19V5a1 1 0 0 0-.57-.9ZM11 16.92l-3.38-2.7A1 1 0 0 0 7 14H4v-4h3a1 1 0 0 0 .62-.22L11 7.08ZM19.91 12l1.8-1.79a1 1 0 0 0-1.42-1.42l-1.79 1.8l-1.79-1.8a1 1 0 0 0-1.42 1.42l1.8 1.79l-1.8 1.79a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l1.79-1.8l1.79 1.8a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"/></svg>'),
                  (t.muted = !0))
          },
          displayStartComponents: function () {
            t(), e()
          },
        }
      })(),
      g = document.getElementById("game-canvas"),
      v = document.getElementById("nextPiece"),
      y = document.getElementById("scoreBoard")
    let C = g.getContext("2d"),
      b = v.getContext("2d"),
      B = y.getContext("2d"),
      E = 30
    const w = ["#fbbf24", "#22c55e", "#0ea5e9", "#67e8f9", "#e11d48", "#d946ef", "#f8fafc"]
    let $ = window.devicePixelRatio || 1
    ;(g.width = 364),
      (g.height = 694),
      (v.width = 120),
      (v.height = 120),
      (y.width = 80 * $),
      (y.height = 128 * $),
      B.scale($, $)
    let x = localStorage.getItem("highScore")
    null === x && (x = "0")
    function P(t) {
      k()
      let e = t.getCurrentX(),
        n = t.getCurrentY(),
        r = t.changeShadowY(),
        o = t.getCurrentPiece(),
        a = t.getNextPiece(),
        i = t.getCurrentRotation(),
        s = t.getTetromino(o),
        u = t.getTetromino(a)
      S(t)
      for (let c = 0; c < 4; c++)
        for (let l = 0; l < 4; l++) {
          let p = t.Rotate(c, l, i)
          1 === s.get(p) && (R(c, l, e, n, o), I(t, c, l, e, r, s, o, i)), O(c, l, a, u)
        }
      _(t), j()
    }
    const k = () => {
      C.clearRect(0, 0, g.width, g.height), b.clearRect(0, 0, v.width, v.height), B.clearRect(0, 0, y.width, y.height)
    }
    function T(t, e, n, r) {
      C.beginPath(), C.moveTo(t, e), C.lineTo(n, r), C.stroke()
    }
    const S = t => {
        let e = t.getGameBoard()
        for (let n = 0; n < 12; n++)
          for (let r = 0; r < 23; r++) {
            const o = 12 * r + n,
              a = e.get(o)
            10 === a
              ? (C.fillStyle = "black")
              : 9 === a
              ? ((C.strokeStyle = "black"), (C.fillStyle = "black"), C.fillRect(n * E + 2, r * E + 2, E, E))
              : (t.getGameOver() ? (C.strokeStyle = "aquamarine") : (C.strokeStyle = "white"),
                (C.lineWidth = 2),
                C.strokeRect(n * E + 2, r * E + 2, E, E)),
              10 !== a &&
                9 !== a &&
                ((C.lineWidth = 1),
                T(n * E + 2, r * E + 2, (n + 1) * E + 2, (r + 1) * E + 2),
                T(n * E + E + 2, r * E + 2, n * E + 2, r * E + E + 2)),
              (C.shadowBlur = 0),
              (C.shadowColor = "black")
          }
      },
      R = (t, e, n, r, o) => {
        ;(C.shadowBlur = 12),
          (C.shadowColor = w[o]),
          (C.strokeStyle = w[o]),
          (C.lineWidth = 3),
          C.strokeRect((n + t) * E + 2, (r + e) * E + 2, E, E),
          (C.shadowBlur = 0),
          (C.shadowColor = "black")
      },
      I = (t, e, n, r, o, a, i, s) => {
        if (((C.strokeStyle = w[i]), !t.getGamePaused() && !t.getGameOver())) {
          const i = n > 0 ? a.get(t.Rotate(e, n - 1, s)) : 0,
            u = e < 3 ? a.get(t.Rotate(e + 1, n, s)) : 0,
            c = n < 3 ? a.get(t.Rotate(e, n + 1, s)) : 0,
            l = e > 0 ? a.get(t.Rotate(e - 1, n, s)) : 0
          0 === i && T((r + e) * E + 2, (o + n) * E + 2, (r + e + 1) * E + 2, (o + n) * E + 2),
            0 === u && T((r + e + 1) * E + 2, (o + n) * E + 2, (r + e + 1) * E + 2, (o + n + 1) * E + 2),
            0 === c && T((r + e + 1) * E + 2, (o + n + 1) * E + 2, (r + e) * E + 2, (o + n + 1) * E + 2),
            0 === l && T((r + e) * E + 2, (o + n + 1) * E + 2, (r + e) * E + 2, (o + n) * E + 2)
        }
      },
      O = (t, e, n, r) => {
        let o = 0,
          a = 0
        0 === n
          ? ((o = 0), (a = 12))
          : 1 === n
          ? ((o = 25), (a = 10))
          : 2 === n
          ? ((o = 12), (a = 13))
          : 3 === n
          ? ((o = 10), (a = 23))
          : 4 === n
          ? ((o = 14), (a = 23))
          : (5 !== n && 6 !== n) || ((o = 10), (a = 25)),
          1 == r.get(4 * e + t) &&
            ((b.shadowBlur = 12),
            (b.shadowColor = w[n]),
            (b.strokeStyle = w[n]),
            (b.lineWidth = 2),
            b.strokeRect(24 * t + o, 24 * e + a, 24, 24)),
          (b.shadowBlur = 0),
          (b.shadowColor = "black")
      },
      _ = t => {
        ;(B.font = '12px "Press Start 2P"'),
          (B.fillStyle = "aquamarine"),
          B.fillText("TOP", 10, y.height / 6),
          B.fillText(`${x}`, 10, y.height / 6 + 16),
          B.fillText("SCORE", 10, y.height / 6 + 32),
          B.fillText(`${t.getScore()}`, 10, y.height / 6 + 48)
      },
      j = () => {
        ;(C.strokeStyle = "aquamarine"),
          [
            [2, 2, 2, 692],
            [32, 2, 32, 662],
            [362, 2, 362, 692],
            [332, 2, 332, 662],
            [2, 692, 362, 692],
            [32, 662, 332, 662],
          ].forEach(t => T(...t))
      }
    var W,
      F = void 0 !== F ? F : {},
      U = Object.assign({}, F),
      D = ""
    "undefined" != typeof document && document.currentScript && (D = document.currentScript.src),
      (D = 0 !== D.indexOf("blob:") ? D.substr(0, D.replace(/[?#].*/, "").lastIndexOf("/") + 1) : ""),
      F.print || console.log.bind(console)
    var q,
      G,
      L = F.printErr || console.error.bind(console)
    Object.assign(F, U),
      (U = null),
      F.arguments && F.arguments,
      F.thisProgram && F.thisProgram,
      F.quit && F.quit,
      F.wasmBinary && (q = F.wasmBinary),
      F.noExitRuntime,
      "object" != typeof WebAssembly && it("no native wasm support detected")
    var M,
      H,
      Z,
      z,
      Y,
      V,
      N,
      Q,
      X,
      J = !1
    function K() {
      var t = G.buffer
      ;(F.HEAP8 = M = new Int8Array(t)),
        (F.HEAP16 = Z = new Int16Array(t)),
        (F.HEAP32 = Y = new Int32Array(t)),
        (F.HEAPU8 = H = new Uint8Array(t)),
        (F.HEAPU16 = z = new Uint16Array(t)),
        (F.HEAPU32 = V = new Uint32Array(t)),
        (F.HEAPF32 = N = new Float32Array(t)),
        (F.HEAPF64 = Q = new Float64Array(t))
    }
    var tt = [],
      et = [],
      nt = [],
      rt = 0,
      ot = null,
      at = null
    function it(t) {
      throw (
        (F.onAbort && F.onAbort(t),
        L((t = "Aborted(" + t + ")")),
        (J = !0),
        (t += ". Build with -sASSERTIONS for more info."),
        new WebAssembly.RuntimeError(t))
      )
    }
    var st, ut
    function ct(t) {
      return t.startsWith("data:application/octet-stream;base64,")
    }
    function lt(t) {
      try {
        if (t == st && q) return new Uint8Array(q)
        if (W) return W(t)
        throw "both async and sync fetching of the wasm failed"
      } catch (t) {
        it(t)
      }
    }
    function pt(t, e, n) {
      return (function (t) {
        return q || "function" != typeof fetch
          ? Promise.resolve().then(() => lt(t))
          : fetch(t, { credentials: "same-origin" })
              .then(e => {
                if (!e.ok) throw "failed to load wasm binary file at '" + t + "'"
                return e.arrayBuffer()
              })
              .catch(() => lt(t))
      })(t)
        .then(t => WebAssembly.instantiate(t, e))
        .then(t => t)
        .then(n, t => {
          L("failed to asynchronously prepare wasm: " + t), it(t)
        })
    }
    function dt(t) {
      for (; t.length > 0; ) t.shift()(F)
    }
    function ft(t) {
      ;(this.excPtr = t),
        (this.ptr = t - 24),
        (this.set_type = function (t) {
          V[(this.ptr + 4) >> 2] = t
        }),
        (this.get_type = function () {
          return V[(this.ptr + 4) >> 2]
        }),
        (this.set_destructor = function (t) {
          V[(this.ptr + 8) >> 2] = t
        }),
        (this.get_destructor = function () {
          return V[(this.ptr + 8) >> 2]
        }),
        (this.set_caught = function (t) {
          ;(t = t ? 1 : 0), (M[(this.ptr + 12) >> 0] = t)
        }),
        (this.get_caught = function () {
          return 0 != M[(this.ptr + 12) >> 0]
        }),
        (this.set_rethrown = function (t) {
          ;(t = t ? 1 : 0), (M[(this.ptr + 13) >> 0] = t)
        }),
        (this.get_rethrown = function () {
          return 0 != M[(this.ptr + 13) >> 0]
        }),
        (this.init = function (t, e) {
          this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(e)
        }),
        (this.set_adjusted_ptr = function (t) {
          V[(this.ptr + 16) >> 2] = t
        }),
        (this.get_adjusted_ptr = function () {
          return V[(this.ptr + 16) >> 2]
        }),
        (this.get_exception_ptr = function () {
          if (ke(this.get_type())) return V[this.excPtr >> 2]
          var t = this.get_adjusted_ptr()
          return 0 !== t ? t : this.excPtr
        })
    }
    function ht(t) {
      switch (t) {
        case 1:
          return 0
        case 2:
          return 1
        case 4:
          return 2
        case 8:
          return 3
        default:
          throw new TypeError(`Unknown type size: ${t}`)
      }
    }
    ct((st = "tetris.wasm")) || ((ut = st), (st = F.locateFile ? F.locateFile(ut, D) : D + ut))
    var mt = void 0
    function At(t) {
      for (var e = "", n = t; H[n]; ) e += mt[H[n++]]
      return e
    }
    var gt = {},
      vt = {},
      yt = {},
      Ct = 48,
      bt = 57
    function Bt(t) {
      if (void 0 === t) return "_unknown"
      var e = (t = t.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0)
      return e >= Ct && e <= bt ? `_${t}` : t
    }
    function Et(t, e) {
      return {
        [(t = Bt(t))]: function () {
          return e.apply(this, arguments)
        },
      }[t]
    }
    function wt(t, e) {
      var n = Et(e, function (t) {
        ;(this.name = e), (this.message = t)
        var n = new Error(t).stack
        void 0 !== n && (this.stack = this.toString() + "\n" + n.replace(/^Error(:[^\n]*)?\n/, ""))
      })
      return (
        (n.prototype = Object.create(t.prototype)),
        (n.prototype.constructor = n),
        (n.prototype.toString = function () {
          return void 0 === this.message ? this.name : `${this.name}: ${this.message}`
        }),
        n
      )
    }
    var $t = void 0
    function xt(t) {
      throw new $t(t)
    }
    var Pt = void 0
    function kt(t) {
      throw new Pt(t)
    }
    function Tt(t, e, n) {
      function r(e) {
        var r = n(e)
        r.length !== t.length && kt("Mismatched type converter count")
        for (var o = 0; o < t.length; ++o) St(t[o], r[o])
      }
      t.forEach(function (t) {
        yt[t] = e
      })
      var o = new Array(e.length),
        a = [],
        i = 0
      e.forEach((t, e) => {
        vt.hasOwnProperty(t)
          ? (o[e] = vt[t])
          : (a.push(t),
            gt.hasOwnProperty(t) || (gt[t] = []),
            gt[t].push(() => {
              ;(o[e] = vt[t]), ++i === a.length && r(o)
            }))
      }),
        0 === a.length && r(o)
    }
    function St(t, e, n = {}) {
      if (!("argPackAdvance" in e)) throw new TypeError("registerType registeredInstance requires argPackAdvance")
      var r = e.name
      if ((t || xt(`type "${r}" must have a positive integer typeid pointer`), vt.hasOwnProperty(t))) {
        if (n.ignoreDuplicateRegistrations) return
        xt(`Cannot register type '${r}' twice`)
      }
      if (((vt[t] = e), delete yt[t], gt.hasOwnProperty(t))) {
        var o = gt[t]
        delete gt[t], o.forEach(t => t())
      }
    }
    function Rt(t) {
      xt(t.$$.ptrType.registeredClass.name + " instance already deleted")
    }
    var It = !1
    function Ot(t) {}
    function _t(t) {
      ;(t.count.value -= 1),
        0 === t.count.value &&
          (function (t) {
            t.smartPtr ? t.smartPtrType.rawDestructor(t.smartPtr) : t.ptrType.registeredClass.rawDestructor(t.ptr)
          })(t)
    }
    function jt(t, e, n) {
      if (e === n) return t
      if (void 0 === n.baseClass) return null
      var r = jt(t, e, n.baseClass)
      return null === r ? null : n.downcast(r)
    }
    var Wt = {}
    var Ft = []
    function Ut() {
      for (; Ft.length; ) {
        var t = Ft.pop()
        ;(t.$$.deleteScheduled = !1), t.delete()
      }
    }
    var Dt = void 0
    var qt = {}
    function Gt(t, e) {
      return (
        (e.ptrType && e.ptr) || kt("makeClassHandle requires ptr and ptrType"),
        !!e.smartPtrType != !!e.smartPtr && kt("Both smartPtrType and smartPtr must be specified"),
        (e.count = { value: 1 }),
        Lt(Object.create(t, { $$: { value: e } }))
      )
    }
    function Lt(t) {
      return "undefined" == typeof FinalizationRegistry
        ? ((Lt = t => t), t)
        : ((It = new FinalizationRegistry(t => {
            _t(t.$$)
          })),
          (Lt = t => {
            var e = t.$$
            if (e.smartPtr) {
              var n = { $$: e }
              It.register(t, n, t)
            }
            return t
          }),
          (Ot = t => It.unregister(t)),
          Lt(t))
    }
    function Mt() {}
    function Ht(t, e, n) {
      if (void 0 === t[e].overloadTable) {
        var r = t[e]
        ;(t[e] = function () {
          return (
            t[e].overloadTable.hasOwnProperty(arguments.length) ||
              xt(
                `Function '${n}' called with an invalid number of arguments (${arguments.length}) - expects one of (${t[e].overloadTable})!`
              ),
            t[e].overloadTable[arguments.length].apply(this, arguments)
          )
        }),
          (t[e].overloadTable = []),
          (t[e].overloadTable[r.argCount] = r)
      }
    }
    function Zt(t, e, n, r, o, a, i, s) {
      ;(this.name = t),
        (this.constructor = e),
        (this.instancePrototype = n),
        (this.rawDestructor = r),
        (this.baseClass = o),
        (this.getActualType = a),
        (this.upcast = i),
        (this.downcast = s),
        (this.pureVirtualFunctions = [])
    }
    function zt(t, e, n) {
      for (; e !== n; )
        e.upcast || xt(`Expected null or instance of ${n.name}, got an instance of ${e.name}`),
          (t = e.upcast(t)),
          (e = e.baseClass)
      return t
    }
    function Yt(t, e) {
      if (null === e) return this.isReference && xt(`null is not a valid ${this.name}`), 0
      e.$$ || xt(`Cannot pass "${le(e)}" as a ${this.name}`),
        e.$$.ptr || xt(`Cannot pass deleted object as a pointer of type ${this.name}`)
      var n = e.$$.ptrType.registeredClass
      return zt(e.$$.ptr, n, this.registeredClass)
    }
    function Vt(t, e) {
      var n
      if (null === e)
        return (
          this.isReference && xt(`null is not a valid ${this.name}`),
          this.isSmartPointer ? ((n = this.rawConstructor()), null !== t && t.push(this.rawDestructor, n), n) : 0
        )
      e.$$ || xt(`Cannot pass "${le(e)}" as a ${this.name}`),
        e.$$.ptr || xt(`Cannot pass deleted object as a pointer of type ${this.name}`),
        !this.isConst &&
          e.$$.ptrType.isConst &&
          xt(
            `Cannot convert argument of type ${
              e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name
            } to parameter type ${this.name}`
          )
      var r = e.$$.ptrType.registeredClass
      if (((n = zt(e.$$.ptr, r, this.registeredClass)), this.isSmartPointer))
        switch (
          (void 0 === e.$$.smartPtr && xt("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy)
        ) {
          case 0:
            e.$$.smartPtrType === this
              ? (n = e.$$.smartPtr)
              : xt(
                  `Cannot convert argument of type ${
                    e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name
                  } to parameter type ${this.name}`
                )
            break
          case 1:
            n = e.$$.smartPtr
            break
          case 2:
            if (e.$$.smartPtrType === this) n = e.$$.smartPtr
            else {
              var o = e.clone()
              ;(n = this.rawShare(
                n,
                ce.toHandle(function () {
                  o.delete()
                })
              )),
                null !== t && t.push(this.rawDestructor, n)
            }
            break
          default:
            xt("Unsupporting sharing policy")
        }
      return n
    }
    function Nt(t, e) {
      if (null === e) return this.isReference && xt(`null is not a valid ${this.name}`), 0
      e.$$ || xt(`Cannot pass "${le(e)}" as a ${this.name}`),
        e.$$.ptr || xt(`Cannot pass deleted object as a pointer of type ${this.name}`),
        e.$$.ptrType.isConst &&
          xt(`Cannot convert argument of type ${e.$$.ptrType.name} to parameter type ${this.name}`)
      var n = e.$$.ptrType.registeredClass
      return zt(e.$$.ptr, n, this.registeredClass)
    }
    function Qt(t) {
      return this.fromWireType(Y[t >> 2])
    }
    function Xt(t, e, n, r, o, a, i, s, u, c, l) {
      ;(this.name = t),
        (this.registeredClass = e),
        (this.isReference = n),
        (this.isConst = r),
        (this.isSmartPointer = o),
        (this.pointeeType = a),
        (this.sharingPolicy = i),
        (this.rawGetPointee = s),
        (this.rawConstructor = u),
        (this.rawShare = c),
        (this.rawDestructor = l),
        o || void 0 !== e.baseClass
          ? (this.toWireType = Vt)
          : r
          ? ((this.toWireType = Yt), (this.destructorFunction = null))
          : ((this.toWireType = Nt), (this.destructorFunction = null))
    }
    var Jt = []
    function Kt(t) {
      var e = Jt[t]
      return e || (t >= Jt.length && (Jt.length = t + 1), (Jt[t] = e = X.get(t))), e
    }
    function te(t, e) {
      var n,
        r,
        o,
        a = (t = At(t)).includes("j")
          ? ((n = t),
            (r = e),
            (o = []),
            function () {
              return (
                (o.length = 0),
                Object.assign(o, arguments),
                (function (t, e, n) {
                  return t.includes("j")
                    ? (function (t, e, n) {
                        var r = F["dynCall_" + t]
                        return n && n.length ? r.apply(null, [e].concat(n)) : r.call(null, e)
                      })(t, e, n)
                    : Kt(e).apply(null, n)
                })(n, r, o)
              )
            })
          : Kt(e)
      return "function" != typeof a && xt(`unknown function pointer with signature ${t}: ${e}`), a
    }
    var ee = void 0
    function ne(t) {
      var e = $e(t),
        n = At(e)
      return Pe(e), n
    }
    function re(t, e) {
      var n = [],
        r = {}
      throw (
        (e.forEach(function t(e) {
          r[e] || vt[e] || (yt[e] ? yt[e].forEach(t) : (n.push(e), (r[e] = !0)))
        }),
        new ee(`${t}: ` + n.map(ne).join([", "])))
      )
    }
    function oe(t, e) {
      for (var n = [], r = 0; r < t; r++) n.push(V[(e + 4 * r) >> 2])
      return n
    }
    function ae(t) {
      for (; t.length; ) {
        var e = t.pop()
        t.pop()(e)
      }
    }
    function ie(t, e, n, r, o, a) {
      var i = e.length
      i < 2 && xt("argTypes array size mismatch! Must at least get return value and 'this' types!")
      for (var s = null !== e[1] && null !== n, u = !1, c = 1; c < e.length; ++c)
        if (null !== e[c] && void 0 === e[c].destructorFunction) {
          u = !0
          break
        }
      var l = "void" !== e[0].name,
        p = "",
        d = ""
      for (c = 0; c < i - 2; ++c)
        (p += (0 !== c ? ", " : "") + "arg" + c), (d += (0 !== c ? ", " : "") + "arg" + c + "Wired")
      var f = `\n        return function ${Bt(t)}(${p}) {\n        if (arguments.length !== ${
        i - 2
      }) {\n          throwBindingError('function ${t} called with ${arguments.length} arguments, expected ${
        i - 2
      } args!');\n        }`
      u && (f += "var destructors = [];\n")
      var h = u ? "destructors" : "null",
        m = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
        A = [xt, r, o, ae, e[0], e[1]]
      for (s && (f += "var thisWired = classParam.toWireType(" + h + ", this);\n"), c = 0; c < i - 2; ++c)
        (f +=
          "var arg" + c + "Wired = argType" + c + ".toWireType(" + h + ", arg" + c + "); // " + e[c + 2].name + "\n"),
          m.push("argType" + c),
          A.push(e[c + 2])
      if (
        (s && (d = "thisWired" + (d.length > 0 ? ", " : "") + d),
        (f += (l || a ? "var rv = " : "") + "invoker(fn" + (d.length > 0 ? ", " : "") + d + ");\n"),
        u)
      )
        f += "runDestructors(destructors);\n"
      else
        for (c = s ? 1 : 2; c < e.length; ++c) {
          var g = 1 === c ? "thisWired" : "arg" + (c - 2) + "Wired"
          null !== e[c].destructorFunction &&
            ((f += g + "_dtor(" + g + "); // " + e[c].name + "\n"),
            m.push(g + "_dtor"),
            A.push(e[c].destructorFunction))
        }
      return (
        l && (f += "var ret = retType.fromWireType(rv);\nreturn ret;\n"),
        (f += "}\n"),
        m.push(f),
        (function (t, e) {
          if (!(t instanceof Function))
            throw new TypeError(`new_ called with constructor type ${typeof t} which is not a function`)
          var n = Et(t.name || "unknownFunctionName", function () {})
          n.prototype = t.prototype
          var r = new n(),
            o = t.apply(r, e)
          return o instanceof Object ? o : r
        })(Function, m).apply(null, A)
      )
    }
    var se = new (function () {
      ;(this.allocated = [void 0]),
        (this.freelist = []),
        (this.get = function (t) {
          return this.allocated[t]
        }),
        (this.has = function (t) {
          return void 0 !== this.allocated[t]
        }),
        (this.allocate = function (t) {
          var e = this.freelist.pop() || this.allocated.length
          return (this.allocated[e] = t), e
        }),
        (this.free = function (t) {
          ;(this.allocated[t] = void 0), this.freelist.push(t)
        })
    })()
    function ue(t) {
      t >= se.reserved && 0 == --se.get(t).refcount && se.free(t)
    }
    var ce = {
      toValue: t => (t || xt("Cannot use deleted val. handle = " + t), se.get(t).value),
      toHandle: t => {
        switch (t) {
          case void 0:
            return 1
          case null:
            return 2
          case !0:
            return 3
          case !1:
            return 4
          default:
            return se.allocate({ refcount: 1, value: t })
        }
      },
    }
    function le(t) {
      if (null === t) return "null"
      var e = typeof t
      return "object" === e || "array" === e || "function" === e ? t.toString() : "" + t
    }
    function pe(t, e) {
      switch (e) {
        case 2:
          return function (t) {
            return this.fromWireType(N[t >> 2])
          }
        case 3:
          return function (t) {
            return this.fromWireType(Q[t >> 3])
          }
        default:
          throw new TypeError("Unknown float type: " + t)
      }
    }
    function de(t, e, n) {
      switch (e) {
        case 0:
          return n
            ? function (t) {
                return M[t]
              }
            : function (t) {
                return H[t]
              }
        case 1:
          return n
            ? function (t) {
                return Z[t >> 1]
              }
            : function (t) {
                return z[t >> 1]
              }
        case 2:
          return n
            ? function (t) {
                return Y[t >> 2]
              }
            : function (t) {
                return V[t >> 2]
              }
        default:
          throw new TypeError("Unknown integer type: " + t)
      }
    }
    var fe = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0
    var he = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0
    function me(t, e) {
      for (var n = t, r = n >> 1, o = r + e / 2; !(r >= o) && z[r]; ) ++r
      if ((n = r << 1) - t > 32 && he) return he.decode(H.subarray(t, n))
      for (var a = "", i = 0; !(i >= e / 2); ++i) {
        var s = Z[(t + 2 * i) >> 1]
        if (0 == s) break
        a += String.fromCharCode(s)
      }
      return a
    }
    function Ae(t, e, n) {
      if ((void 0 === n && (n = 2147483647), n < 2)) return 0
      for (var r = e, o = (n -= 2) < 2 * t.length ? n / 2 : t.length, a = 0; a < o; ++a) {
        var i = t.charCodeAt(a)
        ;(Z[e >> 1] = i), (e += 2)
      }
      return (Z[e >> 1] = 0), e - r
    }
    function ge(t) {
      return 2 * t.length
    }
    function ve(t, e) {
      for (var n = 0, r = ""; !(n >= e / 4); ) {
        var o = Y[(t + 4 * n) >> 2]
        if (0 == o) break
        if ((++n, o >= 65536)) {
          var a = o - 65536
          r += String.fromCharCode(55296 | (a >> 10), 56320 | (1023 & a))
        } else r += String.fromCharCode(o)
      }
      return r
    }
    function ye(t, e, n) {
      if ((void 0 === n && (n = 2147483647), n < 4)) return 0
      for (var r = e, o = r + n - 4, a = 0; a < t.length; ++a) {
        var i = t.charCodeAt(a)
        if (
          (i >= 55296 && i <= 57343 && (i = (65536 + ((1023 & i) << 10)) | (1023 & t.charCodeAt(++a))),
          (Y[e >> 2] = i),
          (e += 4) + 4 > o)
        )
          break
      }
      return (Y[e >> 2] = 0), e - r
    }
    function Ce(t) {
      for (var e = 0, n = 0; n < t.length; ++n) {
        var r = t.charCodeAt(n)
        r >= 55296 && r <= 57343 && ++n, (e += 4)
      }
      return e
    }
    function be(t) {
      var e = (t - G.buffer.byteLength + 65535) >>> 16
      try {
        return G.grow(e), K(), 1
      } catch (t) {}
    }
    function Be(t) {
      return (Be = (function () {
        if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues)
          return t => crypto.getRandomValues(t)
        it("initRandomDevice")
      })())(t)
    }
    !(function () {
      for (var t = new Array(256), e = 0; e < 256; ++e) t[e] = String.fromCharCode(e)
      mt = t
    })(),
      ($t = F.BindingError = wt(Error, "BindingError")),
      (Pt = F.InternalError = wt(Error, "InternalError")),
      (Mt.prototype.isAliasOf = function (t) {
        if (!(this instanceof Mt)) return !1
        if (!(t instanceof Mt)) return !1
        for (
          var e = this.$$.ptrType.registeredClass, n = this.$$.ptr, r = t.$$.ptrType.registeredClass, o = t.$$.ptr;
          e.baseClass;

        )
          (n = e.upcast(n)), (e = e.baseClass)
        for (; r.baseClass; ) (o = r.upcast(o)), (r = r.baseClass)
        return e === r && n === o
      }),
      (Mt.prototype.clone = function () {
        if ((this.$$.ptr || Rt(this), this.$$.preservePointerOnDelete)) return (this.$$.count.value += 1), this
        var t,
          e = Lt(
            Object.create(Object.getPrototypeOf(this), {
              $$: {
                value:
                  ((t = this.$$),
                  {
                    count: t.count,
                    deleteScheduled: t.deleteScheduled,
                    preservePointerOnDelete: t.preservePointerOnDelete,
                    ptr: t.ptr,
                    ptrType: t.ptrType,
                    smartPtr: t.smartPtr,
                    smartPtrType: t.smartPtrType,
                  }),
              },
            })
          )
        return (e.$$.count.value += 1), (e.$$.deleteScheduled = !1), e
      }),
      (Mt.prototype.delete = function () {
        this.$$.ptr || Rt(this),
          this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && xt("Object already scheduled for deletion"),
          Ot(this),
          _t(this.$$),
          this.$$.preservePointerOnDelete || ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0))
      }),
      (Mt.prototype.isDeleted = function () {
        return !this.$$.ptr
      }),
      (Mt.prototype.deleteLater = function () {
        return (
          this.$$.ptr || Rt(this),
          this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && xt("Object already scheduled for deletion"),
          Ft.push(this),
          1 === Ft.length && Dt && Dt(Ut),
          (this.$$.deleteScheduled = !0),
          this
        )
      }),
      (F.getInheritedInstanceCount = function () {
        return Object.keys(qt).length
      }),
      (F.getLiveInheritedInstances = function () {
        var t = []
        for (var e in qt) qt.hasOwnProperty(e) && t.push(qt[e])
        return t
      }),
      (F.flushPendingDeletes = Ut),
      (F.setDelayFunction = function (t) {
        ;(Dt = t), Ft.length && Dt && Dt(Ut)
      }),
      (Xt.prototype.getPointee = function (t) {
        return this.rawGetPointee && (t = this.rawGetPointee(t)), t
      }),
      (Xt.prototype.destructor = function (t) {
        this.rawDestructor && this.rawDestructor(t)
      }),
      (Xt.prototype.argPackAdvance = 8),
      (Xt.prototype.readValueFromPointer = Qt),
      (Xt.prototype.deleteObject = function (t) {
        null !== t && t.delete()
      }),
      (Xt.prototype.fromWireType = function (t) {
        var e = this.getPointee(t)
        if (!e) return this.destructor(t), null
        var n = (function (t, e) {
          return (
            (e = (function (t, e) {
              for (void 0 === e && xt("ptr should not be undefined"); t.baseClass; )
                (e = t.upcast(e)), (t = t.baseClass)
              return e
            })(t, e)),
            qt[e]
          )
        })(this.registeredClass, e)
        if (void 0 !== n) {
          if (0 === n.$$.count.value) return (n.$$.ptr = e), (n.$$.smartPtr = t), n.clone()
          var r = n.clone()
          return this.destructor(t), r
        }
        function o() {
          return this.isSmartPointer
            ? Gt(this.registeredClass.instancePrototype, {
                ptrType: this.pointeeType,
                ptr: e,
                smartPtrType: this,
                smartPtr: t,
              })
            : Gt(this.registeredClass.instancePrototype, { ptrType: this, ptr: t })
        }
        var a,
          i = this.registeredClass.getActualType(e),
          s = Wt[i]
        if (!s) return o.call(this)
        a = this.isConst ? s.constPointerType : s.pointerType
        var u = jt(e, this.registeredClass, a.registeredClass)
        return null === u
          ? o.call(this)
          : this.isSmartPointer
          ? Gt(a.registeredClass.instancePrototype, { ptrType: a, ptr: u, smartPtrType: this, smartPtr: t })
          : Gt(a.registeredClass.instancePrototype, { ptrType: a, ptr: u })
      }),
      (ee = F.UnboundTypeError = wt(Error, "UnboundTypeError")),
      se.allocated.push({ value: void 0 }, { value: null }, { value: !0 }, { value: !1 }),
      (se.reserved = se.allocated.length),
      (F.count_emval_handles = function () {
        for (var t = 0, e = se.reserved; e < se.allocated.length; ++e) void 0 !== se.allocated[e] && ++t
        return t
      })
    var Ee,
      we = {
        g: function (t, e, n) {
          throw (new ft(t).init(e, n), t)
        },
        p: function (t, e, n, r, o) {},
        l: function (t, e, n, r, o) {
          var a = ht(n)
          St(t, {
            name: (e = At(e)),
            fromWireType: function (t) {
              return !!t
            },
            toWireType: function (t, e) {
              return e ? r : o
            },
            argPackAdvance: 8,
            readValueFromPointer: function (t) {
              var r
              if (1 === n) r = M
              else if (2 === n) r = Z
              else {
                if (4 !== n) throw new TypeError("Unknown boolean type size: " + e)
                r = Y
              }
              return this.fromWireType(r[t >> a])
            },
            destructorFunction: null,
          })
        },
        f: function (t, e, n, r, o, a, i, s, u, c, l, p, d) {
          ;(l = At(l)), (a = te(o, a)), s && (s = te(i, s)), c && (c = te(u, c)), (d = te(p, d))
          var f = Bt(l)
          !(function (t, e, n) {
            F.hasOwnProperty(t)
              ? (xt(`Cannot register public name '${t}' twice`),
                Ht(F, t, t),
                F.hasOwnProperty(n) &&
                  xt("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"),
                (F[t].overloadTable[void 0] = e))
              : (F[t] = e)
          })(f, function () {
            re(`Cannot construct ${l} due to unbound types`, [r])
          }),
            Tt([t, e, n], r ? [r] : [], function (e) {
              var n, o
              ;(e = e[0]), (o = r ? (n = e.registeredClass).instancePrototype : Mt.prototype)
              var i = Et(f, function () {
                  if (Object.getPrototypeOf(this) !== u) throw new $t("Use 'new' to construct " + l)
                  if (void 0 === p.constructor_body) throw new $t(l + " has no accessible constructor")
                  var t = p.constructor_body[arguments.length]
                  if (void 0 === t)
                    throw new $t(
                      `Tried to invoke ctor of ${l} with invalid number of parameters (${
                        arguments.length
                      }) - expected (${Object.keys(p.constructor_body).toString()}) parameters instead!`
                    )
                  return t.apply(this, arguments)
                }),
                u = Object.create(o, { constructor: { value: i } })
              i.prototype = u
              var p = new Zt(l, i, u, d, n, a, s, c)
              p.baseClass &&
                (void 0 === p.baseClass.__derivedClasses && (p.baseClass.__derivedClasses = []),
                p.baseClass.__derivedClasses.push(p))
              var h = new Xt(l, p, !0, !1, !1),
                m = new Xt(l + "*", p, !1, !1, !1),
                A = new Xt(l + " const*", p, !1, !0, !1)
              return (
                (Wt[t] = { pointerType: m, constPointerType: A }),
                (function (t, e, n) {
                  F.hasOwnProperty(t) || kt("Replacing nonexistant public symbol"),
                    F[t].overloadTable,
                    (F[t] = e),
                    (F[t].argCount = n)
                })(f, i),
                [h, m, A]
              )
            })
        },
        e: function (t, e, n, r, o, a) {
          e > 0 || it(undefined)
          var i = oe(e, n)
          ;(o = te(r, o)),
            Tt([], [t], function (t) {
              var n = `constructor ${(t = t[0]).name}`
              if (
                (void 0 === t.registeredClass.constructor_body && (t.registeredClass.constructor_body = []),
                void 0 !== t.registeredClass.constructor_body[e - 1])
              )
                throw new $t(
                  `Cannot register multiple constructors with identical number of parameters (${e - 1}) for class '${
                    t.name
                  }'! Overload resolution is currently only performed using the parameter count, not actual type info!`
                )
              return (
                (t.registeredClass.constructor_body[e - 1] = () => {
                  re(`Cannot construct ${t.name} due to unbound types`, i)
                }),
                Tt([], i, function (r) {
                  return r.splice(1, 0, null), (t.registeredClass.constructor_body[e - 1] = ie(n, r, null, o, a)), []
                }),
                []
              )
            })
        },
        a: function (t, e, n, r, o, a, i, s, u) {
          var c = oe(n, r)
          ;(e = At(e)),
            (a = te(o, a)),
            Tt([], [t], function (t) {
              var r = `${(t = t[0]).name}.${e}`
              function o() {
                re(`Cannot call ${r} due to unbound types`, c)
              }
              e.startsWith("@@") && (e = Symbol[e.substring(2)]), s && t.registeredClass.pureVirtualFunctions.push(e)
              var l = t.registeredClass.instancePrototype,
                p = l[e]
              return (
                void 0 === p || (void 0 === p.overloadTable && p.className !== t.name && p.argCount === n - 2)
                  ? ((o.argCount = n - 2), (o.className = t.name), (l[e] = o))
                  : (Ht(l, e, r), (l[e].overloadTable[n - 2] = o)),
                Tt([], c, function (o) {
                  var s = ie(r, o, t, a, i, u)
                  return (
                    void 0 === l[e].overloadTable
                      ? ((s.argCount = n - 2), (l[e] = s))
                      : (l[e].overloadTable[n - 2] = s),
                    []
                  )
                }),
                []
              )
            })
        },
        t: function (t, e) {
          St(t, {
            name: (e = At(e)),
            fromWireType: function (t) {
              var e = ce.toValue(t)
              return ue(t), e
            },
            toWireType: function (t, e) {
              return ce.toHandle(e)
            },
            argPackAdvance: 8,
            readValueFromPointer: Qt,
            destructorFunction: null,
          })
        },
        k: function (t, e, n) {
          var r = ht(n)
          St(t, {
            name: (e = At(e)),
            fromWireType: function (t) {
              return t
            },
            toWireType: function (t, e) {
              return e
            },
            argPackAdvance: 8,
            readValueFromPointer: pe(e, r),
            destructorFunction: null,
          })
        },
        c: function (t, e, n, r, o) {
          ;(e = At(e)), -1 === o && (o = 4294967295)
          var a = ht(n),
            i = t => t
          if (0 === r) {
            var s = 32 - 8 * n
            i = t => (t << s) >>> s
          }
          var u = e.includes("unsigned")
          St(t, {
            name: e,
            fromWireType: i,
            toWireType: u
              ? function (t, e) {
                  return this.name, e >>> 0
                }
              : function (t, e) {
                  return this.name, e
                },
            argPackAdvance: 8,
            readValueFromPointer: de(e, a, 0 !== r),
            destructorFunction: null,
          })
        },
        b: function (t, e, n) {
          var r = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][
            e
          ]
          function o(t) {
            var e = V,
              n = e[(t >>= 2)],
              o = e[t + 1]
            return new r(e.buffer, o, n)
          }
          St(
            t,
            { name: (n = At(n)), fromWireType: o, argPackAdvance: 8, readValueFromPointer: o },
            { ignoreDuplicateRegistrations: !0 }
          )
        },
        j: function (t, e) {
          var n = "std::string" === (e = At(e))
          St(t, {
            name: e,
            fromWireType: function (t) {
              var e,
                r,
                o,
                a = V[t >> 2],
                i = t + 4
              if (n)
                for (var s = i, u = 0; u <= a; ++u) {
                  var c = i + u
                  if (u == a || 0 == H[c]) {
                    var l =
                      ((o = c - s),
                      (r = s)
                        ? (function (t, e, n) {
                            for (var r = e + n, o = e; t[o] && !(o >= r); ) ++o
                            if (o - e > 16 && t.buffer && fe) return fe.decode(t.subarray(e, o))
                            for (var a = ""; e < o; ) {
                              var i = t[e++]
                              if (128 & i) {
                                var s = 63 & t[e++]
                                if (192 != (224 & i)) {
                                  var u = 63 & t[e++]
                                  if (
                                    (i =
                                      224 == (240 & i)
                                        ? ((15 & i) << 12) | (s << 6) | u
                                        : ((7 & i) << 18) | (s << 12) | (u << 6) | (63 & t[e++])) < 65536
                                  )
                                    a += String.fromCharCode(i)
                                  else {
                                    var c = i - 65536
                                    a += String.fromCharCode(55296 | (c >> 10), 56320 | (1023 & c))
                                  }
                                } else a += String.fromCharCode(((31 & i) << 6) | s)
                              } else a += String.fromCharCode(i)
                            }
                            return a
                          })(H, r, o)
                        : "")
                    void 0 === e ? (e = l) : ((e += String.fromCharCode(0)), (e += l)), (s = c + 1)
                  }
                }
              else {
                var p = new Array(a)
                for (u = 0; u < a; ++u) p[u] = String.fromCharCode(H[i + u])
                e = p.join("")
              }
              return Pe(t), e
            },
            toWireType: function (t, e) {
              var r
              e instanceof ArrayBuffer && (e = new Uint8Array(e))
              var o = "string" == typeof e
              o ||
                e instanceof Uint8Array ||
                e instanceof Uint8ClampedArray ||
                e instanceof Int8Array ||
                xt("Cannot pass non-string to std::string"),
                (r =
                  n && o
                    ? (function (t) {
                        for (var e = 0, n = 0; n < t.length; ++n) {
                          var r = t.charCodeAt(n)
                          r <= 127 ? e++ : r <= 2047 ? (e += 2) : r >= 55296 && r <= 57343 ? ((e += 4), ++n) : (e += 3)
                        }
                        return e
                      })(e)
                    : e.length)
              var a = xe(4 + r + 1),
                i = a + 4
              if (((V[a >> 2] = r), n && o))
                !(function (t, e, n, r) {
                  if (!(r > 0)) return 0
                  for (var o = n + r - 1, a = 0; a < t.length; ++a) {
                    var i = t.charCodeAt(a)
                    if (
                      (i >= 55296 && i <= 57343 && (i = (65536 + ((1023 & i) << 10)) | (1023 & t.charCodeAt(++a))),
                      i <= 127)
                    ) {
                      if (n >= o) break
                      e[n++] = i
                    } else if (i <= 2047) {
                      if (n + 1 >= o) break
                      ;(e[n++] = 192 | (i >> 6)), (e[n++] = 128 | (63 & i))
                    } else if (i <= 65535) {
                      if (n + 2 >= o) break
                      ;(e[n++] = 224 | (i >> 12)), (e[n++] = 128 | ((i >> 6) & 63)), (e[n++] = 128 | (63 & i))
                    } else {
                      if (n + 3 >= o) break
                      ;(e[n++] = 240 | (i >> 18)),
                        (e[n++] = 128 | ((i >> 12) & 63)),
                        (e[n++] = 128 | ((i >> 6) & 63)),
                        (e[n++] = 128 | (63 & i))
                    }
                  }
                  e[n] = 0
                })(e, H, i, r + 1)
              else if (o)
                for (var s = 0; s < r; ++s) {
                  var u = e.charCodeAt(s)
                  u > 255 && (Pe(i), xt("String has UTF-16 code units that do not fit in 8 bits")), (H[i + s] = u)
                }
              else for (s = 0; s < r; ++s) H[i + s] = e[s]
              return null !== t && t.push(Pe, a), a
            },
            argPackAdvance: 8,
            readValueFromPointer: Qt,
            destructorFunction: function (t) {
              Pe(t)
            },
          })
        },
        d: function (t, e, n) {
          var r, o, a, i, s
          ;(n = At(n)),
            2 === e
              ? ((r = me), (o = Ae), (i = ge), (a = () => z), (s = 1))
              : 4 === e && ((r = ve), (o = ye), (i = Ce), (a = () => V), (s = 2)),
            St(t, {
              name: n,
              fromWireType: function (t) {
                for (var n, o = V[t >> 2], i = a(), u = t + 4, c = 0; c <= o; ++c) {
                  var l = t + 4 + c * e
                  if (c == o || 0 == i[l >> s]) {
                    var p = r(u, l - u)
                    void 0 === n ? (n = p) : ((n += String.fromCharCode(0)), (n += p)), (u = l + e)
                  }
                }
                return Pe(t), n
              },
              toWireType: function (t, r) {
                "string" != typeof r && xt(`Cannot pass non-string to C++ string type ${n}`)
                var a = i(r),
                  u = xe(4 + a + e)
                return (V[u >> 2] = a >> s), o(r, u + 4, a + e), null !== t && t.push(Pe, u), u
              },
              argPackAdvance: 8,
              readValueFromPointer: Qt,
              destructorFunction: function (t) {
                Pe(t)
              },
            })
        },
        m: function (t, e) {
          St(t, {
            isVoid: !0,
            name: (e = At(e)),
            argPackAdvance: 0,
            fromWireType: function () {},
            toWireType: function (t, e) {},
          })
        },
        n: ue,
        o: function (t) {
          t > 4 && (se.get(t).refcount += 1)
        },
        h: function (t, e) {
          var n, r
          void 0 === (r = vt[(n = t)]) && xt("_emval_take_value has unknown type " + ne(n))
          var o = (t = r).readValueFromPointer(e)
          return ce.toHandle(o)
        },
        i: function () {
          it("")
        },
        s: function (t, e, n) {
          H.copyWithin(t, e, e + n)
        },
        r: function (t) {
          var e = H.length,
            n = 2147483648
          if ((t >>>= 0) > n) return !1
          for (var r, o = 1; o <= 4; o *= 2) {
            var a = e * (1 + 0.2 / o)
            if (
              ((a = Math.min(a, t + 100663296)),
              be(Math.min(n, (r = Math.max(t, a)) + ((65536 - (r % 65536)) % 65536))))
            )
              return !0
          }
          return !1
        },
        q: function (t, e) {
          return Be(H.subarray(t, t + e)), 0
        },
      },
      $e =
        ((function () {
          var t,
            e,
            n,
            r = { a: we }
          function o(t, e) {
            var n,
              r = t.exports
            return (
              (F.asm = r),
              (G = F.asm.u),
              K(),
              (X = F.asm.w),
              (n = F.asm.v),
              et.unshift(n),
              (function (t) {
                if (
                  (rt--,
                  F.monitorRunDependencies && F.monitorRunDependencies(rt),
                  0 == rt && (null !== ot && (clearInterval(ot), (ot = null)), at))
                ) {
                  var e = at
                  ;(at = null), e()
                }
              })(),
              r
            )
          }
          if ((rt++, F.monitorRunDependencies && F.monitorRunDependencies(rt), F.instantiateWasm))
            try {
              return F.instantiateWasm(r, o)
            } catch (t) {
              return L("Module.instantiateWasm callback failed with error: " + t), !1
            }
          ;(t = st),
            (e = r),
            (n = function (t) {
              o(t.instance)
            }),
            q || "function" != typeof WebAssembly.instantiateStreaming || ct(t) || "function" != typeof fetch
              ? pt(t, e, n)
              : fetch(t, { credentials: "same-origin" }).then(r =>
                  WebAssembly.instantiateStreaming(r, e).then(n, function (r) {
                    return (
                      L("wasm streaming compile failed: " + r),
                      L("falling back to ArrayBuffer instantiation"),
                      pt(t, e, n)
                    )
                  })
                )
        })(),
        function () {
          return ($e = F.asm.x).apply(null, arguments)
        }),
      xe =
        ((F.__embind_initialize_bindings = function () {
          return (F.__embind_initialize_bindings = F.asm.y).apply(null, arguments)
        }),
        function () {
          return (xe = F.asm.z).apply(null, arguments)
        }),
      Pe = function () {
        return (Pe = F.asm.A).apply(null, arguments)
      },
      ke = function () {
        return (ke = F.asm.B).apply(null, arguments)
      }
    function Te() {
      function t() {
        Ee ||
          ((Ee = !0),
          (F.calledRun = !0),
          J ||
            (dt(et),
            F.onRuntimeInitialized && F.onRuntimeInitialized(),
            (function () {
              if (F.postRun)
                for ("function" == typeof F.postRun && (F.postRun = [F.postRun]); F.postRun.length; )
                  (t = F.postRun.shift()), nt.unshift(t)
              var t
              dt(nt)
            })()))
      }
      rt > 0 ||
        ((function () {
          if (F.preRun)
            for ("function" == typeof F.preRun && (F.preRun = [F.preRun]); F.preRun.length; )
              (t = F.preRun.shift()), tt.unshift(t)
          var t
          dt(tt)
        })(),
        rt > 0 ||
          (F.setStatus
            ? (F.setStatus("Running..."),
              setTimeout(function () {
                setTimeout(function () {
                  F.setStatus("")
                }, 1),
                  t()
              }, 1))
            : t()))
    }
    if (
      ((at = function t() {
        Ee || Te(), Ee || (at = t)
      }),
      F.preInit)
    )
      for ("function" == typeof F.preInit && (F.preInit = [F.preInit]); F.preInit.length > 0; ) F.preInit.pop()()
    Te()
    const Se = n.p + "819f444fda995193e9bc97860ee43890.mp3",
      Re = n.p + "d735670017a3489d654560cd2d3e1f5e.mp3",
      Ie = new Audio(Se),
      Oe = new Audio(Re)
    ;(Ie.preload = "auto"),
      (Oe.preload = "auto"),
      (Ie.loop = !0),
      (Ie.volume = 0.1),
      (Oe.volume = 0.1),
      (F.onRuntimeInitialized = async function () {
        let t = new F.Game()
        ;(t.lastTick = Date.now()),
          (t.gameLoop = function () {
            let t = Date.now()
            t - this.lastTick >= this.getDropInterval() &&
              !this.getGamePaused() &&
              (this.update(), (this.lastTick = t)),
              P(this),
              this.getGameOver()
                ? ((function (t) {
                    t.getScore() > x && ((x = t.getScore()), localStorage.setItem("highScore", x))
                  })(this),
                  Ie.pause(),
                  Oe.play(),
                  A.displayGameOverPage(this))
                : requestAnimationFrame(this.gameLoop.bind(this))
          }.bind(t)),
          (t => {
            const e = document.getElementById("projectContainer")
            document.addEventListener("keypress", function (e) {
              "KeyZ" === e.code && t.rotateTetromino(-1)
            }),
              document.addEventListener("keydown", function (e) {
                switch (e.code) {
                  case "ArrowLeft":
                    t.moveTetromino(0)
                    break
                  case "ArrowRight":
                    t.moveTetromino(1)
                    break
                  case "ArrowDown":
                    t.moveTetromino(2)
                    break
                  case "Space":
                    t.moveTetromino(3)
                    break
                  case "Escape":
                    if (document.getElementById("startGameContainer") || document.getElementById("gameOverContainer"))
                      return
                    document.getElementById("pauseGameContainer")
                      ? document.getElementById("pauseGameContainer") &&
                        (t.resumeGame(), Ie.play(), document.getElementById("pauseGameContainer").remove())
                      : (t.pauseGame(), Ie.pause(), A.displayPausePage())
                }
              }),
              e.addEventListener("click", e => {
                "playButton" == e.target.id &&
                  (t.resumeGame(),
                  t.gameLoop(),
                  document.getElementById("startGameContainer").remove(),
                  document.getElementById("helpBox").remove(),
                  (Ie.oncanplaythrough = function () {
                    Ie.play().catch(function (t) {
                      console.error("Failed to play audio:", t)
                    })
                  }),
                  (Ie.currentTime = 0)),
                  "playAgainButton" == e.target.id &&
                    (t.restartGame(),
                    document.getElementById("gameOverContainer").remove(),
                    (Ie.currentTime = 0),
                    Ie.play(),
                    t.gameLoop()),
                  "quitButton" === e.target.id &&
                    (document.getElementById("gameOverContainer").remove(),
                    A.displayStartPage(),
                    A.displayHelpBox(),
                    t.restartGame(),
                    t.pauseGame(),
                    P(t)),
                  "resumeButton" == e.target.id &&
                    (t.resumeGame(), document.getElementById("pauseGameContainer").remove(), Ie.play())
              })
            const n = document.getElementById("muteButton")
            n.addEventListener("click", t => {
              ;("muteButton" === t.target.id || t.target.classList.contains("muteClickable")) &&
                (A.toggleMuteButton(), n.blur())
            })
          })(t),
          P(t),
          A.displayStartComponents()
      })
  })()
})()
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLd2lCLGNBQ0x4aUIsRUFBS3FpQixZQUNMbGdCLEVBQUtuQyxJQUVZLGdCQUFmMUUsRUFBRVIsT0FBT2pFLEtBQ1htSixFQUFLb2lCLGFBQ0xwbkIsU0FBUzhFLGVBQWUsc0JBQXNCMUYsU0FDOUN5RyxHQUFZK2dCLE9BQ2QsSUFHRixNQUFNOWdCLEVBQWE5RixTQUFTOEUsZUFBZSxjQUMzQ2dCLEVBQVdpaEIsaUJBQWlCLFNBQVN6bUIsS0FDZixlQUFoQkEsRUFBRVIsT0FBT2pFLElBQXVCeUUsRUFBRVIsT0FBTzhFLFVBQVVvQixTQUFTLG9CQUM5RGxDLEVBQVc4QixtQkFDWEUsRUFBVzJoQixPQUNiLEdBQ0QsRUQzQ0RDLENBQVcxaUIsR0FDWG1DLEVBQUtuQyxHQUNMbEIsRUFBV3FDLHdCQUNiLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXNtX3RldHJpcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dhc21fdGV0cmlzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dhc21fdGV0cmlzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy8uL3NyYy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vc3JjL2RyYXcuanMiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvLi9zcmMvdGV0cmlzLmpzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vYXNzZXRzL1RldHJpcy5tcDMiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvLi9hc3NldHMvMTguIEdhbWUgT3Zlci5tcDMiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vc3JjL2V2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByZXNzK1N0YXJ0KzJQJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4jcHJvamVjdENvbnRhaW5lciA+ICoge1xuICBmb250LWZhbWlseTogXCJQcmVzcyBTdGFydCAyUFwiLCBjdXJzaXZlO1xufVxuXG4jcHJvamVjdENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwZHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jZ2l0TGluayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBhcXVhbWFyaW5lO1xuICBjb2xvcjogYXF1YW1hcmluZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuI3N1YkNvbnRhaW5lciB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jbXV0ZUJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCBhcXVhbWFyaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG59XG4jbXV0ZUJ1dHRvbiBzdmcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4jaGVscEJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MCU7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygxMDAlICsgMTBweCkpO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB3aWR0aDogMzAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYXF1YW1hcmluZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaGVscFJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbn1cbi5oZWxwUm93IHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbmV4dFBpZWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgOTVweCk7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGFxdWFtYXJpbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuI2Nvcm5lclBhdXNlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuXG4jc2NvcmVCb2FyZCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGFxdWFtYXJpbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYygtMTAwJSAtIDEwcHgpLCAzNSUpO1xufVxuXG4jZ2FtZU92ZXJDb250YWluZXIsXG4jc3RhcnRHYW1lQ29udGFpbmVyLFxuI3BhdXNlR2FtZUNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogNHB4IHNvbGlkIGFxdWFtYXJpbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDgxJTtcbn1cbiNzdGFydEdhbWVDb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuMTc1KTtcbn1cbiNnYW1lT3ZlckNvbnRhaW5lciB7XG4gIHdpZHRoOiA5OSU7XG59XG4jZ2FtZU92ZXJDb250YWluZXIgc3BhbjpudGgtY2hpbGQoMSkge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbiNwbGF5QnV0dG9uLFxuI3BsYXlBZ2FpbkJ1dHRvbixcbiNyZXN1bWVCdXR0b24sXG4jcXVpdEJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGFxdWFtYXJpbmU7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1mYW1pbHk6IFwiUHJlc3MgU3RhcnQgMlBcIiwgY3Vyc2l2ZTtcbn1cbiNwbGF5QWdhaW5CdXR0b24ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4jcGxheUJ1dHRvbjpob3ZlcixcbiNwbGF5QWdhaW5CdXR0b246aG92ZXIsXG4jcmVzdW1lQnV0dG9uOmhvdmVyLFxuI3F1aXRCdXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMTVweCkge1xuICAjaGVscEJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTI0cHg7XG4gICAgdG9wOiA3NyU7XG4gICAgcmlnaHQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1Isd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFdBQVc7RUFDWCw2Q0FBNkM7QUFDL0M7O0FBRUE7OztFQUdFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFVBQVU7QUFDWjtBQUNBO0VBQ0UsNENBQTRDO0FBQzlDO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7OztFQUlFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNDQUFzQztBQUN4QztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7Ozs7RUFJRSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixRQUFRO0lBQ1IsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QcmVzcytTdGFydCsyUCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuI3Byb2plY3RDb250YWluZXIgPiAqIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUHJlc3MgU3RhcnQgMlBcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG4jcHJvamVjdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDBkdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2dpdExpbmsge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgbGVmdDogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBhcXVhbWFyaW5lO1xcbiAgY29sb3I6IGFxdWFtYXJpbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jc3ViQ29udGFpbmVyIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNtdXRlQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgYXF1YW1hcmluZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxufVxcbiNtdXRlQnV0dG9uIHN2ZyB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuXFxuI2hlbHBCb3gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA2MCU7XFxuICByaWdodDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDEwMCUgKyAxMHB4KSk7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTZweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBhcXVhbWFyaW5lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uaGVscFJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbn1cXG4uaGVscFJvdyBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNuZXh0UGllY2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCA5NXB4KTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGFxdWFtYXJpbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiNjb3JuZXJQYXVzZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbiNzY29yZUJvYXJkIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGFxdWFtYXJpbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKC0xMDAlIC0gMTBweCksIDM1JSk7XFxufVxcblxcbiNnYW1lT3ZlckNvbnRhaW5lcixcXG4jc3RhcnRHYW1lQ29udGFpbmVyLFxcbiNwYXVzZUdhbWVDb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDRweCBzb2xpZCBhcXVhbWFyaW5lO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogODElO1xcbn1cXG4jc3RhcnRHYW1lQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyNTUsIDIxMiwgMC4xNzUpO1xcbn1cXG4jZ2FtZU92ZXJDb250YWluZXIge1xcbiAgd2lkdGg6IDk5JTtcXG59XFxuI2dhbWVPdmVyQ29udGFpbmVyIHNwYW46bnRoLWNoaWxkKDEpIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXlCdXR0b24sXFxuI3BsYXlBZ2FpbkJ1dHRvbixcXG4jcmVzdW1lQnV0dG9uLFxcbiNxdWl0QnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiAycHggc29saWQgYXF1YW1hcmluZTtcXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQcmVzcyBTdGFydCAyUFxcXCIsIGN1cnNpdmU7XFxufVxcbiNwbGF5QWdhaW5CdXR0b24ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4jcGxheUJ1dHRvbjpob3ZlcixcXG4jcGxheUFnYWluQnV0dG9uOmhvdmVyLFxcbiNyZXN1bWVCdXR0b246aG92ZXIsXFxuI3F1aXRCdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMTVweCkge1xcbiAgI2hlbHBCb3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTI0cHg7XFxuICAgIHRvcDogNzclO1xcbiAgICByaWdodDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgY29uc3QgY29tcG9uZW50cyA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGRpc3BsYXlHYW1lT3ZlclBhZ2UoZ2FtZSkge1xuICAgIGNvbnN0IGdhbWVPdmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IHNwYW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgY29uc3Qgc3BhblNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICBjb25zdCBzcGFuSGlnaFNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgY29uc3QgcXVpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBnYW1lT3ZlckNvbnRhaW5lci5pZCA9IFwiZ2FtZU92ZXJDb250YWluZXJcIlxuICAgIHBsYXlBZ2FpbkJ1dHRvbi5pZCA9IFwicGxheUFnYWluQnV0dG9uXCJcbiAgICBxdWl0QnV0dG9uLmlkID0gXCJxdWl0QnV0dG9uXCJcbiAgICBzcGFuVGl0bGUudGV4dENvbnRlbnQgPSBcIkdhbWUgT3ZlciFcIlxuICAgIHNwYW5TY29yZS50ZXh0Q29udGVudCA9IGBTY29yZTogJHtnYW1lLmdldFNjb3JlKCkudG9TdHJpbmcoKX1gXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaFNjb3JlXCIpICE9PSBudWxsKSB7XG4gICAgICBzcGFuSGlnaFNjb3JlLnRleHRDb250ZW50ID0gYEhpZ2ggU2NvcmU6ICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaWdoU2NvcmVcIil9YFxuICAgIH0gZWxzZSB7XG4gICAgICBzcGFuSGlnaFNjb3JlLnRleHRDb250ZW50ID0gYEhpZ2ggU2NvcmU6ICR7Z2FtZS5nZXRTY29yZSgpLnRvU3RyaW5nKCl9YFxuICAgIH1cbiAgICBwbGF5QWdhaW5CdXR0b24udGV4dENvbnRlbnQgPSBcIlBMQVkgQUdBSU5cIlxuICAgIHF1aXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlFVSVRcIlxuICAgIGdhbWVPdmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW5UaXRsZSlcbiAgICBnYW1lT3ZlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuU2NvcmUpXG4gICAgZ2FtZU92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhbkhpZ2hTY29yZSlcbiAgICBnYW1lT3ZlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5QWdhaW5CdXR0b24pXG4gICAgZ2FtZU92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocXVpdEJ1dHRvbilcbiAgICBzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJDb250YWluZXIpXG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5U3RhcnRQYWdlKCkge1xuICAgIGNvbnN0IHN0YXJ0R2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBzcGFuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgcGxheUJ1dHRvbi5pZCA9IFwicGxheUJ1dHRvblwiXG4gICAgc3RhcnRHYW1lQ29udGFpbmVyLmlkID0gXCJzdGFydEdhbWVDb250YWluZXJcIlxuICAgIHNwYW5UaXRsZS50ZXh0Q29udGVudCA9IFwiVEVUUklTXCJcbiAgICBwbGF5QnV0dG9uLnRleHRDb250ZW50ID0gXCJQTEFZXCJcbiAgICBzdGFydEdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhblRpdGxlKVxuICAgIHN0YXJ0R2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5QnV0dG9uKVxuICAgIHN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydEdhbWVDb250YWluZXIpXG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5UGF1c2VQYWdlKCkge1xuICAgIGNvbnN0IHBhdXNlR2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBzcGFuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgIGNvbnN0IHJlc3VtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJyZXN1bWVCdXR0b25cIilcbiAgICBwYXVzZUdhbWVDb250YWluZXIuaWQgPSBcInBhdXNlR2FtZUNvbnRhaW5lclwiXG4gICAgcmVzdW1lQnV0dG9uLmlkID0gXCJyZXN1bWVCdXR0b25cIlxuICAgIHNwYW5UaXRsZS50ZXh0Q29udGVudCA9IFwiUEFVU0VEXCJcbiAgICByZXN1bWVCdXR0b24udGV4dENvbnRlbnQgPSBcInJlc3VtZVwiXG4gICAgcGF1c2VHYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW5UaXRsZSlcbiAgICBwYXVzZUdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdW1lQnV0dG9uKVxuICAgIHN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXVzZUdhbWVDb250YWluZXIpXG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5SGVscEJveCgpIHtcbiAgICBjb25zdCBoZWxwQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGhlbHBCb3guaWQgPSBcImhlbHBCb3hcIlxuXG4gICAgbGV0IGNvbnRlbnRBcnIgPSBbXCJNb3ZlOlwiLCBcIlJvdGF0ZTpcIiwgXCJRdWljayBEcm9wOlwiLCBcIlBhdXNlL1BsYXk6XCJdXG4gICAgbGV0IGtleXMgPSBbXCJBcnJvd3NcIiwgXCIneidcIiwgXCInU3BhY2UnXCIsIFwiJ0VzYydcIl1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICAgIGNvbnN0IHNwYW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICAgIGlubmVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWxwUm93XCIpXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gY29udGVudEFycltpXVxuICAgICAgc3BhbjIudGV4dENvbnRlbnQgPSBrZXlzW2ldXG4gICAgICBpbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuKVxuICAgICAgaW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhbjIpXG4gICAgICBoZWxwQm94LmFwcGVuZENoaWxkKGlubmVyQ29udGFpbmVyKVxuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YkNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChoZWxwQm94KVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTXV0ZUJ1dHRvbigpIHtcbiAgICBjb25zdCB0ZXRyaXNNdXNpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRNdXNpY1wiKVxuICAgIGNvbnN0IHNvdW5kT24gPSBgPHN2ZyBjbGFzcz1cIm11dGVDbGlja2FibGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGNsYXNzPVwibXV0ZUNsaWNrYWJsZVwiIGZpbGw9XCJhcXVhbWFyaW5lXCIgZD1cIk03LjU2MyAyLjA2OUEuNzUuNzUgMCAwIDEgOCAyLjc1djEwLjVhLjc1MS43NTEgMCAwIDEtMS4yMzguNTdMMy40NzIgMTFIMS43NUExLjc1IDEuNzUgMCAwIDEgMCA5LjI1di0yLjVDMCA1Ljc4NC43ODQgNSAxLjc1IDVoMS43MjNsMy4yODktMi44MmEuNzUuNzUgMCAwIDEgLjgwMS0uMTExWk02LjUgNC4zOEw0LjIzOCA2LjMxOWEuNzQ4Ljc0OCAwIDAgMS0uNDg4LjE4MWgtMmEuMjUuMjUgMCAwIDAtLjI1LjI1djIuNWMwIC4xMzguMTEyLjI1LjI1LjI1aDJjLjE3OSAwIC4zNTIuMDY0LjQ4OC4xOEw2LjUgMTEuNjJabTYuMDk2LTIuMDM4YS43NS43NSAwIDAgMSAxLjA2IDBhOCA4IDAgMCAxIDAgMTEuMzE0YS43NTEuNzUxIDAgMCAxLTEuMDQyLS4wMThhLjc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MmE2LjUgNi41IDAgMCAwIDAtOS4xOTNhLjc1Ljc1IDAgMCAxIDAtMS4wNlptLTEuMDYgMi4xMjFsLS4wMDEuMDAxYTUgNSAwIDAgMSAwIDcuMDdhLjc0OS43NDkgMCAwIDEtMS4yNzUtLjMyNmEuNzQ5Ljc0OSAwIDAgMSAuMjE1LS43MzRhMy41IDMuNSAwIDAgMCAwLTQuOTVhLjc1Ljc1IDAgMSAxIDEuMDYxLTEuMDYxWlwiLz48L3N2Zz5gXG4gICAgY29uc3Qgc291bmRPZmYgPSBgPHN2ZyBjbGFzcz1cIm11dGVDbGlja2FibGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGNsYXNzPVwibXV0ZUNsaWNrYWJsZVwiIGZpbGw9XCJhcXVhbWFyaW5lXCIgZD1cIk0xMi40MyA0LjFhMSAxIDAgMCAwLTEgLjEyTDYuNjUgOEgzYTEgMSAwIDAgMC0xIDF2NmExIDEgMCAwIDAgMSAxaDMuNjVsNC43MyAzLjc4QTEgMSAwIDAgMCAxMiAyMGEuOTEuOTEgMCAwIDAgLjQzLS4xQTEgMSAwIDAgMCAxMyAxOVY1YTEgMSAwIDAgMC0uNTctLjlaTTExIDE2LjkybC0zLjM4LTIuN0ExIDEgMCAwIDAgNyAxNEg0di00aDNhMSAxIDAgMCAwIC42Mi0uMjJMMTEgNy4wOFpNMTkuOTEgMTJsMS44LTEuNzlhMSAxIDAgMCAwLTEuNDItMS40MmwtMS43OSAxLjhsLTEuNzktMS44YTEgMSAwIDAgMC0xLjQyIDEuNDJsMS44IDEuNzlsLTEuOCAxLjc5YTEgMSAwIDAgMCAwIDEuNDJhMSAxIDAgMCAwIDEuNDIgMGwxLjc5LTEuOGwxLjc5IDEuOGExIDEgMCAwIDAgMS40MiAwYTEgMSAwIDAgMCAwLTEuNDJaXCIvPjwvc3ZnPmBcbiAgICBjb25zdCBtdXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtdXRlQnV0dG9uXCIpXG4gICAgbXV0ZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwib25cIilcbiAgICBpZiAobXV0ZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJvblwiKSkge1xuICAgICAgbXV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBzb3VuZE9uXG4gICAgICB0ZXRyaXNNdXNpYy5tdXRlZCA9IGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIG11dGVCdXR0b24uaW5uZXJIVE1MID0gc291bmRPZmZcbiAgICAgIHRldHJpc011c2ljLm11dGVkID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIC8vQ09NUE9ORU5UUyBCRUxPVzpcbiAgZnVuY3Rpb24gZGlzcGxheVN0YXJ0Q29tcG9uZW50cygpIHtcbiAgICBkaXNwbGF5U3RhcnRQYWdlKClcbiAgICBkaXNwbGF5SGVscEJveCgpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXlHYW1lT3ZlclBhZ2UsXG4gICAgZGlzcGxheVBhdXNlUGFnZSxcbiAgICBkaXNwbGF5U3RhcnRQYWdlLFxuICAgIGRpc3BsYXlIZWxwQm94LFxuICAgIHRvZ2dsZU11dGVCdXR0b24sXG4gICAgZGlzcGxheVN0YXJ0Q29tcG9uZW50cyxcbiAgfVxufSkoKVxuIiwiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKVxuY29uc3QgbmV4dFBpZWNlQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0UGllY2VcIilcbmNvbnN0IHNjb3JlQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlQm9hcmRcIilcblxuLy9DYW52YXMgY29udGV4dHNcbmxldCBjID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxubGV0IGNuID0gbmV4dFBpZWNlQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxubGV0IGNzID0gc2NvcmVCb2FyZC5nZXRDb250ZXh0KFwiMmRcIilcblxuLy9HYW1lIGRpbWVuc2lvbnMgVE9ETzogSEFORExFIEJMT0NLU0laRSBCQVNFRCBPTiBTQ1JFRU4gU0laRVxubGV0IGJsb2NrU2l6ZSA9IDMwIC8vcHhcbmNvbnN0IG5GaWVsZFdpZHRoID0gMTJcbmNvbnN0IG5GaWVsZEhlaWdodCA9IDIzXG5jb25zdCBvZmZzZXRYID0gMlxuY29uc3Qgb2Zmc2V0WSA9IDJcbi8vY29sb3JzXG5jb25zdCB0ZXRyb21pbm9Db2xvcnMgPSBbXCIjZmJiZjI0XCIsIFwiIzIyYzU1ZVwiLCBcIiMwZWE1ZTlcIiwgXCIjNjdlOGY5XCIsIFwiI2UxMWQ0OFwiLCBcIiNkOTQ2ZWZcIiwgXCIjZjhmYWZjXCJdXG5cbmxldCBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXG5cbmNhbnZhcy53aWR0aCA9IGJsb2NrU2l6ZSAqIG5GaWVsZFdpZHRoICsgb2Zmc2V0WCAqIDJcbmNhbnZhcy5oZWlnaHQgPSBibG9ja1NpemUgKiBuRmllbGRIZWlnaHQgKyBvZmZzZXRZICogMlxubmV4dFBpZWNlQ2FudmFzLndpZHRoID0gYmxvY2tTaXplICogNFxubmV4dFBpZWNlQ2FudmFzLmhlaWdodCA9IGJsb2NrU2l6ZSAqIDRcblxuLy9Vc2luZyBkZXZpY2UgcGl4ZWwgcmF0aW8gaW4gc2NvcmVCb2FyZCBjYW52YXMgdG8gbWluaW1pemUgYmx1cnJpbmVzcy4gVGhpcyBDT1VMRCBiZSBkb25lIGZvclxuLy9hbGwgY2FudmFzZXMsIGJ1dCBtYXkgcG90ZW50aWFsbHkgZWZmZWN0IHBlcmZvcm1hbmNlLlxuc2NvcmVCb2FyZC53aWR0aCA9IDE2ICogNSAqIGRwclxuc2NvcmVCb2FyZC5oZWlnaHQgPSAxNiAqIDggKiBkcHJcbmNzLnNjYWxlKGRwciwgZHByKVxuXG5sZXQgSElHSF9TQ09SRSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaFNjb3JlXCIpXG5pZiAoSElHSF9TQ09SRSA9PT0gbnVsbCkgSElHSF9TQ09SRSA9IFwiMFwiXG5cbmNvbnN0IENlbGwgPSB7XG4gIEVNUFRZOiAxMCxcbiAgQk9SREVSOiA5LFxuICBURVRST01JTk86IDgsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3KGdhbWUpIHtcbiAgcmVmcmVzaFBhZ2UoKVxuXG4gIC8vR2V0IGdhbWUgdmFyaWFibGVzXG4gIGxldCBuQ3VycmVudFggPSBnYW1lLmdldEN1cnJlbnRYKClcbiAgbGV0IG5DdXJyZW50WSA9IGdhbWUuZ2V0Q3VycmVudFkoKVxuICBsZXQgblNoYWRvd1kgPSBnYW1lLmNoYW5nZVNoYWRvd1koKVxuICBsZXQgbkN1cnJlbnRQaWVjZSA9IGdhbWUuZ2V0Q3VycmVudFBpZWNlKClcbiAgbGV0IG5OZXh0UGllY2UgPSBnYW1lLmdldE5leHRQaWVjZSgpXG4gIGxldCBuQ3VycmVudFJvdGF0aW9uID0gZ2FtZS5nZXRDdXJyZW50Um90YXRpb24oKVxuICBsZXQgdGV0cm9taW5vID0gZ2FtZS5nZXRUZXRyb21pbm8obkN1cnJlbnRQaWVjZSlcbiAgbGV0IG5leHRUZXRyb21pbm8gPSBnYW1lLmdldFRldHJvbWlubyhuTmV4dFBpZWNlKVxuXG4gIGRyYXdHYW1lRmllbGQoZ2FtZSlcblxuICAvL0RyYXcgVGV0cm9taW5vLCBzaGFkb3csIG5leHQgdGV0cm9taW5vXG4gIGZvciAobGV0IHB4ID0gMDsgcHggPCA0OyBweCsrKVxuICAgIGZvciAobGV0IHB5ID0gMDsgcHkgPCA0OyBweSsrKSB7XG4gICAgICBsZXQgcm90YXRlZEluZGV4ID0gZ2FtZS5Sb3RhdGUocHgsIHB5LCBuQ3VycmVudFJvdGF0aW9uKVxuICAgICAgaWYgKHRldHJvbWluby5nZXQocm90YXRlZEluZGV4KSA9PT0gMSkge1xuICAgICAgICBkcmF3VGV0cm9taW5vKHB4LCBweSwgbkN1cnJlbnRYLCBuQ3VycmVudFksIG5DdXJyZW50UGllY2UpXG4gICAgICAgIGRyYXdUZXRyb21pbm9TaGFkb3coZ2FtZSwgcHgsIHB5LCBuQ3VycmVudFgsIG5TaGFkb3dZLCB0ZXRyb21pbm8sIG5DdXJyZW50UGllY2UsIG5DdXJyZW50Um90YXRpb24pXG4gICAgICB9XG4gICAgICBkcmF3TmV4dFBpZWNlKHB4LCBweSwgbk5leHRQaWVjZSwgbmV4dFRldHJvbWlubylcbiAgICB9XG4gIGRyYXdTY29yZUJvYXJkKGdhbWUpXG4gIGRyYXdHYW1lRmllbGRCb3JkZXJzKClcbn1cblxuLy9VdGlsIGZ1bmN0aW9uc1xuY29uc3QgcmVmcmVzaFBhZ2UgPSAoKSA9PiB7XG4gIGMuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgY24uY2xlYXJSZWN0KDAsIDAsIG5leHRQaWVjZUNhbnZhcy53aWR0aCwgbmV4dFBpZWNlQ2FudmFzLmhlaWdodClcbiAgY3MuY2xlYXJSZWN0KDAsIDAsIHNjb3JlQm9hcmQud2lkdGgsIHNjb3JlQm9hcmQuaGVpZ2h0KVxufVxuZnVuY3Rpb24gZHJhd0xpbmUoc3gsIHN5LCBleCwgZXkpIHtcbiAgYy5iZWdpblBhdGgoKVxuICBjLm1vdmVUbyhzeCwgc3kpXG4gIGMubGluZVRvKGV4LCBleSlcbiAgYy5zdHJva2UoKVxufVxuXG4vL0RyYXcgZnVuY3Rpb25zXG5jb25zdCBkcmF3R2FtZUZpZWxkID0gZ2FtZSA9PiB7XG4gIGxldCBnYW1lQm9hcmQgPSBnYW1lLmdldEdhbWVCb2FyZCgpXG4gIC8vRHJhdyBGaWVsZFxuICBmb3IgKGxldCB4ID0gMDsgeCA8IG5GaWVsZFdpZHRoOyB4KyspIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG5GaWVsZEhlaWdodDsgeSsrKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHkgKiBuRmllbGRXaWR0aCArIHhcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2FtZUJvYXJkLmdldChpbmRleClcblxuICAgICAgaWYgKHZhbHVlID09PSBDZWxsLkVNUFRZKSB7XG4gICAgICAgIC8vRW1wdHkgc3BhY2VcbiAgICAgICAgYy5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IENlbGwuQk9SREVSKSB7XG4gICAgICAgIC8vQm9yZGVyIGNlbGxzXG4gICAgICAgIGMuc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgYy5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgYy5maWxsUmVjdCh4ICogYmxvY2tTaXplICsgb2Zmc2V0WCwgeSAqIGJsb2NrU2l6ZSArIG9mZnNldFksIGJsb2NrU2l6ZSwgYmxvY2tTaXplKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9Ecm9wcGVkIHRldHJvbWlub3NcbiAgICAgICAgZ2FtZS5nZXRHYW1lT3ZlcigpID8gKGMuc3Ryb2tlU3R5bGUgPSBcImFxdWFtYXJpbmVcIikgOiAoYy5zdHJva2VTdHlsZSA9IFwid2hpdGVcIilcbiAgICAgICAgYy5saW5lV2lkdGggPSAyXG4gICAgICAgIGMuc3Ryb2tlUmVjdCh4ICogYmxvY2tTaXplICsgb2Zmc2V0WCwgeSAqIGJsb2NrU2l6ZSArIG9mZnNldFksIGJsb2NrU2l6ZSwgYmxvY2tTaXplKVxuICAgICAgfVxuXG4gICAgICAvLyBEcmF3IGRpYWdvbmFsc1xuICAgICAgaWYgKHZhbHVlICE9PSBDZWxsLkVNUFRZICYmIHZhbHVlICE9PSBDZWxsLkJPUkRFUikge1xuICAgICAgICAvL1BsYWNlZCB0ZXRyb21pbm9zXG4gICAgICAgIGMubGluZVdpZHRoID0gMVxuICAgICAgICAvL2Muc2hhZG93Qmx1ciA9IDEwXG4gICAgICAgIC8vYy5zaGFkb3dDb2xvciA9IFwiYXF1YW1hcmluZVwiXG4gICAgICAgIGRyYXdMaW5lKFxuICAgICAgICAgIHggKiBibG9ja1NpemUgKyBvZmZzZXRYLFxuICAgICAgICAgIHkgKiBibG9ja1NpemUgKyBvZmZzZXRZLFxuICAgICAgICAgICh4ICsgMSkgKiBibG9ja1NpemUgKyBvZmZzZXRYLFxuICAgICAgICAgICh5ICsgMSkgKiBibG9ja1NpemUgKyBvZmZzZXRZXG4gICAgICAgIClcbiAgICAgICAgZHJhd0xpbmUoXG4gICAgICAgICAgeCAqIGJsb2NrU2l6ZSArIGJsb2NrU2l6ZSArIG9mZnNldFgsXG4gICAgICAgICAgeSAqIGJsb2NrU2l6ZSArIG9mZnNldFksXG4gICAgICAgICAgeCAqIGJsb2NrU2l6ZSArIG9mZnNldFgsXG4gICAgICAgICAgeSAqIGJsb2NrU2l6ZSArIGJsb2NrU2l6ZSArIG9mZnNldFlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvL2tpbGwgc2hhZG93c1xuICAgICAgYy5zaGFkb3dCbHVyID0gMFxuICAgICAgYy5zaGFkb3dDb2xvciA9IFwiYmxhY2tcIlxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkcmF3VGV0cm9taW5vID0gKHB4LCBweSwgbkN1cnJlbnRYLCBuQ3VycmVudFksIG5DdXJyZW50UGllY2UpID0+IHtcbiAgLy8gU2V0IGdsb3cgZWZmZWN0XG4gIGMuc2hhZG93Qmx1ciA9IDEyXG4gIGMuc2hhZG93Q29sb3IgPSB0ZXRyb21pbm9Db2xvcnNbbkN1cnJlbnRQaWVjZV1cbiAgLy8gRHJhdyBib3JkZXJcbiAgYy5zdHJva2VTdHlsZSA9IHRldHJvbWlub0NvbG9yc1tuQ3VycmVudFBpZWNlXVxuICBjLmxpbmVXaWR0aCA9IDNcbiAgYy5zdHJva2VSZWN0KChuQ3VycmVudFggKyBweCkgKiBibG9ja1NpemUgKyBvZmZzZXRYLCAobkN1cnJlbnRZICsgcHkpICogYmxvY2tTaXplICsgb2Zmc2V0WSwgYmxvY2tTaXplLCBibG9ja1NpemUpXG4gIGMuc2hhZG93Qmx1ciA9IDBcbiAgYy5zaGFkb3dDb2xvciA9IFwiYmxhY2tcIlxufVxuXG5jb25zdCBkcmF3VGV0cm9taW5vU2hhZG93ID0gKGdhbWUsIHB4LCBweSwgbkN1cnJlbnRYLCBuU2hhZG93WSwgdGV0cm9taW5vLCBuQ3VycmVudFBpZWNlLCBuQ3VycmVudFJvdGF0aW9uKSA9PiB7XG4gIGNvbnN0IEVNUFRZX1NQQUNFID0gMFxuICBjLnN0cm9rZVN0eWxlID0gdGV0cm9taW5vQ29sb3JzW25DdXJyZW50UGllY2VdXG4gIGlmICghZ2FtZS5nZXRHYW1lUGF1c2VkKCkgJiYgIWdhbWUuZ2V0R2FtZU92ZXIoKSkge1xuICAgIC8vIENoZWNrIG5laWdoYm9yaW5nIGNlbGxzXG4gICAgY29uc3QgdG9wID0gcHkgPiAwID8gdGV0cm9taW5vLmdldChnYW1lLlJvdGF0ZShweCwgcHkgLSAxLCBuQ3VycmVudFJvdGF0aW9uKSkgOiBFTVBUWV9TUEFDRVxuICAgIGNvbnN0IHJpZ2h0ID0gcHggPCAzID8gdGV0cm9taW5vLmdldChnYW1lLlJvdGF0ZShweCArIDEsIHB5LCBuQ3VycmVudFJvdGF0aW9uKSkgOiBFTVBUWV9TUEFDRVxuICAgIGNvbnN0IGJvdHRvbSA9IHB5IDwgMyA/IHRldHJvbWluby5nZXQoZ2FtZS5Sb3RhdGUocHgsIHB5ICsgMSwgbkN1cnJlbnRSb3RhdGlvbikpIDogRU1QVFlfU1BBQ0VcbiAgICBjb25zdCBsZWZ0ID0gcHggPiAwID8gdGV0cm9taW5vLmdldChnYW1lLlJvdGF0ZShweCAtIDEsIHB5LCBuQ3VycmVudFJvdGF0aW9uKSkgOiBFTVBUWV9TUEFDRVxuXG4gICAgLy8gRHJhdyB0b3AgbGluZVxuICAgIGlmICh0b3AgPT09IEVNUFRZX1NQQUNFKSB7XG4gICAgICBkcmF3TGluZShcbiAgICAgICAgKG5DdXJyZW50WCArIHB4KSAqIGJsb2NrU2l6ZSArIG9mZnNldFgsXG4gICAgICAgIChuU2hhZG93WSArIHB5KSAqIGJsb2NrU2l6ZSArIG9mZnNldFksXG4gICAgICAgIChuQ3VycmVudFggKyBweCArIDEpICogYmxvY2tTaXplICsgb2Zmc2V0WCxcbiAgICAgICAgKG5TaGFkb3dZICsgcHkpICogYmxvY2tTaXplICsgb2Zmc2V0WVxuICAgICAgKVxuICAgIH1cbiAgICAvLyBEcmF3IHJpZ2h0IGxpbmVcbiAgICBpZiAocmlnaHQgPT09IEVNUFRZX1NQQUNFKSB7XG4gICAgICBkcmF3TGluZShcbiAgICAgICAgKG5DdXJyZW50WCArIHB4ICsgMSkgKiBibG9ja1NpemUgKyBvZmZzZXRYLFxuICAgICAgICAoblNoYWRvd1kgKyBweSkgKiBibG9ja1NpemUgKyBvZmZzZXRZLFxuICAgICAgICAobkN1cnJlbnRYICsgcHggKyAxKSAqIGJsb2NrU2l6ZSArIG9mZnNldFgsXG4gICAgICAgIChuU2hhZG93WSArIHB5ICsgMSkgKiBibG9ja1NpemUgKyBvZmZzZXRZXG4gICAgICApXG4gICAgfVxuICAgIC8vIERyYXcgYm90dG9tIGxpbmVcbiAgICBpZiAoYm90dG9tID09PSBFTVBUWV9TUEFDRSkge1xuICAgICAgZHJhd0xpbmUoXG4gICAgICAgIChuQ3VycmVudFggKyBweCArIDEpICogYmxvY2tTaXplICsgb2Zmc2V0WCxcbiAgICAgICAgKG5TaGFkb3dZICsgcHkgKyAxKSAqIGJsb2NrU2l6ZSArIG9mZnNldFksXG4gICAgICAgIChuQ3VycmVudFggKyBweCkgKiBibG9ja1NpemUgKyBvZmZzZXRYLFxuICAgICAgICAoblNoYWRvd1kgKyBweSArIDEpICogYmxvY2tTaXplICsgb2Zmc2V0WVxuICAgICAgKVxuICAgIH1cbiAgICAvLyBEcmF3IGxlZnQgbGluZVxuICAgIGlmIChsZWZ0ID09PSBFTVBUWV9TUEFDRSkge1xuICAgICAgZHJhd0xpbmUoXG4gICAgICAgIChuQ3VycmVudFggKyBweCkgKiBibG9ja1NpemUgKyBvZmZzZXRYLFxuICAgICAgICAoblNoYWRvd1kgKyBweSArIDEpICogYmxvY2tTaXplICsgb2Zmc2V0WSxcbiAgICAgICAgKG5DdXJyZW50WCArIHB4KSAqIGJsb2NrU2l6ZSArIG9mZnNldFgsXG4gICAgICAgIChuU2hhZG93WSArIHB5KSAqIGJsb2NrU2l6ZSArIG9mZnNldFlcbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZHJhd05leHRQaWVjZSA9IChweCwgcHksIG5OZXh0UGllY2UsIG5leHRUZXRyb21pbm8pID0+IHtcbiAgLy9EZWZpbmUgb2Zmc2V0IGZvciBuZXh0IHRldHJvbWlubyBkaXNwbGF5IGluIG9yZGVyIHRvIGNlbnRlciBpdCBpbnNpZGUgdGhlIGNhbnZhc1xuICBsZXQgbmV4dE9mZnNldFggPSAwXG4gIGxldCBuZXh0T2Zmc2V0WSA9IDBcbiAgaWYgKG5OZXh0UGllY2UgPT09IDApIHtcbiAgICBuZXh0T2Zmc2V0WCA9IDBcbiAgICBuZXh0T2Zmc2V0WSA9IDEyXG4gIH0gZWxzZSBpZiAobk5leHRQaWVjZSA9PT0gMSkge1xuICAgIG5leHRPZmZzZXRYID0gMjVcbiAgICBuZXh0T2Zmc2V0WSA9IDEwXG4gIH0gZWxzZSBpZiAobk5leHRQaWVjZSA9PT0gMikge1xuICAgIG5leHRPZmZzZXRYID0gMTJcbiAgICBuZXh0T2Zmc2V0WSA9IDEzXG4gIH0gZWxzZSBpZiAobk5leHRQaWVjZSA9PT0gMykge1xuICAgIG5leHRPZmZzZXRYID0gMTBcbiAgICBuZXh0T2Zmc2V0WSA9IDIzXG4gIH0gZWxzZSBpZiAobk5leHRQaWVjZSA9PT0gNCkge1xuICAgIG5leHRPZmZzZXRYID0gMTRcbiAgICBuZXh0T2Zmc2V0WSA9IDIzXG4gIH0gZWxzZSBpZiAobk5leHRQaWVjZSA9PT0gNSB8fCBuTmV4dFBpZWNlID09PSA2KSB7XG4gICAgbmV4dE9mZnNldFggPSAxMFxuICAgIG5leHRPZmZzZXRZID0gMjVcbiAgfVxuXG4gIC8vRHJhdyBOZXh0IFBpZWNlIGluIHNlcGVyYXRlIGNhbnZhcyAoY24pXG4gIGlmIChuZXh0VGV0cm9taW5vLmdldChweSAqIDQgKyBweCkgPT0gMSkge1xuICAgIGNuLnNoYWRvd0JsdXIgPSAxMlxuICAgIGNuLnNoYWRvd0NvbG9yID0gdGV0cm9taW5vQ29sb3JzW25OZXh0UGllY2VdXG4gICAgY24uc3Ryb2tlU3R5bGUgPSB0ZXRyb21pbm9Db2xvcnNbbk5leHRQaWVjZV1cbiAgICBjbi5saW5lV2lkdGggPSAyXG4gICAgLy9jaGFuZ2Ugb2Zmc2V0cyBiYXNlZCBvbiBwaWVjZVxuICAgIGNuLnN0cm9rZVJlY3QoXG4gICAgICBweCAqIChibG9ja1NpemUgLyAxLjI1KSArIG5leHRPZmZzZXRYLFxuICAgICAgcHkgKiAoYmxvY2tTaXplIC8gMS4yNSkgKyBuZXh0T2Zmc2V0WSxcbiAgICAgIGJsb2NrU2l6ZSAvIDEuMjUsXG4gICAgICBibG9ja1NpemUgLyAxLjI1XG4gICAgKVxuICB9XG4gIGNuLnNoYWRvd0JsdXIgPSAwXG4gIGNuLnNoYWRvd0NvbG9yID0gXCJibGFja1wiXG59XG5cbmNvbnN0IGRyYXdTY29yZUJvYXJkID0gZ2FtZSA9PiB7XG4gIC8vRHJhdyBzY29yZUJvYXJkIGluIHNlcGVyYXRlIGNhbnZhcyAoY3MpXG4gIGNzLmZvbnQgPSAnMTJweCBcIlByZXNzIFN0YXJ0IDJQXCInXG4gIGNzLmZpbGxTdHlsZSA9IFwiYXF1YW1hcmluZVwiXG4gIGNzLmZpbGxUZXh0KGBUT1BgLCAxMCwgc2NvcmVCb2FyZC5oZWlnaHQgLyA2KVxuICBjcy5maWxsVGV4dChgJHtISUdIX1NDT1JFfWAsIDEwLCBzY29yZUJvYXJkLmhlaWdodCAvIDYgKyAxNilcbiAgY3MuZmlsbFRleHQoYFNDT1JFYCwgMTAsIHNjb3JlQm9hcmQuaGVpZ2h0IC8gNiArIDMyKVxuICBjcy5maWxsVGV4dChgJHtnYW1lLmdldFNjb3JlKCl9YCwgMTAsIHNjb3JlQm9hcmQuaGVpZ2h0IC8gNiArIDQ4KVxufVxuXG5jb25zdCBkcmF3R2FtZUZpZWxkQm9yZGVycyA9ICgpID0+IHtcbiAgYy5zdHJva2VTdHlsZSA9IFwiYXF1YW1hcmluZVwiXG4gIGNvbnN0IGxpbmVzID0gW1xuICAgIC8vIFRvcCBib3JkZXJcbiAgICBbb2Zmc2V0WCwgb2Zmc2V0WSwgb2Zmc2V0WCwgbkZpZWxkSGVpZ2h0ICogYmxvY2tTaXplICsgb2Zmc2V0WV0sXG5cbiAgICAvLyBUb3AgaW5uZXIgYm9yZGVyXG4gICAgW29mZnNldFggKyBibG9ja1NpemUsIG9mZnNldFksIG9mZnNldFggKyBibG9ja1NpemUsIG5GaWVsZEhlaWdodCAqIGJsb2NrU2l6ZSArIG9mZnNldFkgLSBibG9ja1NpemVdLFxuXG4gICAgLy8gUmlnaHQgYm9yZGVyXG4gICAgW25GaWVsZFdpZHRoICogYmxvY2tTaXplICsgb2Zmc2V0WCwgb2Zmc2V0WSwgbkZpZWxkV2lkdGggKiBibG9ja1NpemUgKyBvZmZzZXRYLCBuRmllbGRIZWlnaHQgKiBibG9ja1NpemUgKyBvZmZzZXRZXSxcblxuICAgIC8vIFJpZ2h0IGlubmVyIGJvcmRlclxuICAgIFtcbiAgICAgIG5GaWVsZFdpZHRoICogYmxvY2tTaXplICsgb2Zmc2V0WCAtIGJsb2NrU2l6ZSxcbiAgICAgIG9mZnNldFksXG4gICAgICBuRmllbGRXaWR0aCAqIGJsb2NrU2l6ZSArIG9mZnNldFggLSBibG9ja1NpemUsXG4gICAgICBuRmllbGRIZWlnaHQgKiBibG9ja1NpemUgKyBvZmZzZXRZIC0gYmxvY2tTaXplLFxuICAgIF0sXG5cbiAgICAvLyBCb3R0b20gYm9yZGVyXG4gICAgW1xuICAgICAgb2Zmc2V0WCxcbiAgICAgIG5GaWVsZEhlaWdodCAqIGJsb2NrU2l6ZSArIG9mZnNldFksXG4gICAgICBuRmllbGRXaWR0aCAqIGJsb2NrU2l6ZSArIG9mZnNldFgsXG4gICAgICBuRmllbGRIZWlnaHQgKiBibG9ja1NpemUgKyBvZmZzZXRZLFxuICAgIF0sXG5cbiAgICAvLyBCb3R0b20gaW5uZXIgYm9yZGVyXG4gICAgW1xuICAgICAgb2Zmc2V0WCArIGJsb2NrU2l6ZSxcbiAgICAgIG5GaWVsZEhlaWdodCAqIGJsb2NrU2l6ZSArIG9mZnNldFkgLSBibG9ja1NpemUsXG4gICAgICBuRmllbGRXaWR0aCAqIGJsb2NrU2l6ZSArIG9mZnNldFggLSBibG9ja1NpemUsXG4gICAgICBuRmllbGRIZWlnaHQgKiBibG9ja1NpemUgKyBvZmZzZXRZIC0gYmxvY2tTaXplLFxuICAgIF0sXG4gIF1cbiAgbGluZXMuZm9yRWFjaChhcmdzID0+IGRyYXdMaW5lKC4uLmFyZ3MpKVxufVxuXG4vL0xPQ0FMIFNUT1JBR0UgU1RVRkY6XG5leHBvcnQgZnVuY3Rpb24gc2F2ZUhpZ2hTY29yZShnYW1lKSB7XG4gIGlmIChnYW1lLmdldFNjb3JlKCkgPiBISUdIX1NDT1JFKSB7XG4gICAgSElHSF9TQ09SRSA9IGdhbWUuZ2V0U2NvcmUoKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlnaFNjb3JlXCIsIEhJR0hfU0NPUkUpXG4gIH1cbn1cbiIsInZhciBNb2R1bGU9dHlwZW9mIE1vZHVsZSE9XCJ1bmRlZmluZWRcIj9Nb2R1bGU6e307dmFyIG1vZHVsZU92ZXJyaWRlcz1PYmplY3QuYXNzaWduKHt9LE1vZHVsZSk7dmFyIGFyZ3VtZW50c189W107dmFyIHRoaXNQcm9ncmFtPVwiLi90aGlzLnByb2dyYW1cIjt2YXIgcXVpdF89KHN0YXR1cyx0b1Rocm93KT0+e3Rocm93IHRvVGhyb3d9O3ZhciBFTlZJUk9OTUVOVF9JU19XRUI9dHJ1ZTt2YXIgRU5WSVJPTk1FTlRfSVNfV09SS0VSPWZhbHNlO3ZhciBzY3JpcHREaXJlY3Rvcnk9XCJcIjtmdW5jdGlvbiBsb2NhdGVGaWxlKHBhdGgpe2lmKE1vZHVsZVtcImxvY2F0ZUZpbGVcIl0pe3JldHVybiBNb2R1bGVbXCJsb2NhdGVGaWxlXCJdKHBhdGgsc2NyaXB0RGlyZWN0b3J5KX1yZXR1cm4gc2NyaXB0RGlyZWN0b3J5K3BhdGh9dmFyIHJlYWRfLHJlYWRBc3luYyxyZWFkQmluYXJ5LHNldFdpbmRvd1RpdGxlO2lmKEVOVklST05NRU5UX0lTX1dFQnx8RU5WSVJPTk1FTlRfSVNfV09SS0VSKXtpZihFTlZJUk9OTUVOVF9JU19XT1JLRVIpe3NjcmlwdERpcmVjdG9yeT1zZWxmLmxvY2F0aW9uLmhyZWZ9ZWxzZSBpZih0eXBlb2YgZG9jdW1lbnQhPVwidW5kZWZpbmVkXCImJmRvY3VtZW50LmN1cnJlbnRTY3JpcHQpe3NjcmlwdERpcmVjdG9yeT1kb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY31pZihzY3JpcHREaXJlY3RvcnkuaW5kZXhPZihcImJsb2I6XCIpIT09MCl7c2NyaXB0RGlyZWN0b3J5PXNjcmlwdERpcmVjdG9yeS5zdWJzdHIoMCxzY3JpcHREaXJlY3RvcnkucmVwbGFjZSgvWz8jXS4qLyxcIlwiKS5sYXN0SW5kZXhPZihcIi9cIikrMSl9ZWxzZXtzY3JpcHREaXJlY3Rvcnk9XCJcIn17cmVhZF89dXJsPT57dmFyIHhocj1uZXcgWE1MSHR0cFJlcXVlc3Q7eGhyLm9wZW4oXCJHRVRcIix1cmwsZmFsc2UpO3hoci5zZW5kKG51bGwpO3JldHVybiB4aHIucmVzcG9uc2VUZXh0fTtpZihFTlZJUk9OTUVOVF9JU19XT1JLRVIpe3JlYWRCaW5hcnk9dXJsPT57dmFyIHhocj1uZXcgWE1MSHR0cFJlcXVlc3Q7eGhyLm9wZW4oXCJHRVRcIix1cmwsZmFsc2UpO3hoci5yZXNwb25zZVR5cGU9XCJhcnJheWJ1ZmZlclwiO3hoci5zZW5kKG51bGwpO3JldHVybiBuZXcgVWludDhBcnJheSh4aHIucmVzcG9uc2UpfX1yZWFkQXN5bmM9KHVybCxvbmxvYWQsb25lcnJvcik9Pnt2YXIgeGhyPW5ldyBYTUxIdHRwUmVxdWVzdDt4aHIub3BlbihcIkdFVFwiLHVybCx0cnVlKTt4aHIucmVzcG9uc2VUeXBlPVwiYXJyYXlidWZmZXJcIjt4aHIub25sb2FkPSgpPT57aWYoeGhyLnN0YXR1cz09MjAwfHx4aHIuc3RhdHVzPT0wJiZ4aHIucmVzcG9uc2Upe29ubG9hZCh4aHIucmVzcG9uc2UpO3JldHVybn1vbmVycm9yKCl9O3hoci5vbmVycm9yPW9uZXJyb3I7eGhyLnNlbmQobnVsbCl9fXNldFdpbmRvd1RpdGxlPXRpdGxlPT5kb2N1bWVudC50aXRsZT10aXRsZX1lbHNle312YXIgb3V0PU1vZHVsZVtcInByaW50XCJdfHxjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO3ZhciBlcnI9TW9kdWxlW1wicHJpbnRFcnJcIl18fGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKTtPYmplY3QuYXNzaWduKE1vZHVsZSxtb2R1bGVPdmVycmlkZXMpO21vZHVsZU92ZXJyaWRlcz1udWxsO2lmKE1vZHVsZVtcImFyZ3VtZW50c1wiXSlhcmd1bWVudHNfPU1vZHVsZVtcImFyZ3VtZW50c1wiXTtpZihNb2R1bGVbXCJ0aGlzUHJvZ3JhbVwiXSl0aGlzUHJvZ3JhbT1Nb2R1bGVbXCJ0aGlzUHJvZ3JhbVwiXTtpZihNb2R1bGVbXCJxdWl0XCJdKXF1aXRfPU1vZHVsZVtcInF1aXRcIl07dmFyIHdhc21CaW5hcnk7aWYoTW9kdWxlW1wid2FzbUJpbmFyeVwiXSl3YXNtQmluYXJ5PU1vZHVsZVtcIndhc21CaW5hcnlcIl07dmFyIG5vRXhpdFJ1bnRpbWU9TW9kdWxlW1wibm9FeGl0UnVudGltZVwiXXx8dHJ1ZTtpZih0eXBlb2YgV2ViQXNzZW1ibHkhPVwib2JqZWN0XCIpe2Fib3J0KFwibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZFwiKX12YXIgd2FzbU1lbW9yeTt2YXIgQUJPUlQ9ZmFsc2U7dmFyIEVYSVRTVEFUVVM7ZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbix0ZXh0KXtpZighY29uZGl0aW9uKXthYm9ydCh0ZXh0KX19dmFyIEhFQVA4LEhFQVBVOCxIRUFQMTYsSEVBUFUxNixIRUFQMzIsSEVBUFUzMixIRUFQRjMyLEhFQVBGNjQ7ZnVuY3Rpb24gdXBkYXRlTWVtb3J5Vmlld3MoKXt2YXIgYj13YXNtTWVtb3J5LmJ1ZmZlcjtNb2R1bGVbXCJIRUFQOFwiXT1IRUFQOD1uZXcgSW50OEFycmF5KGIpO01vZHVsZVtcIkhFQVAxNlwiXT1IRUFQMTY9bmV3IEludDE2QXJyYXkoYik7TW9kdWxlW1wiSEVBUDMyXCJdPUhFQVAzMj1uZXcgSW50MzJBcnJheShiKTtNb2R1bGVbXCJIRUFQVThcIl09SEVBUFU4PW5ldyBVaW50OEFycmF5KGIpO01vZHVsZVtcIkhFQVBVMTZcIl09SEVBUFUxNj1uZXcgVWludDE2QXJyYXkoYik7TW9kdWxlW1wiSEVBUFUzMlwiXT1IRUFQVTMyPW5ldyBVaW50MzJBcnJheShiKTtNb2R1bGVbXCJIRUFQRjMyXCJdPUhFQVBGMzI9bmV3IEZsb2F0MzJBcnJheShiKTtNb2R1bGVbXCJIRUFQRjY0XCJdPUhFQVBGNjQ9bmV3IEZsb2F0NjRBcnJheShiKX12YXIgd2FzbVRhYmxlO3ZhciBfX0FUUFJFUlVOX189W107dmFyIF9fQVRJTklUX189W107dmFyIF9fQVRQT1NUUlVOX189W107dmFyIHJ1bnRpbWVJbml0aWFsaXplZD1mYWxzZTtmdW5jdGlvbiBwcmVSdW4oKXtpZihNb2R1bGVbXCJwcmVSdW5cIl0pe2lmKHR5cGVvZiBNb2R1bGVbXCJwcmVSdW5cIl09PVwiZnVuY3Rpb25cIilNb2R1bGVbXCJwcmVSdW5cIl09W01vZHVsZVtcInByZVJ1blwiXV07d2hpbGUoTW9kdWxlW1wicHJlUnVuXCJdLmxlbmd0aCl7YWRkT25QcmVSdW4oTW9kdWxlW1wicHJlUnVuXCJdLnNoaWZ0KCkpfX1jYWxsUnVudGltZUNhbGxiYWNrcyhfX0FUUFJFUlVOX18pfWZ1bmN0aW9uIGluaXRSdW50aW1lKCl7cnVudGltZUluaXRpYWxpemVkPXRydWU7Y2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVElOSVRfXyl9ZnVuY3Rpb24gcG9zdFJ1bigpe2lmKE1vZHVsZVtcInBvc3RSdW5cIl0pe2lmKHR5cGVvZiBNb2R1bGVbXCJwb3N0UnVuXCJdPT1cImZ1bmN0aW9uXCIpTW9kdWxlW1wicG9zdFJ1blwiXT1bTW9kdWxlW1wicG9zdFJ1blwiXV07d2hpbGUoTW9kdWxlW1wicG9zdFJ1blwiXS5sZW5ndGgpe2FkZE9uUG9zdFJ1bihNb2R1bGVbXCJwb3N0UnVuXCJdLnNoaWZ0KCkpfX1jYWxsUnVudGltZUNhbGxiYWNrcyhfX0FUUE9TVFJVTl9fKX1mdW5jdGlvbiBhZGRPblByZVJ1bihjYil7X19BVFBSRVJVTl9fLnVuc2hpZnQoY2IpfWZ1bmN0aW9uIGFkZE9uSW5pdChjYil7X19BVElOSVRfXy51bnNoaWZ0KGNiKX1mdW5jdGlvbiBhZGRPblBvc3RSdW4oY2Ipe19fQVRQT1NUUlVOX18udW5zaGlmdChjYil9dmFyIHJ1bkRlcGVuZGVuY2llcz0wO3ZhciBydW5EZXBlbmRlbmN5V2F0Y2hlcj1udWxsO3ZhciBkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9bnVsbDtmdW5jdGlvbiBhZGRSdW5EZXBlbmRlbmN5KGlkKXtydW5EZXBlbmRlbmNpZXMrKztpZihNb2R1bGVbXCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzXCJdKXtNb2R1bGVbXCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzXCJdKHJ1bkRlcGVuZGVuY2llcyl9fWZ1bmN0aW9uIHJlbW92ZVJ1bkRlcGVuZGVuY3koaWQpe3J1bkRlcGVuZGVuY2llcy0tO2lmKE1vZHVsZVtcIm1vbml0b3JSdW5EZXBlbmRlbmNpZXNcIl0pe01vZHVsZVtcIm1vbml0b3JSdW5EZXBlbmRlbmNpZXNcIl0ocnVuRGVwZW5kZW5jaWVzKX1pZihydW5EZXBlbmRlbmNpZXM9PTApe2lmKHJ1bkRlcGVuZGVuY3lXYXRjaGVyIT09bnVsbCl7Y2xlYXJJbnRlcnZhbChydW5EZXBlbmRlbmN5V2F0Y2hlcik7cnVuRGVwZW5kZW5jeVdhdGNoZXI9bnVsbH1pZihkZXBlbmRlbmNpZXNGdWxmaWxsZWQpe3ZhciBjYWxsYmFjaz1kZXBlbmRlbmNpZXNGdWxmaWxsZWQ7ZGVwZW5kZW5jaWVzRnVsZmlsbGVkPW51bGw7Y2FsbGJhY2soKX19fWZ1bmN0aW9uIGFib3J0KHdoYXQpe2lmKE1vZHVsZVtcIm9uQWJvcnRcIl0pe01vZHVsZVtcIm9uQWJvcnRcIl0od2hhdCl9d2hhdD1cIkFib3J0ZWQoXCIrd2hhdCtcIilcIjtlcnIod2hhdCk7QUJPUlQ9dHJ1ZTtFWElUU1RBVFVTPTE7d2hhdCs9XCIuIEJ1aWxkIHdpdGggLXNBU1NFUlRJT05TIGZvciBtb3JlIGluZm8uXCI7dmFyIGU9bmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcih3aGF0KTt0aHJvdyBlfXZhciBkYXRhVVJJUHJlZml4PVwiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LFwiO2Z1bmN0aW9uIGlzRGF0YVVSSShmaWxlbmFtZSl7cmV0dXJuIGZpbGVuYW1lLnN0YXJ0c1dpdGgoZGF0YVVSSVByZWZpeCl9dmFyIHdhc21CaW5hcnlGaWxlO3dhc21CaW5hcnlGaWxlPVwidGV0cmlzLndhc21cIjtpZighaXNEYXRhVVJJKHdhc21CaW5hcnlGaWxlKSl7d2FzbUJpbmFyeUZpbGU9bG9jYXRlRmlsZSh3YXNtQmluYXJ5RmlsZSl9ZnVuY3Rpb24gZ2V0QmluYXJ5KGZpbGUpe3RyeXtpZihmaWxlPT13YXNtQmluYXJ5RmlsZSYmd2FzbUJpbmFyeSl7cmV0dXJuIG5ldyBVaW50OEFycmF5KHdhc21CaW5hcnkpfWlmKHJlYWRCaW5hcnkpe3JldHVybiByZWFkQmluYXJ5KGZpbGUpfXRocm93XCJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZFwifWNhdGNoKGVycil7YWJvcnQoZXJyKX19ZnVuY3Rpb24gZ2V0QmluYXJ5UHJvbWlzZShiaW5hcnlGaWxlKXtpZighd2FzbUJpbmFyeSYmKEVOVklST05NRU5UX0lTX1dFQnx8RU5WSVJPTk1FTlRfSVNfV09SS0VSKSl7aWYodHlwZW9mIGZldGNoPT1cImZ1bmN0aW9uXCIpe3JldHVybiBmZXRjaChiaW5hcnlGaWxlLHtjcmVkZW50aWFsczpcInNhbWUtb3JpZ2luXCJ9KS50aGVuKHJlc3BvbnNlPT57aWYoIXJlc3BvbnNlW1wib2tcIl0pe3Rocm93XCJmYWlsZWQgdG8gbG9hZCB3YXNtIGJpbmFyeSBmaWxlIGF0ICdcIitiaW5hcnlGaWxlK1wiJ1wifXJldHVybiByZXNwb25zZVtcImFycmF5QnVmZmVyXCJdKCl9KS5jYXRjaCgoKT0+Z2V0QmluYXJ5KGJpbmFyeUZpbGUpKX19cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PmdldEJpbmFyeShiaW5hcnlGaWxlKSl9ZnVuY3Rpb24gaW5zdGFudGlhdGVBcnJheUJ1ZmZlcihiaW5hcnlGaWxlLGltcG9ydHMscmVjZWl2ZXIpe3JldHVybiBnZXRCaW5hcnlQcm9taXNlKGJpbmFyeUZpbGUpLnRoZW4oYmluYXJ5PT57cmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGJpbmFyeSxpbXBvcnRzKX0pLnRoZW4oaW5zdGFuY2U9PntyZXR1cm4gaW5zdGFuY2V9KS50aGVuKHJlY2VpdmVyLHJlYXNvbj0+e2VycihcImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206IFwiK3JlYXNvbik7YWJvcnQocmVhc29uKX0pfWZ1bmN0aW9uIGluc3RhbnRpYXRlQXN5bmMoYmluYXJ5LGJpbmFyeUZpbGUsaW1wb3J0cyxjYWxsYmFjayl7aWYoIWJpbmFyeSYmdHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nPT1cImZ1bmN0aW9uXCImJiFpc0RhdGFVUkkoYmluYXJ5RmlsZSkmJnR5cGVvZiBmZXRjaD09XCJmdW5jdGlvblwiKXtyZXR1cm4gZmV0Y2goYmluYXJ5RmlsZSx7Y3JlZGVudGlhbHM6XCJzYW1lLW9yaWdpblwifSkudGhlbihyZXNwb25zZT0+e3ZhciByZXN1bHQ9V2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocmVzcG9uc2UsaW1wb3J0cyk7cmV0dXJuIHJlc3VsdC50aGVuKGNhbGxiYWNrLGZ1bmN0aW9uKHJlYXNvbil7ZXJyKFwid2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6IFwiK3JlYXNvbik7ZXJyKFwiZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb25cIik7cmV0dXJuIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIoYmluYXJ5RmlsZSxpbXBvcnRzLGNhbGxiYWNrKX0pfSl9ZWxzZXtyZXR1cm4gaW5zdGFudGlhdGVBcnJheUJ1ZmZlcihiaW5hcnlGaWxlLGltcG9ydHMsY2FsbGJhY2spfX1mdW5jdGlvbiBjcmVhdGVXYXNtKCl7dmFyIGluZm89e1wiYVwiOndhc21JbXBvcnRzfTtmdW5jdGlvbiByZWNlaXZlSW5zdGFuY2UoaW5zdGFuY2UsbW9kdWxlKXt2YXIgZXhwb3J0cz1pbnN0YW5jZS5leHBvcnRzO01vZHVsZVtcImFzbVwiXT1leHBvcnRzO3dhc21NZW1vcnk9TW9kdWxlW1wiYXNtXCJdW1widVwiXTt1cGRhdGVNZW1vcnlWaWV3cygpO3dhc21UYWJsZT1Nb2R1bGVbXCJhc21cIl1bXCJ3XCJdO2FkZE9uSW5pdChNb2R1bGVbXCJhc21cIl1bXCJ2XCJdKTtyZW1vdmVSdW5EZXBlbmRlbmN5KFwid2FzbS1pbnN0YW50aWF0ZVwiKTtyZXR1cm4gZXhwb3J0c31hZGRSdW5EZXBlbmRlbmN5KFwid2FzbS1pbnN0YW50aWF0ZVwiKTtmdW5jdGlvbiByZWNlaXZlSW5zdGFudGlhdGlvblJlc3VsdChyZXN1bHQpe3JlY2VpdmVJbnN0YW5jZShyZXN1bHRbXCJpbnN0YW5jZVwiXSl9aWYoTW9kdWxlW1wiaW5zdGFudGlhdGVXYXNtXCJdKXt0cnl7cmV0dXJuIE1vZHVsZVtcImluc3RhbnRpYXRlV2FzbVwiXShpbmZvLHJlY2VpdmVJbnN0YW5jZSl9Y2F0Y2goZSl7ZXJyKFwiTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogXCIrZSk7cmV0dXJuIGZhbHNlfX1pbnN0YW50aWF0ZUFzeW5jKHdhc21CaW5hcnksd2FzbUJpbmFyeUZpbGUsaW5mbyxyZWNlaXZlSW5zdGFudGlhdGlvblJlc3VsdCk7cmV0dXJue319ZnVuY3Rpb24gY2FsbFJ1bnRpbWVDYWxsYmFja3MoY2FsbGJhY2tzKXt3aGlsZShjYWxsYmFja3MubGVuZ3RoPjApe2NhbGxiYWNrcy5zaGlmdCgpKE1vZHVsZSl9fWZ1bmN0aW9uIEV4Y2VwdGlvbkluZm8oZXhjUHRyKXt0aGlzLmV4Y1B0cj1leGNQdHI7dGhpcy5wdHI9ZXhjUHRyLTI0O3RoaXMuc2V0X3R5cGU9ZnVuY3Rpb24odHlwZSl7SEVBUFUzMlt0aGlzLnB0cis0Pj4yXT10eXBlfTt0aGlzLmdldF90eXBlPWZ1bmN0aW9uKCl7cmV0dXJuIEhFQVBVMzJbdGhpcy5wdHIrND4+Ml19O3RoaXMuc2V0X2Rlc3RydWN0b3I9ZnVuY3Rpb24oZGVzdHJ1Y3Rvcil7SEVBUFUzMlt0aGlzLnB0cis4Pj4yXT1kZXN0cnVjdG9yfTt0aGlzLmdldF9kZXN0cnVjdG9yPWZ1bmN0aW9uKCl7cmV0dXJuIEhFQVBVMzJbdGhpcy5wdHIrOD4+Ml19O3RoaXMuc2V0X2NhdWdodD1mdW5jdGlvbihjYXVnaHQpe2NhdWdodD1jYXVnaHQ/MTowO0hFQVA4W3RoaXMucHRyKzEyPj4wXT1jYXVnaHR9O3RoaXMuZ2V0X2NhdWdodD1mdW5jdGlvbigpe3JldHVybiBIRUFQOFt0aGlzLnB0cisxMj4+MF0hPTB9O3RoaXMuc2V0X3JldGhyb3duPWZ1bmN0aW9uKHJldGhyb3duKXtyZXRocm93bj1yZXRocm93bj8xOjA7SEVBUDhbdGhpcy5wdHIrMTM+PjBdPXJldGhyb3dufTt0aGlzLmdldF9yZXRocm93bj1mdW5jdGlvbigpe3JldHVybiBIRUFQOFt0aGlzLnB0cisxMz4+MF0hPTB9O3RoaXMuaW5pdD1mdW5jdGlvbih0eXBlLGRlc3RydWN0b3Ipe3RoaXMuc2V0X2FkanVzdGVkX3B0cigwKTt0aGlzLnNldF90eXBlKHR5cGUpO3RoaXMuc2V0X2Rlc3RydWN0b3IoZGVzdHJ1Y3Rvcil9O3RoaXMuc2V0X2FkanVzdGVkX3B0cj1mdW5jdGlvbihhZGp1c3RlZFB0cil7SEVBUFUzMlt0aGlzLnB0cisxNj4+Ml09YWRqdXN0ZWRQdHJ9O3RoaXMuZ2V0X2FkanVzdGVkX3B0cj1mdW5jdGlvbigpe3JldHVybiBIRUFQVTMyW3RoaXMucHRyKzE2Pj4yXX07dGhpcy5nZXRfZXhjZXB0aW9uX3B0cj1mdW5jdGlvbigpe3ZhciBpc1BvaW50ZXI9X19fY3hhX2lzX3BvaW50ZXJfdHlwZSh0aGlzLmdldF90eXBlKCkpO2lmKGlzUG9pbnRlcil7cmV0dXJuIEhFQVBVMzJbdGhpcy5leGNQdHI+PjJdfXZhciBhZGp1c3RlZD10aGlzLmdldF9hZGp1c3RlZF9wdHIoKTtpZihhZGp1c3RlZCE9PTApcmV0dXJuIGFkanVzdGVkO3JldHVybiB0aGlzLmV4Y1B0cn19dmFyIGV4Y2VwdGlvbkxhc3Q9MDt2YXIgdW5jYXVnaHRFeGNlcHRpb25Db3VudD0wO2Z1bmN0aW9uIF9fX2N4YV90aHJvdyhwdHIsdHlwZSxkZXN0cnVjdG9yKXt2YXIgaW5mbz1uZXcgRXhjZXB0aW9uSW5mbyhwdHIpO2luZm8uaW5pdCh0eXBlLGRlc3RydWN0b3IpO2V4Y2VwdGlvbkxhc3Q9cHRyO3VuY2F1Z2h0RXhjZXB0aW9uQ291bnQrKzt0aHJvdyBleGNlcHRpb25MYXN0fWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2JpZ2ludChwcmltaXRpdmVUeXBlLG5hbWUsc2l6ZSxtaW5SYW5nZSxtYXhSYW5nZSl7fWZ1bmN0aW9uIGdldFNoaWZ0RnJvbVNpemUoc2l6ZSl7c3dpdGNoKHNpemUpe2Nhc2UgMTpyZXR1cm4gMDtjYXNlIDI6cmV0dXJuIDE7Y2FzZSA0OnJldHVybiAyO2Nhc2UgODpyZXR1cm4gMztkZWZhdWx0OnRocm93IG5ldyBUeXBlRXJyb3IoYFVua25vd24gdHlwZSBzaXplOiAke3NpemV9YCl9fWZ1bmN0aW9uIGVtYmluZF9pbml0X2NoYXJDb2Rlcygpe3ZhciBjb2Rlcz1uZXcgQXJyYXkoMjU2KTtmb3IodmFyIGk9MDtpPDI1NjsrK2kpe2NvZGVzW2ldPVN0cmluZy5mcm9tQ2hhckNvZGUoaSl9ZW1iaW5kX2NoYXJDb2Rlcz1jb2Rlc312YXIgZW1iaW5kX2NoYXJDb2Rlcz11bmRlZmluZWQ7ZnVuY3Rpb24gcmVhZExhdGluMVN0cmluZyhwdHIpe3ZhciByZXQ9XCJcIjt2YXIgYz1wdHI7d2hpbGUoSEVBUFU4W2NdKXtyZXQrPWVtYmluZF9jaGFyQ29kZXNbSEVBUFU4W2MrK11dfXJldHVybiByZXR9dmFyIGF3YWl0aW5nRGVwZW5kZW5jaWVzPXt9O3ZhciByZWdpc3RlcmVkVHlwZXM9e307dmFyIHR5cGVEZXBlbmRlbmNpZXM9e307dmFyIGNoYXJfMD00ODt2YXIgY2hhcl85PTU3O2Z1bmN0aW9uIG1ha2VMZWdhbEZ1bmN0aW9uTmFtZShuYW1lKXtpZih1bmRlZmluZWQ9PT1uYW1lKXtyZXR1cm5cIl91bmtub3duXCJ9bmFtZT1uYW1lLnJlcGxhY2UoL1teYS16QS1aMC05X10vZyxcIiRcIik7dmFyIGY9bmFtZS5jaGFyQ29kZUF0KDApO2lmKGY+PWNoYXJfMCYmZjw9Y2hhcl85KXtyZXR1cm5gXyR7bmFtZX1gfXJldHVybiBuYW1lfWZ1bmN0aW9uIGNyZWF0ZU5hbWVkRnVuY3Rpb24obmFtZSxib2R5KXtuYW1lPW1ha2VMZWdhbEZ1bmN0aW9uTmFtZShuYW1lKTtyZXR1cm57W25hbWVdOmZ1bmN0aW9uKCl7cmV0dXJuIGJvZHkuYXBwbHkodGhpcyxhcmd1bWVudHMpfX1bbmFtZV19ZnVuY3Rpb24gZXh0ZW5kRXJyb3IoYmFzZUVycm9yVHlwZSxlcnJvck5hbWUpe3ZhciBlcnJvckNsYXNzPWNyZWF0ZU5hbWVkRnVuY3Rpb24oZXJyb3JOYW1lLGZ1bmN0aW9uKG1lc3NhZ2Upe3RoaXMubmFtZT1lcnJvck5hbWU7dGhpcy5tZXNzYWdlPW1lc3NhZ2U7dmFyIHN0YWNrPW5ldyBFcnJvcihtZXNzYWdlKS5zdGFjaztpZihzdGFjayE9PXVuZGVmaW5lZCl7dGhpcy5zdGFjaz10aGlzLnRvU3RyaW5nKCkrXCJcXG5cIitzdGFjay5yZXBsYWNlKC9eRXJyb3IoOlteXFxuXSopP1xcbi8sXCJcIil9fSk7ZXJyb3JDbGFzcy5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShiYXNlRXJyb3JUeXBlLnByb3RvdHlwZSk7ZXJyb3JDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3I9ZXJyb3JDbGFzcztlcnJvckNsYXNzLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe2lmKHRoaXMubWVzc2FnZT09PXVuZGVmaW5lZCl7cmV0dXJuIHRoaXMubmFtZX1lbHNle3JldHVybmAke3RoaXMubmFtZX06ICR7dGhpcy5tZXNzYWdlfWB9fTtyZXR1cm4gZXJyb3JDbGFzc312YXIgQmluZGluZ0Vycm9yPXVuZGVmaW5lZDtmdW5jdGlvbiB0aHJvd0JpbmRpbmdFcnJvcihtZXNzYWdlKXt0aHJvdyBuZXcgQmluZGluZ0Vycm9yKG1lc3NhZ2UpfXZhciBJbnRlcm5hbEVycm9yPXVuZGVmaW5lZDtmdW5jdGlvbiB0aHJvd0ludGVybmFsRXJyb3IobWVzc2FnZSl7dGhyb3cgbmV3IEludGVybmFsRXJyb3IobWVzc2FnZSl9ZnVuY3Rpb24gd2hlbkRlcGVuZGVudFR5cGVzQXJlUmVzb2x2ZWQobXlUeXBlcyxkZXBlbmRlbnRUeXBlcyxnZXRUeXBlQ29udmVydGVycyl7bXlUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHR5cGUpe3R5cGVEZXBlbmRlbmNpZXNbdHlwZV09ZGVwZW5kZW50VHlwZXN9KTtmdW5jdGlvbiBvbkNvbXBsZXRlKHR5cGVDb252ZXJ0ZXJzKXt2YXIgbXlUeXBlQ29udmVydGVycz1nZXRUeXBlQ29udmVydGVycyh0eXBlQ29udmVydGVycyk7aWYobXlUeXBlQ29udmVydGVycy5sZW5ndGghPT1teVR5cGVzLmxlbmd0aCl7dGhyb3dJbnRlcm5hbEVycm9yKFwiTWlzbWF0Y2hlZCB0eXBlIGNvbnZlcnRlciBjb3VudFwiKX1mb3IodmFyIGk9MDtpPG15VHlwZXMubGVuZ3RoOysraSl7cmVnaXN0ZXJUeXBlKG15VHlwZXNbaV0sbXlUeXBlQ29udmVydGVyc1tpXSl9fXZhciB0eXBlQ29udmVydGVycz1uZXcgQXJyYXkoZGVwZW5kZW50VHlwZXMubGVuZ3RoKTt2YXIgdW5yZWdpc3RlcmVkVHlwZXM9W107dmFyIHJlZ2lzdGVyZWQ9MDtkZXBlbmRlbnRUeXBlcy5mb3JFYWNoKChkdCxpKT0+e2lmKHJlZ2lzdGVyZWRUeXBlcy5oYXNPd25Qcm9wZXJ0eShkdCkpe3R5cGVDb252ZXJ0ZXJzW2ldPXJlZ2lzdGVyZWRUeXBlc1tkdF19ZWxzZXt1bnJlZ2lzdGVyZWRUeXBlcy5wdXNoKGR0KTtpZighYXdhaXRpbmdEZXBlbmRlbmNpZXMuaGFzT3duUHJvcGVydHkoZHQpKXthd2FpdGluZ0RlcGVuZGVuY2llc1tkdF09W119YXdhaXRpbmdEZXBlbmRlbmNpZXNbZHRdLnB1c2goKCk9Pnt0eXBlQ29udmVydGVyc1tpXT1yZWdpc3RlcmVkVHlwZXNbZHRdOysrcmVnaXN0ZXJlZDtpZihyZWdpc3RlcmVkPT09dW5yZWdpc3RlcmVkVHlwZXMubGVuZ3RoKXtvbkNvbXBsZXRlKHR5cGVDb252ZXJ0ZXJzKX19KX19KTtpZigwPT09dW5yZWdpc3RlcmVkVHlwZXMubGVuZ3RoKXtvbkNvbXBsZXRlKHR5cGVDb252ZXJ0ZXJzKX19ZnVuY3Rpb24gcmVnaXN0ZXJUeXBlKHJhd1R5cGUscmVnaXN0ZXJlZEluc3RhbmNlLG9wdGlvbnM9e30pe2lmKCEoXCJhcmdQYWNrQWR2YW5jZVwiaW4gcmVnaXN0ZXJlZEluc3RhbmNlKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcInJlZ2lzdGVyVHlwZSByZWdpc3RlcmVkSW5zdGFuY2UgcmVxdWlyZXMgYXJnUGFja0FkdmFuY2VcIil9dmFyIG5hbWU9cmVnaXN0ZXJlZEluc3RhbmNlLm5hbWU7aWYoIXJhd1R5cGUpe3Rocm93QmluZGluZ0Vycm9yKGB0eXBlIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXJgKX1pZihyZWdpc3RlcmVkVHlwZXMuaGFzT3duUHJvcGVydHkocmF3VHlwZSkpe2lmKG9wdGlvbnMuaWdub3JlRHVwbGljYXRlUmVnaXN0cmF0aW9ucyl7cmV0dXJufWVsc2V7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCByZWdpc3RlciB0eXBlICcke25hbWV9JyB0d2ljZWApfX1yZWdpc3RlcmVkVHlwZXNbcmF3VHlwZV09cmVnaXN0ZXJlZEluc3RhbmNlO2RlbGV0ZSB0eXBlRGVwZW5kZW5jaWVzW3Jhd1R5cGVdO2lmKGF3YWl0aW5nRGVwZW5kZW5jaWVzLmhhc093blByb3BlcnR5KHJhd1R5cGUpKXt2YXIgY2FsbGJhY2tzPWF3YWl0aW5nRGVwZW5kZW5jaWVzW3Jhd1R5cGVdO2RlbGV0ZSBhd2FpdGluZ0RlcGVuZGVuY2llc1tyYXdUeXBlXTtjYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSl9fWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2Jvb2wocmF3VHlwZSxuYW1lLHNpemUsdHJ1ZVZhbHVlLGZhbHNlVmFsdWUpe3ZhciBzaGlmdD1nZXRTaGlmdEZyb21TaXplKHNpemUpO25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtyZWdpc3RlclR5cGUocmF3VHlwZSx7bmFtZTpuYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZnVuY3Rpb24od3Qpe3JldHVybiEhd3R9LFwidG9XaXJlVHlwZVwiOmZ1bmN0aW9uKGRlc3RydWN0b3JzLG8pe3JldHVybiBvP3RydWVWYWx1ZTpmYWxzZVZhbHVlfSxcImFyZ1BhY2tBZHZhbmNlXCI6OCxcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCI6ZnVuY3Rpb24ocG9pbnRlcil7dmFyIGhlYXA7aWYoc2l6ZT09PTEpe2hlYXA9SEVBUDh9ZWxzZSBpZihzaXplPT09Mil7aGVhcD1IRUFQMTZ9ZWxzZSBpZihzaXplPT09NCl7aGVhcD1IRUFQMzJ9ZWxzZXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5rbm93biBib29sZWFuIHR5cGUgc2l6ZTogXCIrbmFtZSl9cmV0dXJuIHRoaXNbXCJmcm9tV2lyZVR5cGVcIl0oaGVhcFtwb2ludGVyPj5zaGlmdF0pfSxkZXN0cnVjdG9yRnVuY3Rpb246bnVsbH0pfWZ1bmN0aW9uIENsYXNzSGFuZGxlX2lzQWxpYXNPZihvdGhlcil7aWYoISh0aGlzIGluc3RhbmNlb2YgQ2xhc3NIYW5kbGUpKXtyZXR1cm4gZmFsc2V9aWYoIShvdGhlciBpbnN0YW5jZW9mIENsYXNzSGFuZGxlKSl7cmV0dXJuIGZhbHNlfXZhciBsZWZ0Q2xhc3M9dGhpcy4kJC5wdHJUeXBlLnJlZ2lzdGVyZWRDbGFzczt2YXIgbGVmdD10aGlzLiQkLnB0cjt2YXIgcmlnaHRDbGFzcz1vdGhlci4kJC5wdHJUeXBlLnJlZ2lzdGVyZWRDbGFzczt2YXIgcmlnaHQ9b3RoZXIuJCQucHRyO3doaWxlKGxlZnRDbGFzcy5iYXNlQ2xhc3Mpe2xlZnQ9bGVmdENsYXNzLnVwY2FzdChsZWZ0KTtsZWZ0Q2xhc3M9bGVmdENsYXNzLmJhc2VDbGFzc313aGlsZShyaWdodENsYXNzLmJhc2VDbGFzcyl7cmlnaHQ9cmlnaHRDbGFzcy51cGNhc3QocmlnaHQpO3JpZ2h0Q2xhc3M9cmlnaHRDbGFzcy5iYXNlQ2xhc3N9cmV0dXJuIGxlZnRDbGFzcz09PXJpZ2h0Q2xhc3MmJmxlZnQ9PT1yaWdodH1mdW5jdGlvbiBzaGFsbG93Q29weUludGVybmFsUG9pbnRlcihvKXtyZXR1cm57Y291bnQ6by5jb3VudCxkZWxldGVTY2hlZHVsZWQ6by5kZWxldGVTY2hlZHVsZWQscHJlc2VydmVQb2ludGVyT25EZWxldGU6by5wcmVzZXJ2ZVBvaW50ZXJPbkRlbGV0ZSxwdHI6by5wdHIscHRyVHlwZTpvLnB0clR5cGUsc21hcnRQdHI6by5zbWFydFB0cixzbWFydFB0clR5cGU6by5zbWFydFB0clR5cGV9fWZ1bmN0aW9uIHRocm93SW5zdGFuY2VBbHJlYWR5RGVsZXRlZChvYmope2Z1bmN0aW9uIGdldEluc3RhbmNlVHlwZU5hbWUoaGFuZGxlKXtyZXR1cm4gaGFuZGxlLiQkLnB0clR5cGUucmVnaXN0ZXJlZENsYXNzLm5hbWV9dGhyb3dCaW5kaW5nRXJyb3IoZ2V0SW5zdGFuY2VUeXBlTmFtZShvYmopK1wiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZFwiKX12YXIgZmluYWxpemF0aW9uUmVnaXN0cnk9ZmFsc2U7ZnVuY3Rpb24gZGV0YWNoRmluYWxpemVyKGhhbmRsZSl7fWZ1bmN0aW9uIHJ1bkRlc3RydWN0b3IoJCQpe2lmKCQkLnNtYXJ0UHRyKXskJC5zbWFydFB0clR5cGUucmF3RGVzdHJ1Y3RvcigkJC5zbWFydFB0cil9ZWxzZXskJC5wdHJUeXBlLnJlZ2lzdGVyZWRDbGFzcy5yYXdEZXN0cnVjdG9yKCQkLnB0cil9fWZ1bmN0aW9uIHJlbGVhc2VDbGFzc0hhbmRsZSgkJCl7JCQuY291bnQudmFsdWUtPTE7dmFyIHRvRGVsZXRlPTA9PT0kJC5jb3VudC52YWx1ZTtpZih0b0RlbGV0ZSl7cnVuRGVzdHJ1Y3RvcigkJCl9fWZ1bmN0aW9uIGRvd25jYXN0UG9pbnRlcihwdHIscHRyQ2xhc3MsZGVzaXJlZENsYXNzKXtpZihwdHJDbGFzcz09PWRlc2lyZWRDbGFzcyl7cmV0dXJuIHB0cn1pZih1bmRlZmluZWQ9PT1kZXNpcmVkQ2xhc3MuYmFzZUNsYXNzKXtyZXR1cm4gbnVsbH12YXIgcnY9ZG93bmNhc3RQb2ludGVyKHB0cixwdHJDbGFzcyxkZXNpcmVkQ2xhc3MuYmFzZUNsYXNzKTtpZihydj09PW51bGwpe3JldHVybiBudWxsfXJldHVybiBkZXNpcmVkQ2xhc3MuZG93bmNhc3QocnYpfXZhciByZWdpc3RlcmVkUG9pbnRlcnM9e307ZnVuY3Rpb24gZ2V0SW5oZXJpdGVkSW5zdGFuY2VDb3VudCgpe3JldHVybiBPYmplY3Qua2V5cyhyZWdpc3RlcmVkSW5zdGFuY2VzKS5sZW5ndGh9ZnVuY3Rpb24gZ2V0TGl2ZUluaGVyaXRlZEluc3RhbmNlcygpe3ZhciBydj1bXTtmb3IodmFyIGsgaW4gcmVnaXN0ZXJlZEluc3RhbmNlcyl7aWYocmVnaXN0ZXJlZEluc3RhbmNlcy5oYXNPd25Qcm9wZXJ0eShrKSl7cnYucHVzaChyZWdpc3RlcmVkSW5zdGFuY2VzW2tdKX19cmV0dXJuIHJ2fXZhciBkZWxldGlvblF1ZXVlPVtdO2Z1bmN0aW9uIGZsdXNoUGVuZGluZ0RlbGV0ZXMoKXt3aGlsZShkZWxldGlvblF1ZXVlLmxlbmd0aCl7dmFyIG9iaj1kZWxldGlvblF1ZXVlLnBvcCgpO29iai4kJC5kZWxldGVTY2hlZHVsZWQ9ZmFsc2U7b2JqW1wiZGVsZXRlXCJdKCl9fXZhciBkZWxheUZ1bmN0aW9uPXVuZGVmaW5lZDtmdW5jdGlvbiBzZXREZWxheUZ1bmN0aW9uKGZuKXtkZWxheUZ1bmN0aW9uPWZuO2lmKGRlbGV0aW9uUXVldWUubGVuZ3RoJiZkZWxheUZ1bmN0aW9uKXtkZWxheUZ1bmN0aW9uKGZsdXNoUGVuZGluZ0RlbGV0ZXMpfX1mdW5jdGlvbiBpbml0X2VtYmluZCgpe01vZHVsZVtcImdldEluaGVyaXRlZEluc3RhbmNlQ291bnRcIl09Z2V0SW5oZXJpdGVkSW5zdGFuY2VDb3VudDtNb2R1bGVbXCJnZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzXCJdPWdldExpdmVJbmhlcml0ZWRJbnN0YW5jZXM7TW9kdWxlW1wiZmx1c2hQZW5kaW5nRGVsZXRlc1wiXT1mbHVzaFBlbmRpbmdEZWxldGVzO01vZHVsZVtcInNldERlbGF5RnVuY3Rpb25cIl09c2V0RGVsYXlGdW5jdGlvbn12YXIgcmVnaXN0ZXJlZEluc3RhbmNlcz17fTtmdW5jdGlvbiBnZXRCYXNlc3RQb2ludGVyKGNsYXNzXyxwdHIpe2lmKHB0cj09PXVuZGVmaW5lZCl7dGhyb3dCaW5kaW5nRXJyb3IoXCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWRcIil9d2hpbGUoY2xhc3NfLmJhc2VDbGFzcyl7cHRyPWNsYXNzXy51cGNhc3QocHRyKTtjbGFzc189Y2xhc3NfLmJhc2VDbGFzc31yZXR1cm4gcHRyfWZ1bmN0aW9uIGdldEluaGVyaXRlZEluc3RhbmNlKGNsYXNzXyxwdHIpe3B0cj1nZXRCYXNlc3RQb2ludGVyKGNsYXNzXyxwdHIpO3JldHVybiByZWdpc3RlcmVkSW5zdGFuY2VzW3B0cl19ZnVuY3Rpb24gbWFrZUNsYXNzSGFuZGxlKHByb3RvdHlwZSxyZWNvcmQpe2lmKCFyZWNvcmQucHRyVHlwZXx8IXJlY29yZC5wdHIpe3Rocm93SW50ZXJuYWxFcnJvcihcIm1ha2VDbGFzc0hhbmRsZSByZXF1aXJlcyBwdHIgYW5kIHB0clR5cGVcIil9dmFyIGhhc1NtYXJ0UHRyVHlwZT0hIXJlY29yZC5zbWFydFB0clR5cGU7dmFyIGhhc1NtYXJ0UHRyPSEhcmVjb3JkLnNtYXJ0UHRyO2lmKGhhc1NtYXJ0UHRyVHlwZSE9PWhhc1NtYXJ0UHRyKXt0aHJvd0ludGVybmFsRXJyb3IoXCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWRcIil9cmVjb3JkLmNvdW50PXt2YWx1ZToxfTtyZXR1cm4gYXR0YWNoRmluYWxpemVyKE9iamVjdC5jcmVhdGUocHJvdG90eXBlLHskJDp7dmFsdWU6cmVjb3JkfX0pKX1mdW5jdGlvbiBSZWdpc3RlcmVkUG9pbnRlcl9mcm9tV2lyZVR5cGUocHRyKXt2YXIgcmF3UG9pbnRlcj10aGlzLmdldFBvaW50ZWUocHRyKTtpZighcmF3UG9pbnRlcil7dGhpcy5kZXN0cnVjdG9yKHB0cik7cmV0dXJuIG51bGx9dmFyIHJlZ2lzdGVyZWRJbnN0YW5jZT1nZXRJbmhlcml0ZWRJbnN0YW5jZSh0aGlzLnJlZ2lzdGVyZWRDbGFzcyxyYXdQb2ludGVyKTtpZih1bmRlZmluZWQhPT1yZWdpc3RlcmVkSW5zdGFuY2Upe2lmKDA9PT1yZWdpc3RlcmVkSW5zdGFuY2UuJCQuY291bnQudmFsdWUpe3JlZ2lzdGVyZWRJbnN0YW5jZS4kJC5wdHI9cmF3UG9pbnRlcjtyZWdpc3RlcmVkSW5zdGFuY2UuJCQuc21hcnRQdHI9cHRyO3JldHVybiByZWdpc3RlcmVkSW5zdGFuY2VbXCJjbG9uZVwiXSgpfWVsc2V7dmFyIHJ2PXJlZ2lzdGVyZWRJbnN0YW5jZVtcImNsb25lXCJdKCk7dGhpcy5kZXN0cnVjdG9yKHB0cik7cmV0dXJuIHJ2fX1mdW5jdGlvbiBtYWtlRGVmYXVsdEhhbmRsZSgpe2lmKHRoaXMuaXNTbWFydFBvaW50ZXIpe3JldHVybiBtYWtlQ2xhc3NIYW5kbGUodGhpcy5yZWdpc3RlcmVkQ2xhc3MuaW5zdGFuY2VQcm90b3R5cGUse3B0clR5cGU6dGhpcy5wb2ludGVlVHlwZSxwdHI6cmF3UG9pbnRlcixzbWFydFB0clR5cGU6dGhpcyxzbWFydFB0cjpwdHJ9KX1lbHNle3JldHVybiBtYWtlQ2xhc3NIYW5kbGUodGhpcy5yZWdpc3RlcmVkQ2xhc3MuaW5zdGFuY2VQcm90b3R5cGUse3B0clR5cGU6dGhpcyxwdHI6cHRyfSl9fXZhciBhY3R1YWxUeXBlPXRoaXMucmVnaXN0ZXJlZENsYXNzLmdldEFjdHVhbFR5cGUocmF3UG9pbnRlcik7dmFyIHJlZ2lzdGVyZWRQb2ludGVyUmVjb3JkPXJlZ2lzdGVyZWRQb2ludGVyc1thY3R1YWxUeXBlXTtpZighcmVnaXN0ZXJlZFBvaW50ZXJSZWNvcmQpe3JldHVybiBtYWtlRGVmYXVsdEhhbmRsZS5jYWxsKHRoaXMpfXZhciB0b1R5cGU7aWYodGhpcy5pc0NvbnN0KXt0b1R5cGU9cmVnaXN0ZXJlZFBvaW50ZXJSZWNvcmQuY29uc3RQb2ludGVyVHlwZX1lbHNle3RvVHlwZT1yZWdpc3RlcmVkUG9pbnRlclJlY29yZC5wb2ludGVyVHlwZX12YXIgZHA9ZG93bmNhc3RQb2ludGVyKHJhd1BvaW50ZXIsdGhpcy5yZWdpc3RlcmVkQ2xhc3MsdG9UeXBlLnJlZ2lzdGVyZWRDbGFzcyk7aWYoZHA9PT1udWxsKXtyZXR1cm4gbWFrZURlZmF1bHRIYW5kbGUuY2FsbCh0aGlzKX1pZih0aGlzLmlzU21hcnRQb2ludGVyKXtyZXR1cm4gbWFrZUNsYXNzSGFuZGxlKHRvVHlwZS5yZWdpc3RlcmVkQ2xhc3MuaW5zdGFuY2VQcm90b3R5cGUse3B0clR5cGU6dG9UeXBlLHB0cjpkcCxzbWFydFB0clR5cGU6dGhpcyxzbWFydFB0cjpwdHJ9KX1lbHNle3JldHVybiBtYWtlQ2xhc3NIYW5kbGUodG9UeXBlLnJlZ2lzdGVyZWRDbGFzcy5pbnN0YW5jZVByb3RvdHlwZSx7cHRyVHlwZTp0b1R5cGUscHRyOmRwfSl9fWZ1bmN0aW9uIGF0dGFjaEZpbmFsaXplcihoYW5kbGUpe2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkpe2F0dGFjaEZpbmFsaXplcj1oYW5kbGU9PmhhbmRsZTtyZXR1cm4gaGFuZGxlfWZpbmFsaXphdGlvblJlZ2lzdHJ5PW5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeShpbmZvPT57cmVsZWFzZUNsYXNzSGFuZGxlKGluZm8uJCQpfSk7YXR0YWNoRmluYWxpemVyPWhhbmRsZT0+e3ZhciAkJD1oYW5kbGUuJCQ7dmFyIGhhc1NtYXJ0UHRyPSEhJCQuc21hcnRQdHI7aWYoaGFzU21hcnRQdHIpe3ZhciBpbmZvPXskJDokJH07ZmluYWxpemF0aW9uUmVnaXN0cnkucmVnaXN0ZXIoaGFuZGxlLGluZm8saGFuZGxlKX1yZXR1cm4gaGFuZGxlfTtkZXRhY2hGaW5hbGl6ZXI9aGFuZGxlPT5maW5hbGl6YXRpb25SZWdpc3RyeS51bnJlZ2lzdGVyKGhhbmRsZSk7cmV0dXJuIGF0dGFjaEZpbmFsaXplcihoYW5kbGUpfWZ1bmN0aW9uIENsYXNzSGFuZGxlX2Nsb25lKCl7aWYoIXRoaXMuJCQucHRyKXt0aHJvd0luc3RhbmNlQWxyZWFkeURlbGV0ZWQodGhpcyl9aWYodGhpcy4kJC5wcmVzZXJ2ZVBvaW50ZXJPbkRlbGV0ZSl7dGhpcy4kJC5jb3VudC52YWx1ZSs9MTtyZXR1cm4gdGhpc31lbHNle3ZhciBjbG9uZT1hdHRhY2hGaW5hbGl6ZXIoT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykseyQkOnt2YWx1ZTpzaGFsbG93Q29weUludGVybmFsUG9pbnRlcih0aGlzLiQkKX19KSk7Y2xvbmUuJCQuY291bnQudmFsdWUrPTE7Y2xvbmUuJCQuZGVsZXRlU2NoZWR1bGVkPWZhbHNlO3JldHVybiBjbG9uZX19ZnVuY3Rpb24gQ2xhc3NIYW5kbGVfZGVsZXRlKCl7aWYoIXRoaXMuJCQucHRyKXt0aHJvd0luc3RhbmNlQWxyZWFkeURlbGV0ZWQodGhpcyl9aWYodGhpcy4kJC5kZWxldGVTY2hlZHVsZWQmJiF0aGlzLiQkLnByZXNlcnZlUG9pbnRlck9uRGVsZXRlKXt0aHJvd0JpbmRpbmdFcnJvcihcIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb25cIil9ZGV0YWNoRmluYWxpemVyKHRoaXMpO3JlbGVhc2VDbGFzc0hhbmRsZSh0aGlzLiQkKTtpZighdGhpcy4kJC5wcmVzZXJ2ZVBvaW50ZXJPbkRlbGV0ZSl7dGhpcy4kJC5zbWFydFB0cj11bmRlZmluZWQ7dGhpcy4kJC5wdHI9dW5kZWZpbmVkfX1mdW5jdGlvbiBDbGFzc0hhbmRsZV9pc0RlbGV0ZWQoKXtyZXR1cm4hdGhpcy4kJC5wdHJ9ZnVuY3Rpb24gQ2xhc3NIYW5kbGVfZGVsZXRlTGF0ZXIoKXtpZighdGhpcy4kJC5wdHIpe3Rocm93SW5zdGFuY2VBbHJlYWR5RGVsZXRlZCh0aGlzKX1pZih0aGlzLiQkLmRlbGV0ZVNjaGVkdWxlZCYmIXRoaXMuJCQucHJlc2VydmVQb2ludGVyT25EZWxldGUpe3Rocm93QmluZGluZ0Vycm9yKFwiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvblwiKX1kZWxldGlvblF1ZXVlLnB1c2godGhpcyk7aWYoZGVsZXRpb25RdWV1ZS5sZW5ndGg9PT0xJiZkZWxheUZ1bmN0aW9uKXtkZWxheUZ1bmN0aW9uKGZsdXNoUGVuZGluZ0RlbGV0ZXMpfXRoaXMuJCQuZGVsZXRlU2NoZWR1bGVkPXRydWU7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gaW5pdF9DbGFzc0hhbmRsZSgpe0NsYXNzSGFuZGxlLnByb3RvdHlwZVtcImlzQWxpYXNPZlwiXT1DbGFzc0hhbmRsZV9pc0FsaWFzT2Y7Q2xhc3NIYW5kbGUucHJvdG90eXBlW1wiY2xvbmVcIl09Q2xhc3NIYW5kbGVfY2xvbmU7Q2xhc3NIYW5kbGUucHJvdG90eXBlW1wiZGVsZXRlXCJdPUNsYXNzSGFuZGxlX2RlbGV0ZTtDbGFzc0hhbmRsZS5wcm90b3R5cGVbXCJpc0RlbGV0ZWRcIl09Q2xhc3NIYW5kbGVfaXNEZWxldGVkO0NsYXNzSGFuZGxlLnByb3RvdHlwZVtcImRlbGV0ZUxhdGVyXCJdPUNsYXNzSGFuZGxlX2RlbGV0ZUxhdGVyfWZ1bmN0aW9uIENsYXNzSGFuZGxlKCl7fWZ1bmN0aW9uIGVuc3VyZU92ZXJsb2FkVGFibGUocHJvdG8sbWV0aG9kTmFtZSxodW1hbk5hbWUpe2lmKHVuZGVmaW5lZD09PXByb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGUpe3ZhciBwcmV2RnVuYz1wcm90b1ttZXRob2ROYW1lXTtwcm90b1ttZXRob2ROYW1lXT1mdW5jdGlvbigpe2lmKCFwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpKXt0aHJvd0JpbmRpbmdFcnJvcihgRnVuY3Rpb24gJyR7aHVtYW5OYW1lfScgY2FsbGVkIHdpdGggYW4gaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzICgke2FyZ3VtZW50cy5sZW5ndGh9KSAtIGV4cGVjdHMgb25lIG9mICgke3Byb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGV9KSFgKX1yZXR1cm4gcHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZVthcmd1bWVudHMubGVuZ3RoXS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O3Byb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGU9W107cHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZVtwcmV2RnVuYy5hcmdDb3VudF09cHJldkZ1bmN9fWZ1bmN0aW9uIGV4cG9zZVB1YmxpY1N5bWJvbChuYW1lLHZhbHVlLG51bUFyZ3VtZW50cyl7aWYoTW9kdWxlLmhhc093blByb3BlcnR5KG5hbWUpKXtpZih1bmRlZmluZWQ9PT1udW1Bcmd1bWVudHN8fHVuZGVmaW5lZCE9PU1vZHVsZVtuYW1lXS5vdmVybG9hZFRhYmxlJiZ1bmRlZmluZWQhPT1Nb2R1bGVbbmFtZV0ub3ZlcmxvYWRUYWJsZVtudW1Bcmd1bWVudHNdKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICcke25hbWV9JyB0d2ljZWApfWVuc3VyZU92ZXJsb2FkVGFibGUoTW9kdWxlLG5hbWUsbmFtZSk7aWYoTW9kdWxlLmhhc093blByb3BlcnR5KG51bUFyZ3VtZW50cykpe3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgb3ZlcmxvYWRzIG9mIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBudW1iZXIgb2YgYXJndW1lbnRzICgke251bUFyZ3VtZW50c30pIWApfU1vZHVsZVtuYW1lXS5vdmVybG9hZFRhYmxlW251bUFyZ3VtZW50c109dmFsdWV9ZWxzZXtNb2R1bGVbbmFtZV09dmFsdWU7aWYodW5kZWZpbmVkIT09bnVtQXJndW1lbnRzKXtNb2R1bGVbbmFtZV0ubnVtQXJndW1lbnRzPW51bUFyZ3VtZW50c319fWZ1bmN0aW9uIFJlZ2lzdGVyZWRDbGFzcyhuYW1lLGNvbnN0cnVjdG9yLGluc3RhbmNlUHJvdG90eXBlLHJhd0Rlc3RydWN0b3IsYmFzZUNsYXNzLGdldEFjdHVhbFR5cGUsdXBjYXN0LGRvd25jYXN0KXt0aGlzLm5hbWU9bmFtZTt0aGlzLmNvbnN0cnVjdG9yPWNvbnN0cnVjdG9yO3RoaXMuaW5zdGFuY2VQcm90b3R5cGU9aW5zdGFuY2VQcm90b3R5cGU7dGhpcy5yYXdEZXN0cnVjdG9yPXJhd0Rlc3RydWN0b3I7dGhpcy5iYXNlQ2xhc3M9YmFzZUNsYXNzO3RoaXMuZ2V0QWN0dWFsVHlwZT1nZXRBY3R1YWxUeXBlO3RoaXMudXBjYXN0PXVwY2FzdDt0aGlzLmRvd25jYXN0PWRvd25jYXN0O3RoaXMucHVyZVZpcnR1YWxGdW5jdGlvbnM9W119ZnVuY3Rpb24gdXBjYXN0UG9pbnRlcihwdHIscHRyQ2xhc3MsZGVzaXJlZENsYXNzKXt3aGlsZShwdHJDbGFzcyE9PWRlc2lyZWRDbGFzcyl7aWYoIXB0ckNsYXNzLnVwY2FzdCl7dGhyb3dCaW5kaW5nRXJyb3IoYEV4cGVjdGVkIG51bGwgb3IgaW5zdGFuY2Ugb2YgJHtkZXNpcmVkQ2xhc3MubmFtZX0sIGdvdCBhbiBpbnN0YW5jZSBvZiAke3B0ckNsYXNzLm5hbWV9YCl9cHRyPXB0ckNsYXNzLnVwY2FzdChwdHIpO3B0ckNsYXNzPXB0ckNsYXNzLmJhc2VDbGFzc31yZXR1cm4gcHRyfWZ1bmN0aW9uIGNvbnN0Tm9TbWFydFB0clJhd1BvaW50ZXJUb1dpcmVUeXBlKGRlc3RydWN0b3JzLGhhbmRsZSl7aWYoaGFuZGxlPT09bnVsbCl7aWYodGhpcy5pc1JlZmVyZW5jZSl7dGhyb3dCaW5kaW5nRXJyb3IoYG51bGwgaXMgbm90IGEgdmFsaWQgJHt0aGlzLm5hbWV9YCl9cmV0dXJuIDB9aWYoIWhhbmRsZS4kJCl7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBwYXNzIFwiJHtlbWJpbmRSZXByKGhhbmRsZSl9XCIgYXMgYSAke3RoaXMubmFtZX1gKX1pZighaGFuZGxlLiQkLnB0cil7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICR7dGhpcy5uYW1lfWApfXZhciBoYW5kbGVDbGFzcz1oYW5kbGUuJCQucHRyVHlwZS5yZWdpc3RlcmVkQ2xhc3M7dmFyIHB0cj11cGNhc3RQb2ludGVyKGhhbmRsZS4kJC5wdHIsaGFuZGxlQ2xhc3MsdGhpcy5yZWdpc3RlcmVkQ2xhc3MpO3JldHVybiBwdHJ9ZnVuY3Rpb24gZ2VuZXJpY1BvaW50ZXJUb1dpcmVUeXBlKGRlc3RydWN0b3JzLGhhbmRsZSl7dmFyIHB0cjtpZihoYW5kbGU9PT1udWxsKXtpZih0aGlzLmlzUmVmZXJlbmNlKXt0aHJvd0JpbmRpbmdFcnJvcihgbnVsbCBpcyBub3QgYSB2YWxpZCAke3RoaXMubmFtZX1gKX1pZih0aGlzLmlzU21hcnRQb2ludGVyKXtwdHI9dGhpcy5yYXdDb25zdHJ1Y3RvcigpO2lmKGRlc3RydWN0b3JzIT09bnVsbCl7ZGVzdHJ1Y3RvcnMucHVzaCh0aGlzLnJhd0Rlc3RydWN0b3IscHRyKX1yZXR1cm4gcHRyfWVsc2V7cmV0dXJuIDB9fWlmKCFoYW5kbGUuJCQpe3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgcGFzcyBcIiR7ZW1iaW5kUmVwcihoYW5kbGUpfVwiIGFzIGEgJHt0aGlzLm5hbWV9YCl9aWYoIWhhbmRsZS4kJC5wdHIpe3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAke3RoaXMubmFtZX1gKX1pZighdGhpcy5pc0NvbnN0JiZoYW5kbGUuJCQucHRyVHlwZS5pc0NvbnN0KXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAke2hhbmRsZS4kJC5zbWFydFB0clR5cGU/aGFuZGxlLiQkLnNtYXJ0UHRyVHlwZS5uYW1lOmhhbmRsZS4kJC5wdHJUeXBlLm5hbWV9IHRvIHBhcmFtZXRlciB0eXBlICR7dGhpcy5uYW1lfWApfXZhciBoYW5kbGVDbGFzcz1oYW5kbGUuJCQucHRyVHlwZS5yZWdpc3RlcmVkQ2xhc3M7cHRyPXVwY2FzdFBvaW50ZXIoaGFuZGxlLiQkLnB0cixoYW5kbGVDbGFzcyx0aGlzLnJlZ2lzdGVyZWRDbGFzcyk7aWYodGhpcy5pc1NtYXJ0UG9pbnRlcil7aWYodW5kZWZpbmVkPT09aGFuZGxlLiQkLnNtYXJ0UHRyKXt0aHJvd0JpbmRpbmdFcnJvcihcIlBhc3NpbmcgcmF3IHBvaW50ZXIgdG8gc21hcnQgcG9pbnRlciBpcyBpbGxlZ2FsXCIpfXN3aXRjaCh0aGlzLnNoYXJpbmdQb2xpY3kpe2Nhc2UgMDppZihoYW5kbGUuJCQuc21hcnRQdHJUeXBlPT09dGhpcyl7cHRyPWhhbmRsZS4kJC5zbWFydFB0cn1lbHNle3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICR7aGFuZGxlLiQkLnNtYXJ0UHRyVHlwZT9oYW5kbGUuJCQuc21hcnRQdHJUeXBlLm5hbWU6aGFuZGxlLiQkLnB0clR5cGUubmFtZX0gdG8gcGFyYW1ldGVyIHR5cGUgJHt0aGlzLm5hbWV9YCl9YnJlYWs7Y2FzZSAxOnB0cj1oYW5kbGUuJCQuc21hcnRQdHI7YnJlYWs7Y2FzZSAyOmlmKGhhbmRsZS4kJC5zbWFydFB0clR5cGU9PT10aGlzKXtwdHI9aGFuZGxlLiQkLnNtYXJ0UHRyfWVsc2V7dmFyIGNsb25lZEhhbmRsZT1oYW5kbGVbXCJjbG9uZVwiXSgpO3B0cj10aGlzLnJhd1NoYXJlKHB0cixFbXZhbC50b0hhbmRsZShmdW5jdGlvbigpe2Nsb25lZEhhbmRsZVtcImRlbGV0ZVwiXSgpfSkpO2lmKGRlc3RydWN0b3JzIT09bnVsbCl7ZGVzdHJ1Y3RvcnMucHVzaCh0aGlzLnJhd0Rlc3RydWN0b3IscHRyKX19YnJlYWs7ZGVmYXVsdDp0aHJvd0JpbmRpbmdFcnJvcihcIlVuc3VwcG9ydGluZyBzaGFyaW5nIHBvbGljeVwiKX19cmV0dXJuIHB0cn1mdW5jdGlvbiBub25Db25zdE5vU21hcnRQdHJSYXdQb2ludGVyVG9XaXJlVHlwZShkZXN0cnVjdG9ycyxoYW5kbGUpe2lmKGhhbmRsZT09PW51bGwpe2lmKHRoaXMuaXNSZWZlcmVuY2Upe3Rocm93QmluZGluZ0Vycm9yKGBudWxsIGlzIG5vdCBhIHZhbGlkICR7dGhpcy5uYW1lfWApfXJldHVybiAwfWlmKCFoYW5kbGUuJCQpe3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgcGFzcyBcIiR7ZW1iaW5kUmVwcihoYW5kbGUpfVwiIGFzIGEgJHt0aGlzLm5hbWV9YCl9aWYoIWhhbmRsZS4kJC5wdHIpe3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAke3RoaXMubmFtZX1gKX1pZihoYW5kbGUuJCQucHRyVHlwZS5pc0NvbnN0KXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAke2hhbmRsZS4kJC5wdHJUeXBlLm5hbWV9IHRvIHBhcmFtZXRlciB0eXBlICR7dGhpcy5uYW1lfWApfXZhciBoYW5kbGVDbGFzcz1oYW5kbGUuJCQucHRyVHlwZS5yZWdpc3RlcmVkQ2xhc3M7dmFyIHB0cj11cGNhc3RQb2ludGVyKGhhbmRsZS4kJC5wdHIsaGFuZGxlQ2xhc3MsdGhpcy5yZWdpc3RlcmVkQ2xhc3MpO3JldHVybiBwdHJ9ZnVuY3Rpb24gc2ltcGxlUmVhZFZhbHVlRnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIHRoaXNbXCJmcm9tV2lyZVR5cGVcIl0oSEVBUDMyW3BvaW50ZXI+PjJdKX1mdW5jdGlvbiBSZWdpc3RlcmVkUG9pbnRlcl9nZXRQb2ludGVlKHB0cil7aWYodGhpcy5yYXdHZXRQb2ludGVlKXtwdHI9dGhpcy5yYXdHZXRQb2ludGVlKHB0cil9cmV0dXJuIHB0cn1mdW5jdGlvbiBSZWdpc3RlcmVkUG9pbnRlcl9kZXN0cnVjdG9yKHB0cil7aWYodGhpcy5yYXdEZXN0cnVjdG9yKXt0aGlzLnJhd0Rlc3RydWN0b3IocHRyKX19ZnVuY3Rpb24gUmVnaXN0ZXJlZFBvaW50ZXJfZGVsZXRlT2JqZWN0KGhhbmRsZSl7aWYoaGFuZGxlIT09bnVsbCl7aGFuZGxlW1wiZGVsZXRlXCJdKCl9fWZ1bmN0aW9uIGluaXRfUmVnaXN0ZXJlZFBvaW50ZXIoKXtSZWdpc3RlcmVkUG9pbnRlci5wcm90b3R5cGUuZ2V0UG9pbnRlZT1SZWdpc3RlcmVkUG9pbnRlcl9nZXRQb2ludGVlO1JlZ2lzdGVyZWRQb2ludGVyLnByb3RvdHlwZS5kZXN0cnVjdG9yPVJlZ2lzdGVyZWRQb2ludGVyX2Rlc3RydWN0b3I7UmVnaXN0ZXJlZFBvaW50ZXIucHJvdG90eXBlW1wiYXJnUGFja0FkdmFuY2VcIl09ODtSZWdpc3RlcmVkUG9pbnRlci5wcm90b3R5cGVbXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiXT1zaW1wbGVSZWFkVmFsdWVGcm9tUG9pbnRlcjtSZWdpc3RlcmVkUG9pbnRlci5wcm90b3R5cGVbXCJkZWxldGVPYmplY3RcIl09UmVnaXN0ZXJlZFBvaW50ZXJfZGVsZXRlT2JqZWN0O1JlZ2lzdGVyZWRQb2ludGVyLnByb3RvdHlwZVtcImZyb21XaXJlVHlwZVwiXT1SZWdpc3RlcmVkUG9pbnRlcl9mcm9tV2lyZVR5cGV9ZnVuY3Rpb24gUmVnaXN0ZXJlZFBvaW50ZXIobmFtZSxyZWdpc3RlcmVkQ2xhc3MsaXNSZWZlcmVuY2UsaXNDb25zdCxpc1NtYXJ0UG9pbnRlcixwb2ludGVlVHlwZSxzaGFyaW5nUG9saWN5LHJhd0dldFBvaW50ZWUscmF3Q29uc3RydWN0b3IscmF3U2hhcmUscmF3RGVzdHJ1Y3Rvcil7dGhpcy5uYW1lPW5hbWU7dGhpcy5yZWdpc3RlcmVkQ2xhc3M9cmVnaXN0ZXJlZENsYXNzO3RoaXMuaXNSZWZlcmVuY2U9aXNSZWZlcmVuY2U7dGhpcy5pc0NvbnN0PWlzQ29uc3Q7dGhpcy5pc1NtYXJ0UG9pbnRlcj1pc1NtYXJ0UG9pbnRlcjt0aGlzLnBvaW50ZWVUeXBlPXBvaW50ZWVUeXBlO3RoaXMuc2hhcmluZ1BvbGljeT1zaGFyaW5nUG9saWN5O3RoaXMucmF3R2V0UG9pbnRlZT1yYXdHZXRQb2ludGVlO3RoaXMucmF3Q29uc3RydWN0b3I9cmF3Q29uc3RydWN0b3I7dGhpcy5yYXdTaGFyZT1yYXdTaGFyZTt0aGlzLnJhd0Rlc3RydWN0b3I9cmF3RGVzdHJ1Y3RvcjtpZighaXNTbWFydFBvaW50ZXImJnJlZ2lzdGVyZWRDbGFzcy5iYXNlQ2xhc3M9PT11bmRlZmluZWQpe2lmKGlzQ29uc3Qpe3RoaXNbXCJ0b1dpcmVUeXBlXCJdPWNvbnN0Tm9TbWFydFB0clJhd1BvaW50ZXJUb1dpcmVUeXBlO3RoaXMuZGVzdHJ1Y3RvckZ1bmN0aW9uPW51bGx9ZWxzZXt0aGlzW1widG9XaXJlVHlwZVwiXT1ub25Db25zdE5vU21hcnRQdHJSYXdQb2ludGVyVG9XaXJlVHlwZTt0aGlzLmRlc3RydWN0b3JGdW5jdGlvbj1udWxsfX1lbHNle3RoaXNbXCJ0b1dpcmVUeXBlXCJdPWdlbmVyaWNQb2ludGVyVG9XaXJlVHlwZX19ZnVuY3Rpb24gcmVwbGFjZVB1YmxpY1N5bWJvbChuYW1lLHZhbHVlLG51bUFyZ3VtZW50cyl7aWYoIU1vZHVsZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSl7dGhyb3dJbnRlcm5hbEVycm9yKFwiUmVwbGFjaW5nIG5vbmV4aXN0YW50IHB1YmxpYyBzeW1ib2xcIil9aWYodW5kZWZpbmVkIT09TW9kdWxlW25hbWVdLm92ZXJsb2FkVGFibGUmJnVuZGVmaW5lZCE9PW51bUFyZ3VtZW50cyl7TW9kdWxlW25hbWVdLm92ZXJsb2FkVGFibGVbbnVtQXJndW1lbnRzXT12YWx1ZX1lbHNle01vZHVsZVtuYW1lXT12YWx1ZTtNb2R1bGVbbmFtZV0uYXJnQ291bnQ9bnVtQXJndW1lbnRzfX1mdW5jdGlvbiBkeW5DYWxsTGVnYWN5KHNpZyxwdHIsYXJncyl7dmFyIGY9TW9kdWxlW1wiZHluQ2FsbF9cIitzaWddO3JldHVybiBhcmdzJiZhcmdzLmxlbmd0aD9mLmFwcGx5KG51bGwsW3B0cl0uY29uY2F0KGFyZ3MpKTpmLmNhbGwobnVsbCxwdHIpfXZhciB3YXNtVGFibGVNaXJyb3I9W107ZnVuY3Rpb24gZ2V0V2FzbVRhYmxlRW50cnkoZnVuY1B0cil7dmFyIGZ1bmM9d2FzbVRhYmxlTWlycm9yW2Z1bmNQdHJdO2lmKCFmdW5jKXtpZihmdW5jUHRyPj13YXNtVGFibGVNaXJyb3IubGVuZ3RoKXdhc21UYWJsZU1pcnJvci5sZW5ndGg9ZnVuY1B0cisxO3dhc21UYWJsZU1pcnJvcltmdW5jUHRyXT1mdW5jPXdhc21UYWJsZS5nZXQoZnVuY1B0cil9cmV0dXJuIGZ1bmN9ZnVuY3Rpb24gZHluQ2FsbChzaWcscHRyLGFyZ3Mpe2lmKHNpZy5pbmNsdWRlcyhcImpcIikpe3JldHVybiBkeW5DYWxsTGVnYWN5KHNpZyxwdHIsYXJncyl9dmFyIHJ0bj1nZXRXYXNtVGFibGVFbnRyeShwdHIpLmFwcGx5KG51bGwsYXJncyk7cmV0dXJuIHJ0bn1mdW5jdGlvbiBnZXREeW5DYWxsZXIoc2lnLHB0cil7dmFyIGFyZ0NhY2hlPVtdO3JldHVybiBmdW5jdGlvbigpe2FyZ0NhY2hlLmxlbmd0aD0wO09iamVjdC5hc3NpZ24oYXJnQ2FjaGUsYXJndW1lbnRzKTtyZXR1cm4gZHluQ2FsbChzaWcscHRyLGFyZ0NhY2hlKX19ZnVuY3Rpb24gZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oc2lnbmF0dXJlLHJhd0Z1bmN0aW9uKXtzaWduYXR1cmU9cmVhZExhdGluMVN0cmluZyhzaWduYXR1cmUpO2Z1bmN0aW9uIG1ha2VEeW5DYWxsZXIoKXtpZihzaWduYXR1cmUuaW5jbHVkZXMoXCJqXCIpKXtyZXR1cm4gZ2V0RHluQ2FsbGVyKHNpZ25hdHVyZSxyYXdGdW5jdGlvbil9cmV0dXJuIGdldFdhc21UYWJsZUVudHJ5KHJhd0Z1bmN0aW9uKX12YXIgZnA9bWFrZUR5bkNhbGxlcigpO2lmKHR5cGVvZiBmcCE9XCJmdW5jdGlvblwiKXt0aHJvd0JpbmRpbmdFcnJvcihgdW5rbm93biBmdW5jdGlvbiBwb2ludGVyIHdpdGggc2lnbmF0dXJlICR7c2lnbmF0dXJlfTogJHtyYXdGdW5jdGlvbn1gKX1yZXR1cm4gZnB9dmFyIFVuYm91bmRUeXBlRXJyb3I9dW5kZWZpbmVkO2Z1bmN0aW9uIGdldFR5cGVOYW1lKHR5cGUpe3ZhciBwdHI9X19fZ2V0VHlwZU5hbWUodHlwZSk7dmFyIHJ2PXJlYWRMYXRpbjFTdHJpbmcocHRyKTtfZnJlZShwdHIpO3JldHVybiBydn1mdW5jdGlvbiB0aHJvd1VuYm91bmRUeXBlRXJyb3IobWVzc2FnZSx0eXBlcyl7dmFyIHVuYm91bmRUeXBlcz1bXTt2YXIgc2Vlbj17fTtmdW5jdGlvbiB2aXNpdCh0eXBlKXtpZihzZWVuW3R5cGVdKXtyZXR1cm59aWYocmVnaXN0ZXJlZFR5cGVzW3R5cGVdKXtyZXR1cm59aWYodHlwZURlcGVuZGVuY2llc1t0eXBlXSl7dHlwZURlcGVuZGVuY2llc1t0eXBlXS5mb3JFYWNoKHZpc2l0KTtyZXR1cm59dW5ib3VuZFR5cGVzLnB1c2godHlwZSk7c2Vlblt0eXBlXT10cnVlfXR5cGVzLmZvckVhY2godmlzaXQpO3Rocm93IG5ldyBVbmJvdW5kVHlwZUVycm9yKGAke21lc3NhZ2V9OiBgK3VuYm91bmRUeXBlcy5tYXAoZ2V0VHlwZU5hbWUpLmpvaW4oW1wiLCBcIl0pKX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9jbGFzcyhyYXdUeXBlLHJhd1BvaW50ZXJUeXBlLHJhd0NvbnN0UG9pbnRlclR5cGUsYmFzZUNsYXNzUmF3VHlwZSxnZXRBY3R1YWxUeXBlU2lnbmF0dXJlLGdldEFjdHVhbFR5cGUsdXBjYXN0U2lnbmF0dXJlLHVwY2FzdCxkb3duY2FzdFNpZ25hdHVyZSxkb3duY2FzdCxuYW1lLGRlc3RydWN0b3JTaWduYXR1cmUscmF3RGVzdHJ1Y3Rvcil7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO2dldEFjdHVhbFR5cGU9ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oZ2V0QWN0dWFsVHlwZVNpZ25hdHVyZSxnZXRBY3R1YWxUeXBlKTtpZih1cGNhc3Qpe3VwY2FzdD1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbih1cGNhc3RTaWduYXR1cmUsdXBjYXN0KX1pZihkb3duY2FzdCl7ZG93bmNhc3Q9ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oZG93bmNhc3RTaWduYXR1cmUsZG93bmNhc3QpfXJhd0Rlc3RydWN0b3I9ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oZGVzdHJ1Y3RvclNpZ25hdHVyZSxyYXdEZXN0cnVjdG9yKTt2YXIgbGVnYWxGdW5jdGlvbk5hbWU9bWFrZUxlZ2FsRnVuY3Rpb25OYW1lKG5hbWUpO2V4cG9zZVB1YmxpY1N5bWJvbChsZWdhbEZ1bmN0aW9uTmFtZSxmdW5jdGlvbigpe3Rocm93VW5ib3VuZFR5cGVFcnJvcihgQ2Fubm90IGNvbnN0cnVjdCAke25hbWV9IGR1ZSB0byB1bmJvdW5kIHR5cGVzYCxbYmFzZUNsYXNzUmF3VHlwZV0pfSk7d2hlbkRlcGVuZGVudFR5cGVzQXJlUmVzb2x2ZWQoW3Jhd1R5cGUscmF3UG9pbnRlclR5cGUscmF3Q29uc3RQb2ludGVyVHlwZV0sYmFzZUNsYXNzUmF3VHlwZT9bYmFzZUNsYXNzUmF3VHlwZV06W10sZnVuY3Rpb24oYmFzZSl7YmFzZT1iYXNlWzBdO3ZhciBiYXNlQ2xhc3M7dmFyIGJhc2VQcm90b3R5cGU7aWYoYmFzZUNsYXNzUmF3VHlwZSl7YmFzZUNsYXNzPWJhc2UucmVnaXN0ZXJlZENsYXNzO2Jhc2VQcm90b3R5cGU9YmFzZUNsYXNzLmluc3RhbmNlUHJvdG90eXBlfWVsc2V7YmFzZVByb3RvdHlwZT1DbGFzc0hhbmRsZS5wcm90b3R5cGV9dmFyIGNvbnN0cnVjdG9yPWNyZWF0ZU5hbWVkRnVuY3Rpb24obGVnYWxGdW5jdGlvbk5hbWUsZnVuY3Rpb24oKXtpZihPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykhPT1pbnN0YW5jZVByb3RvdHlwZSl7dGhyb3cgbmV3IEJpbmRpbmdFcnJvcihcIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgXCIrbmFtZSl9aWYodW5kZWZpbmVkPT09cmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yX2JvZHkpe3Rocm93IG5ldyBCaW5kaW5nRXJyb3IobmFtZStcIiBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvclwiKX12YXIgYm9keT1yZWdpc3RlcmVkQ2xhc3MuY29uc3RydWN0b3JfYm9keVthcmd1bWVudHMubGVuZ3RoXTtpZih1bmRlZmluZWQ9PT1ib2R5KXt0aHJvdyBuZXcgQmluZGluZ0Vycm9yKGBUcmllZCB0byBpbnZva2UgY3RvciBvZiAke25hbWV9IHdpdGggaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyAoJHthcmd1bWVudHMubGVuZ3RofSkgLSBleHBlY3RlZCAoJHtPYmplY3Qua2V5cyhyZWdpc3RlcmVkQ2xhc3MuY29uc3RydWN0b3JfYm9keSkudG9TdHJpbmcoKX0pIHBhcmFtZXRlcnMgaW5zdGVhZCFgKX1yZXR1cm4gYm9keS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KTt2YXIgaW5zdGFuY2VQcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShiYXNlUHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6Y29uc3RydWN0b3J9fSk7Y29uc3RydWN0b3IucHJvdG90eXBlPWluc3RhbmNlUHJvdG90eXBlO3ZhciByZWdpc3RlcmVkQ2xhc3M9bmV3IFJlZ2lzdGVyZWRDbGFzcyhuYW1lLGNvbnN0cnVjdG9yLGluc3RhbmNlUHJvdG90eXBlLHJhd0Rlc3RydWN0b3IsYmFzZUNsYXNzLGdldEFjdHVhbFR5cGUsdXBjYXN0LGRvd25jYXN0KTtpZihyZWdpc3RlcmVkQ2xhc3MuYmFzZUNsYXNzKXtpZihyZWdpc3RlcmVkQ2xhc3MuYmFzZUNsYXNzLl9fZGVyaXZlZENsYXNzZXM9PT11bmRlZmluZWQpe3JlZ2lzdGVyZWRDbGFzcy5iYXNlQ2xhc3MuX19kZXJpdmVkQ2xhc3Nlcz1bXX1yZWdpc3RlcmVkQ2xhc3MuYmFzZUNsYXNzLl9fZGVyaXZlZENsYXNzZXMucHVzaChyZWdpc3RlcmVkQ2xhc3MpfXZhciByZWZlcmVuY2VDb252ZXJ0ZXI9bmV3IFJlZ2lzdGVyZWRQb2ludGVyKG5hbWUscmVnaXN0ZXJlZENsYXNzLHRydWUsZmFsc2UsZmFsc2UpO3ZhciBwb2ludGVyQ29udmVydGVyPW5ldyBSZWdpc3RlcmVkUG9pbnRlcihuYW1lK1wiKlwiLHJlZ2lzdGVyZWRDbGFzcyxmYWxzZSxmYWxzZSxmYWxzZSk7dmFyIGNvbnN0UG9pbnRlckNvbnZlcnRlcj1uZXcgUmVnaXN0ZXJlZFBvaW50ZXIobmFtZStcIiBjb25zdCpcIixyZWdpc3RlcmVkQ2xhc3MsZmFsc2UsdHJ1ZSxmYWxzZSk7cmVnaXN0ZXJlZFBvaW50ZXJzW3Jhd1R5cGVdPXtwb2ludGVyVHlwZTpwb2ludGVyQ29udmVydGVyLGNvbnN0UG9pbnRlclR5cGU6Y29uc3RQb2ludGVyQ29udmVydGVyfTtyZXBsYWNlUHVibGljU3ltYm9sKGxlZ2FsRnVuY3Rpb25OYW1lLGNvbnN0cnVjdG9yKTtyZXR1cm5bcmVmZXJlbmNlQ29udmVydGVyLHBvaW50ZXJDb252ZXJ0ZXIsY29uc3RQb2ludGVyQ29udmVydGVyXX0pfWZ1bmN0aW9uIGhlYXAzMlZlY3RvclRvQXJyYXkoY291bnQsZmlyc3RFbGVtZW50KXt2YXIgYXJyYXk9W107Zm9yKHZhciBpPTA7aTxjb3VudDtpKyspe2FycmF5LnB1c2goSEVBUFUzMltmaXJzdEVsZW1lbnQraSo0Pj4yXSl9cmV0dXJuIGFycmF5fWZ1bmN0aW9uIHJ1bkRlc3RydWN0b3JzKGRlc3RydWN0b3JzKXt3aGlsZShkZXN0cnVjdG9ycy5sZW5ndGgpe3ZhciBwdHI9ZGVzdHJ1Y3RvcnMucG9wKCk7dmFyIGRlbD1kZXN0cnVjdG9ycy5wb3AoKTtkZWwocHRyKX19ZnVuY3Rpb24gbmV3RnVuYyhjb25zdHJ1Y3Rvcixhcmd1bWVudExpc3Qpe2lmKCEoY29uc3RydWN0b3IgaW5zdGFuY2VvZiBGdW5jdGlvbikpe3Rocm93IG5ldyBUeXBlRXJyb3IoYG5ld18gY2FsbGVkIHdpdGggY29uc3RydWN0b3IgdHlwZSAke3R5cGVvZiBjb25zdHJ1Y3Rvcn0gd2hpY2ggaXMgbm90IGEgZnVuY3Rpb25gKX12YXIgZHVtbXk9Y3JlYXRlTmFtZWRGdW5jdGlvbihjb25zdHJ1Y3Rvci5uYW1lfHxcInVua25vd25GdW5jdGlvbk5hbWVcIixmdW5jdGlvbigpe30pO2R1bW15LnByb3RvdHlwZT1jb25zdHJ1Y3Rvci5wcm90b3R5cGU7dmFyIG9iaj1uZXcgZHVtbXk7dmFyIHI9Y29uc3RydWN0b3IuYXBwbHkob2JqLGFyZ3VtZW50TGlzdCk7cmV0dXJuIHIgaW5zdGFuY2VvZiBPYmplY3Q/cjpvYmp9ZnVuY3Rpb24gY3JhZnRJbnZva2VyRnVuY3Rpb24oaHVtYW5OYW1lLGFyZ1R5cGVzLGNsYXNzVHlwZSxjcHBJbnZva2VyRnVuYyxjcHBUYXJnZXRGdW5jLGlzQXN5bmMpe3ZhciBhcmdDb3VudD1hcmdUeXBlcy5sZW5ndGg7aWYoYXJnQ291bnQ8Mil7dGhyb3dCaW5kaW5nRXJyb3IoXCJhcmdUeXBlcyBhcnJheSBzaXplIG1pc21hdGNoISBNdXN0IGF0IGxlYXN0IGdldCByZXR1cm4gdmFsdWUgYW5kICd0aGlzJyB0eXBlcyFcIil9dmFyIGlzQ2xhc3NNZXRob2RGdW5jPWFyZ1R5cGVzWzFdIT09bnVsbCYmY2xhc3NUeXBlIT09bnVsbDt2YXIgbmVlZHNEZXN0cnVjdG9yU3RhY2s9ZmFsc2U7Zm9yKHZhciBpPTE7aTxhcmdUeXBlcy5sZW5ndGg7KytpKXtpZihhcmdUeXBlc1tpXSE9PW51bGwmJmFyZ1R5cGVzW2ldLmRlc3RydWN0b3JGdW5jdGlvbj09PXVuZGVmaW5lZCl7bmVlZHNEZXN0cnVjdG9yU3RhY2s9dHJ1ZTticmVha319dmFyIHJldHVybnM9YXJnVHlwZXNbMF0ubmFtZSE9PVwidm9pZFwiO3ZhciBhcmdzTGlzdD1cIlwiO3ZhciBhcmdzTGlzdFdpcmVkPVwiXCI7Zm9yKHZhciBpPTA7aTxhcmdDb3VudC0yOysraSl7YXJnc0xpc3QrPShpIT09MD9cIiwgXCI6XCJcIikrXCJhcmdcIitpO2FyZ3NMaXN0V2lyZWQrPShpIT09MD9cIiwgXCI6XCJcIikrXCJhcmdcIitpK1wiV2lyZWRcIn12YXIgaW52b2tlckZuQm9keT1gXFxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gJHttYWtlTGVnYWxGdW5jdGlvbk5hbWUoaHVtYW5OYW1lKX0oJHthcmdzTGlzdH0pIHtcXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAke2FyZ0NvdW50LTJ9KSB7XFxuICAgICAgICAgIHRocm93QmluZGluZ0Vycm9yKCdmdW5jdGlvbiAke2h1bWFuTmFtZX0gY2FsbGVkIHdpdGggJHthcmd1bWVudHMubGVuZ3RofSBhcmd1bWVudHMsIGV4cGVjdGVkICR7YXJnQ291bnQtMn0gYXJncyEnKTtcXG4gICAgICAgIH1gO2lmKG5lZWRzRGVzdHJ1Y3RvclN0YWNrKXtpbnZva2VyRm5Cb2R5Kz1cInZhciBkZXN0cnVjdG9ycyA9IFtdO1xcblwifXZhciBkdG9yU3RhY2s9bmVlZHNEZXN0cnVjdG9yU3RhY2s/XCJkZXN0cnVjdG9yc1wiOlwibnVsbFwiO3ZhciBhcmdzMT1bXCJ0aHJvd0JpbmRpbmdFcnJvclwiLFwiaW52b2tlclwiLFwiZm5cIixcInJ1bkRlc3RydWN0b3JzXCIsXCJyZXRUeXBlXCIsXCJjbGFzc1BhcmFtXCJdO3ZhciBhcmdzMj1bdGhyb3dCaW5kaW5nRXJyb3IsY3BwSW52b2tlckZ1bmMsY3BwVGFyZ2V0RnVuYyxydW5EZXN0cnVjdG9ycyxhcmdUeXBlc1swXSxhcmdUeXBlc1sxXV07aWYoaXNDbGFzc01ldGhvZEZ1bmMpe2ludm9rZXJGbkJvZHkrPVwidmFyIHRoaXNXaXJlZCA9IGNsYXNzUGFyYW0udG9XaXJlVHlwZShcIitkdG9yU3RhY2srXCIsIHRoaXMpO1xcblwifWZvcih2YXIgaT0wO2k8YXJnQ291bnQtMjsrK2kpe2ludm9rZXJGbkJvZHkrPVwidmFyIGFyZ1wiK2krXCJXaXJlZCA9IGFyZ1R5cGVcIitpK1wiLnRvV2lyZVR5cGUoXCIrZHRvclN0YWNrK1wiLCBhcmdcIitpK1wiKTsgLy8gXCIrYXJnVHlwZXNbaSsyXS5uYW1lK1wiXFxuXCI7YXJnczEucHVzaChcImFyZ1R5cGVcIitpKTthcmdzMi5wdXNoKGFyZ1R5cGVzW2krMl0pfWlmKGlzQ2xhc3NNZXRob2RGdW5jKXthcmdzTGlzdFdpcmVkPVwidGhpc1dpcmVkXCIrKGFyZ3NMaXN0V2lyZWQubGVuZ3RoPjA/XCIsIFwiOlwiXCIpK2FyZ3NMaXN0V2lyZWR9aW52b2tlckZuQm9keSs9KHJldHVybnN8fGlzQXN5bmM/XCJ2YXIgcnYgPSBcIjpcIlwiKStcImludm9rZXIoZm5cIisoYXJnc0xpc3RXaXJlZC5sZW5ndGg+MD9cIiwgXCI6XCJcIikrYXJnc0xpc3RXaXJlZCtcIik7XFxuXCI7aWYobmVlZHNEZXN0cnVjdG9yU3RhY2spe2ludm9rZXJGbkJvZHkrPVwicnVuRGVzdHJ1Y3RvcnMoZGVzdHJ1Y3RvcnMpO1xcblwifWVsc2V7Zm9yKHZhciBpPWlzQ2xhc3NNZXRob2RGdW5jPzE6MjtpPGFyZ1R5cGVzLmxlbmd0aDsrK2kpe3ZhciBwYXJhbU5hbWU9aT09PTE/XCJ0aGlzV2lyZWRcIjpcImFyZ1wiKyhpLTIpK1wiV2lyZWRcIjtpZihhcmdUeXBlc1tpXS5kZXN0cnVjdG9yRnVuY3Rpb24hPT1udWxsKXtpbnZva2VyRm5Cb2R5Kz1wYXJhbU5hbWUrXCJfZHRvcihcIitwYXJhbU5hbWUrXCIpOyAvLyBcIithcmdUeXBlc1tpXS5uYW1lK1wiXFxuXCI7YXJnczEucHVzaChwYXJhbU5hbWUrXCJfZHRvclwiKTthcmdzMi5wdXNoKGFyZ1R5cGVzW2ldLmRlc3RydWN0b3JGdW5jdGlvbil9fX1pZihyZXR1cm5zKXtpbnZva2VyRm5Cb2R5Kz1cInZhciByZXQgPSByZXRUeXBlLmZyb21XaXJlVHlwZShydik7XFxuXCIrXCJyZXR1cm4gcmV0O1xcblwifWVsc2V7fWludm9rZXJGbkJvZHkrPVwifVxcblwiO2FyZ3MxLnB1c2goaW52b2tlckZuQm9keSk7cmV0dXJuIG5ld0Z1bmMoRnVuY3Rpb24sYXJnczEpLmFwcGx5KG51bGwsYXJnczIpfWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2NvbnN0cnVjdG9yKHJhd0NsYXNzVHlwZSxhcmdDb3VudCxyYXdBcmdUeXBlc0FkZHIsaW52b2tlclNpZ25hdHVyZSxpbnZva2VyLHJhd0NvbnN0cnVjdG9yKXthc3NlcnQoYXJnQ291bnQ+MCk7dmFyIHJhd0FyZ1R5cGVzPWhlYXAzMlZlY3RvclRvQXJyYXkoYXJnQ291bnQscmF3QXJnVHlwZXNBZGRyKTtpbnZva2VyPWVtYmluZF9fcmVxdWlyZUZ1bmN0aW9uKGludm9rZXJTaWduYXR1cmUsaW52b2tlcik7d2hlbkRlcGVuZGVudFR5cGVzQXJlUmVzb2x2ZWQoW10sW3Jhd0NsYXNzVHlwZV0sZnVuY3Rpb24oY2xhc3NUeXBlKXtjbGFzc1R5cGU9Y2xhc3NUeXBlWzBdO3ZhciBodW1hbk5hbWU9YGNvbnN0cnVjdG9yICR7Y2xhc3NUeXBlLm5hbWV9YDtpZih1bmRlZmluZWQ9PT1jbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yX2JvZHkpe2NsYXNzVHlwZS5yZWdpc3RlcmVkQ2xhc3MuY29uc3RydWN0b3JfYm9keT1bXX1pZih1bmRlZmluZWQhPT1jbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yX2JvZHlbYXJnQ291bnQtMV0pe3Rocm93IG5ldyBCaW5kaW5nRXJyb3IoYENhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBjb25zdHJ1Y3RvcnMgd2l0aCBpZGVudGljYWwgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCR7YXJnQ291bnQtMX0pIGZvciBjbGFzcyAnJHtjbGFzc1R5cGUubmFtZX0nISBPdmVybG9hZCByZXNvbHV0aW9uIGlzIGN1cnJlbnRseSBvbmx5IHBlcmZvcm1lZCB1c2luZyB0aGUgcGFyYW1ldGVyIGNvdW50LCBub3QgYWN0dWFsIHR5cGUgaW5mbyFgKX1jbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yX2JvZHlbYXJnQ291bnQtMV09KCk9Pnt0aHJvd1VuYm91bmRUeXBlRXJyb3IoYENhbm5vdCBjb25zdHJ1Y3QgJHtjbGFzc1R5cGUubmFtZX0gZHVlIHRvIHVuYm91bmQgdHlwZXNgLHJhd0FyZ1R5cGVzKX07d2hlbkRlcGVuZGVudFR5cGVzQXJlUmVzb2x2ZWQoW10scmF3QXJnVHlwZXMsZnVuY3Rpb24oYXJnVHlwZXMpe2FyZ1R5cGVzLnNwbGljZSgxLDAsbnVsbCk7Y2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3Rvcl9ib2R5W2FyZ0NvdW50LTFdPWNyYWZ0SW52b2tlckZ1bmN0aW9uKGh1bWFuTmFtZSxhcmdUeXBlcyxudWxsLGludm9rZXIscmF3Q29uc3RydWN0b3IpO3JldHVybltdfSk7cmV0dXJuW119KX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9jbGFzc19mdW5jdGlvbihyYXdDbGFzc1R5cGUsbWV0aG9kTmFtZSxhcmdDb3VudCxyYXdBcmdUeXBlc0FkZHIsaW52b2tlclNpZ25hdHVyZSxyYXdJbnZva2VyLGNvbnRleHQsaXNQdXJlVmlydHVhbCxpc0FzeW5jKXt2YXIgcmF3QXJnVHlwZXM9aGVhcDMyVmVjdG9yVG9BcnJheShhcmdDb3VudCxyYXdBcmdUeXBlc0FkZHIpO21ldGhvZE5hbWU9cmVhZExhdGluMVN0cmluZyhtZXRob2ROYW1lKTtyYXdJbnZva2VyPWVtYmluZF9fcmVxdWlyZUZ1bmN0aW9uKGludm9rZXJTaWduYXR1cmUscmF3SW52b2tlcik7d2hlbkRlcGVuZGVudFR5cGVzQXJlUmVzb2x2ZWQoW10sW3Jhd0NsYXNzVHlwZV0sZnVuY3Rpb24oY2xhc3NUeXBlKXtjbGFzc1R5cGU9Y2xhc3NUeXBlWzBdO3ZhciBodW1hbk5hbWU9YCR7Y2xhc3NUeXBlLm5hbWV9LiR7bWV0aG9kTmFtZX1gO2lmKG1ldGhvZE5hbWUuc3RhcnRzV2l0aChcIkBAXCIpKXttZXRob2ROYW1lPVN5bWJvbFttZXRob2ROYW1lLnN1YnN0cmluZygyKV19aWYoaXNQdXJlVmlydHVhbCl7Y2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5wdXJlVmlydHVhbEZ1bmN0aW9ucy5wdXNoKG1ldGhvZE5hbWUpfWZ1bmN0aW9uIHVuYm91bmRUeXBlc0hhbmRsZXIoKXt0aHJvd1VuYm91bmRUeXBlRXJyb3IoYENhbm5vdCBjYWxsICR7aHVtYW5OYW1lfSBkdWUgdG8gdW5ib3VuZCB0eXBlc2AscmF3QXJnVHlwZXMpfXZhciBwcm90bz1jbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLmluc3RhbmNlUHJvdG90eXBlO3ZhciBtZXRob2Q9cHJvdG9bbWV0aG9kTmFtZV07aWYodW5kZWZpbmVkPT09bWV0aG9kfHx1bmRlZmluZWQ9PT1tZXRob2Qub3ZlcmxvYWRUYWJsZSYmbWV0aG9kLmNsYXNzTmFtZSE9PWNsYXNzVHlwZS5uYW1lJiZtZXRob2QuYXJnQ291bnQ9PT1hcmdDb3VudC0yKXt1bmJvdW5kVHlwZXNIYW5kbGVyLmFyZ0NvdW50PWFyZ0NvdW50LTI7dW5ib3VuZFR5cGVzSGFuZGxlci5jbGFzc05hbWU9Y2xhc3NUeXBlLm5hbWU7cHJvdG9bbWV0aG9kTmFtZV09dW5ib3VuZFR5cGVzSGFuZGxlcn1lbHNle2Vuc3VyZU92ZXJsb2FkVGFibGUocHJvdG8sbWV0aG9kTmFtZSxodW1hbk5hbWUpO3Byb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGVbYXJnQ291bnQtMl09dW5ib3VuZFR5cGVzSGFuZGxlcn13aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZChbXSxyYXdBcmdUeXBlcyxmdW5jdGlvbihhcmdUeXBlcyl7dmFyIG1lbWJlckZ1bmN0aW9uPWNyYWZ0SW52b2tlckZ1bmN0aW9uKGh1bWFuTmFtZSxhcmdUeXBlcyxjbGFzc1R5cGUscmF3SW52b2tlcixjb250ZXh0LGlzQXN5bmMpO2lmKHVuZGVmaW5lZD09PXByb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGUpe21lbWJlckZ1bmN0aW9uLmFyZ0NvdW50PWFyZ0NvdW50LTI7cHJvdG9bbWV0aG9kTmFtZV09bWVtYmVyRnVuY3Rpb259ZWxzZXtwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlW2FyZ0NvdW50LTJdPW1lbWJlckZ1bmN0aW9ufXJldHVybltdfSk7cmV0dXJuW119KX1mdW5jdGlvbiBIYW5kbGVBbGxvY2F0b3IoKXt0aGlzLmFsbG9jYXRlZD1bdW5kZWZpbmVkXTt0aGlzLmZyZWVsaXN0PVtdO3RoaXMuZ2V0PWZ1bmN0aW9uKGlkKXtyZXR1cm4gdGhpcy5hbGxvY2F0ZWRbaWRdfTt0aGlzLmhhcz1mdW5jdGlvbihpZCl7cmV0dXJuIHRoaXMuYWxsb2NhdGVkW2lkXSE9PXVuZGVmaW5lZH07dGhpcy5hbGxvY2F0ZT1mdW5jdGlvbihoYW5kbGUpe3ZhciBpZD10aGlzLmZyZWVsaXN0LnBvcCgpfHx0aGlzLmFsbG9jYXRlZC5sZW5ndGg7dGhpcy5hbGxvY2F0ZWRbaWRdPWhhbmRsZTtyZXR1cm4gaWR9O3RoaXMuZnJlZT1mdW5jdGlvbihpZCl7dGhpcy5hbGxvY2F0ZWRbaWRdPXVuZGVmaW5lZDt0aGlzLmZyZWVsaXN0LnB1c2goaWQpfX12YXIgZW12YWxfaGFuZGxlcz1uZXcgSGFuZGxlQWxsb2NhdG9yO2Z1bmN0aW9uIF9fZW12YWxfZGVjcmVmKGhhbmRsZSl7aWYoaGFuZGxlPj1lbXZhbF9oYW5kbGVzLnJlc2VydmVkJiYwPT09LS1lbXZhbF9oYW5kbGVzLmdldChoYW5kbGUpLnJlZmNvdW50KXtlbXZhbF9oYW5kbGVzLmZyZWUoaGFuZGxlKX19ZnVuY3Rpb24gY291bnRfZW12YWxfaGFuZGxlcygpe3ZhciBjb3VudD0wO2Zvcih2YXIgaT1lbXZhbF9oYW5kbGVzLnJlc2VydmVkO2k8ZW12YWxfaGFuZGxlcy5hbGxvY2F0ZWQubGVuZ3RoOysraSl7aWYoZW12YWxfaGFuZGxlcy5hbGxvY2F0ZWRbaV0hPT11bmRlZmluZWQpeysrY291bnR9fXJldHVybiBjb3VudH1mdW5jdGlvbiBpbml0X2VtdmFsKCl7ZW12YWxfaGFuZGxlcy5hbGxvY2F0ZWQucHVzaCh7dmFsdWU6dW5kZWZpbmVkfSx7dmFsdWU6bnVsbH0se3ZhbHVlOnRydWV9LHt2YWx1ZTpmYWxzZX0pO2VtdmFsX2hhbmRsZXMucmVzZXJ2ZWQ9ZW12YWxfaGFuZGxlcy5hbGxvY2F0ZWQubGVuZ3RoO01vZHVsZVtcImNvdW50X2VtdmFsX2hhbmRsZXNcIl09Y291bnRfZW12YWxfaGFuZGxlc312YXIgRW12YWw9e3RvVmFsdWU6aGFuZGxlPT57aWYoIWhhbmRsZSl7dGhyb3dCaW5kaW5nRXJyb3IoXCJDYW5ub3QgdXNlIGRlbGV0ZWQgdmFsLiBoYW5kbGUgPSBcIitoYW5kbGUpfXJldHVybiBlbXZhbF9oYW5kbGVzLmdldChoYW5kbGUpLnZhbHVlfSx0b0hhbmRsZTp2YWx1ZT0+e3N3aXRjaCh2YWx1ZSl7Y2FzZSB1bmRlZmluZWQ6cmV0dXJuIDE7Y2FzZSBudWxsOnJldHVybiAyO2Nhc2UgdHJ1ZTpyZXR1cm4gMztjYXNlIGZhbHNlOnJldHVybiA0O2RlZmF1bHQ6e3JldHVybiBlbXZhbF9oYW5kbGVzLmFsbG9jYXRlKHtyZWZjb3VudDoxLHZhbHVlOnZhbHVlfSl9fX19O2Z1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2VtdmFsKHJhd1R5cGUsbmFtZSl7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3JlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsXCJmcm9tV2lyZVR5cGVcIjpmdW5jdGlvbihoYW5kbGUpe3ZhciBydj1FbXZhbC50b1ZhbHVlKGhhbmRsZSk7X19lbXZhbF9kZWNyZWYoaGFuZGxlKTtyZXR1cm4gcnZ9LFwidG9XaXJlVHlwZVwiOmZ1bmN0aW9uKGRlc3RydWN0b3JzLHZhbHVlKXtyZXR1cm4gRW12YWwudG9IYW5kbGUodmFsdWUpfSxcImFyZ1BhY2tBZHZhbmNlXCI6OCxcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCI6c2ltcGxlUmVhZFZhbHVlRnJvbVBvaW50ZXIsZGVzdHJ1Y3RvckZ1bmN0aW9uOm51bGx9KX1mdW5jdGlvbiBlbWJpbmRSZXByKHYpe2lmKHY9PT1udWxsKXtyZXR1cm5cIm51bGxcIn12YXIgdD10eXBlb2YgdjtpZih0PT09XCJvYmplY3RcInx8dD09PVwiYXJyYXlcInx8dD09PVwiZnVuY3Rpb25cIil7cmV0dXJuIHYudG9TdHJpbmcoKX1lbHNle3JldHVyblwiXCIrdn19ZnVuY3Rpb24gZmxvYXRSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0KXtzd2l0Y2goc2hpZnQpe2Nhc2UgMjpyZXR1cm4gZnVuY3Rpb24ocG9pbnRlcil7cmV0dXJuIHRoaXNbXCJmcm9tV2lyZVR5cGVcIl0oSEVBUEYzMltwb2ludGVyPj4yXSl9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24ocG9pbnRlcil7cmV0dXJuIHRoaXNbXCJmcm9tV2lyZVR5cGVcIl0oSEVBUEY2NFtwb2ludGVyPj4zXSl9O2RlZmF1bHQ6dGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gZmxvYXQgdHlwZTogXCIrbmFtZSl9fWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2Zsb2F0KHJhd1R5cGUsbmFtZSxzaXplKXt2YXIgc2hpZnQ9Z2V0U2hpZnRGcm9tU2l6ZShzaXplKTtuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gdmFsdWV9LFwidG9XaXJlVHlwZVwiOmZ1bmN0aW9uKGRlc3RydWN0b3JzLHZhbHVlKXtyZXR1cm4gdmFsdWV9LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjpmbG9hdFJlYWRWYWx1ZUZyb21Qb2ludGVyKG5hbWUsc2hpZnQpLGRlc3RydWN0b3JGdW5jdGlvbjpudWxsfSl9ZnVuY3Rpb24gaW50ZWdlclJlYWRWYWx1ZUZyb21Qb2ludGVyKG5hbWUsc2hpZnQsc2lnbmVkKXtzd2l0Y2goc2hpZnQpe2Nhc2UgMDpyZXR1cm4gc2lnbmVkP2Z1bmN0aW9uIHJlYWRTOEZyb21Qb2ludGVyKHBvaW50ZXIpe3JldHVybiBIRUFQOFtwb2ludGVyXX06ZnVuY3Rpb24gcmVhZFU4RnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIEhFQVBVOFtwb2ludGVyXX07Y2FzZSAxOnJldHVybiBzaWduZWQ/ZnVuY3Rpb24gcmVhZFMxNkZyb21Qb2ludGVyKHBvaW50ZXIpe3JldHVybiBIRUFQMTZbcG9pbnRlcj4+MV19OmZ1bmN0aW9uIHJlYWRVMTZGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUFUxNltwb2ludGVyPj4xXX07Y2FzZSAyOnJldHVybiBzaWduZWQ/ZnVuY3Rpb24gcmVhZFMzMkZyb21Qb2ludGVyKHBvaW50ZXIpe3JldHVybiBIRUFQMzJbcG9pbnRlcj4+Ml19OmZ1bmN0aW9uIHJlYWRVMzJGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUFUzMltwb2ludGVyPj4yXX07ZGVmYXVsdDp0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5rbm93biBpbnRlZ2VyIHR5cGU6IFwiK25hbWUpfX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9pbnRlZ2VyKHByaW1pdGl2ZVR5cGUsbmFtZSxzaXplLG1pblJhbmdlLG1heFJhbmdlKXtuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7aWYobWF4UmFuZ2U9PT0tMSl7bWF4UmFuZ2U9NDI5NDk2NzI5NX12YXIgc2hpZnQ9Z2V0U2hpZnRGcm9tU2l6ZShzaXplKTt2YXIgZnJvbVdpcmVUeXBlPXZhbHVlPT52YWx1ZTtpZihtaW5SYW5nZT09PTApe3ZhciBiaXRzaGlmdD0zMi04KnNpemU7ZnJvbVdpcmVUeXBlPXZhbHVlPT52YWx1ZTw8Yml0c2hpZnQ+Pj5iaXRzaGlmdH12YXIgaXNVbnNpZ25lZFR5cGU9bmFtZS5pbmNsdWRlcyhcInVuc2lnbmVkXCIpO3ZhciBjaGVja0Fzc2VydGlvbnM9KHZhbHVlLHRvVHlwZU5hbWUpPT57fTt2YXIgdG9XaXJlVHlwZTtpZihpc1Vuc2lnbmVkVHlwZSl7dG9XaXJlVHlwZT1mdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7Y2hlY2tBc3NlcnRpb25zKHZhbHVlLHRoaXMubmFtZSk7cmV0dXJuIHZhbHVlPj4+MH19ZWxzZXt0b1dpcmVUeXBlPWZ1bmN0aW9uKGRlc3RydWN0b3JzLHZhbHVlKXtjaGVja0Fzc2VydGlvbnModmFsdWUsdGhpcy5uYW1lKTtyZXR1cm4gdmFsdWV9fXJlZ2lzdGVyVHlwZShwcmltaXRpdmVUeXBlLHtuYW1lOm5hbWUsXCJmcm9tV2lyZVR5cGVcIjpmcm9tV2lyZVR5cGUsXCJ0b1dpcmVUeXBlXCI6dG9XaXJlVHlwZSxcImFyZ1BhY2tBZHZhbmNlXCI6OCxcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCI6aW50ZWdlclJlYWRWYWx1ZUZyb21Qb2ludGVyKG5hbWUsc2hpZnQsbWluUmFuZ2UhPT0wKSxkZXN0cnVjdG9yRnVuY3Rpb246bnVsbH0pfWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX21lbW9yeV92aWV3KHJhd1R5cGUsZGF0YVR5cGVJbmRleCxuYW1lKXt2YXIgdHlwZU1hcHBpbmc9W0ludDhBcnJheSxVaW50OEFycmF5LEludDE2QXJyYXksVWludDE2QXJyYXksSW50MzJBcnJheSxVaW50MzJBcnJheSxGbG9hdDMyQXJyYXksRmxvYXQ2NEFycmF5XTt2YXIgVEE9dHlwZU1hcHBpbmdbZGF0YVR5cGVJbmRleF07ZnVuY3Rpb24gZGVjb2RlTWVtb3J5VmlldyhoYW5kbGUpe2hhbmRsZT1oYW5kbGU+PjI7dmFyIGhlYXA9SEVBUFUzMjt2YXIgc2l6ZT1oZWFwW2hhbmRsZV07dmFyIGRhdGE9aGVhcFtoYW5kbGUrMV07cmV0dXJuIG5ldyBUQShoZWFwLmJ1ZmZlcixkYXRhLHNpemUpfW5hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtyZWdpc3RlclR5cGUocmF3VHlwZSx7bmFtZTpuYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZGVjb2RlTWVtb3J5VmlldyxcImFyZ1BhY2tBZHZhbmNlXCI6OCxcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCI6ZGVjb2RlTWVtb3J5Vmlld30se2lnbm9yZUR1cGxpY2F0ZVJlZ2lzdHJhdGlvbnM6dHJ1ZX0pfWZ1bmN0aW9uIHN0cmluZ1RvVVRGOEFycmF5KHN0cixoZWFwLG91dElkeCxtYXhCeXRlc1RvV3JpdGUpe2lmKCEobWF4Qnl0ZXNUb1dyaXRlPjApKXJldHVybiAwO3ZhciBzdGFydElkeD1vdXRJZHg7dmFyIGVuZElkeD1vdXRJZHgrbWF4Qnl0ZXNUb1dyaXRlLTE7Zm9yKHZhciBpPTA7aTxzdHIubGVuZ3RoOysraSl7dmFyIHU9c3RyLmNoYXJDb2RlQXQoaSk7aWYodT49NTUyOTYmJnU8PTU3MzQzKXt2YXIgdTE9c3RyLmNoYXJDb2RlQXQoKytpKTt1PTY1NTM2KygodSYxMDIzKTw8MTApfHUxJjEwMjN9aWYodTw9MTI3KXtpZihvdXRJZHg+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT11fWVsc2UgaWYodTw9MjA0Nyl7aWYob3V0SWR4KzE+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT0xOTJ8dT4+NjtoZWFwW291dElkeCsrXT0xMjh8dSY2M31lbHNlIGlmKHU8PTY1NTM1KXtpZihvdXRJZHgrMj49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPTIyNHx1Pj4xMjtoZWFwW291dElkeCsrXT0xMjh8dT4+NiY2MztoZWFwW291dElkeCsrXT0xMjh8dSY2M31lbHNle2lmKG91dElkeCszPj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109MjQwfHU+PjE4O2hlYXBbb3V0SWR4KytdPTEyOHx1Pj4xMiY2MztoZWFwW291dElkeCsrXT0xMjh8dT4+NiY2MztoZWFwW291dElkeCsrXT0xMjh8dSY2M319aGVhcFtvdXRJZHhdPTA7cmV0dXJuIG91dElkeC1zdGFydElkeH1mdW5jdGlvbiBzdHJpbmdUb1VURjgoc3RyLG91dFB0cixtYXhCeXRlc1RvV3JpdGUpe3JldHVybiBzdHJpbmdUb1VURjhBcnJheShzdHIsSEVBUFU4LG91dFB0cixtYXhCeXRlc1RvV3JpdGUpfWZ1bmN0aW9uIGxlbmd0aEJ5dGVzVVRGOChzdHIpe3ZhciBsZW49MDtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgYz1zdHIuY2hhckNvZGVBdChpKTtpZihjPD0xMjcpe2xlbisrfWVsc2UgaWYoYzw9MjA0Nyl7bGVuKz0yfWVsc2UgaWYoYz49NTUyOTYmJmM8PTU3MzQzKXtsZW4rPTQ7KytpfWVsc2V7bGVuKz0zfX1yZXR1cm4gbGVufXZhciBVVEY4RGVjb2Rlcj10eXBlb2YgVGV4dERlY29kZXIhPVwidW5kZWZpbmVkXCI/bmV3IFRleHREZWNvZGVyKFwidXRmOFwiKTp1bmRlZmluZWQ7ZnVuY3Rpb24gVVRGOEFycmF5VG9TdHJpbmcoaGVhcE9yQXJyYXksaWR4LG1heEJ5dGVzVG9SZWFkKXt2YXIgZW5kSWR4PWlkeCttYXhCeXRlc1RvUmVhZDt2YXIgZW5kUHRyPWlkeDt3aGlsZShoZWFwT3JBcnJheVtlbmRQdHJdJiYhKGVuZFB0cj49ZW5kSWR4KSkrK2VuZFB0cjtpZihlbmRQdHItaWR4PjE2JiZoZWFwT3JBcnJheS5idWZmZXImJlVURjhEZWNvZGVyKXtyZXR1cm4gVVRGOERlY29kZXIuZGVjb2RlKGhlYXBPckFycmF5LnN1YmFycmF5KGlkeCxlbmRQdHIpKX12YXIgc3RyPVwiXCI7d2hpbGUoaWR4PGVuZFB0cil7dmFyIHUwPWhlYXBPckFycmF5W2lkeCsrXTtpZighKHUwJjEyOCkpe3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSh1MCk7Y29udGludWV9dmFyIHUxPWhlYXBPckFycmF5W2lkeCsrXSY2MztpZigodTAmMjI0KT09MTkyKXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoKHUwJjMxKTw8Nnx1MSk7Y29udGludWV9dmFyIHUyPWhlYXBPckFycmF5W2lkeCsrXSY2MztpZigodTAmMjQwKT09MjI0KXt1MD0odTAmMTUpPDwxMnx1MTw8Nnx1Mn1lbHNle3UwPSh1MCY3KTw8MTh8dTE8PDEyfHUyPDw2fGhlYXBPckFycmF5W2lkeCsrXSY2M31pZih1MDw2NTUzNil7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHUwKX1lbHNle3ZhciBjaD11MC02NTUzNjtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTZ8Y2g+PjEwLDU2MzIwfGNoJjEwMjMpfX1yZXR1cm4gc3RyfWZ1bmN0aW9uIFVURjhUb1N0cmluZyhwdHIsbWF4Qnl0ZXNUb1JlYWQpe3JldHVybiBwdHI/VVRGOEFycmF5VG9TdHJpbmcoSEVBUFU4LHB0cixtYXhCeXRlc1RvUmVhZCk6XCJcIn1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9zdGRfc3RyaW5nKHJhd1R5cGUsbmFtZSl7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3ZhciBzdGRTdHJpbmdJc1VURjg9bmFtZT09PVwic3RkOjpzdHJpbmdcIjtyZWdpc3RlclR5cGUocmF3VHlwZSx7bmFtZTpuYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZnVuY3Rpb24odmFsdWUpe3ZhciBsZW5ndGg9SEVBUFUzMlt2YWx1ZT4+Ml07dmFyIHBheWxvYWQ9dmFsdWUrNDt2YXIgc3RyO2lmKHN0ZFN0cmluZ0lzVVRGOCl7dmFyIGRlY29kZVN0YXJ0UHRyPXBheWxvYWQ7Zm9yKHZhciBpPTA7aTw9bGVuZ3RoOysraSl7dmFyIGN1cnJlbnRCeXRlUHRyPXBheWxvYWQraTtpZihpPT1sZW5ndGh8fEhFQVBVOFtjdXJyZW50Qnl0ZVB0cl09PTApe3ZhciBtYXhSZWFkPWN1cnJlbnRCeXRlUHRyLWRlY29kZVN0YXJ0UHRyO3ZhciBzdHJpbmdTZWdtZW50PVVURjhUb1N0cmluZyhkZWNvZGVTdGFydFB0cixtYXhSZWFkKTtpZihzdHI9PT11bmRlZmluZWQpe3N0cj1zdHJpbmdTZWdtZW50fWVsc2V7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDApO3N0cis9c3RyaW5nU2VnbWVudH1kZWNvZGVTdGFydFB0cj1jdXJyZW50Qnl0ZVB0cisxfX19ZWxzZXt2YXIgYT1uZXcgQXJyYXkobGVuZ3RoKTtmb3IodmFyIGk9MDtpPGxlbmd0aDsrK2kpe2FbaV09U3RyaW5nLmZyb21DaGFyQ29kZShIRUFQVThbcGF5bG9hZCtpXSl9c3RyPWEuam9pbihcIlwiKX1fZnJlZSh2YWx1ZSk7cmV0dXJuIHN0cn0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsdmFsdWUpe2lmKHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpe3ZhbHVlPW5ldyBVaW50OEFycmF5KHZhbHVlKX12YXIgbGVuZ3RoO3ZhciB2YWx1ZUlzT2ZUeXBlU3RyaW5nPXR5cGVvZiB2YWx1ZT09XCJzdHJpbmdcIjtpZighKHZhbHVlSXNPZlR5cGVTdHJpbmd8fHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheXx8dmFsdWUgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheXx8dmFsdWUgaW5zdGFuY2VvZiBJbnQ4QXJyYXkpKXt0aHJvd0JpbmRpbmdFcnJvcihcIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmdcIil9aWYoc3RkU3RyaW5nSXNVVEY4JiZ2YWx1ZUlzT2ZUeXBlU3RyaW5nKXtsZW5ndGg9bGVuZ3RoQnl0ZXNVVEY4KHZhbHVlKX1lbHNle2xlbmd0aD12YWx1ZS5sZW5ndGh9dmFyIGJhc2U9X21hbGxvYyg0K2xlbmd0aCsxKTt2YXIgcHRyPWJhc2UrNDtIRUFQVTMyW2Jhc2U+PjJdPWxlbmd0aDtpZihzdGRTdHJpbmdJc1VURjgmJnZhbHVlSXNPZlR5cGVTdHJpbmcpe3N0cmluZ1RvVVRGOCh2YWx1ZSxwdHIsbGVuZ3RoKzEpfWVsc2V7aWYodmFsdWVJc09mVHlwZVN0cmluZyl7Zm9yKHZhciBpPTA7aTxsZW5ndGg7KytpKXt2YXIgY2hhckNvZGU9dmFsdWUuY2hhckNvZGVBdChpKTtpZihjaGFyQ29kZT4yNTUpe19mcmVlKHB0cik7dGhyb3dCaW5kaW5nRXJyb3IoXCJTdHJpbmcgaGFzIFVURi0xNiBjb2RlIHVuaXRzIHRoYXQgZG8gbm90IGZpdCBpbiA4IGJpdHNcIil9SEVBUFU4W3B0citpXT1jaGFyQ29kZX19ZWxzZXtmb3IodmFyIGk9MDtpPGxlbmd0aDsrK2kpe0hFQVBVOFtwdHIraV09dmFsdWVbaV19fX1pZihkZXN0cnVjdG9ycyE9PW51bGwpe2Rlc3RydWN0b3JzLnB1c2goX2ZyZWUsYmFzZSl9cmV0dXJuIGJhc2V9LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjpzaW1wbGVSZWFkVmFsdWVGcm9tUG9pbnRlcixkZXN0cnVjdG9yRnVuY3Rpb246ZnVuY3Rpb24ocHRyKXtfZnJlZShwdHIpfX0pfXZhciBVVEYxNkRlY29kZXI9dHlwZW9mIFRleHREZWNvZGVyIT1cInVuZGVmaW5lZFwiP25ldyBUZXh0RGVjb2RlcihcInV0Zi0xNmxlXCIpOnVuZGVmaW5lZDtmdW5jdGlvbiBVVEYxNlRvU3RyaW5nKHB0cixtYXhCeXRlc1RvUmVhZCl7dmFyIGVuZFB0cj1wdHI7dmFyIGlkeD1lbmRQdHI+PjE7dmFyIG1heElkeD1pZHgrbWF4Qnl0ZXNUb1JlYWQvMjt3aGlsZSghKGlkeD49bWF4SWR4KSYmSEVBUFUxNltpZHhdKSsraWR4O2VuZFB0cj1pZHg8PDE7aWYoZW5kUHRyLXB0cj4zMiYmVVRGMTZEZWNvZGVyKXJldHVybiBVVEYxNkRlY29kZXIuZGVjb2RlKEhFQVBVOC5zdWJhcnJheShwdHIsZW5kUHRyKSk7dmFyIHN0cj1cIlwiO2Zvcih2YXIgaT0wOyEoaT49bWF4Qnl0ZXNUb1JlYWQvMik7KytpKXt2YXIgY29kZVVuaXQ9SEVBUDE2W3B0citpKjI+PjFdO2lmKGNvZGVVbml0PT0wKWJyZWFrO3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZShjb2RlVW5pdCl9cmV0dXJuIHN0cn1mdW5jdGlvbiBzdHJpbmdUb1VURjE2KHN0cixvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKXtpZihtYXhCeXRlc1RvV3JpdGU9PT11bmRlZmluZWQpe21heEJ5dGVzVG9Xcml0ZT0yMTQ3NDgzNjQ3fWlmKG1heEJ5dGVzVG9Xcml0ZTwyKXJldHVybiAwO21heEJ5dGVzVG9Xcml0ZS09Mjt2YXIgc3RhcnRQdHI9b3V0UHRyO3ZhciBudW1DaGFyc1RvV3JpdGU9bWF4Qnl0ZXNUb1dyaXRlPHN0ci5sZW5ndGgqMj9tYXhCeXRlc1RvV3JpdGUvMjpzdHIubGVuZ3RoO2Zvcih2YXIgaT0wO2k8bnVtQ2hhcnNUb1dyaXRlOysraSl7dmFyIGNvZGVVbml0PXN0ci5jaGFyQ29kZUF0KGkpO0hFQVAxNltvdXRQdHI+PjFdPWNvZGVVbml0O291dFB0cis9Mn1IRUFQMTZbb3V0UHRyPj4xXT0wO3JldHVybiBvdXRQdHItc3RhcnRQdHJ9ZnVuY3Rpb24gbGVuZ3RoQnl0ZXNVVEYxNihzdHIpe3JldHVybiBzdHIubGVuZ3RoKjJ9ZnVuY3Rpb24gVVRGMzJUb1N0cmluZyhwdHIsbWF4Qnl0ZXNUb1JlYWQpe3ZhciBpPTA7dmFyIHN0cj1cIlwiO3doaWxlKCEoaT49bWF4Qnl0ZXNUb1JlYWQvNCkpe3ZhciB1dGYzMj1IRUFQMzJbcHRyK2kqND4+Ml07aWYodXRmMzI9PTApYnJlYWs7KytpO2lmKHV0ZjMyPj02NTUzNil7dmFyIGNoPXV0ZjMyLTY1NTM2O3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NnxjaD4+MTAsNTYzMjB8Y2gmMTAyMyl9ZWxzZXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUodXRmMzIpfX1yZXR1cm4gc3RyfWZ1bmN0aW9uIHN0cmluZ1RvVVRGMzIoc3RyLG91dFB0cixtYXhCeXRlc1RvV3JpdGUpe2lmKG1heEJ5dGVzVG9Xcml0ZT09PXVuZGVmaW5lZCl7bWF4Qnl0ZXNUb1dyaXRlPTIxNDc0ODM2NDd9aWYobWF4Qnl0ZXNUb1dyaXRlPDQpcmV0dXJuIDA7dmFyIHN0YXJ0UHRyPW91dFB0cjt2YXIgZW5kUHRyPXN0YXJ0UHRyK21heEJ5dGVzVG9Xcml0ZS00O2Zvcih2YXIgaT0wO2k8c3RyLmxlbmd0aDsrK2kpe3ZhciBjb2RlVW5pdD1zdHIuY2hhckNvZGVBdChpKTtpZihjb2RlVW5pdD49NTUyOTYmJmNvZGVVbml0PD01NzM0Myl7dmFyIHRyYWlsU3Vycm9nYXRlPXN0ci5jaGFyQ29kZUF0KCsraSk7Y29kZVVuaXQ9NjU1MzYrKChjb2RlVW5pdCYxMDIzKTw8MTApfHRyYWlsU3Vycm9nYXRlJjEwMjN9SEVBUDMyW291dFB0cj4+Ml09Y29kZVVuaXQ7b3V0UHRyKz00O2lmKG91dFB0cis0PmVuZFB0cilicmVha31IRUFQMzJbb3V0UHRyPj4yXT0wO3JldHVybiBvdXRQdHItc3RhcnRQdHJ9ZnVuY3Rpb24gbGVuZ3RoQnl0ZXNVVEYzMihzdHIpe3ZhciBsZW49MDtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgY29kZVVuaXQ9c3RyLmNoYXJDb2RlQXQoaSk7aWYoY29kZVVuaXQ+PTU1Mjk2JiZjb2RlVW5pdDw9NTczNDMpKytpO2xlbis9NH1yZXR1cm4gbGVufWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX3N0ZF93c3RyaW5nKHJhd1R5cGUsY2hhclNpemUsbmFtZSl7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3ZhciBkZWNvZGVTdHJpbmcsZW5jb2RlU3RyaW5nLGdldEhlYXAsbGVuZ3RoQnl0ZXNVVEYsc2hpZnQ7aWYoY2hhclNpemU9PT0yKXtkZWNvZGVTdHJpbmc9VVRGMTZUb1N0cmluZztlbmNvZGVTdHJpbmc9c3RyaW5nVG9VVEYxNjtsZW5ndGhCeXRlc1VURj1sZW5ndGhCeXRlc1VURjE2O2dldEhlYXA9KCk9PkhFQVBVMTY7c2hpZnQ9MX1lbHNlIGlmKGNoYXJTaXplPT09NCl7ZGVjb2RlU3RyaW5nPVVURjMyVG9TdHJpbmc7ZW5jb2RlU3RyaW5nPXN0cmluZ1RvVVRGMzI7bGVuZ3RoQnl0ZXNVVEY9bGVuZ3RoQnl0ZXNVVEYzMjtnZXRIZWFwPSgpPT5IRUFQVTMyO3NoaWZ0PTJ9cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKHZhbHVlKXt2YXIgbGVuZ3RoPUhFQVBVMzJbdmFsdWU+PjJdO3ZhciBIRUFQPWdldEhlYXAoKTt2YXIgc3RyO3ZhciBkZWNvZGVTdGFydFB0cj12YWx1ZSs0O2Zvcih2YXIgaT0wO2k8PWxlbmd0aDsrK2kpe3ZhciBjdXJyZW50Qnl0ZVB0cj12YWx1ZSs0K2kqY2hhclNpemU7aWYoaT09bGVuZ3RofHxIRUFQW2N1cnJlbnRCeXRlUHRyPj5zaGlmdF09PTApe3ZhciBtYXhSZWFkQnl0ZXM9Y3VycmVudEJ5dGVQdHItZGVjb2RlU3RhcnRQdHI7dmFyIHN0cmluZ1NlZ21lbnQ9ZGVjb2RlU3RyaW5nKGRlY29kZVN0YXJ0UHRyLG1heFJlYWRCeXRlcyk7aWYoc3RyPT09dW5kZWZpbmVkKXtzdHI9c3RyaW5nU2VnbWVudH1lbHNle3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSgwKTtzdHIrPXN0cmluZ1NlZ21lbnR9ZGVjb2RlU3RhcnRQdHI9Y3VycmVudEJ5dGVQdHIrY2hhclNpemV9fV9mcmVlKHZhbHVlKTtyZXR1cm4gc3RyfSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7aWYoISh0eXBlb2YgdmFsdWU9PVwic3RyaW5nXCIpKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHBhc3Mgbm9uLXN0cmluZyB0byBDKysgc3RyaW5nIHR5cGUgJHtuYW1lfWApfXZhciBsZW5ndGg9bGVuZ3RoQnl0ZXNVVEYodmFsdWUpO3ZhciBwdHI9X21hbGxvYyg0K2xlbmd0aCtjaGFyU2l6ZSk7SEVBUFUzMltwdHI+PjJdPWxlbmd0aD4+c2hpZnQ7ZW5jb2RlU3RyaW5nKHZhbHVlLHB0cis0LGxlbmd0aCtjaGFyU2l6ZSk7aWYoZGVzdHJ1Y3RvcnMhPT1udWxsKXtkZXN0cnVjdG9ycy5wdXNoKF9mcmVlLHB0cil9cmV0dXJuIHB0cn0sXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOnNpbXBsZVJlYWRWYWx1ZUZyb21Qb2ludGVyLGRlc3RydWN0b3JGdW5jdGlvbjpmdW5jdGlvbihwdHIpe19mcmVlKHB0cil9fSl9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfdm9pZChyYXdUeXBlLG5hbWUpe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtyZWdpc3RlclR5cGUocmF3VHlwZSx7aXNWb2lkOnRydWUsbmFtZTpuYW1lLFwiYXJnUGFja0FkdmFuY2VcIjowLFwiZnJvbVdpcmVUeXBlXCI6ZnVuY3Rpb24oKXtyZXR1cm4gdW5kZWZpbmVkfSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyxvKXtyZXR1cm4gdW5kZWZpbmVkfX0pfWZ1bmN0aW9uIF9fZW12YWxfaW5jcmVmKGhhbmRsZSl7aWYoaGFuZGxlPjQpe2VtdmFsX2hhbmRsZXMuZ2V0KGhhbmRsZSkucmVmY291bnQrPTF9fWZ1bmN0aW9uIHJlcXVpcmVSZWdpc3RlcmVkVHlwZShyYXdUeXBlLGh1bWFuTmFtZSl7dmFyIGltcGw9cmVnaXN0ZXJlZFR5cGVzW3Jhd1R5cGVdO2lmKHVuZGVmaW5lZD09PWltcGwpe3Rocm93QmluZGluZ0Vycm9yKGh1bWFuTmFtZStcIiBoYXMgdW5rbm93biB0eXBlIFwiK2dldFR5cGVOYW1lKHJhd1R5cGUpKX1yZXR1cm4gaW1wbH1mdW5jdGlvbiBfX2VtdmFsX3Rha2VfdmFsdWUodHlwZSxhcmcpe3R5cGU9cmVxdWlyZVJlZ2lzdGVyZWRUeXBlKHR5cGUsXCJfZW12YWxfdGFrZV92YWx1ZVwiKTt2YXIgdj10eXBlW1wicmVhZFZhbHVlRnJvbVBvaW50ZXJcIl0oYXJnKTtyZXR1cm4gRW12YWwudG9IYW5kbGUodil9ZnVuY3Rpb24gX2Fib3J0KCl7YWJvcnQoXCJcIil9ZnVuY3Rpb24gX2Vtc2NyaXB0ZW5fbWVtY3B5X2JpZyhkZXN0LHNyYyxudW0pe0hFQVBVOC5jb3B5V2l0aGluKGRlc3Qsc3JjLHNyYytudW0pfWZ1bmN0aW9uIGdldEhlYXBNYXgoKXtyZXR1cm4gMjE0NzQ4MzY0OH1mdW5jdGlvbiBlbXNjcmlwdGVuX3JlYWxsb2NfYnVmZmVyKHNpemUpe3ZhciBiPXdhc21NZW1vcnkuYnVmZmVyO3ZhciBwYWdlcz1zaXplLWIuYnl0ZUxlbmd0aCs2NTUzNT4+PjE2O3RyeXt3YXNtTWVtb3J5Lmdyb3cocGFnZXMpO3VwZGF0ZU1lbW9yeVZpZXdzKCk7cmV0dXJuIDF9Y2F0Y2goZSl7fX1mdW5jdGlvbiBfZW1zY3JpcHRlbl9yZXNpemVfaGVhcChyZXF1ZXN0ZWRTaXplKXt2YXIgb2xkU2l6ZT1IRUFQVTgubGVuZ3RoO3JlcXVlc3RlZFNpemU9cmVxdWVzdGVkU2l6ZT4+PjA7dmFyIG1heEhlYXBTaXplPWdldEhlYXBNYXgoKTtpZihyZXF1ZXN0ZWRTaXplPm1heEhlYXBTaXplKXtyZXR1cm4gZmFsc2V9dmFyIGFsaWduVXA9KHgsbXVsdGlwbGUpPT54KyhtdWx0aXBsZS14JW11bHRpcGxlKSVtdWx0aXBsZTtmb3IodmFyIGN1dERvd249MTtjdXREb3duPD00O2N1dERvd24qPTIpe3ZhciBvdmVyR3Jvd25IZWFwU2l6ZT1vbGRTaXplKigxKy4yL2N1dERvd24pO292ZXJHcm93bkhlYXBTaXplPU1hdGgubWluKG92ZXJHcm93bkhlYXBTaXplLHJlcXVlc3RlZFNpemUrMTAwNjYzMjk2KTt2YXIgbmV3U2l6ZT1NYXRoLm1pbihtYXhIZWFwU2l6ZSxhbGlnblVwKE1hdGgubWF4KHJlcXVlc3RlZFNpemUsb3Zlckdyb3duSGVhcFNpemUpLDY1NTM2KSk7dmFyIHJlcGxhY2VtZW50PWVtc2NyaXB0ZW5fcmVhbGxvY19idWZmZXIobmV3U2l6ZSk7aWYocmVwbGFjZW1lbnQpe3JldHVybiB0cnVlfX1yZXR1cm4gZmFsc2V9ZnVuY3Rpb24gaW5pdFJhbmRvbUZpbGwoKXtpZih0eXBlb2YgY3J5cHRvPT1cIm9iamVjdFwiJiZ0eXBlb2YgY3J5cHRvW1wiZ2V0UmFuZG9tVmFsdWVzXCJdPT1cImZ1bmN0aW9uXCIpe3JldHVybiB2aWV3PT5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHZpZXcpfWVsc2UgYWJvcnQoXCJpbml0UmFuZG9tRGV2aWNlXCIpfWZ1bmN0aW9uIHJhbmRvbUZpbGwodmlldyl7cmV0dXJuKHJhbmRvbUZpbGw9aW5pdFJhbmRvbUZpbGwoKSkodmlldyl9ZnVuY3Rpb24gX2dldGVudHJvcHkoYnVmZmVyLHNpemUpe3JhbmRvbUZpbGwoSEVBUFU4LnN1YmFycmF5KGJ1ZmZlcixidWZmZXIrc2l6ZSkpO3JldHVybiAwfWVtYmluZF9pbml0X2NoYXJDb2RlcygpO0JpbmRpbmdFcnJvcj1Nb2R1bGVbXCJCaW5kaW5nRXJyb3JcIl09ZXh0ZW5kRXJyb3IoRXJyb3IsXCJCaW5kaW5nRXJyb3JcIik7SW50ZXJuYWxFcnJvcj1Nb2R1bGVbXCJJbnRlcm5hbEVycm9yXCJdPWV4dGVuZEVycm9yKEVycm9yLFwiSW50ZXJuYWxFcnJvclwiKTtpbml0X0NsYXNzSGFuZGxlKCk7aW5pdF9lbWJpbmQoKTtpbml0X1JlZ2lzdGVyZWRQb2ludGVyKCk7VW5ib3VuZFR5cGVFcnJvcj1Nb2R1bGVbXCJVbmJvdW5kVHlwZUVycm9yXCJdPWV4dGVuZEVycm9yKEVycm9yLFwiVW5ib3VuZFR5cGVFcnJvclwiKTtpbml0X2VtdmFsKCk7dmFyIHdhc21JbXBvcnRzPXtcImdcIjpfX19jeGFfdGhyb3csXCJwXCI6X19lbWJpbmRfcmVnaXN0ZXJfYmlnaW50LFwibFwiOl9fZW1iaW5kX3JlZ2lzdGVyX2Jvb2wsXCJmXCI6X19lbWJpbmRfcmVnaXN0ZXJfY2xhc3MsXCJlXCI6X19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfY29uc3RydWN0b3IsXCJhXCI6X19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfZnVuY3Rpb24sXCJ0XCI6X19lbWJpbmRfcmVnaXN0ZXJfZW12YWwsXCJrXCI6X19lbWJpbmRfcmVnaXN0ZXJfZmxvYXQsXCJjXCI6X19lbWJpbmRfcmVnaXN0ZXJfaW50ZWdlcixcImJcIjpfX2VtYmluZF9yZWdpc3Rlcl9tZW1vcnlfdmlldyxcImpcIjpfX2VtYmluZF9yZWdpc3Rlcl9zdGRfc3RyaW5nLFwiZFwiOl9fZW1iaW5kX3JlZ2lzdGVyX3N0ZF93c3RyaW5nLFwibVwiOl9fZW1iaW5kX3JlZ2lzdGVyX3ZvaWQsXCJuXCI6X19lbXZhbF9kZWNyZWYsXCJvXCI6X19lbXZhbF9pbmNyZWYsXCJoXCI6X19lbXZhbF90YWtlX3ZhbHVlLFwiaVwiOl9hYm9ydCxcInNcIjpfZW1zY3JpcHRlbl9tZW1jcHlfYmlnLFwiclwiOl9lbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwLFwicVwiOl9nZXRlbnRyb3B5fTt2YXIgYXNtPWNyZWF0ZVdhc20oKTt2YXIgX19fd2FzbV9jYWxsX2N0b3JzPWZ1bmN0aW9uKCl7cmV0dXJuKF9fX3dhc21fY2FsbF9jdG9ycz1Nb2R1bGVbXCJhc21cIl1bXCJ2XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfX19nZXRUeXBlTmFtZT1mdW5jdGlvbigpe3JldHVybihfX19nZXRUeXBlTmFtZT1Nb2R1bGVbXCJhc21cIl1bXCJ4XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfX2VtYmluZF9pbml0aWFsaXplX2JpbmRpbmdzPU1vZHVsZVtcIl9fZW1iaW5kX2luaXRpYWxpemVfYmluZGluZ3NcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX19lbWJpbmRfaW5pdGlhbGl6ZV9iaW5kaW5ncz1Nb2R1bGVbXCJfX2VtYmluZF9pbml0aWFsaXplX2JpbmRpbmdzXCJdPU1vZHVsZVtcImFzbVwiXVtcInlcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9fX2Vycm5vX2xvY2F0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuKF9fX2Vycm5vX2xvY2F0aW9uPU1vZHVsZVtcImFzbVwiXVtcIl9fZXJybm9fbG9jYXRpb25cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9tYWxsb2M9ZnVuY3Rpb24oKXtyZXR1cm4oX21hbGxvYz1Nb2R1bGVbXCJhc21cIl1bXCJ6XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfZnJlZT1mdW5jdGlvbigpe3JldHVybihfZnJlZT1Nb2R1bGVbXCJhc21cIl1bXCJBXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfX19jeGFfaXNfcG9pbnRlcl90eXBlPWZ1bmN0aW9uKCl7cmV0dXJuKF9fX2N4YV9pc19wb2ludGVyX3R5cGU9TW9kdWxlW1wiYXNtXCJdW1wiQlwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgY2FsbGVkUnVuO2RlcGVuZGVuY2llc0Z1bGZpbGxlZD1mdW5jdGlvbiBydW5DYWxsZXIoKXtpZighY2FsbGVkUnVuKXJ1bigpO2lmKCFjYWxsZWRSdW4pZGVwZW5kZW5jaWVzRnVsZmlsbGVkPXJ1bkNhbGxlcn07ZnVuY3Rpb24gcnVuKCl7aWYocnVuRGVwZW5kZW5jaWVzPjApe3JldHVybn1wcmVSdW4oKTtpZihydW5EZXBlbmRlbmNpZXM+MCl7cmV0dXJufWZ1bmN0aW9uIGRvUnVuKCl7aWYoY2FsbGVkUnVuKXJldHVybjtjYWxsZWRSdW49dHJ1ZTtNb2R1bGVbXCJjYWxsZWRSdW5cIl09dHJ1ZTtpZihBQk9SVClyZXR1cm47aW5pdFJ1bnRpbWUoKTtpZihNb2R1bGVbXCJvblJ1bnRpbWVJbml0aWFsaXplZFwiXSlNb2R1bGVbXCJvblJ1bnRpbWVJbml0aWFsaXplZFwiXSgpO3Bvc3RSdW4oKX1pZihNb2R1bGVbXCJzZXRTdGF0dXNcIl0pe01vZHVsZVtcInNldFN0YXR1c1wiXShcIlJ1bm5pbmcuLi5cIik7c2V0VGltZW91dChmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtNb2R1bGVbXCJzZXRTdGF0dXNcIl0oXCJcIil9LDEpO2RvUnVuKCl9LDEpfWVsc2V7ZG9SdW4oKX19aWYoTW9kdWxlW1wicHJlSW5pdFwiXSl7aWYodHlwZW9mIE1vZHVsZVtcInByZUluaXRcIl09PVwiZnVuY3Rpb25cIilNb2R1bGVbXCJwcmVJbml0XCJdPVtNb2R1bGVbXCJwcmVJbml0XCJdXTt3aGlsZShNb2R1bGVbXCJwcmVJbml0XCJdLmxlbmd0aD4wKXtNb2R1bGVbXCJwcmVJbml0XCJdLnBvcCgpKCl9fXJ1bigpO1xuXG5leHBvcnQgeyBNb2R1bGUgfTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4MTlmNDQ0ZmRhOTk1MTkzZTliYzk3ODYwZWU0Mzg5MC5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDczNTY3MDAxN2EzNDg5ZDY1NDU2MGNkMmQzZTFmNWUubXAzXCI7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0IHsgY29tcG9uZW50cyB9IGZyb20gXCIuL2NvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgZHJhdyB9IGZyb20gXCIuL2RyYXcuanNcIlxuaW1wb3J0IHsgc2F2ZUhpZ2hTY29yZSB9IGZyb20gXCIuL2RyYXcuanNcIlxuaW1wb3J0IHsgaW5pdEV2ZW50cyB9IGZyb20gXCIuL2V2ZW50cy5qc1wiXG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tIFwiLi90ZXRyaXMuanNcIlxuaW1wb3J0IHN0YXJ0TXVzaWMgZnJvbSBcIi4uL2Fzc2V0cy9UZXRyaXMubXAzXCJcbmltcG9ydCBlbmRNdXNpYyBmcm9tIFwiLi4vYXNzZXRzLzE4LiBHYW1lIE92ZXIubXAzXCJcblxuLy9NdXNpY1xuZXhwb3J0IGNvbnN0IHRldHJpc011c2ljID0gbmV3IEF1ZGlvKHN0YXJ0TXVzaWMpXG5leHBvcnQgY29uc3QgZ2FtZU92ZXJNdXNpYyA9IG5ldyBBdWRpbyhlbmRNdXNpYylcbnRldHJpc011c2ljLnByZWxvYWQgPSBcImF1dG9cIlxuZ2FtZU92ZXJNdXNpYy5wcmVsb2FkID0gXCJhdXRvXCJcbnRldHJpc011c2ljLmxvb3AgPSB0cnVlXG50ZXRyaXNNdXNpYy52b2x1bWUgPSAwLjFcbmdhbWVPdmVyTXVzaWMudm9sdW1lID0gMC4xXG5cbk1vZHVsZS5vblJ1bnRpbWVJbml0aWFsaXplZCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgbGV0IGdhbWUgPSBuZXcgTW9kdWxlLkdhbWUoKVxuXG4gIC8vR2FtZSB0aWNrIHN0YXJ0IHZhcmlhYmxlXG4gIGdhbWUubGFzdFRpY2sgPSBEYXRlLm5vdygpXG4gIGdhbWUuZ2FtZUxvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG5vdyA9IERhdGUubm93KClcbiAgICBsZXQgZGVsdGEgPSBub3cgLSB0aGlzLmxhc3RUaWNrXG5cbiAgICBpZiAoZGVsdGEgPj0gdGhpcy5nZXREcm9wSW50ZXJ2YWwoKSAmJiAhdGhpcy5nZXRHYW1lUGF1c2VkKCkpIHtcbiAgICAgIHRoaXMudXBkYXRlKCkgLy8gdXBkYXRlIGdhbWUgc3RhdGUgKHRldHJpcy5jcHApXG4gICAgICB0aGlzLmxhc3RUaWNrID0gbm93IC8vIHVwZGF0ZSB0aGUgbGFzdCB0aWNrIHRpbWVcbiAgICB9XG5cbiAgICBkcmF3KHRoaXMpIC8vIHJlbmRlciBnYW1lIHN0YXRlXG5cbiAgICBpZiAoIXRoaXMuZ2V0R2FtZU92ZXIoKSkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKSkgLy8gcmVwZWF0IG5leHQgZnJhbWVcbiAgICB9IGVsc2Uge1xuICAgICAgc2F2ZUhpZ2hTY29yZSh0aGlzKVxuICAgICAgdGV0cmlzTXVzaWMucGF1c2UoKVxuICAgICAgZ2FtZU92ZXJNdXNpYy5wbGF5KClcbiAgICAgIGNvbXBvbmVudHMuZGlzcGxheUdhbWVPdmVyUGFnZSh0aGlzKVxuICAgIH1cbiAgfS5iaW5kKGdhbWUpIC8vIGJpbmQgdGhlIGdhbWUgaW5zdGFuY2UgdG8gdGhlIGZ1bmN0aW9uIGNvbnRleHQ6XG4gIC8vYmluZCBhbGxvd3MgdGhlIGdhbWVMb29wIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBmcm9tIGV2ZW50cy5qcyBieSBlbnN1cmluZyB0aGF0IFwidGhpc1wiXG4gIC8vYWx3YXlzIHJlZmVycyB0byB0aGUgXCJnYW1lXCIgb2JqXG5cbiAgaW5pdEV2ZW50cyhnYW1lKVxuICBkcmF3KGdhbWUpIC8vRHJhdyBCb2FyZCBqdXN0IGFzIGEgYmFja2dyb3VuZCBiZWZvcmUgZ2FtZSBzdGFydHNcbiAgY29tcG9uZW50cy5kaXNwbGF5U3RhcnRDb21wb25lbnRzKClcbn1cbiIsImltcG9ydCB7IGNvbXBvbmVudHMgfSBmcm9tIFwiLi9jb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IGRyYXcgfSBmcm9tIFwiLi9kcmF3LmpzXCJcbmltcG9ydCB7IHRldHJpc011c2ljIH0gZnJvbSBcIi4vYXBwLmpzXCJcblxuZXhwb3J0IGNvbnN0IGluaXRFdmVudHMgPSBnYW1lID0+IHtcbiAgLy9NYWluIGNvbnRhaW5lcnNcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdENvbnRhaW5lclwiKVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gXCJLZXlaXCIpIHtcbiAgICAgIGdhbWUucm90YXRlVGV0cm9taW5vKC0xKVxuICAgIH1cbiAgfSlcblxuICAvL0xlZnQsIHJpZ2h0IGFuZCBkb3duXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICBnYW1lLm1vdmVUZXRyb21pbm8oMClcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgZ2FtZS5tb3ZlVGV0cm9taW5vKDEpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgZ2FtZS5tb3ZlVGV0cm9taW5vKDIpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgXCJTcGFjZVwiOlxuICAgICAgICBnYW1lLm1vdmVUZXRyb21pbm8oMylcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJFc2NhcGVcIjpcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRHYW1lQ29udGFpbmVyXCIpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZU92ZXJDb250YWluZXJcIikpIHJldHVyblxuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF1c2VHYW1lQ29udGFpbmVyXCIpKSB7XG4gICAgICAgICAgZ2FtZS5wYXVzZUdhbWUoKVxuICAgICAgICAgIHRldHJpc011c2ljLnBhdXNlKClcbiAgICAgICAgICBjb21wb25lbnRzLmRpc3BsYXlQYXVzZVBhZ2UoKVxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF1c2VHYW1lQ29udGFpbmVyXCIpKSB7XG4gICAgICAgICAgZ2FtZS5yZXN1bWVHYW1lKClcbiAgICAgICAgICB0ZXRyaXNNdXNpYy5wbGF5KClcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlR2FtZUNvbnRhaW5lclwiKS5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9KVxuXG4gIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PSBcInBsYXlCdXR0b25cIikge1xuICAgICAgZ2FtZS5yZXN1bWVHYW1lKCkgLy9TdG9wIHVzZXIgaW5wdXQgdW50aWwgZ2FtZSBzdGFydHNcbiAgICAgIGdhbWUuZ2FtZUxvb3AoKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEdhbWVDb250YWluZXJcIikucmVtb3ZlKClcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscEJveFwiKS5yZW1vdmUoKVxuICAgICAgLy9QbGF5IGdhbWUgYXVkaW86XG4gICAgICB0ZXRyaXNNdXNpYy5vbmNhbnBsYXl0aHJvdWdoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0ZXRyaXNNdXNpYy5wbGF5KCkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBwbGF5IGF1ZGlvOlwiLCBlcnJvcilcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRldHJpc011c2ljLmN1cnJlbnRUaW1lID0gMFxuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuaWQgPT0gXCJwbGF5QWdhaW5CdXR0b25cIikge1xuICAgICAgZ2FtZS5yZXN0YXJ0R2FtZSgpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVPdmVyQ29udGFpbmVyXCIpLnJlbW92ZSgpXG4gICAgICB0ZXRyaXNNdXNpYy5jdXJyZW50VGltZSA9IDBcbiAgICAgIHRldHJpc011c2ljLnBsYXkoKVxuICAgICAgZ2FtZS5nYW1lTG9vcCgpXG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJxdWl0QnV0dG9uXCIpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZU92ZXJDb250YWluZXJcIikucmVtb3ZlKClcbiAgICAgIGNvbXBvbmVudHMuZGlzcGxheVN0YXJ0UGFnZSgpXG4gICAgICBjb21wb25lbnRzLmRpc3BsYXlIZWxwQm94KClcbiAgICAgIGdhbWUucmVzdGFydEdhbWUoKVxuICAgICAgZ2FtZS5wYXVzZUdhbWUoKVxuICAgICAgZHJhdyhnYW1lKVxuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuaWQgPT0gXCJyZXN1bWVCdXR0b25cIikge1xuICAgICAgZ2FtZS5yZXN1bWVHYW1lKClcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF1c2VHYW1lQ29udGFpbmVyXCIpLnJlbW92ZSgpXG4gICAgICB0ZXRyaXNNdXNpYy5wbGF5KClcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbXV0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXV0ZUJ1dHRvblwiKVxuICBtdXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwibXV0ZUJ1dHRvblwiIHx8IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm11dGVDbGlja2FibGVcIikpIHtcbiAgICAgIGNvbXBvbmVudHMudG9nZ2xlTXV0ZUJ1dHRvbigpXG4gICAgICBtdXRlQnV0dG9uLmJsdXIoKVxuICAgIH1cbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJfayIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzdHlsZXNJbkRPTSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsIm1vZHVsZXNUb0RvbSIsIm9wdGlvbnMiLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJiYXNlIiwiY291bnQiLCJpbmRleEJ5SWRlbnRpZmllciIsIm9iaiIsImNzcyIsInNvdXJjZU1hcCIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkRWxlbWVudFN0eWxlIiwiYnlJbmRleCIsInNwbGljZSIsImFwaSIsImRvbUFQSSIsInVwZGF0ZSIsIm5ld09iaiIsInJlbW92ZSIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJpbmRleCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pIiwiX2luZGV4IiwibWVtbyIsImluc2VydCIsInN0eWxlIiwidGFyZ2V0Iiwic3R5bGVUYXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwiZ2V0VGFyZ2V0IiwiRXJyb3IiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJzdHlsZUVsZW1lbnQiLCJub25jZSIsInNldEF0dHJpYnV0ZSIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlVGFnVHJhbnNmb3JtIiwiYXBwbHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImZpcnN0Q2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJuIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJnIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNjcmlwdFVybCIsImltcG9ydFNjcmlwdHMiLCJsb2NhdGlvbiIsImN1cnJlbnRTY3JpcHQiLCJzcmMiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJyZXBsYWNlIiwicCIsIm5jIiwibG9jYWxzIiwiY29tcG9uZW50cyIsImRpc3BsYXlTdGFydFBhZ2UiLCJzdGFydEdhbWVDb250YWluZXIiLCJzcGFuVGl0bGUiLCJwbGF5QnV0dG9uIiwidGV4dENvbnRlbnQiLCJzdWJDb250YWluZXIiLCJkaXNwbGF5SGVscEJveCIsImhlbHBCb3giLCJjb250ZW50QXJyIiwia2V5cyIsImlubmVyQ29udGFpbmVyIiwic3BhbiIsInNwYW4yIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNwbGF5R2FtZU92ZXJQYWdlIiwiZ2FtZSIsImdhbWVPdmVyQ29udGFpbmVyIiwic3BhblNjb3JlIiwic3BhbkhpZ2hTY29yZSIsInBsYXlBZ2FpbkJ1dHRvbiIsInF1aXRCdXR0b24iLCJnZXRTY29yZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXNwbGF5UGF1c2VQYWdlIiwicGF1c2VHYW1lQ29udGFpbmVyIiwicmVzdW1lQnV0dG9uIiwidG9nZ2xlTXV0ZUJ1dHRvbiIsInRldHJpc011c2ljIiwibXV0ZUJ1dHRvbiIsInRvZ2dsZSIsImNvbnRhaW5zIiwiaW5uZXJIVE1MIiwibXV0ZWQiLCJkaXNwbGF5U3RhcnRDb21wb25lbnRzIiwiY2FudmFzIiwibmV4dFBpZWNlQ2FudmFzIiwic2NvcmVCb2FyZCIsImMiLCJnZXRDb250ZXh0IiwiY24iLCJjcyIsImJsb2NrU2l6ZSIsInRldHJvbWlub0NvbG9ycyIsImRwciIsImRldmljZVBpeGVsUmF0aW8iLCJ3aWR0aCIsImhlaWdodCIsInNjYWxlIiwiSElHSF9TQ09SRSIsImRyYXciLCJyZWZyZXNoUGFnZSIsIm5DdXJyZW50WCIsImdldEN1cnJlbnRYIiwibkN1cnJlbnRZIiwiZ2V0Q3VycmVudFkiLCJuU2hhZG93WSIsImNoYW5nZVNoYWRvd1kiLCJuQ3VycmVudFBpZWNlIiwiZ2V0Q3VycmVudFBpZWNlIiwibk5leHRQaWVjZSIsImdldE5leHRQaWVjZSIsIm5DdXJyZW50Um90YXRpb24iLCJnZXRDdXJyZW50Um90YXRpb24iLCJ0ZXRyb21pbm8iLCJnZXRUZXRyb21pbm8iLCJuZXh0VGV0cm9taW5vIiwiZHJhd0dhbWVGaWVsZCIsInB4IiwicHkiLCJyb3RhdGVkSW5kZXgiLCJSb3RhdGUiLCJkcmF3VGV0cm9taW5vIiwiZHJhd1RldHJvbWlub1NoYWRvdyIsImRyYXdOZXh0UGllY2UiLCJkcmF3U2NvcmVCb2FyZCIsImRyYXdHYW1lRmllbGRCb3JkZXJzIiwiY2xlYXJSZWN0IiwiZHJhd0xpbmUiLCJzeCIsInN5IiwiZXgiLCJleSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImdhbWVCb2FyZCIsImdldEdhbWVCb2FyZCIsIngiLCJ5IiwidmFsdWUiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsImZpbGxSZWN0IiwiZ2V0R2FtZU92ZXIiLCJsaW5lV2lkdGgiLCJzdHJva2VSZWN0Iiwic2hhZG93Qmx1ciIsInNoYWRvd0NvbG9yIiwiZ2V0R2FtZVBhdXNlZCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIm5leHRPZmZzZXRYIiwibmV4dE9mZnNldFkiLCJmb250IiwiZmlsbFRleHQiLCJuRmllbGRIZWlnaHQiLCJvZmZzZXRYIiwibkZpZWxkV2lkdGgiLCJmb3JFYWNoIiwiYXJncyIsInJlYWRCaW5hcnkiLCJNb2R1bGUiLCJtb2R1bGVPdmVycmlkZXMiLCJhc3NpZ24iLCJzY3JpcHREaXJlY3RvcnkiLCJpbmRleE9mIiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJjb25zb2xlIiwibG9nIiwiYmluZCIsIndhc21CaW5hcnkiLCJ3YXNtTWVtb3J5IiwiZXJyIiwiZXJyb3IiLCJXZWJBc3NlbWJseSIsImFib3J0IiwiSEVBUDgiLCJIRUFQVTgiLCJIRUFQMTYiLCJIRUFQVTE2IiwiSEVBUDMyIiwiSEVBUFUzMiIsIkhFQVBGMzIiLCJIRUFQRjY0Iiwid2FzbVRhYmxlIiwiQUJPUlQiLCJ1cGRhdGVNZW1vcnlWaWV3cyIsImIiLCJidWZmZXIiLCJJbnQ4QXJyYXkiLCJJbnQxNkFycmF5IiwiSW50MzJBcnJheSIsIlVpbnQ4QXJyYXkiLCJVaW50MTZBcnJheSIsIlVpbnQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiRmxvYXQ2NEFycmF5IiwiX19BVFBSRVJVTl9fIiwiX19BVElOSVRfXyIsIl9fQVRQT1NUUlVOX18iLCJydW5EZXBlbmRlbmNpZXMiLCJydW5EZXBlbmRlbmN5V2F0Y2hlciIsImRlcGVuZGVuY2llc0Z1bGZpbGxlZCIsIndoYXQiLCJSdW50aW1lRXJyb3IiLCJ3YXNtQmluYXJ5RmlsZSIsInBhdGgiLCJpc0RhdGFVUkkiLCJmaWxlbmFtZSIsInN0YXJ0c1dpdGgiLCJnZXRCaW5hcnkiLCJmaWxlIiwiaW5zdGFudGlhdGVBcnJheUJ1ZmZlciIsImJpbmFyeUZpbGUiLCJpbXBvcnRzIiwicmVjZWl2ZXIiLCJmZXRjaCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImNyZWRlbnRpYWxzIiwicmVzcG9uc2UiLCJjYXRjaCIsImdldEJpbmFyeVByb21pc2UiLCJiaW5hcnkiLCJpbnN0YW50aWF0ZSIsImluc3RhbmNlIiwicmVhc29uIiwiY2FsbFJ1bnRpbWVDYWxsYmFja3MiLCJjYWxsYmFja3MiLCJzaGlmdCIsIkV4Y2VwdGlvbkluZm8iLCJleGNQdHIiLCJwdHIiLCJzZXRfdHlwZSIsInR5cGUiLCJnZXRfdHlwZSIsInNldF9kZXN0cnVjdG9yIiwiZGVzdHJ1Y3RvciIsImdldF9kZXN0cnVjdG9yIiwic2V0X2NhdWdodCIsImNhdWdodCIsImdldF9jYXVnaHQiLCJzZXRfcmV0aHJvd24iLCJyZXRocm93biIsImdldF9yZXRocm93biIsImluaXQiLCJzZXRfYWRqdXN0ZWRfcHRyIiwiYWRqdXN0ZWRQdHIiLCJnZXRfYWRqdXN0ZWRfcHRyIiwiZ2V0X2V4Y2VwdGlvbl9wdHIiLCJfX19jeGFfaXNfcG9pbnRlcl90eXBlIiwiYWRqdXN0ZWQiLCJnZXRTaGlmdEZyb21TaXplIiwic2l6ZSIsIlR5cGVFcnJvciIsImVtYmluZF9jaGFyQ29kZXMiLCJyZWFkTGF0aW4xU3RyaW5nIiwicmV0IiwiYXdhaXRpbmdEZXBlbmRlbmNpZXMiLCJyZWdpc3RlcmVkVHlwZXMiLCJ0eXBlRGVwZW5kZW5jaWVzIiwiY2hhcl8wIiwiY2hhcl85IiwibWFrZUxlZ2FsRnVuY3Rpb25OYW1lIiwibmFtZSIsImYiLCJjaGFyQ29kZUF0IiwiY3JlYXRlTmFtZWRGdW5jdGlvbiIsImJvZHkiLCJhcmd1bWVudHMiLCJleHRlbmRFcnJvciIsImJhc2VFcnJvclR5cGUiLCJlcnJvck5hbWUiLCJlcnJvckNsYXNzIiwibWVzc2FnZSIsInN0YWNrIiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJCaW5kaW5nRXJyb3IiLCJ0aHJvd0JpbmRpbmdFcnJvciIsIkludGVybmFsRXJyb3IiLCJ0aHJvd0ludGVybmFsRXJyb3IiLCJ3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZCIsIm15VHlwZXMiLCJkZXBlbmRlbnRUeXBlcyIsImdldFR5cGVDb252ZXJ0ZXJzIiwib25Db21wbGV0ZSIsInR5cGVDb252ZXJ0ZXJzIiwibXlUeXBlQ29udmVydGVycyIsInJlZ2lzdGVyVHlwZSIsIkFycmF5IiwidW5yZWdpc3RlcmVkVHlwZXMiLCJyZWdpc3RlcmVkIiwiZHQiLCJyYXdUeXBlIiwicmVnaXN0ZXJlZEluc3RhbmNlIiwiaWdub3JlRHVwbGljYXRlUmVnaXN0cmF0aW9ucyIsImNiIiwidGhyb3dJbnN0YW5jZUFscmVhZHlEZWxldGVkIiwiJCQiLCJwdHJUeXBlIiwicmVnaXN0ZXJlZENsYXNzIiwiZmluYWxpemF0aW9uUmVnaXN0cnkiLCJkZXRhY2hGaW5hbGl6ZXIiLCJoYW5kbGUiLCJyZWxlYXNlQ2xhc3NIYW5kbGUiLCJzbWFydFB0ciIsInNtYXJ0UHRyVHlwZSIsInJhd0Rlc3RydWN0b3IiLCJydW5EZXN0cnVjdG9yIiwiZG93bmNhc3RQb2ludGVyIiwicHRyQ2xhc3MiLCJkZXNpcmVkQ2xhc3MiLCJiYXNlQ2xhc3MiLCJydiIsImRvd25jYXN0IiwicmVnaXN0ZXJlZFBvaW50ZXJzIiwiZGVsZXRpb25RdWV1ZSIsImZsdXNoUGVuZGluZ0RlbGV0ZXMiLCJwb3AiLCJkZWxldGVTY2hlZHVsZWQiLCJkZWxheUZ1bmN0aW9uIiwicmVnaXN0ZXJlZEluc3RhbmNlcyIsIm1ha2VDbGFzc0hhbmRsZSIsInJlY29yZCIsImF0dGFjaEZpbmFsaXplciIsIkZpbmFsaXphdGlvblJlZ2lzdHJ5IiwiaW5mbyIsInJlZ2lzdGVyIiwidW5yZWdpc3RlciIsIkNsYXNzSGFuZGxlIiwiZW5zdXJlT3ZlcmxvYWRUYWJsZSIsInByb3RvIiwibWV0aG9kTmFtZSIsImh1bWFuTmFtZSIsIm92ZXJsb2FkVGFibGUiLCJwcmV2RnVuYyIsImFyZ0NvdW50IiwiUmVnaXN0ZXJlZENsYXNzIiwiaW5zdGFuY2VQcm90b3R5cGUiLCJnZXRBY3R1YWxUeXBlIiwidXBjYXN0IiwicHVyZVZpcnR1YWxGdW5jdGlvbnMiLCJ1cGNhc3RQb2ludGVyIiwiY29uc3ROb1NtYXJ0UHRyUmF3UG9pbnRlclRvV2lyZVR5cGUiLCJkZXN0cnVjdG9ycyIsImlzUmVmZXJlbmNlIiwiZW1iaW5kUmVwciIsImhhbmRsZUNsYXNzIiwiZ2VuZXJpY1BvaW50ZXJUb1dpcmVUeXBlIiwiaXNTbWFydFBvaW50ZXIiLCJyYXdDb25zdHJ1Y3RvciIsImlzQ29uc3QiLCJzaGFyaW5nUG9saWN5IiwiY2xvbmVkSGFuZGxlIiwicmF3U2hhcmUiLCJFbXZhbCIsInRvSGFuZGxlIiwibm9uQ29uc3ROb1NtYXJ0UHRyUmF3UG9pbnRlclRvV2lyZVR5cGUiLCJzaW1wbGVSZWFkVmFsdWVGcm9tUG9pbnRlciIsInBvaW50ZXIiLCJSZWdpc3RlcmVkUG9pbnRlciIsInBvaW50ZWVUeXBlIiwicmF3R2V0UG9pbnRlZSIsImRlc3RydWN0b3JGdW5jdGlvbiIsIndhc21UYWJsZU1pcnJvciIsImdldFdhc21UYWJsZUVudHJ5IiwiZnVuY1B0ciIsImZ1bmMiLCJlbWJpbmRfX3JlcXVpcmVGdW5jdGlvbiIsInNpZ25hdHVyZSIsInJhd0Z1bmN0aW9uIiwic2lnIiwiYXJnQ2FjaGUiLCJmcCIsImluY2x1ZGVzIiwiZHluQ2FsbExlZ2FjeSIsImR5bkNhbGwiLCJVbmJvdW5kVHlwZUVycm9yIiwiZ2V0VHlwZU5hbWUiLCJfX19nZXRUeXBlTmFtZSIsIl9mcmVlIiwidGhyb3dVbmJvdW5kVHlwZUVycm9yIiwidHlwZXMiLCJ1bmJvdW5kVHlwZXMiLCJzZWVuIiwidmlzaXQiLCJoZWFwMzJWZWN0b3JUb0FycmF5IiwiZmlyc3RFbGVtZW50IiwiYXJyYXkiLCJydW5EZXN0cnVjdG9ycyIsImRlbCIsImNyYWZ0SW52b2tlckZ1bmN0aW9uIiwiYXJnVHlwZXMiLCJjbGFzc1R5cGUiLCJjcHBJbnZva2VyRnVuYyIsImNwcFRhcmdldEZ1bmMiLCJpc0FzeW5jIiwiaXNDbGFzc01ldGhvZEZ1bmMiLCJuZWVkc0Rlc3RydWN0b3JTdGFjayIsInJldHVybnMiLCJhcmdzTGlzdCIsImFyZ3NMaXN0V2lyZWQiLCJpbnZva2VyRm5Cb2R5IiwiZHRvclN0YWNrIiwiYXJnczEiLCJhcmdzMiIsInBhcmFtTmFtZSIsImFyZ3VtZW50TGlzdCIsImR1bW15IiwiciIsIm5ld0Z1bmMiLCJlbXZhbF9oYW5kbGVzIiwiYWxsb2NhdGVkIiwiZnJlZWxpc3QiLCJoYXMiLCJhbGxvY2F0ZSIsImZyZWUiLCJfX2VtdmFsX2RlY3JlZiIsInJlc2VydmVkIiwicmVmY291bnQiLCJ0b1ZhbHVlIiwidiIsInQiLCJmbG9hdFJlYWRWYWx1ZUZyb21Qb2ludGVyIiwiaW50ZWdlclJlYWRWYWx1ZUZyb21Qb2ludGVyIiwic2lnbmVkIiwiVVRGOERlY29kZXIiLCJUZXh0RGVjb2RlciIsIlVURjE2RGVjb2RlciIsIlVURjE2VG9TdHJpbmciLCJtYXhCeXRlc1RvUmVhZCIsImVuZFB0ciIsImlkeCIsIm1heElkeCIsImRlY29kZSIsInN1YmFycmF5Iiwic3RyIiwiY29kZVVuaXQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJzdHJpbmdUb1VURjE2Iiwib3V0UHRyIiwibWF4Qnl0ZXNUb1dyaXRlIiwic3RhcnRQdHIiLCJudW1DaGFyc1RvV3JpdGUiLCJsZW5ndGhCeXRlc1VURjE2IiwiVVRGMzJUb1N0cmluZyIsInV0ZjMyIiwiY2giLCJzdHJpbmdUb1VURjMyIiwibGVuZ3RoQnl0ZXNVVEYzMiIsImxlbiIsImVtc2NyaXB0ZW5fcmVhbGxvY19idWZmZXIiLCJwYWdlcyIsImJ5dGVMZW5ndGgiLCJncm93IiwicmFuZG9tRmlsbCIsInZpZXciLCJjcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJpbml0UmFuZG9tRmlsbCIsImNvZGVzIiwiZW1iaW5kX2luaXRfY2hhckNvZGVzIiwib3RoZXIiLCJsZWZ0Q2xhc3MiLCJyaWdodENsYXNzIiwicHJlc2VydmVQb2ludGVyT25EZWxldGUiLCJjbG9uZSIsImdldFByb3RvdHlwZU9mIiwiZm4iLCJnZXRQb2ludGVlIiwicmF3UG9pbnRlciIsImNsYXNzXyIsImdldEJhc2VzdFBvaW50ZXIiLCJnZXRJbmhlcml0ZWRJbnN0YW5jZSIsIm1ha2VEZWZhdWx0SGFuZGxlIiwidG9UeXBlIiwiYWN0dWFsVHlwZSIsInJlZ2lzdGVyZWRQb2ludGVyUmVjb3JkIiwiY29uc3RQb2ludGVyVHlwZSIsInBvaW50ZXJUeXBlIiwiZHAiLCJjYWxsZWRSdW4iLCJ3YXNtSW1wb3J0cyIsInByaW1pdGl2ZVR5cGUiLCJtaW5SYW5nZSIsIm1heFJhbmdlIiwidHJ1ZVZhbHVlIiwiZmFsc2VWYWx1ZSIsInd0IiwiaGVhcCIsInJhd1BvaW50ZXJUeXBlIiwicmF3Q29uc3RQb2ludGVyVHlwZSIsImJhc2VDbGFzc1Jhd1R5cGUiLCJnZXRBY3R1YWxUeXBlU2lnbmF0dXJlIiwidXBjYXN0U2lnbmF0dXJlIiwiZG93bmNhc3RTaWduYXR1cmUiLCJkZXN0cnVjdG9yU2lnbmF0dXJlIiwibGVnYWxGdW5jdGlvbk5hbWUiLCJudW1Bcmd1bWVudHMiLCJleHBvc2VQdWJsaWNTeW1ib2wiLCJiYXNlUHJvdG90eXBlIiwiY29uc3RydWN0b3JfYm9keSIsIl9fZGVyaXZlZENsYXNzZXMiLCJyZWZlcmVuY2VDb252ZXJ0ZXIiLCJwb2ludGVyQ29udmVydGVyIiwiY29uc3RQb2ludGVyQ29udmVydGVyIiwicmVwbGFjZVB1YmxpY1N5bWJvbCIsInJhd0NsYXNzVHlwZSIsInJhd0FyZ1R5cGVzQWRkciIsImludm9rZXJTaWduYXR1cmUiLCJpbnZva2VyIiwidGV4dCIsInJhd0FyZ1R5cGVzIiwicmF3SW52b2tlciIsImNvbnRleHQiLCJpc1B1cmVWaXJ0dWFsIiwidW5ib3VuZFR5cGVzSGFuZGxlciIsIlN5bWJvbCIsInN1YnN0cmluZyIsIm1ldGhvZCIsImNsYXNzTmFtZSIsIm1lbWJlckZ1bmN0aW9uIiwiZnJvbVdpcmVUeXBlIiwiYml0c2hpZnQiLCJpc1Vuc2lnbmVkVHlwZSIsImRhdGFUeXBlSW5kZXgiLCJUQSIsImRlY29kZU1lbW9yeVZpZXciLCJzdGRTdHJpbmdJc1VURjgiLCJwYXlsb2FkIiwiZGVjb2RlU3RhcnRQdHIiLCJjdXJyZW50Qnl0ZVB0ciIsInN0cmluZ1NlZ21lbnQiLCJoZWFwT3JBcnJheSIsImVuZElkeCIsInUwIiwidTEiLCJ1MiIsIlVURjhBcnJheVRvU3RyaW5nIiwiQXJyYXlCdWZmZXIiLCJ2YWx1ZUlzT2ZUeXBlU3RyaW5nIiwiVWludDhDbGFtcGVkQXJyYXkiLCJsZW5ndGhCeXRlc1VURjgiLCJfbWFsbG9jIiwib3V0SWR4IiwidSIsInN0cmluZ1RvVVRGOEFycmF5IiwiY2hhckNvZGUiLCJjaGFyU2l6ZSIsImRlY29kZVN0cmluZyIsImVuY29kZVN0cmluZyIsImdldEhlYXAiLCJsZW5ndGhCeXRlc1VURiIsIkhFQVAiLCJpc1ZvaWQiLCJhcmciLCJpbXBsIiwiZGVzdCIsIm51bSIsImNvcHlXaXRoaW4iLCJyZXF1ZXN0ZWRTaXplIiwib2xkU2l6ZSIsIm1heEhlYXBTaXplIiwiY3V0RG93biIsIm92ZXJHcm93bkhlYXBTaXplIiwiTWF0aCIsIm1pbiIsIm1heCIsImNhbGxiYWNrIiwicmVjZWl2ZUluc3RhbmNlIiwidW5zaGlmdCIsImNsZWFySW50ZXJ2YWwiLCJyZW1vdmVSdW5EZXBlbmRlbmN5IiwiaW5zdGFudGlhdGVTdHJlYW1pbmciLCJjcmVhdGVXYXNtIiwicnVuIiwiZG9SdW4iLCJwb3N0UnVuIiwicHJlUnVuIiwic2V0VGltZW91dCIsInJ1bkNhbGxlciIsIkF1ZGlvIiwiZ2FtZU92ZXJNdXNpYyIsInByZWxvYWQiLCJsb29wIiwidm9sdW1lIiwib25SdW50aW1lSW5pdGlhbGl6ZWQiLCJhc3luYyIsIkdhbWUiLCJsYXN0VGljayIsIkRhdGUiLCJub3ciLCJnYW1lTG9vcCIsImdldERyb3BJbnRlcnZhbCIsInNldEl0ZW0iLCJzYXZlSGlnaFNjb3JlIiwicGF1c2UiLCJwbGF5IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicHJvamVjdENvbnRhaW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvZGUiLCJyb3RhdGVUZXRyb21pbm8iLCJtb3ZlVGV0cm9taW5vIiwicmVzdW1lR2FtZSIsInBhdXNlR2FtZSIsIm9uY2FucGxheXRocm91Z2giLCJjdXJyZW50VGltZSIsInJlc3RhcnRHYW1lIiwiYmx1ciIsImluaXRFdmVudHMiXSwic291cmNlUm9vdCI6IiJ9
