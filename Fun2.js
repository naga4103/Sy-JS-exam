//We can create dynamic parameters using rest operator. It packs the arguments in the form of an array

function dynamicParams(...params) {
  console.log(params);
}
dynamicParams(1, 2, 3, 4);
