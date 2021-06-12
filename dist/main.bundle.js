webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow\">\r\n  <h5 class=\"my-0 mr-md-auto font-weight-normal\">Time Measurement</h5>\r\n  <div class=\"my-2 my-md-0 mr-md-3\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n\r\n  <tm-time-measurement></tm-time-measurement>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__time_measurement_tm_time_measurement_module__ = __webpack_require__("./src/app/time-measurement/tm-time-measurement.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__time_measurement_tm_time_measurement_module__["a" /* TmTimeMeasurementModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common-tools/ct-common-tools.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtCommonToolsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ct_sound_service__ = __webpack_require__("./src/app/common-tools/ct-sound.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CtCommonToolsModule = /** @class */ (function () {
    function CtCommonToolsModule() {
    }
    CtCommonToolsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__ct_sound_service__["a" /* CtSoundService */]
            ]
        })
    ], CtCommonToolsModule);
    return CtCommonToolsModule;
}());



/***/ }),

/***/ "./src/app/common-tools/ct-sound.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtSoundService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CtSoundService = /** @class */ (function () {
    function CtSoundService() {
    }
    CtSoundService.prototype.playSound = function (soundFile) {
        if (!soundFile) {
            return;
        }
        var elemAudio = document.createElement('audio');
        var elemSourceWav = document.createElement('source');
        elemSourceWav.src = soundFile + '.wav';
        var elemSourceMp3 = document.createElement('source');
        elemSourceMp3.src = soundFile + '.mp3';
        elemAudio.appendChild(elemSourceWav);
        elemAudio.appendChild(elemSourceMp3);
        document.body.appendChild(elemAudio);
        elemAudio.play();
        elemAudio.onended = function (event) {
            document.body.removeChild(elemAudio);
        };
    };
    CtSoundService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CtSoundService);
    return CtSoundService;
}());

/*

  <audio controls id="audiostuff" style="display:none">
      <source src="sounds/Gong-sound.mp3" type="audio/mpeg">
      <source src="sounds/Gong-sound.wav" type="audio/wav">
      Your browser does not support the audio element.
  </audio>

  */ 


/***/ }),

/***/ "./src/app/time-measurement/settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TimerUnit; });
/** The timers type */
var TimerType;
(function (TimerType) {
    /** Normal tm-timer counting from a set value down to zero. */
    TimerType[TimerType["timer"] = 0] = "timer";
    /** A never ending tm-timer, that counts from zero upwards, that can be paused and stopped by the user. */
    TimerType[TimerType["counter"] = 1] = "counter";
})(TimerType || (TimerType = {}));
/** The tm-timer unit, that is the start value of the tm-timer */
var TimerUnit;
(function (TimerUnit) {
    /** A pomodoro are 25 minutes */
    TimerUnit[TimerUnit["pomodoro"] = 0] = "pomodoro";
    /** A hours (60 minutes) */
    TimerUnit[TimerUnit["hour"] = 1] = "hour";
    /** Any value. You have to set "customValue" */
    TimerUnit[TimerUnit["custom"] = 2] = "custom";
})(TimerUnit || (TimerUnit = {}));


/***/ }),

/***/ "./src/app/time-measurement/time-table-entry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeTableEntry; });
var TimeTableEntry = /** @class */ (function () {
    function TimeTableEntry() {
    }
    return TimeTableEntry;
}());



/***/ }),

