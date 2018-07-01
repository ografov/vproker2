import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ToolScema = new Schema({
    name: { type: String, req },
    pledge: { type: String, req },
    price: { type: String, req },
    dayPrice: { type: String, req },
    workShiftPrice: { type: String, req },
    
    /* Optional fields */
    description: { type: String }
});