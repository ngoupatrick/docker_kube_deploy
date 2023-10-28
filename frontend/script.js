document.getElementById('getDataButton').addEventListener('click', addPosts);

function addPosts () {
   //const api_key = process.env.api_key;
   //const another_key = process.env.another_key;
   


   fetch('http://127.0.0.1:5432/api/carre', {
   method: 'POST',
   body: JSON.stringify({
      value: document.getElementById('quantity').value,
   }),
   headers: {
      'Content-type': 'application/json; charset=UTF-8',
   },
   })
   .then((response) => response.json())
   .then((data) => {
      console.log(data);
      //console.log('api_key'+api_key);
      //console.log('another_key'+another_key);
   })
   .catch((err) => {
      console.log(err.message);
   });
   };