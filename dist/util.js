"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = random;
function random(len) {
    let options = "qwertyuiopasdfghjklzxcvbnm12345678";
    let length = options.length;
    let ans = "";
    for (let i = 0; i < options.length; i++) {
        ans += options[Math.floor((Math.random() * length))];
    }
    return ans;
}
//# sourceMappingURL=util.js.map