// for(let i = 2; i < 11; i++) {
// 	console.log(i);
// 	i++
// }  


//while
// let success = true;
// let cnt = 0;
// while(success) {
// 	console.log(cnt);
// 	cnt++;
// 	if(cnt > 10)
// 		success = false;
// }


//loose types
let cnt = 10;

let test = true;
while(test) {
	cnt--;
	console.log(cnt);
	if(cnt == 0)
	test = "false";
} 