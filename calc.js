function display(val){
document.getElementById("dis").value+=val
}
function clr(c){
    document.getElementById("dis").value = c
    console.log("success")
}
function result() {
  const  x= document.getElementById("dis").value
    document.getElementById("dis").value = eval(x)
    
}
function keyboard(event) {if (event.key =='0'||event.key =='1'||event.key=='2'||
event.key =='3'||event.key =='4'||event.key=='5'||
event.key =='6'||event.key =='7'||event.key=='8'||
event.key =='9'||event.key =='.'||event.key=='+'||
event.key =='/'||event.key =='*'||event.key=='-') {
    document.getElementById("dis").value += event.key
} 
}