'use server';

import { sql } from '@vercel/postgres';
import { format } from 'date-fns-tz';
import sgMail from '@sendgrid/mail';

import { IAttendanceSubmission } from '@/app/types';

export async function save(data: IAttendanceSubmission) {
  const date = format(new Date(), 'yyyy-MM-dd KK:mm:ss', {
    timeZone: 'America/Los_Angeles',
  });

  const { rows } =
    await sql`INSERT INTO attendance_form_submissions (name, adults, kids, date) VALUES (${data.name}, ${data.adults}, ${data.kids}, ${date}) ON CONFLICT (id) DO NOTHING;`;

  return rows;
}

export async function sendEmail(data: IAttendanceSubmission) {
  const { rows } = await sql`SELECT * FROM attendance_form_submissions;`;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '');

  const totalGuests = rows.length;
  const totalAdults = rows.reduce(
    (total, row) => total + Number(row.adults),
    0,
  );
  const totalKids = rows.reduce((total, row) => total + Number(row.kids), 0);

  const totalStatistics = `TOTAL:<br/><strong>Guests:</strong> ${totalGuests}<br/><strong>Adults:</strong> ${totalAdults}<br/><strong>Kids:</strong> ${totalKids}<br/><br/>`;
  const submissionHtml = `You have received a new confirmation of the wedding addending.<br/><br/><strong>Name:</strong> ${data.name}<br/><strong>Adults:</strong> ${data.adults}<br/><strong>Kids:</strong> ${data.kids}<br/><br/>`;
  const allSubmissionsHtml = `All submissions:<br/>
    <table border="1" cellpadding="10">
      <tr>
        <td><strong>#</strong></td>
        <td><strong>Name</strong></td>
        <td><strong>Adults</strong></td>
        <td><strong>Kids</strong></td>
        <td><strong>Date</strong></td>
      </tr>
      ${rows.map((row, index) => `<tr><td>${++index}</td><td>${row.name}</td><td>${row.adults}</td><td>${row.kids}</td><td>${row.date}</td></tr>`)}
    </table>
    <br/><br/>`;

  const msg = {
    to: process.env.SENDGRID_SEND_TO ?? 'tim.pashkevych@gmail.com',
    from: process.env.SENDGRID_SEND_FROM ?? 'lumenstudiollc@gmail.com',
    subject: 'New confirmation of the wedding attending',
    text: `You have received a new confirmation of the wedding addending.\n\nName: ${data.name}\nAdults: ${data.adults}\nKids: ${data.kids}\n\n Sent by Sokolow.Wedding`,
    html: `${submissionHtml} ${allSubmissionsHtml} ${totalStatistics} Sent by <a href="https://sokolov.wedding">Sokolow.Wedding</a>`,
  };
  await sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
}
