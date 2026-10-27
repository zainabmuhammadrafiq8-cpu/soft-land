export default function Preloader({ visible }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="h-[60px] w-[60px] animate-spin-slow rounded-full border-[6px] border-transparent border-t-accent border-b-accent" />
    </div>
  );
}
