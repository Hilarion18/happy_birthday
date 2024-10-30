import { Router } from 'express';
import Paths from '@src/common/Paths';
import UserRoutes from './UserRoutes';
import TimezoneRoutes from './TimezoneRoutes';
import CountryRoutes from './CountryRoutes';


// **** Variables **** //
const apiRouter = Router();

// **** UserRouter **** //
const userRouter = Router();
// Add UserRouter
userRouter.post(Paths.User.Create, UserRoutes.addUser);
userRouter.delete(Paths.User.Delete, UserRoutes.deleteUser);
userRouter.put(Paths.User.Update, UserRoutes.editUser);

// **** Timezone **** //
const timezonRouter = Router();
// Add TimezoneRouter
timezonRouter.get(Paths.User.Create, TimezoneRoutes.getListTimezone);

// **** Timezone **** //
const countryRouter = Router();
// Add TimezoneRouter
countryRouter.get(Paths.User.Create, CountryRoutes.getListCountry);

// User Routes
apiRouter.use(Paths.User.Base, userRouter);
apiRouter.use(Paths.Timezone.Base, timezonRouter);
apiRouter.use(Paths.Country.Base, countryRouter);

// **** Export default **** //

export default apiRouter;
