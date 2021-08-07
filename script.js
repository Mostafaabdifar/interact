let clients = [{
    "avatar": "/avatar/av1.jpg",
    "text": '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
    "name": "- John Doe"
  },
  {
    "avatar": "/avatar/av2.jpg",
    "text": '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
    "name": "- Johnathan Doe"
  },
  {
    "avatar": "/avatar/av3.jpg",
    "text": '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
    "name": "- John Doe"
  },
  {
    "avatar": "/avatar/av4.jpg",
    "text": '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
    "name": "- Johnathan Doe"
  },
  {
    "avatar": "/avatar/av5.jpg",
    "text": '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
    "name": "- John Doe"
  },
  {
    "avatar": "/avatar/av6.jpg",
    "text": '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
    "name": "- Johnathan Doe"
  }
];



clients.forEach(client => {

  let user_item = document.createElement("DIV");

  user_item.innerHTML = `<div><img src="${client.avatar}"></div> <div><p>${client.text}</p> <span>${client.name}</span></div>`;
  document.querySelector('.row-3-in-2').appendChild(user_item);

  user_item.classList.add("user-client");

});





