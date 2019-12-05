const  colors = ['#A1E48C', '#8cb7e4', '#e4ae8c', '#97e480', '#77bb63','#9fc55a', '#ffd643', '#277d97', '#792797'];

export default [
  {
    setName: 'JS-BASIC',
    id: 'JS-BASIS',
    emoji: 'u1F3E8',  
    colors: ['#A1E48C', '#8cb7e4', '#e4ae8c',],
    cards: [
      { 
        name: 'Dom-tree', 
        id: 1,
        question:'scheme, - Autocorrection, - node-types, - walking the DOM',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim fringilla mauris, et scelerisque turpis hendrerit quis. Nullam eu sodales lorem, eget mattis massa. Fusce molestie blandit nunc eget pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque bibendum nec turpis a ullamcorper. Pellentesque tempor laoreet elit, in convallis purus malesuada et. Integer sit amet felis blandit, condimentum ligula nec, vestibulum sem. Mauris commodo massa odio, ut faucibus ante dapibus eu. Nulla facilisi. Quisque pellentesque magna sed sem convallis gravida. Mauris rhoncus massa aliquam diam iaculis congue. Nunc dignissim tempor lectus blandit pulvinar. Quisque lorem orci, porttitor eu orci pulvinar, scelerisque rhoncus neque. Maecenas ac dui commodo, laoreet purus sit amet, feugiat ipsum. Aliquam sagittis nisi vel dui posuere facilisis. Sed in viverra mi.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non convallis orci, vitae egestas nisl. In hac habitasse platea dictumst. Vestibulum dignissim mauris dolor, eget malesuada sapien aliquet eget. Integer feugiat ipsum magna, eget auctor turpis tincidunt vel. Phasellus pharetra at elit id dignissim. Vivamus in magna consectetur ipsum euismod ullamcorper quis sit amet leo. Nunc at nisi ullamcorper, sagittis orci vel, bibendum lectus. Cras eleifend luctus dolor, eget convallis nibh faucibus eget. Nunc imperdiet commodo nunc, ac mollis eros commodo eget. Fusce id felis eleifend ex rhoncus hendrerit accumsan id elit. Praesent pellentesque urna eget enim venenatis mattis. Vivamus maximus sit amet turpis non efficitur. Integer sit amet laoreet urna..`,
        difficulty: 1,
        subTheme: 'DOM',
        color: colors[2],
        opened: false,
      },
      { 
        name: 'Host environment', 
        id: 2,
        question:'what is it, - parts of it for js (in browser), - browser root object, - what is DOM'
        ,
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim fringilla mauris, et scelerisque turpis hendrerit quis. Nullam eu sodales lorem, eget mattis massa. Fusce molestie blandit nunc eget pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
        difficulty: 2,
        subTheme: 'DOM',
        opened: false,
        color: colors[1],
      },
      { 
        name: 'Task with object', 
        id: 3,
        question:'obj: {b:1, c: 2, d: 4} 2 ways to double numbers(and get new object double={}. Like mapping but on object)',
        answer: `1) for(let [item, num] of Object.entries(obj)) {double[item]=num*2} ;
                2) let a = Object.entries(obj) a= a.map(([key, value]) => [key, value*2]); doule=Object.fromEntries(a); `,
        difficulty: 3,
        subTheme: 'Obj',
        opened: false,
        color: colors[0],
      },
      { 
        name: 'Difficult', 
        id: 4,
        question:'obj: {b:1, c: 2, d: 4} 2 ways to double)',
        answer: `for(let [item, num] of Object.entries(obj)) {double[item]=num*2} ;
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim fringilla mauris, et scelerisque turpis hendrerit quis. Nullam eu sodales lorem, eget mattis massa. Fusce molestie blandit nunc eget pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus `,
        difficulty: 5,
        subTheme: 'Obj',
        opened: false,
        color: colors[0],
      },
      { 
        name: 'Generator composition', 
        id: 5,
        question:'explain',
        answer: `To 'embed' a*-s to each other. f* g1(s, e) {for(i=s, i <=e, i++) yield i; } 
                Его можно вкладывать с разными value of props in different generator to have общую структуру
                f* g2() {yield g1(a, b); yield g1(c, d)}
                All this will be 1 iterable [...g2()] `,
        difficulty: 4,
        subTheme: 'Generators',
        opened: false,
        color: colors[0],
      },    
      { 
        name: 'Dom-tree',
        id: 6, 
        question:'- scheme, - Autocorrection, - node-types, - walking the DOM',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim fringilla mauris, et scelerisque turpis hendrerit quis. Nullam eu sodales lorem, eget mattis massa. Fusce molestie blandit nunc eget pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque bibendum nec turpis a ullamcorper. Pellentesque tempor laoreet elit, in convallis purus malesuada et. Integer sit amet felis blandit, condimentum ligula nec, vestibulum sem. Mauris commodo massa odio, ut faucibus ante dapibus eu. Nulla facilisi. Quisque pellentesque magna sed sem convallis gravida. Mauris rhoncus massa aliquam diam iaculis congue. Nunc dignissim tempor lectus blandit pulvinar. Quisque lorem orci, porttitor eu orci pulvinar, scelerisque rhoncus neque. Maecenas ac dui commodo, laoreet purus sit amet, feugiat ipsum. Aliquam sagittis nisi vel dui posuere facilisis. Sed in viverra mi.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non convallis orci, vitae egestas nisl. In hac habitasse platea dictumst. Vestibulum dignissim mauris dolor, eget malesuada sapien aliquet eget. Integer feugiat ipsum magna, eget auctor turpis tincidunt vel. Phasellus pharetra at elit id dignissim. Vivamus in magna consectetur ipsum euismod ullamcorper quis sit amet leo. Nunc at nisi ullamcorper, sagittis orci vel, bibendum lectus. Cras eleifend luctus dolor, eget convallis nibh faucibus eget. Nunc imperdiet commodo nunc, ac mollis eros commodo eget. Fusce id felis eleifend ex rhoncus hendrerit accumsan id elit. Praesent pellentesque urna eget enim venenatis mattis. Vivamus maximus sit amet turpis non efficitur. Integer sit amet laoreet urna..`,
        difficulty: 1,
        subTheme: 'DOM',
        opened: false,
        color: colors[1],
      },
      // { 
      //   name: 'Host environment', 
      //   id: 7,
      //   question:'- what is it, - parts of it for js (in browser), - browser root object, - what is DOM',
      //   answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim fringilla mauris, et scelerisque turpis hendrerit quis. Nullam eu sodales lorem, eget mattis massa. Fusce molestie blandit nunc eget pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
      //   difficulty: 2,
      //   subTheme: 'DOM',
       //   opened: false,
      // },
      // { 
      //   name: 'Task with object', 
           //   id: 8,
      //   question:'- obj: {b:1, c: 2, d: 4} 2 ways to double numbers(and get new object double={}. Like mapping but on object)',
      //   answer: `1) for(let [item, num] of Object.entries(obj)) {double[item]=num*2} ;
      //           2) let a = Object.entries(obj) a= a.map(([key, value]) => [key, value*2]); doule=Object.fromEntries(a); `,
      //   difficulty: 3,
      //   subTheme: 'Obj',
      //   opened: false,
      // },
      // { 
      //   name: 'Dom-tree', 
      //   id: 9,
      //   question:'- scheme, - Autocorrection, - node-types, - walking the DOM',
      //   answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim fringilla mauris, et scelerisque turpis hendrerit quis. Nullam eu sodales lorem, eget mattis massa. Fusce molestie blandit nunc eget pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque bibendum nec turpis a ullamcorper. Pellentesque tempor laoreet elit, in convallis purus malesuada et. Integer sit amet felis blandit, condimentum ligula nec, vestibulum sem. Mauris commodo massa odio, ut faucibus ante dapibus eu. Nulla facilisi. Quisque pellentesque magna sed sem convallis gravida. Mauris rhoncus massa aliquam diam iaculis congue. Nunc dignissim tempor lectus blandit pulvinar. Quisque lorem orci, porttitor eu orci pulvinar, scelerisque rhoncus neque. Maecenas ac dui commodo, laoreet purus sit amet, feugiat ipsum. Aliquam sagittis nisi vel dui posuere facilisis. Sed in viverra mi.
      //   Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non convallis orci, vitae egestas nisl. In hac habitasse platea dictumst. Vestibulum dignissim mauris dolor, eget malesuada sapien aliquet eget. Integer feugiat ipsum magna, eget auctor turpis tincidunt vel. Phasellus pharetra at elit id dignissim. Vivamus in magna consectetur ipsum euismod ullamcorper quis sit amet leo. Nunc at nisi ullamcorper, sagittis orci vel, bibendum lectus. Cras eleifend luctus dolor, eget convallis nibh faucibus eget. Nunc imperdiet commodo nunc, ac mollis eros commodo eget. Fusce id felis eleifend ex rhoncus hendrerit accumsan id elit. Praesent pellentesque urna eget enim venenatis mattis. Vivamus maximus sit amet turpis non efficitur. Integer sit amet laoreet urna..`,
      //   difficulty: 1,
      //   subTheme: 'DOM',
      //   opened: false,
      // },
    ]
  },
];