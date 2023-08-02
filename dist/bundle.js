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
    ;(g.width = 364), (g.height = 694), (v.width = 120), (v.height = 120), (y.width = 150), (y.height = 240)
    let $ = localStorage.getItem("highScore")
    null === $ && ($ = "0")
    function x(t) {
      P()
      let e = t.getCurrentX(),
        n = t.getCurrentY(),
        r = t.changeShadowY(),
        o = t.getCurrentPiece(),
        a = t.getNextPiece(),
        i = t.getCurrentRotation(),
        s = t.getTetromino(o),
        u = t.getTetromino(a)
      T(t)
      for (let c = 0; c < 4; c++)
        for (let l = 0; l < 4; l++) {
          let p = t.Rotate(c, l, i)
          1 === s.get(p) && (S(c, l, e, n, o), I(t, c, l, e, r, s, o, i)), R(c, l, a, u)
        }
      O(t), _()
    }
    const P = () => {
      C.clearRect(0, 0, g.width, g.height), b.clearRect(0, 0, v.width, v.height), B.clearRect(0, 0, y.width, y.height)
    }
    function k(t, e, n, r) {
      C.beginPath(), C.moveTo(t, e), C.lineTo(n, r), C.stroke()
    }
    const T = t => {
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
                k(n * E + 2, r * E + 2, (n + 1) * E + 2, (r + 1) * E + 2),
                k(n * E + E + 2, r * E + 2, n * E + 2, r * E + E + 2)),
              (C.shadowBlur = 0),
              (C.shadowColor = "black")
          }
      },
      S = (t, e, n, r, o) => {
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
          0 === i && k((r + e) * E + 2, (o + n) * E + 2, (r + e + 1) * E + 2, (o + n) * E + 2),
            0 === u && k((r + e + 1) * E + 2, (o + n) * E + 2, (r + e + 1) * E + 2, (o + n + 1) * E + 2),
            0 === c && k((r + e + 1) * E + 2, (o + n + 1) * E + 2, (r + e) * E + 2, (o + n + 1) * E + 2),
            0 === l && k((r + e) * E + 2, (o + n + 1) * E + 2, (r + e) * E + 2, (o + n) * E + 2)
        }
      },
      R = (t, e, n, r) => {
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
      O = t => {
        ;(B.font = '22px "Press Start 2P"'),
          (B.fillStyle = "aquamarine"),
          B.fillText("TOP", 16, y.height / 2 - 40),
          B.fillText(`${$}`, 16, y.height / 2 - 14),
          B.fillText("SCORE", 16, y.height / 2 + 20),
          B.fillText(`${t.getScore()}`, 16, y.height / 2 + 46)
      },
      _ = () => {
        ;(C.strokeStyle = "aquamarine"),
          [
            [2, 2, 2, 692],
            [32, 2, 32, 662],
            [362, 2, 362, 692],
            [332, 2, 332, 662],
            [2, 692, 362, 692],
            [32, 662, 332, 662],
          ].forEach(t => k(...t))
      }
    var j,
      W = void 0 !== W ? W : {},
      F = Object.assign({}, W),
      U = ""
    "undefined" != typeof document && document.currentScript && (U = document.currentScript.src),
      (U = 0 !== U.indexOf("blob:") ? U.substr(0, U.replace(/[?#].*/, "").lastIndexOf("/") + 1) : ""),
      W.print || console.log.bind(console)
    var D,
      q,
      G = W.printErr || console.error.bind(console)
    Object.assign(W, F),
      (F = null),
      W.arguments && W.arguments,
      W.thisProgram && W.thisProgram,
      W.quit && W.quit,
      W.wasmBinary && (D = W.wasmBinary),
      W.noExitRuntime,
      "object" != typeof WebAssembly && at("no native wasm support detected")
    var L,
      M,
      H,
      Z,
      z,
      Y,
      V,
      N,
      Q,
      X = !1
    function J() {
      var t = q.buffer
      ;(W.HEAP8 = L = new Int8Array(t)),
        (W.HEAP16 = H = new Int16Array(t)),
        (W.HEAP32 = z = new Int32Array(t)),
        (W.HEAPU8 = M = new Uint8Array(t)),
        (W.HEAPU16 = Z = new Uint16Array(t)),
        (W.HEAPU32 = Y = new Uint32Array(t)),
        (W.HEAPF32 = V = new Float32Array(t)),
        (W.HEAPF64 = N = new Float64Array(t))
    }
    var K = [],
      tt = [],
      et = [],
      nt = 0,
      rt = null,
      ot = null
    function at(t) {
      throw (
        (W.onAbort && W.onAbort(t),
        G((t = "Aborted(" + t + ")")),
        (X = !0),
        (t += ". Build with -sASSERTIONS for more info."),
        new WebAssembly.RuntimeError(t))
      )
    }
    var it, st
    function ut(t) {
      return t.startsWith("data:application/octet-stream;base64,")
    }
    function ct(t) {
      try {
        if (t == it && D) return new Uint8Array(D)
        if (j) return j(t)
        throw "both async and sync fetching of the wasm failed"
      } catch (t) {
        at(t)
      }
    }
    function lt(t, e, n) {
      return (function (t) {
        return D || "function" != typeof fetch
          ? Promise.resolve().then(() => ct(t))
          : fetch(t, { credentials: "same-origin" })
              .then(e => {
                if (!e.ok) throw "failed to load wasm binary file at '" + t + "'"
                return e.arrayBuffer()
              })
              .catch(() => ct(t))
      })(t)
        .then(t => WebAssembly.instantiate(t, e))
        .then(t => t)
        .then(n, t => {
          G("failed to asynchronously prepare wasm: " + t), at(t)
        })
    }
    function pt(t) {
      for (; t.length > 0; ) t.shift()(W)
    }
    function dt(t) {
      ;(this.excPtr = t),
        (this.ptr = t - 24),
        (this.set_type = function (t) {
          Y[(this.ptr + 4) >> 2] = t
        }),
        (this.get_type = function () {
          return Y[(this.ptr + 4) >> 2]
        }),
        (this.set_destructor = function (t) {
          Y[(this.ptr + 8) >> 2] = t
        }),
        (this.get_destructor = function () {
          return Y[(this.ptr + 8) >> 2]
        }),
        (this.set_caught = function (t) {
          ;(t = t ? 1 : 0), (L[(this.ptr + 12) >> 0] = t)
        }),
        (this.get_caught = function () {
          return 0 != L[(this.ptr + 12) >> 0]
        }),
        (this.set_rethrown = function (t) {
          ;(t = t ? 1 : 0), (L[(this.ptr + 13) >> 0] = t)
        }),
        (this.get_rethrown = function () {
          return 0 != L[(this.ptr + 13) >> 0]
        }),
        (this.init = function (t, e) {
          this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(e)
        }),
        (this.set_adjusted_ptr = function (t) {
          Y[(this.ptr + 16) >> 2] = t
        }),
        (this.get_adjusted_ptr = function () {
          return Y[(this.ptr + 16) >> 2]
        }),
        (this.get_exception_ptr = function () {
          if (Pe(this.get_type())) return Y[this.excPtr >> 2]
          var t = this.get_adjusted_ptr()
          return 0 !== t ? t : this.excPtr
        })
    }
    function ft(t) {
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
    ut((it = "tetris.wasm")) || ((st = it), (it = W.locateFile ? W.locateFile(st, U) : U + st))
    var ht = void 0
    function mt(t) {
      for (var e = "", n = t; M[n]; ) e += ht[M[n++]]
      return e
    }
    var At = {},
      gt = {},
      vt = {},
      yt = 48,
      Ct = 57
    function bt(t) {
      if (void 0 === t) return "_unknown"
      var e = (t = t.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0)
      return e >= yt && e <= Ct ? `_${t}` : t
    }
    function Bt(t, e) {
      return {
        [(t = bt(t))]: function () {
          return e.apply(this, arguments)
        },
      }[t]
    }
    function Et(t, e) {
      var n = Bt(e, function (t) {
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
    var wt = void 0
    function $t(t) {
      throw new wt(t)
    }
    var xt = void 0
    function Pt(t) {
      throw new xt(t)
    }
    function kt(t, e, n) {
      function r(e) {
        var r = n(e)
        r.length !== t.length && Pt("Mismatched type converter count")
        for (var o = 0; o < t.length; ++o) Tt(t[o], r[o])
      }
      t.forEach(function (t) {
        vt[t] = e
      })
      var o = new Array(e.length),
        a = [],
        i = 0
      e.forEach((t, e) => {
        gt.hasOwnProperty(t)
          ? (o[e] = gt[t])
          : (a.push(t),
            At.hasOwnProperty(t) || (At[t] = []),
            At[t].push(() => {
              ;(o[e] = gt[t]), ++i === a.length && r(o)
            }))
      }),
        0 === a.length && r(o)
    }
    function Tt(t, e, n = {}) {
      if (!("argPackAdvance" in e)) throw new TypeError("registerType registeredInstance requires argPackAdvance")
      var r = e.name
      if ((t || $t(`type "${r}" must have a positive integer typeid pointer`), gt.hasOwnProperty(t))) {
        if (n.ignoreDuplicateRegistrations) return
        $t(`Cannot register type '${r}' twice`)
      }
      if (((gt[t] = e), delete vt[t], At.hasOwnProperty(t))) {
        var o = At[t]
        delete At[t], o.forEach(t => t())
      }
    }
    function St(t) {
      $t(t.$$.ptrType.registeredClass.name + " instance already deleted")
    }
    var It = !1
    function Rt(t) {}
    function Ot(t) {
      ;(t.count.value -= 1),
        0 === t.count.value &&
          (function (t) {
            t.smartPtr ? t.smartPtrType.rawDestructor(t.smartPtr) : t.ptrType.registeredClass.rawDestructor(t.ptr)
          })(t)
    }
    function _t(t, e, n) {
      if (e === n) return t
      if (void 0 === n.baseClass) return null
      var r = _t(t, e, n.baseClass)
      return null === r ? null : n.downcast(r)
    }
    var jt = {}
    var Wt = []
    function Ft() {
      for (; Wt.length; ) {
        var t = Wt.pop()
        ;(t.$$.deleteScheduled = !1), t.delete()
      }
    }
    var Ut = void 0
    var Dt = {}
    function qt(t, e) {
      return (
        (e.ptrType && e.ptr) || Pt("makeClassHandle requires ptr and ptrType"),
        !!e.smartPtrType != !!e.smartPtr && Pt("Both smartPtrType and smartPtr must be specified"),
        (e.count = { value: 1 }),
        Gt(Object.create(t, { $$: { value: e } }))
      )
    }
    function Gt(t) {
      return "undefined" == typeof FinalizationRegistry
        ? ((Gt = t => t), t)
        : ((It = new FinalizationRegistry(t => {
            Ot(t.$$)
          })),
          (Gt = t => {
            var e = t.$$
            if (e.smartPtr) {
              var n = { $$: e }
              It.register(t, n, t)
            }
            return t
          }),
          (Rt = t => It.unregister(t)),
          Gt(t))
    }
    function Lt() {}
    function Mt(t, e, n) {
      if (void 0 === t[e].overloadTable) {
        var r = t[e]
        ;(t[e] = function () {
          return (
            t[e].overloadTable.hasOwnProperty(arguments.length) ||
              $t(
                `Function '${n}' called with an invalid number of arguments (${arguments.length}) - expects one of (${t[e].overloadTable})!`
              ),
            t[e].overloadTable[arguments.length].apply(this, arguments)
          )
        }),
          (t[e].overloadTable = []),
          (t[e].overloadTable[r.argCount] = r)
      }
    }
    function Ht(t, e, n, r, o, a, i, s) {
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
    function Zt(t, e, n) {
      for (; e !== n; )
        e.upcast || $t(`Expected null or instance of ${n.name}, got an instance of ${e.name}`),
          (t = e.upcast(t)),
          (e = e.baseClass)
      return t
    }
    function zt(t, e) {
      if (null === e) return this.isReference && $t(`null is not a valid ${this.name}`), 0
      e.$$ || $t(`Cannot pass "${ce(e)}" as a ${this.name}`),
        e.$$.ptr || $t(`Cannot pass deleted object as a pointer of type ${this.name}`)
      var n = e.$$.ptrType.registeredClass
      return Zt(e.$$.ptr, n, this.registeredClass)
    }
    function Yt(t, e) {
      var n
      if (null === e)
        return (
          this.isReference && $t(`null is not a valid ${this.name}`),
          this.isSmartPointer ? ((n = this.rawConstructor()), null !== t && t.push(this.rawDestructor, n), n) : 0
        )
      e.$$ || $t(`Cannot pass "${ce(e)}" as a ${this.name}`),
        e.$$.ptr || $t(`Cannot pass deleted object as a pointer of type ${this.name}`),
        !this.isConst &&
          e.$$.ptrType.isConst &&
          $t(
            `Cannot convert argument of type ${
              e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name
            } to parameter type ${this.name}`
          )
      var r = e.$$.ptrType.registeredClass
      if (((n = Zt(e.$$.ptr, r, this.registeredClass)), this.isSmartPointer))
        switch (
          (void 0 === e.$$.smartPtr && $t("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy)
        ) {
          case 0:
            e.$$.smartPtrType === this
              ? (n = e.$$.smartPtr)
              : $t(
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
                ue.toHandle(function () {
                  o.delete()
                })
              )),
                null !== t && t.push(this.rawDestructor, n)
            }
            break
          default:
            $t("Unsupporting sharing policy")
        }
      return n
    }
    function Vt(t, e) {
      if (null === e) return this.isReference && $t(`null is not a valid ${this.name}`), 0
      e.$$ || $t(`Cannot pass "${ce(e)}" as a ${this.name}`),
        e.$$.ptr || $t(`Cannot pass deleted object as a pointer of type ${this.name}`),
        e.$$.ptrType.isConst &&
          $t(`Cannot convert argument of type ${e.$$.ptrType.name} to parameter type ${this.name}`)
      var n = e.$$.ptrType.registeredClass
      return Zt(e.$$.ptr, n, this.registeredClass)
    }
    function Nt(t) {
      return this.fromWireType(z[t >> 2])
    }
    function Qt(t, e, n, r, o, a, i, s, u, c, l) {
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
          ? (this.toWireType = Yt)
          : r
          ? ((this.toWireType = zt), (this.destructorFunction = null))
          : ((this.toWireType = Vt), (this.destructorFunction = null))
    }
    var Xt = []
    function Jt(t) {
      var e = Xt[t]
      return e || (t >= Xt.length && (Xt.length = t + 1), (Xt[t] = e = Q.get(t))), e
    }
    function Kt(t, e) {
      var n,
        r,
        o,
        a = (t = mt(t)).includes("j")
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
                        var r = W["dynCall_" + t]
                        return n && n.length ? r.apply(null, [e].concat(n)) : r.call(null, e)
                      })(t, e, n)
                    : Jt(e).apply(null, n)
                })(n, r, o)
              )
            })
          : Jt(e)
      return "function" != typeof a && $t(`unknown function pointer with signature ${t}: ${e}`), a
    }
    var te = void 0
    function ee(t) {
      var e = we(t),
        n = mt(e)
      return xe(e), n
    }
    function ne(t, e) {
      var n = [],
        r = {}
      throw (
        (e.forEach(function t(e) {
          r[e] || gt[e] || (vt[e] ? vt[e].forEach(t) : (n.push(e), (r[e] = !0)))
        }),
        new te(`${t}: ` + n.map(ee).join([", "])))
      )
    }
    function re(t, e) {
      for (var n = [], r = 0; r < t; r++) n.push(Y[(e + 4 * r) >> 2])
      return n
    }
    function oe(t) {
      for (; t.length; ) {
        var e = t.pop()
        t.pop()(e)
      }
    }
    function ae(t, e, n, r, o, a) {
      var i = e.length
      i < 2 && $t("argTypes array size mismatch! Must at least get return value and 'this' types!")
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
      var f = `\n        return function ${bt(t)}(${p}) {\n        if (arguments.length !== ${
        i - 2
      }) {\n          throwBindingError('function ${t} called with ${arguments.length} arguments, expected ${
        i - 2
      } args!');\n        }`
      u && (f += "var destructors = [];\n")
      var h = u ? "destructors" : "null",
        m = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
        A = [$t, r, o, oe, e[0], e[1]]
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
          var n = Bt(t.name || "unknownFunctionName", function () {})
          n.prototype = t.prototype
          var r = new n(),
            o = t.apply(r, e)
          return o instanceof Object ? o : r
        })(Function, m).apply(null, A)
      )
    }
    var ie = new (function () {
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
    function se(t) {
      t >= ie.reserved && 0 == --ie.get(t).refcount && ie.free(t)
    }
    var ue = {
      toValue: t => (t || $t("Cannot use deleted val. handle = " + t), ie.get(t).value),
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
            return ie.allocate({ refcount: 1, value: t })
        }
      },
    }
    function ce(t) {
      if (null === t) return "null"
      var e = typeof t
      return "object" === e || "array" === e || "function" === e ? t.toString() : "" + t
    }
    function le(t, e) {
      switch (e) {
        case 2:
          return function (t) {
            return this.fromWireType(V[t >> 2])
          }
        case 3:
          return function (t) {
            return this.fromWireType(N[t >> 3])
          }
        default:
          throw new TypeError("Unknown float type: " + t)
      }
    }
    function pe(t, e, n) {
      switch (e) {
        case 0:
          return n
            ? function (t) {
                return L[t]
              }
            : function (t) {
                return M[t]
              }
        case 1:
          return n
            ? function (t) {
                return H[t >> 1]
              }
            : function (t) {
                return Z[t >> 1]
              }
        case 2:
          return n
            ? function (t) {
                return z[t >> 2]
              }
            : function (t) {
                return Y[t >> 2]
              }
        default:
          throw new TypeError("Unknown integer type: " + t)
      }
    }
    var de = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0
    var fe = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0
    function he(t, e) {
      for (var n = t, r = n >> 1, o = r + e / 2; !(r >= o) && Z[r]; ) ++r
      if ((n = r << 1) - t > 32 && fe) return fe.decode(M.subarray(t, n))
      for (var a = "", i = 0; !(i >= e / 2); ++i) {
        var s = H[(t + 2 * i) >> 1]
        if (0 == s) break
        a += String.fromCharCode(s)
      }
      return a
    }
    function me(t, e, n) {
      if ((void 0 === n && (n = 2147483647), n < 2)) return 0
      for (var r = e, o = (n -= 2) < 2 * t.length ? n / 2 : t.length, a = 0; a < o; ++a) {
        var i = t.charCodeAt(a)
        ;(H[e >> 1] = i), (e += 2)
      }
      return (H[e >> 1] = 0), e - r
    }
    function Ae(t) {
      return 2 * t.length
    }
    function ge(t, e) {
      for (var n = 0, r = ""; !(n >= e / 4); ) {
        var o = z[(t + 4 * n) >> 2]
        if (0 == o) break
        if ((++n, o >= 65536)) {
          var a = o - 65536
          r += String.fromCharCode(55296 | (a >> 10), 56320 | (1023 & a))
        } else r += String.fromCharCode(o)
      }
      return r
    }
    function ve(t, e, n) {
      if ((void 0 === n && (n = 2147483647), n < 4)) return 0
      for (var r = e, o = r + n - 4, a = 0; a < t.length; ++a) {
        var i = t.charCodeAt(a)
        if (
          (i >= 55296 && i <= 57343 && (i = (65536 + ((1023 & i) << 10)) | (1023 & t.charCodeAt(++a))),
          (z[e >> 2] = i),
          (e += 4) + 4 > o)
        )
          break
      }
      return (z[e >> 2] = 0), e - r
    }
    function ye(t) {
      for (var e = 0, n = 0; n < t.length; ++n) {
        var r = t.charCodeAt(n)
        r >= 55296 && r <= 57343 && ++n, (e += 4)
      }
      return e
    }
    function Ce(t) {
      var e = (t - q.buffer.byteLength + 65535) >>> 16
      try {
        return q.grow(e), J(), 1
      } catch (t) {}
    }
    function be(t) {
      return (be = (function () {
        if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues)
          return t => crypto.getRandomValues(t)
        at("initRandomDevice")
      })())(t)
    }
    !(function () {
      for (var t = new Array(256), e = 0; e < 256; ++e) t[e] = String.fromCharCode(e)
      ht = t
    })(),
      (wt = W.BindingError = Et(Error, "BindingError")),
      (xt = W.InternalError = Et(Error, "InternalError")),
      (Lt.prototype.isAliasOf = function (t) {
        if (!(this instanceof Lt)) return !1
        if (!(t instanceof Lt)) return !1
        for (
          var e = this.$$.ptrType.registeredClass, n = this.$$.ptr, r = t.$$.ptrType.registeredClass, o = t.$$.ptr;
          e.baseClass;

        )
          (n = e.upcast(n)), (e = e.baseClass)
        for (; r.baseClass; ) (o = r.upcast(o)), (r = r.baseClass)
        return e === r && n === o
      }),
      (Lt.prototype.clone = function () {
        if ((this.$$.ptr || St(this), this.$$.preservePointerOnDelete)) return (this.$$.count.value += 1), this
        var t,
          e = Gt(
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
      (Lt.prototype.delete = function () {
        this.$$.ptr || St(this),
          this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && $t("Object already scheduled for deletion"),
          Rt(this),
          Ot(this.$$),
          this.$$.preservePointerOnDelete || ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0))
      }),
      (Lt.prototype.isDeleted = function () {
        return !this.$$.ptr
      }),
      (Lt.prototype.deleteLater = function () {
        return (
          this.$$.ptr || St(this),
          this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && $t("Object already scheduled for deletion"),
          Wt.push(this),
          1 === Wt.length && Ut && Ut(Ft),
          (this.$$.deleteScheduled = !0),
          this
        )
      }),
      (W.getInheritedInstanceCount = function () {
        return Object.keys(Dt).length
      }),
      (W.getLiveInheritedInstances = function () {
        var t = []
        for (var e in Dt) Dt.hasOwnProperty(e) && t.push(Dt[e])
        return t
      }),
      (W.flushPendingDeletes = Ft),
      (W.setDelayFunction = function (t) {
        ;(Ut = t), Wt.length && Ut && Ut(Ft)
      }),
      (Qt.prototype.getPointee = function (t) {
        return this.rawGetPointee && (t = this.rawGetPointee(t)), t
      }),
      (Qt.prototype.destructor = function (t) {
        this.rawDestructor && this.rawDestructor(t)
      }),
      (Qt.prototype.argPackAdvance = 8),
      (Qt.prototype.readValueFromPointer = Nt),
      (Qt.prototype.deleteObject = function (t) {
        null !== t && t.delete()
      }),
      (Qt.prototype.fromWireType = function (t) {
        var e = this.getPointee(t)
        if (!e) return this.destructor(t), null
        var n = (function (t, e) {
          return (
            (e = (function (t, e) {
              for (void 0 === e && $t("ptr should not be undefined"); t.baseClass; )
                (e = t.upcast(e)), (t = t.baseClass)
              return e
            })(t, e)),
            Dt[e]
          )
        })(this.registeredClass, e)
        if (void 0 !== n) {
          if (0 === n.$$.count.value) return (n.$$.ptr = e), (n.$$.smartPtr = t), n.clone()
          var r = n.clone()
          return this.destructor(t), r
        }
        function o() {
          return this.isSmartPointer
            ? qt(this.registeredClass.instancePrototype, {
                ptrType: this.pointeeType,
                ptr: e,
                smartPtrType: this,
                smartPtr: t,
              })
            : qt(this.registeredClass.instancePrototype, { ptrType: this, ptr: t })
        }
        var a,
          i = this.registeredClass.getActualType(e),
          s = jt[i]
        if (!s) return o.call(this)
        a = this.isConst ? s.constPointerType : s.pointerType
        var u = _t(e, this.registeredClass, a.registeredClass)
        return null === u
          ? o.call(this)
          : this.isSmartPointer
          ? qt(a.registeredClass.instancePrototype, { ptrType: a, ptr: u, smartPtrType: this, smartPtr: t })
          : qt(a.registeredClass.instancePrototype, { ptrType: a, ptr: u })
      }),
      (te = W.UnboundTypeError = Et(Error, "UnboundTypeError")),
      ie.allocated.push({ value: void 0 }, { value: null }, { value: !0 }, { value: !1 }),
      (ie.reserved = ie.allocated.length),
      (W.count_emval_handles = function () {
        for (var t = 0, e = ie.reserved; e < ie.allocated.length; ++e) void 0 !== ie.allocated[e] && ++t
        return t
      })
    var Be,
      Ee = {
        g: function (t, e, n) {
          throw (new dt(t).init(e, n), t)
        },
        p: function (t, e, n, r, o) {},
        l: function (t, e, n, r, o) {
          var a = ft(n)
          Tt(t, {
            name: (e = mt(e)),
            fromWireType: function (t) {
              return !!t
            },
            toWireType: function (t, e) {
              return e ? r : o
            },
            argPackAdvance: 8,
            readValueFromPointer: function (t) {
              var r
              if (1 === n) r = L
              else if (2 === n) r = H
              else {
                if (4 !== n) throw new TypeError("Unknown boolean type size: " + e)
                r = z
              }
              return this.fromWireType(r[t >> a])
            },
            destructorFunction: null,
          })
        },
        f: function (t, e, n, r, o, a, i, s, u, c, l, p, d) {
          ;(l = mt(l)), (a = Kt(o, a)), s && (s = Kt(i, s)), c && (c = Kt(u, c)), (d = Kt(p, d))
          var f = bt(l)
          !(function (t, e, n) {
            W.hasOwnProperty(t)
              ? ($t(`Cannot register public name '${t}' twice`),
                Mt(W, t, t),
                W.hasOwnProperty(n) &&
                  $t("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"),
                (W[t].overloadTable[void 0] = e))
              : (W[t] = e)
          })(f, function () {
            ne(`Cannot construct ${l} due to unbound types`, [r])
          }),
            kt([t, e, n], r ? [r] : [], function (e) {
              var n, o
              ;(e = e[0]), (o = r ? (n = e.registeredClass).instancePrototype : Lt.prototype)
              var i = Bt(f, function () {
                  if (Object.getPrototypeOf(this) !== u) throw new wt("Use 'new' to construct " + l)
                  if (void 0 === p.constructor_body) throw new wt(l + " has no accessible constructor")
                  var t = p.constructor_body[arguments.length]
                  if (void 0 === t)
                    throw new wt(
                      `Tried to invoke ctor of ${l} with invalid number of parameters (${
                        arguments.length
                      }) - expected (${Object.keys(p.constructor_body).toString()}) parameters instead!`
                    )
                  return t.apply(this, arguments)
                }),
                u = Object.create(o, { constructor: { value: i } })
              i.prototype = u
              var p = new Ht(l, i, u, d, n, a, s, c)
              p.baseClass &&
                (void 0 === p.baseClass.__derivedClasses && (p.baseClass.__derivedClasses = []),
                p.baseClass.__derivedClasses.push(p))
              var h = new Qt(l, p, !0, !1, !1),
                m = new Qt(l + "*", p, !1, !1, !1),
                A = new Qt(l + " const*", p, !1, !0, !1)
              return (
                (jt[t] = { pointerType: m, constPointerType: A }),
                (function (t, e, n) {
                  W.hasOwnProperty(t) || Pt("Replacing nonexistant public symbol"),
                    W[t].overloadTable,
                    (W[t] = e),
                    (W[t].argCount = n)
                })(f, i),
                [h, m, A]
              )
            })
        },
        e: function (t, e, n, r, o, a) {
          e > 0 || at(undefined)
          var i = re(e, n)
          ;(o = Kt(r, o)),
            kt([], [t], function (t) {
              var n = `constructor ${(t = t[0]).name}`
              if (
                (void 0 === t.registeredClass.constructor_body && (t.registeredClass.constructor_body = []),
                void 0 !== t.registeredClass.constructor_body[e - 1])
              )
                throw new wt(
                  `Cannot register multiple constructors with identical number of parameters (${e - 1}) for class '${
                    t.name
                  }'! Overload resolution is currently only performed using the parameter count, not actual type info!`
                )
              return (
                (t.registeredClass.constructor_body[e - 1] = () => {
                  ne(`Cannot construct ${t.name} due to unbound types`, i)
                }),
                kt([], i, function (r) {
                  return r.splice(1, 0, null), (t.registeredClass.constructor_body[e - 1] = ae(n, r, null, o, a)), []
                }),
                []
              )
            })
        },
        a: function (t, e, n, r, o, a, i, s, u) {
          var c = re(n, r)
          ;(e = mt(e)),
            (a = Kt(o, a)),
            kt([], [t], function (t) {
              var r = `${(t = t[0]).name}.${e}`
              function o() {
                ne(`Cannot call ${r} due to unbound types`, c)
              }
              e.startsWith("@@") && (e = Symbol[e.substring(2)]), s && t.registeredClass.pureVirtualFunctions.push(e)
              var l = t.registeredClass.instancePrototype,
                p = l[e]
              return (
                void 0 === p || (void 0 === p.overloadTable && p.className !== t.name && p.argCount === n - 2)
                  ? ((o.argCount = n - 2), (o.className = t.name), (l[e] = o))
                  : (Mt(l, e, r), (l[e].overloadTable[n - 2] = o)),
                kt([], c, function (o) {
                  var s = ae(r, o, t, a, i, u)
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
          Tt(t, {
            name: (e = mt(e)),
            fromWireType: function (t) {
              var e = ue.toValue(t)
              return se(t), e
            },
            toWireType: function (t, e) {
              return ue.toHandle(e)
            },
            argPackAdvance: 8,
            readValueFromPointer: Nt,
            destructorFunction: null,
          })
        },
        k: function (t, e, n) {
          var r = ft(n)
          Tt(t, {
            name: (e = mt(e)),
            fromWireType: function (t) {
              return t
            },
            toWireType: function (t, e) {
              return e
            },
            argPackAdvance: 8,
            readValueFromPointer: le(e, r),
            destructorFunction: null,
          })
        },
        c: function (t, e, n, r, o) {
          ;(e = mt(e)), -1 === o && (o = 4294967295)
          var a = ft(n),
            i = t => t
          if (0 === r) {
            var s = 32 - 8 * n
            i = t => (t << s) >>> s
          }
          var u = e.includes("unsigned")
          Tt(t, {
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
            readValueFromPointer: pe(e, a, 0 !== r),
            destructorFunction: null,
          })
        },
        b: function (t, e, n) {
          var r = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][
            e
          ]
          function o(t) {
            var e = Y,
              n = e[(t >>= 2)],
              o = e[t + 1]
            return new r(e.buffer, o, n)
          }
          Tt(
            t,
            { name: (n = mt(n)), fromWireType: o, argPackAdvance: 8, readValueFromPointer: o },
            { ignoreDuplicateRegistrations: !0 }
          )
        },
        j: function (t, e) {
          var n = "std::string" === (e = mt(e))
          Tt(t, {
            name: e,
            fromWireType: function (t) {
              var e,
                r,
                o,
                a = Y[t >> 2],
                i = t + 4
              if (n)
                for (var s = i, u = 0; u <= a; ++u) {
                  var c = i + u
                  if (u == a || 0 == M[c]) {
                    var l =
                      ((o = c - s),
                      (r = s)
                        ? (function (t, e, n) {
                            for (var r = e + n, o = e; t[o] && !(o >= r); ) ++o
                            if (o - e > 16 && t.buffer && de) return de.decode(t.subarray(e, o))
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
                          })(M, r, o)
                        : "")
                    void 0 === e ? (e = l) : ((e += String.fromCharCode(0)), (e += l)), (s = c + 1)
                  }
                }
              else {
                var p = new Array(a)
                for (u = 0; u < a; ++u) p[u] = String.fromCharCode(M[i + u])
                e = p.join("")
              }
              return xe(t), e
            },
            toWireType: function (t, e) {
              var r
              e instanceof ArrayBuffer && (e = new Uint8Array(e))
              var o = "string" == typeof e
              o ||
                e instanceof Uint8Array ||
                e instanceof Uint8ClampedArray ||
                e instanceof Int8Array ||
                $t("Cannot pass non-string to std::string"),
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
              var a = $e(4 + r + 1),
                i = a + 4
              if (((Y[a >> 2] = r), n && o))
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
                })(e, M, i, r + 1)
              else if (o)
                for (var s = 0; s < r; ++s) {
                  var u = e.charCodeAt(s)
                  u > 255 && (xe(i), $t("String has UTF-16 code units that do not fit in 8 bits")), (M[i + s] = u)
                }
              else for (s = 0; s < r; ++s) M[i + s] = e[s]
              return null !== t && t.push(xe, a), a
            },
            argPackAdvance: 8,
            readValueFromPointer: Nt,
            destructorFunction: function (t) {
              xe(t)
            },
          })
        },
        d: function (t, e, n) {
          var r, o, a, i, s
          ;(n = mt(n)),
            2 === e
              ? ((r = he), (o = me), (i = Ae), (a = () => Z), (s = 1))
              : 4 === e && ((r = ge), (o = ve), (i = ye), (a = () => Y), (s = 2)),
            Tt(t, {
              name: n,
              fromWireType: function (t) {
                for (var n, o = Y[t >> 2], i = a(), u = t + 4, c = 0; c <= o; ++c) {
                  var l = t + 4 + c * e
                  if (c == o || 0 == i[l >> s]) {
                    var p = r(u, l - u)
                    void 0 === n ? (n = p) : ((n += String.fromCharCode(0)), (n += p)), (u = l + e)
                  }
                }
                return xe(t), n
              },
              toWireType: function (t, r) {
                "string" != typeof r && $t(`Cannot pass non-string to C++ string type ${n}`)
                var a = i(r),
                  u = $e(4 + a + e)
                return (Y[u >> 2] = a >> s), o(r, u + 4, a + e), null !== t && t.push(xe, u), u
              },
              argPackAdvance: 8,
              readValueFromPointer: Nt,
              destructorFunction: function (t) {
                xe(t)
              },
            })
        },
        m: function (t, e) {
          Tt(t, {
            isVoid: !0,
            name: (e = mt(e)),
            argPackAdvance: 0,
            fromWireType: function () {},
            toWireType: function (t, e) {},
          })
        },
        n: se,
        o: function (t) {
          t > 4 && (ie.get(t).refcount += 1)
        },
        h: function (t, e) {
          var n, r
          void 0 === (r = gt[(n = t)]) && $t("_emval_take_value has unknown type " + ee(n))
          var o = (t = r).readValueFromPointer(e)
          return ue.toHandle(o)
        },
        i: function () {
          at("")
        },
        s: function (t, e, n) {
          M.copyWithin(t, e, e + n)
        },
        r: function (t) {
          var e = M.length,
            n = 2147483648
          if ((t >>>= 0) > n) return !1
          for (var r, o = 1; o <= 4; o *= 2) {
            var a = e * (1 + 0.2 / o)
            if (
              ((a = Math.min(a, t + 100663296)),
              Ce(Math.min(n, (r = Math.max(t, a)) + ((65536 - (r % 65536)) % 65536))))
            )
              return !0
          }
          return !1
        },
        q: function (t, e) {
          return be(M.subarray(t, t + e)), 0
        },
      },
      we =
        ((function () {
          var t,
            e,
            n,
            r = { a: Ee }
          function o(t, e) {
            var n,
              r = t.exports
            return (
              (W.asm = r),
              (q = W.asm.u),
              J(),
              (Q = W.asm.w),
              (n = W.asm.v),
              tt.unshift(n),
              (function (t) {
                if (
                  (nt--,
                  W.monitorRunDependencies && W.monitorRunDependencies(nt),
                  0 == nt && (null !== rt && (clearInterval(rt), (rt = null)), ot))
                ) {
                  var e = ot
                  ;(ot = null), e()
                }
              })(),
              r
            )
          }
          if ((nt++, W.monitorRunDependencies && W.monitorRunDependencies(nt), W.instantiateWasm))
            try {
              return W.instantiateWasm(r, o)
            } catch (t) {
              return G("Module.instantiateWasm callback failed with error: " + t), !1
            }
          ;(t = it),
            (e = r),
            (n = function (t) {
              o(t.instance)
            }),
            D || "function" != typeof WebAssembly.instantiateStreaming || ut(t) || "function" != typeof fetch
              ? lt(t, e, n)
              : fetch(t, { credentials: "same-origin" }).then(r =>
                  WebAssembly.instantiateStreaming(r, e).then(n, function (r) {
                    return (
                      G("wasm streaming compile failed: " + r),
                      G("falling back to ArrayBuffer instantiation"),
                      lt(t, e, n)
                    )
                  })
                )
        })(),
        function () {
          return (we = W.asm.x).apply(null, arguments)
        }),
      $e =
        ((W.__embind_initialize_bindings = function () {
          return (W.__embind_initialize_bindings = W.asm.y).apply(null, arguments)
        }),
        function () {
          return ($e = W.asm.z).apply(null, arguments)
        }),
      xe = function () {
        return (xe = W.asm.A).apply(null, arguments)
      },
      Pe = function () {
        return (Pe = W.asm.B).apply(null, arguments)
      }
    function ke() {
      function t() {
        Be ||
          ((Be = !0),
          (W.calledRun = !0),
          X ||
            (pt(tt),
            W.onRuntimeInitialized && W.onRuntimeInitialized(),
            (function () {
              if (W.postRun)
                for ("function" == typeof W.postRun && (W.postRun = [W.postRun]); W.postRun.length; )
                  (t = W.postRun.shift()), et.unshift(t)
              var t
              pt(et)
            })()))
      }
      nt > 0 ||
        ((function () {
          if (W.preRun)
            for ("function" == typeof W.preRun && (W.preRun = [W.preRun]); W.preRun.length; )
              (t = W.preRun.shift()), K.unshift(t)
          var t
          pt(K)
        })(),
        nt > 0 ||
          (W.setStatus
            ? (W.setStatus("Running..."),
              setTimeout(function () {
                setTimeout(function () {
                  W.setStatus("")
                }, 1),
                  t()
              }, 1))
            : t()))
    }
    if (
      ((ot = function t() {
        Be || ke(), Be || (ot = t)
      }),
      W.preInit)
    )
      for ("function" == typeof W.preInit && (W.preInit = [W.preInit]); W.preInit.length > 0; ) W.preInit.pop()()
    ke()
    const Te = n.p + "819f444fda995193e9bc97860ee43890.mp3",
      Se = n.p + "d735670017a3489d654560cd2d3e1f5e.mp3",
      Ie = new Audio(Te),
      Re = new Audio(Se)
    ;(Ie.preload = "auto"),
      (Re.preload = "auto"),
      (Ie.loop = !0),
      (Ie.volume = 0.1),
      (Re.volume = 0.1),
      (W.onRuntimeInitialized = async function () {
        let t = new W.Game()
        ;(t.lastTick = Date.now()),
          (t.gameLoop = function () {
            let t = Date.now()
            t - this.lastTick >= this.getDropInterval() &&
              !this.getGamePaused() &&
              (this.update(), (this.lastTick = t)),
              x(this),
              this.getGameOver()
                ? ((function (t) {
                    t.getScore() > $ && (($ = t.getScore()), localStorage.setItem("highScore", $))
                  })(this),
                  Ie.pause(),
                  Re.play(),
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
                    x(t)),
                  "resumeButton" == e.target.id &&
                    (t.resumeGame(), document.getElementById("pauseGameContainer").remove(), Ie.play())
              })
            const n = document.getElementById("muteButton")
            n.addEventListener("click", t => {
              ;("muteButton" === t.target.id || t.target.classList.contains("muteClickable")) &&
                (A.toggleMuteButton(), n.blur())
            })
          })(t),
          x(t),
          A.displayStartComponents()
      })
  })()
})()
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHNCQUFzQjFGLFNBQzlDeUcsR0FBWTRnQixPQUNkLElBR0YsTUFBTTNnQixFQUFhOUYsU0FBUzhFLGVBQWUsY0FDM0NnQixFQUFXOGdCLGlCQUFpQixTQUFTdG1CLEtBQ2YsZUFBaEJBLEVBQUVSLE9BQU9qRSxJQUF1QnlFLEVBQUVSLE9BQU84RSxVQUFVb0IsU0FBUyxvQkFDOURsQyxFQUFXOEIsbUJBQ1hFLEVBQVd3aEIsT0FDYixHQUNELEVEM0NEQyxDQUFXdmlCLEdBQ1hnQyxFQUFLaEMsR0FDTGxCLEVBQVdxQyx3QkFDYixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dhc21fdGV0cmlzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2FzbV90ZXRyaXMvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy8uL3NyYy9kcmF3LmpzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vc3JjL3RldHJpcy5qcyIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy8uL2Fzc2V0cy9UZXRyaXMubXAzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vYXNzZXRzLzE4LiBHYW1lIE92ZXIubXAzIiwid2VicGFjazovL3dhc21fdGV0cmlzLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly93YXNtX3RldHJpcy8uL3NyYy9ldmVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QcmVzcytTdGFydCsyUCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuI3Byb2plY3RDb250YWluZXIgPiAqIHtcbiAgZm9udC1mYW1pbHk6IFwiUHJlc3MgU3RhcnQgMlBcIiwgY3Vyc2l2ZTtcbn1cblxuI3Byb2plY3RDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMGR2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2dpdExpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYXF1YW1hcmluZTtcbiAgY29sb3I6IGFxdWFtYXJpbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbiNzdWJDb250YWluZXIge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI211dGVCdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAzcHggc29saWQgYXF1YW1hcmluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA0cHggOHB4O1xufVxuI211dGVCdXR0b24gc3ZnIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuI2hlbHBCb3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjAlO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwJSArIDEwcHgpKTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgd2lkdGg6IDMwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGFxdWFtYXJpbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmhlbHBSb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG59XG4uaGVscFJvdyBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI25leHRQaWVjZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDk1cHgpO1xuICBib3JkZXI6IDNweCBzb2xpZCBhcXVhbWFyaW5lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbiNjb3JuZXJQYXVzZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuI3Njb3JlQm9hcmQge1xuICBib3JkZXI6IDNweCBzb2xpZCBhcXVhbWFyaW5lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTEwMCUgLSAxMHB4KSwgMzUlKTtcbn1cblxuI2dhbWVPdmVyQ29udGFpbmVyLFxuI3N0YXJ0R2FtZUNvbnRhaW5lcixcbiNwYXVzZUdhbWVDb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDRweCBzb2xpZCBhcXVhbWFyaW5lO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiA4MSU7XG59XG4jc3RhcnRHYW1lQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLCAwLjE3NSk7XG59XG4jZ2FtZU92ZXJDb250YWluZXIge1xuICB3aWR0aDogOTklO1xufVxuI2dhbWVPdmVyQ29udGFpbmVyIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4jcGxheUJ1dHRvbixcbiNwbGF5QWdhaW5CdXR0b24sXG4jcmVzdW1lQnV0dG9uLFxuI3F1aXRCdXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDJweCBzb2xpZCBhcXVhbWFyaW5lO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlByZXNzIFN0YXJ0IDJQXCIsIGN1cnNpdmU7XG59XG4jcGxheUFnYWluQnV0dG9uIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuI3BsYXlCdXR0b246aG92ZXIsXG4jcGxheUFnYWluQnV0dG9uOmhvdmVyLFxuI3Jlc3VtZUJ1dHRvbjpob3ZlcixcbiNxdWl0QnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDE1cHgpIHtcbiAgI2hlbHBCb3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEyNHB4O1xuICAgIHRvcDogNzclO1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxXQUFXO0VBQ1gsNkNBQTZDO0FBQy9DOztBQUVBOzs7RUFHRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7RUFDYixVQUFVO0FBQ1o7QUFDQTtFQUNFLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7RUFJRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBOzs7O0VBSUUsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJlc3MrU3RhcnQrMlAmZGlzcGxheT1zd2FwXFxcIik7XFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbiNwcm9qZWN0Q29udGFpbmVyID4gKiB7XFxuICBmb250LWZhbWlseTogXFxcIlByZXNzIFN0YXJ0IDJQXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuI3Byb2plY3RDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwZHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNnaXRMaW5rIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIGxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYXF1YW1hcmluZTtcXG4gIGNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI3N1YkNvbnRhaW5lciB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jbXV0ZUJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGFxdWFtYXJpbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbn1cXG4jbXV0ZUJ1dHRvbiBzdmcge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbiNoZWxwQm94IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNjAlO1xcbiAgcmlnaHQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygxMDAlICsgMTBweCkpO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDE2cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYXF1YW1hcmluZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmhlbHBSb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG59XFxuLmhlbHBSb3cgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbmV4dFBpZWNlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgOTVweCk7XFxuICBib3JkZXI6IDNweCBzb2xpZCBhcXVhbWFyaW5lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jY29ybmVyUGF1c2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4jc2NvcmVCb2FyZCB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBhcXVhbWFyaW5lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYygtMTAwJSAtIDEwcHgpLCAzNSUpO1xcbn1cXG5cXG4jZ2FtZU92ZXJDb250YWluZXIsXFxuI3N0YXJ0R2FtZUNvbnRhaW5lcixcXG4jcGF1c2VHYW1lQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiA0cHggc29saWQgYXF1YW1hcmluZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDgxJTtcXG59XFxuI3N0YXJ0R2FtZUNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuMTc1KTtcXG59XFxuI2dhbWVPdmVyQ29udGFpbmVyIHtcXG4gIHdpZHRoOiA5OSU7XFxufVxcbiNnYW1lT3ZlckNvbnRhaW5lciBzcGFuOm50aC1jaGlsZCgxKSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5QnV0dG9uLFxcbiNwbGF5QWdhaW5CdXR0b24sXFxuI3Jlc3VtZUJ1dHRvbixcXG4jcXVpdEJ1dHRvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGFxdWFtYXJpbmU7XFxuICBwYWRkaW5nOiA4cHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUHJlc3MgU3RhcnQgMlBcXFwiLCBjdXJzaXZlO1xcbn1cXG4jcGxheUFnYWluQnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuI3BsYXlCdXR0b246aG92ZXIsXFxuI3BsYXlBZ2FpbkJ1dHRvbjpob3ZlcixcXG4jcmVzdW1lQnV0dG9uOmhvdmVyLFxcbiNxdWl0QnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDE1cHgpIHtcXG4gICNoZWxwQm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEyNHB4O1xcbiAgICB0b3A6IDc3JTtcXG4gICAgcmlnaHQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGNvbnN0IGNvbXBvbmVudHMgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBkaXNwbGF5R2FtZU92ZXJQYWdlKGdhbWUpIHtcbiAgICBjb25zdCBnYW1lT3ZlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBzcGFuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgIGNvbnN0IHNwYW5TY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgY29uc3Qgc3BhbkhpZ2hTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGNvbnN0IHF1aXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgZ2FtZU92ZXJDb250YWluZXIuaWQgPSBcImdhbWVPdmVyQ29udGFpbmVyXCJcbiAgICBwbGF5QWdhaW5CdXR0b24uaWQgPSBcInBsYXlBZ2FpbkJ1dHRvblwiXG4gICAgcXVpdEJ1dHRvbi5pZCA9IFwicXVpdEJ1dHRvblwiXG4gICAgc3BhblRpdGxlLnRleHRDb250ZW50ID0gXCJHYW1lIE92ZXIhXCJcbiAgICBzcGFuU2NvcmUudGV4dENvbnRlbnQgPSBgU2NvcmU6ICR7Z2FtZS5nZXRTY29yZSgpLnRvU3RyaW5nKCl9YFxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpZ2hTY29yZVwiKSAhPT0gbnVsbCkge1xuICAgICAgc3BhbkhpZ2hTY29yZS50ZXh0Q29udGVudCA9IGBIaWdoIFNjb3JlOiAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaFNjb3JlXCIpfWBcbiAgICB9IGVsc2Uge1xuICAgICAgc3BhbkhpZ2hTY29yZS50ZXh0Q29udGVudCA9IGBIaWdoIFNjb3JlOiAke2dhbWUuZ2V0U2NvcmUoKS50b1N0cmluZygpfWBcbiAgICB9XG4gICAgcGxheUFnYWluQnV0dG9uLnRleHRDb250ZW50ID0gXCJQTEFZIEFHQUlOXCJcbiAgICBxdWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJRVUlUXCJcbiAgICBnYW1lT3ZlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuVGl0bGUpXG4gICAgZ2FtZU92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhblNjb3JlKVxuICAgIGdhbWVPdmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW5IaWdoU2NvcmUpXG4gICAgZ2FtZU92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheUFnYWluQnV0dG9uKVxuICAgIGdhbWVPdmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1aXRCdXR0b24pXG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVPdmVyQ29udGFpbmVyKVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVN0YXJ0UGFnZSgpIHtcbiAgICBjb25zdCBzdGFydEdhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3Qgc3BhblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIHBsYXlCdXR0b24uaWQgPSBcInBsYXlCdXR0b25cIlxuICAgIHN0YXJ0R2FtZUNvbnRhaW5lci5pZCA9IFwic3RhcnRHYW1lQ29udGFpbmVyXCJcbiAgICBzcGFuVGl0bGUudGV4dENvbnRlbnQgPSBcIlRFVFJJU1wiXG4gICAgcGxheUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUExBWVwiXG4gICAgc3RhcnRHYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW5UaXRsZSlcbiAgICBzdGFydEdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheUJ1dHRvbilcbiAgICBzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRHYW1lQ29udGFpbmVyKVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVBhdXNlUGFnZSgpIHtcbiAgICBjb25zdCBwYXVzZUdhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3Qgc3BhblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICBjb25zdCByZXN1bWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicmVzdW1lQnV0dG9uXCIpXG4gICAgcGF1c2VHYW1lQ29udGFpbmVyLmlkID0gXCJwYXVzZUdhbWVDb250YWluZXJcIlxuICAgIHJlc3VtZUJ1dHRvbi5pZCA9IFwicmVzdW1lQnV0dG9uXCJcbiAgICBzcGFuVGl0bGUudGV4dENvbnRlbnQgPSBcIlBBVVNFRFwiXG4gICAgcmVzdW1lQnV0dG9uLnRleHRDb250ZW50ID0gXCJyZXN1bWVcIlxuICAgIHBhdXNlR2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuVGl0bGUpXG4gICAgcGF1c2VHYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3VtZUJ1dHRvbilcbiAgICBzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQocGF1c2VHYW1lQ29udGFpbmVyKVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheUhlbHBCb3goKSB7XG4gICAgY29uc3QgaGVscEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBoZWxwQm94LmlkID0gXCJoZWxwQm94XCJcblxuICAgIGxldCBjb250ZW50QXJyID0gW1wiTW92ZTpcIiwgXCJSb3RhdGU6XCIsIFwiUXVpY2sgRHJvcDpcIiwgXCJQYXVzZS9QbGF5OlwiXVxuICAgIGxldCBrZXlzID0gW1wiQXJyb3dzXCIsIFwiJ3onXCIsIFwiJ1NwYWNlJ1wiLCBcIidFc2MnXCJdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgICBjb25zdCBzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgICBpbm5lckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVscFJvd1wiKVxuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGNvbnRlbnRBcnJbaV1cbiAgICAgIHNwYW4yLnRleHRDb250ZW50ID0ga2V5c1tpXVxuICAgICAgaW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhbilcbiAgICAgIGlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4yKVxuICAgICAgaGVscEJveC5hcHBlbmRDaGlsZChpbm5lckNvbnRhaW5lcilcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJDb250YWluZXJcIikuYXBwZW5kQ2hpbGQoaGVscEJveClcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZU11dGVCdXR0b24oKSB7XG4gICAgY29uc3QgdGV0cmlzTXVzaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0TXVzaWNcIilcbiAgICBjb25zdCBzb3VuZE9uID0gYDxzdmcgY2xhc3M9XCJtdXRlQ2xpY2thYmxlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBjbGFzcz1cIm11dGVDbGlja2FibGVcIiBmaWxsPVwiYXF1YW1hcmluZVwiIGQ9XCJNNy41NjMgMi4wNjlBLjc1Ljc1IDAgMCAxIDggMi43NXYxMC41YS43NTEuNzUxIDAgMCAxLTEuMjM4LjU3TDMuNDcyIDExSDEuNzVBMS43NSAxLjc1IDAgMCAxIDAgOS4yNXYtMi41QzAgNS43ODQuNzg0IDUgMS43NSA1aDEuNzIzbDMuMjg5LTIuODJhLjc1Ljc1IDAgMCAxIC44MDEtLjExMVpNNi41IDQuMzhMNC4yMzggNi4zMTlhLjc0OC43NDggMCAwIDEtLjQ4OC4xODFoLTJhLjI1LjI1IDAgMCAwLS4yNS4yNXYyLjVjMCAuMTM4LjExMi4yNS4yNS4yNWgyYy4xNzkgMCAuMzUyLjA2NC40ODguMThMNi41IDExLjYyWm02LjA5Ni0yLjAzOGEuNzUuNzUgMCAwIDEgMS4wNiAwYTggOCAwIDAgMSAwIDExLjMxNGEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4YS43NTEuNzUxIDAgMCAxLS4wMTgtMS4wNDJhNi41IDYuNSAwIDAgMCAwLTkuMTkzYS43NS43NSAwIDAgMSAwLTEuMDZabS0xLjA2IDIuMTIxbC0uMDAxLjAwMWE1IDUgMCAwIDEgMCA3LjA3YS43NDkuNzQ5IDAgMCAxLTEuMjc1LS4zMjZhLjc0OS43NDkgMCAwIDEgLjIxNS0uNzM0YTMuNSAzLjUgMCAwIDAgMC00Ljk1YS43NS43NSAwIDEgMSAxLjA2MS0xLjA2MVpcIi8+PC9zdmc+YFxuICAgIGNvbnN0IHNvdW5kT2ZmID0gYDxzdmcgY2xhc3M9XCJtdXRlQ2xpY2thYmxlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBjbGFzcz1cIm11dGVDbGlja2FibGVcIiBmaWxsPVwiYXF1YW1hcmluZVwiIGQ9XCJNMTIuNDMgNC4xYTEgMSAwIDAgMC0xIC4xMkw2LjY1IDhIM2ExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWgzLjY1bDQuNzMgMy43OEExIDEgMCAwIDAgMTIgMjBhLjkxLjkxIDAgMCAwIC40My0uMUExIDEgMCAwIDAgMTMgMTlWNWExIDEgMCAwIDAtLjU3LS45Wk0xMSAxNi45MmwtMy4zOC0yLjdBMSAxIDAgMCAwIDcgMTRINHYtNGgzYTEgMSAwIDAgMCAuNjItLjIyTDExIDcuMDhaTTE5LjkxIDEybDEuOC0xLjc5YTEgMSAwIDAgMC0xLjQyLTEuNDJsLTEuNzkgMS44bC0xLjc5LTEuOGExIDEgMCAwIDAtMS40MiAxLjQybDEuOCAxLjc5bC0xLjggMS43OWExIDEgMCAwIDAgMCAxLjQyYTEgMSAwIDAgMCAxLjQyIDBsMS43OS0xLjhsMS43OSAxLjhhMSAxIDAgMCAwIDEuNDIgMGExIDEgMCAwIDAgMC0xLjQyWlwiLz48L3N2Zz5gXG4gICAgY29uc3QgbXV0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXV0ZUJ1dHRvblwiKVxuICAgIG11dGVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpXG4gICAgaWYgKG11dGVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwib25cIikpIHtcbiAgICAgIG11dGVCdXR0b24uaW5uZXJIVE1MID0gc291bmRPblxuICAgICAgdGV0cmlzTXVzaWMubXV0ZWQgPSBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICBtdXRlQnV0dG9uLmlubmVySFRNTCA9IHNvdW5kT2ZmXG4gICAgICB0ZXRyaXNNdXNpYy5tdXRlZCA9IHRydWVcbiAgICB9XG4gIH1cblxuICAvL0NPTVBPTkVOVFMgQkVMT1c6XG4gIGZ1bmN0aW9uIGRpc3BsYXlTdGFydENvbXBvbmVudHMoKSB7XG4gICAgZGlzcGxheVN0YXJ0UGFnZSgpXG4gICAgZGlzcGxheUhlbHBCb3goKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5R2FtZU92ZXJQYWdlLFxuICAgIGRpc3BsYXlQYXVzZVBhZ2UsXG4gICAgZGlzcGxheVN0YXJ0UGFnZSxcbiAgICBkaXNwbGF5SGVscEJveCxcbiAgICB0b2dnbGVNdXRlQnV0dG9uLFxuICAgIGRpc3BsYXlTdGFydENvbXBvbmVudHMsXG4gIH1cbn0pKClcbiIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIilcbmNvbnN0IG5leHRQaWVjZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dFBpZWNlXCIpXG5jb25zdCBzY29yZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZUJvYXJkXCIpXG5cbi8vQ2FudmFzIGNvbnRleHRzXG5sZXQgYyA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcbmxldCBjbiA9IG5leHRQaWVjZUNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcbmxldCBjcyA9IHNjb3JlQm9hcmQuZ2V0Q29udGV4dChcIjJkXCIpXG5cbi8vR2FtZSBkaW1lbnNpb25zIFRPRE86IEhBTkRMRSBCTE9DS1NJWkUgQkFTRUQgT04gU0NSRUVOIFNJWkVcbmxldCBibG9ja1NpemUgPSAzMCAvL3B4XG5jb25zdCBuRmllbGRXaWR0aCA9IDEyXG5jb25zdCBuRmllbGRIZWlnaHQgPSAyM1xuY29uc3Qgb2Zmc2V0WCA9IDJcbmNvbnN0IG9mZnNldFkgPSAyXG4vL2NvbG9yc1xuY29uc3QgdGV0cm9taW5vQ29sb3JzID0gW1wiI2ZiYmYyNFwiLCBcIiMyMmM1NWVcIiwgXCIjMGVhNWU5XCIsIFwiIzY3ZThmOVwiLCBcIiNlMTFkNDhcIiwgXCIjZDk0NmVmXCIsIFwiI2Y4ZmFmY1wiXVxuXG5jYW52YXMud2lkdGggPSBibG9ja1NpemUgKiBuRmllbGRXaWR0aCArIG9mZnNldFggKiAyXG5jYW52YXMuaGVpZ2h0ID0gYmxvY2tTaXplICogbkZpZWxkSGVpZ2h0ICsgb2Zmc2V0WSAqIDJcbm5leHRQaWVjZUNhbnZhcy53aWR0aCA9IGJsb2NrU2l6ZSAqIDRcbm5leHRQaWVjZUNhbnZhcy5oZWlnaHQgPSBibG9ja1NpemUgKiA0XG5zY29yZUJvYXJkLndpZHRoID0gYmxvY2tTaXplICogNVxuc2NvcmVCb2FyZC5oZWlnaHQgPSBibG9ja1NpemUgKiA4XG5cbmxldCBISUdIX1NDT1JFID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaWdoU2NvcmVcIilcbmlmIChISUdIX1NDT1JFID09PSBudWxsKSBISUdIX1NDT1JFID0gXCIwXCJcblxuY29uc3QgQ2VsbCA9IHtcbiAgRU1QVFk6IDEwLFxuICBCT1JERVI6IDksXG4gIFRFVFJPTUlOTzogOCxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXcoZ2FtZSkge1xuICByZWZyZXNoUGFnZSgpXG5cbiAgLy9HZXQgZ2FtZSB2YXJpYWJsZXNcbiAgbGV0IG5DdXJyZW50WCA9IGdhbWUuZ2V0Q3VycmVudFgoKVxuICBsZXQgbkN1cnJlbnRZID0gZ2FtZS5nZXRDdXJyZW50WSgpXG4gIGxldCBuU2hhZG93WSA9IGdhbWUuY2hhbmdlU2hhZG93WSgpXG4gIGxldCBuQ3VycmVudFBpZWNlID0gZ2FtZS5nZXRDdXJyZW50UGllY2UoKVxuICBsZXQgbk5leHRQaWVjZSA9IGdhbWUuZ2V0TmV4dFBpZWNlKClcbiAgbGV0IG5DdXJyZW50Um90YXRpb24gPSBnYW1lLmdldEN1cnJlbnRSb3RhdGlvbigpXG4gIGxldCB0ZXRyb21pbm8gPSBnYW1lLmdldFRldHJvbWlubyhuQ3VycmVudFBpZWNlKVxuICBsZXQgbmV4dFRldHJvbWlubyA9IGdhbWUuZ2V0VGV0cm9taW5vKG5OZXh0UGllY2UpXG5cbiAgZHJhd0dhbWVGaWVsZChnYW1lKVxuXG4gIC8vRHJhdyBUZXRyb21pbm8sIHNoYWRvdywgbmV4dCB0ZXRyb21pbm9cbiAgZm9yIChsZXQgcHggPSAwOyBweCA8IDQ7IHB4KyspXG4gICAgZm9yIChsZXQgcHkgPSAwOyBweSA8IDQ7IHB5KyspIHtcbiAgICAgIGxldCByb3RhdGVkSW5kZXggPSBnYW1lLlJvdGF0ZShweCwgcHksIG5DdXJyZW50Um90YXRpb24pXG4gICAgICBpZiAodGV0cm9taW5vLmdldChyb3RhdGVkSW5kZXgpID09PSAxKSB7XG4gICAgICAgIGRyYXdUZXRyb21pbm8ocHgsIHB5LCBuQ3VycmVudFgsIG5DdXJyZW50WSwgbkN1cnJlbnRQaWVjZSlcbiAgICAgICAgZHJhd1RldHJvbWlub1NoYWRvdyhnYW1lLCBweCwgcHksIG5DdXJyZW50WCwgblNoYWRvd1ksIHRldHJvbWlubywgbkN1cnJlbnRQaWVjZSwgbkN1cnJlbnRSb3RhdGlvbilcbiAgICAgIH1cbiAgICAgIGRyYXdOZXh0UGllY2UocHgsIHB5LCBuTmV4dFBpZWNlLCBuZXh0VGV0cm9taW5vKVxuICAgIH1cbiAgZHJhd1Njb3JlQm9hcmQoZ2FtZSlcbiAgZHJhd0dhbWVGaWVsZEJvcmRlcnMoKVxufVxuXG4vL1V0aWwgZnVuY3Rpb25zXG5jb25zdCByZWZyZXNoUGFnZSA9ICgpID0+IHtcbiAgYy5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICBjbi5jbGVhclJlY3QoMCwgMCwgbmV4dFBpZWNlQ2FudmFzLndpZHRoLCBuZXh0UGllY2VDYW52YXMuaGVpZ2h0KVxuICBjcy5jbGVhclJlY3QoMCwgMCwgc2NvcmVCb2FyZC53aWR0aCwgc2NvcmVCb2FyZC5oZWlnaHQpXG59XG5mdW5jdGlvbiBkcmF3TGluZShzeCwgc3ksIGV4LCBleSkge1xuICBjLmJlZ2luUGF0aCgpXG4gIGMubW92ZVRvKHN4LCBzeSlcbiAgYy5saW5lVG8oZXgsIGV5KVxuICBjLnN0cm9rZSgpXG59XG5cbi8vRHJhdyBmdW5jdGlvbnNcbmNvbnN0IGRyYXdHYW1lRmllbGQgPSBnYW1lID0+IHtcbiAgbGV0IGdhbWVCb2FyZCA9IGdhbWUuZ2V0R2FtZUJvYXJkKClcbiAgLy9EcmF3IEZpZWxkXG4gIGZvciAobGV0IHggPSAwOyB4IDwgbkZpZWxkV2lkdGg7IHgrKykge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbkZpZWxkSGVpZ2h0OyB5KyspIHtcbiAgICAgIGNvbnN0IGluZGV4ID0geSAqIG5GaWVsZFdpZHRoICsgeFxuICAgICAgY29uc3QgdmFsdWUgPSBnYW1lQm9hcmQuZ2V0KGluZGV4KVxuXG4gICAgICBpZiAodmFsdWUgPT09IENlbGwuRU1QVFkpIHtcbiAgICAgICAgLy9FbXB0eSBzcGFjZVxuICAgICAgICBjLmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gQ2VsbC5CT1JERVIpIHtcbiAgICAgICAgLy9Cb3JkZXIgY2VsbHNcbiAgICAgICAgYy5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICBjLmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICBjLmZpbGxSZWN0KHggKiBibG9ja1NpemUgKyBvZmZzZXRYLCB5ICogYmxvY2tTaXplICsgb2Zmc2V0WSwgYmxvY2tTaXplLCBibG9ja1NpemUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL0Ryb3BwZWQgdGV0cm9taW5vc1xuICAgICAgICBnYW1lLmdldEdhbWVPdmVyKCkgPyAoYy5zdHJva2VTdHlsZSA9IFwiYXF1YW1hcmluZVwiKSA6IChjLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiKVxuICAgICAgICBjLmxpbmVXaWR0aCA9IDJcbiAgICAgICAgYy5zdHJva2VSZWN0KHggKiBibG9ja1NpemUgKyBvZmZzZXRYLCB5ICogYmxvY2tTaXplICsgb2Zmc2V0WSwgYmxvY2tTaXplLCBibG9ja1NpemUpXG4gICAgICB9XG5cbiAgICAgIC8vIERyYXcgZGlhZ29uYWxzXG4gICAgICBpZiAodmFsdWUgIT09IENlbGwuRU1QVFkgJiYgdmFsdWUgIT09IENlbGwuQk9SREVSKSB7XG4gICAgICAgIC8vUGxhY2VkIHRldHJvbWlub3NcbiAgICAgICAgYy5saW5lV2lkdGggPSAxXG4gICAgICAgIC8vYy5zaGFkb3dCbHVyID0gMTBcbiAgICAgICAgLy9jLnNoYWRvd0NvbG9yID0gXCJhcXVhbWFyaW5lXCJcbiAgICAgICAgZHJhd0xpbmUoXG4gICAgICAgICAgeCAqIGJsb2NrU2l6ZSArIG9mZnNldFgsXG4gICAgICAgICAgeSAqIGJsb2NrU2l6ZSArIG9mZnNldFksXG4gICAgICAgICAgKHggKyAxKSAqIGJsb2NrU2l6ZSArIG9mZnNldFgsXG4gICAgICAgICAgKHkgKyAxKSAqIGJsb2NrU2l6ZSArIG9mZnNldFlcbiAgICAgICAgKVxuICAgICAgICBkcmF3TGluZShcbiAgICAgICAgICB4ICogYmxvY2tTaXplICsgYmxvY2tTaXplICsgb2Zmc2V0WCxcbiAgICAgICAgICB5ICogYmxvY2tTaXplICsgb2Zmc2V0WSxcbiAgICAgICAgICB4ICogYmxvY2tTaXplICsgb2Zmc2V0WCxcbiAgICAgICAgICB5ICogYmxvY2tTaXplICsgYmxvY2tTaXplICsgb2Zmc2V0WVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8va2lsbCBzaGFkb3dzXG4gICAgICBjLnNoYWRvd0JsdXIgPSAwXG4gICAgICBjLnNoYWRvd0NvbG9yID0gXCJibGFja1wiXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRyYXdUZXRyb21pbm8gPSAocHgsIHB5LCBuQ3VycmVudFgsIG5DdXJyZW50WSwgbkN1cnJlbnRQaWVjZSkgPT4ge1xuICAvLyBTZXQgZ2xvdyBlZmZlY3RcbiAgYy5zaGFkb3dCbHVyID0gMTJcbiAgYy5zaGFkb3dDb2xvciA9IHRldHJvbWlub0NvbG9yc1tuQ3VycmVudFBpZWNlXVxuICAvLyBEcmF3IGJvcmRlclxuICBjLnN0cm9rZVN0eWxlID0gdGV0cm9taW5vQ29sb3JzW25DdXJyZW50UGllY2VdXG4gIGMubGluZVdpZHRoID0gM1xuICBjLnN0cm9rZVJlY3QoKG5DdXJyZW50WCArIHB4KSAqIGJsb2NrU2l6ZSArIG9mZnNldFgsIChuQ3VycmVudFkgKyBweSkgKiBibG9ja1NpemUgKyBvZmZzZXRZLCBibG9ja1NpemUsIGJsb2NrU2l6ZSlcbiAgYy5zaGFkb3dCbHVyID0gMFxuICBjLnNoYWRvd0NvbG9yID0gXCJibGFja1wiXG59XG5cbmNvbnN0IGRyYXdUZXRyb21pbm9TaGFkb3cgPSAoZ2FtZSwgcHgsIHB5LCBuQ3VycmVudFgsIG5TaGFkb3dZLCB0ZXRyb21pbm8sIG5DdXJyZW50UGllY2UsIG5DdXJyZW50Um90YXRpb24pID0+IHtcbiAgY29uc3QgRU1QVFlfU1BBQ0UgPSAwXG4gIGMuc3Ryb2tlU3R5bGUgPSB0ZXRyb21pbm9Db2xvcnNbbkN1cnJlbnRQaWVjZV1cbiAgaWYgKCFnYW1lLmdldEdhbWVQYXVzZWQoKSAmJiAhZ2FtZS5nZXRHYW1lT3ZlcigpKSB7XG4gICAgLy8gQ2hlY2sgbmVpZ2hib3JpbmcgY2VsbHNcbiAgICBjb25zdCB0b3AgPSBweSA+IDAgPyB0ZXRyb21pbm8uZ2V0KGdhbWUuUm90YXRlKHB4LCBweSAtIDEsIG5DdXJyZW50Um90YXRpb24pKSA6IEVNUFRZX1NQQUNFXG4gICAgY29uc3QgcmlnaHQgPSBweCA8IDMgPyB0ZXRyb21pbm8uZ2V0KGdhbWUuUm90YXRlKHB4ICsgMSwgcHksIG5DdXJyZW50Um90YXRpb24pKSA6IEVNUFRZX1NQQUNFXG4gICAgY29uc3QgYm90dG9tID0gcHkgPCAzID8gdGV0cm9taW5vLmdldChnYW1lLlJvdGF0ZShweCwgcHkgKyAxLCBuQ3VycmVudFJvdGF0aW9uKSkgOiBFTVBUWV9TUEFDRVxuICAgIGNvbnN0IGxlZnQgPSBweCA+IDAgPyB0ZXRyb21pbm8uZ2V0KGdhbWUuUm90YXRlKHB4IC0gMSwgcHksIG5DdXJyZW50Um90YXRpb24pKSA6IEVNUFRZX1NQQUNFXG5cbiAgICAvLyBEcmF3IHRvcCBsaW5lXG4gICAgaWYgKHRvcCA9PT0gRU1QVFlfU1BBQ0UpIHtcbiAgICAgIGRyYXdMaW5lKFxuICAgICAgICAobkN1cnJlbnRYICsgcHgpICogYmxvY2tTaXplICsgb2Zmc2V0WCxcbiAgICAgICAgKG5TaGFkb3dZICsgcHkpICogYmxvY2tTaXplICsgb2Zmc2V0WSxcbiAgICAgICAgKG5DdXJyZW50WCArIHB4ICsgMSkgKiBibG9ja1NpemUgKyBvZmZzZXRYLFxuICAgICAgICAoblNoYWRvd1kgKyBweSkgKiBibG9ja1NpemUgKyBvZmZzZXRZXG4gICAgICApXG4gICAgfVxuICAgIC8vIERyYXcgcmlnaHQgbGluZVxuICAgIGlmIChyaWdodCA9PT0gRU1QVFlfU1BBQ0UpIHtcbiAgICAgIGRyYXdMaW5lKFxuICAgICAgICAobkN1cnJlbnRYICsgcHggKyAxKSAqIGJsb2NrU2l6ZSArIG9mZnNldFgsXG4gICAgICAgIChuU2hhZG93WSArIHB5KSAqIGJsb2NrU2l6ZSArIG9mZnNldFksXG4gICAgICAgIChuQ3VycmVudFggKyBweCArIDEpICogYmxvY2tTaXplICsgb2Zmc2V0WCxcbiAgICAgICAgKG5TaGFkb3dZICsgcHkgKyAxKSAqIGJsb2NrU2l6ZSArIG9mZnNldFlcbiAgICAgIClcbiAgICB9XG4gICAgLy8gRHJhdyBib3R0b20gbGluZVxuICAgIGlmIChib3R0b20gPT09IEVNUFRZX1NQQUNFKSB7XG4gICAgICBkcmF3TGluZShcbiAgICAgICAgKG5DdXJyZW50WCArIHB4ICsgMSkgKiBibG9ja1NpemUgKyBvZmZzZXRYLFxuICAgICAgICAoblNoYWRvd1kgKyBweSArIDEpICogYmxvY2tTaXplICsgb2Zmc2V0WSxcbiAgICAgICAgKG5DdXJyZW50WCArIHB4KSAqIGJsb2NrU2l6ZSArIG9mZnNldFgsXG4gICAgICAgIChuU2hhZG93WSArIHB5ICsgMSkgKiBibG9ja1NpemUgKyBvZmZzZXRZXG4gICAgICApXG4gICAgfVxuICAgIC8vIERyYXcgbGVmdCBsaW5lXG4gICAgaWYgKGxlZnQgPT09IEVNUFRZX1NQQUNFKSB7XG4gICAgICBkcmF3TGluZShcbiAgICAgICAgKG5DdXJyZW50WCArIHB4KSAqIGJsb2NrU2l6ZSArIG9mZnNldFgsXG4gICAgICAgIChuU2hhZG93WSArIHB5ICsgMSkgKiBibG9ja1NpemUgKyBvZmZzZXRZLFxuICAgICAgICAobkN1cnJlbnRYICsgcHgpICogYmxvY2tTaXplICsgb2Zmc2V0WCxcbiAgICAgICAgKG5TaGFkb3dZICsgcHkpICogYmxvY2tTaXplICsgb2Zmc2V0WVxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkcmF3TmV4dFBpZWNlID0gKHB4LCBweSwgbk5leHRQaWVjZSwgbmV4dFRldHJvbWlubykgPT4ge1xuICAvL0RlZmluZSBvZmZzZXQgZm9yIG5leHQgdGV0cm9taW5vIGRpc3BsYXkgaW4gb3JkZXIgdG8gY2VudGVyIGl0IGluc2lkZSB0aGUgY2FudmFzXG4gIGxldCBuZXh0T2Zmc2V0WCA9IDBcbiAgbGV0IG5leHRPZmZzZXRZID0gMFxuICBpZiAobk5leHRQaWVjZSA9PT0gMCkge1xuICAgIG5leHRPZmZzZXRYID0gMFxuICAgIG5leHRPZmZzZXRZID0gMTJcbiAgfSBlbHNlIGlmIChuTmV4dFBpZWNlID09PSAxKSB7XG4gICAgbmV4dE9mZnNldFggPSAyNVxuICAgIG5leHRPZmZzZXRZID0gMTBcbiAgfSBlbHNlIGlmIChuTmV4dFBpZWNlID09PSAyKSB7XG4gICAgbmV4dE9mZnNldFggPSAxMlxuICAgIG5leHRPZmZzZXRZID0gMTNcbiAgfSBlbHNlIGlmIChuTmV4dFBpZWNlID09PSAzKSB7XG4gICAgbmV4dE9mZnNldFggPSAxMFxuICAgIG5leHRPZmZzZXRZID0gMjNcbiAgfSBlbHNlIGlmIChuTmV4dFBpZWNlID09PSA0KSB7XG4gICAgbmV4dE9mZnNldFggPSAxNFxuICAgIG5leHRPZmZzZXRZID0gMjNcbiAgfSBlbHNlIGlmIChuTmV4dFBpZWNlID09PSA1IHx8IG5OZXh0UGllY2UgPT09IDYpIHtcbiAgICBuZXh0T2Zmc2V0WCA9IDEwXG4gICAgbmV4dE9mZnNldFkgPSAyNVxuICB9XG5cbiAgLy9EcmF3IE5leHQgUGllY2UgaW4gc2VwZXJhdGUgY2FudmFzIChjbilcbiAgaWYgKG5leHRUZXRyb21pbm8uZ2V0KHB5ICogNCArIHB4KSA9PSAxKSB7XG4gICAgY24uc2hhZG93Qmx1ciA9IDEyXG4gICAgY24uc2hhZG93Q29sb3IgPSB0ZXRyb21pbm9Db2xvcnNbbk5leHRQaWVjZV1cbiAgICBjbi5zdHJva2VTdHlsZSA9IHRldHJvbWlub0NvbG9yc1tuTmV4dFBpZWNlXVxuICAgIGNuLmxpbmVXaWR0aCA9IDJcbiAgICAvL2NoYW5nZSBvZmZzZXRzIGJhc2VkIG9uIHBpZWNlXG4gICAgY24uc3Ryb2tlUmVjdChcbiAgICAgIHB4ICogKGJsb2NrU2l6ZSAvIDEuMjUpICsgbmV4dE9mZnNldFgsXG4gICAgICBweSAqIChibG9ja1NpemUgLyAxLjI1KSArIG5leHRPZmZzZXRZLFxuICAgICAgYmxvY2tTaXplIC8gMS4yNSxcbiAgICAgIGJsb2NrU2l6ZSAvIDEuMjVcbiAgICApXG4gIH1cbiAgY24uc2hhZG93Qmx1ciA9IDBcbiAgY24uc2hhZG93Q29sb3IgPSBcImJsYWNrXCJcbn1cblxuY29uc3QgZHJhd1Njb3JlQm9hcmQgPSBnYW1lID0+IHtcbiAgLy9EcmF3IHNjb3JlQm9hcmQgaW4gc2VwZXJhdGUgY2FudmFzIChjcylcbiAgY3MuZm9udCA9ICcyMnB4IFwiUHJlc3MgU3RhcnQgMlBcIidcbiAgY3MuZmlsbFN0eWxlID0gXCJhcXVhbWFyaW5lXCJcbiAgY3MuZmlsbFRleHQoYFRPUGAsIDE2LCBzY29yZUJvYXJkLmhlaWdodCAvIDIgLSA0MClcbiAgY3MuZmlsbFRleHQoYCR7SElHSF9TQ09SRX1gLCAxNiwgc2NvcmVCb2FyZC5oZWlnaHQgLyAyIC0gMTQpXG4gIGNzLmZpbGxUZXh0KGBTQ09SRWAsIDE2LCBzY29yZUJvYXJkLmhlaWdodCAvIDIgKyAyMClcbiAgY3MuZmlsbFRleHQoYCR7Z2FtZS5nZXRTY29yZSgpfWAsIDE2LCBzY29yZUJvYXJkLmhlaWdodCAvIDIgKyA0Nilcbn1cblxuY29uc3QgZHJhd0dhbWVGaWVsZEJvcmRlcnMgPSAoKSA9PiB7XG4gIGMuc3Ryb2tlU3R5bGUgPSBcImFxdWFtYXJpbmVcIlxuICBjb25zdCBsaW5lcyA9IFtcbiAgICAvLyBUb3AgYm9yZGVyXG4gICAgW29mZnNldFgsIG9mZnNldFksIG9mZnNldFgsIG5GaWVsZEhlaWdodCAqIGJsb2NrU2l6ZSArIG9mZnNldFldLFxuXG4gICAgLy8gVG9wIGlubmVyIGJvcmRlclxuICAgIFtvZmZzZXRYICsgYmxvY2tTaXplLCBvZmZzZXRZLCBvZmZzZXRYICsgYmxvY2tTaXplLCBuRmllbGRIZWlnaHQgKiBibG9ja1NpemUgKyBvZmZzZXRZIC0gYmxvY2tTaXplXSxcblxuICAgIC8vIFJpZ2h0IGJvcmRlclxuICAgIFtuRmllbGRXaWR0aCAqIGJsb2NrU2l6ZSArIG9mZnNldFgsIG9mZnNldFksIG5GaWVsZFdpZHRoICogYmxvY2tTaXplICsgb2Zmc2V0WCwgbkZpZWxkSGVpZ2h0ICogYmxvY2tTaXplICsgb2Zmc2V0WV0sXG5cbiAgICAvLyBSaWdodCBpbm5lciBib3JkZXJcbiAgICBbXG4gICAgICBuRmllbGRXaWR0aCAqIGJsb2NrU2l6ZSArIG9mZnNldFggLSBibG9ja1NpemUsXG4gICAgICBvZmZzZXRZLFxuICAgICAgbkZpZWxkV2lkdGggKiBibG9ja1NpemUgKyBvZmZzZXRYIC0gYmxvY2tTaXplLFxuICAgICAgbkZpZWxkSGVpZ2h0ICogYmxvY2tTaXplICsgb2Zmc2V0WSAtIGJsb2NrU2l6ZSxcbiAgICBdLFxuXG4gICAgLy8gQm90dG9tIGJvcmRlclxuICAgIFtcbiAgICAgIG9mZnNldFgsXG4gICAgICBuRmllbGRIZWlnaHQgKiBibG9ja1NpemUgKyBvZmZzZXRZLFxuICAgICAgbkZpZWxkV2lkdGggKiBibG9ja1NpemUgKyBvZmZzZXRYLFxuICAgICAgbkZpZWxkSGVpZ2h0ICogYmxvY2tTaXplICsgb2Zmc2V0WSxcbiAgICBdLFxuXG4gICAgLy8gQm90dG9tIGlubmVyIGJvcmRlclxuICAgIFtcbiAgICAgIG9mZnNldFggKyBibG9ja1NpemUsXG4gICAgICBuRmllbGRIZWlnaHQgKiBibG9ja1NpemUgKyBvZmZzZXRZIC0gYmxvY2tTaXplLFxuICAgICAgbkZpZWxkV2lkdGggKiBibG9ja1NpemUgKyBvZmZzZXRYIC0gYmxvY2tTaXplLFxuICAgICAgbkZpZWxkSGVpZ2h0ICogYmxvY2tTaXplICsgb2Zmc2V0WSAtIGJsb2NrU2l6ZSxcbiAgICBdLFxuICBdXG4gIGxpbmVzLmZvckVhY2goYXJncyA9PiBkcmF3TGluZSguLi5hcmdzKSlcbn1cblxuLy9MT0NBTCBTVE9SQUdFIFNUVUZGOlxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVIaWdoU2NvcmUoZ2FtZSkge1xuICBpZiAoZ2FtZS5nZXRTY29yZSgpID4gSElHSF9TQ09SRSkge1xuICAgIEhJR0hfU0NPUkUgPSBnYW1lLmdldFNjb3JlKClcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhpZ2hTY29yZVwiLCBISUdIX1NDT1JFKVxuICB9XG59XG4iLCJ2YXIgTW9kdWxlPXR5cGVvZiBNb2R1bGUhPVwidW5kZWZpbmVkXCI/TW9kdWxlOnt9O3ZhciBtb2R1bGVPdmVycmlkZXM9T2JqZWN0LmFzc2lnbih7fSxNb2R1bGUpO3ZhciBhcmd1bWVudHNfPVtdO3ZhciB0aGlzUHJvZ3JhbT1cIi4vdGhpcy5wcm9ncmFtXCI7dmFyIHF1aXRfPShzdGF0dXMsdG9UaHJvdyk9Pnt0aHJvdyB0b1Rocm93fTt2YXIgRU5WSVJPTk1FTlRfSVNfV0VCPXRydWU7dmFyIEVOVklST05NRU5UX0lTX1dPUktFUj1mYWxzZTt2YXIgc2NyaXB0RGlyZWN0b3J5PVwiXCI7ZnVuY3Rpb24gbG9jYXRlRmlsZShwYXRoKXtpZihNb2R1bGVbXCJsb2NhdGVGaWxlXCJdKXtyZXR1cm4gTW9kdWxlW1wibG9jYXRlRmlsZVwiXShwYXRoLHNjcmlwdERpcmVjdG9yeSl9cmV0dXJuIHNjcmlwdERpcmVjdG9yeStwYXRofXZhciByZWFkXyxyZWFkQXN5bmMscmVhZEJpbmFyeSxzZXRXaW5kb3dUaXRsZTtpZihFTlZJUk9OTUVOVF9JU19XRUJ8fEVOVklST05NRU5UX0lTX1dPUktFUil7aWYoRU5WSVJPTk1FTlRfSVNfV09SS0VSKXtzY3JpcHREaXJlY3Rvcnk9c2VsZi5sb2NhdGlvbi5ocmVmfWVsc2UgaWYodHlwZW9mIGRvY3VtZW50IT1cInVuZGVmaW5lZFwiJiZkb2N1bWVudC5jdXJyZW50U2NyaXB0KXtzY3JpcHREaXJlY3Rvcnk9ZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmN9aWYoc2NyaXB0RGlyZWN0b3J5LmluZGV4T2YoXCJibG9iOlwiKSE9PTApe3NjcmlwdERpcmVjdG9yeT1zY3JpcHREaXJlY3Rvcnkuc3Vic3RyKDAsc2NyaXB0RGlyZWN0b3J5LnJlcGxhY2UoL1s/I10uKi8sXCJcIikubGFzdEluZGV4T2YoXCIvXCIpKzEpfWVsc2V7c2NyaXB0RGlyZWN0b3J5PVwiXCJ9e3JlYWRfPXVybD0+e3ZhciB4aHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3hoci5vcGVuKFwiR0VUXCIsdXJsLGZhbHNlKTt4aHIuc2VuZChudWxsKTtyZXR1cm4geGhyLnJlc3BvbnNlVGV4dH07aWYoRU5WSVJPTk1FTlRfSVNfV09SS0VSKXtyZWFkQmluYXJ5PXVybD0+e3ZhciB4aHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3hoci5vcGVuKFwiR0VUXCIsdXJsLGZhbHNlKTt4aHIucmVzcG9uc2VUeXBlPVwiYXJyYXlidWZmZXJcIjt4aHIuc2VuZChudWxsKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoeGhyLnJlc3BvbnNlKX19cmVhZEFzeW5jPSh1cmwsb25sb2FkLG9uZXJyb3IpPT57dmFyIHhocj1uZXcgWE1MSHR0cFJlcXVlc3Q7eGhyLm9wZW4oXCJHRVRcIix1cmwsdHJ1ZSk7eGhyLnJlc3BvbnNlVHlwZT1cImFycmF5YnVmZmVyXCI7eGhyLm9ubG9hZD0oKT0+e2lmKHhoci5zdGF0dXM9PTIwMHx8eGhyLnN0YXR1cz09MCYmeGhyLnJlc3BvbnNlKXtvbmxvYWQoeGhyLnJlc3BvbnNlKTtyZXR1cm59b25lcnJvcigpfTt4aHIub25lcnJvcj1vbmVycm9yO3hoci5zZW5kKG51bGwpfX1zZXRXaW5kb3dUaXRsZT10aXRsZT0+ZG9jdW1lbnQudGl0bGU9dGl0bGV9ZWxzZXt9dmFyIG91dD1Nb2R1bGVbXCJwcmludFwiXXx8Y29uc29sZS5sb2cuYmluZChjb25zb2xlKTt2YXIgZXJyPU1vZHVsZVtcInByaW50RXJyXCJdfHxjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSk7T2JqZWN0LmFzc2lnbihNb2R1bGUsbW9kdWxlT3ZlcnJpZGVzKTttb2R1bGVPdmVycmlkZXM9bnVsbDtpZihNb2R1bGVbXCJhcmd1bWVudHNcIl0pYXJndW1lbnRzXz1Nb2R1bGVbXCJhcmd1bWVudHNcIl07aWYoTW9kdWxlW1widGhpc1Byb2dyYW1cIl0pdGhpc1Byb2dyYW09TW9kdWxlW1widGhpc1Byb2dyYW1cIl07aWYoTW9kdWxlW1wicXVpdFwiXSlxdWl0Xz1Nb2R1bGVbXCJxdWl0XCJdO3ZhciB3YXNtQmluYXJ5O2lmKE1vZHVsZVtcIndhc21CaW5hcnlcIl0pd2FzbUJpbmFyeT1Nb2R1bGVbXCJ3YXNtQmluYXJ5XCJdO3ZhciBub0V4aXRSdW50aW1lPU1vZHVsZVtcIm5vRXhpdFJ1bnRpbWVcIl18fHRydWU7aWYodHlwZW9mIFdlYkFzc2VtYmx5IT1cIm9iamVjdFwiKXthYm9ydChcIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWRcIil9dmFyIHdhc21NZW1vcnk7dmFyIEFCT1JUPWZhbHNlO3ZhciBFWElUU1RBVFVTO2Z1bmN0aW9uIGFzc2VydChjb25kaXRpb24sdGV4dCl7aWYoIWNvbmRpdGlvbil7YWJvcnQodGV4dCl9fXZhciBIRUFQOCxIRUFQVTgsSEVBUDE2LEhFQVBVMTYsSEVBUDMyLEhFQVBVMzIsSEVBUEYzMixIRUFQRjY0O2Z1bmN0aW9uIHVwZGF0ZU1lbW9yeVZpZXdzKCl7dmFyIGI9d2FzbU1lbW9yeS5idWZmZXI7TW9kdWxlW1wiSEVBUDhcIl09SEVBUDg9bmV3IEludDhBcnJheShiKTtNb2R1bGVbXCJIRUFQMTZcIl09SEVBUDE2PW5ldyBJbnQxNkFycmF5KGIpO01vZHVsZVtcIkhFQVAzMlwiXT1IRUFQMzI9bmV3IEludDMyQXJyYXkoYik7TW9kdWxlW1wiSEVBUFU4XCJdPUhFQVBVOD1uZXcgVWludDhBcnJheShiKTtNb2R1bGVbXCJIRUFQVTE2XCJdPUhFQVBVMTY9bmV3IFVpbnQxNkFycmF5KGIpO01vZHVsZVtcIkhFQVBVMzJcIl09SEVBUFUzMj1uZXcgVWludDMyQXJyYXkoYik7TW9kdWxlW1wiSEVBUEYzMlwiXT1IRUFQRjMyPW5ldyBGbG9hdDMyQXJyYXkoYik7TW9kdWxlW1wiSEVBUEY2NFwiXT1IRUFQRjY0PW5ldyBGbG9hdDY0QXJyYXkoYil9dmFyIHdhc21UYWJsZTt2YXIgX19BVFBSRVJVTl9fPVtdO3ZhciBfX0FUSU5JVF9fPVtdO3ZhciBfX0FUUE9TVFJVTl9fPVtdO3ZhciBydW50aW1lSW5pdGlhbGl6ZWQ9ZmFsc2U7ZnVuY3Rpb24gcHJlUnVuKCl7aWYoTW9kdWxlW1wicHJlUnVuXCJdKXtpZih0eXBlb2YgTW9kdWxlW1wicHJlUnVuXCJdPT1cImZ1bmN0aW9uXCIpTW9kdWxlW1wicHJlUnVuXCJdPVtNb2R1bGVbXCJwcmVSdW5cIl1dO3doaWxlKE1vZHVsZVtcInByZVJ1blwiXS5sZW5ndGgpe2FkZE9uUHJlUnVuKE1vZHVsZVtcInByZVJ1blwiXS5zaGlmdCgpKX19Y2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVFBSRVJVTl9fKX1mdW5jdGlvbiBpbml0UnVudGltZSgpe3J1bnRpbWVJbml0aWFsaXplZD10cnVlO2NhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRJTklUX18pfWZ1bmN0aW9uIHBvc3RSdW4oKXtpZihNb2R1bGVbXCJwb3N0UnVuXCJdKXtpZih0eXBlb2YgTW9kdWxlW1wicG9zdFJ1blwiXT09XCJmdW5jdGlvblwiKU1vZHVsZVtcInBvc3RSdW5cIl09W01vZHVsZVtcInBvc3RSdW5cIl1dO3doaWxlKE1vZHVsZVtcInBvc3RSdW5cIl0ubGVuZ3RoKXthZGRPblBvc3RSdW4oTW9kdWxlW1wicG9zdFJ1blwiXS5zaGlmdCgpKX19Y2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVFBPU1RSVU5fXyl9ZnVuY3Rpb24gYWRkT25QcmVSdW4oY2Ipe19fQVRQUkVSVU5fXy51bnNoaWZ0KGNiKX1mdW5jdGlvbiBhZGRPbkluaXQoY2Ipe19fQVRJTklUX18udW5zaGlmdChjYil9ZnVuY3Rpb24gYWRkT25Qb3N0UnVuKGNiKXtfX0FUUE9TVFJVTl9fLnVuc2hpZnQoY2IpfXZhciBydW5EZXBlbmRlbmNpZXM9MDt2YXIgcnVuRGVwZW5kZW5jeVdhdGNoZXI9bnVsbDt2YXIgZGVwZW5kZW5jaWVzRnVsZmlsbGVkPW51bGw7ZnVuY3Rpb24gYWRkUnVuRGVwZW5kZW5jeShpZCl7cnVuRGVwZW5kZW5jaWVzKys7aWYoTW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXSl7TW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXShydW5EZXBlbmRlbmNpZXMpfX1mdW5jdGlvbiByZW1vdmVSdW5EZXBlbmRlbmN5KGlkKXtydW5EZXBlbmRlbmNpZXMtLTtpZihNb2R1bGVbXCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzXCJdKXtNb2R1bGVbXCJtb25pdG9yUnVuRGVwZW5kZW5jaWVzXCJdKHJ1bkRlcGVuZGVuY2llcyl9aWYocnVuRGVwZW5kZW5jaWVzPT0wKXtpZihydW5EZXBlbmRlbmN5V2F0Y2hlciE9PW51bGwpe2NsZWFySW50ZXJ2YWwocnVuRGVwZW5kZW5jeVdhdGNoZXIpO3J1bkRlcGVuZGVuY3lXYXRjaGVyPW51bGx9aWYoZGVwZW5kZW5jaWVzRnVsZmlsbGVkKXt2YXIgY2FsbGJhY2s9ZGVwZW5kZW5jaWVzRnVsZmlsbGVkO2RlcGVuZGVuY2llc0Z1bGZpbGxlZD1udWxsO2NhbGxiYWNrKCl9fX1mdW5jdGlvbiBhYm9ydCh3aGF0KXtpZihNb2R1bGVbXCJvbkFib3J0XCJdKXtNb2R1bGVbXCJvbkFib3J0XCJdKHdoYXQpfXdoYXQ9XCJBYm9ydGVkKFwiK3doYXQrXCIpXCI7ZXJyKHdoYXQpO0FCT1JUPXRydWU7RVhJVFNUQVRVUz0xO3doYXQrPVwiLiBCdWlsZCB3aXRoIC1zQVNTRVJUSU9OUyBmb3IgbW9yZSBpbmZvLlwiO3ZhciBlPW5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3Iod2hhdCk7dGhyb3cgZX12YXIgZGF0YVVSSVByZWZpeD1cImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxcIjtmdW5jdGlvbiBpc0RhdGFVUkkoZmlsZW5hbWUpe3JldHVybiBmaWxlbmFtZS5zdGFydHNXaXRoKGRhdGFVUklQcmVmaXgpfXZhciB3YXNtQmluYXJ5RmlsZTt3YXNtQmluYXJ5RmlsZT1cInRldHJpcy53YXNtXCI7aWYoIWlzRGF0YVVSSSh3YXNtQmluYXJ5RmlsZSkpe3dhc21CaW5hcnlGaWxlPWxvY2F0ZUZpbGUod2FzbUJpbmFyeUZpbGUpfWZ1bmN0aW9uIGdldEJpbmFyeShmaWxlKXt0cnl7aWYoZmlsZT09d2FzbUJpbmFyeUZpbGUmJndhc21CaW5hcnkpe3JldHVybiBuZXcgVWludDhBcnJheSh3YXNtQmluYXJ5KX1pZihyZWFkQmluYXJ5KXtyZXR1cm4gcmVhZEJpbmFyeShmaWxlKX10aHJvd1wiYm90aCBhc3luYyBhbmQgc3luYyBmZXRjaGluZyBvZiB0aGUgd2FzbSBmYWlsZWRcIn1jYXRjaChlcnIpe2Fib3J0KGVycil9fWZ1bmN0aW9uIGdldEJpbmFyeVByb21pc2UoYmluYXJ5RmlsZSl7aWYoIXdhc21CaW5hcnkmJihFTlZJUk9OTUVOVF9JU19XRUJ8fEVOVklST05NRU5UX0lTX1dPUktFUikpe2lmKHR5cGVvZiBmZXRjaD09XCJmdW5jdGlvblwiKXtyZXR1cm4gZmV0Y2goYmluYXJ5RmlsZSx7Y3JlZGVudGlhbHM6XCJzYW1lLW9yaWdpblwifSkudGhlbihyZXNwb25zZT0+e2lmKCFyZXNwb25zZVtcIm9rXCJdKXt0aHJvd1wiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnXCIrYmluYXJ5RmlsZStcIidcIn1yZXR1cm4gcmVzcG9uc2VbXCJhcnJheUJ1ZmZlclwiXSgpfSkuY2F0Y2goKCk9PmdldEJpbmFyeShiaW5hcnlGaWxlKSl9fXJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5nZXRCaW5hcnkoYmluYXJ5RmlsZSkpfWZ1bmN0aW9uIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIoYmluYXJ5RmlsZSxpbXBvcnRzLHJlY2VpdmVyKXtyZXR1cm4gZ2V0QmluYXJ5UHJvbWlzZShiaW5hcnlGaWxlKS50aGVuKGJpbmFyeT0+e3JldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShiaW5hcnksaW1wb3J0cyl9KS50aGVuKGluc3RhbmNlPT57cmV0dXJuIGluc3RhbmNlfSkudGhlbihyZWNlaXZlcixyZWFzb249PntlcnIoXCJmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiBcIityZWFzb24pO2Fib3J0KHJlYXNvbil9KX1mdW5jdGlvbiBpbnN0YW50aWF0ZUFzeW5jKGJpbmFyeSxiaW5hcnlGaWxlLGltcG9ydHMsY2FsbGJhY2spe2lmKCFiaW5hcnkmJnR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZz09XCJmdW5jdGlvblwiJiYhaXNEYXRhVVJJKGJpbmFyeUZpbGUpJiZ0eXBlb2YgZmV0Y2g9PVwiZnVuY3Rpb25cIil7cmV0dXJuIGZldGNoKGJpbmFyeUZpbGUse2NyZWRlbnRpYWxzOlwic2FtZS1vcmlnaW5cIn0pLnRoZW4ocmVzcG9uc2U9Pnt2YXIgcmVzdWx0PVdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHJlc3BvbnNlLGltcG9ydHMpO3JldHVybiByZXN1bHQudGhlbihjYWxsYmFjayxmdW5jdGlvbihyZWFzb24pe2VycihcIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiBcIityZWFzb24pO2VycihcImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uXCIpO3JldHVybiBpbnN0YW50aWF0ZUFycmF5QnVmZmVyKGJpbmFyeUZpbGUsaW1wb3J0cyxjYWxsYmFjayl9KX0pfWVsc2V7cmV0dXJuIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIoYmluYXJ5RmlsZSxpbXBvcnRzLGNhbGxiYWNrKX19ZnVuY3Rpb24gY3JlYXRlV2FzbSgpe3ZhciBpbmZvPXtcImFcIjp3YXNtSW1wb3J0c307ZnVuY3Rpb24gcmVjZWl2ZUluc3RhbmNlKGluc3RhbmNlLG1vZHVsZSl7dmFyIGV4cG9ydHM9aW5zdGFuY2UuZXhwb3J0cztNb2R1bGVbXCJhc21cIl09ZXhwb3J0czt3YXNtTWVtb3J5PU1vZHVsZVtcImFzbVwiXVtcInVcIl07dXBkYXRlTWVtb3J5Vmlld3MoKTt3YXNtVGFibGU9TW9kdWxlW1wiYXNtXCJdW1wid1wiXTthZGRPbkluaXQoTW9kdWxlW1wiYXNtXCJdW1widlwiXSk7cmVtb3ZlUnVuRGVwZW5kZW5jeShcIndhc20taW5zdGFudGlhdGVcIik7cmV0dXJuIGV4cG9ydHN9YWRkUnVuRGVwZW5kZW5jeShcIndhc20taW5zdGFudGlhdGVcIik7ZnVuY3Rpb24gcmVjZWl2ZUluc3RhbnRpYXRpb25SZXN1bHQocmVzdWx0KXtyZWNlaXZlSW5zdGFuY2UocmVzdWx0W1wiaW5zdGFuY2VcIl0pfWlmKE1vZHVsZVtcImluc3RhbnRpYXRlV2FzbVwiXSl7dHJ5e3JldHVybiBNb2R1bGVbXCJpbnN0YW50aWF0ZVdhc21cIl0oaW5mbyxyZWNlaXZlSW5zdGFuY2UpfWNhdGNoKGUpe2VycihcIk1vZHVsZS5pbnN0YW50aWF0ZVdhc20gY2FsbGJhY2sgZmFpbGVkIHdpdGggZXJyb3I6IFwiK2UpO3JldHVybiBmYWxzZX19aW5zdGFudGlhdGVBc3luYyh3YXNtQmluYXJ5LHdhc21CaW5hcnlGaWxlLGluZm8scmVjZWl2ZUluc3RhbnRpYXRpb25SZXN1bHQpO3JldHVybnt9fWZ1bmN0aW9uIGNhbGxSdW50aW1lQ2FsbGJhY2tzKGNhbGxiYWNrcyl7d2hpbGUoY2FsbGJhY2tzLmxlbmd0aD4wKXtjYWxsYmFja3Muc2hpZnQoKShNb2R1bGUpfX1mdW5jdGlvbiBFeGNlcHRpb25JbmZvKGV4Y1B0cil7dGhpcy5leGNQdHI9ZXhjUHRyO3RoaXMucHRyPWV4Y1B0ci0yNDt0aGlzLnNldF90eXBlPWZ1bmN0aW9uKHR5cGUpe0hFQVBVMzJbdGhpcy5wdHIrND4+Ml09dHlwZX07dGhpcy5nZXRfdHlwZT1mdW5jdGlvbigpe3JldHVybiBIRUFQVTMyW3RoaXMucHRyKzQ+PjJdfTt0aGlzLnNldF9kZXN0cnVjdG9yPWZ1bmN0aW9uKGRlc3RydWN0b3Ipe0hFQVBVMzJbdGhpcy5wdHIrOD4+Ml09ZGVzdHJ1Y3Rvcn07dGhpcy5nZXRfZGVzdHJ1Y3Rvcj1mdW5jdGlvbigpe3JldHVybiBIRUFQVTMyW3RoaXMucHRyKzg+PjJdfTt0aGlzLnNldF9jYXVnaHQ9ZnVuY3Rpb24oY2F1Z2h0KXtjYXVnaHQ9Y2F1Z2h0PzE6MDtIRUFQOFt0aGlzLnB0cisxMj4+MF09Y2F1Z2h0fTt0aGlzLmdldF9jYXVnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gSEVBUDhbdGhpcy5wdHIrMTI+PjBdIT0wfTt0aGlzLnNldF9yZXRocm93bj1mdW5jdGlvbihyZXRocm93bil7cmV0aHJvd249cmV0aHJvd24/MTowO0hFQVA4W3RoaXMucHRyKzEzPj4wXT1yZXRocm93bn07dGhpcy5nZXRfcmV0aHJvd249ZnVuY3Rpb24oKXtyZXR1cm4gSEVBUDhbdGhpcy5wdHIrMTM+PjBdIT0wfTt0aGlzLmluaXQ9ZnVuY3Rpb24odHlwZSxkZXN0cnVjdG9yKXt0aGlzLnNldF9hZGp1c3RlZF9wdHIoMCk7dGhpcy5zZXRfdHlwZSh0eXBlKTt0aGlzLnNldF9kZXN0cnVjdG9yKGRlc3RydWN0b3IpfTt0aGlzLnNldF9hZGp1c3RlZF9wdHI9ZnVuY3Rpb24oYWRqdXN0ZWRQdHIpe0hFQVBVMzJbdGhpcy5wdHIrMTY+PjJdPWFkanVzdGVkUHRyfTt0aGlzLmdldF9hZGp1c3RlZF9wdHI9ZnVuY3Rpb24oKXtyZXR1cm4gSEVBUFUzMlt0aGlzLnB0cisxNj4+Ml19O3RoaXMuZ2V0X2V4Y2VwdGlvbl9wdHI9ZnVuY3Rpb24oKXt2YXIgaXNQb2ludGVyPV9fX2N4YV9pc19wb2ludGVyX3R5cGUodGhpcy5nZXRfdHlwZSgpKTtpZihpc1BvaW50ZXIpe3JldHVybiBIRUFQVTMyW3RoaXMuZXhjUHRyPj4yXX12YXIgYWRqdXN0ZWQ9dGhpcy5nZXRfYWRqdXN0ZWRfcHRyKCk7aWYoYWRqdXN0ZWQhPT0wKXJldHVybiBhZGp1c3RlZDtyZXR1cm4gdGhpcy5leGNQdHJ9fXZhciBleGNlcHRpb25MYXN0PTA7dmFyIHVuY2F1Z2h0RXhjZXB0aW9uQ291bnQ9MDtmdW5jdGlvbiBfX19jeGFfdGhyb3cocHRyLHR5cGUsZGVzdHJ1Y3Rvcil7dmFyIGluZm89bmV3IEV4Y2VwdGlvbkluZm8ocHRyKTtpbmZvLmluaXQodHlwZSxkZXN0cnVjdG9yKTtleGNlcHRpb25MYXN0PXB0cjt1bmNhdWdodEV4Y2VwdGlvbkNvdW50Kys7dGhyb3cgZXhjZXB0aW9uTGFzdH1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9iaWdpbnQocHJpbWl0aXZlVHlwZSxuYW1lLHNpemUsbWluUmFuZ2UsbWF4UmFuZ2Upe31mdW5jdGlvbiBnZXRTaGlmdEZyb21TaXplKHNpemUpe3N3aXRjaChzaXplKXtjYXNlIDE6cmV0dXJuIDA7Y2FzZSAyOnJldHVybiAxO2Nhc2UgNDpyZXR1cm4gMjtjYXNlIDg6cmV0dXJuIDM7ZGVmYXVsdDp0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmtub3duIHR5cGUgc2l6ZTogJHtzaXplfWApfX1mdW5jdGlvbiBlbWJpbmRfaW5pdF9jaGFyQ29kZXMoKXt2YXIgY29kZXM9bmV3IEFycmF5KDI1Nik7Zm9yKHZhciBpPTA7aTwyNTY7KytpKXtjb2Rlc1tpXT1TdHJpbmcuZnJvbUNoYXJDb2RlKGkpfWVtYmluZF9jaGFyQ29kZXM9Y29kZXN9dmFyIGVtYmluZF9jaGFyQ29kZXM9dW5kZWZpbmVkO2Z1bmN0aW9uIHJlYWRMYXRpbjFTdHJpbmcocHRyKXt2YXIgcmV0PVwiXCI7dmFyIGM9cHRyO3doaWxlKEhFQVBVOFtjXSl7cmV0Kz1lbWJpbmRfY2hhckNvZGVzW0hFQVBVOFtjKytdXX1yZXR1cm4gcmV0fXZhciBhd2FpdGluZ0RlcGVuZGVuY2llcz17fTt2YXIgcmVnaXN0ZXJlZFR5cGVzPXt9O3ZhciB0eXBlRGVwZW5kZW5jaWVzPXt9O3ZhciBjaGFyXzA9NDg7dmFyIGNoYXJfOT01NztmdW5jdGlvbiBtYWtlTGVnYWxGdW5jdGlvbk5hbWUobmFtZSl7aWYodW5kZWZpbmVkPT09bmFtZSl7cmV0dXJuXCJfdW5rbm93blwifW5hbWU9bmFtZS5yZXBsYWNlKC9bXmEtekEtWjAtOV9dL2csXCIkXCIpO3ZhciBmPW5hbWUuY2hhckNvZGVBdCgwKTtpZihmPj1jaGFyXzAmJmY8PWNoYXJfOSl7cmV0dXJuYF8ke25hbWV9YH1yZXR1cm4gbmFtZX1mdW5jdGlvbiBjcmVhdGVOYW1lZEZ1bmN0aW9uKG5hbWUsYm9keSl7bmFtZT1tYWtlTGVnYWxGdW5jdGlvbk5hbWUobmFtZSk7cmV0dXJue1tuYW1lXTpmdW5jdGlvbigpe3JldHVybiBib2R5LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19W25hbWVdfWZ1bmN0aW9uIGV4dGVuZEVycm9yKGJhc2VFcnJvclR5cGUsZXJyb3JOYW1lKXt2YXIgZXJyb3JDbGFzcz1jcmVhdGVOYW1lZEZ1bmN0aW9uKGVycm9yTmFtZSxmdW5jdGlvbihtZXNzYWdlKXt0aGlzLm5hbWU9ZXJyb3JOYW1lO3RoaXMubWVzc2FnZT1tZXNzYWdlO3ZhciBzdGFjaz1uZXcgRXJyb3IobWVzc2FnZSkuc3RhY2s7aWYoc3RhY2shPT11bmRlZmluZWQpe3RoaXMuc3RhY2s9dGhpcy50b1N0cmluZygpK1wiXFxuXCIrc3RhY2sucmVwbGFjZSgvXkVycm9yKDpbXlxcbl0qKT9cXG4vLFwiXCIpfX0pO2Vycm9yQ2xhc3MucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoYmFzZUVycm9yVHlwZS5wcm90b3R5cGUpO2Vycm9yQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yPWVycm9yQ2xhc3M7ZXJyb3JDbGFzcy5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtpZih0aGlzLm1lc3NhZ2U9PT11bmRlZmluZWQpe3JldHVybiB0aGlzLm5hbWV9ZWxzZXtyZXR1cm5gJHt0aGlzLm5hbWV9OiAke3RoaXMubWVzc2FnZX1gfX07cmV0dXJuIGVycm9yQ2xhc3N9dmFyIEJpbmRpbmdFcnJvcj11bmRlZmluZWQ7ZnVuY3Rpb24gdGhyb3dCaW5kaW5nRXJyb3IobWVzc2FnZSl7dGhyb3cgbmV3IEJpbmRpbmdFcnJvcihtZXNzYWdlKX12YXIgSW50ZXJuYWxFcnJvcj11bmRlZmluZWQ7ZnVuY3Rpb24gdGhyb3dJbnRlcm5hbEVycm9yKG1lc3NhZ2Upe3Rocm93IG5ldyBJbnRlcm5hbEVycm9yKG1lc3NhZ2UpfWZ1bmN0aW9uIHdoZW5EZXBlbmRlbnRUeXBlc0FyZVJlc29sdmVkKG15VHlwZXMsZGVwZW5kZW50VHlwZXMsZ2V0VHlwZUNvbnZlcnRlcnMpe215VHlwZXMuZm9yRWFjaChmdW5jdGlvbih0eXBlKXt0eXBlRGVwZW5kZW5jaWVzW3R5cGVdPWRlcGVuZGVudFR5cGVzfSk7ZnVuY3Rpb24gb25Db21wbGV0ZSh0eXBlQ29udmVydGVycyl7dmFyIG15VHlwZUNvbnZlcnRlcnM9Z2V0VHlwZUNvbnZlcnRlcnModHlwZUNvbnZlcnRlcnMpO2lmKG15VHlwZUNvbnZlcnRlcnMubGVuZ3RoIT09bXlUeXBlcy5sZW5ndGgpe3Rocm93SW50ZXJuYWxFcnJvcihcIk1pc21hdGNoZWQgdHlwZSBjb252ZXJ0ZXIgY291bnRcIil9Zm9yKHZhciBpPTA7aTxteVR5cGVzLmxlbmd0aDsrK2kpe3JlZ2lzdGVyVHlwZShteVR5cGVzW2ldLG15VHlwZUNvbnZlcnRlcnNbaV0pfX12YXIgdHlwZUNvbnZlcnRlcnM9bmV3IEFycmF5KGRlcGVuZGVudFR5cGVzLmxlbmd0aCk7dmFyIHVucmVnaXN0ZXJlZFR5cGVzPVtdO3ZhciByZWdpc3RlcmVkPTA7ZGVwZW5kZW50VHlwZXMuZm9yRWFjaCgoZHQsaSk9PntpZihyZWdpc3RlcmVkVHlwZXMuaGFzT3duUHJvcGVydHkoZHQpKXt0eXBlQ29udmVydGVyc1tpXT1yZWdpc3RlcmVkVHlwZXNbZHRdfWVsc2V7dW5yZWdpc3RlcmVkVHlwZXMucHVzaChkdCk7aWYoIWF3YWl0aW5nRGVwZW5kZW5jaWVzLmhhc093blByb3BlcnR5KGR0KSl7YXdhaXRpbmdEZXBlbmRlbmNpZXNbZHRdPVtdfWF3YWl0aW5nRGVwZW5kZW5jaWVzW2R0XS5wdXNoKCgpPT57dHlwZUNvbnZlcnRlcnNbaV09cmVnaXN0ZXJlZFR5cGVzW2R0XTsrK3JlZ2lzdGVyZWQ7aWYocmVnaXN0ZXJlZD09PXVucmVnaXN0ZXJlZFR5cGVzLmxlbmd0aCl7b25Db21wbGV0ZSh0eXBlQ29udmVydGVycyl9fSl9fSk7aWYoMD09PXVucmVnaXN0ZXJlZFR5cGVzLmxlbmd0aCl7b25Db21wbGV0ZSh0eXBlQ29udmVydGVycyl9fWZ1bmN0aW9uIHJlZ2lzdGVyVHlwZShyYXdUeXBlLHJlZ2lzdGVyZWRJbnN0YW5jZSxvcHRpb25zPXt9KXtpZighKFwiYXJnUGFja0FkdmFuY2VcImluIHJlZ2lzdGVyZWRJbnN0YW5jZSkpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlXCIpfXZhciBuYW1lPXJlZ2lzdGVyZWRJbnN0YW5jZS5uYW1lO2lmKCFyYXdUeXBlKXt0aHJvd0JpbmRpbmdFcnJvcihgdHlwZSBcIiR7bmFtZX1cIiBtdXN0IGhhdmUgYSBwb3NpdGl2ZSBpbnRlZ2VyIHR5cGVpZCBwb2ludGVyYCl9aWYocmVnaXN0ZXJlZFR5cGVzLmhhc093blByb3BlcnR5KHJhd1R5cGUpKXtpZihvcHRpb25zLmlnbm9yZUR1cGxpY2F0ZVJlZ2lzdHJhdGlvbnMpe3JldHVybn1lbHNle3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgcmVnaXN0ZXIgdHlwZSAnJHtuYW1lfScgdHdpY2VgKX19cmVnaXN0ZXJlZFR5cGVzW3Jhd1R5cGVdPXJlZ2lzdGVyZWRJbnN0YW5jZTtkZWxldGUgdHlwZURlcGVuZGVuY2llc1tyYXdUeXBlXTtpZihhd2FpdGluZ0RlcGVuZGVuY2llcy5oYXNPd25Qcm9wZXJ0eShyYXdUeXBlKSl7dmFyIGNhbGxiYWNrcz1hd2FpdGluZ0RlcGVuZGVuY2llc1tyYXdUeXBlXTtkZWxldGUgYXdhaXRpbmdEZXBlbmRlbmNpZXNbcmF3VHlwZV07Y2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpfX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9ib29sKHJhd1R5cGUsbmFtZSxzaXplLHRydWVWYWx1ZSxmYWxzZVZhbHVlKXt2YXIgc2hpZnQ9Z2V0U2hpZnRGcm9tU2l6ZShzaXplKTtuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKHd0KXtyZXR1cm4hIXd0fSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyxvKXtyZXR1cm4gbz90cnVlVmFsdWU6ZmFsc2VWYWx1ZX0sXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOmZ1bmN0aW9uKHBvaW50ZXIpe3ZhciBoZWFwO2lmKHNpemU9PT0xKXtoZWFwPUhFQVA4fWVsc2UgaWYoc2l6ZT09PTIpe2hlYXA9SEVBUDE2fWVsc2UgaWYoc2l6ZT09PTQpe2hlYXA9SEVBUDMyfWVsc2V7dGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gYm9vbGVhbiB0eXBlIHNpemU6IFwiK25hbWUpfXJldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKGhlYXBbcG9pbnRlcj4+c2hpZnRdKX0sZGVzdHJ1Y3RvckZ1bmN0aW9uOm51bGx9KX1mdW5jdGlvbiBDbGFzc0hhbmRsZV9pc0FsaWFzT2Yob3RoZXIpe2lmKCEodGhpcyBpbnN0YW5jZW9mIENsYXNzSGFuZGxlKSl7cmV0dXJuIGZhbHNlfWlmKCEob3RoZXIgaW5zdGFuY2VvZiBDbGFzc0hhbmRsZSkpe3JldHVybiBmYWxzZX12YXIgbGVmdENsYXNzPXRoaXMuJCQucHRyVHlwZS5yZWdpc3RlcmVkQ2xhc3M7dmFyIGxlZnQ9dGhpcy4kJC5wdHI7dmFyIHJpZ2h0Q2xhc3M9b3RoZXIuJCQucHRyVHlwZS5yZWdpc3RlcmVkQ2xhc3M7dmFyIHJpZ2h0PW90aGVyLiQkLnB0cjt3aGlsZShsZWZ0Q2xhc3MuYmFzZUNsYXNzKXtsZWZ0PWxlZnRDbGFzcy51cGNhc3QobGVmdCk7bGVmdENsYXNzPWxlZnRDbGFzcy5iYXNlQ2xhc3N9d2hpbGUocmlnaHRDbGFzcy5iYXNlQ2xhc3Mpe3JpZ2h0PXJpZ2h0Q2xhc3MudXBjYXN0KHJpZ2h0KTtyaWdodENsYXNzPXJpZ2h0Q2xhc3MuYmFzZUNsYXNzfXJldHVybiBsZWZ0Q2xhc3M9PT1yaWdodENsYXNzJiZsZWZ0PT09cmlnaHR9ZnVuY3Rpb24gc2hhbGxvd0NvcHlJbnRlcm5hbFBvaW50ZXIobyl7cmV0dXJue2NvdW50Om8uY291bnQsZGVsZXRlU2NoZWR1bGVkOm8uZGVsZXRlU2NoZWR1bGVkLHByZXNlcnZlUG9pbnRlck9uRGVsZXRlOm8ucHJlc2VydmVQb2ludGVyT25EZWxldGUscHRyOm8ucHRyLHB0clR5cGU6by5wdHJUeXBlLHNtYXJ0UHRyOm8uc21hcnRQdHIsc21hcnRQdHJUeXBlOm8uc21hcnRQdHJUeXBlfX1mdW5jdGlvbiB0aHJvd0luc3RhbmNlQWxyZWFkeURlbGV0ZWQob2JqKXtmdW5jdGlvbiBnZXRJbnN0YW5jZVR5cGVOYW1lKGhhbmRsZSl7cmV0dXJuIGhhbmRsZS4kJC5wdHJUeXBlLnJlZ2lzdGVyZWRDbGFzcy5uYW1lfXRocm93QmluZGluZ0Vycm9yKGdldEluc3RhbmNlVHlwZU5hbWUob2JqKStcIiBpbnN0YW5jZSBhbHJlYWR5IGRlbGV0ZWRcIil9dmFyIGZpbmFsaXphdGlvblJlZ2lzdHJ5PWZhbHNlO2Z1bmN0aW9uIGRldGFjaEZpbmFsaXplcihoYW5kbGUpe31mdW5jdGlvbiBydW5EZXN0cnVjdG9yKCQkKXtpZigkJC5zbWFydFB0cil7JCQuc21hcnRQdHJUeXBlLnJhd0Rlc3RydWN0b3IoJCQuc21hcnRQdHIpfWVsc2V7JCQucHRyVHlwZS5yZWdpc3RlcmVkQ2xhc3MucmF3RGVzdHJ1Y3RvcigkJC5wdHIpfX1mdW5jdGlvbiByZWxlYXNlQ2xhc3NIYW5kbGUoJCQpeyQkLmNvdW50LnZhbHVlLT0xO3ZhciB0b0RlbGV0ZT0wPT09JCQuY291bnQudmFsdWU7aWYodG9EZWxldGUpe3J1bkRlc3RydWN0b3IoJCQpfX1mdW5jdGlvbiBkb3duY2FzdFBvaW50ZXIocHRyLHB0ckNsYXNzLGRlc2lyZWRDbGFzcyl7aWYocHRyQ2xhc3M9PT1kZXNpcmVkQ2xhc3Mpe3JldHVybiBwdHJ9aWYodW5kZWZpbmVkPT09ZGVzaXJlZENsYXNzLmJhc2VDbGFzcyl7cmV0dXJuIG51bGx9dmFyIHJ2PWRvd25jYXN0UG9pbnRlcihwdHIscHRyQ2xhc3MsZGVzaXJlZENsYXNzLmJhc2VDbGFzcyk7aWYocnY9PT1udWxsKXtyZXR1cm4gbnVsbH1yZXR1cm4gZGVzaXJlZENsYXNzLmRvd25jYXN0KHJ2KX12YXIgcmVnaXN0ZXJlZFBvaW50ZXJzPXt9O2Z1bmN0aW9uIGdldEluaGVyaXRlZEluc3RhbmNlQ291bnQoKXtyZXR1cm4gT2JqZWN0LmtleXMocmVnaXN0ZXJlZEluc3RhbmNlcykubGVuZ3RofWZ1bmN0aW9uIGdldExpdmVJbmhlcml0ZWRJbnN0YW5jZXMoKXt2YXIgcnY9W107Zm9yKHZhciBrIGluIHJlZ2lzdGVyZWRJbnN0YW5jZXMpe2lmKHJlZ2lzdGVyZWRJbnN0YW5jZXMuaGFzT3duUHJvcGVydHkoaykpe3J2LnB1c2gocmVnaXN0ZXJlZEluc3RhbmNlc1trXSl9fXJldHVybiBydn12YXIgZGVsZXRpb25RdWV1ZT1bXTtmdW5jdGlvbiBmbHVzaFBlbmRpbmdEZWxldGVzKCl7d2hpbGUoZGVsZXRpb25RdWV1ZS5sZW5ndGgpe3ZhciBvYmo9ZGVsZXRpb25RdWV1ZS5wb3AoKTtvYmouJCQuZGVsZXRlU2NoZWR1bGVkPWZhbHNlO29ialtcImRlbGV0ZVwiXSgpfX12YXIgZGVsYXlGdW5jdGlvbj11bmRlZmluZWQ7ZnVuY3Rpb24gc2V0RGVsYXlGdW5jdGlvbihmbil7ZGVsYXlGdW5jdGlvbj1mbjtpZihkZWxldGlvblF1ZXVlLmxlbmd0aCYmZGVsYXlGdW5jdGlvbil7ZGVsYXlGdW5jdGlvbihmbHVzaFBlbmRpbmdEZWxldGVzKX19ZnVuY3Rpb24gaW5pdF9lbWJpbmQoKXtNb2R1bGVbXCJnZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50XCJdPWdldEluaGVyaXRlZEluc3RhbmNlQ291bnQ7TW9kdWxlW1wiZ2V0TGl2ZUluaGVyaXRlZEluc3RhbmNlc1wiXT1nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzO01vZHVsZVtcImZsdXNoUGVuZGluZ0RlbGV0ZXNcIl09Zmx1c2hQZW5kaW5nRGVsZXRlcztNb2R1bGVbXCJzZXREZWxheUZ1bmN0aW9uXCJdPXNldERlbGF5RnVuY3Rpb259dmFyIHJlZ2lzdGVyZWRJbnN0YW5jZXM9e307ZnVuY3Rpb24gZ2V0QmFzZXN0UG9pbnRlcihjbGFzc18scHRyKXtpZihwdHI9PT11bmRlZmluZWQpe3Rocm93QmluZGluZ0Vycm9yKFwicHRyIHNob3VsZCBub3QgYmUgdW5kZWZpbmVkXCIpfXdoaWxlKGNsYXNzXy5iYXNlQ2xhc3Mpe3B0cj1jbGFzc18udXBjYXN0KHB0cik7Y2xhc3NfPWNsYXNzXy5iYXNlQ2xhc3N9cmV0dXJuIHB0cn1mdW5jdGlvbiBnZXRJbmhlcml0ZWRJbnN0YW5jZShjbGFzc18scHRyKXtwdHI9Z2V0QmFzZXN0UG9pbnRlcihjbGFzc18scHRyKTtyZXR1cm4gcmVnaXN0ZXJlZEluc3RhbmNlc1twdHJdfWZ1bmN0aW9uIG1ha2VDbGFzc0hhbmRsZShwcm90b3R5cGUscmVjb3JkKXtpZighcmVjb3JkLnB0clR5cGV8fCFyZWNvcmQucHRyKXt0aHJvd0ludGVybmFsRXJyb3IoXCJtYWtlQ2xhc3NIYW5kbGUgcmVxdWlyZXMgcHRyIGFuZCBwdHJUeXBlXCIpfXZhciBoYXNTbWFydFB0clR5cGU9ISFyZWNvcmQuc21hcnRQdHJUeXBlO3ZhciBoYXNTbWFydFB0cj0hIXJlY29yZC5zbWFydFB0cjtpZihoYXNTbWFydFB0clR5cGUhPT1oYXNTbWFydFB0cil7dGhyb3dJbnRlcm5hbEVycm9yKFwiQm90aCBzbWFydFB0clR5cGUgYW5kIHNtYXJ0UHRyIG11c3QgYmUgc3BlY2lmaWVkXCIpfXJlY29yZC5jb3VudD17dmFsdWU6MX07cmV0dXJuIGF0dGFjaEZpbmFsaXplcihPYmplY3QuY3JlYXRlKHByb3RvdHlwZSx7JCQ6e3ZhbHVlOnJlY29yZH19KSl9ZnVuY3Rpb24gUmVnaXN0ZXJlZFBvaW50ZXJfZnJvbVdpcmVUeXBlKHB0cil7dmFyIHJhd1BvaW50ZXI9dGhpcy5nZXRQb2ludGVlKHB0cik7aWYoIXJhd1BvaW50ZXIpe3RoaXMuZGVzdHJ1Y3RvcihwdHIpO3JldHVybiBudWxsfXZhciByZWdpc3RlcmVkSW5zdGFuY2U9Z2V0SW5oZXJpdGVkSW5zdGFuY2UodGhpcy5yZWdpc3RlcmVkQ2xhc3MscmF3UG9pbnRlcik7aWYodW5kZWZpbmVkIT09cmVnaXN0ZXJlZEluc3RhbmNlKXtpZigwPT09cmVnaXN0ZXJlZEluc3RhbmNlLiQkLmNvdW50LnZhbHVlKXtyZWdpc3RlcmVkSW5zdGFuY2UuJCQucHRyPXJhd1BvaW50ZXI7cmVnaXN0ZXJlZEluc3RhbmNlLiQkLnNtYXJ0UHRyPXB0cjtyZXR1cm4gcmVnaXN0ZXJlZEluc3RhbmNlW1wiY2xvbmVcIl0oKX1lbHNle3ZhciBydj1yZWdpc3RlcmVkSW5zdGFuY2VbXCJjbG9uZVwiXSgpO3RoaXMuZGVzdHJ1Y3RvcihwdHIpO3JldHVybiBydn19ZnVuY3Rpb24gbWFrZURlZmF1bHRIYW5kbGUoKXtpZih0aGlzLmlzU21hcnRQb2ludGVyKXtyZXR1cm4gbWFrZUNsYXNzSGFuZGxlKHRoaXMucmVnaXN0ZXJlZENsYXNzLmluc3RhbmNlUHJvdG90eXBlLHtwdHJUeXBlOnRoaXMucG9pbnRlZVR5cGUscHRyOnJhd1BvaW50ZXIsc21hcnRQdHJUeXBlOnRoaXMsc21hcnRQdHI6cHRyfSl9ZWxzZXtyZXR1cm4gbWFrZUNsYXNzSGFuZGxlKHRoaXMucmVnaXN0ZXJlZENsYXNzLmluc3RhbmNlUHJvdG90eXBlLHtwdHJUeXBlOnRoaXMscHRyOnB0cn0pfX12YXIgYWN0dWFsVHlwZT10aGlzLnJlZ2lzdGVyZWRDbGFzcy5nZXRBY3R1YWxUeXBlKHJhd1BvaW50ZXIpO3ZhciByZWdpc3RlcmVkUG9pbnRlclJlY29yZD1yZWdpc3RlcmVkUG9pbnRlcnNbYWN0dWFsVHlwZV07aWYoIXJlZ2lzdGVyZWRQb2ludGVyUmVjb3JkKXtyZXR1cm4gbWFrZURlZmF1bHRIYW5kbGUuY2FsbCh0aGlzKX12YXIgdG9UeXBlO2lmKHRoaXMuaXNDb25zdCl7dG9UeXBlPXJlZ2lzdGVyZWRQb2ludGVyUmVjb3JkLmNvbnN0UG9pbnRlclR5cGV9ZWxzZXt0b1R5cGU9cmVnaXN0ZXJlZFBvaW50ZXJSZWNvcmQucG9pbnRlclR5cGV9dmFyIGRwPWRvd25jYXN0UG9pbnRlcihyYXdQb2ludGVyLHRoaXMucmVnaXN0ZXJlZENsYXNzLHRvVHlwZS5yZWdpc3RlcmVkQ2xhc3MpO2lmKGRwPT09bnVsbCl7cmV0dXJuIG1ha2VEZWZhdWx0SGFuZGxlLmNhbGwodGhpcyl9aWYodGhpcy5pc1NtYXJ0UG9pbnRlcil7cmV0dXJuIG1ha2VDbGFzc0hhbmRsZSh0b1R5cGUucmVnaXN0ZXJlZENsYXNzLmluc3RhbmNlUHJvdG90eXBlLHtwdHJUeXBlOnRvVHlwZSxwdHI6ZHAsc21hcnRQdHJUeXBlOnRoaXMsc21hcnRQdHI6cHRyfSl9ZWxzZXtyZXR1cm4gbWFrZUNsYXNzSGFuZGxlKHRvVHlwZS5yZWdpc3RlcmVkQ2xhc3MuaW5zdGFuY2VQcm90b3R5cGUse3B0clR5cGU6dG9UeXBlLHB0cjpkcH0pfX1mdW5jdGlvbiBhdHRhY2hGaW5hbGl6ZXIoaGFuZGxlKXtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIEZpbmFsaXphdGlvblJlZ2lzdHJ5KXthdHRhY2hGaW5hbGl6ZXI9aGFuZGxlPT5oYW5kbGU7cmV0dXJuIGhhbmRsZX1maW5hbGl6YXRpb25SZWdpc3RyeT1uZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoaW5mbz0+e3JlbGVhc2VDbGFzc0hhbmRsZShpbmZvLiQkKX0pO2F0dGFjaEZpbmFsaXplcj1oYW5kbGU9Pnt2YXIgJCQ9aGFuZGxlLiQkO3ZhciBoYXNTbWFydFB0cj0hISQkLnNtYXJ0UHRyO2lmKGhhc1NtYXJ0UHRyKXt2YXIgaW5mbz17JCQ6JCR9O2ZpbmFsaXphdGlvblJlZ2lzdHJ5LnJlZ2lzdGVyKGhhbmRsZSxpbmZvLGhhbmRsZSl9cmV0dXJuIGhhbmRsZX07ZGV0YWNoRmluYWxpemVyPWhhbmRsZT0+ZmluYWxpemF0aW9uUmVnaXN0cnkudW5yZWdpc3RlcihoYW5kbGUpO3JldHVybiBhdHRhY2hGaW5hbGl6ZXIoaGFuZGxlKX1mdW5jdGlvbiBDbGFzc0hhbmRsZV9jbG9uZSgpe2lmKCF0aGlzLiQkLnB0cil7dGhyb3dJbnN0YW5jZUFscmVhZHlEZWxldGVkKHRoaXMpfWlmKHRoaXMuJCQucHJlc2VydmVQb2ludGVyT25EZWxldGUpe3RoaXMuJCQuY291bnQudmFsdWUrPTE7cmV0dXJuIHRoaXN9ZWxzZXt2YXIgY2xvbmU9YXR0YWNoRmluYWxpemVyKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLHskJDp7dmFsdWU6c2hhbGxvd0NvcHlJbnRlcm5hbFBvaW50ZXIodGhpcy4kJCl9fSkpO2Nsb25lLiQkLmNvdW50LnZhbHVlKz0xO2Nsb25lLiQkLmRlbGV0ZVNjaGVkdWxlZD1mYWxzZTtyZXR1cm4gY2xvbmV9fWZ1bmN0aW9uIENsYXNzSGFuZGxlX2RlbGV0ZSgpe2lmKCF0aGlzLiQkLnB0cil7dGhyb3dJbnN0YW5jZUFscmVhZHlEZWxldGVkKHRoaXMpfWlmKHRoaXMuJCQuZGVsZXRlU2NoZWR1bGVkJiYhdGhpcy4kJC5wcmVzZXJ2ZVBvaW50ZXJPbkRlbGV0ZSl7dGhyb3dCaW5kaW5nRXJyb3IoXCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uXCIpfWRldGFjaEZpbmFsaXplcih0aGlzKTtyZWxlYXNlQ2xhc3NIYW5kbGUodGhpcy4kJCk7aWYoIXRoaXMuJCQucHJlc2VydmVQb2ludGVyT25EZWxldGUpe3RoaXMuJCQuc21hcnRQdHI9dW5kZWZpbmVkO3RoaXMuJCQucHRyPXVuZGVmaW5lZH19ZnVuY3Rpb24gQ2xhc3NIYW5kbGVfaXNEZWxldGVkKCl7cmV0dXJuIXRoaXMuJCQucHRyfWZ1bmN0aW9uIENsYXNzSGFuZGxlX2RlbGV0ZUxhdGVyKCl7aWYoIXRoaXMuJCQucHRyKXt0aHJvd0luc3RhbmNlQWxyZWFkeURlbGV0ZWQodGhpcyl9aWYodGhpcy4kJC5kZWxldGVTY2hlZHVsZWQmJiF0aGlzLiQkLnByZXNlcnZlUG9pbnRlck9uRGVsZXRlKXt0aHJvd0JpbmRpbmdFcnJvcihcIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb25cIil9ZGVsZXRpb25RdWV1ZS5wdXNoKHRoaXMpO2lmKGRlbGV0aW9uUXVldWUubGVuZ3RoPT09MSYmZGVsYXlGdW5jdGlvbil7ZGVsYXlGdW5jdGlvbihmbHVzaFBlbmRpbmdEZWxldGVzKX10aGlzLiQkLmRlbGV0ZVNjaGVkdWxlZD10cnVlO3JldHVybiB0aGlzfWZ1bmN0aW9uIGluaXRfQ2xhc3NIYW5kbGUoKXtDbGFzc0hhbmRsZS5wcm90b3R5cGVbXCJpc0FsaWFzT2ZcIl09Q2xhc3NIYW5kbGVfaXNBbGlhc09mO0NsYXNzSGFuZGxlLnByb3RvdHlwZVtcImNsb25lXCJdPUNsYXNzSGFuZGxlX2Nsb25lO0NsYXNzSGFuZGxlLnByb3RvdHlwZVtcImRlbGV0ZVwiXT1DbGFzc0hhbmRsZV9kZWxldGU7Q2xhc3NIYW5kbGUucHJvdG90eXBlW1wiaXNEZWxldGVkXCJdPUNsYXNzSGFuZGxlX2lzRGVsZXRlZDtDbGFzc0hhbmRsZS5wcm90b3R5cGVbXCJkZWxldGVMYXRlclwiXT1DbGFzc0hhbmRsZV9kZWxldGVMYXRlcn1mdW5jdGlvbiBDbGFzc0hhbmRsZSgpe31mdW5jdGlvbiBlbnN1cmVPdmVybG9hZFRhYmxlKHByb3RvLG1ldGhvZE5hbWUsaHVtYW5OYW1lKXtpZih1bmRlZmluZWQ9PT1wcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlKXt2YXIgcHJldkZ1bmM9cHJvdG9bbWV0aG9kTmFtZV07cHJvdG9bbWV0aG9kTmFtZV09ZnVuY3Rpb24oKXtpZighcHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZS5oYXNPd25Qcm9wZXJ0eShhcmd1bWVudHMubGVuZ3RoKSl7dGhyb3dCaW5kaW5nRXJyb3IoYEZ1bmN0aW9uICcke2h1bWFuTmFtZX0nIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoJHthcmd1bWVudHMubGVuZ3RofSkgLSBleHBlY3RzIG9uZSBvZiAoJHtwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlfSkhYCl9cmV0dXJuIHByb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGVbYXJndW1lbnRzLmxlbmd0aF0uYXBwbHkodGhpcyxhcmd1bWVudHMpfTtwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlPVtdO3Byb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGVbcHJldkZ1bmMuYXJnQ291bnRdPXByZXZGdW5jfX1mdW5jdGlvbiBleHBvc2VQdWJsaWNTeW1ib2wobmFtZSx2YWx1ZSxudW1Bcmd1bWVudHMpe2lmKE1vZHVsZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSl7aWYodW5kZWZpbmVkPT09bnVtQXJndW1lbnRzfHx1bmRlZmluZWQhPT1Nb2R1bGVbbmFtZV0ub3ZlcmxvYWRUYWJsZSYmdW5kZWZpbmVkIT09TW9kdWxlW25hbWVdLm92ZXJsb2FkVGFibGVbbnVtQXJndW1lbnRzXSl7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCByZWdpc3RlciBwdWJsaWMgbmFtZSAnJHtuYW1lfScgdHdpY2VgKX1lbnN1cmVPdmVybG9hZFRhYmxlKE1vZHVsZSxuYW1lLG5hbWUpO2lmKE1vZHVsZS5oYXNPd25Qcm9wZXJ0eShudW1Bcmd1bWVudHMpKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIG92ZXJsb2FkcyBvZiBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyAoJHtudW1Bcmd1bWVudHN9KSFgKX1Nb2R1bGVbbmFtZV0ub3ZlcmxvYWRUYWJsZVtudW1Bcmd1bWVudHNdPXZhbHVlfWVsc2V7TW9kdWxlW25hbWVdPXZhbHVlO2lmKHVuZGVmaW5lZCE9PW51bUFyZ3VtZW50cyl7TW9kdWxlW25hbWVdLm51bUFyZ3VtZW50cz1udW1Bcmd1bWVudHN9fX1mdW5jdGlvbiBSZWdpc3RlcmVkQ2xhc3MobmFtZSxjb25zdHJ1Y3RvcixpbnN0YW5jZVByb3RvdHlwZSxyYXdEZXN0cnVjdG9yLGJhc2VDbGFzcyxnZXRBY3R1YWxUeXBlLHVwY2FzdCxkb3duY2FzdCl7dGhpcy5uYW1lPW5hbWU7dGhpcy5jb25zdHJ1Y3Rvcj1jb25zdHJ1Y3Rvcjt0aGlzLmluc3RhbmNlUHJvdG90eXBlPWluc3RhbmNlUHJvdG90eXBlO3RoaXMucmF3RGVzdHJ1Y3Rvcj1yYXdEZXN0cnVjdG9yO3RoaXMuYmFzZUNsYXNzPWJhc2VDbGFzczt0aGlzLmdldEFjdHVhbFR5cGU9Z2V0QWN0dWFsVHlwZTt0aGlzLnVwY2FzdD11cGNhc3Q7dGhpcy5kb3duY2FzdD1kb3duY2FzdDt0aGlzLnB1cmVWaXJ0dWFsRnVuY3Rpb25zPVtdfWZ1bmN0aW9uIHVwY2FzdFBvaW50ZXIocHRyLHB0ckNsYXNzLGRlc2lyZWRDbGFzcyl7d2hpbGUocHRyQ2xhc3MhPT1kZXNpcmVkQ2xhc3Mpe2lmKCFwdHJDbGFzcy51cGNhc3Qpe3Rocm93QmluZGluZ0Vycm9yKGBFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICR7ZGVzaXJlZENsYXNzLm5hbWV9LCBnb3QgYW4gaW5zdGFuY2Ugb2YgJHtwdHJDbGFzcy5uYW1lfWApfXB0cj1wdHJDbGFzcy51cGNhc3QocHRyKTtwdHJDbGFzcz1wdHJDbGFzcy5iYXNlQ2xhc3N9cmV0dXJuIHB0cn1mdW5jdGlvbiBjb25zdE5vU21hcnRQdHJSYXdQb2ludGVyVG9XaXJlVHlwZShkZXN0cnVjdG9ycyxoYW5kbGUpe2lmKGhhbmRsZT09PW51bGwpe2lmKHRoaXMuaXNSZWZlcmVuY2Upe3Rocm93QmluZGluZ0Vycm9yKGBudWxsIGlzIG5vdCBhIHZhbGlkICR7dGhpcy5uYW1lfWApfXJldHVybiAwfWlmKCFoYW5kbGUuJCQpe3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgcGFzcyBcIiR7ZW1iaW5kUmVwcihoYW5kbGUpfVwiIGFzIGEgJHt0aGlzLm5hbWV9YCl9aWYoIWhhbmRsZS4kJC5wdHIpe3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAke3RoaXMubmFtZX1gKX12YXIgaGFuZGxlQ2xhc3M9aGFuZGxlLiQkLnB0clR5cGUucmVnaXN0ZXJlZENsYXNzO3ZhciBwdHI9dXBjYXN0UG9pbnRlcihoYW5kbGUuJCQucHRyLGhhbmRsZUNsYXNzLHRoaXMucmVnaXN0ZXJlZENsYXNzKTtyZXR1cm4gcHRyfWZ1bmN0aW9uIGdlbmVyaWNQb2ludGVyVG9XaXJlVHlwZShkZXN0cnVjdG9ycyxoYW5kbGUpe3ZhciBwdHI7aWYoaGFuZGxlPT09bnVsbCl7aWYodGhpcy5pc1JlZmVyZW5jZSl7dGhyb3dCaW5kaW5nRXJyb3IoYG51bGwgaXMgbm90IGEgdmFsaWQgJHt0aGlzLm5hbWV9YCl9aWYodGhpcy5pc1NtYXJ0UG9pbnRlcil7cHRyPXRoaXMucmF3Q29uc3RydWN0b3IoKTtpZihkZXN0cnVjdG9ycyE9PW51bGwpe2Rlc3RydWN0b3JzLnB1c2godGhpcy5yYXdEZXN0cnVjdG9yLHB0cil9cmV0dXJuIHB0cn1lbHNle3JldHVybiAwfX1pZighaGFuZGxlLiQkKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHBhc3MgXCIke2VtYmluZFJlcHIoaGFuZGxlKX1cIiBhcyBhICR7dGhpcy5uYW1lfWApfWlmKCFoYW5kbGUuJCQucHRyKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgJHt0aGlzLm5hbWV9YCl9aWYoIXRoaXMuaXNDb25zdCYmaGFuZGxlLiQkLnB0clR5cGUuaXNDb25zdCl7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgJHtoYW5kbGUuJCQuc21hcnRQdHJUeXBlP2hhbmRsZS4kJC5zbWFydFB0clR5cGUubmFtZTpoYW5kbGUuJCQucHRyVHlwZS5uYW1lfSB0byBwYXJhbWV0ZXIgdHlwZSAke3RoaXMubmFtZX1gKX12YXIgaGFuZGxlQ2xhc3M9aGFuZGxlLiQkLnB0clR5cGUucmVnaXN0ZXJlZENsYXNzO3B0cj11cGNhc3RQb2ludGVyKGhhbmRsZS4kJC5wdHIsaGFuZGxlQ2xhc3MsdGhpcy5yZWdpc3RlcmVkQ2xhc3MpO2lmKHRoaXMuaXNTbWFydFBvaW50ZXIpe2lmKHVuZGVmaW5lZD09PWhhbmRsZS4kJC5zbWFydFB0cil7dGhyb3dCaW5kaW5nRXJyb3IoXCJQYXNzaW5nIHJhdyBwb2ludGVyIHRvIHNtYXJ0IHBvaW50ZXIgaXMgaWxsZWdhbFwiKX1zd2l0Y2godGhpcy5zaGFyaW5nUG9saWN5KXtjYXNlIDA6aWYoaGFuZGxlLiQkLnNtYXJ0UHRyVHlwZT09PXRoaXMpe3B0cj1oYW5kbGUuJCQuc21hcnRQdHJ9ZWxzZXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IGNvbnZlcnQgYXJndW1lbnQgb2YgdHlwZSAke2hhbmRsZS4kJC5zbWFydFB0clR5cGU/aGFuZGxlLiQkLnNtYXJ0UHRyVHlwZS5uYW1lOmhhbmRsZS4kJC5wdHJUeXBlLm5hbWV9IHRvIHBhcmFtZXRlciB0eXBlICR7dGhpcy5uYW1lfWApfWJyZWFrO2Nhc2UgMTpwdHI9aGFuZGxlLiQkLnNtYXJ0UHRyO2JyZWFrO2Nhc2UgMjppZihoYW5kbGUuJCQuc21hcnRQdHJUeXBlPT09dGhpcyl7cHRyPWhhbmRsZS4kJC5zbWFydFB0cn1lbHNle3ZhciBjbG9uZWRIYW5kbGU9aGFuZGxlW1wiY2xvbmVcIl0oKTtwdHI9dGhpcy5yYXdTaGFyZShwdHIsRW12YWwudG9IYW5kbGUoZnVuY3Rpb24oKXtjbG9uZWRIYW5kbGVbXCJkZWxldGVcIl0oKX0pKTtpZihkZXN0cnVjdG9ycyE9PW51bGwpe2Rlc3RydWN0b3JzLnB1c2godGhpcy5yYXdEZXN0cnVjdG9yLHB0cil9fWJyZWFrO2RlZmF1bHQ6dGhyb3dCaW5kaW5nRXJyb3IoXCJVbnN1cHBvcnRpbmcgc2hhcmluZyBwb2xpY3lcIil9fXJldHVybiBwdHJ9ZnVuY3Rpb24gbm9uQ29uc3ROb1NtYXJ0UHRyUmF3UG9pbnRlclRvV2lyZVR5cGUoZGVzdHJ1Y3RvcnMsaGFuZGxlKXtpZihoYW5kbGU9PT1udWxsKXtpZih0aGlzLmlzUmVmZXJlbmNlKXt0aHJvd0JpbmRpbmdFcnJvcihgbnVsbCBpcyBub3QgYSB2YWxpZCAke3RoaXMubmFtZX1gKX1yZXR1cm4gMH1pZighaGFuZGxlLiQkKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHBhc3MgXCIke2VtYmluZFJlcHIoaGFuZGxlKX1cIiBhcyBhICR7dGhpcy5uYW1lfWApfWlmKCFoYW5kbGUuJCQucHRyKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgJHt0aGlzLm5hbWV9YCl9aWYoaGFuZGxlLiQkLnB0clR5cGUuaXNDb25zdCl7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgJHtoYW5kbGUuJCQucHRyVHlwZS5uYW1lfSB0byBwYXJhbWV0ZXIgdHlwZSAke3RoaXMubmFtZX1gKX12YXIgaGFuZGxlQ2xhc3M9aGFuZGxlLiQkLnB0clR5cGUucmVnaXN0ZXJlZENsYXNzO3ZhciBwdHI9dXBjYXN0UG9pbnRlcihoYW5kbGUuJCQucHRyLGhhbmRsZUNsYXNzLHRoaXMucmVnaXN0ZXJlZENsYXNzKTtyZXR1cm4gcHRyfWZ1bmN0aW9uIHNpbXBsZVJlYWRWYWx1ZUZyb21Qb2ludGVyKHBvaW50ZXIpe3JldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKEhFQVAzMltwb2ludGVyPj4yXSl9ZnVuY3Rpb24gUmVnaXN0ZXJlZFBvaW50ZXJfZ2V0UG9pbnRlZShwdHIpe2lmKHRoaXMucmF3R2V0UG9pbnRlZSl7cHRyPXRoaXMucmF3R2V0UG9pbnRlZShwdHIpfXJldHVybiBwdHJ9ZnVuY3Rpb24gUmVnaXN0ZXJlZFBvaW50ZXJfZGVzdHJ1Y3RvcihwdHIpe2lmKHRoaXMucmF3RGVzdHJ1Y3Rvcil7dGhpcy5yYXdEZXN0cnVjdG9yKHB0cil9fWZ1bmN0aW9uIFJlZ2lzdGVyZWRQb2ludGVyX2RlbGV0ZU9iamVjdChoYW5kbGUpe2lmKGhhbmRsZSE9PW51bGwpe2hhbmRsZVtcImRlbGV0ZVwiXSgpfX1mdW5jdGlvbiBpbml0X1JlZ2lzdGVyZWRQb2ludGVyKCl7UmVnaXN0ZXJlZFBvaW50ZXIucHJvdG90eXBlLmdldFBvaW50ZWU9UmVnaXN0ZXJlZFBvaW50ZXJfZ2V0UG9pbnRlZTtSZWdpc3RlcmVkUG9pbnRlci5wcm90b3R5cGUuZGVzdHJ1Y3Rvcj1SZWdpc3RlcmVkUG9pbnRlcl9kZXN0cnVjdG9yO1JlZ2lzdGVyZWRQb2ludGVyLnByb3RvdHlwZVtcImFyZ1BhY2tBZHZhbmNlXCJdPTg7UmVnaXN0ZXJlZFBvaW50ZXIucHJvdG90eXBlW1wicmVhZFZhbHVlRnJvbVBvaW50ZXJcIl09c2ltcGxlUmVhZFZhbHVlRnJvbVBvaW50ZXI7UmVnaXN0ZXJlZFBvaW50ZXIucHJvdG90eXBlW1wiZGVsZXRlT2JqZWN0XCJdPVJlZ2lzdGVyZWRQb2ludGVyX2RlbGV0ZU9iamVjdDtSZWdpc3RlcmVkUG9pbnRlci5wcm90b3R5cGVbXCJmcm9tV2lyZVR5cGVcIl09UmVnaXN0ZXJlZFBvaW50ZXJfZnJvbVdpcmVUeXBlfWZ1bmN0aW9uIFJlZ2lzdGVyZWRQb2ludGVyKG5hbWUscmVnaXN0ZXJlZENsYXNzLGlzUmVmZXJlbmNlLGlzQ29uc3QsaXNTbWFydFBvaW50ZXIscG9pbnRlZVR5cGUsc2hhcmluZ1BvbGljeSxyYXdHZXRQb2ludGVlLHJhd0NvbnN0cnVjdG9yLHJhd1NoYXJlLHJhd0Rlc3RydWN0b3Ipe3RoaXMubmFtZT1uYW1lO3RoaXMucmVnaXN0ZXJlZENsYXNzPXJlZ2lzdGVyZWRDbGFzczt0aGlzLmlzUmVmZXJlbmNlPWlzUmVmZXJlbmNlO3RoaXMuaXNDb25zdD1pc0NvbnN0O3RoaXMuaXNTbWFydFBvaW50ZXI9aXNTbWFydFBvaW50ZXI7dGhpcy5wb2ludGVlVHlwZT1wb2ludGVlVHlwZTt0aGlzLnNoYXJpbmdQb2xpY3k9c2hhcmluZ1BvbGljeTt0aGlzLnJhd0dldFBvaW50ZWU9cmF3R2V0UG9pbnRlZTt0aGlzLnJhd0NvbnN0cnVjdG9yPXJhd0NvbnN0cnVjdG9yO3RoaXMucmF3U2hhcmU9cmF3U2hhcmU7dGhpcy5yYXdEZXN0cnVjdG9yPXJhd0Rlc3RydWN0b3I7aWYoIWlzU21hcnRQb2ludGVyJiZyZWdpc3RlcmVkQ2xhc3MuYmFzZUNsYXNzPT09dW5kZWZpbmVkKXtpZihpc0NvbnN0KXt0aGlzW1widG9XaXJlVHlwZVwiXT1jb25zdE5vU21hcnRQdHJSYXdQb2ludGVyVG9XaXJlVHlwZTt0aGlzLmRlc3RydWN0b3JGdW5jdGlvbj1udWxsfWVsc2V7dGhpc1tcInRvV2lyZVR5cGVcIl09bm9uQ29uc3ROb1NtYXJ0UHRyUmF3UG9pbnRlclRvV2lyZVR5cGU7dGhpcy5kZXN0cnVjdG9yRnVuY3Rpb249bnVsbH19ZWxzZXt0aGlzW1widG9XaXJlVHlwZVwiXT1nZW5lcmljUG9pbnRlclRvV2lyZVR5cGV9fWZ1bmN0aW9uIHJlcGxhY2VQdWJsaWNTeW1ib2wobmFtZSx2YWx1ZSxudW1Bcmd1bWVudHMpe2lmKCFNb2R1bGUuaGFzT3duUHJvcGVydHkobmFtZSkpe3Rocm93SW50ZXJuYWxFcnJvcihcIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sXCIpfWlmKHVuZGVmaW5lZCE9PU1vZHVsZVtuYW1lXS5vdmVybG9hZFRhYmxlJiZ1bmRlZmluZWQhPT1udW1Bcmd1bWVudHMpe01vZHVsZVtuYW1lXS5vdmVybG9hZFRhYmxlW251bUFyZ3VtZW50c109dmFsdWV9ZWxzZXtNb2R1bGVbbmFtZV09dmFsdWU7TW9kdWxlW25hbWVdLmFyZ0NvdW50PW51bUFyZ3VtZW50c319ZnVuY3Rpb24gZHluQ2FsbExlZ2FjeShzaWcscHRyLGFyZ3Mpe3ZhciBmPU1vZHVsZVtcImR5bkNhbGxfXCIrc2lnXTtyZXR1cm4gYXJncyYmYXJncy5sZW5ndGg/Zi5hcHBseShudWxsLFtwdHJdLmNvbmNhdChhcmdzKSk6Zi5jYWxsKG51bGwscHRyKX12YXIgd2FzbVRhYmxlTWlycm9yPVtdO2Z1bmN0aW9uIGdldFdhc21UYWJsZUVudHJ5KGZ1bmNQdHIpe3ZhciBmdW5jPXdhc21UYWJsZU1pcnJvcltmdW5jUHRyXTtpZighZnVuYyl7aWYoZnVuY1B0cj49d2FzbVRhYmxlTWlycm9yLmxlbmd0aCl3YXNtVGFibGVNaXJyb3IubGVuZ3RoPWZ1bmNQdHIrMTt3YXNtVGFibGVNaXJyb3JbZnVuY1B0cl09ZnVuYz13YXNtVGFibGUuZ2V0KGZ1bmNQdHIpfXJldHVybiBmdW5jfWZ1bmN0aW9uIGR5bkNhbGwoc2lnLHB0cixhcmdzKXtpZihzaWcuaW5jbHVkZXMoXCJqXCIpKXtyZXR1cm4gZHluQ2FsbExlZ2FjeShzaWcscHRyLGFyZ3MpfXZhciBydG49Z2V0V2FzbVRhYmxlRW50cnkocHRyKS5hcHBseShudWxsLGFyZ3MpO3JldHVybiBydG59ZnVuY3Rpb24gZ2V0RHluQ2FsbGVyKHNpZyxwdHIpe3ZhciBhcmdDYWNoZT1bXTtyZXR1cm4gZnVuY3Rpb24oKXthcmdDYWNoZS5sZW5ndGg9MDtPYmplY3QuYXNzaWduKGFyZ0NhY2hlLGFyZ3VtZW50cyk7cmV0dXJuIGR5bkNhbGwoc2lnLHB0cixhcmdDYWNoZSl9fWZ1bmN0aW9uIGVtYmluZF9fcmVxdWlyZUZ1bmN0aW9uKHNpZ25hdHVyZSxyYXdGdW5jdGlvbil7c2lnbmF0dXJlPXJlYWRMYXRpbjFTdHJpbmcoc2lnbmF0dXJlKTtmdW5jdGlvbiBtYWtlRHluQ2FsbGVyKCl7aWYoc2lnbmF0dXJlLmluY2x1ZGVzKFwialwiKSl7cmV0dXJuIGdldER5bkNhbGxlcihzaWduYXR1cmUscmF3RnVuY3Rpb24pfXJldHVybiBnZXRXYXNtVGFibGVFbnRyeShyYXdGdW5jdGlvbil9dmFyIGZwPW1ha2VEeW5DYWxsZXIoKTtpZih0eXBlb2YgZnAhPVwiZnVuY3Rpb25cIil7dGhyb3dCaW5kaW5nRXJyb3IoYHVua25vd24gZnVuY3Rpb24gcG9pbnRlciB3aXRoIHNpZ25hdHVyZSAke3NpZ25hdHVyZX06ICR7cmF3RnVuY3Rpb259YCl9cmV0dXJuIGZwfXZhciBVbmJvdW5kVHlwZUVycm9yPXVuZGVmaW5lZDtmdW5jdGlvbiBnZXRUeXBlTmFtZSh0eXBlKXt2YXIgcHRyPV9fX2dldFR5cGVOYW1lKHR5cGUpO3ZhciBydj1yZWFkTGF0aW4xU3RyaW5nKHB0cik7X2ZyZWUocHRyKTtyZXR1cm4gcnZ9ZnVuY3Rpb24gdGhyb3dVbmJvdW5kVHlwZUVycm9yKG1lc3NhZ2UsdHlwZXMpe3ZhciB1bmJvdW5kVHlwZXM9W107dmFyIHNlZW49e307ZnVuY3Rpb24gdmlzaXQodHlwZSl7aWYoc2Vlblt0eXBlXSl7cmV0dXJufWlmKHJlZ2lzdGVyZWRUeXBlc1t0eXBlXSl7cmV0dXJufWlmKHR5cGVEZXBlbmRlbmNpZXNbdHlwZV0pe3R5cGVEZXBlbmRlbmNpZXNbdHlwZV0uZm9yRWFjaCh2aXNpdCk7cmV0dXJufXVuYm91bmRUeXBlcy5wdXNoKHR5cGUpO3NlZW5bdHlwZV09dHJ1ZX10eXBlcy5mb3JFYWNoKHZpc2l0KTt0aHJvdyBuZXcgVW5ib3VuZFR5cGVFcnJvcihgJHttZXNzYWdlfTogYCt1bmJvdW5kVHlwZXMubWFwKGdldFR5cGVOYW1lKS5qb2luKFtcIiwgXCJdKSl9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfY2xhc3MocmF3VHlwZSxyYXdQb2ludGVyVHlwZSxyYXdDb25zdFBvaW50ZXJUeXBlLGJhc2VDbGFzc1Jhd1R5cGUsZ2V0QWN0dWFsVHlwZVNpZ25hdHVyZSxnZXRBY3R1YWxUeXBlLHVwY2FzdFNpZ25hdHVyZSx1cGNhc3QsZG93bmNhc3RTaWduYXR1cmUsZG93bmNhc3QsbmFtZSxkZXN0cnVjdG9yU2lnbmF0dXJlLHJhd0Rlc3RydWN0b3Ipe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtnZXRBY3R1YWxUeXBlPWVtYmluZF9fcmVxdWlyZUZ1bmN0aW9uKGdldEFjdHVhbFR5cGVTaWduYXR1cmUsZ2V0QWN0dWFsVHlwZSk7aWYodXBjYXN0KXt1cGNhc3Q9ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24odXBjYXN0U2lnbmF0dXJlLHVwY2FzdCl9aWYoZG93bmNhc3Qpe2Rvd25jYXN0PWVtYmluZF9fcmVxdWlyZUZ1bmN0aW9uKGRvd25jYXN0U2lnbmF0dXJlLGRvd25jYXN0KX1yYXdEZXN0cnVjdG9yPWVtYmluZF9fcmVxdWlyZUZ1bmN0aW9uKGRlc3RydWN0b3JTaWduYXR1cmUscmF3RGVzdHJ1Y3Rvcik7dmFyIGxlZ2FsRnVuY3Rpb25OYW1lPW1ha2VMZWdhbEZ1bmN0aW9uTmFtZShuYW1lKTtleHBvc2VQdWJsaWNTeW1ib2wobGVnYWxGdW5jdGlvbk5hbWUsZnVuY3Rpb24oKXt0aHJvd1VuYm91bmRUeXBlRXJyb3IoYENhbm5vdCBjb25zdHJ1Y3QgJHtuYW1lfSBkdWUgdG8gdW5ib3VuZCB0eXBlc2AsW2Jhc2VDbGFzc1Jhd1R5cGVdKX0pO3doZW5EZXBlbmRlbnRUeXBlc0FyZVJlc29sdmVkKFtyYXdUeXBlLHJhd1BvaW50ZXJUeXBlLHJhd0NvbnN0UG9pbnRlclR5cGVdLGJhc2VDbGFzc1Jhd1R5cGU/W2Jhc2VDbGFzc1Jhd1R5cGVdOltdLGZ1bmN0aW9uKGJhc2Upe2Jhc2U9YmFzZVswXTt2YXIgYmFzZUNsYXNzO3ZhciBiYXNlUHJvdG90eXBlO2lmKGJhc2VDbGFzc1Jhd1R5cGUpe2Jhc2VDbGFzcz1iYXNlLnJlZ2lzdGVyZWRDbGFzcztiYXNlUHJvdG90eXBlPWJhc2VDbGFzcy5pbnN0YW5jZVByb3RvdHlwZX1lbHNle2Jhc2VQcm90b3R5cGU9Q2xhc3NIYW5kbGUucHJvdG90eXBlfXZhciBjb25zdHJ1Y3Rvcj1jcmVhdGVOYW1lZEZ1bmN0aW9uKGxlZ2FsRnVuY3Rpb25OYW1lLGZ1bmN0aW9uKCl7aWYoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpIT09aW5zdGFuY2VQcm90b3R5cGUpe3Rocm93IG5ldyBCaW5kaW5nRXJyb3IoXCJVc2UgJ25ldycgdG8gY29uc3RydWN0IFwiK25hbWUpfWlmKHVuZGVmaW5lZD09PXJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3Rvcl9ib2R5KXt0aHJvdyBuZXcgQmluZGluZ0Vycm9yKG5hbWUrXCIgaGFzIG5vIGFjY2Vzc2libGUgY29uc3RydWN0b3JcIil9dmFyIGJvZHk9cmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yX2JvZHlbYXJndW1lbnRzLmxlbmd0aF07aWYodW5kZWZpbmVkPT09Ym9keSl7dGhyb3cgbmV3IEJpbmRpbmdFcnJvcihgVHJpZWQgdG8gaW52b2tlIGN0b3Igb2YgJHtuYW1lfSB3aXRoIGludmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCR7YXJndW1lbnRzLmxlbmd0aH0pIC0gZXhwZWN0ZWQgKCR7T2JqZWN0LmtleXMocmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yX2JvZHkpLnRvU3RyaW5nKCl9KSBwYXJhbWV0ZXJzIGluc3RlYWQhYCl9cmV0dXJuIGJvZHkuYXBwbHkodGhpcyxhcmd1bWVudHMpfSk7dmFyIGluc3RhbmNlUHJvdG90eXBlPU9iamVjdC5jcmVhdGUoYmFzZVByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmNvbnN0cnVjdG9yfX0pO2NvbnN0cnVjdG9yLnByb3RvdHlwZT1pbnN0YW5jZVByb3RvdHlwZTt2YXIgcmVnaXN0ZXJlZENsYXNzPW5ldyBSZWdpc3RlcmVkQ2xhc3MobmFtZSxjb25zdHJ1Y3RvcixpbnN0YW5jZVByb3RvdHlwZSxyYXdEZXN0cnVjdG9yLGJhc2VDbGFzcyxnZXRBY3R1YWxUeXBlLHVwY2FzdCxkb3duY2FzdCk7aWYocmVnaXN0ZXJlZENsYXNzLmJhc2VDbGFzcyl7aWYocmVnaXN0ZXJlZENsYXNzLmJhc2VDbGFzcy5fX2Rlcml2ZWRDbGFzc2VzPT09dW5kZWZpbmVkKXtyZWdpc3RlcmVkQ2xhc3MuYmFzZUNsYXNzLl9fZGVyaXZlZENsYXNzZXM9W119cmVnaXN0ZXJlZENsYXNzLmJhc2VDbGFzcy5fX2Rlcml2ZWRDbGFzc2VzLnB1c2gocmVnaXN0ZXJlZENsYXNzKX12YXIgcmVmZXJlbmNlQ29udmVydGVyPW5ldyBSZWdpc3RlcmVkUG9pbnRlcihuYW1lLHJlZ2lzdGVyZWRDbGFzcyx0cnVlLGZhbHNlLGZhbHNlKTt2YXIgcG9pbnRlckNvbnZlcnRlcj1uZXcgUmVnaXN0ZXJlZFBvaW50ZXIobmFtZStcIipcIixyZWdpc3RlcmVkQ2xhc3MsZmFsc2UsZmFsc2UsZmFsc2UpO3ZhciBjb25zdFBvaW50ZXJDb252ZXJ0ZXI9bmV3IFJlZ2lzdGVyZWRQb2ludGVyKG5hbWUrXCIgY29uc3QqXCIscmVnaXN0ZXJlZENsYXNzLGZhbHNlLHRydWUsZmFsc2UpO3JlZ2lzdGVyZWRQb2ludGVyc1tyYXdUeXBlXT17cG9pbnRlclR5cGU6cG9pbnRlckNvbnZlcnRlcixjb25zdFBvaW50ZXJUeXBlOmNvbnN0UG9pbnRlckNvbnZlcnRlcn07cmVwbGFjZVB1YmxpY1N5bWJvbChsZWdhbEZ1bmN0aW9uTmFtZSxjb25zdHJ1Y3Rvcik7cmV0dXJuW3JlZmVyZW5jZUNvbnZlcnRlcixwb2ludGVyQ29udmVydGVyLGNvbnN0UG9pbnRlckNvbnZlcnRlcl19KX1mdW5jdGlvbiBoZWFwMzJWZWN0b3JUb0FycmF5KGNvdW50LGZpcnN0RWxlbWVudCl7dmFyIGFycmF5PVtdO2Zvcih2YXIgaT0wO2k8Y291bnQ7aSsrKXthcnJheS5wdXNoKEhFQVBVMzJbZmlyc3RFbGVtZW50K2kqND4+Ml0pfXJldHVybiBhcnJheX1mdW5jdGlvbiBydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyl7d2hpbGUoZGVzdHJ1Y3RvcnMubGVuZ3RoKXt2YXIgcHRyPWRlc3RydWN0b3JzLnBvcCgpO3ZhciBkZWw9ZGVzdHJ1Y3RvcnMucG9wKCk7ZGVsKHB0cil9fWZ1bmN0aW9uIG5ld0Z1bmMoY29uc3RydWN0b3IsYXJndW1lbnRMaXN0KXtpZighKGNvbnN0cnVjdG9yIGluc3RhbmNlb2YgRnVuY3Rpb24pKXt0aHJvdyBuZXcgVHlwZUVycm9yKGBuZXdfIGNhbGxlZCB3aXRoIGNvbnN0cnVjdG9yIHR5cGUgJHt0eXBlb2YgY29uc3RydWN0b3J9IHdoaWNoIGlzIG5vdCBhIGZ1bmN0aW9uYCl9dmFyIGR1bW15PWNyZWF0ZU5hbWVkRnVuY3Rpb24oY29uc3RydWN0b3IubmFtZXx8XCJ1bmtub3duRnVuY3Rpb25OYW1lXCIsZnVuY3Rpb24oKXt9KTtkdW1teS5wcm90b3R5cGU9Y29uc3RydWN0b3IucHJvdG90eXBlO3ZhciBvYmo9bmV3IGR1bW15O3ZhciByPWNvbnN0cnVjdG9yLmFwcGx5KG9iaixhcmd1bWVudExpc3QpO3JldHVybiByIGluc3RhbmNlb2YgT2JqZWN0P3I6b2JqfWZ1bmN0aW9uIGNyYWZ0SW52b2tlckZ1bmN0aW9uKGh1bWFuTmFtZSxhcmdUeXBlcyxjbGFzc1R5cGUsY3BwSW52b2tlckZ1bmMsY3BwVGFyZ2V0RnVuYyxpc0FzeW5jKXt2YXIgYXJnQ291bnQ9YXJnVHlwZXMubGVuZ3RoO2lmKGFyZ0NvdW50PDIpe3Rocm93QmluZGluZ0Vycm9yKFwiYXJnVHlwZXMgYXJyYXkgc2l6ZSBtaXNtYXRjaCEgTXVzdCBhdCBsZWFzdCBnZXQgcmV0dXJuIHZhbHVlIGFuZCAndGhpcycgdHlwZXMhXCIpfXZhciBpc0NsYXNzTWV0aG9kRnVuYz1hcmdUeXBlc1sxXSE9PW51bGwmJmNsYXNzVHlwZSE9PW51bGw7dmFyIG5lZWRzRGVzdHJ1Y3RvclN0YWNrPWZhbHNlO2Zvcih2YXIgaT0xO2k8YXJnVHlwZXMubGVuZ3RoOysraSl7aWYoYXJnVHlwZXNbaV0hPT1udWxsJiZhcmdUeXBlc1tpXS5kZXN0cnVjdG9yRnVuY3Rpb249PT11bmRlZmluZWQpe25lZWRzRGVzdHJ1Y3RvclN0YWNrPXRydWU7YnJlYWt9fXZhciByZXR1cm5zPWFyZ1R5cGVzWzBdLm5hbWUhPT1cInZvaWRcIjt2YXIgYXJnc0xpc3Q9XCJcIjt2YXIgYXJnc0xpc3RXaXJlZD1cIlwiO2Zvcih2YXIgaT0wO2k8YXJnQ291bnQtMjsrK2kpe2FyZ3NMaXN0Kz0oaSE9PTA/XCIsIFwiOlwiXCIpK1wiYXJnXCIraTthcmdzTGlzdFdpcmVkKz0oaSE9PTA/XCIsIFwiOlwiXCIpK1wiYXJnXCIraStcIldpcmVkXCJ9dmFyIGludm9rZXJGbkJvZHk9YFxcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICR7bWFrZUxlZ2FsRnVuY3Rpb25OYW1lKGh1bWFuTmFtZSl9KCR7YXJnc0xpc3R9KSB7XFxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gJHthcmdDb3VudC0yfSkge1xcbiAgICAgICAgICB0aHJvd0JpbmRpbmdFcnJvcignZnVuY3Rpb24gJHtodW1hbk5hbWV9IGNhbGxlZCB3aXRoICR7YXJndW1lbnRzLmxlbmd0aH0gYXJndW1lbnRzLCBleHBlY3RlZCAke2FyZ0NvdW50LTJ9IGFyZ3MhJyk7XFxuICAgICAgICB9YDtpZihuZWVkc0Rlc3RydWN0b3JTdGFjayl7aW52b2tlckZuQm9keSs9XCJ2YXIgZGVzdHJ1Y3RvcnMgPSBbXTtcXG5cIn12YXIgZHRvclN0YWNrPW5lZWRzRGVzdHJ1Y3RvclN0YWNrP1wiZGVzdHJ1Y3RvcnNcIjpcIm51bGxcIjt2YXIgYXJnczE9W1widGhyb3dCaW5kaW5nRXJyb3JcIixcImludm9rZXJcIixcImZuXCIsXCJydW5EZXN0cnVjdG9yc1wiLFwicmV0VHlwZVwiLFwiY2xhc3NQYXJhbVwiXTt2YXIgYXJnczI9W3Rocm93QmluZGluZ0Vycm9yLGNwcEludm9rZXJGdW5jLGNwcFRhcmdldEZ1bmMscnVuRGVzdHJ1Y3RvcnMsYXJnVHlwZXNbMF0sYXJnVHlwZXNbMV1dO2lmKGlzQ2xhc3NNZXRob2RGdW5jKXtpbnZva2VyRm5Cb2R5Kz1cInZhciB0aGlzV2lyZWQgPSBjbGFzc1BhcmFtLnRvV2lyZVR5cGUoXCIrZHRvclN0YWNrK1wiLCB0aGlzKTtcXG5cIn1mb3IodmFyIGk9MDtpPGFyZ0NvdW50LTI7KytpKXtpbnZva2VyRm5Cb2R5Kz1cInZhciBhcmdcIitpK1wiV2lyZWQgPSBhcmdUeXBlXCIraStcIi50b1dpcmVUeXBlKFwiK2R0b3JTdGFjaytcIiwgYXJnXCIraStcIik7IC8vIFwiK2FyZ1R5cGVzW2krMl0ubmFtZStcIlxcblwiO2FyZ3MxLnB1c2goXCJhcmdUeXBlXCIraSk7YXJnczIucHVzaChhcmdUeXBlc1tpKzJdKX1pZihpc0NsYXNzTWV0aG9kRnVuYyl7YXJnc0xpc3RXaXJlZD1cInRoaXNXaXJlZFwiKyhhcmdzTGlzdFdpcmVkLmxlbmd0aD4wP1wiLCBcIjpcIlwiKSthcmdzTGlzdFdpcmVkfWludm9rZXJGbkJvZHkrPShyZXR1cm5zfHxpc0FzeW5jP1widmFyIHJ2ID0gXCI6XCJcIikrXCJpbnZva2VyKGZuXCIrKGFyZ3NMaXN0V2lyZWQubGVuZ3RoPjA/XCIsIFwiOlwiXCIpK2FyZ3NMaXN0V2lyZWQrXCIpO1xcblwiO2lmKG5lZWRzRGVzdHJ1Y3RvclN0YWNrKXtpbnZva2VyRm5Cb2R5Kz1cInJ1bkRlc3RydWN0b3JzKGRlc3RydWN0b3JzKTtcXG5cIn1lbHNle2Zvcih2YXIgaT1pc0NsYXNzTWV0aG9kRnVuYz8xOjI7aTxhcmdUeXBlcy5sZW5ndGg7KytpKXt2YXIgcGFyYW1OYW1lPWk9PT0xP1widGhpc1dpcmVkXCI6XCJhcmdcIisoaS0yKStcIldpcmVkXCI7aWYoYXJnVHlwZXNbaV0uZGVzdHJ1Y3RvckZ1bmN0aW9uIT09bnVsbCl7aW52b2tlckZuQm9keSs9cGFyYW1OYW1lK1wiX2R0b3IoXCIrcGFyYW1OYW1lK1wiKTsgLy8gXCIrYXJnVHlwZXNbaV0ubmFtZStcIlxcblwiO2FyZ3MxLnB1c2gocGFyYW1OYW1lK1wiX2R0b3JcIik7YXJnczIucHVzaChhcmdUeXBlc1tpXS5kZXN0cnVjdG9yRnVuY3Rpb24pfX19aWYocmV0dXJucyl7aW52b2tlckZuQm9keSs9XCJ2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpO1xcblwiK1wicmV0dXJuIHJldDtcXG5cIn1lbHNle31pbnZva2VyRm5Cb2R5Kz1cIn1cXG5cIjthcmdzMS5wdXNoKGludm9rZXJGbkJvZHkpO3JldHVybiBuZXdGdW5jKEZ1bmN0aW9uLGFyZ3MxKS5hcHBseShudWxsLGFyZ3MyKX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9jbGFzc19jb25zdHJ1Y3RvcihyYXdDbGFzc1R5cGUsYXJnQ291bnQscmF3QXJnVHlwZXNBZGRyLGludm9rZXJTaWduYXR1cmUsaW52b2tlcixyYXdDb25zdHJ1Y3Rvcil7YXNzZXJ0KGFyZ0NvdW50PjApO3ZhciByYXdBcmdUeXBlcz1oZWFwMzJWZWN0b3JUb0FycmF5KGFyZ0NvdW50LHJhd0FyZ1R5cGVzQWRkcik7aW52b2tlcj1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihpbnZva2VyU2lnbmF0dXJlLGludm9rZXIpO3doZW5EZXBlbmRlbnRUeXBlc0FyZVJlc29sdmVkKFtdLFtyYXdDbGFzc1R5cGVdLGZ1bmN0aW9uKGNsYXNzVHlwZSl7Y2xhc3NUeXBlPWNsYXNzVHlwZVswXTt2YXIgaHVtYW5OYW1lPWBjb25zdHJ1Y3RvciAke2NsYXNzVHlwZS5uYW1lfWA7aWYodW5kZWZpbmVkPT09Y2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3Rvcl9ib2R5KXtjbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yX2JvZHk9W119aWYodW5kZWZpbmVkIT09Y2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3Rvcl9ib2R5W2FyZ0NvdW50LTFdKXt0aHJvdyBuZXcgQmluZGluZ0Vycm9yKGBDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgY29uc3RydWN0b3JzIHdpdGggaWRlbnRpY2FsIG51bWJlciBvZiBwYXJhbWV0ZXJzICgke2FyZ0NvdW50LTF9KSBmb3IgY2xhc3MgJyR7Y2xhc3NUeXBlLm5hbWV9JyEgT3ZlcmxvYWQgcmVzb2x1dGlvbiBpcyBjdXJyZW50bHkgb25seSBwZXJmb3JtZWQgdXNpbmcgdGhlIHBhcmFtZXRlciBjb3VudCwgbm90IGFjdHVhbCB0eXBlIGluZm8hYCl9Y2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3Rvcl9ib2R5W2FyZ0NvdW50LTFdPSgpPT57dGhyb3dVbmJvdW5kVHlwZUVycm9yKGBDYW5ub3QgY29uc3RydWN0ICR7Y2xhc3NUeXBlLm5hbWV9IGR1ZSB0byB1bmJvdW5kIHR5cGVzYCxyYXdBcmdUeXBlcyl9O3doZW5EZXBlbmRlbnRUeXBlc0FyZVJlc29sdmVkKFtdLHJhd0FyZ1R5cGVzLGZ1bmN0aW9uKGFyZ1R5cGVzKXthcmdUeXBlcy5zcGxpY2UoMSwwLG51bGwpO2NsYXNzVHlwZS5yZWdpc3RlcmVkQ2xhc3MuY29uc3RydWN0b3JfYm9keVthcmdDb3VudC0xXT1jcmFmdEludm9rZXJGdW5jdGlvbihodW1hbk5hbWUsYXJnVHlwZXMsbnVsbCxpbnZva2VyLHJhd0NvbnN0cnVjdG9yKTtyZXR1cm5bXX0pO3JldHVybltdfSl9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfZnVuY3Rpb24ocmF3Q2xhc3NUeXBlLG1ldGhvZE5hbWUsYXJnQ291bnQscmF3QXJnVHlwZXNBZGRyLGludm9rZXJTaWduYXR1cmUscmF3SW52b2tlcixjb250ZXh0LGlzUHVyZVZpcnR1YWwsaXNBc3luYyl7dmFyIHJhd0FyZ1R5cGVzPWhlYXAzMlZlY3RvclRvQXJyYXkoYXJnQ291bnQscmF3QXJnVHlwZXNBZGRyKTttZXRob2ROYW1lPXJlYWRMYXRpbjFTdHJpbmcobWV0aG9kTmFtZSk7cmF3SW52b2tlcj1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihpbnZva2VyU2lnbmF0dXJlLHJhd0ludm9rZXIpO3doZW5EZXBlbmRlbnRUeXBlc0FyZVJlc29sdmVkKFtdLFtyYXdDbGFzc1R5cGVdLGZ1bmN0aW9uKGNsYXNzVHlwZSl7Y2xhc3NUeXBlPWNsYXNzVHlwZVswXTt2YXIgaHVtYW5OYW1lPWAke2NsYXNzVHlwZS5uYW1lfS4ke21ldGhvZE5hbWV9YDtpZihtZXRob2ROYW1lLnN0YXJ0c1dpdGgoXCJAQFwiKSl7bWV0aG9kTmFtZT1TeW1ib2xbbWV0aG9kTmFtZS5zdWJzdHJpbmcoMildfWlmKGlzUHVyZVZpcnR1YWwpe2NsYXNzVHlwZS5yZWdpc3RlcmVkQ2xhc3MucHVyZVZpcnR1YWxGdW5jdGlvbnMucHVzaChtZXRob2ROYW1lKX1mdW5jdGlvbiB1bmJvdW5kVHlwZXNIYW5kbGVyKCl7dGhyb3dVbmJvdW5kVHlwZUVycm9yKGBDYW5ub3QgY2FsbCAke2h1bWFuTmFtZX0gZHVlIHRvIHVuYm91bmQgdHlwZXNgLHJhd0FyZ1R5cGVzKX12YXIgcHJvdG89Y2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5pbnN0YW5jZVByb3RvdHlwZTt2YXIgbWV0aG9kPXByb3RvW21ldGhvZE5hbWVdO2lmKHVuZGVmaW5lZD09PW1ldGhvZHx8dW5kZWZpbmVkPT09bWV0aG9kLm92ZXJsb2FkVGFibGUmJm1ldGhvZC5jbGFzc05hbWUhPT1jbGFzc1R5cGUubmFtZSYmbWV0aG9kLmFyZ0NvdW50PT09YXJnQ291bnQtMil7dW5ib3VuZFR5cGVzSGFuZGxlci5hcmdDb3VudD1hcmdDb3VudC0yO3VuYm91bmRUeXBlc0hhbmRsZXIuY2xhc3NOYW1lPWNsYXNzVHlwZS5uYW1lO3Byb3RvW21ldGhvZE5hbWVdPXVuYm91bmRUeXBlc0hhbmRsZXJ9ZWxzZXtlbnN1cmVPdmVybG9hZFRhYmxlKHByb3RvLG1ldGhvZE5hbWUsaHVtYW5OYW1lKTtwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlW2FyZ0NvdW50LTJdPXVuYm91bmRUeXBlc0hhbmRsZXJ9d2hlbkRlcGVuZGVudFR5cGVzQXJlUmVzb2x2ZWQoW10scmF3QXJnVHlwZXMsZnVuY3Rpb24oYXJnVHlwZXMpe3ZhciBtZW1iZXJGdW5jdGlvbj1jcmFmdEludm9rZXJGdW5jdGlvbihodW1hbk5hbWUsYXJnVHlwZXMsY2xhc3NUeXBlLHJhd0ludm9rZXIsY29udGV4dCxpc0FzeW5jKTtpZih1bmRlZmluZWQ9PT1wcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlKXttZW1iZXJGdW5jdGlvbi5hcmdDb3VudD1hcmdDb3VudC0yO3Byb3RvW21ldGhvZE5hbWVdPW1lbWJlckZ1bmN0aW9ufWVsc2V7cHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZVthcmdDb3VudC0yXT1tZW1iZXJGdW5jdGlvbn1yZXR1cm5bXX0pO3JldHVybltdfSl9ZnVuY3Rpb24gSGFuZGxlQWxsb2NhdG9yKCl7dGhpcy5hbGxvY2F0ZWQ9W3VuZGVmaW5lZF07dGhpcy5mcmVlbGlzdD1bXTt0aGlzLmdldD1mdW5jdGlvbihpZCl7cmV0dXJuIHRoaXMuYWxsb2NhdGVkW2lkXX07dGhpcy5oYXM9ZnVuY3Rpb24oaWQpe3JldHVybiB0aGlzLmFsbG9jYXRlZFtpZF0hPT11bmRlZmluZWR9O3RoaXMuYWxsb2NhdGU9ZnVuY3Rpb24oaGFuZGxlKXt2YXIgaWQ9dGhpcy5mcmVlbGlzdC5wb3AoKXx8dGhpcy5hbGxvY2F0ZWQubGVuZ3RoO3RoaXMuYWxsb2NhdGVkW2lkXT1oYW5kbGU7cmV0dXJuIGlkfTt0aGlzLmZyZWU9ZnVuY3Rpb24oaWQpe3RoaXMuYWxsb2NhdGVkW2lkXT11bmRlZmluZWQ7dGhpcy5mcmVlbGlzdC5wdXNoKGlkKX19dmFyIGVtdmFsX2hhbmRsZXM9bmV3IEhhbmRsZUFsbG9jYXRvcjtmdW5jdGlvbiBfX2VtdmFsX2RlY3JlZihoYW5kbGUpe2lmKGhhbmRsZT49ZW12YWxfaGFuZGxlcy5yZXNlcnZlZCYmMD09PS0tZW12YWxfaGFuZGxlcy5nZXQoaGFuZGxlKS5yZWZjb3VudCl7ZW12YWxfaGFuZGxlcy5mcmVlKGhhbmRsZSl9fWZ1bmN0aW9uIGNvdW50X2VtdmFsX2hhbmRsZXMoKXt2YXIgY291bnQ9MDtmb3IodmFyIGk9ZW12YWxfaGFuZGxlcy5yZXNlcnZlZDtpPGVtdmFsX2hhbmRsZXMuYWxsb2NhdGVkLmxlbmd0aDsrK2kpe2lmKGVtdmFsX2hhbmRsZXMuYWxsb2NhdGVkW2ldIT09dW5kZWZpbmVkKXsrK2NvdW50fX1yZXR1cm4gY291bnR9ZnVuY3Rpb24gaW5pdF9lbXZhbCgpe2VtdmFsX2hhbmRsZXMuYWxsb2NhdGVkLnB1c2goe3ZhbHVlOnVuZGVmaW5lZH0se3ZhbHVlOm51bGx9LHt2YWx1ZTp0cnVlfSx7dmFsdWU6ZmFsc2V9KTtlbXZhbF9oYW5kbGVzLnJlc2VydmVkPWVtdmFsX2hhbmRsZXMuYWxsb2NhdGVkLmxlbmd0aDtNb2R1bGVbXCJjb3VudF9lbXZhbF9oYW5kbGVzXCJdPWNvdW50X2VtdmFsX2hhbmRsZXN9dmFyIEVtdmFsPXt0b1ZhbHVlOmhhbmRsZT0+e2lmKCFoYW5kbGUpe3Rocm93QmluZGluZ0Vycm9yKFwiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gXCIraGFuZGxlKX1yZXR1cm4gZW12YWxfaGFuZGxlcy5nZXQoaGFuZGxlKS52YWx1ZX0sdG9IYW5kbGU6dmFsdWU9Pntzd2l0Y2godmFsdWUpe2Nhc2UgdW5kZWZpbmVkOnJldHVybiAxO2Nhc2UgbnVsbDpyZXR1cm4gMjtjYXNlIHRydWU6cmV0dXJuIDM7Y2FzZSBmYWxzZTpyZXR1cm4gNDtkZWZhdWx0OntyZXR1cm4gZW12YWxfaGFuZGxlcy5hbGxvY2F0ZSh7cmVmY291bnQ6MSx2YWx1ZTp2YWx1ZX0pfX19fTtmdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9lbXZhbChyYXdUeXBlLG5hbWUpe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtyZWdpc3RlclR5cGUocmF3VHlwZSx7bmFtZTpuYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZnVuY3Rpb24oaGFuZGxlKXt2YXIgcnY9RW12YWwudG9WYWx1ZShoYW5kbGUpO19fZW12YWxfZGVjcmVmKGhhbmRsZSk7cmV0dXJuIHJ2fSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7cmV0dXJuIEVtdmFsLnRvSGFuZGxlKHZhbHVlKX0sXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOnNpbXBsZVJlYWRWYWx1ZUZyb21Qb2ludGVyLGRlc3RydWN0b3JGdW5jdGlvbjpudWxsfSl9ZnVuY3Rpb24gZW1iaW5kUmVwcih2KXtpZih2PT09bnVsbCl7cmV0dXJuXCJudWxsXCJ9dmFyIHQ9dHlwZW9mIHY7aWYodD09PVwib2JqZWN0XCJ8fHQ9PT1cImFycmF5XCJ8fHQ9PT1cImZ1bmN0aW9uXCIpe3JldHVybiB2LnRvU3RyaW5nKCl9ZWxzZXtyZXR1cm5cIlwiK3Z9fWZ1bmN0aW9uIGZsb2F0UmVhZFZhbHVlRnJvbVBvaW50ZXIobmFtZSxzaGlmdCl7c3dpdGNoKHNoaWZ0KXtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKHBvaW50ZXIpe3JldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKEhFQVBGMzJbcG9pbnRlcj4+Ml0pfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKHBvaW50ZXIpe3JldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKEhFQVBGNjRbcG9pbnRlcj4+M10pfTtkZWZhdWx0OnRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmtub3duIGZsb2F0IHR5cGU6IFwiK25hbWUpfX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9mbG9hdChyYXdUeXBlLG5hbWUsc2l6ZSl7dmFyIHNoaWZ0PWdldFNoaWZ0RnJvbVNpemUoc2l6ZSk7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3JlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsXCJmcm9tV2lyZVR5cGVcIjpmdW5jdGlvbih2YWx1ZSl7cmV0dXJuIHZhbHVlfSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7cmV0dXJuIHZhbHVlfSxcImFyZ1BhY2tBZHZhbmNlXCI6OCxcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCI6ZmxvYXRSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0KSxkZXN0cnVjdG9yRnVuY3Rpb246bnVsbH0pfWZ1bmN0aW9uIGludGVnZXJSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0LHNpZ25lZCl7c3dpdGNoKHNoaWZ0KXtjYXNlIDA6cmV0dXJuIHNpZ25lZD9mdW5jdGlvbiByZWFkUzhGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUDhbcG9pbnRlcl19OmZ1bmN0aW9uIHJlYWRVOEZyb21Qb2ludGVyKHBvaW50ZXIpe3JldHVybiBIRUFQVThbcG9pbnRlcl19O2Nhc2UgMTpyZXR1cm4gc2lnbmVkP2Z1bmN0aW9uIHJlYWRTMTZGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUDE2W3BvaW50ZXI+PjFdfTpmdW5jdGlvbiByZWFkVTE2RnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIEhFQVBVMTZbcG9pbnRlcj4+MV19O2Nhc2UgMjpyZXR1cm4gc2lnbmVkP2Z1bmN0aW9uIHJlYWRTMzJGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUDMyW3BvaW50ZXI+PjJdfTpmdW5jdGlvbiByZWFkVTMyRnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIEhFQVBVMzJbcG9pbnRlcj4+Ml19O2RlZmF1bHQ6dGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gaW50ZWdlciB0eXBlOiBcIituYW1lKX19ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfaW50ZWdlcihwcmltaXRpdmVUeXBlLG5hbWUsc2l6ZSxtaW5SYW5nZSxtYXhSYW5nZSl7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO2lmKG1heFJhbmdlPT09LTEpe21heFJhbmdlPTQyOTQ5NjcyOTV9dmFyIHNoaWZ0PWdldFNoaWZ0RnJvbVNpemUoc2l6ZSk7dmFyIGZyb21XaXJlVHlwZT12YWx1ZT0+dmFsdWU7aWYobWluUmFuZ2U9PT0wKXt2YXIgYml0c2hpZnQ9MzItOCpzaXplO2Zyb21XaXJlVHlwZT12YWx1ZT0+dmFsdWU8PGJpdHNoaWZ0Pj4+Yml0c2hpZnR9dmFyIGlzVW5zaWduZWRUeXBlPW5hbWUuaW5jbHVkZXMoXCJ1bnNpZ25lZFwiKTt2YXIgY2hlY2tBc3NlcnRpb25zPSh2YWx1ZSx0b1R5cGVOYW1lKT0+e307dmFyIHRvV2lyZVR5cGU7aWYoaXNVbnNpZ25lZFR5cGUpe3RvV2lyZVR5cGU9ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsdmFsdWUpe2NoZWNrQXNzZXJ0aW9ucyh2YWx1ZSx0aGlzLm5hbWUpO3JldHVybiB2YWx1ZT4+PjB9fWVsc2V7dG9XaXJlVHlwZT1mdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7Y2hlY2tBc3NlcnRpb25zKHZhbHVlLHRoaXMubmFtZSk7cmV0dXJuIHZhbHVlfX1yZWdpc3RlclR5cGUocHJpbWl0aXZlVHlwZSx7bmFtZTpuYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZnJvbVdpcmVUeXBlLFwidG9XaXJlVHlwZVwiOnRvV2lyZVR5cGUsXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOmludGVnZXJSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0LG1pblJhbmdlIT09MCksZGVzdHJ1Y3RvckZ1bmN0aW9uOm51bGx9KX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9tZW1vcnlfdmlldyhyYXdUeXBlLGRhdGFUeXBlSW5kZXgsbmFtZSl7dmFyIHR5cGVNYXBwaW5nPVtJbnQ4QXJyYXksVWludDhBcnJheSxJbnQxNkFycmF5LFVpbnQxNkFycmF5LEludDMyQXJyYXksVWludDMyQXJyYXksRmxvYXQzMkFycmF5LEZsb2F0NjRBcnJheV07dmFyIFRBPXR5cGVNYXBwaW5nW2RhdGFUeXBlSW5kZXhdO2Z1bmN0aW9uIGRlY29kZU1lbW9yeVZpZXcoaGFuZGxlKXtoYW5kbGU9aGFuZGxlPj4yO3ZhciBoZWFwPUhFQVBVMzI7dmFyIHNpemU9aGVhcFtoYW5kbGVdO3ZhciBkYXRhPWhlYXBbaGFuZGxlKzFdO3JldHVybiBuZXcgVEEoaGVhcC5idWZmZXIsZGF0YSxzaXplKX1uYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmRlY29kZU1lbW9yeVZpZXcsXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOmRlY29kZU1lbW9yeVZpZXd9LHtpZ25vcmVEdXBsaWNhdGVSZWdpc3RyYXRpb25zOnRydWV9KX1mdW5jdGlvbiBzdHJpbmdUb1VURjhBcnJheShzdHIsaGVhcCxvdXRJZHgsbWF4Qnl0ZXNUb1dyaXRlKXtpZighKG1heEJ5dGVzVG9Xcml0ZT4wKSlyZXR1cm4gMDt2YXIgc3RhcnRJZHg9b3V0SWR4O3ZhciBlbmRJZHg9b3V0SWR4K21heEJ5dGVzVG9Xcml0ZS0xO2Zvcih2YXIgaT0wO2k8c3RyLmxlbmd0aDsrK2kpe3ZhciB1PXN0ci5jaGFyQ29kZUF0KGkpO2lmKHU+PTU1Mjk2JiZ1PD01NzM0Myl7dmFyIHUxPXN0ci5jaGFyQ29kZUF0KCsraSk7dT02NTUzNisoKHUmMTAyMyk8PDEwKXx1MSYxMDIzfWlmKHU8PTEyNyl7aWYob3V0SWR4Pj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109dX1lbHNlIGlmKHU8PTIwNDcpe2lmKG91dElkeCsxPj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109MTkyfHU+PjY7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9ZWxzZSBpZih1PD02NTUzNSl7aWYob3V0SWR4KzI+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT0yMjR8dT4+MTI7aGVhcFtvdXRJZHgrK109MTI4fHU+PjYmNjM7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9ZWxzZXtpZihvdXRJZHgrMz49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPTI0MHx1Pj4xODtoZWFwW291dElkeCsrXT0xMjh8dT4+MTImNjM7aGVhcFtvdXRJZHgrK109MTI4fHU+PjYmNjM7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9fWhlYXBbb3V0SWR4XT0wO3JldHVybiBvdXRJZHgtc3RhcnRJZHh9ZnVuY3Rpb24gc3RyaW5nVG9VVEY4KHN0cixvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKXtyZXR1cm4gc3RyaW5nVG9VVEY4QXJyYXkoc3RyLEhFQVBVOCxvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKX1mdW5jdGlvbiBsZW5ndGhCeXRlc1VURjgoc3RyKXt2YXIgbGVuPTA7Zm9yKHZhciBpPTA7aTxzdHIubGVuZ3RoOysraSl7dmFyIGM9c3RyLmNoYXJDb2RlQXQoaSk7aWYoYzw9MTI3KXtsZW4rK31lbHNlIGlmKGM8PTIwNDcpe2xlbis9Mn1lbHNlIGlmKGM+PTU1Mjk2JiZjPD01NzM0Myl7bGVuKz00OysraX1lbHNle2xlbis9M319cmV0dXJuIGxlbn12YXIgVVRGOERlY29kZXI9dHlwZW9mIFRleHREZWNvZGVyIT1cInVuZGVmaW5lZFwiP25ldyBUZXh0RGVjb2RlcihcInV0ZjhcIik6dW5kZWZpbmVkO2Z1bmN0aW9uIFVURjhBcnJheVRvU3RyaW5nKGhlYXBPckFycmF5LGlkeCxtYXhCeXRlc1RvUmVhZCl7dmFyIGVuZElkeD1pZHgrbWF4Qnl0ZXNUb1JlYWQ7dmFyIGVuZFB0cj1pZHg7d2hpbGUoaGVhcE9yQXJyYXlbZW5kUHRyXSYmIShlbmRQdHI+PWVuZElkeCkpKytlbmRQdHI7aWYoZW5kUHRyLWlkeD4xNiYmaGVhcE9yQXJyYXkuYnVmZmVyJiZVVEY4RGVjb2Rlcil7cmV0dXJuIFVURjhEZWNvZGVyLmRlY29kZShoZWFwT3JBcnJheS5zdWJhcnJheShpZHgsZW5kUHRyKSl9dmFyIHN0cj1cIlwiO3doaWxlKGlkeDxlbmRQdHIpe3ZhciB1MD1oZWFwT3JBcnJheVtpZHgrK107aWYoISh1MCYxMjgpKXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUodTApO2NvbnRpbnVlfXZhciB1MT1oZWFwT3JBcnJheVtpZHgrK10mNjM7aWYoKHUwJjIyNCk9PTE5Mil7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKCh1MCYzMSk8PDZ8dTEpO2NvbnRpbnVlfXZhciB1Mj1oZWFwT3JBcnJheVtpZHgrK10mNjM7aWYoKHUwJjI0MCk9PTIyNCl7dTA9KHUwJjE1KTw8MTJ8dTE8PDZ8dTJ9ZWxzZXt1MD0odTAmNyk8PDE4fHUxPDwxMnx1Mjw8NnxoZWFwT3JBcnJheVtpZHgrK10mNjN9aWYodTA8NjU1MzYpe3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSh1MCl9ZWxzZXt2YXIgY2g9dTAtNjU1MzY7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2fGNoPj4xMCw1NjMyMHxjaCYxMDIzKX19cmV0dXJuIHN0cn1mdW5jdGlvbiBVVEY4VG9TdHJpbmcocHRyLG1heEJ5dGVzVG9SZWFkKXtyZXR1cm4gcHRyP1VURjhBcnJheVRvU3RyaW5nKEhFQVBVOCxwdHIsbWF4Qnl0ZXNUb1JlYWQpOlwiXCJ9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfc3RkX3N0cmluZyhyYXdUeXBlLG5hbWUpe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTt2YXIgc3RkU3RyaW5nSXNVVEY4PW5hbWU9PT1cInN0ZDo6c3RyaW5nXCI7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKHZhbHVlKXt2YXIgbGVuZ3RoPUhFQVBVMzJbdmFsdWU+PjJdO3ZhciBwYXlsb2FkPXZhbHVlKzQ7dmFyIHN0cjtpZihzdGRTdHJpbmdJc1VURjgpe3ZhciBkZWNvZGVTdGFydFB0cj1wYXlsb2FkO2Zvcih2YXIgaT0wO2k8PWxlbmd0aDsrK2kpe3ZhciBjdXJyZW50Qnl0ZVB0cj1wYXlsb2FkK2k7aWYoaT09bGVuZ3RofHxIRUFQVThbY3VycmVudEJ5dGVQdHJdPT0wKXt2YXIgbWF4UmVhZD1jdXJyZW50Qnl0ZVB0ci1kZWNvZGVTdGFydFB0cjt2YXIgc3RyaW5nU2VnbWVudD1VVEY4VG9TdHJpbmcoZGVjb2RlU3RhcnRQdHIsbWF4UmVhZCk7aWYoc3RyPT09dW5kZWZpbmVkKXtzdHI9c3RyaW5nU2VnbWVudH1lbHNle3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSgwKTtzdHIrPXN0cmluZ1NlZ21lbnR9ZGVjb2RlU3RhcnRQdHI9Y3VycmVudEJ5dGVQdHIrMX19fWVsc2V7dmFyIGE9bmV3IEFycmF5KGxlbmd0aCk7Zm9yKHZhciBpPTA7aTxsZW5ndGg7KytpKXthW2ldPVN0cmluZy5mcm9tQ2hhckNvZGUoSEVBUFU4W3BheWxvYWQraV0pfXN0cj1hLmpvaW4oXCJcIil9X2ZyZWUodmFsdWUpO3JldHVybiBzdHJ9LFwidG9XaXJlVHlwZVwiOmZ1bmN0aW9uKGRlc3RydWN0b3JzLHZhbHVlKXtpZih2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKXt2YWx1ZT1uZXcgVWludDhBcnJheSh2YWx1ZSl9dmFyIGxlbmd0aDt2YXIgdmFsdWVJc09mVHlwZVN0cmluZz10eXBlb2YgdmFsdWU9PVwic3RyaW5nXCI7aWYoISh2YWx1ZUlzT2ZUeXBlU3RyaW5nfHx2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXl8fHZhbHVlIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXl8fHZhbHVlIGluc3RhbmNlb2YgSW50OEFycmF5KSl7dGhyb3dCaW5kaW5nRXJyb3IoXCJDYW5ub3QgcGFzcyBub24tc3RyaW5nIHRvIHN0ZDo6c3RyaW5nXCIpfWlmKHN0ZFN0cmluZ0lzVVRGOCYmdmFsdWVJc09mVHlwZVN0cmluZyl7bGVuZ3RoPWxlbmd0aEJ5dGVzVVRGOCh2YWx1ZSl9ZWxzZXtsZW5ndGg9dmFsdWUubGVuZ3RofXZhciBiYXNlPV9tYWxsb2MoNCtsZW5ndGgrMSk7dmFyIHB0cj1iYXNlKzQ7SEVBUFUzMltiYXNlPj4yXT1sZW5ndGg7aWYoc3RkU3RyaW5nSXNVVEY4JiZ2YWx1ZUlzT2ZUeXBlU3RyaW5nKXtzdHJpbmdUb1VURjgodmFsdWUscHRyLGxlbmd0aCsxKX1lbHNle2lmKHZhbHVlSXNPZlR5cGVTdHJpbmcpe2Zvcih2YXIgaT0wO2k8bGVuZ3RoOysraSl7dmFyIGNoYXJDb2RlPXZhbHVlLmNoYXJDb2RlQXQoaSk7aWYoY2hhckNvZGU+MjU1KXtfZnJlZShwdHIpO3Rocm93QmluZGluZ0Vycm9yKFwiU3RyaW5nIGhhcyBVVEYtMTYgY29kZSB1bml0cyB0aGF0IGRvIG5vdCBmaXQgaW4gOCBiaXRzXCIpfUhFQVBVOFtwdHIraV09Y2hhckNvZGV9fWVsc2V7Zm9yKHZhciBpPTA7aTxsZW5ndGg7KytpKXtIRUFQVThbcHRyK2ldPXZhbHVlW2ldfX19aWYoZGVzdHJ1Y3RvcnMhPT1udWxsKXtkZXN0cnVjdG9ycy5wdXNoKF9mcmVlLGJhc2UpfXJldHVybiBiYXNlfSxcImFyZ1BhY2tBZHZhbmNlXCI6OCxcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCI6c2ltcGxlUmVhZFZhbHVlRnJvbVBvaW50ZXIsZGVzdHJ1Y3RvckZ1bmN0aW9uOmZ1bmN0aW9uKHB0cil7X2ZyZWUocHRyKX19KX12YXIgVVRGMTZEZWNvZGVyPXR5cGVvZiBUZXh0RGVjb2RlciE9XCJ1bmRlZmluZWRcIj9uZXcgVGV4dERlY29kZXIoXCJ1dGYtMTZsZVwiKTp1bmRlZmluZWQ7ZnVuY3Rpb24gVVRGMTZUb1N0cmluZyhwdHIsbWF4Qnl0ZXNUb1JlYWQpe3ZhciBlbmRQdHI9cHRyO3ZhciBpZHg9ZW5kUHRyPj4xO3ZhciBtYXhJZHg9aWR4K21heEJ5dGVzVG9SZWFkLzI7d2hpbGUoIShpZHg+PW1heElkeCkmJkhFQVBVMTZbaWR4XSkrK2lkeDtlbmRQdHI9aWR4PDwxO2lmKGVuZFB0ci1wdHI+MzImJlVURjE2RGVjb2RlcilyZXR1cm4gVVRGMTZEZWNvZGVyLmRlY29kZShIRUFQVTguc3ViYXJyYXkocHRyLGVuZFB0cikpO3ZhciBzdHI9XCJcIjtmb3IodmFyIGk9MDshKGk+PW1heEJ5dGVzVG9SZWFkLzIpOysraSl7dmFyIGNvZGVVbml0PUhFQVAxNltwdHIraSoyPj4xXTtpZihjb2RlVW5pdD09MClicmVhaztzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVVuaXQpfXJldHVybiBzdHJ9ZnVuY3Rpb24gc3RyaW5nVG9VVEYxNihzdHIsb3V0UHRyLG1heEJ5dGVzVG9Xcml0ZSl7aWYobWF4Qnl0ZXNUb1dyaXRlPT09dW5kZWZpbmVkKXttYXhCeXRlc1RvV3JpdGU9MjE0NzQ4MzY0N31pZihtYXhCeXRlc1RvV3JpdGU8MilyZXR1cm4gMDttYXhCeXRlc1RvV3JpdGUtPTI7dmFyIHN0YXJ0UHRyPW91dFB0cjt2YXIgbnVtQ2hhcnNUb1dyaXRlPW1heEJ5dGVzVG9Xcml0ZTxzdHIubGVuZ3RoKjI/bWF4Qnl0ZXNUb1dyaXRlLzI6c3RyLmxlbmd0aDtmb3IodmFyIGk9MDtpPG51bUNoYXJzVG9Xcml0ZTsrK2kpe3ZhciBjb2RlVW5pdD1zdHIuY2hhckNvZGVBdChpKTtIRUFQMTZbb3V0UHRyPj4xXT1jb2RlVW5pdDtvdXRQdHIrPTJ9SEVBUDE2W291dFB0cj4+MV09MDtyZXR1cm4gb3V0UHRyLXN0YXJ0UHRyfWZ1bmN0aW9uIGxlbmd0aEJ5dGVzVVRGMTYoc3RyKXtyZXR1cm4gc3RyLmxlbmd0aCoyfWZ1bmN0aW9uIFVURjMyVG9TdHJpbmcocHRyLG1heEJ5dGVzVG9SZWFkKXt2YXIgaT0wO3ZhciBzdHI9XCJcIjt3aGlsZSghKGk+PW1heEJ5dGVzVG9SZWFkLzQpKXt2YXIgdXRmMzI9SEVBUDMyW3B0citpKjQ+PjJdO2lmKHV0ZjMyPT0wKWJyZWFrOysraTtpZih1dGYzMj49NjU1MzYpe3ZhciBjaD11dGYzMi02NTUzNjtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTZ8Y2g+PjEwLDU2MzIwfGNoJjEwMjMpfWVsc2V7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHV0ZjMyKX19cmV0dXJuIHN0cn1mdW5jdGlvbiBzdHJpbmdUb1VURjMyKHN0cixvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKXtpZihtYXhCeXRlc1RvV3JpdGU9PT11bmRlZmluZWQpe21heEJ5dGVzVG9Xcml0ZT0yMTQ3NDgzNjQ3fWlmKG1heEJ5dGVzVG9Xcml0ZTw0KXJldHVybiAwO3ZhciBzdGFydFB0cj1vdXRQdHI7dmFyIGVuZFB0cj1zdGFydFB0cittYXhCeXRlc1RvV3JpdGUtNDtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgY29kZVVuaXQ9c3RyLmNoYXJDb2RlQXQoaSk7aWYoY29kZVVuaXQ+PTU1Mjk2JiZjb2RlVW5pdDw9NTczNDMpe3ZhciB0cmFpbFN1cnJvZ2F0ZT1zdHIuY2hhckNvZGVBdCgrK2kpO2NvZGVVbml0PTY1NTM2KygoY29kZVVuaXQmMTAyMyk8PDEwKXx0cmFpbFN1cnJvZ2F0ZSYxMDIzfUhFQVAzMltvdXRQdHI+PjJdPWNvZGVVbml0O291dFB0cis9NDtpZihvdXRQdHIrND5lbmRQdHIpYnJlYWt9SEVBUDMyW291dFB0cj4+Ml09MDtyZXR1cm4gb3V0UHRyLXN0YXJ0UHRyfWZ1bmN0aW9uIGxlbmd0aEJ5dGVzVVRGMzIoc3RyKXt2YXIgbGVuPTA7Zm9yKHZhciBpPTA7aTxzdHIubGVuZ3RoOysraSl7dmFyIGNvZGVVbml0PXN0ci5jaGFyQ29kZUF0KGkpO2lmKGNvZGVVbml0Pj01NTI5NiYmY29kZVVuaXQ8PTU3MzQzKSsraTtsZW4rPTR9cmV0dXJuIGxlbn1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9zdGRfd3N0cmluZyhyYXdUeXBlLGNoYXJTaXplLG5hbWUpe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTt2YXIgZGVjb2RlU3RyaW5nLGVuY29kZVN0cmluZyxnZXRIZWFwLGxlbmd0aEJ5dGVzVVRGLHNoaWZ0O2lmKGNoYXJTaXplPT09Mil7ZGVjb2RlU3RyaW5nPVVURjE2VG9TdHJpbmc7ZW5jb2RlU3RyaW5nPXN0cmluZ1RvVVRGMTY7bGVuZ3RoQnl0ZXNVVEY9bGVuZ3RoQnl0ZXNVVEYxNjtnZXRIZWFwPSgpPT5IRUFQVTE2O3NoaWZ0PTF9ZWxzZSBpZihjaGFyU2l6ZT09PTQpe2RlY29kZVN0cmluZz1VVEYzMlRvU3RyaW5nO2VuY29kZVN0cmluZz1zdHJpbmdUb1VURjMyO2xlbmd0aEJ5dGVzVVRGPWxlbmd0aEJ5dGVzVVRGMzI7Z2V0SGVhcD0oKT0+SEVBUFUzMjtzaGlmdD0yfXJlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsXCJmcm9tV2lyZVR5cGVcIjpmdW5jdGlvbih2YWx1ZSl7dmFyIGxlbmd0aD1IRUFQVTMyW3ZhbHVlPj4yXTt2YXIgSEVBUD1nZXRIZWFwKCk7dmFyIHN0cjt2YXIgZGVjb2RlU3RhcnRQdHI9dmFsdWUrNDtmb3IodmFyIGk9MDtpPD1sZW5ndGg7KytpKXt2YXIgY3VycmVudEJ5dGVQdHI9dmFsdWUrNCtpKmNoYXJTaXplO2lmKGk9PWxlbmd0aHx8SEVBUFtjdXJyZW50Qnl0ZVB0cj4+c2hpZnRdPT0wKXt2YXIgbWF4UmVhZEJ5dGVzPWN1cnJlbnRCeXRlUHRyLWRlY29kZVN0YXJ0UHRyO3ZhciBzdHJpbmdTZWdtZW50PWRlY29kZVN0cmluZyhkZWNvZGVTdGFydFB0cixtYXhSZWFkQnl0ZXMpO2lmKHN0cj09PXVuZGVmaW5lZCl7c3RyPXN0cmluZ1NlZ21lbnR9ZWxzZXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoMCk7c3RyKz1zdHJpbmdTZWdtZW50fWRlY29kZVN0YXJ0UHRyPWN1cnJlbnRCeXRlUHRyK2NoYXJTaXplfX1fZnJlZSh2YWx1ZSk7cmV0dXJuIHN0cn0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsdmFsdWUpe2lmKCEodHlwZW9mIHZhbHVlPT1cInN0cmluZ1wiKSl7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICR7bmFtZX1gKX12YXIgbGVuZ3RoPWxlbmd0aEJ5dGVzVVRGKHZhbHVlKTt2YXIgcHRyPV9tYWxsb2MoNCtsZW5ndGgrY2hhclNpemUpO0hFQVBVMzJbcHRyPj4yXT1sZW5ndGg+PnNoaWZ0O2VuY29kZVN0cmluZyh2YWx1ZSxwdHIrNCxsZW5ndGgrY2hhclNpemUpO2lmKGRlc3RydWN0b3JzIT09bnVsbCl7ZGVzdHJ1Y3RvcnMucHVzaChfZnJlZSxwdHIpfXJldHVybiBwdHJ9LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjpzaW1wbGVSZWFkVmFsdWVGcm9tUG9pbnRlcixkZXN0cnVjdG9yRnVuY3Rpb246ZnVuY3Rpb24ocHRyKXtfZnJlZShwdHIpfX0pfWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX3ZvaWQocmF3VHlwZSxuYW1lKXtuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse2lzVm9pZDp0cnVlLG5hbWU6bmFtZSxcImFyZ1BhY2tBZHZhbmNlXCI6MCxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKCl7cmV0dXJuIHVuZGVmaW5lZH0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsbyl7cmV0dXJuIHVuZGVmaW5lZH19KX1mdW5jdGlvbiBfX2VtdmFsX2luY3JlZihoYW5kbGUpe2lmKGhhbmRsZT40KXtlbXZhbF9oYW5kbGVzLmdldChoYW5kbGUpLnJlZmNvdW50Kz0xfX1mdW5jdGlvbiByZXF1aXJlUmVnaXN0ZXJlZFR5cGUocmF3VHlwZSxodW1hbk5hbWUpe3ZhciBpbXBsPXJlZ2lzdGVyZWRUeXBlc1tyYXdUeXBlXTtpZih1bmRlZmluZWQ9PT1pbXBsKXt0aHJvd0JpbmRpbmdFcnJvcihodW1hbk5hbWUrXCIgaGFzIHVua25vd24gdHlwZSBcIitnZXRUeXBlTmFtZShyYXdUeXBlKSl9cmV0dXJuIGltcGx9ZnVuY3Rpb24gX19lbXZhbF90YWtlX3ZhbHVlKHR5cGUsYXJnKXt0eXBlPXJlcXVpcmVSZWdpc3RlcmVkVHlwZSh0eXBlLFwiX2VtdmFsX3Rha2VfdmFsdWVcIik7dmFyIHY9dHlwZVtcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCJdKGFyZyk7cmV0dXJuIEVtdmFsLnRvSGFuZGxlKHYpfWZ1bmN0aW9uIF9hYm9ydCgpe2Fib3J0KFwiXCIpfWZ1bmN0aW9uIF9lbXNjcmlwdGVuX21lbWNweV9iaWcoZGVzdCxzcmMsbnVtKXtIRUFQVTguY29weVdpdGhpbihkZXN0LHNyYyxzcmMrbnVtKX1mdW5jdGlvbiBnZXRIZWFwTWF4KCl7cmV0dXJuIDIxNDc0ODM2NDh9ZnVuY3Rpb24gZW1zY3JpcHRlbl9yZWFsbG9jX2J1ZmZlcihzaXplKXt2YXIgYj13YXNtTWVtb3J5LmJ1ZmZlcjt2YXIgcGFnZXM9c2l6ZS1iLmJ5dGVMZW5ndGgrNjU1MzU+Pj4xNjt0cnl7d2FzbU1lbW9yeS5ncm93KHBhZ2VzKTt1cGRhdGVNZW1vcnlWaWV3cygpO3JldHVybiAxfWNhdGNoKGUpe319ZnVuY3Rpb24gX2Vtc2NyaXB0ZW5fcmVzaXplX2hlYXAocmVxdWVzdGVkU2l6ZSl7dmFyIG9sZFNpemU9SEVBUFU4Lmxlbmd0aDtyZXF1ZXN0ZWRTaXplPXJlcXVlc3RlZFNpemU+Pj4wO3ZhciBtYXhIZWFwU2l6ZT1nZXRIZWFwTWF4KCk7aWYocmVxdWVzdGVkU2l6ZT5tYXhIZWFwU2l6ZSl7cmV0dXJuIGZhbHNlfXZhciBhbGlnblVwPSh4LG11bHRpcGxlKT0+eCsobXVsdGlwbGUteCVtdWx0aXBsZSklbXVsdGlwbGU7Zm9yKHZhciBjdXREb3duPTE7Y3V0RG93bjw9NDtjdXREb3duKj0yKXt2YXIgb3Zlckdyb3duSGVhcFNpemU9b2xkU2l6ZSooMSsuMi9jdXREb3duKTtvdmVyR3Jvd25IZWFwU2l6ZT1NYXRoLm1pbihvdmVyR3Jvd25IZWFwU2l6ZSxyZXF1ZXN0ZWRTaXplKzEwMDY2MzI5Nik7dmFyIG5ld1NpemU9TWF0aC5taW4obWF4SGVhcFNpemUsYWxpZ25VcChNYXRoLm1heChyZXF1ZXN0ZWRTaXplLG92ZXJHcm93bkhlYXBTaXplKSw2NTUzNikpO3ZhciByZXBsYWNlbWVudD1lbXNjcmlwdGVuX3JlYWxsb2NfYnVmZmVyKG5ld1NpemUpO2lmKHJlcGxhY2VtZW50KXtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIGluaXRSYW5kb21GaWxsKCl7aWYodHlwZW9mIGNyeXB0bz09XCJvYmplY3RcIiYmdHlwZW9mIGNyeXB0b1tcImdldFJhbmRvbVZhbHVlc1wiXT09XCJmdW5jdGlvblwiKXtyZXR1cm4gdmlldz0+Y3J5cHRvLmdldFJhbmRvbVZhbHVlcyh2aWV3KX1lbHNlIGFib3J0KFwiaW5pdFJhbmRvbURldmljZVwiKX1mdW5jdGlvbiByYW5kb21GaWxsKHZpZXcpe3JldHVybihyYW5kb21GaWxsPWluaXRSYW5kb21GaWxsKCkpKHZpZXcpfWZ1bmN0aW9uIF9nZXRlbnRyb3B5KGJ1ZmZlcixzaXplKXtyYW5kb21GaWxsKEhFQVBVOC5zdWJhcnJheShidWZmZXIsYnVmZmVyK3NpemUpKTtyZXR1cm4gMH1lbWJpbmRfaW5pdF9jaGFyQ29kZXMoKTtCaW5kaW5nRXJyb3I9TW9kdWxlW1wiQmluZGluZ0Vycm9yXCJdPWV4dGVuZEVycm9yKEVycm9yLFwiQmluZGluZ0Vycm9yXCIpO0ludGVybmFsRXJyb3I9TW9kdWxlW1wiSW50ZXJuYWxFcnJvclwiXT1leHRlbmRFcnJvcihFcnJvcixcIkludGVybmFsRXJyb3JcIik7aW5pdF9DbGFzc0hhbmRsZSgpO2luaXRfZW1iaW5kKCk7aW5pdF9SZWdpc3RlcmVkUG9pbnRlcigpO1VuYm91bmRUeXBlRXJyb3I9TW9kdWxlW1wiVW5ib3VuZFR5cGVFcnJvclwiXT1leHRlbmRFcnJvcihFcnJvcixcIlVuYm91bmRUeXBlRXJyb3JcIik7aW5pdF9lbXZhbCgpO3ZhciB3YXNtSW1wb3J0cz17XCJnXCI6X19fY3hhX3Rocm93LFwicFwiOl9fZW1iaW5kX3JlZ2lzdGVyX2JpZ2ludCxcImxcIjpfX2VtYmluZF9yZWdpc3Rlcl9ib29sLFwiZlwiOl9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzLFwiZVwiOl9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2NvbnN0cnVjdG9yLFwiYVwiOl9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2Z1bmN0aW9uLFwidFwiOl9fZW1iaW5kX3JlZ2lzdGVyX2VtdmFsLFwia1wiOl9fZW1iaW5kX3JlZ2lzdGVyX2Zsb2F0LFwiY1wiOl9fZW1iaW5kX3JlZ2lzdGVyX2ludGVnZXIsXCJiXCI6X19lbWJpbmRfcmVnaXN0ZXJfbWVtb3J5X3ZpZXcsXCJqXCI6X19lbWJpbmRfcmVnaXN0ZXJfc3RkX3N0cmluZyxcImRcIjpfX2VtYmluZF9yZWdpc3Rlcl9zdGRfd3N0cmluZyxcIm1cIjpfX2VtYmluZF9yZWdpc3Rlcl92b2lkLFwiblwiOl9fZW12YWxfZGVjcmVmLFwib1wiOl9fZW12YWxfaW5jcmVmLFwiaFwiOl9fZW12YWxfdGFrZV92YWx1ZSxcImlcIjpfYWJvcnQsXCJzXCI6X2Vtc2NyaXB0ZW5fbWVtY3B5X2JpZyxcInJcIjpfZW1zY3JpcHRlbl9yZXNpemVfaGVhcCxcInFcIjpfZ2V0ZW50cm9weX07dmFyIGFzbT1jcmVhdGVXYXNtKCk7dmFyIF9fX3dhc21fY2FsbF9jdG9ycz1mdW5jdGlvbigpe3JldHVybihfX193YXNtX2NhbGxfY3RvcnM9TW9kdWxlW1wiYXNtXCJdW1widlwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX19fZ2V0VHlwZU5hbWU9ZnVuY3Rpb24oKXtyZXR1cm4oX19fZ2V0VHlwZU5hbWU9TW9kdWxlW1wiYXNtXCJdW1wieFwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX19lbWJpbmRfaW5pdGlhbGl6ZV9iaW5kaW5ncz1Nb2R1bGVbXCJfX2VtYmluZF9pbml0aWFsaXplX2JpbmRpbmdzXCJdPWZ1bmN0aW9uKCl7cmV0dXJuKF9fZW1iaW5kX2luaXRpYWxpemVfYmluZGluZ3M9TW9kdWxlW1wiX19lbWJpbmRfaW5pdGlhbGl6ZV9iaW5kaW5nc1wiXT1Nb2R1bGVbXCJhc21cIl1bXCJ5XCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfX19lcnJub19sb2NhdGlvbj1mdW5jdGlvbigpe3JldHVybihfX19lcnJub19sb2NhdGlvbj1Nb2R1bGVbXCJhc21cIl1bXCJfX2Vycm5vX2xvY2F0aW9uXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfbWFsbG9jPWZ1bmN0aW9uKCl7cmV0dXJuKF9tYWxsb2M9TW9kdWxlW1wiYXNtXCJdW1wielwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX2ZyZWU9ZnVuY3Rpb24oKXtyZXR1cm4oX2ZyZWU9TW9kdWxlW1wiYXNtXCJdW1wiQVwiXSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfTt2YXIgX19fY3hhX2lzX3BvaW50ZXJfdHlwZT1mdW5jdGlvbigpe3JldHVybihfX19jeGFfaXNfcG9pbnRlcl90eXBlPU1vZHVsZVtcImFzbVwiXVtcIkJcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIGNhbGxlZFJ1bjtkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9ZnVuY3Rpb24gcnVuQ2FsbGVyKCl7aWYoIWNhbGxlZFJ1bilydW4oKTtpZighY2FsbGVkUnVuKWRlcGVuZGVuY2llc0Z1bGZpbGxlZD1ydW5DYWxsZXJ9O2Z1bmN0aW9uIHJ1bigpe2lmKHJ1bkRlcGVuZGVuY2llcz4wKXtyZXR1cm59cHJlUnVuKCk7aWYocnVuRGVwZW5kZW5jaWVzPjApe3JldHVybn1mdW5jdGlvbiBkb1J1bigpe2lmKGNhbGxlZFJ1bilyZXR1cm47Y2FsbGVkUnVuPXRydWU7TW9kdWxlW1wiY2FsbGVkUnVuXCJdPXRydWU7aWYoQUJPUlQpcmV0dXJuO2luaXRSdW50aW1lKCk7aWYoTW9kdWxlW1wib25SdW50aW1lSW5pdGlhbGl6ZWRcIl0pTW9kdWxlW1wib25SdW50aW1lSW5pdGlhbGl6ZWRcIl0oKTtwb3N0UnVuKCl9aWYoTW9kdWxlW1wic2V0U3RhdHVzXCJdKXtNb2R1bGVbXCJzZXRTdGF0dXNcIl0oXCJSdW5uaW5nLi4uXCIpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7TW9kdWxlW1wic2V0U3RhdHVzXCJdKFwiXCIpfSwxKTtkb1J1bigpfSwxKX1lbHNle2RvUnVuKCl9fWlmKE1vZHVsZVtcInByZUluaXRcIl0pe2lmKHR5cGVvZiBNb2R1bGVbXCJwcmVJbml0XCJdPT1cImZ1bmN0aW9uXCIpTW9kdWxlW1wicHJlSW5pdFwiXT1bTW9kdWxlW1wicHJlSW5pdFwiXV07d2hpbGUoTW9kdWxlW1wicHJlSW5pdFwiXS5sZW5ndGg+MCl7TW9kdWxlW1wicHJlSW5pdFwiXS5wb3AoKSgpfX1ydW4oKTtcblxuZXhwb3J0IHsgTW9kdWxlIH07XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODE5ZjQ0NGZkYTk5NTE5M2U5YmM5Nzg2MGVlNDM4OTAubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ3MzU2NzAwMTdhMzQ4OWQ2NTQ1NjBjZDJkM2UxZjVlLm1wM1wiOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCB7IGNvbXBvbmVudHMgfSBmcm9tIFwiLi9jb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IGRyYXcgfSBmcm9tIFwiLi9kcmF3LmpzXCJcbmltcG9ydCB7IHNhdmVIaWdoU2NvcmUgfSBmcm9tIFwiLi9kcmF3LmpzXCJcbmltcG9ydCB7IGluaXRFdmVudHMgfSBmcm9tIFwiLi9ldmVudHMuanNcIlxuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSBcIi4vdGV0cmlzLmpzXCJcbmltcG9ydCBzdGFydE11c2ljIGZyb20gXCIuLi9hc3NldHMvVGV0cmlzLm1wM1wiXG5pbXBvcnQgZW5kTXVzaWMgZnJvbSBcIi4uL2Fzc2V0cy8xOC4gR2FtZSBPdmVyLm1wM1wiXG5cbi8vTXVzaWNcbmV4cG9ydCBjb25zdCB0ZXRyaXNNdXNpYyA9IG5ldyBBdWRpbyhzdGFydE11c2ljKVxuZXhwb3J0IGNvbnN0IGdhbWVPdmVyTXVzaWMgPSBuZXcgQXVkaW8oZW5kTXVzaWMpXG50ZXRyaXNNdXNpYy5wcmVsb2FkID0gXCJhdXRvXCJcbmdhbWVPdmVyTXVzaWMucHJlbG9hZCA9IFwiYXV0b1wiXG50ZXRyaXNNdXNpYy5sb29wID0gdHJ1ZVxudGV0cmlzTXVzaWMudm9sdW1lID0gMC4xXG5nYW1lT3Zlck11c2ljLnZvbHVtZSA9IDAuMVxuXG5Nb2R1bGUub25SdW50aW1lSW5pdGlhbGl6ZWQgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGxldCBnYW1lID0gbmV3IE1vZHVsZS5HYW1lKClcblxuICAvL0dhbWUgdGljayBzdGFydCB2YXJpYWJsZVxuICBnYW1lLmxhc3RUaWNrID0gRGF0ZS5ub3coKVxuICBnYW1lLmdhbWVMb29wID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBub3cgPSBEYXRlLm5vdygpXG4gICAgbGV0IGRlbHRhID0gbm93IC0gdGhpcy5sYXN0VGlja1xuXG4gICAgaWYgKGRlbHRhID49IHRoaXMuZ2V0RHJvcEludGVydmFsKCkgJiYgIXRoaXMuZ2V0R2FtZVBhdXNlZCgpKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpIC8vIHVwZGF0ZSBnYW1lIHN0YXRlICh0ZXRyaXMuY3BwKVxuICAgICAgdGhpcy5sYXN0VGljayA9IG5vdyAvLyB1cGRhdGUgdGhlIGxhc3QgdGljayB0aW1lXG4gICAgfVxuXG4gICAgZHJhdyh0aGlzKSAvLyByZW5kZXIgZ2FtZSBzdGF0ZVxuXG4gICAgaWYgKCF0aGlzLmdldEdhbWVPdmVyKCkpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wLmJpbmQodGhpcykpIC8vIHJlcGVhdCBuZXh0IGZyYW1lXG4gICAgfSBlbHNlIHtcbiAgICAgIHNhdmVIaWdoU2NvcmUodGhpcylcbiAgICAgIHRldHJpc011c2ljLnBhdXNlKClcbiAgICAgIGdhbWVPdmVyTXVzaWMucGxheSgpXG4gICAgICBjb21wb25lbnRzLmRpc3BsYXlHYW1lT3ZlclBhZ2UodGhpcylcbiAgICB9XG4gIH0uYmluZChnYW1lKSAvLyBiaW5kIHRoZSBnYW1lIGluc3RhbmNlIHRvIHRoZSBmdW5jdGlvbiBjb250ZXh0OlxuICAvL2JpbmQgYWxsb3dzIHRoZSBnYW1lTG9vcCBmdW5jdGlvbiB0byBiZSBjYWxsZWQgZnJvbSBldmVudHMuanMgYnkgZW5zdXJpbmcgdGhhdCBcInRoaXNcIlxuICAvL2Fsd2F5cyByZWZlcnMgdG8gdGhlIFwiZ2FtZVwiIG9ialxuXG4gIGluaXRFdmVudHMoZ2FtZSlcbiAgZHJhdyhnYW1lKSAvL0RyYXcgQm9hcmQganVzdCBhcyBhIGJhY2tncm91bmQgYmVmb3JlIGdhbWUgc3RhcnRzXG4gIGNvbXBvbmVudHMuZGlzcGxheVN0YXJ0Q29tcG9uZW50cygpXG59XG4iLCJpbXBvcnQgeyBjb21wb25lbnRzIH0gZnJvbSBcIi4vY29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBkcmF3IH0gZnJvbSBcIi4vZHJhdy5qc1wiXG5pbXBvcnQgeyB0ZXRyaXNNdXNpYyB9IGZyb20gXCIuL2FwcC5qc1wiXG5cbmV4cG9ydCBjb25zdCBpbml0RXZlbnRzID0gZ2FtZSA9PiB7XG4gIC8vTWFpbiBjb250YWluZXJzXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RDb250YWluZXJcIilcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiS2V5WlwiKSB7XG4gICAgICBnYW1lLnJvdGF0ZVRldHJvbWlubygtMSlcbiAgICB9XG4gIH0pXG5cbiAgLy9MZWZ0LCByaWdodCBhbmQgZG93blxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgZ2FtZS5tb3ZlVGV0cm9taW5vKDApXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgIGdhbWUubW92ZVRldHJvbWlubygxKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgIGdhbWUubW92ZVRldHJvbWlubygyKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIFwiU3BhY2VcIjpcbiAgICAgICAgZ2FtZS5tb3ZlVGV0cm9taW5vKDMpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0R2FtZUNvbnRhaW5lclwiKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVPdmVyQ29udGFpbmVyXCIpKSByZXR1cm5cbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlR2FtZUNvbnRhaW5lclwiKSkge1xuICAgICAgICAgIGdhbWUucGF1c2VHYW1lKClcbiAgICAgICAgICB0ZXRyaXNNdXNpYy5wYXVzZSgpXG4gICAgICAgICAgY29tcG9uZW50cy5kaXNwbGF5UGF1c2VQYWdlKClcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlR2FtZUNvbnRhaW5lclwiKSkge1xuICAgICAgICAgIGdhbWUucmVzdW1lR2FtZSgpXG4gICAgICAgICAgdGV0cmlzTXVzaWMucGxheSgpXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXVzZUdhbWVDb250YWluZXJcIikucmVtb3ZlKClcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfSlcblxuICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT0gXCJwbGF5QnV0dG9uXCIpIHtcbiAgICAgIGdhbWUucmVzdW1lR2FtZSgpIC8vU3RvcCB1c2VyIGlucHV0IHVudGlsIGdhbWUgc3RhcnRzXG4gICAgICBnYW1lLmdhbWVMb29wKClcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRHYW1lQ29udGFpbmVyXCIpLnJlbW92ZSgpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlbHBCb3hcIikucmVtb3ZlKClcbiAgICAgIC8vUGxheSBnYW1lIGF1ZGlvOlxuICAgICAgdGV0cmlzTXVzaWMub25jYW5wbGF5dGhyb3VnaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGV0cmlzTXVzaWMucGxheSgpLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcGxheSBhdWRpbzpcIiwgZXJyb3IpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0ZXRyaXNNdXNpYy5jdXJyZW50VGltZSA9IDBcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LmlkID09IFwicGxheUFnYWluQnV0dG9uXCIpIHtcbiAgICAgIGdhbWUucmVzdGFydEdhbWUoKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lT3ZlckNvbnRhaW5lclwiKS5yZW1vdmUoKVxuICAgICAgdGV0cmlzTXVzaWMuY3VycmVudFRpbWUgPSAwXG4gICAgICB0ZXRyaXNNdXNpYy5wbGF5KClcbiAgICAgIGdhbWUuZ2FtZUxvb3AoKVxuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwicXVpdEJ1dHRvblwiKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVPdmVyQ29udGFpbmVyXCIpLnJlbW92ZSgpXG4gICAgICBjb21wb25lbnRzLmRpc3BsYXlTdGFydFBhZ2UoKVxuICAgICAgY29tcG9uZW50cy5kaXNwbGF5SGVscEJveCgpXG4gICAgICBnYW1lLnJlc3RhcnRHYW1lKClcbiAgICAgIGdhbWUucGF1c2VHYW1lKClcbiAgICAgIGRyYXcoZ2FtZSlcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LmlkID09IFwicmVzdW1lQnV0dG9uXCIpIHtcbiAgICAgIGdhbWUucmVzdW1lR2FtZSgpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlR2FtZUNvbnRhaW5lclwiKS5yZW1vdmUoKVxuICAgICAgdGV0cmlzTXVzaWMucGxheSgpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG11dGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm11dGVCdXR0b25cIilcbiAgbXV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSBcIm11dGVCdXR0b25cIiB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtdXRlQ2xpY2thYmxlXCIpKSB7XG4gICAgICBjb21wb25lbnRzLnRvZ2dsZU11dGVCdXR0b24oKVxuICAgICAgbXV0ZUJ1dHRvbi5ibHVyKClcbiAgICB9XG4gIH0pXG59XG4iXSwibmFtZXMiOlsiX19fQ1NTX0xPQURFUl9FWFBPUlRfX18iLCJwdXNoIiwibW9kdWxlIiwiaWQiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsInRoaXMiLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiX2siLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic3R5bGVzSW5ET00iLCJnZXRJbmRleEJ5SWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJyZXN1bHQiLCJtb2R1bGVzVG9Eb20iLCJvcHRpb25zIiwiaWRDb3VudE1hcCIsImlkZW50aWZpZXJzIiwiYmFzZSIsImNvdW50IiwiaW5kZXhCeUlkZW50aWZpZXIiLCJvYmoiLCJjc3MiLCJzb3VyY2VNYXAiLCJyZWZlcmVuY2VzIiwidXBkYXRlciIsImFkZEVsZW1lbnRTdHlsZSIsImJ5SW5kZXgiLCJzcGxpY2UiLCJhcGkiLCJkb21BUEkiLCJ1cGRhdGUiLCJuZXdPYmoiLCJyZW1vdmUiLCJsYXN0SWRlbnRpZmllcnMiLCJuZXdMaXN0IiwiaW5kZXgiLCJuZXdMYXN0SWRlbnRpZmllcnMiLCJfaSIsIl9pbmRleCIsIm1lbW8iLCJpbnNlcnQiLCJzdHlsZSIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJoZWFkIiwiZSIsImdldFRhcmdldCIsIkVycm9yIiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwic3R5bGVFbGVtZW50Iiwibm9uY2UiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJzdHlsZVRhZ1RyYW5zZm9ybSIsImFwcGx5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlU3R5bGVFbGVtZW50Iiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJmaXJzdENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibiIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiZyIsImdsb2JhbFRoaXMiLCJGdW5jdGlvbiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwibG9jYXRpb24iLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicmVwbGFjZSIsInAiLCJuYyIsImxvY2FscyIsImNvbXBvbmVudHMiLCJkaXNwbGF5U3RhcnRQYWdlIiwic3RhcnRHYW1lQ29udGFpbmVyIiwic3BhblRpdGxlIiwicGxheUJ1dHRvbiIsInRleHRDb250ZW50Iiwic3ViQ29udGFpbmVyIiwiZGlzcGxheUhlbHBCb3giLCJoZWxwQm94IiwiY29udGVudEFyciIsImtleXMiLCJpbm5lckNvbnRhaW5lciIsInNwYW4iLCJzcGFuMiIsImNsYXNzTGlzdCIsImFkZCIsImdldEVsZW1lbnRCeUlkIiwiZGlzcGxheUdhbWVPdmVyUGFnZSIsImdhbWUiLCJnYW1lT3ZlckNvbnRhaW5lciIsInNwYW5TY29yZSIsInNwYW5IaWdoU2NvcmUiLCJwbGF5QWdhaW5CdXR0b24iLCJxdWl0QnV0dG9uIiwiZ2V0U2NvcmUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGlzcGxheVBhdXNlUGFnZSIsInBhdXNlR2FtZUNvbnRhaW5lciIsInJlc3VtZUJ1dHRvbiIsInRvZ2dsZU11dGVCdXR0b24iLCJ0ZXRyaXNNdXNpYyIsIm11dGVCdXR0b24iLCJ0b2dnbGUiLCJjb250YWlucyIsImlubmVySFRNTCIsIm11dGVkIiwiZGlzcGxheVN0YXJ0Q29tcG9uZW50cyIsImNhbnZhcyIsIm5leHRQaWVjZUNhbnZhcyIsInNjb3JlQm9hcmQiLCJjIiwiZ2V0Q29udGV4dCIsImNuIiwiY3MiLCJibG9ja1NpemUiLCJ0ZXRyb21pbm9Db2xvcnMiLCJ3aWR0aCIsImhlaWdodCIsIkhJR0hfU0NPUkUiLCJkcmF3IiwicmVmcmVzaFBhZ2UiLCJuQ3VycmVudFgiLCJnZXRDdXJyZW50WCIsIm5DdXJyZW50WSIsImdldEN1cnJlbnRZIiwiblNoYWRvd1kiLCJjaGFuZ2VTaGFkb3dZIiwibkN1cnJlbnRQaWVjZSIsImdldEN1cnJlbnRQaWVjZSIsIm5OZXh0UGllY2UiLCJnZXROZXh0UGllY2UiLCJuQ3VycmVudFJvdGF0aW9uIiwiZ2V0Q3VycmVudFJvdGF0aW9uIiwidGV0cm9taW5vIiwiZ2V0VGV0cm9taW5vIiwibmV4dFRldHJvbWlubyIsImRyYXdHYW1lRmllbGQiLCJweCIsInB5Iiwicm90YXRlZEluZGV4IiwiUm90YXRlIiwiZHJhd1RldHJvbWlubyIsImRyYXdUZXRyb21pbm9TaGFkb3ciLCJkcmF3TmV4dFBpZWNlIiwiZHJhd1Njb3JlQm9hcmQiLCJkcmF3R2FtZUZpZWxkQm9yZGVycyIsImNsZWFyUmVjdCIsImRyYXdMaW5lIiwic3giLCJzeSIsImV4IiwiZXkiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJnYW1lQm9hcmQiLCJnZXRHYW1lQm9hcmQiLCJ4IiwieSIsInZhbHVlIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJmaWxsUmVjdCIsImdldEdhbWVPdmVyIiwibGluZVdpZHRoIiwic3Ryb2tlUmVjdCIsInNoYWRvd0JsdXIiLCJzaGFkb3dDb2xvciIsImdldEdhbWVQYXVzZWQiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJuZXh0T2Zmc2V0WCIsIm5leHRPZmZzZXRZIiwiZm9udCIsImZpbGxUZXh0IiwibkZpZWxkSGVpZ2h0Iiwib2Zmc2V0WCIsIm5GaWVsZFdpZHRoIiwiZm9yRWFjaCIsImFyZ3MiLCJyZWFkQmluYXJ5IiwiTW9kdWxlIiwibW9kdWxlT3ZlcnJpZGVzIiwiYXNzaWduIiwic2NyaXB0RGlyZWN0b3J5IiwiaW5kZXhPZiIsInN1YnN0ciIsImxhc3RJbmRleE9mIiwiY29uc29sZSIsImxvZyIsImJpbmQiLCJ3YXNtQmluYXJ5Iiwid2FzbU1lbW9yeSIsImVyciIsImVycm9yIiwiV2ViQXNzZW1ibHkiLCJhYm9ydCIsIkhFQVA4IiwiSEVBUFU4IiwiSEVBUDE2IiwiSEVBUFUxNiIsIkhFQVAzMiIsIkhFQVBVMzIiLCJIRUFQRjMyIiwiSEVBUEY2NCIsIndhc21UYWJsZSIsIkFCT1JUIiwidXBkYXRlTWVtb3J5Vmlld3MiLCJiIiwiYnVmZmVyIiwiSW50OEFycmF5IiwiSW50MTZBcnJheSIsIkludDMyQXJyYXkiLCJVaW50OEFycmF5IiwiVWludDE2QXJyYXkiLCJVaW50MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsIkZsb2F0NjRBcnJheSIsIl9fQVRQUkVSVU5fXyIsIl9fQVRJTklUX18iLCJfX0FUUE9TVFJVTl9fIiwicnVuRGVwZW5kZW5jaWVzIiwicnVuRGVwZW5kZW5jeVdhdGNoZXIiLCJkZXBlbmRlbmNpZXNGdWxmaWxsZWQiLCJ3aGF0IiwiUnVudGltZUVycm9yIiwid2FzbUJpbmFyeUZpbGUiLCJwYXRoIiwiaXNEYXRhVVJJIiwiZmlsZW5hbWUiLCJzdGFydHNXaXRoIiwiZ2V0QmluYXJ5IiwiZmlsZSIsImluc3RhbnRpYXRlQXJyYXlCdWZmZXIiLCJiaW5hcnlGaWxlIiwiaW1wb3J0cyIsInJlY2VpdmVyIiwiZmV0Y2giLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJjcmVkZW50aWFscyIsInJlc3BvbnNlIiwiY2F0Y2giLCJnZXRCaW5hcnlQcm9taXNlIiwiYmluYXJ5IiwiaW5zdGFudGlhdGUiLCJpbnN0YW5jZSIsInJlYXNvbiIsImNhbGxSdW50aW1lQ2FsbGJhY2tzIiwiY2FsbGJhY2tzIiwic2hpZnQiLCJFeGNlcHRpb25JbmZvIiwiZXhjUHRyIiwicHRyIiwic2V0X3R5cGUiLCJ0eXBlIiwiZ2V0X3R5cGUiLCJzZXRfZGVzdHJ1Y3RvciIsImRlc3RydWN0b3IiLCJnZXRfZGVzdHJ1Y3RvciIsInNldF9jYXVnaHQiLCJjYXVnaHQiLCJnZXRfY2F1Z2h0Iiwic2V0X3JldGhyb3duIiwicmV0aHJvd24iLCJnZXRfcmV0aHJvd24iLCJpbml0Iiwic2V0X2FkanVzdGVkX3B0ciIsImFkanVzdGVkUHRyIiwiZ2V0X2FkanVzdGVkX3B0ciIsImdldF9leGNlcHRpb25fcHRyIiwiX19fY3hhX2lzX3BvaW50ZXJfdHlwZSIsImFkanVzdGVkIiwiZ2V0U2hpZnRGcm9tU2l6ZSIsInNpemUiLCJUeXBlRXJyb3IiLCJlbWJpbmRfY2hhckNvZGVzIiwicmVhZExhdGluMVN0cmluZyIsInJldCIsImF3YWl0aW5nRGVwZW5kZW5jaWVzIiwicmVnaXN0ZXJlZFR5cGVzIiwidHlwZURlcGVuZGVuY2llcyIsImNoYXJfMCIsImNoYXJfOSIsIm1ha2VMZWdhbEZ1bmN0aW9uTmFtZSIsIm5hbWUiLCJmIiwiY2hhckNvZGVBdCIsImNyZWF0ZU5hbWVkRnVuY3Rpb24iLCJib2R5IiwiYXJndW1lbnRzIiwiZXh0ZW5kRXJyb3IiLCJiYXNlRXJyb3JUeXBlIiwiZXJyb3JOYW1lIiwiZXJyb3JDbGFzcyIsIm1lc3NhZ2UiLCJzdGFjayIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiQmluZGluZ0Vycm9yIiwidGhyb3dCaW5kaW5nRXJyb3IiLCJJbnRlcm5hbEVycm9yIiwidGhyb3dJbnRlcm5hbEVycm9yIiwid2hlbkRlcGVuZGVudFR5cGVzQXJlUmVzb2x2ZWQiLCJteVR5cGVzIiwiZGVwZW5kZW50VHlwZXMiLCJnZXRUeXBlQ29udmVydGVycyIsIm9uQ29tcGxldGUiLCJ0eXBlQ29udmVydGVycyIsIm15VHlwZUNvbnZlcnRlcnMiLCJyZWdpc3RlclR5cGUiLCJBcnJheSIsInVucmVnaXN0ZXJlZFR5cGVzIiwicmVnaXN0ZXJlZCIsImR0IiwicmF3VHlwZSIsInJlZ2lzdGVyZWRJbnN0YW5jZSIsImlnbm9yZUR1cGxpY2F0ZVJlZ2lzdHJhdGlvbnMiLCJjYiIsInRocm93SW5zdGFuY2VBbHJlYWR5RGVsZXRlZCIsIiQkIiwicHRyVHlwZSIsInJlZ2lzdGVyZWRDbGFzcyIsImZpbmFsaXphdGlvblJlZ2lzdHJ5IiwiZGV0YWNoRmluYWxpemVyIiwiaGFuZGxlIiwicmVsZWFzZUNsYXNzSGFuZGxlIiwic21hcnRQdHIiLCJzbWFydFB0clR5cGUiLCJyYXdEZXN0cnVjdG9yIiwicnVuRGVzdHJ1Y3RvciIsImRvd25jYXN0UG9pbnRlciIsInB0ckNsYXNzIiwiZGVzaXJlZENsYXNzIiwiYmFzZUNsYXNzIiwicnYiLCJkb3duY2FzdCIsInJlZ2lzdGVyZWRQb2ludGVycyIsImRlbGV0aW9uUXVldWUiLCJmbHVzaFBlbmRpbmdEZWxldGVzIiwicG9wIiwiZGVsZXRlU2NoZWR1bGVkIiwiZGVsYXlGdW5jdGlvbiIsInJlZ2lzdGVyZWRJbnN0YW5jZXMiLCJtYWtlQ2xhc3NIYW5kbGUiLCJyZWNvcmQiLCJhdHRhY2hGaW5hbGl6ZXIiLCJGaW5hbGl6YXRpb25SZWdpc3RyeSIsImluZm8iLCJyZWdpc3RlciIsInVucmVnaXN0ZXIiLCJDbGFzc0hhbmRsZSIsImVuc3VyZU92ZXJsb2FkVGFibGUiLCJwcm90byIsIm1ldGhvZE5hbWUiLCJodW1hbk5hbWUiLCJvdmVybG9hZFRhYmxlIiwicHJldkZ1bmMiLCJhcmdDb3VudCIsIlJlZ2lzdGVyZWRDbGFzcyIsImluc3RhbmNlUHJvdG90eXBlIiwiZ2V0QWN0dWFsVHlwZSIsInVwY2FzdCIsInB1cmVWaXJ0dWFsRnVuY3Rpb25zIiwidXBjYXN0UG9pbnRlciIsImNvbnN0Tm9TbWFydFB0clJhd1BvaW50ZXJUb1dpcmVUeXBlIiwiZGVzdHJ1Y3RvcnMiLCJpc1JlZmVyZW5jZSIsImVtYmluZFJlcHIiLCJoYW5kbGVDbGFzcyIsImdlbmVyaWNQb2ludGVyVG9XaXJlVHlwZSIsImlzU21hcnRQb2ludGVyIiwicmF3Q29uc3RydWN0b3IiLCJpc0NvbnN0Iiwic2hhcmluZ1BvbGljeSIsImNsb25lZEhhbmRsZSIsInJhd1NoYXJlIiwiRW12YWwiLCJ0b0hhbmRsZSIsIm5vbkNvbnN0Tm9TbWFydFB0clJhd1BvaW50ZXJUb1dpcmVUeXBlIiwic2ltcGxlUmVhZFZhbHVlRnJvbVBvaW50ZXIiLCJwb2ludGVyIiwiUmVnaXN0ZXJlZFBvaW50ZXIiLCJwb2ludGVlVHlwZSIsInJhd0dldFBvaW50ZWUiLCJkZXN0cnVjdG9yRnVuY3Rpb24iLCJ3YXNtVGFibGVNaXJyb3IiLCJnZXRXYXNtVGFibGVFbnRyeSIsImZ1bmNQdHIiLCJmdW5jIiwiZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24iLCJzaWduYXR1cmUiLCJyYXdGdW5jdGlvbiIsInNpZyIsImFyZ0NhY2hlIiwiZnAiLCJpbmNsdWRlcyIsImR5bkNhbGxMZWdhY3kiLCJkeW5DYWxsIiwiVW5ib3VuZFR5cGVFcnJvciIsImdldFR5cGVOYW1lIiwiX19fZ2V0VHlwZU5hbWUiLCJfZnJlZSIsInRocm93VW5ib3VuZFR5cGVFcnJvciIsInR5cGVzIiwidW5ib3VuZFR5cGVzIiwic2VlbiIsInZpc2l0IiwiaGVhcDMyVmVjdG9yVG9BcnJheSIsImZpcnN0RWxlbWVudCIsImFycmF5IiwicnVuRGVzdHJ1Y3RvcnMiLCJkZWwiLCJjcmFmdEludm9rZXJGdW5jdGlvbiIsImFyZ1R5cGVzIiwiY2xhc3NUeXBlIiwiY3BwSW52b2tlckZ1bmMiLCJjcHBUYXJnZXRGdW5jIiwiaXNBc3luYyIsImlzQ2xhc3NNZXRob2RGdW5jIiwibmVlZHNEZXN0cnVjdG9yU3RhY2siLCJyZXR1cm5zIiwiYXJnc0xpc3QiLCJhcmdzTGlzdFdpcmVkIiwiaW52b2tlckZuQm9keSIsImR0b3JTdGFjayIsImFyZ3MxIiwiYXJnczIiLCJwYXJhbU5hbWUiLCJhcmd1bWVudExpc3QiLCJkdW1teSIsInIiLCJuZXdGdW5jIiwiZW12YWxfaGFuZGxlcyIsImFsbG9jYXRlZCIsImZyZWVsaXN0IiwiaGFzIiwiYWxsb2NhdGUiLCJmcmVlIiwiX19lbXZhbF9kZWNyZWYiLCJyZXNlcnZlZCIsInJlZmNvdW50IiwidG9WYWx1ZSIsInYiLCJ0IiwiZmxvYXRSZWFkVmFsdWVGcm9tUG9pbnRlciIsImludGVnZXJSZWFkVmFsdWVGcm9tUG9pbnRlciIsInNpZ25lZCIsIlVURjhEZWNvZGVyIiwiVGV4dERlY29kZXIiLCJVVEYxNkRlY29kZXIiLCJVVEYxNlRvU3RyaW5nIiwibWF4Qnl0ZXNUb1JlYWQiLCJlbmRQdHIiLCJpZHgiLCJtYXhJZHgiLCJkZWNvZGUiLCJzdWJhcnJheSIsInN0ciIsImNvZGVVbml0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic3RyaW5nVG9VVEYxNiIsIm91dFB0ciIsIm1heEJ5dGVzVG9Xcml0ZSIsInN0YXJ0UHRyIiwibnVtQ2hhcnNUb1dyaXRlIiwibGVuZ3RoQnl0ZXNVVEYxNiIsIlVURjMyVG9TdHJpbmciLCJ1dGYzMiIsImNoIiwic3RyaW5nVG9VVEYzMiIsImxlbmd0aEJ5dGVzVVRGMzIiLCJsZW4iLCJlbXNjcmlwdGVuX3JlYWxsb2NfYnVmZmVyIiwicGFnZXMiLCJieXRlTGVuZ3RoIiwiZ3JvdyIsInJhbmRvbUZpbGwiLCJ2aWV3IiwiY3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwiaW5pdFJhbmRvbUZpbGwiLCJjb2RlcyIsImVtYmluZF9pbml0X2NoYXJDb2RlcyIsIm90aGVyIiwibGVmdENsYXNzIiwicmlnaHRDbGFzcyIsInByZXNlcnZlUG9pbnRlck9uRGVsZXRlIiwiY2xvbmUiLCJnZXRQcm90b3R5cGVPZiIsImZuIiwiZ2V0UG9pbnRlZSIsInJhd1BvaW50ZXIiLCJjbGFzc18iLCJnZXRCYXNlc3RQb2ludGVyIiwiZ2V0SW5oZXJpdGVkSW5zdGFuY2UiLCJtYWtlRGVmYXVsdEhhbmRsZSIsInRvVHlwZSIsImFjdHVhbFR5cGUiLCJyZWdpc3RlcmVkUG9pbnRlclJlY29yZCIsImNvbnN0UG9pbnRlclR5cGUiLCJwb2ludGVyVHlwZSIsImRwIiwiY2FsbGVkUnVuIiwid2FzbUltcG9ydHMiLCJwcmltaXRpdmVUeXBlIiwibWluUmFuZ2UiLCJtYXhSYW5nZSIsInRydWVWYWx1ZSIsImZhbHNlVmFsdWUiLCJ3dCIsImhlYXAiLCJyYXdQb2ludGVyVHlwZSIsInJhd0NvbnN0UG9pbnRlclR5cGUiLCJiYXNlQ2xhc3NSYXdUeXBlIiwiZ2V0QWN0dWFsVHlwZVNpZ25hdHVyZSIsInVwY2FzdFNpZ25hdHVyZSIsImRvd25jYXN0U2lnbmF0dXJlIiwiZGVzdHJ1Y3RvclNpZ25hdHVyZSIsImxlZ2FsRnVuY3Rpb25OYW1lIiwibnVtQXJndW1lbnRzIiwiZXhwb3NlUHVibGljU3ltYm9sIiwiYmFzZVByb3RvdHlwZSIsImNvbnN0cnVjdG9yX2JvZHkiLCJfX2Rlcml2ZWRDbGFzc2VzIiwicmVmZXJlbmNlQ29udmVydGVyIiwicG9pbnRlckNvbnZlcnRlciIsImNvbnN0UG9pbnRlckNvbnZlcnRlciIsInJlcGxhY2VQdWJsaWNTeW1ib2wiLCJyYXdDbGFzc1R5cGUiLCJyYXdBcmdUeXBlc0FkZHIiLCJpbnZva2VyU2lnbmF0dXJlIiwiaW52b2tlciIsInRleHQiLCJyYXdBcmdUeXBlcyIsInJhd0ludm9rZXIiLCJjb250ZXh0IiwiaXNQdXJlVmlydHVhbCIsInVuYm91bmRUeXBlc0hhbmRsZXIiLCJTeW1ib2wiLCJzdWJzdHJpbmciLCJtZXRob2QiLCJjbGFzc05hbWUiLCJtZW1iZXJGdW5jdGlvbiIsImZyb21XaXJlVHlwZSIsImJpdHNoaWZ0IiwiaXNVbnNpZ25lZFR5cGUiLCJkYXRhVHlwZUluZGV4IiwiVEEiLCJkZWNvZGVNZW1vcnlWaWV3Iiwic3RkU3RyaW5nSXNVVEY4IiwicGF5bG9hZCIsImRlY29kZVN0YXJ0UHRyIiwiY3VycmVudEJ5dGVQdHIiLCJzdHJpbmdTZWdtZW50IiwiaGVhcE9yQXJyYXkiLCJlbmRJZHgiLCJ1MCIsInUxIiwidTIiLCJVVEY4QXJyYXlUb1N0cmluZyIsIkFycmF5QnVmZmVyIiwidmFsdWVJc09mVHlwZVN0cmluZyIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwibGVuZ3RoQnl0ZXNVVEY4IiwiX21hbGxvYyIsIm91dElkeCIsInUiLCJzdHJpbmdUb1VURjhBcnJheSIsImNoYXJDb2RlIiwiY2hhclNpemUiLCJkZWNvZGVTdHJpbmciLCJlbmNvZGVTdHJpbmciLCJnZXRIZWFwIiwibGVuZ3RoQnl0ZXNVVEYiLCJIRUFQIiwiaXNWb2lkIiwiYXJnIiwiaW1wbCIsImRlc3QiLCJudW0iLCJjb3B5V2l0aGluIiwicmVxdWVzdGVkU2l6ZSIsIm9sZFNpemUiLCJtYXhIZWFwU2l6ZSIsImN1dERvd24iLCJvdmVyR3Jvd25IZWFwU2l6ZSIsIk1hdGgiLCJtaW4iLCJtYXgiLCJjYWxsYmFjayIsInJlY2VpdmVJbnN0YW5jZSIsInVuc2hpZnQiLCJjbGVhckludGVydmFsIiwicmVtb3ZlUnVuRGVwZW5kZW5jeSIsImluc3RhbnRpYXRlU3RyZWFtaW5nIiwiY3JlYXRlV2FzbSIsInJ1biIsImRvUnVuIiwicG9zdFJ1biIsInByZVJ1biIsInNldFRpbWVvdXQiLCJydW5DYWxsZXIiLCJBdWRpbyIsImdhbWVPdmVyTXVzaWMiLCJwcmVsb2FkIiwibG9vcCIsInZvbHVtZSIsIm9uUnVudGltZUluaXRpYWxpemVkIiwiYXN5bmMiLCJHYW1lIiwibGFzdFRpY2siLCJEYXRlIiwibm93IiwiZ2FtZUxvb3AiLCJnZXREcm9wSW50ZXJ2YWwiLCJzZXRJdGVtIiwic2F2ZUhpZ2hTY29yZSIsInBhdXNlIiwicGxheSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInByb2plY3RDb250YWluZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb2RlIiwicm90YXRlVGV0cm9taW5vIiwibW92ZVRldHJvbWlubyIsInJlc3VtZUdhbWUiLCJwYXVzZUdhbWUiLCJvbmNhbnBsYXl0aHJvdWdoIiwiY3VycmVudFRpbWUiLCJyZXN0YXJ0R2FtZSIsImJsdXIiLCJpbml0RXZlbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==
