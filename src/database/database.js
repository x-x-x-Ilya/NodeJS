import sequelize from './sequelize';

export default async function ModelsSynchronization() {
    try {
        await sequelize;
        console.log('Sequelize connected successfully.');
    } catch (error) {
        console.log('Sequelize connect error:', error);
    }
}
