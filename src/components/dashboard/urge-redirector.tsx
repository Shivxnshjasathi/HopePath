"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function UrgeRedirector() {
    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle>Turn Urges into Triumphs</CardTitle>
                <CardDescription>Redirect spending urges into savings.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button className="w-full h-14 text-lg font-bold bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                    <ShieldCheck className="mr-2 h-6 w-6" />
                    Resist & Invest $5
                </Button>
                <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                        <span>Invested</span>
                        <span>$255.00</span>
                    </div>
                    <Progress value={65} className="h-2" />
                    <p className="text-xs text-muted-foreground text-center">You've turned 65% of urges into investments this month!</p>
                </div>
            </CardContent>
        </Card>
    )
}
