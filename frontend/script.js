document.getElementById('getDataButton').addEventListener('click', addPosts);

function addPosts () {
   fetch('http://127.0.0.1:5000/api/carre', {
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
   })
   .catch((err) => {
      console.log(err.message);
   });
   };