#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue.bold("\n\t Welcome to Saman Currency Converter.\n"));
// DEFINE THE CURRENCIES AND EXCHANGE RATES
let exchange_rate = {
    "USD": 1,
    "EUR": 0.85,
    "GBP": 0.75,
    "JPY": 120,
    "CNY": 6.8,
    "AUD": 1.3,
    "CAD": 1.3,
    "CHF": 0.95,
    "HKD": 7.75,
    "SGD": 1.35,
    "PKR": 277.70,
};
// Prompt the user to select answer
let user_answer = await inquirer.prompt([
    {
        type: 'list',
        name: 'from_currency',
        message: chalk.yellow('What currency do you want to convert from?'),
        choices: ['USD', 'EUR', 'GBP', 'JPY', 'CNY', 'AUD', 'CAD', 'CHF', 'HKD', 'SGD', 'PKR']
    },
    {
        type: 'list',
        name: 'to_currency',
        message: chalk.yellow('What currency do you want to convert to?'),
        choices: ['USD', 'EUR', 'GBP', 'JPY', 'CNY', 'AUD', 'CAD', 'CHF', 'HKD', 'SGD', 'PKR']
    },
    {
        type: 'input',
        name: 'amount',
        message: chalk.yellow('How much amount do you want to convert?'),
    }
]);
// currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// display the rsult of converted amount
console.log(`Amount =${chalk.green(converted_amount.toFixed(2))}`);
