import { INTEGER, STRING } from 'sequelize';
import { define } from '../sequelize';

const Tag = define('tags', {
    id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: STRING, allowNull: false, min: 0, notEmpty: true },
});

Tag.associate = models => {
    Tag.belongsToMany(models.Post, {
        foreignKey: 'tagId',
        as: 'posts',
        through: 'posts_tags',
    });
};

export default Tag;
