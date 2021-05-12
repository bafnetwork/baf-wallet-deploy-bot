(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_platforms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _lib_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _lib_configs__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _lib_chains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_chains__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _lib_keysource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _lib_crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_4__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_4__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_4__["d"]; });

/* harmony import */ var _lib_frontend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var _lib_tx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _lib_tx__WEBPACK_IMPORTED_MODULE_6__["a"]; });










/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_errors__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["e"]; });




/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("near-api-js");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("tweetnacl");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return keccak256; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sha256; });
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_sha3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_1__);


function keccak256(msg) {
    return Buffer.from(js_sha3__WEBPACK_IMPORTED_MODULE_0__["keccak256"](msg), 'hex');
}
function sha256(msg) {
    return Buffer.from(Object(js_sha256__WEBPACK_IMPORTED_MODULE_1__["sha256"])(msg), 'hex');
}
// add more wrappers here as needed


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nearConverter; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);





const nearConverter = Object.assign(Object.assign({}, _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* bufferConverter */ "a"]), { pkToUnified(pk, curveMarker) {
        if (curveMarker.toString() !== 'ed25519') {
            throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_4__[/* BafError */ "a"].UnsupportedKeyCurve('ed25519');
        }
        const data = buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"].from(pk.data);
        return {
            curve: curveMarker,
            data: data,
            format: (fmt) => Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* formatBytes */ "d"])(data, fmt),
        };
    }, pkFromUnified: (unifiedPk) => near_api_js__WEBPACK_IMPORTED_MODULE_1__["utils"].PublicKey.fromString(unifiedPk.format(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58)), keyPairToUnified(keyPair, curveMarker) {
        const skFmt = keyPair.toString();
        if (!skFmt.startsWith(curveMarker.toString())) {
            throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_4__[/* BafError */ "a"].UnsupportedKeyCurve('ed25519');
        }
        const skStr = skFmt.split(':')[1];
        const skData = Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* encodeBytes */ "c"])(skStr, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58);
        const pkData = buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"].from(keyPair.getPublicKey().data);
        return {
            curve: curveMarker,
            pk: {
                curve: curveMarker,
                data: pkData,
                format: (fmt) => Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* formatBytes */ "d"])(pkData, fmt),
            },
            sk: {
                curve: curveMarker,
                data: skData,
                format: (fmt) => Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* formatBytes */ "d"])(skData, fmt),
            },
        };
    },
    keyPairFromUnified(unifiedKeyPair) {
        const prefix = unifiedKeyPair.curve.toString();
        const skStr = unifiedKeyPair.sk.format(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58);
        return near_api_js__WEBPACK_IMPORTED_MODULE_1__["KeyPair"].fromString(`${prefix}:${skStr}`);
    } });


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_0__["b"]; });




/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("typedi");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("discord.js");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("bn.js");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return encodeBytes; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_2__);



function formatBytes(buf, fmt = _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX) {
    switch (fmt) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX:
            return Buffer.from(buf).toString('hex');
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58:
            return bs58__WEBPACK_IMPORTED_MODULE_2__["encode"](Buffer.from(buf));
        default:
            throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_1__[/* BafError */ "a"].UnsupportedEncoding(fmt);
    }
}
function encodeBytes(str, fmt) {
    switch (fmt) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX:
            return Buffer.from(str, 'hex');
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58:
            return bs58__WEBPACK_IMPORTED_MODULE_2__["decode"](str);
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].UTF8:
            return Buffer.from(str, 'utf8');
        default:
            throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_1__[/* BafError */ "a"].UnsupportedEncoding(fmt);
    }
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pkSecpFromXY */
/* unused harmony export keyPairFromSk */
/* unused harmony export pkFromSk */
/* unused harmony export skFromSeed */
/* unused harmony export skFromRng */
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tweetnacl__WEBPACK_IMPORTED_MODULE_4__);





const ellipticSecp256k1 = new elliptic__WEBPACK_IMPORTED_MODULE_3__["ec"]('secp256k1');
function pkSecpFromXY(x, y) {
    const key = ellipticSecp256k1.keyFromPublic({ x, y }, 'hex');
    return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* bufferConverter */ "a"].pkToUnified(Buffer.from(key.getPublic('array')), _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* secp256k1Marker */ "g"]);
}
function keyPairFromSk(sk) {
    const pk = pkFromSk(sk);
    return {
        curve: sk.curve,
        pk,
        sk,
    };
}
function pkFromSk(sk) {
    switch (sk.curve.toString()) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* SECP256K1_STR */ "f"]: {
            const data = Buffer.from(ellipticSecp256k1.keyFromPrivate(sk.data).getPublic(false, 'hex'), 'hex');
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* bufferConverter */ "a"].pkToUnified(data, sk.curve);
        }
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* ED25519_STR */ "b"]: {
            const data = Buffer.from(tweetnacl__WEBPACK_IMPORTED_MODULE_4__["sign"].keyPair.fromSecretKey(new Uint8Array(sk.data)).publicKey);
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* bufferConverter */ "a"].pkToUnified(data, sk.curve);
        }
        default:
            throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_0__[/* BafError */ "a"].UnsupportedKeyCurve(sk.curve.toString());
    }
}
function skFromSeed(seed, curveMarker) {
    switch (curveMarker.toString()) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* SECP256K1_STR */ "f"]: {
            const entropy = tweetnacl__WEBPACK_IMPORTED_MODULE_4__["hash"](seed);
            const ellipticSk = ellipticSecp256k1
                .genKeyPair({ entropy })
                .getPrivate('hex');
            const data = Buffer.from(ellipticSk, 'hex');
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* bufferConverter */ "a"].skToUnified(data, curveMarker);
        }
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* ED25519_STR */ "b"]: {
            const data = Buffer.from(tweetnacl__WEBPACK_IMPORTED_MODULE_4__["sign"].keyPair.fromSeed(new Uint8Array(Buffer.from(seed))).secretKey);
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* bufferConverter */ "a"].pkToUnified(data, curveMarker);
        }
        default:
            throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_0__[/* BafError */ "a"].UnsupportedKeyCurve(curveMarker.toString());
    }
}
function skFromRng(curveMarker) {
    switch (curveMarker.toString()) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* ED25519_STR */ "b"]: {
            const data = Buffer.from(tweetnacl__WEBPACK_IMPORTED_MODULE_4__["sign"].keyPair().secretKey);
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* bufferConverter */ "a"].skToUnified(data, curveMarker);
        }
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* SECP256K1_STR */ "f"]: {
            const data = Buffer.from(ellipticSecp256k1.genKeyPair().getPrivate('hex'), 'hex');
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* bufferConverter */ "a"].pkToUnified(data, curveMarker);
        }
        default:
            throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_0__[/* BafError */ "a"].UnsupportedKeyCurve(curveMarker.toString());
    }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export verifySignature */
