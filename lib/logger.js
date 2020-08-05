"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = require("path");

var _level = require("./level");

var _console = _interopRequireDefault(require("./transport/console"));

var _file = _interopRequireDefault(require("./transport/file"));

var _utils = require("./utils");

var winston = _interopRequireWildcard(require("winston"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Logger = /*#__PURE__*/function (_Map) {
  _inherits(Logger, _Map);

  var _super = _createSuper(Logger);

  function Logger(options) {
    var _this;

    _classCallCheck(this, Logger);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "options", void 0);

    _defineProperty(_assertThisInitialized(_this), "transports", void 0);

    _this.options = (0, _utils.assign)(_this.defaultOptions(), options);

    _this.initTransport();

    return _this;
  }

  _createClass(Logger, [{
    key: "initTransport",
    value: function initTransport() {
      var _this2 = this;

      var _this$options = this.options,
          name = _this$options.name,
          consoleLevel = _this$options.consoleLevel,
          consoleFormatter = _this$options.consoleFormatter,
          filePath = _this$options.filePath,
          formatter = _this$options.formatter,
          json = _this$options.json,
          isFile = _this$options.isFile;
      var consoleTransport = new _console["default"]({
        level: consoleLevel,
        name: name,
        formatter: consoleFormatter
      });
      var sillyTransport = new _file["default"]({
        level: _level.Levels.SILLY,
        name: name,
        filename: (0, _path.join)(filePath, "".concat(name, "/").concat((0, _utils.getFullDate)(), ".log")),
        formatter: formatter,
        json: json
      });
      this.transports = isFile ? [consoleTransport] : [consoleTransport, sillyTransport];
      this.set(name);
      Object.keys(_level.Levels).forEach(function (key) {
        _this2[_level.Levels[key]] = function () {
          return _this2.get(name)[_level.Levels[key]](_utils.concatLog.apply(void 0, arguments));
        };
      });
    }
  }, {
    key: "set",
    value: function set(name) {
      if (_get(_getPrototypeOf(Logger.prototype), "has", this).call(this, name)) {
        return _get(_getPrototypeOf(Logger.prototype), "get", this).call(this, name);
      }

      var logger = winston.createLogger({
        transports: this.transports,
        defaultMeta: {
          name: name,
          module: this.options.module
        }
      });

      _get(_getPrototypeOf(Logger.prototype), "set", this).call(this, name, logger);

      return logger;
    }
  }, {
    key: "defaultOptions",
    value: function defaultOptions() {
      var formatter = function formatter(meta) {
        return "".concat(meta.timestamp, " ").concat(meta.level, " ").concat(meta.hostname, " ").concat(meta.pid, " (").concat(meta.ms, ") [").concat(meta.name, "] ").concat(meta.module ? '*' + meta.module + '*' : '', " ").concat(meta.message);
      };

      return {
        name: 'app',
        filePath: './logs',
        formatter: formatter,
        consoleFormatter: formatter,
        consoleLevel: 'silly',
        json: false,
        isFile: true
      };
    }
  }]);

  return Logger;
}( /*#__PURE__*/_wrapNativeSuper(Map));

exports["default"] = Logger;