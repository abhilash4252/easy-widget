import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";
import { sendEmail } from "../../utils/sendEmail";
import { getUserInfo } from "../../utils/auth/firebaseAdmin";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async (req, res) => {
  try {
    // Run cors
    await cors(req, res);
    const { id, feedback } = req.body;
    await getUserInfo(id);
    await sendEmail({ email: id, feedback });
    return res.status(200).end();
  } catch (error) {
    return res.status(422).send(error);
  }
};
