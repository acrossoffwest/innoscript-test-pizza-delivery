/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/@babel/runtime/regenerator/index.js'");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/axios/index.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Cart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/currency */ "./resources/js/mixins/currency.js");
/* harmony import */ var _mixins_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/cart */ "./resources/js/mixins/cart.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Cart",
  props: {
    user: {
      required: false,
      type: Object
    }
  },
  mixins: [_mixins_currency__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_cart__WEBPACK_IMPORTED_MODULE_2__["default"]],
  created: function created() {
    if (!this.$store.getters.cartItemsCount) {
      window.location.href = '/';
    }

    this.contactInfo = this.user || {};
  },
  watch: {
    '$store.getters.cartItemsCount': function $storeGettersCartItemsCount(newVal) {
      if (!newVal) {
        window.location.href = '/';
      }
    }
  },
  data: function data() {
    return {
      contactInfo: null,
      note: null,
      disabledOrderButton: false,
      errors: {},
      updateTable: 0
    };
  },
  methods: {
    order: function order() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var items, _yield$axios$post, data, errors;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.errors = {};
                _this.disabledOrderButton = true;
                _context.prev = 2;
                items = _this.$store.getters.items;
                _context.next = 6;
                return axios.post('/api/orders', {
                  items: _this.prepareItemsForOrder(items),
                  contact_info: _this.contactInfo,
                  currency: _this.$store.getters.currentCurrency,
                  note: _this.note
                });

              case 6:
                _yield$axios$post = _context.sent;
                data = _yield$axios$post.data.data;

                _this.clearCart(true);

                _this.$swal('Thank you for your choice. You will get order details by email.').then(function () {
                  window.location.href = data.status_link;
                });

                _context.next = 17;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                errors = _context.t0.response.data.errors;
                _this.errors = errors || {};
                console.log(_this.errors);

              case 17:
                _context.prev = 17;
                _this.disabledOrderButton = false;
                return _context.finish(17);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 12, 17, 20]]);
      }))();
    },
    prepareItemsForOrder: function prepareItemsForOrder(items) {
      var resultItems = {};
      Object.keys(items).map(function (k) {
        resultItems[k] = items[k].count;
      });
      return resultItems;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactInfoForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContactInfoForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RegisterInCartForm",
  props: {
    contactInfo: {
      required: false,
      type: Object
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Field.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Field.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Field",
  props: {
    value: {
      required: false
    },
    label: {
      required: true,
      type: String
    },
    mask: {
      required: false,
      type: Array
    },
    type: {
      required: false,
      type: String,
      "default": 'text'
    },
    placeholder: {
      required: false,
      type: String,
      "default": 'Enter'
    },
    errors: {
      required: false,
      type: Array
    }
  },
  data: function data() {
    return {
      defaultClass: 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
    };
  },
  computed: {
    val: {
      set: function set(v) {
        this.$emit('update:value', v);
      },
      get: function get() {
        return this.value;
      }
    }
  },
  methods: {
    /**
     * When the location found
     * @param {Object} addressData Data of the found location
     * @param {Object} placeResultData PlaceResult object
     * @param {String} id Input container ID
     */
    getAddressData: function getAddressData(addressData, placeResultData, id) {
      this.$emit('update:value', addressData.route);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FloatCart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FloatCart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FloatCart",
  computed: {
    cartItemsCount: function cartItemsCount() {
      return this.$store.getters.cartItemsCount;
    }
  },
  watch: {
    cartItemsCount: function cartItemsCount() {
      var _this = this;

      this.showCart = false;
      setTimeout(function () {
        return _this.showCart = true;
      }, 100);
    }
  },
  data: function data() {
    return {
      showCart: true
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlyPizza.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FlyPizza.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FlyPizza",
  props: {
    target: {
      required: true
    },
    firstShoot: {
      required: false,
      type: Boolean,
      "default": false
    }
  },
  mounted: function mounted() {
    this.animate();
  },
  methods: {
    animate: function animate() {
      var _this = this;

      var targetCoordinates = this.cumulativeOffset(this.target);
      var flyPizzaCoordinates = this.cumulativeOffset(this.$refs["fly-pizza"]);
      console.log(this.$store.getters.cartItemsCount === 1);
      targetCoordinates.x = targetCoordinates.x - flyPizzaCoordinates.x - (this.$store.getters.cartItemsCount === 1 ? 100 : 0);
      targetCoordinates.y = targetCoordinates.y - flyPizzaCoordinates.y + 50;

      if (window.pageYOffset || document.clientTop || document.clientTop) {
        targetCoordinates.y += (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
      }

      targetCoordinates.onComplete = function () {
        _this.$emit('done');
      };

      targetCoordinates.opacity = 0;
      gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to("#fly-pizza-".concat(this._uid), .8, targetCoordinates);
    },
    getCoordinates: function getCoordinates(element) {
      return {
        x: window.scrollX + element.getBoundingClientRect().left,
        y: window.scrollY + element.getBoundingClientRect().top
      };
    },
    cumulativeOffset: function cumulativeOffset(element) {
      var top = 0,
          left = 0;

      do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
      } while (element);

      return {
        y: top,
        x: left
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Modal",
  created: function created() {
    var _this = this;

    this.$on('toggle', function (e) {
      _this.showModal = !_this.showModal;
    });
  },
  data: function data() {
    return {
      showModal: false
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-mask[data-v-53ab54d2] {\n  position: fixed;\n  z-index: 40;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: table;\n  transition: opacity 0.3s ease;\n}\n.modal-wrapper[data-v-53ab54d2] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.modal-container[data-v-53ab54d2] {\n  width: 40%;\n  margin: 0px auto;\n  padding: 20px 30px;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\n  transition: all 0.3s ease;\n  font-family: Helvetica, Arial, sans-serif;\n}\n@media screen and (max-width: 1280px) {\n.modal-container[data-v-53ab54d2] {\n    width: 90%;\n}\n}\n.modal-header h3[data-v-53ab54d2] {\n  margin-top: 0;\n  color: #42b983;\n}\n.modal-body[data-v-53ab54d2] {\n  margin: 20px 0;\n}\n.modal-default-button[data-v-53ab54d2] {\n  float: right;\n}\n\n/*\n * The following styles are auto-applied to elements with\n * transition=\"modal\" when their visibility is toggled\n * by Vue.js.\n *\n * You can easily play with the modal transition by editing\n * these styles.\n */\n.modal-enter[data-v-53ab54d2] {\n  opacity: 0;\n}\n.modal-leave-active[data-v-53ab54d2] {\n  opacity: 0;\n}\n.modal-enter .modal-container[data-v-53ab54d2],\n.modal-leave-active .modal-container[data-v-53ab54d2] {\n  transform: scale(1.1);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sweetalert2/dist/sweetalert2.min.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sweetalert2/dist/sweetalert2.min.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/postcss-loader/src/index.js):\nError: ENOENT: no such file or directory, open '/home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/sweetalert2/dist/sweetalert2.min.css'");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FloatCart.vue?vue&type=style&index=0&id=71c2007e&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FloatCart.vue?vue&type=style&index=0&id=71c2007e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bounce-enter-active[data-v-71c2007e] {\n  -webkit-animation: bounce-in-data-v-71c2007e .5s;\n          animation: bounce-in-data-v-71c2007e .5s;\n}\n.bounce-leave-active[data-v-71c2007e] {\n  animation: bounce-in-data-v-71c2007e .5s reverse;\n}\n@-webkit-keyframes bounce-in-data-v-71c2007e {\n0% {\n    transform: scale(0);\n}\n50% {\n    transform: scale(1.5);\n}\n100% {\n    transform: scale(1);\n}\n}\n@keyframes bounce-in-data-v-71c2007e {\n0% {\n    transform: scale(0);\n}\n50% {\n    transform: scale(1.5);\n}\n100% {\n    transform: scale(1);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/css-loader/lib/css-base.js'");

/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/*! exports provided: gsap, default, CSSPlugin, TweenMax, TweenLite, TimelineMax, TimelineLite, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/gsap/index.js'");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/lodash/lodash.js'");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FloatCart.vue?vue&type=style&index=0&id=71c2007e&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FloatCart.vue?vue&type=style&index=0&id=71c2007e&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./FloatCart.vue?vue&type=style&index=0&id=71c2007e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FloatCart.vue?vue&type=style&index=0&id=71c2007e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/style-loader/lib/addStyles.js'");

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./sweetalert2.min.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sweetalert2/dist/sweetalert2.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-google-autocomplete/src/VueGoogleAutocomplete.vue":
/*!****************************************************************************!*\
  !*** ./node_modules/vue-google-autocomplete/src/VueGoogleAutocomplete.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/vue-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/vue-google-autocomplete/src/VueGoogleAutocomplete.vue'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cart.vue?vue&type=template&id=b7f93bea&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Cart.vue?vue&type=template&id=b7f93bea&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex justify-center my-6" }, [
    _c(
      "div",
      {
        staticClass:
          "flex flex-col w-full p-8 text-gray-800 bg-white pin-r pin-y md:w-4/5 lg:w-4/5"
      },
      [
        _c("div", { staticClass: "flex-1" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "table",
            {
              staticClass: "w-full text-sm lg:text-base",
              attrs: { cellspacing: "0" }
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _vm.$store.getters.cartItemsCount
                ? _c(
                    "tbody",
                    { key: _vm.updateTable },
                    [
                      _vm._l(_vm.$store.getters.cart.items, function(
                        orderItem
                      ) {
                        return _c("tr", { key: orderItem.item.id }, [
                          _c(
                            "td",
                            { staticClass: "hidden pb-4 md:table-cell" },
                            [
                              _c("a", { attrs: { href: "#" } }, [
                                _c("img", {
                                  staticClass: "w-20 rounded",
                                  attrs: {
                                    src: orderItem.item.image.publicPath,
                                    alt: "Thumbnail"
                                  }
                                })
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("td", [
                            _c("a", { attrs: { href: "#" } }, [
                              _c("p", { staticClass: "mb-2 md:ml-4" }, [
                                _vm._v(_vm._s(orderItem.item.name))
                              ]),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "text-gray-700 md:ml-4",
                                  attrs: { type: "submit" },
                                  on: {
                                    click: function($event) {
                                      _vm.$store.commit(
                                        "removeAllItem",
                                        orderItem.item.id
                                      )
                                      ++_vm.updateTable
                                    }
                                  }
                                },
                                [_c("small", [_vm._v("(Remove item)")])]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass:
                                "justify-center md:justify-end md:flex mt-6"
                            },
                            [
                              _c("div", { staticClass: "w-24 h-10" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "relative flex flex-row w-full h-8"
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: orderItem.count,
                                          expression: "orderItem.count"
                                        }
                                      ],
                                      staticClass:
                                        "w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black",
                                      attrs: { type: "number", disabled: "" },
                                      domProps: { value: orderItem.count },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            orderItem,
                                            "count",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded",
                                        on: {
                                          click: function($event) {
                                            return _vm.$store.commit(
                                              "addItem",
                                              orderItem.item
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("+")]
                                    ),
                                    _vm._v(" "),
                                    orderItem.count
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded",
                                            on: {
                                              click: function($event) {
                                                return _vm.$store.commit(
                                                  "removeItem",
                                                  orderItem.item.id
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("-")]
                                        )
                                      : _vm._e()
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "hidden text-right md:table-cell" },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "text-sm lg:text-base font-medium"
                                },
                                [
                                  _vm._v(
                                    "\n                             " +
                                      _vm._s(
                                        _vm.costWithCurrencyRate(
                                          orderItem.item.cost
                                        )
                                      ) +
                                      _vm._s(
                                        _vm.getCurrencySymbol(
                                          _vm.$store.getters.currentCurrency
                                        )
                                      ) +
                                      "\n                          "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            _c(
                              "span",
                              {
                                staticClass: "text-sm lg:text-base font-medium"
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      _vm.costWithCurrencyRate(
                                        orderItem.item.cost * orderItem.count
                                      )
                                    ) +
                                    _vm._s(
                                      _vm.getCurrencySymbol(
                                        _vm.$store.getters.currentCurrency
                                      )
                                    ) +
                                    "\n                          "
                                )
                              ]
                            )
                          ])
                        ])
                      }),
                      _vm._v(" "),
                      _vm.$store.getters.cartItemsCount
                        ? _c("tr", [
                            _c("td", { attrs: { colspan: "3" } }),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "text-right",
                                attrs: { colspan: "2" }
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.clearCart(false, true)
                                      }
                                    }
                                  },
                                  [_vm._v("Clear cart")]
                                )
                              ]
                            )
                          ])
                        : _vm._e()
                    ],
                    2
                  )
                : _c("tbody", [_vm._m(2)])
            ]
          ),
          _vm._v(" "),
          _c("hr", { staticClass: "pb-6 mt-6" }),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "flex" }, [
            _c("div", { staticClass: "w-full px-10" }, [
              _c(
                "div",
                { staticClass: "flex flex-wrap -mx-3 mb-6" },
                [
                  _c("field", {
                    staticClass: "w-full px-3 mb-6 md:mb-0",
                    attrs: {
                      label: "Name",
                      placeholder: "Enter your name",
                      value: _vm.contactInfo.name,
                      errors: _vm.errors["contact_info.name"]
                    },
                    on: {
                      "update:value": function($event) {
                        return _vm.$set(_vm.contactInfo, "name", $event)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("field", {
                    staticClass: "w-full px-3",
                    attrs: {
                      label: "Phone",
                      type: "mask",
                      mask: ["+#(###) ###-#####"],
                      placeholder: "Enter your phone number",
                      value: _vm.contactInfo.phone,
                      errors: _vm.errors["contact_info.phone"]
                    },
                    on: {
                      "update:value": function($event) {
                        return _vm.$set(_vm.contactInfo, "phone", $event)
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex flex-wrap -mx-3 mb-6" },
                [
                  _c("field", {
                    staticClass: "w-full px-3",
                    attrs: {
                      label: "Email",
                      type: "email",
                      placeholder: "Enter your E-mail address",
                      value: _vm.contactInfo.email,
                      errors: _vm.errors["contact_info.email"]
                    },
                    on: {
                      "update:value": function($event) {
                        return _vm.$set(_vm.contactInfo, "email", $event)
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex flex-wrap -mx-3 mb-6" },
                [
                  _c("field", {
                    staticClass: "w-full px-3",
                    attrs: {
                      label: "Address",
                      type: "places",
                      placeholder: "Enter your address for delivery",
                      value: _vm.contactInfo.address,
                      errors: _vm.errors["contact_info.address"]
                    },
                    on: {
                      "update:value": function($event) {
                        return _vm.$set(_vm.contactInfo, "address", $event)
                      }
                    }
                  })
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("hr", { staticClass: "pb-6 mt-6" }),
          _vm._v(" "),
          _c("div", { staticClass: "my-4 mt-6 -mx-2 lg:flex" }, [
            _c("div", { staticClass: "lg:px-2 lg:w-1/2" }, [
              _vm._m(4),
              _vm._v(" "),
              _c("div", { staticClass: "p-4" }, [
                _c("p", { staticClass: "mb-4 italic" }, [
                  _vm._v(
                    "If you have some information for the courier you can leave them in the box below"
                  )
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.note,
                      expression: "note"
                    }
                  ],
                  staticClass: "w-full h-24 p-2 bg-gray-100 rounded",
                  domProps: { value: _vm.note },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.note = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lg:px-2 lg:w-1/2" }, [
              _vm._m(5),
              _vm._v(" "),
              _c("div", { staticClass: "p-4" }, [
                _c("p", { staticClass: "mb-6 italic" }, [
                  _vm._v("Shipping cost fixed")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex justify-between pt-4 border-b" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800"
                      },
                      [
                        _vm._v(
                          "\n                                Shipping cost\n                            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900"
                      },
                      [
                        _vm._v(
                          "\n                                " +
                            _vm._s(
                              _vm.costWithCurrencyRate(
                                _vm.$store.getters.shippingCost
                              )
                            ) +
                            _vm._s(
                              _vm.getCurrencySymbol(
                                _vm.$store.getters.currentCurrency
                              )
                            ) +
                            "\n                            "
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex justify-between pt-4 border-b" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800"
                      },
                      [
                        _vm._v(
                          "\n                                Total\n                            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900"
                      },
                      [
                        _vm._v(
                          "\n                                " +
                            _vm._s(
                              _vm.costWithCurrencyRate(
                                _vm.$store.getters.totalCost
                              )
                            ) +
                            _vm._s(
                              _vm.getCurrencySymbol(
                                _vm.$store.getters.currentCurrency
                              )
                            ) +
                            "\n                            "
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none",
                    attrs: { disabled: _vm.disabledOrderButton },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.order($event)
                      }
                    }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "w-8",
                        attrs: {
                          "aria-hidden": "true",
                          "data-prefix": "far",
                          "data-icon": "credit-card",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 576 512"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            fill: "currentColor",
                            d:
                              "M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "ml-2 mt-5px" }, [
                      _vm._v("ORDER")
                    ]),
                    _vm._v(" "),
                    _vm.disabledOrderButton
                      ? _c("span", [
                          _c("img", {
                            attrs: {
                              src:
                                "https://samherbert.net/svg-loaders/svg-loaders/puff.svg",
                              alt: "",
                              width: "25"
                            }
                          })
                        ])
                      : _vm._e()
                  ]
                )
              ])
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-4 mb-5 bg-gray-100 rounded-full" }, [
      _c("h1", { staticClass: "ml-2 font-bold uppercase" }, [_vm._v("Cart")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "h-12 uppercase" }, [
        _c("th", { staticClass: "hidden md:table-cell" }),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", { staticClass: "lg:text-right text-left pl-5 lg:pl-0" }, [
          _c(
            "span",
            { staticClass: "lg:hidden", attrs: { title: "Quantity" } },
            [_vm._v("Qtd")]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "hidden lg:inline" }, [_vm._v("Quantity")])
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "hidden text-right md:table-cell" }, [
          _vm._v("Unit price")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Total price")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticClass: "text-center", attrs: { colspan: "5" } }, [
        _c("p", [_vm._v("You don't have items in your cart.")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-4 mb-5 bg-gray-100 rounded-full" }, [
      _c("h1", { staticClass: "ml-2 font-bold uppercase" }, [
        _vm._v("Contact info")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-4 bg-gray-100 rounded-full" }, [
      _c("h1", { staticClass: "ml-2 font-bold uppercase" }, [
        _vm._v("Order note")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-4 bg-gray-100 rounded-full" }, [
      _c("h1", { staticClass: "ml-2 font-bold uppercase" }, [
        _vm._v("Order Details")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactInfoForm.vue?vue&type=template&id=942ecb92&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContactInfoForm.vue?vue&type=template&id=942ecb92&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Field.vue?vue&type=template&id=1dc00c9f&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Field.vue?vue&type=template&id=1dc00c9f&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "label",
        {
          staticClass:
            "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
          attrs: { for: "field-" + _vm._uid }
        },
        [_vm._v("\n        " + _vm._s(_vm.label) + "\n    ")]
      ),
      _vm._v(" "),
      _vm.type === "places"
        ? _c("vue-google-autocomplete", {
            class: _vm.defaultClass,
            attrs: { id: "map", placeholder: "Start typing" },
            on: { placechanged: _vm.getAddressData }
          })
        : _vm.type === "mask"
        ? _c("the-mask", {
            class: _vm.defaultClass,
            attrs: { id: "field-" + _vm._uid, mask: _vm.mask },
            model: {
              value: _vm.val,
              callback: function($$v) {
                _vm.val = $$v
              },
              expression: "val"
            }
          })
        : _vm.type === "checkbox"
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.val,
                expression: "val"
              }
            ],
            class: _vm.defaultClass,
            attrs: { placeholder: _vm.placeholder, type: "checkbox" },
            domProps: {
              checked: Array.isArray(_vm.val)
                ? _vm._i(_vm.val, null) > -1
                : _vm.val
            },
            on: {
              change: function($event) {
                var $$a = _vm.val,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.val = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.val = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.val = $$c
                }
              }
            }
          })
        : _vm.type === "radio"
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.val,
                expression: "val"
              }
            ],
            class: _vm.defaultClass,
            attrs: { placeholder: _vm.placeholder, type: "radio" },
            domProps: { checked: _vm._q(_vm.val, null) },
            on: {
              change: function($event) {
                _vm.val = null
              }
            }
          })
        : _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.val,
                expression: "val"
              }
            ],
            class: _vm.defaultClass,
            attrs: { placeholder: _vm.placeholder, type: _vm.type },
            domProps: { value: _vm.val },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.val = $event.target.value
              }
            }
          }),
      _vm._v(" "),
      _vm._l(_vm.errors, function(error) {
        return _vm.errors
          ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
              _vm._v(_vm._s(error))
            ])
          : _vm._e()
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FloatCart.vue?vue&type=template&id=71c2007e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FloatCart.vue?vue&type=template&id=71c2007e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "fixed right-0 top-0 mt-24 mr-1 z-50 md:mr-24" },
    [
      _c("transition", { attrs: { name: "bounce" } }, [
        _vm.cartItemsCount && _vm.showCart
          ? _c(
              "div",
              { staticClass: " bg-orange-300 rounded-md shadow-sm p-2 " },
              [
                _c(
                  "a",
                  {
                    staticClass:
                      "text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150",
                    attrs: { href: "/cart" }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "inline",
                        staticStyle: { width: "25px" },
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d:
                              "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", {
                      staticClass: "p-2 bg-white-200 rounded",
                      domProps: { innerHTML: _vm._s("" + _vm.cartItemsCount) }
                    })
                  ]
                )
              ]
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlyPizza.vue?vue&type=template&id=6e4d52c0&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FlyPizza.vue?vue&type=template&id=6e4d52c0&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("img", {
      ref: "fly-pizza",
      staticClass: "z-40 absolute",
      attrs: {
        src: "/images/pizza.svg",
        id: "fly-pizza-" + _vm._uid,
        alt: "",
        width: "50"
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "modal" } }, [
    _vm.showModal
      ? _c(
          "div",
          {
            staticClass: "modal-mask",
            on: {
              dblclick: function($event) {
                _vm.showModal = !_vm.showModal
              }
            }
          },
          [
            _c("div", { staticClass: "modal-wrapper" }, [
              _c("div", { staticClass: "modal-container" }, [
                _c(
                  "div",
                  { staticClass: "modal-header" },
                  [
                    _vm._t("header", [
                      _vm._v(
                        "\n                        default header\n                    "
                      )
                    ])
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "modal-body" },
                  [
                    _vm._t("body", [
                      _vm._v(
                        "\n                        default body\n                    "
                      )
                    ])
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "modal-footer" },
                  [
                    _vm._t("footer", [
                      _vm._v(
                        "\n                        default footer\n                        "
                      ),
                      _c(
                        "button",
                        {
                          staticClass: "modal-default-button",
                          on: {
                            click: function($event) {
                              return _vm.$emit("toggle")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                            Close\n                        "
                          )
                        ]
                      )
                    ])
                  ],
                  2
                )
              ])
            ])
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/vue-loader/lib/runtime/componentNormalizer.js'");

/***/ }),

/***/ "./node_modules/vue-sweetalert2/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-sweetalert2/dist/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/vue-sweetalert2/dist/index.js'");

/***/ }),

/***/ "./node_modules/vue-the-mask/dist/vue-the-mask.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-the-mask/dist/vue-the-mask.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/vue-the-mask/dist/vue-the-mask.js'");

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/vue/dist/vue.common.js'");

/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createLogger, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/vuex/dist/vuex.esm.js'");

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/postcss-loader/src/index.js):\nError: Failed to find 'tailwindcss/base'\n  in [\n    /home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/resources/css\n  ]\n    at /home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/postcss-import/lib/resolve-id.js:35:13\n    at /home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/webpack/lib/NormalModule.js:316:20\n    at /home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at /home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/node_modules/postcss-loader/src/index.js:208:9");

/***/ }),

/***/ "./resources/js sync recursive \\.vue$/":
/*!***********************************!*\
  !*** ./resources/js sync \.vue$/ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/Cart.vue": "./resources/js/components/Cart.vue",
	"./components/ContactInfoForm.vue": "./resources/js/components/ContactInfoForm.vue",
	"./components/Field.vue": "./resources/js/components/Field.vue",
	"./components/FloatCart.vue": "./resources/js/components/FloatCart.vue",
	"./components/FlyPizza.vue": "./resources/js/components/FlyPizza.vue",
	"./components/Modal.vue": "./resources/js/components/Modal.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js sync recursive \\.vue$/";

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/index */ "./resources/js/store/index.js");
/* harmony import */ var vue_sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-sweetalert2 */ "./node_modules/vue-sweetalert2/dist/index.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.min.css */ "./node_modules/sweetalert2/dist/sweetalert2.min.css");
/* harmony import */ var sweetalert2_dist_sweetalert2_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_google_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-google-autocomplete */ "./node_modules/vue-google-autocomplete/src/VueGoogleAutocomplete.vue");







vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vue_the_mask__WEBPACK_IMPORTED_MODULE_5___default.a);
vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vue_sweetalert2__WEBPACK_IMPORTED_MODULE_3__["default"]);
vue__WEBPACK_IMPORTED_MODULE_1___default.a.component('vue-google-autocomplete', vue_google_autocomplete__WEBPACK_IMPORTED_MODULE_6__["default"]);

