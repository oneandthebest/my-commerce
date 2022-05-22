import { Route, Routes } from 'react-router-dom';

import Navigation from './routes/navigation/navigation';
import Home from './routes/home/home';
import Authentication from './routes/authentication/authentication';

const Shop = () => {
  return <h1>Hello I am your mom</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path="auth" element={<Authentication/>}/>
      </Route>
    </Routes>
  );
};

export default App;
