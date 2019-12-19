'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(require('prerender-node')
	// don't forget to put token here
		.set('prerenderToken', 'token')
		.set('forwardHeaders', true)
);

app.get('*', function (req, res, next) {
    res.sendFile(path.resolve('./index.html'));
});

app.listen(3000);

console.log(`Running on http...`);