import { Card, CardTitle, CardDescription } from '../ui/card';

type StatsCardProps = {
  title: string;
  count: number;
};

const StatsCard = ({ title, count }: StatsCardProps) => {
  return (
    <Card className="p-0">
      <div className="flex flex-row justify-between items-center p-6">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{count}</CardDescription>
      </div>
    </Card>
  );
};
export default StatsCard;
