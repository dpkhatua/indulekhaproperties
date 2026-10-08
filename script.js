(function(){
  try{
    var s=new Date(2022,7,10),n=new Date();
    var m=(n.getFullYear()-s.getFullYear())*12+(n.getMonth()-s.getMonth());
    if(n.getDate()<s.getDate())m--;
    var y=Math.floor(m/12),r=m%12;
    var t=y+(y===1?" year":" years")+(r?" "+r+(r===1?" month":" months"):"");
    document.getElementById("age").textContent=t;
  }catch(e){}
  var b=document.getElementById("copy"),a=document.getElementById("addr");
  b.addEventListener("click",function(){
    var txt=a.textContent.trim();
    function done(){b.textContent="Copied";setTimeout(function(){b.textContent="Copy address"},1800)}
    function fallback(){
      var r=document.createRange();r.selectNodeContents(a);
      var sel=window.getSelection();sel.removeAllRanges();sel.addRange(r);
      b.textContent="Address selected";setTimeout(function(){b.textContent="Copy address"},1800);
    }
    try{navigator.clipboard.writeText(txt).then(done,fallback)}catch(e){fallback()}
  });
})();
