import { celebrate } from 'celebrate';
import {NextFunction, Request, Response} from 'express';

export const validate = (schema: any) => celebrate(schema, {
    stripUnknown: { objects: true }
});

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) return next();

    res.clearCookie('connected.sid');
    res.status(401).send({ message: 'Unauthorized' });
};
