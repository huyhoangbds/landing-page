import { LoadingState } from "@/components/ui/loading-state";
export default function Loading() {
  return <main id="main" className="container section" aria-busy="true"><LoadingState label="Đang tải trang…" /></main>;
}
