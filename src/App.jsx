import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  About,
  Contacts,
  Error,
  Faqs,
  HomeLayout,
  Landing,
  Login,
  PasswordReset,
  Privacy,
  Projects,
  Register,
  Request,
  SingleBlog,
  SingleService,
  Terms,
  Service
} from './pages';
import { ErrorElement } from './components';
import { store } from './store';

import { loader as SingleBlogLoader } from './pages/SingleBlog';
import { loader as UpdateUsersLoader } from './DashboardPages/UpdateUsers';
import ChangePassword, {
  loader as ChangePasswordLoader,
} from './DashboardPages/ChangePassword';
import { loader as WithdrawLoader } from './DashboardPages/Withdraw';
import { loader as CardsLoader } from './DashboardPages/Cards';
import { loader as DeleteLoader } from './DashboardPages/Delete';
import { loader as AddUserLoader } from './DashboardPages/AddUser';
import Passport, { loader as PassportLoader } from './DashboardPages/Passport';
import { loader as UsersLoader } from './DashboardPages/Users';
import { loader as UpdateDepositLoader } from './DashboardPages/UpdateDeposit';
import { loader as UpdateLoader } from './DashboardPages/Update';
import { loader as SetTransferDetailsLoader } from './DashboardPages/SetTransferDetails';
import { loader as TransactionLoader } from './DashboardPages/Transaction';
import { loader as OutgoingLoader } from './DashboardPages/Outgoing';
import { loader as SingleServiceLoader } from './pages/SingleService';
import { loader as LandingLoader } from './DashboardPages/Landing';
import { loader as SendMoneyLoader } from './DashboardPages/SendMoney';
import { loader as AdminDepositLoader } from './DashboardPages/AdminDeposit';
import { loader as DepositLoader } from './DashboardPages/Deposit';
import ChangePhoto, {
  loader as ChangePhotoLoader,
} from './DashboardPages/ChangePhoto';
import { loader as AccountLoader } from './DashboardPages/Account';
import { loader as SettingsLoader } from './DashboardPages/Settings';
import { loader as NotificationLoader } from './DashboardPages/Notification';
import NotificationMessage, {
  loader as NotificationMessageLoader,
} from './DashboardPages/NotificationMessage';
import AccountInfo, {
  loader as AccountInfoLoader,
} from './DashboardPages/AccountInfo';
import Profile, {
  loader as ProfileLoader,
} from './DashboardPages/Profile';
import Security, { loader as SecurityLoader } from './DashboardPages/Security';

import { action as ChangePhotoAction } from './DashboardComponent/ChangePhoto';
import { action as SettingsAction } from './DashboardComponent/Settings';
import { action as SendMoneyAction } from './DashboardComponent/SendMoney';
import { action as ChangePasswordAction } from './DashboardComponent/ChangePassword';
import { action as WithdrawAction } from './DashboardComponent/Withdraw';
import { action as AddUserAction } from './DashboardComponent/AddUser';
import { action as UpdateUsersAction } from './DashboardComponent/UpdateUsers';
import { action as UpdateDepositAction } from './DashboardComponent/UpdateDeposit';
import { action as UpdateWithdrawalAction } from './DashboardComponent/UpdateWithdrawal';
import { action as PassportAction } from './DashboardComponent/Passport';
import { action as NotificationMessageAction } from './DashboardComponent/Notification';
import { action as SetTransferDetailsAction } from './DashboardComponent/SetTransferDetails';
import { action as LoginAction } from './pages/Login';
import { action as PasswordResetAction } from './pages/PasswordReset';
import { action as AccountAction } from './DashboardComponent/Account';
import { action as SecurityAction } from './DashboardComponent/Security';
import { action as RegisterAction } from './pages/Register';
import { action as AdminDepositAction } from './DashboardComponent/AdminDeposit';

import {
  ErrorElement as DashboardErrorElement,
  SetTransferDetails,
} from './DashboardComponent';

import {
  Landing as DashboardLanding,
  HomeLayout as DashboardHomeLayout,
  Error as DashboardError,
  SendMoney,
  AdminDeposit,
  Deposit,
  Account,
  Transaction,
  Incoming,
  Notification,
  Users,
  SiteMap,
  Update,
  UpdateDeposit,
  UpdateUsers,
  AddUser,
  Withdraw,
  Delete,
  Cards,
  Settings,
  Outgoing
} from './DashboardPages';

