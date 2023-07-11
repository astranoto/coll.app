import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import SignIn from './components/SignIn';
import HomeUser from './components/HomeUser';
import HomeAdmin from './components/HomeAdmin';
import Projects from './components/Projects';
import Question from './components/Question';
import Profile from './components/Profile';
import Contributors from './components/Contributors';
import AddUser from './components/AddUser';
import Payments from './components/AddPayments';
import ShowPayment from './components/ShowPayments';

const router = createBrowserRouter([
	{
		path: '/',
		element: <SignIn />,
	},
	{
		path: 'home-admin',
		element: <HomeAdmin />,
	},
	{
		path: 'home-user',
		element: <HomeUser />,
	},
	{
		path: 'home-admin/contributors',
		element: <Contributors />,
	},
	{
		path: 'home-user/projects',
		element: <Projects />,
	},
	{
		path: 'home-admin/add-user',
		element: <AddUser />,
	},
	{
		path: 'home-user/question',
		element: <Question />,
	},
	{
		path: 'home-admin/profile',
		element: <Profile />,
	},
	{
		path: 'home-admin/contributors/profile',
		element: <Profile />,
	},
	{
		path: 'home-user/profile',
		element: <Profile />,
	},
	{
		path: 'payments',
		element: <Payments />,
	},
	{
		path: 'show-payments',
		element: <ShowPayment />,
	},
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