/***/ "./src/app/time-measurement/tm-settings/tm-settings.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/time-measurement/tm-settings/tm-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    Type:\r\n    <select [ngModel]=\"settings.timer.type\" (ngModelChange)=\"timerTypeChange($event)\">\r\n        <option *ngFor=\"let option of timerTypeOptions\" [value]=\"option.value\">{{ option.caption }}</option>\r\n    </select>\r\n</div>\r\n<div>\r\n    Time Unit:\r\n    <select #timerUnit [ngModel]=\"settings.timer.unit\" (ngModelChange)=\"timerUnitChange($event)\"\r\n            [attr.disabled]=\"settings.timer.type != 0 ? 'disabled' : null\">\r\n        <option *ngFor=\"let option of timerUnitOptions\" [value]=\"option.value\">{{ option.caption }}</option>\r\n    </select>\r\n</div>\r\n<div data-bind=\"if: timerTimeUnit() == 'any'\">\r\n    Timer Value:\r\n    <select [(ngModel)]=\"timerCustomValueMinutes\"\r\n            [attr.disabled]=\"timerUnit.disabled || settings.timer.unit != 2 ? 'disabled' : null\">\r\n        <option *ngFor=\"let minute of timerCustomValueMinutesValues\" [value]=\"minute\">{{ minute }}</option>\r\n    </select>\r\n    :\r\n    <select [(ngModel)]=\"timerCustomValueSeconds\"\r\n            [attr.disabled]=\"timerUnit.disabled || settings.timer.unit != 2 ? 'disabled' : null\">\r\n        <option *ngFor=\"let second of timerCustomValueSecondsValues\" [value]=\"second\">{{ second }}</option>\r\n    </select>\r\n</div>\r\n<div>\r\n    Timer Done Soundfile:\r\n    <select [ngModel]=\"settings.timer.soundFile\" (ngModelChange)=\"soundFileChange($event)\">\r\n        <option *ngFor=\"let option of soundFileOptions\" [value]=\"option.value\">{{ option.caption }}</option>\r\n    </select>\r\n    <button type=\"button\" class=\"btn btn-sm btn-default fa fas fa-volume-up\" (click)=\"previewSoundfile($event)\"></button>\r\n</div>"

/***/ }),

/***/ "./src/app/time-measurement/tm-settings/tm-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TmSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__("./src/app/time-measurement/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_tools_ct_sound_service__ = __webpack_require__("./src/app/common-tools/ct-sound.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TmSettingsComponent = /** @class */ (function () {
    function TmSettingsComponent(soundService) {
        this.soundService = soundService;
        this._timerCustomValueMinutes = 15;
        this._timerCustomValueSeconds = 0;
        this.timerTypeOptions = [
            { caption: 'Timer', value: __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* TimerType */].timer },
            { caption: 'Counter', value: __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* TimerType */].counter },
        ];
        this.timerUnitOptions = [
            { caption: 'Pomodoro', value: __WEBPACK_IMPORTED_MODULE_1__settings__["b" /* TimerUnit */].pomodoro },
            { caption: 'Hour', value: __WEBPACK_IMPORTED_MODULE_1__settings__["b" /* TimerUnit */].hour },
            { caption: 'Custom', value: __WEBPACK_IMPORTED_MODULE_1__settings__["b" /* TimerUnit */].custom },
        ];
        this.timerCustomValueMinutesValues = (function () {
            var x = [1, 2, 3, 4];
            for (var i = 5; i <= 120; i += 5) {
                x.push(i);
            }
            return x;
        })();
        this.timerCustomValueSecondsValues = (function () {
            var x = [];
            for (var i = 0; i <= 45; i += 15) {
                x.push(i);
            }
            return x;
        })();
        this.soundFileOptions = [
            { caption: 'Mute', value: null },
            { caption: 'Gong', value: 'assets/sounds/timer_gong' },
        ];
        this.settingsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    TmSettingsComponent.prototype.ngOnInit = function () { };
    TmSettingsComponent.prototype.ngOnChanges = function (changes) {
        if (changes['settings']) {
            var m = this.settings.timer.customValue ? Math.floor(this.settings.timer.customValue / 60) : 15;
            var s = this.settings.timer.customValue ? this.settings.timer.customValue % 60 : 0;
            this.timerCustomValueMinutes = m;
            this.timerCustomValueSeconds = s;
        }
    };
    TmSettingsComponent.prototype.timerTypeChange = function (type) {
        this.settings.timer.type = type;
        this.settingsChange.emit(this.settings);
    };
    TmSettingsComponent.prototype.timerUnitChange = function (type) {
        this.settings.timer.unit = type;
        this.settingsChange.emit(this.settings);
    };
    TmSettingsComponent.prototype.soundFileChange = function (soundFile) {
        this.settings.soundFile = soundFile;
        this.settingsChange.emit(this.settings);
    };
    Object.defineProperty(TmSettingsComponent.prototype, "timerCustomValueMinutes", {
        get: function () {
            return +this._timerCustomValueMinutes;
        },
        set: function (minutes) {
            this._timerCustomValueMinutes = minutes;
            this.settings.timer.customValue = (this.timerCustomValueMinutes * 60) + this.timerCustomValueSeconds;
            this.settingsChange.emit(this.settings);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TmSettingsComponent.prototype, "timerCustomValueSeconds", {
        get: function () {
            return +this._timerCustomValueSeconds;
        },
        set: function (seconds) {
            this._timerCustomValueSeconds = seconds;
            this.settings.timer.customValue = (this.timerCustomValueMinutes * 60) + this.timerCustomValueSeconds;
            this.settingsChange.emit(this.settings);
        },
        enumerable: true,
        configurable: true
    });
    TmSettingsComponent.prototype.previewSoundfile = function (event) {
        if (this.settings.soundFile) {
            this.soundService.playSound(this.settings.soundFile);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], TmSettingsComponent.prototype, "settings", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], TmSettingsComponent.prototype, "settingsChange", void 0);
    TmSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tm-settings',
            template: __webpack_require__("./src/app/time-measurement/tm-settings/tm-settings.component.html"),
            styles: [__webpack_require__("./src/app/time-measurement/tm-settings/tm-settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_tools_ct_sound_service__["a" /* CtSoundService */]])
    ], TmSettingsComponent);
    return TmSettingsComponent;
}());



