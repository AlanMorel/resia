import { NextFunction, Request, Response } from "express";
import { accept, reject } from "../helpers/PolicyHelper";

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.isAuthenticated()) {
        reject(res, "You must be logged in to perform this action.", 401);
        return;
    }
    accept(next);
};
