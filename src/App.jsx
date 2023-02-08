import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main style={{ height: 'calc(100vh - 3rem)' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
