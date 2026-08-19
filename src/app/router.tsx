import { Navigate, Route, Routes } from 'react-router-dom';
import { RootLayout } from '../presentation/layouts/RootLayout';
import { HomePage } from '../presentation/pages/HomePage';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