/***/ }),

/***/ "./src/app/time-measurement/tm-time-measurement.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/time-measurement/tm-time-measurement.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-7\">\r\n        <tm-time-table></tm-time-table>\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n\r\n        <div class=\"card box-shadow\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"my-0 font-weight-normal\">Timer</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <tm-timer [type]=\"settings.timer.type\"\r\n                       [timerDoneSoundfile]=\"settings.timer.soundFile\"\r\n                       [startValue]=\"timerStartValue\"\r\n                       (timerEnded)=\"timerStopped($event)\"\r\n                       (timerStarted)=\"timerStarted($event)\"\r\n                       (timerStopped)=\"timerStopped($event)\"\r\n                       (timerPaused)=\"timerPaused($event)\"\r\n                       (timerTick)=\"timerTick($event)\"></tm-timer>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card box-shadow countdown-timer-settings\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"my-0 font-weight-normal\">Settings</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <tm-settings [(settings)]=\"settings\"></tm-settings>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/time-measurement/tm-time-measurement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TmTimeMeasurementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tm_time_measurement_service__ = __webpack_require__("./src/app/time-measurement/tm-time-measurement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("./src/app/time-measurement/settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TmTimeMeasurementComponent = /** @class */ (function () {
    function TmTimeMeasurementComponent(timeMeasurementService) {
        this.timeMeasurementService = timeMeasurementService;
        this.settings = {
            timer: {
                type: __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* TimerType */].timer,
                unit: __WEBPACK_IMPORTED_MODULE_2__settings__["b" /* TimerUnit */].pomodoro,
                customValue: 15 * 60
            },
            soundFile: 'assets/sounds/timer_gong'
        };
        this.currentTimerEntry = null;
        this.isTimerPaused = true;
    }
    Object.defineProperty(TmTimeMeasurementComponent.prototype, "timerStartValue", {
        get: function () {
            if (this.settings.timer.unit !== __WEBPACK_IMPORTED_MODULE_2__settings__["b" /* TimerUnit */].custom) {
                switch (+this.settings.timer.unit) {
                    case __WEBPACK_IMPORTED_MODULE_2__settings__["b" /* TimerUnit */].pomodoro:
                        return 25 * 60;
                    case __WEBPACK_IMPORTED_MODULE_2__settings__["b" /* TimerUnit */].hour:
                        return 60 * 60;
                }
            }
            return this.settings.timer.customValue || 15 * 60;
        },
        enumerable: true,
        configurable: true
    });
    TmTimeMeasurementComponent.prototype.ngOnInit = function () {
    };
    TmTimeMeasurementComponent.prototype.timerTick = function (event) {
        // Display the duration of the active time table entry
        this.currentTimerEntry.duration = Math.round((+new Date() - +this.currentTimerEntry.time) / 1000);
        // Save every 10 seconds
        if (this.currentTimerEntry.duration % 10 === 0) {
            this.timeMeasurementService.editTimeTableEntry(this.currentTimerEntry, this.currentTimerEntry);
        }
    };
    TmTimeMeasurementComponent.prototype.timerStarted = function (event) {
        if (!this.isTimerPaused || !this.currentTimerEntry) {
            this.currentTimerEntry = this.timeMeasurementService.addTimeTableEntry({
                time: new Date(),
                duration: null,
                isSystemEntry: true
            });
        }
        this.isTimerPaused = false;
    };
    TmTimeMeasurementComponent.prototype.timerStopped = function (event) {
        var newEntry = {
            time: this.currentTimerEntry.time,
            duration: Math.floor((new Date().valueOf() - this.currentTimerEntry.time.valueOf()) / 1000),
            text: this.currentTimerEntry.text ? this.currentTimerEntry.text : 'Finished',
            isSystemEntry: false
        };
        if (!this.timeMeasurementService.editTimeTableEntry(this.currentTimerEntry, newEntry)) {
            console.error('Something went wrong.');
        }
        this.currentTimerEntry = null;
    };
    TmTimeMeasurementComponent.prototype.timerPaused = function (event) {
        this.isTimerPaused = true;
    };
    TmTimeMeasurementComponent.prototype.settingsChanged = function (event) {
    };
    TmTimeMeasurementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tm-time-measurement',
            template: __webpack_require__("./src/app/time-measurement/tm-time-measurement.component.html"),
            styles: [__webpack_require__("./src/app/time-measurement/tm-time-measurement.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tm_time_measurement_service__["a" /* TmTimeMeasurementService */]])
    ], TmTimeMeasurementComponent);
    return TmTimeMeasurementComponent;
}());



