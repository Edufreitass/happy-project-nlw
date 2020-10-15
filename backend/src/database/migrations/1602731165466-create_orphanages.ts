import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602731165466 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
      // Realizar alterações
      // Criar tabela, criar um novo campo, deletar algum campo
      await queryRunner.createTable(new Table({
        name: 'orphanages',
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
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10,
            precision: 2 // Números depois da virgula
          },
          {
            name: 'longitude',
            type: 'decimal',
            scale: 10,
            precision: 2
          },
          {
            name: 'about',
            type: 'text',
          },
          {
            name: 'instructions',
            type: 'text',
          },
          {
            name: 'open_on_weekends',
            type: 'boolean',
            default: false
          },
        ],
      }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      // Desfazer o que foi feito no método 'up'
      await queryRunner.dropTable('orphanages');
  }

}
