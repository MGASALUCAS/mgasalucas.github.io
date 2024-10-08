!(function () {
  if (
    "undefined" != typeof self &&
    self.Prism &&
    self.document &&
    document.createElement
  ) {
    var c = {
        javascript: "clike",
        actionscript: "javascript",
        arduino: "cpp",
        aspnet: ["markup", "csharp"],
        bison: "c",
        c: "clike",
        csharp: "clike",
        cpp: "c",
        coffeescript: "javascript",
        crystal: "ruby",
        "css-extras": "css",
        d: "clike",
        dart: "clike",
        django: "markup-templating",
        ejs: ["javascript", "markup-templating"],
        etlua: ["lua", "markup-templating"],
        erb: ["ruby", "markup-templating"],
        fsharp: "clike",
        "firestore-security-rules": "clike",
        flow: "javascript",
        ftl: "markup-templating",
        glsl: "clike",
        gml: "clike",
        go: "clike",
        groovy: "clike",
        haml: "ruby",
        handlebars: "markup-templating",
        haxe: "clike",
        java: "clike",
        javadoc: ["markup", "java", "javadoclike"],
        jolie: "clike",
        jsdoc: ["javascript", "javadoclike"],
        "js-extras": "javascript",
        "js-templates": "javascript",
        jsonp: "json",
        json5: "json",
        kotlin: "clike",
        latte: ["clike", "markup-templating", "php"],
        less: "css",
        lilypond: "scheme",
        markdown: "markup",
        "markup-templating": "markup",
        n4js: "javascript",
        nginx: "clike",
        objectivec: "c",
        opencl: "c",
        parser: "markup",
        php: ["clike", "markup-templating"],
        phpdoc: ["php", "javadoclike"],
        "php-extras": "php",
        plsql: "sql",
        processing: "clike",
        protobuf: "clike",
        pug: ["markup", "javascript"],
        qml: "javascript",
        qore: "clike",
        jsx: ["markup", "javascript"],
        tsx: ["jsx", "typescript"],
        reason: "clike",
        ruby: "clike",
        sass: "css",
        scss: "css",
        scala: "java",
        "shell-session": "bash",
        smarty: "markup-templating",
        solidity: "clike",
        soy: "markup-templating",
        sparql: "turtle",
        sqf: "clike",
        swift: "clike",
        tap: "yaml",
        textile: "markup",
        tt2: ["clike", "markup-templating"],
        twig: "markup",
        typescript: "javascript",
        "t4-cs": ["t4-templating", "csharp"],
        "t4-vb": ["t4-templating", "visual-basic"],
        vala: "clike",
        vbnet: "basic",
        velocity: "markup",
        wiki: "markup",
        xeora: "markup",
        xquery: "markup",
      },
      l = {
        html: "markup",
        xml: "markup",
        svg: "markup",
        mathml: "markup",
        js: "javascript",
        g4: "antlr4",
        adoc: "asciidoc",
        shell: "bash",
        shortcode: "bbcode",
        rbnf: "bnf",
        conc: "concurnas",
        cs: "csharp",
        dotnet: "csharp",
        coffee: "coffeescript",
        jinja2: "django",
        "dns-zone": "dns-zone-file",
        dockerfile: "docker",
        xlsx: "excel-formula",
        xls: "excel-formula",
        gamemakerlanguage: "gml",
        hs: "haskell",
        tex: "latex",
        context: "latex",
        ly: "lilypond",
        emacs: "lisp",
        elisp: "lisp",
        "emacs-lisp": "lisp",
        md: "markdown",
        moon: "moonscript",
        n4jsd: "n4js",
        objectpascal: "pascal",
        px: "pcaxis",
        pq: "powerquery",
        mscript: "powerquery",
        py: "python",
        robot: "robotframework",
        rb: "ruby",
        sln: "solution-file",
        rq: "sparql",
        trig: "turtle",
        ts: "typescript",
        t4: "t4-cs",
        vb: "visual-basic",
        xeoracube: "xeora",
        yml: "yaml",
      },
      n = {},
      e = "components/",
      a = Prism.util.currentScript();
    if (a) {
      var t = /\bplugins\/autoloader\/prism-autoloader\.(?:min\.)js$/i,
        r = /[\w-]+\.(?:min\.)js$/i;
      if (a.hasAttribute("data-autoloader-path"))
        e = a.getAttribute("data-autoloader-path").trim().replace(/\/?$/, "/");
      else {
        var s = a.src;
        t.test(s)
          ? (e = s.replace(t, "components/"))
          : r.test(s) && (e = s.replace(r, "components/"));
      }
    }
    var p = (Prism.plugins.autoloader = {
      languages_path: e,
      use_minified: !0,
      loadLanguages: o,
    });
    Prism.hooks.add("complete", function (e) {
      e.element &&
        e.language &&
        !e.grammar &&
        "none" !== e.language &&
        (function (e, a) {
          e in l && (e = l[e]);
          var t = a.getAttribute("data-dependencies"),
            r = a.parentElement;
          !t &&
            r &&
            "pre" === r.tagName.toLowerCase() &&
            (t = r.getAttribute("data-dependencies")),
            o((t = t ? t.split(/\s*,\s*/g) : []), function () {
              u(e, function () {
                Prism.highlightElement(a);
              });
            });
        })(e.language, e.element);
    });
  }
  function o(e, a, t) {
    "string" == typeof e && (e = [e]);
    var r = e.length,
      s = 0,
      i = !1;
    function c() {
      i || (++s === r && a && a(e));
    }
    0 !== r
      ? e.forEach(function (e) {
          u(e, c, function () {
            i || ((i = !0), t && t(e));
          });
        })
      : a && setTimeout(a, 0);
  }
  function u(a, t, r) {
    var s = 0 <= a.indexOf("!");
    (a = a.replace("!", "")), (a = l[a] || a);
    var e = function () {
        var e = n[a];
        if (
          (e || (e = n[a] = { callbacks: [] }),
          e.callbacks.push({ success: t, error: r }),
          !s && Prism.languages[a])
        )
          m(a, "success");
        else if (!s && e.error) m(a, "error");
        else if (s || !e.loading) {
          (e.loading = !0),
            (function (e, a, t) {
              var r = document.createElement("script");
              (r.src = e),
                (r.async = !0),
                (r.onload = function () {
                  document.body.removeChild(r), a && a();
                }),
                (r.onerror = function () {
                  document.body.removeChild(r), t && t();
                }),
                document.body.appendChild(r);
            })(
              (function (e) {
                return (
                  p.languages_path +
                  "prism-" +
                  e +
                  (p.use_minified ? ".min" : "") +
                  ".js"
                );
              })(a),
              function () {
                (e.loading = !1), m(a, "success");
              },
              function () {
                (e.loading = !1), (e.error = !0), m(a, "error");
              }
            );
        }
      },
      i = c[a];
    i && i.length ? o(i, e, r) : e();
  }
  function m(e, a) {
    if (n[e]) {
      for (var t = n[e].callbacks, r = 0, s = t.length; r < s; r++) {
        var i = t[r][a];
        i && setTimeout(i, 0);
      }
      t.length = 0;
    }
  }
})();
