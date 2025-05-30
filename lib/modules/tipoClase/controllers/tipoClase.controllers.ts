import { Request, Response } from 'express';
import * as _ from 'lodash';
import TipoClase from '../models/tipoClase.models';


export class TipoClaseController {
    crearTipoClase = (req: Request, res: Response) =>  {
        const nuevaTipoClase = new TipoClase({
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
        .catch(error =>{
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'TipoClase no creada'
            });
        });
    }

    obtenerTipoClases = (req: Request, res: Response) => {
        TipoClase.find()
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
    }

    actualizarTipoClase  = (req: Request, res: Response) => {
        TipoClase.findByIdAndUpdate(req.params.id, {
            tipoClase: req.body.tipoClase
        })
        .then(tipoClaseActualizada => {
            res.status(200).json(
                {
                    ok: true,
                    tipoClase: tipoClaseActualizada,
                    message: 'TipoClase actualizada'    
                }
            );
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'TipoClase no actualizada'
            });
        });
    }

    eliminarTipoClase  = (req: Request, res: Response) => {
        TipoClase.findByIdAndDelete(req.params.id)
        .then(tipoClaseEliminada => {
            res.status(200).json(
                {
                    ok: true,                   
                    message: 'TipoClase eliminada'    
                }
            );
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'TipoClase no eliminada'
            });
        });
    }

    

}