var files = __webpack_require__("./resources/js sync recursive \\.vue$/");

files.keys().map(function (key) {
  return vue__WEBPACK_IMPORTED_MODULE_1___default.a.component(key.split('/').pop().split('.')[0], files(key)["default"]);
});
var app = new vue__WEBPACK_IMPORTED_MODULE_1___default.a({
  el: '#app',
  store: _store_index__WEBPACK_IMPORTED_MODULE_2__["default"],
  mixins: [__webpack_require__(/*! ./mixins/cart */ "./resources/js/mixins/cart.js")["default"], __webpack_require__(/*! ./mixins/currency */ "./resources/js/mixins/currency.js")["default"]],
  data: function data() {
    return {
      showMobileMenu: false,
      animateProductId: null
    };
  },
  methods: {}
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */
// try {
//     window.Popper = require('popper.js').default;
//     window.$ = window.jQuery = require('jquery');
//     require('bootstrap');
// } catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/components/Cart.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Cart.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cart_vue_vue_type_template_id_b7f93bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart.vue?vue&type=template&id=b7f93bea&scoped=true& */ "./resources/js/components/Cart.vue?vue&type=template&id=b7f93bea&scoped=true&");
/* harmony import */ var _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart.vue?vue&type=script&lang=js& */ "./resources/js/components/Cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cart_vue_vue_type_template_id_b7f93bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cart_vue_vue_type_template_id_b7f93bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b7f93bea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Cart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Cart.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Cart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Cart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Cart.vue?vue&type=template&id=b7f93bea&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Cart.vue?vue&type=template&id=b7f93bea&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_b7f93bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Cart.vue?vue&type=template&id=b7f93bea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cart.vue?vue&type=template&id=b7f93bea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_b7f93bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_b7f93bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ContactInfoForm.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/ContactInfoForm.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactInfoForm_vue_vue_type_template_id_942ecb92_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactInfoForm.vue?vue&type=template&id=942ecb92&scoped=true& */ "./resources/js/components/ContactInfoForm.vue?vue&type=template&id=942ecb92&scoped=true&");
/* harmony import */ var _ContactInfoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactInfoForm.vue?vue&type=script&lang=js& */ "./resources/js/components/ContactInfoForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactInfoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactInfoForm_vue_vue_type_template_id_942ecb92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactInfoForm_vue_vue_type_template_id_942ecb92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "942ecb92",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ContactInfoForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ContactInfoForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/ContactInfoForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactInfoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactInfoForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactInfoForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactInfoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ContactInfoForm.vue?vue&type=template&id=942ecb92&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/ContactInfoForm.vue?vue&type=template&id=942ecb92&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactInfoForm_vue_vue_type_template_id_942ecb92_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactInfoForm.vue?vue&type=template&id=942ecb92&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactInfoForm.vue?vue&type=template&id=942ecb92&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactInfoForm_vue_vue_type_template_id_942ecb92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactInfoForm_vue_vue_type_template_id_942ecb92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Field.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Field.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_1dc00c9f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=1dc00c9f&scoped=true& */ "./resources/js/components/Field.vue?vue&type=template&id=1dc00c9f&scoped=true&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_1dc00c9f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_1dc00c9f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1dc00c9f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Field.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Field.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Field.vue?vue&type=template&id=1dc00c9f&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Field.vue?vue&type=template&id=1dc00c9f&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_1dc00c9f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=1dc00c9f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Field.vue?vue&type=template&id=1dc00c9f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_1dc00c9f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_1dc00c9f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FloatCart.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/FloatCart.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FloatCart_vue_vue_type_template_id_71c2007e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FloatCart.vue?vue&type=template&id=71c2007e&scoped=true& */ "./resources/js/components/FloatCart.vue?vue&type=template&id=71c2007e&scoped=true&");
/* harmony import */ var _FloatCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FloatCart.vue?vue&type=script&lang=js& */ "./resources/js/components/FloatCart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FloatCart_vue_vue_type_style_index_0_id_71c2007e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FloatCart.vue?vue&type=style&index=0&id=71c2007e&scoped=true&lang=css& */ "./resources/js/components/FloatCart.vue?vue&type=style&index=0&id=71c2007e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FloatCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FloatCart_vue_vue_type_template_id_71c2007e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FloatCart_vue_vue_type_template_id_71c2007e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "71c2007e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FloatCart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FloatCart.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/FloatCart.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FloatCart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FloatCart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FloatCart.vue?vue&type=style&index=0&id=71c2007e&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/FloatCart.vue?vue&type=style&index=0&id=71c2007e&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatCart_vue_vue_type_style_index_0_id_71c2007e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./FloatCart.vue?vue&type=style&index=0&id=71c2007e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FloatCart.vue?vue&type=style&index=0&id=71c2007e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatCart_vue_vue_type_style_index_0_id_71c2007e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatCart_vue_vue_type_style_index_0_id_71c2007e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatCart_vue_vue_type_style_index_0_id_71c2007e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatCart_vue_vue_type_style_index_0_id_71c2007e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatCart_vue_vue_type_style_index_0_id_71c2007e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/FloatCart.vue?vue&type=template&id=71c2007e&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/FloatCart.vue?vue&type=template&id=71c2007e&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatCart_vue_vue_type_template_id_71c2007e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FloatCart.vue?vue&type=template&id=71c2007e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FloatCart.vue?vue&type=template&id=71c2007e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatCart_vue_vue_type_template_id_71c2007e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatCart_vue_vue_type_template_id_71c2007e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FlyPizza.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/FlyPizza.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlyPizza_vue_vue_type_template_id_6e4d52c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlyPizza.vue?vue&type=template&id=6e4d52c0&scoped=true& */ "./resources/js/components/FlyPizza.vue?vue&type=template&id=6e4d52c0&scoped=true&");
/* harmony import */ var _FlyPizza_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlyPizza.vue?vue&type=script&lang=js& */ "./resources/js/components/FlyPizza.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FlyPizza_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlyPizza_vue_vue_type_template_id_6e4d52c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FlyPizza_vue_vue_type_template_id_6e4d52c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6e4d52c0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FlyPizza.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FlyPizza.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/FlyPizza.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlyPizza_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FlyPizza.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlyPizza.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlyPizza_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FlyPizza.vue?vue&type=template&id=6e4d52c0&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/FlyPizza.vue?vue&type=template&id=6e4d52c0&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlyPizza_vue_vue_type_template_id_6e4d52c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FlyPizza.vue?vue&type=template&id=6e4d52c0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlyPizza.vue?vue&type=template&id=6e4d52c0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlyPizza_vue_vue_type_template_id_6e4d52c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlyPizza_vue_vue_type_template_id_6e4d52c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Modal.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Modal.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=53ab54d2&scoped=true& */ "./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true&");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js& */ "./resources/js/components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=scss& */ "./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53ab54d2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Modal.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Modal.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=template&id=53ab54d2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/Storage.js":
/*!*****************************************!*\
  !*** ./resources/js/helpers/Storage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Storage; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Storage = /*#__PURE__*/function () {
  function Storage() {
    _classCallCheck(this, Storage);
  }

  _createClass(Storage, [{
    key: "set",
    value: function set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, {
    key: "get",
    value: function get(key) {
      var item = localStorage.getItem(key);
      return item !== null && item !== undefined ? JSON.parse(item) : null;
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      localStorage.removeItem(key);
    }
  }]);

  return Storage;
}();



/***/ }),

