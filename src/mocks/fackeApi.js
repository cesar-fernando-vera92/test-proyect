
const product = 
[
    {'id': 1,'stock': 6,'title': 'Roles Datejust','price': 10.101,'image': 'https://cdn4.chrono24.com/images/topmodels/2846-alz5vjoi11mxlc54imf27mlj-Original.png?auto=compress&amp;h=305','category': 'rolex'},
    {'id': 2,'stock': 7,'title': 'OMEGA Speedmaster','price': 10.154,'image': 'https://cdn4.chrono24.com/images/topmodels/2875-7wlcl6ogfoc0qxg22ox6up9m-Original.png?auto=compress&amp;h=305','category': 'omega'},
    {'id': 3,'stock': 10,'title': 'AUDEMARS PIGUET','price': 7.545,'image': 'https://cdn4.chrono24.com/images/topmodels/1177-wugpfdlkkz5ie2od4y1w8rlm-Original.png?auto=compress&amp;h=305','category': 'audemars'},
    {'id': 4,'stock': 18,'title': 'HUBLOT Big Bang','price': 9.924,'image': 'https://cdn4.chrono24.com/images/topmodels/1065-ae2seivfjwbgqxgobd7rimxu-Original.png?auto=compress&amp;h=305','category': 'hublot'},
    {'id': 5,'stock': 3,'title': 'ROLEX Day-Date','price': 10.545,'image': 'https://cdn4.chrono24.com/images/topmodels/48-coj40rpfx8fwxs9h0nl1l5z5-Original.png?auto=compress&amp;h=305','category': 'rolexDay'},
    {'id': 6,'stock': 7,'title': 'TAG HEUER Carrera Calibre','price': 8.455,'image': 'https://cdn4.chrono24.com/images/topmodels/1023-knl4kmo66jmse324vzq1rit9-Original.png?auto=compress&amp;h=305','category': 'tag'},
    {'id': 7,'stock': 5,'title': 'OMEGA Speedmaster','price': 10.254,'image': 'https://cdn4.chrono24.com/images/topmodels/2875-7wlcl6ogfoc0qxg22ox6up9m-Original.png?auto=compress&amp;h=305','category': 'omega'},
    {'id': 8,'stock': 2,'title': 'AUDEMARS PIGUET','price': 7.514,'image': 'https://cdn4.chrono24.com/images/topmodels/1177-wugpfdlkkz5ie2od4y1w8rlm-Original.png?auto=compress&amp;h=305','category': 'audemars'},
  ]

  export const getData = new Promise((res, rej)=>{
    
   let condicion = true
   setTimeout(()=>{
     if(condicion){
       res(product)
     }else{
       rej('algo salio mal')
     }
   },3000)
 })
 