"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { CrisisChatbotInput } from "@/ai/flows/crisis-chatbot";
import { useToast } from "@/hooks/use-toast";
import { runCrisisChatbot } from "./crisis-chat-action";
import { CornerDownLeft, Frown, Loader2 } from "lucide-react";
import { Logo } from "./icons";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const initialMessages: Message[] = [
  {
    role: "assistant",
    content: "Hello, I'm here to support you. How are you feeling right now? Please know that I'm a bot, but I can connect you with a human mentor if you need one.",
  },
];

export function CrisisChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const chatHistory = messages.map(m => ({ role: m.role, content: m.content }));
      const payload: CrisisChatbotInput = { message: input, chatHistory };
      const result = await runCrisisChatbot(payload);
      
      if (result.response) {
        const assistantMessage: Message = { role: "assistant", content: result.response };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        throw new Error("Received an empty response from the assistant.");
      }
    } catch (error) {
      console.error("Chatbot error:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with the chatbot. Please try again later.",
      });
      const errorMessage: Message = { role: 'assistant', content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment." };
      setMessages(prev => [...prev.slice(0, -1), userMessage, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
        <ScrollArea className="flex-1 p-4">
            <div className="space-y-6">
            {messages.map((message, index) => (
                <div
                key={index}
                className={cn(
                    "flex items-start gap-3",
                    message.role === "user" ? "justify-end" : ""
                )}
                >
                {message.role === "assistant" && (
                    <Avatar className="w-8 h-8 border">
                        <AvatarFallback><Logo className="w-5 h-5"/></AvatarFallback>
                    </Avatar>
                )}
                <div
                    className={cn(
                    "max-w-md rounded-lg p-3 text-sm",
                    message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card"
                    )}
                >
                    <p>{message.content}</p>
                </div>
                {message.role === "user" && (
                    <Avatar className="w-8 h-8 border">
                        <AvatarImage src="https://placehold.co/40x40.png" alt="User" data-ai-hint="person" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                )}
                </div>
            ))}
            {isLoading && (
                 <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8 border">
                        <AvatarFallback><Logo className="w-5 h-5"/></AvatarFallback>
                    </Avatar>
                    <div className="max-w-md rounded-lg p-3 text-sm bg-card">
                        <Loader2 className="w-5 h-5 animate-spin" />
                    </div>
                </div>
            )}
            </div>
        </ScrollArea>
        <div className="p-4 border-t bg-background">
            <form onSubmit={handleSubmit} className="relative">
            <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Send a message..."
                className="pr-12 h-12"
                disabled={isLoading}
            />
            <Button
                type="submit"
                size="icon"
                className="absolute top-1/2 right-2 -translate-y-1/2 w-9 h-9"
                disabled={isLoading || !input.trim()}
            >
                <CornerDownLeft className="w-5 h-5" />
            </Button>
            </form>
            <p className="text-xs text-center text-muted-foreground mt-2">
                This is an AI Chatbot. In case of a medical emergency, please call your local emergency number.
            </p>
        </div>
    </div>
  );
}
