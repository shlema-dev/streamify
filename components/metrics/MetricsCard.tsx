import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MetricsCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  value: string;
  change?: string;
}

export default function MetricsCard({
  title,
  icon,
  description,
  value,
  change,
}: MetricsCardProps) {
  return (
    <Card className="w-[350px] border-none">
      <CardHeader>
        <CardTitle>
          <div className="w-full flex gap-2 items-center">
            <div className="text-muted-foreground">{icon}</div>
            {title}
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <p className="text-2xl text-primary font-bold">{value}</p>
          <p className="text-sm text-muted-foreground">{change}</p>
        </div>
      </CardContent>
    </Card>
  );
}
