import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center py-24 relative overflow-hidden">
      <div className="absolute inset-0 tech-radial-glow pointer-events-none" />
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-8 bg-[#0B0E14] border border-[#273448] p-8 sm:p-14 shadow-depth-3 relative">
          {/* Top diagnostic line */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] tech-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-ping" />
            <span>ERROR 404 // STACK OUT OF BOUNDS</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight">
              THIS LAYER DOESN&apos;T EXIST.
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-md mx-auto">
              The page you&apos;re looking for may have moved to another layer, or was compiled outside the current addressable coordinate space.
            </p>
          </div>

          {/* Visual Layer Depth Graphic */}
          <div className="py-4">
            <div className="p-4 bg-[#07080A] border border-[#1E2634] max-w-sm mx-auto text-left tech-mono text-xs space-y-2 text-[#64748B]">
              <div className="text-[#EF4444]">{'>'} TARGET_LAYER: NULL (Z: -1)</div>
              <div>{'>'} AVAILABLE_LAYERS: [0, 10, 20, 50, 100, 200, 500, 1000]</div>
              <div className="text-[#00E5FF]">{'>'} RESOLUTION: RETURN_TO_ROOT_STACK</div>
            </div>
          </div>

          <div>
            <Button variant="primary" href="/" icon={<ArrowLeft size={16} />} iconPosition="left">
              Return Home →
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
