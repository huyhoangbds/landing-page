export function LoadingState({ label = "Đang tải nội dung…", compact = false }: { label?: string; compact?: boolean }) {
  return <div className={`loading-state${compact ? " loading-compact" : ""}`} role="status" aria-live="polite">
    <span className="loading-spinner" aria-hidden="true" />
    <span>{label}</span>
    {!compact && <div className="skeleton-lines" aria-hidden="true"><span /><span /><span /></div>}
  </div>;
}
