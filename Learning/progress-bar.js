const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', 200);

const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) clearInterval(timer)
}, 100)