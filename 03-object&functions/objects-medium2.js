
let users=[{id:1,
          username:"shybash"
        },
        {
            id:2,
            username:"mahendar"
        },
        {
            id:3,
            username:"naveen"
        },
        {
            id:4,
            username:"jagadeesh"
        }
];
const user=users.find(user=>user.id===3);
console.log(user);