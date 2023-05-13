"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSouceOptions = void 0;
const typeorm_1 = require("typeorm");
exports.dataSouceOptions = {
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'nest_practice',
    entities: ['dist/src/**/entities/*.js'],
    migrations: ['dist/db/migrations/*.js'],
};
const dataSource = new typeorm_1.DataSource(exports.dataSouceOptions);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map