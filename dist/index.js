"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternetSpeedChecker = /** @class */ (function () {
    function InternetSpeedChecker() {
        this.downloadSpeed = 0;
        this.uploadSpeed = 0;
        this.unit = "bps"; // Initial unit is bps
    }
    InternetSpeedChecker.prototype.convertSpeed = function (speed) {
        if (speed === null || speed === 0) {
            return { value: 0, unit: "bps" };
        }
        if (speed > 1e9) {
            return { value: speed / 1e9, unit: "Gbps" };
        }
        else if (speed > 1e6) {
            return { value: speed / 1e6, unit: "Mbps" };
        }
        else if (speed > 1e3) {
            return { value: speed / 1e3, unit: "Kbps" };
        }
        else {
            return { value: speed, unit: "bps" };
        }
    };
    InternetSpeedChecker.prototype.measureDownloadSpeed = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var url, startTime, response, reader, totalBytes, _b, done, value, endTime, durationInSeconds, speedBytesPerSecond, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        url = "https://www.cloudflare.com/cdn-cgi/trace";
                        startTime = new Date().getTime();
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, fetch(url)];
                    case 2:
                        response = _c.sent();
                        if (!response.ok) {
                            throw new Error("HTTP error! Status: ".concat(response.status));
                        }
                        reader = (_a = response.body) === null || _a === void 0 ? void 0 : _a.getReader();
                        if (!reader) {
                            throw new Error("ReadableStream not supported.");
                        }
                        totalBytes = 0;
                        _c.label = 3;
                    case 3:
                        if (!true) return [3 /*break*/, 5];
                        return [4 /*yield*/, reader.read()];
                    case 4:
                        _b = _c.sent(), done = _b.done, value = _b.value;
                        if (done) {
                            return [3 /*break*/, 5];
                        }
                        totalBytes += (value === null || value === void 0 ? void 0 : value.length) || 0;
                        return [3 /*break*/, 3];
                    case 5:
                        endTime = new Date().getTime();
                        durationInSeconds = (endTime - startTime) / 1000;
                        speedBytesPerSecond = totalBytes / durationInSeconds;
                        this.downloadSpeed = speedBytesPerSecond;
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _c.sent();
                        this.downloadSpeed = 0; // Set to 0 if there's an error (no connection)
                        if (error_1 instanceof Error) {
                            console.error("Error measuring download speed:", error_1.message);
                        }
                        else {
                            console.error("Unknown error type:", error_1);
                        }
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    InternetSpeedChecker.prototype.measureUploadSpeed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uploadData, url, startTime, response, endTime, durationInSeconds, speedBytesPerSecond, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uploadData = new Array(1024 * 1024).fill("a").join("");
                        url = "https://httpbin.org/post";
                        startTime = new Date().getTime();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetch(url, {
                                method: "POST",
                                body: uploadData,
                            })];
                    case 2:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error("HTTP error! Status: ".concat(response.status));
                        }
                        endTime = new Date().getTime();
                        durationInSeconds = (endTime - startTime) / 1000;
                        speedBytesPerSecond = uploadData.length / durationInSeconds;
                        this.uploadSpeed = speedBytesPerSecond;
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        this.uploadSpeed = 0; // Set to 0 if there's an error (no connection)
                        if (error_2 instanceof Error) {
                            console.error("Error measuring upload speed:", error_2.message);
                        }
                        else {
                            console.error("Unknown error type:", error_2);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    InternetSpeedChecker.prototype.startSpeedCheck = function () {
        var _this = this;
        setInterval(function () {
            _this.measureDownloadSpeed();
            _this.measureUploadSpeed();
            _this.displaySpeeds();
        }, 1000);
    };
    InternetSpeedChecker.prototype.displaySpeeds = function () {
        var formattedDownloadSpeed = "".concat(this.convertSpeed(this.downloadSpeed).value.toFixed(2), " ").concat(this.convertSpeed(this.downloadSpeed).unit);
        var formattedUploadSpeed = "".concat(this.convertSpeed(this.uploadSpeed).value.toFixed(2), " ").concat(this.convertSpeed(this.uploadSpeed).unit);
        console.log("Download Speed: ".concat(formattedDownloadSpeed));
        console.log("Upload Speed: ".concat(formattedUploadSpeed));
    };
    InternetSpeedChecker.prototype.getFormattedDownloadSpeed = function () {
        return "".concat(this.convertSpeed(this.downloadSpeed).value.toFixed(2), " ").concat(this.convertSpeed(this.downloadSpeed).unit);
    };
    InternetSpeedChecker.prototype.getFormattedUploadSpeed = function () {
        return "".concat(this.convertSpeed(this.uploadSpeed).value.toFixed(2), " ").concat(this.convertSpeed(this.uploadSpeed).unit);
    };
    return InternetSpeedChecker;
}());
var speedChecker = new InternetSpeedChecker();
speedChecker.startSpeedCheck();
exports.default = InternetSpeedChecker;
