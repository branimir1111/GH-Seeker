import { useQuery } from '@apollo/client/react';
import { GET_USER } from '@/queries';
import { type UserData } from '@/types';
import {
  UserCard,
  StatsContainer,
  ForkedRepos,
  UsedLanguages,
  PopularRepos,
} from '@/components';

type UserProfileProps = {
  userName: string;
};

const UserProfile = ({ userName }: UserProfileProps) => {
  const { loading, error, data } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <h2 className="text-xl">{error.message}</h2>;
  if (!data) return <h2 className="text-xl">User Not Found.</h2>;

  const {
    avatarUrl,
    name,
    bio,
    url,
    repositories,
    followers,
    following,
    gists,
  } = data.user;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
        <UserCard avatarUrl={avatarUrl} name={name} bio={bio} url={url} />
      </div>
      <StatsContainer
        totalRepos={repositories.totalCount}
        followers={followers.totalCount}
        following={following.totalCount}
        gists={gists.totalCount}
      />
      {repositories.totalCount > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <PopularRepos repositories={repositories.nodes} />
          </div>
          <UsedLanguages repositories={repositories.nodes} />
          <ForkedRepos repositories={repositories.nodes} />
        </div>
      )}
    </div>
  );
};
export default UserProfile;
