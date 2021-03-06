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
/******/ 	return __webpack_require__(__webpack_require__.s = 89);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_platforms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _lib_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _lib_configs__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _lib_chains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_chains__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _lib_chain_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _lib_chain_info__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _lib_keysource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var _lib_crypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_5__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_5__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_5__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_5__["e"]; });

/* harmony import */ var _lib_frontend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47);
/* harmony import */ var _lib_tx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _lib_tx__WEBPACK_IMPORTED_MODULE_7__["a"]; });











/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["i"]; });




/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_errors__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("near-api-js");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("typedjson");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);
var _a;


if (!process.env.NON_LOCAL)
    dotenv__WEBPACK_IMPORTED_MODULE_1__["config"]({ path: './env/.env.test' });
const environment = {
    production: false,
    DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
    BASE_WALLET_URL: (_a = process.env.BASE_WALLET_URL) !== null && _a !== void 0 ? _a : 'https://localhost:4200',
    env: _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Env */ "d"].TEST,
};


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return constants; });
/* harmony import */ var _baf_wallet_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _baf_wallet_global_contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_near__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);





const settings = {
    presence: {
        activity: {
            name: 'Axie Infinity',
            type: 'PLAYING',
        },
    },
    prefix: '%',
};
const constants = {
    env: _environments_environment__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].env,
    chainParams: {
        near: {
            keyPair: Object(_baf_wallet_crypto__WEBPACK_IMPORTED_MODULE_0__[/* keyPairFromSk */ "a"])(Object(_baf_wallet_crypto__WEBPACK_IMPORTED_MODULE_0__[/* skFromString */ "e"])(process.env.NEAR_SK, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_2__[/* ed25519Marker */ "h"], _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_2__[/* Encoding */ "c"].BS58)),
            networkID: Object(_baf_wallet_near__WEBPACK_IMPORTED_MODULE_3__[/* getNearNetworkID */ "b"])(_environments_environment__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].env),
            masterAccountID: process.env.NEAR_MASTER_ACCOUNT_ID,
        },
    },
    globalContractAddress: _baf_wallet_global_contract__WEBPACK_IMPORTED_MODULE_1__[/* GlobalContractConfig */ "a"].contractName,
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_global_contract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_global_contract__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_global_contract__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib_global_contract__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_redirect_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_redirect_generator__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("bn.js");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_0__["e"]; });




/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noDefaultNFTContractMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return userUninitMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return usersUninitMessage; });
const noDefaultNFTContractMessage = `The default NFT contract has not been set for this guild. Please contact your Discord's admins to fix this up`;
const userUninitMessage = (user) => `??? invalid user ???: ${user} has not initialized their account with BAF Wallet`;
const usersUninitMessage = (users) => `??? invalid user ???: ${users.join(', ')} ${users.length === 1 ? 'has' : 'have'} not initialized their account${users.length > 1 ? 's' : ''} with BAF Wallet`;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("discord.js");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getContract; });
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUninitUsers; });
/* harmony import */ var _baf_wallet_global_contract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _baf_wallet_torus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);


async function getUninitUsers(users) {
    const associatedAccounts = await Promise.all(users.map(async (user) => {
        const userPk = await Object(_baf_wallet_torus__WEBPACK_IMPORTED_MODULE_1__[/* tryGetTorusPublicAddress */ "a"])(user.id, 'discord');
        if (!userPk) {
            return false;
        }
        const userId = await Object(_baf_wallet_global_contract__WEBPACK_IMPORTED_MODULE_0__[/* getGlobalContract */ "b"])().getAccountId(userPk);
        return userId;
    }));
    return {
        uninitUsers: users.filter((user, i) => !associatedAccounts[i]),
        associatedAccounts: associatedAccounts.filter((account) => !!account),
    };
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("tweetnacl");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return keccak256; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sha256; });
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_sha3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_1__);


function keccak256(msg) {
    return Buffer.from(js_sha3__WEBPACK_IMPORTED_MODULE_0__["keccak256"](msg), 'hex');
}
function sha256(msg) {
    return Buffer.from(Object(js_sha256__WEBPACK_IMPORTED_MODULE_1__["sha256"])(msg), 'hex');
}
// add more wrappers here as needed


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nearConverter; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);





const nearConverter = Object.assign(Object.assign({}, _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* bufferConverter */ "b"]), { pkToUnified(pk, curveMarker) {
        if (curveMarker.toString() !== 'ed25519') {
            throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_4__[/* BafError */ "a"].UnsupportedKeyCurve('ed25519');
        }
        const data = buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"].from(pk.data);
        return {
            curve: curveMarker,
            data: data,
            format: (fmt) => Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* formatBytes */ "f"])(data, fmt),
        };
    }, pkFromUnified: (unifiedPk) => near_api_js__WEBPACK_IMPORTED_MODULE_1__["utils"].PublicKey.fromString(unifiedPk.format(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58)), keyPairToUnified(keyPair, curveMarker) {
        const skFmt = keyPair.toString();
        if (!skFmt.startsWith(curveMarker.toString())) {
            throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_4__[/* BafError */ "a"].UnsupportedKeyCurve('ed25519');
        }
        const skStr = skFmt.split(':')[1];
        const skData = Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* encodeBytes */ "e"])(skStr, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58);
        const pkData = buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"].from(keyPair.getPublicKey().data);
        return {
            curve: curveMarker,
            pk: {
                curve: curveMarker,
                data: pkData,
                format: (fmt) => Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* formatBytes */ "f"])(pkData, fmt),
            },
            sk: {
                curve: curveMarker,
                data: skData,
                format: (fmt) => Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* formatBytes */ "f"])(skData, fmt),
            },
        };
    },
    keyPairFromUnified(unifiedKeyPair) {
        const prefix = unifiedKeyPair.curve.toString();
        const skStr = unifiedKeyPair.sk.format(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58);
        return near_api_js__WEBPACK_IMPORTED_MODULE_1__["KeyPair"].fromString(`${prefix}:${skStr}`);
    } });


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return torusConstants; });
const torusConstants = {
    network: 'ropsten',
    proxyAddress: process.env.TORUS_PROXY_ADDRESS,
    verifierInfo: {
        discord: {
            verifier: process.env.TORUS_VERIFIER_NAME,
            clientId: process.env.DISCORD_CLIENT_ID,
        },
    },
};


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_singletons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_singletons__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_singletons__WEBPACK_IMPORTED_MODULE_0__["b"]; });




/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("typedi");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_near__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_near__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _lib_rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);






/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return nearRpc; });
/* unused harmony export getWalletUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRPCUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getHelperUrl; });
/* unused harmony export getExplorerUrl */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);

// * add more RPC methods as they are needed
function nearRpc(_innerSdk) {
    return {
        endpoint: getRPCUrl,
    };
}
function getWalletUrl(network) {
    const networkID = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* stringToNetworkID */ "c"])(network !== null && network !== void 0 ? network : 'mainnet');
    return `https://wallet.${networkID}.near.org`;
}
function getRPCUrl(network) {
    const networkID = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* stringToNetworkID */ "c"])(network !== null && network !== void 0 ? network : 'mainnet');
    return `https://rpc.${networkID}.near.org`;
}
const getHelperUrl = (networkID) => `https://helper.${networkID}.near.org`;
const getExplorerUrl = (networkID) => `https://explorer.${networkID}.near.org`;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return encodeBytes; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_2__);



function formatBytes(buf, fmt = _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX) {
    switch (fmt) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX:
            return Buffer.from(buf).toString('hex');
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58:
            return bs58__WEBPACK_IMPORTED_MODULE_2__["encode"](Buffer.from(buf));
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].ARRAY:
            return [...buf];
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NearNetworkID */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return stringToNetworkID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNearNetworkID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return nearToYoctoNear; });
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pkSecpFromXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return keyPairFromSk; });
/* unused harmony export pkFromSk */
/* unused harmony export skFromSeed */
/* unused harmony export skFromRng */
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tweetnacl__WEBPACK_IMPORTED_MODULE_4__);





