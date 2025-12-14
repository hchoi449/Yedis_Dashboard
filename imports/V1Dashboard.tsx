import React, { useEffect, useMemo, useRef, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  addDays,
  addHours,
  differenceInCalendarDays,
  format,
  setMonth,
  parseISO,
  startOfMonth,
  startOfWeek,
  isSameMonth,
  isSameDay,
  isValid as isValidDate,
} from "date-fns";
import svgPaths from "./svg-p9vyne14q9";
import clsx from "clsx";
import img57 from "../assets/0406a9e28f61d0d4a9ee2e894af11fcc656a872f.png";

function BackgroundImage8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[6px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[6px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div className={clsx("relative rounded-[20px] shrink-0 w-full", additionalClassNames)}>
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start px-[16px] py-[16px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function PlusBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage5>
      <g id="plus">{children}</g>
    </BackgroundImage5>
  );
}
type OverviewBackgroundImageProps = {
  additionalClassNames?: string;
} & React.HTMLAttributes<HTMLDivElement>;

function OverviewBackgroundImage({ children, additionalClassNames = "", ...rest }: React.PropsWithChildren<OverviewBackgroundImageProps>) {
  return (
    <div className={clsx("relative rounded-[10px] shrink-0 w-full", additionalClassNames)} {...rest}>
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[18px] py-[10px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage6>
      <g id="Frame">{children}</g>
    </BackgroundImage6>
  );
}

function BackgroundImage2() {
  return (
    <BackgroundImage7>
      <circle cx="3" cy="3" fill="var(--fill-0, #707070)" fillOpacity="0.5" id="Ellipse 2" r="3" />
    </BackgroundImage7>
  );
}

function BackgroundImage1() {
  return (
    <BackgroundImage8>
      <circle cx="3" cy="3" fill="var(--fill-0, #1A40E8)" id="Ellipse 2" opacity="0" r="3" />
    </BackgroundImage8>
  );
}
type DayBackgroundImage1Props = {
  additionalClassNames?: string;
};

function DayBackgroundImage1({ additionalClassNames = "" }: DayBackgroundImage1Props) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[24px]", additionalClassNames)}>
      <NoBackgroundImageAndText text="2" />
      <BackgroundImage1 />
    </div>
  );
}

function BackgroundImage() {
  return (
    <BackgroundImage7>
      <circle cx="3" cy="3" fill="var(--fill-0, #1A40E8)" id="Ellipse 2" r="3" />
    </BackgroundImage7>
  );
}

function DayBackgroundImage() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center opacity-0 relative shrink-0 w-[24px]">
      <NoBackgroundImageAndText text="6" />
      <BackgroundImage />
    </div>
  );
}
type NoBackgroundImageAndTextProps = {
  text: string;
};

function NoBackgroundImageAndText({ text }: NoBackgroundImageAndTextProps) {
  return (
    <div className="aspect-[32/32] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 size-[16px] text-[#222] text-[12px] text-center tracking-[-0.24px]">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}

function FrameBackgroundImage() {
  return (
    <BackgroundImage3>
      <path d={svgPaths.p2a96b00} id="Vector" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p108cbf00} id="Vector_2" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </BackgroundImage3>
  );
}
type DeadlineBackgroundImageAndText1Props = {
  text: string;
};

function DeadlineBackgroundImageAndText1({ text }: DeadlineBackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <BackgroundImage6>
        <g clipPath="url(#clip0_1_944)">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p245eb100} id="Vector_2" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18635ff0} id="Vector_3" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_944">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </BackgroundImage6>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] text-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type DeadlineBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function DeadlineBackgroundImageAndText({ text, additionalClassNames = "" }: DeadlineBackgroundImageAndTextProps) {
  return (
    <div className={clsx("content-stretch flex gap-[8px] items-center relative shrink-0", additionalClassNames)}>
      <BackgroundImage3>
        <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </BackgroundImage3>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] text-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type TagBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
  textClassNames?: string;
};

function TagBackgroundImageAndText1({ text, additionalClassNames = "", textClassNames = "" }: TagBackgroundImageAndText1Props) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[100px] shrink-0", additionalClassNames)}>
      <p className={clsx("font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-nowrap", textClassNames || "text-[#ec221f]")}>
        {text}
      </p>
    </div>
  );
}
type TagBackgroundImageAndTextProps = {
  text: string;
};

function TagBackgroundImageAndText({ text }: TagBackgroundImageAndTextProps) {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[2px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#707070] text-[8px] text-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[10px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p24cfc300} fill="var(--fill-0, #1A40E8)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a40e8] text-[8px] text-nowrap">{text}</p>
    </div>
  );
}

function TypeTag({ type }: { type?: string }) {
  if (type === "Assignment") {
    return (
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
        <div className="bg-[#1a40e8] shrink-0 size-[8px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a40e8] text-[8px] text-nowrap">
          Assignment
        </p>
      </div>
    );
  }

  return <BackgroundImageAndText text="Exam" />;
}

type TaskItem = {
  id: string;
  kind: "preset" | "custom";
  type?: "Exam" | "Assignment";
  classTitle?: string;
  title?: string;
  detail?: string;
  dueISO?: string;
  dueDisplay?: string;
  dueLabel?: string;
  targetGrade?: string;
};

const hasBookingKeyword = (title?: string) => (title ? /(quiz|exam|assessment|midterm|test)/i.test(title) : false);
const computeDueLabel = (date: Date, now = new Date()) => {
  const diff = differenceInCalendarDays(date, now);
  if (diff === 1) return "Due Tomorrow";
  if (diff > 5) return `${diff} days left`;
  if (diff >= 0) return `Due ${format(date, "EEEE")}`;
  return undefined;
};
const computeTypeFromTitle = (title?: string) =>
  title && /(quiz|exam|assessment|midterm|final exam|test)/i.test(title) ? "Exam" : "Assignment";

function DraggableTask({ children, column, task }: React.PropsWithChildren<{ column: "progress" | "complete"; task: TaskItem }>) {
  const [, drag] = useDrag(() => ({ type: "TASK", item: { column, id: task.id } }), [column, task.id]);
  return <div ref={drag}>{children}</div>;
}

