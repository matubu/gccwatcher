const	watcher = Deno.watchFs([Deno.args[0]])
let		process = Deno.run({ cmd: ["make", "run", "-C", Deno.args[0]] })
let		regex = Deno.args[1] ? RegExp(Deno.args[1]) : /(\.(c|h)(pp)?|(\/|^)Makefile)$/

for await (const e of watcher)
{
	if (e.paths.some(file => regex.test(file)))
	{
		Deno.run({ cmd: ["kill", process.pid] });
		process = Deno.run({ cmd: ["make", "run", "-C", Deno.args[0]] })
	}
}
