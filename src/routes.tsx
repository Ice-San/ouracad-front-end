import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router';

import { SignInPage } from 'pages/signin';
import { DashboardPage } from 'pages/dashboard';
import { UsersPage } from 'pages/users';
import { ProfilePage } from 'pages/profile';
import { CoursesPage } from 'pages/courses';
import { StatsPage } from 'pages/stats';
import { FormPage } from 'pages/formPage';

export const Routes = () => {
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route path='/' element={<SignInPage />} />
                <Route path='/dashboard' element={<DashboardPage />} />
                <Route path='/form' element={<FormPage />} />
                <Route path='/users' element={<UsersPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/courses' element={<CoursesPage />} />
                <Route path='/stats' element={<StatsPage />} />
            </ReactRoutes>
        </BrowserRouter>
    );
}