/***/ }),

/***/ "./src/app/time-measurement/tm-time-measurement.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TmTimeMeasurementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_tools_ct_common_tools_module__ = __webpack_require__("./src/app/common-tools/ct-common-tools.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tm_time_measurement_component__ = __webpack_require__("./src/app/time-measurement/tm-time-measurement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tm_time_table_tm_time_table_component__ = __webpack_require__("./src/app/time-measurement/tm-time-table/tm-time-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tm_timer_tm_timer_component__ = __webpack_require__("./src/app/time-measurement/tm-timer/tm-timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tm_settings_tm_settings_component__ = __webpack_require__("./src/app/time-measurement/tm-settings/tm-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tm_time_measurement_service__ = __webpack_require__("./src/app/time-measurement/tm-time-measurement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tm_time_table_tm_time_table_time_pipe__ = __webpack_require__("./src/app/time-measurement/tm-time-table/tm-time-table-time.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tm_time_table_tm_time_table_duration_pipe__ = __webpack_require__("./src/app/time-measurement/tm-time-table/tm-time-table-duration.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var TmTimeMeasurementModule = /** @class */ (function () {
    function TmTimeMeasurementModule() {
    }
    TmTimeMeasurementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__common_tools_ct_common_tools_module__["a" /* CtCommonToolsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__tm_time_measurement_component__["a" /* TmTimeMeasurementComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tm_timer_tm_timer_component__["a" /* TmTimerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tm_time_table_tm_time_table_component__["a" /* TmTimeTableComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tm_settings_tm_settings_component__["a" /* TmSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__tm_time_table_tm_time_table_time_pipe__["a" /* TmTimeTableTimePipe */],
                __WEBPACK_IMPORTED_MODULE_10__tm_time_table_tm_time_table_duration_pipe__["a" /* TmTimeTableDurationPipe */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__tm_time_measurement_service__["a" /* TmTimeMeasurementService */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__tm_time_measurement_component__["a" /* TmTimeMeasurementComponent */]
            ]
        })
    ], TmTimeMeasurementModule);
    return TmTimeMeasurementModule;
}());



/***/ }),

