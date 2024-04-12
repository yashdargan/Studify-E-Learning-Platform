import {Request,Response,NextFunction} from 'express'

export const CatchAsyncError =
  (catcher: any) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(catcher(req, res, next)).catch(next);
  };
