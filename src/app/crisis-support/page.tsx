import AppShell from "@/components/layout/app-shell";
import { CrisisChat } from "@/components/crisis-chat";
import AuthGate from "@/components/auth-gate";

export default function CrisisSupportPage() {
  return (
    <AuthGate>
      <AppShell title="24/7 Crisis Support">
        <div className="h-[calc(100vh-var(--header-height))] flex flex-col" style={{'--header-height': '65px'} as React.CSSProperties}>
          <CrisisChat />
        </div>
      </AppShell>
    </AuthGate>
  );
}
