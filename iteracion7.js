const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];


  function finderName(array, param) {
    for(let i=0; i<param.length; i++){
        if(array.includes(param)){
            return console.log(true, array.indexOf(param));
        }else{
            return console.log(false);
        }
    }
  }

  finderName(nameFinder, "Marc");