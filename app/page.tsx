import RootNavigation from "@/app/src/components/navigation/rootNavigation";
import { Suspense } from "react";
export default function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-white">
        <RootNavigation />
      </div>
    </Suspense>
  );
}
