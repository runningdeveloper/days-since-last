# Days Since Last Activity

__I wanted a page that tells me when I last ran.__

I am always trying to find ways to motivate me to get out and run. Making this webpage open on a new tab page might help me. Also if its very public and open family/friends could quickly nag me about how long it's been since I ran.

This is inspired by those boards you see at mines or factories with DAYS SINCE LAST INJURY.

## Idea

The basic idea is to use a github action to fire a request to Strava everyday and then build a static page with the days since last run.

I'm making it so I can choose another default sport. So other people that prefer cycling could also use this.

## How to use

Still need work out all the steps and add it here. Roughly it would be something like:
- Fork the project
- Get the Strava tokens for yourself
- Customize the default settings
- The you would have your own version

## Privacy

Your activities will be public but thats the idea. The script does skip activities that are not public.

People can already go to your Strava and see your public activities but this makes it a lot easier.

## Tech

### Eleventy with liquid templates

Wanted a light static site generator for this. Liquid templates seem good and I like Shopify.

### Sweet Digit font

Found it here I think its cool [https://github.com/keshikan/DSEG](https://github.com/keshikan/DSEG)