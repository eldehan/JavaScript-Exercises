function popIt(stack) {
  if (stack.length === 0) {
    throw 'Error 8080: attempted to POP from empty stack.';
  } else {
    return stack.pop();
  }
}

function tokenError(command) {
  throw `Error 8088: token '${command} not found in instruction set.`;
}

function minilang(commandsString) {
  let stack = [];
  let register = 0;

  let commands = commandsString.split(' ');

  commands.forEach(command => {
    switch (command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += popIt(stack);
        break;
      case 'SUB':
        register -= popIt(stack);
        break;
      case 'MULT':
        register *= popIt(stack);
        break;
      case 'DIV':
        register = Math.round(register / popIt(stack));
        break;
      case 'REMAINDER':
        register %= popIt(stack);
        break;
      case 'POP':
        register = popIt(stack);
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        if (/^(-)*\d$/.test(command)) {
          register = Number(command);
        } else {
          tokenError(command);
        }
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)