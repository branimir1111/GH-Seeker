import { type Repository } from '@/types';
import { calculateMostForkedRepos } from '@/utils';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const ForkedRepos = ({ repositories }: { repositories: Repository[] }) => {
  const mostForkedRepos = calculateMostForkedRepos(repositories);

  const chartConfig = {
    repo: {
      label: 'Repository',
      color: 'var(--chart-1)',
    },
  } satisfies ChartConfig;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Forked Repos</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={mostForkedRepos}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="repo"
              tickLine={true}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 10)}
            />
            <YAxis dataKey="count" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" fill="var(--color-repo)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing the most forked repos
        </div>
      </CardFooter>
    </Card>
  );
};
export default ForkedRepos;
