"use strict";
/*! JSFuck 0.4.0 - http://jsfuck.com */
(function(global) {
  // console.log(global)
  "use strict";
  //   self = typeof exports === "undefined" ? window : exports;
  //   self.JSFuck = {
  //     encode: encode
  //   };
  // console.log(this)

  if (typeof exports === "object" && typeof module !== "undefined") {
    // module.exports = mainExports;
    module.exports = { encode };
  } else {
    global.JSFuck = {
      encode
    };
  }
  var USE_CHAR_CODE = "USE_CHAR_CODE";

  var MIN = 32,
    MAX = 126;

  var SIMPLE = {
    false: "![]",
    true: "!![]",
    undefined: "[][[]]",
    NaN: "+[![]]",
    Infinity: "+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]]+[+[]])" // +"1e1000"
  };

  var CONSTRUCTORS = {
    Array: "[]",
    Number: "(+[])",
    String: "([]+[])",
    Boolean: "(![])",
    Function: '[]["filter"]',
    RegExp: 'Function("return/0/")()'
  };

  var MAPPING = {
    a: '(false+"")[1]',
    b: '(+(11))["toString"](20)',
    c: '([]["filter"]+"")[3]',
    d: '(undefined+"")[2]',
    e: '(true+"")[3]',
    f: '(false+"")[0]',
    g: "(+false+[false]+String)[20]",
    h: '(+(101))["toString"](21)[1]',
    i: "([false]+undefined)[10]",
    j: '(+(40))["toString"](21)[1]',
    k: '(+(20))["toString"](21)',
    l: '(false+"")[2]',
    m: '(Number+"")[11]',
    n: '(undefined+"")[1]',
    o: '(true+[]["filter"])[10]',
    p: '(+(211))["toString"](31)[1]',
    q: '(+(212))["toString"](31)[1]',
    r: '(true+"")[1]',
    s: '(false+"")[3]',
    t: '(true+"")[0]',
    u: '(undefined+"")[0]',
    v: '(+(31))["toString"](32)',
    w: '(+(32))["toString"](33)',
    x: '(+(101))["toString"](34)[1]',
    y: "(NaN+[Infinity])[10]",
    z: '(+(35))["toString"](36)',

    A: "(+false+Array)[10]",
    B: "(+false+Boolean)[10]",
    C: 'Function("return escape")()("<")[2]',
    D: 'Function("return escape")()("=")[2]',
    E: '(RegExp+"")[12]',
    F: "(+false+Function)[10]",
    G: '(false+Function("return Date")()())[30]',
    H: USE_CHAR_CODE,
    I: '(Infinity+"")[0]',
    J: USE_CHAR_CODE,
    K: USE_CHAR_CODE,
    L: USE_CHAR_CODE,
    M: '(true+Function("return Date")()())[30]',
    N: '(NaN+"")[0]',
    O: USE_CHAR_CODE,
    P: USE_CHAR_CODE,
    Q: USE_CHAR_CODE,
    R: "(+false+RegExp)[10]",
    S: "(+false+String)[10]",
    T: '(NaN+Function("return Date")()())[30]',
    U: USE_CHAR_CODE,
    V: USE_CHAR_CODE,
    W: USE_CHAR_CODE,
    X: USE_CHAR_CODE,
    Y: USE_CHAR_CODE,
    Z: USE_CHAR_CODE,

    " ": '(NaN+[]["filter"])[11]',
    "!": USE_CHAR_CODE,
    '"': '("")["fontcolor"]()[12]',
    "#": USE_CHAR_CODE,
    $: USE_CHAR_CODE,
    "%": 'Function("return escape")()("<")[0]',
    "&": USE_CHAR_CODE,
    "'": USE_CHAR_CODE,

    "(": '(false+[]["filter"])[20]',
    ")": '(true+[]["filter"])[20]',
    "*": USE_CHAR_CODE,
    "+": "(+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]])+[])[2]",
    ",": '[[]]["concat"]([[]])+""',
    "-": '(+(.+[0000000001])+"")[2]',
    ".":
      "(+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]",
    "/": '(false+[+false])["italics"]()[10]',
    ":": '(RegExp()+"")[3]',
    ";": USE_CHAR_CODE,
    "<": '("")["italics"]()[0]',
    "=": '("")["fontcolor"]()[11]',
    ">": '("")["italics"]()[2]',
    "?": '(RegExp()+"")[2]',
    "@": USE_CHAR_CODE,
    "[": '(GLOBAL+"")[0]',
    "\\": USE_CHAR_CODE,

    //  '\\': `( [][(![]+[])[!+[]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+(!![]+[])[+!![]]]((!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+([][[]]+[])[+[]]+([][[]]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(![]+[])[!+[]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+(+(NaN+[]["filter"])[21](NaN+[]["filter"])[37]+[])[+!![]]+((!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]))[(!![]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+([]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+(!![]+[])[+!![]]])[!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]+!![]+!![]]+([][[]]+[])[+!![]]+([]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+(!![]+[])[+!![]]])[(!+[]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![])]]((!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]))+([][[]]+[])[!+[]+!![]+!![]])()([][(![]+[])[!+[]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+(!![]+[])[+!![]]]((!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(![]+[])[!+[]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+(+(NaN+[]["filter"])[21](NaN+[]["filter"])[37]+[])[+!![]]+((!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]))[(!![]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+([]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+(!![]+[])[+!![]]])[!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]+!![]+!![]]+([][[]]+[])[+!![]]+([]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+!![]]+(!![]+[])[+!![]]])[(!+[]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![])]]((!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]))+([][[]]+[])[!+[]+!![]+!![]])()(([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[+[]])[+[]]+(!+[]+!![]+!![]+!![]+!![]+[])+([]+(NaN+[]["filter"])[21](NaN+[]["filter"])[37])[!+[]+!![]+!![]+!![]+!![]]))[0]`  ,

    "]": USE_CHAR_CODE,
    "^": USE_CHAR_CODE,
    _: USE_CHAR_CODE,
    "`": USE_CHAR_CODE,
    "{": '(NaN+[]["filter"])[21]',
    // '{': '([]["filter"]+[])[18]',
    "|": USE_CHAR_CODE,
    "}": USE_CHAR_CODE,
    "}": '(NaN+[]["filter"])[37]',
    "~": USE_CHAR_CODE
  };

  var GLOBAL = 'Function("return this")()';

  function fillMissingChars() {
    // console.log("fillMissingChars")
    // console.log(MAPPING)
    for (var key in MAPPING) {
      // console.log(key,MAPPING[key])
      if (MAPPING[key] === USE_CHAR_CODE) {
        // console.log(key,MAPPING[key])

        // if (key === '\\') {
        MAPPING[key] =
          'Function("return unescape")()("%"' +
          key
            .charCodeAt(0)
            .toString(16)
            .replace(/(\d+)/g, '+($1)+"') +
          '")';
        // console.log(key,MAPPING[key],MAPPING[key].length)
        //  MAPPING[key] ='( [][(![]+[])[!+[]+!![]+!![]]+([]+{})[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]]((!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+([][[]]+[])[+[]]+([][[]]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(![]+[])[!+[]+!![]+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(+{}+[])[+!![]]+((!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]))[(!![]+[])[+[]]+([]+{})[+!![]]+([]+([]+{})[([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]])[!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]+!![]+!![]]+([][[]]+[])[+!![]]+([]+([]+{})[([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]])[(!+[]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![])]]((!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]))+([][[]]+[])[!+[]+!![]+!![]])()([][(![]+[])[!+[]+!![]+!![]]+([]+{})[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]]((!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(![]+[])[!+[]+!![]+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(+{}+[])[+!![]]+((!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]))[(!![]+[])[+[]]+([]+{})[+!![]]+([]+([]+{})[([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]])[!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]+!![]+!![]]+([][[]]+[])[+!![]]+([]+([]+{})[([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]])[(!+[]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![])]]((!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+!![]))+([][[]]+[])[!+[]+!![]+!![]])()(([]+{})[+[]])[+[]]+(!+[]+!![]+!![]+!![]+!![]+[])+([]+{})[!+[]+!![]+!![]+!![]+!![]]))'
        // } else {
        //   MAPPING[key] = '(\\u00' + key.charCodeAt(0).toString(16) + ')';
        // }
        // console.log(key, MAPPING[key])
        // MAPPING[key] = 'Function("return unescape")()("%"' + key.charCodeAt(0).toString(16).replace(/(\d+)/g, "+($1)+\"") + '")';
        // console.log(key, MAPPING[key])
        // mykey1 = `(unescape("%` + key.charCodeAt(0).toString(16).replace(/(\d+)/g, "+($1)+\"") + '"))';
        // MAPPING[key] = mykey1
        // // MAPPING[key] = "\\u"+ key.charCodeAt(0).toString(16);
        // // MAPPING[key] =  'unescape("%'+key.charCodeAt(0).toString(16)+'")'
        // console.log(key, mykey1)
        // mykey1="(" + encode("\\u00" + key.charCodeAt(0).toString(16)) + ")"
        // console.log(mykey1.length,MAPPING[key].length)
      }
      // console.log(key,MAPPING[key],MAPPING[key].length)
    }

    // console.log(MAPPING)
  }

  function fillMissingDigits() {
    // console.log("fillMissingDigits")
    var output, number, i;

    for (number = 0; number < 10; number++) {
      output = "+[]";

      if (number > 0) {
        output = "+!" + output;
      }
      for (i = 1; i < number; i++) {
        output = "+!+[]" + output;
      }
      if (number > 1) {
        output = output.substr(1);
      }

      MAPPING[number] = "[" + output + "]";
      // console.log(number,MAPPING[number])
    }
  }

  function replaceMap() {
    // console.log("replaceMap")
    var character = "",
      value,
      original,
      i,
      key;

    function replace(pattern, replacement) {
      value = value.replace(new RegExp(pattern, "gi"), replacement);
    }

    function digitReplacer(_, x) {
      return MAPPING[x];
    }

    function numberReplacer(_, y) {
      var values = y.split("");
      var head = +values.shift();
      var output = "+[]";

      if (head > 0) {
        output = "+!" + output;
      }
      for (i = 1; i < head; i++) {
        output = "+!+[]" + output;
      }
      if (head > 1) {
        output = output.substr(1);
      }

      return [output]
        .concat(values)
        .join("+")
        .replace(/(\d)/g, digitReplacer);
    }

    for (i = MIN; i <= MAX; i++) {
      character = String.fromCharCode(i);
      value = MAPPING[character];
      if (!value) {
        continue;
      }
      original = value;

      for (key in CONSTRUCTORS) {
        replace("\\b" + key, CONSTRUCTORS[key] + '["constructor"]');
      }

      for (key in SIMPLE) {
        replace(key, SIMPLE[key]);
      }

      replace("(\\d\\d+)", numberReplacer);
      replace("\\((\\d)\\)", digitReplacer);
      replace("\\[(\\d)\\]", digitReplacer);

      replace("GLOBAL", GLOBAL);
      replace('\\+""', "+[]");
      replace('""', "[]+[]");

      MAPPING[character] = value;
    }
  }

  function replaceStrings() {
    // console.log("replaceStrings")
    var regEx = /[^\[\]\(\)\!\+]{1}/g, // var regEx = /[^\[\]\(\)\!\+\{\}]{1}/g,
      all,
      value,
      missing,
      count = MAX - MIN;

    function findMissing() {
      var all,
        value,
        done = false;

      missing = {};

      for (all in MAPPING) {
        value = MAPPING[all];

        if (value.match(regEx)) {
          missing[all] = value;
          done = true;
        }
      }

      return done;
    }

    function mappingReplacer(a, b) {
      return b.split("").join("+");
    }

    function valueReplacer(c) {
      return missing[c] ? c : MAPPING[c];
    }

    for (all in MAPPING) {
      MAPPING[all] = MAPPING[all].replace(/\"([^\"]+)\"/gi, mappingReplacer);
    }

    while (findMissing()) {
      for (all in missing) {
        value = MAPPING[all];
        value = value.replace(regEx, valueReplacer);

        MAPPING[all] = value;
        missing[all] = value;
      }

      if (count-- === 0) {
        var error = "Could not compile the following chars:";
        console.error("Could not compile the following chars:", missing);
        throw error;
      }
    }
  }
  var haveinit = 0;
  function encode(input, wrapWithEval) {
    if (haveinit === 0) {
      fillMissingDigits();
      fillMissingChars();
      replaceMap();
      replaceStrings();
      haveinit = 1;
    }

    // console.log("encode", input, wrapWithEval)
    var output = [];

    if (!input) {
      return "";
    }

    var r = "";
    for (var i in SIMPLE) {
      r += i + "|";
    }
    r += ".";

    input.replace(new RegExp(r, "g"), function(c) {
      // console.log(c)
      var replacement = SIMPLE[c];
      if (replacement) {
        output.push("[" + replacement + "]+[]");
      } else {
        replacement = MAPPING[c];
        if (replacement) {
          output.push(replacement);
        } else {
          // console.log(c)
          if (c.charCodeAt(0) < 128) {
            replacement =
              "(" + encode("\\u00" + c.charCodeAt(0).toString(16)) + ")";
          } else {
            replacement =
              "(" + encode("\\u" + c.charCodeAt(0).toString(16)) + ")";
          }
          output.push(replacement);
          MAPPING[c] = replacement;
          // console.log(c,replacement)
          /* 
                    if (c === "J") {
                      // replacement1 =
                      //   "([][" + encode("filter") + "]" +
                      //   "[" + encode("constructor") + "]" +
                      //   "(" + encode("return new Date(200000000)") + ")()+[])[!+[]+!+[]+!+[]+!+[]]";
                      // replacement = (([] + new Date(200000000))[4])
          
                      // replacement="("+ encode("\\u00"+c.charCodeAt(0).toString(16))+")"
          
                      replacement = "(" + encode("\\u00" + c.charCodeAt(0).toString(16)) + ")"
                      // replacement1 = "(" + encode("\\x" + c.charCodeAt(0).toString(16)) + ")"
                      // console.log(replacement1.length,replacement.length)
                      output.push(replacement);
                      MAPPING[c] = replacement;
                    } else if (c === "O") {
                      replacement = "(" + encode("\\u00" + c.charCodeAt(0).toString(16)) + ")"
                      // replacement1 = "(" + encode("\\x" + c.charCodeAt(0).toString(16)) + ")"
                      // replacement1 =
                      //   "([][" + encode("filter") + "]" +
                      //   "[" + encode("constructor") + "]" +
                      //   "(" + encode("return new Date(24000000000)") + ")()+[])[!+[]+!+[]+!+[]+!+[]]";
                      // replacement = (([] + new Date(24000000000))[4])
          
                      // replacement="("+ encode("\\u00"+c.charCodeAt(0).toString(16))+")"
                      // console.log(replacement1.length,replacement.length)
                      output.push(replacement);
                      MAPPING[c] = replacement;
                    } else {
                      // console.log(c)
                      // replacement1 =
                      //   "([]+[])[" + encode("constructor") + "]" +
                      //   "[" + encode("fromCharCode") + "]" +
                      //   "(" + encode(c.charCodeAt(0) + "") + ")";
                      if (c.charCodeAt(0) < 128) {
                        replacement = "(" + encode("\\u00" + c.charCodeAt(0).toString(16)) + ")"
                        // replacement1 = "(" + encode("\\x" + c.charCodeAt(0).toString(16)) + ")"
                        // console.log(replacement1.length,replacement.length)
                      } else {
                        replacement = "(" + encode("\\u" + c.charCodeAt(0).toString(16)) + ")"
                      }
                      // console.log(replacement1.length,replacement.length)
                      // replacement =encode(mytihuan)
          
                      // "([]+[])[" + encode("constructor") + "]" +
                      // "[" + encode("fromCharCode") + "]" +
                      // "(" + encode(c.charCodeAt(0) + "") + ")";
                      // console.log(replacement)
                      output.push(replacement);
                      MAPPING[c] = replacement;
                    } */
        }
      }
    });

    output = output.join("+");

    if (/^\d$/.test(input)) {
      output += "+[]";
    }

    if (wrapWithEval) {
      output =
        "[][" +
        encode("filter") +
        "]" +
        "[" +
        encode("constructor") +
        "]" +
        "(" +
        output +
        ")()";
      return output;
    } else {
      return "(" + output + ")";
    }
  }

  // fillMissingDigits();
  // fillMissingChars();
  // replaceMap();
  // replaceStrings();

  // for (var key in MAPPING) console.log(key,MAPPING[key].length)
  // fillMissingChars2();
  // replaceMap();
  // replaceStrings();
  // for (var key in MAPPING) console.log(key,MAPPING[key].length)
  // self.JSFuck = {
  //   encode: encode
  // };
  return global.JSFuck;
})(
  (typeof window !== "undefined" ? window : false) ||
    (typeof WorkerGlobalScope !== "undefined" ? WorkerGlobalScope : false) ||
    this
);
// export default JSFuck
