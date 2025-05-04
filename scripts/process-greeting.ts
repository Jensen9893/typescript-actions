const greeting: string = process.env.GREETING || 'No greeting provided';
console.log(`Processed: ${greeting.toUpperCase()}!`);