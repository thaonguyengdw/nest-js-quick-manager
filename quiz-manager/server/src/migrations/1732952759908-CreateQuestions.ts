import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateQuestions1732952759908 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'questions',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            comment: 'The question unique identifier',
          },
          {
            name: 'question',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'quizId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );

    //add a foreign key to reference the quizs table
    await queryRunner.createForeignKey(
      'questions',
      new TableForeignKey({
        columnNames: ['quizId'],
        referencedTableName: 'quizes',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE', // ensure that when a quiz is deleted, all associated questions are deleted
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //Drop the forein key first
    const table = await queryRunner.getTable('questions');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('quizId') !== -1,
    );
    if (foreignKey) {
      await queryRunner.dropForeignKey('questions', foreignKey);
    }
  }
}