/***/ "./resources/js/mixins/cart.js":
/*!*************************************!*\
  !*** ./resources/js/mixins/cart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.$store.commit('freshCartItemsCount');
    this.updateCosts();
  },
  computed: {
    cartItemsCount: function cartItemsCount() {
      return this.$store.getters.cartItemsCount;
    }
  },
  data: function data() {
    return {
      updateDetailedCounts: 0
    };
  },
  methods: {
    updateCosts: function updateCosts() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var items, itemsKeys;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                items = _this.$store.getters.items;
                itemsKeys = Object.keys(items);

                if (itemsKeys.length) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                itemsKeys.map( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(cartItemKey) {
                    var cartItem, _yield$axios$get, data;

                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            cartItem = items[cartItemKey];
                            _context.next = 3;
                            return axios.get("/api/products/".concat(cartItem.item.id));

                          case 3:
                            _yield$axios$get = _context.sent;
                            data = _yield$axios$get.data.data;

                            _this.$store.commit('updateItem', data);

                          case 6:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    clearCart: function clearCart(force, redirectToHome) {
      var _this2 = this;

      if (force) {
        this.$store.commit('clearCart');
        return;
      }

      this.$swal({
        title: 'Do you want clear your cart?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, clear it!',
        cancelButtonText: 'No, cancel!',
        buttonsStyling: true
      }).then(function (isConfirm) {
        if (!isConfirm.value) {
          return;
        }

        _this2.$store.commit('clearCart');

        ++_this2.updateDetailedCounts;

        if (redirectToHome) {
          window.location.href = '/';
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/currency.js":
/*!*****************************************!*\
  !*** ./resources/js/mixins/currency.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    getCurrencySymbol: function getCurrencySymbol(currency) {
      var currencies = {
        euro: '€',
        dollar: '$'
      };
      return currencies[currency];
    },
    setCurrency: function setCurrency(currency) {
      this.$store.commit('setCurrentCurrency', currency);
    },
    ceil: function ceil(v) {
      return Math.ceil(v);
    },
    costWithCurrencyRate: function costWithCurrencyRate(cost) {
      return this.ceil(cost * this.$store.getters.rate);
    }
  }
});

/***/ }),

