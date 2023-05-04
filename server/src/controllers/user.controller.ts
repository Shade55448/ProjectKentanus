import { Request, Response } from 'express';
import authService from '../services/auth.service';

class UserController {
  async signUp(req: Request, res: Response): Promise<void> {
    try {
      const user = await authService.signUp(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const token = await authService.login(email, password);
      res.json({ token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
}

export default new UserController();