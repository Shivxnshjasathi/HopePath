import Image from "next/image";
import AppShell from "@/components/layout/app-shell";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, MessageSquare, PlusCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    title: "The Day I Chose Myself Over Alcohol",
    author: "Anonymous",
    date: "June 15, 2024",
    excerpt: "It wasn't a single moment, but a series of small decisions. Waking up without a hangover for the 30th time... that was a victory worth more than any drink.",
    tags: ["Milestone", "Alcohol"],
    likes: 128,
    comments: 23,
    avatar: "https://placehold.co/40x40.png?text=A"
  },
  {
    title: "How Redirecting My Urges Funded My Dream Vacation",
    author: "David L.",
    date: "June 12, 2024",
    excerpt: "Every time I wanted to gamble, I used the Urge Redirector. A year later, I was looking at a beach in Thailand, paid for by the money I saved. It's surreal.",
    tags: ["Financial Growth", "Gambling"],
    likes: 256,
    comments: 54,
    avatar: "https://placehold.co/40x40.png?text=D"
  },
  {
    title: "A Letter to Myself on Day 1",
    author: "Sarah K.",
    date: "June 10, 2024",
    excerpt: "If you're reading this, just starting out, know this: It's hard. It's messy. But you are so much stronger than you think. Keep going.",
    tags: ["Relapse Recovery", "Nicotine"],
    likes: 98,
    comments: 15,
    avatar: "https://placehold.co/40x40.png?text=S"
  },
];

const categories = ["Milestones", "Coping Techniques", "Financial Growth", "Relationships", "Relapse Recovery"];

export default function BlogPage() {
  return (
    <AppShell title="Community Blog">
      <div className="flex-1 p-4 sm:p-8 pt-6">
        <div className="flex justify-between items-start mb-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Stories of Hope</h2>
                <p className="text-muted-foreground">
                    Read and share stories from the recovery journey.
                </p>
            </div>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Write a Post
            </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-6">
                {posts.map((post, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <Avatar>
                                    <AvatarImage src={post.avatar} data-ai-hint="person" />
                                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle>{post.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        By {post.author} on {post.date}
                                    </p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                            <div className="flex gap-2">
                                {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                             <div className="flex gap-4 text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <ThumbsUp className="h-4 w-4"/>
                                    <span className="text-sm">{post.likes}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MessageSquare className="h-4 w-4"/>
                                    <span className="text-sm">{post.comments}</span>
                                </div>
                             </div>
                             <Button variant="link">Read More</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <aside className="lg:col-span-1 space-y-6">
                 <Card>
                    <CardHeader><CardTitle>Categories</CardTitle></CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {categories.map(cat => <li key={cat}><Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">{cat}</Button></li>)}
                        </ul>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle>Popular Posts</CardTitle></CardHeader>
                    <CardContent>
                         <ul className="space-y-4">
                            {posts.slice(0, 2).map(post => (
                                <li key={post.title} className="flex items-start gap-3">
                                    <Avatar className="h-10 w-10 border">
                                         <AvatarImage src={post.avatar} data-ai-hint="person" />
                                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-semibold leading-tight">{post.title}</p>
                                        <p className="text-xs text-muted-foreground">by {post.author}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </aside>
        </div>
      </div>
    </AppShell>
  );
}
