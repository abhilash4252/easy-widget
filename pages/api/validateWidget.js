import { getUserInfo } from "../../utils/auth/firebaseAdmin";

export default async (req, res) => {
  try {
    const { id } = req.body;
    await getUserInfo(id);
    return res.status(200).end();
  } catch (error) {
    return res.status(422).send("Invalid Id", error);
  }
};
