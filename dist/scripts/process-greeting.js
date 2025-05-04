"use strict";
const greeting = process.env.GREETING || 'No greeting provided';
console.log(`Processed: ${greeting.toUpperCase()}!`);