const ellipticSecp256k1 = new elliptic__WEBPACK_IMPORTED_MODULE_3__["ec"]('secp256k1');
function pkSecpFromXY(x, y) {
    const key = ellipticSecp256k1.keyFromPublic({ x, y }, 'hex');
    return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* bufferConverter */ "b"].pkToUnified(Buffer.from(key.getPublic('array')), _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* secp256k1Marker */ "i"]);
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
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* bufferConverter */ "b"].pkToUnified(data, sk.curve);
        }
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* ED25519_STR */ "b"]: {
            const data = Buffer.from(tweetnacl__WEBPACK_IMPORTED_MODULE_4__["sign"].keyPair.fromSecretKey(new Uint8Array(sk.data)).publicKey);
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* bufferConverter */ "b"].pkToUnified(data, sk.curve);
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
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* bufferConverter */ "b"].skToUnified(data, curveMarker);
        }
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* ED25519_STR */ "b"]: {
            const data = Buffer.from(tweetnacl__WEBPACK_IMPORTED_MODULE_4__["sign"].keyPair.fromSeed(new Uint8Array(Buffer.from(seed))).secretKey);
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* bufferConverter */ "b"].pkToUnified(data, curveMarker);
        }
        default:
            throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_0__[/* BafError */ "a"].UnsupportedKeyCurve(curveMarker.toString());
    }
}
function skFromRng(curveMarker) {
    switch (curveMarker.toString()) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* ED25519_STR */ "b"]: {
            const data = Buffer.from(tweetnacl__WEBPACK_IMPORTED_MODULE_4__["sign"].keyPair().secretKey);
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* bufferConverter */ "b"].skToUnified(data, curveMarker);
        }
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* SECP256K1_STR */ "f"]: {
            const data = Buffer.from(ellipticSecp256k1.genKeyPair().getPrivate('hex'), 'hex');
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* bufferConverter */ "b"].pkToUnified(data, curveMarker);
        }
        default:
            throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_0__[/* BafError */ "a"].UnsupportedKeyCurve(curveMarker.toString());
    }
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export verifySignature */
/* unused harmony export signMsg */
/* unused harmony export encodeSecpSigRustContract */
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tweetnacl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);






const ellipticSecp256k1 = new elliptic__WEBPACK_IMPORTED_MODULE_2__["ec"]('secp256k1');
function verifySignature(pk, msg, signedMsg, hashFn = _hash__WEBPACK_IMPORTED_MODULE_1__[/* keccak256 */ "a"]) {
    const msgFormat = typeof msg === 'string' ? Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__[/* encodeBytes */ "e"])(msg, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].UTF8) : msg;
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
function signMsg(sk, msg, GlobalContractFormat = false, hashFn = _hash__WEBPACK_IMPORTED_MODULE_1__[/* keccak256 */ "a"]) {
    const msgFormat = typeof msg === 'string' ? Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__[/* encodeBytes */ "e"])(msg, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].UTF8) : msg;
    switch (sk.curve.toString()) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* SECP256K1_STR */ "f"]: {
            const msgHash = hashFn(msgFormat);
            const ellipticSig = ellipticSecp256k1.sign(msgHash, sk.data, 'hex', {
                canonical: true,
            });
            return GlobalContractFormat
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getEnumValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrayToObject; });
const getEnumValues = (enumObj) => Object.keys(enumObj).map((key) => enumObj[key]);
const arrayToObject = (array) => {
    return array.reduce((prev, v) => {
        prev[v.key] = v.val;
        return prev;
    }, {});
};


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getNearSupportedContractTokens */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getChainConstants; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_chain_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73);
/* harmony import */ var thunky_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);
/* harmony import */ var thunky_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(thunky_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _contract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);





const bridgeContractsProd = [
    '6b175474e89094c44da98b954eedeac495271d0f.factory.bridge.near',
    'dac17f958d2ee523a2206206994597c13d831ec7.factory.bridge.near',
    '1f9840a85d5af5bf1d1762f925bdaddc4201f984.factory.bridge.near',
    '514910771af9ca656af840dff83e8264ecf986ca.factory.bridge.near',
    'a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near',
    '2260fac5e5542a773aa44fbcfedf7c193bc2c599.factory.bridge.near',
    '7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.factory.bridge.near',
    'a0b73e1ff0b80914ab6fe0444e65848c4c34450b.factory.bridge.near',
    '50d1c9771902476076ecfc8b2a83ad6b9355a4c9.factory.bridge.near',
    '4fabb145d64652a948d72533023f6e7a623c7c53.factory.bridge.near',
    '6f259637dcd74c767781e37bc6133cd6a68aa161.factory.bridge.near',
    '6b3595068778dd592e39a122f4f5a5cf09c90fe2.factory.bridge.near',
    'c011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f.factory.bridge.near',
    'c944e90c64b2c07662a292be6244bdf05cda44a7.factory.bridge.near',
    '9f8f72aa9304c8b593d555f12ef6589cc3a579a2.factory.bridge.near',
    '0bc529c00c6401aef6d220be8c6ea1667f6ad93e.factory.bridge.near',
    'c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.factory.bridge.near',
    '0316eb71485b0ab14103307bf65a021042c6d380.factory.bridge.near',
    '111111111117dc0aa78b770fa6a738034120c302.factory.bridge.near',
];
const getNearSupportedContractTokens = (networkId) => {
    switch (networkId) {
        case 'mainnet':
            return ['berryclub.ek.near', 'wrap.near', ...bridgeContractsProd];
        case 'testnet':
        default:
            return ['ft.levtester.testnet', 'wrap.testnet'];
    }
};
async function getChainConstants(nearState) {
    const tokenContracts = getNearSupportedContractTokens(nearState.networkID);
    const ft_metadatas = await Promise.all(tokenContracts.map((contractID) => Object(_contract__WEBPACK_IMPORTED_MODULE_4__[/* getContract */ "a"])(nearState, contractID)
        .init({
        viewMethods: ['ft_metadata'],
        changeMethods: [],
    })
        .then((contract) => contract.ft_metadata())));
    const tokensContractMapping = tokenContracts.map((tokenContract, i) => {
        return {
            key: tokenContract,
            val: async () => {
                return Object.assign(Object.assign({}, ft_metadatas[i]), { contractAddress: tokenContract, chain: _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Chain */ "a"].NEAR, type: 'COIN' });
            },
        };
    });
    const tokens = tokenContracts.map((tokenContract, i) => {
        return {
            key: ft_metadatas[i].symbol,
            val: async () => {
                return Object.assign(Object.assign({}, ft_metadatas[i]), { contractAddress: tokenContract, chain: _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Chain */ "a"].NEAR, type: 'COIN' });
            },
        };
    });
    return {
        nativeTokenInfo: thunky_promise__WEBPACK_IMPORTED_MODULE_2___default()(() => Object(_baf_wallet_chain_info__WEBPACK_IMPORTED_MODULE_1__[/* getTokenInfo */ "a"])(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Chain */ "a"].NEAR)),
        tokens: Object.assign(Object.assign({}, Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_3__[/* arrayToObject */ "a"])(tokens)), Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_3__[/* arrayToObject */ "a"])(tokensContractMapping)),
        supportedContractTokenContracts: tokenContracts,
    };
}


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("elliptic");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("bs58");

/***/ }),
/* 35 */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"dev-1625404571742-20327932784124\"}");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("near-api-js/lib/account_creator");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("near-api-js/lib/key_stores");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var discord_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var discord_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(discord_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86);





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
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@toruslabs/torus.js");

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 42 */
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
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chain; });
var Chain;
(function (Chain) {
    Chain["NEAR"] = "near";
})(Chain || (Chain = {}));


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SocialMediaInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInfoAssets; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typedjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var typedjson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typedjson__WEBPACK_IMPORTED_MODULE_1__);


let SocialMediaInfo = class SocialMediaInfo {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedjson__WEBPACK_IMPORTED_MODULE_1__["jsonMember"])(String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SocialMediaInfo.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedjson__WEBPACK_IMPORTED_MODULE_1__["jsonMember"])(String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SocialMediaInfo.prototype, "url", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedjson__WEBPACK_IMPORTED_MODULE_1__["jsonMember"])(String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SocialMediaInfo.prototype, "handle", void 0);
SocialMediaInfo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    typedjson__WEBPACK_IMPORTED_MODULE_1__["jsonObject"]
], SocialMediaInfo);

