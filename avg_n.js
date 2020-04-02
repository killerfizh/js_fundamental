function Avg(lst){
  temp = 0;
  res = 0;
for (var i=0; i<lst.length; i++){
  temp += lst[i];
}
  res += temp/lst.length
  console.log(res)
}
lst2 = []
var n = parseInt(window.prompt())
while (n<10){
for (var i=0; i<n-1; i++){
var a = parseInt(window.prompt())
lst2.push(a)  
}
}
Avg(lst2)
