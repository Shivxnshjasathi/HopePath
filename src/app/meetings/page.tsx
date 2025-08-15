import Image from "next/image";
import AppShell from "@/components/layout/app-shell";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Video, Mic, Users, Clock } from "lucide-react";
import AuthGate from "@/components/auth-gate";

const meetings = [
  {
    title: "Morning Check-in & Strategy",
    time: "8:00 AM - 9:00 AM",
    facilitator: "Jane D.",
    topic: "Open Sharing & Daily Goals",
    attendees: 12,
  },
  {
    title: "Handling Triggers Workshop",
    time: "12:30 PM - 1:00 PM",
    facilitator: "Mark R.",
    topic: "Identifying and Managing Urges",
    attendees: 8,
  },
  {
    title: "Evening Wind-Down",
    time: "7:00 PM - 8:30 PM",
    facilitator: "Sarah P.",
    topic: "Celebrating Wins & Reflection",
    attendees: 25,
  },
];

export default function MeetingsPage() {
  return (
    <AuthGate>
      <AppShell title="Virtual Meetings">
        <div className="flex-1 space-y-4 p-4 sm:p-8 pt-6">
          <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">Today's Meetings</h2>
              <p className="text-muted-foreground">
                  Join a meeting to share, listen, and connect with the community.
              </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {meetings.map((meeting, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{meeting.title}</CardTitle>
                  <CardDescription>{meeting.topic}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4" />
                    <span>{meeting.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{meeting.attendees} participants</span>
                  </div>
                  <div className="mt-4 flex items-center">
                      <p className="text-sm font-medium mr-2">Facilitator:</p>
                      <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                              <AvatarImage src={`https://placehold.co/40x40.png?text=${meeting.facilitator.charAt(0)}`} data-ai-hint="person" />
                              <AvatarFallback>{meeting.facilitator.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{meeting.facilitator}</span>
                      </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="w-full">
                    <Video className="mr-2 h-4 w-4" /> Join with Video
                  </Button>
                  <Button variant="secondary" className="w-full">
                    <Mic className="mr-2 h-4 w-4" /> Join with Audio
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8">
              <h3 className="text-xl font-bold tracking-tight mb-4">Active Meeting</h3>
              <Card>
                  <CardContent className="p-4">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <div className="grid grid-cols-2 gap-2 w-full h-full p-2">
                              <div className="relative rounded-md overflow-hidden"><Image src="https://placehold.co/600x400.png" alt="Participant 1" layout="fill" objectFit="cover" data-ai-hint="person talking" /></div>
                              <div className="relative rounded-md overflow-hidden"><Image src="https://placehold.co/600x400.png" alt="Participant 2" layout="fill" objectFit="cover" data-ai-hint="person smiling" /></div>
                              <div className="relative rounded-md overflow-hidden"><Image src="https://placehold.co/600x400.png" alt="Participant 3" layout="fill" objectFit="cover" data-ai-hint="person listening" /></div>
                              <div className="relative rounded-md overflow-hidden bg-primary flex items-center justify-center"><p className="text-primary-foreground">You</p></div>
                          </div>
                      </div>
                  </CardContent>
              </Card>
          </div>
        </div>
      </AppShell>
    </AuthGate>
  );
}