// The structure associated with the token info's found on https://github.com/bafnetwork/assets
let TokenInfoAssets = class TokenInfoAssets {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedjson__WEBPACK_IMPORTED_MODULE_1__["jsonMember"])(String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TokenInfoAssets.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedjson__WEBPACK_IMPORTED_MODULE_1__["jsonMember"])(String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TokenInfoAssets.prototype, "website", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedjson__WEBPACK_IMPORTED_MODULE_1__["jsonMember"])(String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TokenInfoAssets.prototype, "source_code", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedjson__WEBPACK_IMPORTED_MODULE_1__["jsonMember"])(String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TokenInfoAssets.prototype, "white_paper", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedjson__WEBPACK_IMPORTED_MODULE_1__["jsonMember"])(String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TokenInfoAssets.prototype, "description", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedjson__WEBPACK_IMPORTED_MODULE_1__["jsonArrayMember"])(SocialMediaInfo),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], TokenInfoAssets.prototype, "socials", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedjson__WEBPACK_IMPORTED_MODULE_1__["jsonMember"])(String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TokenInfoAssets.prototype, "explorer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedjson__WEBPACK_IMPORTED_MODULE_1__["jsonMember"])(String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TokenInfoAssets.prototype, "symbol", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedjson__WEBPACK_IMPORTED_MODULE_1__["jsonMember"])(String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TokenInfoAssets.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedjson__WEBPACK_IMPORTED_MODULE_1__["jsonMember"])(Number),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], TokenInfoAssets.prototype, "decimals", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedjson__WEBPACK_IMPORTED_MODULE_1__["jsonMember"])(String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TokenInfoAssets.prototype, "status", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedjson__WEBPACK_IMPORTED_MODULE_1__["jsonArrayMember"])(String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], TokenInfoAssets.prototype, "tags", void 0);
TokenInfoAssets = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    typedjson__WEBPACK_IMPORTED_MODULE_1__["jsonObject"]
], TokenInfoAssets);



/***/ }),
/* 45 */
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
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ED25519_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SECP256K1_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return secp256k1Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ed25519Marker; });
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
    Encoding[Encoding["ARRAY"] = 3] = "ARRAY";
})(Encoding || (Encoding = {}));


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericTxSupportedActions; });
/* unused harmony export SupportedTransferTypes */
var GenericTxSupportedActions;
(function (GenericTxSupportedActions) {
    GenericTxSupportedActions["TRANSFER"] = "transfer";
    GenericTxSupportedActions["TRANSFER_CONTRACT_TOKEN"] = "transfer contract token";
    GenericTxSupportedActions["TRANSFER_NFT"] = "transfer nft";
    GenericTxSupportedActions["CONTRACT_CALL"] = "contract call";
})(GenericTxSupportedActions || (GenericTxSupportedActions = {}));
var SupportedTransferTypes;
(function (SupportedTransferTypes) {
    SupportedTransferTypes["NativeToken"] = "Native Token";
    SupportedTransferTypes["ContractToken"] = "Contract Token";
})(SupportedTransferTypes || (SupportedTransferTypes = {}));


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _hash__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _index__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _sign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["b"]; });








/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _keys__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _keys__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _sign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);





/***/ }),
/* 51 */
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
    BafError.UninitGlobalContract = () => emitError('Global Contract is not initialized yet, please call setGlobalContract');
    BafError.UnintCommunityContract = () => emitError('Community Contract is not initialized yet, please call setCommunityContract');
    BafError.UnsupportedToken = (tokenName) => emitError(`Unsupported token ${tokenName}`);
    BafError.UnsupportedChain = (chainName) => emitError(`Unsupported blockchain ${chainName}`);
    BafError.MissingInitBalance = (chain) => emitError(`An initial balance must be specified when initializing an account on ${chain}`);
    BafError.MissingKeyPair = () => {
        emitError('A key path or key pair must be provided');
    };
    BafError.UnknownNetworkIdent = (identifier) => emitError(`Unknown network identifier ${identifier}`);
    BafError.InvalidChainTokenListJSON = (err) => emitError(`Received invalid tokenlist.json: ${err}. See \`ChainInfo\` in chain-info/src/lib/chain-info.ts for more information`);
    BafError.InvalidChainInfoJSON = (err) => emitError(`Received invalid info.json: ${err}. See \`ChainInfo\` in chain-info/src/lib/chain-info.ts for more information`);
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
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _bytes__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _bytes__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _chains__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _conversions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _conversions__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _discord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _discord__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _discord__WEBPACK_IMPORTED_MODULE_3__["b"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _user_verifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56);
/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _serialize__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _serialize__WEBPACK_IMPORTED_MODULE_6__["b"]; });










/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export strToChain */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatTokenAmountToIndivisibleUnit; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_2__);



const strToChain = (chain) => {
    return Object(_types__WEBPACK_IMPORTED_MODULE_1__[/* getEnumValues */ "b"])(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Chain */ "a"]).includes(chain.toLowerCase())
        ? chain
        : null;
};
function formatTokenAmountToIndivisibleUnit(amount, decimals) {
    const expStr = `${1}${new Array(decimals).fill('0').join('')}`;
    const exp = new bn_js__WEBPACK_IMPORTED_MODULE_2___default.a(expStr);
    console.log(exp.muln(amount), amount);
    return exp.muln(amount).toString(10);
}


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bufferConverter; });
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parseDiscordRecipient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createDiscordErrMsg; });
/**
 *
 * @param recipient the snowflake ID recieved by the discord bot. Ex, <@86890631690977280>
 * @returns the snowflake ID, ex 86890631690977280
 */
const parseDiscordRecipient = (recipient) => {
    try {
        const recipientParsed = recipient.split('<@!')[1].split('>')[0];
        return recipientParsed;
    }
    catch (e) {
        return null;
    }
};
const createDiscordErrMsg = (err) => {
    return `???? an error has occurred ????:
        \n\`${err}\`
        \nPlease create an issue at https://github.com/bafnetwork/baf-wallet-v2/issues and HODL tight until we fix it.`;
};


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createUserVerifyMessage */
function createUserVerifyMessage(userId, nonce) {
    return `${userId}:${nonce}`;
}


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return serializeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deserializeData; });
const serializeData = (data) => JSON.stringify(data);
// TODO: add type checking. See https://github.com/bafnetwork/baf-wallet-v2/issues/36
const deserializeData = (uriEncoded) => JSON.parse(uriEncoded);


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pkToString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pkFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return skFromString; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


function pkToString(key, keyFormat = _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX) {
    return Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__[/* formatBytes */ "f"])(key.data, keyFormat);
}
function pkFromString(key, curve, keyFormat = _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX) {
    const data = Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__[/* encodeBytes */ "e"])(key, keyFormat);
    return {
        data,
        curve,
        format: (fmt) => Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__[/* formatBytes */ "f"])(data, fmt),
    };
}
function skFromString(key, curve, keyFormat = _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX) {
    const data = Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__[/* encodeBytes */ "e"])(key, keyFormat);
    return {
        data,
        curve,
        format: (fmt) => Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__[/* formatBytes */ "f"])(data, fmt),
    };
}


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalContractConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setGlobalContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getGlobalContract; });
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(35, 1);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var libs_near_src_lib_contract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);




