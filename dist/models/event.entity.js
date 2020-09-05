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
exports.Event = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const room_entity_1 = require("./room.entity");
let Event = class Event extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Event.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Event.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'date' }),
    __metadata("design:type", Date)
], Event.prototype, "eventDate", void 0);
__decorate([
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], Event.prototype, "assistance", void 0);
__decorate([
    typeorm_1.OneToOne(type => user_entity_1.User),
    typeorm_1.JoinColumn(),
    __metadata("design:type", user_entity_1.User)
], Event.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.OneToOne(type => room_entity_1.Room),
    typeorm_1.JoinColumn(),
    __metadata("design:type", room_entity_1.Room)
], Event.prototype, "room", void 0);
Event = __decorate([
    typeorm_1.Entity()
], Event);
exports.Event = Event;
//# sourceMappingURL=event.entity.js.map