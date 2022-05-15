import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://ih1.redbubble.net/image.2551829548.5665/ssrco,baseball_cap,product,000000:44f0b734a5,front_three_quarter,square,1000x1000-bg,f8f8f8.jpg',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://ih1.redbubble.net/image.2551829548.5665/ssrco,baseball_cap,product,000000:44f0b734a5,front_three_quarter,square,1000x1000-bg,f8f8f8.jpg',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://ih1.redbubble.net/image.2551829548.5665/ssrco,baseball_cap,product,000000:44f0b734a5,front_three_quarter,square,1000x1000-bg,f8f8f8.jpg',
    },
    {
      id: 4,
      title: 'Womans',
      imageUrl: 'https://ih1.redbubble.net/image.2551829548.5665/ssrco,baseball_cap,product,000000:44f0b734a5,front_three_quarter,square,1000x1000-bg,f8f8f8.jpg',
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://ih1.redbubble.net/image.2551829548.5665/ssrco,baseball_cap,product,000000:44f0b734a5,front_three_quarter,square,1000x1000-bg,f8f8f8.jpg',
    },
  ];

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