const GlobalContractConfig = Object.assign({}, _config_json__WEBPACK_IMPORTED_MODULE_1__);
let globalContract;
async function setGlobalContract(account) {
    globalContract = await buildGlobalContract(account);
    return globalContract;
}
function getGlobalContract() {
    if (globalContract)
        return globalContract;
    throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_0__[/* BafError */ "a"].UninitGlobalContract();
}
async function buildGlobalContract(account) {
    const contract = await Object(libs_near_src_lib_contract__WEBPACK_IMPORTED_MODULE_3__[/* initContract */ "b"])(account, _config_json__WEBPACK_IMPORTED_MODULE_1__.contractName)({
        viewMethods: [
            'get_account_info',
            'get_account_nonce',
            'get_community_contract',
            'get_community_default_nft_contract',
        ],
        changeMethods: [
            'set_account_info',
            'delete_account_info',
            'set_community_default_nft_contract',
        ],
    });
    return Object.assign(Object.assign({}, contract), { getAccountId: async (pk) => {
            var _a;
            return (_a = (await contract.get_account_info({
                secp_pk: pk.format(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_2__[/* Encoding */ "c"].ARRAY),
            }))) === null || _a === void 0 ? void 0 : _a.account_id;
        } });
}


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export globalContractConstants */
const globalContractConstants = {
    // :)
    beneficiaryId: 'lev.near',
};


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNearChainInterface; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70);
/* harmony import */ var _contract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var _accounts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71);
/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37);
/* harmony import */ var near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72);
/* harmony import */ var near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31);












const getNearChainInterface = async (params) => {
    const state = await init(params);
    return {
        accounts: Object(_accounts__WEBPACK_IMPORTED_MODULE_5__[/* nearAccounts */ "a"])(state),
        tx: Object(_tx__WEBPACK_IMPORTED_MODULE_2__[/* nearTx */ "a"])(state),
        convert: _convert__WEBPACK_IMPORTED_MODULE_6__[/* nearConverter */ "a"],
        rpc: _rpc__WEBPACK_IMPORTED_MODULE_4__[/* nearRpc */ "c"],
        getContract: _contract__WEBPACK_IMPORTED_MODULE_3__[/* getContract */ "a"],
        constants: await Object(_constants__WEBPACK_IMPORTED_MODULE_10__[/* getChainConstants */ "a"])(state),
    };
};
async function init({ networkID, masterAccountID, keyPath, keyPair, }) {
    const nodeUrl = Object(_rpc__WEBPACK_IMPORTED_MODULE_4__[/* getRPCUrl */ "b"])(networkID);
    const connectConfig = {
        networkId: networkID,
        nodeUrl,
        helperUrl: Object(_rpc__WEBPACK_IMPORTED_MODULE_4__[/* getHelperUrl */ "a"])(networkID),
        masterAccount: masterAccountID,
        keyPath,
    };
    if (keyPair) {
        const keyStore = new near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_7__["InMemoryKeyStore"]();
        const nearKp = new near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_8__["KeyPairEd25519"](keyPair.sk.format(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58));
        keyStore.setKey(networkID, masterAccountID, nearKp);
        connectConfig.deps = {
            keyStore: keyStore,
        };
        connectConfig.keyStore = keyStore;
    }
    else if (keyPath) {
        const keyStore = new near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_7__["InMemoryKeyStore"]();
        connectConfig.deps = {
            keyStore: keyStore,
        };
    }
    else {
        throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_9__[/* BafError */ "a"].MissingKeyPair();
    }
    const near = await Object(near_api_js__WEBPACK_IMPORTED_MODULE_1__["connect"])(connectConfig);
    const nearMasterAccount = await near.account(masterAccountID);
    return {
        near,
        networkID,
        rpcProvider: new near_api_js__WEBPACK_IMPORTED_MODULE_1__["providers"].JsonRpcProvider(nodeUrl),
        nearMasterAccount,
        getFungibleTokenContract: (contractAccountID) => Object(_contract__WEBPACK_IMPORTED_MODULE_3__[/* initContract */ "b"])(nearMasterAccount, contractAccountID)({
            viewMethods: ['ft_balance_of', 'ft_total_supply', 'storage_balance_of'],
            changeMethods: ['ft_transfer'],
        }),
    };
}


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getChainFolderPrefix */
/* unused harmony export getTokenLogoUrl */
/* unused harmony export getDappLogoUrl */
/* unused harmony export getContractAddresses */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTokenInfo; });
/* unused harmony export getContractTokenInfoFromSymbol */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typedjson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var typedjson__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typedjson__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);





const baseRawUrl = 'https://raw.githubusercontent.com/bafnetwork/assets/master';
const contentsApiUrl = 'https://api.github.com/repos/bafnetwork/assets/contents';
const getChainFolderPrefix = (chain) => `${baseRawUrl}/blockchains/${chain}`;
const getNonNativeTokenInfoUrl = (chain, contractAddress) => `${getChainFolderPrefix(chain)}/assets/${contractAddress}/info.json`;
const getChainInfoUrl = (chain) => `${getChainFolderPrefix(chain)}/info/info.json`;
const getNonNativeTokenLogoUrl = (chain, contractAddress) => `${getChainFolderPrefix(chain)}/assets/${contractAddress}/logo.png`;
const getChainLogoUrl = (chain) => `${getChainFolderPrefix(chain)}/info/logo.png`;
const getTokenLogoUrl = (chain, contractAddress) => chain === contractAddress || !contractAddress
    ? getChainLogoUrl(chain)
    : getNonNativeTokenLogoUrl(chain, contractAddress);
const getDappLogoUrl = (dappUrl) => `${baseRawUrl}/dapps/${dappUrl}.png`;
async function getContractAddresses(chain, filterFn) {
    const url = `${contentsApiUrl}/blockchains/${chain}/assets`;
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
        const { data } = res;
        if (filterFn) {
            return data.filter(filterFn).map((infoJSON) => infoJSON.name);
        }
        return data.map((infoJSON) => infoJSON.name);
    }
    catch (err) {
        console.error(`could not fetch addresses: ${err}`);
        return null;
    }
}
async function getTokenInfo(chain, contractAddress) {
    const tokenIsChain = chain === contractAddress || !contractAddress;
    const url = tokenIsChain
        ? getChainInfoUrl(chain)
        : getNonNativeTokenInfoUrl(chain, contractAddress);
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
        const { data } = res;
        // remove binance shill link
        if (data.research !== undefined) {
            delete data.research;
        }
        const serializer = new typedjson__WEBPACK_IMPORTED_MODULE_3__["TypedJSON"](_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_4__[/* TokenInfoAssets */ "g"]);
        const _tokInfo = serializer.parse(data);
        return Object.assign(Object.assign({}, _tokInfo), { contractAddress,
            chain });
    }
    catch (err) {
        if (err.isAxiosError) {
            console.error(`Chain not found: only chains in ${baseRawUrl} are supported.`);
            return null;
        }
        throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_1__[/* BafError */ "a"].InvalidChainInfoJSON(err);
    }
}
async function getContractTokenInfoFromSymbol(symbol, contractTokens) {
    const contracts = Object.keys(contractTokens);
    const tokenProms = contracts.map((contract) => contractTokens[contract]());
    const tokenInfos = await Promise.all(tokenProms);
    const ind = tokenInfos.map((tokenInfo) => tokenInfo.symbol).indexOf(symbol);
    if (ind === -1)
        return null;
    return { tokenInfo: tokenInfos[ind], contract: contracts[ind] };
}


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deserializeTxParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createApproveRedirectURL; });
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

// TODO: interface check
const deserializeTxParams = (paramsEncoded) => {
    return Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_0__[/* deserializeData */ "d"])(decodeURIComponent(paramsEncoded));
};
const createApproveRedirectURL = (chain, baseURL, opts) => {
    return encodeURI(`${baseURL}/#/approve-redirect/${chain.toString()}/${encodeURIComponent(Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_0__[/* serializeData */ "i"])(opts))}`);
};


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initNearChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNearChain; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _baf_wallet_near__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/**
 * singletons provides methods to initialize and get the wrapped chain interfaces
 */



let nearChain;
let init = false;
async function initNearChain(params, env) {
    nearChain = await Object(_baf_wallet_near__WEBPACK_IMPORTED_MODULE_2__[/* getNearChainInterface */ "a"])(params);
    init = true;
}
function getNearChain() {
    if (!init)
        throw _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_1__[/* BafError */ "a"].UninitChain(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Chain */ "a"].NEAR);
    return nearChain;
}


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tryGetTorusPublicAddress; });
/* unused harmony export getTorusPublicAddress */
/* unused harmony export assertLoginTypeRegistered */
/* harmony import */ var _toruslabs_torus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _toruslabs_torus_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_toruslabs_torus_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toruslabs_fetch_node_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var _toruslabs_fetch_node_details__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toruslabs_fetch_node_details__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _baf_wallet_crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);





