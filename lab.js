// Part 1: Growing Pains


// const PI = 3.1415;
// const area = PI * radius * radius;

// const maxPlants = Math.floor(gardenArea / plantSpace);



// let x=10;
// let y=5;

// { let z=x+y;
//     console.log(z);
// }

// {
//     var x = 1;
//     {
//       var x = 2;  // same variable!
//       console.log(x);  // 2
//     }
//     console.log(x);  // 2
//   }
  
//   {
//     let x = 1;
//     {
//       let x = 2;  // different variable
//       console.log(x);  // 2
//     }
//     console.log(x);  // 1
//   }

//   let x = 10;
// {
// 	let y = 5;
// 	{
// 		let z = x + y;
// 		console.log(z);
// 	}
// }

// let x = 0.5;

// if (x > 0)
// 	console.log('Positive!');
// else
// 	console.log('Negative.');


    // let x = 5;

    // if (x > 0)
    //     console.log('Positive!');
    //     x++;
    // else
    //     console.log('Negative.');
    //     x--;

// change the 10 to any number to print that many times
// for (let i = 1; i <= 10; i++) {
//     console.log("I Must Not Tell Lies!")
//           }
//change the first 5 to any number and the second 5 to another number to skip it
for (let i = 0; i < 10; i++) {
    if (i == 8) {
    continue;
}
    console.log(i);
}