/* unused harmony export signMsg */
/* unused harmony export encodeSecpSigRustContract */
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tweetnacl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);






const ellipticSecp256k1 = new elliptic__WEBPACK_IMPORTED_MODULE_2__["ec"]('secp256k1');
function verifySignature(pk, msg, signedMsg, hashFn = _hash__WEBPACK_IMPORTED_MODULE_1__[/* keccak256 */ "a"]) {
    const msgFormat = typeof msg === 'string' ? Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__[/* encodeBytes */ "c"])(msg, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].UTF8) : msg;
    switch (pk.curve.toString()) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* SECP256K1_STR */ "f"]: {
            const msgHash = hashFn(msgFormat);
            let validSig = ellipticSecp256k1.verify(msgHash, signedMsg, pk.data);
            return validSig;
        }
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* ED25519_STR */ "b"]: {
            const msgHash = hashFn(msgFormat);
            return tweetnacl__WEBPACK_IMPORTED_MODULE_3__["sign"].detached.verify(new Uint8Array(msgHash), new Uint8Array(signedMsg), new Uint8Array(pk.data));
        }
        default:
            throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_5__[/* BafError */ "a"].UnsupportedKeyCurve(pk.curve.toString());
    }
}
function signMsg(sk, msg, bafContractFormat = false, hashFn = _hash__WEBPACK_IMPORTED_MODULE_1__[/* keccak256 */ "a"]) {
    const msgFormat = typeof msg === 'string' ? Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__[/* encodeBytes */ "c"])(msg, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].UTF8) : msg;
    switch (sk.curve.toString()) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* SECP256K1_STR */ "f"]: {
            const msgHash = hashFn(msgFormat);
            const ellipticSig = ellipticSecp256k1.sign(msgHash, sk.data, 'hex', {
                canonical: true,
            });
            return bafContractFormat
                ? encodeSecpSigRustContract(ellipticSig)
                : Buffer.from(ellipticSig.toDER('hex'), 'hex');
        }
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* ED25519_STR */ "b"]: {
            const msgHash = hashFn(msgFormat);
            return Buffer.from(tweetnacl__WEBPACK_IMPORTED_MODULE_3__["sign"].detached(new Uint8Array(msgHash), new Uint8Array(sk.data)));
        }
        default:
            throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_5__[/* BafError */ "a"].UnsupportedKeyCurve(sk.curve.toString());
    }
}
function encodeSecpSigRustContract(sig) {
    return Buffer.from(`${sig.r.toString('hex', 64)}${sig.s.toString('hex', 64)}`, 'hex');
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NearNetworkID */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return stringToNetworkID; });
/* unused harmony export getNearNetworkID */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nearToYoctoNear; });
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_2__);



var NearNetworkID;
(function (NearNetworkID) {
    NearNetworkID["DEVNET"] = "testnet";
    NearNetworkID["TESTNET"] = "testnet";
    NearNetworkID["MAINNET"] = "mainnet";
})(NearNetworkID || (NearNetworkID = {}));
function stringToNetworkID(str) {
    switch (str) {
        case NearNetworkID.DEVNET:
            return NearNetworkID.DEVNET;
        case NearNetworkID.TESTNET:
            return NearNetworkID.TESTNET;
        case NearNetworkID.MAINNET:
            return NearNetworkID.MAINNET;
        default:
            throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_0__[/* BafError */ "a"].UnknownNetworkIdent;
    }
}
function getNearNetworkID(env) {
    switch (env) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* Env */ "d"].DEV:
            return NearNetworkID.DEVNET;
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* Env */ "d"].TEST:
            return NearNetworkID.TESTNET;
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* Env */ "d"].PROD:
            return NearNetworkID.MAINNET;
        default:
            return NearNetworkID.DEVNET;
    }
}
function nearToYoctoNear(amount) {
    const amountYoctoNearBN = near_api_js__WEBPACK_IMPORTED_MODULE_2__["utils"].format.NEAR_NOMINATION.muln(amount);
    return amountYoctoNearBN.toString(10);
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);
var _a;

if (!process.env.NON_LOCAL)
    dotenv__WEBPACK_IMPORTED_MODULE_0__["config"]({ path: './env/.env.test' });
