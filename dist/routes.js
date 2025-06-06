"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const tipoClase_routes_1 = require("./modules/tipoClase/routes/tipoClase.routes");
const usuario_routes_1 = require("./modules/usuario/routes/usuario.routes");
class Routes {
    constructor() {
        this.usuarioRoutes = new usuario_routes_1.UsuarioRoutes();
        this.tipoClaseRoutes = new tipoClase_routes_1.TipoClaseRoutes();
    }
    routes(app) {
        this.usuarioRoutes.routes(app);
        this.tipoClaseRoutes.routes(app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map