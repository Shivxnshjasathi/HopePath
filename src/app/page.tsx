import AppShell from "@/components/layout/app-shell";
import { ProgressCard } from "@/components/dashboard/progress-card";
import { UrgeRedirector } from "@/components/dashboard/urge-redirector";
import { GoalsTracker } from "@/components/dashboard/goals-tracker";
import { DailyJournal } from "@/components/dashboard/daily-journal";
import { ProgressChart } from "@/components/dashboard/progress-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookText, HeartPulse, Mic, Sparkles, Video } from "lucide-react";

export default function Home() {
  return (
    <AppShell title="Dashboard">
      <div className="flex-1 space-y-4 p-4 sm:p-8 pt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ProgressCard title="Sobriety Streak" value="128" unit="days" description="You're doing great!" />
          <ProgressCard title="Money Saved" value="$640" unit="saved" description="from not spending on urges" />
          <ProgressCard title="Meetings Attended" value="22" unit="meetings" description="this month" />
          <ProgressCard title="Goals Achieved" value="5" unit="goals" description="Keep up the great work" />
        </div>
        <div className="grid gap-4 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Recovery Progress</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ProgressChart />
            </CardContent>
          </Card>
          <div className="lg:col-span-3 space-y-4">
            <UrgeRedirector />
            <GoalsTracker />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
            <DailyJournal />
            <Card>
                <CardHeader>
                    <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                    <QuickLinkCard title="Crisis Support" icon={HeartPulse} />
                    <QuickLinkCard title="Join a Meeting" icon={Video} />
                    <QuickLinkCard title="Support Groups" icon={Mic} />
                    <QuickLinkCard title="Motivation" icon={Sparkles} />
                    <QuickLinkCard title="Community Blog" icon={BookText} colSpan="col-span-2" />
                </CardContent>
            </Card>
        </div>
      </div>
    </AppShell>
  );
}

function QuickLinkCard({ title, icon: Icon, colSpan }: { title: string; icon: React.ElementType, colSpan?: string }) {
    return (
        <div className={`flex items-center space-x-4 rounded-lg border bg-card text-card-foreground p-4 shadow-sm hover:bg-muted/50 transition-colors cursor-pointer ${colSpan}`}>
            <Icon className="h-6 w-6 text-primary" />
            <p className="text-sm font-medium">{title}</p>
        </div>
    )
}
