import { sendEmail } from "../../utils/sendEmail";
import { getUserInfo } from "../../utils/auth/firebaseAdmin";

export default async (req, res) => {
  try {
    const { id, feedback } = req.body;
    await getUserInfo(id);
    await sendEmail({ id, feedback });
    return res.status(200).end();
  } catch (error) {
    return res.status(422).send(error);
  }
};
