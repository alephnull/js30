Extract just the video times with 

```
perl -lne 'print $1 if /data-time=("\d+:\d+")/' index.html
```

Do the remaining formatting in Emacs.
