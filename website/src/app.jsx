import Footer from "./footer";
import { useEffect, useState } from "preact/hooks";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";
import format from "date-fns/format";

const defaultActivity = import.meta.env.VITE_DEFAULT_ACTIVITY??'Run'

export function App(props) {
  const [activities, setActivities] = useState(null);

  useEffect(async () => {
    try {
      const myActivities = await fetch(
        "https://runningdeveloper.github.io/days-since-last/last-activities.json"
      ).then((response) => response.json());
      setActivities(myActivities);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const last = activities?.find(
    (a) => a.type === defaultActivity
  );

  const pad = (days) =>
    days < 1000 ? days.toString().padStart(3, "0") : "Err";

  const days = (activity) =>
    activity
      ? pad(
          differenceInCalendarDays(
            new Date(),
            new Date(activity.start_date_local)
          )
        )
      : "---";

  return (
    <>
      <main>
        <h1 class="title">
          <span class="title1">
            <span class="day-background">888</span>
          </span>
          <span class="title2">
            <span id="days">
              {days(last)}
              {/* {{
            activity.start_date | daysDiff | paddZeros
          }} */}
            </span>
          </span>
          <span class="title3">DAYS</span>
          <span class="title4">
            SINCE LAST {defaultActivity.toUpperCase()}
          </span>
        </h1>
        <p>
          Like at a mine or factory sign, except this is about exercise and
          LOWER is better.
        </p>

        <a
          id="strava-link"
          href="https://www.strava.com/activities/{{ activity.id }}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Last {defaultActivity} on{" "}
          {last && format(new Date(last?.start_date), "PPPP")}
          {/* {{ activity.start_date | date: "%a %e %B" }} */}
        </a>

        <h3>Other</h3>
        {activities && (
          <ul>
            {activities
              .filter((a) => a.type !== defaultActivity)
              .map((act) => (
                <li>
                  {days(act)} days since last {act.type} (
                  <a
                    id="strava-link"
                    href={`https://www.strava.com/activities/${act.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {act && format(new Date(act?.start_date), "PPPP")}
                  </a>
                  )
                </li>
              ))}
          </ul>
        )}
      </main>

      <Footer />
    </>
  );
}
