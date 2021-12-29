# gccwatcher
Watch change in `.c` `.cpp` `.h` `.hpp` and `Makefile` and will recompile and relauch the executable using the `run command` from your `Makefile`

Install `deno` and `gccwatcher`
```bash
curl -fsSL https://deno.land/install.sh | sh && curl https://raw.githubusercontent.com/matubu/gccwatcher/main/watchgcc.js > ~/gccwatcher.js
```

Add this to your `Makefile`
```Makefile
watch:
	@deno run --allow-read --allow-run ~/watchgcc.js $$(pwd)
run: all
	launch the executable
```
