import Image from "next/image";
import AppShell from "@/components/layout/app-shell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlayCircle } from "lucide-react";
import AuthGate from "@/components/auth-gate";

const videos = [
  { title: "My Journey to a Bet-Free Life", author: "Alex R.", duration: "12:34", thumbnail: "https://placehold.co/600x400.png", hint: "motivational speech" },
  { title: "The Psychology of a Gambling Urge", author: "Dr. Anya Sharma", duration: "25:10", thumbnail: "https://placehold.co/600x400.png", hint: "science diagram" },
  { title: "Finding Fulfillment Beyond the Bet", author: "Community Stories", duration: "8:55", thumbnail: "https://placehold.co/600x400.png", hint: "person painting" },
  { title: "Rebuilding Finances After Gambling", author: "Mark Chen", duration: "15:02", thumbnail: "https://placehold.co/600x400.png", hint: "financial chart" },
];

const affirmations = [
    "I am in control of my finances and my future.",
    "Every day, I am building a life free from gambling.",
    "I choose long-term peace over short-term thrills.",
    "My past losses do not define my future success.",
    "I am resilient and can overcome any urge to gamble.",
    "I am worthy of a stable and prosperous life.",
];

export default function MotivationPage() {
  return (
    <AuthGate>
      <AppShell title="Motivational Content">
        <div className="flex-1 space-y-4 p-4 sm:p-8 pt-6">
          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="affirmations">Affirmations</TabsTrigger>
              <TabsTrigger value="tips">Coping Tips</TabsTrigger>
            </TabsList>
            
            <TabsContent value="videos" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {videos.map((video, index) => (
                  <Card key={index} className="overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="relative aspect-video">
                        <Image src={video.thumbnail} alt={video.title} layout="fill" objectFit="cover" data-ai-hint={video.hint} />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <PlayCircle className="h-12 w-12 text-white" />
                        </div>
                        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">{video.duration}</span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold">{video.title}</h3>
                        <p className="text-sm text-muted-foreground">{video.author}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="affirmations" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {affirmations.map((quote, index) => (
                  <Card key={index}>
                      <CardContent className="p-6 flex items-center justify-center text-center h-48">
                          <p className="text-lg font-semibold">&ldquo;{quote}&rdquo;</p>
                      </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tips" className="mt-6">
              <Card>
                  <CardContent className="p-6">
                      <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                              <AccordionTrigger>How to handle a sudden urge to gamble?</AccordionTrigger>
                              <AccordionContent className="space-y-2">
                                  <p>1. **Pause and Breathe:** Take a few deep breaths. Don't act on impulse.</p>
                                  <p>2. **Use the Urge Redirector:** Immediately use the tool on the dashboard to invest the money you would have bet.</p>
                                  <p>3. **Call a Mentor:** Reach out to your support system immediately.</p>
                                  <p>4. **'Play the Tape Forward':** Think about the consequences of placing the bet. How will you feel tomorrow?</p>
                              </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                              <AccordionTrigger>What to do when feeling isolated?</AccordionTrigger>
                              <AccordionContent>
                                  Join one of our 24/7 audio support groups. Even just listening can help you feel connected. You can also browse the community blog to read stories from others who have felt the same way.
                              </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                              <AccordionTrigger>Tips for discussing gambling with family.</AccordionTrigger>
                              <AccordionContent>
                                  Start with open and honest communication. Acknowledge past financial harm without making excuses. Be patient, as rebuilding trust takes time. Focus on your actions and commitment to recovery.
                              </AccordionContent>
                          </AccordionItem>
                      </Accordion>
                  </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </AppShell>
    </AuthGate>
  );
}