const torus = new _toruslabs_torus_js__WEBPACK_IMPORTED_MODULE_0___default.a({
    metadataHost: 'https://metadata.tor.us',
    allowHost: 'https://signer.tor.us/api/allow',
});
_toruslabs_torus_js__WEBPACK_IMPORTED_MODULE_0___default.a.setAPIKey('torus-default');
async function tryGetTorusPublicAddress(userId, loginType) {
    try {
        return getTorusPublicAddress(userId, loginType);
    }
    catch (e) {
        return null;
    }
}
async function getTorusPublicAddress(userId, loginType) {
    assertLoginTypeRegistered(loginType);
    // Configuration from https://github.com/torusresearch/torus-direct-web-sdk/blob/master/src/login.ts
    const nodeManager = new _toruslabs_fetch_node_details__WEBPACK_IMPORTED_MODULE_1___default.a({
        network: _constants__WEBPACK_IMPORTED_MODULE_3__[/* torusConstants */ "a"].network,
        proxyAddress: _constants__WEBPACK_IMPORTED_MODULE_3__[/* torusConstants */ "a"].proxyAddress,
    });
    const { torusNodeEndpoints, torusNodePub, torusIndexes, } = await nodeManager.getNodeDetails();
    global.fetch = node_fetch__WEBPACK_IMPORTED_MODULE_2__;
    const torusPublicKey = await torus.getPublicAddress(torusNodeEndpoints, torusNodePub, {
        verifier: _constants__WEBPACK_IMPORTED_MODULE_3__[/* torusConstants */ "a"].verifierInfo[loginType].verifier,
        verifierId: userId,
    }, true);
    return Object(_baf_wallet_crypto__WEBPACK_IMPORTED_MODULE_4__[/* pkSecpFromXY */ "c"])(torusPublicKey.X, torusPublicKey.Y);
}
function assertLoginTypeRegistered(loginType) {
    if (!_constants__WEBPACK_IMPORTED_MODULE_3__[/* torusConstants */ "a"].verifierInfo[loginType])
        throw `No verifier info exits for login type ${loginType}`;
    return true;
}


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var discord_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var discord_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(discord_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _managers_ActionManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39);
var _a;






let Client = class Client extends discord_js__WEBPACK_IMPORTED_MODULE_1__["Client"] {
    constructor(actionManager) {
        var _a;
        super((_a = _config_config__WEBPACK_IMPORTED_MODULE_4__[/* settings */ "b"].clientOptions) !== null && _a !== void 0 ? _a : {});
        this.actionManager = actionManager;
        this.settings = _config_config__WEBPACK_IMPORTED_MODULE_4__[/* settings */ "b"];
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
/* 68 */
/***/ (function(module, exports) {

module.exports = require("js-sha3");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("js-sha256");

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nearTx; });
/* unused harmony export extractGenericActionsFromTx */
/* unused harmony export buildParamsFromGenericTx */
/* unused harmony export buildNearTx */
/* unused harmony export signNearTx */
/* unused harmony export sendNearTx */
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_global_contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _baf_wallet_crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);








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
    var _a, _b, _c;
    const actionType = action.type;
    switch (actionType) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* GenericTxSupportedActions */ "e"].TRANSFER:
            return [
                near_api_js__WEBPACK_IMPORTED_MODULE_5__["transactions"].transfer(new bn_js__WEBPACK_IMPORTED_MODULE_4___default.a(action.amount, 10)),
            ];
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* GenericTxSupportedActions */ "e"].TRANSFER_CONTRACT_TOKEN: {
            const params = action;
            return [
                near_api_js__WEBPACK_IMPORTED_MODULE_5__["transactions"].functionCall('ft_transfer', {
                    receiver_id: receiverId,
                    amount: params.amount,
                    memo: (_a = params.memo) !== null && _a !== void 0 ? _a : null,
                }, 
                // TODO: maximum gas fees per chain: see https://github.com/bafnetwork/baf-wallet-v2/issues/68
                new bn_js__WEBPACK_IMPORTED_MODULE_4___default.a(10000000000000), // Maximum gas fee
                new bn_js__WEBPACK_IMPORTED_MODULE_4___default.a(1) // A deposit associated with the ft_transfer action
                ),
            ];
        }
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* GenericTxSupportedActions */ "e"].TRANSFER_NFT: {
            const params = action;
            return [
                near_api_js__WEBPACK_IMPORTED_MODULE_5__["transactions"].functionCall('nft_transfer', {
                    receiver_id: receiverId,
                    token_id: params.tokenId,
                    approval_id: (_b = params.approvalId) !== null && _b !== void 0 ? _b : null,
                    memo: (_c = params.memo) !== null && _c !== void 0 ? _c : null,
                }, 
                // TODO: maximum gas fees per chain: see https://github.com/bafnetwork/baf-wallet-v2/issues/68
                new bn_js__WEBPACK_IMPORTED_MODULE_4___default.a(10000000000000), // Maximum gas fee
                new bn_js__WEBPACK_IMPORTED_MODULE_4___default.a(1)),
            ];
        }
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* GenericTxSupportedActions */ "e"].CONTRACT_CALL: {
            const params = action;
            return [
                near_api_js__WEBPACK_IMPORTED_MODULE_5__["transactions"].functionCall(params.functionName, params.functionArgs, new bn_js__WEBPACK_IMPORTED_MODULE_4___default.a(10000000000000), // Maximum gas fee
                new bn_js__WEBPACK_IMPORTED_MODULE_4___default.a(params.deposit || 0)),
            ];
        }
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
const isContractCall = (action) => action.type === _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* GenericTxSupportedActions */ "e"].TRANSFER_CONTRACT_TOKEN ||
    action.type === _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* GenericTxSupportedActions */ "e"].TRANSFER_NFT;
const extractGenericActionsFromTx = (txParams) => {
    return txParams.actions;
};
const buildParamsFromGenericTx = (innerSdk) => async (txParams, senderPk, recipientPk) => {
    let recipientAccountID = txParams.recipientAddress
        ? txParams.recipientAddress
        : await Object(_baf_wallet_global_contract__WEBPACK_IMPORTED_MODULE_1__[/* getGlobalContract */ "b"])().getAccountId(recipientPk);
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
    const nearSenderPk = _convert__WEBPACK_IMPORTED_MODULE_6__[/* nearConverter */ "a"].pkFromUnified(senderPk);
    const accessKey = await innerSdk.rpcProvider.query(`access_key/${senderAccountID}/${nearSenderPk.toString()}`, '');
    const nonce = ++accessKey.nonce;
    const recentBlockHash = near_api_js__WEBPACK_IMPORTED_MODULE_5__["utils"].serialize.base_decode(accessKey.block_hash);
    const nativeActions = actions.flatMap((action) => buildNativeAction(recipientAccountID, action, innerSdk));
    const transactionRecipient = actions.some(isContractCall) && actions.length > 0
        ? actions[0].contractAddress
        : recipientAccountID;
    return near_api_js__WEBPACK_IMPORTED_MODULE_5__["transactions"].createTransaction(senderAccountID, nearSenderPk, transactionRecipient, nonce, nativeActions, recentBlockHash);
};
async function signNearTx(tx, keyPair, _opts) {
    const nearKeyPair = _convert__WEBPACK_IMPORTED_MODULE_6__[/* nearConverter */ "a"].keyPairFromUnified(keyPair);
    const serializedTx = near_api_js__WEBPACK_IMPORTED_MODULE_5__["utils"].serialize.serialize(near_api_js__WEBPACK_IMPORTED_MODULE_5__["transactions"].SCHEMA, tx);
    const serializedTxHash = new Uint8Array(Object(_baf_wallet_crypto__WEBPACK_IMPORTED_MODULE_2__[/* sha256 */ "d"])(buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"].from(serializedTx)));
    const signature = nearKeyPair.sign(serializedTxHash);
    // const [_, signedTx] = await signTransaction(tx, )
    return new near_api_js__WEBPACK_IMPORTED_MODULE_5__["transactions"].SignedTransaction({
        transaction: tx,
        signature: new near_api_js__WEBPACK_IMPORTED_MODULE_5__["transactions"].Signature({
            keyType: tx.publicKey.keyType,
            data: signature.signature,
        }),
    });
}
const sendNearTx = (innerSdk) => async (tx) => {
    const serialized = tx.encode();
    const result = await innerSdk.rpcProvider.sendJsonRpc('broadcast_tx_commit', [
        buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"].from(serialized).toString('base64'),
    ]);
    const explorerLink = `https://explorer.${innerSdk.networkID}.near.org/transactions/${result.transaction.hash}`;
    return {
        fst: result,
        snd: explorerLink,
    };
};


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nearAccounts; });
/* unused harmony export associatedKeys */
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var near_api_js_lib_account_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var near_api_js_lib_account_creator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(near_api_js_lib_account_creator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _baf_wallet_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _baf_wallet_crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);





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
        masterAccount: nearState.nearMasterAccount,
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
        associatedKeys,
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
async function associatedKeys(account) {
    const keys = await account.getAccessKeys();
    const edPkStrs = keys
        .map((key) => key.public_key)
        .filter((keyStr) => keyStr.includes('ed25519:'))
        .map((key) => key.split('ed25519:')[1]);
    return edPkStrs.map((str) => Object(_baf_wallet_crypto__WEBPACK_IMPORTED_MODULE_4__[/* pkFromString */ "b"])(str, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* ed25519Marker */ "h"], _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58));
}


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("near-api-js/lib/utils");

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_chain_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_chain_info__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("thunky/promise");

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Ping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _Send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var _SendNFT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81);
/* harmony import */ var _SetDefaultNFT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var _AddAdmins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);
/* harmony import */ var _RemoveAdmins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84);
/* harmony import */ var _Help__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85);







