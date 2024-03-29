import { useAppSelector } from '@/redux/hook';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProps {
  children: ReactNode;
}
const PrivetRoute = ({ children }: IProps) => {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const pathname = useLocation().pathname;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user?.email && !isLoading) {
    return <Navigate to="/login" state={{ patch: pathname }} />;
  }

  return children;
};

export default PrivetRoute;