const environment = {
    production: false,
    DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
    BASE_WALLET_URL: (_a = process.env.BASE_WALLET_URL) !== null && _a !== void 0 ? _a : 'https://localhost:4200',
};


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Command; });
class Command {
    constructor(client, options) {
        var _a, _b, _c, _d, _e;
        this.client = client;
        this.conf = {
            name: options.name,
            description: (_a = options.description) !== null && _a !== void 0 ? _a : 'No information specified.',
            usage: (_b = options.usage) !== null && _b !== void 0 ? _b : 'No usage specified.',
            category: (_c = options.category) !== null && _c !== void 0 ? _c : 'Information',
            cooldown: (_d = options.cooldown) !== null && _d !== void 0 ? _d : 1000,
            requiredPermissions: (_e = options.requiredPermissions) !== null && _e !== void 0 ? _e : ['READ_MESSAGES'],
        };
        this.cooldowns = new Set();
    }
    /**
     * Checks if the user has permission to run the command.
     * @param {User} user A Discord user.
     * @param {Message} message The original message that was sent.
     * @returns {boolean} Whether the user can run the command.
     */
    async canRun(user, message) {
        const onCooldown = [...this.cooldowns].find((cd) => cd.user === user && cd.guild === message.guild) !== undefined;
        const hasPermission = message.member !== null
            ? message.member.hasPermission(this.conf.requiredPermissions, {
                checkAdmin: true,
                checkOwner: true,
            })
            : false;
        if (!hasPermission || onCooldown) {
            await message.channel.send('You do not have permission for this command or you are on cooldown.');
            return false;
        }
        return true;
    }
    /**
     * Sets the cooldown on a command for a Discord user.
     * @param {User} user The user that will receive a cooldown.
     * @param {Guild} guild The Discord server where the original message was sent.
     */
    setCooldown(user, guild) {
        this.cooldowns.add({ user, guild });
        setTimeout(() => {
            const cooldown = [...this.cooldowns].filter((cd) => cd.user === user && cd.guild === guild)[0];
            this.cooldowns.delete(cooldown);
        }, this.conf.cooldown);
    }
    /**
     * Sends the message in the specified channel.
     * @param {AnyChannel} channel Any Discord channel.
     * @param {EmbedOrMessage} message The message or embed that will be sent.
     * @returns {Promise<Command>} The original command, supports method chaining.
     */
    async respond(channel, message) {
        await channel.send(message);
        return this;
    }
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_near__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_near__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("elliptic");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getContract; });
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_0__);

const initContract = (nearMasterAccount, contractAccountID) => async (params) => {
    var _a;
    const contract = new near_api_js__WEBPACK_IMPORTED_MODULE_0__["Contract"]((_a = params.callerAccount) !== null && _a !== void 0 ? _a : nearMasterAccount, contractAccountID, {
        viewMethods: params.viewMethods,
        changeMethods: params.changeMethods,
    });
    return contract;
};
function getContract(nearState, contractAccountID) {
    return {
        init: initContract(nearState.nearMasterAccount, contractAccountID),
    };
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return settings; });
const settings = {
    presence: {
        activity: {
            name: 'Attack on Titan',
            type: 'WATCHING',
        },
    },
    prefix: '%',
};


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var discord_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var discord_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(discord_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68);





let ActionManager = class ActionManager {
    constructor() {
        this.commands = new discord_js__WEBPACK_IMPORTED_MODULE_1__["Collection"]();
    }
    /**
     * Parses files into commands from the configured command path.
     * @param {BotClient} client The original client, for access to the configuration.
     * @returns {Collection<string, Command>} A dictionary of every command in a [name, object] pair.
     */
    initializeCommands(client) {
        _commands__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].forEach((C) => {
            const command = new C(client);
            console.log(command.conf.name);
            this.commands.set(command.conf.name, command);
        });
    }
    /**
     * Initializes every event from the configured event path.
     * @param {BotClient} client The original client, for access to the configuration.
     */
    initializeEvents(client) {
        _events__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].forEach((C) => {
            const event = new C(client);
            const eventName = event.name();
            console.log(eventName);
            client.on(eventName, (args) => {
                console.log(`got a event of type ${eventName}!`);
                // eslint-disable-next-line
                event.run(args);
            });
        });
    }
};
ActionManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedi__WEBPACK_IMPORTED_MODULE_2__["Service"])()
], ActionManager);



/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("bs58");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("near-api-js/lib/account_creator");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("near-api-js/lib/key_stores");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _switches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["a"]; });






/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getWrappedInterface */
/* unused harmony export getChainInterface */
/* unused harmony export wrapChainInterface */
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_near__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);



// these are kind of ugly, but the ugly should be limited to here, all in the pursuit of typed-ness and editor completions
// NOTE: This will return the wrong type if you put in a type paramteter that conflicts with the 'chain' argument
async function getWrappedInterface(chain, initParams) {
    const chainInterface = getChainInterface(chain);
    return await wrapChainInterface(chainInterface, initParams);
}
// NOTE: This will return the wrong type if you put in a type paramter that conflicts with the 'chain' argument
function getChainInterface(chain) {
    switch (chain) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* Chain */ "a"].NEAR:
            return _baf_wallet_near__WEBPACK_IMPORTED_MODULE_2__[/* nearChainInterface */ "a"];
        default:
            throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_0__[/* BafError */ "a"].UnsupportedChain(chain);
    }
}
async function wrapChainInterface(unwrapped, initParams) {
    const innerSdk = await unwrapped.init(initParams);
    const wrapped = {
        rpc: unwrapped.rpc(innerSdk),
        tx: unwrapped.tx(innerSdk),
        accounts: unwrapped.accounts(innerSdk),
        convert: unwrapped.convert,
        getConstants: unwrapped.getConstants,
        getContract: (address) => unwrapped.getContract(innerSdk, address),
        // Note: in the future, some chainInterfaces might want to do stuff in this fn
        getInner: () => innerSdk,
    };
    return wrapped;
}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BafError; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

