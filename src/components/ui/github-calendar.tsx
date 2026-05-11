import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GitHubIcon } from '../../assets/GitHubIcon';
import { cn } from '../../lib/utils';

interface ContributionDay {
  color: string;
  contributionCount: number;
  contributionLevel:
    | 'NONE'
    | 'FIRST_QUARTILE'
    | 'SECOND_QUARTILE'
    | 'THIRD_QUARTILE'
    | 'FOURTH_QUARTILE';
  date: string;
}

interface GithubContributionData {
  contributions: ContributionDay[][];
  totalContributions: number;
}

interface GithubCalendarProps {
  username: string;
  variant?: 'default' | 'minimal';
  shape?: 'square' | 'rounded' | 'circle' | 'squircle';
  className?: string;
  showTotal?: boolean;
  /** Nombre de mois affichés (à partir d’aujourd’hui, en prenant les semaines les plus récentes). */
  monthsToShow?: number;
}

/** Une seule palette : couleurs terminal du design system (`src/index.css`). */
const heatmapLevels = {
  level0: 'bg-terminal-border-secondary/50',
  level1: 'bg-terminal-text-secondary/50',
  level2: 'bg-terminal-text-secondary',
  level3: 'bg-terminal-text-primary/50',
  level4: 'bg-terminal-text-primary',
} as const;

function getLevelClass(level: string) {
  const s = heatmapLevels;
  switch (level) {
    case 'FIRST_QUARTILE':
      return s.level1;
    case 'SECOND_QUARTILE':
      return s.level2;
    case 'THIRD_QUARTILE':
      return s.level3;
    case 'FOURTH_QUARTILE':
      return s.level4;
    case 'NONE':
    default:
      return s.level0;
  }
}

function sumWeeksContributions(weeks: ContributionDay[][]) {
  return weeks.reduce(
    (acc, week) => acc + week.reduce((a, d) => a + d.contributionCount, 0),
    0,
  );
}

/** ~52 semaines / 12 mois — nombre de colonnes « semaine » pour le créneau demandé. */
function weeksForMonths(months: number) {
  return Math.max(1, Math.round((months * 52) / 12));
}

function getShapeClass(shape: string) {
  switch (shape) {
    case 'circle':
      return 'rounded-full';
    case 'square':
      return 'rounded-none';
    case 'squircle':
      return 'rounded-sm'; // Approximation
    case 'rounded':
    default:
      return 'rounded-[2px]';
  }
}

export function GithubCalendar({
  username,
  variant = 'default',
  shape = 'rounded',
  className,
  showTotal = true,
  monthsToShow = 6,
}: GithubCalendarProps) {
  const [data, setData] = React.useState<GithubContributionData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [fetchError, setFetchError] = React.useState<string | null>(null);
  const [hoveredDate, setHoveredDate] = React.useState<string | null>(null);
  const [hoveredCount, setHoveredCount] = React.useState<number | null>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setFetchError(null);
        setLoading(true);
        const response = await fetch(`https://github-contributions-api.deno.dev/${username}.json`);
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data');
        }
        const jsonData = (await response.json()) as GithubContributionData;
        setData(jsonData);
      } catch (err) {
        setFetchError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      void fetchData();
    }
  }, [username]);

  if (fetchError) {
    return (
      <div
        className={cn(
          'rounded-lg border border-terminal-border-secondary bg-terminal-bg-secondary p-4 font-mono text-sm text-terminal-text-muted',
          className,
        )}
      >
        Erreur : {fetchError}
      </div>
    );
  }

  if (loading) {
    return (
      <div
        className={cn(
          'h-32 w-full animate-pulse rounded-xl bg-terminal-bg-primary/80',
          className,
        )}
      />
    );
  }

  const allWeeks = data?.contributions ?? [];
  const spanWeeks = weeksForMonths(monthsToShow);
  const weeks = allWeeks.slice(-spanWeeks);
  const displayedTotal = sumWeeksContributions(weeks);

  return (
    <div className={cn('flex w-max max-w-full flex-col gap-4', className)}>
      {showTotal && (
        <div className="flex gap-2 md:items-center flex-col md:flex-row">
          <div className="flex items-center gap-2">
            <GitHubIcon
              aria-hidden
              className="h-4 w-4 shrink-0 text-terminal-text-secondary"
            />
            <span className="text-sm font-semibold text-terminal-text-primary">@{username}</span>
          </div>
          <span className="text-sm text-terminal-text-muted">
            {displayedTotal} contributions sur les {monthsToShow} derniers mois
          </span>
        </div>
      )}

      <div
        className="relative flex w-max max-w-full flex-nowrap gap-[3px]"
        onMouseLeave={() => {
          setHoveredDate(null);
          setHoveredCount(null);
        }}
      >
        {/* Simple Tooltip */}
        <AnimatePresence>
          {hoveredDate && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-none absolute z-50 rounded-md border border-terminal-border-secondary bg-terminal-bg-primary px-3 py-1.5 text-xs whitespace-nowrap text-terminal-text-primary shadow-[0_0_12px_var(--shadow-button-glow-inset)]"
              style={{
                left: mousePos.x,
                top: mousePos.y - 40,
                transform: 'translateX(-50%)',
              }}
            >
              <span className="mr-1 font-bold text-terminal-text-primary">{hoveredCount}</span>
              <span className="text-terminal-text-muted">contributions on {hoveredDate}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {weeks.map((week, weekIndex) => (
          <div
            key={week[0]?.date ?? `week-${weekIndex}`}
            className="flex w-[14px] flex-col gap-[3px]"
          >
            {week.map((day, dayIndex) => {
              const isMinimal = variant === 'minimal';
              const shapeClass = getShapeClass(shape);

              return (
                <motion.div
                  key={day.date}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: weekIndex * 0.01 + dayIndex * 0.01,
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    setHoveredDate(day.date);
                    setHoveredCount(day.contributionCount);
                    const rect = e.currentTarget.getBoundingClientRect();
                    const parentRect = e.currentTarget.offsetParent!.getBoundingClientRect();
                    setMousePos({
                      x: rect.left - parentRect.left + rect.width / 2,
                      y: rect.top - parentRect.top,
                    });
                  }}
                  className={cn(
                    'aspect-square w-full transition-colors duration-200',
                    getLevelClass(day.contributionLevel),
                    shapeClass,
                    isMinimal && 'scale-75 rounded-full',
                  )}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