/***/ "./src/app/time-measurement/tm-time-measurement.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TmTimeMeasurementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LOCALSTORAGE_ENTRIES_KEY = '_timeTableEntries';
var TmTimeMeasurementService = /** @class */ (function () {
    function TmTimeMeasurementService() {
        var _this = this;
        this._timeTableEntries = [];
        this.timeTableEntriesSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.timeTableEntries$ = this.timeTableEntriesSubject.asObservable();
        this.readFromStorage();
        this.timeTableEntries$.subscribe(function (entries) {
            _this.saveToStorage();
        });
    }
    Object.defineProperty(TmTimeMeasurementService.prototype, "timeTableEntries", {
        get: function () {
            return this.timeTableEntriesSubject.getValue();
        },
        enumerable: true,
        configurable: true
    });
    TmTimeMeasurementService.prototype.addTimeTableEntry = function (entry) {
        this._timeTableEntries.push(entry);
        this.timeTableEntriesSubject.next(this._timeTableEntries);
        return entry;
    };
    TmTimeMeasurementService.prototype.removeTimeTableEntry = function (entry) {
        var index = this._timeTableEntries.indexOf(entry);
        if (index > -1) {
            this._timeTableEntries.splice(index, 1);
            this.timeTableEntriesSubject.next(this._timeTableEntries);
            return true;
        }
        return false;
    };
    TmTimeMeasurementService.prototype.editTimeTableEntry = function (oldEntry, newEntry) {
        var index = this._timeTableEntries.indexOf(oldEntry);
        if (index >= -1) {
            this._timeTableEntries[index] = newEntry;
            this.timeTableEntriesSubject.next(this._timeTableEntries);
            return newEntry;
        }
        return null;
    };
    TmTimeMeasurementService.prototype.saveToStorage = function () {
        if (this._timeTableEntries && (this._timeTableEntries.length > 0 || localStorage.getItem(LOCALSTORAGE_ENTRIES_KEY))) {
            localStorage.setItem(LOCALSTORAGE_ENTRIES_KEY, JSON.stringify(this._timeTableEntries));
        }
    };
    TmTimeMeasurementService.prototype.readFromStorage = function () {
        var jsonString = localStorage.getItem(LOCALSTORAGE_ENTRIES_KEY);
        if (jsonString) {
            var entries = JSON.parse(jsonString, function (key, value) {
                switch (key) {
                    case 'time':
                        return new Date(value);
                    case 'duration':
                        return +value;
                }
                return value;
            });
            if (entries && entries.length > 0) {
                this._timeTableEntries = entries;
                this.timeTableEntriesSubject.next(this._timeTableEntries);
            }
        }
    };
    TmTimeMeasurementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TmTimeMeasurementService);
    return TmTimeMeasurementService;
}());



/***/ }),

/***/ "./src/app/time-measurement/tm-time-table/tm-time-table-duration.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TmTimeTableDurationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TmTimeTableDurationPipe = /** @class */ (function () {
    function TmTimeTableDurationPipe() {
    }
    TmTimeTableDurationPipe.prototype.transform = function (duration, args) {
        /*const h = parseInt((duration / 60 / 60) + '', 10);
    
        const s = duration % 60;
        duration -= s;
        const m = duration % 60;*/
        var h = Math.floor(duration / (60 * 60));
        duration -= h * 60 * 60;
        var m = Math.floor(duration / 60);
        duration -= m * 60;
        var s = Math.floor(duration);
        return (h ? h + 'h' : '') + (m ? m + 'm' : '') + s + 's';
    };
    TmTimeTableDurationPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'tmTimeTableDuration'
        })
    ], TmTimeTableDurationPipe);
    return TmTimeTableDurationPipe;
}());



/***/ }),

/***/ "./src/app/time-measurement/tm-time-table/tm-time-table-time.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TmTimeTableTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TmTimeTableTimePipe = /** @class */ (function () {
    function TmTimeTableTimePipe() {
    }
    TmTimeTableTimePipe.prototype.transform = function (time, args) {
        return time.toLocaleTimeString();
    };
    TmTimeTableTimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'tmTimeTableTime'
        })
    ], TmTimeTableTimePipe);
    return TmTimeTableTimePipe;
}());



/***/ }),

