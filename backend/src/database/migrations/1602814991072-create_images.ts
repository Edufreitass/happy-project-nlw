import { MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602814991072 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'images',
      columns: [
        {
          name: 'id', // Nome da coluna
          type: 'integer', // Tipo da coluna
          unsigned: true, // Essa coluna não pode ser negativa
          isPrimary: true, // Primary key
          isGenerated: true, // Essa coluna será gerada automaticamente
          generationStrategy: 'increment', // Será gerada automaticamente utilizando uma lógica incremental
        },
        {
          name: 'path',
          type: 'varchar',
        },
        {
          name: 'orphanage_id',
          type: 'integer',
        }
      ],
      foreignKeys: [
        {
          name: 'ImageOrphanage',
          columnNames: ['orphanage_id'],
          referencedTableName: 'orphanages',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }

}
