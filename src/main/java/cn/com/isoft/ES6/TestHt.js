/**
 * 解构赋值
 */

let obj = {
	"sucess": true,
	"msg": "",
	"result": [
		{"name": "ht", "age": 10},
		{"name": "ht2", "age": 102}
	]
}


let {sucess, msg, result} = obj;

// console.log(sucess);
// console.log(msg);
// console.log(result);

/**
 * Map
 */
console.log("========== Map ==========");

let map = new Map();
map.set("1", 1);
map.set("12", 12);
map.set("13", 13);
// 1. 遍历map	map
for (let [key, value] of map) {
	console.log(JSON.stringify(key + "--" + value));
}

// 2. 遍历map	map.entries()
for (let [key, value] of map.entries()) {
	console.log(JSON.stringify(key + "--" + value));
}

// 3. 遍历map	map.forEach({})
map.forEach((key, value) => {
	console.log(JSON.stringify(key + "--" + value));
})

// 4. 获取所有key	map.keys()
for (let key of map.keys()) {
	console.log(JSON.stringify(key));
}

// 5. 获取所有value	map.value()
for (let value of map.keys()) {
	console.log(JSON.stringify(value));
}

// 6. 将map转换成一个二维键值对数组	Array.from(Map)
let arr = Array.from(map);
console.log(arr);

// 7. Map 构造函数可以将一个 二维 键值对数组转换成一个 Map 对象
let arr2 = [["1", 1], ["11", 11], ["111", 111]];
let map2 = new Map(arr2);
console.log(map2);

/**
 * Set
 */
console.log("========== Set ==========");

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add("3");
mySet.add({"4": 4});
mySet.add({"4": 4});		// 对象之间引用不同不恒等，即使值相同，Set 也能存储
console.log(mySet);

// 类型转换
// 1. Set 转换 Array		用 ...操作符，将 Set 转 Array
let arr3 = [...mySet];
console.log(arr3);

let [a, b, c, {"4": d}, {"4": e}] = arr3;	// 解构赋值
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// 2. String 转 Set
let mySet2 = new Set("hello");
console.log(mySet2)		// { 'h', 'e', 'l', 'o' }

// Set 对象作用
// 1. 数组去重
let arr4 = [1,2,3,4,3];
let set = new Set(arr4);
console.log(set);

// 并集
let arr5 = [1,2,3];
let arr6 = [1,4,5];
let set2 = new Set([...arr5, ...arr6]);
console.log(set2);

// 交集

// 差集


/**
 * 字符串
 */



















