import { Controller, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CheckUserExistenceMiddleware } from './check-user-existence.middleware'; // Import the middleware

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Request() req, @Res() res) {
    try {
      const user = await this.authService.login(req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  }

  // Apply the middleware to the login route
  @UseGuards(CheckUserExistenceMiddleware)
  @Post('login')
  async loginWithMiddleware(@Request() req, @Res() res) {
    // This route will have the middleware applied
    try {
      const user = await this.authService.login(req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  }
}
