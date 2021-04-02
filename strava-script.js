const strava = require("strava-v3");
const jsonfile = require("jsonfile");
const dataFile = './_data/last-activities.json'

require("dotenv").config({ path: __dirname + "/.env" });

if(!process.env.STRAVA_CLIENT_ID){
    console.error('no strava env')
    return
}

strava.config({
  access_token: "blank",
  client_id: process.env.STRAVA_CLIENT_ID,
  client_secret: process.env.STRAVA_CLIENT_SECRET,
  redirect_uri: "http://localhost",
});

const refreshToken = process.env.STRAVA_REFRESH_TOKEN;

const getLastActivities = async () => {
  // get using the refresh token as we cannot save the token

  let activities = [];
  try {
    const newToken = await strava.oauth.refreshToken(refreshToken);
    activities = await strava.athlete.listActivities({
      access_token: newToken.access_token,
      per_page: 1,
      page: 1,
    });
  } catch (error) {
    console.error("failed to get activities", error);
  }

  return activities;
};

(async function() {
  const activities = await getLastActivities();

  const {
    id,
    type,
    start_date,
    start_date_local,
    distance,
    elapsed_time,
    visibility,
  } = activities[0];

  // lets only put public activities onto github
  if (visibility !== "everyone") {
    return;
  }

  const activity = {
    id,
    type,
    start_date,
    start_date_local,
    distance,
    elapsed_time,
    visibility,
  };

  // I want to write if its a new activity or its a different activity type
  try {
    const existing = await jsonfile.readFile(dataFile);
    console.log('thing')
    const sameType = existing.find((a) => a.type === type);
    if (sameType && sameType.id !== id) {
      // so now we know its a new activity of same type
      jsonfile.writeFileSync(dataFile, [
        ...existing.filter((a) => a.id !== id),
        activity,
      ]);
      return;
    } else if (sameType.id !== id) {
      // its a new type yay not just running
      jsonfile.writeFileSync(dataFile, [
        ...existing,
        activity,
      ]);
      return;
    } else {
      // nothing new
      return;
    }
  } catch (error) {
    // no worries no file yet
    jsonfile.writeFileSync(dataFile, [activity]);
  }
  return;
})();
