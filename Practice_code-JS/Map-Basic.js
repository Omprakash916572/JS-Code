

let map = new Map();
map.set("IN" ,"India");
map.set("US" ,"USA");
map.set("PAK" ,"Pakistan");

console.log(map); //Map(3) { 'IN' => 'India', 'US' => 'USA', 'PAK' => 'Pakistan' }

for(let data of map){
    console.log(data);

} 

// Output [ 'IN', 'India' ]
//[ 'US', 'USA' ]
//[ 'PAK', 'Pakistan' ]

for(let [key,value] of map){
    console.log(key +"-"+ value);

}
// IN-India
//US-USA
//PAK-Pakistan