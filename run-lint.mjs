import {exec} from 'child_process';

exec('eslint . --ext .js,.jsx,.ts,.tsx --quiet', (error, stdout, stderr) => {
  if (error) {
    console.log(`ESLint found issues:\n${stderr}`);
  } else {
    console.log('✨ Linting passed with no issues! ✨');
  }
});
