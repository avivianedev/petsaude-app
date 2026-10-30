import { getDatabase } from './database';

export const initializeDatabase = async () => {
  const db = await getDatabase();
  await db.execAsync(`
        PRAGMA foreign_keys = ON;
        CREATE TABLE IF NOT EXISTS tutor (
        id_tutor INTEGER PRIMARY KEY,
        nome_tutor TEXT NOT NULL,
        telefone TEXT,
        email TEXT,
        vet_confianca TEXT
        );


        CREATE TABLE IF NOT EXISTS pet (
        id_pet INTEGER PRIMARY KEY,
        nome_pet TEXT NOT NULL,
        id_tutor INTEGER,        
        especie TEXT NOT NULL,
        sexo TEXT NOT NULL,
        pelagem TEXT,
        data_nascimento TEXT,
        raca TEXT,
        peso REAL,
        foto TEXT,
        microchip TEXT,
        castrado INTEGER,

        FOREIGN KEY (id_tutor) REFERENCES tutor(id_tutor),
        
        );
        CREATE TABLE IF NOT EXISTS vacina(
        id_vacina INTEGER PRIMARY KEY,
        nome_vacina TEXT NOT NULL,
        lembrete_ativo INTEGER,
        lembrete_antecedencia INTEGER,
        id_pet INTEGER,
        FOREIGN KEY (id_pet) REFERENCES pet(id_pet)
        );

        CREATE TABLE IF NOT EXISTS medicamento(
        id_medicamento INTEGER PRIMARY KEY,
        nome_medicamento TEXT NOT NULL,
        dosagem REAL,
        data_inicio TEXT,
        frequencia INTEGER,
        lembrete_ativo INTEGER,
        id_pet INTEGER,
        duracao INTEGER,
        FOREIGN KEY id_pet REFERENCES pet(id_pet)

        );

        CREATE TABLE IF NOT EXISTS aplicacao(
        id_aplicacao INTEGER PRIMARY KEY,
        data_aplicacao TEXT,
        proxima_dose TEXT,
        id_vacina INTEGER,
        FOREIGN KEY id_vacina REFERENCES vacina(id_vacina)
        
        );

        CREATE TABLE IF NOT EXISTS dose(
        id_dose INTEGER PRIMARY KEY,
        data_administracao TEXT,
        data_registro TEXT,
        id_medicamento INTEGER,
        FOREIGN KEY id_medicamento REFERENCES medicamento(id_medicamento)
        );


        `);
};