var BafError;
(function (BafError) {
    BafError.UninitChain = (chain) => emitError(`You must initialize your account on ${chain} first.`);
    BafError.InvalidSignature = (pk) => emitError(`An invalid signature has been provided for ${pk.format(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX)}`);
    BafError.Unimplemented = () => emitError('Unimplemented');
    BafError.InvalidTransactionApproveRedirect = () => emitError("The transaction must be either in the url or passed in through the component's state");
    BafError.InvalidPackedKey = () => emitError('The key in storage has an invalid format');
    BafError.UnsupportedKeyCurve = (supportedCurve) => emitError(`Only ${supportedCurve} keys are supported`);
    BafError.BlockedByCors = () => emitError('Not allowed by CORS policy');
    BafError.UnintBafContract = () => emitError('BAF Contract is not initialized yet, please call setBafContract');
    BafError.UnsupportedToken = (tokenName) => emitError(`Unsupported token ${tokenName}`);
    BafError.UnsupportedChain = (chainName) => emitError(`Unsupported blockchain ${chainName}`);
    BafError.MissingInitBalance = (chain) => emitError(`An initial balance must be specified when initializing an account on ${chain}`);
    BafError.MissingKeyPair = () => {
        emitError('A key path or key pair must be provided');
    };
    BafError.UnknownNetworkIdent = (identifier) => emitError(`Unknown network identifier ${identifier}`);
    BafError.InvalidChainInfoJSON = (err) => emitError(`Received invalid info.json: ${err}. See \`ChainInfo\` in chain-info/src/lib/index.ts for more information`);
    BafError.UnsupportedEncoding = (fmt) => emitError(`Encoding for format ${fmt} is unsupported`);
    BafError.GenericTxRequiresOauthInfo = () => emitError(`The generic transaction requires the recipient user id, its readable form, and the oauth provider`);
    BafError.SecpPKNotAssociatedWithAccount = (chain) => emitError(`The provided public key is not associated with an account on ${chain}`);
    BafError.NonuniformTxActionRecipients = (chain) => emitError(`${chain} only supports one recipient for a set of Tx Actions`);
    BafError.MissingContractAddress = () => emitError(`The contract address must be specified`);
    BafError.InvalidTokenContractAddress = (addr) => emitError(`Address ${addr} does not exist or is not a token contract`);
    BafError.InvalidContractAddress = (addr) => emitError(`Address ${addr} does not exist or is not a contract`);
})(BafError || (BafError = {}));
// A wrapper function to emit an error, this would allow us to do things such as easier Sentry logging
function emitError(errStr) {
    return new Error(errStr);
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Env; });
var Env;
(function (Env) {
    Env[Env["DEV"] = 0] = "DEV";
    Env[Env["TEST"] = 1] = "TEST";
    Env[Env["PROD"] = 2] = "PROD";
})(Env || (Env = {}));


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chain; });
var Chain;
(function (Chain) {
    Chain["NEAR"] = "near";
})(Chain || (Chain = {}));


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export KeySourceMethod */
var KeySourceMethod;
(function (KeySourceMethod) {
    KeySourceMethod[KeySourceMethod["TORUS"] = 0] = "TORUS";
    KeySourceMethod[KeySourceMethod["LOCAL_STORAGE"] = 1] = "LOCAL_STORAGE";
    // e.g. file, ledger, brain, etc, as they are implemented
})(KeySourceMethod || (KeySourceMethod = {}));


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ED25519_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SECP256K1_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return secp256k1Marker; });
/* unused harmony export ed25519Marker */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Encoding; });
const ED25519_STR = 'ed25519';
const SECP256K1_STR = 'secp256k1';
const secp256k1Marker = { toString: () => SECP256K1_STR };
const ed25519Marker = { toString: () => ED25519_STR };
var Encoding;
(function (Encoding) {
    Encoding[Encoding["BS58"] = 0] = "BS58";
    Encoding[Encoding["HEX"] = 1] = "HEX";
    Encoding[Encoding["UTF8"] = 2] = "UTF8";
})(Encoding || (Encoding = {}));


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericTxSupportedActions; });
/* unused harmony export SupportedTransferTypes */
var GenericTxSupportedActions;
(function (GenericTxSupportedActions) {
    GenericTxSupportedActions["TRANSFER"] = "transfer";
    GenericTxSupportedActions["TRANSFER_CONTRACT_TOKEN"] = "transfer contract token";
})(GenericTxSupportedActions || (GenericTxSupportedActions = {}));
/**
 * TODO: add NFT Support
 */
var SupportedTransferTypes;
(function (SupportedTransferTypes) {
    SupportedTransferTypes["NativeToken"] = "Native Token";
    SupportedTransferTypes["ContractToken"] = "Contract Token";
})(SupportedTransferTypes || (SupportedTransferTypes = {}));


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nearChainInterface; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);
/* harmony import */ var _contract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64);
/* harmony import */ var _accounts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65);
/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26);
/* harmony import */ var near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66);
/* harmony import */ var near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);












const nearChainInterface = {
    accounts: _accounts__WEBPACK_IMPORTED_MODULE_6__[/* nearAccounts */ "a"],
    tx: _tx__WEBPACK_IMPORTED_MODULE_2__[/* nearTx */ "a"],
    convert: _convert__WEBPACK_IMPORTED_MODULE_7__[/* nearConverter */ "a"],
    rpc: _rpc__WEBPACK_IMPORTED_MODULE_5__[/* nearRpc */ "a"],
    getConstants: _constants__WEBPACK_IMPORTED_MODULE_3__[/* getConstants */ "a"],
    init,
    getContract: _contract__WEBPACK_IMPORTED_MODULE_4__[/* getContract */ "a"],
};
async function init({ networkID, masterAccountID, keyPath, keyPair, }) {
    const nodeUrl = `https://rpc.${networkID}.near.org`;
    const connectConfig = {
        networkId: networkID,
        nodeUrl,
        helperUrl: `https://helper.${networkID}.near.org`,
        masterAccount: masterAccountID,
        keyPath,
    };
    if (keyPair) {
        const keyStore = new near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_8__["InMemoryKeyStore"]();
        const nearKp = new near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_9__["KeyPairEd25519"](keyPair.sk.format(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58));
        keyStore.setKey(networkID, masterAccountID, nearKp);
        connectConfig.deps = {
            keyStore: keyStore,
        };
        connectConfig.keyStore = keyStore;
    }
    else if (keyPath) {
        const keyStore = new near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_8__["InMemoryKeyStore"]();
        connectConfig.deps = {
            keyStore: keyStore,
        };
    }
    else {
        throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_10__[/* BafError */ "a"].MissingKeyPair();
    }
    const near = await Object(near_api_js__WEBPACK_IMPORTED_MODULE_1__["connect"])(connectConfig);
    const nearMasterAccount = await near.account(masterAccountID);
    return {
        near,
        networkID,
        rpcProvider: new near_api_js__WEBPACK_IMPORTED_MODULE_1__["providers"].JsonRpcProvider(nodeUrl),
        nearMasterAccount,
        getFungibleTokenContract: (contractAccountID) => Object(_contract__WEBPACK_IMPORTED_MODULE_4__[/* initContract */ "b"])(nearMasterAccount, contractAccountID)({
            viewMethods: ['ft_balance_of', 'ft_total_supply', 'storage_balance_of'],
            changeMethods: ['ft_transfer'],
        }),
    };
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _hash__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _sign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["a"]; });