/* harmony default export */ __webpack_exports__["a"] = ([
    _Ping__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    _Send__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    _SendNFT__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    _SetDefaultNFT__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    _AddAdmins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    _RemoveAdmins__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    _Help__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
]);


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ping; });
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

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
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return send; });
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _baf_wallet_redirect_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _baf_wallet_global_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _baf_wallet_near__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);
/* harmony import */ var _shared_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);









const getUsage = (prefix) => {
    var _a;
    return `${prefix}send [amount of fungible token] [asset, i.e. NEAR, Berries, etc.] to [recipient]\n\n` +
        `Supported assets include: ${Object.keys((_a = Object(_baf_wallet_global_state__WEBPACK_IMPORTED_MODULE_5__[/* getNearChain */ "a"])()) === null || _a === void 0 ? void 0 : _a.constants.tokens).join(', ')}, and NEAR`;
};
class send extends _Command__WEBPACK_IMPORTED_MODULE_0__[/* Command */ "a"] {
    constructor(client) {
        super(client, {
            name: 'send',
            description: 'sends NEAR or NEP-141 tokens on NEAR testnet',
            category: 'Utility',
            usage: getUsage(client.settings.prefix),
            cooldown: 1000,
            requiredPermissions: [],
        });
        this.client = client;
    }
    extractArgs(content) {
        const rx = /^\%send (.*) (.*) to (.*)$/g;
        const matched = rx.exec(content);
        if (!matched)
            return null;
        // The first element of the match is the whole string if it matched
        return matched.length < 3 ? null : matched.slice(1);
    }
    async buildGenericTx(message, asset, amount, recipientParsed) {
        var _a;
        let actions;
        const nearConstants = Object(_baf_wallet_global_state__WEBPACK_IMPORTED_MODULE_5__[/* getNearChain */ "a"])().constants;
        // assume that we are on NEAR for now
        if (asset === (await nearConstants.nativeTokenInfo()).symbol) {
            actions = [
                {
                    type: _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__[/* GenericTxSupportedActions */ "e"].TRANSFER,
                    amount: Object(_baf_wallet_near__WEBPACK_IMPORTED_MODULE_6__[/* nearToYoctoNear */ "c"])(amount),
                },
            ];
        }
        else {
            // TODO not right
            const tokenInfoFn = (_a = Object(_baf_wallet_global_state__WEBPACK_IMPORTED_MODULE_5__[/* getNearChain */ "a"])()) === null || _a === void 0 ? void 0 : _a.constants.tokens[asset];
            if (!tokenInfoFn) {
                await super.respond(message.channel, `??? invalid asset ???: ${asset} is currently not supported`);
                return null;
            }
            const tokenInfoRet = await tokenInfoFn();
            actions = [
                {
                    type: _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__[/* GenericTxSupportedActions */ "e"].TRANSFER_CONTRACT_TOKEN,
                    contractAddress: tokenInfoRet.contractAddress,
                    amount: Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__[/* formatTokenAmountToIndivisibleUnit */ "g"])(amount, tokenInfoRet.decimals),
                },
            ];
        }
        const tx = {
            recipientUserId: recipientParsed,
            actions,
            oauthProvider: 'discord',
        };
        return tx;
    }
    async run(message) {
        const content = message.content;
        if (!content) {
            throw Error('message content is empty!');
        }
        const args = this.extractArgs(content);
        if (!args) {
            await super.respond(message.channel, `Invalid command, \n\`usage: ${this.conf.usage}\``);
            return;
        }
        else if (args.length !== 3) {
            await super.respond(message.channel, `expected 3 parameters, got ${args.length - 1}.\n\`usage: ${this.conf.usage}\``);
            return;
        }
        // If there are only two arguments, assume that the user is sending an NFT
        const amount = parseInt(args[0]);
        if (Number.isNaN(amount) || amount < 0) {
            await super.respond(message.channel, '??? invalid amount ???: amount must be a nonnegative number!');
            return;
        }
        const asset = args[1];
        const recipient = args[2];
        const recipientParsed = Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__[/* parseDiscordRecipient */ "h"])(recipient);
        if (!recipientParsed) {
            await super.respond(message.channel, '??? invalid user ???: the user must be tagged!');
            return;
        }
        const recipientUser = this.client.users.resolve(recipientParsed);
        const recipientUserReadable = `${recipientUser.username}#${recipientUser.discriminator}`;
        const { uninitUsers } = await Object(_shared_utils__WEBPACK_IMPORTED_MODULE_8__[/* getUninitUsers */ "a"])([recipientUser]);
        if (uninitUsers.length > 0) {
            await super.respond(message.channel, Object(_shared_messages__WEBPACK_IMPORTED_MODULE_7__[/* userUninitMessage */ "b"])(recipientUserReadable));
            return;
        }
        try {
            const tx = await this.buildGenericTx(message, asset, amount, recipientParsed);
            if (!tx)
                return;
            const link = Object(_baf_wallet_redirect_generator__WEBPACK_IMPORTED_MODULE_1__[/* createApproveRedirectURL */ "a"])(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__[/* Chain */ "a"].NEAR, _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].BASE_WALLET_URL, tx);
            await super.respond(message.channel, "Please check your DM's for a link to approve the transaction!");
            await message.author.send(`To open BAF Wallet and approve your transfer to ${recipientUserReadable}, please open this link: ${link}`);
        }
        catch (err) {
            console.error(err);
            await super.respond(message.channel, Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__[/* createDiscordErrMsg */ "c"])(err));
            return;
        }
    }
}


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _torus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _torus__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("@toruslabs/fetch-node-details");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendNFT; });
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _baf_wallet_redirect_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _baf_wallet_global_contract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _shared_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);








