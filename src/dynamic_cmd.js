 const cmd = childProcess.spawn(`rollup -c ${path.join(__dirname, "rollup-lib.config.mjs")}  --bundleConfigAsCjs`, [], { shell: true });

  cmd.stdout.on('data', function (output) {
    console.log(output.toString());
  });

  cmd.on('close', function () {
    console.log('Finished');
  });

  //Error handling
  cmd.stderr.on('data', function (err) {
    console.log(err.toString());
    new Error(err.toString())
  });
