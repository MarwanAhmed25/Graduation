"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
//import 
// from './config/congig';
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db_url = process.env.db_url;
//const env = process.env.env || 'development';
//config[env];
exports.sequelize = new sequelize_1.Sequelize({
    host: process.env.db_host,
    username: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_name,
    dialect: 'postgres',
    port: 5432,
    native: true,
    ssl: true,
});
//console.log(db_url);
const User = exports.sequelize.define('User', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    f_name: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            len: [3, 30],
        }
    },
    l_name: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            len: [3, 30],
        }
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isNumeric: true
        }
    },
    password: sequelize_1.DataTypes.STRING,
    role: {
        type: sequelize_1.DataTypes.STRING,
        /* validate:{
            isIn:[['admin','needy','organization','volunteer','benefactor']]
        } */
    },
    birthday: {
        type: sequelize_1.DataTypes.DATE,
        validate: {
            isBefore: '1-1-2004'
        }
    },
    rate: {
        type: sequelize_1.DataTypes.NUMBER.UNSIGNED
    },
});
const OrganizationLink = exports.sequelize.define('OrganizationLink', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    link: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isUrl: true
        }
    },
});
const Types = exports.sequelize.define('Types', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    type: sequelize_1.DataTypes.STRING,
    description: sequelize_1.DataTypes.TEXT,
});
const Charity = exports.sequelize.define('Charity', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    images: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    description: sequelize_1.DataTypes.TEXT,
    status: sequelize_1.DataTypes.STRING,
    address: sequelize_1.DataTypes.STRING,
    city: sequelize_1.DataTypes.STRING,
});
const Comments = exports.sequelize.define('Comments', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    message: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    }
});
User.hasOne(Types);
Charity.hasOne(User);
Charity.hasOne(Types);
Charity.hasMany(Comments);
OrganizationLink.hasOne(User);
Comments.hasOne(User);