/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* unused harmony reexport * */
/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* unused harmony reexport * */
/* harmony import */ var _sign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* unused harmony reexport * */





/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _bytes__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _bytes__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _conversions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _conversions__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var _user_verifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _serialize__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _serialize__WEBPACK_IMPORTED_MODULE_4__["b"]; });








/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bufferConverter; });
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_1__);


const bufferConverter = {
    skFromUnified,
    skToUnified,
    pkFromUnified,
    pkToUnified,
    keyPairFromUnified,
    keyPairToUnified,
};
function skFromUnified(unifiedSk) {
    return buffer__WEBPACK_IMPORTED_MODULE_1__["Buffer"].from(unifiedSk.data);
}
function skToUnified(sk, curveMarker) {
    const data = buffer__WEBPACK_IMPORTED_MODULE_1__["Buffer"].from(sk);
    return {
        data,
        curve: curveMarker,
        format: (fmt) => Object(_bytes__WEBPACK_IMPORTED_MODULE_0__[/* formatBytes */ "b"])(data, fmt),
    };
}
function pkFromUnified(bafPk) {
    return buffer__WEBPACK_IMPORTED_MODULE_1__["Buffer"].from(bafPk.data);
}
function pkToUnified(pk, curveMarker) {
    const data = buffer__WEBPACK_IMPORTED_MODULE_1__["Buffer"].from(pk);
    return {
        data,
        curve: curveMarker,
        format: (fmt) => Object(_bytes__WEBPACK_IMPORTED_MODULE_0__[/* formatBytes */ "b"])(data, fmt),
    };
}
function keyPairFromUnified(unifiedKeyPair) {
    const { pk, sk } = unifiedKeyPair;
    return {
        fst: buffer__WEBPACK_IMPORTED_MODULE_1__["Buffer"].from(sk.data),
        snd: buffer__WEBPACK_IMPORTED_MODULE_1__["Buffer"].from(pk.data),
    };
}
function keyPairToUnified(keyPair, curveMarker) {
    const skBytes = keyPair.fst;
    const pkBytes = keyPair.snd;
    return {
        curve: curveMarker,
        sk: skToUnified(skBytes, curveMarker),
        pk: pkToUnified(pkBytes, curveMarker),
    };
}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getEnumValues */
const getEnumValues = (enumObj) => Object.keys(enumObj).map((key) => enumObj[key]);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createUserVerifyMessage */
function createUserVerifyMessage(userId, nonce) {
    return `${userId}:${nonce}`;
}


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return serializeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deserializeData; });
const serializeData = (data) => JSON.stringify(data);
// TODO: add type checking. See https://github.com/bafnetwork/baf-wallet-v2/issues/36
const deserializeData = (uriEncoded) => JSON.parse(uriEncoded);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pkToArray; });
/* unused harmony export pkToString */
/* unused harmony export pkFromString */
/* unused harmony export skFromString */
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function pkToArray(key) {
    return [...key.data];
}
function pkToString(key, keyFormat = _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX) {
    return Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__[/* formatBytes */ "d"])(key.data, keyFormat);
}
function pkFromString(key, curve, keyFormat = _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX) {
    const data = Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__[/* encodeBytes */ "c"])(key, keyFormat);
    return {
        data,
        curve,
        format: (fmt) => Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__[/* formatBytes */ "d"])(data, fmt),
    };
}
function skFromString(key, curve, keyFormat = _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX) {
    const data = Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__[/* encodeBytes */ "c"])(key, keyFormat);
    return {
        data,
        curve,
        format: (fmt) => Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__[/* formatBytes */ "d"])(data, fmt),
    };
}


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setBafContract */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBafContract; });
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(62, 1);
/* harmony import */ var _baf_wallet_crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);




let bafContract;
async function setBafContract(account) {
    bafContract = await buildBafContract(account);
    return bafContract;
}
function getBafContract() {
    if (bafContract)
        return bafContract;
    throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_1__[/* BafError */ "a"].UnintBafContract();
}
async function buildBafContract(account) {
    const contract = new near_api_js__WEBPACK_IMPORTED_MODULE_0__["Contract"](account, _config_json__WEBPACK_IMPORTED_MODULE_2__.contractName, {
        viewMethods: ['get_account_id', 'get_account_nonce'],
        changeMethods: ['set_account_info', 'delete_account_info'],
    });
    return {
        getAccountId: async (pk) => {
            const ret = await contract.get_account_id({
                secp_pk: Object(_baf_wallet_crypto__WEBPACK_IMPORTED_MODULE_3__[/* pkToArray */ "a"])(pk),
            });
            if (!ret || ret === '')
                return null;
            else
                return ret;
        },
        getAccountNonce: (pk) => contract.get_account_nonce({
            secp_pk: Object(_baf_wallet_crypto__WEBPACK_IMPORTED_MODULE_3__[/* pkToArray */ "a"])(pk),
        }),
        setAccountInfo: (pk, user_id, secp_sig_s, new_account_id) => contract.set_account_info({
            user_id,
            secp_pk: Object(_baf_wallet_crypto__WEBPACK_IMPORTED_MODULE_3__[/* pkToArray */ "a"])(pk),
            secp_sig_s: [...secp_sig_s],
            new_account_id,
        }),
        deleteAccountInfo: (pk, user_id, secp_sig_s) => contract.delete_account_info({
            user_id,
            secp_pk: Object(_baf_wallet_crypto__WEBPACK_IMPORTED_MODULE_3__[/* pkToArray */ "a"])(pk),
            secp_sig_s: [...secp_sig_s],
        }),
    };
}


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bafContractConstants */
const bafContractConstants = {
    // :)
    beneficiaryId: 'lev.near',
};


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export formatTokenAmountToIndivisibleUnit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatNativeTokenAmountToIndivisibleUnit; });
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_near__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_3__);




