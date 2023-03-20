"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonList = void 0;
const app = require("..");
class ButtonList extends app.api.Adapter {
    constructor(address, inSpeed = new app.UInt8(app.offsets.button.inSpeed), inAttack = new app.UInt8(app.offsets.button.inAttack)) {
        super(new app.api.Entity(address, [inSpeed, inAttack]));
        this.inSpeed = inSpeed;
        this.inAttack = inAttack;
    }
}
exports.ButtonList = ButtonList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29yZS9jbGFzc2VzL0J1dHRvbkxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEJBQTBCO0FBRTFCLE1BQWEsVUFBVyxTQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBdUI7SUFDN0QsWUFBWSxPQUFlLEVBQ2hCLFVBQVUsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNuRCxXQUFXLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDOUQsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUYvQyxZQUFPLEdBQVAsT0FBTyxDQUE0QztRQUNuRCxhQUFRLEdBQVIsUUFBUSxDQUE2QztJQUVoRSxDQUFDO0NBQ0Y7QUFORCxnQ0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuLic7XG5cbmV4cG9ydCBjbGFzcyBCdXR0b25MaXN0IGV4dGVuZHMgYXBwLmFwaS5BZGFwdGVyPGFwcC5hcGkuRW50aXR5PiB7XG4gIGNvbnN0cnVjdG9yKGFkZHJlc3M6IGJpZ2ludCxcbiAgICByZWFkb25seSBpblNwZWVkID0gbmV3IGFwcC5VSW50OChhcHAub2Zmc2V0cy5idXR0b24uaW5TcGVlZCksXG4gICAgcmVhZG9ubHkgaW5BdHRhY2sgPSBuZXcgYXBwLlVJbnQ4KGFwcC5vZmZzZXRzLmJ1dHRvbi5pbkF0dGFjaykpIHtcbiAgICBzdXBlcihuZXcgYXBwLmFwaS5FbnRpdHkoYWRkcmVzcywgW2luU3BlZWQsIGluQXR0YWNrXSkpO1xuICB9XG59XG4iXX0=