class SendNFT extends _Command__WEBPACK_IMPORTED_MODULE_0__[/* Command */ "a"] {
    constructor(client) {
        super(client, {
            name: 'sendNFT',
            description: 'sends NEP171 compatible NFTs',
            category: 'Utility',
            usage: `You can do either \`${client.settings.prefix}sendNFT [NFT ID] to [recipient]\` to send from the default NFT contract or \`[NFT ID] from [NFT Contract] to [recipient]\``,
            cooldown: 1000,
            requiredPermissions: [],
        });
        this.client = client;
    }
    extractArgs(content) {
        var _a;
        const rx = /^\%sendNFT ((.*) from (.*) to (.*)|(.*) to (.*))$/g;
        const matched = (_a = rx.exec(content)) === null || _a === void 0 ? void 0 : _a.filter((elem) => elem !== undefined);
        if (!matched)
            return null;
        // The first element of the match is the whole string if it matched, the second is the chunk of the or clause
        return matched.length < 2 ? null : matched.slice(2);
    }
    async buildGenericTx(message, contractAddress, tokenId, recipientParsed) {
        const action = {
            type: _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__[/* GenericTxSupportedActions */ "e"].TRANSFER_NFT,
            tokenId,
            contractAddress,
        };
        const tx = {
            recipientUserId: recipientParsed,
            actions: [action],
            oauthProvider: 'discord',
        };
        return tx;
    }
    async run(message) {
        const content = message.content;
        if (!content) {
            throw Error('message content is empty!');
        }
        const args = this.extractArgs(content);
        if (!args) {
            await super.respond(message.channel, `Invalid command, \n\`usage: ${this.conf.usage}\``);
            return;
        }
        else if (args.length !== 2 && args.length !== 3) {
            await super.respond(message.channel, `expected 2 or 3 parameters, got ${args.length - 1}.\n\`usage: ${this.conf.usage}\``);
            return;
        }
        const tokenId = args[0];
        const argsOffset = args.length === 3 ? 1 : 0;
        let community_nft_contract = '';
        if (args.length !== 3) {
            community_nft_contract = await Object(_baf_wallet_global_contract__WEBPACK_IMPORTED_MODULE_5__[/* getGlobalContract */ "b"])().get_community_default_nft_contract({ server: message.guild.id });
            if (!community_nft_contract) {
                await super.respond(message.channel, _shared_messages__WEBPACK_IMPORTED_MODULE_6__[/* noDefaultNFTContractMessage */ "a"]);
                return;
            }
        }
        const contractAddress = args.length === 3 ? args[argsOffset] : community_nft_contract;
        const recipient = args[1 + argsOffset];
        const recipientParsed = Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__[/* parseDiscordRecipient */ "h"])(recipient);
        if (!recipientParsed) {
            await super.respond(message.channel, '??? invalid user ???: the user must be tagged!');
            return;
        }
        const recipientUser = this.client.users.resolve(recipientParsed);
        const recipientUserReadable = `${recipientUser.username}#${recipientUser.discriminator}`;
        const { uninitUsers } = await Object(_shared_utils__WEBPACK_IMPORTED_MODULE_7__[/* getUninitUsers */ "a"])([recipientUser]);
        if (uninitUsers.length > 0) {
            await super.respond(message.channel, Object(_shared_messages__WEBPACK_IMPORTED_MODULE_6__[/* userUninitMessage */ "b"])(recipientUserReadable));
            return;
        }
        try {
            const tx = await this.buildGenericTx(message, contractAddress, tokenId, recipientParsed);
            if (!tx)
                return;
            const link = Object(_baf_wallet_redirect_generator__WEBPACK_IMPORTED_MODULE_1__[/* createApproveRedirectURL */ "a"])(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__[/* Chain */ "a"].NEAR, _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].BASE_WALLET_URL, tx);
            await super.respond(message.channel, "Please check your DM's for a link to approve the transaction!");
            await message.author.send(`To open BAF Wallet and approve your NFT transfer, please open this link: ${link}`);
        }
        catch (err) {
            console.error(err);
            await super.respond(message.channel, Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__[/* createDiscordErrMsg */ "c"])(err));
            return;
        }
    }
}


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setDefaultNFT; });
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _baf_wallet_redirect_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);






class setDefaultNFT extends _Command__WEBPACK_IMPORTED_MODULE_0__[/* Command */ "a"] {
    constructor(client) {
        super(client, {
            name: 'setDefaultNFT',
            description: 'Set the default NFT contract for this Discord',
            category: 'Utility',
            usage: `${client.settings.prefix}setDefaultNFT [NFT Contract]`,
            cooldown: 1000,
            requiredPermissions: [],
        });
        this.client = client;
    }
    buildGenericTx(guildId, globalContractAddr, nftContractAddress) {
        let actions;
        actions = [
            {
                type: _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__[/* GenericTxSupportedActions */ "e"].CONTRACT_CALL,
                functionName: 'set_community_default_nft_contract',
                functionArgs: {
                    guild_id: guildId,
                    nft_contract: nftContractAddress,
                },
                deposit: '0',
            },
        ];
        const tx = {
            recipientAddress: globalContractAddr,
            actions,
            oauthProvider: 'discord',
        };
        return tx;
    }
    extractArgs(content) {
        const rx = /^\%setDefaultNFT (.*)$/g;
        const matched = rx.exec(content);
        if (!matched)
            return null;
        // The first element of the match is the whole string if it matched
        return matched.length < 2 ? null : matched.slice(1);
    }
    async run(message) {
        const content = message.content;
        if (!content) {
            throw Error('message content is empty!');
        }
        const args = this.extractArgs(content);
        if (!args) {
            await super.respond(message.channel, `Invalid command, \n\`usage: ${this.conf.usage}\``);
            return;
        }
        else if (args.length !== 1) {
            await super.respond(message.channel, `expected 1 parameter, got ${args.length - 1}.\n\`usage: ${this.conf.usage}\``);
            return;
        }
        const defaultNFTContract = args[0];
        try {
            const tx = await this.buildGenericTx(message.guild.id, _config_config__WEBPACK_IMPORTED_MODULE_5__[/* constants */ "a"].globalContractAddress, defaultNFTContract);
            if (!tx)
                return;
            const link = Object(_baf_wallet_redirect_generator__WEBPACK_IMPORTED_MODULE_1__[/* createApproveRedirectURL */ "a"])(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__[/* Chain */ "a"].NEAR, _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].BASE_WALLET_URL, tx);
            await super.respond(message.channel, "Please check your DM's for a link to approve the transaction!");
            await message.author.send(`To open BAF Wallet and approve changing the default NFT contract to ${defaultNFTContract}, please open this link: ${link}`);
        }
        catch (err) {
            console.error(err);
            await super.respond(message.channel, Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__[/* createDiscordErrMsg */ "c"])(err));
            return;
        }
    }
}


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAdmins; });
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _baf_wallet_redirect_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
/* harmony import */ var _shared_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);








