import { getAuth } from "@clerk/express"
import { NextFunction, Request, Response } from "express"
import type {CustomJwtSessionClaims} from "@repo/types";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export const shouldBeUser = async (req: Request, res: Response,next: NextFunction) => {
  const auth = getAuth(req);

  const userId = auth.userId;

  if(!userId) {
    return res.status(401).json({
      message: `You are not logged in...`
    })
  }

  req.userId = auth.userId;

  next();
}

export const shouldBeAdmin = async (req: Request, res: Response,next: NextFunction) => {
  const auth = getAuth(req);

  const userId = auth.userId;

  if(!userId) {
    return res.status(401).json({
      message: `You are not logged in...`
    })
  }

  const claims = auth.sessionClaims as CustomJwtSessionClaims;

  if(claims.metadata?.role !== "admin") {
    return res.status(403).json({message: "Unauthorized"});
  }

  req.userId = auth.userId;

  next();
}