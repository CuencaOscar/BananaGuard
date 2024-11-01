import {exec} from 'child_process';

exec('eslint . --ext .js,.jsx,.ts,.tsx', (error, stdout, stderr) => {
  if (error) {
    console.log('ESLint found issues in the following files:');
    console.log(stderr || stdout);
  } else {
    console.log('✨ Linting passed with no issues! ✨');
  }
});
