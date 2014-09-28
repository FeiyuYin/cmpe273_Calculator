      function randomCalCalls_1000(){
       var opers = ["+", "-", "*", "/"];
       var p1 = Math.floor(Math.random() * 10) + 1;
       var p2 = Math.floor(Math.random() * 10) + 1;
       var oper = opers[Math.floor(Math.random() * 3) + 1];
       var query = "http://127.0.0.1:3000/calculator/?oper=" + oper + "&p1=" + p1 + "&p2=" + p2;
       document.getElementById("request_1000").href = query;
       console.log(query);}