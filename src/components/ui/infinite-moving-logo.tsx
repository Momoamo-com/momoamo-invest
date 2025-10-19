"use client";
import { cn } from "@/lib/lib";
import React, { ReactNode } from "react";

export const InfiniteMovingLogo = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  children,
  classNameWrapper,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  children: ReactNode;
  classNameWrapper?: string;
}) => {
  // Determine animation duration based on speed
  const getDuration = () => {
    switch (speed) {
      case "fast":
        return "20s";
      case "normal":
        return "40s";
      case "slow":
        return "80s";
      default:
        return "40s";
    }
  };

  const animationDirection = direction === "left" ? "normal" : "reverse";
  const duration = getDuration();

  return (
    <div
      className={cn("scroller relative z-20 w-full", className)}
      style={
        {
          "--animation-duration": duration,
          "--animation-direction": animationDirection,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "relative flex w-max min-w-full shrink-0 flex-nowrap py-4",
          classNameWrapper
        )}
        style={{
          gap: "0",
          willChange: "transform",
          animation: `scroll var(--animation-duration) linear infinite var(--animation-direction)`,
          animationPlayState: pauseOnHover ? "running" : "running",
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover) {
            e.currentTarget.style.animationPlayState = "paused";
          }
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) {
            e.currentTarget.style.animationPlayState = "running";
          }
        }}
      >
        <div className="child-wrap flex shrink-0 items-center">{children}</div>
        <div className="child-wrap flex shrink-0 items-center">{children}</div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};
