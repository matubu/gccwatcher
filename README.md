# gccwatcher
Watch change in `.c` `.cpp` `.h` `.hpp` and `Makefile` and will recompile and relaunch the executable using the `run command` from your `Makefile`

Install `deno` and `gccwatcher`:
```bash
curl -fsSL https://deno.land/install.sh | sh && curl https://raw.githubusercontent.com/matubu/gccwatcher/main/gccwatcher.js > ~/gccwatcher.js
```

Add this to your `Makefile`:
```Makefile
watch:
	@~/.deno/bin/deno run --allow-read --allow-run ~/gccwatcher.js $$(pwd)
run: all
	./$(NAME) # launch the executable
```
