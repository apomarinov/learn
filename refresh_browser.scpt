# requires fswatch
# run:
# fswatch -0 ./resources | xargs -0 -n1 -I{} osascript refresh_browser.scpt DOMAIN_NAME

on run argv
  tell application "Google Chrome" to reload (tabs of window 1 whose URL contains item 1 of argv)
end run