class AddAdmins extends _Command__WEBPACK_IMPORTED_MODULE_0__[/* Command */ "a"] {
    constructor(client) {
        super(client, {
            name: 'addAdmins',
            description: 'Add admin Near Accounts to the contract',
            category: 'Utility',
            usage: `${client.settings.prefix}addAdmins adminAccount1, adminAccount2, adminAccount3...`,
            cooldown: 1000,
            requiredPermissions: [],
        });
        this.client = client;
    }
    buildGenericTx(guildId, contractAddress, new_admins) {
        let actions;
        actions = [
            {
                type: _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__[/* GenericTxSupportedActions */ "e"].CONTRACT_CALL,
                functionName: 'add_community_admins',
                functionArgs: {
                    new_admins,
                    guild_id: guildId,
                },
                deposit: '0',
            },
        ];
        const tx = {
            recipientAddress: contractAddress,
            actions,
            oauthProvider: 'discord',
        };
        return tx;
    }
    extractArgs(content) {
        const rx = /^\%addAdmins (.*)$/g;
        const matched = rx.exec(content);
        if (!matched)
            return null;
        // The first element of the match is the whole string if it matched
        return matched.length < 2 ? null : matched.slice(1);
    }
    async run(message) {
        const content = message.content;
        if (!content) {
            throw Error('message content is empty!');
        }
        const args = this.extractArgs(content);
        if (!args) {
            await super.respond(message.channel, `Invalid command, \n\`usage: ${this.conf.usage}\``);
            return;
        }
        else if (args.length !== 1) {
            await super.respond(message.channel, `expected 1 parameter, got ${args.length - 1}.\n\`usage: ${this.conf.usage}\``);
            return;
        }
        const admins = args[0].split(', ');
        const adminsParsed = admins.map(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__[/* parseDiscordRecipient */ "h"]);
        if (adminsParsed.some((admin) => admin === null)) {
            await super.respond(message.channel, '??? invalid user ???: the user must be tagged!');
            return;
        }
        const adminsDiscordInfo = adminsParsed.map((admin) => this.client.users.resolve(admin));
        const { uninitUsers, associatedAccounts } = await Object(_shared_utils__WEBPACK_IMPORTED_MODULE_6__[/* getUninitUsers */ "a"])(adminsDiscordInfo);
        if (uninitUsers.length > 0) {
            await super.respond(message.channel, Object(_shared_messages__WEBPACK_IMPORTED_MODULE_7__[/* usersUninitMessage */ "c"])(uninitUsers.map((user) => `${user.username}#${user.discriminator}`)));
            return;
        }
        try {
            const tx = await this.buildGenericTx(message.guild.id, _config_config__WEBPACK_IMPORTED_MODULE_5__[/* constants */ "a"].globalContractAddress, associatedAccounts);
            if (!tx)
                return;
            const link = Object(_baf_wallet_redirect_generator__WEBPACK_IMPORTED_MODULE_1__[/* createApproveRedirectURL */ "a"])(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__[/* Chain */ "a"].NEAR, _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].BASE_WALLET_URL, tx);
            await super.respond(message.channel, "Please check your DM's for a link to approve the transaction!");
            await message.author.send(`To open BAF Wallet and add ${JSON.stringify(admins)} as admins, please open this link: ${link}`);
        }
        catch (err) {
            console.error(err);
            await super.respond(message.channel, Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__[/* createDiscordErrMsg */ "c"])(err));
            return;
        }
    }
}


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveAdmins; });
/* harmony import */ var discord_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var discord_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(discord_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _baf_wallet_redirect_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony import */ var _shared_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);









class RemoveAdmins extends _Command__WEBPACK_IMPORTED_MODULE_1__[/* Command */ "a"] {
    constructor(client) {
        super(client, {
            name: 'removeAdmins',
            description: 'Remove admin Near Accounts from the contract',
            category: 'Utility',
            usage: `${client.settings.prefix}removeAdmins adminAccount1, adminAccount2, adminAccount3...`,
            cooldown: 1000,
            requiredPermissions: [],
        });
        this.client = client;
    }
    buildGenericTx(guildId, contractAddress, admins) {
        let actions;
        actions = [
            {
                type: _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_4__[/* GenericTxSupportedActions */ "e"].CONTRACT_CALL,
                functionName: 'remove_community_admins',
                functionArgs: {
                    admins,
                    guild_id: discord_js__WEBPACK_IMPORTED_MODULE_0__["GuildAuditLogs"],
                },
                deposit: '0',
            },
        ];
        const tx = {
            recipientAddress: contractAddress,
            actions,
            oauthProvider: 'discord',
        };
        return tx;
    }
    extractArgs(content) {
        const rx = /^\%removeAdmins (.*)$/g;
        const matched = rx.exec(content);
        if (!matched)
            return null;
        // The first element of the match is the whole string if it matched
        return matched.length < 2 ? null : matched.slice(1);
    }
    async run(message) {
        const content = message.content;
        if (!content) {
            throw Error('message content is empty!');
        }
        const args = this.extractArgs(content);
        if (!args) {
            await super.respond(message.channel, `Invalid command, \n\`usage: ${this.conf.usage}\``);
            return;
        }
        else if (args.length !== 1) {
            await super.respond(message.channel, `expected 1 parameter, got ${args.length - 1}.\n\`usage: ${this.conf.usage}\``);
            return;
        }
        const admins = args[0].split(', ');
        const adminsParsed = admins.map(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_5__[/* parseDiscordRecipient */ "h"]);
        if (adminsParsed.some((admin) => admin === null)) {
            await super.respond(message.channel, '??? invalid user ???: the user must be tagged!');
            return;
        }
        const adminsDiscordInfo = adminsParsed.map((admin) => this.client.users.resolve(admin));
        const { uninitUsers, associatedAccounts } = await Object(_shared_utils__WEBPACK_IMPORTED_MODULE_7__[/* getUninitUsers */ "a"])(adminsDiscordInfo);
        if (uninitUsers.length > 0) {
            await super.respond(message.channel, Object(_shared_messages__WEBPACK_IMPORTED_MODULE_8__[/* usersUninitMessage */ "c"])(uninitUsers.map((user) => `${user.username}#${user.discriminator}`)));
            return;
        }
        try {
            const tx = await this.buildGenericTx(message.guild.id, _config_config__WEBPACK_IMPORTED_MODULE_6__[/* constants */ "a"].globalContractAddress, associatedAccounts);
            if (!tx)
                return;
            const link = Object(_baf_wallet_redirect_generator__WEBPACK_IMPORTED_MODULE_2__[/* createApproveRedirectURL */ "a"])(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_4__[/* Chain */ "a"].NEAR, _environments_environment__WEBPACK_IMPORTED_MODULE_3__[/* environment */ "a"].BASE_WALLET_URL, tx);
            await super.respond(message.channel, "Please check your DM's for a link to approve the transaction!");
            await message.author.send(`To open BAF Wallet and remove ${JSON.stringify(admins)} as admins, please open this link: ${link}`);
        }
        catch (err) {
            console.error(err);
            await super.respond(message.channel, Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_5__[/* createDiscordErrMsg */ "c"])(err));
            return;
        }
    }
}


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Help; });
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

class Help extends _Command__WEBPACK_IMPORTED_MODULE_0__[/* Command */ "a"] {
    constructor(client) {
        super(client, {
            name: 'help',
            description: 'Shows help messages',
            category: 'Information',
            usage: client.settings.prefix.concat('help'),
            cooldown: 1000,
            requiredPermissions: ['SEND_MESSAGES'],
        });
    }
    async run(message) {
        await super.respond(message.channel, 'BAF Wallet is a discord bot that lets you send crypto assets through discord.\n\n'
            + 'Built with ?????? on NEAR by the Blockchain Acceleration Foundation.\n\n'
            + '**List of commands**:\n\n'
            + '`Ping` - Respond Pong! \n'
            + `\`${this.client.settings.prefix}send\` - sends NEAR or NEP-141 tokens on NEAR.\n`
            + `\`${this.client.settings.prefix}sendNFT\` - sends NEP171 compatible NFTs on NEAR.\n`
            + `\`${this.client.settings.prefix}help\` - lists the available commands and what they do.\n`
            + `\n`
            + `To see usage details of a particular command, do \`${this.client.settings.prefix}<Command Name>\`.`);
    }
}


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _Ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);


/* harmony default export */ __webpack_exports__["a"] = ([_Message__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _Ready__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]]);


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
/* harmony import */ var discord_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
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
/* 88 */
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);
/* harmony import */ var _baf_wallet_global_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _baf_wallet_global_contract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);








// Initialize the Client using the IoC.
async function main() {
    await Object(_baf_wallet_global_state__WEBPACK_IMPORTED_MODULE_4__[/* initNearChain */ "b"])(_config_config__WEBPACK_IMPORTED_MODULE_5__[/* constants */ "a"].chainParams[_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_7__[/* Chain */ "a"].NEAR], _config_config__WEBPACK_IMPORTED_MODULE_5__[/* constants */ "a"].env);
    const client = typedi__WEBPACK_IMPORTED_MODULE_2__["Container"].get(_Client__WEBPACK_IMPORTED_MODULE_3__[/* Client */ "a"]);
    await Object(_baf_wallet_global_contract__WEBPACK_IMPORTED_MODULE_6__[/* setGlobalContract */ "c"])(Object(_baf_wallet_global_state__WEBPACK_IMPORTED_MODULE_4__[/* getNearChain */ "a"])().accounts.masterAccount);
    await client.login(_environments_environment__WEBPACK_IMPORTED_MODULE_1__[/* environment */ "a"].DISCORD_BOT_TOKEN);
    console.log('tokenbot happily hodling along');
}
main();


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map