import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type UserCardProps = {
  avatarUrl: string;
  name: string;
  bio: string;
  url: string;
};

const UserCard = ({ avatarUrl, name, bio, url }: UserCardProps) => {
  return (
    <Card className="w-full py-0 sm:flex-row sm:gap-0">
      <CardContent className="max-sm:grow px-0">
        <img
          src={avatarUrl}
          alt={name}
          className="size-full sm:size-52 rounded-t-xl sm:rounded-t-none sm:rounded-l-xl"
        />
      </CardContent>
      <div className="flex flex-col justify-between sm:min-w-54 sm:grow">
        <CardHeader className="pt-6">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{bio}</CardDescription>
        </CardHeader>
        <CardFooter className="gap-3 py-6">
          <Button
            asChild
            className="bg-transparent bg-linear-to-br from-purple-500 to-pink-500 text-white focus-visible:ring-pink-600/20"
          >
            <a href={url} target="_blank" rel="noreferrer">
              Explore More
            </a>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};
export default UserCard;
