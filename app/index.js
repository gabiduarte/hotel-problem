const rl = require('readline');

const prompts = rl.createInterface({
	input: process.stdin,
	output: process.stdout
});

prompts.question("Insira o tipo de cliente e o range de datas", (answer) => {
	prompts.close();
});




