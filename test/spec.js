var spec = {
  'unit': [
    'birds',
    'api'
  ]
};
Object.keys(spec).map(function(folder) {
  spec[folder].map(function(file) {
    var string = [
      '<script src="',
      folder,
      '/',
      file,
      '.js" type="text/javascript" ></script>'
    ];
    document.write(string.join(''));
  });
});