function formatTokenAmountToIndivisibleUnit(amount, decimals) {
    const expStr = `${1}${new Array(decimals).fill('0').join('')}`;
    const exp = new bn_js__WEBPACK_IMPORTED_MODULE_3___default.a(expStr);
    console.log(exp.muln(amount), amount);
    return exp.muln(amount).toString(10);
}
function formatNativeTokenAmountToIndivisibleUnit(amount, chain) {
    switch (chain) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* Chain */ "a"].NEAR:
            return Object(_baf_wallet_near__WEBPACK_IMPORTED_MODULE_2__[/* nearToYoctoNear */ "b"])(amount);
        default:
            throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_0__[/* BafError */ "a"].UnsupportedChain(chain);
    }
}


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deserializeTxParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createApproveRedirectURL; });
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

// TODO: interface check
const deserializeTxParams = (paramsEncoded) => {
    return Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_0__[/* deserializeData */ "b"])(decodeURIComponent(paramsEncoded));
};
const createApproveRedirectURL = (chain, baseURL, opts) => {
    return encodeURI(`${baseURL}/#/approve-redirect/${chain.toString()}/${encodeURIComponent(Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_0__[/* serializeData */ "e"])(opts))}`);
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var discord_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var discord_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(discord_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _managers_ActionManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
var _a;






let Client = class Client extends discord_js__WEBPACK_IMPORTED_MODULE_1__["Client"] {
    constructor(actionManager) {
        var _a;
        super((_a = _config_config__WEBPACK_IMPORTED_MODULE_4__[/* settings */ "a"].clientOptions) !== null && _a !== void 0 ? _a : {});
        this.actionManager = actionManager;
        this.settings = _config_config__WEBPACK_IMPORTED_MODULE_4__[/* settings */ "a"];
        this.initialize();
    }
    initialize() {
        try {
            this.actionManager.initializeCommands(this);
            this.actionManager.initializeEvents(this);
        }
        catch (e) {
            console.error(`Could not initialize bot: ${e}`);
        }
    }
    get commands() {
        return this.actionManager.commands;
    }
};
Client = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedi__WEBPACK_IMPORTED_MODULE_3__["Service"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _managers_ActionManager__WEBPACK_IMPORTED_MODULE_5__[/* ActionManager */ "a"] !== "undefined" && _managers_ActionManager__WEBPACK_IMPORTED_MODULE_5__[/* ActionManager */ "a"]) === "function" ? _a : Object])
], Client);



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Ping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _Send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);


/* harmony default export */ __webpack_exports__["a"] = ([_Ping__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _Send__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]]);


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ping; });
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);

class Ping extends _Command__WEBPACK_IMPORTED_MODULE_0__[/* Command */ "a"] {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: 'Pings the bot.',
            category: 'Information',
            usage: client.settings.prefix.concat('ping'),
            cooldown: 1000,
            requiredPermissions: ['SEND_MESSAGES'],
        });
    }
    async run(message) {
        await super.respond(message.channel, 'Pong!');
    }
}


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendMoney; });
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony import */ var _baf_wallet_redirect_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);





class SendMoney extends _Command__WEBPACK_IMPORTED_MODULE_0__[/* Command */ "a"] {
    constructor(client) {
        super(client, {
            name: 'sendMoney',
            description: 'sends NEAR or NEP-141 tokens on NEAR testnet',
            category: 'Utility',
            usage: `${client.settings.prefix}send [amount in yoctoNear] [asset (optional, defaults to 'NEAR')]  [recipient]`,
            cooldown: 1000,
            requiredPermissions: [],
        });
        this.client = client;
    }
    async run(message) {
        const content = message.content;
        if (!content) {
            throw Error('message content is empty!');
        }
        const params = content.split(' ');
        if (params.length < 3 || params.length > 4) {
            await super.respond(message.channel, `expected 2 parameters, got ${params.length - 1}.\n\`usage: ${this.conf.usage}\``);
            return;
        }
        let amount = parseInt(params[1]);
        if (Number.isNaN(amount)) {
            await super.respond(message.channel, '❌ invalid amount ❌: amount must be a number!');
            return;
        }
        let asset = params[2];
        let recipient;
        if (params.length === 4) {
            asset = params[2];
            recipient = params[3];
        }
        else {
            recipient = params[2];
        }
        // Recipient should look like <@86890631690977280>
        let recipientParsed;
        try {
            recipientParsed = recipient.split('<@!')[1].split('>')[0];
        }
        catch (e) {
            await super.respond(message.channel, '❌ invalid user ❌: the user must be tagged!');
            return;
        }
        const recipientUser = this.client.users.resolve(recipientParsed);
        const recipientUserReadable = `${recipientUser.username}#${recipientUser.discriminator}`;
        try {
            const tx = {
                recipientUserId: recipientParsed,
                recipientUserIdReadable: recipientUserReadable,
                actions: [
                    {
                        type: _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_4__[/* GenericTxSupportedActions */ "e"].TRANSFER,
                        amount: Object(_baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_1__[/* formatNativeTokenAmountToIndivisibleUnit */ "a"])(amount, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_4__[/* Chain */ "a"].NEAR),
                    },
                ],
                oauthProvider: 'discord',
            };
            const link = Object(_baf_wallet_redirect_generator__WEBPACK_IMPORTED_MODULE_2__[/* createApproveRedirectURL */ "a"])(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_4__[/* Chain */ "a"].NEAR, _environments_environment__WEBPACK_IMPORTED_MODULE_3__[/* environment */ "a"].BASE_WALLET_URL, tx);
            await super.respond(message.channel, "Please check your DM's for a link to approve the transaction!");
            await message.author.send(`To open BAF Wallet and approve your transaction, please open this link: ${link}`);
        }
        catch (err) {
            console.error(err);
            await super.respond(message.channel, `🚧 an error has occurred 🚧:
        \n\`${err}\`
        \nPlease create an issue at https://github.com/bafnetwork/baf-wallet-v2/issues and HODL tight until we fix it.`);
            return;
        }
    }
}


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nearTx; });
/* unused harmony export extractGenericActionsFromTx */
/* unused harmony export buildParamsFromGenericTx */
/* unused harmony export buildNearTx */
/* unused harmony export signNearTx */
/* unused harmony export sendNearTx */
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _baf_wallet_baf_contract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61);
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);








