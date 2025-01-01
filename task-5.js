function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  let result = getRndInteger(10,20)
  console.log(result);