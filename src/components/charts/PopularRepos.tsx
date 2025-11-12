import { type Repository } from '@/types';
import { calculateMostStarredRepos } from '@/utils';

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
  const popularRepos = calculateMostStarredRepos(repositories);

  const chartConfig = {
    repo: {
      label: 'Repository',
      color: '#31b57d',
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular repos</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-52 w-full" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={popularRepos}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="repo"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 10)}
            />
            <YAxis dataKey="stars" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Area
              dataKey="stars"
              type="natural"
              fill="var(--color-repo)"
              fillOpacity={0.4}
              stroke="var(--color-repo)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Showing the most popular repos
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
export default PopularRepos;
