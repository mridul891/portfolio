export default {
    name:"project",
    title:"project",
    type:"document",
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'description',
            title:'description',
            type:'string'
        },
        {
            name:'url',
            title:'url',
            type:'url'
        },
        {
            name:'Skillname',
            title:'Skillname',
            type:'string'
        },
        {
            name:'Skillname1',
            title:'Skillname1',
            type:'string'
        },
    ]
}