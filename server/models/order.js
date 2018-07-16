import Sequelize from 'sequelize'
import sequelize from '../db/sequelize';

const Order = sequelize.define('order', {
    id: { type: Sequelize.STRING, primaryKey: true, field: 'ID' },
    clientName: { type: Sequelize.STRING, field: 'ClientName' },
    clientPhoneNumber: { type: Sequelize.STRING, field: 'ClientPhoneNumber' }
}, {
        tableName: 'Order', 
        timestamps: false // don't add the timestamp attributes (updatedAt, createdAt)
    });

export default Order;
