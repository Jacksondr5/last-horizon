"use client";

import { useAnalytics } from "@/contexts/AnalyticsContext";
import { Button, type ButtonProps } from "./ui/button";

interface EventButtonProps extends ButtonProps {
  eventName: string;
}

export default function EventButton({
  eventName,
  children,
  ...props
}: EventButtonProps) {
  const { captureEvent } = useAnalytics();
  return (
    <Button onClick={() => captureEvent(eventName)} {...props}>
      {children}
    </Button>
  );
}
