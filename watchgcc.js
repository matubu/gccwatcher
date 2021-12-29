const	watcher = Deno.watchFs([Deno.args[0]]);
let		process = Deno.run({ cmd: ["make", "run", "-C", Deno.args[0]] });

for await (const e of watcher)
{
	if (e.paths.some(file => /(\.(c|h)(pp)?|(\/|^)Makefile)$/.test(file)))
	{
		Deno.run({ cmd: ["kill", process.pid] });
		process = Deno.run({ cmd: ["make", "run", "-C", Deno.args[0]] });
	}
}