function nearTx(innerSdk) {
    return {
        build: buildNearTx(innerSdk),
        sign: signNearTx,
        send: sendNearTx(innerSdk),
        buildParamsFromGenericTx: buildParamsFromGenericTx(innerSdk),
        extractGenericActionsFromTx,
    };
}
function buildNativeAction(receiverId, action, innerSdk) {
    const actionType = action.type;
    switch (actionType) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* GenericTxSupportedActions */ "e"].TRANSFER:
            return near_api_js__WEBPACK_IMPORTED_MODULE_4__["transactions"].transfer(new bn_js__WEBPACK_IMPORTED_MODULE_3___default.a(action.amount, 10));
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* GenericTxSupportedActions */ "e"].TRANSFER_CONTRACT_TOKEN:
            const params = action;
            return near_api_js__WEBPACK_IMPORTED_MODULE_4__["transactions"].functionCall('ft_transfer', {
                receiver_id: receiverId,
                amount: params.amount,
                memo: params.memo,
            }, 
            // TODO: maximum gas fees per chain: see https://github.com/bafnetwork/baf-wallet-v2/issues/68
            new bn_js__WEBPACK_IMPORTED_MODULE_3___default.a(10000000000000), // Maximum gas fee
            new bn_js__WEBPACK_IMPORTED_MODULE_3___default.a(1) // A deposit associated with the ft_transfer action
            );
        default:
            throw `Action of type ${actionType} is unsupported`;
    }
}
const checkAllContractActions = (actions) => {
    if (!actions.every(isContractCall)) {
        return false;
    }
    if (actions.length === 0) {
        return true;
    }
    const contract = actions[0]
        .contractAddress;
    for (let i = 1; i < actions.length; i++) {
        if (actions[i].contractAddress !==
            contract) {
            return false;
        }
    }
    return true;
};
const isContractCall = (action) => action.type === _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* GenericTxSupportedActions */ "e"].TRANSFER_CONTRACT_TOKEN;
const extractGenericActionsFromTx = (txParams) => {
    return txParams.actions;
};
const buildParamsFromGenericTx = (innerSdk) => async (txParams, recipientPk, _senderPk, senderPk) => {
    const recipientAccountID = await Object(_baf_wallet_baf_contract__WEBPACK_IMPORTED_MODULE_6__[/* getBafContract */ "a"])().getAccountId(recipientPk);
    if (!recipientAccountID) {
        throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_7__[/* BafError */ "a"].SecpPKNotAssociatedWithAccount(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Chain */ "a"].NEAR);
    }
    const nearTxParams = {
        actions: txParams.actions,
        senderPk: senderPk,
        senderAccountID: innerSdk.nearMasterAccount.accountId,
        recipientAccountID,
    };
    return nearTxParams;
};
const buildNearTx = (innerSdk) => async ({ actions, senderPk, senderAccountID, recipientAccountID, }) => {
    if (actions.some(isContractCall) && !checkAllContractActions(actions)) {
        throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_7__[/* BafError */ "a"].NonuniformTxActionRecipients(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Chain */ "a"].NEAR);
    }
    const nearSenderPk = _convert__WEBPACK_IMPORTED_MODULE_5__[/* nearConverter */ "a"].pkFromUnified(senderPk);
    const accessKey = await innerSdk.rpcProvider.query(`access_key/${senderAccountID}/${nearSenderPk.toString()}`, '');
    const nonce = ++accessKey.nonce;
    const recentBlockHash = near_api_js__WEBPACK_IMPORTED_MODULE_4__["utils"].serialize.base_decode(accessKey.block_hash);
    const nativeActions = actions.map((action) => buildNativeAction(recipientAccountID, action, innerSdk));
    const transactionRecipient = actions.some(isContractCall) && actions.length > 0
        ? actions[0].contractAddress
        : recipientAccountID;
    return near_api_js__WEBPACK_IMPORTED_MODULE_4__["transactions"].createTransaction(senderAccountID, nearSenderPk, transactionRecipient, nonce, nativeActions, recentBlockHash);
};
async function signNearTx(tx, keyPair, _opts) {
    const nearKeyPair = _convert__WEBPACK_IMPORTED_MODULE_5__[/* nearConverter */ "a"].keyPairFromUnified(keyPair);
    const serializedTx = near_api_js__WEBPACK_IMPORTED_MODULE_4__["utils"].serialize.serialize(near_api_js__WEBPACK_IMPORTED_MODULE_4__["transactions"].SCHEMA, tx);
    const serializedTxHash = new Uint8Array(Object(_baf_wallet_crypto__WEBPACK_IMPORTED_MODULE_1__[/* sha256 */ "b"])(buffer__WEBPACK_IMPORTED_MODULE_2__["Buffer"].from(serializedTx)));
    const signature = nearKeyPair.sign(serializedTxHash);
    // const [_, signedTx] = await signTransaction(tx, )
    return new near_api_js__WEBPACK_IMPORTED_MODULE_4__["transactions"].SignedTransaction({
        transaction: tx,
        signature: new near_api_js__WEBPACK_IMPORTED_MODULE_4__["transactions"].Signature({
            keyType: tx.publicKey.keyType,
            data: signature.signature,
        }),
    });
}
const sendNearTx = (innerSdk) => async (tx) => {
    const serialized = tx.encode();
    const result = await innerSdk.rpcProvider.sendJsonRpc('broadcast_tx_commit', [
        buffer__WEBPACK_IMPORTED_MODULE_2__["Buffer"].from(serialized).toString('base64'),
    ]);
    const explorerLink = `https://explorer.${innerSdk.networkID}.near.org/transactions/${result.transaction.hash}`;
    return {
        fst: result,
        snd: explorerLink,
    };
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("js-sha3");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("js-sha256");

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_baf_contract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_baf_contract__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);




