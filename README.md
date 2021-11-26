# Days Since Last Activity

FYI - this works I make it open on every new tab and it helps with motivation.

__I wanted a page that tells me when I last ran.__

I am always trying to find ways to motivate myself to get out and run. Making this webpage open on a new tab page might help me. Also if its very public and open family/friends could quickly nag me about how long it's been since I ran.

This is inspired by those boards you see at mines or factories with DAYS SINCE LAST INJURY.

## Idea

The basic idea is to use a github action to fire a request to Strava everyday and then build a static page with the days since last run.

I'm making it so I can choose another default sport. So other people that prefer cycling could also use this.

## How to use

Still need work out all the steps and add it here. Roughly it would be something like:
- Fork the project
- Get the Strava tokens for yourself - need to add some docs on this
- Customize the default settings - default sport
- The you would have your own version, either trigger a build every hour or use a strava webhook to trigger only after you do an activity

## Privacy

Your activities will be public but thats the idea. The script does skip activities that are not public.

People can already go to your Strava and see your public activities but this makes it a lot easier.

## Tech

Using a cloudflare worker to trigger the build from a strava webhook - will open source code or do a blog post soon.

Switching the website to vite so I can use react. Partly to experience the start learning vite and react is my jam.

### Sweet Digit font

Found it here I think its cool [https://github.com/keshikan/DSEG](https://github.com/keshikan/DSEG)