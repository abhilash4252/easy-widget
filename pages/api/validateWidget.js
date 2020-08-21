import { getUserInfo } from "../../utils/auth/firebaseAdmin";
import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";
// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
    origin: false,
  })
);
export default async (req, res) => {
  try {
    // Run cors
    await cors(req, res);
    const { id } = req.body;
    await getUserInfo(id);
    return res.status(200).end();
  } catch (error) {
    return res.status(422).send("Invalid Id", error);
  }
};
