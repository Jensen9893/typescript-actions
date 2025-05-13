// const greeting = process.env.GREETING || 'No greeting provided';
// console.log(`Processed: ${greeting.toUpperCase()}!`);
export function processGreeting(): string {
    const greeting = process.env.GREETING ?? 'Default Greeting';
    return `Processed greeting: ${greeting}`;
  }
  
  if (require.main === module) {
    console.log(processGreeting());
  }