import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateOptions1733110286641 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'options',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'text',
            type: 'varchar',
            isGenerated: true,
            isNullable: false,
          },
          {
            name: 'isCorrect',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'questionId',
            type: 'int',
            isNullable: false,
          },
        ],
      }),
      true,
    );
    //Create foreign key for questionId
    await queryRunner.createForeignKey(
      'options',
      new TableForeignKey({
        columnNames: ['questionId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'questions',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //Drop the forein key first
    const table = await queryRunner.getTable('options');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('questionId') !== -1,
    );
    if (foreignKey) {
      await queryRunner.dropForeignKey('options', foreignKey);
    }

    //Drop the table options
    await queryRunner.dropTable('options');
  }
}
