"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicAlive = void 0;
const app = require("..");
class BasicAlive {
    write(stream) {
        stream.writeUInt8(app.PacketType.BasicAlive);
    }
}
exports.BasicAlive = BasicAlive;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNBbGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvYXBpL3BhY2tldHMvQmFzaWNBbGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwQkFBMEI7QUFFMUIsTUFBYSxVQUFVO0lBQ3JCLEtBQUssQ0FBQyxNQUF3QjtRQUM1QixNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNGO0FBSkQsZ0NBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLi4nO1xuXG5leHBvcnQgY2xhc3MgQmFzaWNBbGl2ZSBpbXBsZW1lbnRzIGFwcC5JUGFja2V0V3JpdGVyIHtcbiAgd3JpdGUoc3RyZWFtOiBhcHAuQmluYXJ5V3JpdGVyKSB7XG4gICAgc3RyZWFtLndyaXRlVUludDgoYXBwLlBhY2tldFR5cGUuQmFzaWNBbGl2ZSk7XG4gIH1cbn1cbiJdfQ==