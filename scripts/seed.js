const { db } = require('@vercel/postgres');

async function seedAttendanceFormSubmissions(client) {
  try {
    // Create the "attendance_form_submissions" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS attendance_form_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        adults INT NULL DEFAULT NULL,
        kids INT NULL DEFAULT NULL,
        message TEXT DEFAULT NULL,
        date TIMESTAMP NOT NULL DEFAULT now()
      );
    `;

    console.log(`Created "attendance_form_submissions" table`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error creating attendance_form_submissions:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedAttendanceFormSubmissions(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
