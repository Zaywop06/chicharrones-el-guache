import { Navigate, Route, Routes } from 'react-router-dom';
import { RootLayout } from '../presentation/layouts/RootLayout';
import { HomePage } from '../presentation/pages/HomePage';

const sectionRoutes = ['historia', 'nosotros', 'productos', 'ubicacion', 'preguntas', 'contacto'];

export function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        {sectionRoutes.map((section) => (
          <Route key={section} path={section} element={<HomePage />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
