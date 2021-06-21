# map-limit-swc-vs-tsc

## tsc
```
$ npm run start:tsc

p-limit: start
10
20
30
40
50
[ 20, 40, 60, 80, 100 ]
p-limit: finish
async: start
10
20
30
40
50
[ 20, 40, 60, 80, 100 ]
async: finish
```

## swc
```
$ npm run start:swc

p-limit: start
10
20
30
40
50
[ 20, 40, 60, 80, 100 ]
p-limit: finish
async: start
10
20
```

???
