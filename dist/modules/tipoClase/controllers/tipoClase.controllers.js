"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoClaseController = void 0;
const tipoClase_models_1 = require("../models/tipoClase.models");
class TipoClaseController {
    constructor() {
        this.crearTipoClase = (req, res) => {
            const nuevaTipoClase = new tipoClase_models_1.default({
                tipoClase: req.body.tipoClase
            });
            nuevaTipoClase.save()
                .then(tipoClaseCreada => {
                res.status(201).json({
                    ok: true,
                    tipoClase: tipoClaseCreada,
                    message: 'TipoClase creada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'TipoClase no creada'
                });
            });
        };
        this.obtenerTipoClases = (req, res) => {
            tipoClase_models_1.default.find()
                .then(tipoClases => {
                res.status(200).json({
                    ok: true,
                    tipoClases: tipoClases
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: error.message
                });
            });
        };
        this.actualizarTipoClase = (req, res) => {
            tipoClase_models_1.default.findByIdAndUpdate(req.params.id, {
                tipoClase: req.body.tipoClase
            })
                .then(tipoClaseActualizada => {
                res.status(200).json({
                    ok: true,
                    tipoClase: tipoClaseActualizada,
                    message: 'TipoClase actualizada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'TipoClase no actualizada'
                });
            });
        };
        this.eliminarTipoClase = (req, res) => {
            tipoClase_models_1.default.findByIdAndDelete(req.params.id)
                .then(tipoClaseEliminada => {
                res.status(200).json({
                    ok: true,
                    message: 'TipoClase eliminada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'TipoClase no eliminada'
                });
            });
        };
    }
}
exports.TipoClaseController = TipoClaseController;
//# sourceMappingURL=tipoClase.controllers.js.map