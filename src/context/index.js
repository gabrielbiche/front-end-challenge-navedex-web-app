import { UserProvider } from './userContext';

const AppProviders = ({ children }) => <UserProvider>{children}</UserProvider>;

export default AppProviders;
