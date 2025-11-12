import { Card, CardTitle, CardDescription } from '../ui/card';
import { ScrollText, UsersRound, UserStar, SquareTerminal } from 'lucide-react';

type StatsCardProps = {
  title: string;
  count: number;
};

const StatsCard = ({ title, count }: StatsCardProps) => {
  return (
    <Card className="p-0 shadow-none">
      <div className="flex flex-row justify-between items-center px-4 py-6">
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full grid place-items-center ${
              title === 'Total Repositories'
                ? 'bg-purple-200'
                : title === 'Followers'
                  ? 'bg-teal-200'
                  : title === 'Following'
                    ? 'bg-blue-200'
                    : 'bg-orange-200'
            }`}
          >
            {title === 'Total Repositories' ? (
              <ScrollText size={20} className="stroke-purple-600" />
            ) : title === 'Followers' ? (
              <UsersRound size={20} className="stroke-teal-600" />
            ) : title === 'Following' ? (
              <UserStar size={20} className="stroke-blue-600" />
            ) : (
              <SquareTerminal size={20} className="stroke-orange-600" />
            )}
          </div>
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{count}</CardDescription>
      </div>
    </Card>
  );
};
export default StatsCard;