/***/ "./src/app/time-measurement/tm-time-table/tm-time-table.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/time-measurement/tm-time-table/tm-time-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered\">\r\n  <thead class=\"thead-light\">\r\n    <tr>\r\n      <th style=\"width: 12%\">Start-Time</th>\r\n      <th style=\"width: 12%\">Duration</th>\r\n      <th>Note</th>\r\n      <th style=\"width: 1%\"></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let entry of (timeTableEntries | async)\" [formGroup]=\"formEditEntry\">\r\n      <td>\r\n        <ng-template [ngIf]=\"entry == editEntry && !entry.isSystemEntry\">\r\n          <input type=\"time\" class=\"form-control\" formControlName=\"time\">\r\n        </ng-template>\r\n        <ng-template [ngIf]=\"entry != editEntry || entry.isSystemEntry\">\r\n          {{entry.time | tmTimeTableTime}}\r\n        </ng-template>\r\n      </td>\r\n      <td>\r\n        <ng-template [ngIf]=\"entry == editEntry && !entry.isSystemEntry\">\r\n          <input type=\"number\" class=\"form-control\" formControlName=\"duration\">\r\n        </ng-template>\r\n        <ng-template [ngIf]=\"entry != editEntry || entry.isSystemEntry\">\r\n          {{entry.duration | tmTimeTableDuration}}\r\n        </ng-template>\r\n      </td>\r\n      <td>\r\n        <ng-template [ngIf]=\"entry == editEntry\">\r\n          <textarea class=\"form-control\" formControlName=\"text\" rows=\"1\"></textarea>\r\n        </ng-template>\r\n        <ng-template [ngIf]=\"entry != editEntry\">\r\n          {{entry.text}}\r\n        </ng-template>\r\n\r\n      </td>\r\n      <td class=\"note-options\">\r\n        <button *ngIf=\"entry == editEntry\" type=\"button\" class=\"btn btn-sm btn-success fa fas fa-check\" (click)=\"handleSaveNoteButtonClick($event, entry)\"></button>\r\n        <button *ngIf=\"entry != editEntry\" type=\"button\" class=\"btn btn-sm btn-warning fa fas fa-edit\" (click)=\"handleEditNoteButtonClick($event, entry)\"></button>\r\n        <button type=\"button\" class=\"btn btn-sm btn-danger fa fas fa-remove\" (click)=\"handleRemoveNoteButtonClick($event, entry)\"></button>\r\n      </td>\r\n\r\n    </tr>\r\n    <tr [formGroup]=\"formNewEntry\">\r\n      <td>\r\n        <input type=\"time\" class=\"form-control\" formControlName=\"time\">\r\n      </td>\r\n      <td>\r\n        <input type=\"number\" class=\"form-control\" formControlName=\"duration\">\r\n      </td>\r\n      <td>\r\n        <textarea class=\"form-control\" formControlName=\"text\" rows=\"1\"></textarea>\r\n      </td>\r\n      <td>\r\n        <button type=\"button\" class=\"btn btn-sm btn-success fa fas fa-plus\" (click)=\"handleAddNoteButtonClick($event)\"></button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/time-measurement/tm-time-table/tm-time-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TmTimeTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tm_time_measurement_service__ = __webpack_require__("./src/app/time-measurement/tm-time-measurement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_table_entry__ = __webpack_require__("./src/app/time-measurement/time-table-entry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TmTimeTableComponent = /** @class */ (function () {
    function TmTimeTableComponent(timeMeasurementService, formBuilder) {
        this.timeMeasurementService = timeMeasurementService;
        this.formBuilder = formBuilder;
        this.timeTableEntries = this.timeMeasurementService.timeTableEntries$;
    }
    TmTimeTableComponent.prototype.ngOnInit = function () {
        this.resetNewForm();
        this.resetEditForm();
    };
    /**
     * ClickEvent-Handler for the Add-Button
     * @param {Event} event
     */
    TmTimeTableComponent.prototype.handleAddNoteButtonClick = function (event) {
        var entry = this.getEntryFromForm(this.formNewEntry);
        if (entry) {
            this.add(entry);
        }
    };
    /**
     * ClickEvent-Handler for the Edit-Save-Button
     * @param {Event} event
     */
    TmTimeTableComponent.prototype.handleSaveNoteButtonClick = function (event) {
        if (!this.editEntry) {
            return;
        }
        var editedEntry = this.getEntryFromForm(this.formEditEntry, this.editEntry);
        if (editedEntry) {
            this.edit(this.editEntry, editedEntry);
        }
    };
    /**
     * ClickEvent-Handler for the Edit-Button
     * @param {Event} event
     * @param {TimeTableEntry} entry
     */
    TmTimeTableComponent.prototype.handleEditNoteButtonClick = function (event, entry) {
        this.editEntry = this.editEntry === entry ? null : entry;
        this.resetEditForm();
    };
    /**
     * ClickEvent-Handler for the Remove-Button
     * @param {Event} event
     * @param {TimeTableEntry} entry
     */
    TmTimeTableComponent.prototype.handleRemoveNoteButtonClick = function (event, entry) {
        if (confirm('Do you really want to delete this entry?')) {
            this.remove(entry);
        }
    };
    /**
     * Created an new time table entry from an FormGroup.
     * @param {FormGroup} form The FormGroup
     * @param {TimeTableEntry} entry An entry that would be edited.
     * @returns {TimeTableEntry}
     */
    TmTimeTableComponent.prototype.getEntryFromForm = function (form, entry) {
        entry = entry ? entry : new __WEBPACK_IMPORTED_MODULE_2__time_table_entry__["a" /* TimeTableEntry */]();
        if (form == this.formNewEntry || (form == this.formEditEntry && !entry.isSystemEntry)) {
            var time = mapTimeToArray(form.get('time').value);
            var duration = +form.get('duration').value;
            var timeDate = new Date();
            timeDate.setSeconds(0);
            timeDate.setHours(time[0]);
            timeDate.setMinutes(time[1]);
            entry.time = timeDate;
            entry.duration = Math.round(duration * 60);
        }
        entry.text = form.get('text').value;
        return entry;
    };
    /**
     * Resets the FormGroup for new entry
     */
    TmTimeTableComponent.prototype.resetNewForm = function () {
        this.formNewEntry = this.formBuilder.group({
            time: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](('0' + new Date().getHours()).slice(-2) + ':' + ('0' + new Date().getMinutes()).slice(-2), [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]),
            duration: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](15, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]),
            text: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required])
        });
    };
    /**
     * Resets the FormGroup for editible entry
     */
    TmTimeTableComponent.prototype.resetEditForm = function () {
        if (!this.editEntry) {
            this.formEditEntry = this.formBuilder.group({});
            this.formEditEntry.disable();
            return;
        }
        var formControls = {};
        if (!this.editEntry.isSystemEntry) {
            formControls['time'] = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](('0' + this.editEntry.time.getHours()).slice(-2) + ':' + ('0' + this.editEntry.time.getMinutes()).slice(-2), [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]);
            formControls['duration'] = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](Math.floor(this.editEntry.duration / 60), [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].pattern('[0-9]+')]);
        }
        formControls['text'] = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.editEntry.text, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]);
        this.formEditEntry = this.formBuilder.group(formControls);
        this.formEditEntry.enable();
    };
    TmTimeTableComponent.prototype.add = function (entry) {
        this.timeMeasurementService.addTimeTableEntry(entry);
        this.resetNewForm();
    };
    TmTimeTableComponent.prototype.remove = function (entry) {
        this.timeMeasurementService.removeTimeTableEntry(entry);
    };
    TmTimeTableComponent.prototype.edit = function (oldEntry, newEntry) {
        this.timeMeasurementService.editTimeTableEntry(oldEntry, newEntry);
        this.editEntry = null;
        this.resetEditForm();
    };
    TmTimeTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tm-time-table',
            template: __webpack_require__("./src/app/time-measurement/tm-time-table/tm-time-table.component.html"),
            styles: [__webpack_require__("./src/app/time-measurement/tm-time-table/tm-time-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tm_time_measurement_service__["a" /* TmTimeMeasurementService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], TmTimeTableComponent);
    return TmTimeTableComponent;
}());

