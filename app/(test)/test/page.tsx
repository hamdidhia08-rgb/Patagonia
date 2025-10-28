"use client";

import DashboardLayout from "../DashboardLayout";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useRouter } from "next/navigation";
import { Cairo } from "next/font/google";
import { Plus, User, MapPin } from "lucide-react";
import Image from "next/image";

const cairo = Cairo({ subsets: ["arabic"], weight: ["400", "500", "700"] });
const localizer = momentLocalizer(moment);

interface MyCalendarEvent {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  color?: string;
  url?: string;
  icon?: JSX.Element;
  avatar?: string;
}

export default function TasksCalendarPage() {
  const router = useRouter();

  // Dates pour aujourd'hui et hier
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const events: MyCalendarEvent[] = [
    {
      title: "السعودية - 162 شخص",
      start: new Date(2025, 9, 1, 9, 0), // mercredi
      end: new Date(2025, 9, 1, 12, 0),
      color: "#FF7F50",
      url: "/group/saudi",
      icon: <MapPin className="w-5 h-5" />,
      avatar: "/images/user33.png",
    },
    {
      title: "تركيا - 120 شخص",
      start: new Date(2025, 9, 3, 14, 0), // vendredi
      end: new Date(2025, 9, 3, 17, 0),
      color: "#1E90FF",
      url: "/group/turkey",
      icon: <User className="w-5 h-5" />,
      avatar: "/images/user33.png",
    },
    // Nouveaux événements uniquement en semaine
    {
      title: "اجتماع الموظفين",
      start: new Date(2025, 9, 7, 10, 0), // mardi
      end: new Date(2025, 9, 7, 11, 0),
      color: "#6A5ACD",
      url: "/meeting/staff",
      icon: <User className="w-5 h-5" />,
      avatar: "/images/user33.png",
    },
    {
      title: "تقرير المبيعات",
      start: new Date(2025, 9, 8, 13, 0), // mercredi
      end: new Date(2025, 9, 8, 15, 0),
      color: "#20B2AA",
      icon: <MapPin className="w-5 h-5" />,
      avatar: "/images/user33.png",
    },
    {
      title: "تخطيط الرحلات القادمة",
      start: new Date(2025, 9, 9, 9, 0), // jeudi
      end: new Date(2025, 9, 9, 12, 0),
      color: "#FF69B4",
      icon: <User className="w-5 h-5" />,
      avatar: "/images/user33.png",
    },
    // Exemple pour hier
    {
      title: "مراجعة المهام أمس",
      start: yesterday,
      end: yesterday,
      color: "#8B0000",
      icon: <User className="w-5 h-5" />,
      avatar: "/images/user33.png",
    },
    // Exemple pour aujourd'hui
    {
      title: "متابعة المهام اليوم",
      start: today,
      end: today,
      color: "#228B22",
      icon: <MapPin className="w-5 h-5" />,
      avatar: "/images/user33.png",
    },
  ];

  const eventStyleGetter = (event: MyCalendarEvent) => {
    return {
      style: {
        background: `linear-gradient(135deg, ${event.color} 0%, ${event.color}CC 100%)`,
        borderRadius: "12px",
        padding: "8px",
        cursor: "pointer",
        display: "block",
        overflow: "hidden",
        color: "white",
        fontWeight: 600,
      },
    };
  };

  const EventComponent = ({ event }: { event: MyCalendarEvent }) => (
    <div className="flex flex-col items-center justify-center text-center gap-1 h-20 p-1">
      {/* Avatar + Icon sur la même ligne */}
      <div className="flex items-center justify-center gap-2">
        {event.avatar && (
          <Image
            src={event.avatar}
            alt="avatar"
            width={30}
            height={30}
            className="rounded-full"
          />
        )}
        {event.icon && <span className="flex items-center justify-center">{event.icon}</span>}
      </div>

      {/* Texte centré */}
      <span className="text-sm md:text-base font-medium break-words">{event.title}</span>
    </div>
  );

  return (
    <DashboardLayout>
      <div className={`${cairo.className} p-6`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">مهام الشهر</h1>
          <button
            onClick={() => alert("Ajouter une tâche")}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-3 rounded-xl shadow-md transition"
          >
            <Plus className="w-5 h-5" />
            إضافة مهمة
          </button>
        </div>

        {/* Calendrier */}
        <div className="bg-white rounded-3xl shadow-2xl p-4">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 850 }}
            eventPropGetter={eventStyleGetter}
            components={{ event: EventComponent }}
            onSelectEvent={(event: MyCalendarEvent) => {
              if (event.url) router.push(event.url);
            }}
            messages={{
              today: "اليوم",
              previous: "السابق",
              next: "التالي",
              month: "الشهر",
              week: "الأسبوع",
              day: "اليوم",
              agenda: "جدول",
              date: "التاريخ",
              time: "الوقت",
              event: "الحدث",
            }}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
