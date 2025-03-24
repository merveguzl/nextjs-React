"use client";

import { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/tr";
import { useQuery } from "@tanstack/react-query";
import { getEvents } from "@/src/api/services/calendar";
import Text from "../../atoms/text/text.component";
import LoadingState from "../../molecules/loadingState/loadingState";

moment.locale("tr");

const localizer = momentLocalizer(moment);

export default function CalendarContainer() {
  // Seçili tarih ve görünüm state
  const [currentDate, setCurrentDate] = useState(new Date());

  const { data: eventsData, isLoading: isEventDataLoading } = useQuery({
    queryKey: ["getEvents"],
    queryFn: async (): Promise<any> => {
      const response = await getEvents();
      return response;
    },
  });

  if (isEventDataLoading) {
    return <LoadingState />;
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 flex flex-col h-full bg-white">
      <Text text="agenda_calendar" className="text-background bg-white" />
      {/* Takvim */}
      <div className="flex-1 w-full rounded-md shadow-md bg-white overflow-auto">
        <Calendar
          localizer={localizer}
          events={eventsData}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "calc(100vh - 180px)" }}
          className="rbc-calendar"
          date={currentDate}
          onNavigate={(date) => setCurrentDate(date)}
          toolbar={false}
        />
      </div>
    </div>
  );
}
