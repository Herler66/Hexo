var spawn = require('child_process').exec;

//根据自己安装的hexo版本选择
// Hexo 2.x 复製这段
//hexo.on('new', function(path){
//spawn('start "" "H:\\Typora\\Typora.exe" ' + path);
//});

// Hexo 3 复製这段
hexo.on('new', function(data){
  spawn('start "" "H:\\Typora\\Typora.exe" ' + data.path);
});


