"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const api_1 = require("../controller/api");
const router = (0, express_1.Router)();
exports.userRoutes = router;
router.put("/update-user", () => { }, api_1.updateUserData);
