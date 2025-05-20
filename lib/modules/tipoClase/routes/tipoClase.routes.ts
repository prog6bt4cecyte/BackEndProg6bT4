+import { TipoClaseController } from "../controllers/tipoClase.controller";

export class TipoClaseRoutes {
    private tipoClaseController: TipoClaseController = new TipoClaseController();
    public routes(app): void {
        app.route('/tipoClase')
        .get(this.tipoClaseController.obtenerTipoClases)
        .post(this.tipoClaseController.crearTipoClase);

        app.route('/tipoClase/:id')
        .put(this.tipoClaseController.actualizarTipoClase)
        .delete(this.tipoClaseController.eliminarTipoClase);
    }
}