/***/ "./resources/js/store/index.js":
/*!*************************************!*\
  !*** ./resources/js/store/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/Storage */ "./resources/js/helpers/Storage.js");



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
var storage = new _helpers_Storage__WEBPACK_IMPORTED_MODULE_2__["default"]();
var cart = storage.get('cart') || {
  items: {}
};

var getCartItemsCountsSum = function getCartItemsCountsSum() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(items).map(function (i) {
    return items[i].count;
  }).reduce(function (a, b) {
    return a + b;
  });
};

var defaultCurrency = 'euro';

if (!storage.get('currentCurrency')) {
  storage.set('currentCurrency', defaultCurrency);
}

/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    cart: cart,
    cartItemsCount: 0,
    shippingCost: 15,
    currentCurrency: storage.get('currentCurrency'),
    currencies: {
      euro: 1,
      dollar: 1.19
    }
  },
  mutations: {
    freshCartItemsCount: function freshCartItemsCount(state) {
      if (!Object.keys(state.cart.items).length) {
        return;
      }

      state.cartItemsCount = getCartItemsCountsSum(state.cart.items);
    },
    addItem: function addItem(state, item) {
      if (!state.cart.items) {
        state.cart.items = {};
      }

      ++state.cartItemsCount;

      if (state.cart.items[item.id]) {
        ++state.cart.items[item.id].count;
        storage.set('cart', state.cart);
        return;
      }

      state.cart.items[item.id] = {
        count: 1,
        item: item
      };
      storage.set('cart', state.cart);
    },
    updateItem: function updateItem(state, item) {
      if (!state.cart.items) {
        state.cart.items = {};
      }

      if (!state.cart.items[item.id]) {
        return;
      }

      state.cart.items[item.id] = {
        count: state.cart.items[item.id].count,
        item: item
      };
      storage.set('cart', state.cart);
    },
    removeItem: function removeItem(state, itemId) {
      if (!state.cart.items) {
        return;
      }

      var item = state.cart.items[itemId];

      if (!item) {
        return;
      }

      --item.count;
      --state.cartItemsCount;

      if (item.count !== 0) {
        storage.set('cart', state.cart);
        return;
      }

      delete state.cart.items[itemId];
      storage.set('cart', state.cart);
    },
    removeAllItem: function removeAllItem(state, itemId) {
      if (!state.cart.items || !state.cart.items[itemId]) {
        return;
      }

      delete state.cart.items[itemId];
      storage.set('cart', state.cart);
    },
    clearCart: function clearCart(state) {
      storage["delete"]('cart');
    },
    setCurrentCurrency: function setCurrentCurrency(state, currency) {
      state.currentCurrency = currency;
      storage.set('currentCurrency', currency);
    }
  },
  getters: {
    cart: function cart(state) {
      return state.cart;
    },
    items: function items(state) {
      return state.cart.items;
    },
    cartItemsCount: function cartItemsCount(state) {
      return state.cartItemsCount;
    },
    shippingCost: function shippingCost(state) {
      return state.shippingCost;
    },
    currencies: function currencies(state) {
      return state.currencies;
    },
    rate: function rate(state) {
      return state.currencies[state.currentCurrency];
    },
    currentCurrency: function currentCurrency(state) {
      return state.currentCurrency;
    },
    totalCost: function totalCost(state) {
      var items = state.cart.items;
      var keys = Object.keys(items);

      if (!keys.length) {
        return 0 + state.shippingCost;
      }

      return keys.map(function (i) {
        return items[i].count * items[i].item.cost;
      }).reduce(function (a, b) {
        return a + b;
      }) + state.shippingCost;
    }
  }
}));

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./resources/js/app.js ./resources/css/app.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/acrossoffwest/Documents/Projects/innoscripta-test-pizza/resources/css/app.css */"./resources/css/app.css");


/***/ })

/******/ });