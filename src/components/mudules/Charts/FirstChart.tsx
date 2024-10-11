

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../../ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { month: "January", user: 186, product: 80 },
  { month: "February", user: 305, product: 200 },
  { month: "March", user: 237, product: 120 },
  { month: "April", user: 73, product: 190 },
  { month: "May", user: 209, product: 130 },
  { month: "June", user: 214, product: 140 },
]

const chartConfig = {
  user: {
    label: "User",
    color: "#295f4e",
  },
  product: {
    label: "Product",
    color: "#83580b",
  },
} satisfies ChartConfig

export function FirstChart() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="user" fill="var(--color-user)" radius={4} />
            <Bar dataKey="product" fill="var(--color-product)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
