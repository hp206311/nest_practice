"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigrations1683965453654 = void 0;
class NewMigrations1683965453654 {
    constructor() {
        this.name = 'NewMigrations1683965453654';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }
}
exports.NewMigrations1683965453654 = NewMigrations1683965453654;
//# sourceMappingURL=1683965453654-NewMigrations.js.map