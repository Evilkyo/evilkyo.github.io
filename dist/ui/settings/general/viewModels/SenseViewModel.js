"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SenseViewModel = void 0;
const lib = require("lib");
const mobx = require("mobx");
const ui = require("ui");
class SenseViewModel {
    constructor() {
        this.highlightItems = new ui.BoolStorage('settings.sense.highlightItems', false);
        this.highlightPlayers = new ui.BoolStorage('settings.sense.highlightPlayers', false);
        this.longRangeMode = new ui.BoolStorage('settings.sense.longRangeMode', false);
        mobx.makeObservable(this);
        mobx.autorun(this.updateOptions.bind(this));
    }
    updateOptions() {
        this.options = {
            longRangeMode: this.longRangeMode.value
        };
    }
}
__decorate([
    mobx.observable,
    __metadata("design:type", Object)
], SenseViewModel.prototype, "options", void 0);
exports.SenseViewModel = SenseViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vuc2VWaWV3TW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdWkvc2V0dGluZ3MvZ2VuZXJhbC92aWV3TW9kZWxzL1NlbnNlVmlld01vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJCQUEyQjtBQUMzQiw2QkFBNkI7QUFDN0IseUJBQXlCO0FBRXpCLE1BQWEsY0FBYztJQUt6QjtRQUpTLG1CQUFjLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLCtCQUErQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVFLHFCQUFnQixHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxpQ0FBaUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRixrQkFBYSxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyw4QkFBOEIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUdqRixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBS08sYUFBYTtRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSztTQUN4QyxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBUEM7SUFEQyxJQUFJLENBQUMsVUFBVTs7K0NBQ3FCO0FBWHZDLHdDQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxpYiBmcm9tICdsaWInO1xuaW1wb3J0ICogYXMgbW9ieCBmcm9tICdtb2J4JztcbmltcG9ydCAqIGFzIHVpIGZyb20gJ3VpJztcblxuZXhwb3J0IGNsYXNzIFNlbnNlVmlld01vZGVsIHtcbiAgcmVhZG9ubHkgaGlnaGxpZ2h0SXRlbXMgPSBuZXcgdWkuQm9vbFN0b3JhZ2UoJ3NldHRpbmdzLnNlbnNlLmhpZ2hsaWdodEl0ZW1zJywgZmFsc2UpO1xuICByZWFkb25seSBoaWdobGlnaHRQbGF5ZXJzID0gbmV3IHVpLkJvb2xTdG9yYWdlKCdzZXR0aW5ncy5zZW5zZS5oaWdobGlnaHRQbGF5ZXJzJywgZmFsc2UpO1xuICByZWFkb25seSBsb25nUmFuZ2VNb2RlID0gbmV3IHVpLkJvb2xTdG9yYWdlKCdzZXR0aW5ncy5zZW5zZS5sb25nUmFuZ2VNb2RlJywgZmFsc2UpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIG1vYngubWFrZU9ic2VydmFibGUodGhpcyk7XG4gICAgbW9ieC5hdXRvcnVuKHRoaXMudXBkYXRlT3B0aW9ucy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIEBtb2J4Lm9ic2VydmFibGVcbiAgb3B0aW9ucz86IGxpYi5mZWF0dXJlcy5JU2Vuc2VPcHRpb25zO1xuXG4gIHByaXZhdGUgdXBkYXRlT3B0aW9ucygpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBsb25nUmFuZ2VNb2RlOiB0aGlzLmxvbmdSYW5nZU1vZGUudmFsdWVcbiAgICB9O1xuICB9XG59XG4iXX0=