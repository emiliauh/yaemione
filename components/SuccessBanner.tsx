"use client";

export default function SuccessBanner({
  kind = "success",
  message,
  onClose,
}: {
  kind?: "success" | "error";
  message: string;
  onClose?: () => void;
}) {
  const isSuccess = kind === "success";
  return (
    <div className="fixed bottom-4 inset-x-0 z-50">
      <div className="container-app">
        <div className={`rounded-2xl border backdrop-blur px-4 py-3 shadow
          ${isSuccess ? 'bg-emerald-500/15 border-emerald-400/30' : 'bg-rose-500/15 border-rose-400/30'}
          text-white/90 dark:text-white flex items-center justify-between gap-3`}>
          <div className="text-sm">
            {message}
          </div>
          <button
            onClick={onClose}
            className="rounded-xl border border-white/10 px-3 py-1.5 hover:bg-white/10 text-sm">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