/**
 * Maps a time string(HH:SS) to an array with to number-elements.
 * @param timeString Time-String with the format HH:SS
 * @returns {number[]} Array with two elements, first Minutes, second Seconds
 */
function mapTimeToArray(timeString) {
    if (timeString) {
        var splitted = timeString.split(':');
        if (!splitted || splitted.length !== 2) {
            return null;
        }
        return splitted;
    }
    return null;
}


/***/ }),

/***/ "./src/app/time-measurement/tm-timer/tm-timer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/time-measurement/tm-timer/tm-timer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"countdown-timer-display\">\r\n  <span>{{ remainingTimeString | async }}</span>\r\n</div>\r\n\r\n<div class=\"countdown-timer-buttons\">\r\n  <button type=\"button\" class=\"btn btn-lg btn-success\" type=\"button\" (click)=\"handleStartClick($event)\" [attr.disabled]=\"state == 4 ? 'disabled' : null\">{{ state == 1 ? 'Start' : 'Resume' }}</button>\r\n  <button type=\"button\" class=\"btn btn-lg btn-warning\" type=\"button\" (click)=\"handlePauseClick($event)\" [attr.disabled]=\"state != 4 ? 'disabled' : null\">Pause</button>\r\n  <button type=\"button\" class=\"btn btn-lg btn-danger\" type=\"button\" (click)=\"handleStopClick($event)\" [attr.disabled]=\"state != 2 && state != 4 ? 'disabled' : null\">Stop</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/time-measurement/tm-timer/tm-timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TimerState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TmTimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("./src/app/time-measurement/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_tools_ct_sound_service__ = __webpack_require__("./src/app/common-tools/ct-sound.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimerState;
(function (TimerState) {
    TimerState[TimerState["stopped"] = 1] = "stopped";
    TimerState[TimerState["paused"] = 2] = "paused";
    TimerState[TimerState["running"] = 4] = "running";
})(TimerState || (TimerState = {}));
var TmTimerComponent = /** @class */ (function () {
    function TmTimerComponent(soundService) {
        this.soundService = soundService;
        this.timerEnded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.timerStarted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.timerStopped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.timerPaused = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.timerTick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this._startValue = 0;
        this._remaining = 0;
        this.remainingTimeString = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('00:00');
        this.state = TimerState.stopped;
        this._timerHandle = null;
    }
    Object.defineProperty(TmTimerComponent.prototype, "timerDoneSoundfile", {
        get: function () {
            return this._timerDoneSoundfile;
        },
        set: function (value) {
            this._timerDoneSoundfile = value;
            this.stop();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TmTimerComponent.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.stop();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TmTimerComponent.prototype, "startValue", {
        get: function () {
            return this._startValue;
        },
        set: function (value) {
            this._startValue = value;
            this.remaining = value;
            this.updateRemainingTimeString();
            this.stop();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TmTimerComponent.prototype, "remaining", {
        get: function () {
            return this._remaining;
        },
        set: function (value) {
            this._remaining = value;
            this.updateRemainingTimeString();
        },
        enumerable: true,
        configurable: true
    });
    TmTimerComponent.prototype.ngOnInit = function () {
        this.startValue = 25 * 60;
        this.remaining = this.startValue;
        this.type = __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* TimerType */].timer;
    };
    TmTimerComponent.prototype.ngOnChanges = function (changes) {
        if (changes['startValue'] || changes['type']) {
            this.stop();
        }
    };
    TmTimerComponent.prototype.handleStartClick = function (event) {
        if (this.state !== TimerState.running) {
            this.resume();
            this.timerStarted.emit(null);
        }
    };
    TmTimerComponent.prototype.handlePauseClick = function (event) {
        if (this.state === TimerState.running) {
            this.pause();
            this.timerPaused.emit(null);
        }
    };
    TmTimerComponent.prototype.handleStopClick = function (event) {
        if (confirm('Do you really want to stop the timer?')) {
            this.stop();
            this.timerStopped.emit(null);
        }
    };
    TmTimerComponent.prototype.resume = function () {
        var _this = this;
        this.state = TimerState.running;
        this._timerHandle = window.setInterval(function () {
            _this.tick();
        }, 1000);
    };
    TmTimerComponent.prototype.pause = function () {
        this.state = TimerState.paused;
        window.clearInterval(this._timerHandle);
    };
    TmTimerComponent.prototype.stop = function () {
        this.state = TimerState.stopped;
        this.remaining = this.type == __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* TimerType */].timer ? this.startValue : 0;
        this.updateRemainingTimeString();
        window.clearInterval(this._timerHandle);
    };
    TmTimerComponent.prototype.tick = function () {
        switch (+this.type) {
            default:
            case __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* TimerType */].timer:
                this.remaining -= 1;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* TimerType */].counter:
                this.remaining += 1;
                break;
        }
        if (this.remaining <= 0) {
            this.stop();
            this.playSound();
            this.timerStopped.emit();
        }
        this.updateRemainingTimeString();
        this.timerTick.emit(this.remaining);
    };
    TmTimerComponent.prototype.playSound = function () {
        if (this.timerDoneSoundfile)
            this.soundService.playSound(this.timerDoneSoundfile);
    };
    TmTimerComponent.prototype.updateRemainingTimeString = function () {
        var minutes = parseInt((this.remaining / 60) + '');
        var seconds = parseInt((this.remaining % 60) + '');
        this.remainingTimeString.next((minutes < 10 ? '0' + minutes : minutes) +
            ':' +
            (seconds < 10 ? '0' + seconds : seconds));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], TmTimerComponent.prototype, "timerEnded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], TmTimerComponent.prototype, "timerStarted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], TmTimerComponent.prototype, "timerStopped", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], TmTimerComponent.prototype, "timerPaused", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], TmTimerComponent.prototype, "timerTick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TmTimerComponent.prototype, "timerDoneSoundfile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TmTimerComponent.prototype, "type", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TmTimerComponent.prototype, "startValue", null);
    TmTimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tm-timer',
            template: __webpack_require__("./src/app/time-measurement/tm-timer/tm-timer.component.html"),
            styles: [__webpack_require__("./src/app/time-measurement/tm-timer/tm-timer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__common_tools_ct_sound_service__["a" /* CtSoundService */]])
    ], TmTimerComponent);
    return TmTimerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map