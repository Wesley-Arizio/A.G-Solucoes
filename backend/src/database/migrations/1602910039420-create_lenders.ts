import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createLenders1602910039420 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "lenders",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    unsigned: true,
                    isPrimary: true,
                    isUnique: true,
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'min_price',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'max_price',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'consequences',
                    type: 'text',
                },
                {
                    name: 'contact',
                    type: 'decimal'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('lenders');
    }

}


// nome do agiota
// preço minimo
// preço máximo
// consequencias de nao pagamento ou atraso (descrição);
// contato (zap zap, email)
// foto de perfil ou alguma logo aleatoria