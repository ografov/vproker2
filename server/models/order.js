import Sequelize from 'sequelize'
import sequelize from '../db/sequelize';
import Tool from './tool';

const Order = sequelize.define('order', {
    id: { type: Sequelize.STRING, primaryKey: true, field: 'ID' },
    clientName: { type: Sequelize.STRING, field: 'ClientName' },
    clientPhoneNumber: { type: Sequelize.STRING, field: 'ClientPhoneNumber' },
    createdBy: { type: Sequelize.STRING, field: 'CreatedBy' },
    description: { type: Sequelize.STRING, field: 'Description' },
    endDate: { type: Sequelize.STRING, field: 'EndDate' },
    paidPledge: { type: Sequelize.STRING, field: 'PaidPledge' },
    payment: { type: Sequelize.STRING, field: 'Payment' },
    price: { type: Sequelize.STRING, field: 'Price' },
    startDate: { type: Sequelize.STRING, field: 'StartDate' },
    toolId: {
        type: Sequelize.STRING,
        references: {
            model: "tool",
            key: "id"
        }
    },
    contractNumber: { type: Sequelize.STRING, field: 'ContractNumber' },
    clientPassport: { type: Sequelize.STRING, field: 'ClientPassport' },
}, {
        tableName: 'Order',
        timestamps: false // don't add the timestamp attributes (updatedAt, createdAt)
    });


Tool.hasMany(Order);

export default Order;
