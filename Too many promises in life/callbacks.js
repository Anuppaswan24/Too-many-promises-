const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'post Two', body: 'This is post two'}
];
   
function getPosts(){

      setTimeout(() => {
        let output = '';
        for( let i=0; i< posts.length; i++){
        output += `<li> ${posts[i].title} </li>`;
       };
          document.body.innerHtml = output;
        }, 1000);
      }

    function createPost(post){
      return new Promise((resolve,reject) => {
        setTimeout( () => {
          posts.push(post); 

          const error = false;

          if(!error){
            resolve();
          }else{
            reject('Error: Something went wrong');
          }
        },2000)
      })
    }
  

    function deletePost(){
       return new Promise((resolve,reject) => {
         setTimeout( () => {
    
             if(posts.value !== 0){
               resolve(posts.pop()); }

      else{
        reject('Array is empty now');
      }
     
  },1000);
}) ;
}  

     
    
    createPost({ title: 'post three', body: 'This is post three'})
      .then(() => {
        getPosts()
        deletePost().then(() => {
          getPosts();
        })
        .catch(err => console.log(err))
        deletePost().then(() => {
          console.log(posts)
        })
      })
