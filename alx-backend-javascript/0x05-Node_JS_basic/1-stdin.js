/**
 * display the message Welcome to Holberton School, what is your name?
 * followed by a new line)
 * The user should be able to input their name on a new line
 * The program should display Your name is: INPUT
 * When the user ends the program, it should display This
 * important software is now closing (followed by a new line)
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const inp = process.stdin.read();
  if (inp !== null) {
    process.stdout.write(`Your name is: ${inp}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
