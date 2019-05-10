var exec = require('child_process').exec;
var path = require('path');

var themeFolder = path.join(path.resolve('.'), 'themes');
var oldTheme = path.join(themeFolder, 'learner');

console.log('Updating...');
exec('mv '+oldTheme+' '+oldTheme+'-old-'+Date.now(), function(error, stdout, stderr) {
  if (error !== null) {
    console.error('Error saving old Learner version.');
    return;
  }
  exec ('svn export https://github.com/pearson-ux/learner/trunk/themes/learner '+oldTheme, function(error, stdout, stderr) {
    if (error !== null) {
      console.error('SVN error exporting learner from Github. Is SVN installed?');
      return;
    }
    console.log('Learner updated to latest version!');
  });
});