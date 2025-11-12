import { useState } from 'react';
import { SearchForm, UserProfile } from '@/components';

const HomePage = () => {
  const [userName, setUserName] = useState('quincylarson');
  return (
    <main className="grid place-items-center p-4">
      <div className="w-full max-w-6xl">
        <div className="my-8">
          <h1 className="text-xl sm:text-2xl font-semibold sm:font-bold">
            Who's Behind the Commit?
          </h1>
          <p className="text-xs sm:text-base text-muted-foreground">
            Every commit tells a story. Uncover the public contributions and
            profile details of any GitHub user.
          </p>
        </div>
        <SearchForm userName={userName} setUserName={setUserName} />
        <UserProfile userName={userName} />
      </div>
    </main>
  );
};
export default HomePage;
