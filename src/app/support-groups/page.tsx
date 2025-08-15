import AppShell from "@/components/layout/app-shell";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Headphones, Mic, Users, Zap } from "lucide-react";
import AuthGate from "@/components/auth-gate";

const groups = [
  { name: "Gambling Recovery", listeners: 15, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h4v4H7z"/><path d="M13 13h4v4h-4z"/></svg> },
  { name: "Financial Freedom", listeners: 42, icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { name: "Family & Relationships", listeners: 28, icon: <Users /> },
  { name: "General Discussion", listeners: 67, icon: <Headphones /> },
];

const activeListeners = [
    { name: "Alex", isMentor: true },
    { name: "Brenda" },
    { name: "Charles", isSpeaking: true },
    { name: "Diana" },
    { name: "Ethan" },
];

export default function SupportGroupsPage() {
  return (
    <AuthGate>
      <AppShell title="Audio Support Groups">
        <div className="flex-1 space-y-4 p-4 sm:p-8 pt-6">
          <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">24/7 Drop-in Rooms</h2>
              <p className="text-muted-foreground">
                  Connect instantly with peers for support. You can join anonymously.
              </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {groups.map((group) => (
              <Card key={group.name} className="flex flex-col items-center justify-center text-center p-6">
                  <div className="text-primary mb-4">{group.icon}</div>
                  <CardTitle className="mb-2">{group.name}</CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{group.listeners} listening</span>
                  </div>
                  <Button className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      <Zap className="mr-2 h-4 w-4" /> Join Anonymously
                  </Button>
              </Card>
            ))}
          </div>
          <div className="mt-8">
              <h3 className="text-xl font-bold tracking-tight mb-4">Now in: Gambling Recovery</h3>
              <Card>
                  <CardContent className="p-6">
                      <div className="space-y-4">
                          <div className="flex items-center justify-between">
                              <h4 className="font-semibold">Listeners ({activeListeners.length})</h4>
                              <Button variant="destructive">Leave Room</Button>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                              {activeListeners.map((listener) => (
                                  <div key={listener.name} className="flex flex-col items-center space-y-2">
                                      <div className="relative">
                                          <Avatar className={`h-20 w-20 border-2 ${listener.isSpeaking ? 'border-accent' : 'border-transparent'}`}>
                                              <AvatarImage src={`https://placehold.co/80x80.png?text=${listener.name.charAt(0)}`} data-ai-hint="person" />
                                              <AvatarFallback>{listener.name.charAt(0)}</AvatarFallback>
                                          </Avatar>
                                          {listener.isSpeaking && <Mic className="absolute bottom-0 right-0 h-5 w-5 bg-accent text-accent-foreground rounded-full p-1"/>}
                                      </div>
                                      <div className="text-center">
                                          <p className="text-sm font-medium">{listener.name}</p>
                                          {listener.isMentor && <p className="text-xs text-primary">Mentor</p>}
                                      </div>
                                  </div>
                              ))}
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
