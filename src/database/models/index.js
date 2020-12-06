import sequelize from '../sequelize';

export default async function init() {
    try {
        await sequelize.sync();
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.log(error);
    }
}
