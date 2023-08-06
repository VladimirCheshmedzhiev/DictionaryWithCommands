function combineAndPrintDictionary(input) {
    let combinedObj = {};
    for (let jsonString of input) {
      let obj = JSON.parse(jsonString);
      for (let [key, value] of Object.entries(obj)) {
        combinedObj[key] = value;
      }
    }
  
    const sortedKeys = Object.keys(combinedObj).sort();
  

    for (let term of sortedKeys) {
      let definition = combinedObj[term];
      console.log(`Term: ${term} => Definition: ${definition}`);
    }
  }
  
  const input = [
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
  ];
  
  combineAndPrintDictionary(input);
  