import fetch from "node-fetch";
const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";

const sendEmail = async ({ email, feedback }) => {
  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email,
            },
          ],
          subject: "New Feedback",
        },
      ],
      from: {
        email: "phoenix.bteam@gmail.com",
        name: "Widget.easy",
      },
      content: [
        {
          type: "text/html",
          value: `You got a new Feedback from your customer. <br /> Feedback: <b>${feedback}.</b> <br /> Regards, <br /> -Team Widget.Easy`,
        },
      ],
    }),
  });
};

export { sendEmail };
