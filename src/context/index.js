import { UserProvider } from './userContext';
import { ModalProvider } from './modalContext';

const AppProviders = ({ children }) => (
  <UserProvider>
    <ModalProvider>{children}</ModalProvider>
  </UserProvider>
);

export default AppProviders;
