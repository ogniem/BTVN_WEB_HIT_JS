const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
  ];
  remove(1);

  function show(users){
      console.log(users);
  }
  function add(users, newUser){
    users.push(newUser);

  }
  function remove(users,id){
         for(var i=0; i<users.length;i++){
                if(id == users[i].id) users.splice(i,1);
         }
               console.log(users);
  }
  function updateUser(id, newname, newage, newgender, newmoney){
    for(let i=0; i<users.length; i++){
        if(users[i].id===id){
            users[i].name=newname;
            users[i].age=newage;
            users[i].gender=newgender;
            users[i].money=newmoney;
        }
    }
}
  const newUser1 = { id: 5, name: "Ogniem", age: 16, gender: "female", money: 1111};
  const newUser2 = { id: 6, name: "Thao", age: 29, gender: "male", money: 8868};

  add(users,newUser1);
  add(users,newUser2);

  function countGenderAndAge(users){
      var element1=0;
      var element2=0;
      for(var i=0; i<users.length;i++){
          if(users[i].gender=="male") element1++;
          if(users[i].age>15) element2++;
      }
      console.log("Có "+element1+" nam");
      console.log("Có "+element2+" người có tuổi lớn hơn 15");
  }

function totalMoney(users){
    var sum=0;
    for(var i=0; i<users.length; i++){
        if(users[i].id%2==0) sum+=users[i].money;
    }
    console.log("Tổng tiền những người có id chẵn là: "+sum);
}

function richAndPoor(users){
    var richMax=users[0].money;
    var poorMax=users[0].money;
    for(var i=0; i<users.length;i++){
        if(users[i].money>richMax) richMax=users[i].money;
        if(users[i].money<poorMax) poorMax= users[i].money;
    }
    for(var i=0; i<users.length;i++){
        if(users[i].money==richMax) console.log(users[i].name+" là người giàu nhất");
        if(users[i].money==poorMax) console.log(users[i].name+" là người nghèo nhất");
    }
}

function convertGender(users){
    for(var i=0; i<users.length;i++)
    if(users[i].gender=="male")  users[i].gender="female";
    
}

  countGenderAndAge(users);
  totalMoney(users);
  richAndPoor(users);
  convertGender(users);
  updateUser(2,'Mei',16,'female',11111);
  show(users);