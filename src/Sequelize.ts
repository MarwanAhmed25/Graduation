import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

const User = sequelize.define('User', {
    id:DataTypes.UUID,
    f_name:DataTypes.STRING,
    l_name:DataTypes.STRING,
    email: DataTypes.STRING,
    phone:DataTypes.STRING,
    password:DataTypes.STRING,
    role:DataTypes.STRING,
    birthday: DataTypes.DATE,
    admin_accepted:DataTypes.NUMBER.UNSIGNED,//forignkey of user
    type_id:DataTypes.NUMBER,//forgnkey for types
    rate:DataTypes.NUMBER.UNSIGNED,
});

const OrganizationLink = sequelize.define('OrganizationLink',{
    id:DataTypes.UUID,
    link:DataTypes.STRING,
    organization_id:DataTypes.NUMBER,//fornkey of user
});

const Types = sequelize.define('Types',{
    id:DataTypes.UUID,
    type:DataTypes.STRING,
    description:DataTypes.TEXT,
});

const Charity = sequelize.define('Charity',{
    id:DataTypes.UUID,
    user_id:DataTypes.NUMBER,//forgnkey for user
    helper_id:DataTypes.NUMBER,//forgnkey for user
    type_id:DataTypes.NUMBER,//forgnkey for types
    images:DataTypes.ARRAY(DataTypes.STRING),
    description:DataTypes.TEXT,
    status:DataTypes.STRING,
    address:DataTypes.STRING,
    city:DataTypes.STRING,
});

const Comments = sequelize.define('Comments',{
    id:DataTypes.UUID,
    user_id:DataTypes.NUMBER,//forgnkey for user
    charity_id:DataTypes.NUMBER,//forgnkey for charity
    message:DataTypes.TEXT,
});