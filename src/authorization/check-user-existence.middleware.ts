// check-user-existence.middleware.ts

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class CheckUserExistenceMiddleware implements NestMiddleware {
  constructor(private authorizationService: AuthorizationService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { username } = req.body;
    const user = await this.authorizationService.findByUsername(username);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // User exists, continue with the next middleware or route handler
    next();
  }
}
