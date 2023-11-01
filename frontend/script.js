document.getElementById('getDataButton').addEventListener('click', addPosts);

function addPosts () {

   //fetch('http://localhost:5600/api/carre', {
   //fetch('http://localhost:8080/backend/api/carre', {
   fetch('/backend/api/carre', {
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