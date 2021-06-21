import delay from 'delay';
import async from 'async';
import pLimit from 'p-limit';

async function main() {
	console.log('p-limit: start');
	await execute_plimit();
	console.log('p-limit: finish');

	console.log('async: start');
	await execute_async();
	console.log('async: finish');
}

const concurrency = 2;
const items = [10, 20, 30, 40, 50];
async function transform(i: number) {
	console.log(i);
	await delay(100);
	return i * 2;
}

async function execute_async() {
	const results = await async.mapLimit<number, number>(items, concurrency, transform);
	console.log(results);
}

async function execute_plimit() {
	const limit = pLimit(concurrency);
	const tasks = items.map(x => limit(() => transform(x)));
	const results = await Promise.all(tasks);
	console.log(results);
}


main().then(() => { /* */ }).catch(e => console.error(e));
