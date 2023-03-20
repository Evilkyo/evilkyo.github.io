"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityChangeMemberDelta = void 0;
class EntityChangeMemberDelta {
    constructor(offset, type, buffer) {
        this.offset = offset;
        this.type = type;
        this.buffer = buffer;
    }
    write(stream) {
        stream.writeVariableLength(this.offset);
        stream.writeUInt8(this.type);
        stream.writeBytes(this.buffer);
    }
}
exports.EntityChangeMemberDelta = EntityChangeMemberDelta;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5Q2hhbmdlTWVtYmVyRGVsdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2FwaS9wYWNrZXRzL0VudGl0eUNoYW5nZU1lbWJlckRlbHRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsdUJBQXVCO0lBQ2xDLFlBQ1csTUFBYyxFQUNkLElBQW1CLEVBQ25CLE1BQWdCO1FBRmhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFlO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQVU7SUFBRyxDQUFDO0lBRS9CLEtBQUssQ0FBQyxNQUF3QjtRQUM1QixNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQVhELDBEQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwIGZyb20gJy4uJztcblxuZXhwb3J0IGNsYXNzIEVudGl0eUNoYW5nZU1lbWJlckRlbHRhIGltcGxlbWVudHMgYXBwLklQYWNrZXRXcml0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICByZWFkb25seSBvZmZzZXQ6IG51bWJlcixcbiAgICByZWFkb25seSB0eXBlOiBhcHAuRGVsdGFUeXBlLFxuICAgIHJlYWRvbmx5IGJ1ZmZlcjogRGF0YVZpZXcpIHt9XG5cbiAgd3JpdGUoc3RyZWFtOiBhcHAuQmluYXJ5V3JpdGVyKSB7XG4gICAgc3RyZWFtLndyaXRlVmFyaWFibGVMZW5ndGgodGhpcy5vZmZzZXQpO1xuICAgIHN0cmVhbS53cml0ZVVJbnQ4KHRoaXMudHlwZSk7XG4gICAgc3RyZWFtLndyaXRlQnl0ZXModGhpcy5idWZmZXIpO1xuICB9XG59XG4iXX0=