function DashboardContent() {
  const [inProgressTasks, setInProgressTasks] = useState<TaskItem[]>([]);
  const [completeTasks, setCompleteTasks] = useState<TaskItem[]>([]);
  const [feedError, setFeedError] = useState<string | null>(null);
  const [modal, setModal] = useState<{
    open: boolean;
    column: "progress" | "complete" | null;
    type: "Exam" | "Assignment";
    classTitle: string;
    title: string;
    dueDate: string;
    dueTime: string;
    targetGrade: string;
  }>({
    open: false,
    column: null,
    type: "Exam",
    classTitle: "",
    title: "",
    dueDate: "",
    dueTime: "",
    targetGrade: "",
  });
  const [showNotifications, setShowNotifications] = useState(false);
  const feedUrl =
    "https://nvnet.instructure.com/feeds/calendars/user_jhwVt02NJTuLmTKuBREzPAgOEMA2oGa4EwNOFLyB.ics";
  const [calendarDate, setCalendarDate] = useState<Date>(new Date());
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [monthPickerPos, setMonthPickerPos] = useState<{ left: number; top: number } | null>(null);
  const monthButtonRef = useRef<HTMLButtonElement | null>(null);
  const monthPickerRef = useRef<HTMLDivElement | null>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [profileFormOpen, setProfileFormOpen] = useState(false);
  const [profileForm, setProfileForm] = useState({
    fullName: "Henry Choi",
    school: "",
    grade: "",
    email: "henry.choi@example.com",
    phone: "",
    icalUrl: "",
  });
  const profileButtonRef = useRef<HTMLButtonElement | null>(null);
  const profileMenuRef = useRef<HTMLDivElement | null>(null);
  const modalOverlayRef = useRef<HTMLDivElement | null>(null);
  const profileOverlayRef = useRef<HTMLDivElement | null>(null);
  const [calendarEvents, setCalendarEvents] = useState<Record<string, number>>({});
  const inProgressCount = inProgressTasks.length;
  const completeCount = completeTasks.length;
  const [typeFilter, setTypeFilter] = useState<"all" | "Exam" | "Assignment">("all");
  const [bookedTasks, setBookedTasks] = useState<Record<string, boolean>>({});
  const [activePage, setActivePage] = useState<"overview" | "calendar" | "gpa" | "lab" | "docs">("overview");
  const sessionStatus: "Online" | "In Progress" | "Cancelled" = "Online";
  const sessionStatusConfig = {
    Online: { color: "#22c55e", icon: "dot" as const },
    "In Progress": { color: "#ec221f", icon: "minus" as const },
    Cancelled: { color: "#9ca3af", icon: "x" as const },
  };
  const sessionStatus2: "Online" | "In Progress" | "Cancelled" = "In Progress";
  const monthNames = useMemo(
    () => [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    [],
  );
  const nextDayTasks = useMemo(() => {
    const all = [...inProgressTasks, ...completeTasks];
    return all
      .filter((t) => {
        if (!t.dueISO) return t.dueLabel === "Due Tomorrow";
        const diff = differenceInCalendarDays(new Date(t.dueISO), new Date());
        return diff >= 1 && diff <= 2;
      })
      .sort((a, b) => {
        const ad = a.dueISO ? new Date(a.dueISO).getTime() : 0;
        const bd = b.dueISO ? new Date(b.dueISO).getTime() : 0;
        return ad - bd;
      });
  }, [inProgressTasks, completeTasks]);

  useEffect(() => {
    const handleMonthDismiss = () => {
      setShowMonthPicker(false);
      setMonthPickerPos(null);
    };
    const handleProfileDismiss = () => {
      setShowProfileMenu(false);
    };
    const handleNotificationsDismiss = () => {
      setShowNotifications(false);
    };
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (showMonthPicker) {
        if (monthPickerRef.current?.contains(target)) return;
        if (monthButtonRef.current?.contains(target)) return;
        handleMonthDismiss();
      }
      if (showProfileMenu) {
        if (profileMenuRef.current?.contains(target)) return;
        if (profileButtonRef.current?.contains(target)) return;
        handleProfileDismiss();
      }
      if (showNotifications) {
        const notifButton = document.getElementById("notification-button");
        if ((notifButton && notifButton.contains(target)) || (notifButton && notifButton === target)) return;
        const notifPanel = document.getElementById("notification-panel");
        if (notifPanel?.contains(target)) return;
        handleNotificationsDismiss();
      }
    };
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleMonthDismiss();
        handleProfileDismiss();
        handleNotificationsDismiss();
      }
    };
    if (showMonthPicker) {
      window.addEventListener("resize", handleMonthDismiss);
      window.addEventListener("scroll", handleMonthDismiss, true);
    }
    if (showProfileMenu) {
      window.addEventListener("resize", handleProfileDismiss);
      window.addEventListener("scroll", handleProfileDismiss, true);
    }
    if (showNotifications) {
      window.addEventListener("resize", handleNotificationsDismiss);
      window.addEventListener("scroll", handleNotificationsDismiss, true);
    }
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("resize", handleMonthDismiss);
      window.removeEventListener("scroll", handleMonthDismiss, true);
      window.removeEventListener("resize", handleProfileDismiss);
      window.removeEventListener("scroll", handleProfileDismiss, true);
      window.removeEventListener("resize", handleNotificationsDismiss);
      window.removeEventListener("scroll", handleNotificationsDismiss, true);
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [showMonthPicker, showProfileMenu, showNotifications]);

  useEffect(() => {
    if (!modal.open && !profileFormOpen) return undefined;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (modal.open) closeModal();
        if (profileFormOpen) setProfileFormOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [modal.open, profileFormOpen]);

  useEffect(() => {
    const parseICSDate = (value: string) => {
      const trimmed = value.trim();
      if (/^\d{8}$/.test(trimmed)) {
        // All-day events: build local date to avoid timezone shifting the day.
        const year = Number(trimmed.slice(0, 4));
        const month = Number(trimmed.slice(4, 6)) - 1;
        const day = Number(trimmed.slice(6, 8));
        return new Date(year, month, day, 0, 0, 0, 0);
      }
      if (/^\d{8}T\d{6}Z$/.test(trimmed)) {
        const year = Number(trimmed.slice(0, 4));
        const month = Number(trimmed.slice(4, 6)) - 1;
        const day = Number(trimmed.slice(6, 8));
        const hour = Number(trimmed.slice(9, 11));
        const minute = Number(trimmed.slice(11, 13));
        const second = Number(trimmed.slice(13, 15));
        return new Date(Date.UTC(year, month, day, hour, minute, second));
      }
      if (/^\d{8}T\d{6}$/.test(trimmed)) {
        const year = Number(trimmed.slice(0, 4));
        const month = Number(trimmed.slice(4, 6)) - 1;
        const day = Number(trimmed.slice(6, 8));
        const hour = Number(trimmed.slice(9, 11));
        const minute = Number(trimmed.slice(11, 13));
        const second = Number(trimmed.slice(13, 15));
        return new Date(year, month, day, hour, minute, second);
      }
      if (/Z$/.test(trimmed)) {
        return new Date(trimmed);
      }
      return parseISO(trimmed);
    };

    const parseICSEvents = (icsText: string) => {
      const sections = icsText.split("BEGIN:VEVENT").slice(1);
      return sections
        .map((rawSection) => {
          const section = rawSection.replace(/\r?\n /g, ""); // unfold continuation lines
          const dtstartMatch = section.match(/DTSTART[^:]*:(.+)/);
          const dueMatch = section.match(/DUE[^:]*:(.+)/);
          const dtendMatch = section.match(/DTEND[^:]*:(.+)/);
          const summaryMatch = section.match(/SUMMARY:(.+)/);
          if (!dtstartMatch || !summaryMatch) return null;
          const start = parseICSDate(dtstartMatch[1]);
          if (!isValidDate(start)) return null;
          const dueDateRaw = dueMatch?.[1] ?? dtendMatch?.[1];
          const dueDateParsed = dueDateRaw ? parseICSDate(dueDateRaw) : null;
          const summary = summaryMatch[1].replace(/\\n/g, " ").trim();
          return { start, due: dueDateParsed && isValidDate(dueDateParsed) ? dueDateParsed : null, summary };
        })
        .filter(Boolean) as { start: Date; due: Date | null; summary: string }[];
    };

    const now = new Date();
    const windowStart = addDays(now, -3);
    const windowEnd = addDays(now, 12); // ~1.5 weeks ahead, rounded up

    const loadFeed = async () => {
      const tryFetch = async (url: string) => {
        const response = await fetch(url);
        const text = await response.text();
        return { ok: response.ok, text };
      };

      try {
        setFeedError(null);

        const encoded = encodeURIComponent(feedUrl);
        const proxyUrls = [
          feedUrl,
          `https://cors.isomorphic-git.org/${feedUrl}`,
          `https://corsproxy.io/?${feedUrl}`,
          `https://api.allorigins.win/raw?url=${encoded}`,
          `https://thingproxy.freeboard.io/fetch/${feedUrl}`,
        ];

        let text: string | null = null;

        for (const url of proxyUrls) {
          try {
            const result = await tryFetch(url);
            if (result.text && result.text.includes("BEGIN:VEVENT")) {
              text = result.text;
              break;
            }
          } catch (err) {
            console.warn("Feed fetch attempt failed for", url, err);
          }
        }

        if (!text || !text.includes("BEGIN:VEVENT")) {
          throw new Error("Feed response missing events");
        }

        const events = parseICSEvents(text);
        if (!events.length) {
          throw new Error("No events parsed from feed");
        }

        const eventsWithDue = events.map(({ start, due, summary }) => {
          const dueDate = due ?? start;
          return { start, dueDate, summary };
        });

        const calendarMap: Record<string, number> = {};
        eventsWithDue.forEach(({ dueDate }) => {
          const key = format(dueDate, "yyyy-MM-dd");
          calendarMap[key] = (calendarMap[key] || 0) + 1;
        });
        setCalendarEvents(calendarMap);

        const filtered = eventsWithDue
          .filter(({ dueDate }) => dueDate >= windowStart && dueDate <= windowEnd)
          .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());

        const toRender = filtered.length ? filtered : eventsWithDue;

        const nextInProgress: TaskItem[] = [];
        const nextComplete: TaskItem[] = [];

    toRender.forEach(({ start, dueDate, summary }, index) => {
      const courseMatch = summary.match(/\[([^\]]+)\]\s*$/);
      const classTitle = courseMatch ? courseMatch[1].trim() : undefined;
      const cleanedTitle = classTitle ? summary.replace(/\s*\[[^\]]+\]\s*$/, "").trim() : summary;
      const dueDisplay = format(dueDate, "EEE, d MMM, yyyy | h:mma");
      const dueLabel = computeDueLabel(dueDate, now);
      const task: TaskItem = {
        id: `ics-${index}-${start.getTime()}`,
        kind: "custom",
        title: cleanedTitle,
        classTitle,
        dueISO: dueDate.toISOString(),
        dueDisplay,
        dueLabel,
        targetGrade: undefined,
        type: computeTypeFromTitle(cleanedTitle),
      };
          if (dueDate < now) {
            nextComplete.push(task);
          } else {
            nextInProgress.push(task);
          }
        });

        setInProgressTasks(nextInProgress);
        setCompleteTasks(
          nextComplete.sort(
            (a, b) => (b.dueISO ? new Date(b.dueISO).getTime() : 0) - (a.dueISO ? new Date(a.dueISO).getTime() : 0),
          ),
        );
      } catch (error) {
        console.error("Failed to load calendar feed", error);
        setFeedError("Unable to load calendar feed. Please check the iCal URL or try again later.");
      }
    };

    loadFeed();
  }, [feedUrl]);

  const calendarStart = startOfWeek(startOfMonth(calendarDate), { weekStartsOn: 0 });
  const calendarDays = Array.from({ length: 42 }, (_, i) => addDays(calendarStart, i));
  const weekdayLabels = ["S", "M", "T", "W", "T", "F", "S"];
  const daysByWeekday = weekdayLabels.map((_, idx) => calendarDays.filter((d) => d.getDay() === idx));
  const isCurrentDay = isSameDay(calendarDate, new Date());

  const renderDayCell = (date: Date) => {
    const key = format(date, "yyyy-MM-dd");
    const inMonth = isSameMonth(date, calendarDate);
    const isSelectedDay = isSameDay(date, calendarDate);
    const isToday = isSameDay(date, new Date());
    const faded = inMonth ? "" : "opacity-50";
    const selectDay = () => {
      setShowMonthPicker(false);
      setMonthPickerPos(null);
      setCalendarDate(date);
    };

    if (isToday) {
      return (
        <div
          key={key}
          role="button"
          tabIndex={0}
          onClick={selectDay}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && selectDay()}
          className={`content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[24px] ${faded}`}
        >
          <div className="aspect-[32/32] bg-[#ec221f] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 w-full" data-name="no">
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 size-[16px] text-[12px] text-center text-white tracking-[-0.24px]">
              <p className="leading-[normal]">{date.getDate()}</p>
            </div>
          </div>
          <BackgroundImage />
        </div>
      );
    }

    if (isSelectedDay) {
      return (
        <div
          key={key}
          role="button"
          tabIndex={0}
          onClick={selectDay}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && selectDay()}
          className={`content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[24px] ${faded}`}
        >
          <div className="aspect-[32/32] bg-[#b7b7b7] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 w-full" data-name="selected">
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 size-[16px] text-[12px] text-center text-white tracking-[-0.24px]">
              <p className="leading-[normal]">{date.getDate()}</p>
            </div>
          </div>
          <BackgroundImage1 />
        </div>
      );
    }

    return (
      <div
        key={key}
        role="button"
        tabIndex={0}
        onClick={selectDay}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && selectDay()}
        className={`content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[24px] ${faded}`}
      >
        <NoBackgroundImageAndText text={`${date.getDate()}`} />
        <BackgroundImage1 />
      </div>
    );
  };

  const goPrevDay = () => {
    setShowMonthPicker(false);
    setMonthPickerPos(null);
    setCalendarDate((prev) => addDays(prev, -1));
  };
  const goNextDay = () => {
    setShowMonthPicker(false);
    setMonthPickerPos(null);
    setCalendarDate((prev) => addDays(prev, 1));
  };
  const goToday = () => {
    setShowMonthPicker(false);
    setMonthPickerPos(null);
    setCalendarDate(new Date());
  };

  const openAddModal = (column: "progress" | "complete") => {
    setModal({ open: true, column, type: "Exam", classTitle: "", title: "", dueDate: "", dueTime: "", targetGrade: "" });
  };

  const closeModal = () =>
    setModal({ open: false, column: null, type: "Exam", classTitle: "", title: "", dueDate: "", dueTime: "", targetGrade: "" });

  const handleSubmitTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!modal.title.trim() || !modal.classTitle.trim() || !modal.dueDate || !modal.dueTime || !modal.column) return;
    const combinedISO = `${modal.dueDate}T${modal.dueTime}`;
    const parsed = parseISO(combinedISO);
    if (!isValidDate(parsed)) return;
    const dueLabel = computeDueLabel(parsed);
    const dueDisplay = format(parsed, "EEE, d MMM, yyyy | h:mma");
    const newTask = {
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`,
      kind: "custom",
      type: modal.type,
      classTitle: modal.classTitle.trim(),
      title: modal.title.trim(),
      dueISO: combinedISO,
      dueDisplay,
      dueLabel,
      targetGrade: modal.targetGrade.trim() || undefined,
    };
    if (modal.column === "progress") {
      setInProgressTasks((prev) => [...prev, newTask]);
    } else {
      setCompleteTasks((prev) => [...prev, newTask]);
    }
    closeModal();
  };

  const handleSubmitProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProfileFormOpen(false);
  };

  function handleMoveTask(from: "progress" | "complete", id: string, to: "progress" | "complete") {
    if (from === to) return;
    if (from === "progress") {
      const task = inProgressTasks.find((t) => t.id === id);
      if (!task) return;
      setInProgressTasks((prev) => prev.filter((t) => t.id !== id));
      setCompleteTasks((prev) => [...prev, task]);
    } else {
      const task = completeTasks.find((t) => t.id === id);
      if (!task) return;
      setCompleteTasks((prev) => prev.filter((t) => t.id !== id));
      setInProgressTasks((prev) => [...prev, task]);
    }
  }

  const [, progressDrop] = useDrop(
    () => ({
      accept: "TASK",
      drop: (item: { column: "progress" | "complete"; id: string }) => handleMoveTask(item.column, item.id, "progress"),
    }),
    [inProgressTasks, completeTasks],
  );
  const [, completeDrop] = useDrop(
    () => ({
      accept: "TASK",
      drop: (item: { column: "progress" | "complete"; id: string }) => handleMoveTask(item.column, item.id, "complete"),
    }),
    [inProgressTasks, completeTasks],
  );

  const renderPresetTask = (id: string, column: "progress" | "complete") => {
    const presetCardClass = clsx("min-h-[160px]", column === "complete" ? "bg-white border border-[#e5e7eb]" : "bg-white");
    const wrapper = (node: React.ReactNode) => (
      <DraggableTask key={id} column={column} task={{ id, kind: "preset" }}>
        {node}
      </DraggableTask>
    );

    if (id === "p1") {
      return wrapper(
        <BackgroundImage4 additionalClassNames={clsx(presetCardClass, "min-h-[150px]")}>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full flex-wrap gap-y-2">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 flex-wrap">
              <BackgroundImageAndText text="Exam" />
              <TagBackgroundImageAndText text="AP Calculus" />
            </div>
            <TagBackgroundImageAndText1 text="Due Tomorrow" additionalClassNames="bg-[rgba(255,59,59,0.1)]" />
          </div>
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#222] text-[18px] w-full">AP Calculus Unit Quiz</p>
          <DeadlineBackgroundImageAndText text="Fri, 28 Nov, 2025 | 2:00PM" additionalClassNames="w-full mt-[6px]" />
          <div className="flex items-center gap-[12px] w-full flex-wrap">
            <DeadlineBackgroundImageAndText1 text="Target grade: 90%" />
            {isBooked(id) ? (
              <div className="relative shrink-0 ml-auto">
                <div className="bg-[#1a40e8] content-stretch inline-flex gap-[8px] items-center justify-center px-[14px] py-[10px] rounded-[12px]" data-name="button">
                  <BackgroundImage3>
                    <path d={svgPaths.padebc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    <path d={svgPaths.p248dd900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </BackgroundImage3>
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white">Join</p>
                </div>
                <div aria-hidden="true" className="absolute inset-0 border border-[#1a40e8] border-solid rounded-[12px] pointer-events-none" />
              </div>
            ) : (
              <div className="relative shrink-0 ml-auto">
                <div
                  className="bg-white content-stretch inline-flex gap-[8px] items-center justify-center px-[14px] py-[10px] rounded-[12px] border border-[#1a40e8] cursor-pointer"
                  data-name="button"
                  onClick={() => markBooked(id)}
                >
                  <BackgroundImage3>
                    <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #1A40E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p2e9c0b00} id="Vector_2" stroke="var(--stroke-0, #1A40E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </BackgroundImage3>
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a40e8] text-[14px] text-nowrap">Book</p>
                </div>
              </div>
            )}
          </div>
        </BackgroundImage4>,
      );
    }

    if (id === "p2") {
      return wrapper(
        <BackgroundImage4 additionalClassNames={clsx(presetCardClass, "min-h-[150px]")}>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <div className="bg-[#1a40e8] shrink-0 size-[8px]" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a40e8] text-[8px] text-nowrap">Assignment</p>
              </div>
              <TagBackgroundImageAndText text="English 11" />
            </div>
            <TagBackgroundImageAndText1 text="Due Monday" additionalClassNames="bg-[rgba(255,59,59,0.1)]" />
          </div>
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#222] text-[18px] w-full">Essay on Poetry</p>
          <DeadlineBackgroundImageAndText text="Mon, 1 Dec, 2025 | 11:30AM" additionalClassNames="w-full mt-[6px]" />
          <DeadlineBackgroundImageAndText1 text="Target grade: 88%" />
        </BackgroundImage4>,
      );
    }

    if (id === "p3") {
      return wrapper(
        <BackgroundImage4 additionalClassNames={clsx(presetCardClass, "min-h-[150px]")}>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full flex-wrap gap-y-2">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 flex-wrap">
              <BackgroundImageAndText text="Exam" />
              <TagBackgroundImageAndText text="AP Calculus" />
            </div>
            <div className="bg-[#f6e3be] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[100px] shrink-0" data-name="tag">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#695015] text-[8px] text-nowrap">13 days left</p>
            </div>
          </div>
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#222] text-[18px] w-full">AP Calculus Final Exam</p>
          <DeadlineBackgroundImageAndText text="Wed, 10 Dec, 2025 | 2:00PM" additionalClassNames="w-full mt-[6px]" />
          <div className="flex items-center gap-[12px] w-full flex-wrap">
            <DeadlineBackgroundImageAndText1 text="Target grade: 89%" />
            {isBooked(id) ? (
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative rounded-[12px] shrink-0 ml-auto bg-[#1a40e8]">
                <BackgroundImage3>
                  <path d={svgPaths.padebc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  <path d={svgPaths.p248dd900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                </BackgroundImage3>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white">Join</p>
              </div>
            ) : (
              <div
                className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative rounded-[12px] shrink-0 ml-auto border border-[#1a40e8] cursor-pointer"
                data-name="button"
                onClick={() => markBooked(id)}
              >
                <BackgroundImage3>
                  <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #1A40E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p2e9c0b00} id="Vector_2" stroke="var(--stroke-0, #1A40E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </BackgroundImage3>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a40e8] text-[14px] text-nowrap">Book</p>
              </div>
            )}
          </div>
        </BackgroundImage4>,
      );
    }

    if (id === "c1") {
      return wrapper(
        <BackgroundImage4 additionalClassNames={clsx(presetCardClass, "min-h-[150px]")}>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full flex-wrap gap-y-2">
            <div className="content-stretch flex gap-[8px] items-center relative flex-wrap">
              <BackgroundImageAndText text="Exam" />
              <TagBackgroundImageAndText text="Physic 11" />
            </div>
            <TagBackgroundImageAndText1 text="1 day left" additionalClassNames="bg-[rgba(255,219,216,0.1)] opacity-0" />
          </div>
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#222] text-[18px] w-full">
            Physics<span>{` Midterm Exam`}</span>
          </p>
          <DeadlineBackgroundImageAndText text="Mon, 9 Nov, 2025 | 2:00PM" additionalClassNames="w-full mt-[6px]" />
          <DeadlineBackgroundImageAndText1 text="Target grade: 92%" />
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full flex-wrap" data-name="Deadline">
            <FrameBackgroundImage />
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] text-nowrap">
              <p className="leading-[normal]">{`Grade: `}</p>
            </div>
            <div className="relative shrink-0 size-[12px]" data-name="plus">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g clipPath="url(#clip0_1_899)" id="plus">
                  <path d="M1.33333 6H10.6667" id="Vector" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M6 1.33333V10.6667" id="Vector_2" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </g>
                <defs>
                  <clipPath id="clip0_1_899">
                    <rect fill="white" height="12" width="12" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </BackgroundImage4>,
      );
    }

    if (id === "c2") {
      return wrapper(
        <BackgroundImage4 additionalClassNames={clsx(presetCardClass, "min-h-[150px]")}>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full flex-wrap gap-y-2">
            <div className="content-stretch flex gap-[8px] items-center relative flex-wrap">
              <BackgroundImageAndText text="Exam" />
              <TagBackgroundImageAndText text="Computer Science 11" />
            </div>
            <TagBackgroundImageAndText1 text="1 day left" additionalClassNames="bg-[rgba(255,219,216,0.1)] opacity-0" />
          </div>
          <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#222] text-[18px] w-full">CS Midterm</p>
          <DeadlineBackgroundImageAndText text="Fri, 7 Nov, 2025 | 10:00AM" additionalClassNames="w-full mt-[6px]" />
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full flex-wrap" data-name="Deadline">
            <FrameBackgroundImage />
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] text-nowrap">
              <p className="leading-[normal]">Grade: 90%</p>
            </div>
          </div>
        </BackgroundImage4>,
      );
    }

    return null;
  };

  const isBooked = (id: string) => Boolean(bookedTasks[id]);
  const markBooked = (id: string) => setBookedTasks((prev) => ({ ...prev, [id]: true }));

  const renderCustomTask = (task: TaskItem, column: "progress" | "complete") => (
    <DraggableTask key={task.id} column={column} task={task}>
      <BackgroundImage4 additionalClassNames={clsx("min-h-[150px]", column === "complete" ? "bg-[#f5f5f5] border border-[#e5e7eb]" : "bg-white")}>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <TypeTag type={task.type} />
            {task.classTitle ? <TagBackgroundImageAndText text={task.classTitle} /> : null}
            </div>
          {task.dueLabel ? (
            <TagBackgroundImageAndText1
              text={task.dueLabel}
              additionalClassNames={
                task.dueLabel.includes("days left") ? "bg-[#f6e3be]" : task.dueLabel === "Due Tomorrow" ? "bg-[#f6e3be]" : "bg-[rgba(255,59,59,0.1)]"
              }
              textClassNames={
                task.dueLabel.includes("days left") || task.dueLabel === "Due Tomorrow" ? "text-[#695015]" : undefined
              }
            />
          ) : null}
        </div>
        <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#222] text-[18px] w-full">{task.title}</p>
        {task.dueDisplay ? <DeadlineBackgroundImageAndText text={task.dueDisplay} additionalClassNames="w-full mt-[6px]" /> : null}
        {column === "progress" ? (
          <>
            <DeadlineBackgroundImageAndText1 text={`Target grade: ${task.targetGrade ?? "90%"}`} />
            {hasBookingKeyword(task.title) ? (
              <div className="flex w-full items-center mt-[-36px]">
                <div
                  className={clsx(
                    "content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative rounded-[12px] shrink-0 ml-auto cursor-pointer",
                    isBooked(task.id) ? "bg-[#1a40e8] text-white" : "bg-white border border-[#1a40e8] text-[#1a40e8]",
                  )}
                  data-name="button"
                  onClick={() => {
                    if (!isBooked(task.id)) markBooked(task.id);
                  }}
                >
                  <BackgroundImage3>
                    <path
                      d={isBooked(task.id) ? svgPaths.padebc00 : svgPaths.p38f39800}
                      id="Vector"
                      stroke={isBooked(task.id) ? "var(--stroke-0, white)" : "var(--stroke-0, #1A40E8)"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.33"
                    />
                    <path
                      d={isBooked(task.id) ? svgPaths.p248dd900 : svgPaths.p2e9c0b00}
                      id="Vector_2"
                      stroke={isBooked(task.id) ? "var(--stroke-0, white)" : "var(--stroke-0, #1A40E8)"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.33"
                    />
                  </BackgroundImage3>
                  <p
                    className={clsx(
                      "font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap",
                      isBooked(task.id) ? "text-white" : "text-[#1a40e8]",
                    )}
                  >
                    {isBooked(task.id) ? "Join" : "Book"}
                  </p>
                </div>
              </div>
            ) : null}
          </>
        ) : (
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full flex-wrap" data-name="Deadline">
            <FrameBackgroundImage />
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] text-nowrap">
              <p className="leading-[normal]">{`Grade: ${task.targetGrade ?? "90%"}`}</p>
            </div>
          </div>
        )}
      </BackgroundImage4>
    </DraggableTask>
  );

  const filteredInProgress = typeFilter === "all" ? inProgressTasks : inProgressTasks.filter((t) => t.type === typeFilter);
  const filteredComplete = typeFilter === "all" ? completeTasks : completeTasks.filter((t) => t.type === typeFilter);

  return (
    <div>
      <div className="bg-[#fafafa] content-stretch flex items-start relative w-screen h-screen overflow-auto" data-name="V1 - Dashboard">
      <div className="bg-white content-stretch flex flex-col gap-[40px] h-[1024px] items-start px-[24px] py-[32px] relative shrink-0" data-name="side menu">
        <div className="h-[40px] relative shrink-0 w-[120px]" data-name="Logo">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 40">
            <g clipPath="url(#clip0_1_1033)" id="Logo">
              <path d={svgPaths.p21acab00} fill="var(--fill-0, #1A40E8)" id="y" />
              <path d={svgPaths.p3a15aa40} fill="var(--fill-0, #1A40E8)" id="e" />
              <path d={svgPaths.p2a61ab00} fill="var(--fill-0, #1A40E8)" id="d" />
              <g id="i">
                <path d={svgPaths.p3af5eb80} fill="var(--fill-0, #1A40E8)" id="i_2" />
                <path d={svgPaths.p264d5e80} fill="var(--fill-0, #1A40E8)" id="Favicon" />
              </g>
              <path d={svgPaths.p19704c00} fill="var(--fill-0, #1A40E8)" id="s" />
            </g>
            <defs>
              <clipPath id="clip0_1_1033">
                <rect fill="white" height="40" width="120" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Side Menu">
          <OverviewBackgroundImage
            additionalClassNames={clsx(
              "cursor-pointer",
              activePage === "overview" ? "bg-[#f5f5f7]" : "bg-white hover:bg-[#f5f5f7]",
            )}
            role="button"
            tabIndex={0}
            onClick={() => setActivePage("overview")}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActivePage("overview")}
          >
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Overview">
              <BackgroundImage5>
                <g id="home">
                  <path d={svgPaths.p2bbf6680} id="Vector" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p28601a80} id="Vector_2" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </BackgroundImage5>
              <div
                className={clsx(
                  "flex flex-col font-['Outfit:Medium',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] w-[112px]",
                  activePage === "overview" ? "font-semibold text-[#222]" : "font-medium text-[#585858]",
                )}
              >
                <p className="leading-[1.5]">Overview</p>
              </div>
            </div>
          </OverviewBackgroundImage>
          <OverviewBackgroundImage
            additionalClassNames={clsx(
              "cursor-pointer",
              activePage === "calendar" ? "bg-[#f5f5f7]" : "bg-white hover:bg-[#f5f5f7]",
            )}
            role="button"
            tabIndex={0}
            onClick={() => setActivePage("calendar")}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActivePage("calendar")}
          >
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Overview">
              <BackgroundImage5>
                <g id="calendar-clock">
                  <path d="M16 14V16.2L17.6 17.2" id="Vector" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M16 2V6" id="Vector_2" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p67074a0} id="Vector_3" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M3 10H8" id="Vector_4" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M8 2V6" id="Vector_5" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p12a40080} id="Vector_6" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </BackgroundImage5>
              <div
                className={clsx(
                  "flex flex-col font-['Outfit:Medium',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] w-[112px]",
                  activePage === "calendar" ? "font-semibold text-[#222]" : "font-medium text-[#585858]",
                )}
              >
                <p className="leading-[1.5]">Calendar</p>
              </div>
            </div>
          </OverviewBackgroundImage>
          <OverviewBackgroundImage
            additionalClassNames={clsx(
              "cursor-pointer",
              activePage === "gpa" ? "bg-[#f5f5f7]" : "bg-white hover:bg-[#f5f5f7]",
            )}
            role="button"
            tabIndex={0}
            onClick={() => setActivePage("gpa")}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActivePage("gpa")}
          >
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Overview">
              <BackgroundImage5>
                <g id="gpa-analysis">
                  <path d="M6 14L10 10L13 13L18 8" id="Vector" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M17 8H18V9" id="Vector_2" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M6 18H18" id="Vector_3" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M6 6V18" id="Vector_4" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </BackgroundImage5>
              <div
                className={clsx(
                  "flex flex-col font-['Outfit:Medium',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] w-[112px]",
                  activePage === "gpa" ? "font-semibold text-[#222]" : "font-medium text-[#585858]",
                )}
              >
                <p className="leading-[1.5]">GPA Analysis</p>
              </div>
            </div>
          </OverviewBackgroundImage>
          <OverviewBackgroundImage
            additionalClassNames={clsx(
              "cursor-pointer",
              activePage === "lab" ? "bg-[#f5f5f7]" : "bg-white hover:bg-[#f5f5f7]",
            )}
            role="button"
            tabIndex={0}
            onClick={() => setActivePage("lab")}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActivePage("lab")}
          >
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Overview">
              <BackgroundImage5>
                <g id="lab">
                  <path d={svgPaths.p142aa200} id="Vector" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M6.453 15H17.547" id="Vector_2" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M8.5 2H15.5" id="Vector_3" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </BackgroundImage5>
              <div
                className={clsx(
                  "flex flex-col font-['Outfit:Medium',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] w-[112px]",
                  activePage === "lab" ? "font-semibold text-[#222]" : "font-medium text-[#585858]",
                )}
              >
                <p className="leading-[1.5]">Yedis Lab</p>
              </div>
            </div>
          </OverviewBackgroundImage>
          <OverviewBackgroundImage
            additionalClassNames={clsx(
              "cursor-pointer",
              activePage === "docs" ? "bg-[#f5f5f7]" : "bg-white hover:bg-[#f5f5f7]",
            )}
            role="button"
            tabIndex={0}
            onClick={() => setActivePage("docs")}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActivePage("docs")}
          >
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Overview">
              <BackgroundImage5>
                <g id="doc">
                  <path d={svgPaths.pb007f00} id="Vector" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p1b58ab00} id="Vector_2" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M10 9H8" id="Vector_3" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M16 13H8" id="Vector_4" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M16 17H8" id="Vector_5" stroke="var(--stroke-0, #585858)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </BackgroundImage5>
              <div
                className={clsx(
                  "flex flex-col font-['Outfit:Medium',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] w-[112px]",
                  activePage === "docs" ? "font-semibold text-[#222]" : "font-medium text-[#585858]",
                )}
              >
                <p className="leading-[1.5]">Docs</p>
              </div>
            </div>
          </OverviewBackgroundImage>
        </div>
      </div>
      <div className="flex-1 h-[1024px] min-h-px min-w-0 relative" data-name="main">
        <div className="size-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222] text-[32px] text-nowrap">
                <p className="leading-[normal]">
                  {activePage === "overview"
                    ? "Ready to learn Alex?"
                    : activePage === "calendar"
                      ? "Calendar"
                      : activePage === "gpa"
                        ? "GPA Analysis"
                        : activePage === "lab"
                          ? "Yedis Lab"
                          : "Docs"}
                </p>
              </div>
              <div className="flex gap-[16px] items-center">
                <div className="relative">
                  <button
                    id="notification-button"
                    type="button"
                    aria-label="Notifications"
                    className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[40px] cursor-pointer transition-transform duration-200 hover:-translate-y-[2px] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a40e8] focus-visible:ring-offset-2"
                    onClick={() => setShowNotifications((prev) => !prev)}
                  >
                    <BackgroundImage5>
                      <g id="notifi">
                        <path d={svgPaths.p235dd00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.p3fc24200} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </g>
                    </BackgroundImage5>
                    {!showNotifications ? <span className="absolute -top-[2px] -right-[2px] block size-[10px] rounded-full bg-[#ec221f] ring-2 ring-white" /> : null}
                  </button>
                  {showNotifications ? (
                    <div
                      id="notification-panel"
                      className="absolute right-0 top-[48px] z-50 min-w-[320px] rounded-[14px] border border-[#e5e7eb] bg-white shadow-[0_18px_42px_rgba(0,0,0,0.18)]"
                    >
                      <div className="px-[16px] py-[14px] border-b border-[#f4f6fb] flex items-start justify-between gap-[12px]">
                        <div className="flex flex-col gap-[12px] w-full">
                          <div className="flex items-center gap-[8px]">
                            <span className="inline-flex items-center justify-center rounded-full bg-[rgba(26,64,232,0.08)] text-[#1a40e8] text-[11px] px-[8px] py-[4px] font-['Inter:Medium',sans-serif]">
                              New
                            </span>
                            <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#141522] leading-[1.4]">Notifications</p>
                          </div>
                          <div className="bg-[rgba(26,64,232,0.05)] rounded-[12px] px-[12px] py-[12px]">
                            <p className="font-['Inter:Medium',sans-serif] text-[12px] text-[#141522] leading-[1.6] flex items-center gap-[8px]">
                              🎉 Great Job on your CS Midterm, Alex!
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          aria-label="Close notifications"
                          className="text-[#707070] text-[16px] leading-none px-[6px] py-[2px] hover:text-[#1a40e8] transition-colors"
                          onClick={() => setShowNotifications(false)}
                        >
                          ×
                        </button>
                      </div>
                      <div className="px-[14px] py-[10px]">
                        <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#707070] leading-[1.4]">All caught up.</p>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="relative">
                  <button
                    ref={profileButtonRef}
                    type="button"
                    onClick={() => setShowProfileMenu((prev) => !prev)}
                    className="overflow-clip relative shrink-0 size-[40px] rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a40e8] focus-visible:ring-offset-2 transition-transform duration-200 hover:-translate-y-[2px] active:translate-y-[1px]"
                    aria-label="Open profile menu"
                  >
                    <div className="absolute inset-0 rounded-full bg-[#7dcfd7]" aria-hidden="true" />
                    <div className="absolute inset-[4px] overflow-hidden rounded-full">
                      <img alt="Profile" className="absolute inset-0 size-full object-cover" src={img57} />
                    </div>
                  </button>
                  {showProfileMenu ? (
                    <div
                      ref={profileMenuRef}
                      className="absolute right-0 top-[48px] z-50 min-w-[220px] rounded-[12px] border border-[#e5e7eb] bg-white shadow-[0_18px_42px_rgba(0,0,0,0.2)]"
                    >
                      <div className="px-[16px] py-[14px] border-b border-[#f1f1f1] flex items-start justify-between gap-[12px]">
                        <div>
                          <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#141522] leading-[1.4]">Henry Choi</p>
                          <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#707070] leading-[1.4]">henry.choi@example.com</p>
                        </div>
                        <button
                          type="button"
                          aria-label="Close profile menu"
                          className="text-[#707070] text-[16px] leading-none px-[6px] py-[2px]"
                          onClick={() => setShowProfileMenu(false)}
                        >
                          ×
                        </button>
                      </div>
                      <div className="flex flex-col">
                        <button
                          type="button"
                          className="text-left px-[16px] py-[10px] text-[13px] text-[#222] hover:bg-[#f5f5f5] focus:outline-none"
                          onClick={() => {
                            setShowProfileMenu(false);
                            setProfileFormOpen(true);
                          }}
                        >
                          View profile
                        </button>
                        <button
                          type="button"
                          className="text-left px-[16px] py-[10px] text-[13px] text-[#222] hover:bg-[#f5f5f5] focus:outline-none"
                          onClick={() => setShowProfileMenu(false)}
                        >
                          Settings
                        </button>
                        <button
                          type="button"
                          className="text-left px-[16px] py-[10px] text-[13px] text-[#d92525] hover:bg-[#ffecec] focus:outline-none"
                          onClick={() => setShowProfileMenu(false)}
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            {activePage === "overview" ? (
              <>
                {feedError ? (
                  <div className="text-[12px] text-[#ec221f] bg-[rgba(236,34,31,0.08)] border border-[#ec221f]/30 rounded-[8px] px-[10px] py-[6px]">
                    {feedError}
                  </div>
                ) : null}
                <div
                  className="content-stretch grid grid-cols-[minmax(0,1fr)_150px] gap-[32px] items-start relative h-full w-full max-w-[1150px]"
                  data-name="Upcoming Tasks"
                >
                  <div className="flex flex-col gap-[16px] min-w-0 w-full">
                    <div className="flex items-center justify-between w-full gap-[12px]">
                      <div className="flex flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222] text-[20px] text-nowrap">
                        <p className="leading-[1.5] font-semibold">Overview</p>
                      </div>
                      <div className="flex items-center justify-end gap-[8px] w-full">
                        {(["all", "Exam", "Assignment"] as const).map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setTypeFilter(option)}
                            className={clsx(
                              "px-[10px] py-[6px] rounded-[8px] text-[12px] font-['Inter:Medium',sans-serif] border border-[#e5e7eb]",
                              typeFilter === option ? "bg-[#1a40e8] text-white border-[#1a40e8]" : "bg-white text-[#222]",
                            )}
                          >
                            {option === "all" ? "All" : option}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white rounded-[10px] border border-[#e5e7eb] p-[16px] flex flex-col gap-[12px] w-full">
                      <p className="font-['Outfit:Medium',sans-serif] text-[16px] text-[#222] leading-[1.4]">Message Board</p>
                      <div className="flex flex-col gap-[8px] max-h-[96px] overflow-y-auto">
                        {nextDayTasks.length ? (
                          nextDayTasks.map((task) => {
                            let label = "due tomorrow.";
                            if (task.dueISO) {
                              const diff = differenceInCalendarDays(new Date(task.dueISO), new Date());
                              if (diff === 2) {
                                label = "due in 2 days.";
                              }
                            }
                            return (
                              <div key={task.id} className="flex flex-col gap-[4px] bg-[rgba(26,64,232,0.05)] rounded-[8px] p-[10px]">
                                <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#141522] leading-[1.4]">
                                  You have an {task.type === "Exam" ? "exam" : "assignment"} <span className="font-semibold">{task.title}</span> {label}
                                </p>
                                {task.dueDisplay ? (
                                  <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#707070] leading-[1.3]">{task.dueDisplay}</p>
                                ) : null}
                              </div>
                            );
                          })
                        ) : (
                          <div className="flex flex-col gap-[4px] bg-[rgba(26,64,232,0.03)] rounded-[8px] p-[10px]">
                            <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#141522] leading-[1.4]">No tasks due tomorrow.</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[16px] items-stretch relative w-full h-full">
                      <div className="content-stretch flex gap-[16px] items-stretch relative w-full h-full">
                        <div
                          ref={progressDrop}
                          className="bg-[rgba(174,203,250,0.15)] content-stretch flex flex-col gap-[10px] items-stretch overflow-y-auto overflow-x-hidden pl-[10px] pr-[8px] pt-[10px] pb-[10px] relative rounded-[10px] flex-1 min-w-[260px] shrink-0 h-[680px]"
                          style={{ scrollbarGutter: "stable" }}
                        >
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                            <div className="content-stretch flex font-['Outfit:SemiBold',sans-serif] font-semibold gap-[16px] items-center leading-[normal] relative shrink-0 text-[#222] text-nowrap">
                              <p className="relative shrink-0 text-[18px]">{`In progress `}</p>
                              <p className="relative shrink-0 text-[14px]">[{filteredInProgress.length}]</p>
                            </div>
                            <button aria-label="Add In Progress task" className="cursor-pointer" onClick={() => openAddModal("progress")} type="button">
                              <PlusBackgroundImage>
                                <path d="M5 12H19" id="Vector" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <path d="M12 5V19" id="Vector_2" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              </PlusBackgroundImage>
                            </button>
                          </div>
                          {filteredInProgress.map((task) => (task.kind === "preset" ? renderPresetTask(task.id, "progress") : renderCustomTask(task, "progress")))}
                        </div>
                        <div
                          ref={completeDrop}
                          className="bg-white content-stretch flex flex-col gap-[10px] items-stretch overflow-y-auto overflow-x-hidden pl-[10px] pr-[8px] pt-[10px] pb-[10px] relative rounded-[10px] flex-1 min-w-[260px] shrink-0 h-[680px]"
                          style={{ scrollbarGutter: "stable" }}
                        >
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                            <div className="content-stretch flex font-['Outfit:SemiBold',sans-serif] font-semibold gap-[16px] items-center leading-[normal] relative shrink-0 text-[#222] text-nowrap">
                              <p className="relative shrink-0 text-[18px]">Complete</p>
                              <p className="relative shrink-0 text-[14px]">[{filteredComplete.length}]</p>
                            </div>
                            <button aria-label="Add Complete task" className="cursor-pointer" onClick={() => openAddModal("complete")} type="button">
                              <PlusBackgroundImage>
                                <path d="M5.00024 12H19.0002" id="Vector" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <path d="M12 5.00024V19.0002" id="Vector_2" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              </PlusBackgroundImage>
                            </button>
                          </div>
                          {filteredComplete.map((task) => (task.kind === "preset" ? renderPresetTask(task.id, "complete") : renderCustomTask(task, "complete")))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative w-[150px] shrink-0 whitespace-nowrap justify-self-end">
                      <div className="flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#141522] text-[20px] w-[min-content]">
                        <p className="leading-[1.5]">Upcoming sessions</p>
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[24px] h-[834px] items-center overflow-clip p-[24px] relative rounded-[20px] shrink-0" data-name="Calender">
                        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
                          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Month">
                              <div className="relative">
                                <button
                                  ref={monthButtonRef}
                                  type="button"
                                  onClick={() => {
                                    setShowMonthPicker((prev) => {
                                      const next = !prev;
                                      if (next && monthButtonRef.current) {
                                        const rect = monthButtonRef.current.getBoundingClientRect();
                                        setMonthPickerPos({ left: rect.left, top: rect.bottom + 6 });
                                      }
                                      return next;
                                    });
                                  }}
                                  className="flex flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#222] text-[18px] text-center text-nowrap focus:outline-none"
                                  aria-label="Select month"
                                >
                                  <p className="leading-[normal]">{format(calendarDate, "LLLL")}</p>
                                </button>
                                {showMonthPicker && monthPickerPos ? (
                                  <div
                                    ref={monthPickerRef}
                                    className="fixed z-30 grid grid-cols-3 gap-[6px] rounded-[12px] border border-[#e5e7eb] bg-white p-[8px] shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                                    style={{ left: monthPickerPos.left, top: monthPickerPos.top }}
                                  >
                                    {monthNames.map((month, idx) => {
                                      const isActive = idx === calendarDate.getMonth();
                                      return (
                                        <button
                                          key={month}
                                          type="button"
                                          onClick={() => {
                                            setCalendarDate((prev) => startOfMonth(setMonth(prev, idx)));
                                            setShowMonthPicker(false);
                                            setMonthPickerPos(null);
                                          }}
                                          className={clsx(
                                            "rounded-[8px] px-[10px] py-[8px] text-[12px] text-[#222] text-left focus:outline-none",
                                            isActive ? "bg-[#1a40e8] text-white" : "bg-white hover:bg-[#f5f5f5]",
                                          )}
                                        >
                                          {month}
                                        </button>
                                      );
                                    })}
                                  </div>
                                ) : null}
                              </div>
                              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                                <button
                                  type="button"
                                  aria-label="Previous day"
                                  onClick={goPrevDay}
                                  className="transition-transform duration-200 active:scale-90 focus:scale-95 hover:-translate-x-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1a40e8] rounded-full"
                                >
                                  <BackgroundImage6>
                                    <g id="chevron-left">
                                      <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                  </BackgroundImage6>
                                </button>
                                {isCurrentDay ? (
                                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[12px] text-center tracking-[-0.24px] w-[35px]">
                                    <p className="leading-[normal]">Today</p>
                                  </div>
                                ) : null}
                                <button
                                  type="button"
                                  aria-label="Next day"
                                  onClick={goNextDay}
                                  className="transition-transform duration-200 active:scale-90 focus:scale-95 hover:translate-x-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1a40e8] rounded-full"
                                >
                                  <BackgroundImage6>
                                    <g id="chevron-right">
                                      <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #222222)" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                  </BackgroundImage6>
                                </button>
                              </div>
                            </div>
                          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Date">
                            {weekdayLabels.map((label, idx) => (
                              <div key={label} className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="date">
                                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[12px] text-center tracking-[-0.24px] w-[24px]">
                                  <p className="leading-[normal]">{label}</p>
                                </div>
                                {daysByWeekday[idx].map((date) => renderDayCell(date))}
                              </div>
                            ))}
                          </div>
                          </div>
                          <div className="bg-[rgba(26,64,232,0.1)] relative rounded-[20px] shrink-0 w-full">
                            <div className="size-full">
                              <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
                                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[264px]">
                                  <div className="content-stretch flex items-center relative shrink-0">
                                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                                      <p
                                        className="[grid-area:1_/_1] font-['Inter:Medium',sans-serif] font-medium leading-[normal] ml-[13px] mt-0 not-italic relative text-[8px] text-nowrap"
                                        style={{ color: sessionStatusConfig[sessionStatus].color }}
                                      >
                                        {sessionStatus}
                                      </p>
                                      <div className="[grid-area:1_/_1] ml-0 mt-px relative size-[8px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                                          {sessionStatusConfig[sessionStatus].icon === "dot" ? (
                                            <circle cx="4" cy="4" fill={sessionStatusConfig[sessionStatus].color} r="4" />
                                          ) : null}
                                          {sessionStatusConfig[sessionStatus].icon === "minus" ? (
                                            <line x1="1.5" x2="6.5" y1="4" y2="4" stroke={sessionStatusConfig[sessionStatus].color} strokeWidth="1.5" strokeLinecap="round" />
                                          ) : null}
                                          {sessionStatusConfig[sessionStatus].icon === "x" ? (
                                            <>
                                              <line x1="1.8" x2="6.2" y1="1.8" y2="6.2" stroke={sessionStatusConfig[sessionStatus].color} strokeWidth="1.4" strokeLinecap="round" />
                                              <line x1="1.8" x2="6.2" y1="6.2" y2="1.8" stroke={sessionStatusConfig[sessionStatus].color} strokeWidth="1.4" strokeLinecap="round" />
                                            </>
                                          ) : null}
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#222] text-[18px] text-nowrap mb-[4px]">AP Calculus Quiz Group Session</p>
                                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Deadline">
                                  <BackgroundImage6>
                                    <g clipPath="url(#clip0_1_1028)" id="profile">
                                      <path d={svgPaths.p107f5000} id="Vector" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                      <path d={svgPaths.p2a778300} id="Vector_2" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                      <path d={svgPaths.p39ee6532} id="Vector_3" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_1_1028">
                                        <rect fill="white" height="16" width="16" />
                                      </clipPath>
                                    </defs>
                                  </BackgroundImage6>
                                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] text-nowrap">
                                    <p className="leading-[normal]">Henry Choi</p>
                                  </div>
                                </div>
                                <DeadlineBackgroundImageAndText text="Thu, 27 Nov, 2025 | 12:00PM" additionalClassNames="pb-[8px] pt-0 px-0" />
                                <div className="bg-[#1a40e8] relative rounded-[8px] shrink-0 w-full" data-name="button">
                                  <div className="flex flex-row items-center justify-center size-full">
                                    <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative w-full">
                                      <div className="relative shrink-0 size-[20px]" data-name="Frame">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                          <g id="Frame">
                                            <path d={svgPaths.p375df400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                                            <path d={svgPaths.p3e238c80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                                          </g>
                                        </svg>
                                      </div>
                                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white">Join video call</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[rgba(26,64,232,0.1)] relative rounded-[20px] shrink-0 w-full">
                            <div className="size-full">
                              <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
                                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[264px]">
                                  <div className="content-stretch flex items-center relative shrink-0">
                                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                                      <p
                                        className="[grid-area:1_/_1] font-['Inter:Medium',sans-serif] font-medium leading-[normal] ml-[13px] mt-0 not-italic relative text-[8px] text-nowrap"
                                        style={{ color: sessionStatusConfig[sessionStatus2].color }}
                                      >
                                        {sessionStatus2}
                                      </p>
                                      <div className="[grid-area:1_/_1] ml-0 mt-px relative size-[8px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                                          {sessionStatusConfig[sessionStatus2].icon === "dot" ? (
                                            <circle cx="4" cy="4" fill={sessionStatusConfig[sessionStatus2].color} r="4" />
                                          ) : null}
                                          {sessionStatusConfig[sessionStatus2].icon === "minus" ? (
                                            <line x1="1.5" x2="6.5" y1="4" y2="4" stroke={sessionStatusConfig[sessionStatus2].color} strokeWidth="1.5" strokeLinecap="round" />
                                          ) : null}
                                          {sessionStatusConfig[sessionStatus2].icon === "x" ? (
                                            <>
                                              <line x1="1.8" x2="6.2" y1="1.8" y2="6.2" stroke={sessionStatusConfig[sessionStatus2].color} strokeWidth="1.4" strokeLinecap="round" />
                                              <line x1="1.8" x2="6.2" y1="6.2" y2="1.8" stroke={sessionStatusConfig[sessionStatus2].color} strokeWidth="1.4" strokeLinecap="round" />
                                            </>
                                          ) : null}
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#222] text-[18px] text-nowrap mb-[4px]">Chemistry Honors Test Group Session</p>
                                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Deadline">
                                  <BackgroundImage6>
                                    <g clipPath="url(#clip0_1_1028)" id="profile">
                                      <path d={svgPaths.p107f5000} id="Vector" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                      <path d={svgPaths.p2a778300} id="Vector_2" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                      <path d={svgPaths.p39ee6532} id="Vector_3" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_1_1028">
                                        <rect fill="white" height="16" width="16" />
                                      </clipPath>
                                    </defs>
                                  </BackgroundImage6>
                                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] text-nowrap">
                                    <p className="leading-[normal]">Henry Choi</p>
                                  </div>
                                </div>
                                <DeadlineBackgroundImageAndText text="Thu, 18 Dec, 2025 | 7:30PM" additionalClassNames="pb-[8px] pt-0 px-0" />
                                <div className="bg-[#1a40e8] relative rounded-[8px] shrink-0 w-full" data-name="button">
                                  <div className="flex flex-row items-center justify-center size-full">
                                    <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative w-full">
                                      <div className="relative shrink-0 size-[20px]" data-name="Frame">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                          <g id="Frame">
                                            <path d={svgPaths.p375df400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                                            <path d={svgPaths.p3e238c80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                                          </g>
                                        </svg>
                                      </div>
                                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white">Join video call</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative rounded-[8px] shrink-0 w-full" data-name="button">
                          <div aria-hidden="true" className="absolute border border-[#1a40e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[16px] relative w-full">
                              <BackgroundImage5>
                                <g id="Frame">
                                  <path d={svgPaths.p1949c8a0} id="Vector" stroke="var(--stroke-0, #1A40E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                  <path d={svgPaths.p71f8340} id="Vector_2" stroke="var(--stroke-0, #1A40E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </g>
                              </BackgroundImage5>
                              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1a40e8] text-[16px] text-nowrap">Book lesson</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full h-full">
                <div className="bg-white rounded-[12px] border border-[#e5e7eb] p-[20px] w-full">
                  <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#222] leading-[1.5]">
                    This page will host the {activePage === "calendar" ? "calendar experience" : activePage === "gpa" ? "GPA analysis tools" : activePage === "lab" ? "Yedis Lab content" : "docs and resources"}.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
      {modal.open ? (
        <div
          ref={modalOverlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur-[2px] px-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <form
            onSubmit={handleSubmitTask}
            className="bg-white/98 rounded-[16px] border border-[#e5e7eb] shadow-[0_16px_48px_rgba(0,0,0,0.14)] w-full max-w-[520px] p-[24px] md:p-[28px] flex flex-col gap-[16px]"
          >
            <div className="flex items-start justify-between gap-[12px]">
              <div className="flex flex-col gap-[6px]">
                <div className="inline-flex items-center gap-[8px] px-[10px] py-[6px] rounded-[10px] bg-[rgba(26,64,232,0.06)] text-[#1a40e8] text-[12px] font-['Inter:Medium',sans-serif] w-fit">
                  New task
                  <span className="text-[#707070] text-[11px]">→ {modal.column === "progress" ? "In progress" : "Complete"}</span>
                </div>
                <p className="font-['Outfit:Medium',sans-serif] text-[20px] text-[#222] leading-[1.3]">Add task</p>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#707070] leading-[1.5]">
                  Capture the details so we can place it in the right column.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="text-[#707070] text-[18px] leading-none px-[8px] py-[4px] rounded-full hover:bg-[#f5f5f5] transition-colors"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] w-full">
              <div className="flex flex-col gap-[8px]">
                <label className="font-['Inter:Medium',sans-serif] text-[13px] text-[#222]">Type</label>
                <select
                  value={modal.type}
                  onChange={(e) => setModal((prev) => ({ ...prev, type: e.target.value as "Exam" | "Assignment" }))}
                  className="rounded-[10px] border border-[#e5e7eb] bg-[#f9fafc] px-[12px] py-[10px] text-[14px] text-[#222] outline-none focus:border-[#1a40e8] focus:ring-2 focus:ring-[#1a40e8]/20 transition-all"
                >
                  <option value="Exam">Exam</option>
                  <option value="Assignment">Assignment</option>
                </select>
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="font-['Inter:Medium',sans-serif] text-[13px] text-[#222]">Class Title</label>
                <input
                  required
                  value={modal.classTitle}
                  onChange={(e) => setModal((prev) => ({ ...prev, classTitle: e.target.value }))}
                  className="rounded-[10px] border border-[#e5e7eb] bg-[#f9fafc] px-[12px] py-[10px] text-[14px] text-[#222] outline-none focus:border-[#1a40e8] focus:ring-2 focus:ring-[#1a40e8]/20 transition-all"
                  placeholder="e.g. AP Calculus"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="font-['Inter:Medium',sans-serif] text-[13px] text-[#222]">Title</label>
              <input
                autoFocus
                required
                value={modal.title}
                onChange={(e) => setModal((prev) => ({ ...prev, title: e.target.value }))}
                className="rounded-[10px] border border-[#e5e7eb] bg-[#f9fafc] px-[12px] py-[10px] text-[14px] text-[#222] outline-none focus:border-[#1a40e8] focus:ring-2 focus:ring-[#1a40e8]/20 transition-all"
                placeholder="Task title"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] w-full">
              <div className="flex flex-col gap-[8px]">
                <label className="font-['Inter:Medium',sans-serif] text-[13px] text-[#222]">Due date</label>
                <input
                  type="date"
                  required
                  value={modal.dueDate}
                  onChange={(e) => setModal((prev) => ({ ...prev, dueDate: e.target.value }))}
                  className="rounded-[10px] border border-[#e5e7eb] bg-[#f9fafc] px-[12px] py-[10px] text-[14px] text-[#222] outline-none focus:border-[#1a40e8] focus:ring-2 focus:ring-[#1a40e8]/20 transition-all"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="font-['Inter:Medium',sans-serif] text-[13px] text-[#222]">Time</label>
                <input
                  type="time"
                  required
                  value={modal.dueTime}
                  onChange={(e) => setModal((prev) => ({ ...prev, dueTime: e.target.value }))}
                  className="rounded-[10px] border border-[#e5e7eb] bg-[#f9fafc] px-[12px] py-[10px] text-[14px] text-[#222] outline-none focus:border-[#1a40e8] focus:ring-2 focus:ring-[#1a40e8]/20 transition-all"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <label className="font-['Inter:Medium',sans-serif] text-[13px] text-[#222]">Target Grade</label>
              <input
                value={modal.targetGrade}
                onChange={(e) => setModal((prev) => ({ ...prev, targetGrade: e.target.value }))}
                className="rounded-[10px] border border-[#e5e7eb] bg-[#f9fafc] px-[12px] py-[10px] text-[14px] text-[#222] outline-none focus:border-[#1a40e8] focus:ring-2 focus:ring-[#1a40e8]/20 transition-all"
                placeholder="e.g. 90%"
              />
            </div>
            <div className="flex gap-[10px] justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="px-[14px] py-[10px] rounded-[10px] border border-[#e5e7eb] text-[14px] text-[#222] hover:bg-[#f5f7fb] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-[14px] py-[10px] rounded-[10px] bg-[#1a40e8] text-white text-[14px] shadow-[0_8px_20px_rgba(26,64,232,0.25)] hover:shadow-[0_10px_22px_rgba(26,64,232,0.32)] transition-all"
              >
                Add task
              </button>
            </div>
          </form>
        </div>
      ) : null}
      {profileFormOpen ? (
        <div
          ref={profileOverlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur-[2px] px-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setProfileFormOpen(false);
            }
          }}
        >
          <form
            onSubmit={handleSubmitProfile}
            className="bg-white/98 rounded-[16px] border border-[#e5e7eb] shadow-[0_16px_48px_rgba(0,0,0,0.14)] w-full max-w-[520px] p-[28px] md:p-[32px] flex flex-col gap-[20px]"
          >
            <div className="flex items-start justify-between gap-[14px]">
              <div className="flex flex-col gap-[10px]">
                <div className="inline-flex items-center gap-[8px] px-[12px] py-[7px] rounded-[12px] bg-[rgba(26,64,232,0.06)] text-[#1a40e8] text-[12px] font-['Inter:Medium',sans-serif] w-fit">
                  Profile
                </div>
                <p className="font-['Outfit:Medium',sans-serif] text-[20px] text-[#222] leading-[1.3]">View profile</p>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#707070] leading-[1.5]">
                  Update your details to keep things in sync.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setProfileFormOpen(false)}
                aria-label="Close"
                className="text-[#707070] text-[18px] leading-none px-[8px] py-[4px] rounded-full hover:bg-[#f5f5f5] transition-colors"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] w-full">
              <div className="flex flex-col gap-[10px]">
                <label className="font-['Inter:Medium',sans-serif] text-[13px] text-[#222]">Full Name</label>
                <input
                  required
                  value={profileForm.fullName}
                  onChange={(e) => setProfileForm((prev) => ({ ...prev, fullName: e.target.value }))}
                  className="rounded-[10px] border border-[#e5e7eb] bg-[#f9fafc] px-[14px] py-[12px] text-[14px] text-[#222] outline-none focus:border-[#1a40e8] focus:ring-2 focus:ring-[#1a40e8]/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label className="font-['Inter:Medium',sans-serif] text-[13px] text-[#222]">School</label>
                <input
                  required
                  value={profileForm.school}
                  onChange={(e) => setProfileForm((prev) => ({ ...prev, school: e.target.value }))}
                  className="rounded-[10px] border border-[#e5e7eb] bg-[#f9fafc] px-[14px] py-[12px] text-[14px] text-[#222] outline-none focus:border-[#1a40e8] focus:ring-2 focus:ring-[#1a40e8]/20 transition-all"
                  placeholder="e.g. Don Bosco Prep"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] w-full">
              <div className="flex flex-col gap-[10px]">
                <label className="font-['Inter:Medium',sans-serif] text-[13px] text-[#222]">Grade</label>
                <input
                  required
                  value={profileForm.grade}
                  onChange={(e) => setProfileForm((prev) => ({ ...prev, grade: e.target.value }))}
                  className="rounded-[10px] border border-[#e5e7eb] bg-[#f9fafc] px-[14px] py-[12px] text-[14px] text-[#222] outline-none focus:border-[#1a40e8] focus:ring-2 focus:ring-[#1a40e8]/20 transition-all"
                  placeholder="e.g. 11"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label className="font-['Inter:Medium',sans-serif] text-[13px] text-[#222]">Email</label>
                <input
                  type="email"
                  required
                  value={profileForm.email}
                  onChange={(e) => setProfileForm((prev) => ({ ...prev, email: e.target.value }))}
                  className="rounded-[10px] border border-[#e5e7eb] bg-[#f9fafc] px-[14px] py-[12px] text-[14px] text-[#222] outline-none focus:border-[#1a40e8] focus:ring-2 focus:ring-[#1a40e8]/20 transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] w-full">
              <div className="flex flex-col gap-[10px]">
                <label className="font-['Inter:Medium',sans-serif] text-[13px] text-[#222]">Phone Number</label>
                <input
                  value={profileForm.phone}
                  onChange={(e) => setProfileForm((prev) => ({ ...prev, phone: e.target.value }))}
                  className="rounded-[10px] border border-[#e5e7eb] bg-[#f9fafc] px-[14px] py-[12px] text-[14px] text-[#222] outline-none focus:border-[#1a40e8] focus:ring-2 focus:ring-[#1a40e8]/20 transition-all"
                  placeholder="(xxx) xxx-xxxx"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label className="font-['Inter:Medium',sans-serif] text-[13px] text-[#222]">iCal (.ics) URL</label>
                <input
                  value={profileForm.icalUrl}
                  onChange={(e) => setProfileForm((prev) => ({ ...prev, icalUrl: e.target.value }))}
                  className="rounded-[10px] border border-[#e5e7eb] bg-[#f9fafc] px-[14px] py-[12px] text-[14px] text-[#222] outline-none focus:border-[#1a40e8] focus:ring-2 focus:ring-[#1a40e8]/20 transition-all"
                  placeholder="https://example.com/calendar.ics"
                />
              </div>
            </div>
            <div className="flex gap-[12px] justify-end pt-[4px]">
              <button
                type="button"
                onClick={() => setProfileFormOpen(false)}
                className="px-[14px] py-[10px] rounded-[10px] border border-[#e5e7eb] text-[14px] text-[#222] hover:bg-[#f5f7fb] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-[14px] py-[10px] rounded-[10px] bg-[#1a40e8] text-white text-[14px] shadow-[0_8px_20px_rgba(26,64,232,0.25)] hover:shadow-[0_10px_22px_rgba(26,64,232,0.32)] transition-all"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default function V1Dashboard() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DashboardContent />
    </DndProvider>
  );
}
