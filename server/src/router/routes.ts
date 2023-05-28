import express, { Router } from 'express';
import { Request, Response } from 'express';
import userController from '../controllers/user.controller';

const router: Router = express.Router();

// Route for signUp
router.post('/signup', (req: Request, res: Response) => {
  userController.signUp(req, res).then((response => {
    console.log("Sign in called with status:" + response)
  }));
});

// Route for signUp
router.post('/login', (req: Request, res: Response) => {
  userController.login(req, res).then((response => {
    console.log("Login called with status:" + response)
  })).catch(error => {
    res.status(500).json({ error });
  });
});

export default router;
