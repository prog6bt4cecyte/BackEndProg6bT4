"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoClaseRoutes = void 0;
+;
const tipoClase_controller_1 = require("../controllers/tipoClase.controller");
class TipoClaseRoutes {
    constructor() {
        this.tipoClaseController = new tipoClase_controller_1.TipoClaseController();
    }
    routes(app) {
        app.route('/tipoClase')
            .get(this.tipoClaseController.obtenerTipoClases)
            .post(this.tipoClaseController.crearTipoClase);
        app.route('/tipoClase/:id')
            .put(this.tipoClaseController.actualizarTipoClase)
            .delete(this.tipoClaseController.eliminarTipoClase);
    }
}
exports.TipoClaseRoutes = TipoClaseRoutes;
//# sourceMappingURL=tipoClase.routes.js.map