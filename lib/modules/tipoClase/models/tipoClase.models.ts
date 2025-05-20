import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface ITipoClase extends mongoose.Document {  
    tipoClase: string;
}

 const TipoClaseSchema = new Schema(
    {
        tipoClase: {
            type: String,
            required: [true, 'tipoClase required'],
            unique: true
        }
    }
    
 );

const TipoClase = mongoose.model<ITipoClase>("TipoClase", TipoClaseSchema);
export default TipoClase;