/***/ }),
/* 62 */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"dev-1619398846158-6592600\"}");

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getConstants; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

function getConstants(env) {
    if (env === _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Env */ "d"].PROD) {
        return {
            tokens: [],
        };
    }
    else {
        return {
            tokens: [
                {
                    contractAddress: 'ft.levtester.testnet',
                },
            ],
        };
    }
}


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nearRpc; });
/* unused harmony export getNodeUrl */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

// * add more RPC methods as they are needed
function nearRpc(_innerSdk) {
    return {
        endpoint: getNodeUrl,
    };
}
function getNodeUrl(network) {
    const networkID = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* stringToNetworkID */ "b"])(network !== null && network !== void 0 ? network : 'mainnet');
    return `https://rpc.${networkID}.near.org`;
}


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nearAccounts; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var near_api_js_lib_account_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var near_api_js_lib_account_creator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(near_api_js_lib_account_creator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);




const NEP141ViewMethods = [
    'ft_balance_of',
    'ft_total_supply',
    'storage_balance_of',
];
const NEP141ChangeMethods = [
    'ft_transfer',
    'ft_transfer_call',
    'storage_deposit',
];
function nearAccounts(nearState) {
    const { near } = nearState;
    return {
        lookup: async (accountID) => await near.account(accountID),
        getGenericMasterAccount: () => {
            return {
                getBalance: async () => (await nearState.nearMasterAccount.getAccountBalance())
                    .total,
                getContractTokenBalance: async (contractName) => {
                    const contract = await nearState.getFungibleTokenContract(contractName);
                    return await contract.ft_balance_of({
                        account_id: nearState.nearMasterAccount.accountId,
                    });
                },
            };
        },
        create: async ({ accountID, newAccountPk, initialBalance, method = 'helper', }) => {
            if (method === 'local' && !initialBalance) {
                throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_3__[/* BafError */ "a"].MissingInitBalance(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Chain */ "a"].NEAR);
            }
            const masterAccount = await near.account(near.config.masterAccount);
            const accountCreator = method === 'helper'
                ? new near_api_js_lib_account_creator__WEBPACK_IMPORTED_MODULE_1__["UrlAccountCreator"](near.connection, near.config.helperUrl)
                : new near_api_js_lib_account_creator__WEBPACK_IMPORTED_MODULE_1__["LocalAccountCreator"](masterAccount, initialBalance);
            await accountCreator.createAccount(accountID, _convert__WEBPACK_IMPORTED_MODULE_2__[/* nearConverter */ "a"].pkFromUnified(newAccountPk));
            return await near.account(accountID);
        },
    };
}


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("near-api-js/lib/utils");

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_redirect_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_redirect_generator__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _Ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);


/* harmony default export */ __webpack_exports__["a"] = ([_Message__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _Ready__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]]);


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
/* harmony import */ var discord_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var discord_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(discord_js__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable @typescript-eslint/no-non-null-assertion */

class Message {
    constructor(client) {
        this.client = client;
    }
    name() {
        return 'message';
    }
    async run(args) {
        if (!(args instanceof discord_js__WEBPACK_IMPORTED_MODULE_0__["Message"])) {
            // TODO use winston
            console.error('invalid args for Message event');
            return args;
        }
        const message = args;
        if (message.author.bot ||
            !message.content.startsWith(this.client.settings.prefix))
            return;
        const argus = message.content.split(/\s+/g);
        const command = argus.shift().slice(this.client.settings.prefix.length);
        const cmd = this.client.commands.get(command);
        if (cmd === undefined || !(await cmd.canRun(message.author, message)))
            return;
        await cmd.run(message, argus);
        if (message.guild !== null)
            cmd.setCooldown(message.author, message.guild);
    }
}


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ready; });
class Ready {
    constructor(client) {
        this.client = client;
    }
    name() {
        return 'ready';
    }
    async run() {
        if (this.client.user !== null) {
            console.log(`${this.client.user.username} is ready!`);
            await this.client.user.setPresence(this.client.settings.presence);
        }
    }
}


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53);




// Initialize the Client using the IoC.
const client = typedi__WEBPACK_IMPORTED_MODULE_2__["Container"].get(_Client__WEBPACK_IMPORTED_MODULE_3__[/* Client */ "a"]);
client
    .login(_environments_environment__WEBPACK_IMPORTED_MODULE_1__[/* environment */ "a"].DISCORD_BOT_TOKEN)
    .then(() => {
    console.log('tokenbot happily hodling along');
})
    .catch((e) => console.error(e));


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map