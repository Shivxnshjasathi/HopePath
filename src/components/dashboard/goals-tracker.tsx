"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const goals = [
    { id: "goal1", label: "Attend a virtual meeting this week" },
    { id: "goal2", label: "Journal for 15 minutes today", checked: true },
    { id: "goal3", label: "Read a chapter from a recovery book" },
    { id: "goal4", label: "Reach out to a mentor", checked: true },
    { id: "goal5", label: "Go for a 30-minute walk" },
];

export function GoalsTracker() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>My Goals</CardTitle>
                <CardDescription>Stay on track by completing your goals.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {goals.map((goal) => (
                        <div key={goal.id} className="flex items-center space-x-3">
                            <Checkbox id={goal.id} defaultChecked={goal.checked} />
                            <Label htmlFor={goal.id} className={`flex-1 text-sm ${goal.checked ? 'line-through text-muted-foreground' : ''}`}>
                                {goal.label}
                            </Label>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
