"use client";

import { useTrips } from "@/lib/hooks/use-trips";
import { Button } from "./ui/button";
import { Plane, Plus } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function TripSelect() {
  const { trips, selectedTripId, setSelectedTripId } = useTrips();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="bg-white text-black hover:bg-white/80">
          <Plane className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {trips?.map((trip) => (
          <DropdownMenuItem 
            disabled={selectedTripId === trip.id}
            className={cn("flex items-center", selectedTripId === trip.id && "text-muted-foreground")}
            key={trip.id}
            onClick={() => setSelectedTripId(trip.id)}
          >
            <Plane className="w-4 h-4 mr-2" />
            {trip.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 