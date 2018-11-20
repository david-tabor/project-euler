<script>
// https://js.do/samples/hello-world 

let n = 20 
let max = 999999999
let flag = 1

for (var i = n; i<=max; i++) {
	flag=1
	for (var j = 2; j<=n; j++) {
		if (i%j!=0) { flag=0}
	} 
    if (flag==1) {document.write(i, " ")}
}
  
  
</script>