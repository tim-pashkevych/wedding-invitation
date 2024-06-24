'use server';

import { sql } from '@vercel/postgres';
import { format } from 'date-fns-tz';

import { IAttendanceSubmission } from '@/app/types';

export async function save(data: IAttendanceSubmission) {
  const date = format(new Date(), 'yyyy-MM-dd KK:mm:ss', {
    timeZone: 'America/Los_Angeles',
  });

  const { rows } =
    await sql`INSERT INTO attendance_form_submissions (name, adults, kids, message, date) VALUES (${data.name}, ${data.adults}, ${data.kids}, ${data.message}, ${date}) ON CONFLICT (id) DO NOTHING;`;

  return rows;
}
