"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export function DailyJournal() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Daily Check-in</CardTitle>
                <CardDescription>How are you feeling today? Your entry is private.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-4">
                    <Textarea placeholder="Write about your day, your mood, and any challenges you faced..." className="min-h-[150px]"/>
                    <Button type="submit" className="w-full">Save Entry</Button>
                </form>
            </CardContent>
        </Card>
    )
}
