const addPosts = async (title, body) => {
   await fetch('http://192.168.1.4:5000/api/carre', {
   method: 'POST',
   body: JSON.stringify({
      value: 4,
   }),
   headers: {
      'Content-type': 'application/json; charset=UTF-8',
   },
   })
   .then((response) => response.json())
   .then((data) => {
      setPosts((posts) => [data, ...posts]);
      setTitle('');
      setBody('');
   })
   .catch((err) => {
      console.log(err.message);
   });
   };