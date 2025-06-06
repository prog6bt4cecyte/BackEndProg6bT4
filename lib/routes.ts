import { TipoClaseRoutes } from "./modules/tipoClase/routes/tipoClase.routes";
import { UsuarioRoutes } from "./modules/usuario/routes/usuario.routes";

export class Routes {

    private usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    private tipoClaseRoutes: TipoClaseRoutes = new TipoClaseRoutes();

    public routes(app): void {
        this.usuarioRoutes.routes(app);
        this.tipoClaseRoutes.routes(app);
    }
}