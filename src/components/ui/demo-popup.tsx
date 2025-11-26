import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { LayoutDashboard, CalendarCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DemoPopupProps {
  children: React.ReactNode;
  onDashboardClick: () => void;
  onBookingClick: () => void;
}

export function DemoPopup({ children, onDashboardClick, onBookingClick }: DemoPopupProps) {
  const [open, setOpen] = React.useState(false);

  const handleDashboardClick = () => {
    onDashboardClick();
    setOpen(false);
  };

  const handleBookingClick = () => {
    onBookingClick();
    setOpen(false);
  };

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        {children}
      </PopoverPrimitive.Trigger>
      
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="center"
          sideOffset={12}
          className={cn(
            // Base styles - floating card with blur
            "z-50 w-[260px] rounded-xl bg-white/95 backdrop-blur-md",
            // Border and shadow - ultra premium
            "border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
            // Padding
            "p-4 md:p-5",
            // Animation - premium micro-interaction
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-100",
            "data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1",
            "data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1",
            // Smooth transition with premium easing
            "transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)]",
            // Ensure high contrast
            "outline-none focus:outline-none"
          )}
        >
          <div className="space-y-2">
            {/* Dashboard Demo Option */}
            <button
              onClick={handleDashboardClick}
              className={cn(
                // Base layout
                "w-full flex items-center space-x-3 px-4 py-3.5 rounded-lg",
                // Background and border
                "bg-white/50 border border-slate-200/80",
                // Hover state - clean and professional
                "hover:bg-gradient-to-r hover:from-docliq-blue/5 hover:to-docliq-purple/5",
                "hover:border-docliq-blue/30 hover:shadow-sm",
                // Transition
                "transition-all duration-200",
                // Focus state
                "focus:outline-none focus:ring-2 focus:ring-docliq-blue/20 focus:ring-offset-1"
              )}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-docliq-blue to-docliq-purple shadow-md">
                <LayoutDashboard className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm font-semibold text-docliq-text leading-tight">
                  Voir la démo Dashboard
                </div>
                <div className="text-xs text-docliq-text/60 mt-0.5">
                  Interface médecin
                </div>
              </div>
            </button>

            {/* Patient Booking Demo Option */}
            <button
              onClick={handleBookingClick}
              className={cn(
                // Base layout
                "w-full flex items-center space-x-3 px-4 py-3.5 rounded-lg",
                // Background and border
                "bg-white/50 border border-slate-200/80",
                // Hover state - clean and professional
                "hover:bg-gradient-to-r hover:from-docliq-turquoise/5 hover:to-docliq-success/5",
                "hover:border-docliq-turquoise/30 hover:shadow-sm",
                // Transition
                "transition-all duration-200",
                // Focus state
                "focus:outline-none focus:ring-2 focus:ring-docliq-turquoise/20 focus:ring-offset-1"
              )}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-docliq-turquoise to-docliq-success shadow-md">
                <CalendarCheck className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm font-semibold text-docliq-text leading-tight">
                  Voir l'expérience patient
                </div>
                <div className="text-xs text-docliq-text/60 mt-0.5">
                  Prise de rendez-vous
                </div>
              </div>
            </button>
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
