"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TipoClaseSchema = new Schema({
    tipoClase: {
        type: String,
        required: [true, 'tipoClase required'],
        unique: true
    }
});
const TipoClase = mongoose.model("TipoClase", TipoClaseSchema);
exports.default = TipoClase;
//# sourceMappingURL=tipoClase.models.js.map