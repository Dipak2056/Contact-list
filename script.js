const   apiurl= 'https://randomuser.me/api/?';
const listElm = document.querySelector('#list');
let userArgs = [];
const displayUSers = (args = userArgs) =>{
let str = '';
    args.map((usr)=>{
        str += ` <div class="col-md-6 col-lg-3 py-3">
        <div class="card " style="min-width: 18rem;">
            <img src="${usr.picture.large}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">
              ${usr.name.title}
              ${usr.name.first}
              ${usr.name.last}
              </h5>
              <p class="card-text">
              <ul class="list-unstyled">

  
    <li>
    <span class="deco">
    <i class="fa-solid fa-mobile"></i></span> ${usr.phone}
    </li>
    <li>
    <span class="deco">
    <i class="fa-solid fa-calendar"></i></span> ${usr.email}
    </li>
    <span class="deco">
    <i class="fa-solid fa-map"></i></span> ${usr.dob.date}
    </li>
   
</ul>
              
              </p>
            </div>
          </div>
    </div>
    `
    })
  
listElm.innerHTML = str;

}
const fetchUsers = (params = 'results=20') => {
fetch(apiurl+params).then(respose =>respose.json())
    .then(data => {
            userArgs = data.results;
        displayUSers()

    });
}

fetchUsers();
//on changing the value on the select box
const handleonchange = (e) => {
    const params = "results=20&gender="+e.value;
   fetchUsers(params);

}

const handleOnSearch = () => {
    const spanshow = document.getElementById('result');
    spanshow.className = 'd-block toggle'
 const searchStr = document.getElementById('search').value;
    const filteredUser = userArgs.filter(item => {
        const userName = `${item?.name.first} ${item?.name.last}`
        if(userName.toLocaleLowerCase().includes(searchStr.toLocaleLowerCase())){
            return item;
        }

    });
    displayUSers(filteredUser);
     total = filteredUser.length;
     console.log(total);
     document.getElementById('foundnumber').innerText = total;
}
