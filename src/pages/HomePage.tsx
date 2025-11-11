import { useState } from 'react';
import { SearchForm, UserProfile } from '@/components';

const HomePage = () => {
  const [userName, setUserName] = useState('branimir1111');
  return (
    <main className="grid place-items-center p-4">
      <div className="w-full max-w-6xl">
        <SearchForm userName={userName} setUserName={setUserName} />
        <UserProfile userName={userName} />
      </div>
    </main>
  );
};
export default HomePage;
