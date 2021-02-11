import { Router } from "express";
import { createUserController } from "./useCases/createUser";

const router = Router();

router.post("/", createUserController.handle);

router.get("/", (req, res) => {
  return res.send("ok");
});

export { router };
