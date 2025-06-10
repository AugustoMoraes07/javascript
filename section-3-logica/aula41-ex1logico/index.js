//  let num1 = Math.random() * (10-5) * 1;
//  let num2 = Math.random() * (10-5) * 1;

//  num1 = Math.round(num1);
//  num2 = Math.round(num2);

// function isBiggerNum(n1,n2){
//     const maior = n1>n2 ? n1:n2;
//     return `Comparando o número ${n1} e ${n2}, cheguei a conclusão que o maior é o ${maior}.`;
// }

// console.log(isBiggerNum(num1,num2));

const max = (x,y) => x>y?x:y;

console.log(max(10,20));