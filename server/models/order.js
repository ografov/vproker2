import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OrderScema = new Schema({
    /* Client Info */
    clientName: { type: String, req },
    clientPhoneNumber: { type: String, req },
    clientPassport: { type: String, req },

    paidPledge: { type: String, req },
    startDate: { type: String, req }, 
    toolID: { type: String, req },

    /* Optional fields */
    createdBy: { type: String },
    description: { type: String },
    endDate: { type: String },
    payment: { type: String },
    price: { type: String },
    contractNumber: { type: String },
});