import { action as RequestAction } from './pages/Request';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {
  calculateDeposit,
  calculateWithdraw,
  loadAccount,
  loadDeposit,
  loadAllUsers,
  loadNotification,
  calculateNotification,
  calculateAllUsers,
  loadAllWithdrawal,
  loadAllDeposit,
  patchBalance,
} from './features/user/userSlice';
import { loadWithdraw } from './features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Projects />,
      },
      {
        path: 'service',
        element: <Service />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'request-form',
        element: <Request />,
        action: RequestAction,
      },
      {
        path: 'faqs',
        element: <Faqs />,
      },
      {
        path: 'singleBlog/:id',
        element: <SingleBlog />,
        loader: SingleBlogLoader,
      },
      {
        path: 'singleService/:id',
        element: <SingleService />,
        loader: SingleServiceLoader,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
    action: LoginAction(store),
  },
  {
    path: 'reset-password',
    element: <PasswordReset />,
    action: PasswordResetAction,
  },
  {
    path: 'Register',
    element: <Register />,
    action: RegisterAction(store),
  },
  {
    path: '/dashboard',
    element: <DashboardHomeLayout />,
    errorElement: <DashboardError />,
    children: [
      {
        index: true,
        element: <DashboardLanding />,
        errorElement: <DashboardErrorElement />,
        loader: LandingLoader(store),
      },
      {
        path: '/dashboard/sendMoney',
        element: <SendMoney />,
        loader: SendMoneyLoader(store),
        action: SendMoneyAction(store),
      },
      {
        path: '/dashboard/settings',
        element: <Settings />,
        loader: SettingsLoader(store),
        action: SettingsAction(store),
      },
      {
        path: '/dashboard/adminDeposit',
        element: <AdminDeposit />,
        loader: AdminDepositLoader(store),
        action: AdminDepositAction(store),
      },
      {
        path: '/dashboard/deposit',
        element: <Deposit />,
        loader: DepositLoader(store),
      },
      {
        path: '/dashboard/account',
        element: <Account />,
        loader: AccountLoader(store),
        action: AccountAction(store),
      },
      {
        path: '/dashboard/security',
        element: <Security />,
        loader: SecurityLoader(store),
        action: SecurityAction(store),
      },
      {
        path: '/dashboard/passport',
        element: <Passport />,
        loader: PassportLoader(store),
        action: PassportAction(store),
      },
      {
        path: '/dashboard/update',
        element: <Update />,
        loader: UpdateLoader(store),
        action: UpdateWithdrawalAction(store),
      },
      {
        path: '/dashboard/changePassword',
        element: <ChangePassword />,
        loader: ChangePasswordLoader(store),
        action: ChangePasswordAction(store),
      },
      {
        path: '/dashboard/set-transfer-details',
        element: <SetTransferDetails />,
        loader: SetTransferDetailsLoader(store),
        action: SetTransferDetailsAction(store),
      },
      {
        path: '/dashboard/updateDeposit',
        element: <UpdateDeposit />,
        loader: UpdateDepositLoader(store),
        action: UpdateDepositAction(store),
      },
      {
        path: '/dashboard/updateUsers',
        element: <UpdateUsers />,
        loader: UpdateUsersLoader(store),
        action: UpdateUsersAction(store),
      },
      {
        path: '/dashboard/addUser',
        element: <AddUser />,
        loader: AddUserLoader(store),
        action: AddUserAction(store),
      },
      {
        path: '/dashboard/withdraw',
        element: <Withdraw />,
        loader: WithdrawLoader(store),
        action: WithdrawAction(store),
      },
      {
        path: '/dashboard/delete',
        element: <Delete />,
        loader: DeleteLoader(store),
      },
      {
        path: '/dashboard/notification',
        element: <Notification />,
        loader: NotificationLoader(store),
      },
      {
        path: '/dashboard/cards',
        element: <Cards />,
        loader: CardsLoader(store),
      },
      {
        path: '/dashboard/siteMap',
        element: <SiteMap />,
      },
      {
        path: '/dashboard/notificationMessage',
        element: <NotificationMessage />,
        action: NotificationMessageAction(store),
      },
      {
        path: '/dashboard/profile',
        element: <Profile />,
        loader: ProfileLoader(store),
      },
      {
        path: '/dashboard/users',
        element: <Users />,
        loader: UsersLoader(store),
      },
      {
        path: '/dashboard/changePhoto',
        element: <ChangePhoto />,
        errorElement: <DashboardErrorElement />,
        action: ChangePhotoAction(store),
        loader: ChangePhotoLoader(store),
      },
      {
        path: '/dashboard/transaction',
        element: <Transaction />,
        loader: TransactionLoader(store),
      },
      {
        path: '/dashboard/outgoing',
        element: <Outgoing />,
        loader: OutgoingLoader(store),
      },
      {
        path: '/dashboard/incoming-transaction',
        element: <Incoming />,
      },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  useEffect(() => {
    dispatch(loadWithdraw());
    dispatch(loadNotification());
    dispatch(loadAccount());
    dispatch(loadAllUsers());
    dispatch(loadAllDeposit());
    dispatch(loadDeposit());
    dispatch(calculateWithdraw());
    dispatch(calculateDeposit());
    dispatch(calculateNotification());
    dispatch(calculateAllUsers());
    dispatch(loadAllWithdrawal());
    dispatch(patchBalance());
  }, [user]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
