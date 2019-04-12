import { NextFunction, Request, Response } from 'express';
import { UserModel } from './model';
import HttpException from '../../exceptions/HttpException';

export const createItem = (req: Request, res: Response) => {
  UserModel.create(req.body, (err: { code: number; message: any }) => {
    if (err) {
      if (err.code === 11000) {
        return res.status(400).send({ message: 'email already registered' });
      }
      return res.status(400).send({ message: err.message });
    }

    return res.sendStatus(200);
  });
};

export const getItem = (req: Request, res: Response) => {
  res.status(200).send(req.user);
};

export const patchItem = (req: Request, res: Response) => {
  UserModel
    .findOneAndUpdate(
      {
        _id: req.user._id,
      },
      { $set: req.body },
      { new: true },
    )
    .then((user: any) => {
      if (!user) res.status(404).send();

      res.send(user);
    })
    .catch((e: Error) => {
      res.status(400).send(e);
    });
};

export const login = (req: Request, res: Response) => {
  UserModel
    .findById(req.user._id)
    .then((user: any) => {
      if (!user) res.status(404).send();

      res.send(user);
    })
    .catch((e: Error) => {
      res.status(400).send(e);
    });
};

export const logout = (req: Request, res: Response) => {
  // @ts-ignore
  req.session.destroy();
  res.clearCookie('connect.sid');
  res.sendStatus(200);
};

export const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await UserModel
      .deleteOne({ _id: req.params.id });

    if (!item) return next(new HttpException(404, 'user not found'));

    // @ts-ignore
    req.session.destroy();
    res.clearCookie('connect.sid');
    return res.send(item._id);
  } catch (e) {
    return next(e);
  }
};
