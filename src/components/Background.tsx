export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base grid */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Animated blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] animate-blob-1">
        <div
          className="w-full h-full rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, #63b3ed 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] animate-blob-2">
        <div
          className="w-full h-full rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] animate-blob-3">
        <div
          className="w-full h-full rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #63b3ed 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(11,16,32,0) 0%, rgba(5,8,22,0.6) 100%)',
        }}
      />
    </div>
  )
}
